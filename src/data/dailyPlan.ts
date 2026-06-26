// ============================================================================
// 20-DAY CAMPAIGN — Pathology mastery under 20 days (10 hrs/day = 200 hrs)
// Pace: 3 phases × ~7 days, with mock-exam final boss on Day 20.
// Aligned with the user's specific question bank (long cases, 12m, 10m,
// 8m theory essays, 5m / 4m / 3m short notes, 2m short answers).
// ============================================================================

export interface DayQuest {
  day: number;
  phase: string;
  title: string;
  theme: string; // quick identifier
  icon: string; // lucide icon
  totalHours: number;
  sessions: QuestSession[];
  bossBattle?: {
    name: string;
    description: string;
    rewardXp: number;
  };
}

export interface QuestSession {
  id: string;
  duration: number; // hours
  timeOfDay: "Morning" | "Afternoon" | "Evening";
  topic: string;
  activity: string;
  branchId: string; // links to skillTree branch
  nodeIds: string[]; // linked skill nodes
  xpReward: number;
}

// ----------------------------------------------------------------------------
// PHASE 1 — FOUNDATION (Days 1–5): General pathology principles
// ----------------------------------------------------------------------------

const day1: DayQuest = {
  day: 1,
  phase: "Foundation",
  title: "The Body's First Cry — Inflammation & Healing",
  theme: "Inflammation",
  icon: "Flame",
  totalHours: 10,
  sessions: [
    {
      id: "d1-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Acute Inflammation — Vascular & Cellular Events",
      activity:
        "Master the Lewis triple response, vascular permeability mediators, and the 5-step cellular sequence (margination → emigration → chemotaxis → phagocytosis). Draw flowcharts in your notebook.",
      branchId: "inflammation",
      nodeIds: ["acute-inflam", "chemical-mediators"],
      xpReward: 240
    },
    {
      id: "d1-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Chronic & Granulomatous Inflammation",
      activity:
        "Compare acute vs chronic. Learn giant cell types (Langhans, Touton, foreign body). Memorise the 6 causes of granulomatous inflammation (TB, leprosy, syphilis, fungal, foreign body, sarcoid).",
      branchId: "inflammation",
      nodeIds: ["chronic-inflam"],
      xpReward: 120
    },
    {
      id: "d1-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Wound Healing — Primary & Secondary Union",
      activity:
        "Write a 4-mark answer on phases of healing. Compare primary vs secondary intention in a table. List 8 local + 8 systemic factors delaying healing. Discuss keloid vs hypertrophic scar.",
      branchId: "inflammation",
      nodeIds: ["wound-healing"],
      xpReward: 240
    },
    {
      id: "d1-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Hypersensitivity Reactions + Phagocytosis",
      activity:
        "Make a one-page table for Gell & Coombs types I–IV with mechanism + 3 examples each. Revise oxygen-dependent killing (NADPH oxidase, MPO-halide) and CGD.",
      branchId: "inflammation",
      nodeIds: ["hypersensitivity", "phagocytosis"],
      xpReward: 160
    }
  ]
};

const day2: DayQuest = {
  day: 2,
  phase: "Foundation",
  title: "Rivers of the Body — Hemodynamic Disorders",
  theme: "Hemodynamics",
  icon: "Droplets",
  totalHours: 10,
  sessions: [
    {
      id: "d2-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Edema & Congestion",
      activity:
        "Write Starling forces on flashcard. List 4 mechanisms of edema with 2 examples each. Sketch nutmeg liver & describe heart failure cells.",
      branchId: "hemodynamics",
      nodeIds: ["edema", "congestion"],
      xpReward: 160
    },
    {
      id: "d2-s2",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Thrombosis — Virchow's Triad, Fate, Postmortem vs Antemortem",
      activity:
        "Memorise Virchow's triad with examples. Draw thrombus fate diagram. Make a side-by-side table: antemortem thrombus vs postmortem clot (lines of Zahn, consistency, attachment).",
      branchId: "hemodynamics",
      nodeIds: ["thrombosis"],
      xpReward: 240
    },
    {
      id: "d2-s3",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Embolism & Infarction",
      activity:
        "List embolus types. Memorise fat embolism triad (3–7 days post-fracture: dyspnea, neuro, petechiae). Compare red vs white infarcts (organs, mechanism).",
      branchId: "hemodynamics",
      nodeIds: ["embolism", "infarction"],
      xpReward: 160
    },
    {
      id: "d2-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Shock — Types, Stages, Septic Shock Etiopathogenesis",
      activity:
        "12-mark question drill: 'Define Shock, mention types, discuss etiopathogenesis of Septic Shock'. Write a full essay with LPS → TLR4 → cytokine storm → iNOS → refractory vasodilation. Sketch shock organs.",
      branchId: "hemodynamics",
      nodeIds: ["shock-overview", "septic-shock"],
      xpReward: 240
    }
  ],
  bossBattle: {
    name: "Foundation Trial I — Hemodynamics Essay",
    description:
      "Write a 12-mark essay on Septic Shock etiopathogenesis without notes. Time: 25 minutes.",
    rewardXp: 200
  }
};

