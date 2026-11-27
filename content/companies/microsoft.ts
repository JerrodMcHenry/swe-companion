import type { Company } from "../types";

const company: Company = {
  slug: "microsoft",
  name: "Microsoft",
  kind: "Company",
  logo: "/logos/microsoft.svg",
  tagline: "Software Engineer (entry level)",
  card: "Runnable code, explicit testing and data structures; STAR with reflection.",
  facts: [
    { label: "Coding", value: "Runnable editor, no pseudocode; test your solution", evidence: "Official" },
    { label: "AI", value: "No outside assistance unless permitted", evidence: "Official" },
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
    "The number and type of rounds for entry-level roles are not published, and candidate evidence for new-grad loops is weak. Confirm with your recruiter.",
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
        "Official: Microsoft's How we hire, Technical interviewing and Interview tips pages (checked 25 November 2026); they apply to all levels.",
        "Candidate-reported: anonymous 2026 summaries only (graphs, sliding window, caching, teamwork and some design questions).",
      ],
    },
  ],
  sources: [
    { title: "Microsoft — Technical interviewing (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing" },
    { title: "Microsoft — Interview tips (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/interview-tips.html" },
    { title: "Microsoft — How we hire (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips.html" },
    { title: "Aced (formerly Exponent) — Microsoft entry-level interview experiences (third-party)", url: "https://www.aced.io/guides/microsoft-entry-level-software-engineer-interview/experiences" },
  ],
  checked: "2026-11-25",
};

export default company;
