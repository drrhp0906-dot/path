# Task 3 — Add Pharmacology Subject (full-stack-developer)

## Summary
Extended the existing gamified Pathology Ascension dashboard with a second subject — Pharmacology — sharing the same dark-cosmic visual language but with its own amber accent, 50-node skill tree, 20-day campaign, 10-template case generator (with rich prescription / management / interactions / monitoring sections), 30+ Katzung-aligned resources, and 25+ achievements. The Zustand store was already refactored to dual-subject shape (Task ID 3 brief), so every existing pathology component had to be re-pointed at the new per-subject slices. A new `SubjectSwitcher` component with a sliding framer-motion pill drives the active subject across the whole UI.

## Files Created
- `src/components/pathology/SubjectSwitcher.tsx` — two-pill toggle (Microscope=cyan/pathology, Pill=amber/pharmacology) with framer-motion `layoutId="subject-pill"` for the sliding glow.

## Files Modified
- `src/app/page.tsx` — mobile SubjectSwitcher in the header, AnimatePresence keyed on `tab + "-" + subject` so subject swaps fade, dynamic footer with dual-subject credits.
- `src/components/pathology/Sidebar.tsx` — rewrote PlayerCard (now reads from active subject's slice), added `SubjectMiniStats` showing BOTH subjects' progress side-by-side (active row glows), per-subject nav hints, brand header uses active accent.
- `src/components/pathology/CommandCenter.tsx` — subject-aware campaign (path vs pharm), recent achievements from active subject, per-subject quote set (Robbins Whisper vs Katzung Whisper), accent drives XP bar + generate button.
- `src/components/pathology/SkillTreeView.tsx` — picks `skillTree` vs `pharmSkillTree`, masteredNodes from active slice, accent-aware legend.
- `src/components/pathology/SkillNodeDialog.tsx` — selects `isMastered` + `masteredNodes` from active subject slice.
- `src/components/pathology/DailyCampaign.tsx` — subject-aware campaign, extended `PHASE_META` to cover pharmacology phases (CNS, CVS, CVS & Blood, Endocrine, GIT & Endocrine, Antimicrobial, Consolidation, Final Sprint).
- `src/components/pathology/CaseRandomizer.tsx` — biggest change: switches between `generateCase` / `generatePharmCase`; hero title "Diagnostic Crucible" vs "Prescription Crucible"; NEW `PharmExtraSections` component renders Prescription (Rx) table, numbered Management Protocol, Drug Interactions bullets, Monitoring Advice paragraph — only after reveal for pharmacology.
- `src/components/pathology/ArcaneLibrary.tsx` — subject-aware resources list + search function + featured (Robbins vs Katzung) + subtitle.
- `src/components/pathology/Achievements.tsx` — picks active subject's achievement list, "X / N unlocked" reflects subject's total.
- `src/components/pathology/SettingsPanel.tsx` — dual-subject progress section (side-by-side rows), reset AlertDialog scoped to active subject with explicit confirmation.
- `src/components/pathology/AchievementToast.tsx` — watches BOTH `pathologyState.unlockedAchievements` and `pharmacologyState.unlockedAchievements`; toast header reads "🏆 {SubjectLabel} Achievement Unlocked · {rarity}".
- `src/data/pharmResources.ts` — minimal lint fix: empty `interface PharmResource extends Resource {}` → `type PharmResource = Resource` (no data semantics changed).

## Issues Encountered
1. Existing UI was broken by the v2 store refactor (old flat `s.totalXP` / `s.masteredNodes` / `s.completedDays` no longer exist) — dev.log showed 500 errors. Every pathology component re-pointed at the new per-subject slices.
2. `react-hooks/exhaustive-deps` flagged `useMemo` in CaseRandomizer once `isPharm` was used in the body. Fixed by listing `isPharm` in deps (it's derived from `activeSubject`).
3. `@typescript-eslint/no-empty-object-type` flagged pre-existing `export interface PharmResource extends Resource {}`. Minimal fix: type alias.
4. Initial gradient color typo (`#fuchsia` invalid) in CaseRandomizer hero — fixed to `#d946ef`.

## Final State
- Both subjects fully functional with independent XP/level/skills/cases/achievements/days + shared profile + shared streak.
- SubjectSwitcher slides between pills; accent retints XP bar, level badge, nav indicator, generate button, achievement toasts, and many other UI surfaces.
- Pharmacology CaseRandomizer adds rich prescription + protocol + interactions + monitoring sections after diagnosis reveal.
- Settings reset dialog names the subject being reset and confirms the other is preserved.
- Sticky footer credits both Robbins (path) and Katzung/G&G/Tripathi/WHO Model List (pharm).
- **Lint: 0 errors, 0 warnings.**
- **Dev server: HTTP 200 on `/`, no compile or runtime errors** after the new code loaded (legacy `TypeError` entries in dev.log are from before my edits compiled in).
