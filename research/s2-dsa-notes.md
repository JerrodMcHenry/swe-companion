# S2 Data Structures, Algorithms & Complexity — research and verification notes

Recorded 2026-11-25. Focused verification for S2 only; no broad research. The app does not read this file.

## 1. Evidence base

| Source | Class | What it supports |
|---|---|---|
| R5 §5.3–5.4, §11.2; R6 Unit 2 | This curriculum's research synthesis | Pattern inventory; depth (Apply for Big Tech, Implement elsewhere); union-find and Dijkstra as Big Tech–only at Implement level; editorial readiness benchmarks |
| Google official: interview prep video chapters and mock interview (R1-S4, S5) | Employer-confirmed | Coding, testing, data structures, graphs, recursion, algorithms, memoization/DP, error checking; clarify, explain, brute force, then optimize |
| Amazon official software development topics page (R2-A1) | Employer-confirmed | Data structures, algorithms, syntactically correct and tested code, edge cases, practice outside an IDE |
| Meta Careers blog (R2-M2, updated 2022) | Employer-confirmed (older) | Lists, arrays, hash maps, stacks, queues, graphs, trees, heaps, sorting, searching, BFS/DFS, big-O; practise without a compiler |
| Candidate reports (R1-S15–S19, R2-AP5, R3-C1/C5/C8) | Candidate-reported | Medium-level problems, dry-running without a compiler, complexity questions; a reverse-linked-list question in one Apple new-grad report |
| Tech Interview Handbook algorithm pages and Grind 75 | Commonly recommended (one source) | Essential and recommended practice problems per topic; techniques and corner cases |
| NeetCode roadmap (NeetCode 150 categories) | Commonly recommended (independent second source) | Category structure: Arrays & Hashing, Two Pointers, Sliding Window, Stack, Binary Search, Linked List, Trees, Tries, Heap, Backtracking, Graphs, Advanced Graphs, 1-D DP, 2-D DP, Greedy, Intervals, Math & Geometry, Bit Manipulation |

**Independence note.** Tech Interview Handbook and Grind 75 have the same author, so they count as one source. NeetCode is independent. A problem or pattern is described as "commonly recommended" only when it appears in that combined source and is consistent with NeetCode's categories. No question frequencies or employer-specific questions are claimed.

**Question classification.** Conceptual questions such as "BFS vs DFS — when?", "the worst case of a hash map solution" and "how would you detect a cycle?" come from R5 §5.3–5.4 and match the topic pages of both preparation sources. They are labelled commonly recommended. Walk-through questions tied to specific problems (Two Sum, Product of Array Except Self, House Robber, Coin Change, and others) are representative editorial questions built on commonly recommended problems.

## 2. Inventory decisions

- **Topics:** all 14 planned Unit 2 topics are published. Union-Find and Shortest Paths is marked conditional in its title, overview, readiness criteria and the Unit 2 stopping point.
- **Renamed:** "Intervals and Sorting Patterns" became **Sorting Algorithms and Interval Patterns**, because the topic now carries merge sort, quicksort and counting sort.
- **Folded in rather than given their own pages:**
  - **Tries:** an optional problem in Trees.
  - **Greedy:** interval greedy in Sorting and Intervals; Best Time to Buy and Sell Stock in Arrays.
  - **Matrix and grid traversal:** in Graphs.
  - **Monotonic stack:** in Stacks and Queues.
  - **Prefix sums:** in Arrays, and in Hash Maps for subarray counting.
- **Deferred:** bit manipulation and math and geometry, which are low priority at entry level (Operators already defers bitwise operations).
- **Duplicate problem:** Top K Frequent Elements appears in both Hash Maps and Heaps, deliberately, with a note to solve it once and compare approaches. Problems reused from Programming Fluency are referenced, not re-listed.

## 3. Depth

