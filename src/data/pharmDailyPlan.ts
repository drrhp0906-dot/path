// ============================================================================
// PHARMACOLOGY 20-DAY CAMPAIGN
// Adapted to the user's question bank — heavy focus on ANS, CVS, antimicrobials,
// endocrine, and CNS drugs (the highest-yield topics per the IMP PDF).
// ============================================================================

import type { DayQuest } from "./dailyPlan";

// ----------------------------------------------------------------------------
// PHASE 1 — FOUNDATION (Days 1–4): General + ANS + Autacoids
// ----------------------------------------------------------------------------

const day1: DayQuest = {
  day: 1,
  phase: "Foundation",
  title: "The Pharmacologist's Forge — General Principles",
  theme: "General Pharmacology",
  icon: "Atom",
  totalHours: 10,
  sessions: [
    {
      id: "p-d1-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Pharmacokinetics — Bioavailability, Vd, t½, First-Pass Metabolism",
      activity:
        "Master ADME principles. Draw the plasma concentration-time curve. Calculate Vd and t½. Memorise first-pass drugs (lignocaine, propranolol, morphine).",
      branchId: "general-pharm",
      nodeIds: ["pharm-bioavailability", "pharm-pk", "pharm-routes"],
      xpReward: 240
    },
    {
      id: "p-d1-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Biotransformation — Enzyme Induction & Inhibition",
      activity:
        "Phase I (CYP450) vs Phase II (conjugation). Memorise inducers (rifampicin, phenytoin, carbamazepine, phenobarbitone, ethanol, smoking) and inhibitors (cimetidine, ketoconazole, erythromycin, grapefruit juice). Practice 10 drug interaction MCQs.",
      branchId: "general-pharm",
      nodeIds: ["pharm-biotransformation"],
      xpReward: 160
    },
    {
      id: "p-d1-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Antagonism + ADR + Pharmacovigilance + TDM",
      activity:
        "Write the 6 types of antagonism with examples. ADR Rawlins-Thompson classification (A–F). Drugs needing TDM (digoxin, phenytoin, lithium, gentamicin). Pharmacovigilance in India — PvPI.",
      branchId: "general-pharm",
      nodeIds: ["pharm-antagonism", "pharm-adr", "pharm-tdm"],
      xpReward: 240
    },
    {
      id: "p-d1-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Clinical Trials + GPCR + Anaphylactic Shock Management",
      activity:
        "Phases 0–IV with sample sizes. GPCR families (Gs, Gi, Gq) with 2 examples each. Stepwise anaphylaxis management — IM adrenaline 0.5 mg, anterolateral thigh, repeat every 5 min.",
      branchId: "general-pharm",
      nodeIds: ["pharm-trials", "pharm-gpcr", "pharm-anaphylaxis"],
      xpReward: 160
    }
  ]
};

const day2: DayQuest = {
  day: 2,
  phase: "Foundation",
  title: "Sympathetic & Parasympathetic — ANS Pharmacology",
  theme: "ANS — Adrenergic & Cholinergic",
  icon: "Network",
  totalHours: 10,
  sessions: [
    {
      id: "p-d2-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Adrenergic Drugs & Receptor Classification",
      activity:
        "Classify adrenergic drugs (direct/indirect/mixed). Memorise α1, α2, β1, β2, β3, D1, D2 receptor effects. Master adrenaline — uses in LA, anaphylaxis, cardiac arrest.",
      branchId: "ans",
      nodeIds: ["pharm-adrenergic-class", "pharm-adrenaline"],
      xpReward: 240
    },
    {
      id: "p-d2-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Sympatholytics — α & β Blockers",
      activity:
        "Classify α-blockers (non-selective, α1 selective — tamsulosin) and β-blockers (non-selective, cardioselective, with ISA, α+β). Master metoprolol, atenolol, propranolol. Non-cardiovascular uses (glaucoma, migraine prophylaxis).",
      branchId: "ans",
      nodeIds: ["pharm-sympatholytics"],
      xpReward: 240
    },
    {
      id: "p-d2-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Glaucoma Drug Therapy (Long Answer)",
      activity:
        "Write the long-answer on glaucoma. Open-angle vs angle-closure. Drug classes (β-blockers, PG analogues, α2 agonists, CAI, pilocarpine). Acute angle closure emergency management.",
      branchId: "ans",
      nodeIds: ["pharm-glaucoma"],
      xpReward: 160
    },
    {
      id: "p-d2-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Cholinergics + Anticholinesterases + Atropine",
      activity:
        "Direct cholinergics, anticholinesterases (reversible vs irreversible). Atropine — uses, toxicity (dry as a bone, red as a beet, hot as a hare, blind as a bat, mad as a hatter). Myasthenia gravis — neostigmine, edrophonium.",
      branchId: "ans",
      nodeIds: ["pharm-cholinergics"],
      xpReward: 160
    }
  ]
};

