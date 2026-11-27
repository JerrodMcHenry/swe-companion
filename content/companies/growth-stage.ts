import type { Company } from "../types";

const company: Company = {
  slug: "growth-stage",
  name: "Growth-stage companies",
  group: "Types of Employer",
  icon: "growth",
  tagline: "Scaling product companies: algorithmic screens plus realistic rounds",
  card: "Coding screens plus integration, debugging and sometimes AI-assisted rounds.",
  facts: [
    { label: "Formats", value: "Coding screen plus integration and debugging rounds", evidence: "Candidate-reported" },
    { label: "Eligibility", value: "Few new-grad openings at any time", evidence: "Official" },
    { label: "AI", value: "Some run AI rounds; confirm with your recruiter", evidence: "Candidate-reported" },
  ],
  formats: [
    { name: "Coding screen", detail: "An algorithmic or multi-part problem with growing requirements.", evidence: "Candidate-reported" },
    { name: "Integration round", detail: "Call an API, transform its JSON data and handle errors, usually in your own environment.", evidence: "Candidate-reported" },
    { name: "Debugging round", detail: "Fix bugs in an existing codebase or library (for example a React/TypeScript app or a historical open-source bug).", evidence: "Candidate-reported" },
    { name: "AI-assisted coding", detail: "Reported at some companies; rules differ per company.", evidence: "Candidate-reported" },
  ],
  categories: ["coding", "practical", "apis", "projects", "behavioral"],
  roleCategories: {"backend-engineer":  ["coding", "apis", "sql", "practical", "behavioral"], "full-stack-engineer":  ["coding", "react", "typescript", "apis", "practical", "behavioral"]},
  notes: {
    coding: "Multi-part problems with growing requirements.",
    practical: "Debugging rounds in existing codebases.",
    apis: "Integration rounds: call an API, transform data, handle errors.",
    react: "Debugging rounds have used React/TypeScript codebases.",
  },
  officialResources: [
    { title: "Stripe — Bug Squash interview", url: "https://stripe.com/guides/atlas/scaling-eng", note: "Official but dated: Stripe's description of fixing a real historical bug as an interview." },
  ],
  caveat:
    "Evidence comes mostly from one aggregator and a few companies (Stripe, Notion, Scale AI). Some growth-stage companies keep Big Tech-style coding loops; ask your recruiter which rounds you will have.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "In a one-day snapshot (25 November 2026), most growth-stage companies checked had no entry-level software postings; a minority (for example Notion, Stripe, Scale AI) had a few.",
        "Roles that hire new grads commonly ask for internships and strong shipping signals.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Candidate-reported (2026): Stripe — a multi-part phone screen, then integration, debugging and AI coding rounds; Notion — debugging in a React/TypeScript codebase; Scale AI — coding, a three-part debugging round and a backend practical.",
        "Review date: 2027-05-25 (AI round policies: 2027-02-25).",
      ],
    },
  ],
  sources: [
    { title: "Stripe new-grad phone screen and onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0" },
    { title: "Stripe — Scaling engineering organizations (official, dated)", url: "https://stripe.com/guides/atlas/scaling-eng" },
    { title: "Notion new-grad onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip" },
    { title: "Scale AI new-grad onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/scale-ai-new-grad-swe-virtual-onsite-cwmvy27rd8" },
  ],
  checked: "2026-11-25",
};

export default company;
