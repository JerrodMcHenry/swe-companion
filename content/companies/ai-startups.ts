import type { Company } from "../types";

const company: Company = {
  slug: "ai-startups",
  name: "AI-focused startups",
  group: "Types of Employer",
  icon: "spark",
  roles: ["software-engineer", "backend-engineer", "frontend-engineer", "full-stack-engineer", "data-engineer", "machine-learning-engineer", "ai-engineer", "forward-deployed-engineer", "solutions-engineer"],
  tagline: "General software roles at AI product companies, not ML research",
  card: "Coding, debugging and basic design; AI-assisted builds at some.",
  facts: [
    { label: "Scope", value: "General software roles, not ML research", evidence: "Editorial" },
    { label: "Formats", value: "Coding, debugging, basic design; AI-assisted builds at some", evidence: "Candidate-reported" },
    { label: "AI", value: "Only where the company explicitly allows it", evidence: "Editorial" },
  ],
  formats: [
    { name: "Coding screens", detail: "One or two algorithmic or practical coding screens.", evidence: "Candidate-reported" },
    { name: "AI-assisted build", detail: "Build something with AI tools and demo it (for example about 90 minutes after a design discussion without AI).", evidence: "Candidate-reported" },
    { name: "Testing and debugging rounds", detail: "A testing-focused coding round and a debugging round at one company.", evidence: "Candidate-reported" },
    { name: "Basic system design and project deep dive", detail: "Reported in some new-grad onsites.", evidence: "Candidate-reported" },
  ],
  categories: ["coding", "ai", "practical", "system-design", "projects", "behavioral"],
  roleCategories: {"backend-engineer":  ["coding", "ai", "apis", "system-design", "practical", "behavioral"], "full-stack-engineer":  ["coding", "ai", "react", "apis", "practical", "behavioral"]},
  notes: {
    ai: "Some rounds are AI-assisted builds; never use AI where it is not allowed.",
    practical: "Testing-focused and debugging rounds were reported.",
    "system-design": "Basic design appeared in some new-grad onsites.",
  },
  officialResources: [],
  caveat:
    "These formats come from a handful of individual reports (Decagon, xAI, Plaud, Notion's AI track); formats and AI rules change quickly. Confirm the process and which rounds allow AI with each company.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Entry-level roles are a small minority at AI-focused companies; read the experience requirement first.",
        "General software roles do not normally require model training or advanced mathematics; if a posting does, it is a specialized ML role.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Candidate-reported, small sample: Decagon — coding screens, then AI coding, system design, project deep dive and behavioral; xAI — a four-hour take-home built with AI, or a whiteboard design followed by building it with AI; Plaud — system design and graph coding; Notion's AI new-grad track — a take-home, then testing-focused and debugging rounds.",
        "Review date: 2027-02-25, because AI interview policies change fast.",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["Solutions engineer postings are common but ask for experience (for example 4–6 years)."] },
  ],
  sources: [
    { title: "Decagon new-grad interviews (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-decagon-new-grad-swe-interviews-1-experience-4p0yzlfvh5" },
    { title: "xAI AI coding interview and take-home (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2025-2026-xai-ai-coding-interview-building-with-ai-new-grad-take-home-onsite-3-e-1vhv6zjyey" },
    { title: "Plaud new-grad onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/plaud-new-grad-swe-onsite-interview-experience-1-experience-cx8d9z234f" },
    { title: "Notion new-grad and AI new-grad (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip" },
  ],
  checked: "2026-11-25",
};

export default company;
