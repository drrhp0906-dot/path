// ============================================================================
// PATHOLOGY SKILL TREE DATA
// Aligned with Robbins Basic Pathology, Harsh Mohan, and international
// standards (WHO / ACC / CAP guidelines) for undergraduate pathology.
// ============================================================================

export interface SkillNode {
  id: string;
  title: string;
  branch: string;
  tier: number; // tier within branch (1 = foundation, higher = advanced)
  xp: number; // XP awarded for mastery
  marks: string; // e.g. "5m", "12m", "2m"
  description: string;
  highYield: 1 | 2 | 3 | 4 | 5; // 5 = appears most frequently in past papers
  prerequisites: string[]; // ids of nodes that must be mastered first
  keyPoints: string[];
  textbookRef: string;
}

export interface SkillBranch {
  id: string;
  name: string;
  icon: string; // lucide icon name
  color: string; // hex color for the branch theme
  tagline: string;
  description: string;
  nodes: SkillNode[];
}

// ----------------------------------------------------------------------------
// BRANCH 1 — INFLAMMATION & HEALING (Foundation)
// ----------------------------------------------------------------------------
const inflammationBranch: SkillBranch = {
  id: "inflammation",
  name: "Inflammation & Healing",
  icon: "Flame",
  color: "#f97316",
  tagline: "The Body's First Response",
  description:
    "Vascular & cellular events of acute inflammation, chronic inflammation, granulomas, and wound healing. Foundations for nearly every systemic pathology topic.",
  nodes: [
    {
      id: "acute-inflam",
      title: "Acute Inflammation — Vascular & Cellular Events",
      branch: "inflammation",
      tier: 1,
      xp: 120,
      marks: "4m",
      highYield: 4,
      prerequisites: [],
      description:
        "Sequential vascular changes (vasodilation, increased permeability) and cellular events (margination, emigration, chemotaxis, phagocytosis). Lewis triple response.",
      keyPoints: [
        "Vascular events: transient vasoconstriction → persistent vasodilation → increased permeability (histamine, bradykinin, leukotrienes)",
        "Cellular events: margination, pavementing, emigration, chemotaxis, phagocytosis",
        "Pattern of exudate: serous, fibrinous, purulent/suppurative, membranous",
        "Outcomes: resolution, organization, suppuration, chronicity"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 3, pp. 43–58"
    },
    {
      id: "chemical-mediators",
      title: "Chemical Mediators of Inflammation",
      branch: "inflammation",
      tier: 1,
      xp: 100,
      marks: "4m",
      highYield: 4,
      prerequisites: ["acute-inflam"],
      description:
        "Vasoactive amines, kinins, arachidonic acid metabolites, complement, cytokines and their precise functional roles.",
      keyPoints: [
        "Histamine & serotonin — early increased vascular permeability",
        "Kinins (bradykinin) — pain, vasodilation, permeability",
        "Arachidonic acid: COX → prostaglandins / thromboxane; LOX → leukotrienes",
        "Complement cascade C3a/C5a — anaphylatoxins, chemotaxis",
        "Cytokines: IL-1, TNF-α (acute phase response), IL-6, IL-8 (chemotaxis), IFN-γ (macrophage activation)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 3, pp. 58–68"
    },
    {
      id: "phagocytosis",
      title: "Phagocytosis — Recognition, Engulfment & Killing",
      branch: "inflammation",
      tier: 1,
      xp: 100,
      marks: "5m",
      highYield: 4,
      prerequisites: ["acute-inflam"],
      description:
        "Steps of phagocytosis, opsonins, oxygen-dependent & oxygen-independent killing mechanisms (MPO-Halide system, ROS).",
      keyPoints: [
        "Steps: recognition → engulfment → phagosome-lysosome fusion → killing/digestion",
        "Opsonins: IgG, C3b — enhance recognition",
        "Oxygen-dependent: NADPH oxidase (respiratory burst), MPO-halide system, superoxide, H2O2",
        "Oxygen-independent: lysozyme, lactoferrin, defensins, hydrolases",
        "Defect: CGD (NADPH oxidase deficiency)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 3, pp. 55–57"
    },
    {
      id: "chronic-inflam",
      title: "Chronic & Granulomatous Inflammation",
      branch: "inflammation",
      tier: 2,
      xp: 120,
      marks: "4m",
      highYield: 4,
      prerequisites: ["acute-inflam"],
      description:
        "Cells of chronic inflammation (macrophages, lymphocytes, plasma cells), and granuloma formation with classic examples (TB, leprosy, sarcoidosis).",
      keyPoints: [
        "Macrophage origins and epithelioid/giant cell transformation",
        "Giant cells: Langhans (TB), Touton (xanthoma), foreign body",
        "Granuloma types: caseating (TB) vs non-caseating (sarcoid)",
        "Causes: TB, leprosy, syphilis, fungal, foreign body, Crohn's, sarcoidosis"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 3, pp. 78–82"
    },
    {
      id: "wound-healing",
      title: "Wound Healing — Primary & Secondary Union",
      branch: "inflammation",
      tier: 2,
      xp: 120,
      marks: "5m",
      highYield: 4,
      prerequisites: ["acute-inflam"],
      description:
        "Phases of wound healing (hemostasis → inflammation → proliferation → remodeling), primary vs secondary intention, local & systemic factors.",
      keyPoints: [
        "Primary union: clean, apposed edges — minimal granulation tissue",
        "Secondary union: open wound — granulation tissue, wound contraction (myofibroblasts)",
        "Phases: hemostasis (hrs), inflammation (1–2 days), proliferation (3–5 days, granulation), remodeling (weeks-months)",
        "Factors delaying healing: infection, ischemia, diabetes, malnutrition, steroids",
        "Complications: dehiscence, hypertrophic scar, keloid (extends beyond wound)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 3, pp. 88–94"
    },
    {
      id: "hypersensitivity",
      title: "Hypersensitivity Reactions (Type I–IV)",
      branch: "inflammation",
      tier: 2,
      xp: 100,
      marks: "4m",
      highYield: 3,
      prerequisites: ["chronic-inflam"],
      description:
        "Gell & Coombs classification, mechanisms, classic examples, and disease correlates.",
      keyPoints: [
        "Type I — IgE-mediated, immediate (anaphylaxis, asthma, hay fever)",
        "Type II — antibody-mediated cytotoxic (transfusion reactions, Erythroblastosis fetalis, Goodpasture)",
        "Type III — immune complex (SLE, serum sickness, post-streptococcal GN)",
        "Type IV — delayed T-cell mediated (TB, contact dermatitis, graft rejection)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 6, pp. 215–221"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 2 — HEMODYNAMICS (Foundation)
// ----------------------------------------------------------------------------
const hemodynamicsBranch: SkillBranch = {
  id: "hemodynamics",
  name: "Hemodynamic Disorders",
  icon: "Droplets",
  color: "#06b6d4",
  tagline: "Flow, Blockage & Shock",
  description:
    "Edema, hyperemia, thrombosis, embolism, infarction, and shock. Builds the bridge between vascular pathology and clinical disease.",
  nodes: [
    {
      id: "edema",
      title: "Etiopathology of Edema",
      branch: "hemodynamics",
      tier: 1,
      xp: 100,
      marks: "5m",
      highYield: 5,
      prerequisites: [],
      description:
        "Starling forces and the four mechanisms of edema (increased hydrostatic pressure, decreased oncotic pressure, lymphatic obstruction, sodium retention).",
      keyPoints: [
        "Starling: net filtration = (Pc - Pi) - (πc - πi)",
        "Increased hydrostatic pressure — CHF, venous obstruction",
        "Decreased oncotic pressure — nephrotic, cirrhosis, malnutrition",
        "Lymphatic obstruction — lymphedema, filariasis, tumor",
        "Sodium retention — renal disease, primary hyperaldosteronism"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 113–116"
    },
    {
      id: "congestion",
      title: "Hyperemia & Congestion — Nutmeg Liver",
      branch: "hemodynamics",
      tier: 1,
      xp: 80,
      marks: "2m",
      highYield: 4,
      prerequisites: ["edema"],
      description:
        "Active hyperemia vs passive congestion; chronic passive congestion of liver (nutmeg), lung, spleen.",
      keyPoints: [
        "Active hyperemia — vasodilation (inflammation, exercise, blushing)",
        "Passive congestion — impaired venous drainage (right heart failure)",
        "Nutmeg liver — chronic passive congestion; red central (centrilobular congestion) + tan peripheral (fatty change)",
        "Chronic pulmonary congestion — heart failure cells (hemosiderin-laden macrophages)",
        "Stasis liver → cardiac cirrhosis"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 116–118"
    },
    {
      id: "thrombosis",
      title: "Thrombosis — Virchow's Triad & Fate",
      branch: "hemodynamics",
      tier: 2,
      xp: 120,
      marks: "5m",
      highYield: 5,
      prerequisites: ["edema"],
      description:
        "Virchow's triad (endothelial injury, stasis, hypercoagulability), morphology of thrombi, fate (propagation, embolization, dissolution, organization, recanalization), postmortem vs antemortem thrombus.",
      keyPoints: [
        "Virchow's triad: (1) endothelial injury (dominant in heart & arteries), (2) abnormal blood flow (stasis/turbulence), (3) hypercoagulability",
        "Morphology: lines of Zahn (alternating layers of platelets/fibrin and RBC) — antemortem",
        "Fate: propagation, embolization, dissolution, organization & recanalization",
        "Postmortem clot: jelly-like, no lines of Zahn, moist, non-adherent",
        "Antemortem thrombus: firm, friable, attached, lines of Zahn present"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 119–125"
    },
    {
      id: "embolism",
      title: "Embolism — Pulmonary & Systemic",
      branch: "hemodynamics",
      tier: 2,
      xp: 80,
      marks: "4m",
      highYield: 4,
      prerequisites: ["thrombosis"],
      description:
        "Types of emboli (thrombus, fat, air, amniotic fluid), pulmonary embolism morphology and consequences.",
      keyPoints: [
        "Pulmonary embolism — saddle embolus at bifurcation; large PE → sudden death",
        "Paradoxical embolism — venous clot crosses PFO to systemic",
        "Fat embolism — long bone fractures; triad of dyspnea, neurologic symptoms, petechiae (3–7 days post-injury)",
        "Amniotic fluid embolism — postpartum, DIC",
        "Air embolism — diving (decompression sickness), neurosurgery"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 125–128"
    },
    {
      id: "infarction",
      title: "Infarction — Red vs White",
      branch: "hemodynamics",
      tier: 2,
      xp: 80,
      marks: "2m",
      highYield: 3,
      prerequisites: ["thrombosis"],
      description:
        "Mechanism of infarction, morphology based on vascular supply and tissue type.",
      keyPoints: [
        "White (anemic) infarcts — end-arterial organs (heart, kidney, spleen)",
        "Red (hemorrhagic) infarcts — dual circulation or venous occlusion (lung, intestine, ovary)",
        "Coagulative necrosis in most solid organs (heart, kidney)",
        "Liquefactive necrosis in brain"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 129–130"
    },
    {
      id: "shock-overview",
      title: "Shock — Types & Stages",
      branch: "hemodynamics",
      tier: 3,
      xp: 120,
      marks: "10m",
      highYield: 5,
      prerequisites: ["thrombosis"],
      description:
        "Classification (cardiogenic, hypovolemic, septic, anaphylactic, neurogenic), three stages, morphology of shock organs.",
      keyPoints: [
        "Cardiogenic — MI, arrhythmia, cardiac tamponade",
        "Hypovolemic — hemorrhage, burns, dehydration",
        "Septic — most common in hospital; gram-negative endotoxin",
        "Stages: (1) non-progressive (compensated), (2) progressive (decompensated), (3) irreversible",
        "Morphology: lungs (ARDS), kidneys (ATN), adrenals (Waterhouse-Friderichsen), gut (mucosal hemorrhage), brain (ischemic encephalopathy)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 132–137"
    },
    {
      id: "septic-shock",
      title: "Septic Shock — Etiopathogenesis",
      branch: "hemodynamics",
      tier: 3,
      xp: 150,
      marks: "12m",
      highYield: 5,
      prerequisites: ["shock-overview"],
      description:
        "Endotoxin-TLR4 cascade, cytokine storm, NO-mediated vasodilation, DIC, multi-organ dysfunction syndrome.",
      keyPoints: [
        "Trigger: microbial cell wall products — LPS (gram-negative), teichoic acid (gram-positive)",
        "Receptor: TLR4 (with CD14) recognizes LPS-LBP complex",
        "Macrophage activation → TNF-α, IL-1, IL-6 release",
        "iNOS upregulation → massive NO → refractory vasodilation",
        "Endothelial activation → DIC, capillary leak",
        "Mortality 30–50% despite treatment"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 134–136"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 3 — NEOPLASIA (Foundation)
// ----------------------------------------------------------------------------
const neoplasiaBranch: SkillBranch = {
  id: "neoplasia",
  name: "Neoplasia Core",
  icon: "Dna",
  color: "#a855f7",
  tagline: "The Hallmarks of Cancer",
  description:
    "Definitions, benign vs malignant, carcinogenesis (chemical, viral, biological), metastasis, paraneoplastic syndromes, tumor markers.",
  nodes: [
    {
      id: "benign-malignant",
      title: "Benign vs Malignant — Differentiating Features",
      branch: "neoplasia",
      tier: 1,
      xp: 80,
      marks: "4m",
      highYield: 5,
      prerequisites: [],
      description:
        "Architecture, growth pattern, differentiation, anaplasia, invasion, metastasis, rate of growth.",
      keyPoints: [
        "Benign: well-differentiated, slow, encapsulated, no invasion, no metastasis",
        "Malignant: variable differentiation, anaplasia, invasive, metastasizes",
        "Anaplasia markers: pleomorphism, hyperchromatic nuclei, high N:C ratio, abnormal mitoses, prominent nucleoli",
        "Exceptions: leiomyoma, meningioma — invade but don't metastasize"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 7, pp. 263–270"
    },
    {
      id: "biological-carcinogenesis",
      title: "Biological Carcinogenesis — Oncogenes & Tumor Suppressors",
      branch: "neoplasia",
      tier: 2,
      xp: 150,
      marks: "12m",
      highYield: 5,
      prerequisites: ["benign-malignant"],
      description:
        "Hallmarks of cancer, proto-oncogenes, tumor suppressor genes, apoptosis regulators, DNA repair genes, epigenetic changes.",
      keyPoints: [
        "Hallmarks (Hanahan & Weinberg): self-sufficiency in growth signals, insensitivity to anti-growth, evasion of apoptosis, limitless replicative potential, sustained angiogenesis, tissue invasion/metastasis, reprogrammed metabolism, immune evasion",
        "Oncogenes: RAS (most common), MYC, HER2/neu, ABL (Philadelphia)",
        "Tumor suppressors: RB, p53 (guardian of genome), APC, BRCA1/2",
        "Apoptosis regulators: BCL-2 overexpression (follicular lymphoma)",
        "Multi-step carcinogenesis: initiation → promotion → progression"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 7, pp. 280–301"
    },
    {
      id: "chemical-carcinogens",
      title: "Chemical Carcinogens",
      branch: "neoplasia",
      tier: 2,
      xp: 80,
      marks: "5m",
      highYield: 3,
      prerequisites: ["benign-malignant"],
      description:
        "Initiators vs promoters, direct vs indirect acting carcinogens, classic examples.",
      keyPoints: [
        "Initiators (DNA-damaging): direct-acting (alkylating agents — chemo drugs), indirect-acting (require metabolic activation — polycyclic hydrocarbons, azo dyes, aflatoxin B1)",
        "Promoters (non-genotoxic): phorbol esters, hormones",
        "Asbestos → mesothelioma; Vinyl chloride → angiosarcoma liver; Aflatoxin B1 → HCC",
        "Carcinogenesis is multi-step"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 7, pp. 304–306"
    },
    {
      id: "oncogenic-viruses",
      title: "Oncogenic Viruses",
      branch: "neoplasia",
      tier: 2,
      xp: 80,
      marks: "2m",
      highYield: 4,
      prerequisites: ["biological-carcinogenesis"],
      description:
        "RNA and DNA tumor viruses and their associated malignancies.",
      keyPoints: [
        "HTLV-1 — adult T-cell leukemia/lymphoma",
        "HPV 16/18 — E6 (degrades p53), E7 (inactivates RB) — cervical carcinoma",
        "EBV — Burkitt lymphoma, Hodgkin, nasopharyngeal carcinoma",
        "HBV/HCV — hepatocellular carcinoma",
        "HHV-8 — Kaposi sarcoma",
        "Merkel cell polyomavirus — Merkel cell carcinoma"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 7, pp. 312–314"
    },
    {
      id: "metastasis",
      title: "Metastasis — Mechanisms & Routes",
      branch: "neoplasia",
      tier: 3,
      xp: 120,
      marks: "10m",
      highYield: 5,
      prerequisites: ["biological-carcinogenesis"],
      description:
        "Invasion-metastasis cascade: EMT, matrix degradation, intravasation, survival in circulation, extravasation, angiogenesis.",
      keyPoints: [
        "Steps: detachment (E-cadherin loss) → ECM degradation (MMPs) → intravasation → circulation (platelet coat) → arrest → extravasation → colonization",
        "EMT — epithelial-mesenchymal transition (Snail, Slug, Twist transcription factors)",
        "Lymphatic spread — carcinomas (first nodes = sentinel nodes)",
        "Hematogenous spread — sarcomas; also renal cell, HCC, follicular thyroid, choriocarcinoma",
        "Seeding — body cavities: ovarian carcinoma → peritoneum (Krukenberg)",
        "Seed-soil theory — organ-specific colonization (lung, liver, bone, brain)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 7, pp. 297–301"
    },
    {
      id: "paraneoplastic",
      title: "Paraneoplastic Syndromes",
      branch: "neoplasia",
      tier: 3,
      xp: 100,
      marks: "5m",
      highYield: 5,
      prerequisites: ["metastasis"],
      description:
        "Systemic effects of tumors not explained by direct invasion/metastasis. Endocrine, neurological, mucocutaneous, hematological.",
      keyPoints: [
        "Cushing syndrome — small cell lung carcinoma (ACTH)",
        "SIADH — small cell lung carcinoma (ADH)",
        "Hypercalcemia — squamous cell carcinoma, renal cell, breast (PTHrP); multiple myeloma (cytokines)",
        "Polycythemia — renal cell carcinoma, HCC (erythropoietin)",
        "Myasthenic syndrome (Lambert-Eaton) — small cell lung carcinoma",
        "Acanthosis nigricans — gastric carcinoma"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 7, p. 318"
    },
    {
      id: "tumor-markers",
      title: "Tumor Markers",
      branch: "neoplasia",
      tier: 3,
      xp: 60,
      marks: "2m",
      highYield: 5,
      prerequisites: ["paraneoplastic"],
      description:
        "Clinical utility and limitations of tumor markers.",
      keyPoints: [
        "AFP — HCC, non-seminomatous germ cell tumors",
        "β-hCG — choriocarcinoma, gestational trophoblastic disease, seminoma",
        "CA-125 — ovarian carcinoma",
        "CA 19-9 — pancreatic carcinoma",
        "CEA — colorectal carcinoma (also gastric, pancreatic, breast)",
        "PSA — prostate carcinoma (screening + monitoring)",
        "Limitations — not diagnostic alone; used for monitoring & screening"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 7, pp. 318–319"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 4 — HEMATOPATHOLOGY: RBC (Advanced)
// ----------------------------------------------------------------------------
const rbcBranch: SkillBranch = {
  id: "rbc-path",
  name: "Erythrocyte Pathology",
  icon: "Droplet",
  color: "#ef4444",
  tagline: "The Anemia Atlas",
  description:
    "Anemia classification, blood indices, iron deficiency, megaloblastic, hemolytic anemias, thalassemias, sickle cell.",
  nodes: [
    {
      id: "anemia-classification",
      title: "Anemia — Definition & Classification",
      branch: "rbc-path",
      tier: 1,
      xp: 100,
      marks: "12m",
      highYield: 5,
      prerequisites: [],
      description:
        "Morphological & kinetic classification; blood indices (MCV, MCH, MCHC, RDW) and their interpretation.",
      keyPoints: [
        "Definition: Hb < 13 g/dL (M), < 12 g/dL (F), < 11 g/dL (pregnant)",
        "Morphological: microcytic (MCV < 80), normocytic (80–100), macrocytic (> 100)",
        "Kinetic: hypoproliferative (low retic), maturation defect (high retic ineffective), hemolytic (high retic effective)",
        "MCV, MCH, MCHC, RDW — interpretation in each anemia type",
        "Hypochromic microcytic: IDA, thalassemia, Sideroblastic, lead poisoning, chronic disease"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 635–640"
    },
    {
      id: "iron-deficiency",
      title: "Iron Deficiency Anemia",
      branch: "rbc-path",
      tier: 2,
      xp: 150,
      marks: "Long Case",
      highYield: 5,
      prerequisites: ["anemia-classification"],
      description:
        "Etiology, pathogenesis, peripheral smear, bone marrow findings, laboratory diagnosis, Plummer-Vinson syndrome.",
      keyPoints: [
        "Causes: dietary (infants), malabsorption (celiac), chronic blood loss (GI — hookworm, malignancy, menorrhagia)",
        "Stages: depletion of stores → iron-deficient erythropoiesis → overt anemia",
        "P/S: microcytic hypochromic, anisocytosis, poikilocytosis, pencil cells",
        "Bone marrow: micronormoblastic hyperplasia, absent iron (Prussian blue)",
        "Lab: ↓serum iron, ↑TIBC, ↓ferritin, ↓transferrin saturation",
        "Plummer-Vinson syndrome: IDA + glossitis + esophageal web + koilonychia"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 648–651"
    },
    {
      id: "megaloblastic",
      title: "Megaloblastic Anemia (B12 & Folate Deficiency)",
      branch: "rbc-path",
      tier: 2,
      xp: 150,
      marks: "12m",
      highYield: 5,
      prerequisites: ["anemia-classification"],
      description:
        "Etiology, pathogenesis of ineffective erythropoiesis, peripheral smear, bone marrow, neurologic manifestations of B12 deficiency.",
      keyPoints: [
        "B12 (cobalamin) deficiency — pernicious anemia (autoimmune — anti-parietal cell, anti-intrinsic factor), gastrectomy, ileal disease, Diphyllobothrium latum",
        "Folate deficiency — dietary, pregnancy, hemolysis, drugs (methotrexate, phenytoin)",
        "Pathogenesis: defective DNA synthesis → nuclear-cytoplasmic asynchrony → ineffective erythropoiesis",
        "P/S: macrocytes, ovalocytes, hypersegmented neutrophils (> 5 lobes), anisopoikilocytosis",
        "Bone marrow: megaloblastic hyperplasia (giant metamyelocytes, megakaryocytes)",
        "Lab: ↓serum B12/folate, ↑LDH, ↑indirect bilirubin, ↑homocysteine; B12 — ↑methylmalonic acid",
        "B12 only: subacute combined degeneration of spinal cord (dorsal & lateral columns)",
        "Schilling test — historical; now anti-parietal cell & anti-IF antibodies"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 651–655"
    },
    {
      id: "hemolytic-overview",
      title: "Hemolytic Anemia — Classification & Approach",
      branch: "rbc-path",
      tier: 2,
      xp: 100,
      marks: "4m",
      highYield: 4,
      prerequisites: ["anemia-classification"],
      description:
        "Intravascular vs extravascular, inherited vs acquired, lab approach.",
      keyPoints: [
        "Intravascular — release of Hb (schistocytes, ↑LDH, ↓haptoglobin, hemoglobinemia, hemoglobinuria, methemalbuminemia)",
        "Extravascular — macrophage ingestion (jaundice, splenomegaly)",
        "Inherited: membrane (HS), enzyme (G6PD, PK), hemoglobin (sickle, thalassemia)",
        "Acquired: immune (AIHA, transfusion reaction), PNH, microangiopathic (DIC, TTP/HUS)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 642–648"
    },
    {
      id: "sickle-cell",
      title: "Sickle Cell Anemia",
      branch: "rbc-path",
      tier: 3,
      xp: 100,
      marks: "4m",
      highYield: 4,
      prerequisites: ["hemolytic-overview"],
      description:
        "HbS mutation, pathogenesis of sickling, morphology, clinical features, complications.",
      keyPoints: [
        "Mutation: Glu → Val at position 6 of β-globin (chromosome 11)",
        "Sickling under low O2 — HbS polymerizes (tactoids)",
        "P/S: sickle cells, target cells, Howell-Jolly bodies (post-splenectomy)",
        "Vaso-occlusive crises — pain, dactylitis, acute chest syndrome, splenic sequestration, stroke",
        "Splenic autoinfarction → ↑risk of encapsulated organism infection (S. pneumoniae)",
        "Hb electrophoresis: HbS 80–95%, HbF 1–20%, no HbA"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 644–647"
    },
    {
      id: "thalassemia",
      title: "Thalassemia — α & β",
      branch: "rbc-path",
      tier: 3,
      xp: 120,
      marks: "5m",
      highYield: 4,
      prerequisites: ["hemolytic-overview"],
      description:
        "Genetics, clinical spectrum, morphology, laboratory diagnosis of α- and β-thalassemia.",
      keyPoints: [
        "α-thalassemia — HBA1/HBA2 gene deletions on chromosome 16",
        "  --/-- = Hb Bart's hydrops fetalis (incompatible with life); Hb Bart's (γ4)",
        "  -/-α = HbH disease; HbH (β4)",
        "β-thalassemia — point mutations in HBB on chromosome 11; β0 (no chains) vs β+ (reduced)",
        "  Major (homozygous): severe anemia from 6 months, transfusion dependent",
        "P/S: microcytic hypochromic, target cells, basophilic stippling, nucleated RBCs",
        "Bone marrow expansion → chipmunk facies, hair-on-end skull X-ray",
        "Hb electrophoresis: β-thal major — ↑HbF (10–90%), ↑HbA2; HbA absent or reduced",
        "Lab diagnosis: Hb electrophoresis + DNA analysis for genotype"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 643–644"
    },
    {
      id: "blood-indices",
      title: "Red Cell Indices & Reticulocyte",
      branch: "rbc-path",
      tier: 1,
      xp: 60,
      marks: "4m",
      highYield: 5,
      prerequisites: [],
      description:
        "MCV, MCH, MCHC, RDW calculation and clinical interpretation; reticulocyte count significance.",
      keyPoints: [
        "MCV = Hct × 10 / RBC count (normal 80–100 fL)",
        "MCH = Hb × 10 / RBC count (normal 27–32 pg)",
        "MCHC = Hb × 10 / Hct (normal 32–36 g/dL)",
        "RDW — anisocytosis index; high in IDA, normal in thalassemia (differentiating feature)",
        "Reticulocyte count — marker of effective erythropoiesis; corrected retic > 2% suggests hemolysis or response to therapy"
      ],
      textbookRef: "Wintrobe's Clinical Hematology — Ch. 5"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 5 — HEMATOPATHOLOGY: WBC (Advanced)
// ----------------------------------------------------------------------------
const wbcBranch: SkillBranch = {
  id: "wbc-path",
  name: "Leukocyte Pathology",
  icon: "Shield",
  color: "#22c55e",
  tagline: "Leukemias, Lymphomas & Plasma Cell",
  description:
    "Leukemia classification, AML, CML, ALL, CLL, leukemoid reaction, Hodgkin & non-Hodgkin lymphoma, multiple myeloma.",
  nodes: [
    {
      id: "leukemia-classification",
      title: "Leukemia — Classification & Approach",
      branch: "wbc-path",
      tier: 1,
      xp: 100,
      marks: "12m",
      highYield: 5,
      prerequisites: [],
      description:
        "FAB and WHO classification, acute vs chronic, myeloid vs lymphoid logic.",
      keyPoints: [
        "Acute — > 20% blasts in marrow; aggressive; mostly children (ALL) and adults (AML)",
        "Chronic — mature cells proliferate; indolent; mostly adults",
        "Myeloid — AML, CML; Lymphoid — ALL, CLL",
        "WHO 2016/2022 incorporates cytogenetics (Philadelphia, t(15;17), t(8;21))",
        "Investigations: CBC, P/S, bone marrow, cytochemistry, flow cytometry, cytogenetics, molecular"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 13, pp. 595–605"
    },
    {
      id: "aml",
      title: "Acute Myeloid Leukemia",
      branch: "wbc-path",
      tier: 2,
      xp: 150,
      marks: "10m",
      highYield: 4,
      prerequisites: ["leukemia-classification"],
      description:
        "FAB subtypes, Auer rods, classical cytogenetic subtypes (APL), clinical presentation, lab diagnosis, morphology.",
      keyPoints: [
        "FAB M0–M7; AML-M3 (APL) — t(15;17), PML-RARA fusion, Auer rods, DIC risk",
        "Morphology: myeloblasts > 20% marrow, Auer rods (pathognomonic)",
        "Cytochemistry: MPO +, Sudan black B +, specific esterase (CAE)",
        "Flow: CD13, CD33, CD117 +",
        "Clinical: anemia, infection, bleeding (esp. APL-DIC), gum hypertrophy (M4/M5), chloromas (granulocytic sarcomas)",
        "Treatment: ATRA + arsenic trioxide for APL"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 13, pp. 600–604"
    },
    {
      id: "cml",
      title: "Chronic Myeloid Leukemia",
      branch: "wbc-path",
      tier: 3,
      xp: 150,
      marks: "5m",
      highYield: 5,
      prerequisites: ["leukemia-classification"],
      description:
        "Philadelphia chromosome, phases (chronic → accelerated → blast crisis), morphology, lab, treatment with imatinib.",
      keyPoints: [
        "Cytogenetics: t(9;22)(q34;q11) — Philadelphia chromosome; BCR-ABL1 fusion gene → constitutive tyrosine kinase",
        "Phases: chronic (months-years), accelerated, blast crisis (resembles AML/ALL)",
        "P/S: leukocytosis (often > 100,000), full spectrum of myeloid precursors, basophilia (hallmark), low LAP score",
        "Bone marrow: hypercellular, myeloid hyperplasia, micromegakaryocytes",
        "Treatment: imatinib (Gleevec) — tyrosine kinase inhibitor; revolutionized therapy"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 13, pp. 604–606"
    },
    {
      id: "leukemoid-reaction",
      title: "Leukemoid Reaction vs CML",
      branch: "wbc-path",
      tier: 3,
      xp: 80,
      marks: "5m",
      highYield: 5,
      prerequisites: ["cml"],
      description:
        "Differentiating features and the role of LAP score, cytogenetics.",
      keyPoints: [
        "Leukemoid reaction: reactive WBC > 50,000; causes — infection (esp. TB, sepsis), malignancy, hemorrhage",
        "LAP score: HIGH in leukemoid, LOW in CML",
        "Toxic granules & Döhle bodies — present in leukemoid, absent in CML",
        "CML: Ph chromosome positive, BCR-ABL positive, marked basophilia",
        "Leukemoid: Ph negative, no BCR-ABL"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 13, p. 599"
    },
    {
      id: "hodgkin-lymphoma",
      title: "Classical Hodgkin Lymphoma",
      branch: "wbc-path",
      tier: 3,
      xp: 100,
      marks: "5m",
      highYield: 4,
      prerequisites: ["leukemia-classification"],
      description:
        "Reed-Sternberg cells, subtypes, clinical features, staging.",
      keyPoints: [
        "Reed-Sternberg cell — 'owl-eye' binucleate; CD30+, CD15+, CD45-, CD20-/weak",
        "Subtypes: nodular sclerosis (most common, young women, mediastinal mass), mixed cellularity (EBV association, older men), lymphocyte-rich, lymphocyte-depleted",
        "B symptoms: fever, night sweats, weight loss",
        "Staging (Ann Arbor) — single lymph node region (I) to disseminated extranodal (IV)",
        "Nodular sclerosis — lacunar cells"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 13, pp. 590–593"
    },
    {
      id: "multiple-myeloma",
      title: "Multiple Myeloma",
      branch: "wbc-path",
      tier: 3,
      xp: 100,
      marks: "3m",
      highYield: 4,
      prerequisites: ["leukemia-classification"],
      description:
        "Pathogenesis, M-protein, Bence-Jones proteinuria, CRAB criteria, morphology.",
      keyPoints: [
        "Malignant clonal plasma cells producing monoclonal Ig (M-spike on SPEP)",
        "CRAB: hyperCalcemia, Renal failure (cast nephropathy), Anemia, Bone lesions (lytic — punched-out)",
        "Bence-Jones protein — free monoclonal light chains in urine; detected by heat test, immunofixation",
        "Bone marrow: > 10% clonal plasma cells",
        "Punched-out skull lesions on X-ray",
        "Serum: ↑M-protein; Urine: Bence-Jones proteinuria",
        "β2-microglobulin — prognostic marker"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 13, pp. 596–598"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 6 — HEMOSTASIS & BLOOD BANK (Advanced)
// ----------------------------------------------------------------------------
const hemostasisBranch: SkillBranch = {
  id: "hemostasis",
  name: "Hemostasis & Blood Bank",
  icon: "Heart",
  color: "#ec4899",
  tagline: "Coagulation & Transfusion",
  description:
    "Coagulation cascade, thrombocytopenia & DIC, bleeding disorder tests, blood groups (ABO, Rh, Bombay), transfusion reactions, blood components.",
  nodes: [
    {
      id: "coag-cascade",
      title: "Coagulation Cascade — Pathways & Tests",
      branch: "hemostasis",
      tier: 1,
      xp: 100,
      marks: "2m",
      highYield: 5,
      prerequisites: [],
      description:
        "Intrinsic, extrinsic & common pathways; factors; PT (extrinsic) vs APTT (intrinsic) interpretation.",
      keyPoints: [
        "Intrinsic — XII → XI → IX → VIII (PTT/APTT)",
        "Extrinsic — VII + tissue factor (PT/INR)",
        "Common — X → thrombin → fibrinogen → fibrin; XIII cross-links",
        "PT — extrinsic pathway (warfarin monitoring, liver disease)",
        "APTT — intrinsic pathway (heparin monitoring, hemophilia)",
        "TT — final fibrin formation; BT — platelet function"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, pp. 119–121"
    },
    {
      id: "thrombocytopenia-dic",
      title: "Thrombocytopenia & DIC Pathogenesis",
      branch: "hemostasis",
      tier: 2,
      xp: 120,
      marks: "5m",
      highYield: 5,
      prerequisites: ["coag-cascade"],
      description:
        "Causes of thrombocytopenia (decreased production, increased destruction, sequestration, dilution), DIC pathogenesis and lab findings.",
      keyPoints: [
        "Thrombocytopenia causes: aplastic anemia, leukemia, ITP, TTP/HUS, DIC, drugs, sepsis, hypersplenism",
        "ITP — autoantibodies against gpIIb/IIIa; isolated thrombocytopenia, ↑megakaryocytes, anti-platelet Ab",
        "DIC — widespread activation of coagulation; consumptive coagulopathy",
        "Triggers: sepsis (gram-negative), obstetric complications (amniotic fluid embolism, abruptio placentae), malignancy (APL), snake bite, trauma",
        "DIC labs: ↑PT, ↑APTT, ↓platelets, ↓fibrinogen, ↑D-dimer, schistocytes on smear",
        "Treatment — treat underlying cause; supportive — FFP, cryoprecipitate, platelets"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 663–666"
    },
    {
      id: "blood-groups",
      title: "Blood Group Systems — ABO, Rh & Bombay",
      branch: "hemostasis",
      tier: 2,
      xp: 100,
      marks: "2m",
      highYield: 5,
      prerequisites: [],
      description:
        "ABO genetics, naturally occurring antibodies, Rh system (D antigen), Bombay (Oh) phenotype, inheritance and clinical significance.",
      keyPoints: [
        "ABO — H antigen modified by glycosyltransferases (A: N-acetylgalactosamine; B: D-galactose)",
        "Naturally occurring antibodies: anti-A and anti-B (IgM) develop in first year of life",
        "RhD — most important; anti-D IgG causes hemolytic disease of newborn (erythroblastosis fetalis)",
        "Bombay (Oh) — H gene deficiency; lack H antigen; phenotypically O but anti-H antibodies",
        "Universal donor — O negative; Universal recipient — AB positive"
      ],
      textbookRef: "Modern Blood Banking — Ch. 7"
    },
    {
      id: "transfusion-reactions",
      title: "Blood Transfusion Reactions",
      branch: "hemostasis",
      tier: 3,
      xp: 150,
      marks: "12m",
      highYield: 5,
      prerequisites: ["blood-groups", "coag-cascade"],
      description:
        "Acute vs delayed reactions — hemolytic (immune, non-immune), febrile non-hemolytic, allergic/anaphylactic, TRALI, TACO, bacterial sepsis, GVHD. Lab investigation of mismatch transfusion.",
      keyPoints: [
        "Acute hemolytic (intravascular) — ABO mismatch; IgM + complement; free Hb, hemoglobinuria, renal failure, DIC",
        "Delayed hemolytic (extravascular) — Rh/Kidd antibodies (anamnestic); jaundice 3–7 days post-transfusion",
        "Febrile non-hemolytic — anti-leukocyte antibodies (multiple transfusions, multiparous)",
        "Allergic/mild urticarial — anti-plasma protein IgE",
        "Anaphylactic — IgA-deficient recipient with anti-IgA",
        "TRALI (Transfusion-related acute lung injury) — donor anti-leukocyte antibodies",
        "TACO — circulatory overload",
        "TA-GVHD — donor T-cells attack immunocompromised host; fatal; prevention — irradiation",
        "Lab workup: re-check identity, repeat ABO/Rh, DAT (direct Coombs), free Hb, haptoglobin, urine Hb, culture"
      ],
      textbookRef: "Modern Blood Banking — Ch. 15; AABB Technical Manual"
    },
    {
      id: "blood-components",
      title: "Blood Components & Donor Criteria",
      branch: "hemostasis",
      tier: 2,
      xp: 80,
      marks: "5m",
      highYield: 5,
      prerequisites: ["blood-groups"],
      description:
        "Whole blood, PRBC, FFP, cryoprecipitate, platelet concentrate, indications; donor selection criteria and deferrals; autologous transfusion.",
      keyPoints: [
        "PRBC — anemia, surgical blood loss; raises Hb by 1 g/dL per unit",
        "FFP — coagulation factor deficiency, warfarin reversal, liver disease",
        "Cryoprecipitate — fibrinogen, factor VIII, vWF, factor XIII; DIC, massive transfusion",
        "Platelet concentrate — thrombocytopenia with bleeding; one unit raises count by 5,000–10,000/μL",
        "Donor criteria: age 18–65, Hb ≥ 12.5 g/dL, weight ≥ 50 kg, pulse 50–100, BP systolic 90–180",
        "Deferral: infection (HIV, HBV, HCV, malaria), recent tattoo/piercing (6–12 months), pregnancy, breastfeeding, recent surgery, high-risk behavior",
        "Autologous transfusion — preoperative deposit, intraoperative cell salvage; eliminates transfusion reaction risk"
      ],
      textbookRef: "AABB Technical Manual, 20th edition"
    },
    {
      id: "coombs-test",
      title: "Direct & Indirect Coombs Test",
      branch: "hemostasis",
      tier: 2,
      xp: 60,
      marks: "2m",
      highYield: 5,
      prerequisites: ["blood-groups"],
      description:
        "DAT (direct) vs IAT (indirect) — clinical applications.",
      keyPoints: [
        "DAT — detects antibodies/COMPLEMENT on RBC surface; indications — autoimmune hemolytic anemia, HDN, transfusion reaction",
        "IAT — detects antibodies in serum against RBC antigens; indications — pre-transfusion cross-match, antenatal antibody screening",
        "Reagent: anti-human globulin (AHG)"
      ],
      textbookRef: "Modern Blood Banking — Ch. 17"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 7 — CARDIOVASCULAR (Specialized)
// ----------------------------------------------------------------------------
const cvsBranch: SkillBranch = {
  id: "cvs",
  name: "Cardiovascular Pathology",
  icon: "HeartPulse",
  color: "#dc2626",
  tagline: "The Heart Under Siege",
  description:
    "Ischemic heart disease, myocardial infarction (a flagship long case), rheumatic heart disease, infective endocarditis.",
  nodes: [
    {
      id: "ihd",
      title: "Ischemic Heart Disease — Etiopathogenesis",
      branch: "cvs",
      tier: 1,
      xp: 100,
      marks: "4m",
      highYield: 4,
      prerequisites: [],
      description:
        "Angina subtypes, atherosclerosis risk factors, pathogenesis of ischemia.",
      keyPoints: [
        "Stable angina — fixed atheroma > 70% stenosis; exertional; relieved by rest/nitrate",
        "Unstable angina — plaque rupture + non-occlusive thrombus; at rest; no enzyme elevation",
        "Prinzmetal (variant) — coronary vasospasm; ST elevation",
        "Risk factors — modifiable (smoking, HTN, dyslipidemia, diabetes, obesity, sedentary) and non-modifiable (age, male, family history)",
        "Pathogenesis: atherosclerotic plaque rupture → thrombus → ischemia/necrosis"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 11, pp. 487–494"
    },
    {
      id: "mi",
      title: "Myocardial Infarction — Etiopathogenesis, Morphology, Complications, Lab Dx",
      branch: "cvs",
      tier: 2,
      xp: 200,
      marks: "12m + Long Case",
      highYield: 5,
      prerequisites: ["ihd"],
      description:
        "Flagship 12-mark question and clinical long case. Plaque rupture, thrombus, evolving morphology over hours-days-weeks, complications, and cardiac biomarker timeline.",
      keyPoints: [
        "Trigger — plaque rupture + thrombus (90%); vasospasm, embolism less common",
        "Morphology timeline: < 12 hrs (no gross change; wavy fibres); 12–24 hrs (coagulative necrosis); 1–3 days (neutrophil infiltrate); 3–7 days (macrophages, yellow soft); 7–14 days (granulation tissue); > 2 weeks (scar)",
        "Microscopy: coagulative necrosis → neutrophilic infiltrate → granulation tissue → fibrous scar",
        "ECG: ST elevation (STEMI) within minutes; Q waves (transmural) by hours-days; T wave inversion",
        "Cardiac biomarkers: Troponin I/T (gold standard — rises 3–4 hrs, peaks 24 hrs, persists 7–10 days); CK-MB (rises 3–8 hrs, peaks 24 hrs, normalizes 48–72 hrs); Myoglobin (early, but not cardiac-specific); LDH-1 (late, historical)",
        "Complications: arrhythmias (most common cause of death, first 24 hrs), cardiogenic shock, papillary muscle rupture (3–5 days), ventricular free wall rupture (3–5 days, tamponade), septal rupture (3–5 days), ventricular aneurysm (weeks-months), pericarditis (Dressler syndrome 1–8 weeks, autoimmune), mural thrombus (systemic embolism)",
        "Lab workup: serial troponin (3–4 hrs, then 6–8 hrs), ECG, echocardiography, coronary angiography"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 11, pp. 494–500"
    },
    {
      id: "rheumatic",
      title: "Rheumatic Fever & Rheumatic Heart Disease",
      branch: "cvs",
      tier: 2,
      xp: 120,
      marks: "4m",
      highYield: 5,
      prerequisites: ["ihd"],
      description:
        "Molecular mimicry (anti-M protein antibodies), Aschoff bodies, Jones criteria, chronic valvular sequelae.",
      keyPoints: [
        "Trigger: Group A β-hemolytic streptococcal pharyngitis; antibody cross-reacts with myocardium (M protein)",
        "Aschoff body — central fibrinoid necrosis surrounded by Anitschkow cells (caterpillar nuclei), Aschoff giant cells",
        "Pancarditis: endocardium (vegetations — small, warty, along closure lines), myocardium (Aschoff), pericardium (bread-and-butter)",
        "Modified Jones criteria — major: carditis, polyarthritis, chorea, erythema marginatum, subcutaneous nodules",
        "Chronic RHD — mitral stenosis (most common), fish-mouth mitral valve"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 11, pp. 502–504"
    },
    {
      id: "endocarditis",
      title: "Infective Endocarditis — Etiopathogenesis",
      branch: "cvs",
      tier: 2,
      xp: 100,
      marks: "4m",
      highYield: 4,
      prerequisites: ["ihd"],
      description:
        "Acute vs subacute, viridans strep vs S. aureus, vegetations, complications, predisposing conditions.",
      keyPoints: [
        "Acute — S. aureus; normal valve; aggressive course; large destructive vegetations",
        "Subacute — Viridans streptococci; previously damaged valve (rheumatic, bicuspid aortic); indolent",
        "Vegetations — large, friable, on valve line; embolize readily",
        "Predisposing factors: prosthetic valve, IV drug use (right-sided — S. aureus), rheumatic, bicuspid aortic, VSD, PDA",
        "Complications: emboli (splenic, renal, brain), mycotic aneurysm, chordal rupture, abscess, glomerulonephritis (immune complex)",
        "Duke criteria for diagnosis"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 11, pp. 506–508"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 8 — RESPIRATORY (Specialized)
// ----------------------------------------------------------------------------
const respBranch: SkillBranch = {
  id: "resp",
  name: "Respiratory Pathology",
  icon: "Wind",
  color: "#0ea5e9",
  tagline: "Lungs Under Assault",
  description:
    "Lobar pneumonia stages, bronchopneumonia, COPD/emphysema, TB, bronchogenic carcinoma, pulmonary embolism & edema.",
  nodes: [
    {
      id: "lobar-pneumonia",
      title: "Lobar Pneumonia — Stages, Morphology, Complications",
      branch: "resp",
      tier: 1,
      xp: 150,
      marks: "5m",
      highYield: 5,
      prerequisites: [],
      description:
        "Classic 4-stage progression of pneumococcal lobar pneumonia.",
      keyPoints: [
        "Cause: Streptococcus pneumoniae (90%) — Klebsiella in alcoholics",
        "Stages: (1) Congestion (1–2 days) — vascular engorgement, edema; (2) Red hepatization (2–4 days) — RBC exudate, liver-like; (3) Grey hepatization (4–8 days) — fibrin + neutrophils, fibrinopurulent; (4) Resolution (8–10 days) — enzymatic digestion",
        "Gross: lobar consolidation; visceral pleural involvement → friction rub",
        "Microscopy: alveoli filled with neutrophils, fibrin, RBCs (red) → fibrin + neutrophils (grey)",
        "Complications: resolution (most), organization (carnification), suppuration (abscess), pleural effusion, empyema, bacteremia, endocarditis"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 704–706"
    },
    {
      id: "bronchopneumonia",
      title: "Bronchopneumonia vs Lobar Pneumonia",
      branch: "resp",
      tier: 1,
      xp: 60,
      marks: "2m",
      highYield: 3,
      prerequisites: ["lobar-pneumonia"],
      description:
        "Patchy consolidation centered on bronchioles; classic in extremes of age; causative agents.",
      keyPoints: [
        "Distribution: patchy, bilateral, basal, centrilobular",
        "Causative agents: S. aureus, H. influenzae, Pseudomonas, Klebsiella",
        "Predisposed: infants, elderly, debilitated, post-viral",
        "Gross: yellow-grey patches around bronchioles; microscopy: neutrophil exudate in bronchi & surrounding alveoli"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 706–707"
    },
    {
      id: "emphysema",
      title: "Emphysema — Types & Pathogenesis",
      branch: "resp",
      tier: 2,
      xp: 100,
      marks: "4m",
      highYield: 4,
      prerequisites: [],
      description:
        "Centriacinar (smoker), panacinar (α1-AT deficiency), paraseptal, irregular; proteinase-antiproteinase imbalance.",
      keyPoints: [
        "Definition: permanent enlargement of airspaces distal to terminal bronchiole with wall destruction, no fibrosis",
        "Centriacinar — respiratory bronchioles; smokers; upper lobes",
        "Panacinar — entire acinus; α1-antitrypsin deficiency; lower lobes",
        "Paraseptal — subpleural; causes spontaneous pneumothorax in young men",
        "Pathogenesis: neutrophil elastase unchecked (α1-AT normally inhibits) → destruction of alveolar walls",
        "Gross: overinflated, pale, pitted lungs; bullae",
        "Clinical: pink puffer (dyspnea, pursed-lip, barrel chest)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 686–690"
    },
    {
      id: "pulmonary-tb",
      title: "Pulmonary Tuberculosis — Etiopathogenesis & Morphology",
      branch: "resp",
      tier: 2,
      xp: 150,
      marks: "10m",
      highYield: 5,
      prerequisites: ["lobar-pneumonia"],
      description:
        "Primary (Ghon complex) vs secondary TB, granuloma morphology, complications, dissemination.",
      keyPoints: [
        "Cause: Mycobacterium tuberculosis (acid-fast bacilli — Ziehl-Neelsen stain)",
        "Primary TB: subpleural Ghon focus + hilar lymph node granuloma = Ghon complex; usually in lower lobe; children",
        "Secondary TB: reactivation or reinfection; apex of upper lobe (high O2 + poor lymphatic drainage)",
        "Granuloma: caseating necrosis + epithelioid cells + Langhans giant cells + lymphocytes",
        "Dissemination: miliary TB (lung, liver, spleen, bone marrow); TB meningitis; Pott's spine",
        "Lab: sputum AFB, CBNAAT (GeneXpert), Mantoux, IGRA, culture (Löwenstein-Jensen)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 715–719"
    },
    {
      id: "bronchogenic-carcinoma",
      title: "Bronchogenic Carcinoma — Subtypes & Pathogenesis",
      branch: "resp",
      tier: 3,
      xp: 100,
      marks: "4m",
      highYield: 5,
      prerequisites: ["emphysema"],
      description:
        "Four major histologic subtypes, pathogenesis, paraneoplastic syndromes, metastasis patterns.",
      keyPoints: [
        "Adenocarcinoma — most common overall; peripheral; non-smokers; women; TTF-1+",
        "Squamous cell carcinoma — central; smoking; keratin pearls; paraneoplastic PTHrP",
        "Small cell carcinoma — central; smoking; neuroendocrine origin; aggressive; paraneoplastic (SIADH, Cushing — ACTH, Lambert-Eaton)",
        "Large cell carcinoma — undifferentiated; peripheral",
        "Mutations: EGFR, ALK (adenocarcinoma, never-smokers); KRAS (smokers)",
        "Spread: lymphatic → hilar/mediastinal; hematogenous → brain, bone, liver, adrenals; direct → pleura"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 722–727"
    },
    {
      id: "pulmonary-edema-embolism",
      title: "Pulmonary Edema & Pulmonary Embolism",
      branch: "resp",
      tier: 2,
      xp: 80,
      marks: "4m",
      highYield: 4,
      prerequisites: ["emphysema"],
      description:
        "Cardiogenic vs non-cardiogenic edema; PE morphology, consequences, infarction.",
      keyPoints: [
        "Cardiogenic edema — increased hydrostatic pressure (left heart failure); pink frothy sputum; bat-wing infiltrates",
        "Non-cardiogenic — ARDS (capillary leak); protein-rich fluid",
        "PE — most often from DVT of leg",
        "Massive PE — saddle embolus, sudden death (acute right heart failure)",
        "Pulmonary infarct — wedge-shaped, hemorrhagic, pleural-based; only 10–15% of PEs infarct (dual blood supply)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 698–700; Ch. 4, pp. 125–127"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 9 — HEPATOBILIARY & GIT (Specialized)
// ----------------------------------------------------------------------------
const gitBranch: SkillBranch = {
  id: "git",
  name: "Hepatobiliary & GIT",
  icon: "Brain",
  color: "#f59e0b",
  tagline: "From Liver to Bowel",
  description:
    "Alcoholic liver disease & cirrhosis (flagship long case), hepatitis, fatty liver, IBD, peptic ulcer, carcinomas.",
  nodes: [
    {
      id: "alcoholic-liver",
      title: "Alcoholic Liver Disease — Pathogenesis & Morphology",
      branch: "git",
      tier: 1,
      xp: 200,
      marks: "Long Case + 5m",
      highYield: 5,
      prerequisites: [],
      description:
        "Spectrum of steatosis → steatohepatitis → cirrhosis; biochemical basis (NADH/NAD+ ratio shift).",
      keyPoints: [
        "Three sequential lesions: (1) Fatty change (steatosis) — reversible; (2) Alcoholic hepatitis — Mallory-Denk bodies; (3) Cirrhosis — micronodular",
        "Metabolic basis: ethanol → acetaldehyde (ADH) → acetate (ALDH); ↑NADH:NAD+ drives fatty acid synthesis and inhibits β-oxidation",
        "Mallory-Denk bodies — eosinophilic tangled intermediate filaments (cytokeratin 8/18) in hepatocytes",
        "Morphology steatosis: macrovesicular fat pushing nucleus to periphery",
        "Morphology hepatitis: neutrophil infiltrate, Mallory bodies, ballooning degeneration",
        "Morphology cirrhosis: micronodular (< 3 mm), regular fibrous septa",
        "Clinical: jaundice, ascites, palmar erythema, spider naevi, gynecomastia, testicular atrophy, encephalopathy",
        "Investigations: AST:ALT ratio > 2 (classic), ↑GGT, macrocytosis, ↑MCV"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 826–828"
    },
    {
      id: "cirrhosis",
      title: "Cirrhosis of Liver — Types & Morphology",
      branch: "git",
      tier: 2,
      xp: 150,
      marks: "4m + Long Case",
      highYield: 5,
      prerequisites: ["alcoholic-liver"],
      description:
        "Definition, micronodular vs macronodular, common etiologies, complications.",
      keyPoints: [
        "Definition: diffuse irreversible fibrosis with nodular regeneration disrupting hepatic architecture",
        "Micronodular (< 3 mm) — alcohol, biliary obstruction, hemochromatosis",
        "Macronodular (> 3 mm) — viral hepatitis (B, C), Wilson's disease, α1-AT deficiency",
        "Mixed nodular — late cirrhosis",
        "Complications: portal HTN (esophageal varices, splenomegaly, ascites, caput medusae), hepatic encephalopathy (asterixis), hepatorenal syndrome, HCC, coagulopathy (↓factors), hypoalbuminemia",
        "Investigations: LFT (AST/ALT, ALP, GGT, bilirubin, albumin, PT), USG, endoscopy, liver biopsy"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 833–835"
    },
    {
      id: "viral-hepatitis",
      title: "Viral Hepatitis & Hepatitis B Markers",
      branch: "git",
      tier: 2,
      xp: 100,
      marks: "3m",
      highYield: 5,
      prerequisites: ["cirrhosis"],
      description:
        "Hepatitis viruses (A–E), HBV marker interpretation (HBsAg, anti-HBs, HBeAg, anti-HBe, anti-HBc IgM/IgG, HBV-DNA), fulminant hepatitis.",
      keyPoints: [
        "HAV — fecal-oral; RNA virus; acute only; anti-HAV IgM = acute",
        "HBV — blood/sexual/perinatal; DNA virus; chronic in 5% adults, 90% neonates",
        "HBV markers: HBsAg (first to appear; persisting > 6 mo = chronic), anti-HBs (recovery/vaccine), HBeAg (infectivity), anti-HBe (recovering), anti-HBc IgM (acute), anti-HBc IgG (past exposure), HBV-DNA (viral load)",
        "HCV — blood; RNA virus; chronic in 85%; anti-HCV (screening), HCV-RNA (confirm)",
        "HEV — fecal-oral; high mortality in pregnancy"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 821–825"
    },
    {
      id: "fatty-liver",
      title: "Fatty Liver (Steatosis) — Morphology",
      branch: "git",
      tier: 1,
      xp: 60,
      marks: "4m",
      highYield: 4,
      prerequisites: ["alcoholic-liver"],
      description:
        "Mechanism, gross & microscopic morphology, common causes.",
      keyPoints: [
        "Mechanism: ↑ triglyceride accumulation due to imbalance in fatty acid metabolism",
        "Causes: alcohol, obesity (NAFLD), diabetes, malnutrition, drugs (steroids, methotrexate), Reye's syndrome",
        "Gross: enlarged, yellow, greasy, soft",
        "Microscopy: macrovesicular (large droplet, nucleus pushed aside) vs microvesicular (small droplets, nucleus central — Reye's, AFLP)",
        "Reversible with cessation of cause"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 826–827"
    },
    {
      id: "hemochromatosis",
      title: "Hemochromatosis",
      branch: "git",
      tier: 2,
      xp: 80,
      marks: "4m",
      highYield: 3,
      prerequisites: ["cirrhosis"],
      description:
        "Iron overload, classic triad (liver, pancreas, skin), HFE gene mutations, morphology.",
      keyPoints: [
        "Hereditary (HFE — C282Y mutation) vs secondary (transfusion, ineffective erythropoiesis)",
        "Classic: micronodular cirrhosis + diabetes mellitus (bronze diabetes) + skin pigmentation (bronze)",
        "Triad: liver, pancreas, skin — also heart, joints, gonads",
        "Lab: ↑serum iron, ↑ferritin, ↑transferrin saturation (> 60% M, > 50% F)",
        "Prussian blue stain — hemosiderin deposition in hepatocytes",
        "Treatment: therapeutic phlebotomy"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, p. 837"
    },
    {
      id: "ibd",
      title: "Crohn's Disease vs Ulcerative Colitis",
      branch: "git",
      tier: 2,
      xp: 120,
      marks: "4m",
      highYield: 5,
      prerequisites: [],
      description:
        "Differentiating morphology, distribution, complications, dysplasia risk.",
      keyPoints: [
        "Crohn: transmural inflammation, skip lesions, cobblestone mucosa, non-caseating granulomas, fistulas, fissures; anywhere mouth-to-anus (terminal ileum most common); strictures common; perianal disease; smoking ↑risk",
        "UC: mucosal/submucosal only, continuous from rectum proximally, crypt abscesses, pseudopolyps, lead-pipe appearance on barium; colon only; smoking protective",
        "Both: extraintestinal manifestations (uveitis, erythema nodosum, primary sclerosing cholangitis — esp. UC, HLA-B27 arthropathy)",
        "Cancer risk: UC > Crohn (long-standing pancolitis)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 800–803"
    },
    {
      id: "peptic-ulcer",
      title: "Peptic Ulcer — Etiopathogenesis",
      branch: "git",
      tier: 2,
      xp: 80,
      marks: "3m",
      highYield: 3,
      prerequisites: [],
      description:
        "Gastric vs duodenal ulcer, H. pylori role, NSAID mechanism, Zollinger-Ellison.",
      keyPoints: [
        "H. pylori — urease produces ammonia (alkaline microenvironment); gastric ulcer 70%, duodenal 90%",
        "NSAIDs — inhibit COX-1 → ↓PGE2 → ↓mucus and bicarbonate",
        "Gastric ulcer: lesser curvature; chronic; H. pylori, NSAIDs, smoking",
        "Duodenal ulcer: anterior wall duodenum; H. pylori, Zollinger-Ellison (gastrinoma)",
        "Morphology: clean punched-out ulcer, granulation tissue base, fibrinoid necrosis"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 786–788"
    },
    {
      id: "carcinoma-stomach",
      title: "Carcinoma Stomach — Etiology & Morphology",
      branch: "git",
      tier: 3,
      xp: 80,
      marks: "4m",
      highYield: 4,
      prerequisites: ["peptic-ulcer"],
      description:
        "Intestinal vs diffuse type, Lauren classification, H. pylori role, morphology, signet ring cells.",
      keyPoints: [
        "Risk factors: H. pylori (chronic atrophic gastritis → intestinal metaplasia), diet (smoked, salted, nitrites), blood group A, pernicious anemia",
        "Intestinal type — epidemic, older, men, associated with environmental factors",
        "Diffuse type — signet ring cells, women, younger, hereditary diffuse gastric cancer syndrome (CDH1 mutation)",
        "Morphology: polypoid, ulcerative (most common), scirrhous (linitis plastica — leather-bottle stomach)",
        "Spread: lymphatic (Virchow's node — Troisier sign), transcoelomic (Krukenberg to ovary), hematogenous (liver)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 788–791"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 10 — RENAL (Specialized)
// ----------------------------------------------------------------------------
const renalBranch: SkillBranch = {
  id: "renal",
  name: "Renal Pathology",
  icon: "Activity",
  color: "#14b8a6",
  tagline: "Glomeruli & Tubules",
  description:
    "Nephrotic vs nephritic syndromes, RPGN, chronic pyelonephritis, Wilm's tumor, renal function tests.",
  nodes: [
    {
      id: "nephrotic-nephritic",
      title: "Nephrotic vs Nephritic Syndrome",
      branch: "renal",
      tier: 1,
      xp: 120,
      marks: "5m",
      highYield: 5,
      prerequisites: [],
      description:
        "Defining features, common etiologies, classic morphology.",
      keyPoints: [
        "Nephrotic — heavy proteinuria (> 3.5 g/day), hypoalbuminemia, edema, hyperlipidemia, lipiduria",
        "  Causes (children): MCD (most common), FSGS",
        "  Causes (adults): membranous nephropathy, FSGS, diabetic nephropathy, amyloidosis",
        "Nephritic — hematuria (RBC casts), hypertension, mild proteinuria, azotemia, oliguria",
        "  Causes: post-streptococcal GN, IgA nephropathy, RPGN",
        "  Post-strep — elevated ASO titer, low complement"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 20, pp. 900–906"
    },
    {
      id: "rpgn",
      title: "Rapidly Progressive Glomerulonephritis",
      branch: "renal",
      tier: 2,
      xp: 80,
      marks: "4m",
      highYield: 4,
      prerequisites: ["nephrotic-nephritic"],
      description:
        "Crescentic GN, three immunofluorescence patterns, classic diseases.",
      keyPoints: [
        "Defining: rapid loss of renal function over weeks to months; crescents in Bowman's space",
        "Type I — anti-GBM disease (Goodpasture); linear IgG; pulmonary hemorrhage + renal failure",
        "Type II — immune-complex mediated (post-strep, SLE); granular deposits",
        "Type III — pauci-immune (ANCA-associated: Wegener, microscopic polyangiitis, Churg-Strauss)",
        "Crescents = parietal cell proliferation + fibrin + macrophages"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 20, pp. 906–908"
    },
    {
      id: "chronic-pyelonephritis",
      title: "Chronic Pyelonephritis",
      branch: "renal",
      tier: 2,
      xp: 100,
      marks: "4m",
      highYield: 5,
      prerequisites: ["nephrotic-nephritic"],
      description:
        "Reflux vs obstructive, morphology — thyroidization of tubules.",
      keyPoints: [
        "Reflux nephropathy (most common) — VUR in childhood; polar scars",
        "Obstructive — recurrent infection with obstruction (stones, BPH, neurogenic bladder)",
        "Gross: irregular, coarse cortical scars over dilated calyces; lower pole predilection in reflux",
        "Microscopy: thyroidization of tubules (colloid casts resembling thyroid follicles), chronic inflammatory infiltrate, interstitial fibrosis",
        "Clinical: HTN, CRF, recurrent UTIs"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 20, pp. 923–924"
    },
    {
      id: "wilms-tumor",
      title: "Wilm's Tumor (Nephroblastoma)",
      branch: "renal",
      tier: 3,
      xp: 80,
      marks: "4m",
      highYield: 4,
      prerequisites: ["nephrotic-nephritic"],
      description:
        "Pediatric renal tumor, genetics (WT1, WT2), triphasic morphology.",
      keyPoints: [
        "Most common pediatric renal tumor (2–5 years)",
        "Genetics: WT1 (11p13), WT2 (11p15 — Beckwith-Wiedemann)",
        "Syndromes: WAGR (Wilm, Aniridia, GU anomalies, Retardation), Denys-Drash, Beckwith-Wiedemann",
        "Triphasic morphology: blastemal (small blue cells), stromal (spindle), epithelial (tubules/glomeruli)",
        "Clinical: large abdominal mass, hematuria, HTN"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 20, pp. 927–928"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 11 — ENDOCRINE & REPRODUCTIVE (Specialized)
// ----------------------------------------------------------------------------
const endoBranch: SkillBranch = {
  id: "endo",
  name: "Endocrine & Reproductive",
  icon: "Sparkles",
  color: "#d946ef",
  tagline: "Hormones & Tumors",
  description:
    "Thyroid function tests, hyperthyroidism/Grave's, diabetes mellitus, breast carcinoma, endometrial cycle, CIN, ovarian tumors.",
  nodes: [
    {
      id: "thyroid-tests",
      title: "Thyroid Function Tests",
      branch: "endo",
      tier: 1,
      xp: 100,
      marks: "5m",
      highYield: 5,
      prerequisites: [],
      description:
        "TSH, free T3/T4 interpretation; primary vs secondary thyroid disorders; antibodies.",
      keyPoints: [
        "TSH — most sensitive screening test",
        "Primary hyperthyroid — ↓TSH, ↑T3/T4 (Graves, toxic multinodular goiter)",
        "Primary hypothyroid — ↑TSH, ↓T3/T4 (Hashimoto)",
        "Secondary (pituitary) hypothyroid — ↓TSH, ↓T3/T4",
        "Antibodies: anti-TPO (Hashimoto), anti-Tg, TSH receptor antibodies (Graves — stimulating)",
        "TRH stimulation test — distinguishes pituitary vs hypothalamic"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 24, pp. 1063–1066"
    },
    {
      id: "hyperthyroid",
      title: "Hyperthyroidism & Grave's Disease Morphology",
      branch: "endo",
      tier: 2,
      xp: 80,
      marks: "5m",
      highYield: 3,
      prerequisites: ["thyroid-tests"],
      description:
        "Diffuse toxic goiter, exophthalmos, microscopic features.",
      keyPoints: [
        "Graves — autoimmune, IgG antibodies activate TSH receptor (TSI)",
        "Clinical triad: hyperthyroidism + diffuse goiter + ophthalmopathy (exophthalmos) ± pretibial myxedema",
        "Morphology: diffuse enlargement, soft; microscopy — tall columnar epithelium, papillary infoldings, scalloped colloid, lymphocytic infiltrate"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 24, pp. 1066–1068"
    },
    {
      id: "diabetes",
      title: "Type 2 DM — Pathogenesis & Lab Diagnosis",
      branch: "endo",
      tier: 2,
      xp: 100,
      marks: "5m",
      highYield: 4,
      prerequisites: [],
      description:
        "Insulin resistance, β-cell dysfunction, diagnostic criteria, GTT, HbA1c.",
      keyPoints: [
        "Pathogenesis: insulin resistance (obesity, sedentary — ↓receptor & post-receptor signaling) + β-cell dysfunction (amyloid deposition in islets)",
        "Genetic: strong HLA association (polygenic); HLA-DR3/DR4",
        "Diagnosis: fasting glucose ≥ 126 mg/dL; 2-hr post-prandial ≥ 200 mg/dL; HbA1c ≥ 6.5%; random ≥ 200 with symptoms",
        "GTT — 75 g glucose; assess glucose at 0, 30, 60, 90, 120 min; peaks at 30 min, returns to normal by 2 hrs in healthy",
        "HbA1c — average glucose over 3 months; < 5.7% normal, 5.7–6.4% prediabetes, ≥ 6.5% diabetes; goal < 7%",
        "C-peptide — distinguishes endogenous (high) from exogenous (low) insulin"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 24, pp. 1080–1087"
    },
    {
      id: "breast-cancer",
      title: "Carcinoma Breast",
      branch: "endo",
      tier: 3,
      xp: 100,
      marks: "4m",
      highYield: 4,
      prerequisites: [],
      description:
        "Risk factors, DCIS/LCIS, invasive subtypes, ER/PR/HER2, prognostic markers.",
      keyPoints: [
        "Risk factors: female, age, family history (BRCA1 — chromosome 17; BRCA2 — chromosome 13), early menarche, late menopause, nulliparity, HRT, obesity, alcohol",
        "Most common: invasive ductal carcinoma (no special type) — 75%",
        "Other: lobular (E-cadherin loss — single-file; signet ring), tubular, mucinous, medullary",
        "Receptors: ER/PR — predict hormonal therapy response; HER2/neu — predicts trastuzumab response; triple negative — aggressive, BRCA1",
        "TNM staging: tumor size, nodal status (most important prognostic), metastases",
        "Spread: lymphatic (axillary), bone (lytic/sclerotic), liver, lung, brain"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 23, pp. 1023–1031"
    },
    {
      id: "endometrial-cycle",
      title: "Endometrial Cycle & CIN",
      branch: "endo",
      tier: 2,
      xp: 80,
      marks: "4m",
      highYield: 4,
      prerequisites: [],
      description:
        "Menstrual phase changes; cervical intraepithelial neoplasia grading, PAP smear.",
      keyPoints: [
        "Proliferative (days 5–14) — estrogen-driven; straight glands; mitoses; stroma dense",
        "Secretory (days 15–28) — progesterone-driven; coiled glands; subnuclear vacuoles; stroma edematous; spiral arteries develop; peak at day 22",
        "Menstrual (days 1–4) — ischemic necrosis, bleeding",
        "CIN I (mild), II (moderate), III (severe dysplasia + CIS); HPV 16/18 — E6 (p53), E7 (RB)",
        "PAP smear: Bethesda system — ASCUS, LSIL, HSIL",
        "Colposcopy + biopsy for confirmation"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 22, pp. 995–999"
    },
    {
      id: "ovarian-tumors",
      title: "Ovarian Tumors — Classification & Teratoma",
      branch: "endo",
      tier: 3,
      xp: 80,
      marks: "4m",
      highYield: 4,
      prerequisites: ["endometrial-cycle"],
      description:
        "Surface epithelial, germ cell, sex cord stromal; mature vs immature teratoma.",
      keyPoints: [
        "Surface epithelial (90%) — serous (most common; psammoma bodies), mucinous, endometrioid, clear cell",
        "Germ cell — dysgerminoma (radiosensitive; LDH ↑), yolk sac (Schiller-Duval bodies; AFP ↑), immature teratoma, mature cystic teratoma (dermoid — hair, teeth, sebum)",
        "Sex cord stromal — granulosa cell (Call-Exner bodies; estrogen → precocious puberty); Sertoli-Leydig (androgens); fibroma (Meigs syndrome)",
        "Krukenberg — metastatic signet ring from stomach"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 22, pp. 1011–1018"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 12 — CNS (Specialized)
// ----------------------------------------------------------------------------
const cnsBranch: SkillBranch = {
  id: "cns",
  name: "CNS Pathology",
  icon: "BrainCircuit",
  color: "#6366f1",
  tagline: "Brain & Meninges",
  description:
    "Meningitis (pyogenic vs tuberculous) — CSF analysis is a flagship 3-mark question.",
  nodes: [
    {
      id: "meningitis-csf",
      title: "Meningitis — CSF Findings (Pyogenic vs TB)",
      branch: "cns",
      tier: 1,
      xp: 150,
      marks: "5m + 3m",
      highYield: 5,
      prerequisites: [],
      description:
        "CSF analysis — appearance, cells, protein, glucose, Gram stain, AFB, culture findings.",
      keyPoints: [
        "Pyogenic (bacterial): turbid/cloudy, ↑↑↑ neutrophils (> 1000), ↑ protein (100–500 mg/dL), ↓ glucose, Gram +ve cocci (S. pneumo, N. meningitidis, H. influenzae)",
        "Tuberculous: cobweb coagulum, ↑ lymphocytes (50–500), ↑ protein (100–500 mg/dL), ↓ glucose, AFB +ve on Ziehl-Neelsen",
        "Viral: clear, ↑ lymphocytes (10–100), normal/slightly ↑ protein, normal glucose",
        "Normal CSF: clear, < 5 cells (lymphocytes), protein 15–45 mg/dL, glucose 50–80 mg/dL (60% of blood)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 28, pp. 1246–1249"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 13 — INFECTIOUS (Specialized)
// ----------------------------------------------------------------------------
const infectBranch: SkillBranch = {
  id: "infect",
  name: "Infectious Diseases",
  icon: "Biohazard",
  color: "#84cc16",
  tagline: "HIV, TB & Leprosy",
  description:
    "HIV/AIDS with opportunistic infections (flagship long case & autopsy), TB, leprosy immunopathology.",
  nodes: [
    {
      id: "hiv-aids",
      title: "HIV / AIDS — Etiopathology, Sequelae, Autopsy",
      branch: "infect",
      tier: 1,
      xp: 200,
      marks: "Long Case + Autopsy",
      highYield: 5,
      prerequisites: [],
      description:
        "HIV structure, CD4 tropism, disease progression, opportunistic infections, AIDS-defining illnesses, autopsy findings.",
      keyPoints: [
        "Retrovirus — HIV-1 (most cases), HIV-2 (West Africa); ssRNA with reverse transcriptase",
        "gp120 binds CD4 (T-helper cells, macrophages, dendritic cells); co-receptor CCR5 (early) → CXCR4 (late)",
        "Stages: (1) Acute infection (flu-like, ↑viremia), (2) Latency (years), (3) AIDS (CD4 < 200) — opportunistic infections & tumors",
        "AIDS-defining: candidiasis (esophageal), Pneumocystis jirovecii pneumonia, CMV, toxoplasmosis, cryptococcal meningitis, MAC, Kaposi sarcoma, NHL (CNS), cervical carcinoma",
        "Pediatric AIDS tumors: Kaposi sarcoma, B-cell lymphoma, leiomyosarcoma",
        "Lab: ELISA (screening), Western blot (confirmatory), CD4 count, HIV-RNA viral load (RT-PCR)",
        "Autopsy findings: lymphoid depletion (spleen, nodes), opportunistic infections (lung PCP, GI candidiasis, brain toxo), Kaposi sarcoma, NHL"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 6, pp. 240–248"
    },
    {
      id: "leprosy",
      title: "Leprosy — Immunopathology & Lepromatous Leprosy",
      branch: "infect",
      tier: 2,
      xp: 100,
      marks: "5m",
      highYield: 4,
      prerequisites: ["hiv-aids"],
      description:
        "Ridley-Jopling spectrum, TT vs LL, granuloma morphology, skin smears.",
      keyPoints: [
        "Cause: Mycobacterium leprae (acid-fast; intracellular; cannot be cultured)",
        "Ridley-Jopling spectrum: TT (tuberculoid) → BT → BB → BL → LL (lepromatous)",
        "Tuberculoid: strong CMI (Th1, IL-2, IFN-γ); few organisms; epithelioid granulomas; localized skin lesion with anesthesia",
        "Lepromatous: poor CMI (Th2, IL-4, IL-10); abundant organisms; foamy macrophages (Virchow cells) full of bacilli; systemic involvement (skin, nerves, testes, nose)",
        "Leonine facies, madarosis, glove-stocking anesthesia, claw hand, foot drop",
        "Tests: slit-skin smear (bacteriological index), Lepromin test (Mitsuda — assesses CMI, not diagnostic)",
        "Skin biopsy: Fite-Faraco stain"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 8, pp. 360–362"
    },
    {
      id: "tb-systemic",
      title: "Tuberculosis — Systemic & Miliary",
      branch: "infect",
      tier: 2,
      xp: 100,
      marks: "10m",
      highYield: 4,
      prerequisites: ["hiv-aids"],
      description:
        "Miliary TB, extrapulmonary TB (lymph node, bone, GI, meninges), laboratory diagnosis.",
      keyPoints: [
        "Miliary — hematogenous dissemination; millet-seed-like lesions in lung, liver, spleen, bone marrow",
        "TB lymphadenitis — scrofula (cervical)",
        "Pott's disease — spine (lower thoracic); cold abscess",
        "TB meningitis — basal exudate, hydrocephalus",
        "GI TB — terminal ileum (mimics Crohn); hyperplastic vs ulcerative",
        "Lab: sputum AFB (Ziehl-Neelsen), CBNAAT (GeneXpert — detects rifampicin resistance), Mantoux (5 TU PPD), IGRA, culture (Löwenstein-Jensen, BACTEC)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 715–719"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 14 — GENETICS & CELL INJURY (Foundation)
// ----------------------------------------------------------------------------
const geneticsBranch: SkillBranch = {
  id: "genetics",
  name: "Genetics & Cell Injury",
  icon: "Dna",
  color: "#f43f5e",
  tagline: "Chromosomes & Necrosis",
  description:
    "Down/Turner/Klinefelter syndromes, cell injury (reversible/irreversible, apoptosis, necrosis types), pathologic calcification, amyloid, gangrene.",
  nodes: [
    {
      id: "down-syndrome",
      title: "Down Syndrome (Trisomy 21)",
      branch: "genetics",
      tier: 1,
      xp: 80,
      marks: "2m",
      highYield: 4,
      prerequisites: [],
      description:
        "Most common chromosomal disorder; meiotic nondisjunction; classic features.",
      keyPoints: [
        "Cause: 95% — meiotic nondisjunction (maternal, age > 35); 4% — Robertsonian translocation; 1% — mosaicism",
        "Features: flat facial profile, epicanthal folds, upslanting palpebral fissures, single transverse palmar crease (simian), Brushfield spots, hypotonia, sandal gap",
        "Cardiac: ASD, VSD, AV canal defect (40%)",
        "Mental retardation — IQ 30–70",
        "↑risk: ALL, AML (M7), Alzheimer's disease (APP gene on chromosome 21) by age 40"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 5, pp. 162–165"
    },
    {
      id: "turner-syndrome",
      title: "Turner Syndrome (45, X)",
      branch: "genetics",
      tier: 1,
      xp: 60,
      marks: "2m",
      highYield: 4,
      prerequisites: [],
      description:
        "Monosomy X; phenotype; classic cardiovascular & lymphatic features.",
      keyPoints: [
        "Cause: loss of X chromosome (45, X); some mosaics (45, X / 46, XX)",
        "Features: short stature, webbed neck (cystic hygroma), shield chest, widely-spaced nipples, cubitus valgus, primary amenorrhea, streak ovaries, infertility",
        "Cardiac: coarctation of aorta (bicuspid aortic valve)",
        "Lymphedema of hands and feet at birth",
        "Normal IQ"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 5, pp. 165–166"
    },
    {
      id: "klinefelter",
      title: "Klinefelter Syndrome (47, XXY)",
      branch: "genetics",
      tier: 1,
      xp: 60,
      marks: "2m",
      highYield: 4,
      prerequisites: [],
      description:
        "Most common cause of male hypogonadism; phenotype and labs.",
      keyPoints: [
        "Cause: 47, XXY; meiotic nondisjunction; 1 in 500 males",
        "Features: tall, long limbs (eunuchoid), gynecomastia, small firm testes, azoospermia, infertility, ↓testosterone",
        "↑FSH, ↑LH (low testosterone feedback); ↑estradiol",
        "↑risk: breast cancer (20×), mediastinal germ cell tumors",
        "Barr body present (one extra X)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 5, p. 166"
    },
    {
      id: "cell-injury",
      title: "Cell Injury — Reversible & Irreversible",
      branch: "genetics",
      tier: 1,
      xp: 100,
      marks: "4m",
      highYield: 3,
      prerequisites: [],
      description:
        "Mechanism of cell injury; reversible vs irreversible changes; mitochondrial role.",
      keyPoints: [
        "Reversible: cellular swelling (loss of volume control — Na/K ATPase failure), fatty change, ER swelling",
        "Irreversible: severe membrane damage (phospholipase activation), mitochondrial permeability transition pore (MPTP) opening, release of cytochrome c → apoptosis",
        "Mitochondria — central role; damage → ↓oxidative phosphorylation → ↓ATP → failure of all ATP-dependent pumps",
        "Calcium influx → activates phospholipase, protease, endonuclease"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 2, pp. 32–40"
    },
    {
      id: "necrosis-apoptosis",
      title: "Necrosis Types & Apoptosis Mechanisms",
      branch: "genetics",
      tier: 2,
      xp: 100,
      marks: "4m",
      highYield: 5,
      prerequisites: ["cell-injury"],
      description:
        "Coagulative, liquefactive, caseous, fat, fibrinoid necrosis; apoptosis molecular mechanisms (intrinsic, extrinsic pathways).",
      keyPoints: [
        "Coagulative — most common; loss of nucleus but preservation of cellular outline (heart, kidney)",
        "Liquefactive — brain (ischemic infarct); abscess",
        "Caseous — TB; cheese-like",
        "Fat necrosis — acute pancreatitis; chalky white (saponification)",
        "Fibrinoid — immune-mediated (vasculitis, malignant HTN)",
        "Apoptosis: programmed, energy-dependent; no inflammation",
        "  Intrinsic (mitochondrial) — cytochrome c → caspase 9; controlled by BCL-2 family (BAX, BAK promote; BCL-2, BCL-XL inhibit)",
        "  Extrinsic — Fas-FasL, TNF receptor → caspase 8",
        "  Executioner caspases 3, 6, 7 → DNA fragmentation (laddering)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 2, pp. 39–50"
    },
    {
      id: "calcification-amyloid",
      title: "Pathologic Calcification & Amyloid",
      branch: "genetics",
      tier: 2,
      xp: 100,
      marks: "5m",
      highYield: 4,
      prerequisites: ["necrosis-apoptosis"],
      description:
        "Dystrophic vs metastatic calcification; amyloid structure, classification, staining.",
      keyPoints: [
        "Dystrophic — normal Ca, abnormal tissue (atheroma, TB, psammoma bodies in papillary thyroid carcinoma)",
        "Metastatic — normal tissue, ↑serum Ca (hyperparathyroidism, malignancy, vitamin D intoxication)",
        "Amyloid — β-pleated sheet; AL (light chain — multiple myeloma), AA (secondary — chronic inflammation), ATTR (familial/transsthyretin), Aβ (Alzheimer's)",
        "Stains: Congo red — apple-green birefringence under polarized light; Thioflavin T — fluorescence; Crystal violet — metachromasia",
        "Organs: kidney (nephrotic), heart (restrictive cardiomyopathy), liver, spleen (sago and lardaceous), tongue (macroglossia)"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 2, pp. 60–66; Ch. 6, pp. 217–219"
    },
    {
      id: "gangrene",
      title: "Gangrene — Types & Pathogenesis",
      branch: "genetics",
      tier: 2,
      xp: 80,
      marks: "5m",
      highYield: 4,
      prerequisites: ["necrosis-apoptosis"],
      description:
        "Dry, wet, gas gangrene — causes and distinguishing features.",
      keyPoints: [
        "Dry — coagulative necrosis; arterial occlusion; dry, shrunken, leathery, well-demarcated; lower limb in atherosclerosis",
        "Wet — liquefactive; venous obstruction + superadded infection; swollen, wet, foul-smelling; bowel, lung, diabetic foot",
        "Gas — Clostridium perfringens (α-toxin — lecithinase); myonecrosis; crepitus; grim prognosis"
      ],
      textbookRef: "Robbins Basic Pathology 10e — Ch. 4, p. 130"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 15 — LABORATORY TECHNIQUES (Foundation)
// ----------------------------------------------------------------------------
const labBranch: SkillBranch = {
  id: "lab",
  name: "Laboratory Techniques",
  icon: "Microscope",
  color: "#0d9488",
  tagline: "Tools of the Trade",
  description:
    "FNAC, frozen section, fixatives, special stains, urine/CSF/semen examination, bone marrow, blood bank lab work.",
  nodes: [
    {
      id: "fnac",
      title: "Fine Needle Aspiration Cytology (FNAC)",
      branch: "lab",
      tier: 1,
      xp: 120,
      marks: "5m",
      highYield: 5,
      prerequisites: [],
      description:
        "Indications, advantages, disadvantages, technique, applications by organ.",
      keyPoints: [
        "Indications: thyroid nodules, breast lumps, lymph nodes, salivary glands, deep-seated lesions (USG-guided — liver, pancreas)",
        "Advantages: OPD procedure, no anesthesia, minimal invasion, rapid reporting (1 hour), repeatable, cost-effective",
        "Disadvantages: cannot assess invasion, sampling error, requires expertise, cannot subtype some tumors, inadequate samples in cystic/scanty lesions",
        "Needle: 22–27 gauge; aspiration with 10 mL syringe; Zajdela (non-aspiration) technique for vascular organs",
        "Reporting: categorize as benign, inflammatory, suspicious, malignant, inadequate"
      ],
      textbookRef: "Orell & Sterrett — Fine Needle Aspiration Cytology, 5e"
    },
    {
      id: "frozen-section",
      title: "Frozen Section in Histopathology",
      branch: "lab",
      tier: 1,
      xp: 80,
      marks: "5m",
      highYield: 4,
      prerequisites: [],
      description:
        "Indications, technique (cryostat), advantages, limitations.",
      keyPoints: [
        "Indications: intraoperative consultation (margin assessment, lymph node metastasis), tissue identification, enzyme histochemistry (lipids — Oil Red O)",
        "Technique: tissue rapidly frozen (-20 to -30°C) in cryostat; section cut at 5–7 μm; stained with H&E or toluidine blue",
        "Time: 10–20 minutes from specimen to report",
        "Advantages: rapid, enables surgical decision-making, preserves enzymes/lipids",
        "Disadvantages: poorer morphology than paraffin, sampling limited, requires experienced pathologist",
        "Alternatives: imprint cytology, scrape cytology"
      ],
      textbookRef: "Theory & Practice of Histological Techniques — Ch. 14"
    },
    {
      id: "fixatives",
      title: "Tissue Fixatives in Histopathology",
      branch: "lab",
      tier: 1,
      xp: 80,
      marks: "3m",
      highYield: 4,
      prerequisites: [],
      description:
        "10% NBF (gold standard), special fixatives for specific tissues and stains.",
      keyPoints: [
        "10% Neutral Buffered Formalin (NBF) — universal; 4% formaldehyde; ratio 1:10 (tissue:fixative); fixation time 6–24 hrs",
        "Glutaraldehyde — electron microscopy (2.5% in phosphate buffer)",
        "Bouin's — testis, endocrine (picric acid + acetic acid + formaldehyde); good morphology, yellowish",
        "Carnoy's — chromosomes, glycogen (alcohol + chloroform + acetic acid)",
        "Zenker's — muscle,骨髓; contains mercuric chloride",
        "Helly's — blood-forming organs",
        "Acetone/methanol — enzyme histochemistry"
      ],
      textbookRef: "Theory & Practice of Histological Techniques — Ch. 4"
    },
    {
      id: "special-stains",
      title: "Special Stains in Histopathology",
      branch: "lab",
      tier: 2,
      xp: 100,
      marks: "3m",
      highYield: 5,
      prerequisites: ["fixatives"],
      description:
        "Histochemical stains for carbohydrates, proteins, lipids, microorganisms, pigments.",
      keyPoints: [
        "PAS — glycogen, basement membrane, fungi; diastase removes glycogen",
        "Alcian blue — acid mucopolysaccharides; pH 2.5 vs 1.0 differentiates sialomucins from sulfomucins",
        "Mucicarmine — epithelial mucin",
        "Congo red — amyloid (apple-green birefringence)",
        "Oil Red O / Sudan Black — lipids (requires frozen section)",
        "Gram stain — bacteria; Ziehl-Neelsen — acid-fast bacilli; Fite — lepra bacilli; Grocott methenamine silver (GMS) — fungi; Warthin-Starry — spirochetes",
        "Prussian blue — iron (hemosiderin); Perl's — hemosiderin",
        "Masson's trichrome — collagen blue; muscle red",
        "Von Kossa — calcium (black)",
        "Reticulin (Gordon & Sweets) — reticulin fibers"
      ],
      textbookRef: "Theory & Practice of Histological Techniques — Ch. 12"
    },
    {
      id: "urine-exam",
      title: "Urine Examination — Physical, Chemical, Microscopic",
      branch: "lab",
      tier: 2,
      xp: 120,
      marks: "5m",
      highYield: 5,
      prerequisites: [],
      description:
        "Complete urine analysis — color, transparency, pH, specific gravity, proteins, glucose, ketones, bilirubin, blood, nitrites, casts, crystals, cells.",
      keyPoints: [
        "Physical: color (straw-amber), transparency (clear), pH (4.5–8, avg 6), specific gravity (1.003–1.030)",
        "Chemical: protein (albumin — sulfosalicylic acid, dipstick), glucose (Benedict's, dipstick-GOD-POD), ketones (Rothera's, nitroprusside), bilirubin (Fouchet's), urobilinogen (Ehrlich's), blood (benzidine), nitrite (Greiss)",
        "Preservatives: HCl (VMA, catecholamines — 24 hr), boric acid (culture), thymol (calcium), toluene (histological), formalin (formed elements)",
        "Casts: hyaline (mild proteinuria, dehydration), RBC (glomerulonephritis), WBC (pyelonephritis, interstitial nephritis), granular (ATN, advanced renal disease), waxy (chronic renal failure), broad (chronic renal failure)",
        "Crystals: calcium oxalate (envelope — ethylene glycol poisoning), uric acid (rhomboid — gout), triple phosphate (coffin-lid — infection with urea-splitting organisms like Proteus), cystine (hexagonal — cystinuria)",
        "Cells: RBC (hematuria), WBC (UTI), renal tubular epithelial (ATN), squamous (contamination), oval fat bodies (nephrotic)"
      ],
      textbookRef: "Henry's Clinical Diagnosis — Ch. 28"
    },
    {
      id: "csf-analysis",
      title: "CSF Analysis — Collection & Interpretation",
      branch: "lab",
      tier: 2,
      xp: 100,
      marks: "3m",
      highYield: 5,
      prerequisites: ["urine-exam"],
      description:
        "Lumbar puncture, opening pressure, three tubes, normal vs abnormal in various CNS disorders.",
      keyPoints: [
        "Collection: LP at L3-L4 or L4-L5; 3 tubes — tube 1 (cell count), tube 2 (chemistry, glucose, protein), tube 3 (microbiology, Gram, AFB, culture)",
        "Opening pressure: 8–20 cm H2O (recumbent)",
        "Normal: clear, < 5 cells/μL (lymphocytes), protein 15–45 mg/dL, glucose 50–80 mg/dL (60% of blood glucose)",
        "Xanthochromia — yellow tint due to RBC lysis; subarachnoid hemorrhage (vs traumatic tap — RBC count equal in all 3 tubes)"
      ],
      textbookRef: "Henry's Clinical Diagnosis — Ch. 29"
    },
    {
      id: "semen-analysis",
      title: "Semen Examination — Indications & Microscopy",
      branch: "lab",
      tier: 2,
      xp: 100,
      marks: "5m",
      highYield: 5,
      prerequisites: ["urine-exam"],
      description:
        "Semen analysis per WHO 2021 criteria — physical, chemical, microscopic parameters.",
      keyPoints: [
        "Indications: infertility workup, post-vasectomy, donor screening, forensic (sexual assault)",
        "Collection: masturbation after 2–7 days abstinence; analyze within 1 hr",
        "Physical: volume ≥ 1.4 mL (5th percentile), pH ≥ 7.2, liquefaction < 60 min (protease from prostate)",
        "Microscopic (WHO 2021): count ≥ 16 million/mL (5th percentile); motility — total ≥ 42% (5th percentile), progressive ≥ 30%; morphology ≥ 4% normal (strict Kruger)",
        "Viability: ≥ 54% live; viability vs motility differentiates dead from structurally abnormal sperm",
        "Pus cells: < 1 million/mL; fructose — positive (seminal vesicle function); zinc, citric acid — prostatic markers",
        "Sperm antibodies — MAR test / immunobead test"
      ],
      textbookRef: "WHO Laboratory Manual for Examination of Human Semen, 6e (2021)"
    },
    {
      id: "bone-marrow",
      title: "Bone Marrow Examination — Indications & Findings",
      branch: "lab",
      tier: 3,
      xp: 100,
      marks: "3m",
      highYield: 4,
      prerequisites: ["special-stains"],
      description:
        "Aspiration vs trephine biopsy; sites; indications; M:E ratio; characteristic findings.",
      keyPoints: [
        "Aspiration: posterior iliac crest (preferred), sternum (adults only), tibia (infants); use Salah needle",
        "Trephine biopsy: posterior iliac crest; Jamshidi needle; assesses architecture, cellularity, fibrosis",
        "Indications: unexplained cytopenias, suspected leukemia, multiple myeloma, lymphoma staging, aplastic anemia, megaloblastic anemia, storage disorders, metastatic workup",
        "Normal M:E ratio: 2–3:1 (myeloid to erythroid)",
        "Megaloblastic: giant metamyelocytes, megaloblasts, ↓M:E",
        "AML: > 20% blasts, Auer rods",
        "Multiple myeloma: > 10% clonal plasma cells",
        "Aplastic anemia: hypocellular marrow (< 30%) with fatty replacement",
        "Myelofibrosis: dry tap; reticulin + collagen fibrosis"
      ],
      textbookRef: "Bain — Bone Marrow Pathology, 5e"
    },
    {
      id: "pap-smear",
      title: "PAP Smear & Exfoliative Cytology",
      branch: "lab",
      tier: 3,
      xp: 100,
      marks: "3m",
      highYield: 5,
      prerequisites: ["special-stains"],
      description:
        "Cervical cytology, Bethesda reporting, screening guidelines, exfoliative cytology applications.",
      keyPoints: [
        "PAP smear — screening for cervical cancer and precursors; Ayre's spatula + endocervical brush",
        "Bethesda system: NILM, ASC-US, ASC-H, LSIL (CIN I), HSIL (CIN II/III), SCC, AGC, AIS, adenocarcinoma",
        "LSIL — HPV effect: koilocytosis (perinuclear halo, wrinkled hyperchromatic nucleus)",
        "Screening: start at 21 (sexually active); every 3 yrs (21–29); every 5 yrs with HPV co-testing (30–65)",
        "Liquid-based cytology (ThinPrep, SurePath) — better fixation, fewer artifacts, can do HPV testing",
        "Other exfoliative cytology: sputum (lung cancer), urine (bladder cancer — voided urine cytology), effusions (malignant cells), brush cytology (GI, bronchial)"
      ],
      textbookRef: "The Bethesda System for Reporting Cervical Cytology, 3e"
    },
    {
      id: "esr-retic",
      title: "ESR, Reticulocyte & Automated Hematology",
      branch: "lab",
      tier: 2,
      xp: 100,
      marks: "3m",
      highYield: 5,
      prerequisites: ["special-stains"],
      description:
        "ESR (Westergren), reticulocyte count (supravital stain), automated cell counters.",
      keyPoints: [
        "ESR (Westergren): 1 hr fall of RBC in anticoagulated blood; normal 0–22 mm/hr (M), 0–29 mm/hr (F); ↑ in inflammation, anemia, pregnancy, multiple myeloma, malignancy; ↓ in polycythemia, sickle cell, hypofibrinogenemia",
        "Reticulocyte: immature RBC with RNA; supravital stain — brilliant cresyl blue or new methylene blue; normal 0.5–2.5%; corrected retic = retic% × (Hct/45); RPI = corrected retic / maturation factor",
        "Automated counters: impedance (Coulter), optical scatter, flow cytometry; parameters — RBC, WBC, platelet count, Hb, MCV, MCH, MCHC, RDW, MPV; flags for abnormal cells (blasts, atypical lymphocytes, NRBCs)",
        "Hematology analyzers: 3-part (lymph, mid, gran) vs 5-part differential (neutrophil, lymph, mono, eos, baso)"
      ],
      textbookRef: "Henry's Clinical Diagnosis — Ch. 32 & 33"
    }
  ]
};

// ----------------------------------------------------------------------------
// EXPORT
// ----------------------------------------------------------------------------
export const skillTree: SkillBranch[] = [
  inflammationBranch,
  hemodynamicsBranch,
  neoplasiaBranch,
  rbcBranch,
  wbcBranch,
  hemostasisBranch,
  cvsBranch,
  respBranch,
  gitBranch,
  renalBranch,
  endoBranch,
  cnsBranch,
  infectBranch,
  geneticsBranch,
  labBranch
];

export const allSkillNodes: SkillNode[] = skillTree.flatMap((b) => b.nodes);

export const totalXP = allSkillNodes.reduce((sum, n) => sum + n.xp, 0);