const day3: DayQuest = {
  day: 3,
  phase: "Foundation",
  title: "Poisons & Relaxants — OP Poisoning, NMJ Blockers, LA",
  theme: "Toxicology & NMJ",
  icon: "Skull",
  totalHours: 10,
  sessions: [
    {
      id: "p-d3-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "OP Poisoning — Pharmacological Basis (Long Answer)",
      activity:
        "Master OP poisoning: mechanism (irreversible AChE inhibition), DUMBELS symptoms, atropine + pralidoxime mechanism, intermediate syndrome. Practice exam-style answer.",
      branchId: "ans",
      nodeIds: ["pharm-op-poisoning"],
      xpReward: 240
    },
    {
      id: "p-d3-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Skeletal Muscle Relaxants — Depolarizing vs Non-depolarizing",
      activity:
        "Suxamethonium (depolarizing) — fasciculations → flaccid; S/E: hyperkalemia, MH. Non-depolarizers (curare, vecuronium, rocuronium). Dantrolene in malignant hyperthermia.",
      branchId: "ans",
      nodeIds: ["pharm-skeletal-muscle"],
      xpReward: 160
    },
    {
      id: "p-d3-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Local Anaesthetics — Classification, Lignocaine (Long Answer)",
      activity:
        "Write the LA long answer. MOA — Na+ channel block. Esters vs amides. Lignocaine details — onset, duration, uses, S/E. Bupivacaine — cardiotoxic. Adrenaline in LA.",
      branchId: "ans",
      nodeIds: ["pharm-la"],
      xpReward: 240
    },
    {
      id: "p-d3-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Foundation Review — ANS Rapid Fire",
      activity:
        "Take a 1.5-hour mock: 5-mark each on Adrenaline, β-blockers, Atropine, Pilocarpine, Succinylcholine. Self-evaluate.",
      branchId: "ans",
      nodeIds: [],
      xpReward: 160
    }
  ],
  bossBattle: {
    name: "Foundation Trial — ANS Warlord",
    description:
      "Closed-book: Long answer on OP Poisoning + 5-mark on Lignocaine. Time: 1 hour. Score 70%+.",
    rewardXp: 250
  }
};

const day4: DayQuest = {
  day: 4,
  phase: "Foundation",
  title: "The Inflammatory Cascade — Autacoids & Respiratory Drugs",
  theme: "Autacoids",
  icon: "Wind",
  totalHours: 10,
  sessions: [
    {
      id: "p-d4-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "NSAIDs & Aspirin (Long Answer)",
      activity:
        "Classify NSAIDs (non-selective, COX-2 selective). Master aspirin — MOA (irreversible COX acetylation), low-dose antiplatelet (75 mg), aspirin in MI, S/E, salicylism, Reye's syndrome.",
      branchId: "autacoids",
      nodeIds: ["pharm-nsaids"],
      xpReward: 240
    },
    {
      id: "p-d4-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "H1 Antihistamines + 5-HT Receptors + Sumatriptan",
      activity:
        "First vs second gen antihistamines. 5-HT receptor subtypes — memorise drug-receptor pairs (triptans, ondansetron, cisapride). Sumatriptan in migraine.",
      branchId: "autacoids",
      nodeIds: ["pharm-h1-blockers", "pharm-5ht"],
      xpReward: 160
    },
    {
      id: "p-d4-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Antigout — Allopurinol, Febuxostat, Colchicine",
      activity:
        "Acute (NSAIDs, colchicine, steroids) vs chronic (allopurinol, febuxostat, uricosurics). Allopurinol interaction with azathioprine.",
      branchId: "autacoids",
      nodeIds: ["pharm-antigout"],
      xpReward: 160
    },
    {
      id: "p-d4-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Bronchial Asthma Drug Therapy (Long Answer)",
      activity:
        "Write the asthma long answer. Relievers vs controllers. Salbutamol MOA, theophylline, inhaled steroids, montelukast, omalizumab. Status asthmaticus management. Step-up therapy.",
      branchId: "autacoids",
      nodeIds: ["pharm-asthma"],
      xpReward: 240
    }
  ]
};

// ----------------------------------------------------------------------------
// PHASE 2 — CNS & CARDIOVASCULAR (Days 5–9)
// ----------------------------------------------------------------------------

const day5: DayQuest = {
  day: 5,
  phase: "CNS",
  title: "The Sedated Mind — Anesthetics, BZD, Antiepileptics",
  theme: "CNS — Sedatives & Antiepileptics",
  icon: "BrainCircuit",
  totalHours: 10,
  sessions: [
    {
      id: "p-d5-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "General Anesthetics — IV & Inhalational",
      activity:
        "Inhalational agents (N2O, halothane, sevoflurane). IV agents (propofol, thiopentone, ketamine, etomidate). Second gas effect. Diffusion hypoxia. Ketamine — dissociative anesthesia.",
      branchId: "cns-pharm",
      nodeIds: ["pharm-anesthesia"],
      xpReward: 160
    },
    {
      id: "p-d5-s2",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Benzodiazepines — Classification, MOA, Diazepam (Long Answer)",
      activity:
        "Write the BZD long answer. MOA — GABA-A, ↑frequency of Cl- channel opening. Diazepam uses. Flumazenil antidote. Compare with barbiturates.",
      branchId: "cns-pharm",
      nodeIds: ["pharm-bzd"],
      xpReward: 160
    },
    {
      id: "p-d5-s3",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Antiepileptics — Phenytoin, Valproate, Lamotrigine (Long Answer)",
      activity:
        "Seizure types + drug choice. Phenytoin — zero-order kinetics, gum hypertrophy, hirsutism. Valproate — broad spectrum, hepatotoxic, teratogen. Status epilepticus protocol (IV lorazepam → phenytoin).",
      branchId: "cns-pharm",
      nodeIds: ["pharm-antiepileptics"],
      xpReward: 240
    },
    {
      id: "p-d5-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Opioid Analgesics — Morphine, Pethidine, Fentanyl (Long Answer)",
      activity:
        "Write the opioid long answer. μ, κ, δ receptors. Morphine pharmacology. Morphine vs pethidine comparison. Morphine poisoning triad (coma, pinpoint pupils, respiratory depression) — naloxone.",
      branchId: "cns-pharm",
      nodeIds: ["pharm-opioids"],
      xpReward: 240
    }
  ]
};

