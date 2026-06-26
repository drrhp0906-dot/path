"use client";

import { motion } from "framer-motion";
import { Microscope, Pill } from "lucide-react";
import { useGameStore, SUBJECT_LABELS, SUBJECT_COLORS, type Subject } from "@/store/gameState";
import { cn } from "@/lib/utils";

const SUBJECT_ORDER: Subject[] = ["pathology", "pharmacology"];

const SUBJECT_ICON: Record<Subject, typeof Microscope> = {
  pathology: Microscope,
  pharmacology: Pill,
};

interface SubjectSwitcherProps {
  /** Compact variant omits the label text (icon-only). */
  compact?: boolean;
  className?: string;
}

/**
 * SubjectSwitcher — prominent toggle at the top of the sidebar / mobile header.
 * Two pill buttons slide a shared "active" pill via framer-motion's layoutId.
 *
 * Pathology = cyan accent (microscope icon).
 * Pharmacology = amber accent (pill icon).
 */
export function SubjectSwitcher({ compact = false, className }: SubjectSwitcherProps) {
  const activeSubject = useGameStore((s) => s.activeSubject);
  const setActiveSubject = useGameStore((s) => s.setActiveSubject);

  return (
    <div
      role="tablist"
      aria-label="Switch subject"
      className={cn(
        "relative grid w-full grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1 backdrop-blur",
        className
      )}
    >
      {SUBJECT_ORDER.map((subject) => {
        const Icon = SUBJECT_ICON[subject];
        const color = SUBJECT_COLORS[subject];
        const isActive = activeSubject === subject;
        return (
          <button
            key={subject}
            role="tab"
            aria-selected={isActive}
            type="button"
            onClick={() => setActiveSubject(subject)}
            className={cn(
              "relative z-10 flex items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors",
              isActive ? "text-background" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="subject-pill"
                className="absolute inset-0 -z-10 rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  boxShadow: `0 0 22px ${color}66, inset 0 0 12px ${color}55`,
                }}
                transition={{ type: "spring", stiffness: 320, damping: 26 }}
              />
            )}
            <Icon className="h-3.5 w-3.5" />
            {!compact && <span>{SUBJECT_LABELS[subject]}</span>}
          </button>
        );
      })}
    </div>
  );
}