const day3: DayQuest = {
  day: 3,
  phase: "Foundation",
  title: "Cells Gone Rogue — Neoplasia Part I",
  theme: "Neoplasia",
  icon: "Dna",
  totalHours: 10,
  sessions: [
    {
      id: "d3-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Benign vs Malignant + Definitions",
      activity:
        "Write the comparison table. Memorise anaplasia markers (pleomorphism, hyperchromasia, abnormal mitoses). Note exceptions (leiomyoma, meningioma).",
      branchId: "neoplasia",
      nodeIds: ["benign-malignant"],
      xpReward: 160
    },
    {
      id: "d3-s2",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Biological Carcinogenesis (12-mark essay)",
      activity:
        "Write a full 12-mark essay: proto-oncogenes (RAS, MYC, ABL), tumor suppressors (RB, p53, APC), apoptosis regulators (BCL-2), DNA repair. Cover Hanahan & Weinberg 8 hallmarks.",
      branchId: "neoplasia",
      nodeIds: ["biological-carcinogenesis"],
      xpReward: 240
    },
    {
      id: "d3-s3",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Chemical Carcinogens + Oncogenic Viruses",
      activity:
        "Table: initiator vs promoter, direct vs indirect. Memorise chemical → tumor pairs (asbestos → mesothelioma, vinyl chloride → angiosarcoma, aflatoxin → HCC). Memorise virus → tumor pairs (HPV → cervix, EBV → Burkitt, HTLV-1 → ATLL).",
      branchId: "neoplasia",
      nodeIds: ["chemical-carcinogens", "oncogenic-viruses"],
      xpReward: 160
    },
    {
      id: "d3-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Metastasis — Mechanisms & Routes (10-mark essay)",
      activity:
        "Write a 10-mark essay: invasion-metastasis cascade (detachment, EMT, MMPs, intravasation, extravasation, angiogenesis). List 3 routes with examples. Seed-soil theory.",
      branchId: "neoplasia",
      nodeIds: ["metastasis"],
      xpReward: 240
    }
  ]
};

const day4: DayQuest = {
  day: 4,
  phase: "Foundation",
  title: "Tumor Atlas — Neoplasia Part II",
  theme: "Organ-specific Neoplasms",
  icon: "Layers",
  totalHours: 10,
  sessions: [
    {
      id: "d4-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Carcinomas — Breast, Lung, Stomach, Cervix",
      activity:
        "For each: etiology, morphology, spread, markers. Breast — BRCA1/2, ER/PR/HER2. Lung — 4 subtypes & paraneoplastic. Stomach — intestinal vs diffuse, signet ring. Cervix — HPV, CIN.",
      branchId: "neoplasia",
      nodeIds: ["metastasis"],
      xpReward: 240
    },
    {
      id: "d4-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Thyroid, Ovary, Testis Tumors",
      activity:
        "Thyroid: papillary (Orphan Annie eye, psammoma), follicular, medullary (calcitonin), anaplastic. Ovary: surface epithelial, germ cell (teratoma — mature vs immature), sex cord. Testis: seminoma (radiosensitive), non-seminomatous.",
      branchId: "endo",
      nodeIds: ["ovarian-tumors"],
      xpReward: 160
    },
    {
      id: "d4-s3",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Bone Tumors — Osteosarcoma, Giant Cell Tumor",
      activity:
        "Osteosarcoma — adolescent, metaphysis, sunburst, Codman triangle, ↑ALK. Giant cell — 20–40 yrs, epiphysis, soap-bubble, osteoclast-like giant cells.",
      branchId: "genetics",
      nodeIds: [],
      xpReward: 160
    },
    {
      id: "d4-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Salivary Gland + Skin Cancers",
      activity:
        "Pleomorphic adenoma — most common benign, mixed tumor. Mucoepidermoid — most common malignant. Skin: BCC (rodent ulcer, pearly), SCC (keratin pearls), melanoma (ABCD criteria).",
      branchId: "neoplasia",
      nodeIds: [],
      xpReward: 240
    }
  ]
};

