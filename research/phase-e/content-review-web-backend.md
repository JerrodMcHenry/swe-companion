# Phase E content review — web-backend

Automated review (Claude), not a human expert review. Code examples run with Node 24.21 (JS; TS via type stripping plus `tsc --strict`), Python 3.13 (`python3 -I`, httpx 0.28.1) and, for FastAPI behaviour, FastAPI 0.165.0 / Starlette 1.10.0 in a scratch virtualenv. Every printed output in these files matched its comment.

## JavaScript & the Browser (javascript.ts)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q4 var/let/const | "hoisted" without saying how var differs from let/const (which are also hoisted, in the TDZ) | var "reads as undefined before its declaration line" | MDN Closures | — |
| Q9 ES modules | "Older Node.js code uses CommonJS" implied it is obsolete | "Much existing Node.js code uses CommonJS" | MDN Modules | — |
| Q10 event loop | Stale link to the removed "Asynchronous Programming Basics"; "not parallel" without the Worker exception | Points to Python asyncio generically; notes Web Workers | javascript.info event loop | — |
| Q16 storage | Stale link to "Authentication and Authorization" | Points to APIs set (Authentication & authorization) | MDN Web Storage | — |
| Q18 CORS preflight | Said Allow-Methods is always needed; omitted the 2xx requirement; stale "Forms, API Integration and UI States" link | Preflight needs a 2xx, matching Allow-Origin, Allow-Headers for non-safelisted headers, Allow-Methods only for methods other than GET/HEAD/POST; link to React set | MDN CORS (Fetch spec CORS check) | — |
| Q19 rendering | Pipeline stopped at paint | Adds compositing | MDN How browsers work | — |

Reviewed 20 questions; no issues found in the others. Removals: none.

## TypeScript (typescript.ts)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q6 any vs unknown | Claimed noImplicitAny stops `any` "appearing by accident"; JSON.parse and response.json() still return any | Clarified the limit and advised annotating those results as unknown | TS Handbook; lib.dom `json(): Promise<any>` | — |

Reviewed 9 questions; no issues found in the others. Removals: none.

## React (react.ts)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q2 state setter | Batching described as "in one event" only (pre-React 18) | Automatic batching includes timeouts and promise callbacks since React 18 | react.dev State as a Snapshot | — |
| Q7 memo/useMemo | React Compiler mentioned without status | Stable v1.0 (Oct 2025), enabled as a build plugin | react.dev blog (React Compiler v1.0, 2025-10-07) | — |
| Q8 useEffect | "Strict Mode mounts components twice" is imprecise | One extra setup → cleanup → setup cycle per Effect | react.dev StrictMode | — |
| Q10 form submission | Omitted React 19 form actions | One sentence: action prop, FormData, automatic reset of uncontrolled fields, useFormStatus/useActionState | react.dev `<form>` | — |
| Q16 CORS error | Said Authorization "must be listed explicitly" (true of the raw `*` header, not of FastAPI, where `allow_headers=["*"]` echoes the requested header); did not warn that Starlette echoes any origin when allow_origins=["*"] with credentials | Advises explicit origins, including Authorization in allow_headers, and explains the echo risk | Ran Starlette CORSMiddleware preflights (echoed `http://evil.test` with credentials) | Starlette behaviour may change between versions |
| Q17 authenticated requests | Cross-site cookie requirements missing; 401 handling ignored refresh tokens | Explains SameSite=None; Secure and third-party blocking/partitioning (Safari, Firefox), and one refresh attempt before logout | MDN Fetch credentials; OWASP CSRF (browser defaults) | Third-party cookie policies vary by browser and change often |

Reviewed 26 questions; no issues found in the others. Removals: none.

