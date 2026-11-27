# Phase C verification: quant firms, problems, resources

Date checked: **2026-11-27** for every row unless a snapshot date is given. I read pages with curl (HTML text extraction), the public Greenhouse board API, the LeetCode GraphQL endpoint, YouTube and Wistia oEmbed, the Wayback Machine (for Citadel Securities, which returns 403 live), and WebFetch for the HRT blog (403 to curl). I downloaded no binaries; PDFs were checked with HEAD requests only. Quotes are verbatim and under 25 words.

Verdicts: **VERIFIED** (primary page says it) · **PARTLY** (true but needs a qualifier or the wording differs) · **UNVERIFIED** (could not confirm from a primary page) · **FALSE** (primary page contradicts it).

---

## A. Jane Street

### A1. Official SWE interview guidance

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| Any language allowed | https://www.janestreet.com/preparing-for-a-software-engineering-interview (undated, live) | "You can use any programming language you'd like, but we strongly recommend you use the one you're most familiar with" | VERIFIED |
| Real code, no pseudocode | same | "We expect you to write code in a real programming language in these interviews, not pseudocode." | VERIFIED |
| Zoom first round, then in-person finals focused on coding | same | "a technical interview that takes place over Zoom, and continue to final-round interviews in person" … "mostly, if not exclusively, focused on collaborating on a series of coding problems" | VERIFIED (the page says "mostly, if not exclusively", not "mostly, if not entirely") |
| No mental maths or puzzles for SWE | same | "We don't ask software engineers to do mental math, or math olympiad questions, or to contemplate logic puzzles." | VERIFIED |
| No probability for SWE | https://blog.janestreet.com/jane-street-interview-process-2020/ (24 Jul 2020) | "We won't ask you math or probability questions for general software engineering roles." | VERIFIED (2020 post; the current prep page says maths and puzzles but does not use the word "probability". The 2026 post says the earlier posts are "still accurate") |
| No algorithm bingo or "aha" puzzles | prep page | "we try to avoid algorithm bingo and puzzles with clever "aha" solutions" | VERIFIED |
| No bonus for OCaml | prep page | "We also don't award bonus points for using a functional language like OCaml." | VERIFIED |
| OCaml not required; don't try it for the first time | https://www.janestreet.com/join-jane-street/interviewing/ (FAQ) | "Do I need to be able to code in OCaml? Nope! … we strongly encourage you not to try OCaml for the first time during the interview." | VERIFIED |
| Most hires have no OCaml experience | same | "Most of the software engineers we hire come in without any OCaml or even functional programming experience." | VERIFIED |
| Process "can be a bit more bespoke" | same | "For any interview processes not outlined above, it can be a bit more bespoke; in those cases, your recruiter can give you more information" | PARTLY: it applies to processes not outlined on the page, not to SWE in general |
| No advanced degree needed | prep page | "you don't need a Ph.D. or a master's degree to apply" | VERIFIED |
| Interviews use CoderPad | 2020 blog | "For phone interviews we use CoderPad, a shared in-browser code editor." | VERIFIED for 2020 only. The current pages name Zoom and do not mention CoderPad. Do not state CoderPad as current |
| Experienced candidates get more varied interviews | 2026 blog (below) | "our more experienced candidates' interviews will continue to be more varied … from producing software to designing systems and discussing prior work" | VERIFIED |
| Mock interview page | https://www.janestreet.com/mock-interview | "take us through a typical Jane Street software engineering interview, using a now retired interview question" | VERIFIED |
| Mock page recommends LeetCode/HackerRank as practice | same | "you can try sites like Leetcode and Hackerrank … they're good sources of algorithmic practice" | VERIFIED |

### A2. "Our software engineering interviews are changing (a little)"

URL: https://blog.janestreet.com/software-engineering-interviews-are-changing-a-little/ . Byline Matthew Saffer, dated **Nov 02, 2026**.

| Claim | Exact quote | Verdict |
|---|---|---|
| Trial rounds started this summer, for **campus** onsites | "this summer we started trialing some new kinds of interviews in our onsites for campus candidates" | VERIFIED |
| Content of the new rounds | "less code-writing … focusing on software design, on verifying the quality, structure, and intention of code, and on using LLMs to produce code" | VERIFIED |
| Other rounds are LLM-free | "Most rounds will continue to be traditional coding interviews, conducted without LLM assistance." | VERIFIED |
| Not every onsite has them; candidates are told | "Not every onsite includes these new rounds yet, and when you come on-site we'll give you a heads-up" | VERIFIED |
| No particular LLM setup needed | "we don't expect you to have a particular setup or to use them for everything" | VERIFIED |
| Earlier posts still accurate | "If you've read our earlier posts about interviewing here, they're still accurate." | VERIFIED |
| Formats deliberately vague | "the formats are still evolving, and we'd rather not describe something in detail today" | VERIFIED |

Note: the post says LLMs are *used* in the new rounds ("using LLMs to produce code"). It does not use the word "permitted" and gives no rule for the phone or Zoom round. Write "some trial campus onsite rounds involve using LLMs", not "LLMs are allowed in interviews".

### A3. Officially published retired question

