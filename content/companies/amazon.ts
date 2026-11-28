import type { Company } from "../types";

const company: Company = {
  slug: "amazon",
  name: "Amazon",
  group: "Big Tech",
  roles: ["software-engineer", "backend-engineer", "frontend-engineer", "full-stack-engineer", "data-engineer", "machine-learning-engineer", "solutions-engineer"],
  tagline: "Software development, frontend, data, ML and solutions architect roles",
  card: "Online assessment, coding, object-oriented design and Leadership Principles.",
  facts: [
    { label: "First step", value: "Online assessment: coding, Workstyles, Work Simulation", evidence: "Official" },
    { label: "Interviews", value: "Several of 45–60 min, including a Bar Raiser", evidence: "Official" },
    { label: "Behavioral", value: "Leadership Principles in most rounds", evidence: "Candidate-reported" },
    { label: "AI", value: "SDE technical assessments include an interactive AI assistant (Amazon, Jan 2026); no live-interview policy found", evidence: "Official" },
  ],
  formats: [
    { name: "Online assessment", detail: "A coding assessment (about 70 minutes), a Workstyles assessment based on the Leadership Principles and a Work Simulation of day-to-day scenarios. Public documentation is allowed in the coding part; sites that need a login are not.", evidence: "Official" },
    { name: "Coding interviews", detail: "Data structures and algorithms in most rounds of the loop.", evidence: "Candidate-reported" },
    { name: "Object-oriented or API design", detail: "Some loops include a low-level or API design round.", evidence: "Candidate-reported" },
    { name: "Leadership Principles", detail: "Behavioral questions mapped to the principles, throughout the loop; recent reports also ask how you check AI-generated code.", evidence: "Candidate-reported" },
  ],
  categories: ["coding", "behavioral", "lld", "oop", "dsa", "ai"],
  roleCategories: {
    "frontend-engineer": ["frontend-practical", "javascript", "frontend-system-design", "behavioral", "react", "typescript", "html-css", "frontend-performance", "coding"],
    "solutions-engineer": ["solutions-demos", "customer-practical", "behavioral", "customer-discovery", "solutions-integration", "system-design", "networking", "dsa", "auth", "api-design", "solutions-objections"],
    "data-engineer": ["sql", "analytical-sql", "python", "coding", "data-modeling", "data-system-design", "behavioral", "data-pipelines", "data-processing", "data-quality"],
  },
  notes: {
    "frontend-practical": "Amazon's front-end prep: the phone screen is half front-end coding, half Leadership Principles; write real code, not pseudocode.",
    "frontend-system-design": "Amazon's front-end prep says to expect at least one front-end systems design question in the loop.",
    "solutions-demos": "AWS's early-career solutions architect guidance (2021) says to expect to present technical content and to practise for a non-technical audience.",
    "analytical-sql": "Amazon's data-roles guide lists joins, grouping, window functions, aggregations and query optimization.",
    "data-modeling": "The data-roles guide also lists schema design and logical data models.",
    "data-system-design": "Expect scalability questions, and understand how any technology you suggest works.",
    coding: "SDE online assessment and most SDE interview rounds.",
    behavioral: "Leadership Principles come up in most rounds.",
    lld: "Some loops include an object-oriented or API design round.",
    ai: "Amazon says (Jan 2026) its SDE technical assessments now include an AI assistant; be ready to explain how you verify its code.",
  },
  officialResources: [
    { title: "Online assessment prep for SDE roles", url: "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa", note: "Official: what each part of the assessment covers and what tools are allowed." },
    { title: "Software development interview topics", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics", note: "Official list of the technical topics Amazon interviews cover." },
    { title: "Front-end engineer interview prep", url: "https://www.amazon.jobs/content/en/how-we-hire/fee-interview-prep", note: "Official: the front-end assessment, phone screen and loop, including front-end systems design." },
    { title: "Data roles interview prep (university)", url: "https://amazon.jobs/content/en/how-we-hire/university/data", note: "Official: the SQL, Python and data modeling topics for data engineering roles." },
    { title: "AWS early-career solutions architect interview advice", url: "https://aws.amazon.com/blogs/training-and-certification/landing-your-early-cloud-career-role-blog-2-solidifying-your-technical-toolkit-for-your-interview/", note: "Official AWS blog series (2021): technical fundamentals, Leadership Principles and presenting." },
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
        "Online assessment prep page (official, undated): publicly accessible documentation is allowed during coding; sites that require a login are not. It does not mention an AI assistant.",
        "Amazon's 22 January 2026 news post says it reimagined SDE technical assessments so candidates work with an interactive AI assistant; ask your recruiter which version you will take.",
        "Live interviews: no official Amazon statement on candidate AI use was found in our review (27 November 2026). Secondary reporting (2025) says candidates are told not to use generative AI unless permitted.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Amazon's assessment, interview topics, interview loop and Leadership Principles pages, and postings (checked 25 November 2026).",
        "Candidate-reported: two recent new-grad reports. Treat their formats as possible, not guaranteed.",
      ],
    },
    { heading: "Other roles (postings reviewed 27 November 2026)", items: ["Front-end engineer postings include 2027 new-grad and intern roles; experienced roles ask 3+ years.", "Data Engineer I asks 1+ year. Machine learning engineer postings ask 3+ years; the 2027 SDE intern (machine learning) role is an entry route.", "AWS runs early-career, graduate and intern Associate Solutions Architect programs; standard solutions architect postings often ask 4+ years."] },
  ],
  sources: [
    { title: "Amazon — Online assessment prep for SDE roles (official)", url: "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa" },
    { title: "Amazon — Front-end engineer interview prep (official)", url: "https://www.amazon.jobs/content/en/how-we-hire/fee-interview-prep" },
    { title: "Amazon — Data roles interview prep, university (official)", url: "https://amazon.jobs/content/en/how-we-hire/university/data" },
    { title: "Amazon — Software development interview topics (official)", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "Amazon — Interview loop (official)", url: "https://www.amazon.jobs/content/en/how-we-hire/interview-loop" },
    { title: "Amazon — Leadership Principles (official)", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
    { title: "About Amazon — How Amazon uses AI in hiring (official, 22 Jan 2026)", url: "https://www.aboutamazon.com/news/workplace/artificial-intelligence-resume-jobs-hiring-amazon" },
    { title: "ITPro — Amazon bans AI tools during job interviews (third-party, 2025)", url: "https://www.itpro.com/business/careers-and-training/amazon-bans-ai-tools-during-job-interviews" },
    { title: "Candidate report — 2026 Amazon new grad SDE I OA and onsite (FastPrep)", url: "https://www.fastprep.io/experience/2026-amazon-new-grad-sde-i-oa-and-virtual-onsite-1-experience-4up84xayt9" },
  ],
  checked: "2026-11-27",
};

export default company;
