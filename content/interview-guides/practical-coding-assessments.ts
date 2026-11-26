import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "practical-coding-assessments",
  title: "Practical Coding Assessments",
  category: "Interview type",
  description: "Live rounds where you build or change working code — a feature, a fix, tests or an integration — usually inside an existing repository.",
  level: "Entry level",
  overview:
    "In a practical coding assessment you write working software rather than solve an isolated algorithm puzzle: implement a feature in an existing repository, fix a bug and add the missing test, extend a small web application, or call an API and process its data. Interviewers watch how you understand the code, scope the change, verify it and explain your decisions. This guide covers building and changing code; finding bugs and reviewing changes are covered in the Debugging & Code Review guide, and assessments you complete at home in the Take-Home Assignments guide.",
  guidance: [
    {
      heading: "Evidence and limitations",
      items: [
        "Candidate-reported (2026, mostly rewritten by an aggregator): a backend practical at Scale AI; integration rounds at Stripe (multi-part data and API tasks); Klaviyo internship final rounds that extended or fixed a small Python web application, often with SQL; Capital One's agentic round, reported as fixing a bug and then adding a feature in a large application with an AI coding agent.",
        "These are a handful of companies, mostly growth-stage and one enterprise program. Big Tech early-career loops reviewed here centre on algorithmic coding, although Meta's official guidance mentions building on existing code in AI-assisted interviews.",
        "Formats, tools, language choice and AI rules vary; ask your recruiter what the round involves and whether you can run code, use documentation or use AI.",
      ],
    },
    {
      heading: "How it differs from other formats",
      items: [
        "Unlike algorithmic rounds, correctness is judged on realistic behavior — validation, errors, tests — not on optimal complexity.",
        "Unlike debugging rounds, most of the time goes to adding or changing behavior, though you will debug along the way.",
        "Unlike take-homes, it is live and short, so communication and scoping matter as much as the final code.",
      ],
    },
  ],
  process: [
    "Feature in existing code: read the repository, find where the change belongs, implement it with tests (reported at Klaviyo for interns; part of Capital One's agentic round).",
    "Fix and test: reproduce a reported bug, fix it and add a regression test.",
    "Integration task: call an API or read a data file, transform the data, handle errors and missing fields (reported at Stripe).",
    "Backend practical: extend a small service, for example add an endpoint (reported at Scale AI).",
    "Usually 45–90 minutes in an editor that runs code; confirm the details with your recruiter.",
  ],
  competencies: [
    "Getting oriented quickly in an unfamiliar repository and running its tests.",
    "Scoping: delivering a working core before extras.",
    "Writing correct, readable code that handles invalid input and failures.",
    "Testing the change and keeping existing behavior working.",
    "Explaining decisions and trade-offs while working.",
  ],
  studyTopics: [
    {
      title: "Existing-codebase drills",
      priority: "Essential",
      depth: "Apply",
      slug: "existing-codebase-drills",
      reason: "The closest practice to these rounds: change real code under time pressure.",
      exercises: ["Drill 3 — Implement a small feature (Gilded Rose: Conjured items)", "Drill 5 — Diagnose and fix a reported bug (historical bug)"],
    },
    { title: "Reading and debugging unfamiliar code", priority: "Essential", depth: "Apply", slug: "reading-debugging-unfamiliar-code", reason: "You must understand the existing code before you can change it safely." },
    { title: "Automated testing", priority: "Essential", depth: "Implement", slug: "automated-testing", reason: "A tested change is what distinguishes a practical round answer from a quick hack.", exercises: ["Write a test for code that calls an external weather API, using a fake client instead of the network."] },
    { title: "Exceptions and error handling", priority: "Important", depth: "Implement", slug: "exceptions-error-handling", reason: "Practical tasks are judged on how invalid input and failures are handled." },
    { title: "How the internet and HTTP work", priority: "Important", depth: "Explain", slug: "internet-http", reason: "Integration and backend tasks involve HTTP requests, status codes and JSON." },
    { title: "API integration tasks (forthcoming: Backend Engineering, Unit 7)", priority: "Important", depth: "Implement", reason: "Reported integration rounds call APIs and process their data; until Unit 7 is published, practise with the fake-client testing exercise and How the Internet and HTTP Work." },
    { title: "Modules, packages and project structure", priority: "Optional", depth: "Implement", slug: "modules-packages-project-structure", reason: "Helps you find your way and resolve import errors in a new repository." },
    { title: "AI-assisted engineering and verification", priority: "Optional", depth: "Apply", slug: "ai-assisted-engineering", reason: "Only when the round allows or provides an AI assistant (for example Capital One's reported agentic round)." },
  ],
  sequence: [
    "Make sure you can run an unfamiliar repository and its tests (Command Line and Development Environment).",
    "Work through Reading and Debugging Unfamiliar Code, then do two drills untimed.",
    "Practise feature drills timed and talking aloud: orient, plan, implement the core, test, summarize.",
    "Add an integration-style task if your targets use them, and AI-assisted practice only if the round allows AI.",
  ],
  practice: [
    {
      title: "Timed feature round (editorial)",
      note: "In about 60 minutes: take an unfamiliar small repository, spend 10 minutes orienting and running its tests, implement a small feature a partner chooses, test it, and spend the last 5 minutes summarizing what you did and what you would do next. Time limits are editorial, not employer requirements.",
    },
    {
      title: "Talk while you work",
      note: "Narrate your plan, assumptions and checks. If you get stuck, say what you have ruled out and what you will try next instead of going quiet.",
    },
  ],
  readiness: [
    "Editorial guide, not an employer threshold: in an unfamiliar small repository you can add a small tested feature in about 45–60 minutes while explaining your reasoning.",
    "You handle invalid input and errors without being prompted, and keep existing tests passing.",
    "You can complete a basic integration task — fetch data, transform it, handle failures — with tests.",
    "When time runs out you can say clearly what works, what is missing and how you would finish it.",
  ],
  relatedGuides: ["/interview-prep/debugging-code-review", "/interview-prep/take-home-assignments", "/interview-prep/ai-assisted-coding", "/interview-prep/coding-algorithms"],
  sources: [
    { title: "Scale AI new-grad onsite: backend practical (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/scale-ai-new-grad-swe-virtual-onsite-cwmvy27rd8" },
    { title: "Stripe new-grad onsite: integration round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0" },
    { title: "Klaviyo intern interviews: practical final rounds (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2021-2026-klaviyo-intern-interviews-ai-engineer-intern-update-14-swe-experiences-tb0w7ynaed" },
    { title: "Capital One TDP agentic round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-capital-one-ai-coding-interview-agentic-round-with-claude-code-new-grad-tdp-4lmthlusl2" },
  ],
};

export default guide;
