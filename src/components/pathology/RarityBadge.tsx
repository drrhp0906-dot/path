"use client";

import { cn } from "@/lib/utils";
import { rarityColors, type Achievement } from "@/data/achievements";

interface RarityBadgeProps {
  rarity: Achievement["rarity"];
  className?: string;
  withGlow?: boolean;
}

/**
 * RarityBadge — pill that shows a rarity tier with its colour.
 */
export function RarityBadge({ rarity, className, withGlow = true }: RarityBadgeProps) {
  const color = rarityColors[rarity];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider",
        className
      )}
      style={{
        color,
        background: `${color}1a`,
        border: `1px solid ${color}66`,
        boxShadow: withGlow ? `0 0 10px ${color}55` : undefined,
      }}
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: color, boxShadow: `0 0 6px ${color}` }}
      />
      {rarity}
    </span>
  );
}
