"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import {
  Sparkles,
  Star,
  Brain,
  Dna,
  Trophy,
  Flame,
  CalendarCheck,
  ArrowRight,
  Quote,
  Zap,
  Target,
} from "lucide-react";
import { useGameStore, SUBJECT_COLORS, SUBJECT_LABELS } from "@/store/gameState";
import { campaign } from "@/data/dailyPlan";
import { pharmCampaign } from "@/data/pharmDailyPlan";
import { allSkillNodes } from "@/data/skillTree";
import { allPharmNodes } from "@/data/pharmSkillTree";
import { achievements as pathAchievements, rarityColors } from "@/data/achievements";
import { pharmAchievements } from "@/data/pharmAchievements";
import { Icon as IconCmp } from "@/lib/icons";
import { PlayerStat } from "./PlayerStat";
import { XpBar } from "./XpBar";
import { RarityBadge } from "./RarityBadge";
import { cn } from "@/lib/utils";
import type { TabId } from "./Sidebar";

const PATH_QUOTES = [
  {
    text: "The coronary artery is the lifeblood of the myocardium — its occlusion is the patient's last chapter.",
    ref: "Robbins Basic Pathology 10e, Ch. 12 — Vascular Disease",
  },
  {
    text: "Granulomas are the body's poetry of frustration — macrophages that cannot finish what they started.",
    ref: "Robbins 10e, Ch. 3 — Chronic Inflammation",
  },
  {
    text: "Megaloblasts are not bigger cells making bigger haemoglobin — they are cells that cannot divide because they cannot make DNA.",
    ref: "Wintrobe's Clinical Hematology, 15e",
  },
  {
    text: "Cirrhosis is the liver's scarred silence — regeneration that has lost its architecture.",
    ref: "Robbins 10e, Ch. 18 — Liver & Biliary Tract",
  },
  {
    text: "The Philadelphia chromosome is not a destiny — it is a diagnosis written in DNA.",
    ref: "WHO Classification of Tumours — Hematolymphoid",
  },
];

const PHARM_QUOTES = [
  {
    text: "The dose makes the poison — every drug is a medicine at one dose and a toxin at another.",
    ref: "Paracelsus, quoted in Katzung 15e, Ch. 2",
  },
  {
    text: "Pharmacokinetics is what the body does to the drug; pharmacodynamics is what the drug does to the body.",
    ref: "Katzung 15e, Ch. 1 — Introduction",
  },
  {
    text: "Receptors are not switches — they are dimmers, tuned by affinity, efficacy, and the cell's own context.",
    ref: "Goodman & Gilman 14e, Ch. 3",
  },
  {
    text: "First-pass metabolism is the liver's gatekeeper — it explains why lignocaine is given IV, not by mouth.",
    ref: "K.D. Tripathi 8e, Ch. 1 — Pharmacokinetics",
  },
  {
    text: "Rational prescribing is not memorising doses — it is matching the right molecule to the right patient at the right time.",
    ref: "WHO Guide to Good Prescribing",
  },
];

interface CommandCenterProps {
  onNavigate: (tab: TabId) => void;
  onGenerateCase: () => void;
}