| Item | Source | Exact quote | Verdict |
|---|---|---|---|
| "Memo" question, no longer asked | https://blog.janestreet.com/what-a-jane-street-dev-interview-is-like/ (Sebastian Funk, 28 Feb 2017) | "a question we call "Memo" which we used to ask regularly (but of course don't ask anymore so no need to memorize anything" | VERIFIED |
| Part 2: bounded cache with FIFO, O(1) eviction | same | "bound the size of the hash-table and to evict things from it in a FIFO fashion" | VERIFIED |
| Part 3: LRU | same | "FIFO can be very inefficient in some use-cases. Let's say we want to do LRU (least recently used) instead." | VERIFIED |
| Pass guidance | same | "Most candidates that we pass also complete part 2 fully … Strong candidates finish part 3 with a complete solution" | VERIFIED (2017 guidance; label it dated) |
| "hash table plus doubly linked list" for LRU | same | Not quoted in the extracted text. The post asks for an efficient LRU without spelling out the data structure in what I read | UNVERIFIED as a Jane Street statement. It is the standard answer (editorial) |
| Mock video uses a retired question | mock page (quote in A1) | — | VERIFIED. The question itself is not named on the page |

Framing: Jane Street presents both as examples of the style and asks candidates not to share questions. Neither is a current question.

### A4. Postings (Greenhouse `janestreet`, 219 postings, all `updated_at` 2026-11-25)

I reviewed all 219 titles and read the text of the 14 software-engineering-titled postings (12 "Software Engineer", 1 "Software Engineer / Writer", 1 "Low-Latency Engineer").

| Title | Type (Greenhouse "Employment Type") | IDs | Key line | Verdict |
|---|---|---|---|---|
| Software Engineer | Full-Time: Experienced (NYC, London, HK, Singapore) | 4274288002, 4274814002, 4756741002, 5791948002 | "We don't expect you to have experience with functional programming, OCaml, Python, or finance" | VERIFIED |
| Software Engineer | Full-Time: New Grad (NYC, London, HK, Singapore) | 8594541002, 8647260002, 8637960002, 8646746002 | "most of us came in with little to no practical experience in OCaml before we joined" | VERIFIED |
| Software Engineer | Summer Internship (NYC, London, HK, Singapore) | 8599644002, 8589868002, 8617298002, 8632392002 | "you'll learn how we use OCaml (our primary development language) in our day to day work" | VERIFIED |
| Low-Latency Engineer | Full-Time: Experienced, NYC, $250k–$300k | 6254435002 | "you don't need any experience with OCaml in particular (we can teach it to you)" | VERIFIED |
| Software Engineer / Writer | Full-Time: Experienced | 7604415002 | "experience with functional programming, expressive type systems, OCaml, or finance are all unnecessary" | VERIFIED |
| "(OCaml Experience)" titles | — | **0 of 219** current titles. The previously cited posting 7515116002 returns **404** | — | The claim "OCaml is required only for '(OCaml Experience)' titles" is **UNVERIFIED** (search snippet only, and the posting has been removed). Drop it |
| Quantitative developer / algorithm developer titles | — | **None**. Development-like titles are "Formal Methods Research and Development" and "Tools and Compilers Research and Development" (research roles) | — | VERIFIED: expected "no" confirmed |

---

## B. Citadel Securities (separate from Citadel, the hedge fund)

The live site returns **403** to automated requests. Everything below comes from Wayback snapshots.

### B5. "Our Engineering Interview Process"

Snapshot **2026-01-10** (`web.archive.org/web/20260110114950/https://www.citadelsecurities.com/careers/career-perspectives/our-engineering-interview-process/`). Page date **November 09, 2024**.

| Claim | Exact quote | Verdict |
|---|---|---|
| Four steps, about 8 weeks | "There are four steps in the process. Typically, it takes about eight weeks from start to finish." | VERIFIED |
| 45-minute remote first round, technical plus behavioral | "This 45-minute remote interview will cover both technical and behavioral skills." | VERIFIED |
| First-round content | "We'll focus on programming skills, ability, data structures/algorithms and problem-solving." | VERIFIED |
| Languages | "Our core programming languages are Python and C++, but we welcome any languages." | VERIFIED |
| CoderPad | "Prior to the interviews, we'll send a CoderPad link." | VERIFIED |
| Second round: three 45-minute interviews | "The second-round usually consists of three 45-minute interviews." | VERIFIED |
| Leadership interview with a senior engineer, possibly several | "you will interview with a senior engineer to be assessed for a specific team … this round could consist of multiple interviews" | VERIFIED |
| Final review | "Hiring managers will determine your fit within that specific team." | VERIFIED |
| Team matching at the end | "you will not be interviewing for a position on a specific team until the end of the process" | VERIFIED |
| One process for Citadel and Citadel Securities | "The interview process is the same for both firms." | VERIFIED |
| Campus-oriented | "Reflect on how your past internship experience has contributed to business outcomes." Also an FAQ: "I'm interviewing for an internship position." | VERIFIED (campus framing; whether it also covers experienced hires is unconfirmed) |
| Problem-solving advice | "Our approach is practical and oriented toward problem-solving." | VERIFIED |
| No OA, take-home, maths or AI policy on the page | (absent) | VERIFIED as absent from this page only |

