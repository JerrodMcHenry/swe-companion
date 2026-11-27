import type { Company } from "../types";

const company: Company = {
  slug: "citadel-securities",
  name: "Citadel Securities",
  group: "Quantitative Trading",
  roles: ["software-engineer", "quant-developer"],
  levels: "University graduate and intern software roles are posted; Quantitative Developer titles reviewed (27 Nov 2026) were experienced roles.",
  tagline: "Software engineering and quantitative development (the market maker, not the Citadel hedge fund)",
  card: "CoderPad screen, then three interviews; Python and C++ core.",
  categories: ["coding", "dsa", "python", "cpp", "behavioral", "system-design"],
  roleCategories: {
    "quant-developer": ["coding", "cpp", "cpp-memory", "concurrency", "performance", "os-memory", "cpp-practical", "system-design", "behavioral"],
  },
  notes: {
    coding: "The first round covers data structures and algorithms on CoderPad.",
    python: "Core languages are Python and C++, but any language is welcome.",
    cpp: "C++ is a core language alongside Python; experienced C++ roles go deeper.",
    behavioral: "The first round includes behavioral questions, and later rounds include leadership interviews.",
    "system-design": "More likely for experienced candidates; the published process is campus-oriented.",
  },
  officialResources: [
    { title: "Our engineering interview process", url: "https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/", note: "Official (dated Nov 2024): the steps, format and languages. The live page may block automated access." },
  ],
  facts: [
    { label: "Process", value: "Four steps over about eight weeks", evidence: "Official" },
    { label: "First round", value: "45 minutes on CoderPad: data structures, algorithms and behavioral", evidence: "Official" },
    { label: "Languages", value: "Python and C++ core; any language welcome", evidence: "Official" },
  ],
  formats: [
    { name: "First round", detail: "A 45-minute remote technical and behavioral interview on CoderPad.", evidence: "Official" },
    { name: "Second round", detail: "Usually three 45-minute interviews.", evidence: "Official" },
    { name: "Leadership interviews and final review", detail: "Team-specific leadership interviews, then a final review.", evidence: "Official" },
  ],
  caveat:
    "The published process (dated November 2024, read from a January 2026 archive copy) is campus-oriented. The university-graduate posting lists familiarity with probability and statistics as a job requirement; that does not establish that probability is interviewed. Confirm the format with your recruiter.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "US University Graduate and Intern software engineering postings were found; both list familiarity with probability and statistics.",
        "Quantitative Developer titles (for example Quantitative Developer/Research Engineer) were found as experienced roles.",
        "Citadel Securities is a separate firm from Citadel, the hedge fund; this page covers Citadel Securities only.",
      ],
    },
    { heading: "Evidence", items: ["Official: the engineering interview process page and postings, read via Wayback snapshots where the live site blocked automated access (checked 27 November 2026)."] },
  ],
  sources: [
    { title: "Citadel Securities — Our engineering interview process (official, Nov 2024)", url: "https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/" },
    { title: "Archived copy, 10 January 2026", url: "http://web.archive.org/web/20260110114950/https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/" },
  ],
  checked: "2026-11-27",
};

export default company;
