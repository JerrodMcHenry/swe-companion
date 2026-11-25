import type { InterviewGuide } from "../types";

const guide: InterviewGuide = {
  slug: "coding-algorithms",
  title: "Coding & Algorithms Interview Preparation",
  category: "Interview type",
  description: "Problem solving with data structures and algorithms, implementation and complexity analysis.",
  overview:
    "Coding interviews evaluate a candidate's ability to understand problems, select appropriate data structures and algorithms, implement correct solutions, communicate reasoning and analyze efficiency.",
  competencies: [
    "Understanding the problem.",
    "Selecting appropriate data structures and algorithms.",
    "Implementing a correct solution.",
    "Communicating your reasoning.",
    "Analyzing time and space efficiency.",
  ],
  studyTopics: [
    { title: "Programming fundamentals", priority: "Essential" },
    { title: "Big O complexity analysis", priority: "Essential" },
    { title: "Arrays and strings", priority: "Essential" },
    {
      title: "Hash maps and sets",
      priority: "Essential",
      slug: "python-dictionaries",
      reason: "Python Dictionaries covers Python's built-in hash map. It is a starting point, not complete coverage of hash maps and sets.",
    },
    { title: "Linked lists", priority: "Essential" },
    { title: "Stacks and queues", priority: "Essential" },
    { title: "Trees", priority: "Essential" },
    { title: "Graphs", priority: "Essential" },
    { title: "Recursion", priority: "Essential" },
    { title: "Common algorithmic patterns", priority: "Essential" },
    { title: "Testing and edge cases", priority: "Essential" },
  ],
  sequence: [
    "Develop programming fluency.",
    "Understand time and space complexity.",
    "Learn fundamental data structures.",
    "Practice common algorithmic patterns.",
    "Solve unfamiliar problems independently.",
    "Practice explaining solutions aloud.",
    "Complete timed mock interviews.",
  ],
  resources: [
    {
      title: "Tech Interview Handbook",
      url: "https://www.techinterviewhandbook.org/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free, curated interview preparation guide. Use its coding interview material alongside your practice.",
    },
    {
      title: "Grind 75",
      url: "https://www.techinterviewhandbook.org/grind75/",
      provider: "Tech Interview Handbook",
      type: "Interactive",
      instructions: "Build a coding practice plan sized to the time you have. Problems are solved on LeetCode.",
    },
    {
      title: "NeetCode",
      url: "https://neetcode.io/",
      provider: "NeetCode",
      type: "Course",
      instructions: "Coding interview practice platform. Not all content is free; use only the freely accessible material.",
    },
  ],
  readiness: [
    "Clarify ambiguous problem requirements.",
    "Develop a correct solution independently.",
    "Explain the chosen data structure and algorithm.",
    "Analyze time and space complexity.",
    "Test normal cases and edge cases.",
    "Communicate clearly while solving a problem.",
    "Improve an inefficient solution when appropriate.",
  ],
};

export default guide;
