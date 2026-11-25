import type { Phase } from "./types";
import { getTopic, topics } from "./topics";

// The apprenticeship, in order. Descriptions are preliminary and pending editorial review.
export const phases: Phase[] = [
  {
    slug: "programming-mastery",
    number: 1,
    title: "Programming Mastery",
    description: "Core Python: data types, control flow, functions and the language features used in everyday engineering.",
    stage: "Foundations",
    topics: [
      { slug: "python-variables-data-types" },
      { slug: "python-operators-expressions" },
      { slug: "python-strings" },
      { slug: "python-conditionals" },
      { slug: "python-loops" },
      { slug: "python-functions-arguments" },
      { slug: "python-scope" },
      { planned: "Lists" },
      { planned: "Tuples" },
      { planned: "Sets" },
      { slug: "python-dictionaries" },
      { planned: "Mutability, References and Copying" },
      { planned: "Built-in Functions" },
      { planned: "Sorting and Custom Sort Keys" },
      { planned: "Comprehensions" },
      { planned: "Exception Handling" },
      { planned: "Modules and Packages" },
      { planned: "File Handling" },
      { planned: "Type Hints" },
      { planned: "Iterators and Generators" },
      { planned: "Decorators" },
      { planned: "Standard Library Essentials" },
      { planned: "Python Debugging" },
      { planned: "Integrated Programming Exercises" },
    ],
  },
  {
    slug: "object-oriented-programming",
    number: 2,
    title: "Object-Oriented Programming",
    description: "Classes, objects, inheritance, composition and modelling problems with objects.",
    stage: "Foundations",
  },
  {
    slug: "data-structures-and-algorithms",
    number: 3,
    title: "Data Structures & Algorithms",
    description: "Common data structures, algorithmic techniques and complexity analysis.",
    stage: "Foundations",
  },
  {
    slug: "computer-science-fundamentals",
    number: 4,
    title: "Computer Science Fundamentals",
    description: "How computers, operating systems, memory and concurrency work beneath your code.",
    stage: "Foundations",
  },
  {
    slug: "developer-tools",
    number: 5,
    title: "Developer Tools",
    description: "The command line, Git, editors and the everyday tools of professional development.",
    stage: "Foundations",
  },
  {
    slug: "sql-and-databases",
    number: 6,
    title: "SQL & Databases",
    description: "Relational data modelling, SQL queries and how applications store data.",
    stage: "Applied Engineering",
  },
  {
    slug: "networking-and-internet",
    number: 7,
    title: "Networking & Internet",
    description: "How data moves across networks, from IP and DNS to HTTP.",
    stage: "Applied Engineering",
  },
  {
    slug: "backend-engineering",
    number: 8,
    title: "Backend Engineering",
    description: "Building server-side applications and APIs.",
    stage: "Applied Engineering",
  },
  {
    slug: "frontend-engineering",
    number: 9,
    title: "Frontend Engineering",
    description: "Building user interfaces for the web.",
    stage: "Applied Engineering",
  },
  {
    slug: "testing-and-software-quality",
    number: 10,
    title: "Testing & Software Quality",
    description: "Writing tests and keeping code correct and maintainable.",
    stage: "Applied Engineering",
  },
  {
    slug: "software-design",
    number: 11,
    title: "Software Design",
    description: "Design principles, including SOLID, for code that is easy to change.",
    stage: "Applied Engineering",
  },
  {
    slug: "cloud-and-devops",
    number: 12,
    title: "Cloud & DevOps",
    description: "Deploying, running and automating software in the cloud.",
    stage: "Applied Engineering",
  },
  {
    slug: "system-design",
    number: 13,
    title: "System Design",
    description: "Designing scalable, reliable systems and reasoning about trade-offs.",
    stage: "Applied Engineering",
  },
  {
    slug: "ai-assisted-engineering",
    number: 14,
    title: "AI-Assisted Engineering",
    description: "Using AI tools effectively and responsibly in software development.",
    stage: "Applied Engineering",
  },
  {
    slug: "practical-engineering-projects",
    number: 15,
    title: "Practical Engineering Projects",
    description: "Applying your skills to complete projects that demonstrate employable ability.",
    stage: "Applied Engineering",
  },
  {
    slug: "technical-interviews",
    number: 16,
    title: "Technical Interviews",
    description: "Preparing for coding, system design and technical screening interviews.",
    stage: "Employment Preparation",
  },
  {
    slug: "behavioral-interviews",
    number: 17,
    title: "Behavioral Interviews",
    description: "Preparing to discuss your experience, decisions and working style.",
    stage: "Employment Preparation",
  },
  {
    slug: "getting-hired",
    number: 18,
    title: "Getting Hired",
    description: "Resumes, portfolios, networking and applications.",
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