const day5: DayQuest = {
  day: 5,
  phase: "Foundation",
  title: "Cells in Distress — Genetics, Calcification, Amyloid, Cell Injury",
  theme: "Genetics & Cell Injury",
  icon: "Atom",
  totalHours: 10,
  sessions: [
    {
      id: "d5-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Down, Turner, Klinefelter Syndromes",
      activity:
        "For each: karyotype, cause (nondisjunction vs translocation), 6 classic features, associated neoplasms.",
      branchId: "genetics",
      nodeIds: ["down-syndrome", "turner-syndrome", "klinefelter"],
      xpReward: 160
    },
    {
      id: "d5-s2",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Calcification + Amyloid + Gangrene",
      activity:
        "Compare dystrophic vs metastatic calcification. Classify amyloid (AL, AA, ATTR, Aβ). Memorise stains: Congo red (apple-green birefringence), Thioflavin T. Dry vs wet vs gas gangrene.",
      branchId: "genetics",
      nodeIds: ["calcification-amyloid", "gangrene"],
      xpReward: 160
    },
    {
      id: "d5-s3",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Cell Injury — Reversible, Irreversible, Apoptosis",
      activity:
        "Sequence of cellular events in ischemia. Mitochondrial MPTP, cytochrome c. Apoptosis intrinsic (BCL-2 family) vs extrinsic (Fas, TNF) → caspase cascade. Necrosis vs apoptosis comparison table.",
      branchId: "genetics",
      nodeIds: ["cell-injury", "necrosis-apoptosis"],
      xpReward: 240
    },
    {
      id: "d5-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Foundation Review + Mock Test",
      activity:
        "Take a 2-hour mock test: 12-mark essay on Biological Carcinogenesis; 4-mark on Necrosis vs Apoptosis; 5-mark on Wound Healing; 3-mark on Special Stains. Self-evaluate against your notes.",
      branchId: "neoplasia",
      nodeIds: [],
      xpReward: 240
    }
  ],
  bossBattle: {
    name: "Foundation Trial V — 5-Day Recap",
    description:
      "Closed-book mock test. Score 70%+ to unlock Phase 2.",
    rewardXp: 250
  }
};

// ----------------------------------------------------------------------------
// PHASE 2 — HEMATOPATHOLOGY & HEMOSTASIS (Days 6–8)
// ----------------------------------------------------------------------------

const day6: DayQuest = {
  day: 6,
  phase: "Hematopathology",
  title: "Crimson Rivers — The Anemia Atlas",
  theme: "Anemias",
  icon: "Droplet",
  totalHours: 10,
  sessions: [
    {
      id: "d6-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Anemia Classification + Blood Indices (12-mark essay)",
      activity:
        "12-mark essay: 'Define and classify Anemia'. Morphological + kinetic classification. Blood indices — formulas, normal values, interpretation.",
      branchId: "rbc-path",
      nodeIds: ["anemia-classification", "blood-indices"],
      xpReward: 240
    },
    {
      id: "d6-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Iron Deficiency Anemia (Long Case Drill)",
      activity:
        "Write a full long-case answer for the 50-year-old with weakness + low MCV/MCH/MCHC: diagnosis, P/S + bone marrow findings, further investigations. Memorise Plummer-Vinson syndrome.",
      branchId: "rbc-path",
      nodeIds: ["iron-deficiency"],
      xpReward: 240
    },
    {
      id: "d6-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Megaloblastic Anemia (12-mark essay)",
      activity:
        "12-mark essay: 'Define and classify Anemia, describe Megaloblastic Anemia in detail'. B12 vs folate causes, pathogenesis of ineffective erythropoiesis, P/S, marrow, neurological features of B12.",
      branchId: "rbc-path",
      nodeIds: ["megaloblastic"],
      xpReward: 160
    },
    {
      id: "d6-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Hemolytic Anemias + Sickle Cell",
      activity:
        "Intravascular vs extravascular hemolysis lab features. Sickle cell — mutation, sickling, complications. Lab: Hb electrophoresis.",
      branchId: "rbc-path",
      nodeIds: ["hemolytic-overview", "sickle-cell"],
      xpReward: 160
    }
  ]
};

const day7: DayQuest = {
  day: 7,
  phase: "Hematopathology",
  title: "White Legion — Leukemias & Lymphomas",
  theme: "Leukemias",
  icon: "Shield",
  totalHours: 10,
  sessions: [
    {
      id: "d7-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Leukemia Classification + AML",
      activity:
        "12-mark essay: 'Define and classify Leukemia, describe AML in detail'. FAB M0–M7, Auer rods, APL (t(15;17)), cytochemistry, flow, complications.",
      branchId: "wbc-path",
      nodeIds: ["leukemia-classification", "aml"],
      xpReward: 240
    },
    {
      id: "d7-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "CML — Morphology & Philadelphia Chromosome (5-mark)",
      activity:
        "5-mark essay: 'Morphological features of different phases of CML'. Ph chromosome t(9;22), BCR-ABL. Phases. Low LAP score. Imatinib treatment.",
      branchId: "wbc-path",
      nodeIds: ["cml"],
      xpReward: 240
    },
    {
      id: "d7-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Leukemoid Reaction vs CML (5-mark contrast)",
      activity:
        "Make a contrast table — LAP score, toxic granules, Ph chromosome, basophilia, causes.",
      branchId: "wbc-path",
      nodeIds: ["leukemoid-reaction"],
      xpReward: 160
    },
    {
      id: "d7-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Hodgkin Lymphoma + Multiple Myeloma",
      activity:
        "Reed-Sternberg cell (CD15+, CD30+). Hodgkin subtypes. CRAB criteria for myeloma. Bence-Jones protein. Skull X-ray.",
      branchId: "wbc-path",
      nodeIds: ["hodgkin-lymphoma", "multiple-myeloma"],
      xpReward: 160
    }
  ]
};

