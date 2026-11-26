import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-loops",
  title: "Loops",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A for loop iterates over the items of an iterable; a while loop repeats until a condition becomes false. Loops are in almost every interview solution, and counting how often they run is where complexity analysis starts.",
  whyItMatters:
    "Almost every coding interview solution contains a loop, and your first complexity analysis comes from counting how many times loops run. Interviewers expect you to trace a loop by hand, avoid off-by-one and infinite loops, and stop early when the answer is known. At work, loops process records, retry operations and transform data.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions", "Conditional Statements"],
  objectives: [
    "Choosing for (known collection or count) versus while (condition-driven), and making sure every while loop's condition eventually becomes false.",
    "range(start, stop, step): stop is excluded, a negative step counts down, and a range computes values on demand instead of building a list.",
    "enumerate() for index and value; zip() to walk sequences in parallel (it stops at the shortest input).",
    "break leaves only the innermost loop; continue skips to the next iteration; return leaves every loop in a function.",
    "Loop patterns: accumulator, counter, running maximum (start from the first item, not 0), linear search with early exit.",
    "Never add or remove items in a list while iterating over it; build a new list or iterate over a copy.",
    "Tracing loop variables by hand on a small input.",
    "Counting iterations: O(n), O(n × m), O(n²) (an inner loop from i + 1 still runs n(n - 1)/2 times), and best versus worst case for early exit.",
    "Skip for now: the iterator protocol, generators, async iteration and for/else beyond recognizing it.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Part 2: Simple loops",
      url: "https://programming-26.mooc.fi/part-2/4-simple-loops",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here, and do the exercises in each section as you go. Read this section (while True with break, helper variables, debugging prints), then in Part 3 \"Loops with conditions\" (initialisation, condition and update) and \"More loops\" (break, continue, nested loops), then in Part 4 \"Definite iteration\" (for and range; its examples use lists, introduced in the section before it). Free; reading needs no account, submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 2: Loops",
      url: "https://cs50.harvard.edu/python/weeks/2/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to the MOOC sections, not an addition. Watch the parts the notes title \"While Loops\", \"For Loops\", \"Improving with User Input\" and \"Mario\" (nested loops). The lists and dictionaries parts belong to later topics. Free, no account needed.",
    },
    {
      title: "Python Tutor — code visualizer",
      url: "https://pythontutor.com/visualize.html",
      provider: "Philip Guo",
      type: "Interactive",
      instructions:
        "A tool, not a course: paste a short loop and step through it to see each variable change. Use it to check your hand traces, not to replace them. Free, no account needed.",
    },
    {
      title: "The Python Tutorial — 4.2 for Statements to 4.4 break and continue",
      url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for for, range() and break/continue, including the warning about modifying a collection while iterating. For enumerate() and zip(), see 5.6 Looping Techniques in the Data Structures chapter.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Loops with conditions: Fix the code: Countdown; Powers of two; The sum of consecutive numbers, version 1",
      url: "https://programming-26.mooc.fi/part-3/1-loops-with-conditions",
      note: "while loops with a correct initialisation, condition and update. Instructions are readable without an account; submitting requires a free MOOC.fi account.",
    },
    {
      title: "University of Helsinki, More loops: Factorial; Multiplication",
      url: "https://programming-26.mooc.fi/part-3/3-more-loops",
      note: "An accumulator with an exit condition, and nested loops. Free MOOC.fi account to submit.",
    },
    {
      title: "Making the Grade (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/making-the-grade",
      note: "for and while loops, enumerate(), break and continue over lists of scores, with automated tests. Uses basic lists. Solving needs a free Exercism account.",
    },
    {
      title: "Running Sum of 1d Array (LeetCode)",
      url: "https://leetcode.com/problems/running-sum-of-1d-array/",
      note: "Easy. Accumulator pattern. Free account required to submit.",
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
    {
      title: "Trace one of your solutions above with an inner loop that starts at i + 1: write each variable's value in a table, then check it in Python Tutor.",
      url: "https://pythontutor.com/visualize.html",
      note: "Code reading. Also count how many times the inner body runs for n items.",
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
      source: { title: "The Python Tutorial — 4.2 for Statements", url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements" },
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
      source: { title: "Python Docs — Ranges", url: "https://docs.python.org/3/library/stdtypes.html#ranges" },
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
      source: { title: "Python Docs — Built-in functions: zip()", url: "https://docs.python.org/3/library/functions.html#zip" },
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
      source: { title: "The Python Tutorial — 4.4 break and continue Statements", url: "https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements" },
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
      source: { title: "The Python Tutorial — 4.2 for Statements (modifying a collection while iterating)", url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements" },
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
      source: { title: "USACO Guide — Time Complexity: Complexity Calculations", url: "https://usaco.guide/bronze/time-comp#complexity-calculations" },
    },
    {
      question: "How does stopping early affect best-case and worst-case complexity?",
      answer:
        "A linear search that returns as soon as it finds the target is O(1) in the best case (the first item matches) and O(n) in the worst case (the target is last or absent). Interviewers usually want the worst case unless they ask otherwise. Built-ins such as any() and all() also stop early.",
      code: `print(any(n > 10 for n in [15, 4, 8]))   # stops after the first item  # -> True`,
      followUps: ["Why is average-case analysis harder to state precisely?"],
      source: { title: "Python Docs — Built-in functions: any()", url: "https://docs.python.org/3/library/functions.html#any" },
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
    "You complete the MOOC loop exercises, Making the Grade and the three LeetCode problems above without help, including empty input.",
    "You trace a nested loop by hand on a small input and your table matches Python Tutor.",
    "You can find and fix an infinite loop or an off-by-one range() bound.",
    "You can count loop iterations and state O(n), O(n × m) or O(n²), with best and worst cases for early exit.",
    "Skip this topic if you can already do all of the above.",
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
