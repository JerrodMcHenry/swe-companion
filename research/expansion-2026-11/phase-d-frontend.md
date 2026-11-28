# Phase D verification: Frontend Engineer

Date checked: **2026-11-27** for every row unless a snapshot date is given. Builds on roles.md section 5 and resources.md section 4 (not repeated here). Methods: curl plus HTML text extraction; public job APIs (Greenhouse boards-api, Ashby posting API, amazon.jobs search.json, Microsoft apply.careers PCSX search, Netflix Eightfold API, Google and Apple careers HTML); Wayback Machine for Citadel Securities (403 live); WebFetch for metacareers.com (curl gets 400); Chrome, signed out, for greatfrontend.com (curl and WebFetch get a 429 bot checkpoint); LeetCode GraphQL; YouTube search HTML plus oEmbed. I downloaded no binaries. The Meta PDF guides were not opened.

Labels: **[O]** Official employer page · **[JP]** Job posting · **[CR]** Candidate-reported · **[TP]** Third-party · **[Ed]** Editorial.
Verdicts: **VERIFIED** · **PARTLY** · **UNVERIFIED** · **FALSE**.

---

## 1. Interview expectations

### 1a. Official employer guidance

| Claim | Label | Source | Exact quote | Verdict |
|---|---|---|---|---|
| Amazon FEE process: online assessment, then a 60-min phone screen, then the loop | O | https://www.amazon.jobs/content/en/how-we-hire/fee-interview-prep | "we'll invite you to complete an online assessment … a recruiter will contact you to schedule a 60-minute technical phone screening" | VERIFIED |
| Amazon FEE OA content | O | same | "You'll have 90 minutes to answer two technical questions. You'll then complete 20 minutes of systems design scenarios" | VERIFIED |
| Amazon phone screen is half LPs, half FE coding | O | same | "Half of the time will be spent on questions that focus on our Leadership Principles and the other half will be spent on front-end coding problems." | VERIFIED |
| Amazon loop: four 55-min interviews | O | same | "Your loop will include four 55-minute interviews" | VERIFIED |
| Amazon: at least one FE system design question | O | same | "Expect at least one question on front-end systems design." | VERIFIED. The listed objectives are Usability, Performance, User experience, Accessibility, Security and Scalability |
| Amazon: real code, no pseudocode, in Livecode | O | same | "Expect to be asked to write syntactically correct code—no pseudo code." | VERIFIED |
| Amazon coding evaluation | O | same | "write scalable, robust, and well-tested code. These are the main evaluation criteria." | VERIFIED. Coding topics include "Data structures and algorithms" and "Front-end tech (HTML, CSS, JavaScript, frameworks)" |
| Amazon: no brain teasers; 2–3 LP questions per interviewer | O | same | "We won't ask brain teasers." / "typically ask two or three behavioral-based questions" | VERIFIED |
| Meta FEE initial interview: 60 min, technical and behavioral | O | https://www.metacareers.com/FEE-prep-initial (via WebFetch) | "The initial interview is a 60-minute conversation with an engineer" … "designed to assess your technical and behavioral skills" | VERIFIED. The page itself names no topics or tools. The detail is in a linked PDF (not opened) |
| Meta FEE full loop: at least three conversations | O | https://www.metacareers.com/FEE-prep-onsite (via WebFetch) | "Your interview will consist of at least three conversations with our engineers." | VERIFIED. The page gives no round types or lengths. The PDF was not opened |
| Meta FEE uses CoderPad with no autocomplete | TP | Prepfully (search snippet only) | — | UNVERIFIED on an official page. Do not state it as official |
| Meta FEE loop has coding, "UIE architecture/design" and behavioral rounds | TP/CR | Prepfully, Glassdoor (search snippets) | — | UNVERIFIED officially. Label it Candidate-reported if used |
| Google, Apple, Microsoft, Netflix, OpenAI, Anthropic, Perplexity, quant firms: official *frontend-specific* interview guidance | — | searched careers sites and FEIH company pages | — | **Not found.** Use each firm's general SWE guidance |

### 1b. Formats and seniority (third-party)

