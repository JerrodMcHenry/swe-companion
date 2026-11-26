# S8 — Backend Engineering: batch notes

Curated under the curator-not-course-creator strategy. No sample APIs, databases, environments or packages were created; Pydantic and httpx snippets were validated against versions already installed on the machine (Anaconda, 2025).

## Architecture
- Role-stage marker: `{ template: "role" }` in each target's `stages`; `backend-engineer.stages` defines three stages (APIs and validation; SQL and data modeling; security and production basics). Rule: earliest placement wins; deferred never placed; empty stages dropped. Build checks: at most one marker, marker carries no topics, a role with stages requires a marker, all keys resolve, no duplicates, no deferred entries, required entries placed, no empty stage.
- Marker positions: before the interview-simulation stage (Big Tech, established, other); before "ship" (early-stage); before "designApis" (AI-focused); after "integration" (growth-stage, so its integration stage keeps its API topics); before "assessmentDay" (enterprise).
- Software Engineer roadmaps compared before/after: identical except one deliberate fix (growth-stage "API integration tasks (forthcoming…)" placeholder now links `fastapi-http-apis`).

## Evidence used (no new broad research)
- R4 posting counts (REST 18/28, SQL 15, testing 17, logging 12, security 11, CI/CD 8, cloud 9, auth concepts 6).
- Integration/practical rounds candidate-reported: Stripe, Scale AI, Klaviyo (internship), Wise (UK). Dedicated SQL rounds not found in US new-grad evidence → SQL interview prep conditional.
- System design: Decagon, Plaud, xAI (candidate-reported); Capital One AI/ML track (official); not in Big Tech new-grad reports → conditional, low confidence.

## Documented gaps (original practice prompts where no suitable external exercise exists)
- API integration client practice (GitHub REST pagination/rate limits; PokeAPI pagination).
- Concurrent async fetches with httpx AsyncClient.
- "Diagnose from logs only" drill.
- Apply-to-project prompts throughout (CRUD resource, validation map, schema and migrations, auth tests, settings and request logging).

## Verification
- All new URLs returned HTTP 200 (curl) and named sections were checked in page text; LeetCode SQL pages and the SQL 50 plan confirmed in a browser (difficulty labels match). Link availability is not an educational-quality review. No `verifiedOn` set.
- Caveats: PortSwigger labs need a free account (some lab solutions use Burp Suite Community); LeetCode needs a free account and some content is Premium; CS50 SQL problem sets need a GitHub account; Hello Interview is commercial (cited pages free at review); the OWASP "JSON Web Token for Java" cheat sheet now 404s, replaced by the current JSON Web Token cheat sheet.
