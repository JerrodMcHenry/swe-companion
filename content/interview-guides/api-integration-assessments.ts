import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "api-integration-assessments",
  title: "API and Integration Assessments",
  category: "Interview type",
  description: "Practical rounds where you build, extend or call an HTTP API: reading documentation, handling data and errors, testing and explaining trade-offs.",
  level: "Entry level",
  overview:
    "In an API or integration assessment you work with a real or simulated HTTP API: call an external service and process its JSON, add an endpoint to an existing backend, or combine several data sources into a result. It checks whether you can read unfamiliar documentation, handle real-world data and failures, test your work and explain your decisions — closer to the job than an algorithm puzzle. It is conditional: in this curriculum's research it was candidate-reported mainly at growth-stage companies and startups, not in Big Tech new-grad loops.",
  guidance: [
    {
      heading: "Evidence and limitations",
      items: [
        "Candidate-reported: Stripe new-grad onsites included an integration round (a JSON/API task; payment reconciliation and request replay); Scale AI's onsite included a backend practical in an existing repository; a Klaviyo internship loop included extending a Python web app with SQL; Wise graduate reports describe a REST data task (mostly UK).",
        "Job postings commonly list building and consuming REST APIs (18 of 28 entry-level backend and full-stack postings in the R4 sample) — that establishes job expectations, not interview prevalence.",
        "Formats, tools and AI rules differ per employer and change; confirm them with your recruiter. Candidate reports are single accounts, not guarantees.",
      ],
    },
    {
      heading: "What is usually assessed (editorial summary)",
      items: [
        "Understanding the requirements and the API's documentation before coding: endpoints, parameters, authentication, pagination, rate limits and error formats.",
        "Correct data handling: parsing JSON, missing or malformed fields, types (amounts as strings, timestamps), duplicates and ordering.",
        "Failure handling: timeouts, non-2xx responses, retries only where safe (idempotency), and clear errors for your own callers.",
        "Validation, status codes and authentication headers when you build or modify an endpoint.",
        "Tests for the main path and the edge cases, and debugging by reading responses and logs.",
        "Communicating as you go: assumptions, trade-offs and what you would do with more time.",
      ],
    },
  ],
  process: [
    "Usually a 45–90 minute round (time varies; editorial range), in your own editor or a provided repository, often with documentation and sometimes with AI allowed.",
    "Typical shapes: call an API and transform its data; add or fix an endpoint in an existing service; extend the task in stages as the interviewer adds requirements.",
    "Follow-up questions on failure cases, testing and how your solution would change at larger scale.",
  ],
  competencies: [
    "Reading API documentation and an unfamiliar codebase quickly.",
    "Making and handling HTTP requests and JSON correctly.",
    "Validation, error handling and appropriate status codes.",
    "Authentication headers and secret handling (never hard-code keys).",
    "Testing and debugging under time pressure.",
    "Explaining assumptions and trade-offs aloud.",
  ],
  studyTopics: [
    { title: "HTTP APIs with FastAPI", priority: "Essential", depth: "Apply", slug: "fastapi-http-apis", reason: "Both halves of the round: building endpoints and calling external APIs with timeouts and error handling." },
    { title: "Validation and error responses", priority: "Essential", depth: "Implement", slug: "validation-error-responses", reason: "Malformed input and clear errors are where integration tasks are won or lost." },
    { title: "How the Internet and HTTP work", priority: "Essential", depth: "Explain", slug: "internet-http", reason: "Methods, status codes, headers and JSON are the vocabulary of every integration task." },
    { title: "Reading and debugging unfamiliar code", priority: "Important", depth: "Apply", slug: "reading-debugging-unfamiliar-code", reason: "Many rounds start from an existing repository or library." },
    { title: "Automated testing", priority: "Important", depth: "Implement", slug: "automated-testing", reason: "Testing the main path and edge cases is part of a complete answer." },
    { title: "Authentication and authorization", priority: "Optional", depth: "Implement", slug: "authentication-authorization", reason: "When the task requires API keys, tokens or protected endpoints." },
  ],
  sequence: [
    "Learn the HTTP and FastAPI topics until you can build a small tested CRUD API and call an external API with a timeout and error handling.",
    "Practise reading real API documentation: pagination, rate limits and error formats on a public API.",
    "Do one timed integration exercise from the practice list, alone and without AI, talking through your assumptions.",
    "Repeat in your target's conditions (AI allowed or not, your own editor or theirs) and extend it with a new requirement.",
  ],
  practice: [
    {
      title: "Consume a public API with pagination and rate limits",
      url: "https://docs.github.com/en/rest/using-the-rest-api/using-pagination-in-the-rest-api",
      note: "Use GitHub's REST API documentation (pagination, rate limits, best practices): write a small Python script that lists all of a public organisation's repositories across pages, handles a 403/429 rate-limit response and a timeout, and prints a summary. Demonstrates reading docs, pagination and failure handling. Unauthenticated requests work at a low rate limit; a free account raises it — keep tokens out of your code.",
    },
    {
      title: "Pick a public API and build a small integration",
      url: "https://github.com/public-apis/public-apis",
      note: "Choose a free API from this community list (prefer ones marked with no auth or an API key), and add an endpoint to your backend project that calls it, validates and transforms the response, and returns clear errors when the upstream service fails. Add tests that replace the external call with a fake. Listings can go stale; check the API's own terms.",
    },
    {
      title: "Practise on real published briefs",
      url: "https://github.com/CollabCodeTech/backend-challenges",
      note: "Many briefs in this list of openly published back-end assignments are API builds or integrations (many are in Portuguese; links can go stale). Pick one, timebox it to about 90 minutes (editorial), and write down your assumptions and next steps.",
    },
    {
      title: "Read about idempotency before you retry",
      url: "https://docs.stripe.com/api/idempotent_requests",
      note: "Stripe's API reference explains idempotency keys. Read it, then explain aloud when retrying a failed request is safe and when it could charge someone twice.",
    },
  ],
  readiness: [
    "Editorial guide, not an employer threshold: within about 90 minutes and without AI, you can call a documented API, handle pagination, timeouts and error responses, transform the data correctly and test it.",
    "You can add an endpoint to an existing small service with validation, appropriate status codes and tests.",
    "You state assumptions about unclear data before coding and explain what you would change with more time.",
    "You know whether your target employer uses integration or practical rounds, and its AI and tool rules, or you will ask.",
  ],
  relatedGuides: ["/interview-prep/practical-coding-assessments", "/interview-prep/debugging-code-review", "/interview-prep/take-home-assignments", "/interview-prep/ai-assisted-coding"],
  sources: [
    { title: "Stripe new-grad onsite: integration round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-and-virtual-onsite-2-experiences-4bh59j9rh0" },
    { title: "Stripe new-grad onsite and HM round (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-stripe-new-grad-swe-phone-screen-onsite-and-hm-round-1-experience-4hwnoqtl0q" },
    { title: "Scale AI new-grad onsite: backend practical (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/scale-ai-new-grad-swe-virtual-onsite-cwmvy27rd8" },
    { title: "Klaviyo internship interviews (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2021-2026-klaviyo-intern-interviews-ai-engineer-intern-update-14-swe-experiences-tb0w7ynaed" },
    { title: "Wise graduate SWE OA and interviews (candidate-reported, FastPrep)", url: "https://fastprep.io/experience/2022-2026-wise-graduate-swe-oa-interviews-14-experiences-3r7sysvngq" },
  ],
};

export default guide;
