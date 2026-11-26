import type { Topic } from "../types";

const topic: Topic = {
  slug: "dynamic-programming-basics",
  title: "Dynamic Programming Basics",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "Dynamic programming (DP) solves problems whose answer can be built from answers to smaller, overlapping subproblems. You define a state (what a subproblem means), a recurrence (how a state is computed from smaller states) and base cases, then compute each state once — top-down with memoization or bottom-up with a table.",
  whyItMatters:
    "Basic DP problems such as climbing stairs, house robber, coin change and unique paths appear in preparation lists and candidate reports, and Google's official preparation material names memoization and dynamic programming. At entry level the goal is to recognize overlapping subproblems and implement one-dimensional and simple two-dimensional DP, not to master advanced categories. The same idea — caching results of repeated work — is common in real software.",
  prerequisites: ["Recursion and Backtracking", "Complexity Analysis", "Dictionaries"],
  objectives: [
    "Recognize DP signals: counting ways, minimum or maximum cost, \"can you reach\", choices at each step, and repeated subproblems in a recursion tree.",
    "Define the state in words before writing code (\"dp[i] is the best result using the first i items\").",
    "Write the recurrence and base cases, and check them on a small example.",
    "Implement top-down memoization with a dictionary or functools.cache.",
    "Implement bottom-up tabulation, and reduce space when only the last few states are needed.",
    "Solve one-dimensional problems (stairs, house robber, coin change, maximum subarray) and simple two-dimensional grid or two-string problems.",
    "State time as (number of states) × (work per state), and space for the table or recursion.",
    "Know when a greedy approach is enough and when it fails (coin change with arbitrary coins).",
    "Skip for now: bitmask, interval, tree and digit DP, knapsack variants beyond subset sum, and the O(n log n) longest increasing subsequence method.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 4.12 Dynamic Programming",
      url: "https://runestone.academy/ns/books/published/pythonds3/Recursion/DynamicProgramming.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Start here, in Python. Read the whole section: the coin-change example moves from slow recursion to memoization to a bottom-up table, which is the recipe this topic uses. Then apply it to the exercises below; the NeetCode videos (Python) linked in Interview Q&A walk through the same problems, so watch one only after a real attempt. Free; reading needs no account.",
    },
    {
      title: "Dynamic Programming — Learn to Solve Algorithmic Problems & Coding Challenges",
      url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
      provider: "freeCodeCamp.org (Alvin Zablan)",
      type: "Video",
      instructions:
        "Video alternative (JavaScript; the concepts transfer) if you want a slower, longer walk through both techniques. The full course is about 5 hours; you need only two parts. Watch 0:00:00–1:52:06 (fib and gridTraveler memoization, the memoization recipe, canSum and howSum) and 3:10:53–3:53:01 (fib and gridTraveler tabulation, the tabulation recipe, canSum tabulation). The remaining problems are optional repetition. Write the code in Python as you go. Free; no account.",
    },
    {
      title: "VisuAlgo — Recursion Tree and DAG",
      url: "https://visualgo.net/en/recursion",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions:
        "Optional visualisation. Compare the Fibonacci recursion tree with its DAG to see how memoization collapses repeated subproblems; try Coin Change and LCS the same way. Free; no account.",
    },
    {
      title: "Python Standard Library — functools.cache",
      url: "https://docs.python.org/3/library/functools.html#functools.cache",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for automatic memoization. Arguments must be hashable; deep recursion still hits the recursion limit.",
    },
  ],
  exercises: [
    {
      title: "Climbing Stairs (LeetCode)",
      url: "https://leetcode.com/problems/climbing-stairs/",
      note: "Foundation, Easy. Write the plain recursion, add memoization, then a bottom-up loop with two variables. LeetCode needs a free account to submit.",
    },
    {
      title: "Min Cost Climbing Stairs (LeetCode)",
      url: "https://leetcode.com/problems/min-cost-climbing-stairs/",
      note: "Foundation, Easy. Minimum instead of counting.",
    },
    {
      title: "House Robber (LeetCode)",
      url: "https://leetcode.com/problems/house-robber/",
      note: "Reinforcement, Medium. Take-or-skip recurrence.",
    },
    {
      title: "Maximum Subarray (LeetCode)",
      url: "https://leetcode.com/problems/maximum-subarray/",
      note: "Reinforcement, Medium. Best sum ending at each index (Kadane's algorithm). O(n), O(1).",
    },
    {
      title: "Coin Change (LeetCode)",
      url: "https://leetcode.com/problems/coin-change/",
      note: "Reinforcement, Medium. Minimum coins for each amount; explain why greedy fails.",
    },
    {
      title: "Unique Paths (LeetCode)",
      url: "https://leetcode.com/problems/unique-paths/",
      note: "Transfer, Medium. Two-dimensional grid DP; reduce to one row.",
    },
    {
      title: "Longest Common Subsequence (LeetCode)",
      url: "https://leetcode.com/problems/longest-common-subsequence/",
      note: "Transfer, Medium. Two-string table.",
    },
    {
      title: "Word Break (LeetCode)",
      url: "https://leetcode.com/problems/word-break/",
      note: "Optional stretch, Medium.",
    },
    {
      title: "Longest Increasing Subsequence (LeetCode)",
      url: "https://leetcode.com/problems/longest-increasing-subsequence/",
      note: "Optional stretch, Medium. O(n²) DP first; the O(n log n) method is optional.",
    },
    {
      title: "Partition Equal Subset Sum (LeetCode)",
      url: "https://leetcode.com/problems/partition-equal-subset-sum/",
      note: "Optional stretch, Medium. Subset-sum (0/1 knapsack style).",
    },
  ],
  interviewQuestions: [
    {
      question: "What is dynamic programming, and how do you recognize a DP problem?",
      answer:
        "DP applies when a problem's answer can be built from answers to smaller subproblems (optimal substructure) and those subproblems repeat (overlapping subproblems), so caching them avoids exponential recomputation. Signals: counting the ways to do something, a minimum or maximum over sequences of choices, or a plain recursive solution whose recursion tree repeats the same calls — naive fib(n) makes exponentially many calls but has only n + 1 distinct subproblems. If subproblems do not overlap, plain recursion or divide and conquer is enough.",
      followUps: ["How many distinct subproblems does fib(20) actually have?"],
      source: { title: "VisuAlgo — Recursion Tree and DAG: Fibonacci Numbers", url: "https://visualgo.net/en/recursion" },
    },
    {
      question: "What is the difference between memoization and tabulation?",
      answer:
        "Memoization is top-down: write the recursive solution and cache each result the first time it is computed, so later calls return immediately. Tabulation is bottom-up: fill a table from the base cases upward in an order where each state's dependencies are already computed. Both compute each state once. Memoization is often easier to derive and computes only the states it needs; tabulation avoids recursion depth limits and makes space optimization easier.",
      code: `from functools import cache

@cache
def climb_memo(n):
    if n <= 2:
        return n
    return climb_memo(n - 1) + climb_memo(n - 2)

def climb_table(n):
    if n <= 2:
        return n
    prev, curr = 1, 2               # ways to reach steps 1 and 2
    for _ in range(3, n + 1):
        prev, curr = curr, prev + curr
    return curr

print(climb_memo(10), climb_table(10), climb_table(1))   # -> 89 89 1`,
      followUps: ["Why does the table version need only two variables?"],
      source: { title: "NeetCode — Climbing Stairs (LeetCode 70) video", url: "https://www.youtube.com/watch?v=Y0lT9Fck7qI" },
    },
    {
      question: "Walk through how you would design a DP solution, using House Robber.",
      answer:
        "Define the state: best(i) is the most money from houses 0..i. Recurrence: at house i you either skip it (best(i - 1)) or rob it (nums[i] + best(i - 2)), so best(i) is the larger of the two. Base cases: no houses gives 0, one house gives that house. Compute left to right; only the previous two values are needed, so O(n) time and O(1) space. Check the recurrence on a small example such as [2, 7, 9, 3, 1] (answer 12) before coding.",
      followUps: ["How would you change the solution if the houses were arranged in a circle?"],
      source: { title: "NeetCode — House Robber (LeetCode 198) video", url: "https://www.youtube.com/watch?v=73r3KWiEvyk" },
    },
    {
      question: "Why does a greedy approach fail for Coin Change, and what is the DP solution?",
      answer:
        "Always taking the largest coin works for some coin systems but not all: with coins [1, 3, 4] and amount 6, greedy picks 4 + 1 + 1 (three coins) but 3 + 3 uses two. DP computes the minimum coins for every amount from 0 up: dp[a] = 1 + min(dp[a - coin]) over coins that fit, with dp[0] = 0 and infinity meaning unreachable (return -1). O(amount × number of coins) time and O(amount) space.",
      followUps: ["How would you count the number of ways to make the amount instead?"],
      source: { title: "NeetCode — Coin Change (LeetCode 322) video", url: "https://www.youtube.com/watch?v=H9bfqozjoqs" },
    },
    {
      question: "How do you approach a two-dimensional DP problem such as Unique Paths?",
      answer:
        "Define dp[r][c] as the number of ways to reach cell (r, c). You can only arrive from above or from the left, so dp[r][c] = dp[r - 1][c] + dp[r][c - 1], with every cell in the first row and column equal to 1. Fill row by row: O(rows × cols) time. Because each row depends only on the previous one, a single row of size cols is enough, giving O(cols) space.",
      followUps: ["How would obstacles in the grid change the recurrence?"],
      source: { title: "NeetCode — Unique Paths (LeetCode 62) video", url: "https://www.youtube.com/watch?v=IlEsdxuD4lY" },
    },
    {
      question: "How do you find the maximum sum of a contiguous subarray in O(n)?",
      answer:
        "Track the best sum of a subarray ending at the current index: either extend the previous subarray or start fresh at the current element, whichever is larger. The answer is the best of these values over all indexes. This one-dimensional DP needs only O(1) space and is usually called Kadane's algorithm. Initialise with the first element, not 0, so all-negative input works; clarify what to return for an empty array.",
      followUps: ["How would you also return the start and end indexes?"],
      source: { title: "NeetCode — Maximum Subarray (LeetCode 53) video", url: "https://www.youtube.com/watch?v=5WZl3MMT0Eg" },
    },
  ],
  mistakes: [
    "Writing code before defining in words what each state means.",
    "Missing or wrong base cases, especially for empty input or amount 0.",
    "Filling a table in an order where dependencies are not yet computed.",
    "Memoizing a function whose arguments are unhashable (lists) or include changing global state.",
    "Using greedy when the problem requires considering all choices.",
    "Forgetting that top-down recursion can still exceed Python's recursion limit for large n.",
  ],
  mastery: [
    "You recognize when a recursive solution has overlapping subproblems and should use DP.",
    "You define state, recurrence and base cases in words before coding.",
    "You implement both memoized and bottom-up versions of the Foundation and Reinforcement problems above.",
    "You state time and space as states × work and reduce space where only recent states are needed.",
    "Skip this topic if you can already solve House Robber and Coin Change without hints, both top-down and bottom-up.",
  ],
  deprioritize: [
    "Advanced DP: bitmask DP, interval DP, DP on trees, digit DP and optimization techniques.",
    "Knapsack variants beyond the basic subset-sum idea.",
    "The O(n log n) longest increasing subsequence method beyond recognizing that it exists.",
  ],
  keywords: [
    "dynamic programming",
    "DP",
    "memoization",
    "tabulation",
    "overlapping subproblems",
    "recurrence",
    "state",
    "climbing stairs",
    "house robber",
    "coin change",
    "Kadane",
    "maximum subarray",
    "longest common subsequence",
    "functools.cache",
  ],
};

export default topic;
