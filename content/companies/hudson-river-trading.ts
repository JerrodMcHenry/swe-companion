import type { Company } from "../types";

const company: Company = {
  slug: "hudson-river-trading",
  name: "Hudson River Trading",
  group: "Quantitative Trading",
  roles: ["software-engineer", "quant-developer"],
  levels: "Postings reviewed (27 Nov 2026) include 2027 graduate and intern roles (C/C++ or Python) and experienced C++ roles asking 1+ years.",
  tagline: "Software engineering and trading-systems engineering (HRT)",
  card: "Timed take-home, phone rounds and a systems-focused onsite; no AI unless permitted.",
  categories: ["coding", "practical", "os-memory", "cpp", "python", "behavioral"],
  roleCategories: {
    "quant-developer": ["coding", "cpp", "performance", "os-memory", "concurrency", "cpp-concurrency", "networking", "cpp-practical", "behavioral"],
  },
  notes: {
    coding: "A timed take-home on HackerRank or Codility starts the campus process (2021 guide).",
    practical: "HRT looks for idiomatic, modern, readable code that uses resources well.",
    "os-memory": "The onsite looks at systems fundamentals such as memory, I/O and process management (2021 guide).",
    cpp: "Campus roles accept C/C++ or Python; experienced C++ roles require advanced C++.",
  },
  officialResources: [
    { title: "Interview at HRT", url: "https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/", note: "Official 2021 campus guide: the stages and what each one assesses. HRT says your recruiter is the source of truth." },
  ],
  facts: [
    { label: "AI tools", value: "Prohibited in interviews and assessments unless HRT instructs or agrees", evidence: "Official" },
    { label: "Process (2021)", value: "Timed take-home, about two phone interviews, then an onsite day", evidence: "Official" },
    { label: "Focus", value: "Code quality and systems fundamentals (memory, I/O, processes)", evidence: "Official" },
  ],
  formats: [
    { name: "Take-home", detail: "A timed assessment on HackerRank or Codility (2021 guide).", evidence: "Official" },
    { name: "Phone interviews", detail: "About two technical phone interviews (2021 guide).", evidence: "Official" },
    { name: "Onsite", detail: "A full day assessing code quality and systems knowledge (2021 guide). Experienced candidates follow a slightly abridged process.", evidence: "Official" },
  ],
  caveat: "HRT's only official interview guide dates from 2021 and describes the campus process. Confirm current stages with your recruiter.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Postings reviewed on 27 November 2026 include Software Engineer 2027 Grads and Intern roles (undergraduate or master's students with C/C++ or Python) and Software Engineer – C++ roles asking 1+ years with advanced C++.",
        "HRT's Algorithm Developer titles are quantitative research roles, not engineering roles, and are not covered here.",
      ],
    },
    { heading: "Evidence", items: ["Official: the 2021 interview guide and all current postings, which state the AI policy (checked 27 November 2026)."] },
  ],
  sources: [
    { title: "HRT — Interview at HRT (official, 2021)", url: "https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/" },
    { title: "HRT — Recruiting (official)", url: "https://www.hudsonrivertrading.com/recruiting/" },
  ],
  checked: "2026-11-27",
};

export default company;
