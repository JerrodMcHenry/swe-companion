// A target's apprenticeship: the target + role combination from composePath, arranged into the
// explicit stage order written in the target's guide (InterviewGuide.stages). Nothing is inferred:
// every recommended topic is placed deliberately, and anything not placed stays in the Library.
import { composePath, getGuide, roles, targets, type PathEntry } from "./interview-guides";
import { getPhase } from "./curriculum";
import { getTopic } from "./topics";
import type { InterviewGuide } from "./types";

export type Tone = "sky" | "indigo" | "violet" | "rose" | "teal" | "emerald" | "amber" | "slate";
type StageTemplate = { title: string; goal: string; skipIf: string; tone: Tone; practice?: boolean };

// Shared stage templates. Targets choose and order them; their wording is never copied per company.
// `practice: true` stages also show the target's practice tasks and readiness criteria.
export const stageTemplates: Record<string, StageTemplate> = {
  fluency: { title: "Coding fluency", goal: "Write correct Python quickly, without looking things up.", skipIf: "You can solve Easy problems with lists, strings and dictionaries without help, and debug your own code.", tone: "sky" },
  fluencySetup: { title: "Fluency and your toolkit", goal: "Write correct Python and work like an engineer from day one: Git, terminal, debugging.", skipIf: "You can write small programs without help, use branches and pull requests, and set up a project from its README.", tone: "sky" },
  fluencyTested: { title: "Write, run and test", goal: "Fluent Python that you run and test as you go — the habit this employer's interviews expect.", skipIf: "You write working Python without help and finish every solution with tests for boundaries and invalid input.", tone: "sky" },
  fluencyTeam: { title: "Fluency in your team's language", goal: "Strong fundamentals in the language your team uses, explained aloud.", skipIf: "You can answer core language questions aloud and write working code without help.", tone: "sky" },
  core: { title: "Problem-solving core", goal: "A repeatable approach to unseen problems, with complexity, using arrays, strings and hash maps.", skipIf: "You can solve unseen Easy-to-Medium array and hash-map problems, explaining complexity.", tone: "indigo" },
  coreSpeed: { title: "Problem-solving at speed", goal: "Solve two problems in one session: fast, correct, explained.", skipIf: "You can solve two unseen Medium problems in 45 minutes without running code (editorial guide).", tone: "indigo" },
  coreOA: { title: "Online assessment core", goal: "Solve Easy-to-Medium problems under a time limit, without AI.", skipIf: "You can solve three or four of four unseen Easy-to-Medium problems in about 70 minutes (editorial guide).", tone: "indigo" },
  coreScreen: { title: "Coding screen basics", goal: "Enough algorithm practice for the screens some startups still run.", skipIf: "You can solve unseen Easy-to-Medium array and hash-map problems in 30–45 minutes (editorial guide).", tone: "indigo" },
  dsDepth: { title: "Core data structures", goal: "Stacks, lists, search, trees and heaps at the depth this employer tests.", skipIf: "You can recognize and apply each structure to unseen problems.", tone: "violet" },
  advDepth: { title: "Recursion, graphs and harder patterns", goal: "The patterns behind the harder questions: recursion, graphs, intervals and dynamic programming.", skipIf: "You can apply BFS/DFS, backtracking and basic dynamic programming to unseen problems.", tone: "violet" },
  dsBreadth: { title: "Data structures and algorithms", goal: "Broad coverage of the core patterns at the depth this target needs.", skipIf: "You can apply each listed pattern to an unseen problem.", tone: "violet" },
  design: { title: "Object-oriented and low-level design", goal: "Model a small system with classes, defend your choices and adapt to a new requirement.", skipIf: "You can design and code a small system in about 45 minutes and handle a changed requirement.", tone: "rose" },
  oopFundamentals: { title: "Object-oriented and CS fundamentals", goal: "Classes, relationships and how programs run, explained clearly.", skipIf: "You can implement classes and composition, and explain processes, threads and memory.", tone: "rose" },
  fundamentals: { title: "CS fundamentals vocabulary", goal: "Explain how the internet, databases and programs work — and how you verify AI output.", skipIf: "You can explain a URL request, relational vs non-relational databases and process vs thread.", tone: "teal" },
  realCode: { title: "Working in real code", goal: "Read, debug, test and extend code you did not write.", skipIf: "You can fix a bug and add a tested feature in an unfamiliar repository in under an hour.", tone: "emerald" },
  verify: { title: "Verify code — yours and AI's", goal: "Debug, test and check generated code until you can explain every line.", skipIf: "You can complete a drill with an AI assistant, catch its mistakes and explain the result without it.", tone: "emerald" },
  aiRound: { title: "Existing code with an AI assistant", goal: "Read, debug and extend unfamiliar code with a built-in assistant — verifying everything.", skipIf: "You can complete a drill with an assistant and explain every change without it. Only needed if the round is confirmed.", tone: "emerald" },
  ship: { title: "Build and ship features", goal: "Design small features, use APIs and AI tools responsibly, and keep them secure.", skipIf: "You can take a vague feature request to a tested, working change.", tone: "teal" },
  integration: { title: "APIs and integration", goal: "Call an API, transform the data, handle errors and test it.", skipIf: "You can complete an integration task with tests in about an hour.", tone: "teal" },
  designApis: { title: "Design and APIs", goal: "Sketch a product's components and data flow; explain trade-offs at a basic level.", skipIf: "You can explain your project's architecture and one trade-off.", tone: "teal" },
  postingBasics: { title: "Engineering basics postings ask for", goal: "Classes, Git, SQL concepts and AI judgment at the depth postings list.", skipIf: "You use Git daily, write classes comfortably and can explain joins and indexes.", tone: "teal" },
  enterpriseEng: { title: "Enterprise engineering", goal: "Business logic, tests, Git, data and secure coding — how enterprise teams work.", skipIf: "You can trace business rules, fix a bug with a test and explain SQL and security basics.", tone: "teal" },
  practical: { title: "Practical skills", goal: "Debug and extend unfamiliar code — needed if your recruiter confirms a practical round.", skipIf: "You can fix a bug and add a small feature in unfamiliar code.", tone: "emerald" },
  takeHome: { title: "Take-homes and project deep dives", goal: "Scope, build, test and defend work in a take-home or project conversation.", skipIf: "You can build a small feature in 3–4 hours with tests and a README, and defend it (editorial guide).", tone: "amber" },
  assessmentDay: { title: "Assessment day and video interviews", goal: "Structured answers on camera, in back-to-back interviews and in case discussions.", skipIf: "You have practised recorded answers and your program's listed formats.", tone: "amber", practice: true },
  simulate: { title: "Interview simulation", goal: "Practise in the exact conditions you expect, then apply.", skipIf: "You meet the readiness criteria below.", tone: "amber", practice: true },
  job: { title: "Engineering for the job", goal: "Needed from your first week, though rarely tested in this employer's interviews. Continue while you apply.", skipIf: "You already use these at work or in a team project. Not required before applying.", tone: "slate" },
};

export type RoadmapItem = PathEntry & {
  key: string;
  track: "interview" | "job"; // From the target's interview priorities, or from the role's on-the-job competencies.
  unitTopics?: string[]; // For an entry that covers a whole unit (StudyTopic.phase): its published topics, in order.
};

// The reason shown to learners: the entry's own reason, or a composition note when it adds information
// (a different on-the-job depth or interview priority). The bare "Also required for this role." adds nothing.
export function itemReason(item: PathEntry) {
  if (item.reason) return item.reason;
  return item.note && item.note !== "Also required for this role." ? item.note : undefined;
}

export type RoadmapStage = StageTemplate & { index: number; template: string; note?: string; guides: string[]; items: RoadmapItem[] };

export type Roadmap = {
  target: InterviewGuide;
  role: InterviewGuide;
  stages: RoadmapStage[];
  parallel: RoadmapItem[];
  skip: RoadmapItem[]; // Deferred by this target or role.
  practice: NonNullable<InterviewGuide["practice"]>;
};

const unitTopics = (phase: string) => (getPhase(phase)?.topics ?? []).flatMap((item) => ("slug" in item ? [item.slug] : []));

function entries(target: InterviewGuide, role: InterviewGuide) {
  const path = composePath(target, role);
  const map = new Map<string, RoadmapItem>();
  const add = (entry: PathEntry, track: RoadmapItem["track"]) => {
    const key = entry.slug ?? entry.title;
    map.set(key, { ...entry, key, track, unitTopics: entry.phase ? unitTopics(entry.phase) : undefined });
  };
  path.interview.forEach((entry) => add(entry, "interview"));
  path.roleTopics.forEach((entry) => add(entry, "job"));
  return { map, path };
}

export function hasRoadmap(target: InterviewGuide) {
  return (target.stages?.length ?? 0) > 0;
}

export function buildRoadmap(target: InterviewGuide, role: InterviewGuide): Roadmap {
  const { map, path } = entries(target, role);
  const resolve = (key: string) => map.get(key)!; // Checked at build time below.
  const stages = (target.stages ?? []).map((stage, index) => ({
    ...stageTemplates[stage.template],
    index,
    template: stage.template,
    note: stage.note,
    guides: stage.guides ?? [],
    items: stage.topics.map(resolve),
  }));
  return {
    target,
    role,
    stages,
    parallel: (target.parallel ?? []).map(resolve),
    skip: [...map.values()].filter((item) => item.priority === "Defer"),
    practice: path.practice,
  };
}

// The topic sequence for previous/next: every published topic in a non-optional stage item, in stage order.
export type SequenceItem = { slug: string; stage: number; item: RoadmapItem };
export function topicSequence(roadmap: Roadmap): SequenceItem[] {
  const out: SequenceItem[] = [];
  for (const stage of roadmap.stages) {
    for (const item of stage.items) {
      if (item.priority === "Optional") continue;
      const slugs = item.unitTopics ?? (item.slug ? [item.slug] : []);
      for (const slug of slugs) if (!out.some((existing) => existing.slug === slug)) out.push({ slug, stage: stage.index, item });
    }
  }
  return out;
}

export const pathHref = (target: InterviewGuide, role: InterviewGuide) => `/apprenticeship/for/${target.slug}/${role.slug}`;
export const pathKey = (target: InterviewGuide, role: InterviewGuide) => `${target.slug}.${role.slug}`;
export const topicHref = (slug: string, target: InterviewGuide, role: InterviewGuide) => `/library/${slug}?path=${pathKey(target, role)}`;

// Every published target + role combination that has a roadmap.
export function allRoadmaps() {
  return targets.filter(hasRoadmap).flatMap((target) => roles.map((role) => buildRoadmap(target, role)));
}

// --- Build-time checks. Any failure stops the build. ---------------------------------------------
for (const target of targets) {
  if ((target.atAGlance?.length ?? 0) > 4) throw new Error(`Target "${target.slug}" has more than four at-a-glance facts`);
  if (!hasRoadmap(target)) {
    if (target.parallel?.length) throw new Error(`Target "${target.slug}" has parallel items but no stages`);
    continue;
  }
  for (const role of roles) {
    const { map } = entries(target, role);
    const where = `Roadmap "${target.slug}" + "${role.slug}"`;
    const placed = new Set<string>();
    const place = (key: string) => {
      const item = map.get(key);
      if (!item) throw new Error(`${where} references "${key}", which is not in the combined path`);
      if (item.priority === "Defer") throw new Error(`${where} places deferred entry "${key}"`);
      if (placed.has(key)) throw new Error(`${where} places "${key}" twice`);
      placed.add(key);
      return item;
    };
    target.stages!.forEach((stage, index) => {
      if (!stageTemplates[stage.template]) throw new Error(`${where}: unknown stage template "${stage.template}"`);
      stage.topics.forEach(place);
      for (const slug of stage.guides ?? []) {
        if (getGuide(slug)?.category !== "Interview type") throw new Error(`${where}: stage ${index + 1} links unknown format guide "${slug}"`);
      }
      if (!stage.topics.length && !stageTemplates[stage.template].practice) throw new Error(`${where}: stage ${index + 1} is empty`);
    });
    (target.parallel ?? []).forEach(place);
    // Nothing required may be left out: Essential entries from either source, and the target's Important ones.
    for (const [key, item] of map) {
      const required = item.priority === "Essential" || (item.priority === "Important" && item.track === "interview");
      if (required && !placed.has(key)) throw new Error(`${where} does not place required entry "${key}" (${item.priority})`);
    }
    const first = buildRoadmap(target, role).stages[0].items[0];
    const firstSlug = first.unitTopics?.[0] ?? first.slug;
    if (!firstSlug || !getTopic(firstSlug)) throw new Error(`${where}: the first stage must start with a published topic`);
  }
}
