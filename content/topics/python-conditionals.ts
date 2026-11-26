import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-conditionals",
  title: "Conditional Statements",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Conditional statements choose which code runs based on Boolean conditions. Correct branching depends on the order of conditions, their boundaries and how Python treats non-Boolean values, which is where many interview and production bugs hide.",
  whyItMatters:
    "Most logic errors in interview solutions and production code are wrong or missing conditions: an unhandled empty input, a boundary that should be inclusive, or branches in the wrong order. Interviewers watch whether you identify edge cases before coding, and clear, flat conditionals make code easier to review and test.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions"],
  objectives: [
    "if/elif/else chains: conditions are checked in order and at most one branch runs; separate if statements are each evaluated, so several can run.",
    "Condition order: put the most specific case first (FizzBuzz's multiple of 15 before multiples of 3).",
    "Truthiness in conditions: `if items:` for non-empty checks, but an explicit `is not None` or comparison when 0 or \"\" is valid data.",
    "Boundaries: test just below, at and just above each boundary, and choose > versus >= deliberately.",
    "Guard clauses and early returns to flatten nested logic.",
    "Simplifying conditions with chained comparisons (18 <= age <= 65) and De Morgan's laws: not (A or B) == (not A) and (not B).",
    "The conditional expression a if condition else b for simple value choices.",
    "Skip for now: structural pattern matching (match) beyond recognizing it.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Part 1: Conditional statements",
      url: "https://programming-26.mooc.fi/part-1/5-conditional-statements",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read the whole section (comparison operators, indentation, Boolean expressions) and do its exercises. Then continue in Part 2 with \"More conditionals\" (else and elif) and \"Combining conditions\" (and, or, not, chained comparisons, nested conditionals) and their exercises. Free; reading needs no account, submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 1: Conditionals",
      url: "https://cs50.harvard.edu/python/weeks/1/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative to the MOOC sections, not an addition. Watch the parts the notes title \"if Statements\", \"Control Flow, elif, and else\", \"or\", \"and\" and \"Pythonic\". The match part is optional. Free, no account needed.",
    },
    {
      title: "Refactoring.Guru — Replace Nested Conditional with Guard Clauses",
      url: "https://refactoring.guru/replace-nested-conditional-with-guard-clauses",
      provider: "Refactoring.Guru",
      type: "Article",
      instructions:
        "Read this one page for the guard-clause technique, which the courses above do not cover. Read the Problem, Solution and Why Refactor parts and the Python tab of the example. The page is free; the paid course it advertises is not needed.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Conditional statements: Absolute value; Order of magnitude; Calculator; Loyalty bonus",
      url: "https://programming-26.mooc.fi/part-1/5-conditional-statements",
      note: "Basic if/else and comparison. Instructions are readable without an account; submitting requires a free MOOC.fi account.",
    },
    {
      title: "University of Helsinki, Combining conditions: Grades and points; Leap year; Gift tax calculator",
      url: "https://programming-26.mooc.fi/part-2/3-combining-conditions",
      note: "Grade bands and tax brackets test boundary handling and condition order; Leap year tests combined conditions. List the boundary values before coding. Free MOOC.fi account to submit.",
    },
    {
      title: "Meltdown Mitigation (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/meltdown-mitigation",
      note: "Translating written thresholds into if/elif/else with automated tests on the boundaries. Solving needs a free Exercism account.",
    },
    {
      title: "Fizz Buzz (LeetCode)",
      url: "https://leetcode.com/problems/fizz-buzz/",
      note: "Easy. The point is condition order; explain why the combined case must be checked first. Free account required to submit.",
    },
    {
      title: "Apply it to your own code: rewrite one deeply nested function from your own work with guard clauses, without changing its behavior.",
      note: "Use the Refactoring.Guru technique above, and test the edge cases before and after. No suitable external exercise was found for this skill.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between if/elif/else and a series of separate if statements?",
      answer:
        "In an if/elif/else chain, conditions are checked in order and only the first true branch runs; the rest are skipped. Separate if statements are each evaluated independently, so several can run. Use a chain for mutually exclusive cases, such as grade bands, and separate ifs when several independent checks may all apply, such as collecting every validation error.",
      followUps: ["What happens if you put `score >= 80` before `score >= 90`?"],
      source: { title: "The Python Tutorial — 4.1 if Statements", url: "https://docs.python.org/3/tutorial/controlflow.html#if-statements" },
    },
    {
      question: "Why does the order of conditions matter? Walk through FizzBuzz.",
      answer:
        "Because a chain stops at the first true condition, a general condition placed first hides more specific ones. In FizzBuzz, a multiple of 15 is also a multiple of 3, so checking `n % 3 == 0` first would print Fizz for 15. Check the most specific case first, or build the output from independent checks.",
      followUps: ["How would you extend this if a new rule were added for multiples of 7?"],
      source: { title: "Python Language Reference — 8.1 The if statement", url: "https://docs.python.org/3/reference/compound_stmts.html#the-if-statement" },
    },
    {
      question: "How does Python evaluate truthiness in a condition, and when should you avoid relying on it?",
      answer:
        "`if value:` is false for None, False, 0, 0.0 and empty containers or strings, and true otherwise. It is idiomatic for checking that a list or string is non-empty. Avoid it when a falsy value is valid data: a quantity of 0 or an empty name might be legitimate, so write `if quantity is not None:` or an explicit comparison instead.",
      code: `def describe(quantity):
    if quantity is None:
        return "unknown"
    if quantity == 0:
        return "out of stock"
    return "available"

print(describe(None), "|", describe(0), "|", describe(3))   # -> unknown | out of stock | available`,
      followUps: ["What would `if not quantity:` return for 0, and why could that be a bug?"],
      source: { title: "PEP 8 — Programming Recommendations (empty sequences and `if x is not None`)", url: "https://peps.python.org/pep-0008/#programming-recommendations" },
    },
    {
      question: "What is a guard clause, and why use one?",
      answer:
        "A guard clause handles an invalid or special case at the top of a function and returns (or raises) immediately. The main logic then runs without extra indentation. Guard clauses make edge cases visible, reduce nesting and are easy to test individually.",
      code: `def average(values):
    if not values:          # guard clause for the empty case
        return None
    return sum(values) / len(values)

print(average([]), average([2, 4]))   # -> None 3.0`,
      followUps: ["Should this function return None or raise an error for an empty list? What are the trade-offs?"],
      source: { title: "Refactoring.Guru — Replace Nested Conditional with Guard Clauses", url: "https://refactoring.guru/replace-nested-conditional-with-guard-clauses" },
    },
    {
      question: "How would you test the boundaries of a condition?",
      answer:
        "For every boundary, test the value just below, exactly at and just above it, plus unusual inputs such as zero, negative numbers, None or empty values. For `score >= 90`, test 89, 90 and 91. Boundaries are where off-by-one errors and wrong choices between > and >= hide.",
      followUps: ["How do you decide whether a boundary should be inclusive or exclusive?"],
    },
    {
      question: "How would you simplify `if not (age < 18 or age > 65):`?",
      answer:
        "By De Morgan's law, not (A or B) equals (not A) and (not B), so the condition is age >= 18 and age <= 65, which Python lets you write as a chained comparison: 18 <= age <= 65. Simpler conditions are easier to read and less likely to hide mistakes.",
      code: `for age in (17, 18, 65, 66):
    print(age, not (age < 18 or age > 65), 18 <= age <= 65)
# -> 17 False False
# -> 18 True True
# -> 65 True True
# -> 66 False False`,
      followUps: ["What does not (A and B) simplify to?"],
      source: { title: "Wikipedia — De Morgan's laws", url: "https://en.wikipedia.org/wiki/De_Morgan%27s_laws" },
    },
    {
      question: "Does Python have a ternary operator?",
      answer:
        "Yes, the conditional expression: value_if_true if condition else value_if_false. It evaluates only the chosen branch. Use it for short value choices; when the branches contain real logic or side effects, a normal if statement is clearer.",
      code: `count = 1
label = "item" if count == 1 else "items"
print(f"{count} {label}")   # -> 1 item`,
      followUps: ["Why is `x and a or b` an unreliable substitute?"],
      source: { title: "Python Language Reference — Conditional expressions", url: "https://docs.python.org/3/reference/expressions.html#conditional-expressions" },
    },
  ],
  mistakes: [
    "Ordering a general condition before a specific one, making the specific branch unreachable.",
    "Using > where >= is required, or the reverse, at a boundary.",
    "Using `if not value:` when 0 or an empty string is a valid value.",
    "Writing `x == a or b` instead of `x == a or x == b`.",
    "Leaving a case unhandled, so the function falls through and returns None.",
    "Deeply nested ifs that hide which conditions lead to which result.",
  ],
  mastery: [
    "You complete the MOOC conditional exercises, Meltdown Mitigation and Fizz Buzz without help.",
    "Before coding a rule, you list its boundary and edge cases (just below, at and just above each boundary; zero, negative, None, empty) and test them.",
    "You can explain execution order in an if/elif/else chain and simplify a negated or nested condition without changing its behavior.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: ["Advanced structural pattern matching and complex pattern guards. Recognizing match statements is enough."],
  keywords: [
    "conditionals",
    "if",
    "elif",
    "else",
    "branching",
    "boolean",
    "truthiness",
    "guard clause",
    "early return",
    "ternary",
    "boundary",
    "edge cases",
    "match",
  ],
};

export default topic;
