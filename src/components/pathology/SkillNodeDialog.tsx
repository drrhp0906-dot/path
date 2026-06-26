"use client";

import { motion } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import { Check, Lock, Star, BookText, Trophy } from "lucide-react";
import type { SkillNode } from "@/data/skillTree";
import { useGameStore } from "@/store/gameState";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SkillNodeDialogProps {
  node: SkillNode | null;
  branchColor: string;
  branchName: string;
  onClose: () => void;
}

function HighYieldStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`High yield: ${rating} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3.5 w-3.5",
            i < rating ? "fill-amber-400 text-amber-400" : "text-white/15"
          )}
        />
      ))}
      <span className="ml-1 text-[10px] uppercase tracking-wider text-muted-foreground">
        High Yield
      </span>
    </div>
  );
}

export function SkillNodeDialog({
  node,
  branchColor,
  branchName,
  onClose,
}: SkillNodeDialogProps) {
  const { isMastered, masteredNodes } = useGameStore(
    useShallow((s) => ({
      isMastered: node
        ? (s.activeSubject === "pathology"
            ? s.pathologyState
            : s.pharmacologyState
          ).masteredNodes.includes(node.id)
        : false,
      masteredNodes:
        s.activeSubject === "pathology"
          ? s.pathologyState.masteredNodes
          : s.pharmacologyState.masteredNodes,
    }))
  );
  const masterNode = useGameStore((s) => s.masterNode);
  const unmasterNode = useGameStore((s) => s.unmasterNode);

  if (!node) return null;

  const prereqsMet = node.prerequisites.every((id) => masteredNodes.includes(id));
  const missingPrereqs = node.prerequisites.filter((id) => !masteredNodes.includes(id));

  return (
    <Dialog open={!!node} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] w-full max-w-2xl overflow-hidden border-white/10 bg-background/95 p-0 backdrop-blur-2xl">
        <DialogTitle className="sr-only">{node.title}</DialogTitle>
        <div className="scrollbar-cosmic max-h-[90vh] overflow-y-auto">
          {/* Header banner */}
          <div
            className="relative overflow-hidden p-6"
            style={{
              background: `linear-gradient(135deg, ${branchColor}33, transparent 70%)`,
              borderBottom: `1px solid ${branchColor}33`,
            }}
          >
            <div
              className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full opacity-30 blur-3xl"
              style={{ background: branchColor }}
            />
            <div className="relative flex items-start gap-4">
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: `${branchColor}22`,
                  border: `2px solid ${branchColor}`,
                  color: branchColor,
                  boxShadow: `0 0 24px ${branchColor}66`,
                }}
              >
                <Trophy className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest" style={{ color: branchColor }}>
                  {branchName} · Tier {node.tier}
                </div>
                <h2 className="mt-1 text-xl font-bold leading-tight tracking-tight text-foreground">
                  {node.title}
                </h2>
                <p className="mt-1.5 text-sm text-muted-foreground">{node.description}</p>
              </div>
              {isMastered && (
                <div className="shrink-0">
                  <span
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background"
                    style={{ background: "#10b981" }}
                  >
                    <Check className="h-3 w-3" /> Mastered
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="space-y-5 p-6">
            {/* Meta row */}
            <div className="grid grid-cols-3 gap-3">
              <div className="glass rounded-xl p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Marks
                </div>
                <div className="mt-0.5 text-lg font-bold text-amber-300">{node.marks}</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  XP Reward
                </div>
                <div className="mt-0.5 text-lg font-bold text-fuchsia-300">+{node.xp}</div>
              </div>
              <div className="glass rounded-xl p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  High-Yield
                </div>
                <div className="mt-1">
                  <HighYieldStars rating={node.highYield} />
                </div>
              </div>
            </div>

            {/* Prereqs */}
            {node.prerequisites.length > 0 && (
              <div
                className={cn(
                  "rounded-xl border p-3",
                  prereqsMet
                    ? "border-emerald-500/40 bg-emerald-500/5"
                    : "border-red-500/40 bg-red-500/5"
                )}
              >
                <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {prereqsMet ? (
                    <>
                      <Check className="h-3 w-3 text-emerald-400" /> Prerequisites met
                    </>
                  ) : (
                    <>
                      <Lock className="h-3 w-3 text-red-400" /> Locked — requires:
                    </>
                  )}
                </div>
                {missingPrereqs.length > 0 && (
                  <ul className="mt-1.5 space-y-0.5 text-xs text-red-300">
                    {missingPrereqs.map((id) => (
                      <li key={id} className="flex items-center gap-1">
                        <Lock className="h-3 w-3" /> {id}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {/* Key points */}
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
                <BookText className="h-3.5 w-3.5" /> Key Points
              </div>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.04 } },
                }}
                className="space-y-1.5"
              >
                {node.keyPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -8 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="flex gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-2.5 text-sm text-foreground"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: branchColor, boxShadow: `0 0 8px ${branchColor}` }}
                    />
                    <span className="leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Textbook ref */}
            <div className="glass rounded-xl p-3">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Textbook Reference
              </div>
              <div className="mt-0.5 text-sm text-foreground">{node.textbookRef}</div>
            </div>

            {/* Action */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              {isMastered ? (
                <Button
                  variant="outline"
                  onClick={() => {
                    unmasterNode(node.id);
                    onClose();
                  }}
                  className="border-white/10 bg-white/5 text-foreground hover:bg-white/10"
                >
                  Unmark Mastery
                </Button>
              ) : (
                <Button
                  disabled={!prereqsMet}
                  onClick={() => {
                    masterNode(node.id);
                    onClose();
                  }}
                  className="gap-1.5 text-background disabled:cursor-not-allowed disabled:opacity-40"
                  style={{
                    background: prereqsMet
                      ? `linear-gradient(135deg, ${branchColor}, ${branchColor}cc)`
                      : "rgba(255,255,255,0.05)",
                    boxShadow: prereqsMet ? `0 0 22px ${branchColor}77` : undefined,
                  }}
                >
                  <Star className="h-4 w-4" />
                  {prereqsMet ? `Master this Skill (+${node.xp} XP)` : "Locked"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
