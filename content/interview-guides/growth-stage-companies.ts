import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "growth-stage-companies",
  title: "Growth-Stage Companies",
  category: "Employer type",
  description: "Scaling product companies: algorithmic screens plus realistic rounds — integration tasks, debugging existing code and, at some, AI-assisted coding.",
  level: "Entry level",
  overview:
    "Growth-stage companies (well-funded, scaling product companies with structured hiring, such as Stripe, Notion and Scale AI in this curriculum's research) often combine an algorithmic coding screen with more realistic engineering rounds than Big Tech: integration tasks that call and process an API, debugging an existing codebase or library, backend practicals and, at some, AI-assisted coding. Some still run mostly traditional coding interviews. Preparation therefore pairs Implement-depth algorithms with practical engineering — debugging, testing, API integration and code you can maintain — rather than Big Tech-level problem volume.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "Few growth-stage companies hire new graduates at any one time. In a one-day snapshot (25 November 2026), most of the growth-stage companies checked had no entry-level software postings; a minority (for example Notion, Stripe, Scale AI) had a few.",
        "Roles that do hire new grads commonly ask for internships and strong product or shipping signals. Some accept \"or equivalent\" experience instead of a degree; check each posting.",
        "Apply in the new-grad season when structured roles open, and use the Application Strategy guide to spread applications across employer types.",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Candidate-reported (R3; FastPrep, mostly rewritten, 2026): Stripe — a multi-part phone-screen problem, then an onsite with an integration round, a debugging round on a library and an AI coding round; Notion — a debugging round in an existing React/TypeScript codebase; Scale AI — coding, a three-part debugging round and a backend practical.",
        "Official but dated: Stripe has described a \"Bug Squash\" interview (fix a real historical bug in an open-source project). The current new-grad loop may differ.",
        "Moderate evidence overall, mostly from one aggregator and a few companies. Some growth-stage companies keep Big Tech-style coding loops; not every company runs integration, debugging or AI rounds.",
        "Review date for this path: 2027-05-25 (AI round policies: 2027-02-25).",
      ],
    },
    {
      heading: "Interview questions, behavioral and practical preparation",
      items: [
        "Question categories: algorithmic and multi-part coding; integration (call an API, transform data, handle errors); debugging existing code; code quality and testing; your projects; values and collaboration.",
        "Behavioral: ownership, collaboration across functions, handling feedback and a technical decision you would change; some companies run explicit values rounds.",
        "Practical engineering: timed debugging drills, an integration task with a fake client, multi-part problems with growing requirements, and code review of your own solutions.",
      ],
    },
    {
      heading: "Application guidance",
      items: [
        "Apply when structured new-grad roles open, and spread applications across employer types (see Application Strategy).",
        "Highlight internships, shipped work and testing habits on your resume; these match what growth-stage postings ask for.",
        "Ask the recruiter for the round list early and prepare for those rounds specifically.",
      ],
    },
  ],
  process: [
    "Possible stages (reported): recruiter call; an algorithmic or multi-part coding screen; an onsite with some of: integration task, debugging round, backend or practical round, AI-assisted coding, behavioral or values, hiring manager.",
    "Integration and debugging rounds usually let you run code; ask about language, tools, documentation and AI.",
    "Ask your recruiter which rounds you will have — the mix differs between companies and teams.",
  ],
  competencies: [
    "Practical implementation of multi-part problems, keeping code working as requirements grow.",
    "Debugging and extending an existing codebase or library.",
    "Consuming APIs and transforming data (integration tasks).",
    "Testing, maintainability and code review.",
    "Algorithmic coding at Implement depth.",
    "Technical communication and project deep dives.",
  ],
  studyTopics: [
    { title: "Problem-solving process and communication", priority: "Essential", depth: "Implement", slug: "problem-solving-process", reason: "Algorithmic and multi-part coding screens are still common at the growth-stage companies reviewed.", exercises: ["Majority Element (LeetCode)"] },
    { title: "Arrays and strings", priority: "Essential", depth: "Implement", slug: "arrays-strings-patterns", reason: "Core of coding screens and of data-processing tasks.", exercises: ["Product of Array Except Self (LeetCode)", "Longest Substring Without Repeating Characters (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Essential", depth: "Implement", slug: "hash-map-set-patterns", reason: "Grouping, counting and lookups dominate integration and data tasks.", exercises: ["Top K Frequent Elements (LeetCode)", "Subarray Sum Equals K (LeetCode)"] },
    { title: "Reading and debugging unfamiliar code", priority: "Essential", depth: "Apply", slug: "reading-debugging-unfamiliar-code", reason: "Debugging rounds on existing code or libraries were reported at several growth-stage companies.", exercises: ["Reproduce a closed bug report in a small open-source project", "Trace naturalsize in the humanize library"] },
    { title: "Existing-codebase drills", priority: "Essential", depth: "Apply", slug: "existing-codebase-drills", reason: "Timed practice for debugging and practical rounds.", exercises: ["Drill 5 — Diagnose and fix a reported bug (historical bug)", "Drill 3 — Implement a small feature (Gilded Rose: Conjured items)"] },
    { title: "Automated testing", priority: "Essential", depth: "Implement", slug: "automated-testing", reason: "Practical rounds reward working, tested code; mocking an external API is the basis of integration practice.", exercises: ["Write a test for code that calls an external weather API, using a fake client instead of the network."] },
    { title: "Behavioral preparation", priority: "Essential", reason: "Values and hiring-manager rounds were reported; prepare ownership and collaboration stories." },
    { title: "API integration tasks", priority: "Important", depth: "Implement", slug: "fastapi-http-apis", reason: "Integration rounds (consume an API, process JSON, handle errors and pagination) were reported at Stripe. Focus on the topic's API-client objectives; see the API and Integration Assessments guide." },
    { title: "How the internet and HTTP work", priority: "Important", depth: "Explain", slug: "internet-http", reason: "Needed for integration tasks: methods, status codes, JSON, retries and idempotency.", exercises: ["Use curl -i (and curl -v) to fetch a public page and a public JSON API; identify the status code, three response headers and the content type."] },
    { title: "Code review", priority: "Important", depth: "Implement", slug: "code-review", reason: "Maintainability is judged in practical rounds and every day on the job." },
    { title: "Trees and binary search trees", priority: "Important", depth: "Implement", slug: "trees-binary-search-trees", exercises: ["Maximum Depth of Binary Tree (LeetCode)"] },
    { title: "Graphs: BFS, DFS and topological sort", priority: "Important", depth: "Implement", slug: "graphs-bfs-dfs", exercises: ["Number of Islands (LeetCode)"] },
    { title: "Stacks and queues", priority: "Important", depth: "Implement", slug: "stacks-queues", exercises: ["Valid Parentheses (LeetCode)"] },
    { title: "AI-assisted engineering and verification", priority: "Important", depth: "Apply", slug: "ai-assisted-engineering", reason: "AI coding rounds were reported at some companies (for example Stripe); prepare when your recruiter confirms one, and practise without AI otherwise." },
    { title: "Explaining your projects", slug: "explaining-project-architecture", priority: "Important", depth: "Explain", reason: "Hiring-manager and project conversations are common." },
    { title: "Databases and SQL concepts", priority: "Optional", depth: "Explain", slug: "databases-sql-concepts", reason: "Raise to Important at Implement depth for backend roles or when a backend practical is confirmed." },
    { title: "System design", priority: "Optional", depth: "Explain", reason: "Basic level only; see the Basic System Design guide. Reported in a few growth-stage and AI-focused new-grad loops; prepare the basics only if a round is confirmed." },
    { title: "Dynamic programming basics", priority: "Optional", depth: "Implement", slug: "dynamic-programming-basics", reason: "Raise if your recruiter describes an algorithm-heavy loop." },
    { title: "Union-find and weighted shortest paths", priority: "Defer", slug: "union-find-shortest-paths", reason: "Big Tech-level depth is not needed here unless the company's loop is algorithm-heavy." },
    { title: "Exceptions and error handling", priority: "Important", depth: "Implement", slug: "exceptions-error-handling", reason: "Integration and practical rounds were reported here; they reward handling errors, timeouts and missing fields deliberately." },
    { title: "Take-home assignments", priority: "Optional", depth: "Implement", slug: "take-home-simulation", reason: "Take-homes appear at some growth-stage companies (reported on Notion's AI new-grad track); prepare if one is confirmed." },
  ],
  sequence: [
    "Ask your recruiter which rounds you will have; adjust the priorities below.",
    "Build the Essential coding topics to Implement depth, then work through Reading and Debugging Unfamiliar Code and Automated Testing.",
    "Practise integration-style tasks (call an API, transform JSON, handle errors, test with a fake client) and existing-codebase drills, timed.",
    "Add the Important algorithm topics, and AI-assisted practice if a round is confirmed.",
    "Prepare behavioral stories and a project walkthrough alongside, not at the end.",
    "Apply when structured new-grad roles open, while preparation continues.",
  ],
  practice: [
    {
      title: "Integration task (editorial)",
      note: "In about 60 minutes: fetch paginated JSON from a free public API, transform and aggregate it, handle errors and missing fields, and test the logic with a fake client. Extend it with a second requirement halfway through. Times are editorial.",
    },
    {
      title: "Multi-part coding problem",
      note: "Take a coding problem and add two follow-up requirements one at a time without rewriting from scratch, keeping tests passing — the shape of several reported screens.",
    },
  ],
  readiness: [
    "Algorithmic screens: you can solve two of three unseen Easy-to-Medium problems in about 45 minutes each, explaining complexity and testing your code (editorial guide).",
    "Practical assessments: you can find and fix two of three seeded bugs in an unfamiliar small repository in about 45 minutes, and complete an integration task in about 60 minutes with tests (editorial).",
    "AI-assisted rounds, if confirmed: you can complete a drill with an assistant, verifying and explaining every change.",
    "Behavioral: you have stories about ownership, collaboration and a technical decision you would revisit.",
    "Apply once you are eligible and reasonably prepared; these are not employer thresholds.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/debugging-code-review",
    "/interview-prep/ai-assisted-coding",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/application-strategy",
    "/getting-hired/engineering-projects",
  ],
  sources: [
    { title: "Stripe new-grad phone screen and onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0" },
    { title: "Stripe — Scaling engineering organizations: Bug Squash interview (official, dated)", url: "https://stripe.com/guides/atlas/scaling-eng" },
    { title: "Notion new-grad onsite: debugging round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip" },
    { title: "Scale AI new-grad onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/scale-ai-new-grad-swe-virtual-onsite-cwmvy27rd8" },
  ],
  atAGlance: [
    { label: "Formats", value: "Coding screen plus integration and debugging rounds (reported)" },
    { label: "Eligibility", value: "Few new-grad openings at any time" },
    { label: "AI", value: "Some run AI rounds; confirm with your recruiter" },
  ],
  parallel: ["Behavioral preparation", "explaining-project-architecture", "build-deploy-project"],
  stages: [
    { template: "fluency", topics: ["python-lists", "python-debugging"] },
    { template: "core", topics: ["problem-solving-process", "complexity-analysis", "arrays-strings-patterns", "hash-map-set-patterns"] },
    { template: "realCode", topics: ["reading-debugging-unfamiliar-code", "existing-codebase-drills", "automated-testing", "code-review"], guides: ["practical-coding-assessments"] },
    { template: "integration", topics: ["fastapi-http-apis", "internet-http", "ai-assisted-engineering", "exceptions-error-handling"], guides: ["api-integration-assessments"] },
    { template: "role", topics: [] }, // Role-specific stages (for example Backend Engineer) go here.
    { template: "dsBreadth", topics: ["trees-binary-search-trees", "graphs-bfs-dfs", "stacks-queues", "dynamic-programming-basics"] },
    { template: "simulate", topics: ["System design", "take-home-simulation"], guides: ["coding-algorithms", "behavioral-interviews", "debugging-code-review", "ai-assisted-coding", "take-home-assignments", "project-deep-dives", "basic-system-design"] },
    { template: "job", topics: ["git-pull-requests", "classes-objects"] },
  ],
};

export default guide;
