import type { Company } from "../types";

const company: Company = {
  slug: "hudson-river-trading",
  name: "Hudson River Trading",
  group: "Quantitative Trading",
  roles: ["software-engineer", "full-stack-engineer", "quant-developer"],
  levels: "Postings reviewed (27 Nov 2026) include 2027 graduate and intern roles (C/C++ or Python) and experienced C++ roles asking 1+ years.",
  tagline: "Software, full-stack and trading-systems engineering (HRT)",
  card: "Coding, debugging and design rounds on fundamentals, not tricks; no AI unless permitted.",
  categories: ["coding", "practical", "os-memory", "cpp", "python", "behavioral"],
  roleCategories: {
    "full-stack-engineer": ["coding", "practical", "typescript", "javascript", "react", "lld", "apis", "behavioral"],
    "quant-developer": ["coding", "cpp", "practical", "performance", "os-memory", "concurrency", "cpp-concurrency", "lld", "cpp-practical", "networking", "behavioral"],
  },
  notes: {
    typescript: "HRT's 2025 post says full-stack candidates can interview in TypeScript/Python. No full-stack posting was found on its job board on 27 November 2026.",
    coding: "HRT says it avoids “burst of insight” LeetCode-style questions; strong fundamentals matter more than tricks (2025 post).",
    practical: "Onsites include coding and debugging rounds; HRT looks for idiomatic, readable code that uses resources well.",
    lld: "Onsites include technical design discussions (2025 post); practise designing components and explaining trade-offs.",
    "os-memory": "Know how your tools work underneath: memory, I/O and processes (2021 guide); HRT's 2025 post cites list growth and virtual calls.",
    cpp: "Choose C++, Python, or TypeScript/Python for full-stack roles (2025 post); experienced C++ roles require advanced C++.",
    behavioral: "HRT rates communication as highly as technical ability: understand the problem before you start and listen to your interviewer.",
  },
  officialResources: [
    { title: "Engineering and interviewing at HRT", url: "https://www.hudsonrivertrading.com/hrtbeat/engineering-and-interviewing-at-hrt/", note: "Official (2 Oct 2025): engineering roles, interview stages, languages and the most common reasons candidates fail." },
    { title: "Interview at HRT", url: "https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/", note: "Official 2021 campus guide: the stages and what each one assesses. HRT says your recruiter is the source of truth." },
  ],
  facts: [
    { label: "AI tools", value: "Prohibited in interviews and assessments unless HRT instructs or agrees (current postings)", evidence: "Official" },
    { label: "Process (2025)", value: "Zoom calls and technical interviews, then onsite coding, debugging, design and team-fit rounds", evidence: "Official" },
    { label: "Languages", value: "C++, Python, or TypeScript/Python for full-stack", evidence: "Official" },
    { label: "Focus", value: "Fundamentals, code quality and communication; same technical tests at every level", evidence: "Official" },
  ],
  formats: [
    { name: "Zoom calls", detail: "Exploratory conversations or technical phone screens, depending on role and candidate (2025 post). The 2021 campus guide started with a timed HackerRank or Codility assessment.", evidence: "Official" },
    { name: "Technical interviews", detail: "You may be asked to analyze code in an unfamiliar language; HRT says grading accounts for language familiarity (2025 post).", evidence: "Official" },
    { name: "Onsite", detail: "Coding and debugging rounds, technical design discussions and team fit, preferably at least partly in person (2025 post).", evidence: "Official" },
  ],
  caveat: "HRT's 2025 post is one engineer's account, and HRT says it keeps iterating on the process. Confirm current stages, languages and any AI permission with your recruiter.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Postings reviewed on 27 November 2026 include Software Engineer 2027 Grads and Intern roles (undergraduate or master's students with C/C++ or Python) and Software Engineer – C++ roles asking 1+ years with advanced C++.",
        "HRT's Algorithm Developer titles are quantitative research roles, not engineering roles, and are not covered here.",
      ],
    },
    { heading: "Evidence", items: ["Official: the 2 October 2025 engineering and interviewing post (the most recent official interview guidance found), the 2021 campus guide, and all current postings, which state the AI policy (checked 27 November 2026)."] },
  ],
  sources: [
    { title: "HRT — Answers to questions I often get: engineering and interviewing at HRT (official, Oct 2025)", url: "https://www.hudsonrivertrading.com/hrtbeat/engineering-and-interviewing-at-hrt/" },
    { title: "HRT — Interview at HRT (official, 2021)", url: "https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/" },
    { title: "HRT — Recruiting (official)", url: "https://www.hudsonrivertrading.com/recruiting/" },
  ],
  checked: "2026-11-27",
};

export default company;
