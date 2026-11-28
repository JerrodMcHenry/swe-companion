import type { CategoryKey, Company, RoleSlug } from "./types";
import { roles } from "./types";
import google from "./companies/google";
import amazon from "./companies/amazon";
import meta from "./companies/meta";
import apple from "./companies/apple";
import microsoft from "./companies/microsoft";
import netflix from "./companies/netflix";
import openai from "./companies/openai";
import anthropic from "./companies/anthropic";
import perplexity from "./companies/perplexity";
import janeStreet from "./companies/jane-street";
import citadelSecurities from "./companies/citadel-securities";
import hrt from "./companies/hudson-river-trading";
import jump from "./companies/jump-trading";
import optiver from "./companies/optiver";
import earlyStage from "./companies/early-stage-startups";
import aiStartups from "./companies/ai-startups";
import growthStage from "./companies/growth-stage";
import establishedTech from "./companies/established-tech";
import enterprise from "./companies/enterprise";
import other from "./companies/other";
import { getQuestionSet } from "./questions";
import { problems } from "./problems";
import { getCareerGuide } from "./career-guides";

export const companies: Company[] = [google, amazon, meta, apple, microsoft, netflix, openai, anthropic, perplexity, janeStreet, citadelSecurities, hrt, jump, optiver, earlyStage, aiStartups, growthStage, establishedTech, enterprise, other];

export const getCompany = (slug: string) => companies.find((c) => c.slug === slug);