| Depth | Topics | Why |
|---|---|---|
| Apply | Problem-solving, Complexity, Arrays and Strings, Hash Maps, Stacks and Queues, Binary Search, Recursion, Trees, Heaps, Graphs, Sorting and Intervals | Core coding-round patterns |
| Implement | Linked Lists | Rarely used in production Python; precise manipulation is enough |
| Implement | Dynamic Programming Basics | Only basic 1-D and 2-D problems at entry level |
| Implement | Union-Find and Shortest Paths | Conditional; R5 places these at Implement |

## 4. Code validation

- **Examples:** 173 code examples across all 27 topics were executed with Python 3.13.5, and their printed output was compared with the `# ->` comments. 171 match; 2 are deliberately not run (a static traceback and a breakpoint example from S1).
- **Randomized tests:** 400 rounds compared 27 S2 functions with brute-force reference implementations:

  | Group | Functions tested |
  |---|---|
  | Searching | binary search, lower bound, search range, rotated search |
  | Sorting | merge sort, quicksort, counting sort |
  | Arrays and hashing | subarray sum, longest unique substring, product except self, longest consecutive, pair with sum |
  | Intervals | merge intervals, minimum removals |
  | Dynamic programming | coin change, house robber, max subarray |
  | Heaps and stacks | kth largest, merge k sorted lists, daily temperatures |
  | Graphs | Dijkstra (against Bellman–Ford relaxation), course order validity |
  | Backtracking | subsets, permutations |

  All pass.
- **Bug found and fixed:** the minimum-removals example sorted only by end, which fails with zero-length intervals that share an end. LeetCode's constraints exclude that case, but the example now sorts by (end, start).
- **Expected outputs fixed:** while writing, the validator caught one wrong expected output (the two-pointer pair indexes); several other failures were only `# ->` comment formatting.
- **Complexity qualifications kept throughout:** hash operations are average-case with an O(n) worst case; list append and dictionary insertion are amortized; quicksort is average O(n log n) and worst O(n²); merge sort uses O(n) extra space; recursion stack space is stated; Python's slicing, `in`, sort and copy costs are called out. Python 3.14's max-heap functions are mentioned, while the examples use negation so they run on earlier versions.

## 5. Resource verification (2026-11-25)

- **Non-LeetCode resources:** 33 returned HTTP 200 to automated requests, with anchors confirmed where used. They are:
  - Tech Interview Handbook pages;
  - VisuAlgo modules (titles confirmed);
  - the MIT 6.006 Spring 2020 lecture-notes page (lecture titles confirmed);
  - the Python docs for heapq, bisect, deque, functools.cache and sys.setrecursionlimit, plus the time-complexity page;
  - the NeetCode roadmap;
  - Amazon's topics page;
  - Google's mock-interview video.
- **Runestone "Problem Solving with Algorithms and Data Structures using Python" (3rd edition):** the site returns 403 to automated requests. All 12 linked section pages were opened in a browser, with titles confirmed and no login wall; an account is optional. The binary-search page's note on slicing cost and the DP page's coin-change example were confirmed.
- **95 unique LeetCode problems:** title, difficulty and visible problem statement were confirmed in the product owner's browser session (which may be logged in). None is premium-only: Meeting Rooms, Graph Valid Tree and Number of Connected Components were deliberately avoided. Free access while logged out was not independently confirmed.
- **No `verifiedOn` dates** were set.

## 6. Editorial learner-effort estimate

These are editorial estimates, not measurements, for a learner who has passed Unit 1:

| Hours | Topics |
|---|---|
| 3–5 | Problem-solving process; Complexity |
| 4–6 | Linked Lists; Heaps |
| 5–8 each | Arrays and Strings; Hash Maps; Stacks and Queues; Binary Search |
| 8–12 | Recursion and Backtracking; Trees |
| 6–8 | Sorting and Intervals |
| 10–14 | Graphs |
| 8–12 | Dynamic Programming Basics |
| 6–10 (conditional) | Union-Find and Shortest Paths |

That totals roughly 80–120 hours for the core topics. Timed practice and mixed review continue alongside other units. The Big Tech path typically needs the upper end; startup, enterprise and backend paths may stop earlier, once the general benchmark is met.