const day8: DayQuest = {
  day: 8,
  phase: "Hematopathology",
  title: "The Coagulation Crucible — Hemostasis & Blood Bank",
  theme: "Hemostasis & Transfusion",
  icon: "Heart",
  totalHours: 10,
  sessions: [
    {
      id: "d8-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Coagulation Cascade + Thrombocytopenia + DIC (5-mark)",
      activity:
        "Draw the cascade (intrinsic, extrinsic, common). List causes of thrombocytopenia. 5-mark essay: 'Causes of thrombocytopenia with pathogenesis of DIC'. DIC labs.",
      branchId: "hemostasis",
      nodeIds: ["coag-cascade", "thrombocytopenia-dic"],
      xpReward: 240
    },
    {
      id: "d8-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Bleeding Disorder Tests",
      activity:
        "PT (extrinsic, INR — warfarin), APTT (intrinsic — heparin, hemophilia), BT (platelet), TT (fibrinogen). Indirect Coombs (cross-match, antenatal), Direct Coombs (AIHA, HDN).",
      branchId: "hemostasis",
      nodeIds: ["coombs-test"],
      xpReward: 160
    },
    {
      id: "d8-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Blood Transfusion Reactions (12-mark essay)",
      activity:
        "12-mark essay: 'Describe blood transfusion reactions in detail'. Acute (hemolytic ABO, TRALI, TACO, anaphylactic, febrile, bacterial) vs delayed (hemolytic Rh, GVHD). Lab workup of mismatch.",
      branchId: "hemostasis",
      nodeIds: ["transfusion-reactions"],
      xpReward: 240
    },
    {
      id: "d8-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Blood Groups + Components + Donor Criteria",
      activity:
        "ABO + Rh + Bombay. Blood components (PRBC, FFP, cryo, platelets). Donor criteria & deferrals. Autologous transfusion.",
      branchId: "hemostasis",
      nodeIds: ["blood-groups", "blood-components"],
      xpReward: 160
    }
  ],
  bossBattle: {
    name: "Hematology Warlord — Day 8 Boss",
    description:
      "Closed-book: Write the 12-mark Blood Transfusion Reactions essay. Time: 25 min. Score 75%+.",
    rewardXp: 250
  }
};

// ----------------------------------------------------------------------------
// PHASE 3 — SYSTEMIC PATHOLOGY (Days 9–15)
// ----------------------------------------------------------------------------

const day9: DayQuest = {
  day: 9,
  phase: "Systemic",
  title: "Heart of the Storm — Cardiovascular Pathology",
  theme: "Cardiovascular",
  icon: "HeartPulse",
  totalHours: 10,
  sessions: [
    {
      id: "d9-s1",
      duration: 4,
      timeOfDay: "Morning",
      topic: "MI — Etiopathogenesis, Morphology, Complications, Lab Dx (12-mark)",
      activity:
        "Write the flagship 12-mark essay on MI. Cover plaque rupture → thrombus, evolving morphology timeline (hrs to weeks), all 8 complications, biomarkers (troponin, CK-MB).",
      branchId: "cvs",
      nodeIds: ["mi", "ihd"],
      xpReward: 320
    },
    {
      id: "d9-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Ischemic Heart Disease — Etiopathogenesis",
      activity:
        "Stable vs unstable vs Prinzmetal angina. Risk factors — modifiable & non-modifiable. Pathogenesis of atherosclerosis.",
      branchId: "cvs",
      nodeIds: ["ihd"],
      xpReward: 160
    },
    {
      id: "d9-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Rheumatic Heart Disease (4-mark)",
      activity:
        "Molecular mimicry (anti-M protein). Aschoff body, Anitschkow cells. Pancarditis. Modified Jones criteria. Chronic RHD — mitral stenosis.",
      branchId: "cvs",
      nodeIds: ["rheumatic"],
      xpReward: 160
    },
    {
      id: "d9-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Infective Endocarditis — Etiopathogenesis",
      activity:
        "Acute (S. aureus) vs subacute (viridans strep). Vegetations. Predisposing conditions. Complications. Duke criteria.",
      branchId: "cvs",
      nodeIds: ["endocarditis"],
      xpReward: 160
    }
  ]
};

