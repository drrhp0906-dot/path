// ============================================================================
// ACHIEVEMENTS — Badges that unlock as the player progresses.
// ============================================================================

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  category: "Foundation" | "Hematology" | "Systemic" | "Mastery" | "Special";
  xpReward: number;
  check: (state: AchievementCheckInput) => boolean;
}

export interface AchievementCheckInput {
  totalXP: number;
  level: number;
  masteredNodes: string[];
  completedDays: number[];
  casesSolved: number;
  streak: number;
  perfectDays: number;
  branchesCompleted: string[];
}

export const achievements: Achievement[] = [
  // ========================================================================
  // FOUNDATION
  // ========================================================================
  {
    id: "first-blood",
    name: "First Blood",
    description: "Master your first skill node",
    icon: "Syringe",
    rarity: "Common",
    category: "Foundation",
    xpReward: 50,
    check: (s) => s.masteredNodes.length >= 1
  },
  {
    id: "triple-threat",
    name: "Triple Threat",
    description: "Master 3 skill nodes",
    icon: "Trophy",
    rarity: "Common",
    category: "Foundation",
    xpReward: 100,
    check: (s) => s.masteredNodes.length >= 3
  },
  {
    id: "inflammation-master",
    name: "Inflammation Master",
    description: "Master all nodes in the Inflammation & Healing branch",
    icon: "Flame",
    rarity: "Rare",
    category: "Foundation",
    xpReward: 300,
    check: (s) =>
      ["acute-inflam", "chemical-mediators", "phagocytosis", "chronic-inflam", "wound-healing", "hypersensitivity"].every(
        (id) => s.masteredNodes.includes(id)
      )
  },
  {
    id: "hemodynamics-master",
    name: "Hemodynamic Warlord",
    description: "Master all nodes in the Hemodynamic Disorders branch",
    icon: "Droplets",
    rarity: "Rare",
    category: "Foundation",
    xpReward: 350,
    check: (s) =>
      ["edema", "congestion", "thrombosis", "embolism", "infarction", "shock-overview", "septic-shock"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },
  {
    id: "neoplasia-master",
    name: "Cancer Sage",
    description: "Master all nodes in the Neoplasia Core branch",
    icon: "Dna",
    rarity: "Epic",
    category: "Foundation",
    xpReward: 400,
    check: (s) =>
      ["benign-malignant", "biological-carcinogenesis", "chemical-carcinogens", "oncogenic-viruses", "metastasis", "paraneoplastic", "tumor-markers"].every(
        (id) => s.masteredNodes.includes(id)
      )
  },

  // ========================================================================
  // HEMATOLOGY
  // ========================================================================
  {
    id: "anemia-alchemist",
    name: "Anemia Alchemist",
    description: "Master the Iron Deficiency, Megaloblastic, and Sickle Cell nodes",
    icon: "Droplet",
    rarity: "Rare",
    category: "Hematology",
    xpReward: 300,
    check: (s) =>
      ["iron-deficiency", "megaloblastic", "sickle-cell"].every((id) => s.masteredNodes.includes(id))
  },
  {
    id: "leukemia-sage",
    name: "Leukemia Sage",
    description: "Master AML, CML, and Leukemoid Reaction nodes",
    icon: "Shield",
    rarity: "Epic",
    category: "Hematology",
    xpReward: 350,
    check: (s) => ["aml", "cml", "leukemoid-reaction"].every((id) => s.masteredNodes.includes(id))
  },
  {
    id: "blood-banker",
    name: "Blood Bank Specialist",
    description: "Master Blood Groups, Transfusion Reactions, and Blood Components",
    icon: "Heart",
    rarity: "Epic",
    category: "Hematology",
    xpReward: 350,
    check: (s) =>
      ["blood-groups", "transfusion-reactions", "blood-components", "coombs-test"].every((id) =>
        s.masteredNodes.includes(id)
      )
  },

  // ========================================================================
  // SYSTEMIC
  // ========================================================================
  {
    id: "heart-slayer",
    name: "Heart Slayer",
    description: "Master the Myocardial Infarction node — flagship 12-mark question",
    icon: "HeartPulse",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 250,
    check: (s) => s.masteredNodes.includes("mi")
  },
  {
    id: "liver-legend",
    name: "Liver Legend",
    description: "Master Alcoholic Liver Disease and Cirrhosis — flagship long case",
    icon: "Wine",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 250,
    check: (s) =>
      s.masteredNodes.includes("alcoholic-liver") && s.masteredNodes.includes("cirrhosis")
  },
  {
    id: "aids-warrior",
    name: "AIDS Warrior",
    description: "Master the HIV/AIDS node — flagship long case & autopsy",
    icon: "Biohazard",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 250,
    check: (s) => s.masteredNodes.includes("hiv-aids")
  },
  {
    id: "lab-artisan",
    name: "Laboratory Artisan",
    description: "Master FNAC, Frozen Section, Fixatives, and Special Stains",
    icon: "Microscope",
    rarity: "Epic",
    category: "Systemic",
    xpReward: 350,
    check: (s) =>
      ["fnac", "frozen-section", "fixatives", "special-stains"].every((id) => s.masteredNodes.includes(id))
  },

  // ========================================================================
  // MASTERY
  // ========================================================================
  {
    id: "campaign-week-1",
    name: "Foundation Forged",
    description: "Complete Days 1–5 of the 20-day campaign",
    icon: "Medal",
    rarity: "Rare",
    category: "Mastery",
    xpReward: 500,
    check: (s) => [1, 2, 3, 4, 5].every((d) => s.completedDays.includes(d))
  },
  {
    id: "campaign-week-2",
    name: "Hematology Honed",
    description: "Complete Days 6–8 of the 20-day campaign",
    icon: "Medal",
    rarity: "Rare",
    category: "Mastery",
    xpReward: 500,
    check: (s) => [6, 7, 8].every((d) => s.completedDays.includes(d))
  },
  {
    id: "campaign-week-3",
    name: "Systemic Sovereign",
    description: "Complete Days 9–15 of the 20-day campaign",
    icon: "Crown",
    rarity: "Epic",
    category: "Mastery",
    xpReward: 700,
    check: (s) => [9, 10, 11, 12, 13, 14, 15].every((d) => s.completedDays.includes(d))
  },
  {
    id: "campaign-week-4",
    name: "Final Frontier",
    description: "Complete Days 16–20 of the 20-day campaign",
    icon: "Rocket",
    rarity: "Legendary",
    category: "Mastery",
    xpReward: 1000,
    check: (s) => [16, 17, 18, 19, 20].every((d) => s.completedDays.includes(d))
  },
  {
    id: "grandmaster",
    name: "Pathology Grandmaster",
    description: "Master ALL skill nodes across every branch",
    icon: "Trophy",
    rarity: "Legendary",
    category: "Mastery",
    xpReward: 2000,
    check: (s) => s.masteredNodes.length >= 60 // total nodes
  },

  // ========================================================================
  // SPECIAL
  // ========================================================================
  {
    id: "case-hunter",
    name: "Case Hunter",
    description: "Solve 10 randomised case studies",
    icon: "Search",
    rarity: "Common",
    category: "Special",
    xpReward: 100,
    check: (s) => s.casesSolved >= 10
  },
  {
    id: "case-veteran",
    name: "Case Veteran",
    description: "Solve 50 randomised case studies",
    icon: "Skull",
    rarity: "Epic",
    category: "Special",
    xpReward: 400,
    check: (s) => s.casesSolved >= 50
  },
  {
    id: "case-legend",
    name: "Diagnostic Legend",
    description: "Solve 100 randomised case studies",
    icon: "Brain",
    rarity: "Legendary",
    category: "Special",
    xpReward: 800,
    check: (s) => s.casesSolved >= 100
  },
  {
    id: "streak-starter",
    name: "Streak Starter",
    description: "Maintain a 3-day streak",
    icon: "Flame",
    rarity: "Common",
    category: "Special",
    xpReward: 100,
    check: (s) => s.streak >= 3
  },
  {
    id: "streak-master",
    name: "Streak Master",
    description: "Maintain a 7-day streak",
    icon: "Zap",
    rarity: "Rare",
    category: "Special",
    xpReward: 300,
    check: (s) => s.streak >= 7
  },
  {
    id: "streak-legend",
    name: "Iron Will",
    description: "Maintain a 20-day streak — the entire campaign",
    icon: "Crown",
    rarity: "Legendary",
    category: "Special",
    xpReward: 1000,
    check: (s) => s.streak >= 20
  },
  {
    id: "level-5",
    name: "Apprentice Pathologist",
    description: "Reach level 5",
    icon: "Star",
    rarity: "Common",
    category: "Special",
    xpReward: 100,
    check: (s) => s.level >= 5
  },
  {
    id: "level-10",
    name: "Resident Pathologist",
    description: "Reach level 10",
    icon: "Star",
    rarity: "Rare",
    category: "Special",
    xpReward: 200,
    check: (s) => s.level >= 10
  },
  {
    id: "level-20",
    name: "Attending Pathologist",
    description: "Reach level 20",
    icon: "Star",
    rarity: "Epic",
    category: "Special",
    xpReward: 400,
    check: (s) => s.level >= 20
  },
  {
    id: "level-30",
    name: "Consultant Pathologist",
    description: "Reach level 30 — final mastery tier",
    icon: "Sparkles",
    rarity: "Legendary",
    category: "Special",
    xpReward: 800,
    check: (s) => s.level >= 30
  }
];

export const rarityColors: Record<Achievement["rarity"], string> = {
  Common: "#94a3b8",
  Rare: "#3b82f6",
  Epic: "#a855f7",
  Legendary: "#f59e0b"
};
