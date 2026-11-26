// Shared content types. TypeScript checks every topic file against these at build time.
// It does not check that URLs work or that content is accurate; that is editorial review.

export type Resource = {
  title: string;
  url: string;
  provider: string;
  type: "Documentation" | "Course" | "Video" | "Article" | "Book" | "Interactive" | "Repository" | "Visual explanation";
  instructions: string; // What to study and why.
  verifiedOn?: string; // YYYY-MM-DD. Only set after a person has actually reviewed the resource.
};

export type Exercise = {
  title: string;
  url?: string; // Omit for exercises without an external page.
  note?: string; // Pattern, expected complexity or practice instructions.
};

// A plain question, or a question with a model answer, optional follow-ups and an optional code example.
export type InterviewQuestion =
  | string
  | { question: string; answer: string; followUps?: string[]; code?: string };

export type Topic = {
  slug: string; // URL segment: /library/<slug>
  title: string;
  category: string;
  phase: string; // Slug of the Apprenticeship unit this topic belongs to, e.g. "programming-fluency".
  overview: string;
  whyItMatters: string;
  prerequisites: string[]; // Plain text until the prerequisite topics exist.
  objectives: string[];
  depth: string;
  resources: Resource[];
  exercises: Exercise[];
  interviewQuestions: InterviewQuestion[];
  mistakes?: string[]; // Common conceptual and implementation mistakes.
  mastery: string[]; // Rendered as "Readiness criteria".
  deprioritize?: string[];
  keywords?: string[]; // Extra search terms, e.g. "hash map" for dictionaries.
};

export const stages = ["Foundations", "Applied Engineering", "Employment Preparation"] as const;

export type Stage = (typeof stages)[number];

// A phase lists its topics in study order. A published topic points to a Library topic by slug;
// a planned topic is a title only and never links anywhere.
export type PhaseTopic = { slug: string } | { planned: string };

export type Phase = {
  slug: string; // URL segment: /apprenticeship/<slug>
  number: number;
  title: string;
  description: string;
  stage: Stage;
  readiness?: string[]; // Observable abilities; learners who can already demonstrate them may skip the unit.
  objectives?: string[];
  topics?: PhaseTopic[];
  mastery?: string[]; // Rendered as "Stopping point".
  sectionHref?: string; // Main site section that holds this phase's content, e.g. "/getting-hired".
};

export const guideCategories = ["Company", "Role", "Interview type"] as const;

export type GuideCategory = (typeof guideCategories)[number];

// A study priority. The title is always shown as text; `slug` optionally links a published
// Library topic that helps with it (it need not cover the whole subject).
export type StudyTopic = {
  title: string;
  priority: "Essential" | "Important" | "Optional";
  reason?: string;
  slug?: string;
};

export type InterviewGuide = {
  slug: string; // URL segment: /interview-prep/<slug>
  title: string;
  category: GuideCategory;
  description: string; // One line for the landing page.
  level?: string; // e.g. "Entry level". Omit when the guide applies to all levels.
  overview: string;
  process?: string[]; // Interview stages, in order.
  competencies?: string[];
  studyTopics?: StudyTopic[];
  sequence?: string[];
  practice?: Exercise[];
  resources?: Resource[];
  readiness?: string[];
  sources?: { title: string; url: string }[];
  verifiedOn?: string; // YYYY-MM-DD. Only set after a person has actually verified the guide.
};

// A landing-page entry: a published guide by slug, or a planned guide by name only.
export type GuideListing = { slug: string } | { planned: string };

export type CareerGuide = {
  slug: string; // URL segment: /getting-hired/<slug>
  title: string;
  description: string; // One line, used in page metadata.
  overview: string;
  guidance?: { heading: string; items: string[] }[]; // Practical guidance, each block with its own heading.
  recommendations?: string[];
  interviewQuestions?: string[];
  mistakes?: string[];
  readiness?: string[];
  resources?: Resource[];
  relatedTopics?: string[]; // Published Library topic slugs.
};

// A Getting Hired landing entry: a published career guide by slug, or a planned one by name.
export type CareerListing = { title: string; slug: string } | { title: string; description: string };