// Every preparation category: its title and where it goes. "coding" goes to the employer's problem selection.
export const categoryCatalog: Record<CategoryKey, { title: string; href: string; detail: string }> = {
  coding: { title: "Coding Problems", href: "/problems", detail: "Problems by pattern, with video explanations." },
  dsa: { title: "Data Structures & Algorithms", href: "/questions/data-structures-algorithms", detail: "Approach, complexity and the core patterns." },
  python: { title: "Python Interview Questions", href: "/questions/python", detail: "Data model, collections, functions and errors." },
  oop: { title: "OOP & SOLID", href: "/questions/oop-solid", detail: "Classes, composition, SOLID and design patterns." },
  lld: { title: "Low-Level Design", href: "/questions/low-level-design", detail: "Model classes for a small system." },
  "system-design": { title: "System Design", href: "/questions/system-design", detail: "Requirements, API, data model and simple scaling." },
  sql: { title: "SQL & Databases", href: "/questions/sql-databases", detail: "Joins, grouping, indexes and schema design." },
  behavioral: { title: "Behavioral Interview Questions", href: "/questions/behavioral", detail: "STAR answers and a story bank." },
  practical: { title: "Practical Coding & Debugging", href: "/questions/testing-debugging", detail: "Testing, debugging and working in existing code." },
  projects: { title: "Project & Take-Home Questions", href: "/questions/projects-take-homes", detail: "Explain what you built and defend your choices." },
  apis: { title: "APIs", href: "/questions/apis", detail: "REST design, validation, errors and authentication." },
  backend: { title: "Backend Engineering", href: "/questions/backend-engineering", detail: "Security, logging, async and deployment." },
  javascript: { title: "JavaScript & the Browser", href: "/questions/javascript", detail: "Closures, this, the event loop, the DOM and CORS." },
  typescript: { title: "TypeScript", href: "/questions/typescript", detail: "Narrowing, unions, generics and API data." },
  react: { title: "React", href: "/questions/react", detail: "State, effects, forms, data fetching and tests." },
  "html-css": { title: "HTML, CSS & Accessibility", href: "/questions/html-css-accessibility", detail: "Semantic HTML, layout and accessible UI." },
  os: { title: "Operating Systems & Concurrency", href: "/questions/operating-systems", detail: "Processes, threads, memory and race conditions." },
  networking: { title: "Networking & HTTP", href: "/questions/networking", detail: "DNS, TCP, HTTPS, methods and status codes." },
  ai: { title: "AI-Assisted Coding", href: "/questions/git-tools-ai?group=AI-assisted+coding", detail: "Prompting, reviewing and verifying AI output." },
  "job-description": { title: "Job Description Analysis", href: "/getting-hired/job-description-gap-analysis", detail: "Check eligibility and map gaps before preparing." },
  // Targeted: one group of a shared set.
  "api-design": { title: "API Design & Integration", href: "/questions/apis?group=API+design", detail: "Endpoints, pagination, calling other services and handling their failures." },
  auth: { title: "Authentication & Authorization", href: "/questions/apis?group=Authentication+%26+authorization", detail: "Sessions, tokens, OAuth and access control." },
  debugging: { title: "Debugging Unfamiliar Code", href: "/questions/testing-debugging?group=Debugging", detail: "Reproduce, trace, isolate and fix." },
  "llm-basics": { title: "LLM Fundamentals", href: "/questions/ai-engineering?group=LLM+fundamentals", detail: "Tokens, embeddings, context windows, sampling and hallucinations." },
  rag: { title: "Retrieval-Augmented Generation", href: "/questions/ai-engineering?group=RAG", detail: "Chunking, hybrid search, reranking, grounding and evaluation." },
  agents: { title: "Agents & Tool Calling", href: "/questions/ai-engineering?group=Agents+%26+tool+calling", detail: "Function calling, workflows versus agents, reliability and approvals." },
  "ai-evals": { title: "Evaluating AI Systems", href: "/questions/ai-engineering?group=Evaluation", detail: "Error analysis, test sets, LLM judges and regression checks." },
  "ai-production": { title: "Production AI: Latency, Cost & Monitoring", href: "/questions/ai-engineering?group=Production%2C+latency+%26+cost", detail: "Caching, model choice, streaming and observability." },
  "ai-security": { title: "AI Security & Privacy", href: "/questions/ai-engineering?group=Security+%26+privacy", detail: "Prompt injection, excessive agency and sensitive data." },
  "ai-system-design": { title: "AI System Design", href: "/questions/ai-engineering?group=AI+system+design", detail: "Design a RAG assistant, an agent or a document pipeline." },
  "ai-practical": { title: "Practical AI Exercises", href: "/questions/ai-engineering?group=Practical+exercises", detail: "Representative take-home and live-build tasks." },
  "customer-discovery": { title: "Customer Discovery & Scoping", href: "/questions/customer-scenarios?group=Discovery+%26+scoping", detail: "Ambiguous requirements and success criteria." },
  "customer-integration": { title: "Building in Customer Environments", href: "/questions/customer-scenarios?group=Building+in+customer+environments", detail: "Integrations, production issues and secure deployments." },
  cpp: { title: "C++ Interview Questions", href: "/questions/cpp", detail: "Memory, RAII, move semantics, polymorphism, containers and undefined behaviour." },
  "cpp-memory": { title: "C++ Memory & Object Lifetime", href: "/questions/cpp?group=Object+lifetime+%26+RAII", detail: "RAII, smart pointers, the rule of five and virtual destructors." },
  "cpp-concurrency": { title: "C++ Concurrency", href: "/questions/cpp?group=Concurrency+in+C%2B%2B", detail: "Data races, atomics and condition variables." },
  "cpp-practical": { title: "Systems Coding Exercises", href: "/questions/cpp?group=Practical+exercises", detail: "Thread-safe queue, ring buffer, order book and race diagnosis (representative)." },
  concurrency: { title: "Concurrency Fundamentals", href: "/questions/operating-systems?group=Concurrency", detail: "Threads, race conditions, deadlocks and the GIL." },
  "os-memory": { title: "Processes & Memory", href: "/questions/operating-systems?group=Processes+%26+memory", detail: "Processes versus threads, stack and heap, virtual memory." },
  performance: { title: "Performance & Low Latency", href: "/questions/operating-systems?group=Performance+%26+low+latency", detail: "Caches, false sharing, context switches, allocation and profiling." },
  "frontend-performance": { title: "Web Performance & Core Web Vitals", href: "/questions/frontend-system-design?group=Performance+%26+Core+Web+Vitals", detail: "LCP, INP, CLS, diagnosing slow pages, code splitting and lazy loading." },
  "frontend-system-design": { title: "Frontend System Design", href: "/questions/frontend-system-design?group=Frontend+system+design", detail: "RADIO, a news feed, state placement and component APIs. Lighter at entry level." },
  "frontend-practical": { title: "Frontend Coding Exercises", href: "/questions/frontend-system-design?group=Practical+exercises", detail: "Debounce, throttle, Promise.all, autocomplete and infinite scroll (representative)." },
  "customer-practical": { title: "Customer Scenario Exercises", href: "/questions/customer-scenarios?group=Representative+exercises", detail: "Discovery role-play, live integration debugging and an AI solution presentation (representative)." },
  "solutions-demos": { title: "Demos & Proofs of Concept", href: "/questions/customer-scenarios?group=Demos+%26+proofs+of+concept", detail: "Demo checklist, proof-of-concept design and technical presentations." },
  "solutions-integration": { title: "Integration, Security & Architecture", href: "/questions/customer-scenarios?group=Integration%2C+security+%26+architecture", detail: "Troubleshooting integrations, explaining OAuth, security reviews and cloud fit." },
  "solutions-objections": { title: "Objections & Business Value", href: "/questions/customer-scenarios?group=Objections+%26+business+value", detail: "Unsupported requirements, technical objections, value and stakeholders." },
  "analytical-sql": { title: "Analytical SQL", href: "/questions/sql-databases?group=Analytical+SQL", detail: "Deduplication, running totals, rolling averages, streaks and pivots." },
  "data-modeling": { title: "Data Modeling", href: "/questions/data-engineering?group=Data+modeling", detail: "Facts, dimensions, grain, star schemas and slowly changing dimensions." },
  "data-pipelines": { title: "Data Pipelines", href: "/questions/data-engineering?group=Pipelines", detail: "ETL and ELT, batch and streaming, idempotency, backfills, late data and orchestration." },
  "data-processing": { title: "Storage & Distributed Processing", href: "/questions/data-engineering?group=Storage+%26+processing", detail: "Warehouses and lakehouses, partitioning, Spark and Kafka concepts." },
  "data-quality": { title: "Data Quality & Operations", href: "/questions/data-engineering?group=Data+quality+%26+operations", detail: "Data tests, monitoring, lineage and fixing a failed pipeline." },
  "data-system-design": { title: "Data System Design", href: "/questions/data-engineering?group=Data+system+design", detail: "Design a reliable event ingestion pipeline." },
  "data-practical": { title: "Data Coding Exercises", href: "/questions/data-engineering?group=Practical+exercises", detail: "Flatten JSON, aggregate a large file and design a dimensional model (representative)." },
  "ml-fundamentals": { title: "ML Fundamentals", href: "/questions/ml-fundamentals", detail: "Splits, cross-validation, overfitting, regularization and common algorithms." },
  "ml-features": { title: "Features, Leakage & Imbalance", href: "/questions/ml-fundamentals?group=Data+%26+features", detail: "Feature preparation and selection, data leakage and imbalanced classes." },
  "ml-evaluation": { title: "Model Evaluation & Metrics", href: "/questions/ml-fundamentals?group=Evaluation+%26+metrics", detail: "Precision, recall, ROC-AUC, PR-AUC, regression metrics and tuning." },
  "ml-practical": { title: "ML Coding Exercises", href: "/questions/ml-fundamentals?group=Practical+exercises", detail: "k-means from scratch and a timed modeling task (representative)." },
  "ml-system-design": { title: "ML System Design", href: "/questions/ml-system-design", detail: "Training pipelines, serving, monitoring and design scenarios. Mainly for experienced candidates." },
  "ml-serving": { title: "Model Serving & Deployment", href: "/questions/ml-system-design?group=Serving", detail: "Batch versus online inference, low latency and safe rollouts." },
  "ml-monitoring": { title: "Production ML: Monitoring & Drift", href: "/questions/ml-system-design?group=Monitoring", detail: "What to monitor, data and concept drift, retraining and degradation." },
  "customer-communication": { title: "Stakeholder Communication", href: "/questions/customer-scenarios?group=Communication+%26+ownership", detail: "Explaining trade-offs, pushing back and owning outcomes." },
};

