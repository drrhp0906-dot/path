"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface XpBarProps {
  value: number; // 0–100
  className?: string;
  color?: string; // hex/rgb string for the fill
  shimmer?: boolean;
  height?: "sm" | "md" | "lg";
  showGlow?: boolean;
  label?: string;
}

/**
 * XpBar — animated XP progress bar with optional shimmer + glow.
 * Fills smoothly whenever `value` changes.
 */
export function XpBar({
  value,
  className,
  color = "#fbbf24",
  shimmer = true,
  height = "md",
  showGlow = true,
  label,
}: XpBarProps) {
  const safe = Math.max(0, Math.min(100, value));
  const heights: Record<string, string> = {
    sm: "h-1.5",
    md: "h-2.5",
    lg: "h-4",
  };
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="mb-1 flex justify-between text-xs text-muted-foreground">
          <span>{label}</span>
          <span>{Math.round(safe)}%</span>
        </div>
      )}
      <div
        className={cn(
          "relative w-full overflow-hidden rounded-full",
          "bg-white/5 border border-white/10",
          heights[height]
        )}
      >
        <motion.div
          className={cn("relative h-full rounded-full", shimmer && "shimmer")}
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
            boxShadow: showGlow ? `0 0 14px ${color}99` : undefined,
          }}
          initial={{ width: 0 }}
          animate={{ width: `${safe}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
