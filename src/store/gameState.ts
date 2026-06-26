// ============================================================================
// GAME STATE — Zustand store with localStorage persistence.
// Now supports TWO subjects: pathology + pharmacology.
// Each subject has independent XP, level, mastered nodes, completed days,
// achievements, and cases solved — but shared player profile + streak.
// ============================================================================

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { allSkillNodes, skillTree } from "@/data/skillTree";
import { achievements } from "@/data/achievements";
import { allPharmNodes, pharmSkillTree } from "@/data/pharmSkillTree";
import { pharmAchievements } from "@/data/pharmAchievements";

export type Subject = "pathology" | "pharmacology";

export const SUBJECT_LABELS: Record<Subject, string> = {
  pathology: "Pathology",
  pharmacology: "Pharmacology"
};

export const SUBJECT_COLORS: Record<Subject, string> = {
  pathology: "#06b6d4",
  pharmacology: "#f59e0b"
};

export const SUBJECT_ICONS: Record<Subject, string> = {
  pathology: "Microscope",
  pharmacology: "Pill"
};

// XP required per level — same curve as before.
// Level N requires (N-1)*N/2 * 500 XP cumulative.
export const xpForLevel = (level: number): number => {
  if (level <= 1) return 0;
  return ((level - 1) * level / 2) * 500;
};

export const levelFromXP = (xp: number): number => {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  return level;
};

export interface SubjectState {
  totalXP: number;
  masteredNodes: string[];
  completedSessions: string[];
  completedDays: number[];
  unlockedAchievements: string[];
  casesSolved: number;
  nodeNotes: Record<string, string>;
}

export interface GameState {
  // Active subject — drives which content is shown
  activeSubject: Subject;

  // Per-subject state
  pathologyState: SubjectState;
  pharmacologyState: SubjectState;

  // Shared streak tracking (one streak across both subjects)
  lastActiveDate: string | null;
  streak: number;

  // Player profile
  playerName: string;
  avatarColor: string;

  // Actions — subject-agnostic dispatchers that act on activeSubject
  setActiveSubject: (s: Subject) => void;

  masterNode: (nodeId: string) => void;
  unmasterNode: (nodeId: string) => void;
  completeSession: (sessionId: string, xpReward: number) => void;
  completeDay: (day: number) => void;
  recordCaseSolved: () => void;
  setNodeNote: (nodeId: string, note: string) => void;

  // Player
  setPlayerName: (name: string) => void;
  setAvatarColor: (color: string) => void;

  // Streak
  registerActivity: () => void;
  resetProgress: () => void; // resets ACTIVE subject only

  // Computed selectors — return values for the ACTIVE subject
  getLevel: () => number;
  getTotalXP: () => number;
  getMasteredNodes: () => string[];
  getCompletedDays: () => number[];
  getCasesSolved: () => number;
  getXPIntoCurrentLevel: () => number;
  getXPForNextLevel: () => number;
  getProgressToNextLevel: () => number;

  // Achievement lookups (for active subject)
  getUnlockedAchievements: () => typeof achievements;
  getLockedAchievements: () => typeof achievements;
  checkNewAchievements: () => typeof achievements;

  // Subject-agnostic getters
  getSubjectState: (s: Subject) => SubjectState;
  getSubjectLevel: (s: Subject) => number;
  getSubjectXP: (s: Subject) => number;
}

const emptySubjectState: SubjectState = {
  totalXP: 0,
  masteredNodes: [],
  completedSessions: [],
  completedDays: [],
  unlockedAchievements: [],
  casesSolved: 0,
  nodeNotes: {}
};

const initialState = {
  activeSubject: "pathology" as Subject,
  pathologyState: { ...emptySubjectState },
  pharmacologyState: { ...emptySubjectState },
  lastActiveDate: null as string | null,
  streak: 0,
  playerName: "Dr. Pathology Resident",
  avatarColor: "#06b6d4"
};

// Helper: get the right achievement list for a subject
function getAchievementsForSubject(subject: Subject) {
  return subject === "pathology" ? achievements : pharmAchievements;
}

// Helper: get the right skill nodes for a subject
function getNodesForSubject(subject: Subject) {
  return subject === "pathology" ? allSkillNodes : allPharmNodes;
}

