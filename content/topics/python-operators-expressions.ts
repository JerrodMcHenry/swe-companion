import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-operators-expressions",
  title: "Operators and Expressions",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Operators combine values into expressions: arithmetic, comparison, Boolean, membership and identity operators. Knowing exactly what each returns, and in what order expressions are evaluated, lets you read and write code without trial and error.",
  whyItMatters:
    "Floor division and modulo appear constantly in coding problems (digits, wrapping indexes, even/odd, time conversion), and short-circuit evaluation is how you write safe conditions such as checking for None before using a value. Interviewers often ask you to predict what a short expression returns, and a misunderstanding of `is`, `or` or precedence is a common source of real bugs.",
  prerequisites: ["Variables and Data Types"],
  objectives: [
    "Use arithmetic operators, including **, / , // and %, and predict their results for negative numbers.",
    "Use divmod() and the identity a == (a // b) * b + a % b.",
    "Distinguish equality (==) from identity (is), and use `is` only for None and similar singletons.",
    "Use comparison operators, including chained comparisons such as 0 <= i < n.",
    "Explain short-circuit evaluation and that `and` and `or` return one of their operands.",
    "Use membership (in, not in) and state its cost for lists, strings, sets and dictionaries.",
    "Apply operator precedence, and add parentheses where they improve readability.",
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
      title: "Python Programming FAQ — Why does -22 // 10 return -3?",
      url: "https://docs.python.org/3/faq/programming.html#why-does-22-10-return-3",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short official explanation of floor division and modulo with negative numbers. Read this answer only.",
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
      title: "University of Helsinki, Arithmetic operations: Seconds in a day; Sum and product; Students in groups",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    { title: "Convert a number of seconds into hours, minutes and remaining seconds.", note: "Use // and %, or divmod()." },
    { title: "Predict the results of positive and negative floor-division and modulo operations, then verify them." },
    {
      title: "Predict which parts of five Boolean expressions run under short-circuit evaluation.",
      note: "Code reading. Include expressions that would raise an error if evaluated, such as dividing by a zero count.",
    },
    { title: "Write a Boolean expression for eligibility based on three conditions, then simplify it." },
    {
      title: "Palindrome Number (LeetCode)",
      url: "https://leetcode.com/problems/palindrome-number/",
      note: "Easy. Solve it without converting to a string, using // and % to take digits. Free account required to submit.",
    },
    {
      title: "Add Digits (LeetCode)",
      url: "https://leetcode.com/problems/add-digits/",
      note: "Easy. A loop with // and % is enough; the constant-time formula is optional.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between == and is?",
      answer:
        "== compares values: do the two objects have equal contents? is compares identity: are they the same object in memory? Two separate lists with the same items are equal but not identical. Use `is` for None (and other singletons) and == for everything else. Results such as `a is b` for small integers or short strings depend on interpreter caching, so never rely on them.",
      code: `a = [1, 2]
b = [1, 2]
c = a
print(a == b)   # -> True
print(a is b)   # -> False
print(a is c)   # -> True`,
      followUps: ["Why is `x is None` preferred over `x == None`?"],
    },
    {
      question: "What is the difference between /, // and %, especially for negative numbers?",
      answer:
        "/ is true division and always returns a float. // is floor division: it rounds down toward negative infinity, so -7 // 2 is -4, not -3. % returns the remainder with the sign of the divisor, chosen so that a == (a // b) * b + a % b always holds. This makes % useful for wrapping an index into a range even when the index is negative.",
      code: `print(7 / 2)        # -> 3.5
print(7 // 2)       # -> 3
print(-7 // 2)      # -> -4
print(-7 % 2)       # -> 1
print(divmod(125, 60))   # -> (2, 5)
print(-1 % 5)       # -> 4`,
      followUps: [
        "How would you get the last digit of a positive integer, and remove it?",
        "How would you divide and round toward zero instead?",
      ],
    },
    {
      question: "What is short-circuit evaluation, and do `and` and `or` always return True or False?",
      answer:
        "`and` stops at the first falsy operand and `or` stops at the first truthy one; the remaining operands are not evaluated. They return the operand where evaluation stopped, not necessarily a bool. Short-circuiting lets you guard an expression, as in `count > 0 and total / count > 10`. The `value or default` idiom is convenient, but it also replaces valid falsy values such as 0 or an empty string.",
      code: `print(0 or "default")      # -> default
print("set" or "default")  # -> set
print([] and 1 / 0)        # -> []
count = 0
print(count > 0 and 10 / count > 1)   # -> False`,
      followUps: ["When is `x or default` a bug, and what would you write instead?"],
    },
    {
      question: "How does Python decide operator precedence? What do -2 ** 2 and 1 < x < 10 mean?",
      answer:
        "Python follows a fixed precedence table: ** binds tightest (and even tighter than a unary minus on its left), then *, /, //, %, then + and -, then comparisons, then not, and, or. So -2 ** 2 is -(2 ** 2) = -4. Comparisons can be chained: 1 < x < 10 means 1 < x and x < 10, with x evaluated once. When an expression mixes and with or, add parentheses for readers even if precedence already gives the right answer.",
      code: `print(-2 ** 2)        # -> -4
print((-2) ** 2)      # -> 4
x = 5
print(1 < x < 10)     # -> True
print(True or False and False)   # -> True`,
      followUps: ["How is `not a == b` parsed?"],
    },
    {
      question: "What is wrong with `if color == \"red\" or \"blue\":`?",
      answer:
        "It is parsed as (color == \"red\") or \"blue\". When the comparison is False, the expression evaluates to \"blue\", a non-empty and therefore truthy string, so the condition is always true. Write color == \"red\" or color == \"blue\", or use membership: color in (\"red\", \"blue\"), or a set if there are many options.",
      code: `color = "green"
print(bool(color == "red" or "blue"))   # -> True
print(color in ("red", "blue"))         # -> False`,
      followUps: ["Why might a set be better than a tuple for a long list of allowed values?"],
    },
    {
      question: "How fast is the `in` operator?",
      answer:
        "It depends on the container. For lists, tuples and strings, `in` scans elements, so it is O(n) in the length. For sets and dictionaries (which check keys), it uses hashing and is O(1) on average. For a range of integers it is computed arithmetically in O(1). If you test membership repeatedly against the same large list, convert it to a set first.",
      code: `allowed = {"admin", "editor"}
print("editor" in allowed)        # -> True
print(10**9 in range(0, 10**12))  # -> True
print("ell" in "hello")           # -> True`,
      followUps: ["What does `in` check for a dictionary: keys or values?"],
    },
  ],
  mistakes: [
    "Using `is` to compare numbers or strings.",
    "Expecting -7 // 2 to be -3 (it rounds down to -4).",
    "Writing `x == a or b` instead of `x == a or x == b`.",
    "Using `value or default` when 0, False or an empty string are valid values.",
    "Forgetting that / always returns a float, then using the result as a list index.",
    "Assuming `in` is fast on a list inside a loop, creating hidden O(n²) work.",
  ],
  mastery: [
    "Predict the results of mixed operator expressions, including negative division and short-circuiting, before running them.",
    "Use quotient and remainder to solve digit, time and wrap-around problems.",
    "Write and simplify compound Boolean conditions independently.",
    "Explain equality versus identity and short-circuit behavior aloud with examples.",
    "State the cost of `in` for a list, a string, a set and a dictionary.",
  ],
  deprioritize: [
    "Advanced operator overloading and detailed bitwise algorithms. Basic bitwise operations can be revisited during Data Structures & Algorithms.",
    "The walrus operator (:=); recognize it if you see it.",
  ],
  keywords: [
    "operators",
    "expressions",
    "modulo",
    "floor division",
    "divmod",
    "precedence",
    "comparison",
    "equality",
    "identity",
    "short circuit",
    "boolean logic",
    "membership",
  ],
};

export default topic;
