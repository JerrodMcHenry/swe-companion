import type { Company } from "../types";

const company: Company = {
  slug: "openai",
  name: "OpenAI",
  group: "AI Companies",
  roles: ["software-engineer", "frontend-engineer", "data-engineer", "machine-learning-engineer", "ai-engineer", "forward-deployed-engineer", "solutions-engineer"],
  levels: "Of 158 Software Engineer postings reviewed (27 Nov 2026), one asked 0–1 years; every forward deployed posting reviewed asked 5+ years.",
  tagline: "Software, applied AI, forward deployed, ML, data and solutions roles",
  card: "Practical coding with tests; AI-tool rules vary by interview.",
  categories: ["practical", "coding", "dsa", "system-design", "ai", "behavioral"],
  roleCategories: {
    "solutions-engineer": ["customer-discovery", "solutions-demos", "customer-practical", "practical", "ai-system-design", "rag", "solutions-integration", "api-design", "auth", "solutions-objections", "customer-communication", "behavioral"],
    "ai-engineer": ["rag", "agents", "ai-evals", "ai-production", "ai-system-design", "ai-practical", "practical", "coding", "ai-security", "behavioral"],
    "forward-deployed-engineer": ["customer-discovery", "customer-integration", "customer-practical", "practical", "api-design", "auth", "ai-system-design", "rag", "customer-communication", "behavioral"],
  },
  notes: {
    coding: "No official OpenAI topic list was found (Nov 2026): practise representative problems by pattern, then focus on clean, tested code.",
    practical: "OpenAI looks for well-designed solutions, high-quality code, performance and test coverage.",
    "system-design": "Reported by third-party guides, mainly for experienced candidates; not stated in the official guide.",
    ai: "AI-tool rules vary by interview: some allow tools, others test you without them. Ask your recruiter.",
    behavioral: "Communication, collaboration and why OpenAI's mission matters to you.",
    "customer-discovery": "Customer-facing postings describe scoping problems with customers; that is a job duty, not a confirmed interview round.",
    "ai-system-design": "Design RAG systems and agents for customer or product use cases.",
  },
  officialResources: [
    { title: "Interview guide", url: "https://openai.com/interview-guide/", note: "Official: stages, what engineering interviews assess and the AI-tool policy." },
    { title: "Careers", url: "https://openai.com/careers/", note: "Official job listings; read each posting's experience requirements." },
  ],
  facts: [
    { label: "Process", value: "Intro call, skills assessment (pair coding, take-home or technical test), then 4–6 hours of final interviews", evidence: "Official" },
    { label: "Assessed", value: "Solution design, code quality, performance, test coverage, communication", evidence: "Official" },
    { label: "AI tools", value: "Vary by interview; check your prep materials or ask", evidence: "Official" },
    { label: "Experience", value: "Of software engineering postings reviewed (27 Nov 2026) that state a minimum, all but one ask 3+ years", evidence: "Official" },
  ],
  formats: [
    { name: "Skills assessment", detail: "May include pair coding, a take-home project or a technical test, depending on the team.", evidence: "Official" },
    { name: "Final interviews", detail: "Typically 4–6 hours with 4–6 people over one or two days, virtual by default.", evidence: "Official" },
    { name: "Practical coding and system design", detail: "Third-party guides report practical coding and system design rounds and, for some candidates, a pilot agentic coding round. One new-grad guide rests on a single loop.", evidence: "Third-party" },
    { name: "Forward deployed take-home", detail: "Third-party guides disagree on length (about five hours versus about a week to submit). Treat it as variable.", evidence: "Third-party" },
  ],
  caveat:
    "OpenAI's guide (undated; re-read 27 November 2026) does not specify languages or a system design round. Postings change often; the posting you apply to and your recruiter's description override this page.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Of 158 Software Engineer postings reviewed on 27 November 2026, one (Software Engineer, Applied Emerging Talent) asked 0–1 years; 66 asked 3+ years and 91 stated no number.",
        "All 33 individual-contributor forward deployed postings reviewed asked 5+ years or more. Customer-facing AI roles reviewed did not state fewer than 3 years.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: the interview guide (checked 27 November 2026) and postings on OpenAI's job board.",
        "Third-party: interviewing.io and aced.io guides, based on small samples of candidate reports.",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["Frontend Software Engineer postings state no minimum. Machine learning engineering postings ask 3+ years and prefer a Master's or PhD; data engineering postings ask 3+ years as a data engineer.", "Applied AI Architect postings (the solutions role) state no minimum; Ads Solutions Engineer postings ask 5+ years."] },
  ],
  sources: [
    { title: "OpenAI — Interview guide (official)", url: "https://openai.com/interview-guide/" },
    { title: "OpenAI — Careers (official)", url: "https://openai.com/careers/" },
    { title: "interviewing.io — OpenAI interview questions (third-party)", url: "https://interviewing.io/openai-interview-questions" },
    { title: "aced.io — OpenAI forward deployed engineer interview (third-party)", url: "https://www.aced.io/guides/openai-forward-deployed-engineer-interview" },
    { title: "aced.io — OpenAI software engineer new grad interview (third-party, one loop)", url: "https://www.aced.io/guides/openai-software-engineer-new-grad-interview" },
  ],
  checked: "2026-11-27",
};

export default company;
