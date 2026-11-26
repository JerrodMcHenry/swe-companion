import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-conditionals",
  title: "Conditional Statements",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Conditional statements choose which code runs based on whether conditions are true. Python uses if, elif and else, with indentation defining each block.",
  whyItMatters:
    "Conditionals encode business rules and handle edge cases. Clear, correct branching is essential for reliable software, and boundary conditions are a frequent source of bugs.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions"],
  objectives: [
    "Write if, elif and else statements.",
    "Understand indentation and execution blocks.",
    "Construct compound conditions.",
    "Apply truthiness and short-circuit evaluation.",
    "Distinguish separate if statements from an if/elif chain.",
    "Handle boundaries and edge cases.",
    "Use guard clauses to reduce unnecessary nesting.",
    "Recognize conditional expressions.",
    "Recognize basic match syntax without requiring mastery.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Conditional statements",
      url: "https://programming-26.mooc.fi/part-1/5-conditional-statements",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written lesson on comparison operators, indentation, and Boolean values and expressions.",
    },
    {
      title: "Think Python — Chapter 5: Conditionals and Recursion",
      url: "https://allendowney.github.io/ThinkPython/chap05.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative. Read sections 5.2–5.7 on Boolean expressions, logical operators and if, else and chained conditionals. Skip recursion; it is covered later.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 1: Conditionals",
      url: "https://cs50.harvard.edu/python/weeks/1/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative covering if, elif, else, and, or, bool and match.",
    },
    {
      title: "The Python Tutorial — if Statements",
      url: "https://docs.python.org/3/tutorial/controlflow.html#if-statements",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for if, elif and else syntax.",
    },
  ],
  exercises: [
    {
      title:
        "University of Helsinki, Conditional statements: Absolute value; Order of magnitude; Calculator; Loyalty bonus. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-1/5-conditional-statements",
    },
    { title: "Classify a numerical score into grade categories." },
    { title: "Validate whether three lengths form a valid triangle." },
    { title: "Calculate shipping costs from multiple business rules." },
    { title: "Determine whether a year is a leap year." },
    { title: "Rewrite a deeply nested conditional using guard clauses." },
  ],
  interviewQuestions: [
    "What is the difference between if, elif and else?",
    "When would separate if statements be necessary?",
    "How does Python evaluate truthiness?",
    "What is a guard clause?",
    "How would you test conditional boundary cases?",
  ],
  mastery: [
    "Translate written requirements into correct branching logic.",
    "Identify overlapping and missing conditions.",
    "Test boundaries independently.",
    "Explain execution order.",
    "Simplify unnecessarily nested logic.",
  ],
  deprioritize: ["Advanced structural pattern matching and complex pattern guards."],
  keywords: [
    "conditionals",
    "if",
    "elif",
    "else",
    "branching",
    "boolean",
    "truthiness",
    "guard clause",
    "match",
    "edge cases",
  ],
};

export default topic;
