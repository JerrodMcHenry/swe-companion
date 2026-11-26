import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-loops",
  title: "Loops",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Loops repeat work: a for loop iterates over the items of a sequence or other iterable, and a while loop repeats until a condition becomes false. Most algorithms are built from a few loop patterns: accumulating, counting, searching and comparing pairs.",
  whyItMatters:
    "Almost every coding interview solution contains a loop, and your first complexity analysis comes from counting how many times loops run. Interviewers expect you to trace a loop by hand, avoid off-by-one and infinite loops, and stop early when the answer is known. At work, loops process records, retry operations and transform data.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions", "Conditional Statements"],
  objectives: [
    "Choose between for and while, and write each without an infinite loop.",
    "Use range() with start, stop and step, and predict exactly which values it produces.",
    "Use enumerate() for index and value together, and zip() to walk sequences in parallel.",
    "Use break, continue and early return, and explain how break behaves in nested loops.",
    "Implement accumulators, counters, running maximums and linear search.",
    "Avoid modifying a list while iterating over it.",
    "Trace loop variables by hand on a small input.",
    "Count how many times loops run and express it as O(n), O(n × m) or O(n²), including best and worst cases.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Loops with conditions",
      url: "https://programming-26.mooc.fi/part-3/1-loops-with-conditions",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written, part 1: while loops — initialisation, condition and update.",
    },
    {
      title: "Python Programming MOOC — More loops",
      url: "https://programming-26.mooc.fi/part-3/3-more-loops",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written, part 2: break, continue and nested loops.",
    },
    {
      title: "Python Programming MOOC — Definite iteration",
      url: "https://programming-26.mooc.fi/part-4/4-definite-iteration",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Written, part 3: for loops and range(). Some examples iterate over lists, which are introduced in the preceding lesson; the basics are enough here.",
    },
    {
      title: "Think Python — Chapter 7: Iteration and Search",
      url: "https://allendowney.github.io/ThinkPython/chap07.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative to part 3, for for loops, counting and early-exit search. It does not cover while loops, range() or break.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 2: Loops",
      url: "https://cs50.harvard.edu/python/weeks/2/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative. Focus on while and for loops, range(), break and continue. Lists and dictionaries are covered in later topics.",
    },
    {
      title: "The Python Tutorial — for Statements and Looping Techniques",
      url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Read for statements, the range() function, and break and continue. For enumerate() and zip(), see the Looping Techniques section of the Data Structures page.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Loops with conditions: Fix the code: Countdown; Powers of two; The sum of consecutive numbers, version 1",
      url: "https://programming-26.mooc.fi/part-3/1-loops-with-conditions",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "University of Helsinki, More loops: Factorial",
      url: "https://programming-26.mooc.fi/part-3/3-more-loops",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "Find the maximum value without using max().",
      note: "Decide what an empty input should do before you start, and test negative numbers.",
    },
    { title: "Search for a target and stop as soon as it is found; state the best and worst cases." },
    { title: "Determine whether a positive integer is prime, and explain why checking up to the square root is enough." },
    { title: "Generate every unique pair from a sequence using nested loops, then count the pairs for n items." },
    {
      title: "Trace a nested loop by hand in a table of variable values, then calculate how many times the inner body runs.",
      note: "Code reading. Use an inner loop that starts at i + 1.",
    },
    {
      title: "Running Sum of 1d Array (LeetCode)",
      url: "https://leetcode.com/problems/running-sum-of-1d-array/",
      note: "Easy. Accumulator pattern.",
    },
    {
      title: "Find the Highest Altitude (LeetCode)",
      url: "https://leetcode.com/problems/find-the-highest-altitude/",
      note: "Easy. A running total plus a running maximum.",
    },
    {
      title: "Number of Good Pairs (LeetCode)",
      url: "https://leetcode.com/problems/number-of-good-pairs/",
      note: "Easy. Solve it with nested loops first and state the complexity; you will revisit it with a dictionary.",
    },
  ],
  interviewQuestions: [
    {
      question: "When should you use a for loop and when a while loop?",
      answer:
        "Use for when you are iterating over a known collection or a fixed number of steps: it handles the counter for you and cannot run forever on a finite sequence. Use while when the number of iterations depends on a condition that changes inside the loop, such as moving two pointers toward each other or repeating until input is valid. A while loop needs an update that eventually makes the condition false.",
      code: `n = 37
digits = 0
while n > 0:       # unknown number of steps
    n //= 10
    digits += 1
print(digits)      # -> 2`,
      followUps: ["What usually causes an infinite while loop?"],
    },
    {
      question: "How do range() boundaries work?",
      answer:
        "range(stop) produces 0 up to stop - 1. range(start, stop, step) starts at start and stops before reaching stop; a negative step counts down. len(range(a, b)) is b - a when a <= b. A range does not build a list: it computes values on demand, using constant memory.",
      code: `print(list(range(5)))           # -> [0, 1, 2, 3, 4]
print(list(range(2, 8, 2)))     # -> [2, 4, 6]
print(list(range(5, 0, -1)))    # -> [5, 4, 3, 2, 1]
print(len(range(3, 10)))        # -> 7`,
      followUps: ["How would you loop over a list's indexes in reverse?"],
    },
    {
      question: "What do enumerate() and zip() provide?",
      answer:
        "enumerate(items) yields (index, item) pairs, which is clearer and less error-prone than range(len(items)); it takes an optional start value. zip(a, b) yields pairs of corresponding items and stops at the shortest input. In Python 3.10 and later, zip(a, b, strict=True) raises an error if the lengths differ.",
      code: `names = ["ana", "ben"]
scores = [91, 78, 65]
for i, name in enumerate(names, start=1):
    print(i, name)
# -> 1 ana
# -> 2 ben
print(list(zip(names, scores)))   # -> [('ana', 91), ('ben', 78)]`,
      followUps: ["Why is silently stopping at the shortest input sometimes a bug?"],
    },
    {
      question: "What is the difference between break and continue, and how do you exit nested loops?",
      answer:
        "break exits the innermost loop immediately; continue skips the rest of the current iteration and moves to the next one. break only leaves one level, so to stop nested loops, put them in a function and return, or use a flag checked by the outer loop.",
      code: `def find_pair(grid, target):
    for r, row in enumerate(grid):
        for c, value in enumerate(row):
            if value == target:
                return r, c      # leaves both loops
    return None

print(find_pair([[1, 2], [3, 4]], 3))   # -> (1, 0)`,
      followUps: ["What does an else clause on a for loop do?"],
    },
    {
      question: "Why is removing items from a list while iterating over it a bug?",
      answer:
        "The loop tracks a position in the list. Removing an item shifts the following items left, so the loop skips the element that moved into the current position. Build a new list instead (often with a comprehension) or iterate over a copy.",
      code: `nums = [2, 4, 5, 6]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)
print(nums)                     # -> [4, 5]
nums = [2, 4, 5, 6]
print([n for n in nums if n % 2 != 0])   # -> [5]`,
      followUps: ["What is the time complexity of removing items one at a time with list.remove()?"],
    },
    {
      question: "Does every nested loop have O(n²) time complexity?",
      answer:
        "No. Multiply how many times each loop runs. Two loops over the same n items give O(n²); over different inputs of sizes n and m, O(n × m); an inner loop with a fixed bound, such as the 26 letters of the alphabet, gives O(n). An inner loop starting at i + 1 runs n(n - 1)/2 times in total, which is still O(n²).",
      code: `n = 5
count = 0
for i in range(n):
    for j in range(i + 1, n):
        count += 1
print(count, n * (n - 1) // 2)   # -> 10 10`,
      followUps: ["What is the complexity if the inner loop calls `x in some_list`?"],
    },
    {
      question: "How does stopping early affect best-case and worst-case complexity?",
      answer:
        "A linear search that returns as soon as it finds the target is O(1) in the best case (the first item matches) and O(n) in the worst case (the target is last or absent). Interviewers usually want the worst case unless they ask otherwise. Built-ins such as any() and all() also stop early.",
      code: `def contains(items, target):
    for item in items:
        if item == target:
            return True
    return False

print(contains([4, 8, 15], 4), contains([4, 8, 15], 16))   # -> True False
print(any(n > 10 for n in [4, 8, 15]))   # -> True`,
      followUps: ["Why is average-case analysis harder to state precisely?"],
    },
  ],
  mistakes: [
    "Off-by-one errors with range(), such as range(len(items) - 1) missing the last element.",
    "Forgetting to update the variable in a while condition, causing an infinite loop.",
    "Modifying a list while iterating over it.",
    "Initializing an accumulator inside the loop instead of before it.",
    "Starting a running maximum at 0, which fails when every value is negative.",
    "Using range(len(items)) when enumerate() or direct iteration would be clearer.",
  ],
  mastery: [
    "Implement loops from written requirements without assistance.",
    "Trace loop variables accurately on a small input in a table.",
    "Diagnose infinite loops and off-by-one errors.",
    "Implement counters, accumulators, running maximums and linear searches, including empty input.",
    "Count loop iterations and explain simple O(n), O(n × m) and O(n²) examples, with best and worst cases.",
  ],
  deprioritize: [
    "Advanced iterator protocol implementation and specialized asynchronous iteration.",
    "The for/else construct beyond recognizing it.",
  ],
  keywords: [
    "loops",
    "for",
    "while",
    "range",
    "enumerate",
    "zip",
    "break",
    "continue",
    "nested loops",
    "iteration",
    "accumulator",
    "off by one",
    "complexity",
    "early return",
  ],
};

export default topic;
