"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { useShallow } from "zustand/react/shallow";
import {
  LayoutDashboard,
  GitBranch,
  CalendarRange,
  Dna,
  Library,
  Trophy,
  Settings,
  Menu,
  Flame,
  Star,
  Sparkles,
  Stethoscope,
  Microscope,
  Pill,
} from "lucide-react";
import { useGameStore, SUBJECT_LABELS, SUBJECT_COLORS, type Subject } from "@/store/gameState";
import { allSkillNodes } from "@/data/skillTree";
import { allPharmNodes } from "@/data/pharmSkillTree";
import { XpBar } from "./XpBar";
import { SubjectSwitcher } from "./SubjectSwitcher";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export type TabId =
  | "command"
  | "skill-tree"
  | "campaign"
  | "cases"
  | "library"
  | "achievements"
  | "settings";

interface NavItem {
  id: TabId;
  label: string;
  icon: typeof LayoutDashboard;
  hint: string;
}

const NAV_ITEMS_PATH: NavItem[] = [
  { id: "command", label: "Command Center", icon: LayoutDashboard, hint: "Your daily overview" },
  { id: "skill-tree", label: "Skill Tree", icon: GitBranch, hint: "15 branches · 70 nodes" },
  { id: "campaign", label: "20-Day Campaign", icon: CalendarRange, hint: "Pathology mastery roadmap" },
  { id: "cases", label: "Case Randomizer", icon: Dna, hint: "Infinite case generator" },
  { id: "library", label: "Arcane Library", icon: Library, hint: "Curated references" },
  { id: "achievements", label: "Achievements", icon: Trophy, hint: "Badges & milestones" },
  { id: "settings", label: "Settings", icon: Settings, hint: "Player profile" },
];

const NAV_ITEMS_PHARM: NavItem[] = [
  { id: "command", label: "Command Center", icon: LayoutDashboard, hint: "Your daily overview" },
  { id: "skill-tree", label: "Skill Tree", icon: GitBranch, hint: "10 branches · ~50 nodes" },
  { id: "campaign", label: "20-Day Campaign", icon: CalendarRange, hint: "Pharmacology mastery roadmap" },
  { id: "cases", label: "Case Randomizer", icon: Dna, hint: "Infinite case generator" },
  { id: "library", label: "Arcane Library", icon: Library, hint: "Curated references" },
  { id: "achievements", label: "Achievements", icon: Trophy, hint: "Badges & milestones" },
  { id: "settings", label: "Settings", icon: Settings, hint: "Player profile" },
];

function getNavItems(subject: Subject): NavItem[] {
  return subject === "pathology" ? NAV_ITEMS_PATH : NAV_ITEMS_PHARM;
}

function PlayerCard() {
  const { playerName, avatarColor, streak, activeSubject, pathologyState, pharmacologyState } =
    useGameStore(
      useShallow((s) => ({
        playerName: s.playerName,
        avatarColor: s.avatarColor,
        streak: s.streak,
        activeSubject: s.activeSubject,
        pathologyState: s.pathologyState,
        pharmacologyState: s.pharmacologyState,
      }))
    );
  const getProgressToNextLevel = useGameStore((s) => s.getProgressToNextLevel);
  const getLevel = useGameStore((s) => s.getLevel);

  const accent = SUBJECT_COLORS[activeSubject];
  const state = activeSubject === "pathology" ? pathologyState : pharmacologyState;
  const totalNodes = activeSubject === "pathology" ? allSkillNodes.length : allPharmNodes.length;
  const level = getLevel();
  const progress = getProgressToNextLevel();
  const initial = (playerName?.trim()?.[0] ?? "D").toUpperCase();

  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl p-4">
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-40 blur-3xl"
        style={{ background: avatarColor }}
      />
      <div className="relative flex items-center gap-3">
        <div
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold"
          style={{
            background: `${avatarColor}22`,
            color: avatarColor,
            border: `2px solid ${avatarColor}`,
            boxShadow: `0 0 18px ${avatarColor}55`,
          }}
        >
          {initial}
          <span
            className="absolute -bottom-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold text-background"
            style={{ background: accent }}
          >
            {level}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-foreground">{playerName}</div>
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-0.5">
              <Star className="h-3 w-3" style={{ color: accent }} /> Level {level}
            </span>
            {streak > 0 && (
              <span className="inline-flex items-center gap-0.5 text-orange-400">
                <Flame className="h-3 w-3" /> {streak}d
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3">
        <div className="mb-1 flex justify-between text-[10px] text-muted-foreground">
          <span>{state.totalXP.toLocaleString()} XP</span>
          <span>{state.masteredNodes.length}/{totalNodes} skills · {state.casesSolved} cases</span>
        </div>
        <XpBar value={progress} color={accent} height="sm" shimmer />
      </div>
    </div>
  );
}

function SubjectMiniStats() {
  const { activeSubject, pathologyState, pharmacologyState } = useGameStore(
    useShallow((s) => ({
      activeSubject: s.activeSubject,
      pathologyState: s.pathologyState,
      pharmacologyState: s.pharmacologyState,
    }))
  );
  const getSubjectLevel = useGameStore((s) => s.getSubjectLevel);

  const rows: { subject: Subject; state: typeof pathologyState; totalNodes: number; icon: typeof Microscope }[] = [
    { subject: "pathology", state: pathologyState, totalNodes: allSkillNodes.length, icon: Microscope },
    { subject: "pharmacology", state: pharmacologyState, totalNodes: allPharmNodes.length, icon: Pill },
  ];

  return (
    <div className="glass flex flex-col gap-1.5 rounded-2xl p-3">
      {rows.map(({ subject, state, totalNodes, icon: Icon }) => {
        const isActive = subject === activeSubject;
        const color = SUBJECT_COLORS[subject];
        const level = getSubjectLevel(subject);
        return (
          <div
            key={subject}
            className={cn(
              "flex items-center gap-2 rounded-lg px-2 py-1.5 transition-all",
              isActive ? "bg-white/[0.06]" : "opacity-70"
            )}
            style={
              isActive
                ? { boxShadow: `0 0 12px ${color}33, inset 0 0 8px ${color}11` }
                : undefined
            }
          >
            <div
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md"
              style={{
                background: `${color}22`,
                color,
                border: `1px solid ${color}55`,
              }}
            >
              <Icon className="h-3 w-3" />
            </div>
            <div className="min-w-0 flex-1 text-[11px]">
              <div className="flex items-center gap-1.5">
                <span className="font-semibold" style={{ color: isActive ? color : undefined }}>
                  {SUBJECT_LABELS[subject]}
                </span>
                <span className="text-muted-foreground">· Level {level}</span>
              </div>
              <div className="text-muted-foreground">
                {state.masteredNodes.length}/{totalNodes} nodes · {state.casesSolved} cases
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function NavList({
  active,
  onSelect,
  items,
  accent,
}: {
  active: TabId;
  onSelect: (id: TabId) => void;
  items: NavItem[];
  accent: string;
}) {
  return (
    <nav aria-label="Primary" className="flex flex-col gap-1">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item.id)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all",
              isActive
                ? "glass-strong text-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="nav-active"
                className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full"
                style={{
                  background: `linear-gradient(180deg, ${accent}, #d946ef)`,
                  boxShadow: `0 0 10px ${accent}99`,
                }}
              />
            )}
            <Icon
              className={cn(
                "h-4 w-4 shrink-0 transition-colors",
                isActive ? "" : "text-muted-foreground group-hover:text-foreground"
              )}
              style={isActive ? { color: accent } : undefined}
            />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-sm font-medium">{item.label}</span>
              <span className="block truncate text-[10px] text-muted-foreground">{item.hint}</span>
            </span>
          </button>
        );
      })}
    </nav>
  );
}

