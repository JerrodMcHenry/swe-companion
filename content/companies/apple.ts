import type { Company } from "../types";

const company: Company = {
  slug: "apple",
  name: "Apple",
  group: "Big Tech",
  logo: "/logos/apple.svg",
  mono: true,
  tagline: "Software Engineer (early career, team-specific)",
  card: "Each team sets its own process: language fundamentals, coding and your projects.",
  facts: [
    { label: "Process", value: "Set by each team; no official guide", evidence: "Official" },
    { label: "Language", value: "Prepare in your team's language", evidence: "Editorial" },
    { label: "Postings", value: "Few early-career roles; team-specific", evidence: "Official" },
  ],
  formats: [
    { name: "Recruiter call", detail: "A first conversation about your background and the team.", evidence: "Candidate-reported" },
    { name: "Language fundamentals", detail: "Questions on the team's language (one report: Java).", evidence: "Candidate-reported" },
    { name: "Coding", detail: "A coding interview; one report only.", evidence: "Candidate-reported" },
    { name: "Manager conversation", detail: "A long behavioral and project conversation with the hiring manager.", evidence: "Candidate-reported" },
  ],
  categories: ["python", "projects", "behavioral", "coding", "dsa", "oop"],
  notes: {
    python: "Language fundamentals in your team's language (Python shown).",
    projects: "Expect a long conversation about your work.",
    behavioral: "A long manager conversation was reported.",
  },
  officialResources: [
    { title: "Apple jobs — early career search", url: "https://jobs.apple.com/en-us/search?search=%22early%20career%22&location=united-states-USA&sort=newest", note: "Official job search; read each team's posting for its language and requirements." },
  ],
  caveat:
    "Apple publishes no software engineering interview guidance. The formats above come from one 2026 new-grad report; your recruiter's information takes priority.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "On 25 November 2026 Apple's US job search showed only two engineering postings titled \"Early Career\" (Frontend Engineer and Network Engineer).",
        "A reviewed posting required proficiency in one language area, computer science fundamentals and a bachelor's degree or equivalent experience.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: postings only.",
        "Candidate-reported: one 2026 new-grad report; some reports at other levels mention questions about AI-tool use.",
      ],
    },
  ],
  sources: [
    { title: "Apple — Frontend Engineer, Early Career (official posting)", url: "https://jobs.apple.com/en-us/details/200676168-0157/frontend-engineer-ee-p-is-t-early-career" },
    { title: "Apple — Job search for \"early career\" (official)", url: "https://jobs.apple.com/en-us/search?search=%22early%20career%22&location=united-states-USA&sort=newest" },
    { title: "Candidate report — 2026 Apple new grad SWE (FastPrep)", url: "https://www.fastprep.io/experience/2026-apple-new-grad-swe-hr-call-java-questions-coding-and-manager-round-1-experi-52ej2p4ouy" },
  ],
  checked: "2026-11-25",
};

export default company;
