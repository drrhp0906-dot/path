"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Library,
  Search,
  ExternalLink,
  Star,
  ArrowLeft,
  BookOpen,
} from "lucide-react";
import {
  resources,
  resourceCategories,
  searchResources,
  type Resource,
  type ResourceCategory,
} from "@/data/resources";
import {
  pharmResources,
  searchPharmResources,
} from "@/data/pharmResources";
import { useGameStore, SUBJECT_COLORS, SUBJECT_LABELS } from "@/store/gameState";
import { Icon as IconCmp } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Stars({ n }: { n: number }) {
  return (
    <span className="inline-flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-3 w-3",
            i < n ? "fill-amber-400 text-amber-400" : "text-white/15"
          )}
          style={i < n ? { filter: "drop-shadow(0 0 3px rgba(251,191,36,0.6))" } : undefined}
        />
      ))}
    </span>
  );
}

function FeaturedResource({ resource }: { resource: Resource }) {
  const cat = resourceCategories.find((c) => c.id === resource.category);
  const color = cat?.color ?? "#fbbf24";
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      className="glass-strong relative block overflow-hidden rounded-3xl p-6"
      style={{ border: `1px solid ${color}55`, boxShadow: `0 0 30px ${color}22` }}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-30 blur-3xl"
        style={{ background: color }}
      />
      <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
            style={{
              background: `${color}22`,
              border: `1px solid ${color}66`,
              color,
              boxShadow: `0 0 22px ${color}55`,
            }}
          >
            <IconCmp name={resource.icon} className="h-7 w-7" />
          </div>
          <div className="min-w-0">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-amber-300">
              <Star className="h-2.5 w-2.5 fill-amber-400" /> Featured · {resource.category}
            </div>
            <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">
              {resource.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              {resource.description}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Stars n={resource.rating} />
              <div className="flex flex-wrap gap-1">
                {resource.tags.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-fuchsia-500 px-4 py-2 text-xs font-bold text-background">
          <ExternalLink className="h-3.5 w-3.5" /> Visit
        </div>
      </div>
    </motion.a>
  );
}

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  const cat = resourceCategories.find((c) => c.id === resource.category);
  const color = cat?.color ?? "#fbbf24";
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
      whileHover={{ scale: 1.02, y: -2 }}
      className="glass group flex flex-col gap-3 rounded-2xl p-4 transition-all"
      style={{ borderTop: `2px solid ${color}55` }}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
          style={{
            background: `${color}22`,
            border: `1px solid ${color}55`,
            color,
          }}
        >
          <IconCmp name={resource.icon} className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="line-clamp-2 text-sm font-bold leading-snug text-foreground">
            {resource.title}
          </h4>
          <div className="mt-1">
            <Stars n={resource.rating} />
          </div>
        </div>
      </div>
      <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground">
        {resource.description}
      </p>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {resource.tags.slice(0, 2).map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] text-muted-foreground"
            >
              #{t}
            </span>
          ))}
        </div>
        <span
          className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors"
          style={{ color }}
        >
          <ExternalLink className="h-3 w-3" /> Visit
        </span>
      </div>
    </motion.a>
  );
}

