import type { GuideCategory, GuideListing, InterviewGuide, StudyTopic } from "./types";
import { depthLevels } from "./types";
import { getTopic } from "./topics";
import { careerGuides } from "./career-guides";
import codingAlgorithms from "./interview-guides/coding-algorithms";
import behavioralInterviews from "./interview-guides/behavioral-interviews";
import rapidFireTechnicalQuestions from "./interview-guides/rapid-fire-technical-questions";
import google from "./interview-guides/google";
import otherEmployer from "./interview-guides/other-employer";
import softwareEngineer from "./interview-guides/software-engineer";

// Every published guide. To publish a guide, add its file in content/interview-guides/,
// list it here, and replace its { planned } entry below with { slug }.
export const guides: InterviewGuide[] = [
  codingAlgorithms,
  behavioralInterviews,
  rapidFireTechnicalQuestions,
  google,
  otherEmployer,
  softwareEngineer,
];

// What the Interview Preparation page lists, in order, for each category.
export const guideListings: Record<GuideCategory, GuideListing[]> = {
  Company: [
    { slug: "google" },
    { planned: "Amazon" },
    { planned: "Meta" },
    { planned: "Apple" },
    { planned: "Microsoft" },
    { planned: "Netflix" },
  ],
  "Employer type": [
    { planned: "Early-Stage & YC Startups" },
    { planned: "AI-Focused Startups" },
    { planned: "Growth-Stage Startups" },
    { planned: "Established Technology Companies" },
    { planned: "Enterprise & Structured Early-Career Programs" },
    { slug: "other-employer" },
  ],
  // The first three roles are the initial release; the rest are future paths.
  Role: [
    { slug: "software-engineer" },
    { planned: "Backend Engineer" },
    { planned: "Full-Stack Engineer" },
    { planned: "AI Engineer" },
    { planned: "Solutions Engineer" },
    { planned: "Forward Deployed Engineer" },
  ],
  "Interview type": [
    { slug: "coding-algorithms" },
    { slug: "behavioral-interviews" },
    { planned: "Debugging & Code Review" },
    { planned: "AI-Assisted Coding" },
    { planned: "Practical Coding Assessments" },
    { planned: "OOP & Low-Level Design" },
    { planned: "Project Deep Dives" },
    { planned: "Take-Home Assignments" },
    { planned: "Basic System Design (conditional)" },
    { planned: "SQL & Database Assessments (conditional)" },
    { slug: "rapid-fire-technical-questions" },
  ],
};

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

// --- Preparation paths: one employer target combined with one role ---------------------------

export const defaultRole = "software-engineer";
export const selectableRoles = guideListings.Role.slice(0, 3);

export function isTarget(guide: InterviewGuide) {
  return guide.category === "Company" || guide.category === "Employer type";
}

export const targets = guides.filter(isTarget);
export const roles = guides.filter((guide) => guide.category === "Role");

export type PathEntry = StudyTopic & { note?: string };

export type PreparationPath = {
  target: InterviewGuide;
  role: InterviewGuide;
  interview: PathEntry[]; // Interview emphasis, from the target.
  roleTopics: PathEntry[]; // Role and on-the-job competencies not already covered above, from the role.
  practice: NonNullable<InterviewGuide["practice"]>;
  resources: NonNullable<InterviewGuide["resources"]>;
  sources: NonNullable<InterviewGuide["sources"]>;
  relatedGuides: string[];
};

const key = (topic: StudyTopic) => topic.slug ?? topic.title;
const depthRank = (topic: StudyTopic) => (topic.depth ? depthLevels.indexOf(topic.depth) : -1);
const covers = (topic: StudyTopic) => topic.priority === "Essential" || topic.priority === "Important";

function unique<T>(items: T[], id: (item: T) => string) {
  const seen = new Set<string>();
  return items.filter((item) => (seen.has(id(item)) ? false : (seen.add(id(item)), true)));
}

