import type { Question } from "../types";

// Scenario questions for customer-facing engineering roles (Forward Deployed Engineer now; Solutions Engineer later).
// Answers are original preparation advice: use your own experience and the employer's context.
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
      "Notice repeated patterns across deployments, such as the same connector, evaluation or workflow being rebuilt, and feed them back to the product team with evidence: how many customers, how much time it costs. Build customer-specific code so the general parts are reusable, and document what you learned. Forward deployed work is valuable partly because it shows the product team what customers actually need.",
    source: { title: "The Pragmatic Engineer — What are forward deployed engineers?", url: "https://newsletter.pragmaticengineer.com/p/forward-deployed-engineers" },
  },
  {
    group: "Communication & ownership",
    question: "Why do you want a forward deployed role rather than a product engineering role?",
    answer:
      "Give a specific, honest answer that links your experience to the role's mix of work: writing production code, working directly with users, handling ambiguity and travel, and seeing the impact of your work quickly. Mention a concrete example of working with a user or stakeholder. Show you understand the trade-offs, such as context switching and less time on one codebase, and why they suit you.",
  },
];

export default questions;