const day10: DayQuest = {
  day: 10,
  phase: "Systemic",
  title: "Breath of Decay — Respiratory Pathology",
  theme: "Respiratory",
  icon: "Wind",
  totalHours: 10,
  sessions: [
    {
      id: "d10-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Lobar Pneumonia — Stages, Morphology, Complications (5-mark)",
      activity:
        "5-mark essay: 'Etiology and morphological stages and complications of lobar pneumonia'. 4 stages with timing, gross, microscopy. Carnification, empyema, abscess.",
      branchId: "resp",
      nodeIds: ["lobar-pneumonia"],
      xpReward: 240
    },
    {
      id: "d10-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Bronchopneumonia + Pulmonary TB",
      activity:
        "Compare bronchopneumonia vs lobar (distribution, agents, predisposed). TB — primary (Ghon complex) vs secondary (apex), granuloma morphology, miliary TB, lab diagnosis.",
      branchId: "resp",
      nodeIds: ["bronchopneumonia", "pulmonary-tb"],
      xpReward: 160
    },
    {
      id: "d10-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "COPD — Emphysema (4-mark)",
      activity:
        "Emphysema types (centriacinar smokers, panacinar α1-AT). Pathogenesis: neutrophil elastase. Pink puffer vs blue bloater.",
      branchId: "resp",
      nodeIds: ["emphysema"],
      xpReward: 160
    },
    {
      id: "d10-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Bronchogenic Carcinoma + Pulmonary Edema/Embolism",
      activity:
        "4 subtypes with paraneoplastic syndromes. Spread patterns. Pulmonary embolism — saddle, infarct. Edema — cardiogenic vs non-cardiogenic (ARDS).",
      branchId: "resp",
      nodeIds: ["bronchogenic-carcinoma", "pulmonary-edema-embolism"],
      xpReward: 240
    }
  ]
};

const day11: DayQuest = {
  day: 11,
  phase: "Systemic",
  title: "The Bronze Furnace — Hepatic Pathology",
  theme: "Hepatobiliary",
  icon: "Wine",
  totalHours: 10,
  sessions: [
    {
      id: "d11-s1",
      duration: 4,
      timeOfDay: "Morning",
      topic: "Alcoholic Liver Disease — Pathogenesis & Morphology (Long Case + 5-mark)",
      activity:
        "Long-case drill for the 50-yr alcoholic with hematemesis. 5-mark essay: 'Pathogenesis and morphology of liver in alcoholic liver disease'. Steatosis → hepatitis (Mallory-Denk) → micronodular cirrhosis. AST:ALT > 2.",
      branchId: "git",
      nodeIds: ["alcoholic-liver"],
      xpReward: 320
    },
    {
      id: "d11-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Cirrhosis — Types, Morphology, Complications",
      activity:
        "4-mark essay. Micro vs macronodular with causes. All complications of portal HTN. Investigations: LFT, USG, endoscopy, biopsy.",
      branchId: "git",
      nodeIds: ["cirrhosis"],
      xpReward: 240
    },
    {
      id: "d11-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Viral Hepatitis + Hepatitis B Markers (3-mark)",
      activity:
        "HAV to HEV. HBV markers table — every single marker with clinical meaning.",
      branchId: "git",
      nodeIds: ["viral-hepatitis"],
      xpReward: 160
    },
    {
      id: "d11-s4",
      duration: 1,
      timeOfDay: "Evening",
      topic: "Fatty Liver + Hemochromatosis + LFT",
      activity:
        "Quick revision: fatty liver morphology, hemochromatosis bronze triad, LFT — ALT/AST/ALP/GGT/bilirubin/albumin/PT.",
      branchId: "git",
      nodeIds: ["fatty-liver", "hemochromatosis"],
      xpReward: 80
    }
  ]
};

const day12: DayQuest = {
  day: 12,
  phase: "Systemic",
  title: "The Long Tube — GIT Pathology",
  theme: "GIT",
  icon: "Brain",
  totalHours: 10,
  sessions: [
    {
      id: "d12-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Peptic Ulcer — Etiopathogenesis (3-mark)",
      activity:
        "H. pylori (urease, CagA), NSAIDs, Zollinger-Ellison. Gastric vs duodenal ulcer morphology.",
      branchId: "git",
      nodeIds: ["peptic-ulcer"],
      xpReward: 160
    },
    {
      id: "d12-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Crohn's Disease vs Ulcerative Colitis (4-mark contrast)",
      activity:
        "Side-by-side table — distribution, morphology, granulomas, complications, cancer risk, smoking, extraintestinal.",
      branchId: "git",
      nodeIds: ["ibd"],
      xpReward: 240
    },
    {
      id: "d12-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Carcinoma Stomach + Esophagus",
      activity:
        "4-mark essay on carcinoma stomach. Intestinal vs diffuse (signet ring). H. pylori. Linitis plastica. Virchow's node. Krukenberg. Esophagus — SCC vs adenocarcinoma.",
      branchId: "git",
      nodeIds: ["carcinoma-stomach"],
      xpReward: 240
    },
    {
      id: "d12-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Malabsorption — Celiac Disease",
      activity:
        "Etiopathogenesis of malabsorption. Celiac — gliadin, anti-tTG, anti-endomysial. Villous atrophy, crypt hyperplasia, intraepithelial lymphocytes.",
      branchId: "git",
      nodeIds: [],
      xpReward: 160
    }
  ]
};

