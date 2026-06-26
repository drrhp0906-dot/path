"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dna,
  User,
  HeartPulse,
  ClipboardList,
  Stethoscope,
  FlaskConical,
  Eye,
  Lock,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  AlertTriangle,
  Microscope,
  BookText,
  ChevronRight,
  Plus,
  Pill,
  ListOrdered,
  GitCompare,
  Activity,
} from "lucide-react";
import {
  generateCase,
  difficulties,
  difficultyColors,
  type Difficulty,
  type GeneratedCase,
} from "@/data/caseRandomizer";
import { generatePharmCase, type PharmCase } from "@/data/pharmCaseRandomizer";
import { useGameStore, SUBJECT_COLORS, SUBJECT_LABELS } from "@/store/gameState";
import { useShallow } from "zustand/react/shallow";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CaseRandomizerProps {
  generationTrigger: number;
}

const CASE_XP_REWARD = 120;

function DifficultyPill({
  difficulty,
  active,
  onClick,
}: {
  difficulty: Difficulty;
  active: boolean;
  onClick: () => void;
}) {
  const color = difficultyColors[difficulty];
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all",
        active ? "text-background" : "text-muted-foreground hover:text-foreground"
      )}
      style={{
        background: active ? color : "rgba(255,255,255,0.03)",
        border: `1px solid ${active ? color : "rgba(255,255,255,0.08)"}`,
        boxShadow: active ? `0 0 22px ${color}77` : undefined,
      }}
    >
      {difficulty}
    </button>
  );
}

function SectionCard({
  icon: Icon,
  title,
  color,
  children,
  delay = 0,
}: {
  icon: typeof User;
  title: string;
  color: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="glass relative overflow-hidden rounded-2xl p-5"
    >
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-20 blur-3xl"
        style={{ background: color }}
      />
      <div className="relative mb-3 flex items-center gap-2">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ background: `${color}22`, color, border: `1px solid ${color}55` }}
        >
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">{title}</h3>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}

/**
 * Renders pharmacology-specific additional sections after the diagnosis:
 * prescription table, management protocol, drug interactions, monitoring advice.
 */