const day6: DayQuest = {
  day: 6,
  phase: "CNS",
  title: "Mind & Movement — Antipsychotics, Antiparkinsonian, Antidepressants",
  theme: "CNS — Psychiatry",
  icon: "BrainCircuit",
  totalHours: 10,
  sessions: [
    {
      id: "p-d6-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Antipsychotics — Chlorpromazine, Haloperidol, Atypicals (Long Answer)",
      activity:
        "Write the long answer. Typical vs atypical. D2 blockade. Chlorpromazine S/E — EPS, NMS, tardive dyskinesia, hyperprolactinemia. Haloperidol. Atypicals — metabolic syndrome. Clozapine — agranulocytosis.",
      branchId: "cns-pharm",
      nodeIds: ["pharm-antipsychotics"],
      xpReward: 240
    },
    {
      id: "p-d6-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Antiparkinsonian Drugs — Levodopa + Carbidopa (Long Answer)",
      activity:
        "Write the long answer. Pathophysiology — ↓dopamine in nigrostriatal pathway. Levodopa rationale + carbidopa (peripheral DOPA decarboxylase inhibitor). S/E — dyskinesia, on-off. Other drugs — amantadine, bromocriptine, selegiline.",
      branchId: "cns-pharm",
      nodeIds: ["pharm-antiparkinson"],
      xpReward: 240
    },
    {
      id: "p-d6-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Antidepressants — SSRIs, TCAs, MAOIs",
      activity:
        "SSRIs as first-line. TCAs — cardiotoxic in overdose. MAOIs — cheese reaction. Serotonin syndrome. Amitriptyline for neuropathic pain + migraine.",
      branchId: "cns-pharm",
      nodeIds: ["pharm-antidepressants"],
      xpReward: 160
    },
    {
      id: "p-d6-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "CNS Mock Test",
      activity:
        "Closed-book: Long answer on Antipsychotics + 5-mark on Levodopa-Carbidopa + 3-mark on Flumazenil. Time: 1 hour.",
      branchId: "cns-pharm",
      nodeIds: [],
      xpReward: 160
    }
  ]
};

const day7: DayQuest = {
  day: 7,
  phase: "CVS",
  title: "The Pressure & The Pump — Antihypertensives & CHF",
  theme: "Cardiovascular — HTN & CHF",
  icon: "HeartPulse",
  totalHours: 10,
  sessions: [
    {
      id: "p-d7-s1",
      duration: 4,
      timeOfDay: "Morning",
      topic: "Antihypertensive Drugs (Long Answer)",
      activity:
        "Write the flagship long answer. Classify (diuretics, ACE/ARB, CCB, β-blockers, α-blockers, central sympatholytics, vasodilators). Master nifedipine, captopril, losartan, hydrochlorothiazide. ACEI vs ARB. Choice in different comorbidities (diabetes, BPH, pregnancy).",
      branchId: "cvs-pharm",
      nodeIds: ["pharm-antihypertensives"],
      xpReward: 320
    },
    {
      id: "p-d7-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Drugs for CHF (Long Answer)",
      activity:
        "Write the long answer. Pathophysiology + drug classes. ACE/ARB + β-blocker + diuretic + spironolactone + digoxin. Digoxin MOA, S/E, toxicity precipitants. Acute LVF management. SGLT2 inhibitors — new mortality benefit.",
      branchId: "cvs-pharm",
      nodeIds: ["pharm-chf"],
      xpReward: 240
    },
    {
      id: "p-d7-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Antianginal + Antiarrhythmic + Hypertensive Emergency",
      activity:
        "Nitrates MOA + nitrate tolerance. β-blockers + CCBs in angina. Verapamil vs nifedipine. Vaughan-Williams classification. Adenosine in PSVT. Drugs in pregnancy-induced HTN. Magnesium in eclampsia.",
      branchId: "cvs-pharm",
      nodeIds: ["pharm-antianginal", "pharm-antiarrhythmic", "pharm-hypertensive-emergency"],
      xpReward: 240
    }
  ],
  bossBattle: {
    name: "CVS Warlord — Day 7 Boss",
    description:
      "Closed-book: Long answer on Antihypertensives + 5-mark on Digoxin + 5-mark on Adenosine. Time: 1.5 hours.",
    rewardXp: 300
  }
};

