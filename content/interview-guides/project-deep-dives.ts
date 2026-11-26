import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "project-deep-dives",
  title: "Project Deep Dives",
  category: "Interview type",
  description: "Conversations that probe a project you built: architecture, decisions, testing, your contribution and limitations.",
  level: "Entry level",
  overview:
    "In a project deep dive, an interviewer picks a project from your resume — or the take-home you submitted — and asks you to explain it, then keeps asking \"why?\" and \"what if?\" to see how well you understand it and how much of it you did. It can be a dedicated round, part of a hiring-manager conversation or a few questions inside another interview. The explanations themselves are taught in Explaining Project Architecture; this guide covers choosing the project and handling the conversation. What makes a project worth discussing is covered in the Engineering Projects career guide.",
  guidance: [
    {
      heading: "Evidence and limitations",
      items: [
        "Candidate-reported: a project deep dive in Decagon's new-grad onsite; resume and project discussions in adjacent Microsoft internship reports and in one large retailer's technology screens; a long manager conversation in one Apple new-grad report.",
        "Official (recruiter-posted): a CTO technical deep dive in one startup's hiring process.",
        "How often projects are discussed, and in how much depth, varies by employer and interviewer. Prepare at least one project to deep-dive level whatever your target.",
      ],
    },
    {
      heading: "Choosing the project to discuss",
      items: [
        "Choose the project you understand best and contributed to most, not the most impressive-sounding one.",
        "Prefer one relevant to the role (an API for backend roles, a full application for full-stack roles).",
        "Re-read its code before the interview; interviewers may ask about specific files, bugs or decisions.",
        "Never claim users, scale, deployment or contributions that are not true.",
      ],
    },
  ],
  process: [
    "Opening: \"Tell me about a project you're proud of\" — a two-minute overview.",
    "Probing: architecture, a request flow, technology choices, testing, failures, security, deployment.",
    "Ownership: what you did personally, what you would change, how you used AI.",
    "Sometimes: modify or extend the project live, or diagnose a hypothetical failure.",
  ],
  competencies: [
    "Clear, structured explanation starting from the problem.",
    "Accurate understanding of your own architecture and code.",
    "Reasoned technical decisions and honest trade-offs.",
    "Precise ownership and honesty about limitations and AI use.",
    "Handling follow-up questions calmly, including \"I don't know, but here is how I would find out\".",
  ],
  studyTopics: [
    {
      title: "Explaining project architecture",
      priority: "Essential",
      depth: "Apply",
      slug: "explaining-project-architecture",
      reason: "The core skill of this format: explain, draw, trace and defend your project.",
      exercises: ["Record a two-minute and a ten-minute explanation of your project, then ask someone to interrupt with three follow-up questions from this topic."],
    },
    { title: "Build and deploy a project", priority: "Essential", depth: "Apply", slug: "build-deploy-project", reason: "You need one project you built and understand well enough to discuss in depth." },
    { title: "Deployment and CI/CD", priority: "Optional", depth: "Explain", slug: "deployment-ci-cd", reason: "Expect \"how is it deployed and tested?\"; answer accurately about what you actually did." },
    { title: "AI-assisted engineering and verification", priority: "Important", depth: "Explain", slug: "ai-assisted-engineering", reason: "Interviewers may ask how you used AI and test whether you understand the generated parts." },
  ],
  sequence: [
    "Make sure your project meets the Build and Deploy a Project readiness checklist, or pick an existing project that does.",
    "Work through Explaining Project Architecture: diagram, request trace, two- and ten-minute explanations.",
    "Do a mock deep dive with someone who asks follow-ups for 20–30 minutes.",
    "Prepare a matching behavioral story (a hard bug, a decision you changed) for the Behavioral guide.",
  ],
  practice: [
    {
      title: "Mock deep dive (editorial)",
      note: "A partner picks one of your projects and asks follow-ups for 20–30 minutes, including at least one live change and one \"what breaks if…\" question. Note every question you could not answer well and fix the gap in your understanding, not just the answer.",
    },
  ],
  readiness: [
    "You can explain one project in two and ten minutes, draw it and trace a request through it from memory.",
    "You can justify the main choices, name limitations and state your contribution precisely.",
    "You can make a small change or reason about a failure in it live.",
    "You can explain any AI-assisted part and how you verified it.",
  ],
  relatedGuides: ["/getting-hired/engineering-projects", "/interview-prep/behavioral-interviews", "/interview-prep/take-home-assignments", "/getting-hired/resume"],
  sources: [
    { title: "Decagon new-grad interviews: project deep dive (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-decagon-new-grad-swe-interviews-1-experience-4p0yzlfvh5" },
    { title: "EQL Tech (recruiter) — How they hire: CTO deep dive (official recruiter posting)", url: "https://apply.workable.com/eqltech/j/E001CE3E7F/" },
    { title: "Microsoft internship interview reports (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2025-2026-microsoft-software-engineering-internship-oa-interviews-244-experience-1tmno4q08v" },
  ],
};

export default guide;
