import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-conditionals",
  title: "Conditional Statements",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Conditional statements choose which code runs based on Boolean conditions. Correct branching depends on the order of conditions, their boundaries and how Python treats non-Boolean values as true or false.",
  whyItMatters:
    "Most logic errors in interview solutions and production code are wrong or missing conditions: an unhandled empty input, a boundary that should be inclusive, or branches in the wrong order. Interviewers watch whether you identify edge cases before coding, and clear, flat conditionals make code easier to review and test.",
  prerequisites: ["Variables and Data Types", "Operators and Expressions"],
  objectives: [
    "Write if, elif and else chains, and explain that at most one branch of a chain runs.",
    "Decide when separate if statements are needed instead of elif.",
    "Order conditions correctly, from most specific to most general.",
    "Use truthiness in conditions, and use explicit comparisons when 0 or empty values are valid.",
    "Identify boundary values and test just below, at and just above each boundary.",
    "Flatten nested logic with guard clauses and early returns.",
    "Simplify Boolean conditions, including chained comparisons and De Morgan's laws.",
    "Use the conditional expression (a if condition else b) for simple value choices.",
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
      instructions:
        "Video alternative covering if, elif, else, and, or, bool and match. Treat match as optional; recognizing it is enough.",
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
      title: "University of Helsinki, Conditional statements: Absolute value; Order of magnitude; Calculator; Loyalty bonus",
      url: "https://programming-26.mooc.fi/part-1/5-conditional-statements",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "Classify a numerical score into grade categories.",
      note: "List the boundary values first and write a test for each before coding.",
    },
    { title: "Validate whether three lengths form a valid triangle, including zero and negative lengths." },
    { title: "Determine whether a year is a leap year, and test 1900, 2000, 2024 and 2025." },
    { title: "Calculate shipping costs from several overlapping business rules, then check for gaps and overlaps." },
    { title: "Rewrite a deeply nested conditional using guard clauses without changing its behavior." },
    {
      title: "Fizz Buzz (LeetCode)",
      url: "https://leetcode.com/problems/fizz-buzz/",
      note: "Easy. The point is condition order; explain why the combined case must be checked first.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between if/elif/else and a series of separate if statements?",
      answer:
        "In an if/elif/else chain, conditions are checked in order and only the first true branch runs; the rest are skipped. Separate if statements are each evaluated independently, so several can run. Use a chain for mutually exclusive cases, such as grade bands, and separate ifs when several independent checks may all apply, such as collecting every validation error.",
      code: `def grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    else:
        return "C or below"

print(grade(95), grade(85), grade(10))   # -> A B C or below`,
      followUps: ["What happens if you put `score >= 80` before `score >= 90`?"],
    },
    {
      question: "Why does the order of conditions matter? Walk through FizzBuzz.",
      answer:
        "Because a chain stops at the first true condition, a general condition placed first hides more specific ones. In FizzBuzz, a multiple of 15 is also a multiple of 3, so checking `n % 3 == 0` first would print Fizz for 15. Check the most specific case first, or build the output from independent checks.",
      code: `def fizzbuzz(n):
    if n % 15 == 0:
        return "FizzBuzz"
    if n % 3 == 0:
        return "Fizz"
    if n % 5 == 0:
        return "Buzz"
    return str(n)

print([fizzbuzz(n) for n in (3, 5, 15, 7)])   # -> ['Fizz', 'Buzz', 'FizzBuzz', '7']`,
      followUps: ["How would you extend this if a new rule were added for multiples of 7?"],
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
    },
    {
      question: "How would you test the boundaries of a condition?",
      answer:
        "For every boundary, test the value just below, exactly at and just above it, plus unusual inputs such as zero, negative numbers, None or empty values. For `score >= 90`, test 89, 90 and 91. Boundaries are where off-by-one errors and wrong choices between > and >= hide.",
      code: `def is_adult(age):
    return age >= 18

for age in (17, 18, 19):
    print(age, is_adult(age))
# -> 17 False
# -> 18 True
# -> 19 True`,
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
    },
    {
      question: "Does Python have a ternary operator?",
      answer:
        "Yes, the conditional expression: value_if_true if condition else value_if_false. It evaluates only the chosen branch. Use it for short value choices; when the branches contain real logic or side effects, a normal if statement is clearer.",
      code: `count = 1
label = "item" if count == 1 else "items"
print(f"{count} {label}")   # -> 1 item`,
      followUps: ["Why is `x and a or b` an unreliable substitute?"],
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
    "Translate written rules into branching logic that has no gaps or overlaps.",
    "List boundary and edge cases before writing the code, and test them.",
    "Explain execution order in an if/elif/else chain.",
    "Simplify nested or negated conditions without changing behavior.",
    "Answer the interview questions above with your own examples.",
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
