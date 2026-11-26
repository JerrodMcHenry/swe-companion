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

// A plain question, or a question with a model answer, optional follow-ups, an optional code example and an
// optional source: the resource that supports the answer technically (not evidence that employers ask it).
// Answers without a source are shown as editorial preparation advice.
export type InterviewQuestion =
  | string
  | { question: string; answer: string; followUps?: string[]; code?: string; source?: { title: string; url: string } };

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

export const guideCategories = ["Company", "Employer type", "Role", "Interview type"] as const;

export type GuideCategory = (typeof guideCategories)[number];

export const depthLevels = ["Recognize", "Explain", "Implement", "Apply"] as const;

// A study priority. The title is always shown as text; `slug` optionally links a published
// Library topic that helps with it (it need not cover the whole subject).
// Essential entries must give a reason (checked at build time).
export type StudyTopic = {
  title: string;
  priority: "Essential" | "Important" | "Optional" | "Defer";
  depth?: (typeof depthLevels)[number]; // Depth required for this guide's target, not the topic's own depth.
  reason?: string;
  slug?: string;
  exercises?: string[]; // Exact titles of exercises in the linked topic (requires slug; checked at build time).
  phase?: string; // Apprenticeship unit this entry covers as a whole, e.g. "programming-fluency" (the roadmap lists the unit's topics).
};

// One stage of a target's apprenticeship, in recommended order. Templates live in content/roadmap.ts.
// `topics` are keys of the target + role combined entries: a topic slug, or the exact title of an entry without one.
export type StageRef = {
  template: string;
  topics: string[];
  note?: string; // A short target-specific instruction shown on the stage page.
  guides?: string[]; // Interview-format guide slugs to practise with.
};

// A titled block of short items, shared by interview and career guides.
export type GuidanceBlock = { heading: string; items: string[] };

export type InterviewGuide = {
  slug: string; // URL segment: /interview-prep/<slug>
  title: string;
  category: GuideCategory;
  description: string; // One line for the landing page.
  level?: string; // e.g. "Entry level". Omit when the guide applies to all levels.
  overview: string;
  guidance?: GuidanceBlock[]; // e.g. eligibility, evidence and limitations, role requirements.
  process?: string[]; // Interview stages, in order.
  competencies?: string[];
  studyTopics?: StudyTopic[];
  sequence?: string[];
  practice?: Exercise[];
  resources?: Resource[];
  readiness?: string[];
  sources?: { title: string; url: string }[];
  relatedGuides?: string[]; // Paths of other guides, e.g. "/interview-prep/behavioral-interviews" or "/getting-hired/resume".
  verifiedOn?: string; // YYYY-MM-DD. Only set after a person has actually verified the guide.
  // Employer targets only:
  atAGlance?: { label: string; value: string }[]; // At most four short facts, taken from the guide's own text.
  stages?: StageRef[]; // The apprenticeship in recommended order. A target without stages shows its eligibility guidance instead.
  parallel?: string[]; // Entries to start from day one, alongside the stages (behavioral stories, a project).
};

// A landing-page entry: a published guide by slug, or a planned guide by name only.
export type GuideListing = { slug: string } | { planned: string };

export type CareerGuide = {
  slug: string; // URL segment: /getting-hired/<slug>
  title: string;
  description: string; // One line, used in page metadata.
  overview: string;
  guidance?: GuidanceBlock[]; // Practical guidance, each block with its own heading.
  recommendations?: string[];
  interviewQuestions?: string[];
  mistakes?: string[];
  readiness?: string[];
  resources?: Resource[];
  relatedTopics?: string[]; // Published Library topic slugs.
  relatedGuides?: string[]; // Paths of other guides, as on InterviewGuide.
};

// A Getting Hired landing entry: a published career guide by slug, or a planned one by name.
export type CareerListing = { title: string; slug: string } | { title: string; description: string };
