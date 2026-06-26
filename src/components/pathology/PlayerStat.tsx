"use client";

import { motion } from "framer-motion";
import type { LucideProps } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PlayerStatProps {
  icon: ComponentType<LucideProps>;
  label: string;
  value: ReactNode;
  sub?: string;
  accent?: string; // hex color
  delay?: number;
  className?: string;
}

/**
 * PlayerStat — glassmorphic stat card with subtle 3D tilt on hover.
 */
export function PlayerStat({
  icon: Icon,
  label,
  value,
  sub,
  accent = "#fbbf24",
  delay = 0,
  className,
}: PlayerStatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        rotateX: 2,
        rotateY: -2,
        transition: { duration: 0.2 },
      }}
      className={cn(
        "glass relative overflow-hidden rounded-2xl p-5",
        "perspective-1000 preserve-3d",
        className
      )}
      style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 8px 30px rgba(0,0,0,0.35)` }}
    >
      <div
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-30 blur-2xl"
        style={{ background: accent }}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {label}
          </div>
          <div className="mt-1 truncate text-3xl font-bold tracking-tight text-foreground">
            {value}
          </div>
          {sub && <div className="mt-0.5 text-xs text-muted-foreground">{sub}</div>}
        </div>
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: `${accent}22`,
            border: `1px solid ${accent}55`,
            color: accent,
            boxShadow: `0 0 18px ${accent}33`,
          }}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
}
