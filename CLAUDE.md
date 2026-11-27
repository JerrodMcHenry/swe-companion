# SWE Companion

A software engineering interview preparation and resource hub. It helps entry-level candidates quickly find the interview questions and answers, coding problems, company-specific preparation and best existing free resources for their target employer and role, without searching dozens of sites.

**It is not an apprenticeship, course, curriculum, bootcamp or learning management system.** There are no stages, prerequisites, units, mastery checklists or lessons. Success is measured by how quickly a user finds the relevant questions, answers, problems and resources, never by the number of pages, questions, resources or features.

## Roles

- **Product owner (user):** final decision-maker; approves direction and every batch of work.
- **ChatGPT:** researcher, product architect, reviewer.
- **Claude:** senior engineer; implements approved work only. Never expand scope independently. Stop and ask when a substantial architectural decision or product ambiguity arises.

## Simplicity requirements (permanent)

Think of the app as a modern, curated interview cheat sheet and resource directory. Less is more.

- Every page gives immediate value: no introductions about preparing before the preparation, no objectives, prerequisites, mastery criteria, stages or long prose.
- Relevant interview material is reachable within two clicks of the homepage, and the user understands what to do without reading instructions.
- Every visible element serves a purpose. If something does not help the user prepare, remove it or move it into one expandable secondary section.
- One list per page where possible; no redundant sidebars, duplicate resource lists or intermediate pages.
- Select the strongest resources and eliminate redundant alternatives; do not grow the resource catalog or the question bank by default.

## Product

- Navigation: **Interview Prep** (homepage: search, companies and employer types, topics), **Resource Library**, **Getting Hired**.
- Employers (12): Google, Amazon, Meta, Apple, Microsoft, Netflix (eligibility-first), Early-stage startups (YC logo), AI-focused startups, Growth-stage companies, Established tech companies, Enterprise & graduate programs, Other employer or posting. Roles (3): Software Engineer, Backend Engineer, Full-Stack Engineer.
- Company pages: logo, name, role selector, then only the preparation categories relevant to that company and role, each linking directly to a question set, the employer's problem selection or a guide, with an employer-specific line where evidence supports one. A company's own role list (`roleCategories`) applies where the role changes the interview; otherwise role skills are appended and marked. One compact line of official preparation links. Process, policies, timelines, eligibility, evidence and sources live in one collapsed section.
- Question pages: single column with the title, a compact list of the best external resources, then the questions with expandable answers, a filter and group chips, and expand/collapse all. Answers are concise, accurate and speakable; code and follow-ups only when they add value; the supporting source sits discreetly inside the expanded answer.
- Coding problems: select company, pattern and difficulty; problems appear in preparation-priority order with name, pattern, difficulty, a solve link and an explanation link only when it explains that exact problem. Selecting a pattern shows its best explanation. No other filters, labels or instructions.
- Resource Library: a plain directory by interview topic, each resource listed once. Getting Hired: actionable steps, questions and mistakes; long worked examples are collapsed.
- Static only. No backend, database, accounts, progress tracking, gamification, AI features, coding environments, analytics or extra dependencies. The theme preference is the only thing stored in the browser.

## Evidence standards

- `research/` (R1–R6 and batch notes) is the internal evidence base; pages show conclusions, not research reports.
- Label claims Official, Candidate-reported, Third-party, Editorial or Varies. Never fabricate employer-specific questions, question frequency, formats, hiring requirements, verification dates or resource availability. Leave a field empty rather than guess.
- Problems are representative practice chosen by pattern unless a documented candidate report names the exact problem for that employer; say which clearly. Never suggest that a number of solved problems guarantees an offer.
- Postings establish eligibility and job expectations, not interview content. Absence of evidence is not proof a format is never used. Interview processes change: tell users to confirm with their recruiter.

## Content strategy: curator, not course creator (permanent)

- Link the best existing free interview-prep resources (Tech Interview Handbook, NeetCode, Grind 75, Hello Interview free content, System Design Primer, Awesome Low-Level Design, Refactoring.Guru, DevInterview, official employer preparation pages, focused articles and videos). Official technical documentation is a supporting reference, not an assignment. Do not recommend university MOOCs, comprehensive courses or academic exercises as default preparation.
- Do not write tutorials, lessons or long explanations; answers are as long as needed and no longer.
- Select questions for interview relevance; remove redundant, overly academic or unnecessarily advanced ones. No arbitrary counts.
- Link exact sections, problems and videos. Verify the linked content, not just the HTTP status, and disclose accounts, paid sections and version caveats.

## Architecture

Next.js (App Router) + TypeScript static export (`output: "export"`). Content is data; pages render it.

| Content | File(s) | Pages |
|---|---|---|
| Types | `content/types.ts` | — |
| Question sets | `content/questions.ts` (metadata, resources, checks) + `content/questions/<slug>.ts` | `/questions`, `/questions/[slug]` (`?group=`, `#q<n>`) |
| Problems and patterns | `content/problems.ts` | `/problems` (`?company= &pattern= &difficulty=`) |
| Employers | `content/companies.ts` (list, category catalogue, role additions, checks) + `content/companies/<slug>.ts` | `/companies/[slug]` (Software Engineer), `/companies/[slug]/[role]` |
| Featured resources | `content/resources.ts` | `/resources` (also lists every question set's resources and official employer pages) |
| Getting Hired guides | `content/career-guides.ts` + `content/career-guides/<slug>.ts` | `/getting-hired`, `/getting-hired/[slug]` |
| Search index | `app/search-index.json/route.ts` | `/search-index.json` (built statically) |
| Logos | `public/logos/*.svg` | — |

Build-time checks (in the list files) reject duplicate questions or slugs, empty sets, unknown patterns, category links to missing question sets, groups or guides, notes for unused categories, problem selections for unknown employers, and more than four facts per employer. Adding content should need no application code changes.

## Code rules

- Keep the codebase small and navigable: few files and dependencies, clear names, straightforward data flow; no speculative abstractions. Client components only where interaction requires it (header, search, question list, problem table).
- Reuse existing types and pages. A new field, file, dependency or abstraction needs a reason the existing structures cannot serve.
- `npm run build` (which type-checks and runs all content checks) must pass. Long code must never cause page-level horizontal overflow; check 390px mobile widths, light and dark themes and keyboard access for UI changes.

## Design

Match the approved prototype: a modern developer-tool aesthetic (Linear, Raycast, Vercel), neutral colours with one restrained accent, minimal borders, compact readable layouts, authentic company logos, light and dark themes, responsive desktop and mobile layouts (bottom tab bar on mobile). Avoid educational-dashboard styling, excess cards, badges and decoration. Styles live in `app/globals.css`.

## Git

The product owner exclusively controls staging, commits and pushes. Only read-only git commands (`status`, `log`, `diff`, `show`, `branch`) are allowed. Never run `add`, `commit`, `push`, `reset`, `checkout`, `switch`, `stash`, `restore`, `rebase`, `merge` or `rm`, or rewrite history, without explicit authorization.

## Reporting

After each batch, report what changed, what was removed and retained, content and link verification, build and browser checks, remaining limitations, the file structure where relevant and a suggested commit message. Never claim checks that were not performed. Stop and wait for review.
