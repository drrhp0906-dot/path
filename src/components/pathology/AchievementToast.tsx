"use client";

import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { useShallow } from "zustand/react/shallow";
import { motion } from "framer-motion";
import { useGameStore, SUBJECT_LABELS, SUBJECT_COLORS } from "@/store/gameState";
import { Icon as IconCmp } from "@/lib/icons";
import { achievements as pathAchievements, rarityColors } from "@/data/achievements";
import { pharmAchievements } from "@/data/pharmAchievements";
import type { Achievement } from "@/data/achievements";
import type { Subject } from "@/store/gameState";

/**
 * AchievementToast — invisible watcher that listens for new achievements
 * unlocked in EITHER subject's store slice and pops a celebratory sonner
 * toast for each.
 *
 * Mount once near the root of the app.
 *
 * Initial-state handling: zustand persist with localStorage hydrates
 * synchronously at module init, so by the time this component first
 * renders the store already reflects any previously-unlocked achievements.
 * We seed `prevRef` lazily during the first render so that the initial
 * set is treated as "already known" — preventing a flood of celebratory
 * toasts on page reload.
 */
export function AchievementToast() {
  // Lazily initialised on first render so we never re-toast the seed set.
  const prevRef = useRef<Record<Subject, Set<string> | null>>({
    pathology: null,
    pharmacology: null,
  });

  const { pathUnlocked, pharmUnlocked } = useGameStore(
    useShallow((s) => ({
      pathUnlocked: s.pathologyState.unlockedAchievements,
      pharmUnlocked: s.pharmacologyState.unlockedAchievements,
    }))
  );

  useEffect(() => {
    const subjects: { subject: Subject; current: string[] }[] = [
      { subject: "pathology", current: pathUnlocked },
      { subject: "pharmacology", current: pharmUnlocked },
    ];

    for (const { subject, current } of subjects) {
      if (prevRef.current[subject] === null) {
        // First run for this subject — seed, do not toast.
        prevRef.current[subject] = new Set(current);
        continue;
      }
      const prev = prevRef.current[subject]!;
      const currSet = new Set(current);
      const newOnes: string[] = [];
      for (const id of currSet) {
        if (!prev.has(id)) newOnes.push(id);
      }
      if (newOnes.length > 0) {
        const all: Achievement[] =
          subject === "pathology" ? pathAchievements : pharmAchievements;
        const subjectLabel = SUBJECT_LABELS[subject];
        const subjectColor = SUBJECT_COLORS[subject];
        for (const id of newOnes) {
          const ach = all.find((a) => a.id === id);
          if (ach) {
            const color = rarityColors[ach.rarity];
            toast.custom(
              () => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="glass-strong relative flex w-[340px] max-w-[90vw] items-start gap-3 rounded-2xl p-4"
                  style={{
                    borderColor: `${subjectColor}77`,
                    boxShadow: `0 0 30px ${subjectColor}55, 0 10px 30px rgba(0,0,0,0.5)`,
                  }}
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: `${color}22`,
                      border: `1px solid ${color}77`,
                      color,
                      boxShadow: `0 0 20px ${color}66`,
                    }}
                  >
                    <IconCmp name={ach.icon} className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div
                      className="text-[10px] font-bold uppercase tracking-widest"
                      style={{ color: subjectColor }}
                    >
                      🏆 {subjectLabel} Achievement Unlocked · {ach.rarity}
                    </div>
                    <div className="mt-0.5 truncate font-semibold text-foreground">
                      {ach.name}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {ach.description}
                    </div>
                    <div
                      className="mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold"
                      style={{
                        background: `${color}22`,
                        color,
                        border: `1px solid ${color}55`,
                      }}
                    >
                      +{ach.xpReward} XP
                    </div>
                  </div>
                </motion.div>
              ),
              { duration: 6000 }
            );
          }
        }
        prevRef.current[subject] = currSet;
      }
    }
  }, [pathUnlocked, pharmUnlocked]);

  return null;
}
