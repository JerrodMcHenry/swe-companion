# Phase E — Resource and coding-problem review

Reviewed 2026-11-27. Scope: every `resources` entry in `content/questions.ts`, `featuredResources` in `content/resources.ts`, every pattern resource, problem and explanation video in `content/problems.ts`. Method notes: pages were fetched with curl and the text read for the promised material; JavaScript-rendered pages (NeetCode, LeetCode study plans, Grind 75, GreatFrontEnd, Meta Careers) were read in a browser; GitHub READMEs were read raw; the OSTEP PDF was decompressed and its text searched. Verification levels: **Content** = the promised material was read on the page; **Partial** = the page loads and the main claim was confirmed, but not every detail; **Status** = only reachability.

## A. Resources

### Question-set resources (`content/questions.ts`)

| Set | Resource | Verdict | Reason | Access label | Verification |
|---|---|---|---|---|---|
| Python | DevInterview — Python | Keep | README has exactly 15 answered questions; site says "Explore all 100 answers"; site answers behind "Unlock" | Partly free (15 free) | Content |
| Python | Python Programming FAQ | Keep | Covers mutable default arguments, copying objects, scope | Free | Content |
| DSA | TIH — Coding interview techniques | Keep | Clarify / test / communicate guidance present | Free | Content |
| DSA | TIH — Algorithms study cheatsheets | Keep | Per-topic pages with techniques, corner cases, practice | Free | Content |
| DSA | NeetCode roadmap | Keep | NeetCode 150 grouped by 18 patterns; Pro upsell on page | Free (account optional; Pro paid) | Content (browser) |
| OOP | Refactoring.Guru — catalog | Keep | All classic patterns; book is paid | Free pages | Content |
| OOP | DevInterview — OOP | Keep | 15 answered in README of 52 | Partly free | Content |
| OOP | Awesome LLD — OOP and SOLID | **Relabel + specific link** | Linked repo root; now `#-oop-fundamentals`. Linked algomaster.io article text is free but each page shows premium audio/video upsell | Free text; premium audio/video | Content |
| LLD | Awesome LLD — problems | Keep | Anchor exists; easy/medium/hard problem lists with in-repo solutions | Free | Content |
| LLD | System Design Primer — OOD questions | Keep | Anchor exists; parking lot, call center, deck of cards notebooks | Free | Content |
| System Design | Hello Interview — SD in a Hurry | **Relabel** | Page itself states it is "augmented ... with premium content" (deep dives). Old note said simply free | Free core; some premium deep dives | Content |
| System Design | System Design Primer | Keep | Interview approach, load balancer, DB, cache sections present | Free | Content |
| AI Eng | Anthropic — Building effective agents | Keep | Workflows vs agents, prompt chaining, routing, orchestrator, when not to use agents | Free | Content |
| AI Eng | Chip Huyen — GenAI platform | Keep | Guardrails, routing, caching, observability | Free | Content |
| AI Eng | Hamel & Shreya — Evals FAQ | Keep | Error analysis, LLM judges, RAG evals; course mentioned | Free (authors sell course) | Content |
| AI Eng | AI Engineering Field Guide — questions | **Relink** | Linked repo root (job-market data, learning paths…); now `interview/02-questions.md`, the question index (theory, coding, AI system design). Questions cited, no answers | Free | Content |
| ML Fund | Google MLCC — Classification metrics | **Keep, narrowed** | One focused page on accuracy/precision/recall with a "choice of metric and tradeoffs" section; next page is ROC and AUC. Removed the line pointing users to further course modules; note now says read these pages only | Free | Content |
| ML Fund | AIMLInterviews — ML coding | Keep | Priority ML coding table (softmax, logistic regression, k-NN, k-means, attention, KV cache…) with Python solutions; README advertises coaching | Free | Content (raw GitHub; github.com returned 429) |
| ML Fund | Chip Huyen — ML Interviews Book questions | Keep | Question lists with [E]/[M]/[H] tags, no answers | Free | Content |
| ML Fund | scikit-learn — Common pitfalls | Keep | Data leakage, inconsistent preprocessing | Free | Content |
| ML SD | Hello Interview — ML SD in a Hurry | Keep | Page states some content has lock icons and free content aims to be sufficient | Mostly free; some premium | Content |
| ML SD | ByteByteGo — ML SD free chapters | Keep | Page data marks 4 of 11 chapters free (Visual Search, YouTube Video Search, Video Recommendation, Personalized News Feed); chapter text served without login | Free chapters; rest paid | Content |
| ML SD | Chip Huyen — Distribution shifts | Keep | Covariate, label, concept shift; monitoring | Free | Content |
| ML SD | Google — Rules of ML | Keep | Training–serving skew, start with heuristics | Free | Content |
| C++ | isocpp Super-FAQ — virtual functions | Keep | Virtual functions, vtable, destructors | Free | Content |
| C++ | LearnCpp — smart pointers & move semantics | **Keep, narrowed** | Lesson 22.1 is a single focused page; note no longer sends readers through chapters 22 and 25 (course-style) | Free | Content |
| C++ | C++ Core Guidelines — Resource management | Keep | RAII, ownership, R.1… rules | Free | Content |
| SQL | LeetCode — SQL 50 | Keep | 50 problems, ~32 Easy / 17 Medium / 1 Hard | Free account | Content (browser) |
| SQL | PostgreSQL Exercises | **Relabel** | Categories are Basic, Joins, Modifying, Aggregates, Date, String, Recursive; window functions sit inside Aggregates (not a separate section) | Free, no account | Content |
| SQL | DevInterview — SQL | Keep | 15 answered of 100 | Partly free | Content |
| SQL | Use The Index, Luke — Anatomy | Keep | B-tree, leaf nodes | Free | Content |
| Data Eng | Zach Wilson — DE SQL interview | Keep | Window-function patterns; no paywall seen | Free article (author sells courses) | Content |
| Data Eng | Start Data Engineering — DE system design | Keep | Requirements, data model, backfills, data quality | Free | Content |
| Data Eng | Kimball — Dimensional modeling techniques | Keep | Grain, facts, dimensions, SCD index | Free | Content |
| OS | DevInterview — Concurrency | Keep | 15 answered of 40 | Partly free | Content |
| OS | Carl Cook — CppCon 2017 | Keep | oEmbed title and CppCon channel confirmed; talk content not reviewed | Free video | Title only |
| OS | Algorithmica — CPU cache | Keep | Cache lines, bandwidth, locality | Free | Content |
| OS | Rigtorp — ring buffer | **Relabel** | Page never uses the term "false sharing"; it explains aligning indices to cache lines to reduce coherency traffic. Note reworded to match | Free | Content |
| Networking | What happens when… | Keep | DNS, TCP, TLS, HTTP | Free | Content |
| Networking | MDN — HTTP overview | Keep | | Free | Content |
| APIs | MDN — status codes | Keep | | Free | Content |
| APIs | OWASP API Top 10 2023 | Keep | API1:2023 BOLA present | Free | Content |
| Backend | OWASP Top 10 | Keep | Project page shows 2025 as current release | Free | Partial |
| Backend | Twelve-Factor App | Keep | | Free | Content |
| JS | sudheerj JavaScript questions | Keep | README (raw) has closures, event loop, coding exercises | Free | Content |
| JS | DevInterview — JavaScript | Keep | 15 of 100 | Partly free | Content |
| JS | javascript.info — Event loop | Keep | Macrotasks/microtasks with tasks | Free | Content |
| TS | DevInterview — TypeScript | Keep | 15 of 100 | Partly free | Content |
| TS | TS Handbook — Narrowing | Keep | | Free | Content |
| React | sudheerj React questions | Keep | Many class-component answers (note already warns) | Free | Content |
| React | React — You Might Not Need an Effect | Keep | | Free | Content |
| HTML/CSS | DevInterview — CSS | Keep | 15 of 100 | Partly free | Content |
| HTML/CSS | MDN — Accessibility | Keep | | Free | Content |
| FE SD | Front End Interview Handbook | Keep | Formats incl. system design, quiz, UI; promotes GreatFrontEnd | Free | Content |
| FE SD | GreatFrontEnd — FE SD Playbook | Keep | Browser: 6 guide articles readable without account (RADIO page full text, no lock); question list shows 2 free / 18 premium | Partly free | Content (browser) |
| FE SD | web.dev — Web Vitals | Keep | LCP 2.5 s, INP, CLS | Free | Content |
| FE SD | WAI-ARIA APG patterns | Keep | Combobox, tabs, dialog, menu | Free | Content |
| Testing | Practical Test Pyramid | Keep | | Free | Content |
| Testing | Google — Code review: what to look for | Keep | Design, functionality, complexity, tests | Free | Content |
| Git | DevInterview — Git | Keep | 15 of 100 | Partly free | Content |
| Git | Pro Git — Branching | Keep | Branching chapter; rebasing is a later section of the same chapter | Free | Partial |
| Behavioral | TIH behavioral guide | Keep | | Free | Content |
| Behavioral | TIH behavioral questions | Keep | | Free | Content |
| Behavioral | Google — interview tips | Keep | Raw HTML contains behavioral / STAR / hypothetical guidance (page renders client-side) | Free | Content |
| Projects | TIH — self introduction | Keep | | Free | Content |
| Customer | Pragmatic Engineer — FDEs | Keep | Full text served (≈6.7k words), no paywall marker; Palantir, OpenAI covered | Free | Content |
| Customer | AI Eng Field Guide — FDE role | Keep | Job-listing analysis (describes expectations, not interviews — note already says so) | Free | Content |
| Customer | AWS — presentation skills (2021) | Keep | Presentation advice for early-career SA candidates | Free | Content |

