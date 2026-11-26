import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "take-home-assignments",
  title: "Take-Home Assignments",
  category: "Interview type",
  description: "Assignments you complete on your own time and then discuss: how to scope, build, test, document and defend them.",
  level: "Entry level",
  overview:
    "A take-home assignment asks you to build something on your own time — typically a few hours — and submit it for review, usually followed by an interview where you explain and extend it. It tests whether you can turn a brief into working, tested, documented software and judge what matters within a limited time. Not every employer uses take-homes; in this curriculum's research they appear mainly at startups. Practise with the Take-Home Assessment Simulation; this guide covers strategy for real ones.",
  guidance: [
    {
      heading: "Evidence and limitations",
      items: [
        "Official (individual employers): one YC company's posted process included a 4-hour take-home followed by an interview with its CTO about it; a recruiter-posted startup process included a take-home built from a real problem and presented on a whiteboard; Pinterest's hiring page names a take-home as one place where candidates may be invited to use AI.",
        "Candidate-reported: a 90-minute take-home (design document plus coding) on Notion's AI new-grad track; a four-hour take-home built with AI at xAI.",
        "No take-home was reported in the Big Tech early-career evidence reviewed. Time limits, AI rules and evaluation criteria differ per employer — the employer's instructions always override this guide.",
      ],
    },
    {
      heading: "Employer instructions come first",
      items: [
        "Read the brief twice and note the deliverables, the time expectation, the submission format, the language or framework constraints and the AI policy.",
        "If something important is unclear, ask once, early. Otherwise state your assumptions in the README.",
        "If the stated time is short, respect it and say what you would do next; do not quietly spend days on it.",
      ],
    },
  ],
  process: [
    "Receive the brief and a deadline (often a few days to complete a few hours of work).",
    "Build and submit, usually a repository or archive with a README.",
    "Follow-up interview (common): walk through the design, answer questions, sometimes extend or debug the submission live.",
  ],
  competencies: [
    "Clarifying requirements and recording assumptions.",
    "Managing scope and time: core features done well before extras.",
    "Correct, maintainable code with sensible error handling.",
    "Meaningful tests and clear documentation.",
    "Explaining trade-offs and extending your own code in the follow-up.",
  ],
  studyTopics: [
    {
      title: "Take-home assessment simulation",
      priority: "Essential",
      depth: "Apply",
      slug: "take-home-simulation",
      reason: "A timed, realistic assignment with a rubric and follow-up questions.",
      exercises: ["Take-home simulation: Group expense splitter"],
    },
    { title: "Automated testing", priority: "Essential", depth: "Implement", slug: "automated-testing", reason: "Reviewers judge take-homes partly on whether the code is tested." },
    { title: "Exceptions and error handling", priority: "Important", depth: "Implement", slug: "exceptions-error-handling", reason: "Invalid input and failures are where take-home submissions most often fall short." },
    { title: "Modules, packages and project structure", priority: "Important", depth: "Implement", slug: "modules-packages-project-structure", reason: "A clear structure and dependency file make the submission easy to run and review." },
    { title: "Explaining project architecture", priority: "Important", depth: "Apply", slug: "explaining-project-architecture", reason: "The follow-up interview is a deep dive into your submission." },
    { title: "Git and pull requests", priority: "Optional", depth: "Implement", slug: "git-pull-requests", reason: "Small, meaningful commits show how you work." },
    { title: "AI-assisted engineering and verification", priority: "Optional", depth: "Apply", slug: "ai-assisted-engineering", reason: "Only when the assignment permits AI; then disclose and verify every use." },
  ],
  sequence: [
    "Do the Take-Home Assessment Simulation independently within its editorial timebox.",
    "Self-review against its evaluation criteria, then have someone review it and ask follow-up questions.",
    "Do the live extension exercise as you would in a follow-up interview.",
    "For targets that permit AI in take-homes, repeat a simulation in AI-assisted mode with a verification log.",
  ],
  practice: [
    {
      title: "Plan the timebox before coding (editorial)",
      note: "For a 3-hour brief, roughly: 15 minutes reading, listing questions and assumptions; 2 hours building the core with tests; 30 minutes on error handling and cleanup; 15 minutes on the README. Adjust to the brief.",
    },
    {
      title: "Practise on real published briefs",
      url: "https://github.com/CollabCodeTech/backend-challenges",
      note: "After the simulation, pick one company brief from this community-maintained list of openly published back-end take-home assignments (many are Brazilian and in Portuguese; links can go stale; a listing does not mean the company still uses it). Apply the same timebox, rubric and follow-up practice.",
    },
    {
      title: "Write the README as you go",
      note: "Keep a running list of decisions, assumptions and things you would do next; it becomes the README and your follow-up notes.",
    },
  ],
  readiness: [
    "Editorial guide, not an employer threshold: you completed a simulation within about 3 hours with all core requirements, tests and a README covering decisions and assumptions.",
    "A reviewer can run your submission and its tests from the README alone.",
    "You can defend your design for 15–30 minutes and extend it live.",
    "You know each target employer's take-home and AI rules, or you will ask when you receive one.",
  ],
  relatedGuides: ["/interview-prep/project-deep-dives", "/interview-prep/practical-coding-assessments", "/interview-prep/ai-assisted-coding", "/getting-hired/engineering-projects"],
  sources: [
    { title: "Corelayer — Founding Engineer posting on YC: interview process (official)", url: "https://www.ycombinator.com/companies/corelayer/jobs/d98zA8p-founding-engineer" },
    { title: "EQL Tech (recruiter) — How they hire (official recruiter posting)", url: "https://apply.workable.com/eqltech/j/E001CE3E7F/" },
    { title: "Pinterest — Our philosophy on AI in hiring (official)", url: "https://www.pinterestcareers.com/candidate-hub/our-philosophy-on-ai-in-hiring/" },
    { title: "Notion new-grad and AI new-grad invitations (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip" },
    { title: "xAI AI coding interview and take-home (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2025-2026-xai-ai-coding-interview-building-with-ai-new-grad-take-home-onsite-3-e-1vhv6zjyey" },
  ],
};

export default guide;
