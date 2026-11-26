import type { Topic } from "../types";

const topic: Topic = {
  slug: "explaining-project-architecture",
  title: "Explaining Project Architecture",
  category: "Practical Engineering",
  phase: "build-and-deploy-a-project",
  overview:
    "Project deep dives ask you to explain something you built — the problem, its components, how a request flows through it, why you chose each part, how you tested and deployed it and what exactly you did — and to defend it under follow-up questions. This is entry-level architecture: the components and data flow of one application, not large-scale system design.",
  whyItMatters:
    "Candidates report project deep dives and resume discussions at several employers in this curriculum's research (for example Decagon's onsite and a CTO deep dive in one startup's official process), Microsoft internship reports describe them as common, and many behavioral and hiring-manager conversations draw on your projects. Interviewers use follow-up questions to check that you understand and personally did the work; a project you cannot explain counts against you.",
  prerequisites: ["Build and Deploy a Project (or an existing project of your own)", "How the Internet and HTTP Work", "Automated Testing"],
  objectives: [
    "Explain the problem, the users and the requirements in a few sentences before any technology.",
    "Describe the architecture as a small number of components with clear responsibilities, and draw it.",
    "Trace one real request or action through the code, naming the functions and data involved.",
    "Explain each technology choice in terms of the problem and its trade-offs, including one alternative you considered.",
    "Describe how data is stored and flows, and what happens when a component fails.",
    "Explain how you tested, debugged, secured and deployed it — accurately, without overstating.",
    "Name limitations and what you would improve, including what changes with more users (at a basic level).",
    "State your personal contribution precisely, especially in team projects.",
    "Explain AI-assisted parts as well as any other code, and say how you verified them.",
    "Skip for now: large-scale distributed design and formal architecture documentation.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "The C4 model — System context and container diagrams",
      url: "https://c4model.com/diagrams/system-context",
      provider: "Simon Brown (c4model.com)",
      type: "Visual explanation",
      instructions: "Start here for diagrams. Read the system context page and the container diagram page (linked from it): the two levels you need to explain one application. Skip component and code diagrams. Free; no account.",
    },
    {
      title: "Excalidraw",
      url: "https://excalidraw.com/",
      provider: "Excalidraw (free, open source)",
      type: "Interactive",
      instructions: "Optional free whiteboard for drawing your architecture; paper works just as well.",
    },
  ],
  exercises: [
    {
      title: "Draw your project's system context and container diagrams from memory, then compare them with the code and fix what you got wrong.",
      note: "Use boxes for components and labelled arrows for what flows between them.",
    },
    {
      title: "Trace one request through your project: write the file and function for each step from the entry point to the database and back, then check it with a debugger or log lines.",
      note: "Practical. Keep the trace in your README.",
    },
    {
      title: "Record a two-minute and a ten-minute explanation of your project, then ask someone to interrupt with three follow-up questions from this topic.",
      note: "Interview practice. Watch for vague answers (\"it just works\", \"the framework handles it\").",
    },
    {
      title: "Ask a partner to name a small change (a new field, a validation rule); implement it in your project live in 30 minutes while explaining your steps.",
      note: "Proves independent understanding. Editorial timebox.",
    },
    {
      title: "Ask a partner to break your project without telling you how (rename a variable, change a configuration value), then diagnose and fix it while talking aloud.",
      note: "Diagnosing a failure in your own system is a common follow-up.",
    },
  ],
  interviewQuestions: [
    {
      question: "Walk me through a project you built.",
      answer:
        "Start with the problem and who it is for, then the main components and how they connect, then one interesting decision or challenge, and finish with the result and what you would improve — about two minutes, then let the interviewer choose where to go deeper. The example below is a shape to adapt, not a script: use your own project's real components and decisions.",
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
      followUps: ["Why did you build it this way rather than another way?", "What was the hardest bug?"],
      source: { title: "The C4 model — Container diagram", url: "https://c4model.com/diagrams/container" },
    },
    {
      question: "Trace what happens when a user does X in your application.",
      answer:
        "Go step by step through real code: where the request arrives (the route or command), where input is validated, which function applies the logic, how data is read or written, how errors are handled, and what is returned. Name actual files and functions. If you do not remember a detail, say so and reason about where it must be, rather than guessing.",
      followUps: ["Where exactly is invalid input rejected?", "What happens if the database is unavailable at that step?"],
    },
    {
      question: "Why did you choose this technology over alternatives?",
      answer:
        "Tie the choice to the problem and your constraints, name an alternative and the trade-off: \"I used PostgreSQL instead of a document store because sessions and topics are relational and I wanted foreign-key constraints; the cost is defining a schema and migrations.\" \"I chose it because it was popular\" or \"the tutorial used it\" is a weak answer; it is fine to say what you would choose now and why.",
      followUps: ["What would make you change that choice?"],
    },
    {
      question: "How did you test and debug it?",
      answer:
        "Describe what is tested and why: unit tests for the logic, a few tests through the API or user interface for the main workflow, and the edge cases you covered. Give one concrete bug: the symptom, how you found the cause and how a test now prevents it. Be honest about gaps (\"the frontend has no automated tests yet\").",
      followUps: ["What is not tested, and what is the risk?"],
    },
    {
      question: "What are the limitations, and what would you improve with more time or more users?",
      answer:
        "Name real limitations — single user, no pagination, no retries on an external API, manual deployment — and prioritize: what you would fix first and why. For more users, reason at a basic level: where it would slow down first (for example the database queries or one slow endpoint), and simple steps such as indexes, caching or pagination, rather than jumping to microservices.",
      followUps: ["If traffic grew tenfold tomorrow, what would break first?"],
    },
    {
      question: "What exactly did you do on this project?",
      answer:
        "Be specific and honest: which parts you designed, wrote, tested and deployed, which came from teammates, templates, tutorials or AI assistants, and which decisions were yours. For team projects say \"I\" for your work and \"we\" for shared decisions. Interviewers probe this with follow-ups; overstating your role is easy to detect and damages trust.",
      followUps: ["Which part would you have done differently if it had been entirely up to you?"],
    },
    {
      question: "Some of this code was AI-assisted. Explain how it works and how you know it is correct.",
      answer:
        "Explain it as you would any code: what it does, why it is structured that way and what its edge cases are, without the assistant. Then say how you verified it — tests, documentation, manual checks — and what you changed or rejected. If you cannot explain a part, say so honestly; it is better to show you know where your understanding stops than to guess.",
      followUps: ["Change this function so that it also handles X, without AI."],
    },
  ],
  mistakes: [
    "Starting with a list of technologies instead of the problem.",
    "Memorizing a script and struggling as soon as the interviewer interrupts.",
    "Vague answers (\"the framework handles it\") where you should trace the real code.",
    "Overstating scale, users, deployment or your personal role.",
    "Not knowing the limitations of your own project.",
    "Being unable to explain or modify AI-generated parts.",
    "Turning a project question into a large-scale system design answer nobody asked for.",
  ],
  mastery: [
    "You can explain your project in two minutes and in ten, starting from the problem, and stop for questions.",
    "You can draw its architecture and trace a real request through the code from memory.",
    "You can justify each major choice with a trade-off and name an alternative.",
    "You can make a small change or diagnose an injected failure in it, live, without AI.",
    "You can state your personal contribution and the project's limitations precisely.",
    "Skip this topic if you have already defended your project under follow-up questions and could make a live change to it without AI.",
  ],
  deprioritize: [
    "Large-scale distributed system design (load balancers, sharding, queues) beyond recognizing where they would appear.",
    "Formal architecture documentation (architecture decision records, full C4 component diagrams) beyond a short README section.",
  ],
  keywords: ["project deep dive", "architecture", "explain your project", "walk me through", "request flow", "technical decisions", "trade-offs", "diagram", "C4", "resume project"],
};

export default topic;