### Featured resources (`content/resources.ts`)

| Resource | Verdict | Reason | Access label | Verification |
|---|---|---|---|---|
| Tech Interview Handbook | Keep | Coding, behavioral, resume guides | Free | Content |
| NeetCode roadmap | Keep | See above | Free; Pro paid | Content (browser) |
| Grind 75 | Keep | Schedule builder (weeks, hours per week, difficulty, topics) | Free | Content (browser) |
| Hello Interview — Learn | Keep | DSA pattern pages free (only an "Unlock Premium" ad box); SD sections partly premium | Free sections | Content |
| System Design Primer | Keep | | Free | Content |
| Awesome Low-Level Design | Keep | | Free | Content |
| Refactoring.Guru | Keep | | Free pages | Content |
| DevInterview | Keep | 15 free answers per README confirmed for 8 repos; site answers locked | Partly free | Content |
| LeetCode | Keep | curl gets Cloudflare 403; known site, problems verified through GraphQL | Free account | Partial |

### Pattern resources (`content/problems.ts`)

| Pattern | Resource | Verdict | Reason | Access | Verification |
|---|---|---|---|---|---|
| Arrays & hashing | TIH hash table | **Relabel** | Page has techniques and practice lists but no corner-cases section; note corrected | Free | Content |
| Two pointers | HI two pointers overview | Keep | Free page (ad box only) | Free | Content |
| Sliding window | HI variable-length window | Keep | | Free | Content |
| Prefix sum | HI prefix sum overview | Keep | | Free | Content |
| Stack | HI stack overview | Keep | | Free | Content |
| Binary search | HI binary search overview | Keep | | Free | Content |
| Linked list | HI linked list overview | Keep | | Free | Content |
| Trees | TIH tree | Keep | Traversals, BST | Free | Content |
| Heap | TIH heap | **Relabel** | Top-k technique present; merge-k only appears as a practice problem | Free | Content |
| Graphs | TIH graph | Keep | BFS, DFS, topological sort | Free | Content |
| Backtracking | TIH recursion → **HI backtracking overview** | **Replace** | TIH recursion cheatsheet contains no backtracking material (0 mentions). HI backtracking overview explains solution-space search and links Subsets, Combination Sum, Word Search, Generate Parentheses walkthroughs; free page | Free | Content |
| Dynamic programming | TIH DP | Keep | | Free | Content |
| Intervals | TIH interval | Keep | | Free | Content |
| Sorting | TIH sorting & searching | Keep | | Free | Content |
| Math & bits | TIH binary | Keep | | Free | Content |
| Union-find & shortest paths | cp-algorithms DSU | Keep | Path compression, union by size/rank; competitive-programming site but the first sections are the clearest free explanation. No free HI union-find page exists (404) | Free | Content |
| Design problems | Awesome LLD problems | Keep | | Free | Content |
| Concurrency | OSTEP — Condition variables | **Keep, relabelled** | A single 19-page chapter (section 30.2 is the producer/consumer bounded-buffer problem) — a focused reference, not a course; note now states it is one chapter | Free PDF | Content |
| SQL | LeetCode SQL 50 | Keep | | Free account | Content (browser) |
| JavaScript | LeetCode 30 Days of JS | Keep | Closures, promises and time (Promise Time Limit, Debounce, Cache With Time Limit) | Free account | Content (browser) |

