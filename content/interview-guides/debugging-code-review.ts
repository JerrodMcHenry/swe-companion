import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "debugging-code-review",
  title: "Debugging & Code Review Interviews",
  category: "Interview type",
  description: "Rounds where you debug, extend or review existing code: what they assess, how to approach them and how to practise.",
  level: "Entry level",
  overview:
    "In a debugging or code review round you work in code you did not write: find and fix bugs in an existing repository or library, trace business rules, extend the code, or review a proposed change. Unlike algorithmic coding rounds, which ask you to design a solution from scratch to a self-contained problem, these rounds assess how you navigate unfamiliar code, gather evidence, verify changes and communicate — closer to day-to-day engineering. Candidates report debugging rounds mainly at growth-stage companies and in some enterprise programs; Big Tech early-career loops still centre on algorithmic coding, although Meta's official guidance advises being comfortable reading, debugging and building on existing code. Dedicated code-review rounds have weak evidence at entry level. The technical content and question banks live in the Unit 5 Library topics linked below.",
  guidance: [
    {
      heading: "Evidence and limitations",
      items: [
        "Candidate-reported, not official: debugging rounds in an existing codebase or library at Stripe, Notion (React/TypeScript codebase) and Scale AI (a three-part debugging round), and a technical case at Capital One that included tracing business rules, debugging and writing a similar method. These are individual reports from 2026, mostly rewritten by an aggregator; formats change and vary by team.",
        "Candidate-reported: an \"AI debugging\" section in one Amazon new-grad online assessment report.",
        "Official, but not entry level: GitLab's merge-request review exercise. No official entry-level code-review round was found.",
        "Not every employer runs these rounds. Prioritize them when your recruiter, the job posting or your target's guide indicates one; otherwise treat this as professional preparation.",
      ],
    },
    {
      heading: "How it differs from algorithmic coding rounds",
      items: [
        "Reading comes first: much of the time goes to understanding existing code, not writing new code.",
        "The goal is a correct, minimal change and evidence that it works, not an optimal algorithm.",
        "Tools are often more realistic (an editor that runs code, a test suite, sometimes documentation); confirm the rules beforehand.",
        "Several smaller parts (several bugs, or a bug then a feature) are common, so pacing matters.",
      ],
    },
  ],
  process: [
    "Debugging round (candidate-reported): a repository or library with failing tests or reported bugs; find, fix and explain them in about 45–60 minutes.",
    "Extend-the-code round: add a small feature to existing code with tests, sometimes after a bug fix.",
    "Code review round (weak entry-level evidence): review a pull request or snippet and explain the issues and how you would comment.",
    "Formats, tools and AI rules vary by employer and team; ask your recruiter.",
  ],
  competencies: [
    "Orienting quickly in unfamiliar code: structure, entry points, tests.",
    "Reproducing bugs and reading stack traces and test failures.",
    "Hypothesis-driven debugging rather than trial and error.",
    "Minimal, targeted fixes with regression tests, and running the existing suite.",
    "Reviewing for correctness, tests, security and maintainability, and prioritizing comments.",
    "Communicating reasoning continuously and managing time across several parts.",
  ],
  studyTopics: [
    {
      title: "Reading and debugging unfamiliar code",
      priority: "Essential",
      depth: "Apply",
      slug: "reading-debugging-unfamiliar-code",
      reason: "The core skill these rounds assess: orienting, tracing, reproducing and isolating root causes.",
      exercises: ["Trace naturalsize in the humanize library", "Reproduce a closed bug report in a small open-source project"],
    },
    { title: "Python debugging", priority: "Essential", depth: "Apply", slug: "python-debugging", reason: "Tracebacks, the debugger and hand-tracing are the tools you use under time pressure." },
    {
      title: "Existing-codebase drills",
      priority: "Essential",
      depth: "Apply",
      slug: "existing-codebase-drills",
      reason: "Timed, realistic practice that mirrors the reported rounds.",
      exercises: ["Drill 5 — Diagnose and fix a reported bug (historical bug)", "Drill 3 — Implement a small feature (Gilded Rose: Conjured items)"],
    },
    { title: "Automated testing", priority: "Important", depth: "Implement", slug: "automated-testing", reason: "Reproducing bugs as tests and proving fixes are what interviewers look for." },
    {
      title: "Code review",
      priority: "Important",
      depth: "Implement",
      slug: "code-review",
      reason: "Raise to Essential if a review round is confirmed.",
      exercises: ["Review a merged pull request in a small open-source project before reading its review comments"],
    },
    { title: "Git and pull requests", priority: "Optional", depth: "Implement", slug: "git-pull-requests", reason: "Reading diffs and using history (blame, bisect) helps, but is rarely assessed directly." },
    { title: "Security fundamentals", priority: "Optional", depth: "Explain", slug: "security-fundamentals", reason: "Review rounds may include an injection or secrets issue to spot." },
    { title: "Framework-specific debugging (React, web backends)", priority: "Defer", reason: "Only when the role and round use that stack (for example, a full-stack debugging round); covered in the Backend and Full-Stack units." },
  ],
  sequence: [
    "Make sure you can debug your own code with Python Debugging and write tests with Automated Testing.",
    "Learn the orientation and debugging process in Reading and Debugging Unfamiliar Code, and the review checklist in Code Review.",
    "Do the worked examples in Existing-Codebase Drills, then two or three drills untimed.",
    "Repeat drills under realistic conditions: timed, talking aloud, with the tools your target round allows.",
    "If a review round is confirmed, add the Code Review exercises and practise explaining comments aloud.",
  ],
  practice: [
    {
      title: "Timed debugging round (editorial)",
      note: "Ask a partner to introduce two or three bugs into a small repository you have not seen (or use the historical-bug drill). In about 45 minutes: orient (5–10 minutes), reproduce each bug as a test, fix, run the full suite, and summarize. Talk aloud throughout. Time limits are editorial, not employer requirements.",
    },
    {
      title: "Talk-aloud review",
      note: "Review a small pull request aloud in about 20 minutes, ending with a prioritized summary: what blocks, what is optional, what is good.",
    },
    {
      title: "Practise in the round's tool conditions",
      note: "Without AI unless your employer says AI is allowed; in an editor that runs code if the round does, otherwise also practise hand-tracing.",
    },
  ],
  readiness: [
    "Editorial practice guide, not an employer threshold: in an unfamiliar small repository, find and fix two of three seeded bugs in about 45 minutes, each with a test, explaining your reasoning aloud.",
    "You can state your current hypothesis and the evidence for it at any point.",
    "You keep fixes minimal and run the existing tests before declaring a bug fixed.",
    "You can review a small change and explain its blocking issues, suggestions and nits.",
    "When stuck, you say so, summarize what you know and move on rather than going silent.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/ai-assisted-coding",
    "/interview-prep/other-employer",
  ],
  sources: [
    { title: "Meta — Hiring process and FAQ (official; reading, debugging and building on existing code)", url: "https://www.metacareers.com/hiring-process/" },
    { title: "Stripe new-grad onsite reports: debugging round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0" },
    { title: "Notion new-grad onsite invitations: debugging round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip" },
    { title: "Scale AI new-grad onsite: three-part debugging round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/scale-ai-new-grad-swe-virtual-onsite-cwmvy27rd8" },
    { title: "Capital One TDP Power Day: technical case (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2027-cycle-capital-one-tdp-new-grad-oa-power-day-24-experiences-4opp91z6le" },
  ],
};

export default guide;