| Claim | Label | Source | Exact quote | Verdict |
|---|---|---|---|---|
| FE interviews put less weight on algorithms | TP | https://www.frontendinterviewhandbook.com/introduction (updated 5 Oct 2026) | "front end interviews have less emphasis on algorithms" … "you are probably going to get easier algorithmic questions" | VERIFIED as a TP view |
| Five formats: JS coding, UI coding, algorithmic coding, quiz/trivia, system design | TP | same | Section headings: "JavaScript coding", "User interface coding", "Algorithmic coding", "Quiz/trivia questions", "System design" | VERIFIED |
| JS coding = Lodash-style utilities and polyfills | TP | same | "a utility function found in Lodash/Underscore (e.g. throttle ), or a polyfill … (e.g. Array.prototype.filter() , Promise.all()" | VERIFIED |
| Autocomplete is a very popular UI coding question | TP | same | "Autocomplete ( very popular )" | VERIFIED (TP claim) |
| React is not always allowed | TP | same | "Not all interviews allow you to use React as they want to see mastery of the fundamentals" | VERIFIED |
| Per-company format table (for example Meta: quiz yes, algorithms no, UI coding no, system design yes) | TP | same | Uses ✅/❌/⚠️ marks. Undated, compiled from web reports | PARTLY. Old and aggregated; **do not publish** per-company cells |
| Advanced JS coding questions go to more senior candidates | TP | https://www.frontendinterviewhandbook.com/coding/javascript-utility-function | "Advanced questions are usually given to more senior candidates" | VERIFIED |
| Accessibility distinguishes junior from senior in UI coding | TP | https://www.frontendinterviewhandbook.com/coding/build-front-end-user-interfaces | "Knowledge of a11y is one of the differentiating factors between junior vs senior engineers." | VERIFIED |
| Performance, a11y and i18n distinguish senior candidates in system design | TP | https://www.frontendinterviewhandbook.com/front-end-system-design | "The more advanced topics such as performance, accessibility and i18n are what differentiates senior candidates from junior candidates." | VERIFIED |
| **FE system design is mostly for mid/senior** | TP | https://www.greatfrontend.com/front-end-system-design-playbook (Chrome) | "System design interviews are often reserved for mid-to-senior roles" | VERIFIED as a TP claim. **Counter-evidence [O]:** Amazon's FEE page applies "at least one question on front-end systems design" to all FEE loops and puts system-design scenarios in the OA. Write it as "often lighter or absent for junior roles; Amazon includes it" |
| FE system design is client-side; treat the server as a black box | TP | https://www.greatfrontend.com/front-end-system-design-playbook/framework | "Remember to focus on the client-side architecture, not the back end." | VERIFIED |
| RADIO time split: R about 10%, A 20%, D 10%, I 20%, O 40% | TP | same | Summary table on the page | VERIFIED |
| UI coding is often on CoderPad, sometimes bring-your-own environment | TP | FEIH UI coding page | "A common platform for this is CoderPad ." | VERIFIED (TP, general) |
| DSA in FE: focus on trees (the DOM is a tree) | TP | https://www.frontendinterviewhandbook.com/coding/algorithms | "definitely focus on being good at tree data structures" | VERIFIED |

---

## 2. Employer evidence (frontend-titled postings, 27 Nov 2026)

