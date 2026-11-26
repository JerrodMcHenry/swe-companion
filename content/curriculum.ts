import type { Phase } from "./types";
import { getTopic, topics } from "./topics";

// The apprenticeship: ten units in three stages. Units are groupings, not mandatory sequential steps.
// Readiness checklists and stopping points are editorial recommendations, not employer requirements.
export const phases: Phase[] = [
  {
    slug: "programming-fluency",
    number: 1,
    title: "Programming Fluency",
    description:
      "Enough independent programming ability to solve straightforward problems, read code and start algorithm preparation. Not a complete Python course: the first twelve topics are the core; the rest are reinforced later.",
    stage: "Foundations",
    readiness: [
      "Write functions independently from a short written description.",
      "Use variables, expressions, conditionals and loops without looking up syntax.",
      "Manipulate strings, lists, sets and dictionaries, and choose the appropriate one for a simple task.",
      "Use common built-in operations such as len, sorted, min, max, sum, enumerate and range.",
      "Explain what happens when two names refer to the same list, and avoid accidental mutation.",
      "Turn straightforward requirements into a working program of a few dozen lines.",
      "Read a traceback, find the cause of a common error and fix it, using print statements or a debugger.",
      "Test your code with normal and edge-case inputs, such as empty, single-item and duplicate values.",
      "Explain what your code does line by line, and say roughly how its running time grows with input size, for example why `x in list` is slower than `x in set`.",
      "Answer foundational language questions, such as == versus is, mutable default arguments, shallow versus deep copies and sorted() versus list.sort(), in your own words.",
    ],
    topics: [
      { slug: "python-variables-data-types" },
      { slug: "python-operators-expressions" },
      { slug: "python-strings" },
      { slug: "python-conditionals" },
      { slug: "python-loops" },
      { slug: "python-functions-arguments" },
      { slug: "python-lists" },
      { slug: "python-sets" },
      { slug: "python-dictionaries" },
      { slug: "python-mutability-references-copying" },
      { slug: "python-sorting-custom-keys" },
      { slug: "python-debugging" },
      { slug: "python-scope" },
      { planned: "Tuples" },
      { planned: "Built-in Functions" },
      { planned: "Comprehensions" },
    ],
    mastery: [
      "Move on when you can complete representative tasks like the ones below on your own, without tutorials or AI help (looking up a method name in the documentation is fine), then explain and test your solution. These are editorial practice tasks, not employer requirements, and there is no time limit; timed problem solving starts in Unit 2.",
      "Word report: given a paragraph of text, return the five most frequent words, ignoring case and punctuation, with ties broken alphabetically. Handle empty text.",
      "Gradebook: given a list of (name, score) records, return the average, the top student and a dictionary of letter grade to sorted names, without modifying the input list.",
      "Inventory merge: given two lists of product dictionaries with id, name and quantity, return one merged list with quantities summed by id, plus the set of ids that appear in only one list.",
      "Bug fix: take a short function from the Python Debugging exercises, write the failing test, fix the bug and explain the cause.",
      "If you are already fluent in another suitable language, or these tasks are easy for you, go straight to Data Structures & Algorithms.",
      "Scope, Tuples, Built-in Functions and Comprehensions can be learned alongside Data Structures & Algorithms or your project. Their essential basics are already taught inside the core topics.",
    ],
  },
  {
    slug: "data-structures-and-algorithms",
    number: 2,
    title: "Data Structures, Algorithms & Complexity",
    description:
      "The data structures, problem-solving patterns and complexity analysis used in coding interviews and online assessments, practised the way interviews run them.",
    stage: "Foundations",
    readiness: [
      "Understand an unfamiliar problem, ask about constraints and edge cases, and describe a correct straightforward approach before optimizing.",
      "Recognize which common pattern fits — hash map, two pointers, sliding window, prefix sums, stack, binary search, BFS or DFS, backtracking, heap, sorting or basic dynamic programming — and choose suitable data structures.",
      "Develop a correct solution independently, without AI, and improve an inefficient one when the constraints require it.",
      "Explain why your solution is correct, and state its time and space complexity, including the worst case and any average-case or amortized qualifications.",
      "Test and debug your code by dry-running examples and edge cases, without relying on running it.",
      "Communicate your reasoning clearly while solving, and handle follow-up questions.",
    ],
    topics: [
      { slug: "problem-solving-process" },
      { slug: "complexity-analysis" },
      { slug: "arrays-strings-patterns" },
      { slug: "hash-map-set-patterns" },
      { slug: "stacks-queues" },
      { slug: "linked-lists" },
      { slug: "binary-search" },
      { slug: "recursion-backtracking" },
      { slug: "trees-binary-search-trees" },
      { slug: "heaps-priority-queues" },
      { slug: "graphs-bfs-dfs" },
      { slug: "sorting-algorithms-intervals" },
      { slug: "dynamic-programming-basics" },
      { slug: "union-find-shortest-paths" },
    ],
    mastery: [
      "Start with Problem-Solving Process and Complexity Analysis, then work through the pattern topics. For each pattern: learn it, solve the Foundation and Reinforcement problems independently, then attempt a Transfer problem without hints. You do not need to complete every listed problem.",
      "Retention: about once a week, solve a mixed set of two or three unseen problems from earlier patterns without knowing which pattern applies, and revisit problems that exposed real weaknesses after a few days. Do not keep repeating problems you already solve confidently.",
      "Timed practice comes after you can solve problems untimed. Editorial practice guides, not employer thresholds: for general entry-level roles, aim to solve two of three unseen Easy-to-Medium problems in about 45 minutes each; for Big Tech, aim for two of three unseen Medium problems in about 45 minutes each, without AI or running code, explaining complexity.",
      "Move on once you meet your path's guide consistently over a couple of weeks; more problem volume then has diminishing returns. Keep skills fresh with occasional mixed review while you study other units and apply.",
      "Union-Find and Shortest Paths is conditional: study it only if your target employers' interviews reach that level. It is not required for general entry-level preparation.",
    ],
  },
  {
    slug: "object-oriented-programming-and-design",
    number: 3,
    title: "Object-Oriented Programming & Design",
    description:
      "Practical object-oriented programming and entry-level design: organising code so it is easy to understand and change, and handling low-level design interview questions.",
    stage: "Foundations",
    readiness: [
      "Explain core object-oriented concepts accurately without notes: classes and objects, encapsulation, abstraction, inheritance, polymorphism.",
      "Answer the interview questions in the Unit 3 topics aloud, with small examples.",
      "Implement classes that keep their state valid and test both valid and invalid operations.",
      "Choose between inheritance and composition for a scenario and justify it.",
      "Use abstraction and polymorphism appropriately, including injecting dependencies so code is testable.",
      "Identify common design problems (a class with too many responsibilities, tight coupling) and explain the relevant SOLID principle.",
      "Recognize and implement Strategy, Observer, Adapter, the Decorator pattern and a simple factory, and say when they are unnecessary.",
      "Design and implement a small system from requirements, then explain decisions, alternatives and trade-offs.",
    ],
    topics: [
      { slug: "classes-objects" },
      { slug: "composition-inheritance-interfaces" },
      { slug: "designing-small-systems" },
      { slug: "solid-design-patterns" },
    ],
    mastery: [
      "Integrated check (editorial): design and implement one of the Designing Small Systems exercises (for example the shopping cart) from its requirements in about 45 minutes, with tests for invalid operations; then add a new requirement (a new discount type) and explain which principle made the change easy or hard.",
      "General professional readiness: Implement depth across the four topics is enough. Design-heavy targets (for example Amazon, or a recruiter-confirmed design round): also do timed, unseen design problems at Apply depth using the OOP & Low-Level Design guide.",
      "You do not need to complete every exercise or pattern before applying. The full pattern catalogue, metaclasses and enterprise architecture can wait.",
    ],
  },
  {
    slug: "engineering-fundamentals",
    number: 4,
    title: "Engineering Fundamentals",
    description:
      "The everyday engineering skills and core computer science concepts used on your own code: Git, the command line, automated tests, and how the internet, databases and programs work.",
    stage: "Foundations",
    readiness: [
      "Configure and run an unfamiliar repository from its README: virtual environment, dependencies, configuration and tests.",
      "Use Git independently in a normal collaborative workflow: branch, commit, push, pull request, review changes and resolve a conflict.",
      "Write meaningful automated tests, including boundaries, error cases and a regression test before a fix.",
      "Explain the lifecycle of an HTTP request, inspect requests with curl or browser tools, and interpret common status codes.",
      "Explain relational database concepts, write basic SQL queries with joins and aggregation, and explain indexes and transactions.",
      "Explain processes, threads, memory and concurrency, including race conditions and Python's GIL.",
      "Recognize common security mistakes (injection, XSS, weak password storage, leaked secrets, missing authorization checks) and describe the prevention.",
      "Answer the interview questions in the Unit 4 topics aloud.",
    ],
    topics: [
      { slug: "git-pull-requests" },
      { slug: "command-line-environment" },
      { slug: "automated-testing" },
      { slug: "internet-http" },
      { slug: "databases-sql-concepts" },
      { slug: "computer-science-essentials" },
      { slug: "security-fundamentals" },
    ],
    mastery: [
      "Integrated practical check (editorial, no time limit required): clone an unfamiliar small Python repository, set up its environment from the README, create a branch, find and fix one failing or missing test case, make it pass, and open a pull request describing the problem, the fix and how you tested it. Note every setup problem you solved.",
      "Professional readiness is mainly the practical skills (Git, environment, testing). Interview readiness depends on your target: some employers ask the HTTP, database, operating-system and security concept questions; your target path says which.",
      "You do not need every exercise before applying. Hands-on API and SQL work continues in Backend Engineering; working in larger unfamiliar codebases continues in Practical Software Engineering.",
    ],
  },
  {
    slug: "practical-software-engineering",
    number: 5,
    title: "Practical Software Engineering",
    description:
      "Working in code you did not write: reading, tracing, debugging, extending, testing and reviewing it, both on your own and with an AI assistant whose output you verify.",
    stage: "Foundations",
    readiness: [
      "Navigate an unfamiliar repository and explain its main execution flow.",
      "Reproduce a reported bug, isolate its root cause and implement a targeted fix.",
      "Add meaningful regression tests and keep the existing test suite passing.",
      "Implement a small feature in existing code without breaking existing behavior.",
      "Review another implementation and identify correctness and maintainability concerns, prioritized.",
      "Verify AI-generated changes with tests and documentation, catching incorrect suggestions.",
      "Explain every material change you make without relying on AI.",
    ],
    topics: [
      { slug: "reading-debugging-unfamiliar-code" },
      { slug: "code-review" },
      { slug: "ai-assisted-engineering" },
      { slug: "existing-codebase-drills" },
    ],
    mastery: [
      "Integrated practical check (editorial): in an unfamiliar small codebase (for example the Gilded Rose kata, or a small library at the commit before a historical bug fix), add characterization tests, fix one bug with a regression test, implement one small feature with tests, and explain the main flow and every change aloud.",
      "Independent practice: do the check with AI assistants and AI autocomplete turned off. This is the baseline for interviews that prohibit AI.",
      "AI-assisted practice: repeat a comparable check on a different codebase or feature with an assistant, keeping a verification log, then explain every change with the assistant closed.",
      "Time limits in the drills (about 45–60 minutes per task) are editorial practice guides, not employer requirements. You do not need to complete every drill before applying; keep doing an occasional drill as maintenance.",
    ],
  },
  {
    slug: "build-and-deploy-a-project",
    number: 6,
    title: "Build and Deploy One Project",
    description:
      "One substantial project, scoped to your target role, that demonstrates integrated engineering competence. Build it while you learn Backend or Full-Stack Engineering; an existing project can count if it meets the requirements. Real users are welcome but not required.",
    stage: "Applied Engineering",
    readiness: [
      "You have a project that you can run, test and deploy, with a README explaining its architecture and trade-offs.",
      "You can explain every part of it without notes and change it without AI help.",
      "You can walk an interviewer through the problem, design decisions, hardest bug and what you would change at larger scale.",
    ],
    topics: [
      { planned: "Build and Deploy One Project (assignment)" },
      { planned: "Exception Handling" },
      { planned: "Modules and Packages" },
      { planned: "Deployment and Continuous Integration" },
      { planned: "Explaining Your Architecture (entry-level system design)" },
      { planned: "Take-Home Assignment Simulation" },
    ],
    mastery: [
      "Stop when your project is deployed, tested and documented and you can present it confidently. Build another project only to close a specific gap.",
    ],
  },
  {
    slug: "backend-engineering",
    number: 7,
    title: "Backend Engineering",
    description:
      "For backend and full-stack roles: building and operating APIs with a database. Taught with Python, FastAPI and PostgreSQL; a suitable stack you already know works too. SQL here is professional job knowledge; dedicated SQL interview rounds depend on the employer.",
    stage: "Applied Engineering",
    readiness: [
      "Without AI, implement a small REST resource with create, read, update, delete and filtered listing, including validation, error responses and tests.",
      "Write SQL with joins, grouping, aggregation and transactions, and explain when to add an index.",
      "Design tables and relationships for a small domain and justify them.",
      "Explain how a request moves through your application and where authentication, validation and logging happen.",
      "Implement authentication and authorization, and avoid common security mistakes.",
      "Deploy the service and explain how it is configured and logged.",
    ],
    topics: [
      { planned: "HTTP APIs with FastAPI" },
      { planned: "Validation and Error Responses" },
      { planned: "Type Hints" },
      { planned: "SQL in Practice: Queries, Joins, Transactions and Indexes" },
      { planned: "Data Modeling" },
      { planned: "Authentication and Authorization" },
      { planned: "Logging and Configuration" },
      { planned: "Async and Concurrency Basics for Backends (conditional)" },
    ],
    mastery: [
      "Move on when you can meet the checklist above and your project's backend demonstrates it. Microservices, message queues and database tuning can wait until a role requires them.",
    ],
  },
  {
    slug: "full-stack-engineering",
    number: 8,
    title: "Full-Stack Engineering",
    description:
      "For full-stack roles only: building a web frontend and connecting it to your backend. Taught with JavaScript, TypeScript and React.",
    stage: "Applied Engineering",
    readiness: [
      "Explain JavaScript fundamentals such as functions, objects, arrays, promises and async/await, and add TypeScript types to them.",
      "Explain how the browser builds and updates the DOM and handles events.",
      "Without AI, build a React component with a form, validation, an API call and loading and error states.",
      "Debug a broken React feature in unfamiliar code using browser developer tools.",
      "Make a form usable with a keyboard and screen reader, and deploy the frontend with your backend.",
    ],
    topics: [
      { planned: "JavaScript Fundamentals" },
      { planned: "TypeScript Essentials" },
      { planned: "HTML and CSS Essentials" },
      { planned: "Browser and DOM Fundamentals" },
      { planned: "React Fundamentals" },
      { planned: "Forms, API Calls and UI States" },
      { planned: "Frontend Testing and Debugging" },
      { planned: "Accessibility Basics" },
    ],
    mastery: [
      "Move on when you can meet the checklist above and your project includes a working frontend. A second framework can wait until a role requires it.",
    ],
  },
  {
    slug: "interview-preparation",
    number: 9,
    title: "Interview Preparation",
    description:
      "Preparation for your target companies, roles and interview formats. Start early: practise interview-style problem solving and behavioral stories from the first unit.",
    stage: "Employment Preparation",
    sectionHref: "/interview-prep",
  },
  {
    slug: "getting-hired",
    number: 10,
    title: "Getting Hired",
    description:
      "Targeting roles, analysing job descriptions, resumes, portfolios, networking and applications. Begin applying once you are eligible and reasonably prepared, and keep learning alongside.",
    stage: "Employment Preparation",
    sectionHref: "/getting-hired",
  },
];

export function getPhase(slug: string) {
  return phases.find((phase) => phase.slug === slug);
}

// Build-time checks for internal references. Any failure stops the build.
const phaseSlugs = new Set<string>();
const phaseNumbers = new Set<number>();
for (const phase of phases) {
  if (phaseSlugs.has(phase.slug)) throw new Error(`Duplicate phase slug: ${phase.slug}`);
  if (phaseNumbers.has(phase.number)) throw new Error(`Duplicate phase number: ${phase.number}`);
  phaseSlugs.add(phase.slug);
  phaseNumbers.add(phase.number);
  for (const item of phase.topics ?? []) {
    if ("slug" in item && !getTopic(item.slug)) {
      throw new Error(`Phase "${phase.slug}" references unknown topic: ${item.slug}`);
    }
  }
}
for (const topic of topics) {
  if (!phaseSlugs.has(topic.phase)) throw new Error(`Topic "${topic.slug}" references unknown phase: ${topic.phase}`);
}
