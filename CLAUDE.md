# Software Engineering Apprenticeship

*Stop searching. Start learning. Get hired.*

A curated, research-backed knowledge and navigation app giving the most efficient path to becoming an employable software engineer. Not a bootcamp or interactive learning platform. Success metric: job-relevant competence gained per hour of study.

## Roles

- **Product owner (user):** final decision-maker. Approves every milestone.
- **ChatGPT:** curriculum researcher, product architect, implementation reviewer. Supplies validated content.
- **Claude:** senior engineer implementing approved milestones only. Never expand scope independently.

## Principles

- Employment-oriented; mastery over course completion; quality over quantity.
- Comprehensive knowledge, minimal presentation. The content is the product.
- Free, high-quality external resources only.
- Extremely simple navigation and an extremely simple codebase.
- Never fabricate sources, URLs, interview requirements, resource availability or verification dates. Leave a field empty rather than guess.
- Do not generate the curriculum or bulk-populate resources. Content comes from the owner/ChatGPT.
- Company interview guides must separate official hiring information from anecdotal candidate reports.

## Architecture

- Next.js (App Router) + TypeScript + Tailwind CSS. Static generation / static export. No backend, database, auth or external APIs.
- Educational content lives in `content/` as typed TypeScript data, separate from presentation in `app/`.
- One shared knowledge base: topics are defined once and referenced by slug from the curriculum, interview guides and Getting Hired. Never duplicate content.
- Every published topic reachable within three clicks or via search.
- Adding content should require no application code changes.
- Four sections: Apprenticeship, Knowledge Library, Interview Preparation, Getting Hired.

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

M0 Inspection/plan · M1 App shell + navigation · M2 Content structure + topic page · M3 Apprenticeship navigation · M4 Knowledge Library + search · M5 Interview prep + guide template · M6 Getting Hired · M7 Initial validated content · M8 Responsive, accessibility, usability validation. Provisional; never implement a future milestone without approval.

After each milestone report: (1) what was implemented, (2) why, (3) files created/modified, (4) project file tree, (5) app and content flow, (6) dependencies and justification, (7) tests/verification, (8) known limitations, (9) manual verification steps, (10) suggested commit message. Then stop and wait for approval.
