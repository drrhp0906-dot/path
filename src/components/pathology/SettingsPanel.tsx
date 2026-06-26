"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import {
  Settings,
  User,
  Palette,
  RotateCcw,
  Save,
  Stethoscope,
  ShieldCheck,
  TriangleAlert,
  Microscope,
  Pill,
} from "lucide-react";
import {
  useGameStore,
  SUBJECT_LABELS,
  SUBJECT_COLORS,
  type Subject,
} from "@/store/gameState";
import { allSkillNodes } from "@/data/skillTree";
import { allPharmNodes } from "@/data/pharmSkillTree";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

const AVATAR_COLORS = [
  "#06b6d4", // cyan
  "#10b981", // emerald
  "#84cc16", // lime
  "#fbbf24", // gold
  "#f97316", // orange
  "#ef4444", // red
  "#d946ef", // magenta
  "#a855f7", // violet
];

export function SettingsPanel() {
  const {
    playerName,
    avatarColor,
    streak,
    activeSubject,
    pathologyState,
    pharmacologyState,
  } = useGameStore(
    useShallow((s) => ({
      playerName: s.playerName,
      avatarColor: s.avatarColor,
      streak: s.streak,
      activeSubject: s.activeSubject,
      pathologyState: s.pathologyState,
      pharmacologyState: s.pharmacologyState,
    }))
  );
  const setPlayerName = useGameStore((s) => s.setPlayerName);
  const setAvatarColor = useGameStore((s) => s.setAvatarColor);
  const resetProgress = useGameStore((s) => s.resetProgress);
  const getSubjectLevel = useGameStore((s) => s.getSubjectLevel);

  const [draftName, setDraftName] = useState(playerName);
  const [saved, setSaved] = useState(false);

  const onSave = () => {
    setPlayerName(draftName.trim() || "Dr. Resident");
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  const initial = (playerName?.trim()?.[0] ?? "D").toUpperCase();
  const subjectLabel = SUBJECT_LABELS[activeSubject];
  const subjectColor = SUBJECT_COLORS[activeSubject];

  // Build a compact dual-subject progress table
  const subjectRows: {
    subject: Subject;
    state: typeof pathologyState;
    totalNodes: number;
    icon: typeof Microscope;
  }[] = [
    {
      subject: "pathology",
      state: pathologyState,
      totalNodes: allSkillNodes.length,
      icon: Microscope,
    },
    {
      subject: "pharmacology",
      state: pharmacologyState,
      totalNodes: allPharmNodes.length,
      icon: Pill,
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
          <Settings className="h-6 w-6" style={{ color: subjectColor }} />
          Settings
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Customise your player profile (shared across both subjects) and review your per-subject
          progress.
        </p>
      </motion.div>

      {/* Player profile */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="glass relative overflow-hidden rounded-2xl p-5"
      >
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
          <User className="h-4 w-4" /> Player Profile (Shared)
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold"
            style={{
              background: `${avatarColor}22`,
              color: avatarColor,
              border: `2px solid ${avatarColor}`,
              boxShadow: `0 0 22px ${avatarColor}55`,
            }}
          >
            {initial}
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-xs font-medium text-muted-foreground">
              Display name
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                placeholder="Dr. Resident"
                className="glass border-white/10 bg-white/[0.04] text-foreground"
                maxLength={48}
              />
              <Button
                onClick={onSave}
                className="gap-1.5 bg-gradient-to-r from-amber-400 to-fuchsia-500 text-background hover:shadow-[0_0_18px_rgba(217,70,239,0.55)]"
              >
                <Save className="h-4 w-4" /> {saved ? "Saved!" : "Save"}
              </Button>
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">
              Shown in the sidebar and Command Center greeting across both subjects.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Avatar color */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass relative overflow-hidden rounded-2xl p-5"
      >
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-300">
          <Palette className="h-4 w-4" /> Avatar Colour (Shared)
        </div>
        <div className="flex flex-wrap gap-3">
          {AVATAR_COLORS.map((c) => {
            const active = c === avatarColor;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setAvatarColor(c)}
                aria-label={`Choose color ${c}`}
                aria-pressed={active}
                className={cn(
                  "relative h-10 w-10 rounded-full transition-all",
                  active ? "scale-110" : "hover:scale-105"
                )}
                style={{
                  background: c,
                  border: active ? "3px solid #f8fafc" : "2px solid rgba(255,255,255,0.2)",
                  boxShadow: active ? `0 0 22px ${c}` : `0 0 8px ${c}66`,
                }}
              >
                {active && (
                  <span className="absolute inset-0 flex items-center justify-center text-background">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </motion.section>

      {/* Dual-subject progress overview */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="glass relative overflow-hidden rounded-2xl p-5"
      >
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-300">
          <ShieldCheck className="h-4 w-4" /> Progress (Both Subjects)
        </div>
        <div className="flex flex-col gap-3">
          {subjectRows.map(({ subject, state, totalNodes, icon: Icon }) => {
            const isActive = subject === activeSubject;
            const color = SUBJECT_COLORS[subject];
            const level = getSubjectLevel(subject);
            return (
              <div
                key={subject}
                className={cn(
                  "rounded-xl border p-3 transition-all",
                  isActive ? "bg-white/[0.04]" : "border-white/10 bg-white/[0.02]"
                )}
                style={
                  isActive
                    ? { borderColor: `${color}55`, boxShadow: `0 0 16px ${color}22` }
                    : undefined
                }
              >
                <div className="flex items-center gap-2">
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                    style={{
                      background: `${color}22`,
                      color,
                      border: `1px solid ${color}55`,
                    }}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm font-semibold" style={{ color: isActive ? color : undefined }}>
                    {SUBJECT_LABELS[subject]}
                  </span>
                  {isActive && (
                    <span
                      className="ml-auto rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest"
                      style={{ background: `${color}22`, color }}
                    >
                      Active
                    </span>
                  )}
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Level</div>
                    <div className="text-lg font-bold" style={{ color }}>{level}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Total XP</div>
                    <div className="text-lg font-bold text-amber-300">{state.totalXP.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Mastered</div>
                    <div className="text-lg font-bold text-emerald-300">
                      {state.masteredNodes.length}/{totalNodes}
                    </div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Cases</div>
                    <div className="text-lg font-bold text-fuchsia-300">{state.casesSolved}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          Current streak (shared):{" "}
          <span className="text-orange-300">{streak} day{streak === 1 ? "" : "s"}</span>
        </div>
      </motion.section>

      {/* Danger zone */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-red-500/5 p-5"
      >
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-300">
          <TriangleAlert className="h-4 w-4" /> Danger Zone
        </div>
        <p className="text-sm text-muted-foreground">
          Reset all <span className="font-semibold text-foreground">{subjectLabel}</span> progress —
          XP, mastered skills, completed days, achievements, and cases solved. The other subject
          remains untouched. This cannot be undone.
        </p>
        <div className="mt-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 border-red-500/40 bg-red-500/10 text-red-300 hover:bg-red-500/20 hover:text-red-200"
              >
                <RotateCcw className="h-4 w-4" /> Reset {subjectLabel} Progress
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="border-red-500/30 bg-background/95 backdrop-blur-xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-foreground">
                  Reset {subjectLabel} progress?
                </AlertDialogTitle>
                <AlertDialogDescription className="text-muted-foreground">
                  This will reset all your <strong>{subjectLabel}</strong> progress —
                  including {pathologyState.totalXP.toLocaleString()} XP,{" "}
                  {pathologyState.masteredNodes.length} mastered skills,{" "}
                  {pathologyState.completedDays.length} completed days, and all unlocked
                  achievements. Your <strong>{SUBJECT_LABELS[activeSubject === "pathology" ? "pharmacology" : "pathology"]}</strong> progress
                  and your shared player profile will be preserved. This action is irreversible.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="border-white/10 bg-white/5 text-foreground hover:bg-white/10">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => resetProgress()}
                  className="bg-red-500 text-background hover:bg-red-600"
                >
                  Yes, reset {subjectLabel}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="glass relative overflow-hidden rounded-2xl p-5"
      >
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
          <Stethoscope className="h-4 w-4" /> About
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Built for medical residents preparing for university exams. Pathology content aligned with{" "}
          <span className="text-foreground">Robbins Basic Pathology 10e</span>,{" "}
          <span className="text-foreground">WHO</span>,{" "}
          <span className="text-foreground">ASH</span>, and{" "}
          <span className="text-foreground">AABB</span> guidelines. Pharmacology content aligned with{" "}
          <span className="text-foreground">Katzung 15e</span>,{" "}
          <span className="text-foreground">Goodman &amp; Gilman</span>,{" "}
          <span className="text-foreground">K.D. Tripathi</span>, and the{" "}
          <span className="text-foreground">WHO Model List of Essential Medicines</span>. Each
          subject has its own 20-day, 200-hour mastery campaign.
        </p>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Pathology Ascension / Pharmacology Ascension · A Medical RPG · v2.0
        </p>
      </motion.section>
    </div>
  );
}
