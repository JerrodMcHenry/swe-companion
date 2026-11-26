import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "enterprise-early-career-programs",
  title: "Enterprise & Structured Early-Career Programs",
  category: "Employer type",
  description: "Graduate programs and entry roles at large non-tech-first employers: online assessments, behavioral and video interviews, and practical or case exercises at some.",
  level: "Entry level",
  overview:
    "Large enterprises — banks, insurers, retailers, healthcare and industrial companies — often hire new engineers through structured early-career programs with a set application season, an online coding assessment, behavioral interviews and sometimes an assessment day. Some add recorded video interviews, a practical or debugging exercise, or a business case. The work itself emphasizes working within established processes: existing codebases, testing, version control, databases, secure coding and collaboration. Most of the detailed evidence here comes from financial-services programs (Capital One, JPMorganChase); other enterprises differ, so treat program-specific formats as possibilities and check your program's own description.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "Structured programs (for example Capital One's Technology Development Program and JPMorganChase's Software Engineer Program) usually target recent or upcoming graduates, often with a degree requirement, and recruit on a fixed calendar. Apply early in the season.",
        "Titles are unreliable outside programs: in the research, Bank of America's \"Software Engineer I\" required 2 years and Fidelity's \"Software Engineer\" 2–4 years. Read the experience line.",
        "Some roles require work authorization without sponsorship, or background checks; check before investing preparation time.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Official: Capital One's TDP uses an online assessment followed by a Power Day with technical, behavioral and case interviews. JPMorganChase's early-careers process starts with a recorded HireVue interview and/or a HackerRank assessment, followed by one or more interviews.",
        "Candidate-reported (Capital One, aggregated reports, 2026): the Power Day technical case involved a business discussion, then tracing business rules, debugging and writing a similar method; from September 2026 the coding round was reported as agentic (fix a bug, then add a feature with an AI coding agent).",
        "The enterprise evidence is dominated by two financial-services employers and a small, finance-heavy posting sample. Do not assume other enterprises use case interviews, video interviews or AI-assisted rounds.",
        "Enterprise postings list unit testing, CI/CD, REST APIs, secure coding, code reviews and AI-assisted engineering as job expectations; these are on-the-job competencies, not proof of interview content.",
        "Review date for this path: 2027-05-25 (AI-assisted rounds: 2027-02-25).",
      ],
    },
    {
      heading: "If your program confirms a specific format",
      items: [
        "Recorded video interview: practise answering behavioral questions to a camera with a time limit; keep answers structured and about two minutes.",
        "Business or technical case: practise explaining a business problem, the rules involved and a simple technical approach aloud; then trace and debug code that implements business rules.",
        "AI-assisted or agentic round: follow the AI-Assisted Coding guide; otherwise practise without AI.",
        "Assessment or Power Day: plan for several back-to-back interviews and prepare behavioral stories for each competency the program lists.",
      ],
    },
    {
      heading: "Interview questions, behavioral and practical preparation",
      items: [
        "Question categories: timed algorithmic problems in the online assessment; object-oriented and coding fundamentals; testing and debugging; database and security basics; competency-based behavioral questions; business or technical case discussion where the program uses it.",
        "Behavioral: competency-based \"Tell me about a time…\" questions mapped to the program's listed values (teamwork, communication, learning, customer focus), on video or in person.",
        "Practical engineering: tracing and debugging business rules in unfamiliar code, small changes with tests, and Git workflows; AI-assisted practice only if your program confirms an AI-assisted round.",
      ],
    },
    {
      heading: "Application guidance",
      items: [
        "Track each program's application window and apply early; programs often fill in order.",
        "Follow the program's published steps and preparation material over this summary.",
        "Read the role's experience requirement: titles outside programs (for example \"Software Engineer I\") may require experience.",
        "Ask about work authorization and placement before the final stage if they matter to you.",
      ],
    },
  ],
  process: [
    "Typical program stages: application in the recruiting season; an online coding assessment (for example on CodeSignal or HackerRank) and/or a recorded video interview; then one or more interviews or an assessment day with technical, behavioral and sometimes case components; team placement may come after the offer.",
    "Each program publishes its own steps; follow them over this summary.",
  ],
  competencies: [
    "Programming fluency and Easy-to-Medium algorithmic problems under time limits.",
    "Object-oriented fundamentals and readable code.",
    "Reading business logic, debugging and testing.",
    "Git and established development workflows.",
    "Database and SQL concepts; secure coding basics.",
    "Clear, structured communication, including on video and in case discussions.",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Implement", slug: "problem-solving-process", reason: "Online coding assessments are the most consistent technical step in the programs reviewed.", exercises: ["Majority Element (LeetCode)", "Missing Number (LeetCode)"] },
    { title: "Arrays and strings", priority: "Essential", depth: "Implement", slug: "arrays-strings-patterns", reason: "The core of timed online assessments.", exercises: ["Best Time to Buy and Sell Stock (LeetCode)", "Squares of a Sorted Array (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Implement", slug: "hash-map-set-patterns", reason: "Frequently the key to solving assessment problems in time.", exercises: ["Longest Palindrome (LeetCode)", "Top K Frequent Elements (LeetCode)"] },
    { title: "Behavioral preparation", priority: "Essential", reason: "Behavioral interviews (\"Tell me about a time…\") are an official part of the programs reviewed, sometimes recorded on video." },
    { title: "Complexity analysis", priority: "Important", depth: "Implement", slug: "complexity-analysis" },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)"] },
    { title: "Classes and objects", priority: "Important", depth: "Implement", slug: "classes-objects", reason: "Object-oriented fundamentals are expected in enterprise codebases and common in technical interviews." },
    { title: "Reading and debugging unfamiliar code", priority: "Important", depth: "Implement", slug: "reading-debugging-unfamiliar-code", reason: "A technical case with tracing business rules and debugging was reported at one program; enterprise work centres on existing systems." },
    { title: "Automated testing", priority: "Important", depth: "Implement", slug: "automated-testing", reason: "Unit testing and test automation appear in enterprise postings." },
    { title: "Git and pull requests", priority: "Important", depth: "Implement", slug: "git-pull-requests", reason: "Code reviews and version-control workflows appear in enterprise postings." },
    { title: "Databases and SQL concepts", priority: "Important", depth: "Explain", slug: "databases-sql-concepts", reason: "Enterprise systems are data-heavy; raise to Implement if the posting stresses SQL or an assessment includes it.", exercises: ["Combine Two Tables (LeetCode)"] },
    { title: "Security fundamentals", priority: "Important", depth: "Explain", slug: "security-fundamentals", reason: "Secure coding appears in enterprise postings, especially in regulated industries." },
    { title: "Recorded video interviews (conditional)", priority: "Important", depth: "Explain", reason: "Officially part of JPMorganChase's early-careers process; prepare if your program uses one." },
    { title: "Trees and binary search trees", priority: "Optional", depth: "Implement", slug: "trees-binary-search-trees", reason: "Raise if your program's assessment is known to include medium-difficulty problems.", exercises: ["Maximum Depth of Binary Tree (LeetCode)"] },
    { title: "AI-assisted engineering and verification", priority: "Optional", depth: "Apply", slug: "ai-assisted-engineering", reason: "An agentic coding round was candidate-reported at one program (Capital One); prepare only if your program confirms an AI-assisted round. Enterprise postings increasingly expect AI tooling on the job." },
    { title: "Business case interviews (conditional)", priority: "Optional", depth: "Explain", reason: "Official at Capital One's Power Day; not observed at other enterprises reviewed. Prepare only if your program lists one." },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Optional", depth: "Implement", slug: "graphs-bfs-dfs" },
    { title: "Dynamic programming basics", priority: "Defer", slug: "dynamic-programming-basics", reason: "Beyond typical Easy-to-Medium online assessments unless your program says otherwise." },
    { title: "System design", priority: "Defer", reason: "Observed for a specialized AI/ML track, not general software programs." },
  ],
  sequence: [
    "Note your program's application dates and published stages; apply early in the season.",
    "Build the Essential coding topics to Implement depth and take timed practice assessments.",
    "Prepare behavioral stories for the competencies the program lists, and practise answering on video if a recorded interview is used.",
    "Cover Classes and Objects, testing, Git, SQL concepts and security at the depth shown — these also prepare you for the job.",
    "If a case, practical or AI-assisted round is confirmed, add its specific practice.",
    "Keep preparing between stages; programs often move quickly once you pass the assessment.",
  ],
  practice: [
    {
      title: "Timed online assessment (editorial)",
      note: "Four unseen problems (two Easy, two Medium) in about 70 minutes on a practice platform, without AI, then review each solution's complexity and edge cases. Times are editorial; follow the instructions of your program's assessment.",
    },
    {
      title: "Business-rule tracing",
      note: "Take code that applies several business rules (for example a fee or discount calculator), explain the rules aloud, find a seeded bug and write a similar method with tests.",
    },
    {
      title: "Recorded answers",
      note: "Record yourself answering three behavioral questions with a two-minute limit each, then review for structure, specifics and clarity.",
    },
  ],
  readiness: [
    "Online assessments: you can solve unseen Easy-to-Medium problems under a time limit without AI, testing edge cases and explaining complexity (editorial guide: three or four of four in about 70 minutes).",
    "Practical or case exercises, if confirmed: you can trace business rules in unfamiliar code, fix a bug with a test and explain your reasoning.",
    "Behavioral: structured stories for each listed competency, comfortable on video and in person.",
    "Professional: you can work with Git, tests, SQL concepts and secure coding basics at the depth shown.",
    "Apply on the program's calendar once eligible; these are not program thresholds.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/behavioral-interviews",
    "/interview-prep/debugging-code-review",
    "/interview-prep/ai-assisted-coding",
    "/getting-hired/application-strategy",
    "/getting-hired/resume",
  ],
  sources: [
    { title: "Capital One — What to expect during your interview (official)", url: "https://www.capitalonecareers.com/what-to-expect-during-your-capital-one-interview-students-101" },
    { title: "Capital One — Student and grad application questions, answered (official)", url: "https://www.capitalonecareers.com/student-and-grad-application-questions-answered-students-cdev" },
    { title: "JPMorganChase — Software Engineer Program (official)", url: "https://www.jpmorganchase.com/careers/explore-opportunities/programs/software-engineer-fulltime" },
    { title: "JPMorganChase — Digital Handbook (official; recorded HireVue and/or HackerRank first round)", url: "https://www.jpmorganchase.com/content/dam/jpmorganchase/documents/careers/jpmc-digital-handbook.pdf" },
    { title: "Capital One TDP Power Day reports (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2027-cycle-capital-one-tdp-new-grad-oa-power-day-24-experiences-4opp91z6le" },
  ],
  atAGlance: [
    { label: "Formats", value: "Online assessment and behavioral; video or case at some programs (official)" },
    { label: "Timing", value: "Fixed recruiting season — apply early" },
    { label: "Evidence", value: "Mostly financial-services programs" },
  ],
  parallel: ["Behavioral preparation", "One substantial project (forthcoming: Unit 6)"],
  stages: [
    { template: "fluency", topics: ["python-lists", "python-debugging"] },
    { template: "coreOA", topics: ["problem-solving-process", "arrays-strings-patterns", "hash-map-set-patterns", "complexity-analysis", "stacks-queues", "trees-binary-search-trees", "graphs-bfs-dfs"] },
    { template: "enterpriseEng", topics: ["classes-objects", "reading-debugging-unfamiliar-code", "automated-testing", "git-pull-requests", "databases-sql-concepts", "security-fundamentals"] },
    { template: "assessmentDay", topics: ["Recorded video interviews (conditional)", "Business case interviews (conditional)"], note: "Follow your program's published steps. Case, video and AI-assisted rounds are program-specific.", guides: ["behavioral-interviews", "coding-algorithms"] },
    { template: "job", topics: ["code-review", "ai-assisted-engineering"] },
  ],
};

export default guide;