const day8: DayQuest = {
  day: 8,
  phase: "CVS & Blood",
  title: "Fluid & Clot — Diuretics, Anticoagulants, Lipids, Anemia",
  theme: "Kidney & Blood",
  icon: "Droplet",
  totalHours: 10,
  sessions: [
    {
      id: "p-d8-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Diuretics (Long Answer)",
      activity:
        "Write the long answer. Classify by site of action. Master furosemide (loop), thiazides, K+ sparing, mannitol, acetazolamide. Furosemide vs thiazide S/E (loops ↓Ca, thiazides ↑Ca). Spironolactone in CHF.",
      branchId: "kidney-blood",
      nodeIds: ["pharm-diuretics"],
      xpReward: 240
    },
    {
      id: "p-d8-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Anticoagulants & Antiplatelets — Heparin vs Warfarin (Long Answer)",
      activity:
        "Write the long answer. Heparin (aPTT, protamine) vs warfarin (PT/INR, vitamin K). LMWH. Antiplatelets (aspirin, clopidogrel). Fibrinolytics (streptokinase, tPA).",
      branchId: "kidney-blood",
      nodeIds: ["pharm-anticoagulants", "pharm-antiplatelets"],
      xpReward: 240
    },
    {
      id: "p-d8-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Hypolipidemics — Statins, Ezetimibe, Fibrates",
      activity:
        "Statin MOA (HMG-CoA reductase) + cardioprotective effect. S/E — myopathy, rhabdomyolysis. Ezetimibe. Fibrates. PCSK9 inhibitors.",
      branchId: "kidney-blood",
      nodeIds: ["pharm-hypolipidemics"],
      xpReward: 160
    },
    {
      id: "p-d8-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Drugs for Anemia — Oral vs Parenteral Iron, B12, EPO",
      activity:
        "Oral iron (ferrous sulfate) — absorption, S/E. Parenteral iron indications. Vitamin B12 (pernicious anemia — IM lifelong). Folate in pregnancy. Erythropoietin in CKD.",
      branchId: "kidney-blood",
      nodeIds: ["pharm-anemia-drugs"],
      xpReward: 160
    }
  ]
};

const day9: DayQuest = {
  day: 9,
  phase: "GIT & Endocrine",
  title: "The Gut & The Glands — GIT + Endocrine Pharmacology",
  theme: "GIT & Endocrine",
  icon: "Pill",
  totalHours: 10,
  sessions: [
    {
      id: "p-d9-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Antiulcer Drugs (Long Answer) + Antiemetics (Long Answer)",
      activity:
        "Long answer 1: Antiulcer classification + PPI salient features + anti-H. pylori regimen. Long answer 2: Antiemetic classification + pathophysiology of emesis + metoclopramide vs domperidone.",
      branchId: "git-pharm",
      nodeIds: ["pharm-antiulcer", "pharm-antiemetics"],
      xpReward: 240
    },
    {
      id: "p-d9-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Laxatives + Antidiarrheals + ORS",
      activity:
        "Classify laxatives (bulk, stimulant, osmotic). ORS composition (WHO reduced osmolarity). Loperamide CI. Antimicrobials in diarrhea (dysentery, cholera, traveler's).",
      branchId: "git-pharm",
      nodeIds: ["pharm-laxatives", "pharm-antidiarrheal"],
      xpReward: 160
    },
    {
      id: "p-d9-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Insulin & Oral Hypoglycemics (Long Answer) + DKA Management",
      activity:
        "Long answer: Insulin classification by onset/duration + oral hypoglycemic classification + metformin MOA + S/E + CI. DKA management — fluids, IV insulin, potassium, switch to D5 when glucose < 200.",
      branchId: "endo-pharm",
      nodeIds: ["pharm-insulin", "pharm-dka"],
      xpReward: 240
    },
    {
      id: "p-d9-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Corticosteroids — Quick Overview (will detail Day 10)",
      activity:
        "Classification (short/intermediate/long-acting). Physiological effects. Major S/E (Cushing's, hyperglycemia, osteoporosis, HPA suppression). Prednisone vs dexamethasone.",
      branchId: "endo-pharm",
      nodeIds: ["pharm-corticosteroids"],
      xpReward: 160
    }
  ]
};

// ----------------------------------------------------------------------------
// PHASE 3 — ENDOCRINE & ANTIMICROBIAL (Days 10–16)
// ----------------------------------------------------------------------------