### B6. Postings (Wayback snapshots; the live pages return 403)

| Title (page `<title>`) | Snapshot | Experience / key lines | Verdict |
|---|---|---|---|
| Software Engineer - University Graduate (US), Miami/NY | 2026-10-28 `…/careers/details/software-engineer-university-graduate-us/` | "Strong analytical skills and familiarity with probability and statistics"; "Exceptional programming and design skills"; base $235,000–$300,000 | VERIFIED |
| Software Engineer - Intern (US), NY/Miami | 2026-11-15 `…/software-engineer-intern-us/` | The same probability and statistics line; 11-week program; $4,500–$5,800 per week | VERIFIED |
| C++ Software Engineer (expression of interest) | 2026-09-21 `…/c-software-engineer/` | "Deep experience in C++ with a passion for clean, performant code"; "A strong grasp of multithreading, concurrency, and distributed systems"; "Background in Trading or finance is a plus but not a requirement" | VERIFIED. No years stated |
| Crypto Quantitative Developer, NY/London | 2026-11-15 `…/crypto-quantitative-developer/` | "Strong proficiency in C++ (C++17 or newer) with a focus on performance-critical systems"; "Experience developing production trading systems or other low-latency, high-availability software"; base $175k–$350k | VERIFIED on the firm's own site (the earlier note cited only a Built In copy) |
| Quantitative Developer/Research Engineer (Miami, Chicago, London, NY, HK, Sydney, Singapore) | 2026-10-28 `…/quantitative-developer-research-engineer/` | "Proficiency within one or more programming languages, including C++, Python, and R"; base $250k–$350k | VERIFIED |
| Senior Quantitative Developer | 2026-10-28 `…/senior-quantitative-developer/` | Page body describes "Research Engineers"; "Proficiency with C++ and Python"; derivatives and pricing-library experience | VERIFIED (senior; out of scope) |
| Other engineering URLs in the Wayback CDX index (2025–2026; not read) | — | Software Engineer – University Graduate (Europe), Software Engineer – Intern (Europe/Asia/Australia), Market Data Software Engineer, Credit Software Engineer, Full Stack Software Engineer, Senior Python Software Engineer, C++ Market Data Engineer, FPGA Engineer | Existence only (URLs archived with status 200); contents not checked |

**Is "Quantitative Developer" a real Citadel Securities title?** **Yes, VERIFIED.** The firm's own pages carry "Crypto Quantitative Developer", "Quantitative Developer/Research Engineer" and "Senior Quantitative Developer".

**Probability line:** it appears in both the University Graduate (US) and Intern (US) SWE postings. It is a job requirement, not evidence that probability is interviewed.

Rates & Credit C++ Engineer (Built In copy): not re-checked. It is reported removed, so keep it out of published text.

---

## C. HRT

### C7. HRT Beat, "How to Prepare for Your Software Engineer Interview at HRT"

URL: https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/ . Dani Ortiz, **Sep 15, 2021**. curl gets 403, so I read it with WebFetch. The quotes below are as WebFetch returned them.

| Claim | Exact quote | Verdict |
|---|---|---|
| Campus SWE and Algo Engineering | "In this post, we'll dive into the interview process for our software engineering roles for campus candidates." | VERIFIED |
| Take-home, timed, HackerRank/Codility | "These are usually timed and have a deadline." / "typically conducted over Hackerrank or Codility" | VERIFIED |
| Language may be restricted; references allowed | "you may have restrictions on which languages you can choose" / "Feel free to use resources that are available to you (books/internet) as a language reference" | VERIFIED |
| About two phone interviews, 45-minute technical discussion | "roughly two phone interviews" / "These rounds are usually a 45-minute discussion" | VERIFIED |
| Programming round language | "For certain roles, you'll be asked to program in either C++ or Python" | VERIFIED |
| Onsite code quality | "Are you able to write idiomatic code that uses modern syntax" … "makes optimal use of resources, is well-encapsulated, easy to read, and well-commented?" | PARTLY: the existing note's quoted string "idiomatic, modern, resource-aware, well-encapsulated, readable" is a paraphrase. Do not present it as a quotation |
| Systems knowledge | "fundamental systems knowledge (memory, I/O, process management)" | VERIFIED |
| Internships | "applies to our internship programs as well, just with a slightly abridged process" | PARTLY: the existing note's "similar but more abbreviated" is a paraphrase |
| Recruiter is the source of truth | "use the information they provide as your primary source of truth" | VERIFIED |
| Maths, probability, AI | Not mentioned | VERIFIED as absent |

**Newer official interview page:** none found. https://www.hudsonrivertrading.com/recruiting/ is a blog-archive listing whose only interview item is this 2021 post. A site search found no newer HRT process page.

### C8. Postings (Greenhouse `wehrtyou`, 86 postings)

| Title | ID, updated | Level / key lines | Verdict |
|---|---|---|---|
| Software Engineer (C++ or Python) – 2027 Grads (Austin, Chicago, London, NY, Singapore) | 8052122, 2026-11-19 | "You are a full-time undergraduate or master's student studying computer science"; "Working experience with C/C++ or Python is required, as are good CS fundamentals"; "Base salary for US is $300,000." | VERIFIED |
| Software Engineering Internship (C++ or Python) – Summer 2027 | 8052083, 2026-11-19 | "Programming experience in Python, C or C++ is required" | VERIFIED |
| Software Engineer – C++ (Austin, Chicago, London, NY) | 7392942, 2026-11-06 | "1+ years of professional work experience"; "Advanced C++ experience is required, daily use preferred"; $200k–$300k | VERIFIED |
| Software Engineer - Low Level (C++) (HK; Singapore) | 6345536; 1229082 | Experienced | VERIFIED (title) |
| Software Engineer - Python (Singapore; Chicago/London/NY) | 4374565; 7398013 | — | VERIFIED (title) |
| Algo Developer (NY, Singapore) | 96224, 2026-11-06 | "applying rigorous statistical analysis to vast quantities of market and financial data to produce predictive trading models" | VERIFIED: a quant-research role, not engineering |
| Algorithm Developer (Quant Research & Trading) – 2027 Grads / 2027 PhDs; Algorithm Development (QR&T) Internship | 8052050, 8059845, 7964062, 8059837 | Campus quant-research titles | VERIFIED |
| Trading Systems Engineer; Junior Trading Systems Engineer | 8046163, 8210349; 8046074 | — | VERIFIED (titles) |
| Software Engineer - Distributed Compute / Distributed Systems / GPU reliability | 6703954, 7566004, 6703952, 7610947 | Experienced | VERIFIED (titles) |

**AI-in-interviews line**, present in **86 of 86** postings:
> "Use of AI tools by an applicant during interviews or assessments is strictly prohibited, unless otherwise instructed or agreed upon."
> "If we determine that AI assistance was used … we reserve the right to immediately end the interview or assessment, disqualify the applicant's candidacy and/or rescind any job offers extended."

Verdict: VERIFIED. The source is the posting boilerplate, not an interview page.

---

## D. Jump Trading

### D9. Official interview guidance

| Page | Result | Verdict |
|---|---|---|
| https://www.jumptrading.com/careers/ | Contact emails, talent community, scam note. No interview content | VERIFIED: none |
| https://www.jumptrading.com/hr/students-new-grads | "We're opening 2027 roles by region, starting with the US." Role list is client-rendered ("Loading Open Roles"). No process content | VERIFIED: none |
| https://www.jumptrading.com/hr/experienced-candidates | Client-rendered role list. No process content | VERIFIED: none |
| Site search for an interview page | Only Glassdoor results | No official guidance found |

### D10. Postings (Greenhouse `jumptrading`, 83 postings; hardware, FPGA and network roles skipped)

| Title | ID, updated | Experience / languages | Verdict |
|---|---|---|---|
| Campus C++ Software Engineer (Intern), Singapore; HK/Shanghai | 8027946 (2026-09-03); 8027860 (2026-10-06) | "Proficient in C++ with hands-on experience working with large-scale systems"; "Strong fundamentals in data structures, algorithms, system design, networking concepts and operating" systems; competitive programming and statistics are a bonus | VERIFIED |
| Campus Python Software Engineer (Intern), Singapore; HK/Shanghai | 8027955; 8027923 | "Python is our primary language"; Kafka, MySQL, ClickHouse; "We are actively migrating core components to Rust" | VERIFIED |
| Campus UI Software Engineer (Intern), Chicago | 8003019, 2026-08-14 | Python and TypeScript; "Strong understanding of data structures, algorithms, and threading models"; $250k base | VERIFIED |
| Campus Software Engineer (Full-Time), Chicago | (mirror, closed) | — | Not re-checked; not on the current board |
| C++ Software Engineer, Trading Team, London | 8242766, 2026-11-20 | "At least 5 years of experience in C++ development, with expertise in algorithmic trading systems" | VERIFIED |
| Software Engineer, Trading Team (Shanghai/HK/Singapore) | 7929540 | The same 5-year C++ line | VERIFIED |
| Senior Software Engineer, Core Development (APAC) | 7809758 | "At least 3 years of experience"; "C++ or Python on large distributed systems" | VERIFIED |
| Software Engineer, Market Data Systems, Chicago | 7847009 | "At least 5 years of professional experience"; "Strong experience with C++ and Rust in low-latency" systems | VERIFIED. It is on Greenhouse, not only on Dice |
| Quantitative Developer, Trading Team, HK | 6172858 | "At least 5 year track record of solving challenging problems through coding"; "Python and/or C++"; "Ability to reason through quantitative problems" | VERIFIED |
| Quantitative Developer, Trading Team, HK; Singapore or HK | 7822791; 8105914 | "Proficient in Python and C++"; 8105914: "At least 2 years of experience in a production engineering or trade support function" | VERIFIED |
| Python Engineer, Python Performance, London; Software Engineer GUI / UI Platform / Post Trade Analytics | 8129752; 7662486, 5500453, 7495806 | Experienced | VERIFIED (titles) |