const day13: DayQuest = {
  day: 13,
  phase: "Systemic",
  title: "Filter & Fluid — Renal & CNS Pathology",
  theme: "Renal + CNS",
  icon: "Activity",
  totalHours: 10,
  sessions: [
    {
      id: "d13-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Nephrotic vs Nephritic Syndrome (5-mark)",
      activity:
        "5-mark contrast essay. Causes (children vs adults). Lab: proteinuria > 3.5 g/day, hypoalbuminemia. RBC casts in nephritic.",
      branchId: "renal",
      nodeIds: ["nephrotic-nephritic"],
      xpReward: 240
    },
    {
      id: "d13-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "RPGN + Chronic Pyelonephritis",
      activity:
        "RPGN — 3 IF patterns, crescents, Goodpasture. Chronic pyelonephritis — reflux vs obstructive, thyroidization, polar scars.",
      branchId: "renal",
      nodeIds: ["rpgn", "chronic-pyelonephritis"],
      xpReward: 160
    },
    {
      id: "d13-s3",
      duration: 1,
      timeOfDay: "Evening",
      topic: "Wilm's Tumor + Renal Function Tests",
      activity:
        "Wilm's — pediatric, WT1/WT2, triphasic morphology. Renal function tests — urea, creatinine, eGFR, creatinine clearance.",
      branchId: "renal",
      nodeIds: ["wilms-tumor"],
      xpReward: 80
    },
    {
      id: "d13-s4",
      duration: 4,
      timeOfDay: "Evening",
      topic: "CSF Findings — Pyogenic vs Tuberculous Meningitis (5-mark)",
      activity:
        "Write the flagship 5-mark essay on CSF findings comparing pyogenic vs TB. Include viral meningitis for completeness. Practice the 3-tube LP protocol.",
      branchId: "cns",
      nodeIds: ["meningitis-csf"],
      xpReward: 320
    }
  ]
};

const day14: DayQuest = {
  day: 14,
  phase: "Systemic",
  title: "Hormones & Tissues — Endocrine & Reproductive",
  theme: "Endocrine",
  icon: "Sparkles",
  totalHours: 10,
  sessions: [
    {
      id: "d14-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Thyroid Function Tests + Hyperthyroidism",
      activity:
        "TSH algorithm. Antibodies — anti-TPO (Hashimoto), TSI (Graves). Grave's morphology — tall columnar epithelium, papillary infoldings, scalloped colloid.",
      branchId: "endo",
      nodeIds: ["thyroid-tests", "hyperthyroid"],
      xpReward: 160
    },
    {
      id: "d14-s2",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Diabetes Mellitus Type 2 + GTT + HbA1c",
      activity:
        "Pathogenesis — insulin resistance + β-cell dysfunction. Diagnostic criteria. GTT interpretation. HbA1c goals. C-peptide.",
      branchId: "endo",
      nodeIds: ["diabetes"],
      xpReward: 160
    },
    {
      id: "d14-s3",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Carcinoma Breast (4-mark)",
      activity:
        "Risk factors, BRCA1/2, DCIS/LCIS, invasive ductal (most common). ER/PR/HER2 + triple negative. TNM staging.",
      branchId: "endo",
      nodeIds: ["breast-cancer"],
      xpReward: 160
    },
    {
      id: "d14-s4",
      duration: 4,
      timeOfDay: "Evening",
      topic: "Endometrial Cycle + CIN + Ovarian Tumors",
      activity:
        "Proliferative vs secretory phases. CIN grading, HPV role, PAP Bethesda. Ovarian tumors — surface epithelial, germ cell (teratoma), sex cord (granulosa — Call-Exner).",
      branchId: "endo",
      nodeIds: ["endometrial-cycle", "ovarian-tumors"],
      xpReward: 320
    }
  ]
};

const day15: DayQuest = {
  day: 15,
  phase: "Systemic",
  title: "The Plaguebringers — Infectious Diseases",
  theme: "Infectious",
  icon: "Biohazard",
  totalHours: 10,
  sessions: [
    {
      id: "d15-s1",
      duration: 4,
      timeOfDay: "Morning",
      topic: "HIV/AIDS — Etiopathology, Sequelae, Autopsy (Long Case + Autopsy)",
      activity:
        "Long-case drill for 40-yr truck driver with diarrhea, lymphadenopathy, oral thrush. Autopsy case — CD4 < 200, candidiasis. Cover all opportunistic infections + AIDS-defining tumors.",
      branchId: "infect",
      nodeIds: ["hiv-aids"],
      xpReward: 320
    },
    {
      id: "d15-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Tuberculosis — Systemic & Miliary",
      activity:
        "10-mark essay: etiopathogenesis + morphology of TB. Primary vs secondary. Miliary. Pott's spine. Lab: AFB, CBNAAT, Mantoux, IGRA.",
      branchId: "infect",
      nodeIds: ["tb-systemic"],
      xpReward: 240
    },
    {
      id: "d15-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Leprosy — Immunopathology & Lepromatous Leprosy (5-mark)",
      activity:
        "Ridley-Jopling spectrum. TT vs LL — immunology, morphology, organisms. Virchow cells. Leonine facies. Slit-skin smear. Lepromin test (Mitsuda).",
      branchId: "infect",
      nodeIds: ["leprosy"],
      xpReward: 240
    }
  ],
  bossBattle: {
    name: "Systemic Warlord — Day 15 Boss",
    description:
      "Closed-book mock test: 12-mark MI essay + 5-mark Lobar Pneumonia + 5-mark CSF findings. Time: 1 hour.",
    rewardXp: 300
  }
};

