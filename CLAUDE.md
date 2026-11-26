# Software Engineering Apprenticeship

*Stop searching. Start learning. Get hired.*

A curated, research-backed knowledge and navigation app providing a direct, efficient, evidence-based path to becoming an employable software engineer. The objective is interview readiness and practical engineering competence, not programming language mastery, academic completeness or course completion. Not a bootcamp or interactive learning platform. Success metric: job-relevant competence gained per hour of study.

## Roles

- **Product owner (user):** final decision-maker. Approves every milestone.
- **ChatGPT:** curriculum researcher, product architect, implementation reviewer. Supplies validated content.
- **Claude:** senior engineer implementing approved milestones only. Never expand scope independently.

## Principles

- Employment-first; demonstrated competence over course completion; quality over quantity.
- Minimum effective knowledge, minimal presentation. The content is the product.
- Free, high-quality external resources only.
- Extremely simple navigation and an extremely simple codebase.
- Never fabricate sources, URLs, interview requirements, resource availability or verification dates. Leave a field empty rather than guess.
- Do not generate the curriculum or bulk-populate resources. Content comes from the owner/ChatGPT (see Curriculum publication rules).
- Company interview guides must separate official hiring information from anecdotal candidate reports.

## Architecture

- Next.js (App Router) + TypeScript + Tailwind CSS. Static generation / static export. No backend, database, auth or external APIs.
- Educational content lives in `content/` as typed TypeScript data, separate from presentation in `app/`.
- One shared knowledge base: topics are defined once and referenced by slug from the curriculum, interview guides and Getting Hired. Never duplicate content.
- Every published topic reachable within three clicks or via search.
- Adding content should require no application code changes.
- Four sections: Apprenticeship, Knowledge Library, Interview Preparation, Getting Hired.

Content files (each list file holds the items, a lookup and build-time reference checks):

| Section | List | Item files | Page |
|---|---|---|---|
| Library | `content/topics.ts` | `content/topics/` | `/library/[slug]` |
| Apprenticeship | `content/curriculum.ts` | — | `/apprenticeship/[phase]` |
| Interview Preparation | `content/interview-guides.ts` | `content/interview-guides/` | `/interview-prep/[slug]` |
| Getting Hired | `content/career-guides.ts` | `content/career-guides/` | `/getting-hired/[slug]` |

`research/` holds employment-requirements research and verification notes (one Markdown file per batch); it is never read by the app and is not published content.

Unpublished items are `{ planned: ... }` entries and never link. To publish a topic: add its file, add it to `topics`, and replace its `{ planned }` entry in `curriculum.ts` with `{ slug }`.

## Employment-first curriculum principles

These supersede any earlier guidance that prioritized comprehensive programming language mastery over employment readiness.

1. Work backward from actual hiring requirements, interview expectations and professional engineering responsibilities.
2. Prioritize the minimum effective knowledge required to demonstrate competence.
3. Programming languages are tools for solving engineering problems, not the educational objective. Do not require exhaustive language mastery before progressing to other competencies.
4. Distinguish essential knowledge, working knowledge and material that can be learned as needed.
5. Priorities must account for target role, company and seniority.
6. Every core learning unit has a measurable readiness checkpoint and a clear stopping point.
7. Encourage learners who can already demonstrate competence to skip redundant instructional material.
8. Incorporate interview preparation and practical engineering exercises throughout the learning path, and reinforce earlier knowledge through later practical assignments rather than isolated topic completion.
9. Prioritize independent implementation, problem-solving, debugging, testing and technical communication over passive course consumption.
10. Recommend specific resource sections rather than entire courses when only selected material is needed.
11. Do not add topics simply because they appear in a conventional programming or computer science curriculum.
12. The Knowledge Library may hold supporting and advanced material without making it mandatory in the Apprenticeship.
13. Clearly distinguish verified employer requirements, candidate-reported experiences and editorial curriculum recommendations.
14. Encourage applying for jobs once relevant readiness criteria are met. Completing the whole curriculum is not an employment prerequisite.

## Curriculum publication rules (M7 onward)

Application feature development is frozen. M0–M6 and M7.1A are complete. **Curriculum publication is paused** (including M7.1B) until M7.R, Employment Requirements Research, is reviewed and approved. The revised curriculum, priorities and depth requirements will come from that research; never redesign the curriculum independently. Existing published content stays as is.

