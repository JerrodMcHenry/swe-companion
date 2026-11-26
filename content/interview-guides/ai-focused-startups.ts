import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "ai-focused-startups",
  title: "AI-Focused Startups",
  category: "Employer type",
  description: "General software engineering roles at AI product companies: strong fundamentals, practical engineering and verified AI use — not ML research.",
  level: "Entry level",
  overview:
    "This path is for general software engineering roles at companies whose product is built on AI — building the product, APIs, integrations and infrastructure around models — not for machine-learning research or specialized AI engineering roles (those paths are planned separately). Candidate reports from AI-focused startups describe algorithmic coding screens, practical and testing-focused coding, debugging, some basic system design and, at some companies, rounds where you build with AI tools. That makes strong fundamentals, practical engineering and the ability to verify AI-generated code the core of preparation. Working at an AI company does not mean AI is allowed in its interviews: follow each company's rules.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "Entry-level roles are a small minority at AI-focused companies; many listed engineering roles require several years of experience. Read the experience requirement first.",
        "Postings for general software roles ask for strong programming and product engineering. They do not normally require model training, deep learning or advanced mathematics; if a posting does, it is a specialized AI or ML role outside this path.",
        "Shipping evidence (a deployed project, internships, real users) strengthens applications, as at other startups.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Candidate-reported, small sample (R3; FastPrep, mostly rewritten): Decagon — coding screens, then an onsite with AI coding, system design, a project deep dive and behavioral; xAI — a four-hour take-home built with AI, or an onsite with a whiteboard design without AI followed by about 90 minutes building it with AI and a demo; Plaud — system design and graph coding; Notion's AI new-grad track — a 90-minute take-home (design document plus coding), then a testing-focused coding round and a debugging round.",
        "These are a handful of companies and individual reports; formats change quickly. Treat every format below as possible, not standard.",
        "No official interview-process page for a general software role at an AI-focused startup was found in the research. Confirm the process and the AI rules with each company.",
        "Review date for this path: 2027-02-25, because AI-related interview policies change fast.",
      ],
    },
    {
      heading: "Interview questions, behavioral and practical preparation",
      items: [
        "Question categories: algorithmic coding; practical and testing-focused coding; debugging; how you use and verify AI tools; basic design of your project or a small feature; product motivation.",
        "Behavioral: why this AI product, learning fast, ownership, and a time you caught or fixed a mistake — including one made by an AI tool.",
        "Practical engineering: drills in both modes with a verification log; explain generated code without the assistant; never use AI in a round that does not allow it.",
      ],
    },
    {
      heading: "Application guidance",
      items: [
        "Confirm the role is general software engineering; apply to specialized ML or AI engineering roles only if you meet their stated requirements.",
        "Show verified AI use honestly: what you built, how you checked the output and what you changed. Do not overstate AI or ML experience.",
        "Apply once eligible and reasonably prepared; keep practising independently while you interview.",
      ],
    },
  ],
  process: [
    "Possible stages (reported, company-specific): recruiter call; one or two coding screens; an onsite with some of: algorithmic coding, a practical or testing-focused coding round, debugging, an AI-assisted build, basic system design, a project deep dive, behavioral.",
    "Some companies use a take-home, which may explicitly allow or require AI tools.",
    "Ask which rounds allow AI and whether you use your own tools or a provided assistant.",
  ],
  competencies: [
    "Strong programming fundamentals and algorithmic problem solving at Implement depth.",
    "Practical engineering: reading, debugging, testing and extending unfamiliar code.",
    "Testing and verification, including of AI-generated code.",
    "API and integration fundamentals for product work.",
    "Explaining architecture and implementation decisions, including in a basic design discussion.",
    "Independent ability first; responsible AI-assisted development where allowed.",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Implement", slug: "problem-solving-process", reason: "Coding screens were reported at the AI-focused companies reviewed.", exercises: ["Majority Element (LeetCode)"] },
    { title: "Arrays and strings", priority: "Essential", depth: "Implement", slug: "arrays-strings-patterns", reason: "Core of coding screens.", exercises: ["Product of Array Except Self (LeetCode)", "Longest Substring Without Repeating Characters (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Implement", slug: "hash-map-set-patterns", reason: "The most broadly useful pattern in screens and product code.", exercises: ["Top K Frequent Elements (LeetCode)", "Longest Consecutive Sequence (LeetCode)"] },
    { title: "Reading and debugging unfamiliar code", priority: "Essential", depth: "Apply", slug: "reading-debugging-unfamiliar-code", reason: "Debugging rounds and AI-assisted builds both depend on understanding code quickly.", exercises: ["Reproduce a closed bug report in a small open-source project"] },
    { title: "Automated testing", priority: "Essential", depth: "Implement", slug: "automated-testing", reason: "A testing-focused coding round was reported, and testing is how you verify generated code." },
    { title: "AI-assisted engineering and verification", priority: "Essential", depth: "Apply", slug: "ai-assisted-engineering", reason: "AI-assisted builds were reported at some of these companies and AI tools are central to the job; in interviews, use AI only where explicitly allowed.", exercises: ["AI-assisted mode: complete a comparable drill with an AI assistant and keep a verification log.", "Independent mode: complete one drill from Existing-Codebase Drills with AI assistants and AI autocomplete turned off, then explain your change aloud."] },
    { title: "Behavioral preparation", priority: "Essential", reason: "Behavioral and motivation conversations were reported in these loops; be ready to say why this product and team." },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Important", depth: "Implement", slug: "graphs-bfs-dfs", reason: "Graph coding (including topological sort) was reported in one onsite.", exercises: ["Number of Islands (LeetCode)", "Course Schedule (LeetCode)"] },
    { title: "Trees and binary search trees", priority: "Important", depth: "Implement", slug: "trees-binary-search-trees", exercises: ["Binary Tree Level Order Traversal (LeetCode)"] },
    { title: "Existing-codebase drills", priority: "Important", depth: "Apply", slug: "existing-codebase-drills", exercises: ["Repeat any drill in AI-assisted mode with a verification log"] },
    { title: "System design", priority: "Important", depth: "Explain", reason: "Basic level only (a Basic System Design guide is forthcoming). Candidates reported basic system design in several AI-focused new-grad loops (Decagon, Plaud, xAI) — more often than at Big Tech for new grads. Until the guide is published, be able to sketch your own project's components, data flow and trade-offs." },
    { title: "How the internet and HTTP work", priority: "Important", depth: "Explain", slug: "internet-http", reason: "AI products are usually web and API products; integration work calls model and third-party APIs." },
    { title: "Explaining your projects", priority: "Important", depth: "Explain", reason: "A project deep dive was reported; explain architecture and decisions. A Project Deep Dives guide is forthcoming." },
    { title: "Designing small systems", priority: "Optional", depth: "Implement", slug: "designing-small-systems", reason: "Useful for take-home design documents; raise if one is confirmed." },
    { title: "Databases and SQL concepts", priority: "Optional", depth: "Explain", slug: "databases-sql-concepts", reason: "Raise for backend-leaning roles." },
    { title: "Dynamic programming basics", priority: "Optional", depth: "Implement", slug: "dynamic-programming-basics", reason: "Raise only if screens are confirmed to be algorithm-heavy." },
    { title: "Machine learning, model training, RAG and agent frameworks", priority: "Defer", reason: "Not required for general software roles unless the posting asks; these belong to the planned AI Engineer path." },
    { title: "Union-find and weighted shortest paths", priority: "Defer", slug: "union-find-shortest-paths", reason: "Advanced; no evidence for this segment." },
  ],
  sequence: [
    "Confirm the role is general software engineering and that you meet the experience requirement.",
    "Build independent fundamentals first: the Essential coding topics at Implement depth, practised without AI.",
    "Work through Reading and Debugging Unfamiliar Code and Automated Testing, then do drills in both modes, keeping a verification log in AI-assisted mode.",
    "Prepare to explain one project's architecture and trade-offs, which also covers basic design questions.",
    "Ask each company which rounds allow AI; practise those rounds in that mode only.",
    "Apply once eligible and reasonably prepared.",
  ],
  practice: [
    {
      title: "Design without AI, then build with AI (editorial)",
      note: "Spend 20 minutes sketching a small feature's design on paper without AI, then about 90 minutes building it with an assistant, testing everything, and finish with a 10-minute demo explaining what you accepted, changed and rejected. Mirrors one reported format; times are editorial.",
    },
    {
      title: "Testing-first coding",
      note: "Solve a practical problem by writing tests first, including edge cases, then the implementation; explain how the tests show it works.",
    },
  ],
  readiness: [
    "Algorithmic screens: you can solve unseen Easy-to-Medium problems (arrays, strings, hash maps, trees, graphs) in about 45 minutes each without AI, explaining complexity and testing (editorial guide).",
    "Practical and AI-assisted tasks: you can fix a bug and build a small tested feature in unfamiliar code with an assistant, catch at least one incorrect suggestion and explain every change without it (editorial).",
    "Design: you can sketch your project's components, data flow and one trade-off, and answer \"what would change with ten times more users?\" at a basic level.",
    "Behavioral: you can explain why this company and product, with specific stories about ownership and learning.",
    "Apply once you are eligible and reasonably prepared; none of these are employer thresholds.",
  ],
  relatedGuides: [
    "/interview-prep/ai-assisted-coding",
    "/interview-prep/coding-algorithms",
    "/interview-prep/debugging-code-review",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/engineering-projects",
    "/getting-hired/job-description-gap-analysis",
  ],
  sources: [
    { title: "Decagon new-grad interviews (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-decagon-new-grad-swe-interviews-1-experience-4p0yzlfvh5" },
    { title: "xAI AI coding interview and take-home (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2025-2026-xai-ai-coding-interview-building-with-ai-new-grad-take-home-onsite-3-e-1vhv6zjyey" },
    { title: "Plaud new-grad onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/plaud-new-grad-swe-onsite-interview-experience-1-experience-cx8d9z234f" },
    { title: "Notion new-grad and AI new-grad invitations (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip" },
  ],
  atAGlance: [
    { label: "Scope", value: "General software roles, not ML research" },
    { label: "Formats", value: "Coding, debugging, basic design; AI-assisted builds at some (reported)" },
    { label: "AI", value: "Only where the company explicitly allows it" },
  ],
  parallel: ["Behavioral preparation", "Explaining your projects", "One substantial project (forthcoming: Unit 6)"],
  stages: [
    { template: "fluency", topics: ["python-lists", "python-debugging"] },
    { template: "core", topics: ["problem-solving-process", "complexity-analysis", "arrays-strings-patterns", "hash-map-set-patterns", "trees-binary-search-trees", "graphs-bfs-dfs", "dynamic-programming-basics"] },
    { template: "verify", topics: ["reading-debugging-unfamiliar-code", "automated-testing", "existing-codebase-drills", "ai-assisted-engineering", "code-review"], note: "Practise independently first. Use AI in an interview only where the company explicitly allows it." },
    { template: "designApis", topics: ["System design", "internet-http", "designing-small-systems", "classes-objects", "composition-inheritance-interfaces"] },
    { template: "simulate", topics: [], guides: ["coding-algorithms", "behavioral-interviews", "ai-assisted-coding", "debugging-code-review"] },
    { template: "job", topics: ["git-pull-requests", "security-fundamentals"] },
  ],
};

export default guide;
