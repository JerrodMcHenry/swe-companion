import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "meta",
  title: "Meta Software Engineer (University Grad)",
  category: "Company",
  description: "Fast, accurate coding, testing and communication, with conditional preparation for Meta's AI-assisted interviews.",
  level: "Early career",
  overview:
    "Meta's process runs from a recruiter call through an initial screen to a full interview loop. Its guidance emphasizes solving coding problems quickly and accurately without running code, finding your own bugs, and communicating. Meta also says many of its interviews now include a built-in AI assistant that candidates are expected to use, which shifts some emphasis toward reading, debugging and extending existing code. Whether an entry-level loop includes an AI-assisted round is not confirmed, so prepare for both formats and ask your recruiter. Evidence for Meta's current entry-level loop is limited.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "On 25 November 2026, Meta's job search showed no generalist software engineering University Grad posting; the University Grad results were hardware, research and PhD roles. Openings are seasonal, so check again during hiring season.",
        "Because no current posting could be reviewed, degree, graduation-date and experience requirements cannot be confirmed here. Read the posting when one opens.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Official: Meta's hiring-process page and FAQ (current), including the statement about the AI assistant, and Meta's software engineering preparation post (last updated 2022, so its format details may be out of date).",
        "Third-party and candidate reports describe an AI-enabled coding round piloted from October 2025 that replaces one onsite coding round for some candidates. Sources disagree on how widely it is used, and none confirms it for new graduates.",
        "One late-2025 new-grad report described several coding tasks and a behavioral conversation, with no design round. This is one report, not a rule.",
        "Priorities below are editorial recommendations built on this limited evidence.",
      ],
    },
    {
      heading: "Tools and AI",
      items: [
        "Official: many interviews include an AI assistant built into the interview environment, and candidates in those interviews are expected to use it. Outside AI tools are not mentioned as permitted.",
        "For standard coding rounds, Meta's earlier guidance advises practising without a compiler. Prepare both ways until your recruiter tells you which formats you will have.",
      ],
    },
    {
      heading: "If your interview is already scheduled",
      items: [
        "Ask the recruiter whether an AI-assisted round is included. If yes, add practice reading and debugging an unfamiliar codebase with an AI assistant; if no, focus on fast, tested coding without running code.",
        "Drop Optional and Defer items; keep practising behavioral stories.",
      ],
    },
  ],
  process: [
    "Official: a recruiter call, an initial screen, then a full loop; Meta says the process typically takes 2–3 months.",
    "Official (2022 guidance): the initial coding screen was about 45 minutes and could include more than one problem; the loop included coding, a design interview matched to the candidate's background, and a behavioral interview. Treat these details as possibly outdated.",
    "Official (current): many interviews now include a built-in AI assistant; these evaluate problem solving, coding, debugging and collaboration.",
  ],
  competencies: [
    "Solving coding problems accurately and efficiently, sometimes more than one per session.",
    "Finding and fixing your own bugs without running the code.",
    "Explaining your reasoning and complexity clearly.",
    "In AI-assisted rounds: reading and extending existing code, using the assistant well and verifying its output.",
    "Behavioral examples using STAR.",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Apply", slug: "problem-solving-process", reason: "Meta's guidance stresses explaining your approach and driving to a working solution efficiently." },
    { title: "Programming fluency in one language", priority: "Essential", depth: "Apply", slug: "python-lists", reason: "Speed and accuracy depend on writing correct code without looking things up." },
    { title: "Complexity analysis", priority: "Essential", depth: "Apply", slug: "complexity-analysis", reason: "Big-O is part of Meta's published coding preparation." },
    { title: "Testing and dry-running code", priority: "Essential", depth: "Implement", slug: "python-debugging", reason: "Meta's guidance asks you to find and fix bugs yourself; debugging is named in its current interviews.", exercises: ["Without running it, dry-run one of your earlier solutions on an edge-case input, writing each variable's value in a table."] },
    { title: "Arrays and strings", priority: "Essential", depth: "Apply", slug: "arrays-strings-patterns", reason: "Arrays and strings are named in Meta's coding preparation.", exercises: ["Squares of a Sorted Array (LeetCode)", "Container With Most Water (LeetCode)", "Find All Anagrams in a String (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Apply", slug: "hash-map-set-patterns", reason: "Hash maps are named in Meta's coding preparation.", exercises: ["Subarray Sum Equals K (LeetCode)", "Valid Sudoku (LeetCode)"] },
    { title: "Trees and binary search trees", priority: "Essential", depth: "Apply", slug: "trees-binary-search-trees", reason: "Binary trees are named in Meta's coding preparation.", exercises: ["Binary Tree Right Side View (LeetCode)", "Lowest Common Ancestor of a Binary Search Tree (LeetCode)", "Diameter of Binary Tree (LeetCode)"] },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Essential", depth: "Apply", slug: "graphs-bfs-dfs", reason: "Graphs, BFS and DFS are named in Meta's coding preparation.", exercises: ["Clone Graph (LeetCode)", "Number of Islands (LeetCode)"] },
    { title: "Behavioral preparation", priority: "Essential", reason: "Meta's guidance describes a behavioral interview using STAR, covering your experience, motivation and collaboration. See Behavioral Interview Preparation." },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)", "Evaluate Reverse Polish Notation (LeetCode)"] },
    { title: "Linked lists", priority: "Important", depth: "Implement", slug: "linked-lists", exercises: ["Merge Two Sorted Lists (LeetCode)", "Remove Nth Node From End of List (LeetCode)"] },
    { title: "Binary search", priority: "Important", depth: "Implement", slug: "binary-search", exercises: ["Find First and Last Position of Element in Sorted Array (LeetCode)", "Find Minimum in Rotated Sorted Array (LeetCode)"] },
    { title: "Heaps and priority queues", priority: "Important", depth: "Implement", slug: "heaps-priority-queues", exercises: ["K Closest Points to Origin (LeetCode)"] },
    { title: "Recursion and backtracking", priority: "Important", depth: "Implement", slug: "recursion-backtracking", exercises: ["Subsets (LeetCode)", "Permutations (LeetCode)"] },
    { title: "Sorting and intervals", priority: "Important", depth: "Implement", slug: "sorting-algorithms-intervals", exercises: ["Non-overlapping Intervals (LeetCode)"] },
    { title: "Reading and debugging unfamiliar code, and code review (forthcoming: Unit 5)", priority: "Important", depth: "Implement", reason: "Conditional on an AI-assisted round: Meta advises being comfortable reading, debugging and building on existing code. Not yet published." },
    { title: "AI-assisted engineering and verification (forthcoming: Unit 5)", priority: "Important", depth: "Implement", reason: "Conditional on an AI-assisted round: use the assistant for well-defined subtasks and verify everything it produces. Not yet published." },
    { title: "Dynamic programming basics", priority: "Optional", depth: "Implement", slug: "dynamic-programming-basics", exercises: ["Climbing Stairs (LeetCode)", "Maximum Subarray (LeetCode)"] },
    { title: "Union-find and weighted shortest paths", priority: "Optional", depth: "Implement", slug: "union-find-shortest-paths", reason: "Advanced; study only after the core patterns." },
    { title: "Designing small systems", priority: "Optional", depth: "Implement", slug: "designing-small-systems", reason: "Conditional: no design round was observed in the reviewed new-grad report. Prepare only if your recruiter mentions one." },
    { title: "System design", priority: "Defer", reason: "No design round was reported for new graduates; one third-party guide also says none at E3. Confirm with your recruiter." },
  ],
  sequence: [
    "Check for an open University Grad posting and its requirements.",
    "Skip what you already know using the Unit 1 and Unit 2 readiness checklists.",
    "Build the Essential coding topics, then practise solving problems faster: aim for clean, tested solutions in less than a full interview slot.",
    "Prepare behavioral stories in parallel.",
    "Ask your recruiter about AI-assisted rounds; if confirmed, add existing-codebase and AI-assisted practice.",
    "Apply when eligible and close to the readiness criteria.",
  ],
  practice: [
    {
      title: "Timed multi-problem sessions (editorial)",
      note: "Practise solving two unseen problems in one 45-minute session in a plain editor without running code. This reflects Meta's earlier published guidance; actual sessions may differ.",
    },
    {
      title: "AI-assisted session (conditional)",
      note: "If an AI-assisted round is confirmed: open an unfamiliar multi-file project, use an AI assistant to understand and extend it, and check every change it suggests with tests before accepting it.",
    },
  ],
  resources: [
    {
      title: "Meta hiring process",
      url: "https://www.metacareers.com/hiring-process/",
      provider: "Meta (official)",
      type: "Article",
      instructions: "Read the stages and the FAQ, including the answer on AI in technical interviews.",
    },
    {
      title: "Preparing for your software engineering interview at Meta",
      url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/",
      provider: "Meta Careers (official, updated 2022)",
      type: "Article",
      instructions: "Read the coding and behavioral advice; treat format details as possibly out of date.",
    },
  ],
  readiness: [
    "Editorial practice guide, not a Meta threshold: solve two unseen Medium-level problems in one 45-minute session without running code, explaining complexity and testing by hand.",
    "If an AI-assisted round is confirmed: complete a practice session extending an unfamiliar codebase with an AI assistant, catching at least one incorrect suggestion.",
    "You have 6–8 behavioral stories ready using STAR.",
    "You can explain one substantial project end to end.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/application-strategy",
    "/getting-hired/interview-failure-recovery",
  ],
  sources: [
    { title: "Meta — Hiring process and FAQ (official)", url: "https://www.metacareers.com/hiring-process/" },
    { title: "Meta — Preparing for your software engineering interview (official, 2022)", url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/" },
    { title: "Meta — Job search, University Grad (official; checked 25 November 2026)", url: "https://www.metacareers.com/jobsearch/?q=software%20engineer%20university%20grad" },
    { title: "interviewing.io — Meta's AI-assisted coding interview (third-party)", url: "https://interviewing.io/blog/how-to-use-ai-in-meta-s-ai-assisted-coding-interview-with-real-prompts-and-examples" },
    { title: "Candidate report — Meta software engineer onsite questions (FastPrep)", url: "https://www.fastprep.io/experience/meta-software-engineer-onsite-questions-3-experiences-43fayxndgv" },
  ],
};

export default guide;
