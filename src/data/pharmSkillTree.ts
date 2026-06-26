// ============================================================================
// PHARMACOLOGY SKILL TREE DATA
// Aligned with Katzung Basic & Clinical Pharmacology, Goodman & Gilman's,
// K.D. Tripathi Essentials of Medical Pharmacology, and WHO Model List of
// Essential Medicines for undergraduate pharmacology.
// ============================================================================

import type { SkillBranch, SkillNode } from "./skillTree";

// Re-export the types so imports stay consistent
export type { SkillBranch, SkillNode };

// ----------------------------------------------------------------------------
// BRANCH 1 — GENERAL PHARMACOLOGY (Foundation)
// ----------------------------------------------------------------------------
const generalBranch: SkillBranch = {
  id: "general-pharm",
  name: "General Pharmacology",
  icon: "Atom",
  color: "#f97316",
  tagline: "Principles of Drug Action",
  description:
    "Pharmacokinetics (ADME), pharmacodynamics, drug interactions, adverse effects, clinical trials, pharmacovigilance. Foundation for every systemic topic.",
  nodes: [
    {
      id: "pharm-bioavailability",
      title: "Factors Affecting Bioavailability",
      branch: "general-pharm",
      tier: 1,
      xp: 120,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "Definition of bioavailability, first-pass metabolism, factors affecting oral absorption.",
      keyPoints: [
        "Definition: fraction of unchanged drug reaching systemic circulation",
        "First-pass metabolism: hepatic + gut wall (e.g., lignocaine, propranolol, morphine — high first-pass)",
        "Route of administration (IV = 100%, IM, SC, oral, sublingual, rectal)",
        "Physicochemical: lipid solubility, particle size, salt form, disintegration/dissolution",
        "Physiological: gastric emptying, pH, food, GI motility, malabsorption",
        "Pharmaceutical: formulation, excipients, drug-drug interactions",
        "Disease states: cirrhosis, CHF"
      ],
      textbookRef: "Katzung 15e — Ch. 1, pp. 9–12"
    },
    {
      id: "pharm-routes",
      title: "Routes of Administration — Parenteral Routes",
      branch: "general-pharm",
      tier: 1,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-bioavailability"],
      description:
        "Advantages and disadvantages of parenteral routes (IV, IM, SC, intrathecal).",
      keyPoints: [
        "IV — rapid onset, complete bioavailability, titratable; risk: anaphylaxis, embolism, infection",
        "IM — sustained absorption (depot preparations); risk: nerve injury, abscess",
        "SC — slower absorption, self-administered (insulin, heparin); risk: tissue necrosis",
        "Intrathecal — bypasses BBB (methotrexate, baclofen, contrast)",
        "Advantages parenteral: rapid onset, useful in unconscious/vomiting patient, avoids first-pass",
        "Disadvantages: pain, infection risk, anaphylaxis, requires trained personnel, cost"
      ],
      textbookRef: "Katzung 15e — Ch. 2, pp. 15–18"
    },
    {
      id: "pharm-antagonism",
      title: "Types of Antagonism — Competitive & Non-competitive",
      branch: "general-pharm",
      tier: 1,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-bioavailability"],
      description:
        "Receptor antagonism: competitive (surmountable), non-competitive (insurmountable), physiological, chemical, pharmacokinetic antagonism.",
      keyPoints: [
        "Competitive antagonist — same receptor, surmountable by increasing agonist dose; parallel right shift of DRC; e.g., propranolol at β-receptors, naloxone at μ-opioid receptors",
        "Non-competitive antagonist — binds covalently or allosterically; insurmountable; e.g., phenoxybenzamine at α-receptors, omeprazole at proton pump",
        "Physiological antagonism — two agents producing opposite effects via different receptors (e.g., histamine bronchoconstriction vs adrenaline bronchodilation)",
        "Chemical antagonism — direct chemical interaction (e.g., chelation: dimercaprol for heavy metals; protamine for heparin)",
        "Pharmacokinetic antagonism — altered absorption/metabolism/excretion (e.g., phenytoin absorption reduced by antacids)"
      ],
      textbookRef: "Katzung 15e — Ch. 2, pp. 23–26"
    },
    {
      id: "pharm-pk",
      title: "Pharmacokinetics — Vd, t½, First-Pass Metabolism",
      branch: "general-pharm",
      tier: 1,
      xp: 120,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-bioavailability"],
      description:
        "Volume of distribution (Vd), elimination half-life (t½), first-pass metabolism, plasma protein binding (PPB), zero vs first-order kinetics.",
      keyPoints: [
        "Vd = Dose / Plasma concentration; high Vd = tissue distribution (e.g., digoxin, chloroquine)",
        "t½ = 0.693 × Vd / Clearance; determines dosing interval (~4–5 half-lives to steady state)",
        "First-pass metabolism: gut + liver; bypassed by parenteral/sublingual routes",
        "PPB: acidic drugs bind albumin; basic drugs bind α1-acid glycoprotein; only free drug is active",
        "Zero-order kinetics — constant amount eliminated per unit time (e.g., phenytoin, ethanol)",
        "First-order kinetics — constant fraction eliminated per unit time (most drugs)"
      ],
      textbookRef: "Katzung 15e — Ch. 3, pp. 28–35"
    },
    {
      id: "pharm-biotransformation",
      title: "Biotransformation — Enzyme Induction & Inhibition",
      branch: "general-pharm",
      tier: 2,
      xp: 120,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-pk"],
      description:
        "Phase I (oxidation, reduction, hydrolysis — CYP450) vs Phase II (conjugation). Enzyme induction and inhibition with classic examples.",
      keyPoints: [
        "Phase I — CYP450 mediated (CYP3A4, CYP2D6, CYP1A2); functionalization",
        "Phase II — conjugation (glucuronidation, sulfation, acetylation); increases water solubility",
        "Enzyme inducers: rifampicin, phenytoin, carbamazepine, phenobarbitone, ethanol, griseofulvin, smoking (↑CYP1A2)",
        "Enzyme inhibitors: cimetidine, ketoconazole, erythromycin, omeprazole, grapefruit juice (CYP3A4)",
        "Inducers ↓ effect of co-administered drugs (e.g., rifampicin ↓ OCP effectiveness → contraceptive failure)",
        "Inhibitors ↑ effect (e.g., ketoconazole ↑ cyclosporine levels → toxicity)"
      ],
      textbookRef: "Katzung 15e — Ch. 4, pp. 39–48"
    },
    {
      id: "pharm-tdm",
      title: "Therapeutic Drug Monitoring (TDM)",
      branch: "general-pharm",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-pk"],
      description:
        "Definition, indications, drugs requiring TDM.",
      keyPoints: [
        "Definition: measurement of drug concentration in plasma to optimize therapy",
        "Indications: narrow therapeutic index, unpredictable PK, drug interactions, poor compliance, toxicity assessment",
        "Drugs needing TDM: digoxin, phenytoin, lithium, aminoglycosides (gentamicin), vancomycin, cyclosporine, theophylline, methotrexate",
        "Trough sample — just before next dose (lowest level)",
        "Peak sample — at expected peak (e.g., 30 min post-aminoglycoside infusion)"
      ],
      textbookRef: "Katzung 15e — Ch. 1, pp. 13–14"
    },
    {
      id: "pharm-trials",
      title: "Phases of Clinical Trials",
      branch: "general-pharm",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 3,
      prerequisites: [],
      description:
        "Phases 0–IV, objectives, sample sizes, regulatory framework.",
      keyPoints: [
        "Phase 0 — microdosing, pharmacokinetics (10–15 subjects)",
        "Phase I — safety, pharmacokinetics in healthy volunteers (20–100)",
        "Phase II — efficacy + dose-ranging in patients (100–500)",
        "Phase III — randomized controlled trials vs standard therapy (1000–5000)",
        "Phase IV — post-marketing surveillance — rare adverse effects",
        "ICMR / DCGI guidelines in India; FDA in USA"
      ],
      textbookRef: "Katzung 15e — Ch. 1, pp. 15–17"
    },
    {
      id: "pharm-adr",
      title: "Adverse Drug Effects & Pharmacovigilance",
      branch: "general-pharm",
      tier: 2,
      xp: 120,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-biotransformation"],
      description:
        "ADE/ADR classification (Rawlins & Thompson), type A–F reactions, teratogenicity, pharmacovigilance.",
      keyPoints: [
        "Type A (Augmented) — dose-dependent, predictable (e.g., digoxin toxicity)",
        "Type B (Bizarre) — idiosyncratic, allergic (e.g., penicillin anaphylaxis)",
        "Type C (Chronic) — long-term use (e.g., corticosteroid-induced adrenal suppression)",
        "Type D (Delayed) — teratogenicity, carcinogenicity (e.g., DES → vaginal clear cell carcinoma)",
        "Type E (End of use) — withdrawal (e.g., opioid withdrawal)",
        "Type F (Failure) — therapeutic failure (e.g., OCP failure with rifampicin)",
        "Teratogenic drugs: thalidomide (limb defects), isotretinoin, warfarin, valproate, ACE inhibitors, lithium",
        "Pharmacovigilance: WHO Programme; UMC Sweden; Indian PV Programme — PvPI (since 2010)",
        "Yellow Card (UK), MedWatch (USA), Form 96/ICSR in India"
      ],
      textbookRef: "Katzung 15e — Ch. 5, pp. 53–68"
    },
    {
      id: "pharm-tolerance",
      title: "Drug Tolerance, Dependence & Therapeutic Index",
      branch: "general-pharm",
      tier: 2,
      xp: 80,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-pk"],
      description:
        "Tolerance mechanisms, drug dependence (physical vs psychological), therapeutic index and margin of safety.",
      keyPoints: [
        "Tolerance — decreased response to repeated dosing; mechanisms: receptor downregulation, pharmacokinetic (enzyme induction), tachyphylaxis (acute tolerance)",
        "Drug dependence — physical (withdrawal syndrome) vs psychological (craving)",
        "Common dependence-producing drugs: opioids, alcohol, barbiturates, benzodiazepines, amphetamines, cocaine, nicotine",
        "Therapeutic Index = TD50 / ED50; narrow TI: digoxin, lithium, warfarin, aminoglycosides, theophylline, antiepileptics",
        "Margin of safety = TD1 / ED99"
      ],
      textbookRef: "Katzung 15e — Ch. 2, pp. 26–28; Ch. 5, pp. 70–72"
    },
    {
      id: "pharm-anaphylaxis",
      title: "Management of Anaphylactic Shock",
      branch: "general-pharm",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-adr"],
      description:
        "Stepwise management of anaphylaxis, role of adrenaline.",
      keyPoints: [
        "First-line: IM adrenaline 0.5 mg (0.5 mL of 1:1000) — anterolateral thigh; repeat every 5 minutes if needed",
        "Airway + Oxygen 100% + IV fluids (normal saline) for hypotension",
        "Second-line: IV hydrocortisone 200 mg + chlorpheniramine 10–20 mg IV",
        "Nebulized salbutamol for bronchospasm; glucagon if patient on β-blockers",
        "Adrenaline mechanism: α1 vasoconstriction (BP), β1 cardiac (inotropy), β2 bronchodilation, mast cell stabilization",
        "Observation 6–24 hours (biphasic reactions)"
      ],
      textbookRef: "Katzung 15e — Ch. 8, pp. 158–159"
    },
    {
      id: "pharm-gpcr",
      title: "G-Protein Coupled Receptors (GPCR)",
      branch: "general-pharm",
      tier: 3,
      xp: 100,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-antagonism"],
      description:
        "Structure, signal transduction (Gs, Gi, Gq), classic receptor examples.",
      keyPoints: [
        "Structure: 7 transmembrane α-helices; extracellular N-terminus; intracellular C-terminus",
        "Gs (stimulates adenylyl cyclase → ↑cAMP): β1, β2, β3, D1, H2, glucagon",
        "Gi (inhibits adenylyl cyclase → ↓cAMP): α2, D2, M2, μ-opioid",
        "Gq (activates PLC → IP3 + DAG → ↑Ca²⁺): α1, M1, M3, H1, V1",
        "Tyrosine kinase receptors (not GPCR): insulin, EGFR, growth factors",
        "Intracellular receptors: steroids, thyroid hormone"
      ],
      textbookRef: "Katzung 15e — Ch. 2, pp. 20–22"
    },
    {
      id: "pharm-ndds",
      title: "New Drug Delivery Systems (NDDS)",
      branch: "general-pharm",
      tier: 3,
      xp: 80,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-bioavailability"],
      description:
        "Liposomes, nanoparticles, transdermal patches, implants, targeted delivery.",
      keyPoints: [
        "Liposomes — phospholipid vesicles; amphotericin B liposomal (AmBisome) — less nephrotoxicity",
        "Nanoparticles — paclitaxel (Abraxane) for cancer",
        "Transdermal patches — fentanyl, nicotine, nitroglycerin, scopolamine, estrogen",
        "Sustained-release oral formulations — metformin SR, morphine SR",
        "Targeted delivery: PEGylation (PEG-interferon), antibody-drug conjugates (trastuzumab emtansine)",
        "Osmotic pumps (OROS) — nifedipine GITS"
      ],
      textbookRef: "Katzung 15e — Ch. 5, pp. 76–79"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 2 — AUTONOMIC NERVOUS SYSTEM (ANS)
// ----------------------------------------------------------------------------
const ansBranch: SkillBranch = {
  id: "ans",
  name: "Autonomic Nervous System",
  icon: "Network",
  color: "#06b6d4",
  tagline: "Sympathetic & Parasympathetic",
  description:
    "Cholinergic & adrenergic pharmacology, receptors, drugs in glaucoma, OP poisoning, shock, myasthenia gravis.",
  nodes: [
    {
      id: "pharm-adrenergic-class",
      title: "Classification of Adrenergic Drugs & Receptor-Mediated Actions",
      branch: "ans",
      tier: 1,
      xp: 120,
      marks: "Long Answer",
      highYield: 4,
      prerequisites: [],
      description:
        "Direct-acting, indirect-acting, mixed-action sympathomimetics; α1, α2, β1, β2, β3 receptor effects.",
      keyPoints: [
        "Direct: adrenaline, noradrenaline, isoprenaline, dopamine, dobutamine, salbutamol, phenylephrine",
        "Indirect: amphetamine, ephedrine, tyramine (release stored catecholamines)",
        "Mixed: ephedrine, mephentermine",
        "α1 — vasoconstriction, mydriasis, α2 — presynaptic inhibition of NA release",
        "β1 — ↑HR, ↑contractility, renin release",
        "β2 — bronchodilation, vasodilation, uterine relaxation, glycogenolysis",
        "β3 — lipolysis",
        "D1 — renal + mesenteric vasodilation; D2 — presynaptic inhibition"
      ],
      textbookRef: "Katzung 15e — Ch. 9, pp. 113–120"
    },
    {
      id: "pharm-adrenaline",
      title: "Adrenaline — MOA, Uses, with LA & in Anaphylactic Shock",
      branch: "ans",
      tier: 1,
      xp: 120,
      marks: "Short Note",
      highYield: 5,
      prerequisites: ["pharm-adrenergic-class"],
      description:
        "Pharmacological actions of adrenaline, use as vasoconstrictor with LA, first-line in anaphylaxis.",
      keyPoints: [
        "Non-selective α + β agonist",
        "α1 — vasoconstriction (skin, mucous membranes, viscera)",
        "β1 — ↑HR, ↑contractility",
        "β2 — bronchodilation, mast cell stabilization",
        "With lignocaine — prolongs duration of local anaesthesia, reduces systemic toxicity (1:100,000 to 1:200,000); contraindicated at end-artery sites (fingers, toes, nose, ear, penis) — risk of necrosis",
        "Anaphylactic shock — IM 0.5 mg (anterolateral thigh); first-line",
        "Other uses: cardiac arrest (1 mg IV), glaucoma (topical — old use), epistaxis (local vasoconstriction)"
      ],
      textbookRef: "Katzung 15e — Ch. 9, pp. 120–122"
    },
    {
      id: "pharm-sympatholytics",
      title: "Classification of Sympatholytics & β-Blockers",
      branch: "ans",
      tier: 2,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-adrenergic-class"],
      description:
        "α-blockers, β-blockers, classification, specific drugs — propranolol, metoprolol, atenolol, tamsulosin.",
      keyPoints: [
        "α-blockers: non-selective (phenoxybenzamine, phentolamine), selective α1 (prazosin, terazosin, doxazosin, tamsulosin), selective α2 (yohimbine)",
        "β-blockers: non-selective (propranolol, timolol), cardioselective β1 (atenolol, metoprolol, bisoprolol, esmolol), with ISA (pindolol), α+β blocker (labetalol, carvedilol)",
        "Metoprolol — cardioselective; uses: angina, post-MI, heart failure (low dose), AF",
        "S/E: bradycardia, fatigue, cold extremities, erectile dysfunction, masking of hypoglycemia, bronchospasm (non-selective), worsens peripheral vascular disease",
        "CI: asthma, severe bradycardia, decompensated heart failure, 2nd/3rd degree heart block",
        "Tamsulosin — selective α1A blocker; BPH without much BP effect; floppy iris syndrome during cataract surgery",
        "Non-cardiovascular uses of β-blockers: glaucoma (timolol), migraine prophylaxis, essential tremor, hyperthyroidism, portal hypertension (propranolol)"
      ],
      textbookRef: "Katzung 15e — Ch. 10, pp. 130–142"
    },
    {
      id: "pharm-glaucoma",
      title: "Drug Therapy of Glaucoma — Open & Closed Angle",
      branch: "ans",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-sympatholytics"],
      description:
        "Pathophysiology of glaucoma, drug classes — β-blockers, prostaglandins, α2 agonists, carbonic anhydrase inhibitors, pilocarpine.",
      keyPoints: [
        "Open-angle glaucoma — gradual rise in IOP; trabecular meshwork dysfunction",
        "Acute angle-closure — medical emergency; pupillary block → iris bombe → ↑IOP",
        "Drugs reducing aqueous humor production: β-blockers (timolol — first line), α2 agonists (brimonidine), carbonic anhydrase inhibitors (acetazolamide, dorzolamide)",
        "Drugs increasing outflow: prostaglandin analogues (latanoprost — most effective, once daily), pilocarpine (muscarinic — contracts ciliary muscle)",
        "Acute angle closure: IV acetazolamide + topical pilocarpine 2% + mannitol + timolol; then laser peripheral iridotomy",
        "Latanoprost S/E: brown iris pigmentation, lash growth",
        "Brimonidine — α2 agonist; decreases aqueous production AND increases uveoscleral outflow",
        "Pilocarpine MOA in glaucoma: contracts ciliary muscle → opens trabecular meshwork → ↑outflow"
      ],
      textbookRef: "Katzung 15e — Ch. 10, pp. 145–148"
    },
    {
      id: "pharm-op-poisoning",
      title: "Organophosphorus Poisoning — Pharmacological Basis",
      branch: "ans",
      tier: 3,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-glaucoma"],
      description:
        "OP compounds inhibit AChE → cholinergic crisis; role of atropine + pralidoxime.",
      keyPoints: [
        "OP compounds (malathion, parathion, sarin, tabun) — irreversible inhibition of acetylcholinesterase",
        "Symptoms — DUMBELS: Diarrhea, Urination, Miosis, Bronchospasm, Emesis, Lacrimation, Sweating; nicotinic effects (muscle fasciculations, weakness, paralysis)",
        "Atropine — blocks muscarinic effects; does NOT reverse nicotinic effects; dose 2 mg IV every 5–10 min until drying of secretions (atropinization); large doses may be needed",
        "Pralidoxime (2-PAM) — reactivates AChE by dephosphonylation; effective only before aging (24 hours); restores nicotinic effects; dose 1–2 g IV over 15–30 min",
        "Atropine does NOT reverse central respiratory depression; pralidoxime partially does",
        "Intermediate syndrome — 24–96 hours post-exposure; neck weakness, respiratory failure",
        "Physostigmine vs neostigmine — physostigmine crosses BBB (tertiary amine); neostigmine does not (quaternary)"
      ],
      textbookRef: "Katzung 15e — Ch. 8, pp. 168–171"
    },
    {
      id: "pharm-cholinergics",
      title: "Cholinergic Drugs — Anticholinesterases & Atropine",
      branch: "ans",
      tier: 2,
      xp: 120,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "Direct cholinergics, anticholinesterases (reversible, irreversible), atropine and anticholinergics.",
      keyPoints: [
        "Direct cholinergics: acetylcholine, carbachol, pilocarpine, bethanechol",
        "Reversible anticholinesterases: edrophonium (myasthenia diagnosis), neostigmine (myasthenia treatment, curare reversal), physostigmine (belladonna poisoning — crosses BBB), donepezil/rivastigmine (Alzheimer's)",
        "Irreversible: organophosphates, echothiophate (glaucoma)",
        "Atropine — muscarinic antagonist; mydriatic, cycloplegic, antispasmodic, pre-anaesthetic, OP poisoning antidote, bradycardia",
        "Atropine toxicity: dry as a bone, red as a beet, hot as a hare, blind as a bat, mad as a hatter",
        "Myasthenia gravis — autoimmune anti-AChR; neostigmine improves weakness; edrophonium (Tensilon test); thymectomy if thymoma"
      ],
      textbookRef: "Katzung 15e — Ch. 7, pp. 143–156; Ch. 8, pp. 161–168"
    },
    {
      id: "pharm-skeletal-muscle",
      title: "Skeletal Muscle Relaxants — Depolarizing & Non-depolarizing",
      branch: "ans",
      tier: 3,
      xp: 120,
      marks: "Long Answer",
      highYield: 4,
      prerequisites: ["pharm-cholinergics"],
      description:
        "NMJ blockers — depolarizing (suxamethonium) vs non-depolarizing (curare, vecuronium, rocuronium), Dantrolene in malignant hyperthermia.",
      keyPoints: [
        "Depolarizing: succinylcholine — agonist at NMJ; initial fasciculations then flaccid paralysis; rapid onset (60 sec), short duration (5–10 min); metabolized by plasma cholinesterase",
        "S/E: hyperkalemia, malignant hyperthermia (in genetically susceptible — ryanodine receptor mutation), bradycardia, apnea (genetic cholinesterase deficiency), raised intraocular/intragastric pressure",
        "Non-depolarizing: competitive antagonist at NMJ; pancuronium, vecuronium, rocuronium, atracurium, mivacurium",
        "Reversal: neostigmine + glycopyrrolate; sugammadex specifically reverses rocuronium/vecuronium",
        "Mivacurium — short-acting; metabolized by plasma cholinesterase",
        "Dantrolene — direct-acting skeletal muscle relaxant; inhibits ryanodine receptor → blocks Ca²⁺ release from SR; treatment of malignant hyperthermia (2.5 mg/kg IV), neuroleptic malignant syndrome, spasticity"
      ],
      textbookRef: "Katzung 15e — Ch. 11, pp. 155–165"
    },
    {
      id: "pharm-la",
      title: "Local Anaesthetics — Classification, MOA, Lignocaine",
      branch: "ans",
      tier: 2,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "MOA (Na+ channel blockade), classification (esters vs amides), lignocaine details, advantages of LA, uses.",
      keyPoints: [
        "MOA — block voltage-gated Na+ channels from inside the axon in ionized form; small fibers blocked first (pain → cold → warmth → touch → pressure)",
        "Esters (cocaine, procaine, amethocaine/tetracaine, chloroprocaine) — metabolized by plasma cholinesterase; short-acting; ↑allergy (PABA derivative)",
        "Amides (lignocaine/lidocaine, bupivacaine, prilocaine, ropivacaine, mepivacaine) — metabolized by liver; longer-acting",
        "Lignocaine — amide; rapid onset, medium duration; uses: infiltration, nerve block, epidural, IV antiarrhythmic (class Ib — post-MI VCs)",
        "Lignocaine S/E: CNS stimulation → seizures; CVS depression (hypotension, bradycardia); allergy (rare with amides)",
        "Addition of adrenaline 1:200,000 — prolongs duration, reduces systemic toxicity",
        "Bupivacaine — long-acting; cardiotoxic (QT prolongation, fatal VT)",
        "Advantages of LA over general anesthesia: patient conscious, less physiological disturbance, post-op pain relief, lower cost"
      ],
      textbookRef: "Katzung 15e — Ch. 26, pp. 281–288"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 3 — AUTOCOIDS & RESPIRATORY
// ----------------------------------------------------------------------------
const autacoidsBranch: SkillBranch = {
  id: "autacoids",
  name: "Autacoids & Respiratory",
  icon: "Wind",
  color: "#0ea5e9",
  tagline: "Histamine, PGs, NSAIDs, Asthma",
  description:
    "Histamine, prostaglandins, 5-HT, NSAIDs, antigout drugs, drug therapy of asthma and cough.",
  nodes: [
    {
      id: "pharm-nsaids",
      title: "NSAIDs — Classification & Aspirin",
      branch: "autacoids",
      tier: 1,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "COX inhibition, classification, aspirin pharmacology, role in MI and pain.",
      keyPoints: [
        "MOA — inhibit cyclooxygenase (COX-1 constitutive, COX-2 inducible); ↓prostaglandin + thromboxane synthesis",
        "Non-selective COX inhibitors: aspirin, ibuprofen, diclofenac, indomethacin, naproxen, piroxicam",
        "Selective COX-2 inhibitors (celecoxib, etoricoxib) — less GI toxicity; ↑CV risk",
        "Aspirin — irreversible COX acetylation; low dose (75 mg) antiplatelet (↓TXA2 — platelets cannot regenerate COX)",
        "Aspirin in MI — 75–150 mg OD; secondary prevention; reduces mortality by 25%",
        "Aspirin analgesic-antipyretic: 325–600 mg; anti-inflammatory: 3–4 g/day",
        "Aspirin toxicity: gastric erosion, tinnitus, Reye's syndrome in children, prolonged bleeding, salicylism",
        "Aspirin in high doses causes hyperventilation → respiratory alkalosis → metabolic acidosis (uncoupling of oxidative phosphorylation)",
        "Aspirin CI: children < 16 with viral infection (Reye's), peptic ulcer, bleeding disorders, pregnancy (3rd trimester — premature closure of ductus)"
      ],
      textbookRef: "Katzung 15e — Ch. 20, pp. 320–329"
    },
    {
      id: "pharm-h1-blockers",
      title: "H1 Antihistamines & Fexofenadine",
      branch: "autacoids",
      tier: 1,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "Classification of H1 antagonists, sedation differences, fexofenadine as second-generation.",
      keyPoints: [
        "First-generation: chlorpheniramine, promethazine, diphenhydramine — sedating, anticholinergic; cross BBB",
        "Second-generation: fexofenadine, loratadine, cetirizine — non-sedating, no anticholinergic; do not cross BBB",
        "Fexofenadine — active metabolite of terfenadine; safe for cardiac (terfenadine withdrawn — QT prolongation with CYP3A4 inhibitors)",
        "Uses: allergy (rhinitis, urticaria), motion sickness (promethazine), antiemetic, sleep aid",
        "S/E: first-gen — sedation, dry mouth, urinary retention, blurred vision; second-gen — minimal"
      ],
      textbookRef: "Katzung 15e — Ch. 19, pp. 311–315"
    },
    {
      id: "pharm-5ht",
      title: "5-HT Receptors & Drugs Acting Through Them — Sumatriptan",
      branch: "autacoids",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "5-HT receptor subtypes, drugs acting on them, sumatriptan in migraine.",
      keyPoints: [
        "5-HT1 (Gs) — neuronal; 5-HT1B/1D — triptans (sumatriptan) — vasoconstriction of cranial vessels; migraine",
        "5-HT2 (Gq) — smooth muscle; 5-HT2A — psychedelics (LSD); 5-HT2C — appetite suppressants",
        "5-HT3 (ion channel) — area postrema; ondansetron — antiemetic (chemotherapy, post-op)",
        "5-HT4 (Gs) — GIT prokinetic; cisapride, prucalopride (5-HT4 agonist)",
        "Sumatriptan — 5-HT1B/1D agonist; acute migraine + cluster headache; SC/PO/nasal",
        "S/E sumatriptan: chest tightness, flushing; CI — IHD, Prinzmetal angina, uncontrolled hypertension, pregnancy",
        "Prophylaxis of migraine: propranolol, amitriptyline, valproate, topiramate, flunarizine"
      ],
      textbookRef: "Katzung 15e — Ch. 19, pp. 318–321"
    },
    {
      id: "pharm-antigout",
      title: "Drugs for Gout — Allopurinol, Febuxostat, Colchicine",
      branch: "autacoids",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "Acute vs chronic gout therapy, mechanism of allopurinol and febuxostat, colchicine for acute attack.",
      keyPoints: [
        "Acute gout: NSAIDs (indomethacin), colchicine, corticosteroids",
        "Colchicine — inhibits microtubule polymerization → ↓neutrophil migration; MOA distinct from NSAIDs",
        "Chronic gout (urate lowering): xanthine oxidase inhibitors (allopurinol, febuxostat), uricosurics (probenecid, sulfinpyrazone)",
        "Allopurinol — xanthine oxidase inhibitor; ↓uric acid synthesis; first-line for chronic gout",
        "Febuxostat — non-purine xanthine oxidase inhibitor; useful in allopurinol intolerance; hepatic metabolism",
        "Allopurinol S/E: rash (mild), Stevens-Johnson syndrome (rare), hypersensitivity; CI in acute attack",
        "Allopurinol interactions: ↑azathioprine/6-MP toxicity (inhibit metabolism); increase theophylline levels"
      ],
      textbookRef: "Katzung 15e — Ch. 26, pp. 296–299"
    },
    {
      id: "pharm-asthma",
      title: "Drug Therapy of Bronchial Asthma — Acute & Chronic",
      branch: "autacoids",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-nsaids"],
      description:
        "Stepwise asthma management, relievers vs controllers, MOA of each drug class.",
      keyPoints: [
        "Relievers (acute): short-acting β2 agonists (salbutamol, terbutaline), ipratropium, theophylline",
        "Controllers (chronic): inhaled corticosteroids (beclomethasone, budesonide, fluticasone), long-acting β2 agonists (salmeterol, formoterol), leukotriene antagonists (montelukast, zafirlukast), mast cell stabilizers (cromoglycate), omalizumab (anti-IgE)",
        "Salbutamol — β2 agonist; ↑cAMP → bronchodilation; S/E: tachycardia, tremor, hypokalemia, hyperglycemia; route: inhalation preferred (faster, fewer side effects)",
        "Theophylline — phosphodiesterase inhibitor → ↑cAMP; narrow TI; S/E: seizures, arrhythmias, GI",
        "Inhaled steroids — local anti-inflammatory; long-term safety; rinse mouth to prevent candidiasis",
        "Status asthmaticus — IV hydrocortisone + nebulized salbutamol + ipratropium + O2 + IV magnesium sulfate",
        "Montelukast — leukotriene receptor antagonist (CysLT1); oral; exercise-induced asthma, allergic rhinitis",
        "Omalizumab — monoclonal anti-IgE; severe allergic asthma",
        "Mast cell stabilizers (cromoglycate, nedocromil) — prophylactic; not for acute attacks",
        "Step-up therapy: Step 1 (SABA PRN) → Step 2 (low-dose ICS) → Step 3 (ICS + LABA) → Step 4 (medium/high ICS + LABA) → Step 5 (high ICS + LABA + oral steroid/anti-IgE)"
      ],
      textbookRef: "Katzung 15e — Ch. 20, pp. 327–336"
    },
    {
      id: "pharm-cough",
      title: "Cough & Mucolytics — Dextromethorphan, Expectorants",
      branch: "autacoids",
      tier: 3,
      xp: 80,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-asthma"],
      description:
        "Antitussives, expectorants, mucolytics.",
      keyPoints: [
        "Antitussives: codeine (μ-opioid agonist), dextromethorphan (μ-opioid, but minimal analgesia/sedation, less constipation)",
        "Dextromethorphan — non-opioid antitussive; NMDA antagonist at high doses; cough suppressant for dry cough",
        "Expectorants: guaifenesin, ammonium chloride, terpin hydrate — increase respiratory tract secretion, reduce viscosity",
        "Mucolytics: acetylcysteine (breaks disulfide bonds in mucus), bromhexine, ambroxol",
        "Acetylcysteine — also antidote for paracetamol overdose (replenishes glutathione)",
        "Ipratropium — anticholinergic bronchodilator; useful in COPD; also reduces rhinorrhea (topical)"
      ],
      textbookRef: "Katzung 15e — Ch. 20, pp. 336–338"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 4 — CNS DRUGS
// ----------------------------------------------------------------------------
const cnsBranch: SkillBranch = {
  id: "cns-pharm",
  name: "CNS Pharmacology",
  icon: "BrainCircuit",
  color: "#a855f7",
  tagline: "Sedatives, Antiepileptics, Antipsychotics",
  description:
    "General anesthetics, sedative-hypnotics, antiepileptics, opioids, antipsychotics, antiparkinsonian drugs.",
  nodes: [
    {
      id: "pharm-bzd",
      title: "Benzodiazepines — Classification, MOA, Diazepam",
      branch: "cns-pharm",
      tier: 1,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "GABA-A modulation, BZD classification, diazepam, uses, flumazenil.",
      keyPoints: [
        "MOA — bind GABA-A receptor (between α and γ subunits); ↑frequency of Cl⁻ channel opening → hyperpolarization → CNS depression",
        "Classification: long-acting (diazepam, chlordiazepoxide), intermediate (lorazepam, alprazolam), short-acting (midazolam, triazolam)",
        "Diazepam — long-acting; uses: anxiety, alcohol withdrawal, status epilepticus (IV), muscle spasm, pre-anesthetic",
        "S/E: sedation, ataxia, amnesia, dependence, respiratory depression (especially with alcohol/opioids)",
        "Tolerance — both pharmacokinetic and pharmacodynamic",
        "Flumazenil — competitive BZD antagonist; reversal of BZD overdose; dose 0.2 mg IV; risk: seizures in chronic users",
        "BZDs safer than barbiturates — wider therapeutic index; BZDs increase channel opening FREQUENCY (barbiturates increase DURATION)"
      ],
      textbookRef: "Katzung 15e — Ch. 22, pp. 247–256"
    },
    {
      id: "pharm-anesthesia",
      title: "General Anesthetics — IV & Inhalational, Second Gas Effect",
      branch: "cns-pharm",
      tier: 1,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "Inhalational agents, IV anesthetics, second gas effect, dissociative anesthesia.",
      keyPoints: [
        "Inhalational: nitrous oxide, halothane, isoflurane, sevoflurane, desflurane",
        "IV: propofol (rapid induction, antiemetic), thiopentone (rapid onset — high lipid solubility), ketamine (dissociative anesthesia — NMDA antagonist), etomidate (cardiovascular stable, adrenal suppression)",
        "Second gas effect — when N2O (fast uptake) is given with another volatile agent (e.g., halothane), the alveolar concentration of the second gas rises faster → faster induction",
        "Diffusion hypoxia — at end of N2O anesthesia, rapid outpouring of N2O dilutes alveolar O2; give 100% O2 for 5–10 min",
        "Ketamine — dissociative anesthesia, profound analgesia, ↑BP/HR (sympathetic stimulation), bronchodilation; S/E: emergence phenomena (hallucinations); useful in children, asthmatics, hypovolemic patients",
        "Halothane hepatitis; malignant hyperthermia with all inhalational agents (except N2O)",
        "Malignant hyperthermia — ryanodine receptor mutation → ↑Ca²⁺ release; treatment: IV dantrolene 2.5 mg/kg"
      ],
      textbookRef: "Katzung 15e — Ch. 25, pp. 265–273"
    },
    {
      id: "pharm-antiepileptics",
      title: "Antiepileptic Drugs — Phenytoin, Valproate, Lamotrigine",
      branch: "cns-pharm",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-bzd"],
      description:
        "Seizure types and drug choice, phenytoin (zero-order kinetics), valproate, lamotrigine, status epilepticus.",
      keyPoints: [
        "Seizure types: partial (simple, complex, secondary generalized); generalized (tonic-clonic, absence, myoclonic, atonic)",
        "Phenytoin — MOA: prolongs inactive state of voltage-gated Na+ channels; uses: tonic-clonic, partial; PK: zero-order kinetics (small dose increase → large plasma rise); S/E: gum hypertrophy, hirsutism, coarse facial features, megaloblastic anemia, teratogen (fetal hydantoin syndrome)",
        "Valproate — ↑GABA, blocks Na+ channels, blocks T-type Ca²⁺ channels (absence); broad spectrum; S/E: hepatotoxicity (microvesicular steatosis), thrombocytopenia, teratogen (neural tube defects)",
        "Lamotrigine — blocks Na+ channels; ↓glutamate release; partial + generalized + Lennox-Gastaut; S/E: Stevens-Johnson syndrome (slow titration required)",
        "Carbamazepine — partial + generalized tonic-clonic; trigeminal neuralgia; S/E: agranulocytosis, aplastic anemia, hyponatremia (SIADH), teratogen",
        "Ethosuximide — T-type Ca²⁺ channel block; absence seizures only",
        "Status epilepticus — IV lorazepam (4 mg) → IV phenytoin (20 mg/kg at < 50 mg/min) → IV levetiracetam or valproate → general anesthesia (propofol/midazolam) if refractory",
        "Pregnancy: avoid valproate, carbamazepine; preferred: lamotrigine, levetiracetam; folic acid 5 mg/day"
      ],
      textbookRef: "Katzung 15e — Ch. 24, pp. 256–268"
    },
    {
      id: "pharm-opioids",
      title: "Opioid Analgesics — Morphine, Pethidine, Fentanyl",
      branch: "cns-pharm",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-bzd"],
      description:
        "μ, κ, δ receptors, morphine pharmacology, morphine vs pethidine, opioid poisoning, antagonists.",
      keyPoints: [
        "Receptors: μ (analgesia, euphoria, respiratory depression, miosis, constipation), κ (spinal analgesia, sedation, miosis), δ (emotional component)",
        "Morphine — μ agonist; MOA: ↑K+ conductance → hyperpolarization; ↓Ca²⁺ influx",
        "Morphine effects: analgesia (supraspinal + spinal), sedation, euphoria, respiratory depression (↓response to CO2), miosis (μ3), constipation, biliary spasm, urinary retention, hypotension (histamine release), nausea (CTZ)",
        "Morphine uses: MI, acute pulmonary edema, terminal cancer pain, perioperative analgesia",
        "Morphine S/E: respiratory depression, constipation, nausea, hypotension, dependence",
        "Morphine poisoning — triad: coma, pinpoint pupils, respiratory depression; treatment: IV naloxone (0.4–2 mg, repeat as needed)",
        "Morphine vs Pethidine: pethidine is shorter acting; causes less constipation/miosis; causes tachycardia (atropine-like); CI: MAOI (serotonin syndrome); less smooth muscle spasm",
        "Fentanyl — 100× potency of morphine; rapid onset; transdermal patch for chronic pain; IV in anesthesia",
        "Codeine — weak μ agonist; antitussive; mild analgesic (with paracetamol)",
        "Pure opioid antagonists: naloxone (short-acting, IV), naltrexone (longer-acting, oral — alcohol/opioid dependence)"
      ],
      textbookRef: "Katzung 15e — Ch. 23, pp. 263–278"
    },
    {
      id: "pharm-antipsychotics",
      title: "Antipsychotics — Chlorpromazine, Haloperidol, Atypicals",
      branch: "cns-pharm",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-bzd"],
      description:
        "Typical vs atypical antipsychotics, D2 blockade, chlorpromazine, haloperidol, atypical agents.",
      keyPoints: [
        "Typical (first-gen): chlorpromazine, haloperidol, fluphenazine — D2 antagonists; more extrapyramidal side effects (EPS), less effective for negative symptoms",
        "Atypical (second-gen): clozapine, risperidone, olanzapine, quetiapine, aripiprazole — 5-HT2A + D2 antagonism; less EPS, more metabolic syndrome",
        "Chlorpromazine — aliphatic phenothiazine; sedation, hypotension (α-blockade), anticholinergic; S/E: EPS (akathisia, acute dystonia, parkinsonism, tardive dyskinesia), neuroleptic malignant syndrome, hyperprolactinemia (galactorrhea), photosensitivity, cholestatic jaundice, corneal/opacities",
        "Haloperidol — butyrophenone; high potency D2 blocker; more EPS, less sedation/hypotension",
        "Tardive dyskinesia — late-onset choreoathetosis; potentially irreversible; mechanism: D2 receptor supersensitivity",
        "Neuroleptic malignant syndrome — hyperthermia, muscle rigidity, autonomic instability, ↑CK; treatment: dantrolene + bromocriptine; discontinue antipsychotic",
        "Clozapine — most effective but agranulocytosis (mandatory CBC monitoring); also seizures, myocarditis",
        "Atypicals — preferred first-line; metabolic: weight gain, diabetes, dyslipidemia"
      ],
      textbookRef: "Katzung 15e — Ch. 23, pp. 278–288"
    },
    {
      id: "pharm-antiparkinson",
      title: "Antiparkinsonian Drugs — Levodopa-Carbidopa, Amantadine",
      branch: "cns-pharm",
      tier: 3,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-antipsychotics"],
      description:
        "Pathophysiology of Parkinsonism, levodopa + carbidopa rationale, other agents.",
      keyPoints: [
        "Parkinsonism — degeneration of nigrostriatal dopaminergic neurons; ↓dopamine → ↑cholinergic activity",
        "Levodopa — dopamine precursor; crosses BBB; converted to dopamine by DOPA decarboxylase",
        "Carbidopa — peripheral DOPA decarboxylase inhibitor; does NOT cross BBB; reduces peripheral levodopa metabolism → ↓peripheral side effects (nausea, arrhythmia) and ↑CNS availability; allows 75% dose reduction",
        "Levodopa S/E: nausea/vomiting (peripheral dopamine in CTZ), postural hypotension, dyskinesia, psychiatric (hallucinations), on-off phenomenon, augmentation of melanoma",
        "Levodopa CI: psychosis, melanoma, narrow-angle glaucoma",
        "Other drugs: amantadine (releases dopamine + NMDA antagonist; mild, early disease; treats dyskinesia), bromocriptine (D2 agonist; lactation, prolactinoma), ropinirole, pramipexole (D2/D3 agonists — first line in young patients), selegiline (MAO-B inhibitor), entacapone (COMT inhibitor)",
        "Anticholinergics (trihexyphenidyl, benzatropine) — useful for tremor; CI: elderly, glaucoma, prostatism",
        "Drug-induced parkinsonism — antipsychotics (D2 blockade); treat with anticholinergics, NOT levodopa"
      ],
      textbookRef: "Katzung 15e — Ch. 28, pp. 305–315"
    },
    {
      id: "pharm-antidepressants",
      title: "Antidepressants — SSRIs, TCAs, MAOIs",
      branch: "cns-pharm",
      tier: 3,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-antipsychotics"],
      description:
        "SSRIs as first-line, TCAs, MAOIs, serotonin syndrome.",
      keyPoints: [
        "SSRIs (first-line): fluoxetine, sertraline, paroxetine, citalopram — selective 5-HT reuptake inhibitors; safe in overdose; S/E: GI, sexual dysfunction, hyponatremia (SIADH), serotonin syndrome",
        "TCAs: imipramine, amitriptyline — block 5-HT and NA reuptake; also α-blockade, anticholinergic, Na+ channel blockade; S/E: sedation, dry mouth, constipation, urinary retention, postural hypotension; cardiotoxic in overdose (QT prolongation, arrhythmias)",
        "MAOIs: phenelzine, tranylcypromine — irreversible MAO inhibitors; CI: tyramine-rich foods (cheese reaction — hypertensive crisis); SSRI + MAOI = serotonin syndrome",
        "Serotonin syndrome — agitation, hyperreflexia, myoclonus, hyperthermia, autonomic instability; treatment: cyproheptadine, supportive",
        "Amitriptyline — TCA; also used for neuropathic pain, migraine prophylaxis, fibromyalgia",
        "Venlafaxine, duloxetine — SNRIs; duloxetine for neuropathic pain",
        "Mirtazapine — atypical; sedating, increases appetite (good for depressed patient with weight loss)"
      ],
      textbookRef: "Katzung 15e — Ch. 23, pp. 288–298"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 5 — CARDIOVASCULAR DRUGS
// ----------------------------------------------------------------------------
const cvsPharmBranch: SkillBranch = {
  id: "cvs-pharm",
  name: "Cardiovascular Pharmacology",
  icon: "HeartPulse",
  color: "#dc2626",
  tagline: "HTN, CHF, Angina, Arrhythmia",
  description:
    "Antihypertensives, antianginals, drugs for CHF, antiarrhythmics, drugs in MI.",
  nodes: [
    {
      id: "pharm-antihypertensives",
      title: "Antihypertensive Drugs — Classification, Nifedipine, ACE Inhibitors",
      branch: "cvs-pharm",
      tier: 1,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "JNC classification, drug classes, diuretics, ACE inhibitors/ARBs, CCBs, β-blockers, α-blockers, central sympatholytics.",
      keyPoints: [
        "Diuretics — thiazides (HTN first line, especially in elderly + blacks); S/E: hypokalemia, hyperuricemia, hyperglycemia, hyperlipidemia",
        "ACE inhibitors (captopril, enalapril, lisinopril, ramipril) — block AT-I → AT-II conversion; ↓aldosterone; bradykinin accumulation → cough, angioedema",
        "ACE inhibitor S/E: dry cough (10–20%), hyperkalemia, renal impairment in bilateral RAS, angioedema (especially in Black patients)",
        "ACE inhibitor uses: HTN, heart failure, post-MI, diabetic nephropathy (renoprotective)",
        "ARBs (losartan, valsartan) — AT-II receptor blockers; no cough, no bradykinin; same efficacy",
        "CCBs — verapamil (cardiac — HR, contractility), diltiazem (intermediate), dihydropyridines (nifedipine, amlodipine — vasodilators; reflex tachycardia)",
        "Nifedipine — vasodilation (peripheral); S/E: headache, flushing, ankle edema, reflex tachycardia; long-acting preparations preferred",
        "Amlodipine — long-acting DHP; once daily; preferred over nifedipine",
        "β-blockers — no longer first-line for HTN (except with comorbid CAD, HF, AF)",
        "α1-blockers (prazosin, terazosin) — useful in BPH + HTN; first-dose hypotension",
        "Central sympatholytics: clonidine (α2 agonist), methyldopa (pregnancy-safe), moxonidine (I1 imidazoline)",
        "Vasodilators: hydralazine (reflex tachycardia — drug-induced lupus), sodium nitroprusside (hypertensive emergency; cyanide toxicity), minoxidil (topical — hair growth)",
        "Choice: uncomplicated HTN — thiazide or ACE inhibitor or CCB; with diabetes — ACE inhibitor; with BPH — α1-blocker; with angina — β-blocker; with HF — ACE/ARB + β-blocker + diuretic; pregnancy — methyldopa, labetalol, nifedipine"
      ],
      textbookRef: "Katzung 15e — Ch. 11, pp. 155–170"
    },
    {
      id: "pharm-chf",
      title: "Drugs for CHF — Digoxin, ACE Inhibitors, Diuretics",
      branch: "cvs-pharm",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-antihypertensives"],
      description:
        "Pathophysiology of CHF, drug classes — ACE/ARB, β-blockers, diuretics, digoxin, newer agents.",
      keyPoints: [
        "ACE inhibitors / ARBs — reduce afterload + preload; reduce remodeling; mortality benefit; first-line",
        "β-blockers (carvedilol, metoprolol succinate, bisoprolol) — counteract sympathetic overactivation; mortality benefit; start LOW dose, titrate slowly; only in stable CHF",
        "Diuretics — loop diuretics (furosemide, torsemide) for symptomatic relief (pulmonary congestion); spironolactone / eplerenone for class III–IV — mortality benefit",
        "Digoxin — inhibits Na+/K+ ATPase → ↑intracellular Na+ → ↓Na+/Ca²⁺ exchange → ↑intracellular Ca²⁺ → ↑contractility; also enhances vagal tone (↓AV conduction) — useful in AF + CHF",
        "Digoxin PK: narrow TI; t½ 36 hours; renally excreted; protein binding 25%",
        "Digoxin S/E: arrhythmias (VT, AV block — look for 'regularize' of AF), GI (nausea, vomiting), visual (yellow-green halos — xanthopsia), confusion",
        "Digoxin toxicity precipitants: hypokalemia (diuretics!), hypomagnesemia, hypercalcemia, renal failure, hypothyroidism, amiodarone, verapamil, quinidine",
        "Digoxin antibody (Digibind) — for severe toxicity; dose based on body burden",
        "Acute LVF — IV furosemide + IV morphine + IV nitroglycerine + oxygen + position upright; digoxin if AF",
        "Nesiritide — recombinant BNP; vasodilator; acute decompensated HF",
        "Ivabradine — If channel inhibitor; reduces HR; HFrEF with HR > 75 despite β-blocker",
        "SGLT2 inhibitors (dapagliflozin, empagliflozin) — mortality benefit in HFrEF, even without diabetes"
      ],
      textbookRef: "Katzung 15e — Ch. 13, pp. 195–209"
    },
    {
      id: "pharm-antianginal",
      title: "Antianginal Drugs — Nitrates, β-blockers, CCBs",
      branch: "cvs-pharm",
      tier: 2,
      xp: 120,
      marks: "Long Answer",
      highYield: 4,
      prerequisites: ["pharm-antihypertensives"],
      description:
        "Drug classes for chronic stable angina, MOA of nitrates, combination therapy.",
      keyPoints: [
        "Nitrates (nitroglycerin, isosorbide dinitrate/mononitrate) — NO donor → ↑cGMP → myosin light chain dephosphorylation → smooth muscle relaxation; venous > arteriolar dilation → ↓preload",
        "Nitroglycerin — sublingual 0.4 mg for acute attack; onset 1–3 min; duration 30 min; sustained-release oral/transdermal for prophylaxis",
        "Nitrate S/E: headache, flushing, hypotension, reflex tachycardia; tolerance (8–12 hr nitrate-free interval needed)",
        "Nitrate CI: right ventricular infarction, severe aortic stenosis, HOCM; sildenafil (PDE-5) co-administration → severe hypotension",
        "β-blockers — ↓HR, ↓contractility → ↓O2 demand; first-line for chronic angina; do not stop abruptly (rebound)",
        "CCBs — DHPs (amlodipine) cause vasodilation; non-DHPs (verapamil, diltiazem) ↓HR + contractility; useful if β-blocker CI",
        "Verapamil vs Nifedipine — verapamil cardiac depressant (↓HR, ↓contractility); nifedipine vasodilator (reflex tachycardia); verapamil useful when HR high, nifedipine when HR low",
        "Aspirin — antiplatelet (75 mg); statins (lipid lowering + plaque stabilization); ACE inhibitors (post-MI)",
        "Stable angina regimen: aspirin + statin + β-blocker + short-acting nitrate PRN ± CCB",
        "Acute MI: aspirin + clopidogrel + morphine + oxygen + nitrates + β-blocker + ACE inhibitor + statin (MONA-B); reperfusion — PCI or thrombolytics (streptokinase, tPA)"
      ],
      textbookRef: "Katzung 15e — Ch. 12, pp. 181–193"
    },
    {
      id: "pharm-antiarrhythmic",
      title: "Antiarrhythmics — Classification, Adenosine in PSVT",
      branch: "cvs-pharm",
      tier: 3,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-antihypertensives"],
      description:
        "Vaughan-Williams classification, drug choice per arrhythmia, adenosine in PSVT.",
      keyPoints: [
        "Class I — Na+ channel blockers: Ia (quinidine, procainamide — prolong AP), Ib (lidocaine, phenytoin — shorten AP), Ic (flecainide, propafenone — no AP change)",
        "Class II — β-blockers (propranolol, esmolol, metoprolol); ↓AV conduction; AF, SVT",
        "Class III — K+ channel blockers (amiodarone, sotalol, ibutilide); prolong AP; VT, VF, AF",
        "Class IV — CCBs (verapamil, diltiazem); SVT, rate control in AF",
        "Adenosine — A1 receptor agonist; transient AV nodal block; DOC for PSVT (terminated in 90%); dose 6 mg rapid IV push, then 12 mg if needed; S/E: transient asystole, flushing, chest pain (lasts seconds)",
        "Adenosine must be given rapidly (half-life ~10 sec); through central line preferred",
        "Amiodarone — class III but multi-class effects; broad spectrum; long t½ (weeks); S/E: pulmonary fibrosis, thyroid dysfunction (contains iodine), hepatitis, corneal microdeposits, blue-gray skin, QT prolongation",
        "Drugs prolonging QT: class Ia, class III, macrolides, fluoroquinolones, antipsychotics; risk — Torsades de Pointes",
        "Digoxin in atrial flutter — rate control; effect: 'regularizes' AF"
      ],
      textbookRef: "Katzung 15e — Ch. 14, pp. 213–227"
    },
    {
      id: "pharm-hypertensive-emergency",
      title: "Hypertensive Emergency & Pregnancy-Induced HTN",
      branch: "cvs-pharm",
      tier: 3,
      xp: 80,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-antihypertensives"],
      description:
        "IV drugs for hypertensive emergency, drugs for pre-eclampsia/eclampsia.",
      keyPoints: [
        "Hypertensive emergency: BP > 180/120 with target organ damage (encephalopathy, MI, pulmonary edema, aortic dissection, eclampsia, renal failure)",
        "IV drugs: labetalol, nicardipine, nitroprusside (most potent; cyanide toxicity), nitroglycerin (if CAD), esmolol (aortic dissection), hydralazine (pregnancy)",
        "Goal: ↓MAP by 25% in first hour, then to 160/100 in next 2–6 hours",
        "Pregnancy-induced HTN / Pre-eclampsia: methyldopa (safest, long history), labetalol (first-line), nifedipine (avoid sublingual), hydralazine (IV in acute)",
        "Eclampsia: IV magnesium sulfate (also prevents seizures — DOC); monitor for toxicity (loss of reflexes, respiratory depression — calcium gluconate antidote)",
        "CI in pregnancy: ACE inhibitors, ARBs, direct renin inhibitors, nitroprusside, thiazide diuretics (reduce placental perfusion)"
      ],
      textbookRef: "Katzung 15e — Ch. 11, pp. 170–172"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 6 — DRUGS ACTING ON KIDNEY & BLOOD
// ----------------------------------------------------------------------------
const kidneyBloodBranch: SkillBranch = {
  id: "kidney-blood",
  name: "Kidney & Blood Pharmacology",
  icon: "Droplet",
  color: "#ef4444",
  tagline: "Diuretics, Anticoagulants, Hypolipidemics",
  description:
    "Diuretics classification, anticoagulants/antiplatelets/fibrinolytics, hypolipidemics, drugs for anemia.",
  nodes: [
    {
      id: "pharm-diuretics",
      title: "Diuretics — Classification, Furosemide, Thiazides, K+ Sparing",
      branch: "kidney-blood",
      tier: 1,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "Site of action, MOA, S/E of each class; high-ceiling (loop), thiazide, K+ sparing, osmotic, carbonic anhydrase inhibitors.",
      keyPoints: [
        "Carbonic anhydrase inhibitors (acetazolamide) — proximal tubule; ↓H+ secretion; ↓HCO3- reabsorption; metabolic acidosis; uses: glaucoma, altitude sickness, metabolic alkalosis",
        "Loop diuretics (furosemide, bumetanide, torsemide) — inhibit Na-K-2Cl cotransporter in thick ascending limb; most efficacious; high-ceiling",
        "Furosemide S/E: hypokalemia, hypocalcemia, hypomagnesemia, hyperuricemia (gout), ototoxicity (avoid with aminoglycosides), hypovolemia; metabolic alkalosis",
        "Furosemide uses: pulmonary edema (acute LVF), CHF, cirrhosis with ascites, nephrotic syndrome, renal failure, hypercalcemia (with saline)",
        "Thiazides (hydrochlorothiazide, chlorthalidone) — inhibit Na-Cl cotransporter in distal convoluted tubule; moderate efficacy",
        "Thiazide S/E: hypokalemia, hyperuricemia, hyperglycemia, hyperlipidemia, hypercalcemia (unlike loops), hyponatremia",
        "Thiazide uses: HTN (first-line in elderly), mild CHF, idiopathic hypercalciuria (prevents stones), nephrogenic diabetes insipidus (paradoxical)",
        "K+ sparing (spironolactone, eplerenone, amiloride, triamterene) — late distal tubule + collecting duct",
        "Spironolactone — aldosterone receptor antagonist; uses: CHF (mortality benefit), ascites, primary hyperaldosteronism, resistant HTN; S/E: hyperkalemia, gynecomastia, antiandrogen effects",
        "Osmotic diuretics (mannitol) — freely filtered; not reabsorbed; draws water; uses: cerebral edema, raised ICP, acute angle closure glaucoma, prevention of AKI",
        "Mannitol — CI: pulmonary edema, severe dehydration, anuria",
        "Furosemide vs Acetazolamide: furosemide high-ceiling, ↑urine Na+K+Ca²⁺Mg²⁺, hyperuricemia, ↓Ca²⁺; acetazolamide ↑urine HCO3- + K+ + Na+, metabolic acidosis, ↓intraocular pressure"
      ],
      textbookRef: "Katzung 15e — Ch. 15, pp. 229–242"
    },
    {
      id: "pharm-anticoagulants",
      title: "Anticoagulants — Heparin vs Warfarin",
      branch: "kidney-blood",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "Classification, MOA, PK, monitoring, antidotes, comparison of heparin and warfarin.",
      keyPoints: [
        "Classification: parenteral (heparin, LMWH — enoxaparin, fondaparinux), oral (warfarin, DOACs — dabigatran, rivaroxaban, apixaban)",
        "Heparin — potentiates antithrombin III → inactivates thrombin (IIa) and factor Xa; immediate onset; IV/SC; does NOT cross placenta (safe in pregnancy)",
        "Heparin monitoring: aPTT (target 1.5–2.5× control)",
        "Heparin S/E: bleeding, thrombocytopenia (HIT — IgG against PF4-heparin complex; platelets fall 5–14 days; switch to argatroban/danaparoid), osteoporosis (long-term), hyperkalemia",
        "Heparin antidote: protamine sulfate (1 mg per 100 U heparin)",
        "LMWH (enoxaparin) — more anti-Xa than anti-IIa; more predictable; SC; no routine monitoring; lower HIT risk; partially reversed by protamine",
        "Warfarin — inhibits vitamin K epoxide reductase → ↓γ-carboxylation of factors II, VII, IX, X, proteins C & S; oral; delayed onset (4–5 days); crosses placenta (teratogen)",
        "Warfarin monitoring: PT/INR (target INR 2–3 for most; 2.5–3.5 for mechanical valves)",
        "Warfarin antidote: vitamin K (slow), FFP (immediate), PCC (faster)",
        "Warfarin S/E: bleeding, teratogenicity (1st trimester — nasal hypoplasia, CNS abnormalities; 3rd trimester — fetal hemorrhage), skin necrosis (early — due to reduced protein C), purple toe syndrome",
        "Numerous drug interactions: enzyme inducers (rifampicin, phenytoin, carbamazepine) ↓warfarin effect; enzyme inhibitors (erythromycin, metronidazole, fluconazole, amiodarone, cimetidine) ↑warfarin effect"
      ],
      textbookRef: "Katzung 15e — Ch. 34, pp. 590–602"
    },
    {
      id: "pharm-antiplatelets",
      title: "Antiplatelets & Fibrinolytics — Aspirin, Clopidogrel, Streptokinase",
      branch: "kidney-blood",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-anticoagulants"],
      description:
        "Antiplatelet classification, MOA, fibrinolytics in acute MI.",
      keyPoints: [
        "Antiplatelets: aspirin (COX-1 inhibitor — irreversible; ↓TXA2; 75 mg), clopidogrel, prasugrel, ticagrelor (P2Y12 ADP receptor antagonists), abciximab, eptifibatide, tirofiban (GP IIb/IIIa antagonists — IV; PCI)",
        "Clopidogrel — prodrug (CYP2C19 activation); once daily; S/E: bleeding, rarely TTP; CI: active bleeding",
        "Aspirin + clopidogrel — dual antiplatelet therapy (DAPT) post-stent placement (12 months)",
        "Dipyridamole — PDE inhibitor + adenosine uptake; stroke prevention (with aspirin)",
        "Fibrinolytics: streptokinase, urokinase, alteplase (rt-PA), tenecteplase, reteplase",
        "Streptokinase — bacterial protein; antigenic (cannot repeat within 6 months — antistreptococcal antibodies); hypotension; cheap",
        "Alteplase (rt-PA) — recombinant; non-antigenic; more expensive; preferred if previous streptokinase exposure",
        "Indications: acute STEMI (< 12 hours, if PCI not available), massive PE, acute ischemic stroke (< 4.5 hours), massive DVT (selected)",
        "CI for fibrinolytics: active bleeding, recent surgery, hemorrhagic stroke history, intracranial neoplasm, severe HTN",
        "Antifibrinolytics: tranexamic acid, aminocaproic acid — inhibit plasminogen activation; trauma, postpartum hemorrhage, menorrhagia"
      ],
      textbookRef: "Katzung 15e — Ch. 34, pp. 603–610"
    },
    {
      id: "pharm-hypolipidemics",
      title: "Hypolipidemic Drugs — Statins, Ezetimibe, Fibrates",
      branch: "kidney-blood",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "Statin mechanism, cardioprotective effect, other lipid-lowering agents.",
      keyPoints: [
        "Statins (atorvastatin, rosuvastatin, simvastatin) — HMG-CoA reductase inhibitors; ↓LDL (35–55%); ↑HDL (5–10%); ↓TG (mild); cardioprotective (plaque stabilization, anti-inflammatory, endothelial improvement)",
        "Statin S/E: myopathy (creatine kinase ↑), rhabdomyolysis (rare), hepatotoxicity (transaminitis), diabetes (slight ↑risk)",
        "Statins CI: pregnancy, active liver disease",
        "Rosuvastatin — most potent LDL reduction; hydrophilic; less hepatic metabolism",
        "Ezetimibe — inhibits Niemann-Pick C1-Like 1 (NPC1L1) at brush border; ↓cholesterol absorption; LDL reduction 15–20%; add-on to statins",
        "Fibrates (fenofibrate, gemfibrozil) — PPAR-α agonists; ↓TG (35–50%); ↑HDL; LDL effect variable; uses: hypertriglyceridemia (TG > 500 to prevent pancreatitis)",
        "Fibrate S/E: myopathy (especially gemfibrozil + statin — use fenofibrate instead), gallstones, ↑creatinine",
        "Bile acid sequestrants (cholestyramine, colestipol) — ↓LDL 15–25%; binds bile acids in gut → ↑hepatic conversion of cholesterol to bile acids; S/E: GI, ↑TG (CI if TG high), interferes with drug absorption",
        "PCSK9 inhibitors (alirocumab, evolocumab) — monoclonal antibodies; SC; ↑LDL receptor recycling; very potent LDL reduction (50–60%); familial hypercholesterolemia",
        "Niacin — ↓LDL, ↑HDL, ↓TG; S/E: flushing (prostaglandin-mediated; prevented by aspirin), hyperglycemia, hyperuricemia, hepatotoxicity"
      ],
      textbookRef: "Katzung 15e — Ch. 35, pp. 615–626"
    },
    {
      id: "pharm-anemia-drugs",
      title: "Drugs for Anemia — Iron, B12, Folate, Erythropoietin",
      branch: "kidney-blood",
      tier: 2,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "Oral vs parenteral iron therapy, vitamin B12, folate, erythropoietin.",
      keyPoints: [
        "Oral iron — ferrous sulfate, ferrous fumarate, ferrous gluconate; 200 mg elemental iron/day; elemental iron ~65 mg per 325 mg ferrous sulfate",
        "Oral iron absorption: duodenum (ferrous form), enhanced by vitamin C, gastric acid; inhibited by antacids, calcium, tetracycline, tea, phytates",
        "Oral iron S/E: GI upset, constipation, black stools, metallic taste",
        "Parenteral iron — iron dextran (test dose — anaphylaxis), iron sucrose, ferric gluconate, ferric carboxymaltose; indications: intolerance, non-compliance, malabsorption, severe anemia in pregnancy, CKD with EPO use",
        "Parenteral iron S/E: anaphylaxis (iron dextran), flushing, hypotension, phlebitis, arthralgia",
        "Iron therapy response: reticulocytosis peaks at 7–10 days; Hb rises 1 g/dL per week; therapy continued 3–6 months after Hb normalization to replenish stores",
        "Vitamin B12 — hydroxocobalamin (preferred), cyanocobalamin; IM in pernicious anemia (1 mg daily for 1 week, then weekly for 1 month, then monthly lifelong)",
        "Folate — oral 5 mg/day; pregnancy (prevents neural tube defects — 400 μg/day pre-conception); megaloblastic anemia",
        "Erythropoietin — recombinant EPO; IV/SC; uses: CKD anemia, chemotherapy-induced, HIV on zidovudine, pre-surgery (autologous blood); CI: uncontrolled HTN; S/E: HTN, thrombosis, ↑risk of tumor growth"
      ],
      textbookRef: "Katzung 15e — Ch. 33, pp. 580–590"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 7 — GIT DRUGS
// ----------------------------------------------------------------------------
const gitPharmBranch: SkillBranch = {
  id: "git-pharm",
  name: "GIT Pharmacology",
  icon: "Pill",
  color: "#f59e0b",
  tagline: "Antiulcer, Antiemetics, Laxatives",
  description:
    "Antiulcer drugs, antiemetics, laxatives, antidiarrheals, ORS, drugs for IBD.",
  nodes: [
    {
      id: "pharm-antiulcer",
      title: "Antiulcer Drugs — PPIs, H2 Blockers, Anti-H. pylori",
      branch: "git-pharm",
      tier: 1,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "Classification, MOA of PPIs and H2 blockers, comparison, anti-H. pylori regimen.",
      keyPoints: [
        "Classification: H2 blockers, PPIs, antacids, mucosal protectants, prostaglandin analogues, antibiotics for H. pylori",
        "H2 blockers (cimetidine, ranitidine, famotidine) — block H2 receptors on parietal cells → ↓cAMP → ↓acid secretion; ranitidine withdrawn in many countries (NDMA contamination)",
        "Cimetidine S/E: gynecomastia (antiandrogen), CYP450 inhibition (↑levels of warfarin, phenytoin, theophylline), confusion in elderly",
        "PPIs (omeprazole, esomeprazole, pantoprazole, rabeprazole, lansoprazole) — irreversible inhibition of H+/K+ ATPase (proton pump); most efficacious acid suppression",
        "PPI S/E: headache, diarrhea, ↑risk of C. difficile, fractures (long-term), B12 deficiency, hypomagnesemia, possible dementia link (debated)",
        "PPIs activated in acidic environment (prodrug) — should be taken 30 min before meals",
        "Antacids — magnesium trisilicate, aluminium hydroxide, calcium carbonate; symptomatic relief; Mg causes diarrhea, Al causes constipation (combined to balance)",
        "Sucralfate — mucosal protectant; complexes with protein in ulcer base; acidic environment required (give 30 min before antacid); CI: dialysis patients (aluminum toxicity)",
        "Misoprostol — PGE1 analogue; prevents NSAID-induced ulcers; abortifacient (CI in pregnancy)",
        "Anti-H. pylori triple therapy: PPI (BD) + amoxicillin (1 g BD) + clarithromycin (500 mg BD) for 14 days; quadruple if resistance — PPI + bismuth + tetracycline + metronidazole",
        "Bismuth — topical antibacterial; coats ulcer; black stools/tongue",
        "Compare ranitidine vs omeprazole: ranitidine reversible H2 block (peak 2–3 hr, duration 12 hr); omeprazole irreversible proton pump block (peak 2–4 hr, duration 24 hr+); omeprazole more efficacious"
      ],
      textbookRef: "Katzung 15e — Ch. 49, pp. 815–830"
    },
    {
      id: "pharm-antiemetics",
      title: "Antiemetics — Classification, Metoclopramide vs Domperidone",
      branch: "git-pharm",
      tier: 2,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-antiulcer"],
      description:
        "Pathophysiology of emesis, drug classes, comparison of metoclopramide and domperidone.",
      keyPoints: [
        "Pathophysiology: CTZ (area postrema — outside BBB), vestibular nucleus, vagal afferents (GI), cerebral cortex → vomiting center",
        "Classification: D2 antagonists, 5-HT3 antagonists, NK1 antagonists, H1 antagonists, M1 antagonists, cannabinoids, corticosteroids, benzodiazepines",
        "D2 antagonists — metoclopramide, domperidone, prochlorperazine, promethazine; CTZ + prokinetic",
        "Metoclopramide — D2 antagonist; crosses BBB; prokinetic (5-HT4 agonist); uses: gastroparesis, PONV, chemotherapy-induced; S/E: EPS (tardive dyskinesia — black box warning), hyperprolactinemia (galactorrhea), sedation",
        "Domperidone — D2 antagonist; does NOT cross BBB; NO EPS; S/E: hyperprolactinemia, QT prolongation, cardiac arrhythmias (especially IV — IV withdrawn)",
        "5-HT3 antagonists (ondansetron, granisetron, palonosetron) — chemotherapy-induced + PONV; S/E: QT prolongation, headache, constipation",
        "NK1 antagonists (aprepitant, fosaprepitant) — substance P; chemotherapy-induced; combined with 5-HT3 + dexamethasone",
        "Antihistamines (promethazine, dimenhydrinate) — motion sickness, vestibular",
        "Anticholinergics (scopolamine, hyoscine) — motion sickness; transdermal patch",
      "Cannabinoids (dronabinol, nabilone) — refractory chemotherapy-induced nausea",
        "Corticosteroids (dexamethasone) — adjunct in chemotherapy; reduces PGs",
        "Benzodiazepines (lorazepam) — anticipatory nausea; reduces anxiety"
      ],
      textbookRef: "Katzung 15e — Ch. 50, pp. 835–848"
    },
    {
      id: "pharm-laxatives",
      title: "Laxatives & Purgatives — Classification, Choice",
      branch: "git-pharm",
      tier: 2,
      xp: 80,
      marks: "Short Note",
      highYield: 3,
      prerequisites: [],
      description:
        "Classification, MOA, choice in different scenarios, S/E.",
      keyPoints: [
        "Bulk-forming (psyllium, methylcellulose, ispaghula) — ↑stool volume; safe; first-line for chronic constipation; take with water; S/E: bloating, esophageal obstruction if not enough water",
        "Stimulant (senna, bisacodyl, picosulfate) — stimulate myenteric plexus; chronic use → colon atony, melanosis coli, dependence",
        "Osmotic (lactulose, Mg salts, PEG) — draw water into lumen; lactulose also for hepatic encephalopathy (lowers ammonia); Mg hydroxide (milk of magnesia)",
        "Stool softener (docusate) — surfactant; lowers surface tension; anal fissures",
        "Lubricant (liquid paraffin) — coats stool; CI: elderly (aspiration pneumonia), bedtime",
        "Choice: chronic constipation — bulk + osmotic; acute — stimulant; pre-procedural — PEG; hepatic encephalopathy — lactulose; opioid-induced — methyl naltrexone",
        "CI: bowel obstruction, acute abdomen"
      ],
      textbookRef: "Katzung 15e — Ch. 49, pp. 832–835"
    },
    {
      id: "pharm-antidiarrheal",
      title: "Antidiarrheals & ORS",
      branch: "git-pharm",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: [],
      description:
        "Antimotility, adsorbents, ORS composition, antimicrobials in diarrhea.",
      keyPoints: [
        "ORS (WHO reduced osmolarity): Na+ 75 mmol/L, glucose 75 mmol/L, K+ 20 mmol/L, citrate 10 mmol/L, Cl- 65 mmol/L; total osmolarity 245 mOsm/L",
        "Oral rehydration salt — exploits SGLT1 (sodium-glucose cotransporter); glucose enhances Na+ and water absorption; even in secretory diarrhea",
        "Rice-based ORS — reduces stool volume in cholera",
        "Antimotility: loperamide (μ-opioid agonist; does not cross BBB; first-line for non-infective diarrhea); CI: dysentery, C. difficile (toxic megacolon)",
        "Diphenoxylate + atropine — μ-opioid; atropine added to discourage abuse",
        "Adsorbents: smectite, kaolin, pectin — bind toxins; reduce stool frequency",
        "Racecadotril — enkephalinase inhibitor; ↑enkephalins → ↓cAMP → ↓secretion; antisecretory",
        "Bismuth subsalicylate — antibacterial + antisecretory; travelers' diarrhea; black stools/tongue",
        "Probiotics (Lactobacillus, Saccharomyces boulardii) — reduce duration of viral diarrhea",
        "Zinc supplementation — reduces duration and severity in children (WHO recommendation)",
        "Antimicrobials — only for: dysentery (Shigella — ciprofloxacin/azithromycin), cholera (doxycycline, azithromycin), traveler's diarrhea (fluoroquinolone or azithromycin), severe diarrhea with fever/blood"
      ],
      textbookRef: "Katzung 15e — Ch. 49, pp. 840–845; WHO Guidelines"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 8 — ENDOCRINE PHARMACOLOGY
// ----------------------------------------------------------------------------
const endoPharmBranch: SkillBranch = {
  id: "endo-pharm",
  name: "Endocrine Pharmacology",
  icon: "Sparkles",
  color: "#d946ef",
  tagline: "Insulin, Steroids, Thyroid, OCPs",
  description:
    "Insulin & oral hypoglycemics, corticosteroids, thyroid drugs, OCPs, SERMs, osteoporosis drugs.",
  nodes: [
    {
      id: "pharm-insulin",
      title: "Insulin Preparations & Oral Hypoglycemics — Metformin",
      branch: "endo-pharm",
      tier: 1,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "Insulin classification, MOA, oral hypoglycemic classification, metformin details.",
      keyPoints: [
        "Insulin MOA — binds receptor (tyrosine kinase); ↓blood glucose (↑glucose uptake in muscle/fat, ↓hepatic gluconeogenesis, ↓lipolysis, ↑glycogen synthesis)",
        "Insulin classification by onset/duration:",
        "  Rapid-acting (lispro, aspart, glulisine) — 15 min, 3–5 hr",
        "  Short-acting (regular) — 30 min, 6–8 hr; only IV form",
        "  Intermediate (NPH/isophane) — 1–2 hr, 12–18 hr",
        "  Long-acting (glargine, detemir, degludec) — 1 hr, 24 hr+",
        "Insulin uses: type 1 DM, type 2 DM (when OHA fails, in stress, surgery, pregnancy), DKA, hyperosmolar coma, gestational DM",
        "Insulin S/E: hypoglycemia (sweating, tremor, confusion → seizures), weight gain, lipodystrophy at injection sites, insulin resistance, allergy (rare)",
        "Oral hypoglycemics: biguanides (metformin), sulfonylureas (glipizide, glimepiride, glibenclamide), meglitinides (repaglinide), thiazolidinediones (pioglitazone), α-glucosidase inhibitors (acarbose), DPP-4 inhibitors (sitagliptin), SGLT2 inhibitors (empagliflozin)",
        "Metformin — ↑insulin sensitivity; ↓hepatic gluconeogenesis; first-line in type 2 DM (especially obese)",
        "Metformin S/E: GI (anorexia, diarrhea — common), lactic acidosis (rare but serious; CI in renal failure, hypoxia, dehydration), vitamin B12 deficiency",
        "Metformin CI: eGFR < 30, severe hepatic/renal disease, hypoxia, alcoholism, contrast media (withhold 48 hr)",
        "Sulfonylureas (glipizide) — close K-ATP channel → depolarization → insulin release; S/E: hypoglycemia, weight gain, SIADH",
        "SGLT2 inhibitors (empagliflozin, dapagliflozin) — ↓glucose reabsorption in PCT; cardiovascular benefit; S/E: UTI, genital mycotic infection, euglycemic DKA",
        "DPP-4 inhibitors (sitagliptin) — prolong GLP-1 (incretin); weight-neutral; well-tolerated",
        "GLP-1 agonists (liraglutide, semaglutide) — SC; ↑insulin, ↓glucagon, ↓gastric emptying, ↓appetite; weight loss"
      ],
      textbookRef: "Katzung 15e — Ch. 41, pp. 743–760"
    },
    {
      id: "pharm-dka",
      title: "Diabetic Ketoacidosis — Oral Therapy",
      branch: "endo-pharm",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-insulin"],
      description:
        "Stepwise management of DKA — fluids, insulin, potassium, monitoring.",
      keyPoints: [
        "Pathophysiology — absolute insulin deficiency → ↑lipolysis → ↑free fatty acids → ↑ketogenesis → metabolic acidosis",
        "Clinical: Kussmaul breathing, ketotic (fruity) breath, dehydration, vomiting, abdominal pain, altered sensorium",
        "Lab: glucose > 250 mg/dL, pH < 7.3, HCO3 < 15 mEq/L, anion gap ↑, ketonuria/ketonemia",
        "Management principles:",
        "  1. Fluids — normal saline 1L in first hour, then 250–500 mL/hr; correct dehydration",
        "  2. Insulin — regular insulin 0.1 U/kg/hr IV infusion (NOT bolus); keep glucose dropping 50–75 mg/dL/hr",
        "  3. Potassium — start when K+ < 5.5 mEq/L; 20–30 mEq/L of fluid; insulin shifts K+ intracellularly",
        "  4. Switch to D5½NS when glucose < 200 mg/dL",
        "  5. Bicarbonate — only if pH < 6.9",
        "  6. Treat underlying cause (infection, MI, non-compliance)",
        "  7. Monitor — glucose hourly, electrolytes/ABG every 2–4 hr",
        "Avoid: subcutaneous insulin until stable; rapid correction of glucose (cerebral edema)"
      ],
      textbookRef: "Katzung 15e — Ch. 41, pp. 760–763"
    },
    {
      id: "pharm-corticosteroids",
      title: "Corticosteroids — Glucocorticoids, Uses, S/E, CI",
      branch: "endo-pharm",
      tier: 2,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-insulin"],
      description:
        "Glucocorticoid classification, MOA, physiological effects, uses, S/E, HPA suppression, withdrawal.",
      keyPoints: [
        "Classification: short-acting (hydrocortisone, cortisol — 8–12 hr), intermediate (prednisolone, methylprednisolone, triamcinolone — 12–36 hr), long-acting (dexamethasone, betamethasone — 36–72 hr)",
        "Mineralocorticoid activity: hydrocortisone > prednisolone > dexamethasone (none)",
        "MOA — bind intracellular glucocorticoid receptor; translocate to nucleus; ↑anti-inflammatory genes (lipocortin, IκB); ↓pro-inflammatory genes (cytokines, COX-2, iNOS)",
        "Physiological effects: permissive for catecholamines; ↑blood glucose (gluconeogenesis), ↑protein catabolism, ↑lipolysis, ↓Ca²⁺ absorption, ↑urate retention, anti-inflammatory, immunosuppressive",
        "Uses: asthma, COPD exacerbation, rheumatoid arthritis, SLE, glomerulonephritis, transplant rejection, severe sepsis (debated), cerebral edema (dexamethasone), congenital adrenal hyperplasia, Addision's replacement, nephrotic syndrome, immune cytopenias",
        "Glucocorticoid in TB — controversial; only if severe TB with adrenal insufficiency, TB meningitis (reduces neurological sequelae), or immune reconstitution inflammatory syndrome; always with anti-TB therapy",
        "S/E: iatrogenic Cushing's (moon face, buffalo hump, central obesity, striae), hyperglycemia, osteoporosis (↑bone resorption, ↓formation), HPA suppression (withdrawal → adrenal crisis), peptic ulcer (especially with NSAIDs), opportunistic infections, cataracts, glaucoma, myopathy, psychosis, growth retardation in children, impaired wound healing",
        "HPA axis suppression — occurs with > 3 weeks of > 7.5 mg prednisolone daily; recovery takes 6–12 months",
        "Withdrawal — taper slowly; if > 3 weeks therapy or high dose, reduce 10% every 1–2 weeks; consider ACTH stimulation test",
        "CI: active infections (especially TB, fungal, herpes), peptic ulcer, diabetes, osteoporosis, hypertension, psychoses, pregnancy (relative)",
        "Prednisone — prodrug; converted to prednisolone in liver"
      ],
      textbookRef: "Katzung 15e — Ch. 39, pp. 720–732"
    },
    {
      id: "pharm-antithyroid",
      title: "Anti-Thyroid Drugs & Radioactive Iodine",
      branch: "endo-pharm",
      tier: 2,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-insulin"],
      description:
        "Classification, MOA of thionamides, beta-blockers, iodine, radioactive iodine.",
      keyPoints: [
        "Classification: thionamides (methimazole/carbimazole, propylthiouracil), iodine compounds, β-blockers, radioactive iodine (I-131)",
        "Methimazole (carbimazole — prodrug) — inhibits thyroid peroxidase (TPO); ↓T3/T4 synthesis; first-line except 1st trimester pregnancy",
        "Propylthiouracil (PTU) — inhibits TPO AND 5'-deiodinase (peripheral T4 → T3); first-line in 1st trimester pregnancy + thyroid storm; hepatotoxic — second-line otherwise",
        "Thionamide S/E: agranulocytosis (sore throat — STOP drug + CBC), hepatotoxicity (PTU), rash, arthralgia, ANCA vasculitis (PTU)",
        "Iodine (Lugol's solution, KI) — Wolff-Chaikoff effect; high doses inhibit hormone release; used pre-operatively (reduces vascularity) and in thyroid storm",
        "β-blockers (propranolol) — symptomatic relief; blocks peripheral T4 → T3 conversion at high doses; useful in thyroid storm",
        "Radioactive iodine (I-131) — oral; ablates thyroid tissue; definitive treatment for Graves' in adults (except pregnancy/lactation); S/E: hypothyroidism (eventual); ophthalmopathy may worsen",
        "Thyroid storm management: IV propranolol + PTU + iodine (after 1 hour of PTU) + IV hydrocortisone + cooling + treat precipitant",
        "Thionamides in pregnancy: PTU in 1st trimester (methimazole teratogenic — aplasia cutis, choanal atresia); switch to methimazole in 2nd-3rd trimester (PTU hepatotoxicity)",
        "Levothyroxine — synthetic T4; replacement therapy; convert to T3 peripherally; monitor TSH"
      ],
      textbookRef: "Katzung 15e — Ch. 38, pp. 705–718"
    },
    {
      id: "pharm-steroids-repro",
      title: "OCPs, SERMs, Oxytocin, Tocolytics, Anabolic Steroids",
      branch: "endo-pharm",
      tier: 3,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-corticosteroids"],
      description:
        "Combined OCPs, SERMs (tamoxifen, clomiphene, raloxifene), oxytocin vs ergometrine, tocolytics.",
      keyPoints: [
        "Combined OCPs — estrogen + progestin; MOA: ↓LH (ovulation), ↓FSH (follicle development), thickens cervical mucus, ↓endometrial receptivity, alters tubal motility",
        "OCP S/E: nausea, breast tenderness, headache, breakthrough bleeding, weight gain, mood changes, melasma, VTE risk (estrogen-dependent), hypertension",
        "OCP CI: pregnancy, history of VTE/stroke, migraine with aura, smoker > 35, breast/endometrial cancer, severe hepatic disease, uncontrolled hypertension",
        "OCP benefits: ↓ovarian + endometrial cancer, regular cycles, ↓dysmenorrhea, ↓menorrhagia, ↓PMS, treats PCOS, ↓ectopic pregnancy, ↓pelvic infection",
        "Progestin-only pills — safer in lactation, smokers, VTE risk; less effective; irregular bleeding",
        "Emergency contraception — levonorgestrel 1.5 mg within 72 hr (or ulipristal 30 mg up to 120 hr); MOA: delays/inhibits ovulation; NOT abortifacient",
        "SERM: tamoxifen (anti-estrogen in breast, agonist in uterus/bone — breast cancer, ↑endometrial cancer, ↓osteoporosis), raloxifene (anti-estrogen in breast + uterus, agonist in bone — osteoporosis, breast cancer prevention, NO endometrial cancer risk), clomiphene (anti-estrogen in hypothalamus → ↑FSH/LH → ovulation induction — infertility)",
        "Aromatase inhibitors (anastrozole, letrozole) — block peripheral estrogen synthesis; postmenopausal breast cancer; letrozole also off-label for ovulation induction in PCOS",
        "Oxytocin — uterotonic; ↑uterine contractions (only at term); induction of labor, PPH; S/E: water intoxication (antidiuretic effect), uterine rupture if overstimulated",
        "Ergometrine — uterotonic; sustained contraction; PPH; CI: hypertension, preeclampsia, multiple pregnancy, retained placenta (contraction traps placenta)",
        "Oxytocin vs ergometrine: oxytocin rapid, brief, physiological-like contractions (labor induction); ergometrine sustained tetanic contraction (PPH, not for labor induction); oxytocin safe in hypertension, ergometrine CI",
        "Tocolytics — delay preterm labor: atosiban (oxytocin antagonist), nifedipine, indomethacin (24–32 weeks), magnesium sulfate (neuroprotection < 32 weeks), terbutaline (short-term)",
        "Anabolic steroids (nandrolone, oxymetholone, stanozolol) — androgen receptor agonists; uses: chronic catabolic states, anemia (renal), hereditary angioedema; S/E: virilization in women, gynecomastia in men (aromatization), hepatotoxicity (17-α alkylated), dyslipidemia, behavioral changes, dependence"
      ],
      textbookRef: "Katzung 15e — Ch. 40, pp. 705–720"
    },
    {
      id: "pharm-osteoporosis",
      title: "Drugs for Osteoporosis — Bisphosphonates, Calcium",
      branch: "endo-pharm",
      tier: 3,
      xp: 80,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-corticosteroids"],
      description:
        "Bisphosphonates, SERMs, denosumab, teriparatide, calcium + vitamin D.",
      keyPoints: [
        "Bisphosphonates (alendronate, risedronate, zoledronate) — ↓osteoclast activity; first-line for osteoporosis",
        "MOA — incorporated into bone; taken up by osteoclasts → inhibit farnesyl pyrophosphate synthase → osteoclast apoptosis",
        "S/E: esophagitis (must take on empty stomach, with water, remain upright 30 min), osteonecrosis of jaw (rare, with IV high dose in cancer), atypical femoral fracture (long-term), hypocalcemia",
        "Zoledronate — IV annual; useful in non-compliant patients",
        "Calcium + vitamin D — adjunctive; required for bisphosphonate efficacy",
        "Raloxifene — SERM; postmenopausal osteoporosis; reduces vertebral fractures; ↓breast cancer",
        "Denosumab — monoclonal antibody against RANK-L; SC every 6 months; potent anti-resorptive",
        "Teriparatide — recombinant PTH (1-34); ANABOLIC — ↑bone formation; daily SC for 2 years max; severe osteoporosis; CI: bone malignancy, hypercalcemia",
        "Calcitonin — salmon calcitonin; second-line; acute vertebral fracture pain relief",
        "Hormone replacement therapy (HRT) — estrogen ± progestin; effective but ↑risk of breast cancer, VTE, stroke; not first-line"
      ],
      textbookRef: "Katzung 15e — Ch. 42, pp. 763–775"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 9 — ANTIMICROBIAL AGENTS (Largest)
// ----------------------------------------------------------------------------
const antimicrobialBranch: SkillBranch = {
  id: "antimicrobial",
  name: "Antimicrobial Agents",
  icon: "Biohazard",
  color: "#84cc16",
  tagline: "Antibiotics, Antifungals, Antivirals, Antiparasitics",
  description:
    "β-lactams, aminoglycosides, macrolides, tetracyclines, fluoroquinolones, antifungals, antivirals (HIV, TB, malaria).",
  nodes: [
    {
      id: "pharm-beta-lactams",
      title: "β-Lactam Antibiotics — Penicillins & Cephalosporins",
      branch: "antimicrobial",
      tier: 1,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: [],
      description:
        "Classification, MOA, spectrum, S/E, β-lactamase inhibitors, generations of cephalosporins.",
      keyPoints: [
        "MOA — bind PBPs (penicillin-binding proteins); inhibit transpeptidation (cross-linking of peptidoglycan); bactericidal; only active against dividing bacteria",
        "Penicillins:",
        "  Natural: penicillin G (IV/IM), penicillin V (oral) — narrow spectrum; syphilis, strep, sensitive pneumococci",
        "  Antistaphylococcal: cloxacillin, dicloxacillin, nafcillin, oxacillin — β-lactamase resistant (bulky side chain); MRSA NOT covered",
        "  Extended: ampicillin, amoxicillin — broader (enterococci, Listeria, H. influenzae); amoxicillin better oral absorption",
        "  Antipseudomonal: piperacillin, ticarcillin — Pseudomonas, Klebsiella",
        "Penicillin G vs Amoxicillin — amoxicillin has broader spectrum (H. influenzae, E. coli, enterococci), better oral absorption, less frequent dosing; penicillin G narrow but for syphilis, rheumatic fever prophylaxis",
        "β-lactamase inhibitors: clavulanic acid, sulbactam, tazobactam — irreversible β-lactamase inhibitors; no intrinsic antibacterial activity; combined with amoxicillin (co-amoxiclav), ampicillin (sultamicillin), piperacillin (tazocin)",
        "Cephalosporins — generations progressively ↑gram-negative, ↓gram-positive coverage:",
        "  1st (cephalexin, cefazolin) — gram-positive (staph, strep); surgical prophylaxis (cefazolin)",
        "  2nd (cefuroxime, cefoxitin) — adds H. influenzae, Enterobacter, anaerobes (cefoxitin)",
        "  3rd (ceftriaxone, cefotaxime, ceftazidime) — broad gram-negative; ceftriaxone (once daily; meningitis, gonorrhea, typhoid); ceftazidime — Pseudomonas",
        "  4th (cefepime) — broad spectrum including Pseudomonas + gram-positive",
        "  5th (ceftaroline) — MRSA coverage",
        "Cephalosporin S/E: allergy (10% cross-reactivity with penicillin), nephrotoxicity (older agents), C. difficile (3rd gen), disulfiram-like reaction (cefotetan, ceftriaxone), biliary sludging (ceftriaxone)",
        "Penicillin S/E: allergy (rash to anaphylaxis), hypersensitivity, jarisch-Herxheimer (syphilis treatment — dead spirochetes release cytokines), diarrhea, C. difficile",
        "Carbapenems (imipenem-cilastatin, meropenem, ertapenem, doripenem) — broadest spectrum; reserved for resistant gram-negatives (ESBL, Acinetobacter); seizure risk with imipenem (cilastatin prevents renal metabolism)"
      ],
      textbookRef: "Katzung 15e — Ch. 43, pp. 775–790"
    },
    {
      id: "pharm-aminoglycosides",
      title: "Aminoglycosides — Gentamicin, Streptomycin, Amikacin",
      branch: "antimicrobial",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "MOA, spectrum, S/E, monitoring, once-daily dosing.",
      keyPoints: [
        "MOA — bind 30S ribosomal subunit; inhibit protein synthesis; bactericidal; require oxygen-dependent uptake (anaerobes intrinsically resistant)",
        "Classification: gentamicin, tobramycin, amikacin, netilmicin, streptomycin, neomycin (topical only — too toxic systemic)",
        "Spectrum: gram-negative aerobes (E. coli, Klebsiella, Pseudomonas); streptomycin — TB, plague, tularemia; gentamicin + penicillin — synergy for enterococci, viridans strep",
        "Pharmacokinetics: poorly absorbed orally; given IV/IM; renal excretion; need dose adjustment in renal failure",
        "S/E: nephrotoxicity (proximal tubular damage — usually reversible), ototoxicity (vestibular first for gentamicin; cochlear for amikacin — irreversible), neuromuscular blockade (rare; magnesium potentiation; myasthenia worsens)",
        "Once-daily dosing — concentration-dependent killing + post-antibiotic effect; less nephrotoxic than divided doses; monitor trough levels (< 2 μg/mL for gentamicin)",
        "CI: pregnancy (8th nerve damage), myasthenia gravis, renal failure (relative — adjust dose)",
        "Risk factors for toxicity: advanced age, prior aminoglycoside, loop diuretics, dehydration, concurrent nephrotoxic drugs (vancomycin, amphotericin B, cisplatin)"
      ],
      textbookRef: "Katzung 15e — Ch. 45, pp. 800–806"
    },
    {
      id: "pharm-tetracyclines",
      title: "Tetracyclines & Tigecycline",
      branch: "antimicrobial",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "MOA, spectrum, doxycycline uses, S/E, tigecycline.",
      keyPoints: [
        "MOA — bind 30S ribosomal subunit; inhibit protein synthesis (aminoacyl-tRNA entry); bacteriOSTATIC",
        "Drugs: tetracycline, doxycycline, minocycline, tigecycline (glycylcycline)",
        "Spectrum: atypicals (Chlamydia, Mycoplasma, Rickettsia, Legionella), Brucella, Vibrio, Borrelia (Lyme), Helicobacter, Plasmodium, acne (Propionibacterium acnes)",
        "Doxycycline — once/twice daily; first-line for: rickettsial fevers, cholera, chlamydia, Lyme disease, leptospirosis, melioidosis, malaria prophylaxis, acne; safer in renal failure (hepatic excretion)",
        "Tigecycline — broad spectrum including MRSA, VRE, ESBL; NOT for Pseudomonas or Proteus; CI: pregnancy, children < 8; FDA warning — ↑mortality in severe infections",
        "S/E: GI (nausea, diarrhea), photosensitivity, hepatotoxicity (high dose IV), renal (Fanconi with outdated tetracycline), vestibular (minocycline), teeth discoloration + bone growth retardation in children < 8 and fetus",
        "Drug interactions: divalent/trivalent cations (Ca²⁺, Mg²⁺, Fe²⁺, Al³⁺, Zn²⁺) — reduce absorption (antacids, milk, iron); warfarin (↑INR)",
        "CI: pregnancy, breastfeeding, children < 8 years"
      ],
      textbookRef: "Katzung 15e — Ch. 44, pp. 795–799"
    },
    {
      id: "pharm-macrolides",
      title: "Macrolides — Erythromycin, Azithromycin, Clarithromycin",
      branch: "antimicrobial",
      tier: 2,
      xp: 100,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "MOA, spectrum, macrolide classification, S/E, drug interactions.",
      keyPoints: [
        "MOA — bind 50S ribosomal subunit; inhibit translocation (transpeptidation); bacteriOSTATIC",
        "Drugs: erythromycin (short half-life, more S/E), azithromycin (long t½, tissue penetration), clarithromycin",
        "Spectrum: atypicals (Mycoplasma, Chlamydia, Legionella), gram-positive (strep, pneumococcus), Bordetella pertussis, Helicobacter pylori (clarithromycin), MAI (Mycobacterium avium — azithromycin for prophylaxis in HIV)",
        "Macrolides are DOC for: atypical pneumonia, pertussis, diphtheria carriers, Legionella, Chlamydia in pregnancy (instead of doxycycline)",
        "Erythromycin S/E: severe GI irritation (motilin receptor agonist — used as prokinetic), cholestatic jaundice (estolate form — avoid in pregnancy), QT prolongation, ototoxicity (high dose), CYP3A4 inhibition",
        "Drug interactions: CYP3A4 inhibition (erythro > clarithro > azithro) — ↑levels of warfarin, statins (rhabdomyolysis), theophylline, carbamazepine, cyclosporine, digoxin, ergot",
        "Azithromycin — less drug interactions (minimal CYP inhibition); long t½ (68 hr); 3-day course for community-acquired pneumonia",
        "CI: prolonged QT, concurrent statin (relative), severe hepatic disease"
      ],
      textbookRef: "Katzung 15e — Ch. 46, pp. 807–811"
    },
    {
      id: "pharm-fluoroquinolones",
      title: "Fluoroquinolones — Ciprofloxacin, Levofloxacin",
      branch: "antimicrobial",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "MOA, spectrum, S/E, drug interactions, FDA warnings.",
      keyPoints: [
        "MOA — inhibit DNA gyrase (gram-negative) and topoisomerase IV (gram-positive); bactericidal",
        "Drugs: ciprofloxacin (gram-negative + Pseudomonas), levofloxacin, moxifloxacin (respiratory — pneumococcus), norfloxacin (UTI only)",
        "Spectrum: gram-negative (E. coli, Klebsiella, Salmonella, Shigella, Pseudomonas), atypicals (Legionella, Mycoplasma — respiratory FQs), intracellular (Chlamydia, Mycoplasma)",
        "Uses: UTI, gastroenteritis (Salmonella, Shigella, Campylobacter), typhoid (ciprofloxacin), gonorrhea (resistance ↑), respiratory infections (levofloxacin, moxifloxacin), Pseudomonas infections, anthrax (ciprofloxacin)",
        "S/E: GI, CNS stimulation (seizures — lower threshold), tendinopathy (Achilles tendon rupture — especially elderly + steroids), QT prolongation, peripheral neuropathy, aortic aneurysm/dissection (rare), hypoglycemia, photosensitivity, C. difficile",
        "Drug interactions: divalent cations (antacids, iron, calcium, milk) reduce absorption; warfarin (↑INR); theophylline (cipro ↑levels)",
        "FDA warnings: tendon rupture, CNS effects, peripheral neuropathy, QT, aortic rupture; reserve for serious infections; avoid in elderly if alternatives exist",
        "CI: pregnancy, breastfeeding, children < 18 (cartilage damage in animal studies — controversial in humans)",
        "MRSA NOT covered by FQs (except delafloxacin)"
      ],
      textbookRef: "Katzung 15e — Ch. 46, pp. 811–815"
    },
    {
      id: "pharm-misc-abx",
      title: "Vancomycin, Metronidazole, Cotrimoxazole",
      branch: "antimicrobial",
      tier: 2,
      xp: 120,
      marks: "Short Note",
      highYield: 5,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "Three key reserve antibiotics — vancomycin, metronidazole, cotrimoxazole.",
      keyPoints: [
        "Vancomycin — glycopeptide; binds D-Ala-D-Ala terminus of peptidoglycan precursor; inhibits cell wall synthesis; bactericidal; IV for systemic MRSA, oral for C. difficile",
        "Vancomycin S/E: Red Man Syndrome (histamine release — too rapid infusion; not allergy — slow infusion), nephrotoxicity (with aminoglycosides), ototoxicity (high dose), thrombocytopenia",
        "Vancomycin monitoring: trough levels (15–20 μg/mL for serious MRSA); adjust for renal function",
        "Vancomycin resistance: VRE (Enterococcus faecium) — linezolid, daptomycin alternatives",
        "Metronidazole — nitroimidazole; damages DNA (after reduction in anaerobes); bactericidal; spectrum: anaerobes (Bacteroides, Clostridium), protozoa (Giardia, Trichomonas, Entamoeba)",
        "Metronidazole uses: anaerobic infections (intra-abdominal, pelvic abscess, brain abscess), C. difficile colitis (oral), H. pylori (combination), bacterial vaginosis, giardiasis, amoebiasis, trichomoniasis",
        "Metronidazole S/E: GI (metallic taste — characteristic), disulfiram-like reaction with alcohol (avoid alcohol during + 48 hr after), peripheral neuropathy (long-term), encephalopathy (rare)",
        "Cotrimoxazole (trimethoprim + sulfamethoxazole) — sequential inhibition of folate synthesis (sulfamethoxazole inhibits PABA → DHFA; trimethoprim inhibits DHFR → THFA); synergistic; bactericidal",
        "Cotrimoxazole spectrum: gram-positive (staph, strep), gram-negative (E. coli, Salmonella, Shigella, H. influenzae, Pneumocystis jirovecii)",
        "Cotrimoxazole uses: UTI, RTI, typhoid (second-line), Pneumocystis prophylaxis/treatment in HIV, toxoplasmosis prophylaxis, melioidosis, nocardiosis",
        "Cotrimoxazole S/E: Stevens-Johnson syndrome (sulfa allergy), megaloblastic anemia (folate antagonism — give folinic acid), hyperkalemia (trimethoprim — like amiloride), crystalluria (sulfa), photosensitivity",
        "CI: pregnancy (1st trimester — teratogenic; 3rd — kernicterus), neonates (kernicterus), G6PD deficiency (hemolysis)"
      ],
      textbookRef: "Katzung 15e — Ch. 43, pp. 790–795; Ch. 47, pp. 815–820"
    },
    {
      id: "pharm-antifungals",
      title: "Antifungals — Amphotericin B, Azoles, Echinocandins",
      branch: "antimicrobial",
      tier: 3,
      xp: 100,
      marks: "Short Note",
      highYield: 4,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "Polyenes, azoles, echinocandins, allylamines.",
      keyPoints: [
        "Polyenes (amphotericin B, nystatin) — bind ergosterol → pore formation → membrane leak; fungicidal; broad spectrum",
        "Amphotericin B — IV; DOC for severe systemic mycoses (histoplasmosis, cryptococcosis, mucormycosis, visceral leishmaniasis); intrathecal for fungal meningitis",
        "Amphotericin B S/E: infusion reactions (fever, chills — premedicate), nephrotoxicity (major — ↑creatinine, K+ and Mg²⁺ loss), anemia (↓erythropoietin)",
        "Liposomal amphotericin (AmBisome) — less nephrotoxic; more expensive; for patients with renal impairment or intolerant to conventional",
        "Azoles — inhibit lanosterol 14α-demethylase (CYP51) → ↓ergosterol; fungistatic",
        "Fluconazole — excellent CSF penetration; candidiasis, cryptococcal meningitis; S/E: QT prolongation, hepatitis; CYP inhibitor",
        "Itraconazole — broadest spectrum (Aspergillus, Histoplasma, Blastomyces); needs acidic environment for absorption; S/E: HF (negative inotrope), hepatitis",
        "Voriconazole — Aspergillus (DOC); S/E: visual disturbances (transient), photosensitivity, liver, QT",
        "Posaconazole — mucormycosis",
        "Azole interactions: CYP3A4 inhibition (↑statin, warfarin, cyclosporine, tacrolimus, phenytoin levels)",
        "Echinocandins (caspofungin, micafungin, anidulafungin) — inhibit β-1,3-glucan synthase (cell wall); IV only; Candida (including resistant), Aspergillus (salvage); low S/E",
        "Allylamines (terbinafine) — inhibit squalene epoxidase; oral/ topical; dermatophytes (tinea, onychomycosis)",
        "Flucytosine — converted to 5-FU in fungi; bone marrow suppression; only used in combination (with amphotericin for cryptococcal meningitis)"
      ],
      textbookRef: "Katzung 15e — Ch. 48, pp. 825–835"
    },
    {
      id: "pharm-antiviral",
      title: "Antivirals — Anti-HIV (HAART), Anti-HSV, Anti-Hepatitis",
      branch: "antimicrobial",
      tier: 3,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "HIV drug classes, HAART, post-exposure prophylaxis, anti-HSV drugs, hepatitis drugs.",
      keyPoints: [
        "Anti-HIV classes:",
        "  NRTI (nucleoside reverse transcriptase inhibitors) — zidovudine (AZT), lamivudine (3TC), tenofovir (TDF), abacavir, emtricitabine; S/E: lactic acidosis, hepatic steatosis, lipodystrophy (zidovudine), anemia (zidovudine)",
        "  NNRTI — efavirenz, nevirapine, rilpivirine; S/E: rash (Stevens-Johnson), hepatotoxicity, CNS (efavirenz — vivid dreams)",
        "  PI (protease inhibitors) — atazanavir, darunavir, lopinavir/ritonavir; S/E: lipodystrophy, hyperlipidemia, insulin resistance, GI, nephrolithiasis (atazanavir), indirect bilirubin ↑ (atazanavir)",
        "  Integrase inhibitors (INSTI) — raltegravir, dolutegravir, bictegravir; first-line; well-tolerated; S/E: insomnia, weight gain",
        "  CCR5 antagonist — maraviroc; only for CCR5-tropic virus",
        "  Fusion inhibitor — enfuvirtide; SC injections",
        "HAART (Highly Active Anti-Retroviral Therapy) — combination of 3 drugs: 2 NRTI + 1 INSTI (preferred) or 1 NNRTI or 1 PI (boosted with ritonavir)",
        "First-line HAART (current WHO): tenofovir + lamivudine + dolutegravir (TLD)",
        "Ritonavir — boosting agent (potent CYP3A4 inhibitor); low dose boosts other PIs",
        "Post-exposure prophylaxis (PEP) — within 72 hr of exposure; 3-drug regimen for 28 days (TLD)",
        "Pre-exposure prophylaxis (PrEP) — tenofovir + emtricitabine daily (high-risk individuals)",
        "Anti-HSV: acyclovir, valacyclovir (prodrug), famciclovir; MOA — phosphorylated by viral thymidine kinase → acyclovir triphosphate → inhibits viral DNA polymerase; selectively toxic to infected cells; uses — genital herpes, herpes encephalitis, varicella, zoster; IV acyclovir can cause nephrotoxicity (crystal nephropathy — hydrate well)",
        "Anti-CMV: ganciclovir, valganciclovir (more toxic — bone marrow suppression); foscarnet (no TK dependence — for acyclovir-resistant); cidofovir",
        "Anti-hepatitis B: tenofovir, entecavir (first-line); pegylated interferon-α (selected patients)",
        "Anti-hepatitis C: DAAs (direct-acting antivirals) — sofosbuvir, ledipasvir, daclatasvir, velpatasvir; cure rates > 95%",
        "Anti-influenza: oseltamivir (oral), zanamivir (inhaled) — neuraminidase inhibitors; within 48 hr of symptom onset",
        "Remdesivir — IV; COVID-19; nucleotide analogue; inhibits RNA-dependent RNA polymerase"
      ],
      textbookRef: "Katzung 15e — Ch. 49, pp. 850–875"
    },
    {
      id: "pharm-antitb",
      title: "Anti-TB Drugs — Classification, Category I & II Regimens",
      branch: "antimicrobial",
      tier: 3,
      xp: 150,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "First-line drugs, MOA, S/E, RNTCP categories I and II regimens, DOTS strategy.",
      keyPoints: [
        "First-line drugs (essential): rifampicin (R), isoniazid (H), pyrazinamide (Z), ethambutol (E), streptomycin (S)",
        "Rifampicin — inhibits DNA-dependent RNA polymerase (bacterial); bactericidal; S/E: orange-red discoloration of secretions (harmless — warn patient), hepatotoxicity, flu-like syndrome (intermittent dosing), enzyme induction (↓OCP, ↓warfarin, ↓corticosteroid effect); CI: porphyria",
        "Isoniazid — inhibits mycolic acid synthesis (catalase-peroxidase KatG activates INH); bactericidal against dividing bacilli; S/E: peripheral neuropathy (pyridoxine B6 prophylaxis — 10 mg/day), hepatotoxicity (age-related; ↑with rifampicin), drug-induced lupus, seizures in overdose (treat with pyridoxine)",
        "Pyrazinamide — converted to pyrazinoic acid in acidic environment (macrophages); ↓uric acid excretion (hyperuricemia, gout), hepatotoxicity, photosensitivity",
        "Ethambutol — inhibits arabinosyl transferase (cell wall); optic neuritis (red-green color blindness, ↓visual acuity — baseline + monthly vision check); reversible if stopped early",
        "Streptomycin — aminoglycoside; 8th nerve damage (vestibular), nephrotoxicity",
        "Second-line drugs: kanamycin/amikacin, capreomycin, fluoroquinolones (levofloxacin, moxifloxacin), ethionamide, PAS, cycloserine, linezolid, clofazimine, bedaquiline, delamanid",
        "RNTCP Category I (new patients) — 2HRZE + 4HR (2 months intensive + 4 months continuation)",
        "RNTCP Category II (previously treated — relapse/failure/default) — 2HRZES + 1HRZE + 5HRE (8 months total)",
        "DOTS — Directly Observed Treatment Short-course; patient swallows drugs under observation; ensures compliance; prevents resistance",
        "MDR-TB — resistance to at least R + H; treat with 6-drug regimen including injectable + FQ for 9–12 months (bedaquiline, linezolid added)",
        "XDR-TB — MDR + FQ + injectable; very difficult to treat",
        "Dapsone — leprosy (multi-drug therapy with rifampicin + clofazimine); S/E: hemolysis (G6PD), methemoglobinemia"
      ],
      textbookRef: "Katzung 15e — Ch. 47, pp. 820–826; WHO TB Guidelines"
    },
    {
      id: "pharm-antimalarial",
      title: "Antimalarial Drugs — Classification & Cerebral Malaria",
      branch: "antimicrobial",
      tier: 3,
      xp: 120,
      marks: "Long Answer",
      highYield: 5,
      prerequisites: ["pharm-beta-lactams"],
      description:
        "Antimalarial classification, MOA, uses, cerebral malaria treatment, ACT.",
      keyPoints: [
        "Classification: tissue schizonticides (primaquine — liver stages), blood schizonticides (chloroquine, quinine, mefloquine, lumefantrine, atovaquone, artemisinins), gametocytocides (primaquine, artemisinins), sporontocides (pyrimethamine, proguanil)",
        "Chloroquine — concentrates in parasite vacuole; inhibits heme polymerization (toxic heme accumulates); S/E: itching (dark-skinned — histamine release), retinopathy (long-term), QT prolongation; resistance widespread (P. falciparum)",
        "Quinine — alkaloid; S/E: cinchonism (tinnitus, headache, nausea, blurred vision), hypoglycemia (insulin release — especially in pregnancy), QT prolongation, Blackwater fever (intravascular hemolysis in G6PD)",
        "Mefloquine — long t½; weekly; S/E: neuropsychiatric (anxiety, hallucinations, seizures — CI in epilepsy, depression); prophylaxis + treatment",
        "Artemisinins (artemether, artesunate, dihydroartemisinin) — fastest acting; cleave endoperoxide bridge → free radicals → parasite death; S/E: well-tolerated; CT scan changes with recurrent treatment (uncertain significance)",
        "Lumefantrine — partnered with artemether in ACT (Coartem); oral",
        "Atovaquone-proguanil (Malarone) — prophylaxis + treatment; inhibits mitochondrial electron transport + DHFR",
        "Primaquine — 8-aminoquinoline; tissue schizonticide + gametocytocide (P. falciparum); S/E: hemolysis in G6PD deficiency (must screen!), methemoglobinemia; uses: radical cure of P. vivax/ovale (liver hypnozoites), P. falciparum gametocytes (transmission blocking)",
        "Pyrimethamine + sulfadoxine (Fansidar) — DHFR + PABA inhibition; prophylaxis in pregnancy (intermittent preventive treatment — IPTp)",
        "Artemether + Lumefantrine (ACT) — first-line for uncomplicated P. falciparum; 6-dose regimen over 3 days",
        "Cerebral malaria (P. falciparum severe) — IV artesunate (DOC, faster + safer than quinine); if unavailable — IV quinine (with continuous cardiac monitoring); supportive: anticonvulsants, manage raised ICP, correct hypoglycemia, transfusion if severe anemia",
        "Jarisch-Herxheimer reaction — seen in syphilis treatment (penicillin); fever, rash, hypotension due to release of treponemal components; self-limiting; antipyretic"
      ],
      textbookRef: "Katzung 15e — Ch. 52, pp. 890–910; WHO Malaria Guidelines"
    },
    {
      id: "pharm-anthelmintic",
      title: "Anthelmintics — Albendazole, Praziquantel, Ivermectin",
      branch: "antimicrobial",
      tier: 3,
      xp: 80,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-antimalarial"],
      description:
        "Anthelmintic classification, MOA, key uses.",
      keyPoints: [
        "Albendazole/mebendazole — bind β-tubulin; inhibit microtubule polymerization; ↓glucose uptake; broad spectrum (nematodes — roundworm, hookworm, whipworm, pinworm; also hydatid, neurocysticercosis)",
        "Albendazole S/E: hepatotoxicity, alopecia, bone marrow suppression (long-term); teratogen — CI in pregnancy",
        "Praziquantel — ↑Ca²⁺ permeability of helminth membrane → paralysis; schistosomiasis, tapeworms (neurocysticercosis — single high dose)",
        "Ivermectin — glutamate-gated Cl⁻ channels (invertebrate-specific); paralysis; onchocerciasis (river blindness), strongyloidiasis, scabies, filariasis (part of MDA programs)",
        "Diethylcarbamazine (DEC) — filariasis (Wuchereria, Brugia); S/E: Mazzotti reaction (onchocerciasis — fever, rash, hypotension due to microfilarial death)",
        "Piperazine — flaccid paralysis of intestinal nematodes (GABA agonist); ascaris, enterobius",
        "Niclosamide — tapeworm (taenia, diphyllobothrium); inhibits oxidative phosphorylation",
        "Mass drug administration (MDA) for lymphatic filariasis: albendazole + DEC (or ivermectin in onchocerciasis areas)"
      ],
      textbookRef: "Katzung 15e — Ch. 53, pp. 915–925"
    }
  ]
};

// ----------------------------------------------------------------------------
// BRANCH 10 — IMMUNOPHARMACOLOGY & CHEMOTHERAPY
// ----------------------------------------------------------------------------
const immunopharmBranch: SkillBranch = {
  id: "immunopharm",
  name: "Immunopharmacology & Anticancer",
  icon: "Shield",
  color: "#22c55e",
  tagline: "Immunosuppressants & Cytotoxic Drugs",
  description:
    "Immunosuppressants (cyclosporine, tacrolimus, sirolimus), monoclonal antibodies, anticancer drugs.",
  nodes: [
    {
      id: "pharm-immunosuppress",
      title: "Immunosuppressants — Cyclosporine, Tacrolimus, Sirolimus",
      branch: "immunopharm",
      tier: 1,
      xp: 100,
      marks: "Short Note",
      highYield: 3,
      prerequisites: [],
      description:
        "Calcineurin inhibitors, mTOR inhibitors, transplant immunosuppression.",
      keyPoints: [
        "Calcineurin inhibitors — cyclosporine, tacrolimus; bind cyclophilin/FKBP-12 → inhibit calcineurin → ↓NF-AT translocation → ↓IL-2 transcription → ↓T-cell activation",
        "Cyclosporine — S/E: nephrotoxicity (major; dose-limiting), hypertension, hyperkalemia, gingival hyperplasia, hirsutism, hyperlipidemia, neurotoxicity",
        "Tacrolimus — more potent than cyclosporine; S/E: nephrotoxicity, hyperglycemia (β-cell toxicity), neurotoxicity; topical for atopic dermatitis",
        "Sirolimus (rapamycin) — mTOR inhibitor; inhibits T-cell proliferation (downstream of IL-2); NOT nephrotoxic; S/E: hyperlipidemia, myelosuppression, impaired wound healing",
        "Mycophenolate mofetil — inhibits inosine monophosphate dehydrogenase (IMPDH); ↓lymphocyte proliferation (selective — lymphocytes rely on de novo purine synthesis); S/E: GI, myelosuppression",
        "Azathioprine — purine analogue; prodrug of 6-mercaptopurine; S/E: myelosuppression, hepatotoxicity; interaction with allopurinol (↑toxicity — reduce dose by 75%)",
        "Corticosteroids — broad immunosuppressants (↓cytokine transcription)",
        "Monoclonal antibodies: basiliximab, daclizumab (anti-CD25 — IL-2 receptor); rituximab (anti-CD20 — B cells); alemtuzumab (anti-CD52)",
        "Belatacept — CTLA4-Ig fusion protein; blocks costimulation (CD28-CD80/86)"
      ],
      textbookRef: "Katzung 15e — Ch. 55, pp. 962–970"
    },
    {
      id: "pharm-anticancer",
      title: "Anticancer Drugs — Alkylating, Antimetabolites, Targeted",
      branch: "immunopharm",
      tier: 2,
      xp: 100,
      marks: "Short Note",
      highYield: 3,
      prerequisites: ["pharm-immunosuppress"],
      description:
        "Classification of cytotoxic drugs, MOA, S/E, targeted therapies.",
      keyPoints: [
        "Alkylating agents — add alkyl groups to DNA (guanine N7) → cross-linking → DNA damage; cyclophosphamide (hemorrhagic cystitis — mesna prophylaxis; metabolite acrolein), ifosfamide, busulfan, cisplatin, carboplatin, oxaliplatin",
        "Antimetabolites — folate antagonists (methotrexate — inhibits DHFR; rescue with folinic acid; nephrotoxicity at high dose), purine analogues (6-MP, 6-TG; allopurinol interaction), pyrimidine analogues (5-FU, cytarabine, gemcitabine)",
        "Vinca alkaloids — vincristine, vinblastine; inhibit microtubule polymerization → mitotic arrest; vincristine — peripheral neuropathy (no myelosuppression); vinblastine — myelosuppression",
        "Taxanes — paclitaxel, docetaxel; stabilize microtubules → prevent depolymerization; S/E: hypersensitivity (premedicate), peripheral neuropathy, neutropenia",
        "Anthracyclines — doxorubicin, daunorubicin; intercalate DNA + inhibit topoisomerase II + free radicals; S/E: cardiotoxicity (cumulative dose-related — dexrazoxane prophylaxis), red urine, alopecia, myelosuppression",
        "Bleomycin — causes DNA strand breaks (oxygen-dependent); pulmonary fibrosis (dose-related); minimal myelosuppression",
        "Cisplatin — nephrotoxicity (prehydrate + amifostine), ototoxicity, neuropathy, severe nausea",
        "Targeted therapy:",
        "  Tyrosine kinase inhibitors — imatinib (BCR-ABL in CML; c-Kit in GIST), erlotinib/gefitinib (EGFR in NSCLC), dasatinib, nilotinib",
        "  Monoclonal antibodies — trastuzumab (HER2 breast cancer), rituximab (CD20 lymphoma), cetuximab (EGFR colon cancer), bevacizumab (VEGF)",
        "  Checkpoint inhibitors — pembrolizumab, nivolumab (anti-PD-1); ipilimumab (anti-CTLA-4); immune-related adverse events (colitis, pneumonitis, hepatitis)",
        "CAR-T cell therapy — tisagenlecleucel, axicabtagene ciloleucel; B-ALL, diffuse large B-cell lymphoma",
        "General principles: combination therapy, dose intensity, log-kill hypothesis, rescue therapy (leucovorin for MTX, mesna for cyclophosphamide)",
        "Common S/E: myelosuppression, mucositis, alopecia, nausea/vomiting, infertility, secondary malignancies"
      ],
      textbookRef: "Katzung 15e — Ch. 54, pp. 935–955"
    }
  ]
};

// ----------------------------------------------------------------------------
// EXPORT
// ----------------------------------------------------------------------------

export const pharmSkillTree: SkillBranch[] = [
  generalBranch,
  ansBranch,
  autacoidsBranch,
  cnsBranch,
  cvsPharmBranch,
  kidneyBloodBranch,
  gitPharmBranch,
  endoPharmBranch,
  antimicrobialBranch,
  immunopharmBranch
];

export const allPharmNodes: SkillNode[] = pharmSkillTree.flatMap((b) => b.nodes);

export const pharmTotalXP = allPharmNodes.reduce((sum, n) => sum + n.xp, 0);
