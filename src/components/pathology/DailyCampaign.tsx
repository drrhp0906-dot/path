"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import {
  ChevronDown,
  Check,
  Lock,
  Trophy,
  Clock,
  Sun,
  Sunset,
  Moon,
  CalendarRange,
  Swords,
} from "lucide-react";
import { campaign, type DayQuest } from "@/data/dailyPlan";
import { pharmCampaign } from "@/data/pharmDailyPlan";
import { useGameStore, SUBJECT_COLORS, SUBJECT_LABELS } from "@/store/gameState";
import { Icon as IconCmp } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Combined phase metadata for both pathology + pharmacology campaigns.
const PHASE_META: Record<string, { color: string; tagline: string }> = {
  // Shared
  Foundation: {
    color: "#f97316",
    tagline: "Foundation principles — the bedrock of every systemic topic.",
  },
  Integration: {
    color: "#a855f7",
    tagline: "Cross-system revision and full mock papers.",
  },
  "Final Boss": {
    color: "#fbbf24",
    tagline: "The university examination — closed-book, time-limited.",
  },
  // Pathology-only
  Hematopathology: {
    color: "#dc2626",
    tagline: "Anemias, leukemias, blood banking — Robbins chapters 11–14.",
  },
  Systemic: {
    color: "#10b981",
    tagline: "Cardiovascular, respiratory, GI, renal, endocrine, CNS, infection.",
  },
  "Lab Mastery": {
    color: "#06b6d4",
    tagline: "FNAC, frozen section, stains, PAP smear, semen analysis.",
  },
  // Pharmacology-only
  CNS: {
    color: "#8b5cf6",
    tagline: "Sedatives, antiepileptics, antipsychotics, opioids, anaesthetics.",
  },
  CVS: {
    color: "#ef4444",
    tagline: "Antihypertensives, antianginals, antifailure, antiarrhythmics.",
  },
  "CVS & Blood": {
    color: "#dc2626",
    tagline: "CVS drugs + anticoagulants, antiplatelets, antianaemics.",
  },
  Endocrine: {
    color: "#0ea5e9",
    tagline: "Insulin, oral hypoglycaemics, steroids, thyroid, OC pills.",
  },
  "GIT & Endocrine": {
    color: "#0ea5e9",
    tagline: "PPIs, antiemetics, laxatives + endocrine pharmacology.",
  },
  Antimicrobial: {
    color: "#10b981",
    tagline: "Antibiotics, antifungals, antivirals, antimalarials, anti-TB.",
  },
  Consolidation: {
    color: "#06b6d4",
    tagline: "Revision of weak topics, AUT charts, interaction tables.",
  },
  "Final Sprint": {
    color: "#fbbf24",
    tagline: "Rapid revision + 5 mock papers + clinical case randomizer.",
  },
};

const TIME_ICON = {
  Morning: Sun,
  Afternoon: Sunset,
  Evening: Moon,
} as const;

function PhaseHeader({ phase, days }: { phase: string; days: DayQuest[] }) {
  const meta = PHASE_META[phase] ?? { color: "#94a3b8", tagline: "" };
  const totalXp = days.reduce(
    (sum, d) => sum + d.sessions.reduce((s, q) => s + q.xpReward, 0) + (d.bossBattle?.rewardXp ?? 0),
    0
  );
  return (
    <div className="sticky top-0 z-10 -mx-1 my-2 px-1 py-2 backdrop-blur-md">
      <div
        className="glass-strong flex flex-col gap-1 rounded-2xl border-l-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: meta.color }}
      >
        <div>
          <div className="flex items-center gap-2">
            <span
              className="text-[10px] font-bold uppercase tracking-widest"
              style={{ color: meta.color }}
            >
              Phase
            </span>
            <h2 className="text-lg font-bold tracking-tight text-foreground">{phase}</h2>
            <span className="text-xs text-muted-foreground">
              · Days {days[0].day}–{days[days.length - 1].day}
            </span>
          </div>
          <p className="text-xs text-muted-foreground">{meta.tagline}</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-muted-foreground">{days.length} days</span>
          <span className="text-amber-300">+{totalXp.toLocaleString()} XP</span>
        </div>
      </div>
    </div>
  );
}