const day10: DayQuest = {
  day: 10,
  phase: "Endocrine",
  title: "Hormones & Steroids — Corticosteroids, Thyroid, Reproductive",
  theme: "Endocrine",
  icon: "Sparkles",
  totalHours: 10,
  sessions: [
    {
      id: "p-d10-s1",
      duration: 4,
      timeOfDay: "Morning",
      topic: "Corticosteroids (Long Answer)",
      activity:
        "Write the flagship long answer. Classification, MOA, physiological effects, uses, S/E (Cushing's, HPA suppression, osteoporosis), withdrawal, CI. Glucocorticoid in TB.",
      branchId: "endo-pharm",
      nodeIds: ["pharm-corticosteroids"],
      xpReward: 320
    },
    {
      id: "p-d10-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Anti-Thyroid Drugs & Radioactive Iodine (Long Answer)",
      activity:
        "Long answer. Thionamides (methimazole, PTU) — MOA + S/E. PTU in 1st trimester pregnancy. β-blockers in thyrotoxicosis. Iodine (Wolff-Chaikoff). Radioactive iodine. Thyroid storm protocol.",
      branchId: "endo-pharm",
      nodeIds: ["pharm-antithyroid"],
      xpReward: 240
    },
    {
      id: "p-d10-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "OCPs, SERMs, Oxytocin, Tocolytics (Long Answer)",
      activity:
        "Long answer. Combined OCP MOA + S/E + CI + benefits. SERMs (tamoxifen, raloxifene, clomiphene). Oxytocin vs ergometrine comparison. Tocolytics in preterm labor.",
      branchId: "endo-pharm",
      nodeIds: ["pharm-steroids-repro"],
      xpReward: 240
    }
  ],
  bossBattle: {
    name: "Endocrine Warlord — Day 10 Boss",
    description:
      "Closed-book: Long answer on Corticosteroids + 5-mark on Methimazole vs PTU + 5-mark on Oxytocin vs Ergometrine. Time: 1.5 hours.",
    rewardXp: 300
  }
};

const day11: DayQuest = {
  day: 11,
  phase: "Antimicrobial",
  title: "The Antibiotic Atlas — β-Lactams, Aminoglycosides, Macrolides",
  theme: "Antibiotics I",
  icon: "Biohazard",
  totalHours: 10,
  sessions: [
    {
      id: "p-d11-s1",
      duration: 4,
      timeOfDay: "Morning",
      topic: "β-Lactam Antibiotics (Long Answer)",
      activity:
        "Write the long answer. Penicillins classification (natural, antistaph, extended, antipseudomonal). β-lactamase inhibitors. Cephalosporin generations (1st–5th). Carbapenems. Penicillin G vs amoxicillin comparison.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-beta-lactams"],
      xpReward: 320
    },
    {
      id: "p-d11-s2",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "Aminoglycosides — Gentamicin, Streptomycin, Amikacin",
      activity:
        "MOA (30S ribosome). Spectrum. S/E — nephrotoxicity, ototoxicity, NM blockade. Once-daily dosing rationale. TDM monitoring.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-aminoglycosides"],
      xpReward: 160
    },
    {
      id: "p-d11-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Tetracyclines & Tigecycline",
      activity:
        "MOA (30S, bacteriOSTATIC). Doxycycline uses (atypicals, cholera, Lyme, malaria prophylaxis, acne). Tigecycline broad spectrum. S/E — teeth, photosensitivity, CI in children/pregnancy.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-tetracyclines"],
      xpReward: 160
    },
    {
      id: "p-d11-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Macrolides — Erythromycin, Azithromycin (Long Answer)",
      activity:
        "Write the long answer. MOA (50S, bacteriostatic). Spectrum (atypicals). Erythromycin S/E (GI, cholestatic jaundice, CYP3A4). Azithromycin advantages.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-macrolides"],
      xpReward: 160
    }
  ]
};

const day12: DayQuest = {
  day: 12,
  phase: "Antimicrobial",
  title: "Reserve Antibiotics & Fluoroquinolones",
  theme: "Antibiotics II",
  icon: "Biohazard",
  totalHours: 10,
  sessions: [
    {
      id: "p-d12-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Vancomycin, Metronidazole, Cotrimoxazole (Long Answer)",
      activity:
        "Write the long answer on these 3 reserve antibiotics. Vancomycin (MRSA, Red Man syndrome, trough monitoring). Metronidazole (anaerobes, C. diff, disulfiram-like). Cotrimoxazole (sequential folate inhibition, PJP, SJS).",
      branchId: "antimicrobial",
      nodeIds: ["pharm-misc-abx"],
      xpReward: 240
    },
    {
      id: "p-d12-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Fluoroquinolones — Ciprofloxacin, Levofloxacin",
      activity:
        "MOA (DNA gyrase + topo IV). Spectrum. Uses (UTI, typhoid, gonorrhea, respiratory). FDA warnings — tendinopathy, QT, aortic rupture, CNS, neuropathy.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-fluoroquinolones"],
      xpReward: 240
    },
    {
      id: "p-d12-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Antifungals — Amphotericin B, Azoles, Echinocandins",
      activity:
        "Amphotericin B (ergosterol, nephrotoxicity — liposomal form). Azoles (fluconazole, itraconazole, voriconazole). Echinocandins. Allylamines (terbinafine).",
      branchId: "antimicrobial",
      nodeIds: ["pharm-antifungals"],
      xpReward: 160
    },
    {
      id: "p-d12-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Antibiotic Mock Test",
      activity:
        "Closed-book: 5-mark each on Vancomycin, Metronidazole, Cotrimoxazole, Aminoglycosides, Fluoroquinolones. Time: 1.5 hours.",
      branchId: "antimicrobial",
      nodeIds: [],
      xpReward: 160
    }
  ]
};

