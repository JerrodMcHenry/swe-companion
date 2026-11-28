import type { Company } from "../types";

const company: Company = {
  slug: "other",
  name: "General preparation",
  group: "Types of Employer",
  icon: "document",
  roles: ["software-engineer", "backend-engineer", "frontend-engineer", "full-stack-engineer", "data-engineer", "machine-learning-engineer", "ai-engineer", "forward-deployed-engineer", "solutions-engineer", "quant-developer"],
  tagline: "For any employer, including small and midsize businesses, or a specific job posting: prioritize from the posting and the format your recruiter confirms",
  card: "Any employer or a specific posting: balanced coding, practical and behavioral preparation.",
  facts: [
    { label: "How it works", value: "The posting and your recruiter's format set the priorities", evidence: "Editorial" },
    { label: "Default", value: "Balanced coding, practical and behavioral preparation", evidence: "Editorial" },
  ],
  formats: [
    { name: "Common stages", detail: "Application screen, online assessment or recruiter call, one or more technical interviews, and a behavioral or hiring-manager conversation. Many employers skip or combine stages.", evidence: "Varies" },
  ],
  categories: ["job-description", "coding", "dsa", "behavioral", "projects", "practical"],
  notes: {
    "job-description": "The posting and your recruiter's format set the priorities.",
  },
  officialResources: [],
  caveat: "The actual process is whatever your recruiter describes. Ask early about the stages, the coding environment and any AI rules.",
  details: [],
  sources: [],
  checked: "2026-11-25",
};

export default company;
