// ============================================================================
// PHARMACOLOGY ACHIEVEMENTS — Badges for the pharmacology track.
// ============================================================================

import type { Achievement } from "./achievements";

export const pharmAchievements: Achievement[] = [
  // ========================================================================
  // FOUNDATION
  // ========================================================================
  {
    id: "pharm-first-dose",
    name: "First Dose",
    description: "Master your first pharmacology skill node",
    icon: "Pill",
    rarity: "Common",
    category: "Foundation",
    xpReward: 50,
    check: (s) => s.masteredNodes.length >= 1
  },
  {
    id: "pharm-general-master",
    name: "Pharmacologist's Forge",
    description: "Master all General Pharmacology nodes",
    icon: "Atom",
    rarity: "Rare",
    category: "Foundation",
    xpReward: 350,
    check: (s) =>
      ["pharm-bioavailability", "pharm-routes", "pharm-antagonism", "pharm-pk", "pharm-biotransformation", "pharm-tdm", "pharm-trials", "pharm-adr", "pharm-tolerance", "pharm-anaphylaxis", "pharm-gpcr", "pharm-ndds"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "pharm-ans-master",
    name: "Autonomic Warlord",
    description: "Master all ANS nodes (adrenergic, cholinergic, glaucoma, OP poisoning)",
    icon: "Network",
    rarity: "Epic",
    category: "Foundation",
    xpReward: 500,
    check: (s) =>
      ["pharm-adrenergic-class", "pharm-adrenaline", "pharm-sympatholytics", "pharm-glaucoma", "pharm-op-poisoning", "pharm-cholinergics", "pharm-skeletal-muscle", "pharm-la"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "pharm-autacoids-master",
    name: "Inflammatory Master",
    description: "Master all Autacoids & Respiratory nodes (NSAIDs, asthma, antihistamines, antigout)",
    icon: "Wind",
    rarity: "Rare",
    category: "Foundation",
    xpReward: 400,
    check: (s) =>
      ["pharm-nsaids", "pharm-h1-blockers", "pharm-5ht", "pharm-antigout", "pharm-asthma", "pharm-cough"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },

  // ========================================================================
  // SYSTEMIC
  // ========================================================================
  {
    id: "pharm-cns-master",
    name: "Mind Bender",
    description: "Master all CNS pharmacology nodes",
    icon: "BrainCircuit",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 500,
    check: (s) =>
      ["pharm-bzd", "pharm-anesthesia", "pharm-antiepileptics", "pharm-opioids", "pharm-antipsychotics", "pharm-antiparkinson", "pharm-antidepressants"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "pharm-cvs-master",
    name: "Cardiac Surgeon",
    description: "Master all CVS pharmacology nodes",
    icon: "HeartPulse",
    rarity: "Legendary",
    category: "Systemic",
    xpReward: 600,
    check: (s) =>
      ["pharm-antihypertensives", "pharm-chf", "pharm-antianginal", "pharm-antiarrhythmic", "pharm-hypertensive-emergency"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "pharm-mi-flagship",
    name: "STEMI Saviour",
    description: "Master the Acute MI drug therapy (flagship topic)",
    icon: "HeartPulse",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 250,
    check: (s) => s.masteredNodes.includes("pharm-antihypertensives") && s.masteredNodes.includes("pharm-antianginal")
  },
  {
    id: "pharm-op-flagship",
    name: "OP Poisoning Specialist",
    description: "Master OP poisoning — flagship long-answer",
    icon: "Biohazard",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 250,
    check: (s) => s.masteredNodes.includes("pharm-op-poisoning")
  },
  {
    id: "pharm-glaucoma-flagship",
    name: "Eye on Pressure",
    description: "Master Glaucoma Drug Therapy — flagship long-answer",
    icon: "Eye",
    rarity: "Rare",
    category: "Systemic",
    xpReward: 200,
    check: (s) => s.masteredNodes.includes("pharm-glaucoma")
  },
  {
    id: "pharm-kidney-blood-master",
    name: "Fluid & Clot Specialist",
    description: "Master Kidney & Blood pharmacology (diuretics, anticoagulants, lipids, anemia)",
    icon: "Droplet",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 500,
    check: (s) =>
      ["pharm-diuretics", "pharm-anticoagulants", "pharm-antiplatelets", "pharm-hypolipidemics", "pharm-anemia-drugs"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "pharm-git-master",
    name: "Gut Healer",
    description: "Master all GIT pharmacology nodes (antiulcer, antiemetics, laxatives, antidiarrheals)",
    icon: "Pill",
    rarity: "Rare",
    category: "Systemic",
    xpReward: 400,
    check: (s) =>
      ["pharm-antiulcer", "pharm-antiemetics", "pharm-laxatives", "pharm-antidiarrheal"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "pharm-endo-master",
    name: "Endocrine Alchemist",
    description: "Master all Endocrine pharmacology nodes (insulin, steroids, thyroid, OCPs)",
    icon: "Sparkles",
    rarity: "Legendary",
    category: "Systemic",
    xpReward: 600,
    check: (s) =>
      ["pharm-insulin", "pharm-dka", "pharm-corticosteroids", "pharm-antithyroid", "pharm-steroids-repro", "pharm-osteoporosis"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },

  // ========================================================================
  // ANTIMICROBIAL
  // ========================================================================
  {
    id: "pharm-abx-starter",
    name: "Antibiotic Apprentice",
    description: "Master β-lactams, aminoglycosides, macrolides, tetracyclines",
    icon: "Biohazard",
    rarity: "Rare",
    category: "Systemic",
    xpReward: 400,
    check: (s) =>
      ["pharm-beta-lactams", "pharm-aminoglycosides", "pharm-tetracyclines", "pharm-macrolides"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "pharm-reserve-abx",
    name: "Reserve Antibiotic Warden",
    description: "Master vancomycin, metronidazole, cotrimoxazole, fluoroquinolones",
    icon: "Shield",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 350,
    check: (s) =>
      ["pharm-fluoroquinolones", "pharm-misc-abx"].every((id) => s.masteredNodes.includes(id))
  },
  {
    id: "pharm-antifungal-viral",
    name: "Fungal & Viral Slayer",
    description: "Master antifungals + antivirals (HAART)",
    icon: "Shield",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 400,
    check: (s) =>
      ["pharm-antifungals", "pharm-antiviral"].every((id) => s.masteredNodes.includes(id))
  },
  {
    id: "pharm-tb-malaria",
    name: "Tropical Disease Champion",
    description: "Master Anti-TB + Antimalarial (flagship long-answers)",
    icon: "Lung",
    rarity: "Legendary",
    category: "Systemic",
    xpReward: 500,
    check: (s) =>
      ["pharm-antitb", "pharm-antimalarial"].every((id) => s.masteredNodes.includes(id))
  },
  {
    id: "pharm-immuno-master",
    name: "Immune Architect",
    description: "Master Immunosuppressants + Anticancer drugs",
    icon: "Shield",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 300,
    check: (s) =>
      ["pharm-immunosuppress", "pharm-anticancer"].every((id) => s.masteredNodes.includes(id))
  },

  // ========================================================================
  // MASTERY
  // ========================================================================
  {
    id: "pharm-campaign-week-1",
    name: "Foundation Forged",
    description: "Complete Days 1–4 of pharmacology campaign",
    icon: "Medal",
    rarity: "Rare",
    category: "Mastery",
    xpReward: 500,
    check: (s) => [1, 2, 3, 4].every((d) => s.completedDays.includes(d))
  },
  {
    id: "pharm-campaign-week-2",
    name: "CNS & CVS Veteran",
    description: "Complete Days 5–9 of pharmacology campaign",
    icon: "Medal",
    rarity: "Epic",
    category: "Mastery",
    xpReward: 600,
    check: (s) => [5, 6, 7, 8, 9].every((d) => s.completedDays.includes(d))
  },
  {
    id: "pharm-campaign-week-3",
    name: "Antimicrobial Conqueror",
    description: "Complete Days 10–14 of pharmacology campaign",
    icon: "Crown",
    rarity: "Legendary",
    category: "Mastery",
    xpReward: 700,
    check: (s) => [10, 11, 12, 13, 14].every((d) => s.completedDays.includes(d))
  },
  {
    id: "pharm-campaign-week-4",
    name: "Pharmacology Master",
    description: "Complete Days 15–20 (integration + final boss)",
    icon: "Trophy",
    rarity: "Legendary",
    category: "Mastery",
    xpReward: 1000,
    check: (s) => [15, 16, 17, 18, 19, 20].every((d) => s.completedDays.includes(d))
  },
  {
    id: "pharm-grandmaster",
    name: "Pharmacology Grandmaster",
    description: "Master ALL pharmacology skill nodes across every branch",
    icon: "Sparkles",
    rarity: "Legendary",
    category: "Mastery",
    xpReward: 2000,
    check: (s) => s.masteredNodes.length >= 50
  },

  // ========================================================================
  // SPECIAL
  // ========================================================================
  {
    id: "pharm-case-hunter",
    name: "Clinical Case Solver",
    description: "Solve 10 pharmacology case studies",
    icon: "Search",
    rarity: "Common",
    category: "Special",
    xpReward: 100,
    check: (s) => s.casesSolved >= 10
  },
  {
    id: "pharm-case-veteran",
    name: "Prescription Veteran",
    description: "Solve 50 pharmacology case studies",
    icon: "FileText",
    rarity: "Epic",
    category: "Special",
    xpReward: 400,
    check: (s) => s.casesSolved >= 50
  },
  {
    id: "pharm-case-legend",
    name: "Clinical Pharmacology Legend",
    description: "Solve 100 pharmacology case studies",
    icon: "Brain",
    rarity: "Legendary",
    category: "Special",
    xpReward: 800,
    check: (s) => s.casesSolved >= 100
  },
  {
    id: "pharm-streak-master",
    name: "Daily Pill Taker",
    description: "Maintain a 7-day streak in pharmacology",
    icon: "Calendar",
    rarity: "Rare",
    category: "Special",
    xpReward: 300,
    check: (s) => s.streak >= 7
  },
  {
    id: "pharm-streak-legend",
    name: "Iron Pillbox",
    description: "Maintain a 20-day streak — entire pharmacology campaign",
    icon: "Crown",
    rarity: "Legendary",
    category: "Special",
    xpReward: 1000,
    check: (s) => s.streak >= 20
  },
  {
    id: "pharm-level-10",
    name: "Pharmacology Resident",
    description: "Reach level 10 in pharmacology",
    icon: "Star",
    rarity: "Rare",
    category: "Special",
    xpReward: 200,
    check: (s) => s.level >= 10
  },
  {
    id: "pharm-level-20",
    name: "Pharmacology Consultant",
    description: "Reach level 20 in pharmacology",
    icon: "Star",
    rarity: "Epic",
    category: "Special",
    xpReward: 400,
    check: (s) => s.level >= 20
  }
];