**AI line:** campus SWE postings say "You use AI tools (Claude, ChatGPT, etc) to move faster — and you have the judgment to know when to trust the output". The UI intern posting lists "Claude code in a real work environment" as helpful. These are on-the-job expectations. **No posting has an interview AI policy** (VERIFIED: none of the 83 postings pairs AI with interviews).

---

## E. Optiver

### E11. "Optiver interview tips for Software Engineers"

URL: https://www.optiver.com/join-us/stories/optiver-interview-tips-for-software-engineers/ . Dated **March 21, 2025**. The existing note calls it "undated", which is wrong.

| Claim | Exact quote | Verdict |
|---|---|---|
| Not LeetCode puzzles | "Instead of relying on standard Leetcode puzzles or brainteasers, you'll have engaging technical discussions" | VERIFIED (new, useful) |
| Languages | "Confident knowledge of a major object-oriented language (C++, Java, or Python) is key to success in our interviews." | VERIFIED |
| Data structures and complexity | "You'll need a good understanding of standard data structures, including their space complexity and the time complexity of key operations." | VERIFIED |
| Memory layout | "You may also be asked about implementation details, such as how data is represented in memory" | VERIFIED |
| Fundamentals | "Brush up your understanding of computer architecture, networking, concurrency and memory management." | VERIFIED |
| Design trade-offs | "Interviewers will often ask questions such as, "Why did you make this design decision?"" | VERIFIED |
| Whiteboarding | "Whiteboarding or quick, well-labelled diagrams can be more effective than purely verbal explanations" | VERIFIED |
| Behavioral, STAR | "Use the STAR method (Situation, Task, Action, and Result)" | VERIFIED |
| Exhaustive preparation not advised | "While exhaustive preparation is not needed or advised" | VERIFIED |

### E12. Assessment re-attempt restriction

| Claim | Source | Exact quote | Verdict |
|---|---|---|---|
| One assessment attempt per 8 months | "Applying to Optiver Europe: Recruitment FAQ", https://www.optiver.com/join-us/stories/optiver-europe-recruitment-faq/ (June 11, 2026) | "assessments can only be completed once every 8 months" | VERIFIED |
| No retakes | same | "we're unable to offer assessment resets or retakes within 8 months once an attempt has been started. This policy applies to all applicants." | VERIFIED |
| 8-month reapplication wait, any office | same | "If you have applied for this role, or a similar role at any of our offices, in the last 8 months … you can reapply once your cooling period has concluded" | VERIFIED |
| Region | FAQ is titled Optiver **Europe**. The London intern posting (8713435002) adds: "Optiver has a global application re-apply policy for our intern and graduate roles" … "at any Optiver location in the past 8 months" | **PARTLY**: the assessment rule is stated in the Europe FAQ. The 8-month reapply rule is stated as **global** for intern and graduate roles in postings |
| Recruiter behavioral interview, then a final day | FAQ: "discussing them with your recruiter during your initial behavioural interview"; "completed a final-day interview" | PARTLY: implied by FAQ answers, not set out as a stage list |
| Authenticator login | "click on 'Setup Authenticator App'" | VERIFIED |
| AI policy | None on the tips or FAQ page | VERIFIED as absent |

### E13. Postings (Greenhouse `optiverus`, 146 postings, updated 2026-11-20)

| Title | ID | Level / key lines | Verdict |
|---|---|---|---|
| Software Engineer Internship (2027 Start), London; Amsterdam | 8713435002; 8713409002 | "Penultimate-year student"; "Proficient in industry-standard coding languages such as C++, Python, or Java"; "able to take the assessment within 7 days" | VERIFIED |
| Expressions of Interest - Graduate Software Developer 2027, Sydney | 8450243002 | "Final year university student or recent graduate"; "experience with C++, Java or Python is required for our technical assessment" | VERIFIED |
| 2027 Shanghai Software Developer Summer Internship | 8623927002 | Campus | VERIFIED (title) |
| Software Engineer - C++, NYC | 8521364002 | "2+ years preferred of C++ experience in low-latency systems" | VERIFIED |
| Software Engineer, Austin | 8925970002 | "C++ experience preferred, ideally in performance-critical systems" | VERIFIED |
| C++ Software Engineer, Singapore | 8546763002 | "At least 3 years' experience as a software engineer" | VERIFIED |
| Software Engineer (C++) - Derivatives, Sydney; Senior Software Engineer C++, Austin | 8907978002; 8521309002 | Experienced | VERIFIED (titles) |
| Quantitative Developer - Pricing Data, Amsterdam | 8632528002 | "Productive in either C++ or Python, comfortable working in the other"; online assessment after selection | VERIFIED: "Quantitative Developer" is a current Optiver title |
| Lead Quantitative Engineer, Mumbai | 8682192002 | Lead (out of scope) | VERIFIED (title) |
| Other SWE titles | 8565971002 (London), 8375042002 Automated Trading Systems, 8644425002 Real-Time Pricing, 8576683002 Trading Strategies, 8521354002 Equities/ETFs, 8937609002 Digital Assets | Experienced | VERIFIED (titles) |

No "C++ Developer" title exists; the C++ titles are "Software Engineer - C++", "C++ Software Engineer" and "Software Engineer (C++) - Derivatives".

---

## F. Problems (LeetCode GraphQL, 2026-11-27)

