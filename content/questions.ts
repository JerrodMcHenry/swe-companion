import type { QuestionSet } from "./types";
import python from "./questions/python";
import dsa from "./questions/data-structures-algorithms";
import oop from "./questions/oop-solid";
import lld from "./questions/low-level-design";
import systemDesign from "./questions/system-design";
import sql from "./questions/sql-databases";
import os from "./questions/operating-systems";
import networking from "./questions/networking";
import apis from "./questions/apis";
import backend from "./questions/backend-engineering";
import javascript from "./questions/javascript";
import typescript from "./questions/typescript";
import react from "./questions/react";
import htmlCss from "./questions/html-css-accessibility";
import testing from "./questions/testing-debugging";
import git from "./questions/git-tools-ai";
import behavioral from "./questions/behavioral";
import projects from "./questions/projects-take-homes";
import aiEngineering from "./questions/ai-engineering";
import customerScenarios from "./questions/customer-scenarios";
import cpp from "./questions/cpp";

const TIH = "https://www.techinterviewhandbook.org";
const DI = "https://github.com/Devinterview-io";

// Every question set, in the order shown on the homepage and in the Resource Library.
export const questionSets: QuestionSet[] = [
  {
    slug: "python",
    title: "Python",
    description: "Language questions from coding rounds and technical screens: the data model, collections, functions and errors.",
    questions: python,
    resources: [
      { title: "DevInterview — Python interview questions", url: `${DI}/python-interview-questions`, note: "About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium. Check anything surprising against the official docs." },
      { title: "Python Programming FAQ", url: "https://docs.python.org/3/faq/programming.html", note: "Official reference that answers many classic interview questions (default arguments, copying, scope)." },
    ],
  },
  {
    slug: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    description: "How to approach a coding problem, complexity analysis, and the core patterns behind most coding questions.",
    questions: dsa,
    resources: [
      { title: "Coding interview techniques", url: `${TIH}/coding-interview-techniques/`, note: "Tech Interview Handbook: how to clarify, communicate and test during a coding interview. Free." },
      { title: "Algorithms study cheatsheets", url: `${TIH}/algorithms/study-cheatsheet/`, note: "Tech Interview Handbook: per-topic techniques, corner cases and recommended problems. Free." },
      { title: "NeetCode roadmap", url: "https://neetcode.io/roadmap", note: "Problems grouped by pattern, each with a free video explanation. A free account saves progress; the Pro course is paid." },
    ],
  },
  {
    slug: "oop-solid",
    title: "OOP & SOLID",
    description: "Classes, inheritance versus composition, the SOLID principles and the design patterns entry-level interviews ask about.",
    questions: oop,
    resources: [
      { title: "Refactoring.Guru — design patterns", url: "https://refactoring.guru/design-patterns/catalog", note: "Clear illustrated explanations of each classic pattern. The pattern pages are free; the book and code examples package are paid." },
      { title: "DevInterview — OOP interview questions", url: `${DI}/oop-interview-questions`, note: "About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium." },
      { title: "Awesome Low-Level Design — OOP and SOLID", url: "https://github.com/ashishps1/awesome-low-level-design", note: "Free articles on OOP concepts, SOLID and patterns, linked from the repository's README." },
    ],
  },
  {
    slug: "low-level-design",
    title: "Low-Level Design",
    description: "Object-oriented design rounds: clarify requirements, model classes and responsibilities, and handle changing requirements.",
    questions: lld,
    resources: [
      { title: "Awesome Low-Level Design — problems", url: "https://github.com/ashishps1/awesome-low-level-design#-low-level-design-interview-problems", note: "Common LLD problems (parking lot, LRU cache, library system…) with solutions in several languages. Free." },
      { title: "System Design Primer — Object-oriented design questions", url: "https://github.com/donnemartin/system-design-primer#object-oriented-design-interview-questions-with-solutions", note: "Worked notebooks for classic OOD prompts (parking lot, call center, deck of cards). Free." },
    ],
  },
  {
    slug: "system-design",
    title: "System Design",
    description: "Entry-level design discussions: requirements, an API, a data model, components and simple scaling trade-offs.",
    questions: systemDesign,
    resources: [
      { title: "Hello Interview — System Design in a Hurry", url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction", note: "A concise framework and core concepts. Free to read at the time of review; the site sells coaching." },
      { title: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", note: "The standard free reference. At entry level read the interview approach and the load balancer, database and cache sections; skip the rest unless your recruiter confirms a design round." },
    ],
  },
  {
    slug: "ai-engineering",
    title: "AI Engineering",
    description: "Building products on LLMs: fundamentals, RAG, agents and tool calling, evaluation, production, security and AI system design.",
    questions: aiEngineering,
    resources: [
      { title: "Anthropic — Building effective agents", url: "https://www.anthropic.com/engineering/building-effective-agents", note: "Workflows versus agents and the common patterns, with when not to build an agent. Free." },
      { title: "Chip Huyen — Building a generative AI platform", url: "https://huyenchip.com/2024/07/25/genai-platform.html", note: "The best single overview of a production LLM system: context, guardrails, routing, caching and observability. Free." },
      { title: "Hamel Husain and Shreya Shankar — AI Evals FAQ", url: "https://hamel.dev/blog/posts/evals-faq/", note: "Practical answers on error analysis, LLM judges and RAG evaluation. Free (the authors also sell a course)." },
      { title: "AI Engineering Field Guide — interview questions", url: "https://github.com/alexeygrigorev/ai-engineering-field-guide", note: "Theory and AI system design questions collected from candidate reports, each cited. Questions only, no answers. Free." },
    ],
  },
  {
    slug: "cpp",
    title: "C++",
    description: "C++ for systems and trading-firm interviews: memory, object lifetime, move semantics, polymorphism, containers, undefined behaviour and concurrency.",
    questions: cpp,
    resources: [
      { title: "C++ Super-FAQ (isocpp.org)", url: "https://isocpp.org/wiki/faq/virtual-functions", note: "Question-and-answer reference from the Standard C++ Foundation; see also its rvalue-reference and memory-management pages. Free." },
      { title: "LearnCpp — Smart pointers and move semantics", url: "https://www.learncpp.com/cpp-tutorial/introduction-to-smart-pointers-move-semantics/", note: "Chapter 22 explains move semantics, unique_ptr and shared_ptr clearly; chapter 25 covers virtual functions and the vtable. Free." },
      { title: "C++ Core Guidelines — Resource management", url: "https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#s-resource", note: "Authoritative rules on RAII, ownership and smart pointers to cite in answers. Free." },
    ],
  },
  {
    slug: "sql-databases",
    title: "SQL & Databases",
    description: "Joins, grouping, NULLs, window functions, indexes, transactions and schema design.",
    questions: sql,
    resources: [
      { title: "LeetCode — SQL 50", url: "https://leetcode.com/studyplan/top-sql-50/", note: "Fifty SQL interview problems, mostly easy with some medium. Free; needs a LeetCode account." },
      { title: "PostgreSQL Exercises", url: "https://pgexercises.com/questions/basic/", note: "Interactive exercises on joins, aggregates and window functions in the browser. Free, no account." },
      { title: "DevInterview — SQL interview questions", url: `${DI}/sql-interview-questions`, note: "About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium." },
      { title: "Use The Index, Luke — Anatomy of an index", url: "https://use-the-index-luke.com/sql/anatomy", note: "The clearest free explanation of how indexes work, for performance questions." },
    ],
  },
  {
    slug: "operating-systems",
    title: "Operating Systems & Concurrency",
    description: "Processes and threads, memory, concurrency, race conditions and deadlocks, plus performance and low latency for systems roles.",
    questions: os,
    resources: [
      { title: "DevInterview — Concurrency interview questions", url: `${DI}/concurrency-interview-questions`, note: "Threads, locks and synchronization. About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium." },
      { title: "Carl Cook — When a Microsecond Is an Eternity (CppCon 2017)", url: "https://www.youtube.com/watch?v=NH1Tta7purM", note: "A trading-firm engineer on low-latency C++: caches, allocation, branching and measurement. Free video." },
      { title: "Algorithmica — CPU cache", url: "https://en.algorithmica.org/hpc/cpu-cache/", note: "Clear explanation of cache lines, locality and memory bandwidth with benchmarks. Free." },
      { title: "Erik Rigtorp — Optimizing a ring buffer for throughput", url: "https://rigtorp.se/ringbuffer/", note: "A lock-free single-producer single-consumer queue in C++, including false-sharing fixes. Free." },
    ],
  },
  {
    slug: "networking",
    title: "Networking & HTTP",
    description: "What happens when you load a page: DNS, TCP and UDP, HTTPS, HTTP methods and status codes.",
    questions: networking,
    resources: [
      { title: "What happens when…", url: "https://github.com/alex/what-happens-when", note: "A detailed community answer to the classic \"what happens when you type a URL\" question. Read the parts on DNS, TCP, TLS and HTTP." },
      { title: "MDN — An overview of HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview", note: "Official-quality reference for HTTP basics." },
    ],
  },
  {
    slug: "apis",
    title: "APIs",
    description: "Designing REST endpoints, validation and error responses, calling other services, and authentication.",
    questions: apis,
    resources: [
      { title: "MDN — HTTP response status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status", note: "Reference for choosing status codes." },
      { title: "OWASP API Security Top 10", url: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/", note: "The common API security risks, such as broken object-level authorization. Free." },
    ],
  },
  {
    slug: "backend-engineering",
    title: "Backend Engineering",
    description: "Security basics, logging and configuration, async request handling, deployment and CI/CD.",
    questions: backend,
    resources: [
      { title: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", note: "The standard list of web application security risks. Free." },
      { title: "The Twelve-Factor App", url: "https://12factor.net/", note: "Short principles for configuration, logs and deployment that come up in backend interviews. Free." },
    ],
  },
  {
    slug: "javascript",
    title: "JavaScript & the Browser",
    description: "Equality, closures, this, the event loop, promises, the DOM, events, storage and CORS.",
    questions: javascript,
    resources: [
      { title: "JavaScript interview questions (sudheerj)", url: "https://github.com/sudheerj/javascript-interview-questions", note: "A widely used free list of JavaScript questions with answers and coding exercises." },
      { title: "DevInterview — JavaScript interview questions", url: `${DI}/javascript-interview-questions`, note: "About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium." },
      { title: "javascript.info — Event loop", url: "https://javascript.info/event-loop", note: "Reference with output-prediction tasks for the event loop. Free." },
    ],
  },
  {
    slug: "typescript",
    title: "TypeScript",
    description: "Types versus runtime data, narrowing, unions, generics and strict mode.",
    questions: typescript,
    resources: [
      { title: "DevInterview — TypeScript interview questions", url: `${DI}/typescript-interview-questions`, note: "About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium." },
      { title: "TypeScript Handbook — Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html", note: "Official reference for the most-asked TypeScript concept." },
    ],
  },
  {
    slug: "react",
    title: "React",
    description: "Props and state, rendering, effects, forms and data fetching, and testing components.",
    questions: react,
    resources: [
      { title: "React interview questions (sudheerj)", url: "https://github.com/sudheerj/reactjs-interview-questions", note: "A widely used free list of React questions with answers. Some answers cover older class-component APIs; prefer the current React docs." },
      { title: "React docs — You Might Not Need an Effect", url: "https://react.dev/learn/you-might-not-need-an-effect", note: "Official guidance behind many useEffect questions." },
    ],
  },
  {
    slug: "html-css-accessibility",
    title: "HTML, CSS & Accessibility",
    description: "Semantic HTML, the box model, layout, responsive design and accessible components.",
    questions: htmlCss,
    resources: [
      { title: "DevInterview — CSS interview questions", url: `${DI}/css-interview-questions`, note: "About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium." },
      { title: "MDN — Accessibility", url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility", note: "Reference for semantic HTML, ARIA and keyboard support." },
    ],
  },
  {
    slug: "testing-debugging",
    title: "Testing & Debugging",
    description: "Test types and test design, debugging unfamiliar code, and code review.",
    questions: testing,
    resources: [
      { title: "The Practical Test Pyramid", url: "https://martinfowler.com/articles/practical-test-pyramid.html", note: "Free article explaining unit, integration and end-to-end tests and their trade-offs." },
      { title: "Google — Code review: what to look for", url: "https://google.github.io/eng-practices/review/reviewer/looking-for.html", note: "Google's public engineering-practices guide; a good checklist for code review questions." },
    ],
  },
  {
    slug: "git-tools-ai",
    title: "Git, Tools & AI-Assisted Coding",
    description: "Git workflows and conflicts, the command line, and using and verifying AI coding tools.",
    questions: git,
    resources: [
      { title: "DevInterview — Git interview questions", url: `${DI}/git-interview-questions`, note: "About 15 questions with answers are free in the GitHub README; the rest are on devinterview.io and mostly premium." },
      { title: "Pro Git — Git Branching", url: "https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell", note: "The official free book; the branching and rebasing chapters answer most Git questions." },
    ],
  },
  {
    slug: "behavioral",
    title: "Behavioral",
    description: "Structure, a story bank and the questions most entry-level behavioral interviews cover.",
    questions: behavioral,
    resources: [
      { title: "Behavioral interview guide", url: `${TIH}/behavioral-interview/`, note: "Tech Interview Handbook: how behavioral rounds work and how to prepare. Free." },
      { title: "Behavioral interview questions", url: `${TIH}/behavioral-interview-questions/`, note: "Tech Interview Handbook: questions reported at many companies. Ignore senior-level ones." },
      { title: "Interviewing at Google: tips", url: "https://www.google.com/about/careers/applications/interview-tips", note: "Official guidance on behavioral and hypothetical questions." },
    ],
  },
  {
    slug: "projects-take-homes",
    title: "Projects & Take-Homes",
    description: "Project deep dives and take-home assignments: explaining your work, decisions, testing and AI use.",
    questions: projects,
    resources: [
      { title: "Self introduction", url: `${TIH}/self-introduction/`, note: "Tech Interview Handbook: a short structure for introducing yourself and your project. Free." },
    ],
  },
  {
    slug: "customer-scenarios",
    title: "Customer & Solutions Scenarios",
    description: "Scenario questions for customer-facing engineers: discovery, building in customer environments and stakeholder communication.",
    questions: customerScenarios,
    resources: [
      { title: "The Pragmatic Engineer — What are forward deployed engineers?", url: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers", note: "What the role involves at Palantir, OpenAI and others, and how it differs from solutions engineering. Free." },
      { title: "AI Engineering Field Guide — FDE role analysis", url: "https://github.com/alexeygrigorev/ai-engineering-field-guide/blob/main/role/06-fde.md", note: "Analysis of FDE job listings: growth, responsibilities and the skills employers ask for. Describes job expectations, not interview content. Free." },
    ],
  },
];

export function getQuestionSet(slug: string) {
  return questionSets.find((set) => set.slug === slug);
}

// Build-time checks.
for (const set of questionSets) {
  if (set.questions.length === 0) throw new Error(`Question set ${set.slug} is empty`);
  const seen = new Set<string>();
  for (const q of set.questions) {
    if (seen.has(q.question)) throw new Error(`Duplicate question in ${set.slug}: ${q.question}`);
    seen.add(q.question);
  }
}
if (new Set(questionSets.map((s) => s.slug)).size !== questionSets.length) throw new Error("Duplicate question set slug");
