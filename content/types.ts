// Shared content types. TypeScript checks every content file against these at build time.
// It does not check that URLs work or that content is accurate; that is editorial review.

export type Link = { title: string; url: string };

// An external resource: what to use it for, and any account, paywall or version caveat.
export type Resource = Link & { note: string };

// A concise answer, optional code when the code is the answer, follow-ups, and a source that supports the
// technical answer (never evidence that employers ask the question). Unsourced answers are editorial advice.
export type Question = {
  group: string;
  question: string;
  answer: string;
  code?: string;
  followUps?: string[];
  source?: Link;
};

export type QuestionSet = {
  slug: string; // /questions/<slug>
  title: string;
  description: string;
  questions: Question[];
  resources: Resource[]; // Interview-prep resources first; documentation as reference.
};

export const roles = [
  { slug: "software-engineer", title: "Software Engineer" },
  { slug: "backend-engineer", title: "Backend Engineer" },
  { slug: "full-stack-engineer", title: "Full-Stack Engineer" },
] as const;

export type RoleSlug = (typeof roles)[number]["slug"];

export type Evidence = "Official" | "Candidate-reported" | "Third-party" | "Editorial" | "Varies";

// A preparation category on a company page. Each one links straight to questions, problems or a guide
// (the catalogue with titles and links is in content/companies.ts).
export const categoryKeys = [
  "coding", "dsa", "python", "oop", "lld", "system-design", "sql", "behavioral", "practical", "projects",
  "apis", "backend", "javascript", "typescript", "react", "html-css", "os", "networking", "ai", "job-description",
] as const;
export type CategoryKey = (typeof categoryKeys)[number];

export type Company = {
  slug: string; // /companies/<slug>
  name: string;
  kind: "Company" | "Employer type";
  logo?: string; // /logos/<file>.svg for companies with an authentic logo
  mono?: boolean; // single-colour logo that is inverted in dark mode
  icon?: string; // neutral icon name for employer types without a logo
  tagline: string; // one line under the name
  card: string; // short text on the homepage card
  categories: CategoryKey[]; // what to prepare for every role, most important first
  roleCategories?: Partial<Record<RoleSlug, CategoryKey[]>>; // replaces `categories` where the role changes the interview
  notes?: Partial<Record<CategoryKey, string>>; // employer-specific line under a category
  officialResources: Resource[]; // the employer's own preparation pages
  // Collapsed "Interview process, eligibility and sources" section:
  facts: { label: string; value: string; evidence: Evidence }[]; // at most four
  formats: { name: string; detail: string; evidence: Evidence }[];
  caveat: string;
  details: { heading: string; items: string[] }[];
  sources: Link[];
  checked: string; // date the evidence was last checked (not a human review of every claim)
};

export type Difficulty = "Easy" | "Medium" | "Hard";
export type ProblemPriority = "Core" | "Important" | "Optional";

export type Pattern = { name: string; resource: Resource }; // the best explanation of the pattern

export type Problem = {
  name: string;
  url: string; // the problem itself
  difficulty: Difficulty;
  pattern: string; // a Pattern name
  priority: ProblemPriority; // general, editorial
  explanation?: Link; // a walkthrough of this exact problem
  employers?: Record<string, ProblemPriority>; // company slug -> priority in that employer's selection
  role?: RoleSlug; // role practice (SQL for backend, JavaScript for full-stack) rather than general DSA
};

// A titled block of short items, used by career guides.
export type GuidanceBlock = { heading: string; items: string[] };

export type CareerGuide = {
  slug: string; // /getting-hired/<slug>
  title: string;
  description: string;
  guidance?: GuidanceBlock[];
  recommendations?: string[];
  interviewQuestions?: string[];
  mistakes?: string[];
  resources?: Resource[];
  relatedQuestions?: string[]; // question set slugs
  relatedGuides?: string[]; // paths such as "/getting-hired/resume"
};
