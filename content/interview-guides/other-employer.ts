import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "other-employer",
  title: "Other Employer or Specific Job Posting",
  category: "Employer type",
  description: "For employers without a dedicated path: prioritize from the actual job posting and the interview format your recruiter confirms.",
  level: "Entry level",
  overview:
    "Use this path when your target employer does not have a dedicated path yet, or when you are preparing for one specific job. Without employer-specific evidence, the two most reliable guides are the job posting itself and what your recruiter tells you about the interview. This page gives a balanced default — enough coding-interview preparation for common screens, plus practical skills and behavioral preparation — and explains how to shift it once you know more. The default priorities below are editorial recommendations, not evidence about any particular employer.",
  guidance: [
    {
      heading: "How to use this path",
      items: [
        "Read the posting with Job Description Gap Analysis: separate eligibility from skills, and note the technologies and responsibilities it emphasizes.",
        "Ask the recruiter how the interview works: the number and type of rounds, whether you can run code, use documentation or use AI, and the language options.",
        "Start from the default priorities below, then apply the adjustments for the formats you have confirmed. A confirmed format always overrides the default.",
        "If the employer clearly fits an employer type — early-stage startup, AI-focused startup, growth-stage company, established technology company or enterprise early-career program — use that path instead; use this one when it does not fit or you are preparing for one specific posting.",
      ],
    },
    {
      heading: "Adjust for the interview format your recruiter confirms",
      items: [
        "Algorithmic coding interview or online assessment: follow the Coding & Algorithms guide; raise trees, graphs and recursion to Essential and aim for Apply depth in the core patterns.",
        "Debugging, code review or practical coding round: follow the Debugging & Code Review guide; put Reading and Debugging Unfamiliar Code and Existing-Codebase Drills first. Implement depth in data structures is usually enough.",
        "Take-home assignment: follow the Take-Home Assignments guide and complete the Take-Home Assessment Simulation first; schedule the time in advance.",
        "AI tools allowed or expected: follow the AI-Assisted Coding guide and practise directing an assistant and verifying its output. AI not allowed: practise without it. Prepare both if you do not know.",
        "Behavioral-heavy process (for example an assessment day): give extra time to your story bank and to explaining your projects.",
        "Object-oriented or low-level design round confirmed: follow the OOP & Low-Level Design guide and raise Designing Small Systems to Essential at Apply depth.",
        "SQL round confirmed or SQL stressed in the posting: work through Databases and SQL Concepts at Implement depth, including its SQL practice problems.",
        "System design round confirmed: a guide is planned; until then, prepare the basics only and say how you would learn the rest.",
      ],
    },
    {
      heading: "Typical emphasis by employer type (this curriculum's research; varies by employer)",
      items: [
        "Large technology companies: mostly algorithmic coding interviews plus a behavioral interview. See the company guides and Established Technology Companies.",
        "Startups and growth-stage companies: more practical tasks, debugging rounds, take-homes and project discussions; algorithmic screens still appear at some. See Early-Stage Startups, AI-Focused Startups and Growth-Stage Companies.",
        "Enterprise graduate programs: often online coding assessments, behavioral interviews and assessment days; some include a case or debugging exercise. See Enterprise & Structured Early-Career Programs.",
      ],
    },
    {
      heading: "If your interview is already scheduled",
      items: [
        "Work only on the Essential items for your confirmed format that you cannot yet do reliably, plus behavioral stories and one or two mock interviews.",
        "Drop Optional and Defer items. Revisit the posting's required technologies only at the level you can honestly discuss.",
      ],
    },
  ],
  process: [
    "Commonly reported stages across employer types: application screen, online assessment or recruiter call, one or more technical interviews, and a behavioral or hiring-manager conversation. Many employers skip or combine stages.",
    "The actual process is whatever your recruiter describes; ask early.",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Implement", slug: "problem-solving-process", reason: "Coding screens and online assessments are the most widely reported technical format across employer types in this curriculum's research.", exercises: ["Majority Element (LeetCode)"] },
    { title: "Programming fluency in one language", priority: "Essential", depth: "Apply", slug: "python-lists", phase: "programming-fluency", reason: "Every technical format depends on writing correct code fluently." },
    { title: "Complexity analysis", priority: "Essential", depth: "Implement", slug: "complexity-analysis", reason: "Asked about in coding rounds of all kinds and needed to explain your choices." },
    { title: "Arrays and strings", priority: "Essential", depth: "Implement", slug: "arrays-strings-patterns", reason: "The most common inputs in coding screens.", exercises: ["Best Time to Buy and Sell Stock (LeetCode)", "Squares of a Sorted Array (LeetCode)", "Longest Substring Without Repeating Characters (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Implement", slug: "hash-map-set-patterns", reason: "The most broadly useful pattern in coding screens and real code.", exercises: ["Longest Palindrome (LeetCode)", "Top K Frequent Elements (LeetCode)"] },
    { title: "Testing and dry-running code", priority: "Essential", depth: "Implement", slug: "python-debugging", reason: "Debugging appears both in coding rounds and in practical rounds outside Big Tech." },
    { title: "Behavioral preparation", priority: "Essential", reason: "Behavioral interviews were observed across all employer types researched. See Behavioral Interview Preparation." },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)"] },
    { title: "Binary search", priority: "Important", depth: "Implement", slug: "binary-search", exercises: ["Binary Search (LeetCode)", "Search Insert Position (LeetCode)"] },
    { title: "Trees and binary search trees", priority: "Important", depth: "Implement", slug: "trees-binary-search-trees", exercises: ["Maximum Depth of Binary Tree (LeetCode)", "Binary Tree Level Order Traversal (LeetCode)"] },
    { title: "Recursion and backtracking", priority: "Important", depth: "Implement", slug: "recursion-backtracking", exercises: ["Subsets (LeetCode)"] },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Important", depth: "Implement", slug: "graphs-bfs-dfs", exercises: ["Flood Fill (LeetCode)", "Number of Islands (LeetCode)"] },
    { title: "Explaining your projects", slug: "explaining-project-architecture", priority: "Important", depth: "Explain", reason: "Project discussions are common, especially at startups. See the Engineering Projects guide." },
    { title: "Designing small systems", priority: "Optional", depth: "Implement", slug: "designing-small-systems", reason: "Raise to Essential if a design round is confirmed or the posting stresses object-oriented design." },
    { title: "Databases and SQL concepts", priority: "Optional", depth: "Explain", slug: "databases-sql-concepts", reason: "Raise to Important at Implement depth if the posting stresses SQL or a SQL round is confirmed." },
    { title: "Practical feature work and debugging in existing code", priority: "Important", depth: "Apply", slug: "existing-codebase-drills", reason: "Practical and debugging rounds are prominent outside Big Tech in this curriculum's research. Raise to Essential if your recruiter confirms one.", exercises: ["Drill 5 — Diagnose and fix a reported bug (historical bug)", "Drill 3 — Implement a small feature (Gilded Rose: Conjured items)"] },
    { title: "Heaps and priority queues", priority: "Optional", depth: "Implement", slug: "heaps-priority-queues", reason: "Raise if your confirmed format is an algorithm-heavy coding interview." },
    { title: "Sorting and intervals", priority: "Optional", depth: "Implement", slug: "sorting-algorithms-intervals" },
    { title: "Linked lists", priority: "Optional", depth: "Implement", slug: "linked-lists" },
    { title: "Dynamic programming basics", priority: "Optional", depth: "Implement", slug: "dynamic-programming-basics", reason: "Raise only for algorithm-heavy interviews." },
    { title: "Union-find and weighted shortest paths", priority: "Defer", slug: "union-find-shortest-paths", reason: "Advanced; relevant mainly to some Big Tech loops." },
    { title: "System design", priority: "Defer", reason: "Rare at entry level in this curriculum's research; prepare only if a round is confirmed." },
    { title: "Take-home assignments", priority: "Optional", depth: "Implement", slug: "take-home-simulation", reason: "Raise to Essential if your recruiter confirms a take-home." },
  ],
  sequence: [
    "Analyse the posting and confirm the interview format.",
    "Check your current level with the readiness criteria of each Essential topic; skip what you can already demonstrate.",
    "Work on Essential gaps first, adjusted for your confirmed format, then Important ones.",
    "Prepare behavioral stories and your project explanation in parallel.",
    "Apply as soon as you are eligible and reasonably prepared; continue preparing while you wait.",
  ],
  practice: [
    {
      title: "Practise in the conditions you expect",
      note: "Match the confirmed format: timed unseen problems for coding rounds, an unfamiliar repository for debugging rounds, a timed build for take-homes, with or without AI according to the employer's rules.",
    },
    {
      title: "Mock interview",
      note: "Do at least one mock interview with another person in the confirmed format before the real one (editorial recommendation).",
    },
  ],
  readiness: [
    "You meet the posting's eligibility requirements.",
    "You can do every Essential item for your confirmed format, at the depth listed, on unseen problems or tasks.",
    "Editorial practice guide for coding screens: solve two of three unseen Easy-to-Medium problems in about 45 minutes each, explaining complexity. For practical formats, complete a comparable task (fix a bug or add a small feature in unfamiliar code) in about 45 minutes. These are not employer thresholds.",
    "You have behavioral stories ready and can explain one project in depth.",
    "Apply once you are eligible and reasonably prepared; you do not need to finish every unit.",
  ],
  relatedGuides: [
    "/getting-hired/job-description-gap-analysis",
    "/interview-prep/coding-algorithms",
    "/interview-prep/oop-low-level-design",
    "/interview-prep/debugging-code-review",
    "/interview-prep/ai-assisted-coding",
    "/interview-prep/behavioral-interviews",
    "/interview-prep/rapid-fire-technical-questions",
    "/getting-hired/application-strategy",
    "/getting-hired/resume",
    "/getting-hired/interview-failure-recovery",
  ],
  atAGlance: [
    { label: "How it works", value: "The posting and your recruiter's confirmed format set the priorities" },
    { label: "Default", value: "Balanced coding, practical and behavioral preparation" },
  ],
  parallel: ["Behavioral preparation", "explaining-project-architecture", "build-deploy-project"],
  stages: [
    { template: "fluency", topics: ["python-lists", "python-debugging"] },
    { template: "core", topics: ["problem-solving-process", "complexity-analysis", "arrays-strings-patterns", "hash-map-set-patterns"] },
    { template: "dsBreadth", topics: ["stacks-queues", "binary-search", "trees-binary-search-trees", "recursion-backtracking", "graphs-bfs-dfs", "heaps-priority-queues", "sorting-algorithms-intervals", "linked-lists", "dynamic-programming-basics"] },
    { template: "practical", topics: ["existing-codebase-drills", "reading-debugging-unfamiliar-code", "take-home-simulation"], guides: ["debugging-code-review", "practical-coding-assessments", "take-home-assignments"] },
    { template: "simulate", topics: [], note: "Read the posting and ask your recruiter about the format first: a confirmed format overrides these defaults.", guides: ["coding-algorithms", "behavioral-interviews", "oop-low-level-design", "ai-assisted-coding", "project-deep-dives"] },
    { template: "job", topics: ["git-pull-requests", "automated-testing", "code-review", "classes-objects", "ai-assisted-engineering", "exceptions-error-handling"] },
  ],
};

export default guide;
