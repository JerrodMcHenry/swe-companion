import type { Company } from "../types";

const company: Company = {
  slug: "meta",
  name: "Meta",
  kind: "Company",
  logo: "/logos/meta.svg",
  tagline: "Software Engineer (University Grad)",
  card: "Fast, accurate coding and communication; some rounds include an AI assistant.",
  facts: [
    { label: "AI", value: "Many interviews include a built-in AI assistant you are expected to use", evidence: "Official" },
    { label: "Timeline", value: "Typically 2–3 months", evidence: "Official" },
    { label: "Coding", value: "Prepare with and without a compiler", evidence: "Editorial" },
    { label: "Postings", value: "No generalist university-grad posting open on 25 Nov 2026", evidence: "Official" },
  ],
  formats: [
    { name: "Coding screen and loop", detail: "Meta's 2022 guidance: a 45-minute screen that may include more than one problem, then coding interviews in the loop. One late-2025 new-grad report described several coding tasks and no design round.", evidence: "Official" },
    { name: "AI-assisted interviews", detail: "Many interviews include an AI assistant in the interview environment; they assess problem solving, coding, debugging and collaboration (confirmed 26 November 2026).", evidence: "Official" },
    { name: "Behavioral", detail: "A behavioral interview on how you work with others and learn from mistakes (2022 guidance).", evidence: "Official" },
  ],
  categories: ["coding", "dsa", "practical", "ai", "behavioral"],
  notes: {
    coding: "Solve quickly and accurately; prepare with and without a compiler.",
    practical: "Debugging and testing without running code.",
    ai: "Many interviews include a built-in AI assistant you are expected to use.",
  },
  officialResources: [
    { title: "Hiring process and FAQ", url: "https://www.metacareers.com/hiring-process/", note: "Official: the stages and the statement about AI-assisted interviews." },
    { title: "Preparing for your software engineering interview at Meta", url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/", note: "Official but from 2022: use it for behavioral advice; formats may have changed." },
  ],
  caveat:
    "Third-party and candidate reports describe an AI-enabled coding round piloted from October 2025; sources disagree on how widely it is used and none confirms it for new graduates. Ask your recruiter which formats you will have, and prepare both ways until then.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "On 25 November 2026 Meta's job search showed no generalist software engineering University Grad posting; openings are seasonal.",
        "Degree, graduation-date and experience requirements cannot be confirmed until a posting opens.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Meta's hiring-process page and FAQ (AI-assistant statement confirmed 26 November 2026) and its 2022 preparation post.",
        "Candidate-reported: one late-2025 new-grad report. One report is not a rule.",
      ],
    },
  ],
  sources: [
    { title: "Meta — Hiring process and FAQ (official)", url: "https://www.metacareers.com/hiring-process/" },
    { title: "Meta — Preparing for your software engineering interview (official, 2022)", url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/" },
    { title: "Meta — Job search, University Grad (official)", url: "https://www.metacareers.com/jobsearch/?q=software%20engineer%20university%20grad" },
    { title: "interviewing.io — Meta's AI-assisted coding interview (third-party)", url: "https://interviewing.io/blog/how-to-use-ai-in-meta-s-ai-assisted-coding-interview-with-real-prompts-and-examples" },
    { title: "Candidate report — Meta software engineer onsite (FastPrep)", url: "https://www.fastprep.io/experience/meta-software-engineer-onsite-questions-3-experiences-43fayxndgv" },
  ],
  checked: "2026-11-26",
};

export default company;
