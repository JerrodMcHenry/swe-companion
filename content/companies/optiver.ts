import type { Company } from "../types";

const company: Company = {
  slug: "optiver",
  name: "Optiver",
  group: "Quantitative Trading",
  roles: ["software-engineer", "quant-developer"],
  levels: "Graduate, intern and experienced software roles are posted; one online-assessment attempt per 8 months (Europe FAQ).",
  tagline: "Software engineering and quantitative development",
  card: "Technical discussions on data structures, memory and design rather than LeetCode puzzles.",
  categories: ["dsa", "cpp", "performance", "coding", "lld", "behavioral"],
  roleCategories: {
    "quant-developer": ["cpp", "performance", "dsa", "coding", "cpp-memory", "concurrency", "cpp-practical", "lld", "behavioral"],
  },
  notes: {
    dsa: "Know the complexity of the data structures you use and why you chose them.",
    cpp: "Optiver names C++, Java or Python; know how your language represents data in memory.",
    performance: "How data is represented in memory and its performance trade-offs come up in technical discussions.",
    coding: "Interviews are technical discussions rather than standard LeetCode puzzles; practise explaining trade-offs.",
    lld: "Expect design trade-off discussions.",
    behavioral: "A behavioral interview uses the STAR format.",
  },
  officialResources: [
    { title: "Interview tips for software engineers", url: "https://www.optiver.com/join-us/stories/optiver-interview-tips-for-software-engineers/", note: "Official (21 Mar 2025): languages, data structures, memory, design and behavioral rounds." },
    { title: "Europe recruitment FAQ", url: "https://www.optiver.com/join-us/stories/optiver-europe-recruitment-faq/", note: "Official: assessments can be taken once every 8 months." },
  ],
  facts: [
    { label: "Format", value: "Technical discussions instead of standard LeetCode puzzles or brainteasers", evidence: "Official" },
    { label: "Languages", value: "C++, Java or Python", evidence: "Official" },
    { label: "Assessment", value: "One attempt per 8 months, no retakes (Europe FAQ)", evidence: "Official" },
  ],
  formats: [
    { name: "Technical interviews", detail: "Discussion of data-structure complexity, how data is represented in memory and design trade-offs.", evidence: "Official" },
    { name: "Behavioral interview", detail: "Structured with the STAR method.", evidence: "Official" },
    { name: "Online assessment", detail: "Can be completed once every 8 months (Europe FAQ); postings describe an 8-month reapply rule for intern and graduate roles.", evidence: "Official" },
  ],
  caveat: "Formats can differ by office and role. Candidate reports of the online assessment's contents could not be verified and are not used here.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Postings reviewed on 27 November 2026 include Software Engineer and C++ Software Engineer roles at graduate, intern and experienced levels, and a Quantitative Developer – Pricing Data role.",
      ],
    },
    { heading: "Evidence", items: ["Official: the interview tips page (21 March 2025), the Europe recruitment FAQ and postings (checked 27 November 2026)."] },
  ],
  sources: [
    { title: "Optiver — Interview tips for software engineers (official)", url: "https://www.optiver.com/join-us/stories/optiver-interview-tips-for-software-engineers/" },
    { title: "Optiver — Europe recruitment FAQ (official)", url: "https://www.optiver.com/join-us/stories/optiver-europe-recruitment-faq/" },
  ],
  checked: "2026-11-27",
};

export default company;
