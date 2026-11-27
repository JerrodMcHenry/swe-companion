import type { Company } from "../types";

const company: Company = {
  slug: "enterprise",
  name: "Enterprise & graduate programs",
  kind: "Employer type",
  icon: "bank",
  tagline: "Graduate programs and entry roles at large non-tech-first employers",
  card: "Online assessments, behavioral and video interviews; case exercises at some.",
  facts: [
    { label: "Formats", value: "Online assessment and behavioral; video or case at some programs", evidence: "Official" },
    { label: "Timing", value: "Fixed recruiting season; apply early", evidence: "Official" },
    { label: "Evidence", value: "Mostly two financial-services programs", evidence: "Editorial" },
  ],
  formats: [
    { name: "Online coding assessment", detail: "Timed problems on platforms such as CodeSignal or HackerRank.", evidence: "Official" },
    { name: "Recorded video interview", detail: "JPMorganChase starts with a recorded HireVue interview and/or a HackerRank assessment.", evidence: "Official" },
    { name: "Assessment day", detail: "Capital One's Power Day: technical, behavioral and case interviews. Reports describe tracing business rules, debugging and, from September 2026, an agentic coding round.", evidence: "Official" },
    { name: "Behavioral", detail: "Competency-based \"tell me about a time\" questions mapped to the program's values.", evidence: "Official" },
  ],
  categories: ["coding", "behavioral", "practical", "oop", "sql"],
  notes: {
    coding: "Timed online assessments, easy to medium.",
    behavioral: "Competency questions mapped to the program's values.",
    practical: "Tracing business rules and debugging.",
  },
  officialResources: [
    { title: "Capital One — What to expect during your interview", url: "https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101", note: "Official: the online assessment and Power Day." },
    { title: "JPMorganChase — Software Engineer Program", url: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime", note: "Official program page, with a link to the firm's hiring steps." },
  ],
  caveat:
    "Enterprise evidence is dominated by two financial-services employers. Do not assume other enterprises use case interviews, video interviews or AI-assisted rounds; follow each program's published steps.",
  details: [
    {
      heading: "Eligibility",
      items: [
        "Structured programs usually target recent or upcoming graduates, often with a degree requirement, and recruit on a fixed calendar.",
        "Titles are unreliable outside programs: in the research, one \"Software Engineer I\" required 2 years and another \"Software Engineer\" 2–4 years.",
        "Some roles require work authorization without sponsorship or background checks.",
      ],
    },
    {
      heading: "Evidence",
      items: [
        "Official: Capital One and JPMorganChase process pages. Candidate-reported: aggregated Capital One Power Day reports (2026).",
        "Review date: 2027-05-25 (AI-assisted rounds: 2027-02-25).",
      ],
    },
  ],
  sources: [
    { title: "Capital One — What to expect during your interview (official)", url: "https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101" },
    { title: "Capital One — Student and grad application questions (official)", url: "https://www.capitalonecareers.com/student-and-grad-application-questions-answered-students-cdev" },
    { title: "JPMorganChase — Software Engineer Program (official)", url: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime" },
    { title: "Capital One TDP Power Day reports (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2027-cycle-capital-one-tdp-new-grad-oa-power-day-24-experiences-4opp91z6le" },
  ],
  checked: "2026-11-25",
};

export default company;
