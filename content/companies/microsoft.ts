import type { Company } from "../types";

const company: Company = {
  slug: "microsoft",
  name: "Microsoft",
  group: "Big Tech",
  roles: ["software-engineer", "backend-engineer", "frontend-engineer", "full-stack-engineer", "data-engineer", "machine-learning-engineer", "solutions-engineer"],
  tagline: "Software engineering, plus frontend, data, ML and cloud solution architect roles",
  card: "Runnable code, explicit testing and data structures; STAR with reflection.",
  facts: [
    { label: "Coding", value: "Runnable editor, no pseudocode; test your solution", evidence: "Official" },
    { label: "AI", value: "Show your own skills without outside assistance unless explicitly permitted", evidence: "Official" },
    { label: "Interviews", value: "2–4 conversations of up to an hour", evidence: "Official" },
  ],
  formats: [
    { name: "Technical interviews", detail: "About 45 minutes, in the language you are strongest in, in a tool where you can run and compile code; expect to test your solution.", evidence: "Official" },
    { name: "Behavioral", detail: "Teamwork and learning questions; Microsoft's tips recommend STAR with a reflection on what you learned.", evidence: "Official" },
    { name: "Design questions", detail: "Some anonymous reports mention design questions; Microsoft's system design guidance is not specific to entry level.", evidence: "Candidate-reported" },
  ],
  categories: ["coding", "practical", "dsa", "behavioral", "lld"],
  notes: {
    coding: "Runnable code, no pseudocode.",
    practical: "Write and run tests for your solution.",
    behavioral: "End each story with what you learned.",
  },
  officialResources: [
    { title: "Technical interviewing", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing", note: "Official: the coding environment, language choice and testing expectations." },
    { title: "Interview tips", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/interview-tips.html", note: "Official: behavioral preparation." },
  ],
  caveat:
    "Microsoft's guidance covers all levels; no entry-level round list was found in our review (November 2026), and candidate evidence for new-grad loops is weak. Confirm with your recruiter.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "No US entry-level software engineering posting was found in November 2026; openings are seasonal. A general posting then required 2+ years of experience, which is above entry level.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Microsoft's How we hire, Technical interviewing and Interview tips pages (checked 25 November 2026; the AI statement on How we hire re-read 27 November 2026, page undated). They apply to all levels and also encourage responsible AI use in preparation.",
        "Candidate-reported: anonymous 2026 summaries only (graphs, sliding window, caching, teamwork and some design questions).",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["A Software Engineer 2 – Frontend posting exists outside the US.", "Machine learning and data engineering results were mostly Senior or Principal (4+ years); Cloud Solution Architect postings ask 4+ years."] },
  ],
  sources: [
    { title: "Microsoft — Technical interviewing (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing" },
    { title: "Microsoft — Interview tips (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/interview-tips.html" },
    { title: "Microsoft — How we hire (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips.html" },
    { title: "Aced (formerly Exponent) — Microsoft entry-level interview experiences (third-party)", url: "https://www.aced.io/guides/microsoft-entry-level-software-engineer-interview/experiences" },
  ],
  checked: "2026-11-27",
};

export default company;
