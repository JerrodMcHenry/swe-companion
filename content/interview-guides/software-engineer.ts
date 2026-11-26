import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "software-engineer",
  title: "Entry-Level Software Engineer",
  category: "Role",
  description: "What first software engineering jobs require, how employers assess it, and the shortest preparation path for a general entry-level role.",
  level: "Entry level",
  overview:
    "This is the general path for a first software engineering role: new graduate, early career, junior or associate. Three things decide whether you get hired. Eligibility comes from the posting (degree or equivalent experience, graduation timing, work authorization, location). Interview readiness is whether you can perform in the employer's assessment formats. Professional competence is whether you can do the job: write and debug code, work in an existing codebase, test, use Git and explain your work. Coding and data structures interviews are the most widely reported format, but employers differ: some emphasize practical tasks, take-homes, debugging or project discussions. Backend and full-stack roles add their own requirements, covered in separate role guides when published.",
  process: [
    "Big Tech: usually an online assessment or technical screen, then several coding interviews focused on data structures, algorithms and complexity, plus a behavioral interview. Tool rules differ by company (for example, Google prohibits AI in interviews, while Meta's official hiring page says many of its interviews include an AI assistant).",
    "Startups and growth-stage companies: more variety. This curriculum's research found founder or recruiter calls, take-home assignments, practical coding (building or integrating a small feature), debugging rounds in existing code, project deep dives and, at some companies, AI-assisted work samples. Data structures questions still appear in some screens.",
    "Established technology companies: commonly a mix of coding interviews and practical or debugging rounds, with a hiring-manager or behavioral conversation.",
    "Enterprise early-career programs (for example bank and consulting graduate programs): commonly online assessments (coding, sometimes multiple-choice or SQL), recorded video interviews or assessment days with behavioral and case elements. Capital One, for example, publishes a description of its student process, from automated assessment to a Power Day of interviews.",
    "These are preparation distinctions observed in this curriculum's research, not universal processes. Read each employer's own pages and ask your recruiter.",
  ],
  competencies: [
    "Programming fluency in one language, without relying on autocomplete or AI.",
    "Data structures, algorithms and complexity analysis at the level of common patterns.",
    "Object-oriented programming fundamentals: modelling a small problem with classes.",
    "Testing and debugging your own code, and reading and modifying code you did not write.",
    "Git and basic collaboration: branches, pull requests, code review.",
    "Building, deploying and explaining one substantial project.",
    "Clear technical communication and well-prepared behavioral answers.",
  ],
  studyTopics: [
    { title: "Programming fluency (Unit 1)", priority: "Essential", slug: "python-functions-arguments", reason: "The twelve core Programming Fluency topics, or equivalent fluency in another suitable language. Use the Unit 1 readiness checklist to skip what you know." },
    { title: "Problem-solving process and communication", priority: "Essential", slug: "problem-solving-process" },
    { title: "Complexity analysis", priority: "Essential", slug: "complexity-analysis" },
    { title: "Arrays, strings, hash maps and sets", priority: "Essential", slug: "hash-map-set-patterns", reason: "The patterns behind most entry-level coding questions; start with Arrays and Strings Patterns." },
    { title: "Trees, graphs and recursion", priority: "Essential", slug: "trees-binary-search-trees", reason: "Essential for Big Tech; Important elsewhere. Continue with Graphs and Recursion and Backtracking." },
    { title: "Testing and debugging your own code", priority: "Essential", slug: "python-debugging" },
    { title: "Remaining data structures and algorithms topics", priority: "Important", slug: "stacks-queues", reason: "Stacks and queues, binary search, heaps, linked lists, sorting and intervals, and dynamic programming basics. Depth depends on your targets: Big Tech needs more than most startups." },
    { title: "Object-oriented programming and design (forthcoming: Unit 3)", priority: "Important", reason: "Low-level design rounds are reported at some employers, and OOP is needed on the job. Not yet published." },
    { title: "Git, automated tests and engineering fundamentals (forthcoming: Unit 4)", priority: "Important", reason: "Needed from your first week at work, and tested in practical rounds. Not yet published." },
    { title: "Reading and debugging unfamiliar code, code review, AI-assisted engineering (forthcoming: Unit 5)", priority: "Important", reason: "Emphasized by startups and practical or debugging rounds. Not yet published." },
    { title: "One substantial project (forthcoming: Unit 6)", priority: "Essential", reason: "Your main evidence for screening and project discussions. Until Unit 6 is published, see the Engineering Projects guide in Getting Hired." },
    { title: "Behavioral preparation", priority: "Essential", reason: "See Behavioral Interview Preparation in Interview Preparation; start your story bank early." },
    { title: "Rapid-fire technical questions", priority: "Optional", reason: "Conditional; mostly covered by studying the Library topics. See the Rapid-Fire Technical Questions guide." },
    { title: "Union-find and shortest paths", priority: "Optional", slug: "union-find-shortest-paths", reason: "Conditional; mainly for Big Tech targets after the core patterns." },
    { title: "System design", priority: "Optional", reason: "Not a general entry-level requirement in this curriculum's research. Learn to explain your own project's architecture instead (Unit 6)." },
  ],
  sequence: [
    "Check eligibility for the roles you want using Job Description Gap Analysis in Getting Hired.",
    "Skip what you can already demonstrate: use the readiness checklists at the top of each Apprenticeship unit.",
    "Build programming fluency (Unit 1) if needed.",
    "Make data structures and algorithms your main focus (Unit 2), following the Coding & Algorithms guide, and start behavioral stories at the same time.",
    "Build or refine one substantial project scoped to your target role, and prepare to explain it.",
    "Add object-oriented design, engineering fundamentals and practical engineering (Units 3–5) as they are published, prioritizing what your target employers emphasize: more coding depth for Big Tech, more practical and debugging work for startups.",
    "Prepare your resume and start applying once you are eligible and close to the readiness guide below; keep preparing while you apply (see Job Application Strategy in Getting Hired).",
    "After each interview, use Interview Failure Recovery in Getting Hired to target weak areas instead of restarting.",
  ],
  practice: [
    {
      title: "Coding practice",
      note: "Follow the practice instructions in the Coding & Algorithms guide: untimed first, then timed, mixed-pattern, without AI where your targets require it, explaining aloud.",
    },
    {
      title: "Practical engineering practice",
      note: "Build features in your project, fix bugs in it and write tests. When Unit 5 is published, add existing-codebase drills and timed take-home practice; these matter most for startup and practical-round targets.",
    },
    {
      title: "Project explanation",
      note: "Practise a two-minute overview of your project and answers to \"why this design?\", \"what was hardest?\" and \"what would you change?\".",
    },
    {
      title: "Mock interviews",
      note: "Do mock coding and behavioral interviews with another person before real interviews, in the formats your target employers use.",
    },
  ],
  resources: [
    {
      title: "What to expect during your Capital One interview (students)",
      url: "https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101",
      provider: "Capital One (official)",
      type: "Article",
      instructions: "An example of how an enterprise early-career program describes its process. Read it as an example of what to look for on any employer's site.",
    },
    {
      title: "Software Engineer Program",
      url: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime",
      provider: "JPMorganChase (official)",
      type: "Article",
      instructions: "Another enterprise early-career program page; note how it describes eligibility, expected skills (including judgment about AI-generated output) and the program structure.",
    },
    {
      title: "Coding interview techniques",
      url: "https://www.techinterviewhandbook.org/coding-interview-techniques/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free summary of coding interview technique; see the Coding & Algorithms guide for the full preparation plan.",
    },
  ],
  readiness: [
    "Eligibility: you meet the requirements of the postings you target.",
    "Coding: you meet the Unit 2 readiness checklist. Editorial practice guide: solve two of three unseen Easy-to-Medium problems in about 45 minutes each, explaining complexity (Big Tech targets: Medium problems, without AI or running code).",
    "Project: you can demonstrate and explain one substantial project, including its design, testing and trade-offs.",
    "Practical: you can add a small feature and fix a bug in code you did not write, with tests (fully covered once Units 4–5 are published).",
    "Behavioral: you have a story bank of six to eight real experiences and can answer common questions in about two minutes.",
    "Apply once you are eligible and reasonably prepared; completing every Apprenticeship unit is not required. These criteria are editorial recommendations, not employer thresholds, and meeting them does not guarantee an offer.",
  ],
  sources: [
    { title: "Google — Our hiring process", url: "https://www.google.com/about/careers/applications/how-we-hire/" },
    { title: "Meta — Hiring process", url: "https://www.metacareers.com/hiring-process/" },
    { title: "Amazon — Software development interview topics", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "Capital One — What to expect during your interview (students)", url: "https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101" },
    { title: "JPMorganChase — Software Engineer Program", url: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime" },
  ],
};

export default guide;