// Role skills appended at employers whose interview does not change by role.
const roleAdditions: Partial<Record<RoleSlug, CategoryKey[]>> = {
  "backend-engineer": ["apis", "sql", "backend"],
  "full-stack-engineer": ["javascript", "react", "typescript", "html-css"],
};

// Roles whose preparation differs from software engineering: a company without its own list for the role uses this one.
const roleDefaults: Partial<Record<RoleSlug, CategoryKey[]>> = {
  "ai-engineer": ["rag", "agents", "ai-evals", "llm-basics", "ai-production", "ai-system-design", "coding", "ai-security", "ai-practical", "behavioral"],
  "quant-developer": ["coding", "cpp", "cpp-memory", "concurrency", "cpp-concurrency", "performance", "os-memory", "networking", "cpp-practical", "behavioral"],
  "forward-deployed-engineer": ["customer-discovery", "customer-integration", "customer-practical", "coding", "api-design", "auth", "debugging", "rag", "ai-system-design", "customer-communication", "behavioral"],
  "frontend-engineer": ["javascript", "frontend-practical", "react", "typescript", "html-css", "frontend-performance", "frontend-system-design", "coding", "behavioral"],
  "solutions-engineer": ["customer-discovery", "solutions-demos", "customer-practical", "solutions-integration", "auth", "api-design", "debugging", "solutions-objections", "system-design", "networking", "customer-communication", "behavioral"],
  "data-engineer": ["sql", "analytical-sql", "python", "data-modeling", "data-pipelines", "data-practical", "data-processing", "data-quality", "data-system-design", "coding", "behavioral"],
  "machine-learning-engineer": ["coding", "python", "ml-fundamentals", "ml-evaluation", "ml-features", "ml-practical", "ml-system-design", "ml-serving", "ml-monitoring", "behavioral"],
};

