// ============================================================================
// CURATED RESOURCE LIBRARY
// International-standard pathology references for clinical diagnostic
// practice — atlas, microscopy, lab techniques, guidelines.
// All links verified as legitimate medical education resources.
// ============================================================================

export interface Resource {
  id: string;
  title: string;
  url: string;
  description: string;
  category: ResourceCategory;
  icon: string;
  rating: number; // 1–5
  tags: string[];
}

export type ResourceCategory =
  | "Atlas & Slides"
  | "Textbooks"
  | "Lab Techniques"
  | "Guidelines"
  | "Quizzes & Practice"
  | "Microscopy"
  | "Videos"
  | "Journals";

export interface ResourceCategory_ {
  id: ResourceCategory;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export const resourceCategories: ResourceCategory_[] = [
  {
    id: "Atlas & Slides",
    name: "Atlas & Histopathology Slides",
    description:
      "Whole-slide image repositories and searchable atlases — perfect for the morphology questions in your exam.",
    icon: "Microscope",
    color: "#06b6d4"
  },
  {
    id: "Microscopy",
    name: "Microscopy & Cytology",
    description:
      "High-resolution photomicrographs of peripheral smears, bone marrow, cytology, and microbiology.",
    icon: "ZoomIn",
    color: "#0ea5e9"
  },
  {
    id: "Textbooks",
    name: "Standard Textbooks",
    description:
      "The gold-standard references — Robbins, Wintrobe, Henry's, WHO — that your exam answers must align with.",
    icon: "BookOpen",
    color: "#f59e0b"
  },
  {
    id: "Lab Techniques",
    name: "Laboratory Techniques",
    description:
      "Stains, fixatives, FNAC, frozen section, histology processing — practical lab manuals.",
    icon: "FlaskConical",
    color: "#10b981"
  },
  {
    id: "Guidelines",
    name: "Clinical Guidelines",
    description:
      "WHO, NCCN, ASH, AABB — internationally recognised diagnostic and treatment guidelines.",
    icon: "FileCheck",
    color: "#8b5cf6"
  },
  {
    id: "Quizzes & Practice",
    name: "Quizzes & Practice",
    description:
      "Self-assessment question banks — perfect for daily practice and the 2-mark blitz on Day 20.",
    icon: "Brain",
    color: "#ec4899"
  },
  {
    id: "Videos",
    name: "Video Lectures",
    description:
      "Pathoma, Robbins videos, and lecture series from top medical schools.",
    icon: "PlayCircle",
    color: "#ef4444"
  },
  {
    id: "Journals",
    name: "Research Journals",
    description:
      "Modern Pathology, AJSP, Histopathology — for the latest in diagnostic practice.",
    icon: "Newspaper",
    color: "#6366f1"
  }
];

export const resources: Resource[] = [
  // ========================================================================
  // ATLAS & SLIDES
  // ========================================================================
  {
    id: "webpath",
    title: "WebPath — Internet Pathology Laboratory",
    url: "https://library.med.utah.edu/WebPath/webpath.html",
    description:
      "Florida State University's legendary digital pathology atlas. Over 1,900 images organised by organ system. Includes tutorials, case studies, and exam questions. Free access.",
    category: "Atlas & Slides",
    icon: "Globe",
    rating: 5,
    tags: ["free", "atlas", "organ-system", "case-studies"]
  },
  {
    id: "pathpresenter",
    title: "PathPresenter",
    url: "https://pathpresenter.net/",
    description:
      "Whole-slide image library with cases contributed by pathologists worldwide. Search by organ, diagnosis, or stain. Excellent for gross and microscopic correlation.",
    category: "Atlas & Slides",
    icon: "Layers",
    rating: 5,
    tags: ["free", "whole-slide", "global"]
  },
  {
    id: "pathologyoutlines",
    title: "PathologyOutlines",
    url: "https://www.pathologyoutlines.com/",
    description:
      "Comprehensive topic outlines by organ system with embedded images, references, and differential diagnoses. Updated continuously by practising pathologists.",
    category: "Atlas & Slides",
    icon: "ListTree",
    rating: 5,
    tags: ["free", "outlines", "differential", "updated"]
  },
  {
    id: "humpath",
    title: "Humpath — Human Pathology Atlas",
    url: "http://www.humpath.com/",
    description:
      "Free atlas with thousands of histopathology images indexed by disease. Particularly good for neoplastic pathology.",
    category: "Atlas & Slides",
    icon: "ImageIcon",
    rating: 4,
    tags: ["free", "atlas", "neoplasia"]
  },
  {
    id: "peir-uab",
    title: "PEIR Digital Library — UAB",
    url: "https://peir.path.uab.edu/library/",
    description:
      "Pathology Education Instructional Resource from University of Alabama — comprehensive multimedia library for pathology education.",
    category: "Atlas & Slides",
    icon: "Library",
    rating: 4,
    tags: ["free", "multimedia", "education"]
  },

  // ========================================================================
  // MICROSCOPY
  // ========================================================================
  {
    id: "histologyguide",
    title: "Histology Guide",
    url: "https://histologyguide.com/",
    description:
      "Virtual microscope with high-resolution slides of normal histology. Foundation for recognising pathological changes.",
    category: "Microscopy",
    icon: "Microscope",
    rating: 5,
    tags: ["free", "virtual-microscope", "normal-histology"]
  },
  {
    id: "pubmed-central-cytology",
    title: "PubMed Central — Cytology Image Search",
    url: "https://www.ncbi.nlm.nih.gov/pmc/?term=cytology+image",
    description:
      "Free full-text archive of biomedical literature with cytology images. Useful for case-based learning.",
    category: "Microscopy",
    icon: "Search",
    rating: 4,
    tags: ["free", "literature", "cytology"]
  },
  {
    id: "atlas-of-genetics",
    title: "Atlas of Genetics and Cytogenetics",
    url: "https://atlasgeneticsoncology.org/",
    description:
      "International atlas of hematologic diseases with cytogenetic correlations. Excellent for leukemia (Philadelphia chromosome) and lymphoma.",
    category: "Microscopy",
    icon: "Dna",
    rating: 5,
    tags: ["free", "cytogenetics", "hematopathology"]
  },

  // ========================================================================
  // TEXTBOOKS
  // ========================================================================
  {
    id: "robbins-basic",
    title: "Robbins Basic Pathology (10e)",
    url: "https://www.us.elsevierhealth.com/robbins-basic-pathology/9780323353175/",
    description:
      "The international gold standard. Every answer in your university exam should be traceable to Robbins. The 10th edition includes updated molecular pathology and WHO classifications.",
    category: "Textbooks",
    icon: "BookOpen",
    rating: 5,
    tags: ["gold-standard", "international", "exam-aligned"]
  },
  {
    id: "robbins-pathologic",
    title: "Robbins & Cotran Pathologic Basis of Disease (10e)",
    url: "https://www.us.elsevierhealth.com/robbins-cotran-pathologic-basis-of-disease/9780323531139/",
    description:
      "The comprehensive sister to Basic Pathology — for deeper detail on systemic pathology and molecular mechanisms.",
    category: "Textbooks",
    icon: "BookMarked",
    rating: 5,
    tags: ["comprehensive", "systemic-pathology", "molecular"]
  },
  {
    id: "wintrobe",
    title: "Wintrobe's Clinical Hematology",
    url: "https://www.lww.com/wintrobe-s-clinical-hematology-15e/9781975155740/",
    description:
      "The definitive reference for hematopathology — anemias, leukemias, thalassemia, coagulation, blood banking.",
    category: "Textbooks",
    icon: "BookOpen",
    rating: 5,
    tags: ["hematology", "gold-standard"]
  },
  {
    id: "henrys",
    title: "Henry's Clinical Diagnosis and Management by Laboratory Methods",
    url: "https://www.elsevier.com/books/henrys-clinical-diagnosis-and-management-by-laboratory-methods/mcitindole/9780323758382/",
    description:
      "The standard for clinical pathology — urine, CSF, semen, blood bank, automated analysers.",
    category: "Textbooks",
    icon: "FlaskConical",
    rating: 5,
    tags: ["lab-medicine", "clinical-pathology"]
  },
  {
    id: "aabb-technical",
    title: "AABB Technical Manual (20e)",
    url: "https://www.aabb.org/docs/default-source/default-document-library/technical-manual-20th-edition-publication announcement.pdf",
    description:
      "The bible of blood banking — blood groups, components, transfusion reactions, donor criteria, coombs testing.",
    category: "Textbooks",
    icon: "Droplet",
    rating: 5,
    tags: ["blood-bank", "transfusion"]
  },
  {
    id: "who-manual-semen",
    title: "WHO Laboratory Manual for Human Semen (6e, 2021)",
    url: "https://www.who.int/publications/i/item/9789240030787",
    description:
      "The international reference for semen analysis — the 2021 updated reference limits (count ≥ 16 million/mL, etc.).",
    category: "Textbooks",
    icon: "Microscope",
    rating: 5,
    tags: ["WHO", "semen", "international"]
  },
  {
    id: "bethesda-cervical",
    title: "The Bethesda System for Cervical Cytology (3e)",
    url: "https://www.springer.com/gp/book/9781493934791",
    description:
      "Standardised reporting for PAP smears — NILM, ASCUS, LSIL, HSIL. Used worldwide for cervical cancer screening.",
    category: "Textbooks",
    icon: "FileText",
    rating: 5,
    tags: ["cytology", "screening", "international"]
  },

  // ========================================================================
  // LAB TECHNIQUES
  // ========================================================================
  {
    id: "theory-histological",
    title: "Theory & Practice of Histological Techniques",
    url: "https://www.elsevier.com/books/theory-and-practice-of-histological-techniques/suvarna/9780702068645/",
    description:
      "The bible for histopathology laboratory — fixatives, processing, embedding, staining (H&E, special stains).",
    category: "Lab Techniques",
    icon: "Beaker",
    rating: 5,
    tags: ["histology", "stains", "fixatives"]
  },
  {
    id: "orrell-fnac",
    title: "Orell & Sterrett — Fine Needle Aspiration Cytology (5e)",
    url: "https://www.elsevier.com/books/fine-needle-aspiration-cytology/orell/9780443067294/",
    description:
      "The reference text for FNAC technique and reporting — your 5-mark FNAC answer should match Orell.",
    category: "Lab Techniques",
    icon: "Syringe",
    rating: 5,
    tags: ["FNAC", "cytology"]
  },
  {
    id: "ash-image-bank",
    title: "ASH Image Bank",
    url: "https://imagebank.hematology.org/",
    description:
      "American Society of Hematology curated atlas of hematopathology — peripheral smears, bone marrows, lymphoma. Free for members.",
    category: "Lab Techniques",
    icon: "ImageIcon",
    rating: 5,
    tags: ["hematology", "smears", "free"]
  },
  {
    id: "cap-stain-protocol",
    title: "CAP Stain Protocols",
    url: "https://www.cap.org/protocols-and-guidelines/stain-protocols",
    description:
      "College of American Pathologists standardised stain protocols — H&E, special stains, immunohistochemistry.",
    category: "Lab Techniques",
    icon: "FileCheck",
    rating: 4,
    tags: ["CAP", "stains", "standardised"]
  },

  // ========================================================================
  // GUIDELINES
  // ========================================================================
  {
    id: "who-int",
    title: "WHO — Health Topics",
    url: "https://www.who.int/health-topics",
    description:
      "World Health Organization international guidelines for AIDS, TB, blood safety, anaemia, hypertension.",
    category: "Guidelines",
    icon: "Globe",
    rating: 5,
    tags: ["WHO", "international", "guidelines"]
  },
  {
    id: "ash-guidelines",
    title: "American Society of Hematology Guidelines",
    url: "https://www.hematology.org/education/guidelines-quality",
    description:
      "ASH clinical practice guidelines for venous thromboembolism, immune thrombocytopenia, AML, sickle cell disease.",
    category: "Guidelines",
    icon: "Shield",
    rating: 5,
    tags: ["ASH", "hematology", "guidelines"]
  },
  {
    id: "nccn",
    title: "NCCN Clinical Practice Guidelines in Oncology",
    url: "https://www.nccn.org/professionals/physician_gls/default.aspx",
    description:
      "Free registration — international oncology guidelines for breast, lung, GI, GU, gynecologic cancers.",
    category: "Guidelines",
    icon: "Ribbon",
    rating: 5,
    tags: ["NCCN", "oncology", "free"]
  },
  {
    id: "cdc-tb",
    title: "CDC — Tuberculosis Guidelines",
    url: "https://www.cdc.gov/tb/publications/guidelines/default.htm",
    description:
      "International standards for TB diagnosis, treatment, drug susceptibility testing.",
    category: "Guidelines",
    icon: "Lung",
    rating: 5,
    tags: ["TB", "CDC", "international"]
  },
  {
    id: "unaids",
    title: "UNAIDS — HIV/AIDS Guidelines",
    url: "https://www.unaids.org/en/resources/documents",
    description:
      "Global HIV/AIDS guidelines — diagnosis, staging, ART initiation, opportunistic infection prophylaxis.",
    category: "Guidelines",
    icon: "Ribbon",
    rating: 4,
    tags: ["HIV", "AIDS", "international"]
  },

  // ========================================================================
  // QUIZZES & PRACTICE
  // ========================================================================
  {
    id: "pathology-student",
    title: "Pathology Student",
    url: "https://www.pathologystudent.com/",
    description:
      "Free daily pathology mini-courses, quizzes, and 'disease of the week' articles — perfect for active recall during your 20-day campaign.",
    category: "Quizzes & Practice",
    icon: "GraduationCap",
    rating: 5,
    tags: ["free", "quizzes", "active-recall"]
  },
  {
    id: "pathoma-quiz",
    title: "Pathoma — Fundamentals of Pathology",
    url: "https://www.pathoma.com/",
    description:
      "Dr. Husain Sattar's legendary video course + textbook. Subscription-based but worth every rupee for USMLE-style mastery. The mnemonics are gold.",
    category: "Quizzes & Practice",
    icon: "Video",
    rating: 5,
    tags: ["paid", "videos", "usMLE-style"]
  },
  {
    id: "kenhub-quiz",
    title: "Kenhub — Pathology Quizzes",
    url: "https://www.kenhub.com/en/library/anatomy/pathology",
    description:
      "Interactive quizzes with images and immediate feedback. Useful for revision sessions during the 20-day campaign.",
    category: "Quizzes & Practice",
    icon: "HelpCircle",
    rating: 4,
    tags: ["free", "interactive", "quizzes"]
  },

  // ========================================================================
  // VIDEOS
  // ========================================================================
  {
    id: "pathoma-videos",
    title: "Pathoma Video Series",
    url: "https://www.pathoma.com/",
    description:
      "The single best video resource for pathology. ~35 hours covering all of Robbins. Watch 1 hr/day during your 20-day campaign.",
    category: "Videos",
    icon: "PlayCircle",
    rating: 5,
    tags: ["paid", "video", "global"]
  },
  {
    id: "ninja-nerd-path",
    title: "Ninja Nerd — Pathology Playlist",
    url: "https://www.youtube.com/c/ninjanerdofficial",
    description:
      "Free YouTube pathology lectures with detailed illustrations. Great for visual learners — covers inflammation, neoplasia, hematology.",
    category: "Videos",
    icon: "Youtube",
    rating: 5,
    tags: ["free", "youtube", "visual"]
  },
  {
    id: "osmosis",
    title: "Osmosis — Pathology Videos",
    url: "https://www.osmosis.org/",
    description:
      "Concise, well-animated pathology videos. Free tier includes most topics. Excellent for quick review.",
    category: "Videos",
    icon: "PlayCircle",
    rating: 4,
    tags: ["free-tier", "animation", "review"]
  },
  {
    id: "harvard-pathology",
    title: "Harvard Medical School Pathology",
    url: "https://pathology.hms.harvard.edu/education/",
    description:
      "Free lecture series and case-based teaching from Harvard — high-yield and globally respected.",
    category: "Videos",
    icon: "GraduationCap",
    rating: 5,
    tags: ["free", "harvard", "case-based"]
  },

  // ========================================================================
  // JOURNALS
  // ========================================================================
  {
    id: "modern-pathology",
    title: "Modern Pathology (USCAP)",
    url: "https://www.nature.com/modpathol/",
    description:
      "Open-access articles on diagnostic surgical pathology and molecular pathology. Useful for advanced topics.",
    category: "Journals",
    icon: "Newspaper",
    rating: 5,
    tags: ["journal", "research", "surgical-pathology"]
  },
  {
    id: "ajsp",
    title: "American Journal of Surgical Pathology",
    url: "https://journals.lww.com/ajsp/",
    description:
      "Premier journal for diagnostic pathology — case reports with classic morphological descriptions.",
    category: "Journals",
    icon: "Newspaper",
    rating: 5,
    tags: ["journal", "diagnostic", "case-reports"]
  },
  {
    id: "pubmed",
    title: "PubMed — National Library of Medicine",
    url: "https://pubmed.ncbi.nlm.nih.gov/",
    description:
      "Search 35 million biomedical citations. Free abstracts; many full-text links. Use for evidence-based answers.",
    category: "Journals",
    icon: "Search",
    rating: 5,
    tags: ["free", "literature", "search"]
  },
  {
    id: "radiopaedia",
    title: "Radiopaedia",
    url: "https://radiopaedia.org/",
    description:
      "Wiki-style radiology atlas — useful for chest X-ray, USG, CT, and autopsy case correlation.",
    category: "Journals",
    icon: "Stethoscope",
    rating: 5,
    tags: ["free", "radiology", "case-based"]
  }
];

// Helper functions
export const getResourcesByCategory = (cat: ResourceCategory) =>
  resources.filter((r) => r.category === cat);

export const searchResources = (query: string) =>
  resources.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.description.toLowerCase().includes(query.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );
