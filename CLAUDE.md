# SWE Apprenticeship

*Stop searching. Start learning. Get hired.*

An employment-first software engineering learning and interview preparation companion: the shortest effective path from a learner's current abilities to being employable, interview-ready and professionally competent. It eliminates unnecessary learning, long unfocused courses, repeated equivalent study, trivia, premature specialization, senior-level expectations, resource searching, and uncertainty about employer expectations and when to apply.

**Decision metric: maximum employment readiness per hour invested.** Never optimize for numbers of topics, courses, resources, exercises, certificates, projects or hours. The app cannot guarantee employment; it maximizes preparation efficiency and demonstrated competence.

## Roles

- **Product owner (user):** final decision-maker; approves every milestone and batch.
- **ChatGPT:** curriculum researcher, product architect, implementation reviewer.
- **Claude:** senior engineer; implements approved milestones and batches only. Never expand scope independently.

## Audience and scope

- Entry-level engineers, new graduates, self-taught developers, career switchers seeking a first role, and candidates needing focused interview preparation.
- Targets: general entry-level SWE, Big Tech, startup/growth-stage, enterprise, entry-level backend, entry-level full-stack.
- Employer targets (published): Google, Amazon, Meta, Apple, Microsoft, Netflix (qualified eligibility guidance only, no invented roadmap), Early-Stage Startups (incl. YC-backed), AI-Focused Startups, Growth-Stage Companies, Established Technology Companies, Enterprise & Structured Early-Career Programs, Other Employer or Specific Job Posting. Roles: Software Engineer and Backend Engineer published; Full-Stack forthcoming; AI Engineer, Solutions Engineer and Forward Deployed Engineer planned.
- Mid/senior-level preparation is out of scope. Never impose senior expectations. Entry-level still means real competence and independent problem-solving.

## Three readiness dimensions

Every curriculum decision distinguishes:

1. **Hiring eligibility** (education, experience, internships, equivalent experience, work authorization). Never imply completing the apprenticeship substitutes for eligibility or experience requirements.
2. **Interview readiness** (knowledge questions, coding/algorithms, complexity, OOP/LLD, SQL, basic system design, debugging, code review, practical assessments, take-homes, project deep dives, behavioral, communication, AI-assisted assessments). Not every employer uses every format.
3. **Professional engineering readiness** (read and write code, scoped features, debugging, tests, Git, architecture, documentation, code review, explaining decisions, verifying AI output, working with mentorship). Rarely interviewed does not mean unnecessary at work.

## Evidence standards

- R1–R6 in `research/` are the primary evidence base. The broad research phase is complete; do not start new broad research without approval. Batches use focused verification of individual topics, questions, exercises and resources.
- Source priority: official employer guidance and postings → official technical documentation → established educational resources → reputable interview-prep resources → credible recent candidate reports → editorial judgment.
- Label claims as employer-confirmed, candidate-reported, third-party, commonly recommended, representative or editorial.
- Never fabricate employer-attributed questions, question frequency, hiring thresholds, requirements, interview formats, verification dates or resource availability. Leave a field empty rather than guess.
- Absence of evidence is not proof a topic is never assessed. Postings establish eligibility and job expectations, not interview prevalence. Do not count duplicated reports or postings as independent evidence. Preserve R1–R6 limitations; state uncertainty.

## Curriculum philosophy

- Work backward: target role → hiring requirements → interview expectations → professional competencies → minimum sufficient knowledge → resources → practice → readiness criteria.
- Programming languages are tools. Never require a comprehensive language course before interview preparation. Teach foundations early and reinforce them through later assignments. Do not cut necessary fundamentals just to shorten the path.
- The Knowledge Library may hold supporting and advanced material without making it mandatory.
- Interview preparation, behavioral preparation and practical work start early, not at the end.

### Decision filter (before adding any required topic, resource, assignment, dependency, abstraction or feature)

1. Does it materially improve interview readiness, engineering competence, hiring outcomes or a necessary prerequisite? 2. Is it relevant to the target role and level? 3. Is the depth justified? 4. Is the evidence sufficient? 5. Does equivalent content exist? 6. Can an existing assignment teach it? 7. Is there a simpler, faster way? 8. Can it be deferred? 9. Does it add complexity or maintenance? 10. Would removing it materially reduce employment readiness?

