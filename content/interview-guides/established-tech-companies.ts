import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "established-tech-companies",
  title: "Established Technology Companies",
  category: "Employer type",
  description: "Public or mature technology companies outside the Big Tech guides: a balanced path of coding interviews, fundamentals, testing and behavioral preparation.",
  level: "Entry level",
  overview:
    "Established technology companies — mature or public technology employers that do not have their own guide here (for example Pinterest, DoorDash, Roblox or Affirm) — usually run structured new-grad hiring with coding interviews and a behavioral conversation, but their processes are less documented than Big Tech's and differ between companies. Do not assume a FAANG-style loop: some use third-party technical screens, some include knowledge questions, and some invite AI use in designated parts. This path is a qualified, balanced default: Implement-depth algorithms with good coverage, object-oriented basics, testing and debugging, the engineering fundamentals that postings list, and behavioral preparation. If your target has its own guide (Google, Amazon, Meta, Microsoft, Apple), use that instead; for any other company, adjust this default with the posting and your recruiter.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "Several established technology companies run formal new-grad roles (for example Pinterest, DoorDash, Roblox and Palantir in this curriculum's research), often with a degree requirement and sometimes internship experience.",
        "Titles are not always entry level: Affirm's \"Software Engineer I\" posting expected prior experience launching backend systems, navigating large codebases and reviewing code. Read the requirements, not just the title.",
        "Postings set job requirements, not interview content: DoorDash's new-grad posting requires SQL, version control and unit tests; Pinterest's requires data structures and software design and asks for judgment in using AI tools.",
        "Some roles (for example defence-related work) require security-clearance eligibility.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Official: Pinterest's hiring page says interviews assess individual skills and AI fluency; in designated parts (such as a take-home or a section of a live screen) candidates may be invited to use AI, and for any live question candidates should assume AI is not permitted unless told otherwise. GitLab's official technical interview is a merge-request review with AI encouraged, but its roles start above entry level, so it is boundary evidence only.",
        "Candidate-reported (anonymous summaries, T2): a third-party technical screen with knowledge questions plus coding, followed by behavioral and resume rounds, at one large retailer's technology organization.",
        "Weak evidence overall: new-grad interview content for most companies in this segment was not verified. The priorities below are qualified defaults, not a description of any one company's process.",
        "Review date for this path: 2027-05-25 (AI policies: 2027-02-25).",
      ],
    },
    {
      heading: "If your recruiter confirms a different format",
      items: [
        "Algorithm-heavy loop (Big Tech style): follow the Coding & Algorithms guide and raise trees, graphs and recursion to Essential at Apply depth.",
        "Design or object-oriented round: follow the OOP & Low-Level Design guide and raise Designing Small Systems to Essential.",
        "Practical, debugging or code-review round: follow the Debugging & Code Review guide.",
        "AI-designated section: follow the AI-Assisted Coding guide for that section only.",
        "Knowledge questions in a screen: use the Rapid-Fire Technical Questions guide.",
      ],
    },
    {
      heading: "Interview questions, behavioral and practical preparation",
      items: [
        "Question categories: algorithmic coding with complexity; object-oriented and small design questions; testing your solution; knowledge questions on fundamentals listed in the posting; resume and project discussions; behavioral.",
        "Behavioral: collaboration, ownership, conflict, learning and impact, with specific results; prepare stories that survive follow-up questions.",
        "Practical engineering: add debugging or AI-designated practice only when your recruiter confirms such a section; the role section below covers on-the-job skills.",
      ],
    },
    {
      heading: "Application guidance",
      items: [
        "Use the company's own guide if it has one here; otherwise read the posting with Job Description Gap Analysis.",
        "Apply when new-grad roles open (often early in the season); referrals and internships help.",
        "Ask the recruiter about stages, tools, language choice and any AI-designated sections.",
      ],
    },
  ],
  process: [
    "Commonly: an online assessment or technical phone screen (sometimes run by a third-party interviewing service), then several interviews with coding, possibly design or knowledge questions, and a behavioral or hiring-manager conversation.",
    "Some companies include a take-home or an AI-designated section.",
    "The process varies by company and team; ask your recruiter for the stages and tool rules.",
  ],
  competencies: [
    "Programming fluency and algorithmic problem solving with complexity analysis.",
    "Object-oriented fundamentals and small-scale design.",
    "Testing and debugging your own code.",
    "Engineering fundamentals that postings list (Git, SQL, HTTP).",
    "Technical communication and discussing your projects.",
    "Behavioral evidence of collaboration and ownership.",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Implement", slug: "problem-solving-process", reason: "Coding interviews are the default technical format in structured new-grad hiring.", exercises: ["Majority Element (LeetCode)", "Do a mock interview with another person who gives you an unfamiliar problem and asks follow-ups."] },
    { title: "Complexity analysis", priority: "Essential", depth: "Implement", slug: "complexity-analysis", reason: "Expected in coding rounds." },
    { title: "Arrays and strings", priority: "Essential", depth: "Implement", slug: "arrays-strings-patterns", reason: "Most common coding-interview inputs.", exercises: ["Best Time to Buy and Sell Stock (LeetCode)", "Product of Array Except Self (LeetCode)", "Longest Substring Without Repeating Characters (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Implement", slug: "hash-map-set-patterns", reason: "The most broadly useful pattern.", exercises: ["Top K Frequent Elements (LeetCode)", "Longest Consecutive Sequence (LeetCode)"] },
    { title: "Automated testing", priority: "Essential", depth: "Implement", slug: "automated-testing", reason: "Named in new-grad postings in this segment (for example DoorDash) and expected when you finish a coding solution." },
    { title: "Behavioral preparation", priority: "Essential", reason: "Behavioral or hiring-manager conversations are part of structured new-grad loops." },
    { title: "Trees and binary search trees", priority: "Important", depth: "Implement", slug: "trees-binary-search-trees", exercises: ["Maximum Depth of Binary Tree (LeetCode)", "Validate Binary Search Tree (LeetCode)"] },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Important", depth: "Implement", slug: "graphs-bfs-dfs", exercises: ["Number of Islands (LeetCode)", "Course Schedule (LeetCode)"] },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)", "Daily Temperatures (LeetCode)"] },
    { title: "Binary search", priority: "Important", depth: "Implement", slug: "binary-search" },
    { title: "Recursion and backtracking", priority: "Important", depth: "Implement", slug: "recursion-backtracking" },
    { title: "Classes and objects", priority: "Important", depth: "Implement", slug: "classes-objects", reason: "Software design appears in postings (for example Pinterest); object-oriented code is a common follow-up." },
    { title: "Git and pull requests", priority: "Important", depth: "Implement", slug: "git-pull-requests", reason: "Version control is named in postings in this segment (for example DoorDash)." },
    { title: "Databases and SQL concepts", priority: "Important", depth: "Explain", slug: "databases-sql-concepts", reason: "SQL is named in some postings (for example DoorDash) as a job requirement; prepare SQL interview questions only if a round is confirmed." },
    { title: "AI-assisted engineering and verification", priority: "Important", depth: "Implement", slug: "ai-assisted-engineering", reason: "Some companies (officially, Pinterest) invite AI use in designated interview parts and ask for AI judgment on the job; assume AI is not allowed elsewhere unless told." },
    { title: "Explaining your projects", slug: "explaining-project-architecture", priority: "Important", depth: "Explain", reason: "Resume and project discussions were reported." },
    { title: "Designing small systems", priority: "Optional", depth: "Implement", slug: "designing-small-systems", reason: "Raise to Essential if a design round is confirmed." },
    { title: "Rapid-fire technical knowledge questions", priority: "Optional", depth: "Explain", reason: "Knowledge questions were reported in one third-party screen; see the Rapid-Fire Technical Questions guide." },
    { title: "Heaps and priority queues", priority: "Optional", depth: "Implement", slug: "heaps-priority-queues" },
    { title: "Dynamic programming basics", priority: "Optional", depth: "Implement", slug: "dynamic-programming-basics", reason: "Raise only for algorithm-heavy loops." },
    { title: "System design", priority: "Defer", reason: "Rare for new grads; prepare only if a round is confirmed." },
    { title: "Take-home assignments", priority: "Optional", depth: "Implement", slug: "take-home-simulation", reason: "Pinterest names a take-home as one place where it may invite AI use (official); prepare only if a take-home is confirmed." },
  ],
  sequence: [
    "Check whether your target has its own company guide; if so, use it. Otherwise, read the posting and ask the recruiter about the process.",
    "Build the Essential coding topics to Implement depth, then the Important ones, finishing every solution with tests.",
    "Cover Classes and Objects, Git and the posting's listed fundamentals (SQL, HTTP) at the depth shown.",
    "Prepare behavioral stories and a project explanation alongside coding practice.",
    "Adjust for any confirmed format (see the guidance above); do timed mock interviews in that format.",
    "Apply when new-grad roles open; keep preparing while you interview.",
  ],
  practice: [
    {
      title: "Balanced mock loop (editorial)",
      note: "One 45-minute unseen coding problem with tests, one 15-minute knowledge or project discussion and one behavioral question, ideally with another person. Repeat weekly while applying.",
    },
  ],
  readiness: [
    "Algorithmic interviews: you can solve two of three unseen Easy-to-Medium problems in about 45 minutes each, explaining complexity and testing your code (editorial guide, not an employer threshold).",
    "Design, if confirmed: you can design and implement a small system in about 45 minutes and explain trade-offs.",
    "Practical or AI-designated sections, if confirmed: you can complete the matching drill and explain every change.",
    "Behavioral: 6–8 specific stories covering collaboration, ownership, conflict and learning, each holding up to follow-up questions (editorial).",
    "Apply once eligible and reasonably prepared; you do not need every Optional topic.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/oop-low-level-design",
    "/interview-prep/rapid-fire-technical-questions",
    "/interview-prep/ai-assisted-coding",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/job-description-gap-analysis",
  ],
  sources: [
    { title: "Pinterest — Our philosophy on AI in hiring (official; designated AI sections)", url: "https://www.pinterestcareers.com/candidate-hub/our-philosophy-on-ai-in-hiring/" },
    { title: "GitLab — Technical interviews handbook (official; non-entry boundary evidence)", url: "https://handbook.gitlab.com/handbook/hiring/interviewing/technical/" },
  ],
  atAGlance: [
    { label: "Formats", value: "Coding and behavioral interviews; varies by company" },
    { label: "AI", value: "Some allow AI in designated sections only (Pinterest, official)" },
    { label: "Tip", value: "Use a company's own path if it has one" },
  ],
  parallel: ["Behavioral preparation", "explaining-project-architecture", "build-deploy-project"],
  stages: [
    { template: "fluency", topics: ["python-lists", "python-debugging"] },
    { template: "core", topics: ["problem-solving-process", "complexity-analysis", "arrays-strings-patterns", "hash-map-set-patterns", "automated-testing"] },
    { template: "dsBreadth", topics: ["trees-binary-search-trees", "graphs-bfs-dfs", "stacks-queues", "binary-search", "recursion-backtracking", "heaps-priority-queues", "dynamic-programming-basics"] },
    { template: "postingBasics", topics: ["classes-objects", "git-pull-requests", "databases-sql-concepts", "ai-assisted-engineering", "Rapid-fire technical knowledge questions"] },
    { template: "role", topics: [] }, // Role-specific stages (for example Backend Engineer) go here.
    { template: "simulate", topics: ["take-home-simulation"], note: "If your target has its own company path, use that instead.", guides: ["coding-algorithms", "behavioral-interviews", "oop-low-level-design", "rapid-fire-technical-questions", "project-deep-dives", "take-home-assignments"] },
    { template: "job", topics: ["reading-debugging-unfamiliar-code", "code-review", "exceptions-error-handling"] },
  ],
};

export default guide;