// ----------------------------------------------------------------------------
// PHASE 4 — LAB TECHNIQUES & INTEGRATION (Days 16–20)
// ----------------------------------------------------------------------------

const day16: DayQuest = {
  day: 16,
  phase: "Lab Mastery",
  title: "Tools of the Trade — Laboratory Techniques I",
  theme: "Lab Techniques",
  icon: "Microscope",
  totalHours: 10,
  sessions: [
    {
      id: "d16-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "FNAC — Indications, Advantages, Disadvantages (5-mark)",
      activity:
        "5-mark essay. Memorise indications by organ. List 4 advantages + 4 disadvantages. Practice needle size, technique.",
      branchId: "lab",
      nodeIds: ["fnac"],
      xpReward: 240
    },
    {
      id: "d16-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Frozen Section in Histopathology (5-mark)",
      activity:
        "Indications (intraoperative, enzyme histochemistry). Cryostat technique. Time 10–20 min. Advantages vs disadvantages.",
      branchId: "lab",
      nodeIds: ["frozen-section"],
      xpReward: 160
    },
    {
      id: "d16-s3",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Tissue Fixatives + Special Stains",
      activity:
        "Memorise fixative → use pairs (NBF, Bouin's, Carnoy's, Zenker's). Memorise stain → target pairs (PAS, Congo red, Prussian blue, Masson trichrome, Von Kossa).",
      branchId: "lab",
      nodeIds: ["fixatives", "special-stains"],
      xpReward: 160
    },
    {
      id: "d16-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Urine Examination — Physical, Chemical, Microscopic (5-mark)",
      activity:
        "5-mark essay. Physical + chemical + microscopic. Casts (hyaline, RBC, WBC, granular, waxy, broad). Crystals (oxalate, uric acid, triple phosphate, cystine). Preservatives (HCl, boric acid, thymol, toluene).",
      branchId: "lab",
      nodeIds: ["urine-exam"],
      xpReward: 240
    }
  ]
};

const day17: DayQuest = {
  day: 17,
  phase: "Lab Mastery",
  title: "Tools of the Trade — Laboratory Techniques II",
  theme: "Lab Techniques II",
  icon: "FlaskConical",
  totalHours: 10,
  sessions: [
    {
      id: "d17-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "CSF Analysis (3-mark)",
      activity:
        "LP technique, 3 tubes. Normal vs pyogenic vs TB vs viral. Xanthochromia.",
      branchId: "lab",
      nodeIds: ["csf-analysis"],
      xpReward: 160
    },
    {
      id: "d17-s2",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Semen Examination (5-mark)",
      activity:
        "5-mark essay per WHO 2021. Volume, count, motility, morphology, viability. Indications. Fructose.",
      branchId: "lab",
      nodeIds: ["semen-analysis"],
      xpReward: 160
    },
    {
      id: "d17-s3",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Bone Marrow Examination (3-mark)",
      activity:
        "Aspiration vs trephine. Sites. Indications. M:E ratio. Findings in megaloblastic, AML, myeloma, aplastic.",
      branchId: "lab",
      nodeIds: ["bone-marrow"],
      xpReward: 160
    },
    {
      id: "d17-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "PAP Smear + Exfoliative Cytology (3-mark)",
      activity:
        "Bethesda reporting system. LSIL vs HSIL. Koilocytes. Screening guidelines. Liquid-based cytology. Other exfoliative applications.",
      branchId: "lab",
      nodeIds: ["pap-smear"],
      xpReward: 160
    },
    {
      id: "d17-s5",
      duration: 2,
      timeOfDay: "Evening",
      topic: "ESR + Reticulocyte + Automated Hematology (3-mark)",
      activity:
        "Westergren ESR. Reticulocyte count, RPI. 3-part vs 5-part differential. Parameters & flags.",
      branchId: "lab",
      nodeIds: ["esr-retic"],
      xpReward: 160
    }
  ]
};

const day18: DayQuest = {
  day: 18,
  phase: "Integration",
  title: "Boss Rush I — Clinical Cases: Hepatic & CV",
  theme: "Clinical Cases",
  icon: "Skull",
  totalHours: 10,
  sessions: [
    {
      id: "d18-s1",
      duration: 5,
      timeOfDay: "Morning",
      topic: "Alcoholic Liver Disease / Cirrhosis — 3 Long Cases",
      activity:
        "Practice all 3 cases: (1) 50-yr alcoholic with hematemesis + palmar erythema + ascites. (2) 60-yr alcoholic with jaundice + spider naevi + malaena. (3) 55-yr autopsy with severe hematemesis. Time each: 30 min closed-book.",
      branchId: "git",
      nodeIds: ["alcoholic-liver", "cirrhosis"],
      xpReward: 400
    },
    {
      id: "d18-s2",
      duration: 5,
      timeOfDay: "Afternoon",
      topic: "Myocardial Infarction — 4 Long Cases",
      activity:
        "Practice all 4 cases: (1) 45-yr STEMI chest pain. (2) 65-yr diabetic with heartburn + sweating. (3) 64-yr smoker autopsy. (4) 60-yr with CPK-MB/Troponin T rise — autopsy findings + cause of death.",
      branchId: "cvs",
      nodeIds: ["mi", "ihd"],
      xpReward: 400
    }
  ],
  bossBattle: {
    name: "Boss Rush I — Hepatic & CV Warlord",
    description:
      "Random case selection (use Randomizer). Diagnose + plan + key investigations in 35 minutes each.",
    rewardXp: 350
  }
};

