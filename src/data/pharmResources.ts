// ============================================================================
// PHARMACOLOGY RESOURCE LIBRARY
// International-standard pharmacology references aligned with the IMP topics.
// ============================================================================

import type { Resource, ResourceCategory } from "./resources";

// PharmResource is structurally identical to Resource — it inherits all
// fields. Defined as a type alias so future pharmacology-specific fields
// can be added without breaking consumers.
export type PharmResource = Resource;

export const pharmResources: PharmResource[] = [
  // ========================================================================
  // TEXTBOOKS — GOLD STANDARD
  // ========================================================================
  {
    id: "katzung",
    title: "Katzung Basic & Clinical Pharmacology (15e, 2021)",
    url: "https://www.mheducation.com/highered/product/katzung-basic-clinical-pharmacology/M9781264264896.html",
    description:
      "The international gold standard for undergraduate pharmacology. Every long-answer in your exam should be traceable to Katzung. The 15th edition includes updated chapters on immunopharmacology, gene therapy, and critical care pharmacology. Available as open-access at accessmedicine.mhmedical.com through many university libraries.",
    category: "Textbooks",
    icon: "BookOpen",
    rating: 5,
    tags: ["gold-standard", "international", "exam-aligned", "comprehensive"]
  },
  {
    id: "goodman-gilman",
    title: "Goodman & Gilman's The Pharmacological Basis of Therapeutics (14e)",
    url: "https://www.mheducation.com/highered/product/goodman-gilman-pharmacological-basis-therapeutics/M9781264264896.html",
    description:
      "The encyclopedic sister to Katzung — for deep mechanistic detail on molecular pharmacology, receptor pharmacology, and therapeutics. Use as reference when Katzung doesn't have enough detail.",
    category: "Textbooks",
    icon: "BookMarked",
    rating: 5,
    tags: ["comprehensive", "molecular", "reference"]
  },
  {
    id: "kd-tripathi",
    title: "K.D. Tripathi — Essentials of Medical Pharmacology (8e, 2019)",
    url: "https://www.jaypeedigital.com/book/9789352609009/essentials-of-medical-pharmacology",
    description:
      "The Indian context standard — pattern of exam questions, drug availability, national guidelines (NLEM, RNTCP, NACO). The 8th edition includes updated chapters on diabetes, COVID-19, and biosimilars.",
    category: "Textbooks",
    icon: "BookOpen",
    rating: 5,
    tags: ["indian-context", "exam-aligned", "practical"]
  },
  {
    id: "rang-and-dale",
    title: "Rang & Dale's Pharmacology (9e, 2020)",
    url: "https://www.elsevier.com/books/rang-and-dales-pharmacology/rang/9780702080609",
    description:
      "Excellent for mechanistic clarity — especially autonomic pharmacology, receptor signaling (GPCR, kinase pathways), and drug discovery. Highly recommended for the ANS and CNS branches.",
    category: "Textbooks",
    icon: "BookOpen",
    rating: 5,
    tags: ["mechanism", "ANS", "CNS"]
  },
  {
    id: "who-model-list",
    title: "WHO Model List of Essential Medicines (23rd list, 2023)",
    url: "https://www.who.int/publications/i/item/WHO-MHP-HPS-EML-2023.02",
    description:
      "The international reference for essential medicines — drug selection, prioritization, and rational use. Particularly useful for ANS, antimicrobial, and endocrine pharmacology questions on 'drug of choice'.",
    category: "Guidelines",
    icon: "FileCheck",
    rating: 5,
    tags: ["WHO", "essential-medicines", "international", "drug-choice"]
  },

  // ========================================================================
  // GUIDELINES — INTERNATIONAL
  // ========================================================================
  {
    id: "who-htn",
    title: "WHO — Hypertension Guidelines (2023)",
    url: "https://www.who.int/publications/i/item/9789240049938",
    description:
      "WHO global guidelines on hypertension management — drug selection by age, comorbidity, target BP. Useful for the long-answer on antihypertensive drugs.",
    category: "Guidelines",
    icon: "HeartPulse",
    rating: 5,
    tags: ["WHO", "hypertension", "international"]
  },
  {
    id: "acc-aha-htn",
    title: "2017 ACC/AHA Hypertension Guidelines",
    url: "https://www.acc.org/guidelines/htn",
    description:
      "American College of Cardiology / American Heart Association guidelines — defines hypertension as > 130/80 (different from WHO/JNC-8). Useful for contrasting guidelines in your answer.",
    category: "Guidelines",
    icon: "HeartPulse",
    rating: 4,
    tags: ["ACC", "AHA", "international"]
  },
  {
    id: "who-asthma-gina",
    title: "GINA — Global Initiative for Asthma (Updated 2024)",
    url: "https://ginasthma.org/",
    description:
      "The international reference for asthma management — step-up therapy, anti-IgE, biologics. Updated to recommend ICS-formoterol as preferred reliever (no more SABA-only).",
    category: "Guidelines",
    icon: "Wind",
    rating: 5,
    tags: ["GINA", "asthma", "international", "step-up"]
  },
  {
    id: "gold-copd",
    title: "GOLD — Global Initiative for Chronic Obstructive Lung Disease (2024)",
    url: "https://goldcopd.org/",
    description:
      "International COPD guidelines — LABA/LAMA combinations, ICS withdrawal, exacerbation management.",
    category: "Guidelines",
    icon: "Wind",
    rating: 5,
    tags: ["GOLD", "COPD", "international"]
  },
  {
    id: "who-tb",
    title: "WHO — TB Treatment Guidelines (2022 update)",
    url: "https://www.who.int/publications/i/item/9789240063132",
    description:
      "Updated WHO TB treatment guidelines — 4-month regimen for drug-susceptible TB, BPaLM for MDR-TB. Useful for the long-answer on anti-TB drugs.",
    category: "Guidelines",
    icon: "Lung",
    rating: 5,
    tags: ["WHO", "TB", "international", "MDR"]
  },
  {
    id: "rntcp-india",
    title: "NTEP — National TB Elimination Programme (India)",
    url: "https://tbcindia.gov.in/",
    description:
      "Indian TB programme guidelines (formerly RNTCP). Essential for Cat I, Cat II regimens, DOTS strategy, daily regimen, and Nikshay portal. Particularly relevant since your exam asks for Cat I & II regimens.",
    category: "Guidelines",
    icon: "Lung",
    rating: 5,
    tags: ["India", "RNTCP", "NTEP", "DOTS"]
  },
  {
    id: "who-hiv",
    title: "WHO — Consolidated HIV Guidelines (2024)",
    url: "https://www.who.int/publications/i/item/9789240092880",
    description:
      "Updated HIV treatment guidelines — TLD (tenofoxir + lamivudine + dolutegravir) as first-line, second-line options, PrEP, PEP, and HIV drug resistance.",
    category: "Guidelines",
    icon: "Ribbon",
    rating: 5,
    tags: ["WHO", "HIV", "international", "HAART"]
  },
  {
    id: "naco-india",
    title: "NACO — National AIDS Control Organisation (India)",
    url: "http://naco.gov.in/",
    description:
      "Indian HIV programme guidelines — first-line, second-line ART regimens used in India, PEP protocol, EID (early infant diagnosis). Useful for HAART and PEP questions.",
    category: "Guidelines",
    icon: "Ribbon",
    rating: 5,
    tags: ["India", "NACO", "HIV"]
  },
  {
    id: "who-malaria",
    title: "WHO — Malaria Guidelines (2024)",
    url: "https://www.who.int/publications/i/item/guidelines-for-malaria",
    description:
      "Updated WHO malaria guidelines — ACT first-line for uncomplicated P. falciparum, IV artesunate for severe malaria, IPTp with sulfadoxine-pyrimethamine.",
    category: "Guidelines",
    icon: "Mosquito",
    rating: 5,
    tags: ["WHO", "malaria", "ACT", "international"]
  },
  {
    id: "who-sepsis",
    title: "WHO — Sepsis Guidelines / Surviving Sepsis Campaign (2021)",
    url: "https://www.who.int/health-topics/sepsis",
    description:
      "Surviving Sepsis Campaign — 'Sepsis Six' bundle within 1 hour, fluid resuscitation, vasopressors, empirical antibiotics. Crucial for the empirical antibiotic case.",
    category: "Guidelines",
    icon: "Activity",
    rating: 5,
    tags: ["sepsis", "surviving-sepsis", "antibiotics"]
  },
  {
    id: "pvt-india",
    title: "PvPI — Pharmacovigilance Programme of India",
    url: "https://www.ipc.gov.in/PvPI/pv_home.html",
    description:
      "Indian pharmacovigilance programme — reporting ADRs through Form 96/ICSR, Indian Pharmacopoeia Commission coordination. Useful for the pharmacovigilance short note.",
    category: "Guidelines",
    icon: "FileCheck",
    rating: 4,
    tags: ["India", "pharmacovigilance", "ADR"]
  },
  {
    id: "cdSCO-india",
    title: "CDSCO — Central Drugs Standard Control Organisation (India)",
    url: "https://cdsco.gov.in/",
    description:
      "Indian drug regulatory body — clinical trial approvals, new drug launches, drug recalls. Useful for clinical trials and new drug approval questions.",
    category: "Guidelines",
    icon: "Building2",
    rating: 4,
    tags: ["India", "regulatory", "clinical-trials"]
  },
  {
    id: "ich-guidelines",
    title: "ICH — International Council for Harmonisation",
    url: "https://www.ich.org/",
    description:
      "Global harmonisation of pharmaceutical regulation — ICH-GCP (Good Clinical Practice) guidelines for clinical trials. Useful for clinical trial phases question.",
    category: "Guidelines",
    icon: "FileCheck",
    rating: 4,
    tags: ["international", "clinical-trials", "GCP"]
  },

  // ========================================================================
  // DRUG INFORMATION DATABASES
  // ========================================================================
  {
    id: "uptodate",
    title: "UpToDate — Clinical Decision Support",
    url: "https://www.uptodate.com/",
    description:
      "The premier point-of-care drug reference — doses, indications, interactions, monitoring. Subscription-based but available in most teaching hospitals.",
    category: "Quizzes & Practice",
    icon: "Database",
    rating: 5,
    tags: ["drug-info", "doses", "evidence-based", "subscription"]
  },
  {
    id: "micromedex",
    title: "Micromedex — Drug Information",
    url: "https://www.micromedexsolutions.com/",
    description:
      "Comprehensive drug information database — especially useful for poisoning management, drug interactions, IV compatibility.",
    category: "Quizzes & Practice",
    icon: "Database",
    rating: 5,
    tags: ["drug-info", "poisoning", "interactions"]
  },
  {
    id: "medscape-drug-ref",
    title: "Medscape Drug Reference",
    url: "https://reference.medscape.com/drugs",
    description:
      "Free drug reference — doses, indications, interactions, monitoring parameters. Useful for quick lookups during case solving.",
    category: "Quizzes & Practice",
    icon: "Search",
    rating: 4,
    tags: ["free", "drug-info", "interactions"]
  },
  {
    id: "dailymed",
    title: "DailyMed — NIH Drug Labels",
    url: "https://dailymed.nlm.nih.gov/",
    description:
      "Official FDA drug labels (package inserts) — comprehensive, evidence-based drug information. Free access.",
    category: "Quizzes & Practice",
    icon: "FileText",
    rating: 5,
    tags: ["free", "FDA", "drug-labels"]
  },
  {
    id: "drugbank",
    title: "DrugBank — Drug Database",
    url: "https://go.drugbank.com/",
    description:
      "Comprehensive drug database with chemical structures, mechanisms, pathways, and drug-drug interactions. Excellent for MOA understanding.",
    category: "Quizzes & Practice",
    icon: "Atom",
    rating: 5,
    tags: ["free", "MOA", "structure", "interactions"]
  },
  {
    id: "stitch",
    title: "STITCH — Chemical-Protein Interactions",
    url: "http://stitch.embl.de/",
    description:
      "Visualizes chemical-protein interactions — useful for understanding drug targets and MOA.",
    category: "Quizzes & Practice",
    icon: "Network",
    rating: 4,
    tags: ["free", "MOA", "interactions"]
  },

  // ========================================================================
  // INTERACTIVE LEARNING & QUIZZES
  // ========================================================================
  {
    id: "medscape-cme",
    title: "Medscape CME — Free Continuing Medical Education",
    url: "https://www.medscape.org/index/list_13470_0",
    description:
      "Free CME articles and case-based learning on pharmacology topics. Requires free registration.",
    category: "Quizzes & Practice",
    icon: "GraduationCap",
    rating: 4,
    tags: ["free", "CME", "case-based"]
  },
  {
    id: "bmj-best-practice",
    title: "BMJ Best Practice — Drug Treatment",
    url: "https://bestpractice.bmj.com/",
    description:
      "Evidence-based drug treatment guidelines per disease. Subscription-based but widely available in teaching institutions.",
    category: "Quizzes & Practice",
    icon: "Stethoscope",
    rating: 5,
    tags: ["evidence-based", "treatment"]
  },
  {
    id: "pharmacology-education",
    title: "Pharmacology Education Project",
    url: "https://www.pharmacologyeducation.org/",
    description:
      "Free open-access pharmacology teaching resource from the International Union of Basic and Clinical Pharmacology (IUPHAR). Excellent for receptor pharmacology, ANS, and CNS topics.",
    category: "Quizzes & Practice",
    icon: "GraduationCap",
    rating: 5,
    tags: ["free", "IUPHAR", "receptors", "ANS"]
  },
  {
    id: "iuphar-database",
    title: "IUPHAR/BPS Guide to Pharmacology",
    url: "https://www.guidetopharmacology.org/",
    description:
      "Definitive database of drug targets, receptors, and ligands. Excellent for receptor subtypes, GPCR families, and ion channel pharmacology — directly relevant to your GPCR short note.",
    category: "Quizzes & Practice",
    icon: "Database",
    rating: 5,
    tags: ["free", "IUPHAR", "receptors", "GPCR"]
  },

  // ========================================================================
  // VIDEO LECTURES
  // ========================================================================
  {
    id: "ninja-nerd-pharm",
    title: "Ninja Nerd — Pharmacology Playlist",
    url: "https://www.youtube.com/c/ninjanerdofficial",
    description:
      "Free YouTube pharmacology lectures with hand-drawn illustrations. Particularly good for ANS, cardiovascular, and CNS pharmacology. ~30 hours covering major topics.",
    category: "Videos",
    icon: "Youtube",
    rating: 5,
    tags: ["free", "youtube", "visual", "ANS", "CVS", "CNS"]
  },
  {
    id: "osmosis-pharm",
    title: "Osmosis — Pharmacology Videos",
    url: "https://www.osmosis.org/",
    description:
      "Animated pharmacology videos — concise, USMLE-style. Free tier includes most topics. Excellent for review and rapid revision.",
    category: "Videos",
    icon: "PlayCircle",
    rating: 4,
    tags: ["free-tier", "animation", "usMLE-style"]
  },
  {
    id: "boards-beyond",
    title: "Boards and Beyond — Pharmacology",
    url: "https://www.boardsbeyond.com/",
    description:
      "Dr. Jason Ryan's video course — USMLE-aligned pharmacology with clinical correlations. Subscription-based.",
    category: "Videos",
    icon: "PlayCircle",
    rating: 5,
    tags: ["paid", "usMLE-style", "clinical"]
  },
  {
    id: "sketchy-medical",
    title: "Sketchy Medical — Pharmacology",
    url: "https://sketchymedical.com/",
    description:
      "Visual mnemonics for antibiotics, antivirals, and autonomic drugs. Memorize the antimicrobial spectrum through stories. Subscription-based but extremely popular for USMLE.",
    category: "Videos",
    icon: "ImageIcon",
    rating: 5,
    tags: ["paid", "mnemonics", "antimicrobials", "usMLE"]
  },
  {
    id: "picmonic",
    title: "Picmonic — Pharmacology",
    url: "https://picmonic.com/",
    description:
      "Visual mnemonics with characters and stories — covers major drug classes. Useful for memorizing S/E, drug interactions.",
    category: "Videos",
    icon: "ImageIcon",
    rating: 4,
    tags: ["paid", "mnemonics"]
  },

  // ========================================================================
  // POISONING & TOXICOLOGY REFERENCES
  // ========================================================================
  {
    id: "poison-centers",
    title: "WHO — International Poison Centres Directory",
    url: "https://www.who.int/health-topics/poison-centres",
    description:
      "Directory of poison centres worldwide + management guidelines for common poisonings. Useful for OP poisoning, paracetamol overdose, heavy metal toxicity.",
    category: "Guidelines",
    icon: "Skull",
    rating: 5,
    tags: ["poisoning", "toxicology", "international"]
  },
  {
    id: "npic-india",
    title: "NPIC — National Poison Information Centre (India, AIIMS)",
    url: "https://www.aiims.edu/en/departments-and-centers/npic.html",
    description:
      "Indian poison information centre — 24×7 helpline for poisoning management. Useful for OP poisoning, snake bite, drug overdose protocols.",
    category: "Guidelines",
    icon: "Phone",
    rating: 4,
    tags: ["India", "poisoning", "toxicology", "AIIMS"]
  },
  {
    id: "goldfrank",
    title: "Goldfrank's Toxicologic Emergencies (11e)",
    url: "https://www.mheducation.com/highered/product/goldfrank-toxicologic-emergencies/M9781264608130.html",
    description:
      "The reference text for toxicology — OP poisoning, paracetamol, heavy metals, snake bite. Useful for the OP poisoning long-answer.",
    category: "Textbooks",
    icon: "Skull",
    rating: 5,
    tags: ["toxicology", "poisoning"]
  },

  // ========================================================================
  // JOURNALS
  // ========================================================================
  {
    id: "brit-j-clin-pharm",
    title: "British Journal of Clinical Pharmacology",
    url: "https://bpspubs.onlinelibrary.wiley.com/journal/13652125",
    description:
      "Open-access articles on clinical pharmacology, drug interactions, and adverse effects. Useful for the latest updates.",
    category: "Journals",
    icon: "Newspaper",
    rating: 5,
    tags: ["journal", "open-access", "clinical"]
  },
  {
    id: "lancet-id",
    title: "The Lancet Infectious Diseases",
    url: "https://www.thelancet.com/journals/laninf/",
    description:
      "Premier journal for antimicrobial therapy — new antibiotics, resistance patterns, treatment trials.",
    category: "Journals",
    icon: "Newspaper",
    rating: 5,
    tags: ["journal", "antimicrobials", "resistance"]
  },
  {
    id: "pubmed-pharm",
    title: "PubMed — Pharmacology Search",
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=pharmacology",
    description:
      "Search 35 million biomedical citations for pharmacology literature. Free abstracts; many full-text links.",
    category: "Journals",
    icon: "Search",
    rating: 5,
    tags: ["free", "literature", "search"]
  },

  // ========================================================================
  // SPECIALIZED REFERENCES
  // ========================================================================
  {
    id: "nlem-india",
    title: "NLEM — National List of Essential Medicines (India 2022)",
    url: "https://cdsco.gov.in/opencms/opencms/en/Medical-devices/NLEM/",
    description:
      "Indian essential medicines list — 384 medicines. Useful for 'drug of choice' questions in Indian context.",
    category: "Guidelines",
    icon: "FileText",
    rating: 5,
    tags: ["India", "essential-medicines", "drug-choice"]
  },
  {
    id: "stockley",
    title: "Stockley's Drug Interactions",
    url: "https://about.medicinescomplete.com/publication/stockleys-drug-interactions/",
    description:
      "The definitive reference for drug interactions — useful for warfarin, phenytoin, digoxin, and HAART interactions.",
    category: "Quizzes & Practice",
    icon: "Network",
    rating: 5,
    tags: ["interactions", "warfarin", "HAART"]
  },
  {
    id: "tdm-guidelines",
    title: "TDM Guidelines — Therapeutic Drug Monitoring",
    url: "https://www.therdrugmon.com/",
    description:
      "Journal of Therapeutic Drug Monitoring — protocols for digoxin, phenytoin, lithium, aminoglycoside, vancomycin monitoring. Useful for TDM short note.",
    category: "Quizzes & Practice",
    icon: "Activity",
    rating: 4,
    tags: ["TDM", "monitoring", "therapeutic-index"]
  },
  {
    id: "renal-dosing",
    title: "Renal Drug Database",
    url: "https://renaldrugs.com/",
    description:
      "Free database for drug dosing in renal impairment — useful for gentamicin, vancomycin, digoxin, metformin dosing adjustments.",
    category: "Quizzes & Practice",
    icon: "Activity",
    rating: 5,
    tags: ["free", "renal", "dosing"]
  },
  {
    id: "hepatic-dosing",
    title: "Hepatic Drug Dosing — LiverTox (NIH)",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK547852/",
    description:
      "NIH database for drug-induced liver injury and dosing in hepatic impairment. Useful for paracetamol, anti-TB, methotrexate, amiodarone.",
    category: "Quizzes & Practice",
    icon: "Activity",
    rating: 5,
    tags: ["free", "hepatic", "DILI"]
  },
  {
    id: "covid-treatment",
    title: "WHO — Therapeutics and COVID-19 (2024 update)",
    url: "https://www.who.int/publications/i/item/WHO-2019-nCoV-therapeutics-2024.1",
    description:
      "WHO COVID-19 treatment guidelines — nirmatrelvir/ritonavir, remdesivir, molnupiravir, immunomodulators. Useful for the 'Remdesivir' topic from your IMP list.",
    category: "Guidelines",
    icon: "Ribbon",
    rating: 5,
    tags: ["COVID", "WHO", "remdesivir"]
  },

  // ========================================================================
  // PRACTICE EXAMS & QUESTION BANKS
  // ========================================================================
  {
    id: "accessmedicine",
    title: "AccessMedicine — Pharmacology Q&A",
    url: "https://accessmedicine.mhmedical.com/qbank.aspx",
    description:
      "Free with institutional access — USMLE-style pharmacology MCQs with detailed explanations. Excellent for active recall during your 20-day campaign.",
    category: "Quizzes & Practice",
    icon: "HelpCircle",
    rating: 5,
    tags: ["MCQs", "USMLE-style", "institutional-access"]
  },
  {
    id: "bmj-learning",
    title: "BMJ Learning — Pharmacology Modules",
    url: "https://learning.bmj.com/",
    description:
      "Case-based learning modules on rational prescribing, common errors, and updates. Free for BMJ subscribers.",
    category: "Quizzes & Practice",
    icon: "GraduationCap",
    rating: 4,
    tags: ["case-based", "rational-prescribing"]
  },
  {
    id: "who-rational-use",
    title: "WHO — Guide to Good Prescribing",
    url: "https://www.who.int/publications/i/item/9789241564218",
    description:
      "WHO's classic guide to rational prescribing — 6-step framework. Particularly useful for the prescription writing component of your exam.",
    category: "Guidelines",
    icon: "FileText",
    rating: 5,
    tags: ["WHO", "prescribing", "rational"]
  }
];

// Helper functions
export const getPharmResourcesByCategory = (cat: ResourceCategory) =>
  pharmResources.filter((r) => r.category === cat);

export const searchPharmResources = (query: string) =>
  pharmResources.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.description.toLowerCase().includes(query.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );
