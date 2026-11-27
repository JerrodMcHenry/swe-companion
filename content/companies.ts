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
  "forward-deployed-engineer": ["customer-discovery", "customer-integration", "coding", "api-design", "auth", "debugging", "rag", "ai-system-design", "customer-communication", "behavioral"],
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
    if (key === "sql" && role === "backend-engineer") item.practice = { label: "SQL problems", href: "/problems?pattern=SQL" };
    if (key === "javascript" && role === "full-stack-engineer") item.practice = { label: "JavaScript problems", href: "/problems?pattern=JavaScript" };
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
