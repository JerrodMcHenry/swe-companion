# S9 — Full-Stack Engineering: batch notes

Curated under the curator-not-course-creator strategy. No sample frontends, APIs, databases, environments or packages were created.

## Architecture (no new abstractions)
- Reuses the S8 role-stage marker. `full-stack-engineer.stages`: four stages (fsWeb, fsBackend, fsReact, fsProduction; new templates in `content/roadmap.ts`).
- Role topics: the Software Engineer entries (four raised: HTTP, SQL concepts, security → Essential; deployment → Important), eight frontend topics, and the backend topics at full-stack depth (FastAPI and Postgres at Implement, not Apply; logging and type hints Optional; async Defer). Backend content is referenced, never copied.
- Order: web platform → backend for full-stack → React and connecting the stack (so forms call the learner's own API) → security and shipping.
- Regression: all 22 Software Engineer and Backend Engineer roadmaps identical before and after S9 (stages, items, priorities, depth, exercises, notes, sequence).

## S8 follow-ups
- Growth-stage Backend roadmap verified after the marker fix (integration stage keeps its API topics).
- Optional section on stage pages now says optional topics may be skipped unless the posting, recruiter or project calls for them. Async shows the Optional chip and "Conditional" reason.
- build-deploy-project: removed stale "forthcoming" wording for Backend and Full-Stack units.
- debugging-code-review: the React debugging entry now links Frontend Testing and Debugging (Optional, conditional on the round).
- practical-coding-assessments: one evidence line for the reported frontend variants (Notion, Klaviyo internship, Accenture India).

## Evidence used (no new broad research)
- R4: 28 postings (15 full-stack): TypeScript 19, JavaScript 16, React 18, Next.js 7, HTML/CSS 6, Angular/Vue 2, testing 17, debugging 8, accessibility 4.
- Candidate-reported: Notion (debugging an existing React/TypeScript codebase), Klaviyo internship (frontend + API app), Accenture India OA (HTML/CSS/JS edit).

## Documented gaps (original prompts where no suitable external exercise exists)
- One apply-to-project prompt per frontend topic (data helpers, typing the API boundary, main page and one form, tracing one user action, Thinking in React on the main screen, one resource end to end, a test plan, a 15-minute accessibility pass) and an existing-codebase React debugging drill using the Existing-Codebase Drills method.

## Verification
- All 114 URLs in the new topics and guide return HTTP 200; named sections were checked in page text. Browser-checked: Frontend Mentor Recipe page (free; Pro design files optional), Total TypeScript beginner tutorial (free), react.dev "Fix fetching inside an Effect" challenge, Exercism Translation Service. Link availability is not an educational-quality review; no `verifiedOn` set.
- JS/TS snippets: 15 run with node (types stripped) and match their `// ->` comments; one TSX props snippet type-checked with tsc by the authoring agent and counted as inspected.
- Caveats: Exercism and Frontend Mentor downloads need free accounts; Total TypeScript, The Odin Project and Playwright need local Node/npm (Playwright downloads browsers); Full Stack Open submissions need GitHub and parts use JavaScript, axios and json-server; the Kent C. Dodds RTL article dates from 2020 (follow the current user-event API); Create React App is deprecated (react.dev, Feb 2025).