## HTML, CSS & Accessibility (html-css-accessibility.ts)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q3 alt text | Categorical "Do not put text in images"; stale "Web Accessibility Fundamentals" link | Avoid images of text (logos are the usual exception), with alt repeating the text; link removed | WCAG 1.4.5 | — |
| Q6 cascade | Treated inline styles as part of specificity; no cascade layers | Order is origin/importance, then inline style, then @layer, then specificity, then source order | CSS Cascade 5 / MDN Handling conflicts | — |
| Q10 position | fixed is always relative to the viewport | Notes that a transformed or filtered ancestor becomes the reference | MDN Positioning | — |
| Q16 contrast | Put focus indicators under 1.4.3; implied disabled text is in scope | Disabled text is exempt; 1.4.11 Non-text Contrast requires 3:1 for icons, borders and focus indicators | W3C Understanding 1.4.3 / 1.4.11 | — |

Reviewed 18 questions; no issues found in the others. Removals: none.

## Frontend System Design & Web Performance (frontend-system-design.ts)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q1 Core Web Vitals | INP read as a single interaction | Roughly the slowest interaction of the visit | web.dev Web Vitals / INP | — |
| Q4 INP | Yield example only used setTimeout | Notes scheduler.yield() where supported | web.dev Optimize INP | Browser support for scheduler.yield is uneven (not checked per browser) |
| Q15 XSS/CSP | Example nonce could be read as static | Nonce must be freshly random per response | web.dev strict CSP | — |

Reviewed 19 questions; no issues found in the others (debounce, throttle and Promise.all code run; outputs match). Removals: none.

## APIs (apis.ts)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q3 pagination | "stable ORDER BY" was vague | Order by a unique key (id as a tie-breaker) | PostgreSQL LIMIT/OFFSET | — |
| Q5 third-party API | Backoff without jitter | Exponential backoff with jitter | HTTPX exceptions | — |
| Q8 FastAPI 422 | Implied 422 means the JSON was syntactically valid; FastAPI also returns 422 for malformed JSON | Adds that malformed JSON returns 422 (`json_invalid`) | Ran FastAPI 0.165 TestClient | — |
| Q19 OAuth/OIDC | "Recommended flow" without the current BCP | RFC 9700: PKCE MUST for public clients, RECOMMENDED for all; implicit SHOULD NOT; password grant MUST NOT. Source title corrected to the cheat sheet's actual headings | RFC 9700 §2.1.1, 2.1.2, 2.4; OWASP Authentication CS | — |

Reviewed 19 questions; no issues found in the others (httpx MockTransport and JWT decode examples run). Removals: none.

## Backend Engineering (backend-engineering.ts)

| Q | Issue | Correction | Source checked | Remaining uncertainty |
|---|---|---|---|---|
| Q1 encoding/hashing | "cannot be reversed" overstated | One-way by design, but guessable inputs can be found by trying candidates | OWASP Password Storage | — |
| Q2 passwords | No parameters, no PBKDF2/FIPS, no bcrypt 72-byte limit | Argon2id m=19 MiB t=2 p=1; bcrypt cost ≥10 and 72-byte limit; PBKDF2-HMAC-SHA256 600,000 iterations for FIPS | OWASP Password Storage CS | OWASP minimums change over time |
| Q3 SQL injection | Stale "Databases and SQL Concepts" link | Points to the SQL & Databases set | — | — |
| Q5 CSRF | Implied SameSite blocks most cross-site requests everywhere | Set SameSite explicitly (only Chromium defaults to Lax); it is defense in depth and does not cover same-site requests; adds Origin/Sec-Fetch-Site checks | OWASP CSRF CS | — |
| Q13 async def vs def | Threadpool presented as unlimited | AnyIO's default limit is 40 threads | FastAPI async docs ("If you just don't know, use normal def"); ran anyio (40) | — |

Reviewed 20 questions; no issues found in the others (base64, hash, html.escape, logging/contextvar and asyncio blocking examples run; outputs match, including 0.6 vs 0.2). Removals: none.

## Human expert review still needed

All answers need human review in principle. Highest impact: the security answers (APIs auth group — JWT validation and revocation, OAuth/OIDC, sessions vs tokens; Backend password storage and CSRF; React Q16–Q17 on CORS and cross-site cookies, since browser cookie policies keep changing); the WCAG answers (contrast, modal focus behaviour, ARIA combobox in the autocomplete exercise); the Core Web Vitals thresholds and the INP guidance; and the frontend system design answers (news feed, state placement), which are judgement-based.
