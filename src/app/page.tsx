"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGameStore, SUBJECT_LABELS } from "@/store/gameState";
import { StarfieldBackground } from "@/components/pathology/StarfieldBackground";
import { AchievementToast } from "@/components/pathology/AchievementToast";
import { Sidebar, type TabId } from "@/components/pathology/Sidebar";
import { SubjectSwitcher } from "@/components/pathology/SubjectSwitcher";
import { CommandCenter } from "@/components/pathology/CommandCenter";
import { SkillTreeView } from "@/components/pathology/SkillTreeView";
import { DailyCampaign } from "@/components/pathology/DailyCampaign";
import { CaseRandomizer } from "@/components/pathology/CaseRandomizer";
import { ArcaneLibrary } from "@/components/pathology/ArcaneLibrary";
import { Achievements } from "@/components/pathology/Achievements";
import { SettingsPanel } from "@/components/pathology/SettingsPanel";
import { Stethoscope } from "lucide-react";

export default function Home() {
  const [active, setActive] = useState<TabId>("command");
  const [caseTrigger, setCaseTrigger] = useState(0);
  const registerActivity = useGameStore((s) => s.registerActivity);
  const activeSubject = useGameStore((s) => s.activeSubject);

  // On mount, refresh the daily streak.
  useEffect(() => {
    registerActivity();
  }, [registerActivity]);

  // Smooth scroll to top whenever the tab changes.
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [active]);

  const handleGenerateCase = () => {
    setActive("cases");
    // Defer the trigger to next tick so CaseRandomizer mounts first if needed.
    setTimeout(() => setCaseTrigger((n) => n + 1), 60);
  };

  const subjectLabel = SUBJECT_LABELS[activeSubject];

  return (
    <div className="relative flex min-h-screen flex-col">
      <StarfieldBackground />
      <AchievementToast />

      <div className="flex flex-1 flex-col lg:flex-row">
        <Sidebar active={active} onSelect={setActive} />

        <main
          className="scrollbar-cosmic flex-1 overflow-x-hidden px-4 pb-10 pt-4 sm:px-6 lg:px-8 lg:pt-6"
          aria-label="Main content"
        >
          {/* Mobile subject switcher (also lives in the sidebar on desktop) */}
          <div className="mb-4 lg:hidden">
            <SubjectSwitcher />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active + "-" + activeSubject}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {active === "command" && (
                <CommandCenter
                  onNavigate={setActive}
                  onGenerateCase={handleGenerateCase}
                />
              )}
              {active === "skill-tree" && <SkillTreeView />}
              {active === "campaign" && <DailyCampaign />}
              {active === "cases" && (
                <CaseRandomizer generationTrigger={caseTrigger} />
              )}
              {active === "library" && <ArcaneLibrary />}
              {active === "achievements" && <Achievements />}
              {active === "settings" && <SettingsPanel />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Sticky footer */}
      <footer
        className="mt-auto border-t border-white/5 bg-background/40 px-4 py-3 backdrop-blur-md sm:px-6"
        role="contentinfo"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-center text-[11px] text-muted-foreground sm:flex-row sm:text-left">
          <div className="inline-flex items-center gap-1.5">
            <span
              className="flex h-5 w-5 items-center justify-center rounded"
              style={{
                background: "linear-gradient(135deg, #fbbf24, #d946ef)",
              }}
            >
              <Stethoscope className="h-3 w-3 text-background" />
            </span>
            <span className="text-foreground/80">
              {subjectLabel} Ascension — A Medical RPG
            </span>
          </div>
          <div>
            Built with <span className="text-rose-400">⚙️</span> for medical residents ·
            Pathology: <span className="text-amber-300">Robbins 10e</span>,{" "}
            <span className="text-amber-300">WHO</span>,{" "}
            <span className="text-amber-300">ASH</span>,{" "}
            <span className="text-amber-300">AABB</span> ·{" "}
            Pharmacology: <span className="text-amber-300">Katzung 15e</span>,{" "}
            <span className="text-amber-300">Goodman &amp; Gilman</span>,{" "}
            <span className="text-amber-300">K.D. Tripathi</span>,{" "}
            <span className="text-amber-300">WHO Model List</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
