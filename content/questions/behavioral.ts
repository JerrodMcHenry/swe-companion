import type { Question } from "../types";

// Answers here are preparation advice (editorial) unless a source is given; use your own true stories.
const questions: Question[] = [
  {
    group: "How to answer",
    question: "How should you structure a behavioral answer?",
    answer:
      "Use STAR: one or two sentences of Situation and Task, most of the time on the Actions you personally took, then a specific Result and what you learned. Say \"I\" for your own contribution and credit teammates for theirs. Aim for about two minutes, and expect follow-up questions that probe details. Projects, coursework, internships, part-time jobs and previous careers all count, as long as the story is true.",
    followUps: ["What did you personally do?", "What would you do differently?"],
    source: { title: "Amazon — Your complete guide to the Amazon interview process (STAR, using \"I\")", url: "https://www.aboutamazon.com/news/workplace/amazon-interview-guide" },
  },
  {
    group: "How to answer",
    question: "How do you prepare without memorizing scripts?",
    answer:
      "Build a story bank of six to eight real experiences: a technical challenge, teamwork, a conflict, a mistake, feedback you received and learning something new. Outline each in five or six short STAR notes, map them to the questions below (one story can answer several), and practise aloud with someone who interrupts with follow-ups. Make results concrete where you honestly can; never invent numbers.",
  },
  {
    group: "How to answer",
    question: "How do you prepare for Amazon's Leadership Principles questions?",
    answer:
      "Read the principles, then map each of your stories to the one or two principles it shows best, such as Ownership, Customer Obsession, Dive Deep or Learn and Be Curious. Amazon's interview guide says behavioral questions in the phone screen and loop evaluate candidates against the Leadership Principles, so prepare more than one story for the common ones and expect detailed follow-ups. The same story bank works for other employers' values.",
    source: { title: "Amazon — Leadership Principles (official)", url: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles" },
  },
  {
    group: "Common questions",
    question: "Tell me about yourself.",
    answer: "A common opener. Give a 60–90 second summary: who you are now, the relevant experience and one project, and why this role.",
    followUps: ["Why this company?","What are you looking for next?"],
  },
  {
    group: "Common questions",
    question: "Why software engineering? (Or: why are you changing careers?)",
    answer: "Show genuine motivation with a concrete moment or project, and for career switchers how your previous work transfers.",
    followUps: ["What have you built so far?","What did you find hardest about learning to program?"],
  },
  {
    group: "Common questions",
    question: "Tell me about a difficult technical problem you solved.",
    answer: "Pick a real bug or design problem from a project or internship. Explain your debugging or reasoning steps, not just the fix.",
    followUps: ["What alternatives did you consider?","How would you prevent it next time?"],
  },
  {
    group: "Common questions",
    question: "Tell me about a time you worked in a team.",
    answer: "A team project, internship or job. Describe your specific contribution and how you coordinated.",
    followUps: ["What would you do differently?","How did you handle someone who was not contributing?"],
  },
  {
    group: "Common questions",
    question: "Tell me about a conflict or disagreement.",
    answer: "A disagreement about an approach or priorities, resolved by listening, using evidence and compromise. Avoid stories where you blame the other person.",
    followUps: ["What did you learn about the other person's view?","Would you change anything?"],
  },
  {
    group: "Common questions",
    question: "Tell me about a failure or mistake.",
    answer: "A real mistake with real consequences, what you did to recover and what you changed afterwards. Meta's guidance notes that discussing how you learned and grew is valued.",
    source: { title: "Meta Careers — Preparing for your software engineering interview at Meta", url: "https://www.metacareers.com/blog/preparing-for-your-software-engineering-interview-at-meta/" },
    followUps: ["How do you make sure it does not happen again?"],
  },
  {
    group: "Common questions",
    question: "Tell me about a time you received critical feedback.",
    answer: "Code review comments, a grade, or a manager's feedback; show how you responded and improved.",
    followUps: ["How do you give feedback to others?"],
  },
  {
    group: "Also prepare",
    question: "Tell me about a time you took ownership of something.",
    answer: "Something you did beyond what was strictly required: fixing a recurring problem, improving documentation or tests, or finishing a team deliverable.",
    followUps: ["What was the outcome?","Who else did you involve?"],
  },
  {
    group: "Also prepare",
    question: "Tell me about a time you faced ambiguity.",
    answer: "Unclear requirements in a project or task; show how you asked questions, made reasonable assumptions and checked them.",
    followUps: ["How did you decide what to do first?"],
  },
  {
    group: "Also prepare",
    question: "Tell me about a time you had to prioritize or meet a deadline.",
    answer: "Competing coursework, project or job demands; how you chose what mattered and communicated trade-offs.",
    followUps: ["What did you drop or postpone, and how did you tell people?"],
  },
  {
    group: "Also prepare",
    question: "Tell me about a time you learned a new technology quickly.",
    answer: "How you learned (documentation, small experiments, asking for help) and what you built.",
    followUps: ["How do you decide when you understand something well enough?"],
  },
  {
    group: "Also prepare",
    question: "Do you have any questions for us?",
    answer: "Prepare two or three genuine questions about the team's work, how new engineers are supported, or how success is measured. Avoid questions answered on the careers page.",
  },
];

export default questions;
