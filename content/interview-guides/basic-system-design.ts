import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "basic-system-design",
  title: "Basic System Design (conditional)",
  category: "Interview type",
  description: "Entry-level design discussions: requirements, API boundaries, a data model, components and simple scaling trade-offs — not senior distributed systems.",
  level: "Entry level",
  overview:
    "A basic system design discussion asks you to sketch how a small product would work: what it must do, the API it exposes, how data is stored, which components handle what, how a request flows through them, and what changes as usage grows. At entry level the expectation is clear structure and sensible trade-offs, not deep distributed-systems knowledge. It is conditional: this curriculum's research found it in some startup and AI-company new-grad loops, not in Big Tech new-grad reports. Prepare for it when your target is one of those employers or a recruiter confirms a design round.",
  guidance: [
    {
      heading: "Evidence and limitations",
      items: [
        "Candidate-reported: system design appeared in new-grad onsites at Decagon and Plaud (a social feed) and in xAI's loop; Capital One's AI/ML track lists a system design interview (official, AI/ML roles only).",
        "Not observed in Big Tech new-grad reports reviewed; official Big Tech pages mention design generically or for more experienced levels (Amazon adds system design explicitly at SDE II). Absence of evidence does not mean it is never asked.",
        "Evidence is small and conflicting (low confidence). Confirm with your recruiter; do not prepare senior-level design by default.",
      ],
    },
    {
      heading: "What entry-level design looks like (editorial)",
      items: [
        "Clarify requirements and scope first: users, core features, rough scale, what is out of scope.",
        "Define the API: a few endpoints with methods, inputs and outputs.",
        "Sketch a data model: tables, keys and relationships for the core entities.",
        "Draw components with clear responsibilities (client, API service, database, maybe a cache or background worker) and trace one request end to end.",
        "Reliability basics: what happens when the database or an external service is slow or down; validation, retries and timeouts.",
        "Simple scaling trade-offs: indexes, pagination, caching, stateless servers behind a load balancer — and why you would not start with microservices.",
        "Explain each decision with a trade-off; it is fine to say what you do not know and reason from first principles.",
      ],
    },
  ],
  competencies: [
    "Turning a vague product prompt into clear requirements and scope.",
    "Designing a small HTTP API and a relational data model.",
    "Describing components, request flow and failure handling.",
    "Reasoning about simple scaling options and their costs.",
    "Explaining decisions and trade-offs clearly.",
  ],
  studyTopics: [
    { title: "Designing small systems", priority: "Essential", depth: "Apply", slug: "designing-small-systems", reason: "Structuring a small program into components with clear responsibilities is the core of an entry-level design answer." },
    { title: "HTTP APIs with FastAPI", priority: "Important", depth: "Apply", slug: "fastapi-http-apis", reason: "Defining endpoints, methods and status codes for the design's API boundary." },
    { title: "Data modeling", priority: "Essential", depth: "Implement", slug: "data-modeling", reason: "Tables, keys and relationships for the core entities are expected in most design discussions." },
    { title: "How the Internet and HTTP work", priority: "Important", depth: "Explain", slug: "internet-http", reason: "Request flow, DNS, HTTPS and caching vocabulary." },
    { title: "Explaining project architecture", priority: "Important", depth: "Apply", slug: "explaining-project-architecture", reason: "Your own project is the best rehearsal: the same components, flow and trade-offs." },
  ],
  sequence: [
    "First be able to explain your own project's architecture and trace a request through it.",
    "Read the System Design Primer's interview approach and the few topic sections listed below; skip the rest.",
    "Practise two small prompts aloud (for example a URL shortener and a simple feed) using the four steps: requirements, API and data model, components and flow, then scaling and failures.",
    "If your target confirms a design round, do one mock discussion with a peer and ask for follow-up questions.",
  ],
  resources: [
    {
      title: "System Design Primer — How to approach a system design interview question",
      url: "https://github.com/donnemartin/system-design-primer#how-to-approach-a-system-design-interview-question",
      provider: "Donne Martin (GitHub, open source)",
      type: "Repository",
      instructions:
        "Start here. Read the four steps (use cases and constraints, high-level design, core components, scaling). Treat back-of-the-envelope calculations as optional at entry level. Free; no account.",
    },
    {
      title: "System Design Primer — topic sections",
      url: "https://github.com/donnemartin/system-design-primer#system-design-topics-start-here",
      provider: "Donne Martin (GitHub, open source)",
      type: "Repository",
      instructions:
        "Then read only: Performance vs scalability, Latency vs throughput, Load balancer (introduction and horizontal scaling), Database (the RDBMS introduction and indexes-related parts), and Cache (introduction and when to update the cache). Optional: the Harvard scalability lecture linked under \"Step 1\" for a one-hour video overview. Skip CAP, consistency patterns, sharding, federation and NoSQL details unless your target requires them. Free; no account.",
    },
    {
      title: "System Design Primer — Design Pastebin.com (or Bit.ly)",
      url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md",
      provider: "Donne Martin (GitHub, open source)",
      type: "Repository",
      instructions:
        "A worked small design. Attempt it yourself first (requirements, API, data model, components), then compare. The later scaling steps go beyond entry level; read them as optional. Free; no account.",
    },
    {
      title: "Hello Interview — System Design in a Hurry",
      url: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction",
      provider: "Hello Interview",
      type: "Article",
      instructions:
        "Alternative written overview with a delivery framework. Read the introduction and the delivery section; the core concepts are optional. Free to read at the time of review; the site sells paid coaching, so links may change.",
    },
  ],
  practice: [
    {
      title: "Design a URL shortener aloud",
      url: "https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md",
      note: "In 35–45 minutes (editorial), talk through requirements, two or three endpoints, a table design, components and one request's flow; then compare with the primer's solution and note what you missed.",
    },
    {
      title: "Explain how your own project would handle ten times the users",
      note: "Apply to your project: name what would slow down first (a query, an endpoint), and the simplest fix (an index, pagination, caching), with its cost. This is the most realistic entry-level design question.",
    },
    {
      title: "Mock design discussion with a peer",
      note: "Have a peer give you a small prompt (for example a simple feed or a booking system) and interrupt with follow-up questions on failures and scale. Free peer mock platforms exist; check their current terms.",
    },
  ],
  readiness: [
    "Editorial guide, not an employer threshold: for a small prompt, you can produce requirements, an API, a data model, a component diagram and one request flow in about 35–45 minutes, explaining each decision.",
    "You can name what breaks first as usage grows and propose simple fixes with their trade-offs.",
    "You can explain your own project's architecture in the same structure.",
    "If your target does not use design rounds, skip this guide beyond explaining your own project.",
  ],
  relatedGuides: ["/interview-prep/project-deep-dives", "/interview-prep/oop-low-level-design", "/interview-prep/api-integration-assessments"],
  sources: [
    { title: "Decagon new-grad interviews (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2026-decagon-new-grad-swe-interviews-1-experience-4p0yzlfvh5" },
    { title: "Plaud new-grad onsite (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/plaud-new-grad-swe-onsite-interview-experience-1-experience-cx8d9z234f" },
    { title: "xAI AI coding interview and take-home (candidate-reported, FastPrep)", url: "https://www.fastprep.io/experience/2025-2026-xai-ai-coding-interview-building-with-ai-new-grad-take-home-onsite-3-e-1vhv6zjyey" },
    { title: "Capital One — Insider tips for AI & machine learning interviews (official)", url: "https://www.capitalonecareers.com/insider-tips-for-ai-and-machine-learning-interviews-tech-101-cdev" },
    { title: "Amazon — SDE II interview prep (official; marks what is added above entry level)", url: "https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep" },
  ],
};

export default guide;
