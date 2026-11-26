import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "ai-assisted-coding",
  title: "AI-Assisted Coding Interviews",
  category: "Interview type",
  description: "Rounds where an AI assistant is allowed or provided: what they assess, which employers prohibit AI, and how to prepare in both modes.",
  level: "Entry level",
  overview:
    "Some technical interviews now provide or allow an AI coding assistant; many others prohibit any AI. Where AI is allowed, the round typically still assesses your own engineering: understanding the problem, breaking it down, directing the assistant, reviewing and testing what it produces, catching its mistakes, debugging and explaining your decisions. This differs from an algorithmic round, where you write and justify the solution yourself, and from a take-home, where you work alone over hours. Employer rules always come first: follow your recruiter's instructions and the written assessment rules, and never use AI where it is not explicitly permitted. The technical content lives in AI-Assisted Engineering and Verification and the other Unit 5 topics.",
  guidance: [
    {
      heading: "Evidence and limitations",
      items: [
        "Official (confirmed on the live page, 26 November 2026; recheck before interviews): Meta's hiring page says many of its interviews now include an AI assistant built into the interview environment that candidates are expected to use, and that interviews assess problem solving, coding, debugging and collaboration. Whether a given early-career loop includes such a round was not confirmed; ask your recruiter.",
        "Official (checked 25 November 2026; policies change, so recheck): Google states that AI tools are not permitted in its interviews. Microsoft asks candidates to demonstrate their own skills without outside assistance unless explicitly permitted.",
        "Candidate-reported, not official: Capital One's early-career Power Day coding round became agentic from September 2026 (reports describe about 20 minutes fixing a bug and about 20 minutes adding a feature in a large application with an AI coding agent; several candidates ran out of time and some still received offers). AI coding rounds were also reported at Stripe, Decagon and xAI, and AI access during coding in a minority of Apple reports, mostly not new grad.",
        "Candidate-reported: Amazon candidates described questions about how they check AI output; secondary reporting says Amazon tells candidates not to use generative AI unless explicitly permitted.",
        "Policies change quickly. Treat everything here as a starting point and confirm the current rules for your interview.",
      ],
    },
    {
      heading: "Two practice modes",
      items: [
        "Independent mode (no AI): solve, implement, debug, test and explain on your own. Needed for every employer that prohibits AI, and the foundation for using AI well.",
        "AI-assisted mode (only where permitted): you may use the assistant, but you inspect, test, verify and can explain every material change. Keep a verification log in practice.",
        "Practise independent mode first and keep it up; add AI-assisted mode when your targets use it or for professional work.",
      ],
    },
  ],
  process: [
    "Before the interview: confirm with your recruiter whether AI is allowed, which tool (a built-in assistant or your own), and what is assessed.",
    "Typical AI-allowed task (reported): extend or debug existing code, or build a small feature, with an assistant available in the environment.",
    "Throughout (per Meta's official description and candidate reports): interviewers watch how you plan, prompt, review, test and explain, not only whether the code works.",
    "Some loops mix modes, for example a design discussion without AI followed by building with AI (candidate-reported at xAI).",
  ],
  competencies: [
    "Understanding and clarifying the task before involving the assistant.",
    "Breaking work into small, verifiable steps and giving precise instructions with context.",
    "Reviewing generated code critically and catching incorrect assumptions, bugs and fabricated APIs.",
    "Testing and debugging generated code; checking correctness before optimizing.",
    "Explaining every decision and change in your own words.",
    "Following the employer's rules on AI use exactly.",
  ],
  studyTopics: [
    {
      title: "AI-assisted engineering and verification",
      priority: "Essential",
      depth: "Apply",
      slug: "ai-assisted-engineering",
      reason: "The core of these rounds: directing an assistant and verifying everything it produces.",
      exercises: [
        "AI-assisted mode: complete a comparable drill with an AI assistant and keep a verification log.",
        "Explain without AI: after an AI-assisted change, close the assistant and explain every changed line, the alternatives and how you verified it to a partner or a recording.",
      ],
    },
    { title: "Reading and debugging unfamiliar code", priority: "Essential", depth: "Apply", slug: "reading-debugging-unfamiliar-code", reason: "Reported AI rounds centre on debugging and extending existing code; Meta names debugging explicitly." },
    {
      title: "Existing-codebase drills",
      priority: "Important",
      depth: "Apply",
      slug: "existing-codebase-drills",
      exercises: ["Repeat any drill in AI-assisted mode with a verification log"],
    },
    { title: "Code review", priority: "Important", depth: "Implement", slug: "code-review", reason: "Reviewing a generated diff is code review under time pressure." },
    { title: "Automated testing", priority: "Important", depth: "Implement", slug: "automated-testing" },
    { title: "Problem-solving process and communication", priority: "Important", depth: "Implement", slug: "problem-solving-process", reason: "You still need to understand and plan the solution yourself before the assistant writes code." },
    { title: "Building AI applications and prompt engineering", priority: "Defer", reason: "Not what general software engineering AI-assisted rounds assess; relevant only to AI-focused roles." },
  ],
  sequence: [
    "Confirm your target employers' AI rules (see each company guide, then ask your recruiter).",
    "Build independent skills first: Coding & Algorithms preparation and Reading and Debugging Unfamiliar Code without AI.",
    "Learn AI-Assisted Engineering and Verification, then do one drill in each mode and compare.",
    "If a target uses AI-assisted rounds, practise timed drills with an assistant, talking through your plan, review and tests aloud.",
  ],
  practice: [
    {
      title: "Timed AI-assisted drill (editorial)",
      note: "Only for targets that allow AI. In about 45 minutes, fix a bug and then add a small feature in an unfamiliar repository with an assistant, explaining each prompt, what you check and why you accept or reject the result. Time limits are editorial.",
    },
    {
      title: "Catch-the-mistake practice",
      note: "Ask an assistant to solve small tasks and review the output as if in an interview: list every problem you find and the test that exposes it before running anything.",
    },
    {
      title: "Use only free tools",
      note: "No paid subscription is needed. Use any assistant you can access legitimately, and never paste confidential code or credentials into it.",
    },
  ],
  readiness: [
    "You know whether each of your target employers allows AI in interviews, or you have asked.",
    "Independent mode: you can complete a small drill without AI and explain it.",
    "AI-assisted mode (editorial, for targets that allow it): in about 45 minutes, fix a bug and add a small tested feature in unfamiliar code with an assistant, catching at least one incorrect suggestion and explaining every change.",
    "You talk through your plan, verification and decisions continuously, rather than silently accepting output.",
  ],
  relatedGuides: [
    "/interview-prep/coding-algorithms",
    "/interview-prep/debugging-code-review",
    "/interview-prep/meta",
  ],
  sources: [
    { title: "Meta — Hiring process and FAQ (official; AI assistant in many interviews)", url: "https://www.metacareers.com/hiring-process/" },
    { title: "Google — Our hiring process (official; AI tools not permitted in interviews)", url: "https://www.google.com/about/careers/applications/how-we-hire/" },
    { title: "Microsoft — How we hire (official; no outside assistance unless explicitly permitted)", url: "https://careers.microsoft.com/v2/global/en/hiring-tips.html" },
    { title: "Capital One TDP agentic round reports (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-capital-one-ai-coding-interview-agentic-round-with-claude-code-new-grad-tdp-4lmthlusl2" },
    { title: "Stripe new-grad onsite reports: AI coding round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0" },
  ],
};

export default guide;