const day13: DayQuest = {
  day: 13,
  phase: "Antimicrobial",
  title: "Viral & Mycobacterial Wars — HIV, TB, Hepatitis",
  theme: "Antivirals & Anti-TB",
  icon: "Biohazard",
  totalHours: 10,
  sessions: [
    {
      id: "p-d13-s1",
      duration: 4,
      timeOfDay: "Morning",
      topic: "Anti-HIV Drugs & HAART (Long Answer)",
      activity:
        "Write the long answer. NRTI, NNRTI, PI, INSTI classes with examples + S/E. HAART principles (3-drug combo). First-line (TLD). PEP and PrEP protocols. Anti-HSV (acyclovir). Anti-CMV. Anti-hepatitis B & C. Remdesivir for COVID.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-antiviral"],
      xpReward: 320
    },
    {
      id: "p-d13-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Anti-TB Drugs (Long Answer)",
      activity:
        "Write the flagship long answer. First-line drugs (R, H, Z, E, S) — MOA + S/E for each. RNTCP Cat I (2HRZE + 4HR) and Cat II (2HRZES + 1HRZE + 5HRE). DOTS strategy. MDR-TB. Pyridoxine with INH.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-antitb"],
      xpReward: 240
    },
    {
      id: "p-d13-s3",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Antimalarial Drugs (Long Answer)",
      activity:
        "Write the long answer. Classify (tissue schizonticides, blood schizonticides, gametocytocides). Chloroquine, quinine, mefloquine, artemisinins, primaquine, atovaquone. Cerebral malaria — IV artesunate. ACT (artemether + lumefantrine). Dapsone in leprosy.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-antimalarial"],
      xpReward: 240
    }
  ]
};

const day14: DayQuest = {
  day: 14,
  phase: "Antimicrobial",
  title: "Parasites & Final Antibiotic Review",
  theme: "Anthelmintics & Recap",
  icon: "Bug",
  totalHours: 10,
  sessions: [
    {
      id: "p-d14-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "Anthelmintics — Albendazole, Praziquantel, Ivermectin",
      activity:
        "Albendazole (β-tubulin, G6PD CI in pregnancy). Praziquantel (Ca²⁺, schistosomiasis). Ivermectin (Cl⁻ channels, onchocerciasis, scabies). DEC + Mazzotti reaction.",
      branchId: "antimicrobial",
      nodeIds: ["pharm-anthelmintic"],
      xpReward: 160
    },
    {
      id: "p-d14-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Immunosuppressants — Cyclosporine, Tacrolimus, Sirolimus",
      activity:
        "Calcineurin inhibitors (cyclosporine, tacrolimus) — MOA + nephrotoxicity. mTOR inhibitors (sirolimus). Mycophenolate. Azathioprine + allopurinol interaction.",
      branchId: "immunopharm",
      nodeIds: ["pharm-immunosuppress"],
      xpReward: 240
    },
    {
      id: "p-d14-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Anticancer Drugs — Overview",
      activity:
        "Alkylating agents (cyclophosphamide + mesna). Antimetabolites (methotrexate + leucovorin). Vincas vs taxanes. Anthracyclines (cardiotoxicity + dexrazoxane). Targeted therapies (imatinib, trastuzumab, rituximab).",
      branchId: "immunopharm",
      nodeIds: ["pharm-anticancer"],
      xpReward: 160
    },
    {
      id: "p-d14-s4",
      duration: 3,
      timeOfDay: "Evening",
      topic: "Antimicrobial Boss Rush Review",
      activity:
        "Take a 2-hour mock: 5-mark each on β-lactams, Aminoglycosides, Macrolides, Vancomycin, Anti-TB. Self-evaluate against notes.",
      branchId: "antimicrobial",
      nodeIds: [],
      xpReward: 240
    }
  ],
  bossBattle: {
    name: "Antimicrobial Warlord — Day 14 Boss",
    description:
      "Closed-book: Long answer on Anti-TB + Long answer on Anti-HIV + 5-mark on Antimalarials. Time: 1.5 hours.",
    rewardXp: 350
  }
};

// ----------------------------------------------------------------------------
// PHASE 4 — INTEGRATION & MOCK EXAMS (Days 15–20)
// ----------------------------------------------------------------------------

const day15: DayQuest = {
  day: 15,
  phase: "Integration",
  title: "Boss Rush I — Autonomic & CVS Drug Trials",
  theme: "Clinical Cases I",
  icon: "Skull",
  totalHours: 10,
  sessions: [
    {
      id: "p-d15-s1",
      duration: 5,
      timeOfDay: "Morning",
      topic: "ANS Clinical Case Marathon",
      activity:
        "Practice 5 case scenarios: (1) Patient on β-blocker with bronchospasm (2) OP poisoning management (3) Atropine overdose (4) Anaphylactic shock (5) Myasthenia gravis. Each: 30 min, closed-book, with treatment protocol.",
      branchId: "ans",
      nodeIds: [],
      xpReward: 400
    },
    {
      id: "p-d15-s2",
      duration: 5,
      timeOfDay: "Afternoon",
      topic: "CVS Clinical Case Marathon",
      activity:
        "5 cases: (1) Hypertensive emergency (2) Acute LVF (3) Patient on warfarin needing surgery (4) STEMI drug therapy (5) Patient with AF + CHF — drug choice. Each: 30 min, with pharmacological reasoning.",
      branchId: "cvs-pharm",
      nodeIds: [],
      xpReward: 400
    }
  ],
  bossBattle: {
    name: "Boss Rush I — ANS & CVS Trial",
    description:
      "Closed-book timed essay: 12-mark on Antihypertensives + 12-mark on OP Poisoning. Time: 1 hour.",
    rewardXp: 300
  }
};

