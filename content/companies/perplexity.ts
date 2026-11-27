import type { Company } from "../types";

const company: Company = {
  slug: "perplexity",
  name: "Perplexity",
  group: "AI Companies",
  roles: ["software-engineer", "ai-engineer"],
  levels: "The general new-grad portal closed for 2026 and is expected to reopen in 2027; of 30 software postings reviewed (27 Nov 2026), 3 stated 0–2 years.",
  tagline: "Software and applied AI engineering",
  card: "Practical Python coding, agentic coding and a long AI-allowed project round.",
  categories: ["coding", "practical", "python", "ai", "oop", "system-design", "behavioral"],
  roleCategories: {
    "ai-engineer": ["coding", "practical", "ai", "rag", "agents", "ai-evals", "ai-system-design", "ai-production", "behavioral"],
  },
  notes: {
    coding: "Containers, sorting and searching, graph traversal and object-oriented design; no dynamic programming or Dijkstra expected.",
    practical: "Practical and hands-on coding rounds run in CodeSignal, without AI assistance.",
    python: "Python is strongly recommended; Java is strongly discouraged.",
    ai: "Agentic Coding requires coding agents; the Spike round (up to 9 hours) allows any AI use.",
    oop: "Object-oriented design is part of the expected coding knowledge.",
    "system-design": "For experienced candidates; early-career candidates take a Core Expertise round instead.",
  },
  officialResources: [
    { title: "Interview resources", url: "https://interviewresources.perplexity.ai/", note: "Official: every round, the expected knowledge, language advice and AI rules." },
  ],
  facts: [
    { label: "Coding", value: "CodeSignal; Python strongly recommended; no AI except documentation", evidence: "Official" },
    { label: "AI rounds", value: "Agentic Coding requires agents; Spike round allows any AI use", evidence: "Official" },
    { label: "Early career", value: "Core Expertise round instead of System Design", evidence: "Official" },
    { label: "New grad", value: "General portal closed for 2026; expected to reopen in 2027", evidence: "Official" },
  ],
  formats: [
    { name: "Practical assessment", detail: "45–90 minutes in CodeSignal.", evidence: "Official" },
    { name: "Hands-on coding", detail: "30–60 minutes, mostly in CodeSignal; common containers, sorting and searching, graph iteration and object-oriented design.", evidence: "Official" },
    { name: "Agentic coding", detail: "Requires using coding agents; about 3 hours asynchronous or 60–120 minutes live.", evidence: "Official" },
    { name: "Spike round", detail: "Up to 9 hours on an emailed project spec, with no restrictions on AI use; Python 3 or TypeScript is typically expected.", evidence: "Official" },
    { name: "System design or Core Expertise", detail: "System design (45–60 minutes) for experienced candidates; early-career candidates choose a Core Expertise discipline.", evidence: "Official" },
  ],
  caveat: "Each role uses a subset of these rounds. Confirm which ones you will have with your recruiter.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Perplexity's general new-grad portal closed for 2026 and is expected to reopen at some point in 2027; school-specific portals were not checked.",
        "For applicants outside its listed focus schools, the new-grad posting says it typically requires a CS/Math GPA of at least 3.92 and an A or A+ in an upper-level algorithms course, or other evidence of exceptional ability.",
        "Applied AI postings reviewed that state a minimum asked 4+ years.",
      ],
    },
    { heading: "Evidence", items: ["Official: Perplexity's interview resources portal and postings, checked 27 November 2026."] },
  ],
  sources: [
    { title: "Perplexity — Interview resources (official)", url: "https://interviewresources.perplexity.ai/" },
    { title: "Perplexity — Careers interview guide (official)", url: "https://www.perplexity.ai/hub/careers/interview-guide" },
  ],
  checked: "2026-11-27",
};

export default company;
