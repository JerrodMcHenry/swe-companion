import type { Topic } from "../types";

const topic: Topic = {
  slug: "complexity-analysis",
  title: "Complexity Analysis",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "Complexity analysis describes how an algorithm's running time and extra memory grow as the input grows, usually in Big O notation. It lets you compare approaches before writing code and explain why one solution scales better than another.",
  whyItMatters:
    "Interviewers routinely ask for the time and space complexity of your solution and expect you to justify it, including the worst case and the cost of the built-in operations you used. At work, the same reasoning spots accidentally quadratic loops, unnecessary copies and slow database access patterns before they reach production.",
  prerequisites: ["Loops (counting iterations)", "Lists, Sets and Dictionaries (operation costs)"],
  objectives: [
    "Explain Big O as an upper bound on growth, ignoring constant factors and lower-order terms.",
    "Recognize common classes: O(1), O(log n), O(n), O(n log n), O(n²), O(2ⁿ) and O(n!).",
    "Analyze loops, nested loops, sequential steps and halving loops.",
    "Distinguish best, average and worst case, and amortized cost.",
    "Analyze auxiliary space, including new data structures, copies, slices and recursion depth.",
    "Include the cost of Python operations: slicing, `in` on a list, sorting, string concatenation and copying.",
    "Use multiple variables (such as n and m) when inputs have independent sizes.",
    "Use input constraints to estimate which complexities are feasible.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 2.3 Big O Notation and 2.5 Performance of Python Data Structures",
      url: "https://runestone.academy/ns/books/published/pythonds3/AlgorithmAnalysis/BigONotation.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Free interactive textbook in Python. Read 2.3, then 2.5–2.7 on the cost of list and dictionary operations. An account is optional.",
    },
    {
      title: "MIT 6.006 Introduction to Algorithms (Spring 2020) — Lecture 1: Introduction",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/",
      provider: "MIT OpenCourseWare",
      type: "Course",
      instructions:
        "Optional university depth. Read the Lecture 1 notes (PDF) on asymptotic notation and models of computation; skip the rest of the course for now.",
    },
    {
      title: "Time complexity of operations on built-in types",
      url: "https://docs.python.org/3/builtins/time-complexity.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for the CPython cost of list, dict, set and str operations, including which costs are amortized or average-case.",
    },
    {
      title: "Algorithms study cheatsheet",
      url: "https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Use its tables of common data structure operation costs as a revision sheet.",
    },
  ],
  exercises: [
    {
      title: "State the time and space complexity of every solution you wrote in Programming Fluency, then check two against the official Python complexity table.",
      note: "Foundation. Include the cost of each built-in you used.",
    },
    {
      title: "For ten short code snippets (loops, nested loops, halving loops, recursion, slicing inside loops), predict the complexity before reading any explanation.",
      note: "Reinforcement. Write the number of iterations as a formula first, then simplify.",
    },
    {
      title: "Take one O(n²) solution and improve it to O(n) or O(n log n), explaining what repeated work you removed and what extra memory you used.",
      note: "Transfer. Contains Duplicate and Two Sum from earlier topics are good starting points.",
    },
    {
      title: "Given constraints of n ≤ 20, n ≤ 1,000 and n ≤ 1,000,000, say which complexities are likely acceptable and why.",
      note: "Estimation practice. The usual heuristic is roughly 10^7–10^8 simple operations per second in compiled languages and fewer in Python; treat it as a rough guide, not a rule.",
    },
  ],
  interviewQuestions: [
    {
      question: "What does Big O notation mean?",
      answer:
        "Big O describes an upper bound on how a cost grows as the input size grows, ignoring constant factors and lower-order terms. 3n² + 5n + 2 is O(n²) because the n² term dominates for large n. In interviews, \"the complexity\" usually means a tight bound on the worst case unless stated otherwise. Big O says nothing about the actual speed for small inputs, where constants can matter.",
      code: `def count_ops(n):
    ops = 0
    for i in range(n):          # n iterations
        for j in range(n):      # n iterations each
            ops += 1
    for k in range(5 * n):      # 5n more
        ops += 1
    return ops

print(count_ops(10), count_ops(100))   # -> 150 10500`,
      followUps: ["What are Big Omega and Big Theta, informally?"],
    },
    {
      question: "How do you analyze code with loops?",
      answer:
        "Count how many times the innermost work runs. Sequential blocks add (O(n) + O(n) = O(n)); nested loops multiply when their bounds are independent; a loop that halves or doubles a value runs O(log n) times. Use separate variables for separate inputs: looping over a list of size n and, inside, a list of size m is O(n × m), not O(n²).",
      code: `def halvings(n):
    steps = 0
    while n > 1:
        n //= 2          # halves each time -> O(log n)
        steps += 1
    return steps

print(halvings(8), halvings(1024), halvings(1_000_000))   # -> 3 10 19`,
      followUps: ["What is the complexity of a loop from 1 to n where i doubles each iteration?"],
    },
    {
      question: "What is the difference between worst-case, average-case and amortized complexity?",
      answer:
        "Worst case is the most expensive input of size n; average case is the expected cost over a distribution of inputs; amortized cost is the average cost per operation over a sequence of operations. Dictionary lookup is O(1) on average but O(n) in the worst case when many keys collide. list.append is O(1) amortized: an occasional resize copies everything, but spread over many appends the cost per append is constant.",
      code: `import sys
items, sizes = [], set()
for i in range(100):
    items.append(i)
    sizes.add(sys.getsizeof(items))   # allocated size changes only occasionally
print(len(items), len(sizes) < 100)    # -> 100 True`,
      followUps: ["Why is quicksort's worst case O(n²) even though it is usually fast?"],
    },
    {
      question: "How do you analyze space complexity?",
      answer:
        "Count the extra memory the algorithm allocates beyond the input: new lists, sets, dictionaries, strings, slices and copies, plus the recursion stack, which uses memory proportional to the maximum recursion depth. Interviewers usually mean auxiliary space; say so explicitly. The output itself is often excluded, but state your assumption.",
      code: `def reverse_copy(nums):      # O(n) extra space: a new list
    return nums[::-1]

def reverse_in_place(nums):  # O(1) extra space: two indexes
    i, j = 0, len(nums) - 1
    while i < j:
        nums[i], nums[j] = nums[j], nums[i]
        i, j = i + 1, j - 1
    return nums

print(reverse_copy([1, 2, 3]), reverse_in_place([1, 2, 3]))   # -> [3, 2, 1] [3, 2, 1]`,
      followUps: ["What is the space complexity of a recursive function that recurses n levels deep?"],
    },
    {
      question: "Which Python operations hide extra cost inside a loop?",
      answer:
        "Slicing copies k elements (O(k)); `x in list` scans (O(n)); list.insert(0, x) and pop(0) shift every element (O(n)); sorted() is O(n log n); building a string with repeated + can be O(n²) overall; and copying a list or dict is O(n). Inside a loop of n iterations, any of these multiplies the total. Replacing them with indexes, sets, deques or a single join is a common optimization.",
      code: `def has_pair_with_sum_slow(nums, target):
    for i, x in enumerate(nums):
        if target - x in nums[i + 1:]:   # slice + scan: O(n) each -> O(n^2)
            return True
    return False

def has_pair_with_sum(nums, target):
    seen = set()
    for x in nums:                       # O(n) average overall
        if target - x in seen:
            return True
        seen.add(x)
    return False

print(has_pair_with_sum_slow([1, 4, 6], 10), has_pair_with_sum([1, 4, 6], 3))   # -> True False`,
      followUps: ["What is the complexity of sorting inside a loop?"],
    },
    {
      question: "What is the complexity of sorting, and of binary search?",
      answer:
        "Comparison-based sorting needs O(n log n) comparisons in the worst case; Python's sort achieves this and uses up to O(n) extra memory. Binary search on a sorted array is O(log n) because each step halves the remaining range. So sorting once and then performing k binary searches costs O(n log n + k log n), which beats k linear scans (O(k × n)) when k is large.",
      code: `import bisect
data = sorted([42, 7, 19, 3, 25])
print(data)                          # -> [3, 7, 19, 25, 42]
print(bisect.bisect_left(data, 19))  # -> 2`,
      followUps: ["Can any sorting algorithm beat O(n log n)? Under what conditions?"],
    },
    {
      question: "How can input constraints guide your choice of algorithm?",
      answer:
        "Constraints hint at the intended complexity. Very small n (around 20) allows exponential approaches such as trying all subsets; n in the low thousands usually allows O(n²); n around 10^5 or more usually needs O(n log n) or O(n). This is a rough heuristic, not a rule, and interviewers may not state constraints, so ask.",
      code: `import math
budget = 10 ** 8   # rough operations budget; a heuristic, not a rule
for n in (20, 1_000, 100_000):
    fits = [name for name, ops in [("2^n", 2 ** n), ("n^2", n * n), ("n log n", n * math.log2(n))]
            if ops <= budget]
    print(n, fits)
# -> 20 ['2^n', 'n^2', 'n log n']
# -> 1000 ['n^2', 'n log n']
# -> 100000 ['n log n']`,
      followUps: ["Why might an O(n²) solution still be acceptable in practice?"],
    },
  ],
  mistakes: [
    "Saying a hash map solution is O(1) without qualifying it as average case.",
    "Calling every nested loop O(n²), even when the loops are over different inputs or a fixed size.",
    "Forgetting the cost of slicing, copying, sorting or `in` on a list inside a loop.",
    "Ignoring recursion depth when stating space complexity.",
    "Mixing up n and the number of digits or bits, for example in loops that divide by 10.",
    "Stating complexity without explaining where it comes from.",
  ],
  mastery: [
    "You state and justify the time and auxiliary space complexity of every solution you write.",
    "You account for the cost of built-in operations and recursion depth.",
    "You distinguish worst-case, average-case and amortized costs where they differ.",
    "You can explain why one approach scales better than another and when the slower one is acceptable.",
  ],
  deprioritize: [
    "Formal proofs, the master theorem beyond recognizing its name, and amortized analysis methods (potential method).",
    "Complexity classes such as P and NP beyond a one-sentence awareness.",
  ],
  keywords: [
    "Big O",
    "time complexity",
    "space complexity",
    "complexity analysis",
    "asymptotic",
    "worst case",
    "average case",
    "amortized",
    "O(n log n)",
    "O(log n)",
    "logarithmic",
    "quadratic",
  ],
};

export default topic;
