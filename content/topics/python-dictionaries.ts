import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-dictionaries",
  title: "Python Dictionaries",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A Python dictionary is a mutable mapping that stores key-value pairs and supports efficient lookup by key.",
  whyItMatters:
    "Dictionaries are commonly used for counting, grouping, caching, configuration and efficient algorithmic problem-solving.",
  prerequisites: ["Variables", "Lists", "Loops", "Functions"],
  objectives: [
    "Create and access dictionaries.",
    "Add, update and remove entries.",
    "Use common dictionary methods.",
    "Iterate over keys, values and items.",
    "Understand hashable keys.",
    "Understand average-case lookup, insertion and deletion complexity.",
    "Understand when to choose a dictionary over a list or set.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "The Python Tutorial — Dictionaries",
      url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Read section 5.5 and study dictionary creation, access, iteration and comprehensions.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 2: Loops",
      url: "https://cs50.harvard.edu/python/2022/weeks/2/",
      provider: "Harvard University",
      type: "Course",
      instructions: "Focus on dictionary examples and iteration.",
    },
  ],
  exercises: [
    { title: "Implement a word-frequency counter." },
    { title: "Valid Anagram (LeetCode)", url: "https://leetcode.com/problems/valid-anagram/" },
    { title: "Two Sum (LeetCode)", url: "https://leetcode.com/problems/two-sum/" },
    { title: "Group Anagrams (LeetCode)", url: "https://leetcode.com/problems/group-anagrams/" },
  ],
  interviewQuestions: [
    "How does a Python dictionary work?",
    "What is the average-case lookup complexity?",
    "What is the worst-case lookup complexity?",
    "What types can be dictionary keys?",
    "When would you choose a dictionary instead of a set?",
    "What happens when two keys have the same hash?",
  ],
  mastery: [
    "Independently create and manipulate dictionaries.",
    "Solve counting, grouping and lookup problems.",
    "Explain average-case O(1) and worst-case O(n) lookup.",
    "Justify choosing a dictionary over alternative data structures.",
  ],
  deprioritize: ["Detailed CPython hash table internals and advanced collision-resolution algorithms."],
  keywords: [
    "dictionary",
    "dict",
    "hash map",
    "hashmap",
    "hash table",
    "hashing",
    "key-value",
    "key value",
    "lookup",
    "frequency counter",
    "O(1)",
  ],
};

export default topic;
