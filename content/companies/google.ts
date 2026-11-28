import type { Company } from "../types";

const company: Company = {
  slug: "google",
  name: "Google",
  group: "Big Tech",
  roles: ["software-engineer", "backend-engineer", "full-stack-engineer", "data-engineer", "machine-learning-engineer", "solutions-engineer"],
  tagline: "Software engineering, plus data, ML and customer engineering roles",
  card: "Coding rounds on data structures and algorithms; no AI in interviews.",
  facts: [
    { label: "AI and Search", value: "Not permitted in interviews", evidence: "Official" },
    { label: "Applications", value: "Up to 3 jobs per rolling 30 days", evidence: "Official" },
    { label: "Timeline", value: "About 6–8 weeks once interviews start", evidence: "Official" },
    { label: "Coding rounds", value: "3–4 of about 45 min, plus behavioral", evidence: "Candidate-reported" },
  ],
  formats: [
    { name: "Coding interviews", detail: "Data structures and algorithms in one language, explained aloud and tested by hand; reported around LeetCode Medium, often customized. One report coded in a shared document without a compiler.", evidence: "Candidate-reported" },
    { name: "Technical screen", detail: "One coding interview of about 45 minutes before the panel.", evidence: "Candidate-reported" },
    { name: "Behavioral", detail: "Google's tips ask for specific examples with impact (situation, task, activity, result). Candidates separately report a dedicated behavioral round.", evidence: "Official" },
    { name: "Assessments", detail: "You may take the Google Hiring Assessment (workstyle) and sometimes a role-related coding exercise.", evidence: "Official" },
  ],
  categories: ["coding", "dsa", "python", "practical", "behavioral"],
  notes: {
    coding: "Early-career SWE reports: graphs, trees, recursion, heaps, binary search and intervals.",
    dsa: "Clarify, brute force, optimize, test; state the complexity.",
    python: "Fluent code in one language without an IDE or AI.",
    practical: "Dry-run and test your own code by hand.",
    behavioral: "Specific stories with measurable impact.",
  },
  officialResources: [
    { title: "Interviewing at Google: tips", url: "https://www.google.com/about/careers/applications/interview-tips", note: "Official: what interviewers look for, behavioral advice and preparation tips." },
    { title: "How we hire", url: "https://www.google.com/about/careers/applications/how-we-hire/", note: "Official: the stages of Google's process and its AI policy." },
    { title: "How to solve a Google coding interview question", url: "https://www.youtube.com/watch?v=Ti5vfu9arXQ", note: "Official mock interview video showing the expected communication." },
  ],
  caveat:
    "System design is not established at this level: none of the reviewed early-career reports included it, and one included an object-oriented design round. Rounds vary by team and location; your recruiter's description overrides this page.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "US early-career posting (checked 25 November 2026): a bachelor's degree or equivalent practical experience; one year of software development experience in one or more languages; experience in at least one listed area; and experience using AI productivity tools.",
        "Requirements vary by posting and country. A personal project is not industry experience; describe it honestly.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Google's hiring and interview-tips pages and the US early-career posting (checked 25 November 2026). Both pages say AI tools are not permitted in interviews (re-read 27 November 2026; the pages are undated).",
        "Candidate-reported: five 2025–2026 early-career reports, three clearly independent. They show what appeared, not how often.",
        "Third-party: the L3 label (Google does not publish its levels).",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["Machine learning software engineering postings ask about 2 years and list data structures and algorithms; data engineering postings ask 3–5+ years in the US.", "Customer Engineer and Solutions Consultant postings ask 4+ years, even at Customer Engineer I. No Google interview guidance specific to these roles was found; prepare from the posting."] },
  ],
  sources: [
    { title: "Google — How we hire (official)", url: "https://www.google.com/about/careers/applications/how-we-hire/" },
    { title: "Google — Interview tips (official)", url: "https://www.google.com/about/careers/applications/interview-tips" },
    { title: "Google — Early careers (official)", url: "https://www.google.com/about/careers/applications/early-career/" },
    { title: "Google — Software Engineer II, Early Career, US posting (official)", url: "https://www.google.com/about/careers/applications/jobs/results/109116638069957318" },
    { title: "Candidate report — Google SDE L3 (Roundz)", url: "https://roundz.substack.com/p/interview-experience-100-google-sde-l3" },
    { title: "Candidate report — Google SWE II L3 (Roundz)", url: "https://roundz.substack.com/p/interview-experience-57-google-software-engineer-swe2-l3" },
    { title: "Candidate report — Google software engineer (Aced)", url: "https://www.aced.io/experiences/google-software-engineer-interview-54740a" },
    { title: "Levels.fyi — Google software engineer levels (third-party)", url: "https://www.levels.fyi/companies/google/salaries/software-engineer" },
  ],
  checked: "2026-11-27",
};

export default company;
