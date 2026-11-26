import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-scope",
  title: "Scope",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Scope determines where a name is visible and which object it refers to. Python resolves a name by searching the local, enclosing, global and built-in scopes in that order.",
  whyItMatters:
    "Scope rules explain which variable a line of code actually uses. Understanding them prevents confusing bugs, and avoiding unnecessary global state makes code easier to test and reason about.",
  prerequisites: ["Functions and Arguments"],
  objectives: [
    "Distinguish local, enclosing, global and built-in scope.",
    "Explain the LEGB lookup rule.",
    "Understand name shadowing.",
    "Recognize NameError and UnboundLocalError.",
    "Understand global and nonlocal.",
    "Distinguish reading from rebinding external names.",
    "Recognize that ordinary if and for blocks do not create function-local scopes.",
    "Prefer explicit parameters and return values to unnecessary global state.",
    "Understand basic nested functions.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Think Python — 3.5 Variables and parameters are local",
      url: "https://allendowney.github.io/ThinkPython/chap03.html#variables-and-parameters-are-local",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written introduction. Read section 3.5 on local variables and parameters. For LEGB, global, nonlocal and name resolution, use the references below.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 0: Functions",
      url: "https://cs50.harvard.edu/python/weeks/0/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Introductory video only. The lecture briefly introduces local scope while discussing functions. It does not cover LEGB, global or nonlocal; use the written references below for those.",
    },
    {
      title: "The Python Language Reference — Naming and binding",
      url: "https://docs.python.org/3/reference/executionmodel.html#naming-and-binding",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Written reference for name resolution (LEGB), global and nonlocal, including why UnboundLocalError occurs.",
    },
    {
      title: "The Python Tutorial — Python Scopes and Namespaces",
      url: "https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Written reference with a worked example of local, nonlocal and global assignment. Read only this section; the rest of the page covers classes.",
    },
  ],
  exercises: [
    { title: "Predict output from functions with local variables sharing global names." },
    { title: "Identify and fix an UnboundLocalError." },
    { title: "Replace a global counter with explicit parameters and return values." },
    { title: "Implement a nested function that modifies an enclosing variable using nonlocal." },
    { title: "Explain why a variable assigned inside a for loop may remain accessible afterward." },
  ],
  interviewQuestions: [
    "What is LEGB?",
    "What is the difference between local and global scope?",
    "How do global and nonlocal differ?",
    "Why can UnboundLocalError occur?",
    "Why should unnecessary global state be avoided?",
    "Does an if statement create a new local scope?",
  ],
  mastery: [
    "Correctly trace name resolution through nested functions.",
    "Explain common scope-related exceptions.",
    "Implement functions without unnecessary global state.",
    "Correctly use and explain global and nonlocal.",
    "Independently diagnose simple scope bugs.",
  ],
  deprioritize: ["Advanced closure implementation, class scope edge cases and interpreter internals."],
  keywords: [
    "scope",
    "LEGB",
    "local",
    "enclosing",
    "global",
    "built-in",
    "nonlocal",
    "namespace",
    "shadowing",
    "NameError",
    "UnboundLocalError",
  ],
};

export default topic;
