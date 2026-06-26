"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import { Check, Lock, Star, GitBranch, CircleDot, Sparkles } from "lucide-react";
import { skillTree, type SkillNode, type SkillBranch } from "@/data/skillTree";
import { pharmSkillTree } from "@/data/pharmSkillTree";
import { useGameStore, SUBJECT_COLORS } from "@/store/gameState";
import { Icon as IconCmp } from "@/lib/icons";
import { SkillNodeDialog } from "./SkillNodeDialog";
import { cn } from "@/lib/utils";

type NodeState = "mastered" | "available" | "locked";

function getNodeState(
  node: SkillNode,
  mastered: string[]
): NodeState {
  if (mastered.includes(node.id)) return "mastered";
  const ok = node.prerequisites.every((p) => mastered.includes(p));
  return ok ? "available" : "locked";
}

/** SVG curved connectors between two adjacent tiers in a branch. */
function TierConnectors({
  topNodes,
  bottomNodes,
  color,
  mastered,
}: {
  topNodes: SkillNode[];
  bottomNodes: SkillNode[];
  color: string;
  mastered: string[];
}) {
  const N = topNodes.length;
  const M = bottomNodes.length;
  const topX = (i: number) => ((i + 0.5) / N) * 100;
  const botX = (j: number) => ((j + 0.5) / M) * 100;
  return (
    <svg
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      className="my-1 h-8 w-full"
      aria-hidden
    >
      {bottomNodes.map((b, j) => {
        // Only draw to actual prerequisites that are in the top tier
        const prereqsInTop = topNodes.filter((t) => b.prerequisites.includes(t.id));
        const targets = prereqsInTop.length > 0 ? prereqsInTop : topNodes;
        return targets.map((t, i) => {
          const ti = topNodes.indexOf(t);
          const x1 = topX(ti);
          const x2 = botX(j);
          const masteredEdge =
            mastered.includes(t.id) && mastered.includes(b.id);
          const stroke = masteredEdge ? color : `${color}66`;
          const width = masteredEdge ? 1.6 : 0.9;
          return (
            <path
              key={`${b.id}-${t.id}-${i}`}
              d={`M ${x1} 0 C ${x1} 15, ${x2} 15, ${x2} 30`}
              stroke={stroke}
              strokeWidth={width}
              fill="none"
              vectorEffect="non-scaling-stroke"
              style={masteredEdge ? { filter: `drop-shadow(0 0 3px ${color})` } : undefined}
            />
          );
        });
      })}
    </svg>
  );
}

function NodeButton({
  node,
  state,
  color,
  onClick,
}: {
  node: SkillNode;
  state: NodeState;
  color: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "group relative flex h-20 w-20 shrink-0 flex-col items-center justify-center gap-1 rounded-2xl border-2 p-2 text-center transition-all",
        state === "available" && "pulse-available"
      )}
      style={{
        background:
          state === "mastered"
            ? `${color}22`
            : state === "available"
            ? `${color}11`
            : "rgba(255,255,255,0.02)",
        borderColor:
          state === "mastered"
            ? color
            : state === "available"
            ? `${color}88`
            : "rgba(255,255,255,0.08)",
        boxShadow:
          state === "mastered"
            ? `0 0 22px ${color}77, inset 0 0 12px ${color}33`
            : state === "available"
            ? `0 0 14px ${color}44`
            : undefined,
        opacity: state === "locked" ? 0.55 : 1,
      }}
      aria-label={`${node.title} — ${state}`}
    >
      <NodeBadgeIcon state={state} color={color} />
      <span
        className={cn(
          "line-clamp-2 text-[9px] font-semibold leading-tight",
          state === "locked" ? "text-muted-foreground" : "text-foreground"
        )}
      >
        {node.title.split(" — ")[0].split(" (")[0].slice(0, 26)}
      </span>
      {/* High-yield star indicator */}
      {node.highYield >= 4 && state !== "locked" && (
        <span
          className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full"
          style={{ background: "#fbbf24", color: "#0a0a0f" }}
          title={`High yield: ${node.highYield}/5`}
        >
          <Star className="h-2.5 w-2.5 fill-current" />
        </span>
      )}
    </motion.button>
  );
}

function NodeBadgeIcon({ state, color }: { state: NodeState; color: string }) {
  if (state === "mastered") {
    return (
      <div
        className="flex h-7 w-7 items-center justify-center rounded-full"
        style={{ background: color, color: "#0a0a0f", boxShadow: `0 0 12px ${color}` }}
      >
        <Check className="h-4 w-4" strokeWidth={3} />
      </div>
    );
  }
  if (state === "locked") {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-muted-foreground">
        <Lock className="h-3.5 w-3.5" />
      </div>
    );
  }
  return (
    <div
      className="flex h-7 w-7 items-center justify-center rounded-full border-2"
      style={{ borderColor: color, color, background: `${color}11` }}
    >
      <CircleDot className="h-4 w-4" />
    </div>
  );
}