Reject the irrelevant; defer or make conditional what is useful but unnecessary; choose the simpler approach; document uncertainty.

## Priority and depth

Priority (contextual by path, never universal): **Essential** · **Working knowledge** · **Conditional** (justified by employer, role, stack or format) · **Defer**.

Depth (separate from priority; a topic's `depth` text is the level name followed by its definition):

- **Recognize:** Identify the concept and understand its relevance.
- **Explain:** Accurately explain behavior, purpose and common uses.
- **Implement:** Independently perform appropriately scoped tasks.
- **Apply:** Use the concept to solve unfamiliar problems and explain relevant trade-offs.

Never use "Master"/"Mastery" as a depth designation; Apply is not exhaustive expertise. Distinguish closed-book interview knowledge from professional tasks where documentation and approved tools are available.

## Product direction (corrected after T4; approved prototype is the reference)

The primary experience is a **customized apprenticeship**: the learner selects an employer target and a role and receives one clear learning path telling them what to study, in what order, how deeply, which resources, interview questions and exercises to use, when they know enough and what to skip. The learner never constructs a curriculum from research reports, and there are never two competing roadmaps.

Journey: select employer → select role → customized apprenticeship (stages) → stage (topics in order) → topic (Learn, Resources, Interview Q&A, Practice, Ready?) → next topic in the target's sequence. Behavioral preparation, projects and applications run in parallel from day one. Applying never requires completing the curriculum. The last selected employer and role are remembered in the browser (localStorage); no accounts.

Research informs the recommendations but does not dominate: essential eligibility warnings and assessment rules appear as at most four short facts; detailed eligibility, process, evidence, limitations and sources live in the secondary **About this employer** view. Never present candidate-reported processes as guaranteed or one posting's requirements as universal.

## Product architecture

- Next.js (App Router) + TypeScript + Tailwind CSS, static export. No backend, database, auth or external APIs.
- Three primary sections: **My Apprenticeship** (target selection and the customized apprenticeship; interview preparation is integrated here; mobile label "My Path"), **Knowledge Library** (every canonical topic, unit and interview-format guide, independent of any target, with search), **Getting Hired** (targeting, job description analysis, resumes, applications, networking, interview recovery).
- One shared knowledge base: topics are defined once in the Library and referenced by slug. Employer, role and format guides reference canonical topics; never duplicate lessons.
- Every published topic reachable within three clicks or via search. Adding content should require no application code changes.

| Content | List | Item files | Pages |
|---|---|---|---|
| Topics | `content/topics.ts` | `content/topics/` | `/library/[slug]` (`?path=<target>.<role>` adds the target's depth, reason, selected practice and previous/next) |
| Units | `content/curriculum.ts` | — | `/apprenticeship/[phase]` (Library reference) |
| Employer, role and format guides | `content/interview-guides.ts` | `content/interview-guides/` | Targets: `/apprenticeship/for/[target]/[role]`, `/stage/[n]`, `/unit/[phase]`, `/apprenticeship/for/[target]/about`. Format and role guides: `/interview-prep/[slug]`. Old target URLs forward to the apprenticeship. |
| Apprenticeship stages | `content/roadmap.ts` (shared stage templates, roadmap building, build-time checks) | target guide files (`stages`, `parallel`, `atAGlance`) | as above |
| Career guides | `content/career-guides.ts` | `content/career-guides/` | `/getting-hired/[slug]` |

Each list file holds the items, a lookup and build-time reference checks. Unpublished items are `{ planned: ... }` entries and never link. To publish a topic: add its file, add it to `topics`, and replace its `{ planned }` entry in `curriculum.ts` with `{ slug }`; place it in each relevant target's `stages` where it has a deliberate employment reason. `research/` holds research and verification notes (one Markdown file per batch); the app never reads it.

### Target apprenticeships

- `composePath(target, role)` combines the target's interview priorities with the role's on-the-job competencies (each topic once).
- Each target's `stages` lists shared stage templates in an explicit, deterministic order with the combined entries each contains (topic slug, or exact title for entries without a topic). Order is written by hand per target, preserving genuine prerequisites; there is no recommendation or prerequisite engine.
- Every recommended topic is placed deliberately with an employment reason. Nothing is auto-collected: topics not placed stay in the Library. Build checks: keys resolve, nothing placed twice, no deferred entry placed, every Essential entry and every target Important entry placed, the first stage starts with a published topic.
- Role-specific stages (S8): a role guide may define `stages` (e.g. Backend Engineer's three backend stages); each target places them with one `{ template: "role", topics: [] }` marker. The earliest placement wins (a role stage skips topics the target places earlier and takes over ones it places later), deferred topics are never placed, and emptied stages are dropped. Software Engineer has no role stages, so its roadmaps are unchanged. Reused for Full-Stack in S9.
- `StudyTopic.phase` marks an entry that covers a whole unit (e.g. Programming Fluency); `InterviewGuide.atAGlance` holds at most four short facts; `parallel` lists day-one items. A target without `stages` (Netflix) shows its eligibility guidance instead of a roadmap.
- Recruiter-confirmed formats and actual job requirements override these defaults.

## Apprenticeship structure

Ten units in three stages (approved in principle; implemented in S0). Units are organizational groupings, not mandatory sequential steps: learners skip units they can demonstrate, start interview and behavioral preparation early, take backend/full-stack units only when role-relevant, and apply when eligible and reasonably prepared.

- **Foundations:** 1 Programming Fluency · 2 Data Structures, Algorithms & Complexity · 3 Object-Oriented Programming & Design · 4 Engineering Fundamentals · 5 Practical Software Engineering
- **Applied Engineering:** 6 Build and Deploy One Project · 7 Backend Engineering · 8 Full-Stack Engineering
- **Employment Preparation:** 9 Interview Preparation (integrated into each customized apprenticeship) · 10 Getting Hired (points to the section)

Units organize the Library; the learner's order comes from their target's stages, not from unit numbers.

Programming Fluency replaces Programming Mastery. Preserve the eight published Python topics. The 24 Python topics are classified (R5) as 14 Essential, 6 Working, 2 Conditional, 2 Defer; do not require all 24 before algorithms. Learners fluent in another suitable language may skip redundant Python instruction. Create no additional units without approval.

## Content strategy: curator, not course creator (permanent)

SWE Apprenticeship is a curated, employment-driven roadmap, not a course. The best existing free resources do the teaching. Our value is research, curation, prioritization, sequencing and employment readiness: what to learn, why, how deeply, in what order, where to learn it (exact sections), which exercises to practise, which interview questions to prepare for, when to move on and what to skip.

- **Do not create:** tutorials, lessons, long instructional explanations, worked solutions that an existing explanation covers, original exercise collections, sample applications or services, practice databases, code fixtures, courses, interactive environments or assessment engines. Do not copy substantial third-party material; link and attribute.
- **Short original material is an exception:** a code snippet only when it is the interview answer (aliasing, mutability, floating point, output prediction, a concise pattern template); a practice prompt only when no suitable external exercise exists (prefer "apply it to your project or an existing repository") — record the gap in the batch notes.
- **No arbitrary limits:** do not enforce fixed numbers of questions, resources, exercises, words or lines. Keep every genuinely relevant interview question and every resource with distinct value; remove material for irrelevance, duplication or inefficiency, never just to shorten. Do not replace excess with insufficient preparation.
- **Quality is measured by** resource-selection quality, relevance to the employer and role, sequence efficiency, appropriate depth, study eliminated, interview-preparation quality, practice quality and clear readiness criteria — never by counts of examples, exercises, words, resources or pages.

### Topic tabs

- **Learn** (`overview`, `whyItMatters`, `objectives`, `depth`, `prerequisites`): a concise, technically precise learning checklist with the reason and depth, ending with what to skip for now. Not a lesson.
- **Resources:** a clear "Start here", then alternatives only when they add distinct value (different format or hands-on practice; alternatives are not cumulative), then references. Each says exactly which sections, chapters or videos to complete and discloses account requirements.
- **Interview Q&A:** relevant questions with concise, accurate answers (as long as needed, no longer), useful follow-ups and an optional `source` (title and link) supporting the technical answer. A source never establishes that employers ask the question; never claim frequency without evidence.
- **Practice:** specific external exercises by default (practice platforms, course exercises, repositories), each saying what it demonstrates and any access requirement. Preserve employer-selected exercise titles; when one is replaced, update every roadmap reference.
- **Ready?** (`mastery`, `mistakes`, `deprioritize`): observable criteria matched to the topic's depth — what to explain, implement, solve and demonstrate, when to skip the topic and what to defer. Editorial benchmarks are labelled and never presented as employer passing standards; keep interview and professional readiness distinct.

### Interview-driven content

- Prefer questions that are foundational, commonly recommended, employer-supported, repeatedly candidate-reported, realistic and entry-level appropriate; no obscure trivia or senior questions without justification. Teach reasoning, not scripts.
- Coding preparation: name the pattern, how to recognize it and its complexity, and link the representative problems and an existing explanation; do not reproduce full solutions.

## Resources and verification

- Select the strongest freely accessible resource for each competency individually (official docs, university courses, well-known educators, repositories, interactive platforms, interview-prep resources); no provider is assumed best for every topic. Never imply something is free unless the recommended material is.
- Be precise: direct links to sections, chapters, video segments, repository files or named exercises; never a whole course when sections suffice.
- Before publishing: confirm link access, free availability, that the section exists and supports the claim, and technical accuracy; note registration requirements. Distinguish link availability from educational-quality review. Set `verifiedOn` only when a person verified it. Omit or flag unverifiable resources.
- All interactive learning, coding practice and mock interviews are external links.

## Learning method

Cycle: learn → recall without notes → explain aloud → implement independently → apply to an unfamiliar problem → test and debug → explain trade-offs → reinforce later. One primary focus at a time plus a small amount of recurring practice; never several unrelated courses at once. These are static recommendations only.

## Practical engineering and AI

- One substantial project, scoped to the target role, is the initial practical assignment; an existing project may satisfy it. Real users optional. Extra projects only for a demonstrated gap.
- Repeatable existing-codebase drills on existing external repositories (read, trace, debug, implement small features, test, review, explain) and timed take-home practice (requirements, deliverables, evaluation criteria, follow-up discussion; time limits are editorial unless an employer documents them). Prefer existing external assignments and repositories over writing our own.
- Projects, drills and take-homes are canonical Library content in a Practical Engineering category.
- **Independent mode:** write, solve, explain, analyze, debug, test and defend without AI. **AI-assisted mode:** give clear requirements, understand and review generated code, catch wrong assumptions and security/reliability issues, validate, test, correct, explain and own the result.
- AI-assisted engineering is recommended professional preparation; its interview relevance depends on employer and format. Never encourage prohibited AI use in interviews. No AI functionality in the app.

## Instructional stack

Python for programming and interviews; Python, FastAPI and PostgreSQL for backend; TypeScript and React for full-stack. A vehicle for transferable concepts, not an employer requirement. Learners proficient in another suitable stack may use it. No competing languages or frameworks; introduce tools only when they serve a competency; concepts before framework details.

## Readiness, applying and recovery

- Each applicable unit opens with static readiness criteria of observable abilities; learners who meet them skip ahead.
- Every unit and path states what sufficient competence looks like, how to demonstrate it, when to move on, what to defer, when deeper knowledge becomes necessary, and when to apply.
- Readiness benchmarks are editorial unless an employer establishes them; never turn time limits, counts or percentages into hiring prerequisites; never imply readiness guarantees employment.
- Encourage applying once eligible and reasonably prepared, while preparation continues. Distinguish professional from educational/personal project experience; never encourage exaggeration.
- Getting Hired includes a static job description gap analysis guide (required vs preferred, experience, gaps mapped to Library topics, what to defer, apply now or close a gap first) and a static interview recovery guide (diagnose the weakness, return to the relevant unit, never restart everything; some rejections are not competency failures).

## Interview Preparation

- Company guides, where supported: eligibility, structure, formats, assessed competencies, question patterns, behavioral expectations, tool and AI policies, priorities, practice conditions, readiness, evidence limitations, verification dates. Processes are not permanent; tell candidates to confirm formats with their recruiter.
- Role guides first: Software Engineer, Backend, Full-Stack; each references shared topics and adds role-specific requirements.
- Format guides: coding & algorithms; rapid-fire technical knowledge; OOP & LLD; SQL & database assessments; basic system design; debugging & code review; practical engineering assessments; take-homes; project deep dives; behavioral (canonical — Getting Hired references it); AI-assisted coding. Prioritize by R5 evidence strength; never present conditional formats as universal.
- Describe realistic practice conditions (time, unfamiliar problems, execution, documentation, AI, communication, testing, follow-ups, complexity, trade-offs). Recommend external mock-interview resources; build no simulation.

## Feature freeze and exclusions

The app is a static curated knowledge, navigation and preparation companion. Do not build: authentication, accounts, databases, backend services, AI tutors/interviewers, coding sandboxes or execution, interactive assessments, automated grading, flashcards, progress tracking, gamification, leaderboards, study schedulers, automated job analyzers, dynamic recommendation or personalization engines, analytics, payments, voice, unnecessary animation. Preserve search. Any new feature or material architectural change requires explicit approval. Approved: an optional readiness field on `Phase` (S0); the redesign fields `StudyTopic.phase`, `InterviewGuide.stages`, `parallel` and `atAGlance`, shared stage templates, `?path=` topic navigation and remembering the last selected target in localStorage. Any other schema change needs separate approval.

## Code rules

- Exceptionally simple, navigable codebase: minimal files and dependencies, clear names, predictable folders, straightforward data flow; no premature abstractions, unnecessary frameworks, speculative infrastructure or component refactoring; no duplicated canonical content.
- Reuse existing types, registries, routes and templates. Before proposing a new field, file, dependency or abstraction, explain why existing structures are insufficient. Justify every dependency.
- Do not refactor repeated page helpers (`Section`, `List`, `ExternalLink`) just to remove small duplication.
- `npm run build`, `npx tsc --noEmit` and all content validation checks must pass for every batch.

## Design

A polished, modern learning companion, matching the approved prototype (design system in `app/globals.css`): strong visual hierarchy, restrained system typography, purposeful color (one indigo accent; one tone per stage type), clean cards for targets, stages and topics, obvious clickable elements, comfortable reading widths, responsive layouts. Progressive disclosure: the roadmap shows the sequence; topics appear when a stage opens; resources, questions, exercises and readiness appear in a topic's tabs; research is one click away. Show priority only where it helps a decision. No decorative animation, clutter, badges or metadata on every element, illustrations, or gamification. Long code must never cause page-level horizontal overflow.

## Git

The product owner exclusively controls staging, commits and pushes. Only read-only git commands (`status`, `log`, `diff`, `show`, `branch`) are allowed. Never run `add`, `commit`, `push`, `reset`, `checkout`, `switch`, `stash`, `restore`, `rebase`, `merge`, create commits, rewrite history, modify branches or perform destructive operations without explicit authorization.

## Workflow and batches

Complete only the currently approved milestone or batch; never start the next without approval. M0–M6, M7.1A and research R1–R6 are complete. Publication batches (each independently useful; behavioral and application guidance may be published earlier when needed):

S0 curriculum restructuring and readiness support · S1 Programming Fluency · S2 Data Structures, Algorithms & Complexity · S3 core interview guides, Google guide, foundational behavioral · S4 OOP & Software Design · S5 Engineering Fundamentals · S6 Practical Engineering · S7 Backend Engineering · S8 remaining company and role guides · S9 Full-Stack · S10 conditional formats, job description gap analysis, interview recovery, remaining hiring content, final validation. Completed out of the original order: T1–T4 target paths, the redesign, S7 Projects and practical assessments, and C1 content correction (curation strategy). S8 is now Backend Engineering, S9 Full-Stack.

Every batch verifies: technical accuracy, employment relevance, entry-level depth, interview question relevance, model-answer and complexity accuracy, interview source links, resource access/relevance/free availability and section specificity, prerequisites, external practice, observable readiness criteria, stopping points, deferred material, valid internal references, no duplicated content, and no original instructional material where an existing resource suffices. Do not build instructional testing infrastructure (sample apps, databases, package environments) to validate external content; validate the application and any retained snippets only. Company guides carry verification dates for time-sensitive information. No automated monitoring.

After every batch report: (1) what changed, (2) why, (3) files created/modified, (4) file tree where relevant, (5) code and content flow, (6) dependencies, (7) validation results, (8) build results, (9) type-check results, (10) route and reference validation, (11) browser/manual verification, (12) known limitations, (13) unresolved decisions, (14) suggested commit message. Never claim checks that were not performed. Stop and wait for review.
