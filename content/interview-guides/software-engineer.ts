import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "software-engineer",
  title: "Entry-Level Software Engineer",
  category: "Role",
  description: "What a general first software engineering job requires on the job, and how that combines with your target employer's interviews.",
  level: "Entry level",
  overview:
    "This is the general software engineering role: new graduate, early career, junior or associate, not specialized in backend or frontend. This guide covers what the role requires: the competencies you need to do the job and that employers screen for in postings. What to emphasize for interviews depends on your employer: choose a target in Interview Preparation and this role is combined with it into one preparation path. Coding and data structures interviews are common, especially at Big Tech, but many employers weight practical tasks, debugging, take-homes or project discussions instead, so data structures should not automatically be your only focus.",
  guidance: [
    {
      heading: "Three separate questions",
      items: [
        "Eligibility: do you meet the posting's requirements (degree or equivalent experience, graduation timing, work authorization, location)? Technical preparation does not change this; see Job Description Gap Analysis.",
        "Interview readiness: can you perform in your target employer's assessment formats? Your target path sets these priorities.",
        "Professional readiness: can you do the job — write and debug code, work in an existing codebase, test, use Git, explain your work and use AI tools responsibly? This guide covers it. Strong algorithm skills do not prove it, and a deployed project does not prove interview readiness.",
      ],
    },
    {
      heading: "Common role requirements (this curriculum's research)",
      items: [
        "Postings commonly ask for proficiency in at least one mainstream language, a degree or equivalent experience, and often internships or a project you can discuss in depth.",
        "Practices named often in postings: testing, code review, Git, debugging and, increasingly, using AI tools with judgment about their output.",
        "Read each posting: actual requirements override this general guidance.",
      ],
    },
  ],
  competencies: [
    "Programming fluency in one language, without relying on autocomplete or AI.",
    "Testing and debugging your own code, and reading and modifying code you did not write.",
    "Git and basic collaboration: branches, pull requests and code review.",
    "Object-oriented design of small programs.",
    "Building, deploying and explaining one substantial project.",
    "Choosing appropriate data structures and spotting inefficient code.",
    "Using AI coding tools while verifying their output.",
    "Clear technical communication.",
  ],
  studyTopics: [
    { title: "Programming fluency in one language", priority: "Essential", depth: "Apply", slug: "python-lists", reason: "Postings reviewed in this curriculum's research consistently require proficiency in at least one language, and all day-to-day work depends on it. Complete Programming Fluency or show equivalent fluency." },
    { title: "Testing and dry-running code", priority: "Essential", depth: "Implement", slug: "python-debugging", reason: "Debugging and testing are named in most postings and are a large part of the daily job." },
    { title: "Git, pull requests and automated tests (forthcoming: Unit 4)", priority: "Essential", depth: "Implement", reason: "Used from the first week of most jobs; named in many postings. The Library topics are not yet published." },
    { title: "Reading and debugging unfamiliar code, and code review (forthcoming: Unit 5)", priority: "Essential", depth: "Implement", reason: "Entry-level engineers mostly work in existing codebases; postings and practical interview rounds outside Big Tech emphasize it. Not yet published." },
    { title: "One substantial project (forthcoming: Unit 6)", priority: "Essential", depth: "Implement", reason: "Your main evidence of engineering ability for screening and project discussions. Until Unit 6 is published, see the Engineering Projects guide." },
    { title: "Behavioral preparation", priority: "Essential", reason: "Behavioral and communication skills are assessed by employers of every type in this curriculum's research. See Behavioral Interview Preparation." },
    { title: "Complexity analysis", priority: "Important", depth: "Implement", slug: "complexity-analysis", reason: "On the job, you need to recognize slow approaches and explain trade-offs, even where interviews do not test algorithms heavily." },
    { title: "Hash maps and sets", priority: "Important", depth: "Implement", slug: "hash-map-set-patterns", reason: "The most broadly useful data structure in everyday code." },
    { title: "Object-oriented programming and design (forthcoming: Unit 3)", priority: "Important", depth: "Implement", reason: "Organizing code into classes with clear responsibilities is daily work; some employers also interview on it. Not yet published." },
    { title: "AI-assisted engineering and verification (forthcoming: Unit 5)", priority: "Important", depth: "Implement", reason: "Several postings now list experience with AI coding tools; the job requires checking AI output for correctness and security. Not yet published." },
    { title: "How the internet and HTTP work (forthcoming: Unit 4)", priority: "Important", depth: "Explain", reason: "Most software talks to other services over HTTP. Not yet published." },
    { title: "Databases and SQL concepts (forthcoming: Unit 4)", priority: "Optional", depth: "Explain", reason: "Depends on the team; essential for backend roles. Not yet published." },
    { title: "System design", priority: "Defer", reason: "Not a general entry-level requirement in this curriculum's research. Learn to explain your own project's architecture instead." },
    { title: "Cloud platforms, containers and infrastructure tooling", priority: "Defer", reason: "Appear mainly as preferred skills; learn when a role requires them." },
  ],
  readiness: [
    "You can write, test and debug programs in one language without help.",
    "You can add a small feature and fix a bug in code you did not write, with tests (fully covered once Units 4–5 are published).",
    "You can use Git branches and pull requests, and respond to review comments.",
    "You can demonstrate and explain one substantial project, including its design, testing and trade-offs.",
    "These are editorial readiness recommendations, not employer thresholds.",
  ],
  relatedGuides: [
    "/interview-prep/other-employer",
    "/interview-prep/coding-algorithms",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/engineering-projects",
    "/getting-hired/resume",
  ],
  sources: [
    { title: "Google — Software Engineer II, Early Career, US posting (official)", url: "https://www.google.com/about/careers/applications/jobs/results/109116638069957318" },
    { title: "Amazon — Software development interview topics (official)", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "JPMorganChase — Software Engineer Program (official)", url: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime" },
  ],
};

export default guide;