function BranchColumn({
  branch,
  mastered,
  onPick,
  index,
}: {
  branch: SkillBranch;
  mastered: string[];
  onPick: (node: SkillNode, branch: SkillBranch) => void;
  index: number;
}) {
  const BranchIcon = branch.icon;
  const done = branch.nodes.filter((n) => mastered.includes(n.id)).length;
  const total = branch.nodes.length;
  const progress = (done / total) * 100;

  // Group by tier
  const tiers = useMemo(() => {
    const map = new Map<number, SkillNode[]>();
    for (const n of branch.nodes) {
      const arr = map.get(n.tier) ?? [];
      arr.push(n);
      map.set(n.tier, arr);
    }
    return Array.from(map.entries()).sort((a, b) => a[0] - b[0]);
  }, [branch.nodes]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
      className="glass flex w-[260px] shrink-0 flex-col rounded-2xl p-4"
      style={{ borderTop: `2px solid ${branch.color}55` }}
    >
      {/* Branch header */}
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: `${branch.color}22`,
            border: `1px solid ${branch.color}55`,
            color: branch.color,
            boxShadow: `0 0 14px ${branch.color}33`,
          }}
        >
          <IconCmp name={BranchIcon} className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-bold tracking-tight text-foreground">
            {branch.name}
          </div>
          <div className="truncate text-[10px] italic text-muted-foreground">
            {branch.tagline}
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-3">
        <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
          <span>{done}/{total} mastered</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${branch.color}, ${branch.color}aa)`,
              boxShadow: `0 0 8px ${branch.color}99`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Tiers + connectors */}
      <div className="mt-4 flex flex-col items-stretch">
        {tiers.map(([tierNum, nodes], tierIdx) => (
          <div key={tierNum}>
            {tierIdx > 0 && (
              <TierConnectors
                topNodes={tiers[tierIdx - 1][1]}
                bottomNodes={nodes}
                color={branch.color}
                mastered={mastered}
              />
            )}
            <div className="flex flex-wrap items-start justify-center gap-2">
              {nodes.map((node) => {
                const state = getNodeState(node, mastered);
                return (
                  <NodeButton
                    key={node.id}
                    node={node}
                    state={state}
                    color={branch.color}
                    onClick={() => onPick(node, branch)}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Legend({ accent }: { accent: string }) {
  const items: { label: string; color: string; icon: typeof Check; bg: string }[] = [
    { label: "Mastered", color: "#10b981", icon: Check, bg: "rgba(16,185,129,0.15)" },
    { label: "Available", color: accent, icon: CircleDot, bg: `${accent}1f` },
    { label: "Locked", color: "#94a3b8", icon: Lock, bg: "rgba(148,163,184,0.10)" },
    { label: "High-yield", color: "#fbbf24", icon: Star, bg: "rgba(251,191,36,0.15)" },
  ];
  return (
    <div className="glass flex flex-wrap items-center gap-3 rounded-xl p-3 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-foreground">
        <Sparkles className="h-3 w-3" style={{ color: accent }} /> Legend
      </span>
      {items.map((it) => (
        <span key={it.label} className="inline-flex items-center gap-1.5">
          <span
            className="flex h-5 w-5 items-center justify-center rounded-full"
            style={{ background: it.bg, border: `1px solid ${it.color}55`, color: it.color }}
          >
            <it.icon className="h-3 w-3" />
          </span>
          {it.label}
        </span>
      ))}
    </div>
  );
}

export function SkillTreeView() {
  const { activeSubject, masteredNodes } = useGameStore(
    useShallow((s) => ({
      activeSubject: s.activeSubject,
      masteredNodes:
        s.activeSubject === "pathology"
          ? s.pathologyState.masteredNodes
          : s.pharmacologyState.masteredNodes,
    }))
  );
  const accent = SUBJECT_COLORS[activeSubject];
  const [picked, setPicked] = useState<{
    node: SkillNode;
    branch: SkillBranch;
  } | null>(null);

  const activeTree = activeSubject === "pathology" ? skillTree : pharmSkillTree;
  const totalMastered = masteredNodes.length;
  const totalNodes = activeTree.reduce((s, b) => s + b.nodes.length, 0);

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
            <GitBranch className="h-6 w-6" style={{ color: accent }} />
            Skill Tree
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeTree.length} branches · {totalNodes} nodes · {totalMastered} mastered
          </p>
        </div>
        <Legend accent={accent} />
      </motion.div>

      {/* Horizontal scrollable skill tree */}
      <div className="scrollbar-cosmic -mx-2 overflow-x-auto px-2 pb-4">
        <div className="flex gap-4">
          {activeTree.map((branch, idx) => (
            <BranchColumn
              key={branch.id}
              branch={branch}
              mastered={masteredNodes}
              onPick={(node, b) => setPicked({ node, branch: b })}
              index={idx}
            />
          ))}
        </div>
      </div>

      <SkillNodeDialog
        node={picked?.node ?? null}
        branchColor={picked?.branch.color ?? accent}
        branchName={picked?.branch.name ?? ""}
        onClose={() => setPicked(null)}
      />
    </div>
  );
}
