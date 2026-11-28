import type { Question } from "../types";

// Scenario questions for customer-facing engineering roles: Forward Deployed Engineer and Solutions Engineer.
// Answers are original preparation advice (free interview-specific resources for these rounds are scarce): use your
// own experience and the employer's context. Answers with line breaks are checklists.
const questions: Question[] = [
  {
    group: "Discovery & scoping",
    question: "A customer asks for “an AI assistant for our support team”. How do you turn that into something you can build?",
    answer:
      "Find the problem behind the request: who uses it, which tasks take the most time, what a good outcome looks like and how it is measured today. Look at real examples, such as recent tickets. Then propose a narrow first version that addresses one high-value task, state your assumptions and what is out of scope, and agree on success criteria and a date to review results. Keep the customer involved with early demos rather than disappearing for weeks.",
    followUps: ["What would you do if two stakeholders want different things?"],
  },
  {
    group: "Discovery & scoping",
    question: "How do you define success criteria for a proof of concept?",
    answer:
      "Agree before building, in writing, on measurable outcomes tied to the customer's goal: for example, answers correct on 85% of a test set of 100 real questions chosen with the customer, response time under five seconds, and a named team using it for two weeks. Include constraints (data that cannot leave their environment, required integrations) and the decision the result will inform. Vague criteria such as “impress leadership” make success impossible to prove.",
  },
  {
    group: "Discovery & scoping",
    question: "How do you handle an ambiguous or changing customer requirement?",
    answer:
      "Ask what decision or problem the requirement serves, offer two or three concrete options with their trade-offs, and confirm the choice in writing. Build the smallest version that tests the riskiest assumption, show it early and adjust. When requirements change, restate the impact on scope and timeline so the change is a decision, not a surprise.",
  },
  {
    group: "Discovery & scoping",
    question: "How would you run a technical discovery call?",
    answer:
      "Prepare, then listen more than you talk. Research the company and the attendees, state the goal of the call at the start and leave with an agreed next step. A checklist:\n1. Problem: what business problem, why now, and what happens if nothing changes.\n2. Users and workflow: who is affected and how they work today.\n3. Current architecture: systems, data sources, cloud, identity provider and existing integrations.\n4. Requirements: must-haves versus nice-to-haves, volumes, latency and availability.\n5. Constraints: security, compliance, data residency, budget and timeline.\n6. Decision: who decides, who evaluates technically and how success will be judged.\n7. Close: summarize what you heard, confirm it and agree what happens next.",
    followUps: ["The customer only wants to see a demo. What do you do?", "How do you discover requirements the customer has not mentioned?"],
  },
  {
    group: "Discovery & scoping",
    question: "How do you learn a customer's existing architecture quickly?",
    answer:
      "Ask for, or sketch together, a diagram of how data flows today: the source systems, where data is stored, how services authenticate, the cloud and network boundaries, and who owns each part. Ask about volumes, peak load and what breaks most often. Then confirm the integration points your product would touch and the constraints at each one (a firewall that blocks inbound traffic, a single sign-on requirement, a change-approval process). Write it up and have them correct it; a shared, accurate diagram prevents surprises later in a proof of concept.",
  },
  {
    group: "Discovery & scoping",
    question: "How do you translate a business need into technical requirements?",
    answer:
      "Restate the need as a measurable outcome, then work backwards. “Reduce onboarding time” becomes “create accounts automatically from the HR system within an hour of hire”, which implies an integration with the HR system's API or SCIM, a mapping of fields, error handling for incomplete records and an audit log. For each requirement, note the volume, latency, security and reliability expectations, and mark what is required for the first release versus later. Confirm the list with both the business owner and the technical owner.",
  },
  {
    group: "Building in customer environments",
    question: "How would you integrate an LLM into an existing enterprise workflow?",
    answer:
      "Map the current workflow and pick the step where the model adds clear value with an acceptable error rate, such as drafting a response a person approves. Integrate through the systems people already use, via their APIs or webhooks; authenticate with the customer's identity provider; respect their data-handling rules; keep a human in the loop for consequential actions; and log inputs and outputs for review. Measure time saved and error rate against the old process.",
    followUps: ["How do you roll it out without disrupting the team?"],
  },
  {
    group: "Building in customer environments",
    question: "How would you design a secure RAG application for an enterprise customer?",
    answer:
      "Start from their constraints: where data may be stored and processed, identity provider and single sign-on, permission model, audit and retention rules. Enforce document permissions at retrieval time from source-system ACLs, encrypt data in transit and at rest, keep secrets in their secret manager, isolate tenants, log access for audit, and limit what the model can do with tools. Document the data flow for their security review and plan for prompt injection in ingested documents.",
    source: { title: "OWASP — Top 10 for LLM applications", url: "https://genai.owasp.org/llm-top-10/" },
  },
  {
    group: "Building in customer environments",
    question: "An integration that worked yesterday is failing in the customer's production environment. How do you diagnose it?",
    answer:
      "Establish scope and impact first: which requests, since when, all users or some. Check what changed: deployments, configuration, credentials, certificates, rate limits, the other system's API version. Reproduce with a single request and read the full error and logs on both sides. Communicate status to the customer early with a next update time. After fixing, add monitoring or a test so the same failure is caught sooner, and write a short incident note.",
  },
  {
    group: "Building in customer environments",
    question: "The customer's AI application is giving inaccurate answers. How do you investigate?",
    answer:
      "Collect concrete failing examples with the customer, then trace each one: was the right document retrieved, was it in the prompt, did the model ignore it, or is the source itself outdated? Group the failures by cause, fix the biggest group first (often retrieval or stale data), and build an evaluation set from the examples so you can show the customer measured improvement rather than anecdotes.",
  },
  {
    group: "Building in customer environments",
    question: "How would you reduce inference latency and cost for a customer deployment?",
    answer:
      "Measure where time and tokens go, then apply the simplest changes first: shorter prompts and outputs, fewer retrieved chunks, streaming, caching repeated prefixes and answers, and smaller models for easy steps. Agree with the customer on the quality bar and check every change against their evaluation set. Present the result as a trade-off table: latency, cost per request and quality for each option.",
  },
  {
    group: "Demos & proofs of concept",
    question: "How would you demonstrate a product to a skeptical engineering team?",
    answer:
      "Engineers want proof, not a pitch: show how it actually works on a problem they described in discovery. A checklist:\n1. Before: confirm attendees and their concerns, rehearse, use realistic data and prepare a backup (a recording or screenshots).\n2. Open with their problem and the outcome you will show, in one or two sentences.\n3. Show the workflow that solves it, not every feature.\n4. Show what engineers care about: the API calls, configuration, logs, documentation and what happens when something fails.\n5. Invite them to drive or suggest inputs, and pause for questions.\n6. Be honest about limitations; credibility matters more than a perfect demo.\n7. Close by agreeing the success criteria and the next step, such as a hands-on trial.",
    followUps: ["The demo breaks halfway through. What do you do?"],
  },
  {
    group: "Demos & proofs of concept",
    question: "How would you design a proof of concept for an enterprise customer?",
    answer:
      "Treat it as a short project that answers one question: will this work for them? Test the two or three riskiest requirements rather than everything. Agree written success criteria, a fixed timeline, the environment and data you may use (with their security approval) and who on their side will spend time on it. Schedule regular check-ins, track issues openly and finish with a review against the criteria and a decision. Build it so it can lead to production rather than a throwaway, and push back on scope creep that turns the proof of concept into free consulting.",
    followUps: ["The customer keeps adding requirements mid-way. What do you do?"],
  },
  {
    group: "Demos & proofs of concept",
    question: "How would you structure a technical presentation for an audience of executives and engineers?",
    answer:
      "Lead with the problem and your recommendation in one or two sentences, then show a simple architecture diagram at the level the room needs. Give executives the business outcome, cost and risk; give engineers the integration points, security model and trade-offs, with detail held for questions or an appendix. Keep to time, check for questions at natural breaks and end with the decision or next step you need. Send a written summary afterwards so people who missed it get the same message.",
  },
  {
    group: "Integration, security & architecture",
    question: "A customer cannot get their first API integration working. How would you troubleshoot it?",
    answer:
      "Reproduce it with the smallest possible request, for example with curl and their credentials in a test environment, and read the full error response, including any request id. Then check the usual causes in order: the wrong environment or base URL (sandbox keys against production), authentication (expired token, missing scope, wrong header), the request itself (method, content type, required fields, encoding), the network (firewall, proxy, allowlisted IP addresses, TLS), rate limits and, for webhooks, whether the endpoint is reachable and verifies signatures correctly. Compare with a working example from the documentation, check server-side logs using the request id, and afterwards fix the documentation if it caused the confusion.",
    followUps: ["The request works with curl but fails from their application. What next?"],
  },
  {
    group: "Integration, security & architecture",
    question: "How would you explain OAuth to a nontechnical stakeholder?",
    answer:
      "Use an analogy, then tie it to their concern. “OAuth lets you give an app limited access to your account without giving it your password. It is like a hotel key card: the front desk checks who you are and gives you a card that opens only your room, stops working after checkout and can be cancelled at any time.” Then translate: our product never sees employees' passwords, access is limited to what it needs, it expires, and your administrators can revoke it. Save the technical details, such as the authorization code flow and token lifetimes, for the engineers.",
    source: { title: "Okta — An illustrated guide to OAuth and OpenID Connect", url: "https://developer.okta.com/blog/2019/10/21/illustrated-guide-to-oauth-and-oidc" },
  },
  {
    group: "Integration, security & architecture",
    question: "A customer's security team has concerns about your product. How do you respond, and how do you communicate a limitation?",
    answer:
      "Answer from the company's approved security documentation, involve your security team for anything not covered, and never guess or promise what you cannot confirm. Explain the data flow concretely: what data is collected, where it is stored and processed, how it is encrypted, who can access it, retention and deletion, single sign-on and audit logs. If something they need is not supported, such as hosting in their region, say so early and plainly, explain the reason, offer any supported workaround and share roadmap plans only if they are officially committed. Write the answers down so the account team gives consistent information.",
  },
  {
    group: "Integration, security & architecture",
    question: "A customer asks how your product would fit into their cloud environment. What do you cover?",
    answer:
      "Draw the data flow between their environment and yours, then go through the main concerns: network connectivity (public internet with TLS or private connectivity), identity and access (single sign-on for users, short-lived roles with least privilege rather than long-lived keys for services), regions and data residency, scaling and availability, failure modes and what happens during an outage, monitoring, and the main cost drivers. A framework such as the AWS Well-Architected pillars (operational excellence, security, reliability, performance efficiency, cost optimization and sustainability) is a useful checklist so you do not miss an area.",
    source: { title: "AWS Well-Architected Framework", url: "https://docs.aws.amazon.com/wellarchitected/latest/framework/workloads.html" },
  },
  {
    group: "Objections & business value",
    question: "A customer needs something your product does not support. What do you do?",
    answer:
      "Confirm the underlying need first; it may be met another way. Check that it is really unsupported (configuration, the API, a partner integration). Say so honestly and early, then offer the best supported option, such as a workaround through the API or a change in process, with its trade-offs. Record the gap for the product team with the customer's context and impact. Never promise a feature or a date you cannot commit to; if the gap is a deal-breaker, it is better for both sides to find out now.",
  },
  {
    group: "Objections & business value",
    question: "How do you handle a technical objection, such as “we could build this ourselves”?",
    answer:
      "Listen fully, ask what is driving the concern and acknowledge what is valid; building it yourself can be the right choice. Then compare honestly on what matters to them: the total cost of building and maintaining it, time to value, the engineers it would take away from their core product, and the risks your product already handles. For performance, security or scale objections, respond with evidence (benchmarks, architecture, documentation, references) or agree to test the concern in a proof of concept against their criteria. Do not argue or criticize competitors.",
  },
  {
    group: "Objections & business value",
    question: "How do you measure and communicate the business value of a technical solution?",
    answer:
      "Tie it to a metric the customer agreed matters in discovery, and measure a baseline before you start. Translate technical results into that metric: hours saved multiplied by the number of people and their cost, faster revenue, fewer incidents or lower infrastructure spend. State assumptions, use conservative ranges and let the customer check the numbers; a figure they helped build is more persuasive than an impressive one they doubt.",
  },
  {
    group: "Objections & business value",
    question: "How do you manage several technical stakeholders with different priorities?",
    answer:
      "Map who is involved and what each needs: the person who decides, technical evaluators, end users, security, procurement. Keep one shared plan with goals, requirements, owners and dates. Handle deep technical topics in focused sessions with the right people, confirm decisions in writing, and resolve conflicting requests by returning to the agreed goal and the person who owns the decision. Keep your own sales, product and support colleagues informed so the customer hears one consistent story.",
  },
  {
    group: "Communication & ownership",
    question: "How would you explain a technical trade-off to a nontechnical stakeholder?",
    answer:
      "Lead with the decision and its business impact, not the mechanism: “Option A answers in two seconds but is wrong about one in ten times; Option B is right more often but takes eight seconds and costs twice as much.” Use their metrics, offer a recommendation with the reason, and say what you would need to change your mind. Avoid jargon, and check understanding by asking which option fits their goal.",
  },
  {
    group: "Communication & ownership",
    question: "A customer asks for a feature you think is a bad idea. What do you do?",
    answer:
      "Understand the goal behind the request first; it may be valid even if the proposed solution is not. Explain your concern concretely (risk, cost, maintenance, security) and propose an alternative that meets the goal. If they still want it and it is safe, document the trade-off and agree on how you will measure it. Escalate only when it would create real harm or violate policy.",
  },
  {
    group: "Communication & ownership",
    question: "How do you turn work for one customer into something that helps many?",
    answer:
      "Notice repeated patterns across deployments, such as the same connector, evaluation or workflow being rebuilt, and feed them back to the product team with evidence: how many customers, how much time it costs. Build customer-specific code so the general parts are reusable, and document what you learned. At employers where forward deployed engineers feed work back into the product, this is a core part of the role's value; at others it happens less, so ask how it works there.",
    source: { title: "The Pragmatic Engineer — What are forward deployed engineers?", url: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers" },
  },
  {
    group: "Communication & ownership",
    question: "Why do you want a forward deployed role rather than a product engineering role?",
    answer:
      "Give a specific, honest answer that links your experience to the role's mix of work: writing production code, working directly with users, handling ambiguity, often some travel, and seeing the impact of your work quickly. Mention a real example of working with a user or stakeholder; a class project or part-time job is fine, but do not invent customer experience. Show you understand the trade-offs, such as context switching and less time on one codebase, and why they suit you.",
  },
  {
    group: "Communication & ownership",
    question: "How does solutions engineering differ from forward deployed engineering, and why do you want a solutions role?",
    answer:
      "Titles vary, so describe the responsibilities: solutions engineers and solutions architects usually help customers evaluate, design and adopt a product (discovery, demos, proofs of concept and architecture guidance), often working closely with sales; forward deployed postings usually make shipping production software in customer environments the main measure of success. There is no universal pre-sales versus post-sales split: some solutions architects own delivery and adoption, and some forward deployed engineers run discovery, so read the posting. For the why, link real, specific experience to the work: explaining technical ideas, solving varied customer problems, and enjoying both technology and people.",
  },
  {
    group: "Representative exercises",
    question: "Representative exercise: run a 30-minute technical discovery role-play with the interviewer playing the customer.",
    answer:
      "What is usually assessed: whether you ask before you propose, uncover the real problem and constraints, and leave with agreed success criteria and a next step. A strong run:\n1. Set the agenda and the goal of the call in one sentence.\n2. Ask about the problem, users, current architecture, identity provider and security constraints (see the discovery checklist in Discovery & scoping).\n3. Summarize what you heard and check it.\n4. Propose a narrow first step or proof of concept with measurable success criteria.\n5. Name risks and open questions honestly, and agree on who does what next.\nPractise with a friend who has a hidden requirement to reveal only if you ask the right question.",
    followUps: ["The customer keeps asking for a demo before answering your questions. What do you do?"],
  },
  {
    group: "Representative exercises",
    question: "Representative exercise: a customer's integration with your API is failing; debug it live from logs, a failing request and the API documentation.",
    answer:
      "What is usually assessed: a calm, systematic process and clear communication while you work. Narrate as you go: reproduce the failing request, read the full error and request id, then check environment and base URL, authentication (expired token, missing OAuth scope, single sign-on or service-account setup), request format, network restrictions, rate limits and webhook signatures. Give the customer a status update with what you know, what you are checking next and when you will update them, and finish with the fix, how to verify it and how to prevent a repeat. The scenarios in Integration, security & architecture and Building in customer environments cover each step.",
  },
  {
    group: "Representative exercises",
    question: "Representative exercise: design an AI solution for an enterprise customer and present it to their executives and engineers.",
    answer:
      "Often a take-home or whiteboard round followed by a 15–30 minute presentation. A strong submission covers: the customer's problem and success criteria; an architecture (for example retrieval-augmented generation over their documents, or an agent with approved tools) with single sign-on, document permissions enforced at retrieval, data handling and audit logging; how you would evaluate quality before and after launch; a proof-of-concept plan with timeline and exit criteria; and the main trade-offs (accuracy, latency, cost, risk) explained in business terms for executives and in technical detail for engineers. Show a small working demo if allowed, and state limitations plainly.",
    followUps: ["The customer's security team says no data may leave their cloud account. What changes?"],
  },
];

export default questions;