| Employer | Posting? | Titles, counts and URLs | Experience / eligibility (quoted or "not stated") | Label |
|---|---|---|---|---|
| **Amazon** | **Yes**, many | amazon.jobs search "front end engineer": 28 hits, about 17 FEE software titles. New grad: **Front-End Engineer – 2027 (US)** https://www.amazon.jobs/en/jobs/10610793/front-end-engineer-2027-us ; **Front-End Engineer Internship – 2027 (US)** https://www.amazon.jobs/en/jobs/10609992/front-end-engineer-internship-2027-us ; experienced: Front-End Engineer https://www.amazon.jobs/en/jobs/10573988/front-end-engineer , plus several FEE II and Sr. FEE roles | 2027 new grad: "Currently has, or is in the process of obtaining, a Bachelor's degree or above". Experienced FEE: "3+ years of non-internship professional front end, web or mobile software development" | JP + O guide |
| **Meta** | **Likely, not confirmed live** | Search results show metacareers listings ("Front End Engineer", "Software Engineer, Front End/UIE"). Three sampled job URLs returned **404** and the search page renders client-side. The official FEE prep pages exist | Not verified | O (prep pages); postings UNVERIFIED |
| **Google** | **Partly** (UX Engineer, not "Front End Engineer") | Exact search "UX Engineer": 4 results (Senior UX Engineer; Senior UX Engineer, Search Ads; Staff UX Engineer, Search Design System; User Experience Engineer Intern, PhD, Summer 2027). Also "Software Engineer II/III, Full Stack". Example: https://www.google.com/about/careers/applications/jobs/results/72855872014820038-senior-ux-engineer | Senior UX Engineer: "6 years of experience in front-end development, technical UX design, or prototyping" | JP |
| **Apple** | **Yes** | "frontend" search: 112 results (mixed). FE titles include **Frontend Engineer, EE&P - IS&T Early Career** (Austin, posted 10 Aug 2026) https://jobs.apple.com/en-us/details/200676168-0157 ; UI Engineer (Web), Apple Services Engineering; Senior UI Engineer - Web; Frontend Engineer (AI Experiences), Retail and Marcom; Java Frontend Engineer (Hyderabad) | Early Career: "Proficient programming knowledge in at least one of … Web development (JavaScript, HTML, CSS3)" plus a Bachelor's degree "or equivalent experience". No years stated | JP |
| **Microsoft** | **Yes, outside the US** | PCSX search "frontend": 12 results. Only frontend-titled one: **Software Engineer 2 - Frontend** (Hyderabad) https://apply.careers.microsoft.com/careers/job/1970393557045186 . The rest are generic SWE titles | Not extracted | JP |
| **Netflix** | **Yes (one)** | **Front-End Developer - Netflix Animation Studios** (Vancouver) https://explore.jobs.netflix.net/careers/job/790318358916 ; also "Software Engineer 4 - TV & Web Player" and "Visualization Engineer 5" | Netflix levels 4/5 are experienced. Front-End Developer level not extracted | JP |
| **OpenAI** | **Yes** | Ashby (876 postings): **Frontend Software Engineer, Codex App** https://jobs.ashbyhq.com/openai/5f6685ad-2fba-4e60-8982-fa142b33e194 ; **Frontend Software Engineer, ChatGPT Space** https://jobs.ashbyhq.com/openai/1f99d5d3-4512-4247-aaba-3133a3dabf5a ; Software Engineer, Mobile Web — Dots https://jobs.ashbyhq.com/openai/3b34eb10-25b0-4a97-bd6d-05fc90ad4981 | No years given. "Have strong experience with modern frontend stacks (React, TypeScript) and a high bar for UI craft." | JP |
| **Anthropic** | **Yes (one)** | Greenhouse (634): **Front End Engineer, Marketing** (SF/NYC) https://job-boards.greenhouse.io/anthropic/jobs/5386971008 . Also Senior Product Engineer, Education | "at a mid-level scope"; "Years of experience required will correlate with the internal job level". Next.js/React and CSS | JP |
| **Perplexity** | **No FE title** | Ashby (150): no "frontend" or "front end" title. Closest: Member of Technical Staff (Software Engineer, Design System) https://jobs.ashbyhq.com/Perplexity/78675022-c4a7-41d2-9259-7c59be4de93c ; Design Engineer, Growth & Marketing; Senior QA Web Engineer | — | JP (absence) |
| **Jane Street** | **Yes** | Greenhouse (219): **Front End Software Engineer**, New York https://www.janestreet.com/join-jane-street/apply/6184529002 and London https://www.janestreet.com/join-jane-street/apply/6236002002 | No years given. "browser fundamentals like CSS and the DOM"; "we don't expect experience in OCaml in particular" | JP |
| **Citadel Securities** | **Yes** (Wayback) | **Equities Engineering, Product Frontend Engineer, New York** (snapshot 21 Sep 2026) https://www.citadelsecurities.com/careers/details/equities-engineering-product-frontend-engineer-new-york/ ; **UI Engineer, Global Trading Applications**, NY (snapshot 28 Oct 2026). Search also lists UI Engineer, CES Client Platforms (no snapshot) | Product FE: "3+ years of professional software engineering experience." React plus TypeScript. Live status unverified (403) | JP (snapshot) |
| **Hudson River Trading** | **No** | Greenhouse wehrtyou (86): no frontend, UI or web title | — | JP (absence) |
| **Jump Trading** | **Yes** | Greenhouse (83): **Campus UI Software Engineer (Intern)** https://www.jumptrading.com/hr/job?gh_jid=8003019 ; **Software Engineer, UI Platform** (gh_jid 5500453); **Software Engineer, GUI** (gh_jid 7662486), all Chicago | Intern: "Web development using Python and Typescript". UI Platform: "At least 4 years of professional experience building web-based UIs". GUI: "At least 5 years" | JP |
| **Optiver** | **No (current)** | Greenhouse optiverus (146, all offices): no frontend or UI title. A "Software Engineer - User Interface (C#)" Amsterdam role (Nov 2025) appears only on an aggregator, not on the board | — | JP (absence) |

