import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "amazon",
  title: "Amazon Software Development Engineer (Early Career)",
  category: "Company",
  description: "Online assessment, coding, object-oriented design and Leadership Principles preparation for Amazon's early-career SDE roles.",
  level: "Early career",
  overview:
    "Amazon's early-career Software Development Engineer (SDE I) roles start with an online assessment, followed by an interview loop. Amazon publishes unusually detailed guidance: coding without an IDE, well-tested code, data structures and algorithms, object-oriented design, broad computer science fundamentals, and behavioral questions built on its Leadership Principles. Compared with other Big Tech paths, prepare more for object-oriented design and for Leadership Principle stories with deep follow-up questions. Formats vary by team and location; confirm yours with your recruiter.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "In this curriculum's review of 10 US early-career SDE postings (25 November 2026), 9 required a current or completed degree in computer science or a related field; one accepted equivalent experience. This is stricter than some other employers' \"or equivalent experience\" wording, so read each posting.",
        "Postings asked for one general-purpose language and knowledge of data structures, algorithms and/or object-oriented design. Half listed experience with AI-assisted development tools as a basic qualification.",
        "Graduation timing, location and work authorization are set per posting. Amazon's Students & Graduates page lists current programs.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Official: Amazon's online assessment page, interview topics page, interview loop and Leadership Principles pages, and postings (checked 25 November 2026).",
        "Candidate-reported (2 recent new-grad reports): Leadership Principle questions in most rounds, low-level and API design rounds, and questions about how the candidate checks AI-generated code. Treat these as possible, not guaranteed.",
        "Not established: the exact loop for your team, whether a design round is included, and passing criteria. Priorities below are editorial recommendations built on this evidence.",
      ],
    },
    {
      heading: "Tools and AI",
      items: [
        "Online assessment (official): during the coding part you may use publicly accessible online resources such as language documentation, but not sites that require a login or private repositories.",
        "Live interviews: no public Amazon page on AI use was found. Secondary reporting (Business Insider, February 2025) says candidates are told not to use generative AI unless explicitly permitted. Practise without AI and confirm the rules with your recruiter.",
        "Separately, be ready to explain how you use and verify AI coding tools at work: half of the reviewed postings ask for that experience.",
      ],
    },
    {
      heading: "If your interview is already scheduled",
      items: [
        "Prioritize: a practice online assessment, your Leadership Principle story bank, and the Essential coding topics you cannot yet do reliably.",
        "Drop Optional and Defer items. Do one timed object-oriented design practice once the Unit 3 topics are available, or practise modelling a small system with classes in the meantime.",
      ],
    },
  ],
  process: [
    "Online assessment (official, university SDE roles): a coding assessment (about 70 minutes), a Workstyles assessment based on the Leadership Principles (about 15 minutes), a Work Simulation of day-to-day SDE scenarios (about 60 minutes) and a short survey. Content may vary by country.",
    "Interview loop (official guidance for all roles): several interviews of about 45–60 minutes, including one with a Bar Raiser, an interviewer from outside the hiring team.",
    "What candidates report: coding in most rounds, Leadership Principle questions in most rounds, and in some loops a low-level or API design round.",
  ],
  competencies: [
    "Syntactically correct code without an IDE; no pseudocode (official topics page).",
    "Scalable, robust and well-tested code, with edge cases checked (official).",
    "Data structures and algorithms, including how data structures work and their runtimes (official).",
    "Object-oriented design with choices you can defend (official).",
    "Broad computer science fundamentals: databases, operating systems, how the internet works, distributed computing basics (official, at awareness level for entry roles).",
    "Leadership Principles, assessed through behavioral questions using STAR (official).",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Apply", slug: "problem-solving-process", reason: "Every coding round; Amazon evaluates how you reach and test a solution, not just the answer." },
    { title: "Programming fluency in one language", priority: "Essential", depth: "Apply", slug: "python-lists", reason: "Amazon asks for syntactically correct code without an IDE." },
    { title: "Complexity analysis", priority: "Essential", depth: "Apply", slug: "complexity-analysis", reason: "Amazon's topics page asks you to know runtimes and trade-offs." },
    { title: "Testing and dry-running code", priority: "Essential", depth: "Implement", slug: "python-debugging", reason: "Amazon asks for well-tested code with edge cases checked.", exercises: ["Without running it, dry-run one of your earlier solutions on an edge-case input, writing each variable's value in a table."] },
    { title: "Arrays and strings", priority: "Essential", depth: "Apply", slug: "arrays-strings-patterns", reason: "Core of coding assessments and interviews.", exercises: ["Longest Substring Without Repeating Characters (LeetCode)", "Product of Array Except Self (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Apply", slug: "hash-map-set-patterns", reason: "Named in Amazon's data-structure expectations; most common optimization.", exercises: ["Top K Frequent Elements (LeetCode)", "Subarray Sum Equals K (LeetCode)"] },
    { title: "Trees and binary search trees", priority: "Essential", depth: "Apply", slug: "trees-binary-search-trees", reason: "Standard data structure in Amazon's topic list and in coding rounds.", exercises: ["Binary Tree Level Order Traversal (LeetCode)", "Validate Binary Search Tree (LeetCode)"] },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Essential", depth: "Apply", slug: "graphs-bfs-dfs", reason: "Common in coding rounds across Big Tech employers.", exercises: ["Number of Islands (LeetCode)", "Course Schedule (LeetCode)"] },
    { title: "Object-oriented programming and design (forthcoming: Unit 3)", priority: "Essential", depth: "Implement", reason: "Amazon's official topics include object-oriented design, and two recent new-grad reports describe design rounds. A justified priority, not a guaranteed round. Not yet published; until then, practise modelling small systems with classes." },
    { title: "Behavioral preparation", priority: "Essential", depth: "Apply", reason: "Leadership Principles are used in the Workstyles assessment and behavioral evaluation (official). Build 8–10 true STAR stories, map each to two or more principles, and prepare for follow-ups. See Behavioral Interview Preparation." },
    { title: "Heaps and priority queues", priority: "Important", depth: "Implement", slug: "heaps-priority-queues", exercises: ["K Closest Points to Origin (LeetCode)", "Kth Largest Element in an Array (LeetCode)"] },
    { title: "Recursion and backtracking", priority: "Important", depth: "Implement", slug: "recursion-backtracking", exercises: ["Subsets (LeetCode)", "Combination Sum (LeetCode)"] },
    { title: "Binary search", priority: "Important", depth: "Implement", slug: "binary-search", exercises: ["Search in Rotated Sorted Array (LeetCode)"] },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)", "Min Stack (LeetCode)"] },
    { title: "Linked lists", priority: "Important", depth: "Implement", slug: "linked-lists", reason: "LRU Cache combines a linked list with a hash map and doubles as small-design practice.", exercises: ["Reverse Linked List (LeetCode)", "LRU Cache (LeetCode)"] },
    { title: "Sorting and intervals", priority: "Important", depth: "Implement", slug: "sorting-algorithms-intervals", exercises: ["Insert Interval (LeetCode)"] },
    { title: "Dynamic programming basics", priority: "Important", depth: "Implement", slug: "dynamic-programming-basics", exercises: ["House Robber (LeetCode)", "Coin Change (LeetCode)"] },
    { title: "How the internet and HTTP work (forthcoming: Unit 4)", priority: "Important", depth: "Explain", reason: "Internet fundamentals are on Amazon's official topic list. Not yet published." },
    { title: "Databases and SQL concepts (forthcoming: Unit 4)", priority: "Important", depth: "Explain", reason: "Amazon's topics include relational versus non-relational databases at a concept level. Not yet published." },
    { title: "Processes, threads and memory (forthcoming: Unit 4)", priority: "Important", depth: "Explain", reason: "Operating-system topics that affect performance are on Amazon's official list. Not yet published." },
    { title: "AI-assisted engineering and verification (forthcoming: Unit 5)", priority: "Important", depth: "Explain", reason: "Half the reviewed postings list AI-tool experience, and candidates report being asked how they check AI output. Not yet published." },
    { title: "Explaining your projects", priority: "Important", depth: "Explain", reason: "Behavioral answers and resume discussions draw on your projects. See the Engineering Projects guide." },
    { title: "System design", priority: "Optional", depth: "Recognize", reason: "Amazon's guidance mentions system design generally; it is explicit for SDE II, not SDE I." },
    { title: "Union-find and weighted shortest paths", priority: "Optional", depth: "Implement", slug: "union-find-shortest-paths", reason: "Advanced; study only after the core patterns." },
    { title: "Design-pattern catalogues and deep distributed systems", priority: "Defer", reason: "Beyond entry-level expectations; learn common patterns through object-oriented design practice instead." },
  ],
  sequence: [
    "Check eligibility in the posting, including the degree requirement.",
    "Skip what you can already demonstrate using the Unit 1 and Unit 2 readiness checklists.",
    "Build the Essential coding topics, then the Important ones, using the selected problems.",
    "Start your Leadership Principle story bank early and refine it with a friend asking follow-up questions.",
    "Practise object-oriented design of small systems (Unit 3, forthcoming).",
    "Take Amazon's practice online assessment and practise timed coding without an IDE.",
    "Apply once eligible and close to the readiness criteria; keep practising during the process.",
  ],
  practice: [
    {
      title: "Amazon online assessment preparation (official)",
      url: "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa",
      note: "Read the description of each part and take the practice test linked on the page. The Work Simulation tests judgment in realistic SDE scenarios rather than algorithm speed.",
    },
    {
      title: "Leadership Principle follow-up drill",
      note: "For each story, have someone ask \"What did you personally do?\", \"What data did you use?\" and \"What would you do differently?\" two or three times.",
    },
    {
      title: "Timed coding without an IDE",
      note: "Unseen problems in about 45 minutes in a plain editor, testing by hand before you say you are done.",
    },
  ],
  resources: [
    {
      title: "Amazon Leadership Principles",
      url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles",
      provider: "Amazon (official)",
      type: "Article",
      instructions: "Read all principles and note which of your stories demonstrate each one.",
    },
    {
      title: "Software Development Interview Topics",
      url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics",
      provider: "Amazon (official)",
      type: "Article",
      instructions: "Read the full topic list; use it to check coverage, not as a reading list.",
    },
    {
      title: "Interview loop",
      url: "https://www.amazon.jobs/content/en/how-we-hire/interview-loop",
      provider: "Amazon (official)",
      type: "Article",
      instructions: "Read the sections on behavioral questions, the STAR method and what to expect on interview day.",
    },
  ],
  readiness: [
    "Editorial practice guide, not an Amazon threshold: solve two of three unseen Medium-level problems in about 45 minutes each without an IDE or AI, testing by hand and explaining complexity.",
    "You have completed a practice online assessment, including the Work Simulation section.",
    "You can design and code the classes for a small system in about 45 minutes and adapt it to a requirement change (once Unit 3 is published, use its readiness criteria).",
    "You have 8–10 true STAR stories, each mapped to at least two Leadership Principles, that hold up to two levels of follow-up questions.",
    "You can explain at a basic level how a web request travels over the internet, what a process and a thread are, and when to choose a relational or non-relational database.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/application-strategy",
    "/getting-hired/resume",
    "/getting-hired/interview-failure-recovery",
  ],
  sources: [
    { title: "Amazon — Online assessment prep for SDE roles (official)", url: "https://www.amazon.jobs/content/en/how-we-hire/university/sde-oa" },
    { title: "Amazon — Software Development Interview Topics (official)", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "Amazon — Interview loop (official)", url: "https://www.amazon.jobs/content/en/how-we-hire/interview-loop" },
    { title: "Amazon — Leadership Principles (official)", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
    { title: "Amazon — Your complete guide to the Amazon interview process (official)", url: "https://www.aboutamazon.com/news/workplace/amazon-interview-guide" },
    { title: "Amazon — Students & graduates (official)", url: "https://www.amazon.jobs/content/en/career-programs/university" },
    { title: "ITPro — Amazon bans AI tools during job interviews (third-party report, 2025)", url: "https://www.itpro.com/business/careers-and-training/amazon-bans-ai-tools-during-job-interviews" },
    { title: "Candidate report — 2026 Amazon New Grad SDE I OA and virtual onsite (FastPrep)", url: "https://www.fastprep.io/experience/2026-amazon-new-grad-sde-i-oa-and-virtual-onsite-1-experience-4up84xayt9" },
  ],
};

export default guide;
