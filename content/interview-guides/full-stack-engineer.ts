import type { InterviewGuide, StudyTopic } from "../types";
import softwareEngineer from "./software-engineer";

// Full-Stack Engineer builds on the general Software Engineer competencies: the shared entries are reused
// (not copied), a few are raised for full-stack work, and the frontend topics and the backend topics a
// full-stack engineer needs are added. Backend depth is deliberately lower than in Backend Engineer: enough
// to build and own the API behind your frontend, not two separate specializations. The role's own stages
// are inserted where each employer target places its { template: "role" } marker.
const raised: Record<string, Partial<StudyTopic>> = {
  "internet-http": { priority: "Essential", depth: "Explain", reason: "Every full-stack feature crosses HTTP; REST/HTTP APIs appeared in 18 of the 28 R4 postings." },
  "databases-sql-concepts": { priority: "Essential", depth: "Explain", reason: "Full-stack postings usually name a relational database; SQL appeared in 15 of 28 R4 postings." },
  "security-fundamentals": { priority: "Essential", depth: "Explain", reason: "Frontend and backend both handle user input and credentials (XSS, CSRF, injection); security appeared in 11 of 28 R4 postings." },
  "deployment-ci-cd": { priority: "Important", depth: "Implement", reason: "Full-stack postings, especially at startups, expect a deployed app; deploy the frontend and the API together once." },
};

const fullStackTopics: StudyTopic[] = [
  { title: "JavaScript fundamentals", priority: "Essential", depth: "Implement", slug: "javascript-fundamentals", reason: "JavaScript appeared in 16 and TypeScript in 19 of the 28 R4 postings; it is the language of every frontend." },
  { title: "TypeScript fundamentals", priority: "Essential", depth: "Implement", slug: "typescript-fundamentals", reason: "TypeScript was the most-named language in the R4 postings (19 of 28); a Notion new-grad debugging round used a React/TypeScript codebase (candidate-reported)." },
  { title: "HTML and CSS fundamentals", priority: "Essential", depth: "Implement", slug: "html-css-fundamentals", reason: "Every screen you build needs semantic structure and a responsive layout; HTML/CSS edits appeared in one reported online assessment (Accenture India)." },
  { title: "Browser and DOM fundamentals", priority: "Important", depth: "Implement", slug: "browser-dom-fundamentals", reason: "Events, fetch, storage, CORS and developer tools explain most frontend and integration bugs." },
  { title: "React fundamentals", priority: "Essential", depth: "Apply", slug: "react-fundamentals", reason: "React appeared in 18 of 28 R4 postings — no other frontend framework came close. Learn one framework well." },
  { title: "Forms, API integration and UI states", priority: "Essential", depth: "Apply", slug: "forms-api-integration-ui-states", reason: "Connecting a form to your API with validation, loading and error states is the core full-stack task, and the shape of reported app-building rounds (Klaviyo internship)." },
  { title: "Frontend testing and debugging", priority: "Important", depth: "Implement", slug: "frontend-testing-debugging", reason: "Testing appeared in 17 of 28 postings; reported full-stack rounds debug existing React code with developer tools." },
  { title: "Web accessibility fundamentals", priority: "Important", depth: "Implement", slug: "web-accessibility-fundamentals", reason: "Named in 4 of 28 postings, but basic keyboard, label and contrast work is part of any professional frontend." },
  { title: "HTTP APIs with FastAPI", priority: "Essential", depth: "Implement", slug: "fastapi-http-apis", reason: "You build the API your frontend calls; full-stack postings ask for building and consuming APIs end to end." },
  { title: "Validation and error responses", priority: "Essential", depth: "Implement", slug: "validation-error-responses", reason: "The server must validate everything the frontend sends, and return errors the UI can show." },
  { title: "PostgreSQL and SQL practice", priority: "Important", depth: "Implement", slug: "postgresql-sql-practice", reason: "Enough SQL to query and change your project's data; dedicated SQL rounds are conditional (none found in US new-grad evidence)." },
  { title: "Data modeling", priority: "Important", depth: "Implement", slug: "data-modeling", reason: "Your project needs a sensible schema you can justify in a project deep dive." },
  { title: "Authentication and authorization", priority: "Essential", depth: "Implement", slug: "authentication-authorization", reason: "Login, protected routes and ownership checks span both frontend and backend; R4 postings name authentication best practices." },
  { title: "Logging and configuration", priority: "Optional", depth: "Implement", slug: "logging-configuration", reason: "Useful once your app is deployed; environment-based configuration matters for both frontend and API." },
  { title: "Python type hints", priority: "Optional", depth: "Implement", slug: "python-type-hints", reason: "Helps with FastAPI and Pydantic; skip it if TypeScript already taught you the idea and your backend code is small." },
  { title: "Asynchronous programming basics", priority: "Defer", slug: "async-programming-basics", reason: "Backend async I/O is rarely needed for a full-stack project; frontend async is covered in JavaScript Fundamentals." },
];

