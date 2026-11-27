import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Project deep dive",
    question: "Walk me through a project you built.",
    answer: "Start with the problem and who it is for, then the main components and how they connect, then one interesting decision or challenge, and finish with the result and what you would improve — about two minutes, then let the interviewer choose where to go deeper. The example below is a shape to adapt, not a script: use your own project's real components and decisions.",
    code: `# architecture.txt — example explanation of a study-tracker project (adapt to your own)
Problem: students forget topics they studied; the app schedules reviews based on past sessions.

Browser ──HTTPS──▶ API (FastAPI) ──SQL──▶ PostgreSQL
                     │
                     └── scheduler module: decides which topics are due

Request flow for "log a session":
  POST /sessions → routes.create_session() validates input
  → services.log_session() applies the rules → storage.save_session() inserts a row
  → 201 response with the new session; the dashboard then calls GET /reviews/due

Decision: kept scheduling rules in a plain module, so they are unit-tested without the database.
Limitation: one user per deployment; next step would be accounts and authentication.`,
    followUps: ["Why did you build it this way rather than another way?","What was the hardest bug?"],
    source: { title: "The C4 model — Container diagram", url: "https://c4model.com/diagrams/container" },
  },
  {
    group: "Project deep dive",
    question: "Trace what happens when a user does X in your application.",
    answer: "Go step by step through real code: where the request arrives (the route or command), where input is validated, which function applies the logic, how data is read or written, how errors are handled, and what is returned. Name actual files and functions. If you do not remember a detail, say so and reason about where it must be, rather than guessing.",
    followUps: ["Where exactly is invalid input rejected?","What happens if the database is unavailable at that step?"],
  },
  {
    group: "Project deep dive",
    question: "Why did you choose this technology over alternatives?",
    answer: "Tie the choice to the problem and your constraints, name an alternative and the trade-off: \"I used PostgreSQL instead of a document store because sessions and topics are relational and I wanted foreign-key constraints; the cost is defining a schema and migrations.\" \"I chose it because it was popular\" or \"the tutorial used it\" is a weak answer; it is fine to say what you would choose now and why.",
    followUps: ["What would make you change that choice?"],
  },
  {
    group: "Project deep dive",
    question: "How did you test and debug it?",
    answer: "Describe what is tested and why: unit tests for the logic, a few tests through the API or user interface for the main workflow, and the edge cases you covered. Give one concrete bug: the symptom, how you found the cause and how a test now prevents it. Be honest about gaps (\"the frontend has no automated tests yet\").",
    followUps: ["What is not tested, and what is the risk?"],
  },
  {
    group: "Project deep dive",
    question: "What are the limitations, and what would you improve with more time or more users?",
    answer: "Name real limitations — single user, no pagination, no retries on an external API, manual deployment — and prioritize: what you would fix first and why. For more users, reason at a basic level: where it would slow down first (for example the database queries or one slow endpoint), and simple steps such as indexes, caching or pagination, rather than jumping to microservices.",
    followUps: ["If traffic grew tenfold tomorrow, what would break first?"],
  },
  {
    group: "Project deep dive",
    question: "What exactly did you do on this project?",
    answer: "Be specific and honest: which parts you designed, wrote, tested and deployed, which came from teammates, templates, tutorials or AI assistants, and which decisions were yours. For team projects say \"I\" for your work and \"we\" for shared decisions. Interviewers probe this with follow-ups; overstating your role is easy to detect and damages trust.",
    followUps: ["Which part would you have done differently if it had been entirely up to you?"],
  },
  {
    group: "Project deep dive",
    question: "Some of this code was AI-assisted. Explain how it works and how you know it is correct.",
    answer: "Explain it as you would any code: what it does, why it is structured that way and what its edge cases are, without the assistant. Then say how you verified it — tests, documentation, manual checks — and what you changed or rejected. If you cannot explain a part, say so honestly; it is better to show you know where your understanding stops than to guess.",
    followUps: ["Change this function so that it also handles X, without AI."],
  },
  {
    group: "Take-home assignments",
    question: "Evaluation criteria: how will a reviewer judge the submission?",
    answer: "Use this as your editorial rubric (real employers set their own). Correctness: requirements met, including edge cases and invalid input. Code quality: clear structure and names, functions with one job, no dead code. Tests: meaningful tests for rules and failures that run with one command. Error handling: clear messages, no tracebacks for user errors. Documentation: a reader can run it and understand your decisions and assumptions. Scope and judgment: required features done well before extras; trade-offs explained. Git history: small commits with meaningful messages. Honesty: limitations and any AI use stated.",
    followUps: ["Which criterion would you sacrifice first if you ran out of time, and how would you say so in the README?"],
  },
  {
    group: "Take-home assignments",
    question: "Follow-up: walk me through your design. Why did you structure it this way?",
    answer: "Start from the requirements, then the parts: input parsing and validation at the edge, splitting and settlement as pure functions that are easy to test, output formatting separate. Explain one real decision (for example storing money in integer cents to avoid floating-point errors, or how you assign leftover cents) and the alternative you rejected. Keep it to a couple of minutes and let the interviewer dig in.",
    followUps: ["Where would you add currencies?","How would this change if the data lived in a database?"],
  },
  {
    group: "Take-home assignments",
    question: "Follow-up: what would you do with more time, and what are the weaknesses of your solution?",
    answer: "Name concrete, prioritized items rather than a generic list: for example property-based tests for settlement, better messages for malformed JSON, support for uneven splits. Point out real weaknesses honestly — such as a greedy settlement that is not always optimal — and why you accepted them within the timebox. Interviewers value accurate self-assessment.",
    followUps: ["Is your settlement minimal? How would you check?"],
  },
  {
    group: "Take-home assignments",
    question: "How should you use AI tools in a take-home?",
    answer: "Follow the employer's instructions exactly. If AI is prohibited, do not use it — including autocomplete assistants — and expect to explain every line. If it is permitted, use it as you would at work: small, verified steps, every change reviewed and tested, and disclose what you used it for in the README. Either way you must be able to explain, modify and defend everything you submit without AI in the follow-up interview. If the instructions are silent, ask.",
    followUps: ["The assistant produced a settlement algorithm you do not fully understand. What do you submit?"],
  },
];

export default questions;
