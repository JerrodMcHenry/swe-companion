import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "early-stage-startups",
  title: "Early-Stage Startups (including YC-backed)",
  category: "Employer type",
  description: "Small, young companies: shipping evidence, practical work, take-homes and project discussions, with algorithmic screens at some.",
  level: "Entry level",
  overview:
    "Early-stage startups (seed to roughly Series A, including Y Combinator-backed companies) hire a few engineers at a time and need them to ship independently. There is no standard process: each company designs its own, and YC is an investor, not an employer with a common interview. The processes reviewed lean towards practical evidence — a take-home, a discussion of your work, a short paid or unpaid work trial, or a deployed project you can show — and some companies still run algorithmic screens. Preparation therefore centres on building and explaining working software, working in existing code and testing, with a smaller, Implement-depth amount of algorithm practice. Always confirm the actual process with the company.",
  guidance: [
    {
      heading: "Eligibility",
      items: [
        "Genuine entry-level roles are scarce. In a one-day snapshot of YC's main software-engineering job list (25 November 2026), 3 of 32 postings accepted new graduates; 3 required 1+ years, 15 required 3+ years and 11 required 6+ years. On the Bay Area list, 4 of 13 accepted new grads.",
        "Titles like \"Founding Engineer\" or \"Software Engineer\" often mean experienced hires. Read the experience line before preparing; apply to roles that state new grads or 0–2 years are welcome, or whose requirements you can genuinely meet.",
        "Roles that do accept new grads often expect evidence of shipping: a deployed project, real users or production code. Some \"new grads OK\" postings also list experience you may not have; treat those as stretch applications.",
        "Check practical conditions in the posting: in-office expectations (some require more than five days a week), location and visa sponsorship (some state they cannot sponsor new visas).",
      ],
    },
    {
      heading: "Evidence and limitations",
      items: [
        "Official (individual YC job pages, R3): Corelayer — CEO call, 4-hour take-home, technical interview on the take-home, then two days working with the team; Confido — recruiter call, 60-minute technical screen, long onsite; Lamar Health — an AI-usage work sample instead of a cover letter; MSPilot — candidates must show a deployed side project with real users.",
        "These are four companies, not a representative sample, and the early-stage evidence comes only from YC listings. Algorithmic interviews were not described in these official processes, but candidate evidence for this segment is thin; absence of evidence is not evidence that startups never ask DSA questions.",
        "Postings in this segment often mention heavy AI-tool use on the job; whether AI is allowed in an interview varies and must be confirmed.",
        "Review date for this path: 2027-05-25. Processes at small companies change quickly.",
      ],
    },
    {
      heading: "Interview questions, behavioral and practical preparation",
      items: [
        "Question categories: walking through your project and its trade-offs; how you would build or extend a feature; debugging and testing questions about your take-home; practical coding; occasionally algorithm questions.",
        "Behavioral: ownership of something end to end, learning a new tool quickly, working with unclear requirements, and why this company and product. Founders often probe motivation directly.",
        "Practical engineering: drills in unfamiliar code, a timed small build with tests and README, and explaining every change — independently first, then with AI where the company allows it.",
      ],
    },
    {
      heading: "Application guidance",
      items: [
        "Apply to roles that genuinely accept new grads, with a link to your demonstrable project in your application.",
        "A short, specific note about why the product interests you helps at small companies; use the Resume guide for the rest.",
        "Ask about the process, time commitment and any work trial (paid or unpaid) before you start, so you can plan.",
        "Do not wait to finish every topic; a working project and practical skills are the main signal here.",
      ],
    },
  ],
  process: [
    "Possible stages (company-specific, no standard): a founder or recruiter call; a technical screen (practical or algorithmic); a take-home assignment; a discussion of your take-home or project; a paid or unpaid work trial; a culture and motivation conversation.",
    "Some companies ask to see a deployed project or a work sample with the application.",
    "Ask the company early: the stages, whether coding is live or take-home, what tools and AI are allowed, and how long each step takes.",
  ],
  competencies: [
    "Independently implementing small features end to end and delivering them working.",
    "Reading, modifying and debugging existing code; writing tests.",
    "Practical design: simple structures that work, with trade-offs you can explain.",
    "Owning a project and explaining your technical decisions, mistakes and what you would change.",
    "Working with ambiguous requirements: asking the right questions, choosing a scope and stating assumptions.",
    "Using AI tools productively and verifying their output, where the company allows it.",
  ],
  studyTopics: [
    { title: "One substantial project (forthcoming: Unit 6)", priority: "Essential", depth: "Apply", reason: "Early-stage companies reviewed ask for deployed work, discuss take-homes and run work trials; a project you built and can change is your strongest evidence. Until Unit 6 is published, use the Engineering Projects guide." },
    { title: "Explaining your projects", priority: "Essential", depth: "Explain", reason: "Take-home discussions and project conversations were the most consistent element of the early-stage processes reviewed. A dedicated Project Deep Dives guide is forthcoming." },
    { title: "Existing-codebase drills", priority: "Essential", depth: "Apply", slug: "existing-codebase-drills", reason: "Work trials and practical screens mean changing real code quickly and safely.", exercises: ["Drill 3 — Implement a small feature (Gilded Rose: Conjured items)", "Drill 5 — Diagnose and fix a reported bug (historical bug)"] },
    { title: "Reading and debugging unfamiliar code", priority: "Essential", depth: "Apply", slug: "reading-debugging-unfamiliar-code", reason: "Small teams expect new engineers to find and fix problems without much supervision." },
    { title: "Automated testing", priority: "Essential", depth: "Implement", slug: "automated-testing", reason: "Take-homes and work samples are judged partly on whether the code is tested and works.", exercises: ["Write a test for code that calls an external weather API, using a fake client instead of the network."] },
    { title: "Behavioral preparation", priority: "Essential", reason: "Founder and team conversations probe motivation, ownership and how you handle ambiguity; prepare specific stories. See Behavioral Interview Preparation." },
    { title: "Take-home assignments (forthcoming: Take-Home Assignments guide)", priority: "Important", depth: "Implement", reason: "Reported at Corelayer (4 hours) among the early-stage processes reviewed. Until the guide is published: scope first, keep it working, test it and write a clear README." },
    { title: "Designing small systems", priority: "Important", depth: "Implement", slug: "designing-small-systems", reason: "Practical design judgment for features and take-homes; avoid overengineering." },
    { title: "AI-assisted engineering and verification", priority: "Important", depth: "Apply", slug: "ai-assisted-engineering", reason: "Postings in this segment describe heavy AI-tool use on the job and one process used an AI work sample; in interviews, use AI only where the company allows it.", exercises: ["AI-assisted mode: complete a comparable drill with an AI assistant and keep a verification log."] },
    { title: "Problem-solving process and communication", priority: "Important", depth: "Implement", slug: "problem-solving-process", reason: "Some startups run technical screens; a clear approach also helps in practical rounds.", exercises: ["Majority Element (LeetCode)"] },
    { title: "Arrays and strings", priority: "Important", depth: "Implement", slug: "arrays-strings-patterns", reason: "Covers the most common screen questions at Implement depth.", exercises: ["Best Time to Buy and Sell Stock (LeetCode)", "Longest Substring Without Repeating Characters (LeetCode)"] },
    { title: "Hash maps and sets", priority: "Important", depth: "Implement", slug: "hash-map-set-patterns", exercises: ["Top K Frequent Elements (LeetCode)"] },
    { title: "Git and pull requests", priority: "Important", depth: "Implement", slug: "git-pull-requests", reason: "Expected from day one in a small team; also visible in your project history." },
    { title: "How the internet and HTTP work", priority: "Important", depth: "Explain", slug: "internet-http", reason: "Most startup products are web or API products; deeper API work comes with the Backend and Full-Stack units for those roles." },
    { title: "Databases and SQL concepts", priority: "Optional", depth: "Explain", slug: "databases-sql-concepts", reason: "Raise to Important at Implement depth for backend or full-stack roles, or if your project uses a database." },
    { title: "Trees, graphs and recursion", priority: "Optional", depth: "Implement", slug: "trees-binary-search-trees", reason: "Raise only if the company confirms an algorithmic interview.", exercises: ["Maximum Depth of Binary Tree (LeetCode)"] },
    { title: "Dynamic programming basics", priority: "Defer", slug: "dynamic-programming-basics", reason: "Not observed in the early-stage processes reviewed; prepare only if an algorithm-heavy screen is confirmed." },
    { title: "Union-find and weighted shortest paths", priority: "Defer", slug: "union-find-shortest-paths", reason: "Advanced patterns with no early-stage evidence." },
    { title: "System design", priority: "Defer", reason: "Rarely expected of new grads here; explain your own project's architecture instead." },
  ],
  sequence: [
    "Check eligibility in each posting and shortlist roles that genuinely accept new grads.",
    "Build, deploy and document one project you can demo and change (use the Engineering Projects guide until Unit 6 is published); this doubles as your application evidence.",
    "In parallel, work through Existing-Codebase Drills and Reading and Debugging Unfamiliar Code, independently and then AI-assisted.",
    "Prepare to explain your project in depth and your behavioral stories, especially ownership and handling ambiguity.",
    "Keep a light, steady algorithm practice (Important topics at Implement depth); increase it only for companies that confirm an algorithmic screen.",
    "Apply as soon as your project is demonstrable; continue preparing while you wait.",
  ],
  practice: [
    {
      title: "Timed small build (editorial)",
      note: "Build a small feature or tool from a short written brief in about 3–4 hours, with tests and a README explaining your decisions, then present it to someone for 20 minutes and take questions. Time limits here are editorial; follow the company's instructions in a real take-home.",
    },
    {
      title: "Project walkthrough",
      note: "Explain your project in 2 minutes and in 15 minutes: the problem, architecture, one hard bug, one trade-off and what you would change. Have someone interrupt with \"why?\" questions.",
    },
  ],
  readiness: [
    "Practical assessments: you can fix a bug and add a small tested feature in an unfamiliar codebase, each in about 45–60 minutes (editorial guide), and explain your changes.",
    "You have one deployed or demonstrable project you can change live and defend in a deep-dive conversation.",
    "Algorithmic screens, if confirmed: you can solve unseen Easy-to-Medium array, string and hash-map problems in about 30–45 minutes (editorial), explaining complexity and testing your code.",
    "AI-assisted tasks, if allowed: you can complete a drill with an assistant and explain every change without it.",
    "Behavioral: you have specific stories about ownership, learning fast and dealing with unclear requirements.",
    "None of these are employer thresholds; apply once you are eligible and reasonably prepared.",
  ],
  relatedGuides: [
    "/getting-hired/engineering-projects",
    "/interview-prep/debugging-code-review",
    "/interview-prep/ai-assisted-coding",
    "/interview-prep/behavioral-interviews",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/application-strategy",
  ],
  sources: [
    { title: "Y Combinator — Software engineer jobs list (official postings; experience requirements)", url: "https://www.ycombinator.com/jobs/role/software-engineer" },
    { title: "Corelayer — Founding Engineer posting on YC (official; interview process)", url: "https://www.ycombinator.com/companies/corelayer/jobs/d98zA8p-founding-engineer" },
  ],
  atAGlance: [
    { label: "Process", value: "No standard process; take-homes, work trials and project reviews are common" },
    { label: "Eligibility", value: "Few roles accept new grads — 3 of 32 YC postings in one snapshot" },
    { label: "AI", value: "Varies by company; ask" },
  ],
  parallel: ["One substantial project (forthcoming: Unit 6)", "Behavioral preparation"],
  stages: [
    { template: "fluencySetup", topics: ["python-lists", "python-debugging", "git-pull-requests", "command-line-environment"] },
    { template: "realCode", topics: ["reading-debugging-unfamiliar-code", "automated-testing", "existing-codebase-drills", "code-review"] },
    { template: "ship", topics: ["designing-small-systems", "internet-http", "ai-assisted-engineering", "classes-objects", "composition-inheritance-interfaces", "security-fundamentals", "databases-sql-concepts", "solid-design-patterns"] },
    { template: "takeHome", topics: ["Take-home assignments (forthcoming: Take-Home Assignments guide)", "Explaining your projects"], guides: ["debugging-code-review", "behavioral-interviews"] },
    { template: "coreScreen", topics: ["problem-solving-process", "arrays-strings-patterns", "hash-map-set-patterns", "complexity-analysis", "trees-binary-search-trees"], note: "Some startups run algorithmic screens. Increase this only for companies that confirm one.", guides: ["coding-algorithms"] },
  ],
};

export default guide;