Suggested `Company.roles` for Frontend (evidence-based) [Ed]: Amazon, Apple, OpenAI, Jane Street, Jump Trading, Citadel Securities (re-check live), Google (as UX Engineer, with a caveat), Microsoft (non-US only), Netflix (one role), Anthropic (one marketing-web role). Omit Perplexity, HRT and Optiver. Meta has official FEE prep pages, so including it is defensible, but its postings were not confirmed live.

---

## 3. Resources (access verified)

| Resource | URL | Access | Content verified | Verdict |
|---|---|---|---|---|
| Front End Interview Handbook: Introduction / formats | https://www.frontendinterviewhandbook.com/introduction | Free, no account. GreatFrontEnd upsell banners | Formats, fundamentals list (updated 5 Oct 2026) | **Recommend** |
| FEIH JS coding | https://www.frontendinterviewhandbook.com/coding/javascript-utility-function | Free | Lists GFE starter questions marked (Free): Debounce, Promise.all, Flatten, Deep Clone, Event Emitter … | Recommend (pointer) |
| FEIH UI coding | https://www.frontendinterviewhandbook.com/coding/build-front-end-user-interfaces | Free | Components (Tabs, Modal, Accordion …), a11y note | Recommend |
| FEIH JS quiz answers | https://www.frontendinterviewhandbook.com/javascript-questions | Free (about 12.6k words) | Trivia answers | Optional (overlaps the existing JS set and sudheerj) |
| **GreatFrontEnd Front End System Design Playbook** | https://www.greatfrontend.com/front-end-system-design-playbook | **Partly free.** The 6 guide chapters are readable signed out (RADIO chapter read in full). Practice questions: page shows "Free 2", "Premium 18" | RADIO, client-side focus | **Recommend** the guide chapters. Say "practice questions mostly Premium" |
| GFE system design: Autocomplete | https://www.greatfrontend.com/questions/system-design/autocomplete | **Free**, full article signed out | Controller, cache, race conditions, debounce, combobox ARIA | **Recommend** |
| GFE system design: News Feed | https://www.greatfrontend.com/questions/system-design/news-feed-facebook | **Free**, full article signed out (updated 2026) | CSR/SSR, normalized store, cursor pagination, virtualization, IntersectionObserver | **Recommend** |
| web.dev Web Vitals | https://web.dev/articles/vitals (updated 31 Oct 2024) | Free, official (Google) | Thresholds and the 75th percentile (section 5) | **Recommend** |
| web.dev Rendering on the Web | https://web.dev/articles/rendering-on-the-web (updated 5 Jan 2026) | Free | SSR, static rendering, hydration definitions | Recommend (optional) |
| MDN Critical rendering path | https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Critical_rendering_path | Free | Present (the page loads and its content matches) | Supporting reference |
| MDN HTTP caching | https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Caching (old /Web/HTTP/Caching redirects here) | Free | Cache-Control, private | Supporting reference |
| WAI-ARIA APG Combobox | https://www.w3.org/WAI/ARIA/apg/patterns/combobox/ | Free, W3C | Pattern plus examples (combobox-autocomplete-list etc.) | Recommend for the a11y component |
| sudheerj JS / React repos | (already used) | Free | 27.7k / 44.9k stars; pushed 20 Aug / 13 Oct 2026; not archived | Keep |
| FEIH repo | yangshun/front-end-interview-handbook | Free | 44.0k stars, pushed 5 Oct 2026 | — |

Not recommended [Ed]: the FEIH per-company format table (unsourced), GFE Premium questions, and FEIH course tables (paid courses). I verified no focused FE system design **video**. The free GFE Autocomplete and News Feed articles cover the need, so leave the video field empty.