// Helper: get the right skill tree (branches) for a subject
function getTreeForSubject(subject: Subject) {
  return subject === "pathology" ? skillTree : pharmSkillTree;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setActiveSubject: (s) => set({ activeSubject: s }),

      getSubjectState: (s) => (s === "pathology" ? get().pathologyState : get().pharmacologyState),
      getSubjectLevel: (s) => levelFromXP(get().getSubjectState(s).totalXP),
      getSubjectXP: (s) => get().getSubjectState(s).totalXP,

      masterNode: (nodeId) => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        if (state.masteredNodes.includes(nodeId)) return;

        const node = getNodesForSubject(subject).find((n) => n.id === nodeId);
        if (!node) return;

        const newState: SubjectState = {
          ...state,
          masteredNodes: [...state.masteredNodes, nodeId],
          totalXP: state.totalXP + node.xp
        };

        set(subject === "pathology"
          ? { pathologyState: newState }
          : { pharmacologyState: newState });

        // Auto-check for new achievements on the active subject
        const newAch = get().checkNewAchievements();
        if (newAch.length > 0) {
          const updated = get().getSubjectState(subject);
          const finalState: SubjectState = {
            ...updated,
            unlockedAchievements: [...updated.unlockedAchievements, ...newAch.map((a) => a.id)],
            totalXP: updated.totalXP + newAch.reduce((sum, a) => sum + a.xpReward, 0)
          };
          set(subject === "pathology"
            ? { pathologyState: finalState }
            : { pharmacologyState: finalState });
        }
      },

      unmasterNode: (nodeId) => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        const node = getNodesForSubject(subject).find((n) => n.id === nodeId);
        if (!node) return;
        const newState: SubjectState = {
          ...state,
          masteredNodes: state.masteredNodes.filter((id) => id !== nodeId),
          totalXP: Math.max(0, state.totalXP - node.xp)
        };
        set(subject === "pathology"
          ? { pathologyState: newState }
          : { pharmacologyState: newState });
      },

      completeSession: (sessionId, xpReward) => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        if (state.completedSessions.includes(sessionId)) return;
        const newState: SubjectState = {
          ...state,
          completedSessions: [...state.completedSessions, sessionId],
          totalXP: state.totalXP + xpReward
        };
        set(subject === "pathology"
          ? { pathologyState: newState }
          : { pharmacologyState: newState });

        const newAch = get().checkNewAchievements();
        if (newAch.length > 0) {
          const updated = get().getSubjectState(subject);
          const finalState: SubjectState = {
            ...updated,
            unlockedAchievements: [...updated.unlockedAchievements, ...newAch.map((a) => a.id)],
            totalXP: updated.totalXP + newAch.reduce((sum, a) => sum + a.xpReward, 0)
          };
          set(subject === "pathology"
            ? { pathologyState: finalState }
            : { pharmacologyState: finalState });
        }
      },

      completeDay: (day) => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        if (state.completedDays.includes(day)) return;
        const newState: SubjectState = {
          ...state,
          completedDays: [...state.completedDays, day]
        };
        set(subject === "pathology"
          ? { pathologyState: newState }
          : { pharmacologyState: newState });

        const newAch = get().checkNewAchievements();
        if (newAch.length > 0) {
          const updated = get().getSubjectState(subject);
          const finalState: SubjectState = {
            ...updated,
            unlockedAchievements: [...updated.unlockedAchievements, ...newAch.map((a) => a.id)],
            totalXP: updated.totalXP + newAch.reduce((sum, a) => sum + a.xpReward, 0)
          };
          set(subject === "pathology"
            ? { pathologyState: finalState }
            : { pharmacologyState: finalState });
        }
      },

      recordCaseSolved: () => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        const newState: SubjectState = {
          ...state,
          casesSolved: state.casesSolved + 1
        };
        set(subject === "pathology"
          ? { pathologyState: newState }
          : { pharmacologyState: newState });

        const newAch = get().checkNewAchievements();
        if (newAch.length > 0) {
          const updated = get().getSubjectState(subject);
          const finalState: SubjectState = {
            ...updated,
            unlockedAchievements: [...updated.unlockedAchievements, ...newAch.map((a) => a.id)],
            totalXP: updated.totalXP + newAch.reduce((sum, a) => sum + a.xpReward, 0)
          };
          set(subject === "pathology"
            ? { pathologyState: finalState }
            : { pharmacologyState: finalState });
        }
      },

      setNodeNote: (nodeId, note) => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        const newState: SubjectState = {
          ...state,
          nodeNotes: { ...state.nodeNotes, [nodeId]: note }
        };
        set(subject === "pathology"
          ? { pathologyState: newState }
          : { pharmacologyState: newState });
      },

      setPlayerName: (name) => set({ playerName: name }),
      setAvatarColor: (color) => set({ avatarColor: color }),

      registerActivity: () => {
        const today = new Date().toISOString().slice(0, 10);
        const lastDate = get().lastActiveDate;
        if (lastDate === today) return;
        if (lastDate) {
          const last = new Date(lastDate);
          const diff = Math.floor((new Date(today).getTime() - last.getTime()) / (1000 * 60 * 60 * 24));
          if (diff === 1) {
            set({ streak: get().streak + 1, lastActiveDate: today });
          } else if (diff > 1) {
            set({ streak: 1, lastActiveDate: today });
          }
        } else {
          set({ streak: 1, lastActiveDate: today });
        }
        const newAch = get().checkNewAchievements();
        if (newAch.length > 0) {
          const subject = get().activeSubject;
          const updated = get().getSubjectState(subject);
          const finalState: SubjectState = {
            ...updated,
            unlockedAchievements: [...updated.unlockedAchievements, ...newAch.map((a) => a.id)],
            totalXP: updated.totalXP + newAch.reduce((sum, a) => sum + a.xpReward, 0)
          };
          set(subject === "pathology"
            ? { pathologyState: finalState }
            : { pharmacologyState: finalState });
        }
      },

      resetProgress: () => {
        const subject = get().activeSubject;
        set(subject === "pathology"
          ? { pathologyState: { ...emptySubjectState } }
          : { pharmacologyState: { ...emptySubjectState } });
      },

      // Computed selectors for active subject
      getLevel: () => levelFromXP(get().getTotalXP()),
      getTotalXP: () => get().getSubjectState(get().activeSubject).totalXP,
      getMasteredNodes: () => get().getSubjectState(get().activeSubject).masteredNodes,
      getCompletedDays: () => get().getSubjectState(get().activeSubject).completedDays,
      getCasesSolved: () => get().getSubjectState(get().activeSubject).casesSolved,

      getXPIntoCurrentLevel: () => {
        const level = get().getLevel();
        return get().getTotalXP() - xpForLevel(level);
      },

      getXPForNextLevel: () => {
        const level = get().getLevel();
        return xpForLevel(level + 1) - xpForLevel(level);
      },

      getProgressToNextLevel: () => {
        const into = get().getXPIntoCurrentLevel();
        const need = get().getXPForNextLevel();
        return need > 0 ? (into / need) * 100 : 0;
      },

      getUnlockedAchievements: () => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        const all = getAchievementsForSubject(subject);
        return all.filter((a) => state.unlockedAchievements.includes(a.id));
      },

      getLockedAchievements: () => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        const all = getAchievementsForSubject(subject);
        return all.filter((a) => !state.unlockedAchievements.includes(a.id));
      },

      checkNewAchievements: () => {
        const subject = get().activeSubject;
        const state = get().getSubjectState(subject);
        const all = getAchievementsForSubject(subject);
        const tree = getTreeForSubject(subject);

        const input = {
          totalXP: state.totalXP,
          level: levelFromXP(state.totalXP),
          masteredNodes: state.masteredNodes,
          completedDays: state.completedDays,
          casesSolved: state.casesSolved,
          streak: get().streak,
          perfectDays: [],
          branchesCompleted: tree
            .filter((b) => b.nodes.every((n) => state.masteredNodes.includes(n.id)))
            .map((b) => b.id)
        };

        return all.filter(
          (a) => !state.unlockedAchievements.includes(a.id) && a.check(input)
        );
      }
    }),
    {
      name: "pathology-game-state-v2",
      version: 2,
      // Migrate v1 → v2: copy old flat fields into pathologyState
      migrate: (persistedState: any, version: number) => {
        if (version < 2 && persistedState) {
          // Old shape had flat: totalXP, masteredNodes, etc.
          const old = persistedState as any;
          return {
            ...old,
            activeSubject: "pathology" as Subject,
            pathologyState: {
              totalXP: old.totalXP ?? 0,
              masteredNodes: old.masteredNodes ?? [],
              completedSessions: old.completedSessions ?? [],
              completedDays: old.completedDays ?? [],
              unlockedAchievements: old.unlockedAchievements ?? [],
              casesSolved: old.casesSolved ?? 0,
              nodeNotes: old.nodeNotes ?? {}
            },
            pharmacologyState: { ...emptySubjectState }
          };
        }
        return persistedState;
      }
    }
  )
);
