import type { Company } from "../types";

const company: Company = {
  slug: "anthropic",
  name: "Anthropic",
  group: "AI Companies",
  roles: ["software-engineer", "ai-engineer", "forward-deployed-engineer"],
  levels: "None of the 92 Software Engineer postings reviewed (27 Nov 2026) stated 0–2 years; most carried Senior or Staff titles.",
  tagline: "Software, applied AI and forward deployed engineering",
  card: "Live coding without AI unless told otherwise; mostly experienced hires.",
  categories: ["practical", "coding", "dsa", "system-design", "behavioral"],
  roleCategories: {
    "ai-engineer": ["agents", "ai-evals", "rag", "ai-production", "ai-system-design", "ai-practical", "practical", "coding", "ai-security", "behavioral"],
    "forward-deployed-engineer": ["customer-discovery", "customer-integration", "practical", "api-design", "auth", "agents", "ai-system-design", "customer-communication", "behavioral"],
  },
  notes: {
    coding: "Anthropic publishes no topic list: practise representative problems by pattern; practical tasks may matter more than puzzles.",
    practical: "Technical roles use live coding tools such as Colab and CodeSignal; practise without AI assistance.",
    "system-design": "Most postings are senior, where design discussions are standard; Anthropic publishes no stage list.",
    behavioral: "Read Anthropic's published values and be ready to discuss why its mission matters to you.",
    agents: "Applied AI postings ask for experience building agents and evaluations in production.",
  },
  officialResources: [
    { title: "Guidance on candidates' AI usage", url: "https://www.anthropic.com/candidate-ai-guidance", note: "Official: no AI in take-homes or live interviews unless Anthropic indicates otherwise." },
    { title: "Careers", url: "https://www.anthropic.com/careers", note: "Official job listings and how interviews are run." },
  ],
  facts: [
    { label: "AI in interviews", value: "Not allowed in take-homes or live interviews unless indicated", evidence: "Official" },
    { label: "Tools", value: "Google Meet; live coding in tools such as Colab or CodeSignal", evidence: "Official" },
    { label: "Experience", value: "Reviewed postings target experienced engineers", evidence: "Official" },
  ],
  formats: [
    { name: "Live coding", detail: "Technical roles use live coding tools such as Colab and CodeSignal. Anthropic publishes no official sequence of interview stages.", evidence: "Official" },
    { name: "Coding challenge", detail: "A third-party guide describes the coding challenge as in flux, with some teams moving away from traditional challenges; one candidate described a multi-level practical task.", evidence: "Third-party" },
    { name: "Forward deployed interviews", detail: "A third-party guide describes customer-scenario and technical rounds; it is based on limited reports.", evidence: "Third-party" },
  ],
  caveat:
    "Anthropic publishes its AI policy and tools but not its interview stages. Treat third-party descriptions as possible formats and ask your recruiter.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Of 92 Software Engineer postings reviewed on 27 November 2026, none stated 0–2 years and 80 carried Staff, Senior, Lead or Manager titles. Postings say years of experience correlate with the internal job level.",
        "Forward deployed postings asked 4+ years (London) to 8+ years (Paris, Munich); applied AI engineer postings mostly asked 4+ years.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: candidate AI guidance (last updated 10 July 2025), careers page and postings (checked 27 November 2026).",
        "Third-party: interviewing.io and aced.io guides, based on limited candidate reports.",
      ],
    },
  ],
  sources: [
    { title: "Anthropic — Guidance on candidates' AI usage (official)", url: "https://www.anthropic.com/candidate-ai-guidance" },
    { title: "Anthropic — Careers (official)", url: "https://www.anthropic.com/careers" },
    { title: "interviewing.io — Anthropic interview questions (third-party)", url: "https://interviewing.io/anthropic-interview-questions" },
    { title: "aced.io — Anthropic forward deployed engineer interview (third-party)", url: "https://www.aced.io/guides/anthropic-forward-deployed-engineer-interview" },
  ],
  checked: "2026-11-27",
};

export default company;
