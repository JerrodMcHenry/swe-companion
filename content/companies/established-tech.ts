import type { Company } from "../types";

const company: Company = {
  slug: "established-tech",
  name: "Established tech companies",
  kind: "Employer type",
  icon: "building",
  tagline: "Mature technology companies outside the Big Tech pages",
  card: "Coding and behavioral interviews; design or knowledge questions at some.",
  facts: [
    { label: "Formats", value: "Coding and behavioral interviews; varies by company", evidence: "Editorial" },
    { label: "AI", value: "Some allow AI only in designated sections (Pinterest)", evidence: "Official" },
    { label: "Titles", value: "Read requirements, not titles", evidence: "Official" },
  ],
  formats: [
    { name: "Online assessment or phone screen", detail: "Sometimes run by a third-party interviewing service.", evidence: "Varies" },
    { name: "Coding interviews", detail: "Algorithmic coding with complexity; possibly object-oriented or knowledge questions.", evidence: "Varies" },
    { name: "Behavioral or hiring manager", detail: "Collaboration, ownership and resume discussion.", evidence: "Varies" },
    { name: "AI-designated section", detail: "Pinterest: AI may be invited in designated parts; assume it is not permitted otherwise.", evidence: "Official" },
  ],
  categories: ["coding", "dsa", "practical", "behavioral", "oop", "sql"],
  notes: {
    sql: "Knowledge questions follow the posting.",
  },
  officialResources: [
    { title: "Pinterest — Our philosophy on AI in hiring", url: "https://www.pinterestcareers.com/candidate-hub/our-philosophy-on-ai-in-hiring/", note: "Official example of designated AI sections." },
  ],
  caveat:
    "New-grad interview content for most companies in this segment was not verified. Treat these as defaults and use the company's own guidance when it publishes one.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Several established companies run formal new-grad roles (for example Pinterest, DoorDash, Roblox and Palantir), often with a degree requirement.",
        "Titles are not always entry level: one \"Software Engineer I\" posting expected experience launching backend systems.",
        "Postings set job requirements, not interview content: DoorDash's new-grad posting requires SQL, version control and unit tests.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Pinterest's AI-in-hiring page. Candidate-reported: anonymous summaries for one large retailer's technology organization. Weak evidence overall.",
        "Review date: 2027-05-25 (AI policies: 2027-02-25).",
      ],
    },
  ],
  sources: [
    { title: "Pinterest — Our philosophy on AI in hiring (official)", url: "https://www.pinterestcareers.com/candidate-hub/our-philosophy-on-ai-in-hiring/" },
    { title: "GitLab — Technical interviews handbook (official; above entry level)", url: "https://handbook.gitlab.com/handbook/hiring/interviewing/technical/" },
  ],
  checked: "2026-11-25",
};

export default company;
