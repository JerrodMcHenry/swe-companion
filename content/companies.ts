import type { CategoryKey, Company, RoleSlug } from "./types";
import { roles } from "./types";
import google from "./companies/google";
import amazon from "./companies/amazon";
import meta from "./companies/meta";
import apple from "./companies/apple";
import microsoft from "./companies/microsoft";
import netflix from "./companies/netflix";
import earlyStage from "./companies/early-stage-startups";
import aiStartups from "./companies/ai-startups";
import growthStage from "./companies/growth-stage";
import establishedTech from "./companies/established-tech";
import enterprise from "./companies/enterprise";
import other from "./companies/other";
import { getQuestionSet } from "./questions";
import { problems } from "./problems";
import { getCareerGuide } from "./career-guides";

export const companies: Company[] = [google, amazon, meta, apple, microsoft, netflix, earlyStage, aiStartups, growthStage, establishedTech, enterprise, other];

export const getCompany = (slug: string) => companies.find((c) => c.slug === slug);
export const getRole = (slug: string) => roles.find((r) => r.slug === slug);

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
};

// Role skills added at employers whose interview does not change by role.
const roleAdditions: Record<RoleSlug, CategoryKey[]> = {
  "software-engineer": [],
  "backend-engineer": ["apis", "sql", "backend"],
  "full-stack-engineer": ["javascript", "react", "typescript", "html-css"],
};

export type CategoryItem = { key: CategoryKey; title: string; href: string; detail: string; role: boolean; problems?: number; practice?: { label: string; href: string } };

// The categories a company page shows for one role, in order, each with its link.
export function companyCategories(company: Company, role: RoleSlug): CategoryItem[] {
  const own = company.roleCategories?.[role];
  const keys = own ?? [...company.categories, ...roleAdditions[role].filter((k) => !company.categories.includes(k))];
  const selected = problems.filter((p) => p.employers?.[company.slug]).length;
  return keys.map((key) => {
    const c = categoryCatalog[key];
    const item: CategoryItem = { key, ...c, detail: company.notes?.[key] ?? c.detail, role: !own && roleAdditions[role].includes(key) && !company.categories.includes(key) };
    if (key === "coding") {
      item.href = selected ? `/problems?company=${company.slug}` : "/problems";
      item.problems = selected || problems.filter((p) => !p.role).length;
    }
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
  for (const key of Object.keys(c.notes ?? {})) {
    const used = [c.categories, ...Object.values(c.roleCategories ?? {})].some((list) => list.includes(key as CategoryKey));
    if (!used) throw new Error(`${c.slug} has a note for unused category ${key}`);
  }
}
for (const p of problems) for (const slug of Object.keys(p.employers ?? {})) if (!getCompany(slug)) throw new Error(`Unknown employer ${slug} on ${p.name}`);
