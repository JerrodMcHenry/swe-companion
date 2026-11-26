import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "rapid-fire-technical-questions",
  title: "Rapid-Fire Technical Questions",
  category: "Interview type",
  description: "Short conceptual questions about your language, data structures, complexity and engineering fundamentals, and how to answer them well.",
  level: "Entry level",
  overview:
    "Some interviews include quick conceptual questions: \"What is the difference between a list and a tuple?\", \"What is a hash collision?\", \"What does HTTP 404 mean?\" A dedicated rapid-fire round is not common at most employers in this curriculum's research; it appeared in one Apple new-grad candidate report (Java fundamentals) and as multiple-choice questions in some online assessments. More often, these questions appear inside coding interviews (\"why did you use that built-in?\"), project discussions and recruiter or hiring-manager screens. Treat this as conditional preparation that you mostly get for free by studying the Library topics properly. The Library is the canonical home for topic questions and model answers; this guide teaches you how to answer and what to prioritize.",
  process: [
    "Inside coding interviews: follow-up questions about the data structures and built-ins you used and their costs. A Google L3 candidate report describes an interviewer questioning the use of a Python built-in.",
    "Online assessments: some include multiple-choice questions on programming concepts, HTTP or SQL alongside coding (reported for some graduate online assessments in this curriculum's research).",
    "Dedicated fundamentals round: reported at some employers, for example nine Java fundamentals questions in one 2026 Apple new-grad report. Amazon's official topic list includes \"programming language\" among interview topics.",
    "Project discussions and screens: questions about the technologies on your resume. Anything you list is fair game.",
    "Ask your recruiter whether a knowledge round is part of the process; do not assume one.",
  ],
  competencies: [
    "Give a concise, accurate definition in one or two sentences.",
    "Explain the behavior: how it works or what happens.",
    "Give a small, concrete example, ideally from code you have written.",
    "Add a comparison or trade-off where it helps (\"a tuple is immutable, so it can be a dictionary key; a list cannot\").",
    "Handle follow-ups that ask why, at what cost, compared with what, and where you have used it.",
    "Say clearly when you do not know, and reason from what you do know.",
  ],
  studyTopics: [
    {
      title: "Python fundamentals: types, truthiness, equality versus identity, mutability and copying",
      priority: "Essential",
      slug: "python-mutability-references-copying",
      reason: "The most commonly recommended language questions. Also review the interview questions in Variables and Data Types, Operators and Expressions, and Functions and Arguments (mutable defaults, argument passing).",
    },
    {
      title: "Built-in collections and their costs: lists, tuples, sets, dictionaries, strings",
      priority: "Essential",
      slug: "python-dictionaries",
      reason: "Know what each is for and the cost of common operations. See also Lists, Sets, Strings and Sorting and Custom Sort Keys.",
    },
    {
      title: "Complexity analysis",
      priority: "Essential",
      slug: "complexity-analysis",
      reason: "Big O, worst versus average versus amortized, and the cost of the built-ins you use.",
    },
    {
      title: "Data structure concepts: hash tables, stacks, queues, heaps, trees, graphs",
      priority: "Essential",
      slug: "hash-map-set-patterns",
      reason: "How each works, when to use it and its operation costs. Each Data Structures & Algorithms topic has conceptual questions with model answers.",
    },
    {
      title: "Debugging and errors",
      priority: "Important",
      slug: "python-debugging",
      reason: "Common exceptions, reading tracebacks and how you would investigate a bug.",
    },
    {
      title: "Scope and functions",
      priority: "Important",
      slug: "python-scope",
      reason: "LEGB, global and nonlocal, and UnboundLocalError are classic short questions.",
    },
    {
      title: "Object-oriented programming",
      priority: "Important",
      depth: "Explain",
      slug: "classes-objects",
      reason: "Classes, encapsulation, the four pillars and Python's object model; continue with Composition, Inheritance and Interfaces and SOLID and Common Design Patterns. These questions are more common for Java and C# roles.",
    },
    {
      title: "Testing, Git and engineering fundamentals",
      priority: "Important",
      depth: "Explain",
      slug: "automated-testing",
      reason: "Unit versus integration tests, mocks, coverage; continue with Git and Pull Requests for merge versus rebase and revert versus reset.",
    },
    {
      title: "Databases and SQL (conditional)",
      priority: "Optional",
      depth: "Explain",
      slug: "databases-sql-concepts",
      reason: "Joins, keys, indexes and transactions. Prioritize for backend and data-heavy roles or when the posting lists SQL.",
    },
    {
      title: "Networking and HTTP (conditional)",
      priority: "Optional",
      depth: "Explain",
      slug: "internet-http",
      reason: "What happens when you load a URL, HTTP methods and status codes. Prioritize for web, backend and full-stack roles.",
    },
    {
      title: "Operating systems and security concepts (conditional)",
      priority: "Optional",
      depth: "Explain",
      slug: "computer-science-essentials",
      reason: "Processes versus threads, memory and concurrency; see also Security Fundamentals for authentication versus authorization and common vulnerabilities.",
    },
    {
      title: "Technologies on your resume and in your project",
      priority: "Essential",
      reason: "Be ready to explain every framework, database and tool you list: what it does, why you chose it and one limitation.",
    },
  ],
  sequence: [
    "Study the Library topics for your target role; their interview questions and model answers are your question bank. Do not build a separate list of hundreds of questions.",
    "For each topic, close the page and answer its questions aloud in 30–90 seconds using definition, behavior, example and trade-off. Check your answer against the model answer.",
    "Add the technologies on your resume: write one-line definitions and one trade-off for each, and be able to point to where you used it.",
    "Practise follow-ups: after each answer, ask yourself \"why?\", \"what does it cost?\", \"what is the alternative?\" and \"where have you used it?\"",
    "Revisit only the questions you answered poorly, a few days later.",
  ],
  practice: [
    {
      title: "Random-question drill",
      note: "Pick five interview questions at random from different Library topics and answer each aloud without notes. Two or three short sessions a week alongside coding practice are enough.",
    },
    {
      title: "Explain your own code",
      note: "For a solution you wrote recently, explain each data structure and built-in you used, why, and its cost. This mirrors how knowledge questions appear in coding interviews.",
    },
    {
      title: "Peer quiz",
      note: "Have a friend ask questions from the Library and interrupt with follow-ups. Practise saying \"I'm not sure, but here is how I would reason about it.\"",
    },
    {
      title: "When you do not know the answer",
      note: "Do not bluff. Say you are not certain, share what you do know and reason towards an answer (\"I haven't used that, but if it works like X, I'd expect…\"), and say how you would check. Honest reasoning scores better than confident errors.",
    },
  ],
  resources: [
    {
      title: "Python Programming FAQ",
      url: "https://docs.python.org/3/faq/programming.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Official answers to many classic Python questions (mutable defaults, copying, scope, argument passing). Use it to check your understanding, not to memorize.",
    },
    {
      title: "Python Design and History FAQ",
      url: "https://docs.python.org/3/faq/design.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Official explanations of why strings are immutable, why dictionary keys must be hashable and why list.sort() returns None.",
    },
  ],
  readiness: [
    "You can answer the interview questions in the Programming Fluency and Data Structures & Algorithms topics aloud, without notes, using definition, behavior, example and trade-off.",
    "You can explain the cost of every built-in and data structure you use in your solutions.",
    "You can explain every technology on your resume and one limitation of each.",
    "You handle an unknown question honestly and reason towards an answer.",
    "For roles that list them, you also cover the OOP, testing, SQL, HTTP, operating-system and security topics linked above.",
  ],
  relatedGuides: ["/interview-prep/coding-algorithms", "/interview-prep/oop-low-level-design", "/getting-hired/resume"],
  sources: [
    { title: "Amazon — Software development interview topics (includes \"programming language\")", url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics" },
    { title: "Candidate report — 2026 Apple new grad SWE: HR call, Java questions, coding and manager round (FastPrep)", url: "https://www.fastprep.io/experience/2026-apple-new-grad-swe-hr-call-java-questions-coding-and-manager-round-1-experi-52ej2p4ouy" },
    { title: "Candidate report — Google New Grad Software Engineer (L3) interview experience, 2026 (Aced)", url: "https://www.aced.io/experiences/google-software-engineer-interview-54740a" },
  ],
};

export default guide;