const guide: InterviewGuide = {
  slug: "full-stack-engineer",
  title: "Entry-Level Full-Stack Engineer",
  category: "Role",
  description: "What a first full-stack job requires — a React frontend, the API and database behind it, and shipping both — and how it combines with your target employer's interviews.",
  level: "Entry level",
  overview:
    "Full-stack engineers build features end to end: the screens users see, the API they call and the data behind it. This guide adds frontend competencies and the backend you need to own a feature to the general software engineering foundation — enough of each to build, test, ship and explain one working application, not two separate specializations. It is taught with JavaScript, TypeScript, React, HTML and CSS on the frontend and Python, FastAPI and PostgreSQL on the backend, with Git, automated testing and basic CI/CD. The competencies transfer to other frameworks; if your target postings are TypeScript end to end (Node.js), use that backend instead of Python — learn one stack, not both. Your employer target still sets the interview emphasis: a Big Tech full-stack candidate usually still faces algorithmic coding interviews.",
  guidance: [
    {
      heading: "Role expectations (this curriculum's research)",
      items: [
        "In the R4 sample of 28 entry-level backend and full-stack postings (15 full-stack), frontend-capable roles converge on TypeScript (19) and React (18); HTML/CSS was named in 6, Next.js in 7 and Angular or Vue in only 2.",
        "On the job: build UI components and backend endpoints end to end, integrate third-party APIs, handle authentication, improve responsiveness and accessibility, debug across frontend and backend, write tests and deploy.",
        "Startup full-stack roles emphasize product sense and shipping; established and enterprise roles emphasize testing, reviews and reliability.",
        "Next.js, a second frontend framework, state-management libraries and advanced CSS are learned when a posting or your project requires them.",
      ],
    },
    {
      heading: "Eligibility and interviews",
      items: [
        "Eligibility (degree or equivalent, graduation timing, work authorization) is set per posting; full-stack skills do not change it. See Job Description Gap Analysis.",
        "Interview formats come from your employer target. Full-stack-specific formats were candidate-reported only at some employers: debugging an existing React/TypeScript codebase (Notion), building a small frontend plus API app (Klaviyo internship), an HTML/CSS/JS edit in an online assessment (Accenture India), and take-homes or work trials at startups. Do not assume every full-stack role uses the same frontend format.",
        "A recruiter-confirmed format or the actual job requirements override these defaults.",
      ],
    },
    {
      heading: "Your project",
      items: [
        "One full-stack project (or an existing one) that demonstrates: a usable React frontend, a working API, persistent data, validation and error handling on both sides, authentication and authorization where the app needs them, automated tests, a basic deployment of frontend and API, and a README.",
        "You can explain and change any part of it without AI. A small, finished, tested app beats a large unfinished one; no elaborate portfolio, second framework or advanced infrastructure is needed.",
        "Use Build and Deploy a Project and the Engineering Projects guide; do not rebuild a project that already demonstrates these.",
      ],
    },
  ],
  competencies: [
    "Everything in the Entry-Level Software Engineer role (fluency, testing, debugging, Git, one substantial project).",
    "JavaScript and TypeScript for the frontend, with semantic HTML and responsive CSS.",
    "React components, state and effects; forms that call an API and handle loading, error and empty states.",
    "Building the API and schema behind your frontend, with validation and authentication.",
    "Debugging across browser, network and server; frontend and API tests.",
    "Basic accessibility, and one deployment of frontend and backend together.",
  ],
  studyTopics: [
    ...(softwareEngineer.studyTopics ?? []).map((topic) => (topic.slug && raised[topic.slug] ? { ...topic, ...raised[topic.slug] } : topic)),
    ...fullStackTopics,
  ],
  stages: [
    { template: "fsWeb", topics: ["internet-http", "javascript-fundamentals", "typescript-fundamentals", "html-css-fundamentals", "browser-dom-fundamentals"] },
    { template: "fsBackend", topics: ["fastapi-http-apis", "validation-error-responses", "databases-sql-concepts", "postgresql-sql-practice", "data-modeling", "python-type-hints"], guides: ["api-integration-assessments"] },
    { template: "fsReact", topics: ["react-fundamentals", "forms-api-integration-ui-states", "web-accessibility-fundamentals", "frontend-testing-debugging"], guides: ["practical-coding-assessments", "debugging-code-review"] },
    { template: "fsProduction", topics: ["security-fundamentals", "authentication-authorization", "deployment-ci-cd", "logging-configuration"], guides: ["basic-system-design"] },
  ],
  readiness: [
    "Editorial guide, not an employer threshold: without AI, you can build a React component with a form, client-side validation, an API call and loading and error states in about 60 minutes.",
    "You can debug a broken feature in unfamiliar React code using the browser's developer tools and the Network panel.",
    "You can build a small validated, tested API with a relational schema for your frontend to call.",
    "Your project works end to end — frontend, API and database, with authentication where needed — is deployed (or documented to run), usable with a keyboard, and you can trace one user action through every layer.",
    "Interview readiness still depends on your employer target; these criteria cover professional full-stack competence.",
  ],
  relatedGuides: [
    "/interview-prep/software-engineer",
    "/interview-prep/backend-engineer",
    "/interview-prep/practical-coding-assessments",
    "/interview-prep/debugging-code-review",
    "/interview-prep/api-integration-assessments",
    "/interview-prep/take-home-assignments",
    "/interview-prep/project-deep-dives",
    "/interview-prep/basic-system-design",
    "/getting-hired/job-description-gap-analysis",
    "/getting-hired/engineering-projects",
  ],
  sources: [
    { title: "SimplifyJobs New-Grad-Positions (sampling frame for the R4 posting sample)", url: "https://github.com/SimplifyJobs/New-Grad-Positions" },
    { title: "Notion new-grad assessments and onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-notion-new-grad-assessments-and-virtual-onsite-invitations-2-experiences-2tarwra7ip" },
    { title: "Klaviyo internship interviews (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2021-2026-klaviyo-intern-interviews-ai-engineer-intern-update-14-swe-experiences-tb0w7ynaed" },
    { title: "Accenture new-grad online assessment (candidate-reported, FastPrep; India)", url: "https://www.fastprep.io/experience/accenture-new-grad-sde-oa-interviews-ase-aase-aae-aeh-2025-2026-current-experien-x8g4q1maot" },
  ],
};

export default guide;
