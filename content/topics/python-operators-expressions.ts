import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-operators-expressions",
  title: "Operators and Expressions",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Operators combine values into expressions, which Python evaluates to a single result. Python provides arithmetic, comparison, Boolean, identity and membership operators, evaluated according to precedence rules.",
  whyItMatters:
    "Expressions are how programs compute values and make decisions. Precise knowledge of division, remainders, comparisons and Boolean logic is needed for correct business logic and for many algorithmic interview problems.",
  prerequisites: ["Variables and Data Types"],
  objectives: [
    "Use arithmetic operators.",
    "Distinguish /, // and %.",
    "Understand exponentiation.",
    "Use equality and ordering comparisons.",
    "Distinguish equality from identity.",
    "Apply and, or and not.",
    "Understand short-circuit evaluation.",
    "Use membership operators.",
    "Understand operator precedence.",
    "Use augmented assignment.",
    "Recognize negative floor-division and modulo behavior.",
    "Understand expressions versus statements.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Arithmetic operations",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written lesson on operands, operators, data types and using numbers from input.",
    },
    {
      title: "Think Python — 2.5 Expressions and statements",
      url: "https://allendowney.github.io/ThinkPython/chap02.html#expressions-and-statements",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written alternative, part 1. Read section 2.5 only.",
    },
    {
      title: "Think Python — 5.1–5.3 Integer division, Boolean expressions and logical operators",
      url: "https://allendowney.github.io/ThinkPython/chap05.html#integer-division-and-modulus",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative, part 2. Read sections 5.1–5.3 on // and %, comparison operators, and and, or and not. Stop before if statements.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Focus on arithmetic operators with integers and floats.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 1: Conditionals",
      url: "https://cs50.harvard.edu/python/weeks/1/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative, continued. Focus on comparison operators, and, or, and modulo.",
    },
    {
      title: "The Python Language Reference — Expressions",
      url: "https://docs.python.org/3/reference/expressions.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Use only the sections on comparisons, Boolean operations and the operator precedence table at the end.",
    },
  ],
  exercises: [
    {
      title:
        "University of Helsinki, Arithmetic operations: Seconds in a day; Sum and product; Students in groups. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
    },
    { title: "Convert seconds into hours, minutes and remaining seconds." },
    { title: "Determine whether a number is divisible by both three and five." },
    { title: "Predict the results of positive and negative floor-division operations." },
    { title: "Write a Boolean expression for eligibility based on three conditions." },
    { title: "Predict which expressions execute under short-circuit evaluation." },
  ],
  interviewQuestions: [
    "What is the difference between == and is?",
    "What is the difference between / and //?",
    "How does modulo work?",
    "What is short-circuit evaluation?",
    "How does Python determine operator precedence?",
    "Do and and or always return Boolean values?",
  ],
  mastery: [
    "Predict the results of mixed operator expressions accurately.",
    "Use quotient and remainder operations to solve practical problems.",
    "Construct compound Boolean expressions independently.",
    "Explain equality versus identity and short-circuit behavior.",
    "Avoid unnecessary parentheses while preserving readability.",
  ],
  deprioritize: [
    "Advanced operator overloading and detailed bitwise algorithms. Basic bitwise operations can be revisited during Data Structures & Algorithms.",
  ],
  keywords: [
    "operators",
    "expressions",
    "modulo",
    "floor division",
    "precedence",
    "comparison",
    "equality",
    "identity",
    "short circuit",
    "boolean logic",
  ],
};

export default topic;