export function CommandCenter({ onNavigate, onGenerateCase }: CommandCenterProps) {
  const { playerName, streak, activeSubject, subjectState, completedSessions } = useGameStore(
    useShallow((s) => ({
      playerName: s.playerName,
      streak: s.streak,
      activeSubject: s.activeSubject,
      subjectState:
        s.activeSubject === "pathology" ? s.pathologyState : s.pharmacologyState,
      completedSessions:
        s.activeSubject === "pathology"
          ? s.pathologyState.completedSessions
          : s.pharmacologyState.completedSessions,
    }))
  );
  const getLevel = useGameStore((s) => s.getLevel);
  const getProgressToNextLevel = useGameStore((s) => s.getProgressToNextLevel);
  const completeSession = useGameStore((s) => s.completeSession);

  const accent = SUBJECT_COLORS[activeSubject];
  const subjectLabel = SUBJECT_LABELS[activeSubject];
  const level = getLevel();
  const progress = getProgressToNextLevel();
  const totalXP = subjectState.totalXP;
  const masteredNodes = subjectState.masteredNodes;
  const casesSolved = subjectState.casesSolved;
  const completedDays = subjectState.completedDays;
  const unlockedAchievements = subjectState.unlockedAchievements;

  const activeCampaign = activeSubject === "pathology" ? campaign : pharmCampaign;
  const allNodes = activeSubject === "pathology" ? allSkillNodes : allPharmNodes;
  const allAchievements = activeSubject === "pathology" ? pathAchievements : pharmAchievements;
  const QUOTES = activeSubject === "pathology" ? PATH_QUOTES : PHARM_QUOTES;

  const currentDay = useMemo(() => {
    const next = activeCampaign.find((d) => !completedDays.includes(d.day));
    return next ?? activeCampaign[activeCampaign.length - 1];
  }, [activeCampaign, completedDays]);

  const recentAchievements = useMemo(() => {
    return allAchievements
      .filter((a) => unlockedAchievements.includes(a.id))
      .slice(-3)
      .reverse();
  }, [allAchievements, unlockedAchievements]);

  const quote = useMemo(() => {
    return QUOTES[(currentDay.day - 1) % QUOTES.length];
  }, [QUOTES, currentDay.day]);

  const dayProgress = useMemo(() => {
    const total = currentDay.sessions.length;
    const done = currentDay.sessions.filter((s) => completedSessions.includes(s.id)).length;
    return { done, total };
  }, [currentDay, completedSessions]);

  const firstName = playerName?.split(" ").slice(-1)[0] || "Resident";
  const grandmasterTitle =
    activeSubject === "pathology" ? "Pathology Grandmaster" : "Pharmacology Grandmaster";

  return (
    <div className="flex flex-col gap-6">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-20 right-0 h-64 w-64 rounded-full blur-3xl"
            style={{ background: `${accent}22` }}
          />
          <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
        </div>
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: accent }}
            >
              <Sparkles className="h-3 w-3" />
              Day {currentDay.day} of 20 · {currentDay.phase}
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Welcome back,{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, ${accent}, #fbbf24, #d946ef)`,
                }}
              >
                Dr. {firstName}
              </span>
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              {currentDay.title}. Pick up where you left off — every node mastered brings you
              closer to the {grandmasterTitle} title.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {streak > 0 && (
                <div
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-orange-300"
                  style={{
                    background: "rgba(251, 146, 60, 0.12)",
                    border: "1px solid rgba(251, 146, 60, 0.4)",
                  }}
                >
                  <Flame className="h-4 w-4" />
                  {streak}-day streak — keep the flame alive
                </div>
              )}
              <div
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold text-emerald-300"
                style={{
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                }}
              >
                <Target className="h-4 w-4" />
                {dayProgress.done}/{dayProgress.total} sessions today
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm">
            <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Star className="h-3 w-3" style={{ color: accent }} /> Level {level}
              </span>
              <span>{totalXP.toLocaleString()} XP</span>
            </div>
            <XpBar value={progress} color={accent} height="lg" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={onGenerateCase}
                className="group inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold text-background transition-all hover:scale-[1.02]"
                style={{
                  background: `linear-gradient(to right, #d946ef, ${accent})`,
                  boxShadow: `0 0 20px ${accent}44`,
                }}
              >
                <Dna className="h-3.5 w-3.5" />
                Generate Random Case
              </button>
              <button
                onClick={() => onNavigate("skill-tree")}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-foreground transition-all hover:bg-white/10"
              >
                <Brain className="h-3.5 w-3.5" />
                View Skill Tree
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Stats grid */}
      <section
        aria-label="Player stats"
        className="grid grid-cols-2 gap-4 lg:grid-cols-4"
      >
        <PlayerStat
          icon={Zap}
          label="Total XP"
          value={totalXP.toLocaleString()}
          sub="Across all activities"
          accent="#fbbf24"
          delay={0.05}
        />
        <PlayerStat
          icon={Star}
          label="Level"
          value={level}
          sub={`${Math.round(progress)}% to next`}
          accent="#d946ef"
          delay={0.1}
        />
        <PlayerStat
          icon={Brain}
          label="Mastered Skills"
          value={`${masteredNodes.length}/${allNodes.length}`}
          sub={`${Math.round((masteredNodes.length / allNodes.length) * 100)}% complete`}
          accent="#10b981"
          delay={0.15}
        />
        <PlayerStat
          icon={Dna}
          label="Cases Solved"
          value={casesSolved}
          sub="From the randomizer"
          accent={accent}
          delay={0.2}
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Quest */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="glass relative overflow-hidden rounded-2xl p-5 lg:col-span-2"
        >
          <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="relative flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-300">
                <CalendarCheck className="h-4 w-4" />
                Today&apos;s Quest
              </div>
              <h2 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                Day {currentDay.day} · {currentDay.theme}
              </h2>
              <p className="text-xs text-muted-foreground">{currentDay.title}</p>
            </div>
            <button
              onClick={() => onNavigate("campaign")}
              className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-white/10"
            >
              Full campaign <ArrowRight className="h-3 w-3" />
            </button>
          </div>

          <div className="relative mt-4 space-y-2">
            {currentDay.sessions.map((session, idx) => {
              const done = completedSessions.includes(session.id);
              return (
                <motion.button
                  key={session.id}
                  type="button"
                  onClick={() => !done && completeSession(session.id, session.xpReward)}
                  disabled={done}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 + idx * 0.05 }}
                  className={cn(
                    "group flex w-full items-center gap-3 rounded-xl border p-3 text-left transition-all",
                    done
                      ? "border-emerald-500/40 bg-emerald-500/10"
                      : "border-white/10 bg-white/[0.03] hover:border-emerald-500/40 hover:bg-white/[0.06]"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-[10px] font-bold transition-colors",
                      done
                        ? "border-emerald-400 bg-emerald-500 text-background"
                        : "border-white/20 text-muted-foreground group-hover:border-emerald-400"
                    )}
                  >
                    {done ? "✓" : session.timeOfDay[0]}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "truncate text-sm font-medium",
                          done ? "text-muted-foreground line-through" : "text-foreground"
                        )}
                      >
                        {session.topic}
                      </span>
                      <span
                        className="shrink-0 text-[10px] font-semibold"
                        style={{ color: accent }}
                      >
                        +{session.xpReward} XP
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span>{session.timeOfDay}</span>
                      <span>·</span>
                      <span>{session.duration}h</span>
                      <span>·</span>
                      <span className="truncate">{session.activity.slice(0, 80)}…</span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {currentDay.bossBattle && (
            <div
              className="relative mt-3 overflow-hidden rounded-xl border p-3"
              style={{
                borderColor: "rgba(239, 68, 68, 0.4)",
                background: "rgba(239, 68, 68, 0.08)",
              }}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-300">
                <Trophy className="h-3.5 w-3.5" /> Boss Battle
              </div>
              <div className="mt-1 text-sm font-medium text-foreground">
                {currentDay.bossBattle.name}
              </div>
              <div className="text-[11px] text-muted-foreground">
                {currentDay.bossBattle.description}
              </div>
            </div>
          )}
        </motion.section>

        <div className="flex flex-col gap-6">
          {/* Recent achievements */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="glass rounded-2xl p-5"
          >
            <div className="mb-3 flex items-center justify-between">
              <div
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: accent }}
              >
                <Trophy className="h-4 w-4" /> Recent Achievements
              </div>
              <button
                onClick={() => onNavigate("achievements")}
                className="text-[10px] font-medium text-muted-foreground hover:text-foreground"
              >
                View all →
              </button>
            </div>
            {recentAchievements.length === 0 ? (
              <div className="rounded-xl border border-dashed border-white/10 p-4 text-center text-xs text-muted-foreground">
                No {subjectLabel.toLowerCase()} achievements unlocked yet. Master a skill to earn
                your first badge.
              </div>
            ) : (
              <ul className="space-y-2">
                {recentAchievements.map((a) => {
                  const color = rarityColors[a.rarity];
                  return (
                    <li
                      key={a.id}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-2.5"
                    >
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{
                          background: `${color}22`,
                          border: `1px solid ${color}55`,
                          color,
                          boxShadow: `0 0 12px ${color}44`,
                        }}
                      >
                        <IconCmp name={a.icon} className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium text-foreground">{a.name}</div>
                        <div className="truncate text-[10px] text-muted-foreground">
                          {a.description}
                        </div>
                      </div>
                      <RarityBadge rarity={a.rarity} withGlow={false} />
                    </li>
                  );
                })}
              </ul>
            )}
          </motion.section>

          {/* Motivational quote */}
          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="glass relative overflow-hidden rounded-2xl p-5"
          >
            <Quote
              className="pointer-events-none absolute -top-2 -left-2 h-16 w-16 text-amber-400/10"
              aria-hidden
            />
            <div className="relative">
              <div
                className="text-xs font-semibold uppercase tracking-widest text-fuchsia-300"
              >
                {activeSubject === "pathology" ? "Robbins Whisper" : "Katzung Whisper"}
              </div>
              <p className="mt-2 text-sm italic leading-relaxed text-foreground">
                “{quote.text}”
              </p>
              <div className="mt-2 text-[10px] text-muted-foreground">— {quote.ref}</div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
