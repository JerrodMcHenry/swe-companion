import type { Link, Pattern, Problem } from "./types";

const lc = (slug: string) => `https://leetcode.com/problems/${slug}/`;
const nc = (id: string): Link => ({ title: "NeetCode video", url: `https://www.youtube.com/watch?v=${id}` });
const TIH = "https://www.techinterviewhandbook.org/algorithms";
const HI = "https://www.hellointerview.com/learn/code";

// The best explanation of each pattern, shown when a pattern is selected.
export const patterns: Pattern[] = [
  { name: "Arrays & hashing", resource: { title: "Hash table cheatsheet", url: `${TIH}/hash-table/`, note: "Tech Interview Handbook: techniques, corner cases and practice problems. Free." } },
  { name: "Two pointers", resource: { title: "Two pointers overview", url: `${HI}/two-pointers/overview`, note: "Hello Interview: when the technique works, with walkthroughs. Free page." } },
  { name: "Sliding window", resource: { title: "Variable-length sliding window", url: `${HI}/sliding-window/variable-length`, note: "Hello Interview: the template and how to recognize it. Free page." } },
  { name: "Prefix sum", resource: { title: "Prefix sum overview", url: `${HI}/prefix-sum/overview`, note: "Hello Interview. Free page." } },
  { name: "Stack", resource: { title: "Stack overview", url: `${HI}/stack/overview`, note: "Hello Interview. Free page." } },
  { name: "Binary search", resource: { title: "Binary search overview", url: `${HI}/binary-search/overview`, note: "Hello Interview: classic binary search; the next pages cover binary search on the answer. Free pages." } },
  { name: "Linked list", resource: { title: "Linked list overview", url: `${HI}/linked-list/overview`, note: "Hello Interview: dummy nodes, fast and slow pointers. Free page." } },
  { name: "Trees", resource: { title: "Tree cheatsheet", url: `${TIH}/tree/`, note: "Tech Interview Handbook: traversals, BST properties and practice problems. Free." } },
  { name: "Heap", resource: { title: "Heap cheatsheet", url: `${TIH}/heap/`, note: "Tech Interview Handbook: top-k and merge-k patterns. Free." } },
  { name: "Graphs", resource: { title: "Graph cheatsheet", url: `${TIH}/graph/`, note: "Tech Interview Handbook: BFS, DFS and topological sort. Free." } },
  { name: "Backtracking", resource: { title: "Recursion cheatsheet", url: `${TIH}/recursion/`, note: "Tech Interview Handbook: recursion and backtracking. Free." } },
  { name: "Dynamic programming", resource: { title: "Dynamic programming cheatsheet", url: `${TIH}/dynamic-programming/`, note: "Tech Interview Handbook. Free." } },
  { name: "Intervals", resource: { title: "Interval cheatsheet", url: `${TIH}/interval/`, note: "Tech Interview Handbook: sorting by start, merging and overlap checks. Free." } },
  { name: "Sorting", resource: { title: "Sorting and searching cheatsheet", url: `${TIH}/sorting-searching/`, note: "Tech Interview Handbook. Free." } },
  { name: "Math & bits", resource: { title: "Binary cheatsheet", url: `${TIH}/binary/`, note: "Tech Interview Handbook: bit manipulation tricks. Free." } },
  { name: "Union-find & shortest paths", resource: { title: "Disjoint Set Union", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html", note: "cp-algorithms: path compression and union by size. Read the first sections only." } },
  { name: "Object-oriented design", resource: { title: "Awesome Low-Level Design — problems", url: "https://github.com/ashishps1/awesome-low-level-design#-low-level-design-interview-problems", note: "Common design problems with solutions. Free." } },
  { name: "SQL", resource: { title: "LeetCode — SQL 50", url: "https://leetcode.com/studyplan/top-sql-50/", note: "SQL interview problems, mostly easy with some medium. Free; needs a LeetCode account." } },
  { name: "JavaScript", resource: { title: "LeetCode — 30 Days of JavaScript", url: "https://leetcode.com/studyplan/30-days-of-javascript/", note: "Closures, promises and timing problems such as debounce. Free; needs a LeetCode account." } },
];

// Representative practice problems, chosen for pattern coverage. None is a documented question from a specific
// company. `employers` holds each employer selection (and its priority) from the earlier employer research.
export const problems: Problem[] = [
  { name: "Product of Array Except Self", url: lc("product-of-array-except-self"), difficulty: "Medium", pattern: "Arrays & hashing", priority: "Core", explanation: nc("bNvIQI2wAjk"), employers: {google: "Core",amazon: "Core","ai-startups": "Core","growth-stage": "Core","established-tech": "Core"} },
  { name: "Longest Consecutive Sequence", url: lc("longest-consecutive-sequence"), difficulty: "Medium", pattern: "Arrays & hashing", priority: "Core", explanation: nc("P6RZZMu_maU"), employers: {google: "Core",microsoft: "Core","ai-startups": "Core","established-tech": "Core"} },
  { name: "Valid Sudoku", url: lc("valid-sudoku"), difficulty: "Medium", pattern: "Arrays & hashing", priority: "Important", explanation: nc("TjFXEUCMqI8"), employers: {meta: "Core"} },
  { name: "Majority Element", url: lc("majority-element"), difficulty: "Easy", pattern: "Arrays & hashing", priority: "Core", explanation: nc("7pnhv842keE"), employers: {"early-stage-startups": "Important","ai-startups": "Core","growth-stage": "Core","established-tech": "Core",enterprise: "Core",other: "Core"} },
  { name: "Longest Palindrome", url: lc("longest-palindrome"), difficulty: "Easy", pattern: "Arrays & hashing", priority: "Core", employers: {enterprise: "Core",other: "Core"} },
  { name: "Two Sum", url: lc("two-sum"), difficulty: "Easy", pattern: "Arrays & hashing", priority: "Core", explanation: nc("KLlXCFG5TnA") },
  { name: "Valid Anagram", url: lc("valid-anagram"), difficulty: "Easy", pattern: "Arrays & hashing", priority: "Core", explanation: nc("9UtInBqnCgA") },
  { name: "Group Anagrams", url: lc("group-anagrams"), difficulty: "Medium", pattern: "Arrays & hashing", priority: "Core", explanation: nc("vzdNOK2oB2E") },
  { name: "3Sum", url: lc("3sum"), difficulty: "Medium", pattern: "Two pointers", priority: "Important", explanation: nc("jzZsG8n2R9A"), employers: {google: "Core"} },
  { name: "Squares of a Sorted Array", url: lc("squares-of-a-sorted-array"), difficulty: "Easy", pattern: "Two pointers", priority: "Core", explanation: nc("FPCZsG_AkUg"), employers: {meta: "Core",enterprise: "Core",other: "Core"} },
  { name: "Container With Most Water", url: lc("container-with-most-water"), difficulty: "Medium", pattern: "Two pointers", priority: "Important", explanation: nc("UuiTKBwPgAo"), employers: {meta: "Core"} },
  { name: "Longest Substring Without Repeating Characters", url: lc("longest-substring-without-repeating-characters"), difficulty: "Medium", pattern: "Sliding window", priority: "Core", explanation: nc("wiGpQwVHdE0"), employers: {google: "Core",amazon: "Core",apple: "Important",microsoft: "Core","early-stage-startups": "Important","ai-startups": "Core","growth-stage": "Core","established-tech": "Core",other: "Core"} },
  { name: "Find All Anagrams in a String", url: lc("find-all-anagrams-in-a-string"), difficulty: "Medium", pattern: "Sliding window", priority: "Important", explanation: nc("G8xtZy0fDKg"), employers: {meta: "Core"} },
  { name: "Best Time to Buy and Sell Stock", url: lc("best-time-to-buy-and-sell-stock"), difficulty: "Easy", pattern: "Sliding window", priority: "Core", explanation: nc("1pkOgXD63yU"), employers: {apple: "Important",microsoft: "Core","early-stage-startups": "Important","established-tech": "Core",enterprise: "Core",other: "Core"} },
  { name: "Subarray Sum Equals K", url: lc("subarray-sum-equals-k"), difficulty: "Medium", pattern: "Prefix sum", priority: "Core", explanation: nc("fFVZt-6sgyo"), employers: {google: "Core",amazon: "Core",meta: "Core","growth-stage": "Core"} },
  { name: "Daily Temperatures", url: lc("daily-temperatures"), difficulty: "Medium", pattern: "Stack", priority: "Important", explanation: nc("cTBiBSnjO3c"), employers: {google: "Important","established-tech": "Important"} },
  { name: "Min Stack", url: lc("min-stack"), difficulty: "Medium", pattern: "Stack", priority: "Important", explanation: nc("qkLl7nAwDPo"), employers: {google: "Important",amazon: "Important"} },
  { name: "Valid Parentheses", url: lc("valid-parentheses"), difficulty: "Easy", pattern: "Stack", priority: "Important", explanation: nc("WTzjTskDFMg"), employers: {amazon: "Important",meta: "Important",apple: "Important",microsoft: "Important","growth-stage": "Important","established-tech": "Important",enterprise: "Important",other: "Important"} },
  { name: "Evaluate Reverse Polish Notation", url: lc("evaluate-reverse-polish-notation"), difficulty: "Medium", pattern: "Stack", priority: "Important", explanation: nc("iu0082c4HDE"), employers: {meta: "Important"} },
  { name: "Search in Rotated Sorted Array", url: lc("search-in-rotated-sorted-array"), difficulty: "Medium", pattern: "Binary search", priority: "Important", explanation: nc("U8XENwh8Oy8"), employers: {google: "Core",amazon: "Important",microsoft: "Important"} },
  { name: "Koko Eating Bananas", url: lc("koko-eating-bananas"), difficulty: "Medium", pattern: "Binary search", priority: "Important", explanation: nc("U2SozAs9RzA"), employers: {google: "Core"} },
  { name: "Find First and Last Position of Element in Sorted Array", url: lc("find-first-and-last-position-of-element-in-sorted-array"), difficulty: "Medium", pattern: "Binary search", priority: "Important", explanation: nc("4sQL7R5ySUU"), employers: {meta: "Important"} },
  { name: "Find Minimum in Rotated Sorted Array", url: lc("find-minimum-in-rotated-sorted-array"), difficulty: "Medium", pattern: "Binary search", priority: "Important", explanation: nc("nIVW4P8b1VA"), employers: {meta: "Important"} },
  { name: "Search Insert Position", url: lc("search-insert-position"), difficulty: "Easy", pattern: "Binary search", priority: "Important", explanation: nc("K-RYzDZkzCI"), employers: {microsoft: "Important",other: "Important"} },
  { name: "Binary Search", url: lc("binary-search"), difficulty: "Easy", pattern: "Binary search", priority: "Important", explanation: nc("s4DPM8ct1pI"), employers: {other: "Important"} },
  { name: "Reverse Linked List", url: lc("reverse-linked-list"), difficulty: "Easy", pattern: "Linked list", priority: "Important", explanation: nc("G0_I-ZF0S38"), employers: {google: "Important",amazon: "Important",apple: "Important",microsoft: "Important"} },
  { name: "Linked List Cycle", url: lc("linked-list-cycle"), difficulty: "Easy", pattern: "Linked list", priority: "Important", explanation: nc("gBTe7lFR3vc"), employers: {google: "Important"} },
  { name: "LRU Cache", url: lc("lru-cache"), difficulty: "Medium", pattern: "Linked list", priority: "Important", explanation: nc("7ABFKPK2hD4"), employers: {amazon: "Important",microsoft: "Important"} },
  { name: "Merge Two Sorted Lists", url: lc("merge-two-sorted-lists"), difficulty: "Easy", pattern: "Linked list", priority: "Important", explanation: nc("XIdigk956u0"), employers: {meta: "Important"} },
  { name: "Remove Nth Node From End of List", url: lc("remove-nth-node-from-end-of-list"), difficulty: "Medium", pattern: "Linked list", priority: "Important", explanation: nc("XVuQxVej6y8"), employers: {meta: "Important"} },
  { name: "Binary Tree Level Order Traversal", url: lc("binary-tree-level-order-traversal"), difficulty: "Medium", pattern: "Trees", priority: "Core", explanation: nc("6ZnyEApgFYg"), employers: {google: "Core",amazon: "Core",apple: "Important",microsoft: "Core","ai-startups": "Important",other: "Important"} },
  { name: "Validate Binary Search Tree", url: lc("validate-binary-search-tree"), difficulty: "Medium", pattern: "Trees", priority: "Core", explanation: nc("s6ATEkipzow"), employers: {google: "Core",amazon: "Core",microsoft: "Core","established-tech": "Important"} },
  { name: "Diameter of Binary Tree", url: lc("diameter-of-binary-tree"), difficulty: "Easy", pattern: "Trees", priority: "Core", explanation: nc("bkxqA8Rfv04"), employers: {google: "Core",meta: "Core"} },
  { name: "Binary Tree Right Side View", url: lc("binary-tree-right-side-view"), difficulty: "Medium", pattern: "Trees", priority: "Important", explanation: nc("d4zLyf32e3I"), employers: {meta: "Core"} },
  { name: "Lowest Common Ancestor of a Binary Search Tree", url: lc("lowest-common-ancestor-of-a-binary-search-tree"), difficulty: "Medium", pattern: "Trees", priority: "Important", explanation: nc("gs2LMfuOR9k"), employers: {meta: "Core"} },
  { name: "Maximum Depth of Binary Tree", url: lc("maximum-depth-of-binary-tree"), difficulty: "Easy", pattern: "Trees", priority: "Important", explanation: nc("hTM3phVI6YQ"), employers: {apple: "Important","early-stage-startups": "Optional","growth-stage": "Important","established-tech": "Important",enterprise: "Optional",other: "Important"} },
  { name: "Kth Largest Element in an Array", url: lc("kth-largest-element-in-an-array"), difficulty: "Medium", pattern: "Heap", priority: "Important", explanation: nc("XEmy13g1Qxc"), employers: {google: "Core",amazon: "Important",microsoft: "Optional"} },
  { name: "Merge k Sorted Lists", url: lc("merge-k-sorted-lists"), difficulty: "Hard", pattern: "Heap", priority: "Important", explanation: nc("q5a5OiGbT6Q"), employers: {google: "Core"} },
  { name: "Top K Frequent Elements", url: lc("top-k-frequent-elements"), difficulty: "Medium", pattern: "Heap", priority: "Core", explanation: nc("YPTqKIgVk-k"), employers: {amazon: "Core",apple: "Important","early-stage-startups": "Important","ai-startups": "Core","growth-stage": "Core","established-tech": "Core",enterprise: "Core",other: "Core"} },
  { name: "K Closest Points to Origin", url: lc("k-closest-points-to-origin"), difficulty: "Medium", pattern: "Heap", priority: "Important", explanation: nc("rI2EBUEMfTk"), employers: {amazon: "Important",meta: "Important"} },
  { name: "Number of Islands", url: lc("number-of-islands"), difficulty: "Medium", pattern: "Graphs", priority: "Core", explanation: nc("pV2kpPD66nE"), employers: {google: "Core",amazon: "Core",meta: "Core",apple: "Optional",microsoft: "Important","ai-startups": "Important","growth-stage": "Important","established-tech": "Important",other: "Important"} },
  { name: "Rotting Oranges", url: lc("rotting-oranges"), difficulty: "Medium", pattern: "Graphs", priority: "Important", explanation: nc("y704fEOx0s0"), employers: {google: "Core",microsoft: "Important"} },
  { name: "Course Schedule", url: lc("course-schedule"), difficulty: "Medium", pattern: "Graphs", priority: "Core", explanation: nc("EgI5nU9etnU"), employers: {google: "Core",amazon: "Core","ai-startups": "Important","established-tech": "Important"} },
  { name: "Clone Graph", url: lc("clone-graph"), difficulty: "Medium", pattern: "Graphs", priority: "Important", explanation: nc("mQeF6bN8hMk"), employers: {meta: "Core"} },
  { name: "Flood Fill", url: lc("flood-fill"), difficulty: "Easy", pattern: "Graphs", priority: "Important", employers: {other: "Important"} },
  { name: "Subsets", url: lc("subsets"), difficulty: "Medium", pattern: "Backtracking", priority: "Core", explanation: nc("REOH22Xwdkk"), employers: {google: "Core",amazon: "Important",meta: "Important",microsoft: "Core",other: "Important"} },
  { name: "Combination Sum", url: lc("combination-sum"), difficulty: "Medium", pattern: "Backtracking", priority: "Important", explanation: nc("GBKI9VSKdGg"), employers: {google: "Core",amazon: "Important"} },
  { name: "Word Search", url: lc("word-search"), difficulty: "Medium", pattern: "Backtracking", priority: "Important", explanation: nc("pfiQ_PS1g8E"), employers: {google: "Core"} },
  { name: "Permutations", url: lc("permutations"), difficulty: "Medium", pattern: "Backtracking", priority: "Important", explanation: nc("s7AvT7cGdSo"), employers: {meta: "Important"} },
  { name: "Generate Parentheses", url: lc("generate-parentheses"), difficulty: "Medium", pattern: "Backtracking", priority: "Important", explanation: nc("s9fokUqJ76A"), employers: {microsoft: "Core"} },
  { name: "House Robber", url: lc("house-robber"), difficulty: "Medium", pattern: "Dynamic programming", priority: "Important", explanation: nc("73r3KWiEvyk"), employers: {google: "Important",amazon: "Important"} },
  { name: "Coin Change", url: lc("coin-change"), difficulty: "Medium", pattern: "Dynamic programming", priority: "Important", explanation: nc("H9bfqozjoqs"), employers: {google: "Important",amazon: "Important",microsoft: "Optional"} },
  { name: "Climbing Stairs", url: lc("climbing-stairs"), difficulty: "Easy", pattern: "Dynamic programming", priority: "Optional", explanation: nc("Y0lT9Fck7qI"), employers: {meta: "Optional"} },
  { name: "Maximum Subarray", url: lc("maximum-subarray"), difficulty: "Medium", pattern: "Dynamic programming", priority: "Optional", explanation: nc("5WZl3MMT0Eg"), employers: {meta: "Optional"} },
  { name: "Insert Interval", url: lc("insert-interval"), difficulty: "Medium", pattern: "Intervals", priority: "Core", explanation: nc("A8NUOmlwOlM"), employers: {google: "Core",amazon: "Important",microsoft: "Core"} },
  { name: "Non-overlapping Intervals", url: lc("non-overlapping-intervals"), difficulty: "Medium", pattern: "Intervals", priority: "Important", explanation: nc("nONCGxWoUfM"), employers: {google: "Core",meta: "Important"} },
  { name: "Sort an Array", url: lc("sort-an-array"), difficulty: "Medium", pattern: "Sorting", priority: "Important", explanation: nc("MsYZSinhuFo"), employers: {microsoft: "Core"} },
  { name: "Missing Number", url: lc("missing-number"), difficulty: "Easy", pattern: "Math & bits", priority: "Important", explanation: nc("WnPLSRLSANE"), employers: {enterprise: "Core"} },
  { name: "Redundant Connection", url: lc("redundant-connection"), difficulty: "Medium", pattern: "Union-find & shortest paths", priority: "Optional", explanation: nc("FXWRE67PLL0"), employers: {google: "Optional"} },
  { name: "Network Delay Time", url: lc("network-delay-time"), difficulty: "Medium", pattern: "Union-find & shortest paths", priority: "Optional", explanation: nc("EaphyqKU4PQ"), employers: {google: "Optional"} },
  { name: "Design Parking System", url: lc("design-parking-system"), difficulty: "Easy", pattern: "Object-oriented design", priority: "Important", explanation: nc("d5zCHesOrSk") },
  { name: "Design Underground System", url: lc("design-underground-system"), difficulty: "Medium", pattern: "Object-oriented design", priority: "Important", explanation: nc("W5QOLqXskZM") },
  // Role practice: SQL for backend roles, JavaScript for full-stack roles.
  { name: "Combine Two Tables", url: lc("combine-two-tables"), difficulty: "Easy", pattern: "SQL", priority: "Important", role: "backend-engineer", employers: { enterprise: "Important" } },
  { name: "Second Highest Salary", url: lc("second-highest-salary"), difficulty: "Medium", pattern: "SQL", priority: "Important", role: "backend-engineer" },
  { name: "Managers with at Least 5 Direct Reports", url: lc("managers-with-at-least-5-direct-reports"), difficulty: "Medium", pattern: "SQL", priority: "Important", role: "backend-engineer" },
  { name: "Confirmation Rate", url: lc("confirmation-rate"), difficulty: "Medium", pattern: "SQL", priority: "Important", role: "backend-engineer" },
  { name: "Game Play Analysis IV", url: lc("game-play-analysis-iv"), difficulty: "Medium", pattern: "SQL", priority: "Optional", role: "backend-engineer" },
  { name: "Department Top Three Salaries", url: lc("department-top-three-salaries"), difficulty: "Hard", pattern: "SQL", priority: "Optional", role: "backend-engineer" },
  { name: "Counter", url: lc("counter"), difficulty: "Easy", pattern: "JavaScript", priority: "Important", role: "full-stack-engineer", explanation: nc("yEGQQAG5V68") },
  { name: "Memoize", url: lc("memoize"), difficulty: "Medium", pattern: "JavaScript", priority: "Important", role: "full-stack-engineer", explanation: nc("oFXyzJt9VeU") },
  { name: "Debounce", url: lc("debounce"), difficulty: "Medium", pattern: "JavaScript", priority: "Important", role: "full-stack-engineer", explanation: nc("1sxSpnxNx5w") },
];

export const getPattern = (name: string) => patterns.find((p) => p.name === name);

// Build-time checks.
const names = new Set<string>();
for (const p of problems) {
  if (names.has(p.name)) throw new Error(`Duplicate problem ${p.name}`);
  names.add(p.name);
  if (!getPattern(p.pattern)) throw new Error(`Unknown pattern ${p.pattern} for ${p.name}`);
}
for (const pattern of patterns) if (!problems.some((p) => p.pattern === pattern.name)) throw new Error(`Pattern without problems: ${pattern.name}`);