const day16: DayQuest = {
  day: 16,
  phase: "Integration",
  title: "Boss Rush II — Endocrine & CNS",
  theme: "Clinical Cases II",
  icon: "Skull",
  totalHours: 10,
  sessions: [
    {
      id: "p-d16-s1",
      duration: 5,
      timeOfDay: "Morning",
      topic: "Endocrine Case Marathon",
      activity:
        "5 cases: (1) DKA management (2) Thyroid storm (3) Addisonian crisis (4) Patient on steroids needing surgery (5) Type 2 DM drug selection. Each: 30 min.",
      branchId: "endo-pharm",
      nodeIds: [],
      xpReward: 400
    },
    {
      id: "p-d16-s2",
      duration: 5,
      timeOfDay: "Afternoon",
      topic: "CNS Case Marathon",
      activity:
        "5 cases: (1) Status epilepticus (2) Morphine poisoning (3) Malignant hyperthermia (4) Neuroleptic malignant syndrome (5) Parkinsonism drug choice. Each: 30 min.",
      branchId: "cns-pharm",
      nodeIds: [],
      xpReward: 400
    }
  ]
};

const day17: DayQuest = {
  day: 17,
  phase: "Integration",
  title: "Boss Rush III — Antimicrobial & GIT",
  theme: "Clinical Cases III",
  icon: "Skull",
  totalHours: 10,
  sessions: [
    {
      id: "p-d17-s1",
      duration: 5,
      timeOfDay: "Morning",
      topic: "Antimicrobial Case Marathon",
      activity:
        "5 cases: (1) Empirical choice for community-acquired pneumonia (2) Sepsis with MRSA (3) Newly diagnosed HIV — when to start HAART (4) New sputum-positive TB — Cat I regimen (5) Cerebral malaria. Each: 30 min.",
      branchId: "antimicrobial",
      nodeIds: [],
      xpReward: 400
    },
    {
      id: "p-d17-s2",
      duration: 5,
      timeOfDay: "Afternoon",
      topic: "GIT + Kidney/Blood Case Marathon",
      activity:
        "5 cases: (1) H. pylori positive peptic ulcer (2) Severe chemotherapy-induced vomiting (3) Heparin-induced thrombocytopenia (4) Acute pulmonary edema — IV furosemide (5) Patient with severe anemia + CKD — EPO + IV iron. Each: 30 min.",
      branchId: "git-pharm",
      nodeIds: [],
      xpReward: 400
    }
  ],
  bossBattle: {
    name: "Boss Rush III — Antimicrobial Trial",
    description:
      "Closed-book timed essay: Long answer on Antimalarials + 5-mark on Acyclovir. Time: 45 min.",
    rewardXp: 300
  }
};

const day18: DayQuest = {
  day: 18,
  phase: "Consolidation",
  title: "Weak-Area Repair & Concept Maps",
  theme: "Consolidation",
  icon: "Lightbulb",
  totalHours: 10,
  sessions: [
    {
      id: "p-d18-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Identify Weak Areas — Take Diagnostic Test",
      activity:
        "Take a 50-question MCQ test covering all topics. Score yourself. Identify 3 weakest branches. Plan remaining 2 days to address them.",
      branchId: "general-pharm",
      nodeIds: [],
      xpReward: 240
    },
    {
      id: "p-d18-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Concept Map — Antimicrobial Spectrum Chart",
      activity:
        "Create a master concept map: each organism → drug of choice → alternative. Cover common pathogens (S. aureus, S. pneumo, E. coli, Pseudomonas, Mycobacterium, HIV, Plasmodium).",
      branchId: "antimicrobial",
      nodeIds: [],
      xpReward: 240
    },
    {
      id: "p-d18-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Drug Interactions Master List",
      activity:
        "Compile a list of the 30 most important drug interactions (warfarin + azoles, statins + macrolides, ACE + K-sparing, digoxin + verapamil, etc.).",
      branchId: "general-pharm",
      nodeIds: [],
      xpReward: 160
    },
    {
      id: "p-d18-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Pharmacovigilance + Clinical Trials + Ethics",
      activity:
        "Revise pharmacovigilance (PvPI), phases of clinical trials, ethical principles (Declaration of Helsinki, informed consent), fixed-dose combinations rationale.",
      branchId: "general-pharm",
      nodeIds: ["pharm-adr", "pharm-trials"],
      xpReward: 160
    }
  ]
};

