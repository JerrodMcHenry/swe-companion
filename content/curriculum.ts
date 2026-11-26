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
      "Read a traceback, find the cause of a common error and fix it.",
      "Test your code with normal and edge-case inputs, such as empty, single-item and duplicate values.",
      "Explain what your code does line by line, and say roughly how its running time grows with input size.",
    ],
    topics: [
      { slug: "python-variables-data-types" },
      { slug: "python-operators-expressions" },
      { slug: "python-strings" },
      { slug: "python-conditionals" },
      { slug: "python-loops" },
      { slug: "python-functions-arguments" },
      { planned: "Lists" },
      { planned: "Sets" },
      { slug: "python-dictionaries" },
      { planned: "Mutability, References and Copying" },
      { planned: "Sorting and Custom Sort Keys" },
      { planned: "Python Debugging (finding and fixing errors in your own code)" },
      { slug: "python-scope" },
      { planned: "Tuples" },
      { planned: "Built-in Functions" },
      { planned: "Comprehensions" },
    ],
    mastery: [
      "Move on when you can complete a few representative independent programming tasks (for example, a word-frequency counter or a simple record filter) without references, and explain and test your solution.",
      "The last four topics can be learned alongside Data Structures & Algorithms or your project; you do not need them before moving on.",
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
      "Approach an unfamiliar problem by clarifying requirements, stating a brute-force solution, then improving it, while explaining your reasoning aloud.",
      "Choose between arrays, hash maps, sets, stacks, queues, heaps, trees and graphs for a problem, and justify the choice.",
      "Recognise and apply common patterns: two pointers, sliding window, binary search, recursion and backtracking, BFS and DFS, intervals and basic dynamic programming.",
      "State the time and space complexity of your solutions, including the worst case.",
      "Dry-run your code by hand and find your own bugs before running it.",
      "Solve unfamiliar problems of interview difficulty within interview time. Big Tech targets typically practise Medium problems in about 45 minutes without AI or a compiler (an editorial practice guide, not an employer threshold).",
    ],
    topics: [
      { planned: "Problem-Solving Process and Communication" },
      { planned: "Complexity Analysis" },
      { planned: "Arrays and Strings Patterns" },
      { planned: "Hash Maps and Sets Patterns" },
      { planned: "Stacks and Queues" },
      { planned: "Linked Lists" },
      { planned: "Binary Search" },
      { planned: "Recursion and Backtracking" },
      { planned: "Trees and Binary Search Trees" },
      { planned: "Heaps and Priority Queues" },
      { planned: "Graphs: BFS, DFS and Topological Sort" },
      { planned: "Intervals and Sorting Patterns" },
      { planned: "Dynamic Programming Basics" },
      { planned: "Union-Find and Shortest Paths (conditional: Big Tech)" },
    ],
    mastery: [
      "Stop adding problem volume once you can consistently solve unfamiliar problems at your target difficulty and explain them clearly; keep skills fresh with occasional review.",
      "Python's collections, heapq and bisect modules are taught inside the relevant topics, not separately.",
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
      "Model a small problem with classes that each have a clear responsibility.",
      "Explain when to use composition and when to use inheritance, with an example.",
      "Explain the SOLID principles in your own words and recognise a violation in code.",
      "Recognise a few common design patterns (such as strategy, factory and observer) and say when one would help and when it would be overkill.",
      "Design and code a small system (such as a parking lot or library) and adapt it when requirements change.",
    ],
    topics: [
      { planned: "Classes and Objects in Python" },
      { planned: "Composition, Inheritance and Interfaces" },
      { planned: "SOLID Principles and Common Design Patterns" },
      { planned: "Designing Small Systems (Low-Level Design)" },
    ],
    mastery: [
      "Move on when you can design, code and adapt a small system and defend your choices. Pattern catalogs and advanced design theory can wait.",
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
      "Use Git branches and pull requests, write a clear pull request description and resolve a merge conflict.",
      "Work comfortably in a terminal and set up a project environment.",
      "Write unit tests for your own code and use a failing test to fix a bug.",
      "Explain what happens when a browser loads a URL, and what HTTP methods and status codes mean.",
      "Explain tables, keys and joins, what a transaction guarantees and when an index helps.",
      "Explain the difference between a process and a thread, how memory is used by a running program, and what a race condition is.",
      "Explain common security mistakes such as injection, leaked secrets and missing authorization checks.",
    ],
    topics: [
      { planned: "Git and Pull Requests" },
      { planned: "Command Line and Development Environment" },
      { planned: "Writing Automated Tests" },
      { planned: "How the Internet and HTTP Work" },
      { planned: "Databases and SQL Concepts: Transactions and Indexing" },
      { planned: "Processes, Threads, Memory and Concurrency Basics" },
      { planned: "Security Fundamentals" },
    ],
    mastery: [
      "Move on when you can demonstrate the Git workflow and test-writing, and answer the concept questions above accurately without notes. Hands-on SQL and HTTP work continues in Backend Engineering.",
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
      "Find your way around an unfamiliar repository and trace how a feature works.",
      "Find and fix a bug in unfamiliar code, explaining your reasoning as you go.",
      "Add a small feature with tests to an existing codebase without breaking existing behaviour.",
      "Review a pull request for correctness, design, tests, security and readability.",
      "Complete the same kind of task with an AI coding assistant, reviewing and testing every change and catching incorrect suggestions.",
    ],
    topics: [
      { planned: "Reading and Debugging Unfamiliar Code" },
      { planned: "Code Review" },
      { planned: "AI-Assisted Engineering and Verification" },
      { planned: "Existing-Codebase Drills" },
    ],
    mastery: [
      "Move on when you can complete codebase drills on a couple of different repositories, once without AI and once with AI. Keep doing a short drill now and then as maintenance.",
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
