import type { Company } from "../types";

const company: Company = {
  slug: "citadel-securities",
  name: "Citadel Securities",
  group: "Quantitative Trading",
  roles: ["software-engineer", "frontend-engineer", "machine-learning-engineer", "quant-developer"],
  levels: "University graduate and intern software roles are posted; Quantitative Developer titles reviewed (27 Nov 2026) were experienced roles.",
  tagline: "Software, quantitative development, frontend and ML engineering (the market maker, not the Citadel hedge fund)",
  card: "Campus: CoderPad screen, then three interviews. Experienced: a day on one real problem.",
  categories: ["coding", "dsa", "python", "cpp", "behavioral", "system-design"],
  roleCategories: {
    "quant-developer": ["system-design", "cpp", "cpp-practical", "lld", "coding", "cpp-memory", "concurrency", "performance", "behavioral"],
  },
  notes: {
    coding: "The campus first round covers data structures and algorithms on CoderPad; the experienced page says memorized puzzles help less.",
    python: "Campus core languages are Python and C++, but any language is welcome.",
    cpp: "C++ is a core language; for experienced roles Citadel Securities says many will expect you to interview in it.",
    behavioral: "Campus rounds mix technical and behavioral questions; the experienced onsite ends with a discussion of how you work.",
    "system-design": "The experienced onsite (July 2026 page) starts by scoping and designing one system that you then build and extend.",
    "cpp-practical": "Experienced onsite problems are drawn from systems such as order books, matching engines and market-data pipelines.",
    lld: "Readable code and abstractions that survive new requirements are assessed in the experienced onsite's build and code review.",
  },
  officialResources: [
    { title: "Internship and new graduate interview process", url: "https://www.citadelsecurities.com/careers/career-perspectives/internship-and-new-graduates-engineering-interview-process/", note: "Official (dated 24 Jul 2024): the four campus steps, format and languages. The site may block automated access." },
    { title: "Experienced professionals interview process", url: "https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/", note: "Official (dated 23 Jul 2026): one problem through design, implementation, code review and discussion." },
  ],
  facts: [
    { label: "Campus process", value: "Four steps over about eight weeks; first round 45 minutes on CoderPad", evidence: "Official" },
    { label: "Experienced process", value: "Recruiter call, coding screen, then a 4–5 hour onsite on one problem", evidence: "Official" },
    { label: "Languages", value: "Campus: Python and C++ core, any welcome. Experienced: role-dependent, often C++", evidence: "Official" },
    { label: "AI", value: "No interview AI policy found on either page (Nov 2026)", evidence: "Varies" },
  ],
  formats: [
    { name: "Campus first round", detail: "A 45-minute remote technical and behavioral interview on CoderPad (24 July 2024 page).", evidence: "Official" },
    { name: "Campus second round", detail: "Usually three 45-minute interviews, then team-specific leadership interviews and a final review.", evidence: "Official" },
    { name: "Experienced onsite", detail: "Four to five hours on one problem in four stages: requirements and design, implementation, code review, and a discussion of how you work (23 July 2026 page).", evidence: "Official" },
  ],
  caveat:
    "Campus and experienced processes differ; confirm which applies and the language with your recruiter. The university-graduate posting lists probability and statistics as a job requirement; that does not establish that probability is interviewed.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "US University Graduate and Intern software engineering postings were found; both list familiarity with probability and statistics.",
        "Quantitative Developer titles (for example Quantitative Developer/Research Engineer) were found as experienced roles.",
        "Citadel Securities is a separate firm from Citadel, the hedge fund; this page covers Citadel Securities only.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: the campus and experienced interview-process pages, read in a browser on 27 November 2026 (the old interview-process address now hosts the experienced page), and postings read via Wayback snapshots.",
        "The experienced page says memorizing common algorithm puzzles will be less useful than in a typical coding interview.",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["Product Frontend Engineer (3+ years), UI Engineer and Machine Learning Engineer (2+ years) postings, read from Wayback snapshots (September–October 2026)."] },
  ],
  sources: [
    { title: "Citadel Securities — Internship and new graduates: engineering interview process (official, Jul 2024)", url: "https://www.citadelsecurities.com/careers/career-perspectives/internship-and-new-graduates-engineering-interview-process/" },
    { title: "Citadel Securities — Experienced professionals: engineering interview process (official, Jul 2026)", url: "https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/" },
    { title: "Archived copy of the earlier campus page, 10 January 2026", url: "http://web.archive.org/web/20260110114950/https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/" },
  ],
  checked: "2026-11-27",
};

export default company;