| Slug | # | Title | Difficulty | Paid-only |
|---|---|---|---|---|
| single-number | 136 | Single Number | Easy | No |
| number-of-1-bits | 191 | Number of 1 Bits | Easy | No |
| counting-bits | 338 | Counting Bits | Easy | No |
| reverse-bits | 190 | Reverse Bits | Easy | No |
| find-median-from-data-stream | 295 | Find Median from Data Stream | Hard | No |
| design-circular-queue | 622 | Design Circular Queue | Medium | No |
| number-of-orders-in-the-backlog | 1801 | Number of Orders in the Backlog | Medium | No |
| print-in-order | 1114 | Print in Order | Easy | No |
| print-foobar-alternately | 1115 | Print FooBar Alternately | Medium | No |
| building-h2o | 1117 | Building H2O | Medium | No |
| print-zero-even-odd | 1116 | Print Zero Even Odd | Medium | No |
| design-bounded-blocking-queue | 1188 | Design Bounded Blocking Queue | Medium | **Yes (Premium)** |
| lru-cache | 146 | LRU Cache | Medium | No |

**Videos (YouTube oEmbed):**
- find-median-from-data-stream: **`itmhHWaHupI`**, "Find Median from Data Stream - Heap & Priority Queue - Leetcode 295", author NeetCode. It is embedded on neetcode.io/solutions/find-median-from-data-stream. VERIFIED.
- number-of-orders-in-the-backlog: **no NeetCode or NeetCodeIO video found.** The NeetCode solution page has no embed, a YouTube search for "neetcode number of orders in the backlog" returned no matching NeetCode video, and an aggregator's claim of a NeetCode walkthrough could not be confirmed. Non-NeetCode videos with matching titles (oEmbed-verified, quality not reviewed): `g6xtqJwo43s` "Leetcode 1801. Number of Orders in the Backlog (2 heaps)" by LetsCode; `hVVkBM-p1vg` "1801. Number of Orders in the Backlog (Leetcode Medium)" by Programming Live with Larry. Leave the video field empty unless a person reviews one of these.

---

## G. Resources

