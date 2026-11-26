import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "microsoft",
  title: "Microsoft Software Engineer (Entry Level)",
  category: "Company",
  description: "Runnable code, explicit testing, data structures and STAR with Reflection for Microsoft's entry-level software engineering roles.",
  level: "Early career",
  overview:
    "Microsoft's official guidance is specific about coding interviews: code in your strongest language, no pseudocode, in a tool where you can run and compile your code, and test your solution before you say you are done. Behavioral questions use STAR with an added Reflection step. Compared with Google, practise in a runnable environment and finish every solution with explicit tests. Microsoft publishes general guidance for all levels, not a specific entry-level loop, so confirm your process with your recruiter.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "No US entry-level software engineering posting was found during this curriculum's research (November 2026); openings are seasonal. A general Software Engineer posting reviewed then required a bachelor's degree and 2+ years of coding experience, or equivalent experience: that is above entry level.",
        "When an entry-level or university posting opens, read its degree, graduation-date and location requirements directly.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Official: Microsoft's How we hire, Technical interviewing and Interview tips pages (checked 25 November 2026). They apply to all levels; their system design and distributed systems section is not specific to entry level.",
        "Candidate evidence for new-grad loops is weak: anonymous 2026 reports seen only as search summaries mention coding problems (graphs, sliding window, caching), teamwork questions and some design questions.",
        "Priorities below are editorial recommendations built on Microsoft's guidance.",
      ],
    },
    {
      heading: "Tools and AI",
      items: [
        "Official: during assessments and interviews, demonstrate your own skills without outside assistance unless explicitly permitted.",
        "Official: coding uses a third-party tool where you can run and compile code. Practise in a runnable environment and also be ready to reason without running code.",
      ],
    },
    {
      heading: "If your interview is already scheduled",
      items: [
        "Practise unseen problems in a runnable editor, ending each with explicit tests: normal cases, boundaries, empty and invalid input.",
        "Prepare STAR stories with a Reflection step. Drop Optional and Defer items.",
      ],
    },
  ],
  process: [
    "Official: most processes include 2–4 conversations of up to an hour each; technical interviews are about 45 minutes.",
    "Official: code in the language you are strongest in, without pseudocode, in a tool where you can run and compile code; expect to test your solution.",
    "The number and type of rounds for entry-level roles are not published; confirm with your recruiter.",
  ],
  competencies: [
    "Clarifying ambiguous requirements and planning before you code (official).",
    "Clean, working code in your strongest language; no pseudocode (official).",
    "Testing your own solution: boundaries, edge cases and what could break it (official).",
    "Data structures and algorithms, including sorting and recursion, and their trade-offs (official).",
    "Behavioral answers using STAR plus Reflection, showing traits such as a growth mindset and collaboration (official).",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Apply", slug: "problem-solving-process", reason: "Microsoft's guidance asks you to clarify ambiguity and plan before implementing." },
    { title: "Programming fluency in one language", priority: "Essential", depth: "Apply", slug: "python-lists", reason: "You code in your strongest language with no pseudocode." },
    { title: "Testing and dry-running code", priority: "Essential", depth: "Implement", slug: "python-debugging", reason: "Microsoft says interviewers are likely to expect you to test your solution before saying you are done.", exercises: ["Without running it, dry-run one of your earlier solutions on an edge-case input, writing each variable's value in a table."] },
    { title: "Automated testing", priority: "Essential", depth: "Implement", slug: "automated-testing", reason: "Microsoft says interviewers are likely to expect you to test your solution; this topic teaches how to choose test cases (normal, boundary, empty, invalid) and write them." },
    { title: "AI-assisted engineering and verification", priority: "Defer", slug: "ai-assisted-engineering", reason: "Microsoft asks candidates to demonstrate their own skills without outside assistance unless explicitly permitted; practise interviews without AI. AI verification remains professional preparation." },
    { title: "Complexity analysis", priority: "Essential", depth: "Apply", slug: "complexity-analysis", reason: "Microsoft's technical guidance lists big-O analysis." },
    { title: "Arrays and strings", priority: "Essential", depth: "Apply", slug: "arrays-strings-patterns", reason: "Core of coding interviews.", exercises: ["Best Time to Buy and Sell Stock (LeetCode)", "Longest Substring Without Repeating Characters (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Apply", slug: "hash-map-set-patterns", reason: "Hash maps and hash sets are named in Microsoft's guidance.", exercises: ["Longest Consecutive Sequence (LeetCode)"] },
    { title: "Trees and binary search trees", priority: "Essential", depth: "Apply", slug: "trees-binary-search-trees", reason: "Trees and tries are named in Microsoft's guidance.", exercises: ["Validate Binary Search Tree (LeetCode)", "Binary Tree Level Order Traversal (LeetCode)"] },
    { title: "Sorting and intervals", priority: "Essential", depth: "Implement", slug: "sorting-algorithms-intervals", reason: "Microsoft's guidance names sorting algorithms with O(n log n) behavior; be able to explain and implement one.", exercises: ["Sort an Array (LeetCode)", "Insert Interval (LeetCode)"] },
    { title: "Recursion and backtracking", priority: "Essential", depth: "Implement", slug: "recursion-backtracking", reason: "Recursion is named in Microsoft's guidance.", exercises: ["Generate Parentheses (LeetCode)", "Subsets (LeetCode)"] },
    { title: "Behavioral preparation", priority: "Essential", reason: "Microsoft's interview tips describe STAR with an added Reflection step and the culture traits it looks for. See Behavioral Interview Preparation and add a reflection to each story." },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Important", depth: "Implement", slug: "graphs-bfs-dfs", reason: "Graphs are named in Microsoft's guidance.", exercises: ["Number of Islands (LeetCode)", "Rotting Oranges (LeetCode)"] },
    { title: "Linked lists", priority: "Important", depth: "Implement", slug: "linked-lists", exercises: ["Reverse Linked List (LeetCode)", "LRU Cache (LeetCode)"] },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)"] },
    { title: "Binary search", priority: "Important", depth: "Implement", slug: "binary-search", exercises: ["Search Insert Position (LeetCode)", "Search in Rotated Sorted Array (LeetCode)"] },
    { title: "Classes and objects", priority: "Important", depth: "Implement", slug: "classes-objects", reason: "Object-oriented code in your strongest language, with tests, is part of writing clean working solutions." },
    { title: "Composition, inheritance and interfaces", priority: "Important", depth: "Implement", slug: "composition-inheritance-interfaces" },
    { title: "Designing small systems", priority: "Important", depth: "Implement", slug: "designing-small-systems", reason: "Design questions appear in some candidate reports; this is not a confirmed universal round.", exercises: ["Shopping cart: requirements — add and remove items with quantities, compute the total, apply one discount code (percentage or fixed amount)."] },
    { title: "Explaining your projects", priority: "Important", depth: "Explain", reason: "Project and resume discussions were common in adjacent Microsoft internship reports. See the Engineering Projects guide." },
    { title: "Heaps and priority queues", priority: "Optional", depth: "Implement", slug: "heaps-priority-queues", exercises: ["Kth Largest Element in an Array (LeetCode)"] },
    { title: "Dynamic programming basics", priority: "Optional", depth: "Implement", slug: "dynamic-programming-basics", exercises: ["Coin Change (LeetCode)"] },
    { title: "System design", priority: "Optional", depth: "Recognize", reason: "Microsoft's page describes system design and distributed systems for all levels; for entry roles, recognize the vocabulary and ask your recruiter whether it applies." },
    { title: "Union-find and weighted shortest paths", priority: "Defer", slug: "union-find-shortest-paths", reason: "No Microsoft evidence supports this for entry-level roles." },
  ],
  sequence: [
    "Check for an open entry-level posting and its requirements.",
    "Skip what you already know using the Unit 1 and Unit 2 readiness checklists.",
    "Build the Essential topics in a runnable editor, ending every solution with explicit tests.",
    "Prepare STAR stories with a Reflection step in parallel.",
    "Add the Important topics, then timed practice.",
    "Apply when eligible and close to the readiness criteria.",
  ],
  practice: [
    {
      title: "Runnable-code practice with tests",
      note: "Solve unseen problems in about 45 minutes in an editor where code runs; before declaring done, write and run tests for boundaries, empty input and invalid input.",
    },
    {
      title: "STAR plus Reflection",
      note: "For each story, add one or two sentences on what you learned and what you would do differently.",
    },
  ],
  resources: [
    {
      title: "Technical interviewing",
      url: "https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing",
      provider: "Microsoft (official)",
      type: "Article",
      instructions: "Read the coding, testing and data structures sections. The system design section applies to all levels; for entry roles, skim it.",
    },
    {
      title: "Interview tips",
      url: "https://careers.microsoft.com/v2/global/en/hiring-tips/interview-tips.html",
      provider: "Microsoft (official)",
      type: "Article",
      instructions: "Read the STAR(R) guidance and the culture attributes.",
    },
    {
      title: "How we hire",
      url: "https://careers.microsoft.com/v2/global/en/hiring-tips.html",
      provider: "Microsoft (official)",
      type: "Article",
      instructions: "Read the process overview and the guidance on AI and outside assistance.",
    },
  ],
  readiness: [
    "Editorial practice guide, not a Microsoft threshold: solve two of three unseen Medium-level problems in about 45 minutes each in a runnable editor, finishing each with explicit tests and a complexity explanation.",
    "You can explain and implement one O(n log n) sorting algorithm.",
    "You have 6–8 STAR stories, each with a Reflection.",
    "You can explain one substantial project end to end.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/oop-low-level-design",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/application-strategy",
    "/getting-hired/interview-failure-recovery",
  ],
  sources: [
    { title: "Microsoft — Technical interviewing (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing" },
    { title: "Microsoft — Interview tips (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips/interview-tips.html" },
    { title: "Microsoft — How we hire (official)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips.html" },
    { title: "Exponent — Microsoft entry-level interview experiences (third-party, candidate reports)", url: "https://www.tryexponent.com/guides/microsoft-entry-level-software-engineer-interview/experiences" },
  ],
};

export default guide;
