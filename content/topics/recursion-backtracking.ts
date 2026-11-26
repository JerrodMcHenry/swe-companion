import type { Topic } from "../types";

const topic: Topic = {
  slug: "recursion-backtracking",
  title: "Recursion and Backtracking",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A recursive function solves a problem by calling itself on smaller instances until it reaches a base case. Backtracking is recursion that builds candidate solutions step by step — choose, explore, undo — to enumerate subsets, combinations, permutations or valid configurations, pruning branches that cannot succeed.",
  whyItMatters:
    "Recursion is the natural way to work with trees, graphs and divide-and-conquer algorithms, and it is the foundation of dynamic programming. Google's official preparation material names recursion explicitly, and \"generate all\" problems (subsets, permutations, word search) are common in preparation lists and candidate reports. Understanding the call stack also explains stack overflows and recursion limits in real code.",
  prerequisites: ["Functions and Arguments", "Mutability, References and Copying", "Complexity Analysis"],
  objectives: [
    "Write recursive functions with a correct base case and progress toward it.",
    "Trace the call stack for a small input and explain stack space usage.",
    "Analyze recursive time with a recursion tree (number of calls × work per call).",
    "Know Python's default recursion limit (about 1,000 frames) and when to prefer iteration.",
    "Implement the backtracking template: choose, recurse, undo.",
    "Generate subsets, combinations and permutations, and state their output sizes (2ⁿ, C(n, k), n!).",
    "Prune branches early using constraints (remaining sum, validity checks).",
    "Copy the current path when recording a result, and avoid shared-state bugs.",
    "Recognize when overlapping subproblems mean memoization (Dynamic Programming) is needed.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — Chapter 4: Recursion (4.2–4.6)",
      url: "https://runestone.academy/ns/books/published/pythonds3/Recursion/WhatIsRecursion.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read 4.2–4.6: what recursion is, the three laws, and stack frames. Skip the visualization (turtle) sections.",
    },
    {
      title: "Recursion cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/recursion/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the techniques on base cases, memoization and backtracking, and the corner cases.",
    },
    {
      title: "VisuAlgo — Recursion Tree and DAG",
      url: "https://visualgo.net/en/recursion",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Draw the recursion tree for Fibonacci to see repeated subproblems before studying dynamic programming.",
    },
    {
      title: "Python Standard Library — sys.setrecursionlimit",
      url: "https://docs.python.org/3/library/sys.html#sys.setrecursionlimit",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read the short warning about raising the limit; prefer an iterative solution for deep recursion.",
    },
  ],
  exercises: [
    {
      title: "Write recursive versions of sum of a list, reversing a string, and power(x, n), then state each one's time and stack space.",
      note: "Foundation. Write power(x, n) once in O(n) and once in O(log n) by halving n.",
    },
    {
      title: "Subsets (LeetCode)",
      url: "https://leetcode.com/problems/subsets/",
      note: "Foundation, Medium. Include/exclude or loop-from-index backtracking; 2ⁿ results.",
    },
    {
      title: "Permutations (LeetCode)",
      url: "https://leetcode.com/problems/permutations/",
      note: "Foundation, Medium. Track used elements; n! results.",
    },
    {
      title: "Letter Combinations of a Phone Number (LeetCode)",
      url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
      note: "Reinforcement, Medium. One choice per digit.",
    },
    {
      title: "Combination Sum (LeetCode)",
      url: "https://leetcode.com/problems/combination-sum/",
      note: "Reinforcement, Medium. Reuse allowed; prune when the remaining target is negative.",
    },
    {
      title: "Generate Parentheses (LeetCode)",
      url: "https://leetcode.com/problems/generate-parentheses/",
      note: "Reinforcement, Medium. Prune with open and close counts.",
    },
    {
      title: "Word Search (LeetCode)",
      url: "https://leetcode.com/problems/word-search/",
      note: "Transfer, Medium. Grid backtracking: mark, explore four directions, unmark.",
    },
    {
      title: "N-Queens (LeetCode)",
      url: "https://leetcode.com/problems/n-queens/",
      note: "Optional stretch, Hard. Constraint sets for columns and diagonals.",
    },
  ],
  interviewQuestions: [
    {
      question: "What makes a recursive function correct?",
      answer:
        "Three things: a base case that returns without recursing, each recursive call working on a strictly smaller problem so that the base case is eventually reached, and correct combination of the sub-results. A useful way to reason is to assume the recursive call works for the smaller input (the \"leap of faith\") and check that your combination step is right.",
      code: `def total(nums, i=0):
    if i == len(nums):          # base case
        return 0
    return nums[i] + total(nums, i + 1)   # smaller problem: the rest of the list

print(total([3, 1, 4]), total([]))   # -> 8 0`,
      followUps: ["Why does this version pass an index instead of slicing nums[1:]?"],
    },
    {
      question: "How do you analyze the time and space complexity of a recursive function?",
      answer:
        "Time: count the calls (draw the recursion tree) and multiply by the work done per call. Space: the maximum depth of the call stack times the space per frame, plus any data you build. A function that makes one call on n - 1 is O(n) time and O(n) stack; one that makes two calls on n - 1 is O(2ⁿ) time but still O(n) depth; halving n gives O(log n) depth.",
      code: `def power(x, n):                 # O(log n) time and stack depth
    if n == 0:
        return 1
    half = power(x, n // 2)
    return half * half if n % 2 == 0 else half * half * x

print(power(2, 10), power(3, 0), power(5, 3))   # -> 1024 1 125`,
      followUps: ["What would the complexity be if power called itself twice instead of storing half?"],
    },
    {
      question: "What happens when recursion goes too deep in Python, and what can you do?",
      answer:
        "Each call adds a frame to the call stack. CPython limits the depth (about 1,000 by default) and raises RecursionError beyond it. Python does not optimize tail calls. For inputs that can be deep — long linked lists, skewed trees, large n — convert to iteration with an explicit stack or loop. Raising the limit with sys.setrecursionlimit is possible but risks crashing the interpreter.",
      code: `import sys

def depth(n):
    return 0 if n == 0 else 1 + depth(n - 1)

print(sys.getrecursionlimit() >= 1000)   # -> True
try:
    depth(100_000)
except RecursionError:
    print("RecursionError")             # -> RecursionError`,
      followUps: ["How would you rewrite depth() iteratively?"],
    },
    {
      question: "Explain the backtracking template.",
      answer:
        "Backtracking builds a partial solution step by step. At each step: if the partial solution is complete, record a copy; otherwise, for each valid choice, make the choice (append to the path, mark as used), recurse, then undo the choice (pop, unmark) so the next choice starts from the same state. Pruning skips choices that cannot lead to a valid answer.",
      code: `def subsets(nums):
    result, path = [], []

    def backtrack(start):
        result.append(path[:])          # record a copy, not the shared list
        for i in range(start, len(nums)):
            path.append(nums[i])        # choose
            backtrack(i + 1)            # explore
            path.pop()                  # undo

    backtrack(0)
    return result

print(subsets([1, 2, 3]))
# -> [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
print(subsets([]))   # -> [[]]`,
      followUps: ["What goes wrong if you append path instead of path[:]?"],
    },
    {
      question: "How many subsets, combinations and permutations are there, and what does that mean for complexity?",
      answer:
        "A set of n items has 2ⁿ subsets, C(n, k) combinations of size k, and n! permutations. Any algorithm that outputs all of them takes at least that many steps times the cost of copying each result: O(n × 2ⁿ) for subsets and O(n × n!) for permutations. These are only feasible for small n (roughly n ≤ 20 for subsets and n ≤ 10 for permutations), which is a useful signal from constraints.",
      code: `from itertools import permutations
from math import comb, factorial

def perms(nums):
    result, path, used = [], [], [False] * len(nums)
    def backtrack():
        if len(path) == len(nums):
            result.append(path[:]); return
        for i, x in enumerate(nums):
            if not used[i]:
                used[i] = True; path.append(x)
                backtrack()
                path.pop(); used[i] = False
    backtrack()
    return result

print(len(perms([1, 2, 3, 4])), factorial(4), comb(5, 2), 2 ** 5)   # -> 24 24 10 32
print(perms([1, 2]) == [list(p) for p in permutations([1, 2])])   # -> True`,
      followUps: ["How would you avoid duplicate permutations when the input contains duplicates?"],
    },
    {
      question: "What is pruning, and how does it help?",
      answer:
        "Pruning stops exploring a branch as soon as it cannot lead to a valid solution: the remaining target is negative, too many open brackets have been used, or a partial board is already invalid. It does not usually change the worst-case bound, but it can cut the explored tree dramatically in practice. Sorting candidates first often enables earlier pruning.",
      code: `def combination_sum(candidates, target):
    candidates = sorted(candidates)
    result, path = [], []

    def backtrack(start, remaining):
        if remaining == 0:
            result.append(path[:]); return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining:     # sorted: every later candidate is too big
                break
            path.append(candidates[i])
            backtrack(i, remaining - candidates[i])   # i, not i + 1: reuse allowed
            path.pop()

    backtrack(0, target)
    return result

print(combination_sum([2, 3, 6, 7], 7), combination_sum([2], 1))   # -> [[2, 2, 3], [7]] []`,
      followUps: ["What changes if each candidate may be used only once?"],
    },
  ],
  mistakes: [
    "Missing or unreachable base case, causing infinite recursion.",
    "Recording the shared path list instead of a copy, so every result ends up identical.",
    "Forgetting to undo a choice (pop or unmark) before trying the next one.",
    "Slicing lists in each recursive call, adding hidden O(n) copies.",
    "Ignoring recursion depth in space complexity or for very deep inputs.",
    "Using plain recursion where subproblems repeat; that needs memoization.",
  ],
  mastery: [
    "You write recursive solutions with correct base cases and explain them with the leap-of-faith argument.",
    "You trace a small call stack and state time and stack space.",
    "You implement subsets, permutations and combination-sum style backtracking from the template without reference.",
    "You add pruning and explain what it saves, and you record copies of results.",
  ],
  deprioritize: [
    "Advanced backtracking with bitmask state compression, and Sudoku or N-Queens optimizations beyond the basic version.",
    "Tail-call elimination techniques and trampolines.",
    "The master theorem for divide-and-conquer recurrences beyond recognizing it.",
  ],
  keywords: [
    "recursion",
    "base case",
    "call stack",
    "recursion depth",
    "RecursionError",
    "backtracking",
    "subsets",
    "permutations",
    "combinations",
    "pruning",
    "divide and conquer",
  ],
};

export default topic;
