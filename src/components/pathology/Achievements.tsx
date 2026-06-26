"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import { Trophy, Lock, Sparkles, Check } from "lucide-react";
import { achievements as pathAchievements, rarityColors, type Achievement } from "@/data/achievements";
import { pharmAchievements } from "@/data/pharmAchievements";
import { useGameStore, SUBJECT_COLORS, SUBJECT_LABELS } from "@/store/gameState";
import { Icon as IconCmp } from "@/lib/icons";
import { RarityBadge } from "./RarityBadge";
import { cn } from "@/lib/utils";

const RARITY_ORDER: Achievement["rarity"][] = [
  "Legendary",
  "Epic",
  "Rare",
  "Common",
];

function AchievementCard({
  achievement,
  unlocked,
  index,
}: {
  achievement: Achievement;
  unlocked: boolean;
  index: number;
}) {
  const color = rarityColors[achievement.rarity];
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.03, 0.4) }}
      whileHover={{ scale: 1.03, y: -2 }}
      className={cn(
        "glass relative flex flex-col gap-3 overflow-hidden rounded-2xl p-4 transition-all",
        unlocked && "glow-gold"
      )}
      style={{
        border: `1px solid ${unlocked ? color : "rgba(255,255,255,0.08)"}`,
        opacity: unlocked ? 1 : 0.55,
        filter: unlocked ? undefined : "grayscale(0.6)",
        boxShadow: unlocked ? `0 0 22px ${color}44` : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-30 blur-3xl"
        style={{ background: color }}
      />
      <div className="relative flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: `${color}22`,
            border: `1px solid ${color}66`,
            color,
            boxShadow: unlocked ? `0 0 18px ${color}55` : undefined,
          }}
        >
          {unlocked ? <IconCmp name={achievement.icon} className="h-6 w-6" /> : <Lock className="h-5 w-5" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h4 className="truncate text-sm font-bold tracking-tight text-foreground">
              {achievement.name}
            </h4>
          </div>
          <div className="mt-0.5">
            <RarityBadge rarity={achievement.rarity} withGlow={unlocked} />
          </div>
        </div>
        {unlocked && (
          <span
            className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
            style={{
              background: "rgba(16,185,129,0.15)",
              color: "#10b981",
              border: "1px solid rgba(16,185,129,0.4)",
            }}
          >
            <Check className="h-2.5 w-2.5" /> Unlocked
          </span>
        )}
      </div>
      <p className="relative text-xs leading-relaxed text-muted-foreground">
        {achievement.description}
      </p>
      <div className="relative mt-auto flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
          {achievement.category}
        </span>
        <span
          className="text-xs font-bold"
          style={{ color }}
        >
          +{achievement.xpReward} XP
        </span>
      </div>
      {!unlocked && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-[1px]"
          aria-hidden
        >
          <span className="rounded-full border border-white/10 bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Lock className="mr-1 inline h-3 w-3" /> Locked
          </span>
        </div>
      )}
    </motion.div>
  );
}

function RarityGroup({
  rarity,
  list,
  unlockedIds,
}: {
  rarity: Achievement["rarity"];
  list: Achievement[];
  unlockedIds: Set<string>;
}) {
  const color = rarityColors[rarity];
  const unlockedInGroup = list.filter((a) => unlockedIds.has(a.id)).length;
  return (
    <section>
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="h-3 w-3 rounded-full"
            style={{ background: color, boxShadow: `0 0 12px ${color}` }}
          />
          <h2
            className="text-lg font-bold tracking-tight"
            style={{ color }}
          >
            {rarity}
          </h2>
          <span className="text-xs text-muted-foreground">
            ({unlockedInGroup}/{list.length} unlocked)
          </span>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {list.map((a, i) => (
          <AchievementCard
            key={a.id}
            achievement={a}
            unlocked={unlockedIds.has(a.id)}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  const { activeSubject, unlockedAchievements, totalXP } = useGameStore(
    useShallow((s) => {
      const state =
        s.activeSubject === "pathology" ? s.pathologyState : s.pharmacologyState;
      return {
        activeSubject: s.activeSubject,
        unlockedAchievements: state.unlockedAchievements,
        totalXP: state.totalXP,
      };
    })
  );
  const accent = SUBJECT_COLORS[activeSubject];
  const subjectLabel = SUBJECT_LABELS[activeSubject];

  const unlockedIds = useMemo(
    () => new Set(unlockedAchievements),
    [unlockedAchievements]
  );

  const allAchievements =
    activeSubject === "pathology" ? pathAchievements : pharmAchievements;

  const grouped = useMemo(() => {
    const map = new Map<Achievement["rarity"], Achievement[]>();
    for (const r of RARITY_ORDER) map.set(r, []);
    for (const a of allAchievements) {
      map.get(a.rarity)?.push(a);
    }
    return RARITY_ORDER.map((r) => ({
      rarity: r,
      list: map.get(r) ?? [],
    })).filter((g) => g.list.length > 0);
  }, [allAchievements]);

  const unlockedCount = unlockedIds.size;
  const achievementXP = useMemo(() => {
    return allAchievements
      .filter((a) => unlockedIds.has(a.id))
      .reduce((sum, a) => sum + a.xpReward, 0);
  }, [allAchievements, unlockedIds]);

  const progress = (unlockedCount / allAchievements.length) * 100;

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
          <Trophy className="h-6 w-6" style={{ color: accent }} />
          {subjectLabel} Achievements
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {allAchievements.length} {subjectLabel.toLowerCase()} badges across four rarity tiers.
          Unlock them by mastering skills, completing days, solving cases, and maintaining streaks.
        </p>
      </motion.div>

      {/* Summary header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-6"
      >
        <div
          className="pointer-events-none absolute -top-16 right-10 h-48 w-48 rounded-full blur-3xl"
          style={{ background: `${accent}22` }}
        />
        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: accent }}
            >
              <Sparkles className="h-3 w-3" /> {subjectLabel} Hall of Fame
            </div>
            <div className="mt-2 text-3xl font-bold tracking-tight text-foreground">
              {unlockedCount}
              <span className="text-muted-foreground"> / {allAchievements.length}</span>
              <span className="ml-2 text-base font-medium text-muted-foreground">unlocked</span>
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              {achievementXP.toLocaleString()} XP earned from achievements ·{" "}
              {totalXP.toLocaleString()} total {subjectLabel.toLowerCase()} XP
            </div>
          </div>
          <div className="w-full max-w-sm">
            <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
              <span>Completion</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #94a3b8, #3b82f6, #a855f7, #f59e0b)",
                  boxShadow: "0 0 12px rgba(251,191,36,0.6)",
                }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Rarity groups */}
      <div className="flex flex-col gap-8">
        {grouped.map((g) => (
          <RarityGroup
            key={g.rarity}
            rarity={g.rarity}
            list={g.list}
            unlockedIds={unlockedIds}
          />
        ))}
      </div>
    </div>
  );
}
