import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-strings",
  title: "Strings",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A Python string is an immutable sequence of Unicode code points. Strings support indexing, slicing and a large set of methods for searching, transforming and formatting text.",
  whyItMatters:
    "Text processing appears in almost all software: parsing input, validating data, formatting output and handling identifiers. String manipulation is also one of the most common categories of coding interview problems.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions"],
  objectives: [
    "Create strings and use escape sequences.",
    "Access characters using positive and negative indices.",
    "Use slicing with start, stop and step.",
    "Explain string immutability.",
    "Apply len() and membership checks.",
    "Use split(), join(), strip(), replace(), lower() and upper().",
    "Use common search methods.",
    "Format strings using f-strings.",
    "Recognize the cost of repeatedly constructing strings.",
    "Process empty strings and whitespace correctly.",
    "Understand basic Unicode versus bytes distinctions.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Working with strings",
      url: "https://programming-26.mooc.fi/part-3/2-working-with-strings",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written lesson on string operations, indexing, slices, searching for substrings and methods.",
    },
    {
      title: "Think Python — Chapter 8: Strings and Regular Expressions",
      url: "https://allendowney.github.io/ThinkPython/chap08.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative. Read sections 8.1–8.5 on sequences, slices, immutability, comparison and methods. Skip regular expressions.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Focus on strings, string methods and f-string formatting.",
    },
    {
      title: "Python Standard Library — Text Sequence Type (str)",
      url: "https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Supplemental reference. Use for exact str method behavior and for str versus bytes; bytes are described under Binary Sequence Types on the same page.",
    },
  ],
  exercises: [
    {
      title:
        "University of Helsinki, Working with strings: End to beginning; Substrings, part 1; Does it contain vowels; Find all the substrings. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-3/2-working-with-strings",
    },
    { title: "Reverse a string without calling reversed()." },
    { title: "Determine whether a normalized string is a palindrome." },
    { title: "Count vowels without using a regular expression." },
    { title: "Normalize inconsistent whitespace and capitalization." },
    { title: "Extract a username from a valid email address." },
    { title: "Build a formatted summary from multiple input values." },
  ],
  interviewQuestions: [
    "Why are strings immutable?",
    "What does s[::-1] do?",
    "What is the difference between split() and join()?",
    "What happens when a string index is out of range?",
    "Why can repeated string concatenation become inefficient?",
    "What is the difference between str and bytes?",
  ],
  mastery: [
    "Independently manipulate unfamiliar string inputs.",
    "Accurately predict slicing results.",
    "Handle empty strings and whitespace.",
    "Explain immutability.",
    "Describe the basic time and space costs of scanning and constructing strings.",
  ],
  deprioritize: ["Advanced regex, detailed Unicode normalization and specialized text-processing libraries."],
  keywords: [
    "strings",
    "string manipulation",
    "slicing",
    "indexing",
    "immutable",
    "split",
    "join",
    "strip",
    "f-string",
    "palindrome",
    "Unicode",
  ],
};

export default topic;
