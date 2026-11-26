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
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Dynamic programming cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/dynamic-programming/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the introduction and techniques; use its essential questions as the core of your practice.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 4.12 Dynamic Programming",
      url: "https://runestone.academy/ns/books/published/pythonds3/Recursion/DynamicProgramming.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read the coin-change example, which moves from slow recursion to memoization to a table.",
    },
    {
      title: "MIT 6.006 (Spring 2020) — Lectures 15 and 16: Dynamic Programming",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/",
      provider: "MIT OpenCourseWare",
      type: "Course",
      instructions:
        "Optional university depth. Lecture 15 introduces a framework for defining subproblems; Lecture 16 covers longest common subsequence, longest increasing subsequence and coins. Lectures 17–18 can be deferred.",
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
      note: "Foundation, Easy. Write the plain recursion, add memoization, then a bottom-up loop with two variables.",
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
        "DP applies when a problem's answer can be built from answers to smaller subproblems (optimal substructure) and those subproblems repeat (overlapping subproblems), so caching them avoids exponential recomputation. Signals: counting the ways to do something, a minimum or maximum over sequences of choices, or a plain recursive solution whose recursion tree repeats the same calls. If subproblems do not overlap, plain recursion or divide and conquer is enough.",
      code: `calls = 0
def fib(n):
    global calls
    calls += 1
    return n if n < 2 else fib(n - 1) + fib(n - 2)

fib(20)
print(calls)   # repeated subproblems  # -> 21891`,
      followUps: ["How many distinct subproblems does fib(20) actually have?"],
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
    },
    {
      question: "Walk through how you would design a DP solution, using House Robber.",
      answer:
        "Define the state: best(i) is the most money from houses 0..i. Recurrence: at house i you either skip it (best(i - 1)) or rob it (nums[i] + best(i - 2)), so best(i) = max of the two. Base cases: best of no houses is 0, best of one house is that house. Compute left to right; only the previous two values are needed. O(n) time and O(1) space. Check the recurrence on a small example before coding.",
      code: `def rob(nums):
    prev2, prev1 = 0, 0               # best up to i-2 and i-1
    for x in nums:
        prev2, prev1 = prev1, max(prev1, prev2 + x)
    return prev1

print(rob([2, 7, 9, 3, 1]), rob([1, 2, 3, 1]), rob([]), rob([5]))   # -> 12 4 0 5`,
      followUps: ["How would you change the solution if the houses were arranged in a circle?"],
    },
    {
      question: "Why does a greedy approach fail for Coin Change, and what is the DP solution?",
      answer:
        "Always taking the largest coin works for some coin systems but not all: with coins [1, 3, 4] and amount 6, greedy picks 4 + 1 + 1 (three coins) but 3 + 3 uses two. DP computes the minimum coins for every amount from 0 up: dp[a] = 1 + min(dp[a - coin]) over coins that fit, with dp[0] = 0 and infinity meaning unreachable. O(amount × number of coins) time and O(amount) space.",
      code: `def coin_change(coins, amount):
    INF = float("inf")
    dp = [0] + [INF] * amount
    for a in range(1, amount + 1):
        for coin in coins:
            if coin <= a and dp[a - coin] + 1 < dp[a]:
                dp[a] = dp[a - coin] + 1
    return dp[amount] if dp[amount] != INF else -1

print(coin_change([1, 3, 4], 6), coin_change([2], 3), coin_change([1], 0))   # -> 2 -1 0`,
      followUps: ["How would you count the number of ways to make the amount instead?"],
    },
    {
      question: "How do you approach a two-dimensional DP problem such as Unique Paths?",
      answer:
        "Define dp[r][c] as the number of ways to reach cell (r, c). You can only arrive from above or from the left, so dp[r][c] = dp[r - 1][c] + dp[r][c - 1], with every cell in the first row and column equal to 1. Fill row by row: O(rows × cols) time. Because each row depends only on the previous one, one row of size cols is enough, giving O(cols) space.",
      code: `def unique_paths(rows, cols):
    row = [1] * cols
    for _ in range(1, rows):
        for c in range(1, cols):
            row[c] += row[c - 1]       # above (old row[c]) + left (new row[c-1])
    return row[-1]

print(unique_paths(3, 7), unique_paths(3, 2), unique_paths(1, 1))   # -> 28 3 1`,
      followUps: ["How would obstacles in the grid change the recurrence?"],
    },
    {
      question: "How do you find the maximum sum of a contiguous subarray in O(n)?",
      answer:
        "Track the best sum of a subarray ending at the current index: either extend the previous subarray or start fresh at the current element, whichever is larger. The answer is the best of these values over all indexes. This is a one-dimensional DP that needs only O(1) space, often called Kadane's algorithm. It works with negative numbers; clarify what to return for an empty array.",
      code: `def max_subarray(nums):
    best = current = nums[0]
    for x in nums[1:]:
        current = max(x, current + x)
        best = max(best, current)
    return best

print(max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), max_subarray([-3, -1, -2]), max_subarray([5]))
# -> 6 -1 5`,
      followUps: ["How would you also return the start and end indexes?"],
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
