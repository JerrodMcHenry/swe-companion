import type { Company } from "../types";

const company: Company = {
  slug: "early-stage-startups",
  name: "Early-stage startups",
  group: "Types of Employer",
  logo: "/logos/ycombinator.svg",
  tagline: "Seed to Series A, including YC-backed companies · no standard process",
  card: "Take-homes, project discussions and work trials; algorithmic screens at some.",
  facts: [
    { label: "Entry-level roles", value: "Scarce: 3 of 32 YC SWE postings accepted new grads (25 Nov 2026)", evidence: "Official" },
    { label: "Common evidence", value: "A deployed project or work sample", evidence: "Official" },
    { label: "Typical steps", value: "Founder call, take-home, discussion, sometimes a work trial", evidence: "Official" },
    { label: "AI in interviews", value: "Varies; ask each company", evidence: "Varies" },
  ],
  formats: [
    { name: "Take-home assignment", detail: "A small build with tests and a README (one company: 4 hours), then a technical interview about it.", evidence: "Official" },
    { name: "Project discussion", detail: "Walk through something you built: decisions, trade-offs and what you would change. Some companies require a deployed project with real users.", evidence: "Official" },
    { name: "Work trial", detail: "One company asks for two days working with the team. Ask whether it is paid and how long it takes.", evidence: "Official" },
    { name: "Algorithmic screen", detail: "Not described in the official processes reviewed, but candidate evidence is thin; some startups use one.", evidence: "Varies" },
  ],
  categories: ["projects", "practical", "apis", "behavioral", "coding"],
  roleCategories: {"backend-engineer":  ["apis", "sql", "projects", "backend", "behavioral", "coding"], "full-stack-engineer":  ["react", "javascript", "typescript", "apis", "projects", "behavioral", "coding"]},
  notes: {
    projects: "Take-homes and project discussions are the main signal.",
    practical: "Change unfamiliar code and explain every change.",
    behavioral: "Ownership, learning fast and why this product.",
    coding: "For companies that run an algorithmic screen.",
  },
  officialResources: [
    { title: "YC software engineering jobs", url: "https://www.ycombinator.com/jobs/role/software-engineer", note: "Official job list; filter for roles that accept new graduates." },
  ],
  caveat:
    "YC is an investor, not an employer with a shared interview. The processes above come from four YC job pages, not a representative sample. Ask each company for its stages, tools, AI rules and time commitment.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "In a one-day snapshot of YC's software engineering job list (25 November 2026), 3 of 32 postings accepted new graduates; 15 required 3+ years and 11 required 6+ years.",
        "Titles such as \"Founding Engineer\" often mean experienced hires. Check in-office expectations, location and visa sponsorship in the posting.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official (individual YC job pages): Corelayer — CEO call, 4-hour take-home, technical interview on it, two days with the team; Confido — recruiter call, 60-minute technical screen, long onsite; Lamar Health — an AI-usage work sample; MSPilot — a deployed side project with real users.",
        "Review date: 2027-05-25. Processes at small companies change quickly.",
      ],
    },
  ],
  sources: [
    { title: "YC — Software engineer jobs (official)", url: "https://www.ycombinator.com/jobs/role/software-engineer" },
    { title: "Corelayer — Founding Engineer posting (official)", url: "https://www.ycombinator.com/companies/corelayer/jobs/d98zA8p-founding-engineer" },
  ],
  checked: "2026-11-25",
};

export default company;
