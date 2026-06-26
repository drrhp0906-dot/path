// ============================================================================
// CASE RANDOMIZER — Procedurally generates infinite pathology case studies
// using templates derived from the user's past-paper question bank.
// All diagnoses, investigations, and findings align with Robbins Basic
// Pathology, Bailey & Love, and international (WHO / ACC / NCI) guidelines.
// ============================================================================

export type Difficulty = "Apprentice" | "Adept" | "Master" | "Autopsy";

export interface GeneratedCase {
  id: string;
  difficulty: Difficulty;
  patient: {
    age: number;
    gender: "Male" | "Female";
    occupation?: string;
    background?: string;
  };
  chiefComplaints: string[];
  history: string;
  examination: string[];
  investigations: InvestigationResult[];
  imageHint: string; // describes a typical gross/microscopy finding
  provisionalDiagnosis: string;
  diagnosticReasoning: string;
  keyInvestigations: string[];
  complications: string[];
  textbookRef: string;
}

export interface InvestigationResult {
  test: string;
  result: string;
  referenceRange?: string;
  interpretation: string;
}

// ----------------------------------------------------------------------------
// PATIENT PROFILE POOL
// ----------------------------------------------------------------------------
const maleOccupations = [
  "truck driver",
  "factory worker",
  "construction laborer",
  "chronic alcoholic",
  "smoker for 25 years",
  "executive with sedentary lifestyle",
  "farmer",
  "shopkeeper",
  "teacher",
  "mechanic",
  "IV drug user"
];

const femaleBackgrounds = [
  "mother of three children",
  "vegetarian",
  "post-menopausal",
  "with history of menorrhagia",
  "recently delivered",
  "with multiple blood transfusions",
  "on long-term NSAIDs",
  "with family history of breast cancer",
  "with hypothyroidism",
  "with prior cervical dysplasia"
];

// ----------------------------------------------------------------------------
// CASE TEMPLATES — each template is a generator function
// ----------------------------------------------------------------------------

interface CaseTemplate {
  id: string;
  weight: number; // higher = more likely
  difficulty: Difficulty;
  generate: () => Omit<GeneratedCase, "id" | "difficulty">;
}