| Resource | URL | Check | Verdict / access |
|---|---|---|---|
| Jane Street mock interview video | https://www.janestreet.com/mock-interview | Hosted on **Wistia** (media `rgxpr9btj5`), not YouTube. Wistia oEmbed title "JS-Software-Engineering-Mock-Interview-2023", duration 2244 s (about 37 min). Chapters run to 36:40 "Advice 3: Practice" | VERIFIED. Free, no login. There is no YouTube ID; link the page |
| HRT prep post | https://www.hudsonrivertrading.com/hrtbeat/interview-at-hrt/ | See C7 | VERIFIED. Free. Blocks curl (403) but works in a browser. Dated 2021 |
| LearnCpp ch. 22 (move semantics and smart pointers) | 22.1 …/introduction-to-smart-pointers-move-semantics/ · 22.2 …/rvalue-references/ · 22.3 …/move-constructors-and-move-assignment/ · 22.4 …/stdmove/ · 22.5 …/stdunique_ptr/ · 22.6 …/stdshared_ptr/ · 22.7 …/circular-dependency-issues-with-stdshared_ptr-and-stdweak_ptr/ (all under https://www.learncpp.com/cpp-tutorial/) | Page titles confirmed with these lesson numbers | VERIFIED. Free, no login |
| LearnCpp ch. 25 (virtual functions) | 25.1 …/pointers-and-references-to-the-base-class-of-derived-objects/ · 25.2 …/virtual-functions/ ("Virtual functions and polymorphism") · 25.3 …/the-override-and-final-specifiers-and-covariant-return-types/ · 25.4 …/virtual-destructors-virtual-assignment-and-overriding-virtualization/ · 25.5 …/early-binding-and-late-binding/ · 25.6 …/the-virtual-table/ · 25.7 …/pure-virtual-functions-abstract-base-classes-and-interface-classes/ | Titles confirmed | VERIFIED |
| cppreference | /w/cpp/language/raii ("RAII") · /w/cpp/language/ub ("Undefined behavior") · /w/cpp/atomic/atomic ("std::atomic") · /w/cpp/memory/unique_ptr ("std::unique_ptr") · also /language/rule_of_three, /atomic/memory_order, /thread/hardware_destructive_interference_size | All 200 with matching titles | VERIFIED. Free reference |
| C++ Core Guidelines | https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#s-resource ("R: Resource management"), #s-concurrency ("CP: Concurrency and parallelism"), #rr-raii (R.1), #rc-five (C.21), #rconc-races (CP.2 "Avoid data races"), #rconc-data (CP.3), #rconc-raii (CP.20 "Use RAII, never plain lock()/unlock()"), #rconc-lockfree (CP.100 "Don't use lock-free programming unless you absolutely have to") | Anchors confirmed in the HTML (`name=` attributes) | VERIFIED. Free |
| Carl Cook, CppCon 2017 | https://www.youtube.com/watch?v=NH1Tta7purM | oEmbed: "CppCon 2017: Carl Cook "When a Microsecond Is an Eternity: High Performance Trading Systems in C++"", channel CppCon | VERIFIED |
| David Gross, CppCon 2024 | https://www.youtube.com/watch?v=sX2nF1fW7kI | oEmbed: "When Nanoseconds Matter: Ultrafast Trading Systems in C++ - David Gross - CppCon 2024", CppCon | VERIFIED (the "Optiver engineer" affiliation was not re-checked) |
| Scott Meyers, CPU Caches | https://www.youtube.com/watch?v=WDIkqP4JbkE | oEmbed: "code::dive conference 2014 - Scott Meyers: Cpu Caches and Why You Care" | VERIFIED |
| Fedor Pikus, atomics | https://www.youtube.com/watch?v=ZQFzMfHIxng | oEmbed: "CppCon 2017: Fedor Pikus "C++ atomics, from basic to advanced. What do they really do?"" | VERIFIED |
| Algorithmica HPC | https://en.algorithmica.org/hpc/ · CPU cache chapter /hpc/cpu-cache/ ("RAM & CPU Caches") with subpages cache-lines, associativity, sharing ("Memory Sharing"), aos-soa, alignment, prefetching · SIMD chapter /hpc/simd/ ("SIMD Parallelism") with intrinsics and auto-vectorization · /hpc/pipelining/branching/ ("The Cost of Branching") | All 200 | VERIFIED. Free. The "Memory Sharing" page does not use the phrase "false sharing" in the extracted text, so do not cite it for false sharing |
| Drepper, What Every Programmer Should Know About Memory | https://akkadia.org/drepper/cpumemory.pdf | HEAD 200, application/pdf, 934 KB (not downloaded). HTML version on LWN: https://lwn.net/Articles/250967/ ("Part 1", Ulrich Drepper, September 21, 2007) | VERIFIED. Free; 2007; reference only |
| Mechanical Sympathy, False Sharing | https://mechanical-sympathy.blogspot.com/2011/07/false-sharing.html | Martin Thompson. "False sharing is a term which applies when threads unwittingly impact the performance of each other while modifying independent variables sharing the same cache line." | VERIFIED. Free. **Examples are in Java** (padding Java objects). Pair it with a C++ source |
| Beej's Guide to Network Programming | https://beej.us/guide/bgnet/html/split/ ; sections what-is-a-socket.html (§2 "What is a socket?") and §5 "System Calls or Bust" | Copyright October 15, 2026 (current) | VERIFIED. Free |
| OSTEP concurrency | https://pages.cs.wisc.edu/~remzi/OSTEP/ ; PDFs threads-intro.pdf, threads-api.pdf, threads-locks.pdf, threads-locks-usage.pdf, threads-cv.pdf, threads-sema.pdf, threads-bugs.pdf, threads-events.pdf | Index page 200; links present (PDFs not downloaded) | VERIFIED. Free |
| QuantGuide | https://www.quantguide.io/pricing | Basic free: "Non-premium questions," analytics, mental math simulator. Premium $20/mo billed annually or $35/mo: "Detailed solutions and hints to every question on the platform (1,000+)" and company search | VERIFIED (free account, partial). Quant-trader oriented; low relevance for SWE |
| QuantNet | https://quantnet.com/ | Live: 403 Cloudflare. The Wayback snapshot of 2026-10-04 is also a "Validating browser…" page | **UNVERIFIED.** Search results show a forum plus a **paid** C++ certificate course (with Baruch MFE). No free C++ interview resource found. Do not link |

### New candidates (false sharing, lock-free, C++ Q&A)

| Candidate | URL | Check | Verdict |
|---|---|---|---|
| Erik Rigtorp, "Optimizing a Ring Buffer for Throughput" (2021-12-13) | https://rigtorp.se/ringbuffer/ | An SPSC ring buffer in C++ with `std::atomic`, acquire/release ordering, and `alignas(64)` indices "to reduce cache coherency traffic", plus cached indices | **Recommend.** Free. Covers false sharing and a lock-free (wait-free) SPSC queue in C++ in one page. Directly relevant to "ring buffer" candidate reports |
| Jeff Preshing, "An Introduction to Lock-Free Programming" (Jun 12, 2012) | https://preshing.com/20120612/an-introduction-to-lock-free-programming/ | 200; well-known primer | Recommend as the conceptual primer on lock-free programming. Free |
| Herb Sutter, "Eliminate False Sharing" (Dr. Dobb's, May 14, 2009) | Live DDJ URL dead (no response). Wayback 2020-05-18: http://web.archive.org/web/20200518032452/https://www.drdobbs.com/parallel/eliminate-false-sharing/217500206 | Text readable in the snapshot. Sutter's blog post is only a pointer | Optional. C++-oriented but archive-only |
| cppreference `hardware_destructive_interference_size` | https://en.cppreference.com/w/cpp/thread/hardware_destructive_interference_size | 200 | Recommend as the C++17 reference for avoiding false sharing |
| 1024cores (Dmitry Vyukov) bounded MPMC queue | www.1024cores.net/… | **The live domain now serves a gambling site** ("Seru88 Resmi – Situs iGaming"). Wayback 2021-11-19 still has the original | **Reject the live link.** Use only the Wayback copy, if at all |
| C++ Super-FAQ (isocpp.org) | https://isocpp.org/wiki/faq/virtual-functions , /rvalue-references , /freestore-mgmt , /cpp11-library-concurrency | 200; the virtual-functions and concurrency pages have content | Recommend as the free Q&A-style reference (authoritative; not an interview list) |
| Stroustrup, C++ Style and Technique FAQ | https://www.stroustrup.com/bs_faq2.html | 200 | Optional reference |
| Devinterview-io/cpp-interview-questions | GitHub, 20 stars, pushed 2024-09 | The README holds only **15** of the "Top 100" answers and sends readers to devinterview.io for the rest | **Reject** (upsell, thin) |
| nomemory/cpp-interview-questions | GitHub, 9 stars, pushed 2024-04 | Mostly questions without answers. The answers given are terse ("Infinite Loop (overflow)") | **Reject** |
| Peoney-code/top250-cpp-interview-questions | GitHub | The API returned no repo (likely renamed or removed) | **Reject / unverifiable** |

Conclusion: no free GitHub C++ interview-question repo met the bar, which confirms the earlier finding. Use the isocpp Super-FAQ, LearnCpp and cppreference instead.

---

## Safe-to-publish statements (conservative)

**Jane Street** (official pages, checked 2026-11-27)
- Jane Street says software engineering interviews use a real programming language, not pseudocode, and candidates may choose any language. It recommends the one they know best.
- Jane Street says it does not ask software engineers mental-math, math-olympiad or logic-puzzle questions, and that it avoids "algorithm bingo" and "aha" puzzles in favour of open-ended problems.
- Jane Street says there are no bonus points for using OCaml, advises against trying OCaml for the first time in an interview, and does not require OCaml or functional programming experience.
- In a 2 Nov 2026 blog post, Jane Street said it is trialling new campus onsite rounds that involve less code-writing, more software design and code verification, and using LLMs to produce code. Most rounds remain traditional coding interviews without LLM assistance, not every onsite includes the new rounds, and candidates are told in advance.
- Jane Street has published a mock interview video that uses a retired question, and a 2017 blog post walking through a retired question ("Memo") that extends from memoization to a bounded FIFO cache and then LRU.

**Citadel Securities** (Wayback snapshot of 10 Jan 2026; page dated 9 Nov 2024)
- Citadel Securities' published engineering process, which is campus-oriented, describes four steps over about eight weeks: a 45-minute remote technical and behavioral round on CoderPad, a second round of usually three 45-minute interviews, team-specific leadership interviews, and a final review. Its core languages are Python and C++, but it welcomes any language.
- Its US university-graduate and intern software engineering postings list "familiarity with probability and statistics". This is a job requirement and does not show that probability is interviewed.
- "Quantitative Developer" titles exist at Citadel Securities (for example Crypto Quantitative Developer, and Quantitative Developer/Research Engineer). These are experienced roles.

**HRT**
- HRT's only official interview guide (2021, campus) describes a timed take-home on HackerRank or Codility, about two phone interviews, and a full onsite day that looks at code quality and fundamental systems knowledge (memory, I/O, process management). HRT says the recruiter is the primary source of truth.
- All current HRT postings state that AI tools are prohibited during interviews and assessments unless HRT instructs or agrees otherwise.

**Jump Trading**
- Jump Trading publishes no interview guidance. Its campus software engineering postings ask for C++ or Python, data structures and algorithms, operating systems and networking fundamentals, and Linux. Postings say engineers use AI tools on the job; they state no interview AI policy.

**Optiver**
- Optiver's software engineering interview tips (21 Mar 2025) say interviews are technical discussions rather than standard LeetCode puzzles. They name C++, Java or Python, data-structure complexity, how data is represented in memory, and design trade-offs, and they include a behavioral interview (STAR).
- Optiver Europe's recruitment FAQ says online assessments can be taken once every 8 months with no retakes. Optiver postings describe a global 8-month reapply rule for intern and graduate roles.

**Do not publish:** "OCaml required for (OCaml Experience) roles" (unverified; posting removed); "Jane Street uses CoderPad" as current (2020 only); the HRT "idiomatic, modern, resource-aware…" string as a quotation (paraphrase); "Optiver tips page undated" (it is dated 21 Mar 2025); live 1024cores links (hijacked domain); QuantNet as a resource.

---

## Problems: verified slugs, difficulty, free/paid, video ID

| Slug | Difficulty | Free/Paid | NeetCode video ID |
|---|---|---|---|
| single-number | Easy | Free | — (not requested) |
| number-of-1-bits | Easy | Free | — |
| counting-bits | Easy | Free | — |
| reverse-bits | Easy | Free | — |
| find-median-from-data-stream | Hard | Free | `itmhHWaHupI` (NeetCode, title matches) |
| design-circular-queue | Medium | Free | — |
| number-of-orders-in-the-backlog | Medium | Free | **None found** (leave empty) |
| print-in-order | Easy | Free | — |
| print-foobar-alternately | Medium | Free | — |
| building-h2o | Medium | Free | — |
| print-zero-even-odd | Medium | Free | — |
| design-bounded-blocking-queue | Medium | **Paid (Premium)** | — |
| lru-cache | Medium | Free | — |