function BrandHeader({ accent, subjectLabel }: { accent: string; subjectLabel: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-xl"
        style={{
          background: `linear-gradient(135deg, ${accent}, #d946ef)`,
          boxShadow: `0 0 18px ${accent}88`,
        }}
      >
        <Stethoscope className="h-5 w-5 text-background" />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-bold tracking-tight text-foreground">
          {subjectLabel} Ascension
        </div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          A Medical RPG
        </div>
      </div>
    </div>
  );
}

export interface SidebarProps {
  active: TabId;
  onSelect: (id: TabId) => void;
}

/**
 * Sidebar — persistent left navigation. On desktop it renders as a
 * fixed column; on mobile it collapses into a Sheet (hamburger menu).
 * Both share the same PlayerCard + SubjectSwitcher + NavList.
 */
export function Sidebar({ active, onSelect }: SidebarProps) {
  const activeSubject = useGameStore((s) => s.activeSubject);
  const accent = SUBJECT_COLORS[activeSubject];
  const subjectLabel = SUBJECT_LABELS[activeSubject];
  const items = getNavItems(activeSubject);

  const desktopNav = useMemo(
    () => <NavList active={active} onSelect={onSelect} items={items} accent={accent} />,
    [active, onSelect, items, accent]
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col gap-4 overflow-y-auto scrollbar-cosmic p-4 lg:flex"
        aria-label="Primary navigation"
      >
        <BrandHeader accent={accent} subjectLabel={subjectLabel} />
        <SubjectSwitcher />
        <PlayerCard />
        <SubjectMiniStats />
        <div className="flex-1 overflow-y-auto scrollbar-cosmic pr-1">{desktopNav}</div>
        <div className="glass rounded-xl p-3 text-[10px] text-muted-foreground">
          <div className="mb-1 flex items-center gap-1.5" style={{ color: accent }}>
            <Sparkles className="h-3 w-3" />
            <span className="font-semibold uppercase tracking-wider">Tip</span>
          </div>
          Master the gold-bordered nodes first — they are the highest-yield exam topics.
        </div>
      </aside>

      {/* Mobile top bar + sheet */}
      <header className="glass-strong sticky top-0 z-30 flex items-center justify-between gap-3 px-4 py-3 lg:hidden">
        <BrandHeader accent={accent} subjectLabel={subjectLabel} />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open navigation menu"
              className="text-foreground"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[85vw] max-w-sm border-r border-white/10 bg-background/95 p-4 backdrop-blur-xl"
          >
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex h-full flex-col gap-4 overflow-y-auto scrollbar-cosmic">
              <BrandHeader accent={accent} subjectLabel={subjectLabel} />
              <SubjectSwitcher />
              <PlayerCard />
              <SubjectMiniStats />
              <div className="flex-1 overflow-y-auto scrollbar-cosmic pr-1">{desktopNav}</div>
            </div>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
}