const templates: CaseTemplate[] = [
  // ==========================================================================
  // 1. ALCOHOLIC LIVER DISEASE / CIRRHOSIS
  // ==========================================================================
  {
    id: "ald-cirrhosis",
    weight: 10,
    difficulty: "Adept",
    generate: () => {
      const ages = [45, 50, 52, 55, 58, 60, 62];
      const age = ages[Math.floor(Math.random() * ages.length)];
      const presentations = [
        {
          complaints: ["Hematemesis", "Malaena (black tarry stools)"],
          exam: [
            "Palmar erythema",
            "Spider naevi on chest and abdomen",
            "Ascites",
            "Jaundice",
            "Hepatomegaly progressing to shrunken liver",
            "Gynecomastia and testicular atrophy",
            "Caput medusae (dilated periumbilical veins)"
          ]
        },
        {
          complaints: ["Jaundice", "Abdominal distension", "Weight loss"],
          exam: [
            "Deep jaundice",
            "Spider naevi",
            "Ascites",
            "Pedal edema",
            "Asterixis (liver flap)",
            "Fetor hepaticus"
          ]
        },
        {
          complaints: ["Confusion", "Hematemesis"],
          exam: [
            "Stupor",
            "Ascites",
            "Palmar erythema",
            "Constructional apraxia"
          ]
        }
      ];
      const pres = presentations[Math.floor(Math.random() * presentations.length)];
      return {
        patient: {
          age,
          gender: "Male",
          occupation: "chronic alcoholic",
          background: `Drinks 80–120 g alcohol daily for ${Math.max(
            15,
            Math.floor((age - 30) / 2) * 5
          )} years`
        },
        chiefComplaints: pres.complaints,
        history: `Chronic alcoholic with ${pres.complaints
          .join(", ")
          .toLowerCase()} for the past ${[1, 2, 3][Math.floor(Math.random() * 3)]} weeks. No history of jaundice previously. No blood transfusions.`,
        examination: pres.exam,
        investigations: [
          {
            test: "AST",
            result: "180 U/L",
            referenceRange: "10–40 U/L",
            interpretation: "Markedly elevated"
          },
          {
            test: "ALT",
            result: "65 U/L",
            referenceRange: "7–56 U/L",
            interpretation: "Mildly elevated; AST:ALT ratio > 2 (classic for alcoholic hepatitis)"
          },
          {
            test: "GGT",
            result: "320 U/L",
            referenceRange: "8–61 U/L",
            interpretation: "Markedly elevated; sensitive for alcohol-induced liver disease"
          },
          {
            test: "Serum bilirubin",
            result: "6.5 mg/dL",
            referenceRange: "0.3–1.2 mg/dL",
            interpretation: "Mixed conjugated + unconjugated"
          },
          {
            test: "Albumin",
            result: "2.4 g/dL",
            referenceRange: "3.5–5.0 g/dL",
            interpretation: "Low — impaired synthesis (synthetic failure)"
          },
          {
            test: "Prothrombin time",
            result: "22 sec (INR 2.1)",
            referenceRange: "11–13.5 sec",
            interpretation: "Prolonged — impaired coagulation factor synthesis"
          },
          {
            test: "MCV",
            result: "108 fL",
            referenceRange: "80–100 fL",
            interpretation: "Macrocytosis — folate/B12 deficiency or direct alcohol toxicity"
          },
          {
            test: "USG abdomen",
            result: "Shrunken liver with coarse echotexture, splenomegaly (16 cm), ascites",
            interpretation: "Cirrhosis with portal hypertension"
          },
          {
            test: "Upper GI endoscopy",
            result: "Esophageal varices (grade III) with red wale signs",
            interpretation: "Portal hypertension"
          }
        ],
        imageHint:
          "Gross: micronodular liver (nodules < 3 mm, uniform) with fibrous septa. Microscopy: Mallory-Denk bodies (eosinophilic tangled cytokeratin inclusions), neutrophilic infiltrate, ballooning degeneration, fibrosis bridging portal tracts.",
        provisionalDiagnosis:
          "Alcoholic Liver Disease with established micronodular (Laennec's) cirrhosis and portal hypertension",
        diagnosticReasoning:
          "Chronic alcoholism + classic AST:ALT > 2 + macrocytosis + spider naevi/palmar erythema + varices = cirrhosis. The presence of ascites and prolonged PT indicates decompensation. The micronodular pattern is typical of alcohol-induced cirrhosis.",
        keyInvestigations: [
          "Liver function tests (AST, ALT, ALP, GGT, bilirubin, albumin)",
          "Coagulation profile (PT/INR)",
          "Complete blood count (look for macrocytosis, thrombocytopenia from hypersplenism)",
          "Viral markers (HBsAg, anti-HCV) — rule out co-infection",
          "Serum electrolytes, urea, creatinine (hepatorenal syndrome)",
          "USG abdomen with Doppler (portal vein flow, spleen size, ascites)",
          "Upper GI endoscopy (varices, portal hypertensive gastropathy)",
          "Liver biopsy (gold standard — confirm cirrhosis, grade activity, assess etiology)",
          "AFP (screening for HCC)",
          "Ascitic fluid analysis (SAAG > 1.1 g/dL confirms portal hypertension)"
        ],
        complications: [
          "Esophageal variceal hemorrhage (commonest cause of death)",
          "Hepatic encephalopathy",
          "Spontaneous bacterial peritonitis",
          "Hepatorenal syndrome",
          "Hepatopulmonary syndrome",
          "Hepatocellular carcinoma (annual risk 1–4%)",
          "Coagulopathy",
          "Malnutrition"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 17, pp. 826–835"
      };
    }
  },

  // ==========================================================================
  // 2. ACUTE MYOCARDIAL INFARCTION
  // ==========================================================================
  {
    id: "acute-mi",
    weight: 10,
    difficulty: "Adept",
    generate: () => {
      const profiles = [
        { age: 45, gender: "Male" as const, bg: "smoker, father had MI at 50" },
        { age: 55, gender: "Male" as const, bg: "diabetic for 15 years, hypertensive" },
        { age: 65, gender: "Male" as const, bg: "obese, diabetic, dyslipidemia" },
        { age: 60, gender: "Male" as const, bg: "smoker, hypertensive, hyperlipidemia for 15 years" },
        { age: 52, gender: "Female" as const, bg: "post-menopausal, smoker" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      const diabeticsilent = p.bg.includes("diabetic");
      const presentations = diabeticsilent
        ? {
            complaints: ["Heart burn", "Profuse sweating", "Shortness of breath"],
            ecg: "Sinus tachycardia (may be silent MI in diabetics)",
            bp: "100/70 mmHg"
          }
        : {
            complaints: [
              "Central constricting chest pain radiating to left arm",
              "Profuse sweating",
              "Shortness of breath",
              "Nausea and vomiting"
            ],
            ecg: ["ST-segment elevation in leads II, III, aVF", "ST-segment elevation in V1–V4 (anteroseptal)", "ST-segment elevation in I, aVL, V5–V6 (lateral)"][Math.floor(Math.random() * 3)] + " with T-wave inversion",
            bp: "140/90 mmHg"
          };
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: presentations.complaints,
        history: `${p.age}-year-old ${p.gender.toLowerCase()} with ${p.bg}, presenting with ${presentations.complaints
          .join(", ")
          .toLowerCase()} of 2 hours' duration. Pain is severe, constricting, retrosternal, radiating to left arm and jaw. Not relieved by antacids.`,
        examination: [
          `BP ${presentations.bp}, pulse 110/min, regular`,
          "Anxious, pale, diaphoretic",
          "Bilateral basal crackles",
          "S4 gallop",
          "No murmur"
        ],
        investigations: [
          {
            test: "ECG",
            result: presentations.ecg,
            interpretation: "Diagnostic of STEMI; serial ECG at 0, 1, 3, 6 hrs"
          },
          {
            test: "Troponin I",
            result: "8.5 ng/mL (at 6 hours)",
            referenceRange: "< 0.04 ng/mL",
            interpretation: "Markedly elevated — gold-standard cardiac biomarker; rises 3–4 hrs, peaks 24 hrs, persists 7–10 days"
          },
          {
            test: "CK-MB",
            result: "85 U/L (at 6 hours)",
            referenceRange: "< 25 U/L",
            interpretation: "Elevated — rises 3–8 hrs, peaks 24 hrs, normalizes 48–72 hrs; useful for reinfarction detection"
          },
          {
            test: "Myoglobin",
            result: "400 ng/mL (at 2 hours)",
            referenceRange: "< 90 ng/mL",
            interpretation: "Earliest marker — non-specific (skeletal muscle origin)"
          },
          {
            test: "Echocardiography",
            result: "Regional wall motion abnormality (hypokinesia/akinesia of affected territory); ejection fraction 45%",
            interpretation: "Confirms wall motion abnormality"
          },
          {
            test: "Coronary angiography",
            result: "100% occlusion of LAD (or RCA / LCx based on ECG leads)",
            interpretation: "Defines culprit lesion for PCI"
          },
          {
            test: "Total cholesterol",
            result: "260 mg/dL",
            referenceRange: "< 200 mg/dL",
            interpretation: "Hyperlipidemia — risk factor"
          },
          {
            test: "Random blood glucose",
            result: "180 mg/dL",
            referenceRange: "< 200 mg/dL",
            interpretation: "Likely diabetic"
          }
        ],
        imageHint:
          "Autopsy: cross-section of left ventricle showing pale, soft, yellow-tan infarcted myocardium with hyperemic border. Microscopy timeline: wavy fibres (<12 hrs) → coagulative necrosis + neutrophil infiltrate (12–24 hrs) → yellow soft (3–7 days) → granulation tissue (7–14 days) → fibrous scar (>2 weeks).",
        provisionalDiagnosis:
          "Acute ST-elevation myocardial infarction (STEMI) — specify territory based on ECG",
        diagnosticReasoning:
          "Central chest pain + diaphoresis + ST elevation + raised troponin = acute MI. Diabetic patients may have silent MI (atypical presentation with heart burn only). ECG leads localize the infarct: II/III/aVF = inferior (RCA); V1–V4 = anterior (LAD); I/aVL/V5–V6 = lateral (LCx).",
        keyInvestigations: [
          "12-lead ECG (immediately; serial at 0, 90 min, 3 hr, 6 hr)",
          "Cardiac biomarkers: serial Troponin I/T (gold standard) + CK-MB",
          "Echocardiography (wall motion, EF, mechanical complications)",
          "Coronary angiography (gold standard for anatomy; PCI within 90 min — door-to-balloon time)",
          "Lipid profile, fasting glucose, HbA1c",
          "Renal function, electrolytes",
          "Coagulation profile",
          "Chest X-ray (pulmonary edema, cardiomegaly)",
          "Continuous cardiac monitoring (arrhythmia detection)"
        ],
        complications: [
          "Arrhythmias (most common cause of death in first 24 hrs)",
          "Cardiogenic shock (with extensive infarcts)",
          "Papillary muscle rupture (3–5 days) — acute mitral regurgitation",
          "Ventricular free wall rupture (3–5 days) — cardiac tamponade",
          "Ventricular septal rupture (3–5 days)",
          "Ventricular aneurysm (weeks-months) — mural thrombus, systemic embolism",
          "Post-infarction pericarditis (Dressler syndrome — autoimmune, 1–8 weeks)",
          "Chronic heart failure",
          "Recurrence"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 11, pp. 494–500"
      };
    }
  },

  // ==========================================================================
  // 3. IRON DEFICIENCY ANEMIA
  // ==========================================================================
  {
    id: "ida",
    weight: 10,
    difficulty: "Apprentice",
    generate: () => {
      const profiles = [
        { age: 50, gender: "Female" as const, bg: "with menorrhagia" },
        { age: 30, gender: "Female" as const, bg: "mother of three children, poor diet" },
        { age: 37, gender: "Female" as const, bg: "with leg cramps and intermittent fever" },
        { age: 45, gender: "Male" as const, bg: "with chronic epigastric pain" },
        { age: 60, gender: "Male" as const, bg: "with weight loss and altered bowel habits" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      const hbLevels = [4.5, 5.2, 6.0, 6.8, 7.2];
      const hb = hbLevels[Math.floor(Math.random() * hbLevels.length)];
      const isMale = p.gender === "Male";
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: [
          "Progressive weakness and easy fatigability",
          "Pallor",
          isMale ? "Dyspnea on exertion" : "Leg cramps",
          "Intermittent low-grade fever"
        ],
        history: `${p.age}-year-old ${p.gender.toLowerCase()} ${p.bg}, presenting with weakness, fatigue, and pallor for 6 months. Worsened over the last month. Appetite decreased. No history of overt bleeding per rectum. ${isMale ? "Reports early satiety." : "Reports pica (clay eating)."}`,
        examination: [
          "Severe pallor of skin, conjunctiva, mucous membranes and palmar creases",
          "Koilonychia (spoon-shaped nails) — brittle, thin, concave nails",
          "Atrophic glossitis (smooth, red, painful tongue)",
          "Angular cheilitis",
          "Tachycardia (HR 104/min)",
          "Systolic flow murmur (functional, due to anemia)",
          isMale ? "Epigastric tenderness" : "No organomegaly"
        ],
        investigations: [
          {
            test: "Hemoglobin",
            result: `${hb} g/dL`,
            referenceRange: "M: 13–17, F: 12–15 g/dL",
            interpretation: "Severe anemia"
          },
          {
            test: "MCV",
            result: "62 fL",
            referenceRange: "80–100 fL",
            interpretation: "Markedly microcytic"
          },
          {
            test: "MCH",
            result: "18 pg",
            referenceRange: "27–32 pg",
            interpretation: "Hypochromic"
          },
          {
            test: "MCHC",
            result: "24 g/dL",
            referenceRange: "32–36 g/dL",
            interpretation: "Hypochromic"
          },
          {
            test: "RDW",
            result: "18.5%",
            referenceRange: "11.5–14.5%",
            interpretation: "High anisocytosis (differentiates from thalassemia)"
          },
          {
            test: "Peripheral smear",
            result: "Microcytic hypochromic RBCs, anisopoikilocytosis, pencil cells, target cells",
            interpretation: "Classic iron deficiency morphology"
          },
          {
            test: "Serum iron",
            result: "25 μg/dL",
            referenceRange: "60–170 μg/dL",
            interpretation: "Low"
          },
          {
            test: "TIBC",
            result: "480 μg/dL",
            referenceRange: "240–450 μg/dL",
            interpretation: "High — body compensates by increasing transferrin"
          },
          {
            test: "Serum ferritin",
            result: "8 ng/mL",
            referenceRange: "M: 20–250, F: 10–120 ng/mL",
            interpretation: "Very low — most specific marker of total body iron stores"
          },
          {
            test: "Transferrin saturation",
            result: "5%",
            referenceRange: "20–50%",
            interpretation: "Very low — < 15% confirms iron deficiency"
          },
          {
            test: "Bone marrow",
            result: "Micronormoblastic hyperplasia; Prussian blue stain shows ABSENT iron stores",
            interpretation: "Confirms iron deficiency; bone marrow aspirate gold standard for iron stores"
          }
        ],
        imageHint:
          "Peripheral smear: microcytic hypochromic RBCs with anisopoikilocytosis; pencil cells (elongated, hypochromic). Bone marrow: micronormoblastic hyperplasia with absent iron on Prussian blue stain.",
        provisionalDiagnosis:
          "Severe Iron Deficiency Anemia — likely due to " +
          (isMale ? "occult GI blood loss (rule out gastric/colonic malignancy)" : "menorrhagia + multiparity + dietary deficiency"),
        diagnosticReasoning:
          "Microcytic hypochromic anemia (low MCV/MCH/MCHC) + high RDW + low ferritin + high TIBC = iron deficiency anemia. Koilonychia and atrophic glossitis are classic clinical clues. The underlying cause must always be sought — in males rule out GI malignancy; in females assess menstrual loss and diet. Plummer-Vinson syndrome (IDA + glossitis + esophageal web + koilonychia) is a classical association.",
        keyInvestigations: [
          "Complete blood count with indices (MCV, MCH, MCHC, RDW)",
          "Peripheral blood smear",
          "Serum iron, TIBC, ferritin, transferrin saturation",
          "Bone marrow aspiration with Prussian blue stain (gold standard for iron stores)",
          "Stool for occult blood (3 serial samples)",
          "Stool for ova/cyst (hookworm — in endemic areas)",
          isMale
            ? "Upper GI endoscopy (rule out gastric carcinoma) + colonoscopy (rule out colorectal carcinoma)"
            : "Gynecological evaluation (assess menorrhagia, rule out fibroids, malignancy)",
          "Esophagoscopy (if Plummer-Vinson suspected — post-cricoid web)",
          "Urine for hemoglobinuria (intravascular hemolysis)",
          "Lead levels (if paint/battery exposure — sideroblastic)"
        ],
        complications: [
          "High-output cardiac failure (severe anemia)",
          "Plummer-Vinson syndrome → post-cricoid esophageal web → ↑risk of esophageal squamous cell carcinoma",
          "Impaired immunity (recurrent infections)",
          "Pregnancy complications — premature labor, low birth weight, perinatal mortality",
          "Impaired cognitive development in children",
          "Restless leg syndrome"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 648–651"
      };
    }
  },

  // ==========================================================================
  // 4. HIV / AIDS
  // ==========================================================================
  {
    id: "hiv-aids",
    weight: 10,
    difficulty: "Master",
    generate: () => {
      const profiles = [
        { age: 40, gender: "Male" as const, bg: "truck driver; multiple sexual partners" },
        { age: 38, gender: "Female" as const, bg: "multiple blood transfusions for thalassemia" },
        { age: 35, gender: "Female" as const, bg: "husband is IV drug user" },
        { age: 28, gender: "Male" as const, bg: "IV drug user, sharing needles" },
        { age: 32, gender: "Male" as const, bg: "MSM (men who have sex with men)" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      const cd4Values = [45, 88, 120, 156, 180];
      const cd4 = cd4Values[Math.floor(Math.random() * cd4Values.length)];
      const weightLossOptions = [10, 12, 15, 18, 20];
      const wtLoss = weightLossOptions[Math.floor(Math.random() * weightLossOptions.length)];
      const isAutopsy = p.bg.includes("transfusions") || p.bg.includes("drug");
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: [
          "Chronic diarrhea for 2 months",
          `Weight loss of ${wtLoss} kg`,
          "Low-grade fever",
          "Generalized lymphadenopathy",
          "White patches in mouth"
        ],
        history: `${p.age}-year-old ${p.gender.toLowerCase()} ${p.bg}, presents with chronic watery diarrhea, significant weight loss, oral thrush, and recurrent fever for 3 months. Has had herpes zoster in the past. No history of diabetes or hypertension.`,
        examination: [
          "Cachexia, marked weight loss",
          "Oral candidiasis (thick white patches, easily scraped)",
          "Generalized lymphadenopathy (cervical, axillary, inguinal)",
          "Hairy leukoplakia on lateral tongue borders",
          "Chest: bilateral scattered crackles",
          "Painful vesicular skin lesions (herpes simplex or zoster)",
          "Hepatosplenomegaly"
        ],
        investigations: [
          {
            test: "HIV ELISA",
            result: "Reactive",
            interpretation: "Screening positive — confirm with Western blot"
          },
          {
            test: "Western blot",
            result: "Positive for antibodies to gp120, gp41, p24",
            interpretation: "Confirms HIV infection"
          },
          {
            test: "CD4+ T-cell count",
            result: `${cd4} cells/μL`,
            referenceRange: "500–1500 cells/μL",
            interpretation: `Severe immunosuppression${cd4 < 200 ? " — AIDS-defining" : ""}`
          },
          {
            test: "HIV-RNA viral load",
            result: "350,000 copies/mL",
            interpretation: "High viral load — correlates with disease progression"
          },
          {
            test: "CBC",
            result: "Hb 9.2 g/dL, TLC 2800/μL, platelets 110,000/μL",
            interpretation: "Pancytopenia — HIV bone marrow suppression"
          },
          {
            test: "Chest X-ray",
            result: "Bilateral diffuse interstitial infiltrates",
            interpretation: "Suspicious for Pneumocystis jirovecii pneumonia"
          },
          {
            test: "Sputum induction (methenamine silver stain)",
            result: "Cup-shaped cysts of Pneumocystis jirovecii",
            interpretation: "Confirms PCP"
          },
          {
            test: "Stool examination",
            result: "Acid-fast oocysts of Cryptosporidium parvum",
            interpretation: "Cause of chronic diarrhea"
          },
          {
            test: "Oral swab (KOH mount)",
            result: "Pseudohyphae and budding yeast cells of Candida albicans",
            interpretation: "Confirms oral candidiasis"
          }
        ],
        imageHint:
          "Autopsy: lymph nodes show marked follicular depletion with hyalinization; spleen with white pulp atrophy; lungs firm, heavy with honeycomb appearance (PCP); GI mucosa inflamed with Cryptosporidium; brain may show toxoplasma abscesses (ring-enhancing) or lymphoma; skin may show Kaposi sarcoma (vascular tumor, HHV-8).",
        provisionalDiagnosis:
          "Advanced HIV Infection (AIDS) with multiple opportunistic infections",
        diagnosticReasoning:
          "High-risk behavior + chronic diarrhea + weight loss > 10% body weight + oral candidiasis + generalized lymphadenopathy = clinical AIDS (WHO staging 4). ELISA + Western blot confirm HIV. CD4 < 200 is AIDS-defining. The classic triad in this patient: PCP (lung), Cryptosporidium (diarrhea), Candida (oral). Each opportunistic infection is treated specifically, and antiretroviral therapy (ART) is started to suppress viral replication and restore CD4.",
        keyInvestigations: [
          "HIV ELISA (screening — 4th gen detects p24 Ag + Ab)",
          "Western blot or nucleic acid test (confirmatory)",
          "CD4+ T-cell count (staging, decision to start ART — start if < 350 or symptomatic)",
          "HIV-RNA viral load (RT-PCR — monitor treatment response)",
          "CBC (anemia, leukopenia, thrombocytopenia)",
          "Chest X-ray + sputum for PCP (methenamine silver stain) and AFB (TB is the #1 OI in India)",
          "Stool examination (Cryptosporidium, Isospora, Microsporidium, CMV colitis)",
          "Oral swab KOH mount (Candida)",
          "Serology for Toxoplasma, CMV, HBV, HCV, syphilis (VDRL)",
          "Tuberculin skin test / IGRA",
          "Baseline biochemistry (LFT, KFT)",
          "Resistance testing (genotype) before ART initiation"
        ],
        complications: [
          "Opportunistic infections — PCP, TB (most common in India), Cryptococcus, Toxoplasma, CMV, MAC",
          "Neoplasms — Kaposi sarcoma (HHV-8), Non-Hodgkin lymphoma (CNS, systemic), cervical carcinoma",
          "HIV wasting syndrome (loss > 10% body weight)",
          "HIV encephalopathy / AIDS dementia complex",
          "HIV nephropathy (FSGS)",
          "Immune reconstitution inflammatory syndrome (IRIS) after ART initiation"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 6, pp. 240–248"
      };
    }
  },

  // ==========================================================================
  // 5. CHRONIC MYELOID LEUKEMIA
  // ==========================================================================
  {
    id: "cml",
    weight: 6,
    difficulty: "Adept",
    generate: () => {
      const ages = [38, 42, 48, 55, 62, 65];
      const age = ages[Math.floor(Math.random() * ages.length)];
      const wbcCounts = [120000, 180000, 250000, 320000];
      const wbc = wbcCounts[Math.floor(Math.random() * wbcCounts.length)];
      return {
        patient: {
          age,
          gender: Math.random() > 0.5 ? "Male" : "Female",
          background: "fatigue and early satiety for 4 months"
        },
        chiefComplaints: [
          "Easy fatigability",
          "Abdominal fullness and early satiety",
          "Weight loss",
          "Sweating especially at night"
        ],
        history: `${age}-year-old patient presents with progressive fatigue, abdominal fullness, and dragging sensation in left upper quadrant for 4 months. Reports night sweats and 5 kg weight loss. No fever or bleeding.`,
        examination: [
          "Pallor present",
          "Massive splenomegaly (15 cm below costal margin)",
          "Hepatomegaly (4 cm)",
          "No lymphadenopathy",
          "Stable vitals"
        ],
        investigations: [
          {
            test: "Hemoglobin",
            result: "8.5 g/dL",
            referenceRange: "13–17 g/dL",
            interpretation: "Anemia of chronic disease"
          },
          {
            test: "Total leukocyte count",
            result: `${wbc.toLocaleString()} /μL`,
            referenceRange: "4000–11000 /μL",
            interpretation: "Marked leukocytosis"
          },
          {
            test: "Differential count",
            result: "Full spectrum of myeloid precursors: myelocytes 25%, metamyelocytes 18%, bands 12%, neutrophils 30%, basophils 8%, eosinophils 4%, blasts 3%",
            interpretation: "Leukemic continuum; basophilia is hallmark of CML"
          },
          {
            test: "Platelet count",
            result: "650,000 /μL",
            referenceRange: "150,000–450,000 /μL",
            interpretation: "Thrombocytosis"
          },
          {
            test: "Peripheral smear",
            result: "Leukocytosis with full spectrum of myeloid cells; myelocytes, metamyelocytes; basophilia; low LAP score; few nucleated RBCs",
            interpretation: "CML pattern"
          },
          {
            test: "LAP (leukocyte alkaline phosphatase) score",
            result: "12 (low)",
            referenceRange: "40–100",
            interpretation: "Low — differentiates from leukemoid reaction (which has high LAP)"
          },
          {
            test: "Bone marrow",
            result: "Hypercellular; marked myeloid hyperplasia; M:E ratio 15:1; micromegakaryocytes; < 10% blasts",
            interpretation: "Chronic phase CML"
          },
          {
            test: "Cytogenetics — karyotype",
            result: "t(9;22)(q34;q11) — Philadelphia chromosome",
            interpretation: "Diagnostic of CML; BCR-ABL1 fusion gene → constitutive tyrosine kinase"
          },
          {
            test: "RT-PCR for BCR-ABL1",
            result: "Positive — p210 transcript",
            interpretation: "Confirms diagnosis; used for monitoring treatment response"
          },
          {
            test: "Serum uric acid",
            result: "9.5 mg/dL",
            referenceRange: "3.4–7.0 mg/dL",
            interpretation: "High — due to high cell turnover"
          },
          {
            test: "Serum LDH",
            result: "850 U/L",
            referenceRange: "140–280 U/L",
            interpretation: "High — cell turnover"
          }
        ],
        imageHint:
          "Peripheral smear: leukocytosis with full spectrum of myeloid cells (segmented neutrophils, bands, metamyelocytes, myelocytes, promyelocytes); basophilia hallmark. Bone marrow: hypercellular with myeloid hyperplasia and characteristic small 'dwarf' megakaryocytes.",
        provisionalDiagnosis:
          "Chronic Myeloid Leukemia — chronic phase",
        diagnosticReasoning:
          "Middle-aged patient + massive splenomegaly + very high TLC with full spectrum of granulocytic precursors + basophilia + low LAP score + Philadelphia chromosome positive = CML. Differentiate from leukemoid reaction (LAP high, no Ph chromosome). Disease progresses from chronic phase (months-years) → accelerated phase → blast crisis (resembles AML/ALL). Imatinib (tyrosine kinase inhibitor) has revolutionized treatment.",
        keyInvestigations: [
          "Complete blood count with differential",
          "Peripheral blood smear",
          "LAP score (low in CML, high in leukemoid)",
          "Bone marrow aspiration + trephine biopsy",
          "Cytogenetics — karyotyping for Philadelphia chromosome t(9;22)",
          "RT-PCR / FISH for BCR-ABL1 fusion transcript",
          "Serum uric acid, LDH",
          "Baseline LFT, KFT",
          "HLA typing (consider allogeneic stem cell transplant in young patients with suitable donor)"
        ],
        complications: [
          "Blast crisis (acute transformation to AML/ALL) — median survival 3–6 months",
          "Accelerated phase (worsening anemia, ↑basophils, ↑blasts 10–19%)",
          "Hyperuricemia and urate nephropathy (tumor lysis)",
          "Splenic infarction",
          "Leukostasis (in blast crisis)",
          "Infections (neutrophil dysfunction despite normal numbers)",
          "Imatinib resistance (BCR-ABL mutations — T315I)"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 13, pp. 604–606"
      };
    }
  },

  // ==========================================================================
  // 6. LOBAR PNEUMONIA
  // ==========================================================================
  {
    id: "lobar-pneumonia",
    weight: 8,
    difficulty: "Apprentice",
    generate: () => {
      const profiles = [
        { age: 25, gender: "Male" as const, bg: "previously healthy" },
        { age: 35, gender: "Male" as const, bg: "alcoholic" },
        { age: 55, gender: "Female" as const, bg: "diabetic" },
        { age: 65, gender: "Male" as const, bg: "smoker, COPD" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: [
          "Sudden onset high-grade fever with chills and rigors",
          "Chest pain, worse on inspiration (pleuritic)",
          "Cough with rusty sputum",
          "Shortness of breath"
        ],
        history: `${p.age}-year-old ${p.gender.toLowerCase()} ${p.bg}, presents with sudden onset of fever (39.5°C) with shaking chills, pleuritic chest pain on right side, productive cough with rusty (blood-tinged) sputum, and dyspnea for 2 days.`,
        examination: [
          "Toxic, febrile, tachypneic (RR 28/min)",
          "Tachycardia (HR 110/min)",
          "Reduced chest movement on right lower zone",
          "Increased tactile vocal fremitus and vocal resonance",
          "Dull percussion note on right lower zone",
          "Bronchial breathing and coarse crepitations on right lower zone",
          "Pleural friction rub"
        ],
        investigations: [
          {
            test: "Chest X-ray (PA view)",
            result: "Homogeneous consolidation involving right lower lobe with air bronchogram",
            interpretation: "Lobar pneumonia"
          },
          {
            test: "Sputum Gram stain",
            result: "Gram-positive diplococci, numerous PMNs",
            interpretation: "Suggestive of Streptococcus pneumoniae"
          },
          {
            test: "Sputum culture",
            result: "Growth of Streptococcus pneumoniae (alpha-hemolytic, optochin sensitive, bile soluble)",
            interpretation: "Confirms causative organism"
          },
          {
            test: "Blood culture",
            result: "Streptococcus pneumoniae grown in 2/2 bottles",
            interpretation: "Pneumococcal bacteremia; indicates severe infection"
          },
          {
            test: "CBC",
            result: "Hb 13.2 g/dL, TLC 18,500/μL (neutrophilic leukocytosis), platelets 280,000",
            interpretation: "Bacterial infection pattern"
          },
          {
            test: "Arterial blood gas",
            result: "pH 7.48, pO2 70, pCO2 32, HCO3 24",
            interpretation: "Respiratory alkalosis with hypoxemia"
          },
          {
            test: "Sputum for AFB",
            result: "Negative",
            interpretation: "Rules out TB"
          }
        ],
        imageHint:
          "Gross: involved lobe is firm, consolidated, liver-like (hepatization). Red hepatization (2–4 days) — dark red, liver-like, exudes RBC-rich fibrinous exudate on cut section. Grey hepatization (4–8 days) — grey-brown, granular, dry. Microscopy: alveoli filled with fibrin, neutrophils, and RBCs (red) → fibrin and neutrophils (grey). Resolution: enzymatic digestion by macrophages.",
        provisionalDiagnosis:
          "Right Lower Lobe Pneumonia (Lobar) due to Streptococcus pneumoniae",
        diagnosticReasoning:
          "Sudden onset fever with chills + pleuritic chest pain + rusty sputum + lobar consolidation on X-ray + bronchial breathing = classical lobar pneumonia. Streptococcus pneumoniae is the most common cause (90%). Stages evolve over 7–10 days: congestion → red hepatization → grey hepatization → resolution. Complications include organization (carnification), lung abscess, empyema, pleural effusion, bacteremia with sepsis, endocarditis, meningitis.",
        keyInvestigations: [
          "Chest X-ray PA view (confirm consolidation; localize lobe)",
          "Sputum Gram stain and culture (identify organism)",
          "Blood culture (in severe disease — bacteremia indicates worse prognosis)",
          "CBC (leukocytosis with neutrophilia)",
          "Arterial blood gas (assess hypoxemia)",
          "Pleural fluid analysis (if effusion — differentiate exudate from transudate)",
          "Sputum for AFB (rule out TB, especially in India)",
          "Sensitivity pattern of organism (guide antibiotics)"
        ],
        complications: [
          "Resolution (most common outcome with antibiotics)",
          "Organization (carnification) — fibrosis replaces parenchyma",
          "Lung abscess (especially with Staph aureus, Klebsiella)",
          "Empyema (pus in pleural cavity)",
          "Pleural effusion (parapneumonic)",
          "Bacteremia with septicemia and metastatic infection (meningitis, endocarditis, arthritis)",
          "Acute respiratory distress syndrome (ARDS)",
          "Septic shock"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 704–706"
      };
    }
  },

  // ==========================================================================
  // 7. MEGALOBLASTIC ANEMIA
  // ==========================================================================
  {
    id: "megaloblastic",
    weight: 6,
    difficulty: "Adept",
    generate: () => {
      const profiles = [
        { age: 55, gender: "Female" as const, bg: "strict vegetarian" },
        { age: 60, gender: "Male" as const, bg: "post-gastrectomy" },
        { age: 45, gender: "Female" as const, bg: "autoimmune thyroiditis" },
        { age: 35, gender: "Male" as const, bg: "ileal resection for Crohn's" },
        { age: 28, gender: "Female" as const, bg: "third trimester pregnancy" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      const isB12 = !p.bg.includes("vegetarian") && !p.bg.includes("pregnancy");
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: [
          "Progressive weakness and fatigue",
          "Pallor",
          "Sore tongue",
          isB12 ? "Tingling and numbness in fingers and toes" : "Shortness of breath"
        ],
        history: `${p.age}-year-old ${p.gender.toLowerCase()} ${p.bg}, presents with progressive weakness, fatigue, pallor, and sore tongue for 4 months. ${isB12 ? "Also complains of tingling and numbness in bilateral hands and feet, and unsteady gait." : "Pregnancy with poor dietary intake."}`,
        examination: [
          "Severe pallor with mild icterus",
          "Beefy red, smooth, atrophic tongue (glossitis)",
          "Angular stomatitis",
          "Tachycardia (HR 100/min)",
          "Systolic flow murmur",
          isB12 ? "Loss of vibration and proprioception in lower limbs" : "",
          isB12 ? "Positive Romberg's sign" : "",
          isB12 ? "Bilateral extensor plantar response" : "",
          "Mild hepatosplenomegaly"
        ].filter(Boolean),
        investigations: [
          {
            test: "Hemoglobin",
            result: "5.8 g/dL",
            referenceRange: "M: 13–17, F: 12–15 g/dL",
            interpretation: "Severe anemia"
          },
          {
            test: "MCV",
            result: "115 fL",
            referenceRange: "80–100 fL",
            interpretation: "Markedly macrocytic"
          },
          {
            test: "MCH",
            result: "38 pg",
            referenceRange: "27–32 pg",
            interpretation: "High"
          },
          {
            test: "Peripheral smear",
            result: "Macrocytic ovalocytes, anisopoikilocytosis, hypersegmented neutrophils (>5 lobes), Howell-Jolly bodies, basophilic stippling",
            interpretation: "Classic megaloblastic morphology"
          },
          {
            test: "Bone marrow",
            result: "Megaloblastic hyperplasia; giant metamyelocytes and band forms; megakaryocyte abnormalities",
            interpretation: "Nuclear-cytoplasmic asynchrony"
          },
          {
            test: "Serum vitamin B12",
            result: isB12 ? "120 pg/mL" : "280 pg/mL",
            referenceRange: "200–900 pg/mL",
            interpretation: isB12 ? "Low — B12 deficiency" : "Normal"
          },
          {
            test: "Serum folate",
            result: isB12 ? "12 ng/mL" : "2.5 ng/mL",
            referenceRange: "3–17 ng/mL",
            interpretation: isB12 ? "Normal" : "Low — folate deficiency"
          },
          {
            test: "Serum LDH",
            result: "1200 U/L",
            referenceRange: "140–280 U/L",
            interpretation: "Markedly high — ineffective erythropoiesis (intramedullary hemolysis)"
          },
          {
            test: "Indirect bilirubin",
            result: "2.8 mg/dL",
            referenceRange: "0.2–0.8 mg/dL",
            interpretation: "High — ineffective erythropoiesis"
          },
          {
            test: "Homocysteine",
            result: "45 μmol/L",
            referenceRange: "5–15 μmol/L",
            interpretation: "High in both B12 and folate deficiency"
          },
          {
            test: "Methylmalonic acid",
            result: isB12 ? "1.2 μmol/L" : "0.2 μmol/L",
            referenceRange: "< 0.4 μmol/L",
            interpretation: isB12 ? "High — specific for B12 deficiency (folate normal)" : "Normal"
          },
          ...(p.bg.includes("autoimmune") || p.bg.includes("gastrectomy")
            ? [
                {
                  test: "Anti-parietal cell antibody",
                  result: "Positive",
                  interpretation: "Autoimmune gastritis — pernicious anemia"
                },
                {
                  test: "Anti-intrinsic factor antibody",
                  result: "Positive",
                  interpretation: "Specific for pernicious anemia"
                }
              ]
            : [])
        ],
        imageHint:
          "Peripheral smear: macro-ovalocytes, hypersegmented neutrophils (≥ 5 lobes). Bone marrow: megaloblastic hyperplasia — large immature nuclei with open chromatin and mature cytoplasm (nuclear-cytoplasmic asynchrony); giant metamyelocytes and bands; hypersegmented megakaryocytes.",
        provisionalDiagnosis:
          isB12
            ? "Megaloblastic Anemia due to Vitamin B12 deficiency (likely pernicious anemia)"
            : "Megaloblastic Anemia due to Folate deficiency",
        diagnosticReasoning:
          "Macrocytic anemia + hypersegmented neutrophils + megaloblastic marrow + high LDH = megaloblastic anemia. Differentiate B12 vs folate: B12 deficiency has neurological features (subacute combined degeneration of spinal cord — dorsal and lateral columns) and high methylmalonic acid. Folate deficiency has no neurological features. Pernicious anemia (autoimmune — anti-parietal cell, anti-IF) is the classic cause of B12 deficiency in adults. Treat with appropriate replacement — B12 IM, folate oral.",
        keyInvestigations: [
          "Complete blood count with indices (↑MCV)",
          "Peripheral blood smear (macro-ovalocytes, hypersegmented neutrophils)",
          "Bone marrow aspiration (megaloblastic hyperplasia)",
          "Serum vitamin B12 and folate levels",
          "Serum LDH, indirect bilirubin (ineffective erythropoiesis markers)",
          "Homocysteine and methylmalonic acid (differentiate B12 vs folate — MMA high only in B12)",
          "Anti-parietal cell and anti-intrinsic factor antibodies (pernicious anemia)",
          "Thyroid function tests and other autoimmune workup (pernicious anemia associated with autoimmune thyroiditis, Addison's)",
          "Upper GI endoscopy (atrophic gastritis)",
          "Schilling test (historical; now rarely performed)"
        ],
        complications: [
          "Severe anemia with high-output cardiac failure",
          "Subacute combined degeneration of spinal cord (B12 only) — irreversible if untreated",
          "Peripheral neuropathy (B12)",
          "Cognitive impairment and psychiatric symptoms (B12)",
          "Infertility",
          "Hyperhomocysteinemia → ↑thrombosis risk",
          "Masking of underlying malignancy (folate may improve anemia but allow B12-deficient neurological damage to progress)",
          "Hypokalemia during treatment (cellular uptake)"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 14, pp. 651–655"
      };
    }
  },

  // ==========================================================================
  // 8. CHRONIC PYELONEPHRITIS
  // ==========================================================================
  {
    id: "chronic-pyelonephritis",
    weight: 4,
    difficulty: "Adept",
    generate: () => {
      const profiles = [
        { age: 35, gender: "Female" as const, bg: "recurrent UTIs since childhood" },
        { age: 50, gender: "Male" as const, bg: "BPH with recurrent UTIs" },
        { age: 45, gender: "Female" as const, bg: "diabetic with neurogenic bladder" },
        { age: 60, gender: "Female" as const, bg: "nephrolithiasis" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: [
          "Recurrent fever with chills",
          "Dull aching flank pain",
          "Increased frequency of urination",
          "Headache and easy fatigability"
        ],
        history: `${p.age}-year-old ${p.gender.toLowerCase()} ${p.bg}, presents with recurrent episodes of fever with burning micturition and flank pain over the past 5 years. Recently noticed swelling of face and ankles in the morning. Has been diagnosed with hypertension for 2 years.`,
        examination: [
          "Mild pallor",
          "BP 160/100 mmHg (hypertensive)",
          "Pedal edema present",
          "Bilateral renal angle tenderness",
          "No organomegaly"
        ],
        investigations: [
          {
            test: "Urine routine",
            result: "pH 6.5, protein 1+, plenty of pus cells (40–50/hpf), RBCs 5–10/hpf, granular casts",
            interpretation: "Active UTI"
          },
          {
            test: "Urine culture",
            result: "E. coli > 10^5 CFU/mL",
            interpretation: "Significant bacteriuria"
          },
          {
            test: "Hemoglobin",
            result: "9.5 g/dL",
            interpretation: "Anemia of chronic disease"
          },
          {
            test: "Blood urea",
            result: "75 mg/dL",
            referenceRange: "15–40 mg/dL",
            interpretation: "Raised — renal impairment"
          },
          {
            test: "Serum creatinine",
            result: "2.8 mg/dL",
            referenceRange: "0.6–1.2 mg/dL",
            interpretation: "Chronic kidney disease"
          },
          {
            test: "eGFR",
            result: "28 mL/min/1.73 m²",
            interpretation: "Stage 4 CKD"
          },
          {
            test: "USG abdomen",
            result: "Bilateral small kidneys with irregular cortical thinning, blunted calyces, especially in upper and lower poles",
            interpretation: "Chronic pyelonephritis with reflux nephropathy"
          },
          {
            test: "MCUG (micturating cystourethrogram)",
            result: "Grade III vesicoureteric reflux bilaterally",
            interpretation: "Cause of recurrent pyelonephritis"
          },
          {
            test: "DMSA scan",
            result: "Bilateral focal cortical scars in upper and lower poles",
            interpretation: "Confirms chronic pyelonephritic scarring"
          }
        ],
        imageHint:
          "Gross: kidneys are small and contracted; irregular cortical surface with U-shaped cortical scars overlying dilated, blunted calyces; lower pole predilection in reflux nephropathy. Microscopy: 'thyroidization' of tubules — tubules dilated, lined by atrophic epithelium, filled with eosinophilic colloid casts resembling thyroid follicles; chronic inflammatory infiltrate in interstitium; periglomerular fibrosis.",
        provisionalDiagnosis:
          "Chronic Pyelonephritis (reflux nephropathy) with Chronic Kidney Disease",
        diagnosticReasoning:
          "Recurrent UTIs + hypertension + renal angle tenderness + small contracted kidneys with cortical scarring + thyroidization of tubules = chronic pyelonephritis. Most common cause in young women is vesicoureteric reflux (VUR) from childhood. Other cause is chronic obstruction with superimposed infection. The characteristic cortical scars overlie blunted calyces — lower pole in reflux (most reflux goes to lower pole due to anatomy), upper pole in obstructive.",
        keyInvestigations: [
          "Urine routine and culture (identify organism — E. coli most common)",
          "Renal function tests — urea, creatinine, eGFR",
          "Complete blood count (anemia)",
          "Electrolytes (hyperkalemia, metabolic acidosis)",
          "USG abdomen (kidney size, cortical thickness, calculi)",
          "MCUG (micturating cystourethrography) — assess VUR",
          "DMSA renal scan — focal cortical scarring (gold standard for chronic pyelonephritis)",
          "IVP (historical) — shows blunted calyces, cortical scars",
          "CT urography",
          "Renal biopsy (if diagnosis uncertain — to differentiate from chronic glomerulonephritis)"
        ],
        complications: [
          "Chronic kidney disease → end-stage renal disease",
          "Hypertension (cause and consequence)",
          "Recurrence of acute pyelonephritis",
          "Renal calculi (magnesium ammonium phosphate — struvite — with Proteus)",
          "Renal papillary necrosis (especially in diabetics)",
          "Anemia of chronic disease",
          "Sepsis"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 20, pp. 923–924"
      };
    }
  },

  // ==========================================================================
  // 9. PULMONARY TUBERCULOSIS
  // ==========================================================================
  {
    id: "pulmonary-tb",
    weight: 8,
    difficulty: "Adept",
    generate: () => {
      const profiles = [
        { age: 25, gender: "Male" as const, bg: "labourer, smoker, lives in crowded quarters" },
        { age: 35, gender: "Female" as const, bg: "diabetic" },
        { age: 45, gender: "Male" as const, bg: "alcoholic, homeless" },
        { age: 55, gender: "Male" as const, bg: "HIV positive" }
      ];
      const p = profiles[Math.floor(Math.random() * profiles.length)];
      return {
        patient: {
          age: p.age,
          gender: p.gender,
          background: p.bg
        },
        chiefComplaints: [
          "Cough with expectoration for 3 weeks",
          "Low-grade evening rise of fever",
          "Night sweats",
          "Significant weight loss (8 kg in 2 months)",
          "Blood-tinged sputum (hemoptysis)"
        ],
        history: `${p.age}-year-old ${p.gender.toLowerCase()} ${p.bg}, presents with chronic productive cough for 4 weeks, evening rise of temperature, night sweats, and 8 kg weight loss over 2 months. Yesterday noticed blood-tinged sputum. No history of asthma or COPD.`,
        examination: [
          "Cachexia, pallor",
          "Low-grade fever (37.8°C in evening)",
          "Tachycardia (HR 96/min)",
          "Chest: reduced chest movement on right upper zone",
          "Dull percussion note on right upper zone",
          "Coarse crepitations and bronchial breathing on right upper zone",
          "Cervical lymph nodes palpable (matted, non-tender)"
        ],
        investigations: [
          {
            test: "Sputum for AFB (Ziehl-Neelsen stain)",
            result: "3+ acid-fast bacilli (red, beaded, slender bacilli)",
            interpretation: "Diagnostic of pulmonary TB"
          },
          {
            test: "CBNAAT (GeneXpert)",
            result: "Mycobacterium tuberculosis detected; Rifampicin sensitive",
            interpretation: "Confirms diagnosis + drug susceptibility within 2 hours"
          },
          {
            test: "Mantoux test",
            result: "Induration 22 mm at 72 hours",
            referenceRange: "≥ 10 mm positive (≥ 5 mm in immunocompromised)",
            interpretation: "Strongly positive — active or past TB infection"
          },
          {
            test: "Sputum culture (Löwenstein-Jensen)",
            result: "Rough, tough, buff colonies in 4 weeks",
            interpretation: "Gold standard; allows full drug susceptibility"
          },
          {
            test: "Chest X-ray (PA view)",
            result: "Right upper lobe fibrocavitary lesion with reticulonodular opacities; bilateral apical infiltrates",
            interpretation: "Post-primary (secondary) TB pattern"
          },
          {
            test: "HIV ELISA",
            result: "Reactive / Non-reactive",
            interpretation: "Rule out co-infection"
          },
          {
            test: "CBC",
            result: "Hb 9.8 g/dL (normocytic normochromic — anemia of chronic disease), TLC 9500, normal differential",
            interpretation: "Anemia of chronic disease"
          },
          {
            test: "ESR",
            result: "85 mm/hr",
            referenceRange: "0–22 mm/hr (M), 0–29 mm/hr (F)",
            interpretation: "Markedly raised — chronic inflammation"
          },
          {
            test: "Bronchoscopy with BAL (if sputum negative)",
            result: "AFB positive in bronchoalveolar lavage",
            interpretation: "Useful in sputum-scarce or paucibacillary disease"
          }
        ],
        imageHint:
          "Gross: upper lobe cavitating lesion with caseous (cheese-like) necrotic material; thick fibrous wall. Microscopy: caseating granuloma — central caseous necrosis surrounded by epithelioid cells, Langhans giant cells (peripheral nuclei, horseshoe pattern), lymphocytes, and outer fibroblasts. Ziehl-Neelsen stain shows red, slender, beaded acid-fast bacilli.",
        provisionalDiagnosis:
          "Post-primary (Secondary) Pulmonary Tuberculosis, right upper lobe",
        diagnosticReasoning:
          "Chronic cough + evening fever + night sweats + weight loss + apical fibrocavitary lesion on X-ray + AFB positive sputum = secondary pulmonary TB. The classical location is the apex of upper lobe (high oxygen tension + poor lymphatic drainage favours mycobacterial growth). Secondary TB arises from reactivation (most common) or reinfection. Primary TB (Ghon complex — subpleural focus + hilar lymph node) is usually asymptomatic and self-limiting in immunocompetent adults. Start DOTS therapy per RNTCP guidelines — Cat I or II based on case type.",
        keyInvestigations: [
          "Sputum for AFB (Ziehl-Neelsen) — 2 early morning samples",
          "CBNAAT (GeneXpert MTB/RIF) — detects M. tuberculosis + rifampicin resistance",
          "Mycobacterial culture (Löwenstein-Jensen or BACTEC MGIT 960) — gold standard",
          "Drug susceptibility testing (DST) — especially for MDR-TB",
          "Chest X-ray PA view (apical fibrocavitary lesion)",
          "High-resolution CT (in atypical presentation or for finer detail)",
          "Mantoux test (TST — 5 TU PPD)",
          "IGRA (QuantiFERON-TB Gold) — does not distinguish latent vs active",
          "HIV testing (mandatory in all TB patients)",
          "Bronchoscopy with BAL / transbronchial biopsy (in sputum-negative)",
          "Lymph node FNAC/biopsy (if peripheral lymphadenitis — caseating granulomas)",
          "Baseline LFT, KFT, serum uric acid (before ATT)"
        ],
        complications: [
          "Massive hemoptysis (aspergilloma in old cavity; erosion of bronchial artery)",
          "Pleural effusion (tuberculous)",
          "Empyema",
          "Pneumothorax",
          "Miliary TB (hematogenous dissemination)",
          "TB meningitis (basal exudates, hydrocephalus, cranial nerve palsies)",
          "Bone and joint TB — Pott's spine",
          "Genitourinary TB — sterile pyuria",
          "Intestinal TB — terminal ileum",
          "MDR-TB (resistant to rifampicin + isoniazid)",
          "XDR-TB (MDR + fluoroquinolone + injectable)",
          "Post-TB bronchiectasis and restrictive lung disease"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 15, pp. 715–719"
      };
    }
  },

  // ==========================================================================
  // 10. LEPROSY (Lepromatous)
  // ==========================================================================
  {
    id: "leprosy-lepromatous",
    weight: 4,
    difficulty: "Master",
    generate: () => {
      const ages = [32, 38, 42, 50, 55];
      const age = ages[Math.floor(Math.random() * ages.length)];
      return {
        patient: {
          age,
          gender: "Male",
          background: "from an endemic region"
        },
        chiefComplaints: [
          "Multiple asymptomatic skin lesions over face, ears, and limbs",
          "Loss of sensation in hands and feet",
          "Nasal stuffiness and epistaxis",
          "Burning sensation in eyes"
        ],
        history: `${age}-year-old male presents with multiple nodular skin lesions over face, ears, and limbs for 1 year. Has progressive loss of sensation in hands and feet, recurrent painless burns and ulcers, nasal stuffiness, and hoarseness of voice. No history of seizures or weakness.`,
        examination: [
          "Multiple erythematous nodules and plaques symmetrically distributed over face, ears, arms, buttocks, thighs",
          "Thickened, edematous skin of face — leonine facies",
          "Loss of eyebrows (madarosis)",
          "Saddle nose deformity",
          "Thickened, tender peripheral nerves — greater auricular, ulnar (above elbow), common peroneal, posterior tibial",
          "Glove and stocking anesthesia",
          "Claw hand deformity (ulnar nerve palsy)",
          "Foot drop (lateral popliteal nerve palsy)",
          "Painless trophic ulcers on soles",
          "Bilateral testicular atrophy"
        ],
        investigations: [
          {
            test: "Slit-skin smear",
            result: "Plenty of acid-fast bacilli (bacteriological index 5+)",
            interpretation: "High bacterial load — multibacillary leprosy"
          },
          {
            test: "Skin biopsy",
            result: "Thinned epidermis; subepidermal 'clear zone' (Grenz zone); dermal infiltrate of foamy macrophages (Virchow cells) loaded with acid-fast bacilli; few lymphocytes",
            interpretation: "Lepromatous leprosy morphology"
          },
          {
            test: "Fite-Faraco stain",
            result: "Numerous red-staining acid-fast bacilli in clumps (globi) within foamy macrophages",
            interpretation: "Confirms M. leprae"
          },
          {
            test: "Lepromin test (Mitsuda)",
            result: "Negative (no induration at 4 weeks)",
            interpretation: "Indicates poor cell-mediated immunity — characteristic of lepromatous pole"
          },
          {
            test: "PCR for M. leprae",
            result: "Positive",
            interpretation: "Confirms species; not used routinely"
          },
          {
            test: "Nerve biopsy (ulnar/sural)",
            result: "Endoneurial and perineurial foamy macrophage infiltrate; axonal degeneration",
            interpretation: "Confirms neural leprosy"
          }
        ],
        imageHint:
          "Skin biopsy: thinned epidermis with clear subepidermal Grenz zone; dense dermal infiltrate of foamy macrophages (Virchow cells) containing numerous acid-fast bacilli (globi = clumps of bacilli). Nerve biopsy: endoneurial foamy macrophages with bacilli replacing nerve fibres. Gross: nodular skin lesions on face (leonine facies), ear, extremities; thickened peripheral nerves.",
        provisionalDiagnosis:
          "Lepromatous Leprosy (Multibacillary) with neuritis and trophic complications",
        diagnosticReasoning:
          "Multiple symmetric skin lesions + anesthetic patches + thickened peripheral nerves + saddle nose + leonine facies + high bacterial load on slit-skin smear + negative lepromin test = lepromatous leprosy. Ridley-Jopling spectrum: tuberculoid (TT) has strong CMI (Th1, IFN-γ), few organisms, localized; lepromatous (LL) has poor CMI (Th2 shift), abundant organisms, systemic. Treatment: MDT (multidrug therapy) — for multibacillary: dapsone + rifampicin + clofazimine for 12 months.",
        keyInvestigations: [
          "Slit-skin smear (from ear lobule, lesion, normal skin) — bacteriological index",
          "Skin biopsy with Fite-Faraco stain (gold standard for diagnosis)",
          "Lepromin (Mitsuda) test — assess CMI; not diagnostic, only classifies pole",
          "Histopathological classification — Ridley-Jopling",
          "Nerve biopsy (sural nerve) — if neural symptoms predominant",
          "PCR for M. leprae (research / atypical cases)",
          "CBC, LFT, KFT, HIV (baseline before MDT)",
          "Slit-skin smear follow-up at end of treatment"
        ],
        complications: [
          "Trophic ulcers (painless) → secondary infection → osteomyelitis → auto-amputation",
          "Claw hand (ulnar palsy), foot drop (peroneal palsy), claw toes",
          "Lagophthalmos and corneal anesthesia → blindness",
          "Saddle nose deformity",
          "Testicular atrophy → infertility, gynecomastia",
          "Type 1 (reversal) reaction — upgrading CMI, painful neuritis, inflamed lesions",
          "Type 2 (ENL) reaction — immune complex, systemic, painful nodules, fever, iritis, orchitis",
          "Stigma and psychosocial impact",
          "Secondary amyloidosis (long-standing LL)"
        ],
        textbookRef: "Robbins Basic Pathology 10e — Ch. 8, pp. 360–362"
      };
    }
  }
];

// ----------------------------------------------------------------------------
// RANDOMIZER FUNCTION
// ----------------------------------------------------------------------------

export function generateCase(difficulty?: Difficulty): GeneratedCase {
  // Filter templates by difficulty if specified
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
    id: `case-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    difficulty: selected.difficulty
  };
}

// Convenience: difficulty options
export const difficulties: Difficulty[] = [
  "Apprentice",
  "Adept",
  "Master",
  "Autopsy"
];

export const difficultyColors: Record<Difficulty, string> = {
  Apprentice: "#10b981",
  Adept: "#3b82f6",
  Master: "#a855f7",
  Autopsy: "#dc2626"
};
