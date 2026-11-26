import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-loops",
  title: "Loops",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Loops repeat code. A for loop iterates over the items of a sequence or other iterable; a while loop repeats for as long as its condition remains true.",
  whyItMatters:
    "Loops process collections and repeat work. Writing correct loops and reasoning about how many times they run is the basis of algorithmic thinking and complexity analysis.",
  prerequisites: ["Operators and Expressions", "Conditional Statements"],
  objectives: [
    "Use for and while loops.",
    "Iterate directly over values.",
    "Use range() and enumerate().",
    "Understand start, stop and step.",
    "Apply break and continue.",
    "Recognize loop termination conditions.",
    "Use counters and accumulators.",
    "Trace nested loops.",
    "Recognize off-by-one errors.",
    "Understand basic linear and nested-loop complexity.",
    "Recognize early termination and its effect on runtime.",
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
      title: "The Python Tutorial — for Statements",
      url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read for statements, the range() function, and break and continue.",
    },
  ],
  exercises: [
    {
      title:
        "University of Helsinki, Loops with conditions: Fix the code: Countdown; Powers of two; The sum of consecutive numbers, version 1. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-3/1-loops-with-conditions",
    },
    {
      title:
        "University of Helsinki, More loops: Factorial. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-3/3-more-loops",
    },
    { title: "Calculate the sum of a sequence without using sum()." },
    { title: "Find the maximum value without using max(), specifying behavior for empty input." },
    { title: "Search for a target and exit immediately when found." },
    { title: "Determine whether a positive integer is prime." },
    { title: "Generate unique pairs from a sequence using nested loops." },
    { title: "Trace a nested loop and calculate its operation count." },
  ],
  interviewQuestions: [
    "When should you use for versus while?",
    "What is the difference between break and continue?",
    "How do range() boundaries work?",
    "What does enumerate() provide?",
    "Does every nested loop have O(n²) time complexity?",
    "How does an early return affect best-case and worst-case complexity?",
  ],
  mastery: [
    "Implement loops from written requirements without assistance.",
    "Trace loop variables accurately.",
    "Diagnose infinite loops and off-by-one errors.",
    "Implement counters, accumulators and linear searches.",
    "Explain simple O(n), O(n × m) and O(n²) examples.",
    "Distinguish best-case and worst-case runtime.",
  ],
  deprioritize: ["Advanced iterator protocol implementation and specialized asynchronous iteration."],
  keywords: [
    "loops",
    "for",
    "while",
    "range",
    "enumerate",
    "break",
    "continue",
    "nested loops",
    "iteration",
    "accumulator",
    "off by one",
    "complexity",
  ],
};

export default topic;