function DayCard({ day, accent }: { day: DayQuest; accent: string }) {
  const [open, setOpen] = useState(false);
  const { completedDays, completedSessions } = useGameStore(
    useShallow((s) => {
      const state = s.activeSubject === "pathology" ? s.pathologyState : s.pharmacologyState;
      return {
        completedDays: state.completedDays,
        completedSessions: state.completedSessions,
      };
    })
  );
  const completeDay = useGameStore((s) => s.completeDay);
  const completeSession = useGameStore((s) => s.completeSession);
  const isDone = completedDays.includes(day.day);
  const sessionsDone = day.sessions.filter((s) => completedSessions.includes(s.id)).length;
  const totalSessions = day.sessions.length;
  const totalXp =
    day.sessions.reduce((s, q) => s + q.xpReward, 0) + (day.bossBattle?.rewardXp ?? 0);
  const meta = PHASE_META[day.phase] ?? { color: "#94a3b8" };
  const DayIcon = day.icon;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "glass relative overflow-hidden rounded-2xl border-l-4 transition-all",
        isDone ? "border-emerald-500" : ""
      )}
      style={{
        borderLeftColor: isDone ? "#10b981" : meta.color,
        boxShadow: isDone ? "0 0 24px rgba(16,185,129,0.18)" : undefined,
      }}
    >
      {/* Header row */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 p-4 text-left"
      >
        <div
          className="relative flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl"
          style={{
            background: isDone ? "rgba(16,185,129,0.18)" : `${meta.color}22`,
            border: `1px solid ${isDone ? "#10b981" : `${meta.color}55`}`,
            color: isDone ? "#10b981" : meta.color,
            boxShadow: isDone ? "0 0 14px rgba(16,185,129,0.4)" : `0 0 12px ${meta.color}33`,
          }}
        >
          {isDone ? (
            <Check className="h-5 w-5" strokeWidth={3} />
          ) : (
            <IconCmp name={DayIcon} className="h-5 w-5" />
          )}
          <span
            className="absolute -top-1.5 -left-1.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-background"
            style={{ background: meta.color }}
          >
            {day.day}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-bold tracking-tight text-foreground">
              {day.title}
            </h3>
            <span
              className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
              style={{
                background: `${meta.color}22`,
                color: meta.color,
                border: `1px solid ${meta.color}55`,
              }}
            >
              {day.theme}
            </span>
          </div>
          <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3 w-3" /> {day.totalHours} hrs
            </span>
            <span className="inline-flex items-center gap-1 text-amber-300">
              +{totalXp.toLocaleString()} XP
            </span>
            <span className="inline-flex items-center gap-1">
              <CalendarRange className="h-3 w-3" /> {sessionsDone}/{totalSessions} sessions
            </span>
            {day.bossBattle && (
              <span className="inline-flex items-center gap-1 text-red-300">
                <Swords className="h-3 w-3" /> Boss Battle
              </span>
            )}
          </div>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 border-t border-white/5 p-4">
              {day.sessions.map((session) => {
                const sDone = completedSessions.includes(session.id);
                const TimeIcon = TIME_ICON[session.timeOfDay];
                return (
                  <button
                    key={session.id}
                    type="button"
                    onClick={() => !sDone && completeSession(session.id, session.xpReward)}
                    disabled={sDone}
                    className={cn(
                      "group flex w-full items-start gap-3 rounded-xl border p-3 text-left transition-all",
                      sDone
                        ? "border-emerald-500/40 bg-emerald-500/8"
                        : "border-white/10 bg-white/[0.03] hover:border-amber-400/40 hover:bg-white/[0.06]"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                        sDone
                          ? "bg-emerald-500 text-background"
                          : "border border-white/15 text-muted-foreground"
                      )}
                    >
                      {sDone ? <Check className="h-4 w-4" /> : <TimeIcon className="h-4 w-4" />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "truncate text-sm font-medium",
                            sDone ? "text-muted-foreground line-through" : "text-foreground"
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
                      <div className="text-[11px] text-muted-foreground">
                        {session.timeOfDay} · {session.duration}h
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {session.activity}
                      </div>
                    </div>
                  </button>
                );
              })}

              {day.bossBattle && (
                <div
                  className="rounded-xl border p-3"
                  style={{
                    borderColor: "rgba(239, 68, 68, 0.45)",
                    background: "rgba(239, 68, 68, 0.08)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-300">
                      <Trophy className="h-3.5 w-3.5" /> {day.bossBattle.name}
                    </div>
                    <span className="text-[10px] font-bold text-amber-300">
                      +{day.bossBattle.rewardXp} XP
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {day.bossBattle.description}
                  </p>
                </div>
              )}

              <div className="flex justify-end pt-1">
                <Button
                  disabled={isDone}
                  onClick={() => completeDay(day.day)}
                  className={cn(
                    "gap-1.5 text-background",
                    isDone
                      ? "border border-emerald-500/40 bg-emerald-500/15 text-emerald-300"
                      : "bg-gradient-to-r from-amber-400 to-fuchsia-500 hover:shadow-[0_0_18px_rgba(217,70,239,0.55)]"
                  )}
                >
                  {isDone ? (
                    <>
                      <Check className="h-4 w-4" /> Day Completed
                    </>
                  ) : (
                    <>
                      <Trophy className="h-4 w-4" /> Mark Day {day.day} Complete
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function DailyCampaign() {
  const activeSubject = useGameStore((s) => s.activeSubject);
  const completedDays = useGameStore(
    useShallow((s) =>
      (s.activeSubject === "pathology" ? s.pathologyState : s.pharmacologyState).completedDays
    )
  );
  const accent = SUBJECT_COLORS[activeSubject];
  const subjectLabel = SUBJECT_LABELS[activeSubject];
  const activeCampaign = activeSubject === "pathology" ? campaign : pharmCampaign;

  const grouped = useMemo(() => {
    const map = new Map<string, DayQuest[]>();
    for (const day of activeCampaign) {
      const arr = map.get(day.phase) ?? [];
      arr.push(day);
      map.set(day.phase, arr);
    }
    return Array.from(map.entries());
  }, [activeCampaign]);

  const totalDone = completedDays.length;

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
          <CalendarRange className="h-6 w-6" style={{ color: accent }} />
          20-Day Campaign
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A 200-hour {subjectLabel.toLowerCase()} mastery roadmap — 10 hrs/day across{" "}
          {grouped.length} phases. Click a day to expand its sessions. Tap any session to mark
          it complete and earn XP.
        </p>
        <div className="mt-3">
          <div className="mb-1 flex justify-between text-xs text-muted-foreground">
            <span>Campaign progress</span>
            <span style={{ color: accent }}>{totalDone}/20 days</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: `linear-gradient(90deg, ${accent}, #d946ef, #10b981)`,
              }}
              initial={{ width: 0 }}
              animate={{ width: `${(totalDone / 20) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col">
        {grouped.map(([phase, days]) => (
          <div key={phase}>
            <PhaseHeader phase={phase} days={days} />
            <div className="space-y-3">
              {days.map((day) => (
                <DayCard key={day.day} day={day} accent={accent} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
