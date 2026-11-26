import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "netflix",
  title: "Netflix (Eligibility and Qualified Guidance)",
  category: "Company",
  description: "What Netflix's postings show about entry-level opportunities, and how to prepare if a suitable role is open.",
  level: "Early career",
  overview:
    "This is not a full interview path. Netflix hires mostly experienced engineers, and this curriculum's research found no Netflix software engineering interview guidance and no reliable evidence about a new-graduate interview process. This page explains what Netflix's postings showed, how to check whether a role suits you, and how to prepare using the general foundation if it does. If you find an entry-level Netflix posting, use its requirements together with the Other Employer or Specific Job Posting path.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "On 25 November 2026, Netflix's careers site returned 139 results for \"software engineer\". Most level-labelled roles were level 5 or 6; level 4 roles asked for 3+ years of experience, and the single level 3 role asked for 3–5 years.",
        "No full-time new-graduate software engineering posting was open on that date.",
        "A Software Engineer Intern (Summer 2027) posting was open for current Bachelor's or Master's students graduating between December 2027 and Summer 2028, asking for coursework or experience in data structures, algorithms and debugging.",
        "A third-party guide reports that Netflix new-graduate roles, when offered, usually post around September–October and are few. This is not confirmed by Netflix.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "No official Netflix guide to software engineering interviews.",
        "No reliable description of a standard new-graduate interview process; anonymous reports seen only in search summaries mention coding, some system design and resume discussion, mostly for experienced hires.",
        "Internships are not necessarily the only route: some roles may suit early-career candidates without being labelled as such, so check each posting's actual requirements rather than its title.",
      ],
    },
    {
      heading: "How to use this path",
      items: [
        "If you are a current student, internships are one visible route; check the dates and eligibility in the posting.",
        "If you find a full-time posting whose experience requirements you meet, analyse it with Job Description Gap Analysis, ask the recruiter about the interview format, and follow the Other Employer or Specific Job Posting path.",
        "If no suitable role is open, prioritize other targets and check Netflix's careers site again during hiring season.",
      ],
    },
  ],
  process: [
    "Not published for entry-level roles. Ask the recruiter for the number and type of interviews and any tool rules.",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Implement", slug: "problem-solving-process", reason: "The intern posting asks for data structures and algorithms; coding interviews are the most common format across large technology employers in this curriculum's research." },
    { title: "Programming fluency in one language", priority: "Essential", depth: "Apply", slug: "python-lists", phase: "programming-fluency", reason: "Required for any coding assessment." },
    { title: "Testing and dry-running code", priority: "Essential", depth: "Implement", slug: "python-debugging", reason: "The intern posting names debugging explicitly." },
    { title: "Behavioral preparation", priority: "Essential", reason: "Netflix publishes its culture and values (such as judgment, candor and selflessness); prepare true stories that show them. See Behavioral Interview Preparation." },
    { title: "Core data structures and complexity", priority: "Important", depth: "Implement", slug: "complexity-analysis", reason: "For coding priorities beyond the basics, follow the Other Employer path or the Coding & Algorithms guide." },
  ],
  readiness: [
    "You have checked a current posting and meet its experience and education requirements.",
    "You have confirmed the interview format with a recruiter and prepared using the Other Employer path.",
    "You have behavioral stories that reflect Netflix's published culture.",
    "This page makes no readiness claims about Netflix interviews themselves; evidence was insufficient.",
  ],
  relatedGuides: [
    "/interview-prep/other-employer",
    "/getting-hired/job-description-gap-analysis",
    "/interview-prep/coding-algorithms",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/application-strategy",
  ],
  sources: [
    { title: "Netflix — Careers job search (official; checked 25 November 2026)", url: "https://explore.jobs.netflix.net/careers" },
    { title: "Netflix — Software Engineer Intern, Summer 2027 (official posting)", url: "https://explore.jobs.netflix.net/careers/job/790318904468" },
    { title: "Netflix — Culture (official)", url: "https://jobs.netflix.com/culture" },
    { title: "Simplify — Netflix new grad software engineer guide (third-party)", url: "https://simplify.jobs/blog/netflix-new-grad-software-engineer-guide" },
  ],
  atAGlance: [
    { label: "Postings", value: "No full-time new-grad SWE posting open on 25 Nov 2026" },
    { label: "Route", value: "Internships for current students; check each posting's real requirements" },
  ],
};

export default guide;