No resource was added. Considered and rejected: MOOC/course alternatives (DataTalksClub Zoomcamps, Made With ML, full MLCC) — none is linked and none was added.


## B. Explanation videos

76 problems link a video (63 NeetCode, 9 NeetCodeIO, 4 Frederik Müller). Every video's oEmbed title names the exact LeetCode problem (and number). Transcripts: the timedtext and `get_transcript` endpoints refuse direct requests (empty body / FAILED_PRECONDITION), so transcripts were taken in a browser by loading each video in the YouTube player, turning on captions and reading the player's own caption request (json3). Each transcript's opening was checked for the problem name (allowing auto-caption misspellings such as "threesome" for 3Sum, "coco" for Koko, "to bounce" for Debounce) and problem-specific terms were counted across the whole transcript; the SQL videos were additionally read mid-transcript (7-day moving average; approved vs total amounts; consecutive ids self-join; cumulative weight).

- Title-verified: 76/76. Content-verified (transcript): 75/76. Title + description only: 1 (Valid Parentheses, whose only caption track is a mis-detected Vietnamese auto-caption; chapters match a single-problem walkthrough).
- Removed: none. No video explains a different problem.

| Problem | Video (oEmbed title, channel) | Title-verified | Content-verified | Method |
|---|---|---|---|---|
| Product of Array Except Self (Core) | [Product of Array Except Self - Leetcode 238 - Python](https://www.youtube.com/watch?v=bNvIQI2wAjk) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Longest Consecutive Sequence (Core) | [Leetcode 128 - LONGEST CONSECUTIVE SEQUENCE](https://www.youtube.com/watch?v=P6RZZMu_maU) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Valid Sudoku | [Valid Sudoku - Amazon Interview Question - Leetcode 36 - Python](https://www.youtube.com/watch?v=TjFXEUCMqI8) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Majority Element (Core) | [Majority Element - Leetcode 169 - Python](https://www.youtube.com/watch?v=7pnhv842keE) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Two Sum (Core) | [Two Sum - Leetcode 1 - HashMap - Python](https://www.youtube.com/watch?v=KLlXCFG5TnA) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Valid Anagram (Core) | [Valid Anagram - Leetcode 242 - Python](https://www.youtube.com/watch?v=9UtInBqnCgA) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Group Anagrams (Core) | [Group Anagrams - Categorize Strings by Count - Leetcode 49](https://www.youtube.com/watch?v=vzdNOK2oB2E) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| 3Sum | [3Sum - Leetcode 15 - Python](https://www.youtube.com/watch?v=jzZsG8n2R9A) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Squares of a Sorted Array (Core) | [Squares of a Sorted Array - Leetcode 977 - Python](https://www.youtube.com/watch?v=FPCZsG_AkUg) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Container With Most Water | [Container with Most Water - Leetcode 11 - Python](https://www.youtube.com/watch?v=UuiTKBwPgAo) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Longest Substring Without Repeating Characters (Core) | [Longest Substring Without Repeating Characters - Leetcode 3 - Python](https://www.youtube.com/watch?v=wiGpQwVHdE0) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Find All Anagrams in a String | [Find All Anagrams in a String - Leetcode 438 - Python](https://www.youtube.com/watch?v=G8xtZy0fDKg) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Best Time to Buy and Sell Stock (Core) | [Sliding Window: Best Time to Buy and Sell Stock - Leetcode 121 - Python](https://www.youtube.com/watch?v=1pkOgXD63yU) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Subarray Sum Equals K (Core) | [Subarray Sum Equals K - Prefix Sums - Leetcode 560 - Python](https://www.youtube.com/watch?v=fFVZt-6sgyo) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Daily Temperatures | [Daily Temperatures - Monotonic Stack - Leetcode 739 - Python](https://www.youtube.com/watch?v=cTBiBSnjO3c) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Min Stack | [Design Min Stack - Amazon Interview Question - Leetcode 155 - Python](https://www.youtube.com/watch?v=qkLl7nAwDPo) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Valid Parentheses | [Valid Parentheses - Stack - Leetcode 20 - Python](https://www.youtube.com/watch?v=WTzjTskDFMg) — NeetCode | Yes | No | Only caption track is Vietnamese auto-ASR (mis-detected language), unreadable; description chapters (read problem / drawing / coding, 10:43) consistent |
| Evaluate Reverse Polish Notation | [Evaluate Reverse Polish Notation - Leetcode 150 - Python](https://www.youtube.com/watch?v=iu0082c4HDE) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Search in Rotated Sorted Array | [Search in rotated sorted array - Leetcode 33 - Python](https://www.youtube.com/watch?v=U8XENwh8Oy8) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Koko Eating Bananas | [Koko Eating Bananas - Binary Search - Leetcode 875 - Python](https://www.youtube.com/watch?v=U2SozAs9RzA) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Find First and Last Position of Element in Sorted Array | [First and Last Position of Element in Sorted Array - Binary Search - Leetcode 34](https://www.youtube.com/watch?v=4sQL7R5ySUU) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Find Minimum in Rotated Sorted Array | [Find Minimum in Rotated Sorted Array - Binary Search - Leetcode 153 - Python](https://www.youtube.com/watch?v=nIVW4P8b1VA) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Search Insert Position | [Search Insert Position - Binary Search - Leetcode 35 - Python](https://www.youtube.com/watch?v=K-RYzDZkzCI) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Binary Search | [Binary Search - Leetcode 704 - Python](https://www.youtube.com/watch?v=s4DPM8ct1pI) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Reverse Linked List | [Reverse Linked List - Iterative AND Recursive - Leetcode 206 - Python](https://www.youtube.com/watch?v=G0_I-ZF0S38) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Linked List Cycle | [Linked List Cycle - Floyd's Tortoise and Hare - Leetcode 141 - Python](https://www.youtube.com/watch?v=gBTe7lFR3vc) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| LRU Cache | [LRU Cache - Twitch Interview Question - Leetcode 146](https://www.youtube.com/watch?v=7ABFKPK2hD4) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Merge Two Sorted Lists | [Merge Two Sorted Lists - Leetcode 21 - Python](https://www.youtube.com/watch?v=XIdigk956u0) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Remove Nth Node From End of List | [Remove Nth Node from End of List - Oracle Interview Question - Leetcode 19](https://www.youtube.com/watch?v=XVuQxVej6y8) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Binary Tree Level Order Traversal (Core) | [Binary Tree Level Order Traversal - BFS - Leetcode 102](https://www.youtube.com/watch?v=6ZnyEApgFYg) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Validate Binary Search Tree (Core) | [Validate Binary Search Tree - Depth First Search - Leetcode 98](https://www.youtube.com/watch?v=s6ATEkipzow) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Diameter of Binary Tree (Core) | [Diameter of a Binary Tree - Leetcode 543 - Python](https://www.youtube.com/watch?v=bkxqA8Rfv04) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Binary Tree Right Side View | [Binary Tree Right Side View - Breadth First Search - Leetcode 199](https://www.youtube.com/watch?v=d4zLyf32e3I) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Lowest Common Ancestor of a Binary Search Tree | [Lowest Common Ancestor of a Binary Search Tree - Leetcode 235 - Python](https://www.youtube.com/watch?v=gs2LMfuOR9k) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Maximum Depth of Binary Tree | [Maximum Depth of Binary Tree - 3 Solutions - Leetcode 104 - Python](https://www.youtube.com/watch?v=hTM3phVI6YQ) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Kth Largest Element in an Array | [Kth Largest Element in an Array - Quick Select - Leetcode 215 - Python](https://www.youtube.com/watch?v=XEmy13g1Qxc) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Merge k Sorted Lists | [Merge K Sorted Lists - Leetcode 23 - Python](https://www.youtube.com/watch?v=q5a5OiGbT6Q) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Top K Frequent Elements (Core) | [Top K Frequent Elements - Bucket Sort - Leetcode 347 - Python](https://www.youtube.com/watch?v=YPTqKIgVk-k) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| K Closest Points to Origin | [K Closest Points to Origin - Heap / Priority Queue - Leetcode 973 - Python](https://www.youtube.com/watch?v=rI2EBUEMfTk) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Number of Islands (Core) | [NUMBER OF ISLANDS - Leetcode 200 - Python](https://www.youtube.com/watch?v=pV2kpPD66nE) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Rotting Oranges | [Rotting Oranges - Leetcode 994 - Python](https://www.youtube.com/watch?v=y704fEOx0s0) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Course Schedule (Core) | [Course Schedule - Graph Adjacency List - Leetcode 207](https://www.youtube.com/watch?v=EgI5nU9etnU) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Clone Graph | [Clone Graph - Depth First Search - Leetcode 133](https://www.youtube.com/watch?v=mQeF6bN8hMk) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Subsets (Core) | [Subsets - Backtracking - Leetcode 78](https://www.youtube.com/watch?v=REOH22Xwdkk) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Combination Sum | [Combination Sum - Backtracking - Leetcode 39 - Python](https://www.youtube.com/watch?v=GBKI9VSKdGg) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Word Search | [Word Search - Backtracking - Leetcode 79 - Python](https://www.youtube.com/watch?v=pfiQ_PS1g8E) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Permutations | [Backtracking: Permutations - Leetcode 46 - Python](https://www.youtube.com/watch?v=s7AvT7cGdSo) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Generate Parentheses | [Generate Parentheses - Stack - Leetcode 22](https://www.youtube.com/watch?v=s9fokUqJ76A) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| House Robber | [House Robber -  Leetcode 198 - Python Dynamic Programming](https://www.youtube.com/watch?v=73r3KWiEvyk) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Coin Change | [Coin Change - Dynamic Programming Bottom Up - Leetcode 322](https://www.youtube.com/watch?v=H9bfqozjoqs) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Climbing Stairs | [Climbing Stairs - Dynamic Programming - Leetcode 70 - Python](https://www.youtube.com/watch?v=Y0lT9Fck7qI) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Maximum Subarray | [Maximum Subarray - Amazon Coding Interview Question - Leetcode 53 - Python](https://www.youtube.com/watch?v=5WZl3MMT0Eg) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Insert Interval (Core) | [Insert Interval - Leetcode 57 - Python](https://www.youtube.com/watch?v=A8NUOmlwOlM) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Non-overlapping Intervals | [Non-Overlapping Intervals - Leetcode 435 - Python](https://www.youtube.com/watch?v=nONCGxWoUfM) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Sort an Array | [Sort an Array - Leetcode 912 - Python](https://www.youtube.com/watch?v=MsYZSinhuFo) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Missing Number | [Missing Number - Blind 75 - Leetcode 268 - Python](https://www.youtube.com/watch?v=WnPLSRLSANE) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Redundant Connection | [Redundant Connection - Union Find - Leetcode 684 - Python](https://www.youtube.com/watch?v=FXWRE67PLL0) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Network Delay Time | [Network Delay Time - Dijkstra's algorithm - Leetcode 743](https://www.youtube.com/watch?v=EaphyqKU4PQ) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Design Parking System | [Design Parking System - Leetcode 1603 - Python](https://www.youtube.com/watch?v=d5zCHesOrSk) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Design Underground System | [Design Underground System  - Leetcode 1396 - Python](https://www.youtube.com/watch?v=W5QOLqXskZM) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Single Number | [Single Number - Leetcode 136 - Python](https://www.youtube.com/watch?v=qMPX1AOa83k) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Number of 1 Bits | [Number of 1 Bits - Leetcode 191 - Python](https://www.youtube.com/watch?v=5Km3utixwZs) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Counting Bits | [Counting Bits - Dynamic Programming - Leetcode 338 - Python](https://www.youtube.com/watch?v=RyBM56RIWrM) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Reverse Bits | [Reverse Bits - Binary - Leetcode 190 - Python](https://www.youtube.com/watch?v=UcoN6UjAI64) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Find Median from Data Stream | [Find Median from Data Stream - Heap & Priority Queue - Leetcode 295](https://www.youtube.com/watch?v=itmhHWaHupI) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Design Circular Queue | [Design Circular Queue - Leetcode 622 - Python](https://www.youtube.com/watch?v=aBbsfn863oA) — NeetCode | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters |
| Restaurant Growth | [LeetCode 1321: Restaurant Growth [SQL]](https://www.youtube.com/watch?v=6p9lY_YftsE) — Frederik Müller | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Last Person to Fit in the Bus | [LeetCode 1204: Last Person to Fit in the Elevator/Bus [SQL]](https://www.youtube.com/watch?v=Td452uOq-80) — Frederik Müller | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Consecutive Numbers | [LeetCode 180: Consecutive Numbers [SQL]](https://www.youtube.com/watch?v=smd03AqX5LA) — Frederik Müller | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Monthly Transactions I | [LeetCode 1193: Monthly Transactions I](https://www.youtube.com/watch?v=awFtLa_iO0s) — Frederik Müller | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Counter | [Counter (Closure - Day2) - Leetcode 2620 - JavaScript 30-Day Challenge](https://www.youtube.com/watch?v=yEGQQAG5V68) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Memoize | [Memoize - Leetcode 2623 - JavaScript 30-Day Challenge](https://www.youtube.com/watch?v=oFXyzJt9VeU) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Debounce | [Debounce - Leetcode 2627 - JavaScript 30-Day Challenge](https://www.youtube.com/watch?v=1sxSpnxNx5w) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Promise Time Limit | [Promise Time Limit - Leetcode 2637 - JavaScript 30-Day Challenge](https://www.youtube.com/watch?v=hfH57rdZhOk) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Event Emitter | [Event Emitter - Leetcode 2694 - JavaScript 30-Day Challenge](https://www.youtube.com/watch?v=M69bjWFarU0) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |
| Cache With Time Limit | [Cache With Time Limit - Leetcode 2622 - JavaScript 30-Day Challenge](https://www.youtube.com/watch?v=w772gtNK0Gw) — NeetCodeIO | Yes | Yes | English auto-caption transcript fetched via player timedtext: opening names the problem and problem-specific terms recur; chapters; description links the problem |

## C. Problems

All 89 problems were checked with LeetCode GraphQL (`question(titleSlug){title isPaidOnly difficulty topicTags}`): titles and difficulties match exactly and none is premium.

### Corrections

| Problem | Field | Before | After | Reason |
|---|---|---|---|---|
| — | — | — | — | No corrections needed: titles, difficulties, free status, patterns, role tags and priorities are consistent. |

Notes on classification (no change): Best Time to Buy and Sell Stock is tagged Array/DP by LeetCode but is the standard sliding-window example (NeetCode places it there; the video is titled "Sliding Window"). Insert Interval is tagged only Array but is the canonical interval problem. Role tags (`backend-engineer` / `data-engineer` on SQL, `full-stack-engineer` / `frontend-engineer` on JavaScript) only hide the problem from the default list (`problem-table.tsx`); SQL and JavaScript practice links are shown for both roles of each pair (`content/companies.ts`), so the split has no user-visible effect and is sensible.

### Verification table

| # | Problem | LeetCode title | Difficulty | Free | Our pattern | LeetCode tags |
|---|---|---|---|---|---|---|
| 1 | Product of Array Except Self | Product of Array Except Self (match) | Medium (match) | Yes | Arrays & hashing | Array,Prefix Sum |
| 2 | Longest Consecutive Sequence | Longest Consecutive Sequence (match) | Medium (match) | Yes | Arrays & hashing | Array,Hash Table,Union-Find |
| 3 | Valid Sudoku | Valid Sudoku (match) | Medium (match) | Yes | Arrays & hashing | Array,Hash Table,Matrix |
| 4 | Majority Element | Majority Element (match) | Easy (match) | Yes | Arrays & hashing | Array,Hash Table,Divide and Conquer,Sorting,Counting,Boyer–Moore Majority Vote Algorithm |
| 5 | Longest Palindrome | Longest Palindrome (match) | Easy (match) | Yes | Arrays & hashing | Hash Table,String,Greedy |
| 6 | Two Sum | Two Sum (match) | Easy (match) | Yes | Arrays & hashing | Array,Hash Table |
| 7 | Valid Anagram | Valid Anagram (match) | Easy (match) | Yes | Arrays & hashing | Hash Table,String,Sorting |
| 8 | Group Anagrams | Group Anagrams (match) | Medium (match) | Yes | Arrays & hashing | Array,Hash Table,String,Sorting |
| 9 | 3Sum | 3Sum (match) | Medium (match) | Yes | Two pointers | Array,Two Pointers,Sorting |
| 10 | Squares of a Sorted Array | Squares of a Sorted Array (match) | Easy (match) | Yes | Two pointers | Array,Two Pointers,Sorting |
| 11 | Container With Most Water | Container With Most Water (match) | Medium (match) | Yes | Two pointers | Array,Two Pointers,Greedy |
| 12 | Longest Substring Without Repeating Characters | Longest Substring Without Repeating Characters (match) | Medium (match) | Yes | Sliding window | Hash Table,String,Sliding Window |
| 13 | Find All Anagrams in a String | Find All Anagrams in a String (match) | Medium (match) | Yes | Sliding window | Hash Table,String,Sliding Window |
| 14 | Best Time to Buy and Sell Stock | Best Time to Buy and Sell Stock (match) | Easy (match) | Yes | Sliding window | Array,Dynamic Programming |
| 15 | Subarray Sum Equals K | Subarray Sum Equals K (match) | Medium (match) | Yes | Prefix sum | Array,Hash Table,Prefix Sum |
| 16 | Daily Temperatures | Daily Temperatures (match) | Medium (match) | Yes | Stack | Array,Stack,Monotonic Stack |
| 17 | Min Stack | Min Stack (match) | Medium (match) | Yes | Stack | Stack,Design |
| 18 | Valid Parentheses | Valid Parentheses (match) | Easy (match) | Yes | Stack | String,Stack,Bracket Sequences |
| 19 | Evaluate Reverse Polish Notation | Evaluate Reverse Polish Notation (match) | Medium (match) | Yes | Stack | Array,Math,Stack |
| 20 | Search in Rotated Sorted Array | Search in Rotated Sorted Array (match) | Medium (match) | Yes | Binary search | Array,Binary Search |
| 21 | Koko Eating Bananas | Koko Eating Bananas (match) | Medium (match) | Yes | Binary search | Array,Binary Search |
| 22 | Find First and Last Position of Element in Sorted Array | Find First and Last Position of Element in Sorted Array (match) | Medium (match) | Yes | Binary search | Array,Binary Search |
| 23 | Find Minimum in Rotated Sorted Array | Find Minimum in Rotated Sorted Array (match) | Medium (match) | Yes | Binary search | Array,Binary Search |
| 24 | Search Insert Position | Search Insert Position (match) | Easy (match) | Yes | Binary search | Array,Binary Search |
| 25 | Binary Search | Binary Search (match) | Easy (match) | Yes | Binary search | Array,Binary Search |
| 26 | Reverse Linked List | Reverse Linked List (match) | Easy (match) | Yes | Linked list | Linked List,Recursion |
| 27 | Linked List Cycle | Linked List Cycle (match) | Easy (match) | Yes | Linked list | Hash Table,Linked List,Two Pointers,Floyd's Cycle Finding Algorithm |
| 28 | LRU Cache | LRU Cache (match) | Medium (match) | Yes | Linked list | Hash Table,Linked List,Design,Doubly-Linked List |
| 29 | Merge Two Sorted Lists | Merge Two Sorted Lists (match) | Easy (match) | Yes | Linked list | Linked List,Recursion |
| 30 | Remove Nth Node From End of List | Remove Nth Node From End of List (match) | Medium (match) | Yes | Linked list | Linked List,Two Pointers |
| 31 | Binary Tree Level Order Traversal | Binary Tree Level Order Traversal (match) | Medium (match) | Yes | Trees | Tree,Breadth-First Search,Binary Tree |
| 32 | Validate Binary Search Tree | Validate Binary Search Tree (match) | Medium (match) | Yes | Trees | Tree,Depth-First Search,Binary Search Tree,Binary Tree |
| 33 | Diameter of Binary Tree | Diameter of Binary Tree (match) | Easy (match) | Yes | Trees | Tree,Depth-First Search,Binary Tree,DP on Trees |
| 34 | Binary Tree Right Side View | Binary Tree Right Side View (match) | Medium (match) | Yes | Trees | Tree,Depth-First Search,Breadth-First Search,Binary Tree |
| 35 | Lowest Common Ancestor of a Binary Search Tree | Lowest Common Ancestor of a Binary Search Tree (match) | Medium (match) | Yes | Trees | Tree,Depth-First Search,Binary Search Tree,Binary Tree,Binary Lifting,Lowest Common Ancestor |
| 36 | Maximum Depth of Binary Tree | Maximum Depth of Binary Tree (match) | Easy (match) | Yes | Trees | Tree,Depth-First Search,Breadth-First Search,Binary Tree |
| 37 | Kth Largest Element in an Array | Kth Largest Element in an Array (match) | Medium (match) | Yes | Heap | Array,Divide and Conquer,Sorting,Heap (Priority Queue),Quickselect |
| 38 | Merge k Sorted Lists | Merge k Sorted Lists (match) | Hard (match) | Yes | Heap | Linked List,Divide and Conquer,Heap (Priority Queue),Merge Sort,Tournament Sort |
| 39 | Top K Frequent Elements | Top K Frequent Elements (match) | Medium (match) | Yes | Heap | Array,Hash Table,Divide and Conquer,Sorting,Heap (Priority Queue),Bucket Sort,Counting,Quickselect |
| 40 | K Closest Points to Origin | K Closest Points to Origin (match) | Medium (match) | Yes | Heap | Array,Math,Divide and Conquer,Geometry,Sorting,Heap (Priority Queue),Quickselect,K-D Tree |
| 41 | Number of Islands | Number of Islands (match) | Medium (match) | Yes | Graphs | Array,Depth-First Search,Breadth-First Search,Union-Find,Matrix |
| 42 | Rotting Oranges | Rotting Oranges (match) | Medium (match) | Yes | Graphs | Array,Breadth-First Search,Matrix |
| 43 | Course Schedule | Course Schedule (match) | Medium (match) | Yes | Graphs | Depth-First Search,Breadth-First Search,Graph Theory,Topological Sort,Directed Acyclic Graph |
| 44 | Clone Graph | Clone Graph (match) | Medium (match) | Yes | Graphs | Hash Table,Depth-First Search,Breadth-First Search,Graph Theory |
| 45 | Flood Fill | Flood Fill (match) | Easy (match) | Yes | Graphs | Array,Depth-First Search,Breadth-First Search,Matrix |
| 46 | Subsets | Subsets (match) | Medium (match) | Yes | Backtracking | Array,Backtracking,Bit Manipulation |
| 47 | Combination Sum | Combination Sum (match) | Medium (match) | Yes | Backtracking | Array,Backtracking |
| 48 | Word Search | Word Search (match) | Medium (match) | Yes | Backtracking | Array,String,Backtracking,Depth-First Search,Matrix |
| 49 | Permutations | Permutations (match) | Medium (match) | Yes | Backtracking | Array,Backtracking |
| 50 | Generate Parentheses | Generate Parentheses (match) | Medium (match) | Yes | Backtracking | String,Dynamic Programming,Backtracking,Bracket Sequences |
| 51 | House Robber | House Robber (match) | Medium (match) | Yes | Dynamic programming | Array,Dynamic Programming |
| 52 | Coin Change | Coin Change (match) | Medium (match) | Yes | Dynamic programming | Array,Dynamic Programming,Breadth-First Search,Knapsack Problem,Complete Knapsack |
| 53 | Climbing Stairs | Climbing Stairs (match) | Easy (match) | Yes | Dynamic programming | Math,Dynamic Programming,Memoization |
| 54 | Maximum Subarray | Maximum Subarray (match) | Medium (match) | Yes | Dynamic programming | Array,Divide and Conquer,Dynamic Programming |
| 55 | Insert Interval | Insert Interval (match) | Medium (match) | Yes | Intervals | Array |
| 56 | Non-overlapping Intervals | Non-overlapping Intervals (match) | Medium (match) | Yes | Intervals | Array,Dynamic Programming,Greedy,Sorting |
| 57 | Sort an Array | Sort an Array (match) | Medium (match) | Yes | Sorting | Array,Divide and Conquer,Sorting,Heap (Priority Queue),Merge Sort,Bucket Sort,Radix Sort,Counting Sort |
| 58 | Missing Number | Missing Number (match) | Easy (match) | Yes | Math & bits | Array,Hash Table,Math,Binary Search,Bit Manipulation,Sorting |
| 59 | Redundant Connection | Redundant Connection (match) | Medium (match) | Yes | Union-find & shortest paths | Depth-First Search,Breadth-First Search,Union-Find,Graph Theory |
| 60 | Network Delay Time | Network Delay Time (match) | Medium (match) | Yes | Union-find & shortest paths | Depth-First Search,Breadth-First Search,Graph Theory,Heap (Priority Queue),Shortest Path,Dijkstra's Algorithm |
| 61 | Design Parking System | Design Parking System (match) | Easy (match) | Yes | Design problems | Design,Simulation,Counting |
| 62 | Design Underground System | Design Underground System (match) | Medium (match) | Yes | Design problems | Hash Table,String,Design |
| 63 | Single Number | Single Number (match) | Easy (match) | Yes | Math & bits | Array,Bit Manipulation |
| 64 | Number of 1 Bits | Number of 1 Bits (match) | Easy (match) | Yes | Math & bits | Divide and Conquer,Bit Manipulation |
| 65 | Counting Bits | Counting Bits (match) | Easy (match) | Yes | Math & bits | Dynamic Programming,Bit Manipulation |
| 66 | Reverse Bits | Reverse Bits (match) | Easy (match) | Yes | Math & bits | Divide and Conquer,Bit Manipulation |
| 67 | Find Median from Data Stream | Find Median from Data Stream (match) | Hard (match) | Yes | Heap | Two Pointers,Design,Sorting,Heap (Priority Queue),Data Stream |
| 68 | Design Circular Queue | Design Circular Queue (match) | Medium (match) | Yes | Design problems | Array,Linked List,Design,Queue |
| 69 | Number of Orders in the Backlog | Number of Orders in the Backlog (match) | Medium (match) | Yes | Heap | Array,Heap (Priority Queue),Simulation |
| 70 | Print in Order | Print in Order (match) | Easy (match) | Yes | Concurrency | Concurrency |
| 71 | Print FooBar Alternately | Print FooBar Alternately (match) | Medium (match) | Yes | Concurrency | Concurrency |
| 72 | Building H2O | Building H2O (match) | Medium (match) | Yes | Concurrency | Concurrency |
| 73 | Combine Two Tables | Combine Two Tables (match) | Easy (match) | Yes | SQL | Database |
| 74 | Second Highest Salary | Second Highest Salary (match) | Medium (match) | Yes | SQL | Database |
| 75 | Managers with at Least 5 Direct Reports | Managers with at Least 5 Direct Reports (match) | Medium (match) | Yes | SQL | Database |
| 76 | Confirmation Rate | Confirmation Rate (match) | Medium (match) | Yes | SQL | Database |
| 77 | Game Play Analysis IV | Game Play Analysis IV (match) | Medium (match) | Yes | SQL | Database |
| 78 | Restaurant Growth | Restaurant Growth (match) | Medium (match) | Yes | SQL | Database |
| 79 | Last Person to Fit in the Bus | Last Person to Fit in the Bus (match) | Medium (match) | Yes | SQL | Database |
| 80 | Consecutive Numbers | Consecutive Numbers (match) | Medium (match) | Yes | SQL | Database |
| 81 | Monthly Transactions I | Monthly Transactions I (match) | Medium (match) | Yes | SQL | Database |
| 82 | Department Top Three Salaries | Department Top Three Salaries (match) | Hard (match) | Yes | SQL | Database |
| 83 | Counter | Counter (match) | Easy (match) | Yes | JavaScript |  |
| 84 | Memoize | Memoize (match) | Medium (match) | Yes | JavaScript |  |
| 85 | Debounce | Debounce (match) | Medium (match) | Yes | JavaScript |  |
| 86 | Execute Asynchronous Functions in Parallel | Execute Asynchronous Functions in Parallel (match) | Medium (match) | Yes | JavaScript |  |
| 87 | Promise Time Limit | Promise Time Limit (match) | Medium (match) | Yes | JavaScript |  |
| 88 | Event Emitter | Event Emitter (match) | Medium (match) | Yes | JavaScript |  |
| 89 | Cache With Time Limit | Cache With Time Limit (match) | Medium (match) | Yes | JavaScript |  |

## Practical preparation coverage by role (no problems added)

| Role | Existing practical material |
|---|---|
| Frontend | 4 JavaScript problems tagged frontend (+3 full-stack); FE system design set "Practical exercises": debounce/throttle, Promise.all, accessible autocomplete, infinite scroll; GreatFrontEnd free prompts |
| AI Engineer | AI Engineering "Practical exercises": minimal RAG pipeline, model-API integration, debugging a wrong-answer workflow; AIMLInterviews and the Field Guide coding page list ML/LLM implementation exercises |
| FDE / Solutions | No practical-exercise group; Customer & Solutions Scenarios covers discovery, demos/POCs, integration. Projects & Take-Homes covers take-homes. Gap noted, nothing recommended: no strong free exercise source was found |
| Quant Developer | 3 Concurrency problems, bit-manipulation, Design Circular Queue, Order Backlog; C++ "Practical exercises": thread-safe queue, circular buffer, limit order book, racing counter |
| Data Engineer | 4 SQL problems tagged data (+6 backend); Data Engineering "Practical exercises": flatten nested JSON, out-of-memory aggregation, dimensional model |
| ML Engineer | ML Fundamentals "Practical exercises": k-means from scratch, one-hour modelling task; AIMLInterviews ML coding table |

Recommendation (not implemented): if the owner wants one ML-coding practice link per pattern later, AIMLInterviews already covers it; no new database entries are justified.

## Broken source links in question files (for the question-file reviewers)

All 382 distinct URLs in `content/questions/*.ts` were requested. None is broken. False alarms: `metacareers.com` (curl 400, loads in a browser), `greatfrontend.com` (429 rate limit; framework page loads in a browser), LeetCode problem pages (Cloudflare 403; problems verified via GraphQL), `example.com`/`example.test`/`localhost` (illustrative URLs inside answers, not links).

## Limitations

- Carl Cook talk: title/channel only, content not reviewed.
- Valid Parentheses video: title and chapters only.
- Content verification of videos checks that the transcript is about the named problem, not the quality or correctness of each explanation.
- LeetCode SQL 50: premium status of each of the 50 study-plan problems was not individually checked.
- GreatFrontEnd: the claim that the two free questions are Autocomplete and News Feed was not re-confirmed (the list shows 2 free / 18 premium).
- OWASP Top 10, Pro Git: partial checks only.
- Free/premium labels reflect 2026-11-27 and can change.