// Composition rules (also explained on the path page):
// 1. Interview priorities and depth come from the target (company or employer-type evidence).
// 2. Role competencies come from the role guide.
// 3. Every topic appears once.
//    - If the target prioritizes it (Essential or Important), the role entry is merged into the
//      interview entry with a note; if the role needs more depth on the job, the note says so.
//    - If the target rates it lower (Optional or Defer) and the role does not defer it, one entry is
//      shown in the role section, stating both the interview priority and the on-the-job priority.
//    - If the role defers it, the target's entry stands alone.
// 4. Selected exercises come from the entry shown; if it has none, the other source's selection is used.
export function composePath(target: InterviewGuide, role: InterviewGuide): PreparationPath {
  let interview: PathEntry[] = (target.studyTopics ?? []).map((topic) => ({ ...topic }));
  const roleTopics: PathEntry[] = [];
  for (const topic of role.studyTopics ?? []) {
    const match = interview.find((entry) => key(entry) === key(topic));
    if (match && covers(match)) {
      match.note =
        depthRank(topic) > depthRank(match) && topic.depth
          ? `Also required for this role; on the job you will need ${topic.depth} depth.`
          : "Also required for this role.";
      if (!match.exercises?.length && topic.exercises?.length) match.exercises = topic.exercises;
    } else if (match) {
      if (topic.priority === "Defer") continue; // Neither source needs it now; the target's entry stands.
      interview = interview.filter((entry) => entry !== match);
      const interviewPriority = match.priority === "Defer" ? "defer" : match.priority.toLowerCase();
      roleTopics.push({
        ...topic,
        exercises: topic.exercises?.length ? topic.exercises : match.exercises,
        note: `Interview priority for this employer: ${interviewPriority}${match.reason ? ` (${match.reason.replace(/\.$/, "")})` : ""}. On the job: ${topic.priority.toLowerCase()}.`,
      });
    } else {
      roleTopics.push({ ...topic });
    }
  }
  return {
    target,
    role,
    interview,
    roleTopics,
    practice: unique([...(target.practice ?? []), ...(role.practice ?? [])], (item) => item.title),
    resources: unique([...(target.resources ?? []), ...(role.resources ?? [])], (item) => item.url),
    sources: unique([...(target.sources ?? []), ...(role.sources ?? [])], (item) => item.url),
    relatedGuides: unique(
      [...(target.relatedGuides ?? []), ...(role.relatedGuides ?? [])].filter(
        (href) => href !== `/interview-prep/${target.slug}` && href !== `/interview-prep/${role.slug}`,
      ),
      (href) => href,
    ),
  };
}

// --- Guide references -------------------------------------------------------------------------

export function getGuideByPath(href: string) {
  const [, section, slug] = href.split("/");
  if (section === "interview-prep") {
    const guide = getGuide(slug);
    return guide && { href, title: guide.title, description: guide.description };
  }
  if (section === "getting-hired") {
    const guide = careerGuides.find((item) => item.slug === slug);
    return guide && { href, title: guide.title, description: guide.description };
  }
  return undefined;
}

// --- Build-time checks for internal references. Any failure stops the build. -----------------

function checkStudyTopics(owner: string, topics: StudyTopic[]) {
  const keys = new Set<string>();
  for (const item of topics) {
    if (keys.has(key(item))) throw new Error(`Guide "${owner}" lists the same study topic twice: ${key(item)}`);
    keys.add(key(item));
    if (item.priority === "Essential" && !item.reason) {
      throw new Error(`Guide "${owner}" marks "${item.title}" Essential without a reason`);
    }
    const topic = item.slug ? getTopic(item.slug) : undefined;
    if (item.slug && !topic) throw new Error(`Guide "${owner}" references unknown topic: ${item.slug}`);
    for (const title of item.exercises ?? []) {
      if (!topic) throw new Error(`Guide "${owner}" selects exercises for "${item.title}" without a topic slug`);
      const matches = topic.exercises.filter((exercise) => exercise.title === title).length;
      if (matches !== 1) {
        throw new Error(`Guide "${owner}" selects exercise "${title}" from ${topic.slug}: found ${matches} matches`);
      }
    }
  }
}

function checkRelatedGuides(owner: string, refs: string[]) {
  for (const href of refs) {
    if (!getGuideByPath(href)) throw new Error(`Guide "${owner}" references unknown guide: ${href}`);
  }
}

const guideSlugs = new Set<string>();
for (const guide of guides) {
  if (guideSlugs.has(guide.slug)) throw new Error(`Duplicate guide slug: ${guide.slug}`);
  guideSlugs.add(guide.slug);
  checkStudyTopics(guide.slug, guide.studyTopics ?? []);
}
for (const guide of guides) checkRelatedGuides(guide.slug, guide.relatedGuides ?? []);
for (const guide of careerGuides) checkRelatedGuides(guide.slug, guide.relatedGuides ?? []);

const listedGuides = new Set<string>();
for (const [category, listings] of Object.entries(guideListings)) {
  for (const item of listings) {
    if (!("slug" in item)) continue;
    const guide = getGuide(item.slug);
    if (!guide) throw new Error(`Unknown guide listed: ${item.slug}`);
    if (guide.category !== category) throw new Error(`Guide "${item.slug}" is listed under ${category} but is a ${guide.category} guide`);
    listedGuides.add(item.slug);
  }
}
for (const guide of guides) {
  if (!listedGuides.has(guide.slug)) throw new Error(`Guide not listed on the Interview Preparation page: ${guide.slug}`);
}
if (!roles.some((role) => role.slug === defaultRole)) throw new Error(`Default role is not a published role guide: ${defaultRole}`);
