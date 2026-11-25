import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-variables-data-types",
  title: "Variables and Data Types",
  category: "Python",
  phase: "programming-mastery",
  overview:
    "Python variables are names bound to objects. Objects have types that determine their supported operations and behavior. Python uses dynamic typing, so a name can be rebound to objects of different types.",
  whyItMatters:
    "Every program stores and transforms data. Understanding how names, objects and types relate prevents a large class of everyday bugs and is the foundation for every later Python topic.",
  prerequisites: ["None. This is the first Programming Mastery topic; you only need a way to run Python code."],
  objectives: [
    "Create and reassign variables.",
    "Understand integers, floats, strings, booleans and None.",
    "Distinguish an object's type from a variable name.",
    "Inspect types using type() and isinstance().",
    "Convert values using int(), float(), str() and bool().",
    "Understand basic truthiness.",
    "Distinguish None, zero, False and empty strings.",
    "Recognize common type conversion errors.",
    "Understand basic mutable versus immutable behavior.",
    "Follow readable variable naming conventions.",
  ],
  depth:
    "Master: Apply the concept to unfamiliar problems, explain trade-offs and identify appropriate alternatives without assistance.",
  resources: [
    {
      title: "Python Programming MOOC — More about variables",
      url: "https://programming-26.mooc.fi/part-1/3-more-about-variables",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Written lesson. Focus on reassignment, integers and floating-point numbers. Converting input with int() is covered in the next lesson, Arithmetic operations.",
    },
    {
      title: "Think Python — 2.1 Variables",
      url: "https://allendowney.github.io/ThinkPython/chap02.html#variables",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative, part 1: variable assignment. Read sections 2.1–2.3 on variables, state diagrams and variable names.",
    },
    {
      title: "Think Python — 1.5 Values and types",
      url: "https://allendowney.github.io/ThinkPython/chap01.html#values-and-types",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative, part 2: types. Read section 1.5 on int, float and str, type(), and converting with int() and float().",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Focus on variables, the str, int and float types, and converting between them.",
    },
    {
      title: "The Python Tutorial — An Informal Introduction to Python",
      url: "https://docs.python.org/3/tutorial/introduction.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Use the sections on numbers and text to check behavior.",
    },
    {
      title: "Python Standard Library — Built-in Functions",
      url: "https://docs.python.org/3/library/functions.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for type conversion and type checking. Look up int(), float(), str(), bool(), type() and isinstance().",
    },
  ],
  exercises: [
    {
      title:
        "University of Helsinki, More about variables: Arithmetics; Fix the code: Print a single line. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-1/3-more-about-variables",
    },
    {
      title:
        "University of Helsinki, Arithmetic operations: Name and age. Instructions are readable without an account; submitting requires logging in.",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
    },
    { title: "Convert a numeric string into an integer, add ten and return the result." },
    { title: "Write a temperature converter between Celsius and Fahrenheit." },
    { title: "Predict the type and value of ten expressions involving int, float, str, bool and None." },
    { title: "Repair a program containing mismatched string and integer operations." },
    {
      title:
        "Explain what happens when one variable is assigned to another and the first variable is subsequently reassigned.",
    },
  ],
  interviewQuestions: [
    "Is Python statically or dynamically typed?",
    "What is the difference between type() and isinstance()?",
    "What is None?",
    "What is the difference between an integer and a floating-point number?",
    'Why does bool("False") evaluate to True?',
    "What happens when a name is reassigned to an object of a different type?",
  ],
  mastery: [
    "Independently solve all original exercises.",
    "Correctly identify at least nine of ten expression types and values.",
    "Explain dynamic typing without referring to notes.",
    "Diagnose and correct basic type errors.",
    "Convert values appropriately without trial and error.",
  ],
  deprioritize: [
    "Metaclasses, advanced object internals and detailed floating-point representation.",
    "Detailed references, aliasing and copying. These are covered in Mutability, References and Copying.",
  ],
  keywords: [
    "variables",
    "assignment",
    "data types",
    "dynamic typing",
    "int",
    "float",
    "bool",
    "None",
    "type conversion",
    "casting",
    "truthiness",
  ],
};

export default topic;