const day19: DayQuest = {
  day: 19,
  phase: "Final Sprint",
  title: "Rapid Revision — 200 Short Notes in 10 Hours",
  theme: "Rapid Revision",
  icon: "Zap",
  totalHours: 10,
  sessions: [
    {
      id: "p-d19-s1",
      duration: 2,
      timeOfDay: "Morning",
      topic: "ANS Rapid Revision — 30 Short Notes",
      activity:
        "30 short notes (3-min each) covering all ANS topics: each drug's MOA + 1 use + 1 S/E. Salbutamol, propranolol, atropine, neostigmine, adrenaline, dopamine, pilocarpine, etc.",
      branchId: "ans",
      nodeIds: [],
      xpReward: 200
    },
    {
      id: "p-d19-s2",
      duration: 2,
      timeOfDay: "Morning",
      topic: "CVS + Respiratory Rapid Revision — 30 Short Notes",
      activity:
        "30 short notes: antihypertensive classes, digoxin, amiodarone, adenosine, heparin, warfarin, statins, furosemide, mannitol, salbutamol, theophylline, montelukast.",
      branchId: "cvs-pharm",
      nodeIds: [],
      xpReward: 200
    },
    {
      id: "p-d19-s3",
      duration: 2,
      timeOfDay: "Afternoon",
      topic: "CNS + Endocrine Rapid Revision — 30 Short Notes",
      activity:
        "30 short notes: diazepam, phenytoin, valproate, morphine, chlorpromazine, haloperidol, levodopa, insulin, metformin, glucocorticoids, methimazole, OCPs.",
      branchId: "cns-pharm",
      nodeIds: [],
      xpReward: 200
    },
    {
      id: "p-d19-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Antimicrobial Rapid Revision — 30 Short Notes",
      activity:
        "30 short notes: penicillin, amoxicillin, cloxacillin, piperacillin, ceftriaxone, imipenem, gentamicin, doxycycline, azithromycin, ciprofloxacin, vancomycin, metronidazole, cotrimoxazole, amphotericin, fluconazole, acyclovir, HAART drugs, anti-TB drugs, antimalarials.",
      branchId: "antimicrobial",
      nodeIds: [],
      xpReward: 200
    },
    {
      id: "p-d19-s5",
      duration: 2,
      timeOfDay: "Evening",
      topic: "GIT + General + Immuno Rapid Revision — 20 Short Notes",
      activity:
        "20 short notes: omeprazole, ranitidine, metoclopramide, domperidone, ondansetron, ORS, loperamide, cyclosporine, tacrolimus, methotrexate, TDM, pharmacovigilance, GPCR, biotransformation, antagonism types.",
      branchId: "git-pharm",
      nodeIds: [],
      xpReward: 200
    }
  ]
};

const day20: DayQuest = {
  day: 20,
  phase: "Final Boss",
  title: "The Final Exam — Mock Pharmacology Examination",
  theme: "Final",
  icon: "Trophy",
  totalHours: 10,
  sessions: [
    {
      id: "p-d20-s1",
      duration: 3,
      timeOfDay: "Morning",
      topic: "Long Essay Blitz (12-mark x 2)",
      activity:
        "Closed-book timed essay: 12-mark on Antihypertensive Drugs + 12-mark on Anti-TB Drugs (or another from: NSAIDs, Corticosteroids, Antipsychotics, Antiepileptics, Insulin, Anticoagulants, Diuretics, Anti-HIV). Time: 1 hour.",
      branchId: "cvs-pharm",
      nodeIds: ["pharm-antihypertensives"],
      xpReward: 300
    },
    {
      id: "p-d20-s2",
      duration: 3,
      timeOfDay: "Afternoon",
      topic: "Short Notes Blitz (5-mark x 5)",
      activity:
        "Closed-book: 5-mark each on Lignocaine, Morphine, Digoxin, Cyclosporine, Metformin. Time: 1 hour.",
      branchId: "general-pharm",
      nodeIds: [],
      xpReward: 300
    },
    {
      id: "p-d20-s3",
      duration: 2,
      timeOfDay: "Evening",
      topic: "2-Mark Blitz (50 questions)",
      activity:
        "From the IMP list, attempt 50 two-mark questions in 100 minutes. Focus on TDM, drugs affecting QT, teratogens, narrow TI drugs, antidotes, drug interactions.",
      branchId: "general-pharm",
      nodeIds: [],
      xpReward: 200
    },
    {
      id: "p-d20-s4",
      duration: 2,
      timeOfDay: "Evening",
      topic: "Final Review + Randomizer Cases",
      activity:
        "Use the case randomizer for 5 random cases. Review your weakest topics from today's mocks. Make a final 1-page cheat sheet for exam day.",
      branchId: "general-pharm",
      nodeIds: [],
      xpReward: 200
    }
  ],
  bossBattle: {
    name: "FINAL BOSS — University Pharmacology Examination",
    description:
      "Treat today as exam day. Strict closed-book, time-limited. Score 75%+ to graduate Pharmacology Master.",
    rewardXp: 1000
  }
};

// ----------------------------------------------------------------------------

export const pharmCampaign: DayQuest[] = [
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

export const pharmTotalHours = pharmCampaign.reduce(
  (sum, d) => sum + d.totalHours,
  0
);

export const pharmTotalXP = pharmCampaign.reduce(
  (sum, d) =>
    sum +
    d.sessions.reduce((s, q) => s + q.xpReward, 0) +
    (d.bossBattle?.rewardXp ?? 0),
  0
);
