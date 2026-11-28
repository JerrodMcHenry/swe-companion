import type { Company } from "../types";

const company: Company = {
  slug: "meta",
  name: "Meta",
  group: "Big Tech",
  roles: ["software-engineer", "backend-engineer", "frontend-engineer", "full-stack-engineer", "data-engineer", "machine-learning-engineer", "solutions-engineer"],
  tagline: "Software, front end, data, ML and solutions engineering",
  card: "Fast, accurate coding and communication; some rounds include an AI assistant.",
  facts: [
    { label: "AI", value: "Many interviews include a built-in CoderPad AI assistant you are expected to use; no outside AI tools", evidence: "Official" },
    { label: "Timeline", value: "Typically 2–3 months", evidence: "Official" },
    { label: "Coding", value: "Prepare with and without a compiler", evidence: "Editorial" },
    { label: "Postings", value: "No generalist software engineering university-grad posting found on 27 Nov 2026", evidence: "Official" },
  ],
  formats: [
    { name: "Coding screen and loop", detail: "Meta's 2022 guidance: a 45-minute screen that may include more than one problem, then coding interviews in the loop. One late-2025 new-grad report described several coding tasks and no design round.", evidence: "Official" },
    { name: "AI-assisted interviews", detail: "Meta's FAQ says select roles include an authorized AI assistant in CoderPad (models including Claude, ChatGPT, Gemini and Meta's), which candidates are expected to use; outside AI tools are not authorized (re-read 27 November 2026, page undated).", evidence: "Official" },
    { name: "Behavioral", detail: "A behavioral interview on how you work with others and learn from mistakes (2022 guidance).", evidence: "Official" },
  ],
  categories: ["coding", "dsa", "practical", "ai", "behavioral"],
  notes: {
    coding: "Solve quickly and accurately; prepare with and without a compiler.",
    practical: "Debugging and testing without running code.",
    ai: "Meta says many interviews include a built-in AI assistant you are expected to use; ask whether yours does.",
  },
  officialResources: [
    { title: "Hiring process and FAQ", url: "https://www.metacareers.com/hiring-process/", note: "Official: the stages and the statement about AI-assisted interviews." },
    { title: "Front end engineer interview prep", url: "https://www.metacareers.com/FEE-prep-initial", note: "Official: the 60-minute initial interview; the onsite page and downloadable guides give detail." },
    { title: "Machine learning interview prep", url: "https://www.metacareers.com/ML-prep-initial/", note: "Official: the 45-minute initial interview and the full loop of up to six conversations." },
    { title: "Preparing for your software engineering interview at Meta", url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/", note: "Official but from 2022: use it for behavioral advice; formats may have changed." },
  ],
  caveat:
    "Meta confirms AI-assisted interviews for select roles but does not say which; third-party reports date the AI-enabled coding round to October 2025 and none confirms it for new graduates. Ask your recruiter which formats you will have, and prepare both with and without the assistant.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "On 27 November 2026 Meta's job search for \"university grad\" showed 33 results, none a generalist software engineering role; openings are seasonal.",
        "Degree, graduation-date and experience requirements cannot be confirmed until a posting opens.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Meta's hiring-process page and FAQ (AI-assistant statements re-read 27 November 2026) and its 2022 preparation post.",
        "Candidate-reported: one late-2025 new-grad report. One report is not a rule.",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["Meta publishes official prep pages for front end engineer, machine learning and data engineering interviews.", "Front end: no posting titled Front End Engineer appeared in Meta's job search; minimums unverified. Machine learning: three sampled postings asked a Master's plus 1–3 years, or 12+ years; a PhD intern posting exists.", "Data Engineer, Product Analytics asks 4+ years; an intern posting was seen in search results. Solutions Architect (2+ years) and Partner Engineer (5+ years) postings exist."] },
  ],
  sources: [
    { title: "Meta — Hiring process and FAQ (official)", url: "https://www.metacareers.com/hiring-process/" },
    { title: "Meta — Preparing for your software engineering interview (official, 2022)", url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/" },
    { title: "Meta — Job search, University Grad (official)", url: "https://www.metacareers.com/jobsearch/?q=software%20engineer%20university%20grad" },
    { title: "Meta — Data Engineer, Product Analytics posting (official)", url: "https://www.metacareers.com/jobs/1283364266159062/" },
    { title: "interviewing.io — Meta's AI-assisted coding interview (third-party)", url: "https://interviewing.io/blog/how-to-use-ai-in-meta-s-ai-assisted-coding-interview-with-real-prompts-and-examples" },
    { title: "Candidate report — Meta software engineer onsite (FastPrep)", url: "https://www.fastprep.io/experience/meta-software-engineer-onsite-questions-3-experiences-43fayxndgv" },
  ],
  checked: "2026-11-27",
};

export default company;