1. Never independently generate or publish whole curriculum phases. Content is researched and approved in batches; implement only an approved batch specification.
2. Use the existing content architecture and page templates. Change application architecture only when a genuine requirement cannot be supported by the current implementation, and get approval first.
3. Every published topic must have a clear learning objective, required knowledge depth, curated learning resources, practice exercises, interview questions and measurable mastery criteria.
4. Recommend freely accessible material. Never imply a whole platform is free when only part is.
5. Prefer direct links to specific lessons, documentation sections and exercises over platform homepages.
6. Never fabricate resource verification dates, hiring requirements or source claims.
7. Distinguish verified accessibility (the link loads and the content is free) from verified educational relevance (a person reviewed it as suitable). Report which was checked; `verifiedOn` is set only from an approved specification.
8. Do not duplicate educational content across topics, phases and guides; reference by slug instead.
9. Interview Preparation owns the canonical Behavioral Interviews guide; Getting Hired will reference it.
10. Do not refactor the repeated page helpers (`Section`, `List`, `ExternalLink`) at this stage.
11. `npm run build`, `npx tsc --noEmit` and all content validation checks must pass for every batch.
12. Required knowledge depth uses these standard levels. A topic's `depth` text is the level name followed by its definition:
    - **Recognize:** Identify the concept, its purpose and when it is relevant.
    - **Explain:** Accurately explain the concept, its behavior and common use cases without assistance.
    - **Implement:** Independently write, test and debug code using the concept.
    - **Master:** Apply the concept to unfamiliar problems, explain trade-offs and identify appropriate alternatives without assistance.

## Resource diversity and learning preferences

Applies to every phase, topic, interview guide and career guide. This is a content requirement, not a feature requirement: no architectural changes are authorized.

- Don't assume learners prefer video. For each topic, consider the best available video lectures, written tutorials, official documentation, GitHub repositories/code examples, free books, interactive exercises, visual explanations, programming assignments and interview problems.
- Where high-quality options exist, offer a written and a video alternative plus hands-on practice.
- Resources are alternatives, not cumulative assignments. Never expect learners to consume several resources teaching the same material.
- Quality, accuracy, relevance, accessibility and efficiency over quantity. Never add an inferior resource just to fill a category.
- Prefer specific lessons, chapters, articles, repository files and exercises over homepages.
- Keep instructional resources, reference material, practice exercises and interview preparation clearly distinct (use the existing `resources`, `exercises` and `interviewQuestions` fields and the `Resource.type` label).
- Never imply material is free unless the recommended material itself is freely accessible.
- Learners who already know a topic must be able to go straight to practice and mastery criteria.
- All interactive learning is external links to existing platforms. Never build, embed or integrate interactive functionality; the app is static guidance pages, and learners read, watch and practice elsewhere.
- Reuse the existing `Resource` type and content architecture.

## Code rules

- Minimize files, directories and dependencies. Justify every new dependency and significant architectural decision.
- Straightforward code over abstractions. No speculative files, hooks, utilities, services or wrappers.
- Extract a component only when meaningful duplication exists.

## Design

Premium, minimal technical library: clear typography, readability, obvious navigation, consistent layouts, responsive, accessible contrast, fast. No decorative animation, heavy gradients, clutter, unnecessary cards/icons/illustrations, or gamification.

## Excluded (require explicit approval)

AI chatbot/tutor, embedded coding or code execution, interactive visualizations, voice, accounts/auth, database, backend API, payments/subscriptions, gamification, analytics, complex progress tracking, admin dashboard.

## Git

The product owner exclusively controls staging, commits and pushes. Only read-only git commands (`status`, `log`, `diff`, `show`, `branch`) are allowed. Never run `add`, `commit`, `push`, `reset`, `checkout`, `switch`, `stash`, `restore`, `rebase`, `merge` or anything that modifies repository state without explicit authorization.

## Milestone workflow

M0 Inspection/plan · M1 App shell + navigation · M2 Content structure + topic page · M3 Apprenticeship navigation · M4 Knowledge Library + search · M5 Interview prep + guide template · M6 Getting Hired · M7 Validated content, in approved batches (M7.1A done; M7.1B paused) · M7.R Employment Requirements Research (next; gates all further publication) · M8 Responsive, accessibility, usability validation. Provisional; never implement a future milestone or batch without approval.

After each milestone report: (1) what was implemented, (2) why, (3) files created/modified, (4) project file tree, (5) app and content flow, (6) dependencies and justification, (7) tests/verification, (8) known limitations, (9) manual verification steps, (10) suggested commit message. Then stop and wait for approval.