function CategoryCard({
  cat,
  count,
  index,
  onClick,
}: {
  cat: { id: ResourceCategory; name: string; description: string; icon: string; color: string };
  count: number;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
      whileHover={{ scale: 1.03, y: -3, rotateX: 2, rotateY: -2 }}
      className="glass group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl p-5 text-left"
      style={{ borderTop: `2px solid ${cat.color}55`, perspective: 1000 }}
    >
      <div
        className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
        style={{ background: cat.color }}
      />
      <div className="relative flex w-full items-center justify-between">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
          style={{
            background: `${cat.color}22`,
            border: `1px solid ${cat.color}55`,
            color: cat.color,
            boxShadow: `0 0 18px ${cat.color}33`,
          }}
        >
          <IconCmp name={cat.icon} className="h-6 w-6" />
        </div>
        <span
          className="rounded-full px-2 py-0.5 text-[10px] font-bold"
          style={{ background: `${cat.color}22`, color: cat.color }}
        >
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>
      <div className="relative">
        <h3 className="text-base font-bold tracking-tight text-foreground">{cat.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{cat.description}</p>
      </div>
    </motion.button>
  );
}

const PATH_SUBTITLE =
  "Curated references aligned with Robbins, WHO, ASH, AABB.";
const PHARM_SUBTITLE =
  "Curated references aligned with Katzung, Goodman & Gilman, WHO, NICE.";

export function ArcaneLibrary() {
  const activeSubject = useGameStore((s) => s.activeSubject);
  const accent = SUBJECT_COLORS[activeSubject];
  const subjectLabel = SUBJECT_LABELS[activeSubject];
  const isPharm = activeSubject === "pharmacology";

  const activeResources = isPharm ? pharmResources : resources;
  const subtitle = isPharm ? PHARM_SUBTITLE : PATH_SUBTITLE;

  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState<ResourceCategory | null>(null);

  const featured = useMemo(() => {
    if (isPharm) {
      return pharmResources.find((r) => r.id === "katzung") ?? pharmResources[0];
    }
    return resources.find((r) => r.id === "robbins-basic") ?? resources[0];
  }, [isPharm]);

  const filtered = useMemo(() => {
    if (query.trim().length > 0) {
      return isPharm ? searchPharmResources(query) : searchResources(query);
    }
    if (activeCat) return activeResources.filter((r) => r.category === activeCat);
    return null;
  }, [query, activeCat, isPharm, activeResources]);

  const countsByCategory = useMemo(() => {
    const m = new Map<ResourceCategory, number>();
    for (const r of activeResources) m.set(r.category, (m.get(r.category) ?? 0) + 1);
    return m;
  }, [activeResources]);

  // Reset category / query when subject switches
  const [lastSubject, setLastSubject] = useState(activeSubject);
  if (activeSubject !== lastSubject) {
    setLastSubject(activeSubject);
    setQuery("");
    setActiveCat(null);
  }

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-foreground">
          <Library className="h-6 w-6" style={{ color: accent }} />
          Arcane Library
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {activeResources.length} curated international-standard {subjectLabel.toLowerCase()}{" "}
          references — {subtitle} Atlases, textbooks, guidelines, journals, and video courses.
        </p>
      </motion.div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActiveCat(null);
          }}
          placeholder={`Search the ${subjectLabel.toLowerCase()} library — title, description, or tag…`}
          className="glass border-white/10 bg-white/[0.04] pl-9 text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* Featured */}
      {!query && !activeCat && (
        <FeaturedResource resource={featured} />
      )}

      {/* Category grid */}
      {!query && !activeCat && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resourceCategories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              count={countsByCategory.get(cat.id) ?? 0}
              index={i}
              onClick={() => setActiveCat(cat.id)}
            />
          ))}
        </div>
      )}

      {/* Filtered / category view */}
      <AnimatePresence mode="wait">
        {filtered && (
          <motion.div
            key={query + "-" + (activeCat ?? "none") + "-" + activeSubject}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                {activeCat && !query && (
                  <h2 className="text-lg font-bold tracking-tight text-foreground">
                    {resourceCategories.find((c) => c.id === activeCat)?.name}
                  </h2>
                )}
                {query && (
                  <h2 className="text-lg font-bold tracking-tight text-foreground">
                    Search results for “{query}”
                  </h2>
                )}
                <p className="text-xs text-muted-foreground">
                  {filtered.length} {filtered.length === 1 ? "resource" : "resources"} found
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setQuery("");
                  setActiveCat(null);
                }}
                className="gap-1.5 border-white/10 bg-white/5 text-foreground hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" /> Back to categories
              </Button>
            </div>

            {filtered.length === 0 ? (
              <div className="glass flex flex-col items-center gap-2 rounded-2xl p-8 text-center">
                <BookOpen className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  No resources matched your search.
                </p>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((r, i) => (
                  <ResourceCard key={r.id} resource={r} index={i} />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
