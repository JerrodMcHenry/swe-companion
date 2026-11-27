import type { Company } from "../types";

const company: Company = {
  slug: "netflix",
  name: "Netflix",
  kind: "Company",
  logo: "/logos/netflix.svg",
  tagline: "Eligibility first: few or no entry-level software roles",
  card: "No published new-grad process; check eligibility before preparing.",
  facts: [
    { label: "Postings", value: "No full-time new-grad SWE posting open on 25 Nov 2026", evidence: "Official" },
    { label: "Route", value: "Internships for current students", evidence: "Official" },
    { label: "Process", value: "Not published for entry-level roles", evidence: "Official" },
  ],
  formats: [
    { name: "Unknown for new graduates", detail: "No reliable description of a new-graduate process exists; anonymous reports, mostly from experienced hires, mention coding, some system design and resume discussion.", evidence: "Candidate-reported" },
  ],
  categories: ["job-description", "coding", "dsa", "behavioral"],
  notes: {
    "job-description": "Check eligibility first: few or no entry-level roles.",
    coding: "No employer-specific selection; use the general set.",
  },
  officialResources: [
    { title: "Netflix careers search", url: "https://explore.jobs.netflix.net/careers", note: "Official job search; check each posting's actual requirements, not its title." },
    { title: "Netflix culture", url: "https://jobs.netflix.com/culture", note: "Official: the values behind behavioral conversations." },
  ],
  caveat:
    "There is no reliable new-graduate interview process to prepare for here. If you meet a posting's real requirements, use the Other employer page with that posting.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "On 25 November 2026 Netflix's careers site returned 139 results for \"software engineer\"; most level-labelled roles were level 5 or 6, level 4 asked for 3+ years, and the single level 3 role asked for 3–5 years.",
        "A Software Engineer Intern (Summer 2027) posting was open for current students graduating between December 2027 and Summer 2028.",
        "A third-party guide reports new-grad roles, when offered, usually post around September–October; Netflix has not confirmed this.",
      ],
    },
  ],
  sources: [
    { title: "Netflix — Careers job search (official)", url: "https://explore.jobs.netflix.net/careers" },
    { title: "Netflix — Software Engineer Intern, Summer 2027 (official posting)", url: "https://explore.jobs.netflix.net/careers/job/790318904468" },
    { title: "Netflix — Culture (official)", url: "https://jobs.netflix.com/culture" },
    { title: "Simplify — Netflix new grad guide (third-party)", url: "https://simplify.jobs/blog/netflix-new-grad-software-engineer-guide" },
  ],
  checked: "2026-11-25",
};

export default company;