const day19: DayQuest = {
  day: 19,
  phase: "Integration",
  title: "Boss Rush II — Clinical Cases: Hematology & Infectious",
  theme: "Clinical Cases II",
  icon: "Skull",
  totalHours: 10,
  sessions: [
    {
      id: "d19-s1",
      duration: 5,
      timeOfDay: "Morning",
      topic: "Iron Deficiency Anemia — 3 Long Cases",
      activity:
        "(1) 50-yr female weak + pale + low MCV/MCH/MCHC. (2) 30-yr mother of 3 with koilonychia. (3) 37-yr with Hb 6 g/dL + MCV 62 fl. Each: diagnosis + etiology + P/S + marrow + investigations.",
      branchId: "rbc-path",
      nodeIds: ["iron-deficiency", "anemia-classification"],
      xpReward: 400
    },
    {
      id: "d19-s2",
      duration: 5,
      timeOfDay: "Afternoon",
      topic: "HIV/AIDS — 3 Long Cases (incl. 2 autopsy)",
      activity:
        "(1) 40-yr truck driver with diarrhea, oral thrush, weight loss, pneumonic patches. (2) 38-yr female autopsy with oral candidiasis, blood transfusions, CD4 < 200. (3) 35-yr female with fever, drug-addict husband, skin lesions, lung opacities.",
      branchId: "infect",
      nodeIds: ["hiv-aids"],
      xpReward: 400
    }
  ],
  bossBattle: {
    name: "Boss Rush II — ID & Hematology Warlord",
    description:
      "Random case + write autopsy findings (internal organ changes) in 40 min.",
    rewardXp: 350
  }
};

const day20: DayQuest = {
  day: 20,
  phase: "Final Boss",
  title: "The Final Exam — Mock University Examination",
  theme: "Final",
  icon: "Trophy",
  totalHours: 10,
  sessions: [
    {
      id: "d20-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Theory Essay Blitz (12m + 10m + 8m)",
      activity:
        "Closed-book: write the 12-mark essay on Septic Shock OR Biological Carcinogenesis. Then 10-mark on Amyloidosis. Then 8-mark short essay on autopsy case (16-yr with sore throat + fever + joint pain).",
      branchId: "hemodynamics",
      nodeIds: ["septic-shock"],
      xpReward: 300
    },
    {
      id: "d20-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Short Notes Rapid Fire (5m + 4m + 3m)",
      activity:
        "Closed-book: 5-mark on FNAC. 4-mark on Chemical mediators. 3-mark on Special stains. Repeat with a different set after self-evaluation.",
      branchId: "lab",
      nodeIds: ["fnac", "special-stains"],
      xpReward: 300
    },
    {
      id: "d20-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "2-Mark Blitz (50 questions)",
      activity:
        "From the question bank, attempt 50 two-mark questions in 100 minutes. Focus on the high-yield topics (Virchow triad, tumor markers, blood components, Bombay blood group, Bence Jones).",
      branchId: "neoplasia",
      nodeIds: ["tumor-markers"],
      xpReward: 200
    },
    {
      id: "d20-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Randomizer Case + Weak-area Review",
      activity:
        "Use the case randomizer for 5 random cases. Identify your weakest topics from the mock tests today. Re-revise them in the final hour.",
      branchId: "lab",
      nodeIds: [],
      xpReward: 200
    }
  ],
  bossBattle: {
    name: "FINAL BOSS — University Examination",
    description:
      "Treat today as exam day. Strict closed-book, time-limited. Score 75%+ to graduate Pathology Master.",
    rewardXp: 1000
  }
};

// ----------------------------------------------------------------------------
// EXPORT
// ----------------------------------------------------------------------------

export const campaign: DayQuest[] = [
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  day8,
  day9,
  day10,
  day11,
  day12,
  day13,
  day14,
  day15,
  day16,
  day17,
  day18,
  day19,
  day20
];

export const totalCampaignHours = campaign.reduce(
  (sum, d) => sum + d.totalHours,
  0
);

export const totalCampaignXP = campaign.reduce(
  (sum, d) => sum + d.sessions.reduce((s, q) => s + q.xpReward, 0) + (d.bossBattle?.rewardXp ?? 0),
  0
);