function PharmExtraSections({ caseData }: { caseData: PharmCase }) {
  return (
    <>
      {/* PRESCRIPTION */}
      {caseData.prescription && caseData.prescription.length > 0 && (
        <SectionCard icon={Pill} title="Prescription (Rx)" color="#f59e0b" delay={0.05}>
          <div className="scrollbar-cosmic -mx-2 overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-white/10 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                  <th className="px-2 py-2 font-semibold">Drug</th>
                  <th className="px-2 py-2 font-semibold">Dose</th>
                  <th className="px-2 py-2 font-semibold">Route</th>
                  <th className="px-2 py-2 font-semibold">Frequency</th>
                  <th className="px-2 py-2 font-semibold">Duration</th>
                  <th className="px-2 py-2 font-semibold">Instructions</th>
                </tr>
              </thead>
              <tbody>
                {caseData.prescription.map((rx, i) => (
                  <tr
                    key={i}
                    className="border-b border-white/5 align-top hover:bg-white/[0.02]"
                  >
                    <td className="px-2 py-2 font-semibold text-amber-300">{rx.drug}</td>
                    <td className="px-2 py-2 text-foreground">{rx.dose}</td>
                    <td className="px-2 py-2 text-foreground">{rx.route}</td>
                    <td className="px-2 py-2 text-foreground">{rx.frequency}</td>
                    <td className="px-2 py-2 text-muted-foreground">{rx.duration}</td>
                    <td className="px-2 py-2 text-muted-foreground">{rx.instructions ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {caseData.drugClass && (
            <div className="mt-3 rounded-lg border border-amber-500/30 bg-amber-500/8 px-3 py-2 text-xs">
              <span className="font-semibold text-amber-300">Drug class: </span>
              <span className="text-foreground">{caseData.drugClass}</span>
            </div>
          )}
        </SectionCard>
      )}

      {/* MANAGEMENT PROTOCOL */}
      {caseData.managementProtocol && caseData.managementProtocol.length > 0 && (
        <SectionCard icon={ListOrdered} title="Management Protocol" color="#10b981" delay={0.1}>
          <ol className="space-y-2.5">
            {caseData.managementProtocol.map((step, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="relative flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-3"
              >
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-background"
                  style={{
                    background: "linear-gradient(135deg, #10b981, #059669)",
                    boxShadow: "0 0 10px rgba(16,185,129,0.5)",
                  }}
                >
                  {step.step}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                    {step.phase}
                  </div>
                  <div className="mt-0.5 text-sm text-foreground">{step.action}</div>
                  <div className="mt-1 text-xs italic text-muted-foreground">
                    <span className="font-semibold not-italic text-emerald-400/80">Why: </span>
                    {step.rationale}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </SectionCard>
      )}

      {/* DRUG INTERACTIONS + MONITORING */}
      <div className="grid gap-4 lg:grid-cols-2">
        {caseData.drugInteractions && caseData.drugInteractions.length > 0 && (
          <SectionCard icon={GitCompare} title="Drug Interactions" color="#ef4444" delay={0.15}>
            <ul className="space-y-1.5">
              {caseData.drugInteractions.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 rounded-lg border border-red-500/20 bg-red-500/[0.04] px-2.5 py-1.5 text-sm text-foreground"
                >
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-red-400" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </SectionCard>
        )}

        {caseData.monitoringAdvice && (
          <SectionCard icon={Activity} title="Monitoring Advice" color="#a855f7" delay={0.2}>
            <p className="text-sm leading-relaxed text-foreground">{caseData.monitoringAdvice}</p>
          </SectionCard>
        )}
      </div>
    </>
  );
}

export function CaseRandomizer({ generationTrigger }: CaseRandomizerProps) {
  const { activeSubject, casesSolved } = useGameStore(
    useShallow((s) => ({
      activeSubject: s.activeSubject,
      casesSolved:
        s.activeSubject === "pathology"
          ? s.pathologyState.casesSolved
          : s.pharmacologyState.casesSolved,
    }))
  );
  const recordCaseSolved = useGameStore((s) => s.recordCaseSolved);
  const accent = SUBJECT_COLORS[activeSubject];
  const subjectLabel = SUBJECT_LABELS[activeSubject];
  const isPharm = activeSubject === "pharmacology";

  // `version` is bumped whenever we want to regenerate the case.
  // It is incremented by: (1) the internal Generate buttons, and
  // (2) the external `generationTrigger` prop (from the Command Center
  // "Generate Random Case" quick action).
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>(undefined);
  const [version, setVersion] = useState(0);
  const [lastExternalTrigger, setLastExternalTrigger] = useState(generationTrigger);
  const [revealed, setRevealed] = useState(false);
  const [solved, setSolved] = useState(false);
  const [lastResetVersion, setLastResetVersion] = useState(0);

  // React to external trigger prop changes — React's recommended
  // "adjust state during render" pattern (NOT inside useEffect).
  if (generationTrigger !== lastExternalTrigger) {
    setLastExternalTrigger(generationTrigger);
    setVersion((v) => v + 1);
  }

  // Reset reveal/solved flags whenever we regenerate (version bump).
  if (version !== lastResetVersion) {
    setLastResetVersion(version);
    setRevealed(false);
    setSolved(false);
  }

  // The active case is derived from version + difficulty + subject. useMemo
  // recomputes whenever any of these change.
  const activeCase: GeneratedCase | PharmCase = useMemo(
    () => (isPharm ? generatePharmCase(difficulty) : generateCase(difficulty)),
    [version, difficulty, activeSubject, isPharm]
  );

  const regenerate = (nextDiff?: Difficulty) => {
    if (nextDiff !== difficulty) {
      // difficulty change already triggers the memo to recompute
      setDifficulty(nextDiff);
    } else {
      // same difficulty — bump version to force a new case
      setVersion((v) => v + 1);
    }
  };

  const handleSolve = () => {
    if (!activeCase || solved) return;
    recordCaseSolved();
    setSolved(true);
  };

  const heroTitle = isPharm ? "Prescription Crucible" : "Diagnostic Crucible";
  const heroSubtitle = isPharm
    ? "Each case is procedurally generated from 10 high-yield pharmacology templates — poisoning, emergencies, and prescription writing. Read the scenario, attempt the diagnosis & Rx, then reveal the full management protocol."
    : "Each case is procedurally generated from 10 high-yield templates. Read the patient profile, attempt the diagnosis, then reveal the answer to study the reasoning.";

  return (
    <div className="flex flex-col gap-5">
      {/* Header / hero */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-strong relative overflow-hidden rounded-3xl p-6 sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />
          <div
            className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full blur-3xl"
            style={{ background: `${accent}22` }}
          />
        </div>
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <div
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest"
              style={{ color: accent }}
            >
              <Sparkles className="h-3 w-3" /> Infinite {subjectLabel} Case Generator
            </div>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {heroTitle.split(" ")[0]}{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, #d946ef, ${accent}, #10b981)`,
                }}
              >
                {heroTitle.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{heroSubtitle}</p>
            <div className="mt-3 flex items-center gap-3">
              <div
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs"
              >
                <span className="text-muted-foreground">Cases Solved: </span>
                <span className="font-bold text-emerald-300">{casesSolved}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-3">
            <button
              type="button"
              onClick={() => regenerate(difficulty)}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-wider text-background transition-all hover:scale-[1.03]"
              style={{
                background: `linear-gradient(135deg, #d946ef, ${accent})`,
                boxShadow: `0 0 30px rgba(217,70,239,0.55), 0 0 60px ${accent}44`,
              }}
            >
              <span className="absolute inset-0 shimmer opacity-50" />
              <Dna className="h-5 w-5" />
              Generate New Case
            </button>
            <div className="flex flex-wrap justify-center gap-2">
              {difficulties.map((d) => (
                <DifficultyPill
                  key={d}
                  difficulty={d}
                  active={difficulty === d}
                  onClick={() => {
                    const next = d === difficulty ? undefined : d;
                    regenerate(next);
                  }}
                />
              ))}
            </div>
            {difficulty && (
              <button
                onClick={() => regenerate(undefined)}
                className="text-center text-[10px] text-muted-foreground hover:text-foreground"
              >
                Clear difficulty filter
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Active case */}
      <AnimatePresence mode="wait">
        {activeCase && (
          <motion.div
            key={activeCase.id + "-" + version}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            {/* Difficulty badge */}
            <div className="flex items-center gap-2">
              <span
                className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                style={{
                  background: `${difficultyColors[activeCase.difficulty]}22`,
                  color: difficultyColors[activeCase.difficulty],
                  border: `1px solid ${difficultyColors[activeCase.difficulty]}55`,
                }}
              >
                {activeCase.difficulty} difficulty
              </span>
              <span className="text-xs text-muted-foreground">
                Case ID: {activeCase.id.slice(-8)}
              </span>
            </div>

            {/* Patient profile */}
            <SectionCard icon={User} title="Patient Profile" color="#06b6d4">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Age</div>
                  <div className="text-lg font-bold text-foreground">{activeCase.patient.age}</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Gender</div>
                  <div className="text-lg font-bold text-foreground">{activeCase.patient.gender}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Occupation</div>
                  <div className="text-sm font-medium capitalize text-foreground">
                    {activeCase.patient.occupation ?? "—"}
                  </div>
                </div>
                <div className="col-span-2 sm:col-span-4">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Background</div>
                  <div className="text-sm text-foreground">{activeCase.patient.background ?? "—"}</div>
                </div>
              </div>
            </SectionCard>

            {/* Chief complaints + history */}
            <div className="grid gap-4 lg:grid-cols-2">
              <SectionCard icon={HeartPulse} title="Chief Complaints" color="#ef4444" delay={0.05}>
                <ul className="space-y-1.5">
                  {activeCase.chiefComplaints.map((c, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" style={{ boxShadow: "0 0 6px #ef4444" }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </SectionCard>

              <SectionCard icon={ClipboardList} title="History" color="#fbbf24" delay={0.1}>
                <p className="text-sm leading-relaxed text-foreground">{activeCase.history}</p>
              </SectionCard>
            </div>

            {/* Examination */}
            <SectionCard icon={Stethoscope} title="Examination Findings" color="#10b981" delay={0.15}>
              <div className="grid gap-2 sm:grid-cols-2">
                {activeCase.examination.map((e, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2 text-sm text-foreground"
                  >
                    {e}
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Investigations table */}
            <SectionCard icon={FlaskConical} title="Investigations" color="#a855f7" delay={0.2}>
              <div className="scrollbar-cosmic -mx-2 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left text-[10px] uppercase tracking-wider text-muted-foreground">
                      <th className="px-2 py-2 font-semibold">Test</th>
                      <th className="px-2 py-2 font-semibold">Result</th>
                      <th className="px-2 py-2 font-semibold">Reference Range</th>
                      <th className="px-2 py-2 font-semibold">Interpretation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeCase.investigations.map((inv, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/5 align-top hover:bg-white/[0.02]"
                      >
                        <td className="px-2 py-2 font-medium text-foreground">{inv.test}</td>
                        <td className="px-2 py-2 text-amber-300">{inv.result}</td>
                        <td className="px-2 py-2 text-muted-foreground">{inv.referenceRange ?? "—"}</td>
                        <td className="px-2 py-2 text-muted-foreground">{inv.interpretation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>

            {/* Diagnosis reveal */}
            <SectionCard icon={Lock} title="Diagnosis" color={revealed ? "#10b981" : "#fbbf24"} delay={0.25}>
              <AnimatePresence mode="wait">
                {!revealed ? (
                  <motion.div
                    key="locked"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center gap-3 py-6 text-center"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 text-amber-300">
                      <Lock className="h-6 w-6" />
                    </div>
                    <p className="max-w-md text-sm text-muted-foreground">
                      Attempt the case first. When you are ready to compare your reasoning with the
                      textbook answer, reveal the diagnosis
                      {isPharm ? " and full prescription protocol" : ""}.
                    </p>
                    <Button
                      onClick={() => setRevealed(true)}
                      className="gap-2 text-background"
                      style={{
                        background: `linear-gradient(to right, #fbbf24, ${accent})`,
                      }}
                    >
                      <Eye className="h-4 w-4" /> Reveal Diagnosis
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="revealed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="space-y-4"
                  >
                    <div
                      className="rounded-xl border p-4"
                      style={{
                        borderColor: "rgba(16,185,129,0.4)",
                        background: "rgba(16,185,129,0.08)",
                        boxShadow: "0 0 20px rgba(16,185,129,0.18)",
                      }}
                    >
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Provisional Diagnosis
                      </div>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        {activeCase.provisionalDiagnosis}
                      </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-300">
                          <Lightbulb className="h-3 w-3" /> Diagnostic Reasoning
                        </div>
                        <p className="text-sm leading-relaxed text-foreground">
                          {activeCase.diagnosticReasoning}
                        </p>
                      </div>
                      <div>
                        <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-fuchsia-300">
                          <Microscope className="h-3 w-3" /> Key Investigations
                        </div>
                        <ul className="space-y-1 text-sm text-foreground">
                          {activeCase.keyInvestigations.map((k, i) => (
                            <li key={i} className="flex gap-1.5">
                              <ChevronRight className="h-3.5 w-3.5 shrink-0 translate-y-0.5 text-fuchsia-300" />
                              <span>{k}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-red-300">
                        <AlertTriangle className="h-3 w-3" /> Complications
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeCase.complications.map((c, i) => (
                          <span
                            key={i}
                            className="rounded-md border border-red-500/30 bg-red-500/8 px-2 py-1 text-[11px] text-red-200"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="glass rounded-xl p-3">
                        <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-cyan-300">
                          <Microscope className="h-3 w-3" /> Image Hint
                        </div>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {activeCase.imageHint}
                        </p>
                      </div>
                      <div className="glass rounded-xl p-3">
                        <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-300">
                          <BookText className="h-3 w-3" /> Textbook Reference
                        </div>
                        <p className="text-xs text-foreground">{activeCase.textbookRef}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </SectionCard>

            {/* Pharmacology-specific extras (prescription, protocol, interactions, monitoring) */}
            {revealed && isPharm && <PharmExtraSections caseData={activeCase as PharmCase} />}

            {/* Solve / next */}
            <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
              <div className="text-xs text-muted-foreground">
                {solved ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Marked as solved · +{CASE_XP_REWARD} XP earned
                  </span>
                ) : (
                  <>Mark this case as solved to earn +{CASE_XP_REWARD} XP.</>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  disabled={solved || !revealed}
                  onClick={handleSolve}
                  className={cn(
                    "gap-2 text-background",
                    solved
                      ? "border border-emerald-500/40 bg-emerald-500/15 text-emerald-300"
                      : "bg-gradient-to-r from-emerald-500 to-amber-400 hover:shadow-[0_0_22px_rgba(16,185,129,0.55)]"
                  )}
                >
                  <CheckCircle2 className="h-4 w-4" />
                  {solved ? "Solved" : "Mark as Solved"}
                </Button>
                <Button
                  onClick={() => regenerate(difficulty)}
                  variant="outline"
                  className="gap-2 border-white/10 bg-white/5 text-foreground hover:bg-white/10"
                >
                  <Plus className="h-4 w-4" /> Next Case
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