---

## 4. Practical exercises (free, verified)

| Exercise | Link | Access | Notes |
|---|---|---|---|
| Debounce | https://www.greatfrontend.com/questions/javascript/debounce | Free prompt, in-browser editor and tests, signed out ("Asked at" company tags are Premium). Solution tab not opened | Or LeetCode 2627 (free) or javascript.info task |
| Debounce (alt) | https://javascript.info/task/debounce | Free, with solution | From https://javascript.info/call-apply-decorators#debounce-decorator |
| **Throttle** | https://javascript.info/task/throttle | Free, with solution | **GFE Throttle is Premium** (paywall seen signed out). **LeetCode 2676 Throttle is Premium** |
| Promise.all | https://www.greatfrontend.com/questions/javascript/promise-all | Free prompt and tests | LeetCode 2721 is the free equivalent |
| Event emitter | https://www.greatfrontend.com/questions/javascript/event-emitter | Free prompt and tests | Or LeetCode 2694 |
| Autocomplete (design) | https://www.greatfrontend.com/questions/system-design/autocomplete | Free | Pair with APG combobox |
| Accessible combobox | https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/ | Free (200) | Reference implementation |
| Accessible tabs | https://www.w3.org/WAI/ARIA/apg/patterns/tabs/ (example: …/examples/tabs-automatic/) | Free | Build practice: https://www.greatfrontend.com/questions/user-interface/tabs (free, React or vanilla editor) |
| Modal dialog (a11y) | https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/ | Free | — |
| Infinite scroll / pagination | https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API | Free | MDN lists "Implementing "infinite scrolling" websites" as a use. The design side is the GFE News Feed article (cursor pagination) |
| Long lists | https://web.dev/articles/virtualize-long-lists-react-window | Free (200) | Optional |

### LeetCode JS problems (GraphQL `isPaidOnly`, 27 Nov 2026) and videos (oEmbed-verified titles)

| Slug | # | Difficulty | Access | Video (NeetCodeIO, title exact via oEmbed) |
|---|---|---|---|---|
| debounce | 2627 | Medium | Free | `1sxSpnxNx5w`: "Debounce - Leetcode 2627 - JavaScript 30-Day Challenge" |
| throttle | 2676 | Medium | **Paid (Premium)** | — (do not link) |
| promise-time-limit | 2637 | Medium | Free | `hfH57rdZhOk`: "Promise Time Limit - Leetcode 2637 - JavaScript 30-Day Challenge" |
| execute-asynchronous-functions-in-parallel | 2721 | Medium | Free | **None from NeetCode found.** Only small channels; leave empty |
| event-emitter | 2694 | Medium | Free | `M69bjWFarU0`: "Event Emitter - Leetcode 2694 - JavaScript 30-Day Challenge" |
| flatten-deeply-nested-array | 2625 | Medium | Free | `_DetLPKtFNk`: "Flatten Deeply Nested Array - Leetcode 2625 - JavaScript 30-Day Challenge" |
| cache-with-time-limit | 2622 | Medium | Free | `w772gtNK0Gw`: "Cache With Time Limit - Leetcode 2622 - JavaScript 30-Day Challenge" |
| sleep | 2621 | Easy | Free | `P0D9Z6H7O00`: "Sleep - Leetcode 2621 - JavaScript 30-Day Challenge" |
| array-wrapper | 2695 | Easy | Free | `XoGjPdPTAVA`: "Array Wrapper - Leetcode 2695 - JavaScript 30-Day Challenge" |
| timeout-cancellation (extra) | 2715 | Easy | Free | No NeetCode video found |

All videos are by the author "NeetCodeIO" (oEmbed `author_name`). The titles name the exact LeetCode number, so each explains that exact problem. I did not watch them in full. These are representative practice, not employer-reported questions.

---

