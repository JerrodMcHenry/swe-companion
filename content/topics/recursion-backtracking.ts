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
    "Know that CPython limits recursion depth (1,000 frames by default) and does not optimize tail calls; convert deep recursion to iteration.",
    "Implement the backtracking template: choose, recurse, undo.",
    "Generate subsets, combinations and permutations, and state their output sizes (2ⁿ, C(n, k), n!).",
    "Prune branches early using constraints (remaining sum, validity checks).",
    "Copy the current path when recording a result, and avoid shared-state bugs.",
    "Recognize when overlapping subproblems mean memoization (Dynamic Programming) is needed.",
    "Skip for now: tail-call elimination, trampolines, the master theorem and bitmask backtracking.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — Chapter 4: Recursion (4.2–4.6)",
      url: "https://runestone.academy/ns/books/published/pythonds3/Recursion/WhatIsRecursion.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Start here for recursion. Read 4.2–4.6: what recursion is, the three laws of recursion, and how stack frames implement recursion. Skip the turtle-graphics visualization sections. Free; reading needs no account.",
    },
    {
      title: "NeetCode — Subsets (LeetCode 78) video",
      url: "https://www.youtube.com/watch?v=REOH22Xwdkk",
      provider: "NeetCode (YouTube)",
      type: "Video",
      instructions:
        "Then, for backtracking: watch the whole video for the include/exclude decision tree and the choose–explore–undo code in Python. Watch it after attempting Subsets yourself. Free; no account.",
    },
    {
      title: "CS50x — Recursion (short)",
      url: "https://cs50.harvard.edu/x/shorts/recursion/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to the Runestone sections: base cases, recursive cases and the call stack. Examples are in C; the ideas transfer directly. Free; no account.",
    },
    {
      title: "VisuAlgo — Recursion Tree and DAG",
      url: "https://visualgo.net/en/recursion",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions:
        "Optional visualisation. Draw the recursion tree for Fibonacci to see the number of calls and repeated subproblems before studying dynamic programming. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Pow(x, n) (LeetCode)",
      url: "https://leetcode.com/problems/powx-n/",
      note: "Foundation, Medium. Write it once in O(n) and once in O(log n) by halving n, handle negative n, and state each version's time and stack depth. LeetCode needs a free account to submit.",
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
        "Three things: a base case that returns without recursing, each recursive call working on a strictly smaller problem so the base case is eventually reached, and a correct combination of the sub-results. Reason with the \"leap of faith\": assume the recursive call is correct for the smaller input and check that your combination step is right.",
      code: `def total(nums, i=0):
    if i == len(nums):          # base case
        return 0
    return nums[i] + total(nums, i + 1)   # smaller problem: the rest of the list

print(total([3, 1, 4]), total([]))   # -> 8 0`,
      followUps: ["Why does this version pass an index instead of slicing nums[1:]?"],
      source: { title: "Tech Interview Handbook — Recursion cheatsheet", url: "https://www.techinterviewhandbook.org/algorithms/recursion/" },
    },
    {
      question: "How do you analyze the time and space complexity of a recursive function?",
      answer:
        "Time: count the calls (draw the recursion tree) and multiply by the work per call. Space: the maximum call-stack depth times the space per frame, plus any data you build. One call on n - 1 is O(n) time and O(n) stack; two calls on n - 1 is O(2ⁿ) time but still O(n) depth; halving n gives O(log n) depth, as in fast exponentiation.",
      code: `def power(x, n):                 # O(log n) time and stack depth
    if n == 0:
        return 1
    half = power(x, n // 2)
    return half * half if n % 2 == 0 else half * half * x

print(power(2, 10), power(3, 0), power(5, 3))   # -> 1024 1 125`,
      followUps: ["What would the complexity be if power called itself twice instead of storing half?"],
      source: { title: "VisuAlgo — Recursion Tree and DAG", url: "https://visualgo.net/en/recursion" },
    },
    {
      question: "What happens when recursion goes too deep in Python, and what can you do?",
      answer:
        "Each call adds a frame to the call stack. CPython limits the depth (1,000 by default) and raises RecursionError beyond it, and it does not optimize tail calls. For inputs that can be deep — long linked lists, skewed trees, large n — convert to iteration with a loop or an explicit stack. sys.setrecursionlimit can raise the limit, but too high a value can crash the interpreter.",
      code: `import sys

def depth(n):
    return 0 if n == 0 else 1 + depth(n - 1)

print(sys.getrecursionlimit() >= 1000)   # -> True
try:
    depth(100_000)
except RecursionError:
    print("RecursionError")             # -> RecursionError`,
      followUps: ["How would you rewrite depth() iteratively?"],
      source: { title: "Python Docs — sys.setrecursionlimit", url: "https://docs.python.org/3/library/sys.html#sys.setrecursionlimit" },
    },
    {
      question: "Explain the backtracking template.",
      answer:
        "Backtracking builds a partial solution step by step. If the partial solution is complete, record a copy; otherwise, for each valid choice, make it (append to the path, mark as used), recurse, then undo it (pop, unmark) so the next choice starts from the same state. Pruning skips choices that cannot lead to a valid answer.",
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
# -> [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]`,
      followUps: ["What goes wrong if you append path instead of path[:]?"],
      source: { title: "NeetCode — Subsets (LeetCode 78) video", url: "https://www.youtube.com/watch?v=REOH22Xwdkk" },
    },
    {
      question: "How many subsets, combinations and permutations are there, and what does that mean for complexity?",
      answer:
        "A set of n items has 2ⁿ subsets, C(n, k) combinations of size k and n! permutations. Any algorithm that outputs all of them takes at least that many steps times the cost of copying each result: O(n × 2ⁿ) for subsets and O(n × n!) for permutations. That is only feasible for small n, so small input limits in a problem statement are a signal that exhaustive backtracking is expected. For permutations, track which elements are already used instead of searching the path.",
      followUps: ["How would you avoid duplicate permutations when the input contains duplicates?"],
      source: { title: "NeetCode — Permutations (LeetCode 46) video", url: "https://www.youtube.com/watch?v=s7AvT7cGdSo" },
    },
    {
      question: "What is pruning, and how does it help?",
      answer:
        "Pruning stops exploring a branch as soon as it cannot lead to a valid solution: the remaining target is negative, too many open brackets have been used, or a partial board is already invalid. It usually does not change the worst-case bound, but it can cut the explored tree dramatically in practice. Sorting candidates first often allows breaking out of the loop early (in Combination Sum, once a candidate exceeds the remaining target, every later one does too).",
      followUps: ["What changes in Combination Sum if each candidate may be used only once?"],
      source: { title: "NeetCode — Combination Sum (LeetCode 39) video", url: "https://www.youtube.com/watch?v=GBKI9VSKdGg" },
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
    "You solve an unseen backtracking problem such as Word Search or Generate Parentheses without hints (editorial benchmark).",
    "Skip this topic if you can already do all of the above.",
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
