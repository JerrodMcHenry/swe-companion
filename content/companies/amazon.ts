import type { Company } from "../types";

const company: Company = {
  slug: "amazon",
  name: "Amazon",
  group: "Big Tech",
  logo: "/logos/amazon.svg",
  mono: true,
  tagline: "Software Development Engineer (early career)",
  card: "Online assessment, coding, object-oriented design and Leadership Principles.",
  facts: [
    { label: "First step", value: "Online assessment: coding, Workstyles, Work Simulation", evidence: "Official" },
    { label: "Interviews", value: "Several of 45–60 min, including a Bar Raiser", evidence: "Official" },
    { label: "Behavioral", value: "Leadership Principles in most rounds", evidence: "Candidate-reported" },
    { label: "AI", value: "Not stated officially for live interviews; practise without it", evidence: "Third-party" },
  ],
  formats: [
    { name: "Online assessment", detail: "A coding assessment (about 70 minutes), a Workstyles assessment based on the Leadership Principles and a Work Simulation of day-to-day scenarios. Public documentation is allowed in the coding part; sites that need a login are not.", evidence: "Official" },
    { name: "Coding interviews", detail: "Data structures and algorithms in most rounds of the loop.", evidence: "Candidate-reported" },
    { name: "Object-oriented or API design", detail: "Some loops include a low-level or API design round.", evidence: "Candidate-reported" },
    { name: "Leadership Principles", detail: "Behavioral questions mapped to the principles, throughout the loop; recent reports also ask how you check AI-generated code.", evidence: "Candidate-reported" },
  ],
  categories: ["coding", "behavioral", "lld", "oop", "dsa", "ai"],
  notes: {
    coding: "Online assessment and most interview rounds.",
    behavioral: "Leadership Principles come up in most rounds.",
    lld: "Some loops include an object-oriented or API design round.",
    ai: "Be ready to explain how you verify AI-generated code.",
  },
  officialResources: [
    { title: "Online assessment prep for SDE roles", url: "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa", note: "Official: what each part of the assessment covers and what tools are allowed." },
    { title: "Software development interview topics", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics", note: "Official list of the technical topics Amazon interviews cover." },
    { title: "Leadership Principles", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles", note: "Official: read them before mapping your stories." },
    { title: "Your complete guide to the Amazon interview process", url: "https://www.aboutamazon.com/news/workplace/amazon-interview-guide", note: "Official: the STAR method and using \"I\" in answers." },
  ],
  caveat:
    "Whether your loop includes a design round, and the exact number of interviews, depend on the team. System design is listed for SDE II, not entry level. Confirm with your recruiter.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "In a review of 10 US early-career SDE postings (25 November 2026), 9 required a current or completed degree in computer science or a related field; one accepted equivalent experience.",
        "Postings asked for one general-purpose language and knowledge of data structures, algorithms or object-oriented design; half listed experience with AI-assisted development tools.",
      ],
    },
    {
      heading: "AI and tools",
      items: [
        "Online assessment (official): publicly accessible documentation is allowed during coding; sites that require a login are not.",
        "Live interviews: no public Amazon page on AI use was found. Secondary reporting (2025) says candidates are told not to use generative AI unless permitted.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Amazon's assessment, interview topics, interview loop and Leadership Principles pages, and postings (checked 25 November 2026).",
        "Candidate-reported: two recent new-grad reports. Treat their formats as possible, not guaranteed.",
      ],
    },
  ],
  sources: [
    { title: "Amazon — Online assessment prep for SDE roles (official)", url: "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa" },
    { title: "Amazon — Software development interview topics (official)", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "Amazon — Interview loop (official)", url: "https://www.amazon.jobs/content/en/how-we-hire/interview-loop" },
    { title: "Amazon — Leadership Principles (official)", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
    { title: "ITPro — Amazon bans AI tools during job interviews (third-party, 2025)", url: "https://www.itpro.com/business/careers-and-training/amazon-bans-ai-tools-during-job-interviews" },
    { title: "Candidate report — 2026 Amazon new grad SDE I OA and onsite (FastPrep)", url: "https://www.fastprep.io/experience/2026-amazon-new-grad-sde-i-oa-and-virtual-onsite-1-experience-4up84xayt9" },
  ],
  checked: "2026-11-25",
};

export default company;
