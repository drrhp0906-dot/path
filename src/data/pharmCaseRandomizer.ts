// ============================================================================
// PHARMACOLOGY CASE RANDOMIZER
// Procedurally generates infinite clinical scenarios focused on drug therapy,
// poisoning, and prescription writing — aligned with the user's IMP topics.
// All drug doses/protocols per Katzung, WHO, NICE, and Indian guidelines.
// ============================================================================

import type {
  Difficulty,
  GeneratedCase,
  InvestigationResult
} from "./caseRandomizer";

export type PharmCase = GeneratedCase & {
  drugClass?: string;
  prescription?: PrescriptionItem[];
  managementProtocol?: ManagementStep[];
  drugInteractions?: string[];
  monitoringAdvice?: string;
};

export interface PrescriptionItem {
  drug: string;
  dose: string;
  route: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface ManagementStep {
  step: number;
  phase: string;
  action: string;
  rationale: string;
}

// ----------------------------------------------------------------------------
// CASE TEMPLATES
// ----------------------------------------------------------------------------

interface PharmTemplate {
  id: string;
  weight: number;
  difficulty: Difficulty;
  generate: () => Omit<PharmCase, "id" | "difficulty">;
}

const templates: PharmTemplate[] = [
  // ==========================================================================
  // 1. ORGANOPHOSPHORUS POISONING
  // ==========================================================================
  {
    id: "pharm-op-poisoning",
    weight: 10,
    difficulty: "Adept",
    generate: () => {
      const ages = [25, 32, 38, 45, 52, 60];
      const age = ages[Math.floor(Math.random() * ages.length)];
      const genders: Array<"Male" | "Female"> = ["Male", "Female"];
      const gender = genders[Math.floor(Math.random() * genders.length)];
      const compounds = ["chlorpyrifos", "malathion", "parathion", "dichlorvos", "monocrotophos"];
      const compound = compounds[Math.floor(Math.random() * compounds.length)];
      return {
        patient: {
          age,
          gender,
          occupation: "agricultural worker",
          background: `Found unconscious in the fields after accidental exposure to ${compound}`
        },
        chiefComplaints: [
          "Sudden onset of profuse sweating and salivation",
          "Difficulty breathing with wheezing",
          "Vomiting and diarrhea",
          "Muscle twitching progressing to weakness",
          "Loss of consciousness"
        ],
        history: `${age}-year-old ${gender.toLowerCase()} agricultural worker brought to casualty after accidental exposure to ${compound} (organophosphorus insecticide). Bystanders report patient was spraying crops without protective equipment 2 hours ago. Initially complained of headache and blurred vision, then developed profuse sweating, vomiting, and difficulty breathing. Currently unconscious.`,
        examination: [
          "Patient unconscious, GCS 8/15",
          "Profuse sweating and salivation (frothing from mouth)",
          "Lacrimation, rhinorrhea",
          "Miosis (pinpoint pupils — 1 mm, non-reactive)",
          "Bradycardia (HR 48/min), hypotension (BP 90/60)",
          "Bronchorrhea, bilateral extensive wheeze, crackles",
          "Fasciculations over chest and limbs",
          "Incontinence of urine and feces",
          "Respiratory rate 32/min, accessory muscle use"
        ],
        investigations: [
          {
            test: "Serum pseudocholinesterase",
            result: "620 U/L",
            referenceRange: "5000–12000 U/L",
            interpretation: "Markedly reduced — confirms organophosphorus poisoning"
          },
          {
            test: "RBC acetylcholinesterase",
            result: "Reduced",
            referenceRange: "Reference value",
            interpretation: "More specific marker of true AChE inhibition (reflects synaptic enzyme)"
          },
          {
            test: "Arterial blood gas",
            result: "pH 7.18, pCO2 30, pO2 60, HCO3 14",
            interpretation: "Mixed respiratory + metabolic acidosis"
          },
          {
            test: "ECG",
            result: "Sinus bradycardia with first-degree AV block",
            interpretation: "Cholinergic effect on heart"
          },
          {
            test: "Chest X-ray",
            result: "Bilateral pulmonary edema",
            interpretation: "Bronchorrhea and pulmonary edema"
          },
          {
            test: "Blood sugar",
            result: "140 mg/dL",
            interpretation: "Stress hyperglycemia"
          }
        ],
        imageHint:
          "Clinical picture: profuse secretions (sweating, salivation, lacrimation, bronchorrhea) + miosis + muscle fasciculations. The combination of 'DUMBELS' (Diarrhea, Urination, Miosis, Bronchospasm, Emesis, Lacrimation, Sweating) and nicotinic effects (fasciculations, paralysis) is pathognomonic of cholinergic crisis from AChE inhibition.",
        provisionalDiagnosis:
          "Acute Organophosphorus Compound Poisoning with cholinergic crisis + respiratory failure",
        diagnosticReasoning:
          "Agricultural exposure + classic DUMBELS triad (muscarinic: miosis, bronchorrhea, bradycardia, sweating, salivation, lacrimation, GI hypermotility) + nicotinic effects (fasciculations, weakness, paralysis) + CNS depression + markedly reduced pseudocholinesterase = organophosphorus poisoning. The combination of miosis + bronchorrhea + bradycardia + fasciculations is virtually diagnostic. Severity correlates with degree of AChE inhibition. Intermediate syndrome may develop at 24–96 hours (neck weakness, respiratory failure); delayed polyneuropathy (OPIDP) at 1–3 weeks.",
        keyInvestigations: [
          "Serum pseudocholinesterase (marker of exposure — rapidly falls; recovers in 4–6 weeks)",
          "RBC acetylcholinesterase (reflects true synaptic inhibition — recovers in 100+ days)",
          "Arterial blood gas (mixed metabolic + respiratory acidosis)",
          "ECG (bradycardia, AV block, QT prolongation — risk of Torsades)",
          "Chest X-ray (pulmonary edema)",
          "Renal function, liver function, serum electrolytes",
          "Blood sugar (stress hyperglycemia)",
          "ABG monitoring during treatment",
          "Continuous cardiac + SpO2 monitoring",
          "Identification of specific compound (history/suicide note)"
        ],
        complications: [
          "Respiratory failure (bronchorrhea, bronchospasm, respiratory muscle paralysis) — commonest cause of death",
          "Aspiration pneumonia",
          "Cardiac arrhythmias (bradycardia, QT prolongation, Torsades de Pointes)",
          "Intermediate syndrome (24–96 hours) — neck weakness, proximal limb weakness, respiratory failure",
          "Organophosphate-induced delayed polyneuropathy (OPIDP) — 1–3 weeks; distal sensorimotor neuropathy",
          "Pancreatitis",
          "Hepatic dysfunction",
          "Secondary infections (ventilator-associated pneumonia)",
          "Psychiatric sequelae (PTSD, depression)"
        ],
        textbookRef: "Katzung 15e — Ch. 8, pp. 168–171",
        drugClass: "Acetylcholinesterase inhibitor (irreversible) poisoning",
        prescription: [
          {
            drug: "Atropine",
            dose: "1.5–3 mg",
            route: "IV bolus",
            frequency: "Every 5–10 min until atropinization",
            duration: "Continuous until drying of secretions",
            instructions: "Titrated to clinical endpoints (dry chest, HR > 80, SBP > 80, pupils dilated). Large total doses may be needed (often 100+ mg in 24 hrs). DO NOT use as infusion alone — boluses required."
          },
          {
            drug: "Pralidoxime (2-PAM)",
            dose: "30 mg/kg (max 2 g)",
            route: "IV infusion over 15–30 min",
            frequency: "Repeat after 1 hr if needed, then 8 mg/kg/hr infusion",
            duration: "Until clinical improvement (typically 24–48 hrs)",
            instructions: "Most effective if given within 24 hours (before 'aging' of the enzyme-inhibitor complex). Restores nicotinic function (muscle weakness)."
          },
          {
            drug: "Oxygen",
            dose: "100%",
            route: "Face mask / nasal prongs",
            frequency: "Continuous",
            duration: "Throughout acute phase",
            instructions: "Maintain SpO2 > 92%"
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Resuscitation (0–5 min)",
            action: "Airway + Breathing + Circulation. Suction secretions. Oxygen 100% via mask. IV access. Cardiac monitoring.",
            rationale: "Death is from respiratory failure — secure airway first."
          },
          {
            step: 2,
            phase: "Decontamination",
            action: "Remove contaminated clothing. Wash skin with soap and water. Gastric lavage if ingestion < 1 hour ago (after airway secured). Activated charcoal 50 g via NG tube.",
            rationale: "Prevent ongoing absorption. Staff must wear protective equipment."
          },
          {
            step: 3,
            phase: "Atropinization",
            action: "IV atropine 1.5–3 mg bolus, doubled every 5 min until secretions dry, HR > 80, SBP > 80, pupils dilated. Then maintain with infusion or intermittent boluses.",
            rationale: "Atropine blocks muscarinic effects (bronchorrhea, bradycardia). Does NOT reverse nicotinic effects (muscle weakness)."
          },
          {
            step: 4,
            phase: "Pralidoxime (2-PAM)",
            action: "30 mg/kg IV over 15–30 min, repeat after 1 hr if weakness persists, then infusion 8 mg/kg/hr.",
            rationale: "Reactivates AChE by removing the phosphoryl group. Effective only before 'aging' (24–48 hr for most OPs; minutes for soman). Restores muscle strength."
          },
          {
            step: 5,
            phase: "Supportive",
            action: "IV fluids. Mechanical ventilation if respiratory failure. Treat seizures with IV diazepam. Antibiotics for secondary infection.",
            rationale: "Maintain organ perfusion while AChE recovers."
          },
          {
            step: 6,
            phase: "Observation",
            action: "ICU admission for 48–72 hours. Watch for intermediate syndrome (neck weakness, respiratory failure at 24–96 hrs).",
            rationale: "Biphasic toxicity — recurrence of symptoms possible."
          }
        ],
        drugInteractions: [
          "Succinylcholine — prolonged paralysis (AChE inhibited; cannot metabolize suxamethonium)",
          "Neostigmine — contraindicated (same mechanism as OP)",
          "Aminoglycosides — exacerbate muscle weakness",
          "β-blockers — worsen bradycardia",
          "Morphine — respiratory depressant; avoid"
        ],
        monitoringAdvice:
          "Continuous: HR, BP, SpO2, respiratory rate. Hourly: level of consciousness, secretions, pupil size, muscle strength. Daily: ABG, renal function, liver function, serum pseudocholinesterase (trend to ensure recovery). Watch for rebound cholinergic crisis after stopping atropine — restart if symptoms return."
      };
    }
  },

  // ==========================================================================
  // 2. ACUTE MYOCARDIAL INFARCTION — DRUG THERAPY
  // ==========================================================================
  {
    id: "pharm-acute-mi",
    weight: 10,
    difficulty: "Adept",
    generate: () => {
      const profiles = [
        { age: 52, gender: "Male" as const, bg: "smoker, hypertensive" },
        { age: 58, gender: "Male" as const, bg: "diabetic, dyslipidemia" },
        { age: 65, gender: "Male" as const, bg: "smoker, family history of CAD" },
        { age: 60, gender: "Female" as const, bg: "post-menopausal, diabetic, hypertensive" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      const territory = ["anterior (V1–V4)", "inferior (II, III, aVF)", "lateral (I, aVL, V5–V6)"][Math.floor(Math.random() * 3)];
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: [
          "Severe retrosternal chest pain radiating to left arm and jaw",
          "Profuse sweating",
          "Nausea and vomiting",
          "Shortness of breath",
          "Feeling of impending doom"
        ],
        history: `${p.age}-year-old ${p.gender.toLowerCase()} with history of ${p.bg} presents to ER with severe constricting chest pain for 1 hour, radiating to left arm and jaw, associated with profuse sweating, nausea, and dyspnea. Pain not relieved by rest or sublingual nitrates.`,
        examination: [
          "Anxious, diaphoretic, pale",
          "BP 140/90 mmHg, HR 105/min, regular",
          "JVP normal",
          "Bilateral basal crackles",
          "S4 gallop",
          "No murmur"
        ],
        investigations: [
          {
            test: "12-lead ECG",
            result: `ST-segment elevation in ${territory} with reciprocal changes; T-wave inversion developing`,
            interpretation: "Acute STEMI — territory identified"
          },
          {
            test: "High-sensitivity Troponin I",
            result: "12.5 ng/mL (at 3 hours)",
            referenceRange: "< 0.04 ng/mL",
            interpretation: "Markedly elevated — confirms myocardial necrosis"
          },
          {
            test: "Total cholesterol",
            result: "265 mg/dL",
            referenceRange: "< 200 mg/dL",
            interpretation: "Hyperlipidemia"
          },
          {
            test: "LDL cholesterol",
            result: "180 mg/dL",
            referenceRange: "< 100 mg/dL",
            interpretation: "High — target < 70 in established CAD"
          },
          {
            test: "Fasting blood glucose",
            result: "168 mg/dL",
            referenceRange: "< 126 mg/dL",
            interpretation: "Diabetic range"
          },
          {
            test: "HbA1c",
            result: "8.2%",
            referenceRange: "< 6.5%",
            interpretation: "Poor glycemic control"
          },
          {
            test: "Serum creatinine",
            result: "1.4 mg/dL",
            referenceRange: "0.6–1.2 mg/dL",
            interpretation: "Mild renal impairment"
          }
        ],
        imageHint:
          "ECG: ST-segment elevation in the affected territory; over hours-to-days evolves to Q waves + T-wave inversion. Cardiac biomarker timeline: Troponin rises 3–4 hr, peaks 24 hr, persists 7–10 days. CK-MB rises 3–8 hr, peaks 24 hr, normalizes 48–72 hr.",
        provisionalDiagnosis:
          "Acute ST-elevation Myocardial Infarction (STEMI) — needs immediate reperfusion",
        diagnosticReasoning:
          "Central chest pain + diaphoresis + ST elevation + raised troponin = acute STEMI. Immediate reperfusion is the priority — primary PCI within 90 minutes (door-to-balloon time) is preferred; if PCI not available, thrombolytics within 12 hours. Concurrent medical therapy (MONA-B) reduces mortality. The key drugs: antiplatelets (aspirin + clopidogrel), anticoagulant (heparin), β-blocker (reduces arrhythmias + infarct size), ACE inhibitor (reduces remodeling), statin (plaque stabilization).",
        keyInvestigations: [
          "12-lead ECG immediately (serial at 0, 90 min, 3 hr, 6 hr)",
          "Cardiac troponin I/T (serial)",
          "CBC, PT/INR, APTT",
          "Renal function, electrolytes (before ACE/ARB)",
          "Lipid profile, HbA1c",
          "Chest X-ray (pulmonary edema, cardiomegaly)",
          "Echocardiography (wall motion, EF, mechanical complications)",
          "Coronary angiography (defines anatomy; primary PCI)"
        ],
        complications: [
          "Arrhythmias (VF, VT — leading cause of death in first 24 hr)",
          "Cardiogenic shock (with extensive infarcts)",
          "Papillary muscle rupture (3–5 days) → acute mitral regurgitation",
          "Ventricular free wall rupture (3–5 days) → cardiac tamponade",
          "Ventricular septal rupture (3–5 days)",
          "Ventricular aneurysm (weeks-months)",
          "Post-infarction pericarditis (Dressler syndrome — autoimmune, 1–8 weeks)",
          "Chronic heart failure"
        ],
        textbookRef: "Katzung 15e — Ch. 12, pp. 191–193",
        drugClass: "Antiplatelets + Anticoagulant + β-blocker + ACE inhibitor + Statin",
        prescription: [
          {
            drug: "Aspirin",
            dose: "300 mg chewable",
            route: "PO",
            frequency: "Stat, then 75 mg OD",
            duration: "Lifelong",
            instructions: "Irreversible COX-1 inhibition — ↓TXA2; reduces mortality by 25%"
          },
          {
            drug: "Clopidogrel",
            dose: "300–600 mg loading",
            route: "PO",
            frequency: "Stat, then 75 mg OD",
            duration: "12 months (lifelong if stent)",
            instructions: "P2Y12 ADP receptor antagonist. Dual antiplatelet therapy (DAPT) essential post-stent."
          },
          {
            drug: "Atorvastatin",
            dose: "80 mg",
            route: "PO",
            frequency: "OD at night",
            duration: "Lifelong",
            instructions: "High-intensity statin; pleiotropic effects (plaque stabilization, anti-inflammatory)"
          },
          {
            drug: "Metoprolol",
            dose: "5 mg IV over 2 min (up to 3 doses), then 50 mg PO BD",
            route: "IV → PO",
            frequency: "BD",
            duration: "Lifelong",
            instructions: "↓HR, ↓contractility → ↓O2 demand. CI: LVF, bradycardia, hypotension, severe asthma"
          },
          {
            drug: "Enalapril",
            dose: "2.5 mg",
            route: "PO",
            frequency: "BD; titrate up",
            duration: "Lifelong",
            instructions: "Start within 24 hr. Reduces ventricular remodeling. Monitor K+, creatinine."
          },
          {
            drug: "Heparin (unfractionated or LMWH)",
            dose: "60 U/kg bolus (max 4000 U), then 12 U/kg/hr infusion",
            route: "IV",
            frequency: "Continuous infusion",
            duration: "Until revascularization (48–72 hr)",
            instructions: "Maintain aPTT 1.5–2× control. Enoxaparin 1 mg/kg SC BD is alternative."
          },
          {
            drug: "Morphine",
            dose: "2–4 mg",
            route: "IV",
            frequency: "PRN every 5–10 min",
            duration: "For severe pain",
            instructions: "Analgesia + anxiolysis + venodilation (↓preload). S/E: respiratory depression, hypotension."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Immediate (0–10 min)",
            action: "ECG within 10 min of arrival. Establish IV access. Aspirin 300 mg chewable. Oxygen if SpO2 < 90%. Sublingual nitroglycerin (if BP ok, no RV infarct). Morphine for pain.",
            rationale: "Time is muscle — every minute of delay increases infarct size."
          },
          {
            step: 2,
            phase: "Reperfusion (10–90 min)",
            action: "Primary PCI within 90 min (door-to-balloon). If PCI unavailable: thrombolysis within 30 min (door-to-needle) using streptokinase 1.5 MU IV over 60 min OR alteplase 15 mg IV bolus + 0.75 mg/kg over 30 min + 0.5 mg/kg over 60 min (max 100 mg).",
            rationale: "Restores coronary flow; saves myocardium; reduces mortality."
          },
          {
            step: 3,
            phase: "Antiplatelet + Anticoagulant",
            action: "Aspirin + clopidogrel (or ticagrelor/prasugrel if PCI). Heparin or LMWH during PCI; bivalirudin alternative. GP IIb/IIIa inhibitor (abciximab) for high-risk PCI.",
            rationale: "Prevents stent thrombosis + extends reperfusion."
          },
          {
            step: 4,
            phase: "Cardioprotection (first 24 hr)",
            action: "β-blocker (if no CI). ACE inhibitor (within 24 hr; especially anterior MI, LVEF < 40%). High-intensity statin (atorvastatin 80 mg).",
            rationale: "Reduces infarct size, prevents remodeling, ↓arrhythmias."
          },
          {
            step: 5,
            phase: "Secondary prevention (lifelong)",
            action: "Aspirin 75 mg + statin + β-blocker + ACE inhibitor. Clopidogrel for 12 months. Smoking cessation. Diet. Exercise. Control HTN/DM. Annual cardiac follow-up.",
            rationale: "Reduces recurrence and mortality."
          }
        ],
        drugInteractions: [
          "Aspirin + warfarin → ↑bleeding risk",
          "Clopidogrel + omeprazole → ↓antiplatelet effect (CYP2C19 inhibition); use pantoprazole",
          "ACE inhibitor + K-sparing diuretic → hyperkalemia",
          "Statins + macrolides/azoles → ↑statin levels, rhabdomyolysis",
          "β-blocker + verapamil → severe bradycardia, AV block",
          "Morphine + benzodiazepines → respiratory depression"
        ],
        monitoringAdvice:
          "Continuous cardiac monitoring 24–48 hr (arrhythmia detection). Serial ECGs (look for resolution of ST elevation — > 50% reduction at 60–90 min suggests successful reperfusion). Serial troponin (rise/fall pattern). Daily: renal function, K+ (with ACE/ARB). Echocardiography before discharge (EF, wall motion, mechanical complications). Stress test before discharge if PCI not done."
      };
    }
  },

  // ==========================================================================
  // 3. STATUS ASTHMATICUS
  // ==========================================================================
  {
    id: "pharm-status-asthmaticus",
    weight: 8,
    difficulty: "Master",
    generate: () => {
      const ages = [22, 28, 35, 42, 50];
      const age = ages[Math.floor(Math.random() * ages.length)];
      return {
        patient: {
          age,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          background: "known bronchial asthma since childhood"
        },
        chiefComplaints: [
          "Severe breathlessness for 6 hours",
          "Inability to speak in full sentences",
          "Wheezing",
          "Cough with thick sputum",
          "Anxiety and confusion"
        ],
        history: `${age}-year-old with history of bronchial asthma since childhood, on salbutamol inhaler PRN + budesonide inhaler BD, presents with severe breathlessness for 6 hours not responding to multiple salbutamol inhalations. Triggered by upper respiratory infection. Unable to complete sentences in one breath. Increasingly anxious and confused over the past hour.`,
        examination: [
          "Severe respiratory distress, sitting upright, using accessory muscles",
          "RR 32/min, HR 130/min",
          "Inability to speak in full sentences (single words only)",
          "Widespread expiratory wheeze",
          "Cyanosis (lip and nail bed)",
          "Pulsus paradoxus (drop of 20 mmHg in systolic BP during inspiration)",
          " accessory muscle use, intercostal recession",
          "PEFR 35% of predicted",
          "SpO2 86% on room air",
          "Confused and drowsy — danger sign!"
        ],
        investigations: [
          {
            test: "PEFR",
            result: "120 L/min (35% of predicted 340 L/min)",
            interpretation: "Severe exacerbation; < 33% = life-threatening"
          },
          {
            test: "SpO2",
            result: "86% on room air",
            referenceRange: "≥ 95%",
            interpretation: "Hypoxemia"
          },
          {
            test: "Arterial blood gas",
            result: "pH 7.28, pCO2 50 mmHg, pO2 55 mmHg, HCO3 22",
            referenceRange: "pH 7.35–7.45",
            interpretation: "Type II respiratory failure with acidosis — near-fatal asthma"
          },
          {
            test: "Chest X-ray",
            result: "Bilateral hyperinflation, no pneumothorax",
            interpretation: "Asthma exacerbation; rules out pneumothorax"
          },
          {
            test: "ECG",
            result: "Sinus tachycardia 130/min",
            interpretation: "Stress response; right heart strain pattern"
          },
          {
            test: "CBC",
            result: "Hb 14 g/dL, TLC 14,500/μL, eosinophils 12%",
            interpretation: "Eosinophilia consistent with asthma; mild leukocytosis from infection"
          }
        ],
        imageHint:
          "Clinical: patient in tripod position, using accessory muscles, prolonged expiration, widespread wheeze. ABG: 'silent chest' (no wheeze due to severe airway obstruction — life-threatening). ECG: sinus tachycardia, P pulmonale. CXR: hyperinflated lungs.",
        provisionalDiagnosis:
          "Acute Severe Asthma (Status Asthmaticus) progressing to life-threatening asthma",
        diagnosticReasoning:
          "Known asthmatic + severe dyspnea + PEFR < 50% + inability to complete sentences + RR > 25 + HR > 110 + confusion/drowsiness + ABG showing normal/rising pCO2 = life-threatening asthma requiring ICU. The transition from severe to life-threatening is marked by silent chest, cyanosis, exhaustion, bradycardia, hypotension, and rising pCO2 (indicates fatigue and impending respiratory arrest).",
        keyInvestigations: [
          "PEFR (before and after nebulized bronchodilator)",
          "SpO2 continuous",
          "Arterial blood gas (after 30 min of treatment if not improving)",
          "Chest X-ray (rule out pneumothorax, consolidation)",
          "ECG (arrhythmia, right heart strain)",
          "CBC (eosinophilia, infection)",
          "Serum electrolytes (hypokalemia from β-agonists)",
          "Theophylline level (if patient on oral theophylline)"
        ],
        complications: [
          "Respiratory failure requiring mechanical ventilation",
          "Pneumothorax (positive pressure ventilation)",
          "Pneumomediastinum",
          "Cardiac arrhythmias (hypokalemia, β-agonist toxicity)",
          "Lactic acidosis (β-agonist effect)",
          "Theophylline toxicity (if concurrent use)",
          "Respiratory arrest"
        ],
        textbookRef: "Katzung 15e — Ch. 20, pp. 327–336",
        drugClass: "Bronchodilators + Corticosteroids + Magnesium",
        prescription: [
          {
            drug: "Oxygen",
            dose: "100%",
            route: "Face mask",
            frequency: "Continuous",
            duration: "Throughout acute phase",
            instructions: "Target SpO2 94–98%"
          },
          {
            drug: "Salbutamol",
            dose: "5 mg (2.5 mg if < 5 yr)",
            route: "Nebulized with oxygen",
            frequency: "Every 15–20 min × 3 doses, then hourly",
            duration: "Until improvement",
            instructions: "Or continuous nebulization if severe. Alternative: IV salbutamol 250 μg over 10 min."
          },
          {
            drug: "Ipratropium bromide",
            dose: "0.5 mg",
            route: "Nebulized",
            frequency: "Every 4–6 hr",
            duration: "First 24 hours",
            instructions: "Add to salbutamol for severe attacks; synergistic bronchodilation"
          },
          {
            drug: "Hydrocortisone",
            dose: "200 mg",
            route: "IV",
            frequency: "Every 6 hr",
            duration: "24–48 hr, then switch to oral prednisolone 40 mg OD for 5–7 days",
            instructions: "Takes 6–8 hr for effect; give early. Oral prednisolone 40 mg is as effective if patient can swallow."
          },
          {
            drug: "Magnesium sulfate",
            dose: "2 g (8 mmol)",
            route: "IV over 20 min",
            frequency: "Single dose",
            duration: "Once",
            instructions: "For severe asthma not responding to initial bronchodilator + steroid. Smooth muscle relaxant; monitor BP."
          },
          {
            drug: "Aminophylline",
            dose: "5 mg/kg loading over 20 min, then 0.5 mg/kg/hr",
            route: "IV infusion",
            frequency: "Continuous",
            duration: "Until improvement",
            instructions: "Second-line; narrow TI. Check theophylline levels. Avoid if already on oral theophylline."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Initial Assessment (0–15 min)",
            action: "Assess severity: PEFR, RR, HR, SpO2, ABG if life-threatening. Sit patient upright. High-flow oxygen.",
            rationale: "Identify life-threatening features; correct hypoxemia first."
          },
          {
            step: 2,
            phase: "Bronchodilation (15–60 min)",
            action: "Nebulized salbutamol 5 mg + ipratropium 0.5 mg with oxygen, repeated every 20 min × 3 doses. Consider continuous nebulization.",
            rationale: "β2 agonist bronchodilation + anticholinergic synergistic."
          },
          {
            step: 3,
            phase: "Corticosteroid",
            action: "Hydrocortisone 200 mg IV every 6 hr OR oral prednisolone 40 mg daily.",
            rationale: "Anti-inflammatory; takes 6–8 hr for effect; prevents relapse."
          },
          {
            step: 4,
            phase: "Adjunct (if not improving)",
            action: "IV magnesium sulfate 2 g over 20 min. Consider IV salbutamol infusion.",
            rationale: "Smooth muscle relaxation; safe; reduces need for ventilation."
          },
          {
            step: 5,
            phase: "Mechanical ventilation (if deteriorating)",
            action: "Indications: exhaustion, drowsiness, silent chest, pCO2 rising, pH < 7.25, cardiac arrest. Intubate with rapid sequence induction (ketamine preferred). Ventilate with low rate, long expiratory time, low tidal volume.",
            rationale: "Allows bronchodilators time to work; takes over fatigued respiratory muscles."
          },
          {
            step: 6,
            phase: "Step-down",
            action: "Once PEFR > 75% and stable, switch to nebulized salbutamol QID, then MDI + spacer. Continue oral prednisolone 5–7 days. Re-evaluate maintenance therapy (ICS + LABA).",
            rationale: "Prevents relapse; addresses underlying inflammation."
          }
        ],
        drugInteractions: [
          "Salbutamol + non-selective β-blockers → antagonism (avoid; use cardioselective if essential)",
          "Salbutamol + theophylline → ↑risk of cardiac arrhythmias + hypokalemia",
          "Aminophylline + cimetidine/erythromycin/ciprofloxacin → ↑theophylline levels (toxicity)",
          "Aminophylline + phenytoin/rifampicin → ↓theophylline levels",
          "Systemic steroids + NSAIDs → ↑peptic ulcer risk"
        ],
        monitoringAdvice:
          "Continuous: SpO2, HR, ECG. Every 15–30 min: PEFR, RR, ability to speak. After 30–60 min: ABG (especially if not improving — rising pCO2 is danger sign). Watch for: hypokalemia (salbutamol), lactic acidosis, tachyarrhythmias. Once intubated: end-tidal CO2, plateau pressure (keep < 30 cmH2O to avoid barotrauma)."
      };
    }
  },

  // ==========================================================================
  // 4. HYPERTENSIVE EMERGENCY
  // ==========================================================================
  {
    id: "pharm-hypertensive-emergency",
    weight: 8,
    difficulty: "Adept",
    generate: () => {
      const profiles = [
        { age: 55, gender: "Male" as const, bg: "known hypertensive, non-compliant with medications" },
        { age: 48, gender: "Female" as const, bg: "pre-eclampsia at 36 weeks gestation" },
        { age: 60, gender: "Male" as const, bg: "chronic kidney disease" },
        { age: 65, gender: "Male" as const, bg: "pheochromocytoma" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      const presentations = [
        {
          symptoms: ["Severe headache", "Blurred vision", "Vomiting", "Altered consciousness"],
          exam: ["BP 220/130 mmHg", "Papilledema", "Confused", "Focal neurological deficits"]
        },
        {
          symptoms: ["Severe headache", "Chest pain", "Shortness of breath"],
          exam: ["BP 210/120", "Bilateral pulmonary edema", "S3 gallop"]
        }
      ];
      const pres = presentations[Math.floor(Math.random() * presentations.length)];
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: pres.symptoms,
        history: `${p.age}-year-old ${p.gender.toLowerCase()} with ${p.bg}, presents with ${pres.symptoms.join(", ").toLowerCase()} of 4 hours' duration.`,
        examination: pres.exam,
        investigations: [
          {
            test: "Blood pressure (both arms)",
            result: "220/130 mmHg",
            referenceRange: "< 130/80 mmHg",
            interpretation: "Hypertensive emergency (> 180/120 with target organ damage)"
          },
          {
            test: "Fundoscopy",
            result: "Papilledema, flame hemorrhages, cotton wool spots (Keith-Wagener grade IV)",
            interpretation: "Hypertensive retinopathy — severe"
          },
          {
            test: "ECG",
            result: "Left ventricular hypertrophy with strain pattern",
            interpretation: "Chronic hypertension effect"
          },
          {
            test: "Urinalysis",
            result: "Protein 2+, RBCs 20–30/hpf, granular casts",
            interpretation: "Hypertensive nephropathy"
          },
          {
            test: "Serum creatinine",
            result: "2.8 mg/dL",
            referenceRange: "0.6–1.2 mg/dL",
            interpretation: "Acute on chronic kidney injury"
          },
          {
            test: "CT brain",
            result: "Posterior reversible encephalopathy syndrome (PRES) — no hemorrhage",
            interpretation: "Hypertensive encephalopathy"
          },
          {
            test: "Troponin",
            result: "0.06 ng/mL (borderline)",
            referenceRange: "< 0.04 ng/mL",
            interpretation: "Mild elevation — demand ischemia"
          }
        ],
        imageHint:
          "Fundoscopy: papilledema + flame-shaped hemorrhages + cotton wool spots = Keith-Wagener grade IV hypertensive retinopathy. CT brain: posterior white matter edema (PRES). ECG: LVH with strain.",
        provisionalDiagnosis:
          "Hypertensive Emergency with hypertensive encephalopathy + acute kidney injury + hypertensive retinopathy",
        diagnosticReasoning:
          "BP > 180/120 with target organ damage (encephalopathy, retinopathy, renal failure, cardiac ischemia) = hypertensive emergency. Goal: reduce MAP by 25% in the first hour, then gradually to 160/100 over next 2–6 hours. Too rapid reduction can cause ischemia (cerebral, coronary, renal). IV drugs preferred; titratable.",
        keyInvestigations: [
          "BP monitoring (initially every 5 min via arterial line)",
          "Fundoscopy (papilledema, hemorrhages)",
          "ECG (LVH, strain, ischemia)",
          "Urinalysis (protein, RBC casts)",
          "Renal function + electrolytes",
          "CT brain (rule out hemorrhage, stroke)",
          "Echocardiography (LVH, wall motion)",
          "Troponin (myocardial ischemia)",
          "Urine metanephrines (if pheochromocytoma suspected)",
          "Pregnancy test in women of reproductive age"
        ],
        complications: [
          "Hypertensive encephalopathy → seizures, coma",
          "Intracerebral hemorrhage",
          "Acute pulmonary edema",
          "Acute kidney injury → renal failure",
          "Acute coronary syndrome",
          "Aortic dissection",
          "Eclampsia (in pregnancy)",
          "HELLP syndrome (in pregnancy)"
        ],
        textbookRef: "Katzung 15e — Ch. 11, pp. 170–172",
        drugClass: "IV antihypertensive agents",
        prescription: [
          {
            drug: "Labetalol",
            dose: "20 mg IV over 2 min, then 40–80 mg every 10 min (max 300 mg) OR 0.5–2 mg/min infusion",
            route: "IV",
            frequency: "Boluses or infusion",
            duration: "Until target BP achieved",
            instructions: "α + β blocker; safe in pregnancy; first-line for most emergencies. CI: asthma, heart block, severe LVF."
          },
          {
            drug: "Nicardipine",
            dose: "5 mg/hr; titrate up by 2.5 mg/hr every 5 min (max 15 mg/hr)",
            route: "IV infusion",
            frequency: "Continuous",
            duration: "Until BP controlled",
            instructions: "DHP calcium channel blocker; highly titratable. Useful in renal failure. S/E: tachycardia, headache."
          },
          {
            drug: "Sodium nitroprusside",
            dose: "0.25–10 μg/kg/min",
            route: "IV infusion",
            frequency: "Continuous",
            duration: "Short-term only (< 48 hr)",
            instructions: "Most potent; arterial + venous dilator. Risk of cyanide + thiocyanate toxicity (especially in renal failure). Use only if other agents fail."
          },
          {
            drug: "Nitroglycerin",
            dose: "5–200 μg/min",
            route: "IV infusion",
            frequency: "Continuous",
            duration: "Acute phase",
            instructions: "Preferred if coexisting acute coronary syndrome or pulmonary edema. Predominant venodilator."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Assessment (0–10 min)",
            action: "Confirm BP in both arms. Quick assessment for target organ damage (neuro, cardiac, renal). IV access. Arterial line if possible.",
            rationale: "Hypertensive urgency (no TOD) vs emergency (with TOD) determines treatment setting."
          },
          {
            step: 2,
            phase: "Initial BP reduction (0–60 min)",
            action: "IV labetalol OR nicardipine OR nitroglycerin (if ACS). Reduce MAP by 25% in first hour.",
            rationale: "Rapid reduction risks cerebral/coronary/renal ischemia due to loss of autoregulation."
          },
          {
            step: 3,
            phase: "Gradual reduction (1–6 hr)",
            action: "Continue IV infusion. Aim for BP 160/100 mmHg over 2–6 hours.",
            rationale: "Allow autoregulation to reset."
          },
          {
            step: 4,
            phase: "Transition to oral",
            action: "Once BP stable at 160/100, transition to oral therapy (ACE inhibitor, CCB, β-blocker depending on comorbidities).",
            rationale: "Long-term control."
          },
          {
            step: 5,
            phase: "Address cause",
            action: "Investigate secondary causes (renovascular, pheochromocytoma, OCP use, cocaine). Address non-compliance, drug interactions.",
            rationale: "Prevent recurrence."
          },
          {
            step: 6,
            phase: "Special situations",
            action: "Aortic dissection: rapid reduction to SBP 100–120 (esmolol first, then nitroprusside). Eclampsia: IV magnesium sulfate (seizure prevention) + labetalol/hydralazine for BP. Cocaine-induced: benzodiazepines + labetalol (avoid pure β-blockers).",
            rationale: "Situation-specific protocols."
          }
        ],
        drugInteractions: [
          "β-blockers + verapamil → severe bradycardia/AV block",
          "ACE inhibitors + K-sparing diuretics → hyperkalemia",
          "Nitroprusside + PDE-5 inhibitors (sildenafil) → profound hypotension",
          "Labetalol + haloperidol → ↑hypotensive effect",
          "Nicardipine + digoxin → ↑digoxin levels"
        ],
        monitoringAdvice:
          "Continuous intra-arterial BP monitoring preferred. Every 5 min during IV titration. Neurological checks every 15 min (worsening encephalopathy = over-reduction). Hourly: urine output, mental status. Every 6 hr: renal function, electrolytes. If on nitroprusside > 48 hr: serum lactate, thiocyanate levels (especially in renal failure)."
      };
    }
  },

  // ==========================================================================
  // 5. DIABETIC KETOACIDOSIS (DKA)
  // ==========================================================================
  {
    id: "pharm-dka",
    weight: 8,
    difficulty: "Adept",
    generate: () => {
      const ages = [18, 25, 32, 45, 60];
      const age = ages[Math.floor(Math.random() * ages.length)];
      const triggers = ["urinary tract infection", "gastroenteritis", "pneumonia", "missed insulin dose", "newly diagnosed type 1 DM"];
      const trigger = triggers[Math.floor(Math.random() * triggers.length)];
      return {
        patient: {
          age,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          background: `type 1 diabetic for ${Math.max(2, age - 15)} years; ${trigger}`
        },
        chiefComplaints: [
          "Polyuria and polydipsia worsening over 3 days",
          "Vomiting and abdominal pain",
          "Deep, rapid breathing (Kussmaul)",
          "Altered sensorium",
          "Fruity odor on breath"
        ],
        history: `${age}-year-old with type 1 diabetes presents with 3 days of worsening polyuria, polydipsia, vomiting, abdominal pain, and altered sensorium. Trigger: ${trigger}. Has not been checking blood sugars. Last insulin dose was 24 hours ago. Family reports patient becoming increasingly drowsy today with deep, sighing respirations.`,
        examination: [
          "Drowsy, GCS 13/15",
          "Severe dehydration — sunken eyes, dry mucous membranes, poor skin turgor",
          "Tachycardia (HR 120/min)",
          "Hypotension (BP 95/65 mmHg)",
          "Kussmaul breathing (deep, rapid, sighing) — RR 28/min",
          "Fruity (ketotic) breath odor",
          "Diffuse abdominal tenderness",
          "Capillary refill 4 sec"
        ],
        investigations: [
          {
            test: "Capillary blood glucose",
            result: "620 mg/dL",
            referenceRange: "70–140 mg/dL",
            interpretation: "Severe hyperglycemia"
          },
          {
            test: "Urine ketones",
            result: "3+ (large)",
            interpretation: "Ketonuria — confirms ketoacidosis"
          },
          {
            test: "Arterial blood gas",
            result: "pH 7.12, pCO2 22 mmHg, HCO3 8 mEq/L, anion gap 28",
            referenceRange: "pH 7.35–7.45",
            interpretation: "High anion gap metabolic acidosis with respiratory compensation (Kussmaul)"
          },
          {
            test: "Serum ketones (β-hydroxybutyrate)",
            result: "8.5 mmol/L",
            referenceRange: "< 0.6 mmol/L",
            interpretation: "Markedly elevated — confirms DKA"
          },
          {
            test: "Serum electrolytes",
            result: "Na+ 132, K+ 5.8, Cl- 96, HCO3 8 mEq/L",
            interpretation: "Hyponatremia (corrected for glucose), hyperkalemia"
          },
          {
            test: "Corrected sodium",
            result: "142 mEq/L (132 + 1.6 × (glucose-100)/100)",
            interpretation: "Normal — important for fluid choice"
          },
          {
            test: "Serum urea / creatinine",
            result: "Urea 78 mg/dL, creatinine 2.1 mg/dL",
            referenceRange: "Urea 15–40, creatinine 0.6–1.2",
            interpretation: "Pre-renal azotemia from dehydration"
          },
          {
            test: "CBC",
            result: "Hb 14.5, TLC 18,000 (neutrophilia)",
            interpretation: "Leukocytosis — infection + stress response"
          },
          {
            test: "Urinalysis",
            result: "Glucose 4+, ketones 3+, leukocytes 30/hpf, nitrites positive",
            interpretation: "UTI as precipitating factor"
          }
        ],
        imageHint:
          "Clinical: Kussmaul breathing (deep, rapid, sighing) + severe dehydration + ketotic breath. ABG: high anion gap metabolic acidosis (low pH, low HCO3, low pCO2 — compensatory). ECG: peaked T waves from hyperkalemia. CXR: rule out pneumonia.",
        provisionalDiagnosis:
          "Diabetic Ketoacidosis (DKA) precipitated by UTI",
        diagnosticReasoning:
          "Type 1 diabetic + insulin non-compliance + hyperglycemia + ketonuria + high anion gap metabolic acidosis = DKA. Triad: hyperglycemia (> 250), ketosis, acidosis (pH < 7.3, HCO3 < 15). Always look for precipitant: infection (UTI, pneumonia), missed insulin, MI, stroke, trauma, drugs. Corrected sodium is important — if low, use normal saline; if normal/high, use ½ NS. Potassium looks high but total body K+ is depleted — once insulin starts, K+ shifts intracellularly and dangerous hypokalemia can develop.",
        keyInvestigations: [
          "Capillary glucose hourly",
          "ABG every 2–4 hr",
          "Serum electrolytes every 2–4 hr (especially K+)",
          "Urine ketones + serum β-hydroxybutyrate",
          "CBC, infection screen (urine culture, blood culture, CXR)",
          "ECG (peaked T waves = hyperkalemia; arrhythmia monitoring)",
          "Renal function, serum amylase (DKA can mimic pancreatitis)",
          "Serum magnesium, phosphate",
          "Troponin (silent MI may precipitate DKA)",
          "Continuous cardiac monitoring"
        ],
        complications: [
          "Hypokalemia — commonest cause of death in DKA (insulin shifts K+ intracellularly)",
          "Cerebral edema (especially children; rapid correction)",
          "Hypoglycemia (from over-treatment with insulin)",
          "Acute respiratory distress syndrome (rare)",
          "Arrhythmias (electrolyte imbalances)",
          "Thromboembolism",
          "Mucormycosis (rare; ketoacidosis favors Rhizopus growth)"
        ],
        textbookRef: "Katzung 15e — Ch. 41, pp. 760–763",
        drugClass: "Insulin + IV Fluids + Electrolyte replacement",
        prescription: [
          {
            drug: "Normal saline 0.9%",
            dose: "1 L in first hour, then 250–500 mL/hr",
            route: "IV",
            frequency: "Continuous",
            duration: "Until dehydration corrected",
            instructions: "First-line — restores intravascular volume. Use 0.45% saline if corrected sodium is normal/high. Switch to D5½NS when glucose < 200 mg/dL."
          },
          {
            drug: "Regular insulin",
            dose: "0.1 U/kg/hr (6–10 U/hr)",
            route: "IV infusion",
            frequency: "Continuous",
            duration: "Until acidosis resolves",
            instructions: "DO NOT bolus. Goal: glucose drop 50–75 mg/dL/hr. If not dropping, double insulin rate. When glucose < 200, switch to D5 and continue insulin at lower rate."
          },
          {
            drug: "Potassium chloride",
            dose: "20–30 mEq/L of IV fluid",
            route: "IV",
            frequency: "Added to maintenance fluid",
            duration: "Until K+ stable",
            instructions: "Start when K+ < 5.5 mEq/L AND urine output established. Insulin shifts K+ intracellularly — total body K+ is depleted. Target K+ 4–5 mEq/L."
          },
          {
            drug: "Dextrose 5%",
            dose: "100 mL/hr",
            route: "IV",
            frequency: "Continuous",
            duration: "When glucose < 200 mg/dL",
            instructions: "Prevents hypoglycemia while continuing insulin to clear ketones."
          },
          {
            drug: "Sodium bicarbonate",
            dose: "1–2 ampules (50–100 mEq)",
            route: "IV",
            frequency: "Only if pH < 6.9",
            duration: "Single dose, slow infusion",
            instructions: "Controversial; may worsen hypokalemia, paradoxical CSF acidosis, delayed ketone clearance. Reserve for severe acidosis."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Initial resuscitation (0–60 min)",
            action: "IV access × 2. Normal saline 1 L in first hour. Insulin 0.1 U/kg/hr IV infusion. Identify precipitant (infection, MI, missed dose).",
            rationale: "Restore intravascular volume + begin insulin. Insulin alone will not work without rehydration."
          },
          {
            step: 2,
            phase: "Fluid + Insulin + Potassium (1–6 hr)",
            action: "Continue NS at 250–500 mL/hr. Continue insulin infusion (titrate). Add KCl 20–30 mEq/L once K+ < 5.5. Hourly glucose. ABG + electrolytes every 2–4 hr.",
            rationale: "Goal: glucose drop 50–75 mg/dL/hr. K+ will fall rapidly once insulin starts. Prevent hypokalemia."
          },
          {
            step: 3,
            phase: "Transition phase (6–12 hr)",
            action: "When glucose < 200 mg/dL: switch to D5½NS. Halve insulin rate (0.05 U/kg/hr). Continue until anion gap closes + ketones clear.",
            rationale: "Prevent hypoglycemia while clearing ketones. HCO3 may still be low (chloride from NS causes non-anion gap acidosis)."
          },
          {
            step: 4,
            phase: "Transition to subcutaneous insulin",
            action: "Once anion gap closed, ketones cleared, patient eating: give SC rapid-acting insulin, then overlap IV insulin for 1–2 hr before stopping IV.",
            rationale: "Avoid rebound DKA from gap in coverage. Calculate basal-bolus regimen (0.5–0.7 U/kg/day)."
          },
          {
            step: 5,
            phase: "Treat precipitant",
            action: "Antibiotics for infection. Treat MI. Diabetes education + ensure insulin supply before discharge.",
            rationale: "Prevent recurrence."
          },
          {
            step: 6,
            phase: "Monitor for complications",
            action: "Watch for hypoglycemia (most common), hypokalemia, cerebral edema (especially in children — headache, deterioration, bradycardia).",
            rationale: "Early recognition prevents mortality."
          }
        ],
        drugInteractions: [
          "Insulin + β-blockers — mask hypoglycemia symptoms (except sweating)",
          "Insulin + ACE inhibitors — additive hypoglycemic effect",
          "Insulin + alcohol — severe hypoglycemia",
          "Insulin + salicylates — enhanced hypoglycemia",
          "Insulin + corticosteroids — antagonize hypoglycemic effect",
          "Insulin + thiazide diuretics — antagonize via hypokalemia"
        ],
        monitoringAdvice:
          "Hourly: capillary glucose, mental status, urine output, fluid balance. Every 2–4 hr: ABG, serum electrolytes (K+, Na+, HCO3-), anion gap. Continuous cardiac monitoring (hyperkalemia). Watch: glucose drop rate (target 50–75 mg/dL/hr; if faster, may need D5 earlier), K+ trends (start KCl when K+ < 5.5 + urine output established), mental status (cerebral edema = headache, vomiting, deterioration — give mannitol). Anion gap closure (Na+ - Cl- - HCO3-) is better marker of resolution than HCO3 alone."
      };
    }
  },

  // ==========================================================================
  // 6. MALIGNANT HYPERTHERMIA
  // ==========================================================================
  {
    id: "pharm-malignant-hyperthermia",
    weight: 4,
    difficulty: "Autopsy",
    generate: () => {
      const ages = [12, 18, 25, 35, 45];
      const age = ages[Math.floor(Math.random() * ages.length)];
      const triggers = ["succinylcholine", "halothane", "sevoflurane", "isoflurane"];
      const trigger = triggers[Math.floor(Math.random() * triggers.length)];
      return {
        patient: {
          age,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          background: "for elective surgery under general anesthesia"
        },
        chiefComplaints: [
          "Intraoperative hyperthermia (rapid rise)",
          "Muscle rigidity — masseter spasm",
          "Tachycardia and tachypnea",
          "Skin mottling, sweating"
        ],
        history: `${age}-year-old patient undergoing elective surgery (appendectomy). After induction with thiopentone + ${trigger}, patient developed rapid rise in end-tidal CO2, muscle rigidity, and hyperthermia. Family history of cousin who died during anesthesia (cause unknown).`,
        examination: [
          "Under general anesthesia",
          "Masseter muscle rigidity (jaws clamped tight)",
          "Generalized muscle rigidity",
          "Temperature rising rapidly — 38.5°C → 39.8°C → 41.2°C over 30 min",
          "Tachycardia (HR 145/min)",
          "Tachypnea (despite ventilation — high ETCO2)",
          "Mottled, sweaty skin",
          "BP labile — initial rise then fall"
        ],
        investigations: [
          {
            test: "End-tidal CO2",
            result: "85 mmHg (rising despite increased ventilation)",
            referenceRange: "35–45 mmHg",
            interpretation: "Markedly raised — hallmark of malignant hyperthermia"
          },
          {
            test: "Core temperature",
            result: "41.2°C and rising rapidly (0.5°C/5 min)",
            interpretation: "Severe hyperthermia"
          },
          {
            test: "ABG",
            result: "pH 7.18, pCO2 65, HCO3 18, BE -8",
            interpretation: "Mixed respiratory + metabolic acidosis"
          },
          {
            test: "Serum potassium",
            result: "7.2 mEq/L",
            referenceRange: "3.5–5.0 mEq/L",
            interpretation: "Hyperkalemia from muscle breakdown"
          },
          {
            test: "Creatine kinase (CK)",
            result: "12,000 U/L (will rise further)",
            referenceRange: "30–200 U/L",
            interpretation: "Markedly elevated — rhabdomyolysis"
          },
          {
            test: "Myoglobinuria",
            result: "Dark tea-colored urine; myoglobin positive",
            interpretation: "Acute rhabdomyolysis"
          },
          {
            test: "ECG",
            result: "Peaked T waves, wide QRS — hyperkalemia pattern",
            interpretation: "Hyperkalemia-induced cardiac changes"
          }
        ],
        imageHint:
          "Intraoperative: rising ETCO2 + rapid temperature rise + masseter rigidity + tachycardia + dark urine (myoglobinuria). Muscle biopsy (later): positive caffeine-halothane contracture test. Genetic testing: RYR1 mutation (chromosome 19).",
        provisionalDiagnosis:
          "Malignant Hyperthermia (anesthesia-induced) — life-threatening emergency",
        diagnosticReasoning:
          "Exposure to trigger (succinylcholine or volatile anesthetic) + rapid ETCO2 rise + masseter rigidity + hyperthermia + rhabdomyolysis = malignant hyperthermia. Mechanism: mutation in ryanodine receptor (RYR1) → uncontrolled Ca²⁺ release from sarcoplasmic reticulum → sustained muscle contraction + hypermetabolism. Mortality 5–10% even with treatment. Family history of anesthesia-related death is critical clue. Treatment: STOP trigger immediately + IV dantrolene (specific antidote).",
        keyInvestigations: [
          "End-tidal CO2 (rising despite hyperventilation — most reliable early sign)",
          "Core temperature (rapid rise)",
          "ABG (mixed acidosis)",
          "Serum potassium (hyperkalemia)",
          "Creatine kinase (massively elevated)",
          "Myoglobin in urine",
          "ECG (hyperkalemia changes)",
          "Coagulation profile (DIC risk)",
          "Renal function (myoglobinuric AKI)",
          "Post-event: muscle biopsy + caffeine-halothane contracture test (CHCT) — gold standard",
          "Genetic testing for RYR1 mutation (counseling for family)"
        ],
        complications: [
          "Cardiac arrest (hyperkalemia, arrhythmias)",
          "Disseminated intravascular coagulation (DIC)",
          "Acute kidney injury (myoglobinuria)",
          "Compartment syndrome (muscle edema)",
          "Cerebral edema + seizures",
          "Pulmonary edema",
          "Death (5–10% mortality)"
        ],
        textbookRef: "Katzung 15e — Ch. 11 + 16, pp. 165 + 250",
        drugClass: "Dantrolene (specific antidote) + supportive",
        prescription: [
          {
            drug: "Dantrolene",
            dose: "2.5 mg/kg IV bolus",
            route: "IV",
            frequency: "Repeat every 5 min until symptoms subside (max 10 mg/kg)",
            duration: "Loading + maintenance 1 mg/kg QID for 24–48 hr",
            instructions: "SPECIFIC ANTIDOTE — inhibits ryanodine receptor → blocks Ca²⁺ release from SR. Reconstitute with sterile water (mannitol in vial — diuretic effect)."
          },
          {
            drug: "Cold IV fluids",
            dose: "1–2 L cold saline",
            route: "IV",
            frequency: "Rapid infusion",
            duration: "Until temperature < 38.5°C",
            instructions: "External cooling: ice packs to groin, axillae, neck; cooling blanket; cold saline lavage (gastric, peritoneal)."
          },
          {
            drug: "Insulin + dextrose",
            dose: "10 U regular insulin + 25 g dextrose (50 mL of 50%)",
            route: "IV",
            frequency: "PRN for hyperkalemia",
            duration: "Until K+ normalized",
            instructions: "Shifts K+ intracellularly. Monitor glucose."
          },
          {
            drug: "Sodium bicarbonate",
            dose: "1–2 mEq/kg",
            route: "IV",
            frequency: "PRN for severe acidosis or hyperkalemia",
            duration: "As needed",
            instructions: "Treats metabolic acidosis + shifts K+ intracellularly"
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Recognize (0–5 min)",
            action: "STOP triggering agent immediately. Call for help. Switch to non-triggering anesthesia (TIVA with propofol + opioid + 100% O2). Change circuit + CO2 absorber.",
            rationale: "Every minute of continued exposure worsens the crisis."
          },
          {
            step: 2,
            phase: "Dantrolene (5–10 min)",
            action: "IV dantrolene 2.5 mg/kg bolus, repeat every 5 min until ETCO2 falls, HR slows, rigidity reduces (max 10 mg/kg).",
            rationale: "Dantrolene is the only specific antidote — blocks RYR1, stops Ca²⁺ release. Old formulation hard to dissolve; new Ryanodex dissolves faster."
          },
          {
            step: 3,
            phase: "Cooling + treat hyperkalemia",
            action: "Surface cooling (ice packs, cooling blanket). Cold IV saline. Insulin+dextrose for hyperkalemia. Calcium gluconate for arrhythmias.",
            rationale: "Hyperthermia causes brain damage + coagulopathy. Hyperkalemia causes cardiac arrest."
          },
          {
            step: 4,
            phase: "Acidosis + arrhythmias",
            action: "Sodium bicarbonate for pH < 7.2. Avoid CCBs (can worsen hyperkalemia). Treat arrhythmias per ACLS (avoid lidocaine in MH — variable effect).",
            rationale: "Acidosis worsens hyperkalemia + cardiac instability."
          },
          {
            step: 5,
            phase: "Monitor + supportive (ongoing)",
            action: "ICU admission. Continuous ETCO2, temperature, ECG, urine output. Hourly glucose, K+, CK, ABG, coagulation. Maintain dantrolene infusion 1 mg/kg QID for 24–48 hr.",
            rationale: "Recurrence possible; monitor for DIC, AKI, compartment syndrome."
          },
          {
            step: 6,
            phase: "Long-term",
            action: "Patient + family referral to MH registry. Genetic testing (RYR1). MedicAlert bracelet. All future anesthetics: avoid triggers; use TIVA. Family screening.",
            rationale: "Autosomal dominant inheritance; relatives at risk."
          }
        ],
        drugInteractions: [
          "Dantrolene + calcium channel blockers — severe hyperkalemia + CV collapse (avoid combination)",
          "Dantrolene + estrogens — hepatotoxicity (long-term use)",
          "Avoid in MH: succinylcholine, all volatile agents (halothane, isoflurane, sevoflurane, desflurane)",
          "Safe in MH: propofol, opioids, benzodiazepines, ketamine, nitrous oxide, non-depolarizing muscle relaxants",
          "Statins + MH-like syndrome (distinguish from MH)"
        ],
        monitoringAdvice:
          "Continuous: ETCO2 (most sensitive), ECG, temperature, SpO2, BP. Hourly: ABG, K+, CK, glucose, urine output, coagulation. Watch for: recrudescence (25% rate within 24 hr — keep dantrolene available), DIC, myoglobinuric AKI (urine output > 1 mL/kg/hr), compartment syndrome. Patient must wear MedicAlert; family members need evaluation before any anesthesia."
      };
    }
  },

  // ==========================================================================
  // 7. STATUS EPILEPTICUS
  // ==========================================================================
  {
    id: "pharm-status-epilepticus",
    weight: 6,
    difficulty: "Master",
    generate: () => {
      const ages = [20, 32, 45, 58, 70];
      const age = ages[Math.floor(Math.random() * ages.length)];
      const causes = ["non-compliance with antiepileptic drugs", "alcohol withdrawal", "brain tumor", "CNS infection", "metabolic disturbance"];
      const cause = causes[Math.floor(Math.random() * causes.length)];
      return {
        patient: {
          age,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          background: `known epilepsy; ${cause}`
        },
        chiefComplaints: [
          "Continuous tonic-clonic seizures for 25 minutes",
          "Unresponsive",
          "Cyanosis during seizures",
          "Bitten tongue"
        ],
        history: `${age}-year-old known epileptic presents with continuous tonic-clonic seizures lasting 25 minutes (status epilepticus). Bystanders report patient did not regain consciousness between seizures. ${cause === "non-compliance with antiepileptic drugs" ? "Patient ran out of antiepileptic medication 5 days ago." : cause === "alcohol withdrawal" ? "Patient is chronic alcoholic; stopped drinking 3 days ago." : cause === "brain tumor" ? "Recent diagnosis of glioblastoma multiforme." : cause === "CNS infection" ? "Reports fever and headache for 2 days." : "Recent diagnosis of hyponatremia."}`,
        examination: [
          "Actively seizing — tonic-clonic movements all four limbs",
          "Unconscious, GCS 6/15",
          "Cyanosis (lip + nail bed)",
          "Tachycardia (HR 130/min)",
          "BP 170/100 mmHg",
          "Temperature 38.2°C",
          "Tongue bite marks",
          "Incontinence of urine",
          "Bilateral Babinski positive"
        ],
        investigations: [
          {
            test: "Capillary glucose",
            result: "112 mg/dL",
            interpretation: "Normal — rules out hypoglycemia"
          },
          {
            test: "ABG",
            result: "pH 7.18, pCO2 60, pO2 65, lactate 8 mmol/L",
            interpretation: "Mixed respiratory + metabolic acidosis from prolonged seizure"
          },
          {
            test: "Serum electrolytes",
            result: "Na+ 142, K+ 5.2, Ca²⁺ 9.0, Mg²⁺ 1.8 mg/dL",
            interpretation: "Normal — rules out electrolyte cause"
          },
          {
            test: "CBG drug levels",
            result: "Phenytoin 4 mg/L",
            referenceRange: "10–20 mg/L",
            interpretation: "Subtherapeutic — confirms non-compliance"
          },
          {
            test: "CT brain",
            result: "No acute hemorrhage; chronic changes only",
            interpretation: "Rules out acute structural lesion"
          },
          {
            test: "ECG",
            result: "Sinus tachycardia; QT normal",
            interpretation: "Rule out arrhythmia"
          },
          {
            test: "Toxicology screen",
            result: "Negative (or positive for alcohol if withdrawal case)",
            interpretation: "Rule out drug overdose"
          }
        ],
        imageHint:
          "EEG during status epilepticus: continuous spike-wave discharges. CT brain: rules out hemorrhage, tumor. Clinical: continuous tonic-clonic movements, cyanosis, metabolic acidosis.",
        provisionalDiagnosis:
          "Convulsive Status Epilepticus (generalized tonic-clonic > 5 min)",
        diagnosticReasoning:
          "Continuous seizure > 5 min OR recurrent seizures without recovery = status epilepticus. Cause: in known epileptic, non-compliance is most common. Always check glucose first (hypoglycemia is rapidly reversible). Drug levels confirm non-compliance. Continuous seizure > 30 min causes neuronal injury (hippocampal sclerosis) and systemic complications (acidosis, hyperkalemia, rhabdomyolysis, aspiration). Treat aggressively — IV lorazepam first-line.",
        keyInvestigations: [
          "Capillary glucose immediately (rule out hypoglycemia)",
          "ABG (acidosis, hypoxia)",
          "Serum electrolytes (Na+, K+, Ca²⁺, Mg²⁺)",
          "Antiepileptic drug levels (if patient known epileptic)",
          "Toxicology screen",
          "CBC, infection markers (CRP, blood culture)",
          "CT brain (after seizure controlled) — rule out hemorrhage, tumor",
          "LP if CNS infection suspected (after CT)",
          "ECG (QT before giving AEDs)",
          "EEG (if non-convulsive status suspected)"
        ],
        complications: [
          "Hypoxia + respiratory arrest",
          "Aspiration pneumonia",
          "Metabolic acidosis",
          "Hyperkalemia → arrhythmias",
          "Rhabdomyolysis → AKI",
          "Cerebral edema",
          "Permanent neuronal injury (hippocampal sclerosis — temporal lobe epilepsy later)",
          "Death (mortality 20% in adults)"
        ],
        textbookRef: "Katzung 15e — Ch. 24, pp. 270–272",
        drugClass: "Benzodiazepine → Phenytoin → Anesthesia",
        prescription: [
          {
            drug: "Lorazepam",
            dose: "0.1 mg/kg (4 mg) IV",
            route: "IV over 2 min",
            frequency: "Repeat after 5–10 min if still seizing (max 8 mg)",
            duration: "Loading dose",
            instructions: "FIRST-LINE. Longer duration of action than diazepam (less redistribution). If IV access impossible: midazolam 10 mg IM."
          },
          {
            drug: "Phenytoin",
            dose: "20 mg/kg (max 1.5 g)",
            route: "IV infusion at < 50 mg/min",
            frequency: "Single loading dose",
            duration: "Loading",
            instructions: "SECOND-LINE. Slow IV (risk of hypotension, arrhythmias — monitor ECG, BP). Use Fosphenytoin if available (safer, faster)."
          },
          {
            drug: "Fosphenytoin",
            dose: "20 mg PE/kg (max 1500 mg PE)",
            route: "IV at 150 mg PE/min",
            frequency: "Single loading dose",
            duration: "Loading",
            instructions: "Water-soluble prodrug; less tissue irritation; can give faster; safer than phenytoin."
          },
          {
            drug: "Levetiracetam",
            dose: "60 mg/kg (max 4500 mg)",
            route: "IV over 15 min",
            frequency: "Single dose",
            duration: "Loading",
            instructions: "Alternative to phenytoin; less drug interactions; no cardiac monitoring needed."
          },
          {
            drug: "Propofol",
            dose: "1–2 mg/kg bolus, then 2–10 mg/kg/hr infusion",
            route: "IV",
            frequency: "Continuous infusion",
            duration: "Until seizure control (24 hr then wean)",
            instructions: "For refractory status. Requires intubation + ICU. Propofol infusion syndrome risk."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Stabilization (0–5 min)",
            action: "Airway (recovery position, suction), Breathing (oxygen 100%, BVM if needed), Circulation (IV access). Check glucose; if low, give 50 mL 50% dextrose IV + thiamine 100 mg IV (in alcoholics).",
            rationale: "Hypoglycemia is rapidly reversible; thiamine prevents Wernicke."
          },
          {
            step: 2,
            phase: "First-line drug (5–10 min)",
            action: "IV lorazepam 0.1 mg/kg (4 mg) over 2 min. Repeat after 5–10 min if still seizing (max 8 mg). Alternative: IV diazepam 0.15 mg/kg (10 mg), or IM midazolam 10 mg if no IV.",
            rationale: "Benzodiazepines (GABA-A agonists) — most effective first-line; terminate 60–80% of seizures."
          },
          {
            step: 3,
            phase: "Second-line drug (10–30 min)",
            action: "IV phenytoin 20 mg/kg at < 50 mg/min (or fosphenytoin 20 mg PE/kg at 150 mg PE/min, or levetiracetam 60 mg/kg). Continuous ECG + BP monitoring.",
            rationale: "Longer-acting antiepileptic; prevents recurrence."
          },
          {
            step: 4,
            phase: "Refractory SE (> 30 min)",
            action: "Intubate + ICU admission. IV propofol infusion (or midazolam infusion, or pentobarbital). Continuous EEG monitoring (goal: burst suppression).",
            rationale: "Refractory SE has 50% mortality; requires anesthesia."
          },
          {
            step: 5,
            phase: "Identify + treat cause",
            action: "AED levels, toxicology, infection workup, CT brain, LP (if indicated), electrolyte correction.",
            rationale: "Recurrence unless cause addressed."
          },
          {
            step: 6,
            phase: "Long-term",
            action: "Restart/maintain AED. Address non-compliance (education, pill box). Driving restrictions. Follow-up EEG.",
            rationale: "Prevent recurrence; safety counseling."
          }
        ],
        drugInteractions: [
          "Lorazepam + alcohol/opioids → respiratory depression",
          "Phenytoin + warfarin → ↑INR",
          "Phenytoin + oral contraceptives → ↓OCP effectiveness",
          "Phenytoin + fluoxetine/isoniazid → ↑phenytoin levels (toxicity)",
          "Phenytoin + rifampicin → ↓phenytoin levels",
          "Levetiracetam — minimal interactions (preferred in elderly, hepatic impairment)",
          "Valproate + meropenem → ↓valproate levels (breakthrough seizures)"
        ],
        monitoringAdvice:
          "During acute treatment: continuous ECG + BP (phenytoin causes hypotension, arrhythmias), SpO2, RR. After seizure stops: hourly GCS, vital signs. Daily: phenytoin levels (target 10–20 mg/L), CBC (leukopenia), LFT. EEG if not waking up — non-convulsive status. Watch: aspiration pneumonia (CXR), rhabdomyolysis (CK, urine myoglobin), pressure sores."
      };
    }
  },

  // ==========================================================================
  // 8. WARFARIN OVERDOSE / BLEEDING
  // ==========================================================================
  {
    id: "pharm-warfarin-bleeding",
    weight: 6,
    difficulty: "Adept",
    generate: () => {
      const ages = [55, 62, 70, 75, 80];
      const age = ages[Math.floor(Math.random() * ages.length)];
      const scenarios = [
        "atrial fibrillation; recently started on amiodarone",
        "mechanical mitral valve; treated for UTI with ciprofloxacin",
        "DVT; started on fluconazole for oral candidiasis",
        "AF; started on aspirin by another doctor"
      ];
      const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
      return {
        patient: {
          age,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          background: `on warfarin for ${scenario}`
        },
        chiefComplaints: [
          "Hematuria for 2 days",
          "Bruising on arms and legs",
          "Bleeding gums",
          "Black tarry stools (malaena)"
        ],
        history: `${age}-year-old on warfarin for ${scenario}. Presents with hematuria, easy bruising, bleeding gums, and malaena for 2 days. No trauma. Reports recent addition of a new medication but unsure of name.`,
        examination: [
          "Pallor",
          "Multiple ecchymoses on arms, legs, trunk",
          "Bleeding from gums",
          "HR 105/min, BP 110/70 (postural drop 15 mmHg)",
          "Abdomen: epigastric tenderness",
          "Rectal examination: malaena"
        ],
        investigations: [
          {
            test: "PT/INR",
            result: "INR 12.5",
            referenceRange: "INR 2.0–3.0 (target for AF, DVT)",
            interpretation: "Markedly supra-therapeutic — major bleeding risk"
          },
          {
            test: "aPTT",
            result: "68 sec",
            referenceRange: "25–35 sec",
            interpretation: "Mildly prolonged (factor IX reduction)"
          },
          {
            test: "Platelet count",
            result: "210,000/μL",
            referenceRange: "150,000–450,000",
            interpretation: "Normal — rules out thrombocytopenia"
          },
          {
            test: "Hemoglobin",
            result: "7.2 g/dL",
            referenceRange: "13–17 g/dL",
            interpretation: "Significant blood loss anemia"
          },
          {
            test: "Fibrinogen",
            result: "320 mg/dL",
            referenceRange: "200–400 mg/dL",
            interpretation: "Normal — DIC excluded"
          },
          {
            test: "Renal function",
            result: "Urea 95, creatinine 1.8 mg/dL",
            interpretation: "Pre-renal from GI bleed"
          }
        ],
        imageHint:
          "ECG: tachycardia. Endoscopy: upper GI bleed (likely peptic ulcer — warfarin potentiates bleeding). CT abdomen: rule out retroperitoneal bleed if suspected.",
        provisionalDiagnosis:
          "Major bleeding secondary to warfarin toxicity (INR 12.5) — likely drug interaction",
        diagnosticReasoning:
          "Patient on warfarin + supra-therapeutic INR + bleeding from multiple sites = warfarin toxicity. Cause: drug interaction (amiodarone, ciprofloxacin, fluconazole — all CYP3A4/2C9 inhibitors ↑warfarin levels; aspirin adds antiplatelet effect). Treatment depends on INR + bleeding severity. Vitamin K reverses warfarin (slow — 6–12 hr). FFP reverses immediately (factor replacement). PCC (Prothrombin Complex Concentrate) is faster and more effective than FFP.",
        keyInvestigations: [
          "PT/INR (immediate)",
          "aPTT (rule out coexisting intrinsic defect)",
          "Platelet count, fibrinogen, D-dimer (rule out DIC)",
          "CBC + peripheral smear",
          "Renal function, electrolytes",
          "LFT (hepatic dysfunction reduces factor synthesis)",
          "Cross-match blood (4 units)",
          "Endoscopy if GI bleed",
          "CT abdomen if retroperitoneal bleed suspected",
          "ECG (amiodarone interaction — QT)"
        ],
        complications: [
          "Intracranial hemorrhage (most feared — 50% mortality)",
          "Retroperitoneal bleed",
          "GI hemorrhage with hypovolemic shock",
          "Anemia requiring transfusion",
          "Warfarin-induced skin necrosis (rare; early in therapy, protein C depletion)",
          "Purple toe syndrome (cholesterol embolization — rare)"
        ],
        textbookRef: "Katzung 15e — Ch. 34, pp. 590–598",
        drugClass: "Vitamin K + FFP/PCC (reversal agents)",
        prescription: [
          {
            drug: "Vitamin K (phytomenadione)",
            dose: "5–10 mg IV (slow over 10 min)",
            route: "IV (or PO if minor bleeding)",
            frequency: "Single dose; repeat based on INR",
            duration: "Until INR in therapeutic range",
            instructions: "SLOW IV (anaphylactoid reactions). Onset 6–12 hr; full effect 24 hr. Major bleeding: IV. Minor supra-therapeutic INR without bleeding: oral."
          },
          {
            drug: "Prothrombin Complex Concentrate (PCC)",
            dose: "25–50 U/kg (based on INR + weight)",
            route: "IV over 10 min",
            frequency: "Single bolus",
            duration: "Immediate reversal",
            instructions: "PREFERRED over FFP. Contains factors II, VII, IX, X. Works in 10 min. Higher thrombosis risk vs FFP."
          },
          {
            drug: "Fresh Frozen Plasma (FFP)",
            dose: "15 mL/kg (4 units for adult)",
            route: "IV",
            frequency: "Single transfusion",
            duration: "Recheck INR in 30 min",
            instructions: "Alternative if PCC unavailable. Volume overload risk (especially elderly, heart failure)."
          },
          {
            drug: "Blood transfusion (PRBC)",
            dose: "1 unit raises Hb by 1 g/dL",
            route: "IV",
            frequency: "As needed based on Hb",
            duration: "Until Hb > 8 g/dL",
            instructions: "Transfuse if Hb < 7 g/dL or symptomatic."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Assessment (0–15 min)",
            action: "Assess ABCs. IV access × 2. Stat PT/INR, CBC, type + cross. Identify bleeding source. Stop warfarin immediately.",
            rationale: "Severity of bleeding + INR guides reversal intensity."
          },
          {
            step: 2,
            phase: "Immediate reversal",
            action: "If life-threatening bleed (ICH, GI with shock): PCC + IV vitamin K 10 mg. If non-major bleed: FFP + IV vitamin K 5–10 mg. If INR elevated without bleed: hold warfarin + low-dose oral vitamin K.",
            rationale: "PCC reverses within minutes; vitamin K takes 6–12 hr (sustained reversal). Combination ensures both immediate + sustained reversal."
          },
          {
            step: 3,
            phase: "Source control",
            action: "Endoscopy for GI bleed (clipping, adrenaline injection). Neurosurgery consult for ICH. Interventional radiology for retroperitoneal.",
            rationale: "Reversal alone won't stop anatomical source."
          },
          {
            step: 4,
            phase: "Transfusion",
            action: "PRBC if Hb < 7 g/dL (or < 8 with symptoms/cardiac disease). Platelets if antiplatelet agent also involved.",
            rationale: "Optimize oxygen delivery + hemostasis."
          },
          {
            step: 5,
            phase: "Recheck + adjust",
            action: "Recheck INR at 30 min, 6 hr, 12 hr, 24 hr. Repeat PCC/FFP if INR still high. Adjust vitamin K dosing.",
            rationale: "Ensure sustained reversal; some patients need repeat vitamin K."
          },
          {
            step: 6,
            phase: "Restart anticoagulation",
            action: "After bleeding controlled + INR normal: assess thrombotic risk vs bleeding risk. Consider bridging with heparin (short half-life, reversible) before restarting warfarin. Or switch to DOAC (lower bleeding risk). Address drug interaction (avoid offending drug).",
            rationale: "Balance thrombosis vs hemorrhage. Don't restart warfarin until bleed controlled."
          }
        ],
        drugInteractions: [
          "Warfarin + amiodarone → marked INHIBITION of warfarin metabolism (CYP2C9); reduce warfarin dose 30–50%",
          "Warfarin + fluconazole/miconazole/metronidazole → CYP2C9 inhibition; ↑INR",
          "Warfarin + ciprofloxacin/levofloxacin → ↑INR (CYP1A2 inhibition)",
          "Warfarin + cotrimoxazole → ↑INR (CYP2C9 + displacement)",
          "Warfarin + aspirin/clopidogrel/NSAIDs → additive bleeding risk",
          "Warfarin + rifampicin/phenytoin/carbamazepine → ↓warfarin effect (enzyme induction)",
          "Warfarin + St John's Wort → ↓warfarin effect",
          "Warfarin + alcohol (acute binge) → ↑INR (acute enzyme inhibition)",
          "Warfarin + vitamin K-rich foods (spinach, broccoli) → variable effect"
        ],
        monitoringAdvice:
          "INR: every 30 min after PCC until < 4, then every 6 hr × 24 hr, then daily. Hemoglobin: every 6 hr until stable. Renal function, electrolytes daily. Watch for: rebleeding (GI, intracranial), thrombosis (PCC-induced — DVT, PE, MI, stroke), volume overload from FFP. Educate patient: drug interactions, diet consistency, MedicAlert bracelet, regular INR checks."
      };
    }
  },

  // ==========================================================================
  // 9. ANTIBIOTIC STEWARDSHIP CASE — EMPIRICAL THERAPY
  // ==========================================================================
  {
    id: "pharm-empirical-antibiotic",
    weight: 8,
    difficulty: "Adept",
    generate: () => {
      const scenarios = [
        {
          presentation: "community-acquired pneumonia",
          symptoms: ["Fever with chills", "Productive cough with rusty sputum", "Pleuritic chest pain", "Shortness of breath"],
          exam: ["T 39°C, RR 28", "Right basal crackles + bronchial breathing", "Pleuritic rub", "SpO2 92% room air"],
          cxr: "Right lower lobe homogeneous consolidation with air bronchogram",
          diagnosis: "Community-acquired Pneumonia (CAP) — severe CURB-65 = 2"
        },
        {
          presentation: "urinary tract infection with sepsis",
          symptoms: ["High-grade fever with chills", "Burning micturition", "Flank pain", "Altered sensorium"],
          exam: ["T 39.5°C, HR 120, BP 95/65", "Tender right renal angle", "Confused", "Cap refill 4 sec"],
          cxr: "Normal",
          diagnosis: "Acute pyelonephritis with urosepsis"
        },
        {
          presentation: "cellulitis with sepsis",
          symptoms: ["Fever with chills", "Painful swollen right leg", "Redness spreading", "Confusion"],
          exam: ["T 39°C, HR 130, BP 90/60", "Right leg: 3 cm larger than left, erythema with induration, tender, warm", "Spreading lymphangitis"],
          cxr: "Normal",
          diagnosis: "Cellulitis with severe sepsis"
        }
      ];
      const s = scenarios[Math.floor(Math.random() * scenarios.length)];
      const ages = [40, 55, 65, 70, 75];
      const age = ages[Math.floor(Math.random() * ages.length)];
      return {
        patient: {
          age,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          background: `${s.presentation}`
        },
        chiefComplaints: s.symptoms,
        history: `${age}-year-old presents with ${s.presentation}. Symptoms started 3 days ago, progressively worsening. No significant past medical history. No known drug allergies.`,
        examination: s.exam,
        investigations: [
          {
            test: "CBC",
            result: "Hb 12.5, TLC 18,500/μL (neutrophils 88%), platelets 220,000",
            interpretation: "Leukocytosis with neutrophilia — bacterial infection"
          },
          {
            test: "CRP",
            result: "180 mg/L",
            referenceRange: "< 5 mg/L",
            interpretation: "Markedly elevated"
          },
          {
            test: "Blood culture",
            result: "Pending (will be positive in 24–48 hr)",
            interpretation: "Obtain before starting antibiotics IF possible, but don't delay therapy"
          },
          {
            test: "Sputum / Urine / Wound swab culture",
            result: "Pending",
            interpretation: "Site-specific culture"
          },
          {
            test: "Chest X-ray",
            result: s.cxr,
            interpretation: s.diagnosis.includes("pneumonia") ? "Lobar consolidation" : "No active lung pathology"
          },
          {
            test: "Lactate",
            result: "4.2 mmol/L",
            referenceRange: "< 2 mmol/L",
            interpretation: "Elevated — tissue hypoperfusion (sepsis)"
          },
          {
            test: "Renal function",
            result: "Urea 65, creatinine 1.9 mg/dL",
            interpretation: "Acute kidney injury from sepsis"
          },
          {
            test: "ABG",
            result: "pH 7.30, pCO2 32, HCO3 18, lactate 4.5",
            interpretation: "Metabolic acidosis with respiratory compensation — sepsis"
          }
        ],
        imageHint:
          "Chest X-ray (pneumonia): lobar consolidation with air bronchogram. CT abdomen (pyelonephritis): enlarged kidney with perinephric stranding. Skin (cellulitis): erythema with induration, lymphangitis.",
        provisionalDiagnosis:
          s.diagnosis + " — empirical antibiotic therapy required",
        diagnosticReasoning:
          `${s.diagnosis}. Sepsis defined as infection + systemic response (SIRS) + organ dysfunction (lactate > 2, altered mentation, hypotension, AKI). Start empirical broad-spectrum antibiotics within 1 hour (Surviving Sepsis Campaign — each hour delay increases mortality). Take cultures first IF possible without delaying therapy. De-escalate once culture + sensitivity available (typically 48 hr).`,
        keyInvestigations: [
          "Blood cultures × 2 (before antibiotics — but don't delay therapy > 45 min)",
          "Site-specific culture (sputum, urine, wound swab)",
          "CBC with differential, CRP, procalcitonin",
          "Lactate (baseline + repeat at 2 hr — guide resuscitation)",
          "Renal function, LFT, electrolytes",
          "Coagulation profile",
          "ABG (acidosis, hypoxia)",
          "Chest X-ray",
          "Urinalysis (if UTI suspected)",
          "Imaging as per site (CT abdomen, USG)"
        ],
        complications: [
          "Septic shock (refractory hypotension)",
          "Acute respiratory distress syndrome (ARDS)",
          "Multi-organ failure (renal, hepatic, cardiac)",
          "Disseminated intravascular coagulation (DIC)",
          "Metastatic infection (endocarditis, meningitis, osteomyelitis)",
          "Antibiotic-associated C. difficile colitis",
          "Antibiotic resistance selection",
          "Death (sepsis mortality 10–30%)"
        ],
        textbookRef: "Katzung 15e — Ch. 51, pp. 870–880",
        drugClass: "Empirical broad-spectrum antibiotics (per syndrome)",
        prescription: [
          {
            drug: s.diagnosis.includes("pneumonia") ? "Ceftriaxone" : s.diagnosis.includes("pyelonephritis") ? "Ceftriaxone" : "Cefazolin + Vancomycin",
            dose: "1–2 g",
            route: "IV",
            frequency: s.diagnosis.includes("pneumonia") ? "Once daily" : "BD",
            duration: "5–7 days (CAP), 7–14 days (pyelonephritis), 5–7 days (cellulitis)",
            instructions: "Empirical choice per syndrome + local resistance pattern"
          },
          {
            drug: "Azithromycin",
            dose: "500 mg",
            route: "PO/IV",
            frequency: "OD",
            duration: "5 days",
            instructions: "Add to ceftriaxone for CAP — covers atypicals (Mycoplasma, Legionella, Chlamydia)"
          },
          {
            drug: "Gentamicin",
            dose: "5–7 mg/kg",
            route: "IV",
            frequency: "Once daily",
            duration: "5–7 days",
            instructions: "Add for pyelonephritis/sepsis (gram-negative + Pseudomonas). TDM required (trough < 1 μg/mL)."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Sepsis Six (within 1 hour)",
            action: "(1) Oxygen to SpO2 > 94%. (2) Take blood cultures. (3) IV antibiotics. (4) IV fluids 30 mL/kg crystalloid. (5) Lactate. (6) Urine output monitoring.",
            rationale: "Surviving Sepsis Campaign — each hour delay in antibiotics increases mortality by 7.6%."
          },
          {
            step: 2,
            phase: "Empirical antibiotic (within 1 hr)",
            action: "Broad-spectrum IV antibiotic per syndrome: CAP → ceftriaxone + azithromycin. Pyelonephritis/sepsis → ceftriaxone ± gentamicin. Cellulitis → cefazolin (add vancomycin if MRSA suspected). Meningitis → ceftriaxone + vancomycin + dexamethasone.",
            rationale: "Cover most likely pathogens empirically; de-escalate after cultures."
          },
          {
            step: 3,
            phase: "Source control",
            action: "Identify + treat source: drain abscess, remove infected line, debride wound, relieve obstruction.",
            rationale: "Antibiotics alone won't cure if source persists."
          },
          {
            step: 4,
            phase: "Reassessment at 48–72 hr",
            action: "Review clinical response + culture results. Narrow spectrum (de-escalation). Switch IV to PO if afebrile 48 hr + hemodynamically stable + functioning GI tract. Duration: most infections 5–7 days (longer for S. aureus bacteremia, endocarditis, osteomyelitis).",
            rationale: "Reduce resistance selection, C. difficile risk, cost, side effects."
          },
          {
            step: 5,
            phase: "Vasopressors (if shock persists)",
            action: "If MAP < 65 despite fluids: IV norepinephrine (first-line). Add vasopressin if refractory. Add corticosteroid (hydrocortisone 200 mg/day) if persistent shock.",
            rationale: "Restore perfusion pressure; steroids in refractory septic shock."
          },
          {
            step: 6,
            phase: "Antibiotic stewardship",
            action: "Document indication, drug, dose, route, duration, planned review date. Avoid duplicate therapy. Use shortest effective duration. Consider allergy, renal function, local resistance.",
            rationale: "Reduce resistance + adverse effects; preserve antibiotics for future."
          }
        ],
        drugInteractions: [
          "Ceftriaxone + calcium-containing IV fluids — fatal precipitate in neonates; avoid in all ages",
          "Gentamicin + furosemide — additive ototoxicity + nephrotoxicity",
          "Gentamicin + vancomycin — additive nephrotoxicity",
          "Macrolides + statins — ↑statin levels (rhabdomyolysis)",
          "Macrolides + warfarin — ↑INR",
          "Fluoroquinolones + antacids/iron/calcium — ↓absorption",
          "Vancomycin + piperacillin-tazobactam — ↑AKI risk"
        ],
        monitoringAdvice:
          "Daily: clinical response (fever, WBC, CRP trend), renal function (especially with aminoglycosides/vancomycin), LFT. Therapeutic drug monitoring: gentamicin (trough < 1, peak 5–10 μg/mL), vancomycin (trough 15–20 μg/mL). Repeat cultures if persistent fever. Watch: C. difficile (diarrhea — send toxin assay), drug fever, allergic reactions. Stop antibiotics once clinical cure achieved (afebrile 48 hr + improving inflammatory markers + functioning GI tract)."
      };
    }
  },

  // ==========================================================================
  // 10. THYROID STORM
  // ==========================================================================
  {
    id: "pharm-thyroid-storm",
    weight: 4,
    difficulty: "Master",
    generate: () => {
      const ages = [30, 40, 50, 60];
      const age = ages[Math.floor(Math.random() * ages.length)];
      return {
        patient: {
          age,
          gender: "Female",
          background: "known Graves' disease; recently stopped antithyroid drugs"
        },
        chiefComplaints: [
          "High-grade fever",
          "Palpitations and chest pain",
          "Vomiting and diarrhea",
          "Altered mental status",
          "Tremors and agitation"
        ],
        history: `${age}-year-old female with history of Graves' disease (off carbimazole for 2 weeks — non-compliant) presents with high fever (39.5°C), palpitations, vomiting, diarrhea, confusion, and agitation. Triggered by recent urinary tract infection.`,
        examination: [
          "Hyperthermia — T 40°C",
          "Tachycardia — HR 160/min, atrial fibrillation",
          "Tachypnea — RR 30/min",
          "BP 170/95 mmHg (high pulse pressure)",
          "Agitated, confused, GCS 13/15",
          "Warm, sweaty skin",
          "Diffuse goiter with bruit",
          "Exophthalmos",
          "Lid lag",
          "Tremors",
          "Brisk reflexes",
          "Jaundice (severe case)"
        ],
        investigations: [
          {
            test: "TSH",
            result: "< 0.01 μIU/mL",
            referenceRange: "0.4–4.0 μIU/mL",
            interpretation: "Suppressed"
          },
          {
            test: "Free T4",
            result: "> 7.7 ng/dL",
            referenceRange: "0.8–1.8 ng/dL",
            interpretation: "Markedly elevated"
          },
          {
            test: "Free T3",
            result: "> 20 pg/mL",
            referenceRange: "2.3–4.2 pg/mL",
            interpretation: "Markedly elevated"
          },
          {
            test: "ECG",
            result: "Atrial fibrillation with rapid ventricular response (HR 160)",
            interpretation: "Thyrotoxic heart disease"
          },
          {
            test: "LFT",
            result: "Bilirubin 3.5 mg/dL, AST 220, ALT 180",
            interpretation: "Hepatic dysfunction — severe thyrotoxicosis"
          },
          {
            test: "CBC",
            result: "Hb 11, TLC 18,000, neutrophilia",
            interpretation: "Underlying infection"
          },
          {
            test: "Urinalysis",
            result: "Pus cells 50/hpf, nitrite positive",
            interpretation: "UTI — precipitating factor"
          }
        ],
        imageHint:
          "Clinical: hyperthermia + tachyarrhythmia (AF) + altered mental status + goiter + exophthalmos. ECG: atrial fibrillation with rapid ventricular response. Lab: undetectable TSH, very high T3/T4 + abnormal LFT.",
        provisionalDiagnosis:
          "Thyroid Storm (thyrotoxic crisis) precipitated by UTI",
        diagnosticReasoning:
          "Known hyperthyroid + trigger (infection, surgery, trauma, iodine load, withdrawal of antithyroid drug) + hyperthermia + tachyarrhythmia + altered mental status + GI symptoms + heart failure = thyroid storm. Burch-Wartofsky score helps diagnosis. Mortality 10–30%. The four goals: (1) block synthesis (PTU/methimazole), (2) block release (iodine — but only AFTER thionamide), (3) block T4 → T3 conversion (PTU, propranolol, corticosteroid), (4) block peripheral effects (β-blocker). Supportive: cooling, fluids, treat precipitant.",
        keyInvestigations: [
          "TSH + free T4 + free T3 (do not delay treatment — start empirically)",
          "ECG (arrhythmia — AF, SVT)",
          "CBC, infection markers (CRP, blood + urine culture)",
          "LFT (hepatic dysfunction common)",
          "Electrolytes, glucose (hyperglycemia common)",
          "ABG (hypoxia, acidosis)",
          "Chest X-ray (heart failure, infection)",
          "Echocardiography (if cardiac failure)",
          "TSH receptor antibodies (confirm Graves')"
        ],
        complications: [
          "Atrial fibrillation → thromboembolism, stroke",
          "High-output cardiac failure → cardiogenic shock",
          "Hepatic failure",
          "Adrenal crisis (increased cortisol clearance)",
          "Hypokalemia (thyrotoxic periodic paralysis — especially in Asian males)",
          "Death (10–30% mortality)"
        ],
        textbookRef: "Katzung 15e — Ch. 38, pp. 715–718",
        drugClass: "Thionamide + β-blocker + Iodine + Corticosteroid",
        prescription: [
          {
            drug: "Propylthiouracil (PTU)",
            dose: "500–1000 mg loading, then 250 mg every 4 hours",
            route: "PO (or via NG)",
            frequency: "QID",
            duration: "Until stable (then switch to methimazole)",
            instructions: "Preferred over methimazole in thyroid storm — also blocks peripheral T4 → T3 conversion (5'-deiodinase inhibition)."
          },
          {
            drug: "Propranolol",
            dose: "60–80 mg PO every 4 hr OR 1–2 mg IV slow",
            route: "PO or IV",
            frequency: "QID",
            duration: "Until clinical stability",
            instructions: "Blocks β-adrenergic effects AND peripheral T4 → T3 conversion. CI: severe asthma, decompensated heart failure. Use diltiazem if β-blocker CI."
          },
          {
            drug: "Hydrocortisone",
            dose: "100 mg IV",
            route: "IV",
            frequency: "Every 8 hr",
            duration: "First 48 hr, then taper",
            instructions: "Treats relative adrenal insufficiency (high cortisol turnover in thyrotoxicosis) AND blocks T4 → T3 conversion."
          },
          {
            drug: "Lugol's iodine (or KI)",
            dose: "5–10 drops PO",
            route: "PO",
            frequency: "Every 6 hr",
            duration: "Started AT LEAST 1 hour after PTU",
            instructions: "Wolff-Chaikoff effect — blocks release of preformed hormone. CRITICAL: give AFTER PTU/methimazole (otherwise iodine provides substrate for new hormone synthesis — Jod-Basedow phenomenon)."
          }
        ],
        managementProtocol: [
          {
            step: 1,
            phase: "Supportive (0–1 hr)",
            action: "ICU admission. IV access. Cooling blankets, ice packs, paracetamol (AVOID aspirin — displaces T4 from binding proteins). IV fluids (D5NS — correct dehydration + provide glucose). Oxygen.",
            rationale: "Reduce mortality from hyperthermia + dehydration. Aspirin contraindicated."
          },
          {
            step: 2,
            phase: "Block synthesis (1 hr)",
            action: "PTU 500–1000 mg loading, then 250 mg QID (or methimazole 60–80 mg/day if PTU unavailable).",
            rationale: "Block new hormone synthesis. PTU preferred (also blocks peripheral conversion)."
          },
          {
            step: 3,
            phase: "Block release (after 1 hour of PTU)",
            action: "Lugol's iodine 5–10 drops QID OR saturated KI 5 drops QID. Started AT LEAST 1 hr AFTER PTU.",
            rationale: "Wolff-Chaikoff effect — blocks hormone release. If given before thionamide, iodine is used as substrate (Jod-Basedow)."
          },
          {
            step: 4,
            phase: "Block peripheral effects (concurrent)",
            action: "Propranolol 60–80 mg PO QID (or 1–2 mg IV slowly). Diltiazem if β-blocker CI. Hydrocortisone 100 mg IV TID.",
            rationale: "β-blockade for cardiac effects + peripheral T4 → T3 conversion. Steroid for adrenal insufficiency + conversion block."
          },
          {
            step: 5,
            phase: "Treat precipitant",
            action: "Antibiotics for infection. Glucose + thiamine if alcoholic. Stop amiodarone if causative. Treat DKA if coexisting.",
            rationale: "Storm will recur if trigger persists."
          },
          {
            step: 6,
            phase: "Definitive therapy (after stabilization)",
            action: "Once stable: continue methimazole + β-blocker. Plan radioactive iodine (after 4–6 weeks of thionamide) or thyroidectomy (after euthyroid). Lifelong levothyroxine replacement after definitive therapy.",
            rationale: "Prevents recurrence of storm."
          }
        ],
        drugInteractions: [
          "Warfarin + thyrotoxicosis — ↑warfarin effect (hyperthyroid state increases clotting factor catabolism; dose reduction needed)",
          "PTU + methimazole — same target; do not combine",
          "Iodine + thionamide — iodine AFTER thionamide (timing critical)",
          "β-blocker + calcium channel blocker — severe bradycardia/hypotension",
          "Amiodarone — iodine load can trigger storm in hyperthyroid patients",
          "Aspirin — displaces T4 from TBG (free T4 rises); AVOID; use paracetamol"
        ],
        monitoringAdvice:
          "ICU monitoring: continuous ECG (AF, ventricular response), BP, SpO2, temperature hourly. Vitals every 1 hr during acute phase. Daily: LFT, renal function, electrolytes, glucose. Free T4 every 24 hr (should fall by 30–50% in 24 hr with PTU). Watch: heart failure (JVP, lung sounds, edema), hepatic encephalopathy, adrenal crisis (hypotension refractory to pressors)."
      };
    }
  }
];

// ----------------------------------------------------------------------------
// RANDOMIZER FUNCTION
// ----------------------------------------------------------------------------

export function generatePharmCase(difficulty?: Difficulty): PharmCase {
  const pool = difficulty
    ? templates.filter((t) => t.difficulty === difficulty)
    : templates;

  const selectedPool = pool.length > 0 ? pool : templates;

  // Weighted random selection
  const totalWeight = selectedPool.reduce((sum, t) => sum + t.weight, 0);
  let random = Math.random() * totalWeight;
  let selected = selectedPool[0];
  for (const t of selectedPool) {
    random -= t.weight;
    if (random <= 0) {
      selected = t;
      break;
    }
  }

  const generated = selected.generate();
  return {
    ...generated,
    id: `pharm-case-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    difficulty: selected.difficulty
  };
}