## 5. Core Web Vitals (technical claims)

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| Three Core Web Vitals: LCP, INP, CLS | https://web.dev/articles/vitals | "pass if it meets the recommended targets at the 75th percentile for all three of the Core Web Vitals metrics" | VERIFIED |
| LCP good ≤ 2.5 s | same | "LCP should occur within 2.5 seconds of when the page first starts loading." | VERIFIED |
| LCP poor > 4.0 s | https://web.dev/articles/lcp (updated 4 Sep 2025), image alt | "poor values are greater than 4.0 seconds" | VERIFIED |
| INP good ≤ 200 ms; poor > 500 ms | https://web.dev/articles/inp (updated 2 Sep 2025) | "An INP below or at 200 milliseconds means a page has good responsiveness" / "An INP above 500 milliseconds means a page has poor responsiveness" | VERIFIED |
| CLS good ≤ 0.1; poor > 0.25 | https://web.dev/articles/cls | "Good CLS values are 0.1 or less." / "Poor values are greater than 0.25." | VERIFIED |
| Assess at the 75th percentile, mobile and desktop separately | vitals | "a good threshold to measure is the 75th percentile of page loads, segmented across mobile and desktop devices" | VERIFIED |
| INP replaced FID on **12 Mar 2024** | https://web.dev/blog/inp-cwv-launch (page dated 2024-03-12) | "Interaction to Next Paint is now a stable Core Web Vital metric, replacing First Input Delay." | VERIFIED |
| FID tooling transition deadline 9 Sep 2024 | same | "developers will have until September 9, 2024 to transition over to INP" | VERIFIED |
| Vitals page wording on the change | vitals | "This is exactly what happened to FID as INP became a stable Core Web Vital metric in 2024" | VERIFIED |
| SSR vs hydration guidance | https://web.dev/articles/rendering-on-the-web | "we encourage developers to consider server-side rendering or static rendering over a full rehydration approach." | VERIFIED |

---

## Summary for drafting

- **Official [O]:** Amazon's FEE prep page is the strongest employer source. It describes a 90-min OA (two questions plus 20-min system-design scenarios), a 60-min screen (half LPs, half FE coding), four 55-min loop interviews, at least one FE system design question, real code with no pseudocode, and coding topics of DSA plus HTML/CSS/JS/frameworks. Meta officially describes only a 60-min initial interview (technical plus behavioral) and "at least three conversations" in the full loop.
- **Third-party [TP]:** formats are JS utility/polyfill coding, UI component building (sometimes without React), lighter DSA (trees), quiz, and FE system design (RADIO, client-side). Senior differentiators are performance, a11y and i18n. GreatFrontEnd says FE system design is "often reserved for mid-to-senior roles", but Amazon includes it for all FEE loops.
- **Do not publish:** FEIH per-company ✅/❌ cells; "Meta uses CoderPad without autocomplete" as official; GFE or LeetCode Throttle as free.

## Sources

| Source | URL | Type | Access |
|---|---|---|---|
| Amazon FEE Interview Prep | https://www.amazon.jobs/content/en/how-we-hire/fee-interview-prep | O | Free |
| Meta FEE initial prep | https://www.metacareers.com/FEE-prep-initial | O | Free (PDF linked, not opened) |
| Meta FEE full-loop prep | https://www.metacareers.com/FEE-prep-onsite | O | Free (PDF linked, not opened) |
| Front End Interview Handbook | https://www.frontendinterviewhandbook.com/ | TP | Free |
| GreatFrontEnd FE System Design Playbook | https://www.greatfrontend.com/front-end-system-design-playbook | TP | Partly free |
| web.dev Web Vitals / LCP / INP / CLS | https://web.dev/articles/vitals ; /lcp ; /inp ; /cls | O (Chrome team) | Free |
| web.dev INP launch | https://web.dev/blog/inp-cwv-launch | O | Free |
| web.dev Rendering on the Web | https://web.dev/articles/rendering-on-the-web | O | Free |
| MDN CRP / HTTP caching / IntersectionObserver | see section 3–4 | Reference | Free |
| W3C WAI-ARIA APG | https://www.w3.org/WAI/ARIA/apg/patterns/ | Standard | Free |
| javascript.info decorators | https://javascript.info/call-apply-decorators | TP | Free |
| LeetCode GraphQL | https://leetcode.com/graphql | — | — |
| Job APIs | boards-api.greenhouse.io (anthropic, janestreet, jumptrading, optiverus, wehrtyou); api.ashbyhq.com (openai, perplexity); amazon.jobs/en/search.json; apply.careers.microsoft.com/api/pcsx/search; explore.jobs.netflix.net/api/apply/v2/jobs; google.com/about/careers; jobs.apple.com; Wayback for citadelsecurities.com | JP | Public |
