import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-operators-expressions",
  title: "Operators and Expressions",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Operators combine values into expressions: arithmetic, comparison, Boolean, membership and identity. Knowing exactly what each returns and in what order Python evaluates them lets you read and write code without trial and error.",
  whyItMatters:
    "Floor division and modulo appear constantly in coding problems (digits, wrapping indexes, even/odd, time conversion), and short-circuit evaluation is how you write safe conditions such as checking for None before using a value. Interviewers often ask you to predict what a short expression returns, and a misunderstanding of `is`, `or` or precedence is a common source of real bugs.",
  prerequisites: ["Variables and Data Types"],
  objectives: [
    "Arithmetic: +, -, *, ** and the three division operators. / always returns a float; // floors toward negative infinity (-7 // 2 == -4); % takes the sign of the divisor, so a == (a // b) * b + a % b. divmod() returns both.",
    "Comparisons, including chained comparisons: 0 <= i < n means 0 <= i and i < n, with i evaluated once.",
    "Equality (==) compares values; identity (is) checks for the same object. Use `is` only for None and other singletons.",
    "Boolean operators short-circuit, and `and`/`or` return one of their operands, not necessarily True or False. Know when `value or default` wrongly replaces 0 or \"\".",
    "Membership (in, not in): O(n) for lists, tuples and strings; O(1) on average for sets and dictionary keys.",
    "Precedence: ** binds tighter than a unary minus on its left (-2 ** 2 == -4); comparisons before not, and, or. Add parentheses for readers.",
    "Skip for now: bitwise algorithms, operator overloading and the walrus operator (:=) beyond recognizing it.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Part 1: Arithmetic operations",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read the whole section (the operator table with /, //, % and **, precedence, and numbers from input) and do its exercises. It does not cover negative floor division, identity or short-circuiting; the two references below fill those gaps. Free; reading needs no account, submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 1: Conditionals",
      url: "https://cs50.harvard.edu/python/weeks/1/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative for comparison and Boolean operators. Watch the parts the notes title \"or\", \"and\" and \"Modulo\"; the rest of the lecture belongs to Conditional Statements. Free, no account needed.",
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
      url: "https://docs.python.org/3/reference/expressions.html#comparisons",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Read only 6.10 Comparisons (including 6.10.2 Membership and 6.10.3 Identity), 6.11 Boolean operations and the 6.17 Operator precedence table. Skip the rest of the chapter.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Arithmetic operations: Seconds in a day; Sum and product; Students in groups",
      url: "https://programming-26.mooc.fi/part-1/4-arithmetic-operations",
      note: "Arithmetic on converted input; Students in groups needs integer division that rounds up. Instructions are readable without an account; submitting requires a free MOOC.fi account.",
    },
    {
      title: "Currency Exchange (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/currency-exchange",
      note: "Choosing between /, // and % and converting between int and float, with automated tests. Solving needs a free Exercism account.",
    },
    {
      title: "Ghost Gobble Arcade Game (Exercism, Python track)",
      url: "https://exercism.org/tracks/python/exercises/ghost-gobble-arcade-game",
      note: "Expressing rules with and, or and not. Solving needs a free Exercism account.",
    },
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
      source: { title: "Python Language Reference — Identity comparisons", url: "https://docs.python.org/3/reference/expressions.html#is-not" },
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
      source: { title: "Python Programming FAQ — Why does -22 // 10 return -3?", url: "https://docs.python.org/3/faq/programming.html#why-does-22-10-return-3" },
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
      source: { title: "Python Language Reference — Boolean operations", url: "https://docs.python.org/3/reference/expressions.html#boolean-operations" },
    },
    {
      question: "How does Python decide operator precedence? What do -2 ** 2 and 1 < x < 10 mean?",
      answer:
        "By a fixed precedence table: arithmetic before comparisons, comparisons before not, and, or. ** binds tighter than a unary minus on its left, so -2 ** 2 is -(2 ** 2) = -4. Comparisons chain: 1 < x < 10 means 1 < x and x < 10, with x evaluated once. When an expression mixes and with or, I add parentheses for readers even if precedence already gives the right answer.",
      code: `print(-2 ** 2)        # -> -4
print((-2) ** 2)      # -> 4
x = 5
print(1 < x < 10)     # -> True
print(True or False and False)   # -> True`,
      followUps: ["How is `not a == b` parsed?"],
      source: { title: "Python Language Reference — Operator precedence", url: "https://docs.python.org/3/reference/expressions.html#operator-precedence" },
    },
    {
      question: "What is wrong with `if color == \"red\" or \"blue\":`?",
      answer:
        "It is parsed as (color == \"red\") or \"blue\". When the comparison is False, the expression evaluates to \"blue\", a non-empty and therefore truthy string, so the condition is always true. Write color == \"red\" or color == \"blue\", or use membership: color in (\"red\", \"blue\"), or a set if there are many options.",
      code: `color = "green"
print(bool(color == "red" or "blue"))   # -> True
print(color in ("red", "blue"))         # -> False`,
      followUps: ["Why might a set be better than a tuple for a long list of allowed values?"],
      source: { title: "Python Language Reference — Boolean operations", url: "https://docs.python.org/3/reference/expressions.html#boolean-operations" },
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
      source: { title: "Python Docs — Time complexity of operations on built-in types", url: "https://docs.python.org/3/builtins/time-complexity.html" },
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
    "You complete the MOOC and Exercism exercises above and Palindrome Number without help.",
    "Without running them, you predict the results of the snippets in the interview questions, including negative // and %, short-circuiting and -2 ** 2.",
    "You can explain == versus is and short-circuit evaluation aloud with an example of each.",
    "You can state the cost of `in` for a list, a string, a set and a dictionary.",
    "Skip this topic if you can already do all of the above.",
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