const defaultRoles: RoleSlug[] = ["software-engineer", "backend-engineer", "full-stack-engineer"];
export const companyRoles = (company: Company) => (company.roles ?? defaultRoles).map((slug) => roles.find((r) => r.slug === slug)!);

export type CategoryItem = { key: CategoryKey; title: string; href: string; detail: string; role: boolean; problems?: number; practice?: { label: string; href: string } };

// The categories a company page shows for one role, in order, each with its link.
export function companyCategories(company: Company, role: RoleSlug): CategoryItem[] {
  const additions = roleAdditions[role] ?? [];
  const own = company.roleCategories?.[role] ?? roleDefaults[role];
  const keys = own ?? [...company.categories, ...additions.filter((k) => !company.categories.includes(k))];
  const selected = problems.filter((p) => p.employers?.[company.slug]).length;
  return keys.map((key) => {
    const c = categoryCatalog[key];
    const item: CategoryItem = { key, ...c, detail: company.notes?.[key] ?? c.detail, role: !own && additions.includes(key) && !company.categories.includes(key) };
    if (key === "coding") {
      item.href = selected ? `/problems?company=${company.slug}` : "/problems";
      item.problems = selected || problems.filter((p) => !p.role).length;
    }
    if (key === "coding" && role === "quant-developer") item.practice = { label: "Concurrency problems", href: "/problems?pattern=Concurrency" };
    if (key === "sql" && (role === "backend-engineer" || role === "data-engineer")) item.practice = { label: "SQL problems", href: "/problems?pattern=SQL" };
    if (key === "javascript" && (role === "full-stack-engineer" || role === "frontend-engineer")) item.practice = { label: "JavaScript problems", href: "/problems?pattern=JavaScript" };
    return item;
  });
}

// Build-time checks: every category link must resolve.
for (const [key, c] of Object.entries(categoryCatalog)) {
  const url = new URL(c.href, "https://x.invalid");
  const [, section, slug] = url.pathname.split("/");
  if (section === "questions") {
    const set = getQuestionSet(slug);
    const group = url.searchParams.get("group");
    if (!set || (group && !set.questions.some((q) => q.group === group))) throw new Error(`Category ${key} links to a missing question set or group`);
  } else if (section === "getting-hired") {
    if (!getCareerGuide(slug)) throw new Error(`Category ${key} links to a missing guide`);
  } else if (section !== "problems") throw new Error(`Unexpected category link ${c.href}`);
}
for (const c of companies) {
  if (c.facts.length > 4) throw new Error(`${c.slug} has more than four facts`);
  for (const role of Object.keys(c.roleCategories ?? {})) if (!companyRoles(c).some((r) => r.slug === role)) throw new Error(`${c.slug} has categories for unlisted role ${role}`);
  for (const key of Object.keys(c.notes ?? {})) {
    const used = [c.categories, ...Object.values(c.roleCategories ?? {})].some((list) => list.includes(key as CategoryKey));
    if (!used) throw new Error(`${c.slug} has a note for unused category ${key}`);
  }
}
for (const p of problems) for (const slug of Object.keys(p.employers ?? {})) if (!getCompany(slug)) throw new Error(`Unknown employer ${slug} on ${p.name}`);
