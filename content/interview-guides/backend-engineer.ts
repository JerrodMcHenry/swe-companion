import type { InterviewGuide, StudyTopic } from "../types";
import softwareEngineer from "./software-engineer";

// Backend Engineer builds on the general Software Engineer competencies: the shared entries are reused
// (not copied), with a few raised for backend work, and the backend topics are added. The role's own
// stages are inserted where each employer target places its { template: "role" } marker.
const raised: Record<string, Partial<StudyTopic>> = {
  "internet-http": { priority: "Essential", depth: "Explain", reason: "REST and HTTP APIs appeared in 18 of the 28 R4 postings; every backend task starts from a request and a response." },
  "databases-sql-concepts": { priority: "Essential", depth: "Explain", reason: "SQL and relational databases appeared in 15 of 28 R4 postings — the most consistent backend requirement with REST." },
  "security-fundamentals": { priority: "Essential", depth: "Explain", reason: "Backend code handles credentials and personal data; security appeared in 11 of 28 R4 postings." },
  "deployment-ci-cd": { priority: "Important", depth: "Implement", reason: "Backend engineers deploy and operate services; CI/CD (8/28) and cloud (9/28) appeared in R4 postings, mostly as job expectations." },
  "modules-packages-project-structure": { priority: "Important", depth: "Implement", reason: "A backend service needs a clear structure for routes, logic, data access and tests." },
};

const backendTopics: StudyTopic[] = [
  { title: "HTTP APIs with FastAPI", priority: "Essential", depth: "Apply", slug: "fastapi-http-apis", reason: "Building and calling HTTP APIs is the core backend task; integration and backend practical rounds were candidate-reported at Stripe and Scale AI." },
  { title: "Validation and error responses", priority: "Essential", depth: "Implement", slug: "validation-error-responses", reason: "Every endpoint must reject bad input with clear, consistent errors; practical rounds reward it." },
  { title: "Python type hints", priority: "Important", depth: "Implement", slug: "python-type-hints", reason: "FastAPI and Pydantic are driven by type annotations, and typed code is easier to review and maintain." },
  { title: "PostgreSQL and SQL practice", priority: "Essential", depth: "Apply", slug: "postgresql-sql-practice", reason: "Backend work means writing and explaining real queries; prepare SQL interview rounds only when a posting or recruiter confirms one (no US new-grad SQL round was found in this curriculum's research)." },
  { title: "Data modeling", priority: "Essential", depth: "Implement", slug: "data-modeling", reason: "Designing tables, keys and constraints for a small domain is a routine backend task and a common project discussion." },
  { title: "Authentication and authorization", priority: "Essential", depth: "Implement", slug: "authentication-authorization", reason: "Protected endpoints and ownership checks are basic backend responsibilities; authentication concepts appeared in R4 postings." },
  { title: "Logging and configuration", priority: "Important", depth: "Implement", slug: "logging-configuration", reason: "Logging and monitoring appeared in 12 of 28 R4 postings; you diagnose production problems from logs and configuration." },
  { title: "Asynchronous programming basics", priority: "Optional", depth: "Implement", slug: "async-programming-basics", reason: "Conditional: needed when the team's framework or the posting uses async I/O; rarely named in the postings reviewed." },
];

const guide: InterviewGuide = {
  slug: "backend-engineer",
  title: "Entry-Level Backend Engineer",
  category: "Role",
  description: "What a first backend engineering job requires — APIs, data, security and operations — and how it combines with your target employer's interviews.",
  level: "Entry level",
  overview:
    "Backend engineers build and operate the services behind an application: HTTP APIs, business logic, databases, authentication and the configuration and logging that keep them running. This guide adds those competencies to the general software engineering foundation. It is taught with Python, FastAPI, PostgreSQL, pytest, Git and basic CI/CD; the concepts transfer to other stacks, but prepare for the language and framework your target posting actually names. Your employer target still sets the interview emphasis — a Big Tech backend candidate usually still faces algorithmic coding interviews.",
  guidance: [
    {
      heading: "Role expectations (this curriculum's research)",
      items: [
        "Postings ask for one backend language, building and consuming REST APIs, SQL and relational databases, Git and testing; many add code review, logging and monitoring, and security basics (R4 sample of 28 entry-level backend and full-stack postings).",
        "On the job: build and maintain endpoints and services, write unit and API tests, debug production issues, review code, and use CI/CD pipelines that already exist.",
        "Deeper requirements (Kubernetes, message queues, a specific cloud) appear mainly in team-specific or more senior roles; learn them when a posting you target requires them.",
      ],
    },
    {
      heading: "Eligibility and interviews",
      items: [
        "Eligibility (degree or equivalent, graduation timing, work authorization) is set per posting; backend skills do not change it. See Job Description Gap Analysis.",
        "Interview formats come from your employer target. Backend-specific formats — integration tasks, backend practicals, take-homes — were candidate-reported mainly at growth-stage companies and startups; dedicated SQL rounds and system design rounds are conditional for new grads.",
        "A recruiter-confirmed format or the actual job requirements override these defaults.",
      ],
    },
  ],
  competencies: [
    "Everything in the Entry-Level Software Engineer role (fluency, testing, debugging, Git, one substantial project).",
    "Building, validating, testing and documenting HTTP APIs, and calling external APIs safely.",
    "Writing and explaining SQL queries, and designing a relational schema.",
    "Authentication, authorization and secure handling of secrets.",
    "Configuration, logging and diagnosing failures in a running service.",
    "A deployed backend project you can explain and change.",
  ],
  studyTopics: [
    ...(softwareEngineer.studyTopics ?? []).map((topic) => (topic.slug && raised[topic.slug] ? { ...topic, ...raised[topic.slug] } : topic)),
    ...backendTopics,
  ],
  stages: [
    { template: "backendApis", topics: ["internet-http", "python-type-hints", "fastapi-http-apis", "validation-error-responses"], guides: ["api-integration-assessments"] },
    { template: "backendData", topics: ["databases-sql-concepts", "postgresql-sql-practice", "data-modeling"] },
    { template: "backendProduction", topics: ["security-fundamentals", "authentication-authorization", "logging-configuration", "deployment-ci-cd", "async-programming-basics"], guides: ["basic-system-design"] },
  ],
  readiness: [
    "Editorial guide, not an employer threshold: without AI, you can build a small REST resource (create, read, update, delete and a filtered list) with validation, consistent error responses and tests in a few hours.",
    "You can write joins, aggregations, subqueries and transactions in PostgreSQL unaided, and explain when an index helps.",
    "You can design tables and relationships for a small domain and justify the keys and constraints.",
    "Your backend project has authentication and authorization, environment-based configuration and useful logs, is deployed (or documented to run), and you can trace a request through it.",
    "Interview readiness still depends on your employer target; these criteria cover professional backend competence.",
  ],
  relatedGuides: [
    "/interview-prep/software-engineer",
    "/interview-prep/api-integration-assessments",
    "/interview-prep/basic-system-design",
    "/interview-prep/practical-coding-assessments",
    "/interview-prep/take-home-assignments",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/engineering-projects",
  ],
  sources: [
    { title: "SimplifyJobs New-Grad-Positions (sampling frame for the R4 posting sample)", url: "https://github.com/SimplifyJobs/New-Grad-Positions" },
    { title: "Stripe new-grad onsite: integration round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0" },
    { title: "Scale AI new-grad onsite: backend practical (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/scale-ai-new-grad-swe-virtual-onsite-cwmvy27rd8" },
  ],
};

export default guide;
