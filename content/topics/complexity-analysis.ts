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
    "Skip for now: formal proofs, the master theorem and P versus NP.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "USACO Guide — Time Complexity",
      url: "https://usaco.guide/bronze/time-comp",
      provider: "USACO Guide",
      type: "Article",
      instructions:
        "Start here. Read Complexity Calculations, Common Complexities and Constraints, and Constant Factor (about 30 minutes), switching the code examples to Python; then answer the short Quiz at the end. The Formal Definition section is optional; skip the P vs. NP aside. It is written for programming contests, but the analysis is the same as in interviews. Free, no account needed.",
    },
    {
      title: "CS50x 2026 — Week 3: Algorithms",
      url: "https://cs50.harvard.edu/x/weeks/3/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to Start here. Watch the lecture segments on linear search, binary search and running time (Big O, Omega and Theta); the Running Time section of the lecture notes is the written summary. The examples are in C — focus on the reasoning and skip the C syntax and the sorting segments (they return in Sorting). CS50 informally pairs Big O with the worst case and Omega with the best case; strictly they are upper and lower bounds, as the Start here resource defines.",
    },
    {
      title: "Time complexity of operations on built-in types",
      url: "https://docs.python.org/3/builtins/time-complexity.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for the cost of the Python operations inside your loops. Read the introduction and the list, dict and set tables, including which costs are average-case or amortized; look up the rest when needed.",
    },
  ],
  exercises: [
    {
      title: "CMU 15-110 practice — Runtime and Big-O Notation (Exercises 15.1–15.26)",
      url: "https://www.cs.cmu.edu/~15110-f25/practice/unit2/runtime-bigO.html",
      note: "Foundation. Free university practice with hidden solutions, mostly Python snippets: loops, halving loops, nested loops and recursion. Answer each before revealing the solution. Answer 15.11 equates Big O with the worst case; Big O is an upper bound and can describe any case. Time only — no space or amortized analysis. No account needed.",
    },
    {
      title: "State the time and space complexity of every solution you wrote in Programming Fluency, then check two against the official Python complexity table.",
      note: "Reinforcement. Include the cost of each built-in you used and any recursion depth; this covers the space and Python-specific costs the CMU set does not.",
    },
    {
      title: "Take one O(n²) solution and improve it to O(n) or O(n log n), explaining what repeated work you removed and what extra memory you used.",
      note: "Transfer. Contains Duplicate and Two Sum from earlier topics are good starting points.",
    },
    {
      title: "For three LeetCode problems you have already solved, read only the constraints and predict which complexities would pass, using the USACO Guide constraints table.",
      note: "Estimation practice. Treat the operations-per-second figures as a rough guide (Python is slower than compiled languages), not a rule.",
    },
  ],
  interviewQuestions: [
    {
      question: "What does Big O notation mean?",
      answer:
        "Big O describes an upper bound on how a cost grows as the input size grows, ignoring constant factors and lower-order terms: 3n² + 5n + 2 is O(n²) because the n² term dominates for large n. When asked for \"the complexity\", give a tight bound on the worst case unless the question says otherwise. Big O says nothing about actual speed for small inputs, where constants can matter.",
      followUps: ["What are Big Omega and Big Theta, informally?"],
      source: { title: "USACO Guide — Time Complexity: Formal Definition of Big O", url: "https://usaco.guide/bronze/time-comp#formal-definition-of-big-o-notation" },
    },
    {
      question: "How do you analyze code with loops?",
      answer:
        "Count how many times the innermost work runs. Sequential blocks add (O(n) + O(n) = O(n)); nested loops multiply when their bounds are independent; a loop with a constant bound is O(1) however large the constant; a loop that halves or doubles a value runs O(log n) times. Use separate variables for separate inputs: looping over a list of size n and, inside, a list of size m is O(n × m), not O(n²).",
      code: `def halvings(n):
    steps = 0
    while n > 1:
        n //= 2          # halves each time -> O(log n)
        steps += 1
    return steps

print(halvings(8), halvings(1024), halvings(1_000_000))   # -> 3 10 19`,
      followUps: ["What is the complexity of a loop from 1 to n where i doubles each iteration?"],
      source: { title: "USACO Guide — Time Complexity: Complexity Calculations", url: "https://usaco.guide/bronze/time-comp#complexity-calculations" },
    },
    {
      question: "What is the difference between worst-case, average-case and amortized complexity?",
      answer:
        "Worst case is the most expensive input of size n; average case is the expected cost over a distribution of inputs; amortized cost is the average cost per operation over a sequence of operations. Dictionary lookup is O(1) on average but O(n) in the worst case when many keys collide. list.append is O(1) amortized: an occasional resize copies everything, but spread over many appends the cost per append is constant.",
      followUps: ["Why is quicksort's worst case O(n²) even though it is usually fast?"],
      source: { title: "Python Docs — Time complexity of built-in types", url: "https://docs.python.org/3/builtins/time-complexity.html" },
    },
    {
      question: "How do you analyze space complexity?",
      answer:
        "Count the extra memory the algorithm allocates beyond the input: new lists, sets, dictionaries, strings, slices and copies, plus the recursion stack, which uses memory proportional to the maximum recursion depth. Reversing a list into a new list is O(n) extra space; swapping in place with two indexes is O(1). In an interview I state that I mean auxiliary space, and whether I am excluding the output itself, since conventions differ.",
      followUps: ["What is the space complexity of a recursive function that recurses n levels deep?"],
      source: { title: "Wikipedia — Space complexity: Auxiliary space complexity", url: "https://en.wikipedia.org/wiki/Space_complexity#Auxiliary_space_complexity" },
    },
    {
      question: "Which Python operations hide extra cost inside a loop?",
      answer:
        "Slicing copies k elements (O(k)); x in list scans (O(n)); list.insert(0, x) and pop(0) shift every element (O(n)); sorted() is O(n log n); building a string with repeated + can be O(n²) overall; and copying a list or dict is O(n). Inside a loop of n iterations, any of these multiplies the total. Replacing them with indexes, sets, deques or a single join is a common optimization.",
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
      source: { title: "Python Docs — Time complexity: list", url: "https://docs.python.org/3/builtins/time-complexity.html#list" },
    },
    {
      question: "What is the complexity of sorting, and of binary search?",
      answer:
        "Comparison-based sorting needs Ω(n log n) comparisons in the worst case (a lower bound); Python's sort achieves O(n log n) and uses up to O(n) extra memory. Binary search on a sorted array is O(log n) because each step halves the remaining range. So sorting once and then performing k binary searches costs O(n log n + k log n), which beats k linear scans (O(k × n)) when k is large.",
      followUps: ["Can any sorting algorithm beat O(n log n)? Under what conditions?"],
      source: { title: "Tech Interview Handbook — Sorting and searching: time complexity", url: "https://www.techinterviewhandbook.org/algorithms/sorting-searching/#time-complexity" },
    },
    {
      question: "How can input constraints guide your choice of algorithm?",
      answer:
        "Constraints hint at the intended complexity. Very small n (around 20) allows exponential approaches such as trying all subsets; n in the low thousands usually allows O(n²); n around 10^5 or more usually needs O(n log n) or O(n). This is a rough heuristic based on roughly 10^7–10^8 simple operations per second (fewer in Python), not a rule, and interviewers may not state constraints, so ask.",
      followUps: ["Why might an O(n²) solution still be acceptable in practice?"],
      source: { title: "USACO Guide — Common Complexities and Constraints", url: "https://usaco.guide/bronze/time-comp#common-complexities-and-constraints" },
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
    "Skip this topic if you already answer the CMU practice set correctly and justify the complexity of your own solutions, including space and built-in costs.",
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
