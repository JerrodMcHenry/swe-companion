import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-debugging",
  title: "Python Debugging",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Debugging is the systematic process of finding why code behaves differently from what you expect and fixing the cause. It combines reading error messages, reproducing the problem with a small input, inspecting program state with print statements or a debugger, and confirming the fix with a test.",
  whyItMatters:
    "Every engineer spends a large share of their time debugging, and some employers run dedicated debugging rounds. In coding interviews, especially those without a compiler, you are expected to dry-run your code and find your own bugs before the interviewer does. This topic covers debugging your own code; Unit 5 applies the same skills to unfamiliar codebases.",
  prerequisites: ["Functions and Arguments", "Loops", "Lists"],
  objectives: [
    "Read a traceback from the bottom up: exception type and message, then the call chain to the lowest frame in your own code.",
    "Syntax errors (reported before running), runtime exceptions (raised while running) and logic errors (no error, wrong result), and how each is found.",
    "Common exceptions and their usual causes: NameError, TypeError, ValueError, IndexError, KeyError, AttributeError, ZeroDivisionError, UnboundLocalError.",
    "The debugging process: reproduce with the smallest failing input, state the expected output, form one hypothesis, inspect state, change one thing at a time, then confirm the fix with a test that failed before it.",
    "Inspecting state with print statements and with a debugger: breakpoint() and the pdb commands n, s, c, p, l and q, or an editor's visual debugger.",
    "Dry-running code by hand on small and edge-case inputs to find off-by-one, boundary and missing-branch bugs.",
    "Assertions to check assumptions while debugging.",
    "Skip for now: try/except and raising exceptions (Exception Handling, Unit 6), logging (Unit 7), profilers and remote debugging.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — debugging sections in Parts 2, 3 and 4",
      url: "https://programming-26.mooc.fi/part-2/1-programming-terminology",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read three short sections: the Debugging section of Part 2 \"Programming terminology\" (this link; print-statement debugging), the Debugging tips section of Part 3 \"Loops with conditions\" (stepping through code in Python Tutor), and The built-in debugger section of Part 4 \"The Visual Studio Code editor, Python interpreter and built-in debugging tool\" (breakpoints and stepping). Skip the rest of those pages if you already know the material. Free; no account needed to read.",
    },
    {
      title: "The Python Tutorial — 8.1 Syntax Errors and 8.2 Exceptions",
      url: "https://docs.python.org/3/tutorial/errors.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Read 8.1 and 8.2 to understand what syntax errors and tracebacks report. Stop at 8.3 Handling Exceptions; that belongs to Exception Handling in Unit 6.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 3: Exceptions",
      url: "https://cs50.harvard.edu/python/weeks/3/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative for reading errors. Watch the opening segments on syntax errors, runtime errors and ValueError. The try/except parts preview Exception Handling and are optional now.",
    },
    {
      title: "Python Standard Library — pdb: The Python Debugger",
      url: "https://docs.python.org/3/library/pdb.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference while doing the pdb tutorial exercise. Read the introduction on starting the debugger with breakpoint(), then look up the Debugger Commands n, s, c, p, l, w and q. Skip the rest.",
    },
  ],
  exercises: [
    {
      title: "pdb Tutorial: fix the dice game (spiside/pdb-tutorial)",
      url: "https://github.com/spiside/pdb-tutorial",
      note: "A small, deliberately broken dice-game project with a walkthrough of the core pdb commands (l, s, n, b, r); the README fixes one bug with you and leaves a couple more for you to find. Clone or download the repository; no account needed. It was written for older Python versions: breakpoint() (Python 3.7+) replaces import pdb; pdb.set_trace(), and ll is available.",
    },
    {
      title: "Without running it, dry-run one of your earlier solutions on an edge-case input, writing each variable's value in a table.",
      note: "Interview practice for rounds without a compiler. Then step through the same input in Python Tutor (pythontutor.com) or your debugger and compare it with your table.",
    },
    {
      title: "Next time one of your exercise solutions fails a test, debug it with the full process before changing any code.",
      note: "Reproduce the failure with the smallest input, write down the expected output, read the traceback or inspect state with print or breakpoint(), fix one thing, and keep the failing case as a test.",
    },
  ],
  interviewQuestions: [
    {
      question: "How do you read a Python traceback?",
      answer:
        "From the bottom up. The last line gives the exception type and message. Above it is the call chain, most recent call last, so the frame just above the message is where the error was raised. I find the lowest frame in my own code and ask which value on that line could cause the error; that is often not where the bad value was created. Python 3.11 and later also mark the failing expression.",
      code: `Traceback (most recent call last):
  File "report.py", line 8, in <module>
    report({"ana": [90, 80], "ben": []})
  File "report.py", line 6, in report
    print(name, average(scores))
  File "report.py", line 2, in average
    return sum(scores) / len(scores)
ZeroDivisionError: division by zero`,
      followUps: ["The error is in average(), but where should the fix go?"],
      source: { title: "The Python Tutorial — 8.2 Exceptions", url: "https://docs.python.org/3/tutorial/errors.html#exceptions" },
    },
    {
      question: "What is the difference between syntax errors, runtime errors and logic errors?",
      answer:
        "A syntax error means the code is not valid Python, such as a missing colon or bracket; Python reports it before running anything. A runtime error is an exception raised while the program runs, such as dividing by zero or using a missing key. A logic error produces no error at all, just a wrong result, so you find it only with tests, assertions or careful tracing. Logic errors are usually the hardest to find.",
      code: `def is_even(n):
    return n % 2 == 1      # logic error: no exception, wrong answer

print(is_even(4))          # -> False
try:
    [1, 2, 3][3]           # runtime error
except IndexError as error:
    print(type(error).__name__)   # -> IndexError`,
      followUps: ["Why are logic errors more dangerous in production than crashes?"],
      source: { title: "Python Programming MOOC — Programming terminology: Debugging", url: "https://programming-26.mooc.fi/part-2/1-programming-terminology" },
    },
    {
      question: "What do common exceptions such as TypeError, ValueError, KeyError and AttributeError usually mean?",
      answer:
        "TypeError: an operation got the wrong type, such as adding a str to an int or calling something that is not a function. ValueError: the type is right but the value is not, such as int(\"abc\"). IndexError and KeyError: a list index or dictionary key does not exist. AttributeError: the object lacks that attribute; a frequent cause is a None returned unexpectedly, for example by list.sort(). NameError: a name is misspelled or not yet defined.",
      code: `items = [3, 1, 2]
items = items.sort()           # sort() returns None
try:
    items.append(4)
except AttributeError as error:
    print(error)   # -> 'NoneType' object has no attribute 'append'`,
      followUps: ["How would you work out where a None came from?"],
      source: { title: "Python Docs — Built-in Exceptions: Concrete exceptions", url: "https://docs.python.org/3/library/exceptions.html#concrete-exceptions" },
    },
    {
      question: "Walk me through how you would debug a function that returns the wrong result.",
      answer:
        "Reproduce it with the smallest failing input and state the correct output. Form one hypothesis about where the values go wrong and check it by inspecting state, with a print or a breakpoint. Change one thing at a time. After fixing the cause, rerun the failing case and keep it as a test so the bug cannot return. In an interview, say each step aloud.",
      code: `def count_words(text):
    count = 0
    for i in range(len(text) - 1):
        if text[i] == " ":
            count += 1
    return count + 1

print(count_words("one two"))    # -> 2
print(count_words(""))           # -> 1
print(count_words("one  two"))   # -> 3`,
      followUps: ["Which tests above reveal bugs, and how would you rewrite the function?"],
    },
    {
      question: "When would you use print statements and when a debugger?",
      answer:
        "Prints are quick and work anywhere, so they suit checking a hypothesis about one or two values. A debugger is better when I do not yet know where to look: I can pause at a breakpoint, inspect every variable, step into calls and evaluate expressions without editing the code. breakpoint() starts pdb; editors such as VS Code do the same visually. Temporary prints come out, or become logging, before committing.",
      code: `def running_total(values):
    total = 0
    for v in values:
        breakpoint()   # pauses here: try p total, p v, n, c
        total += v
    return total`,
      followUps: ["What do the pdb commands n, s and c do?"],
      source: { title: "Python Docs — pdb: Debugger Commands", url: "https://docs.python.org/3/library/pdb.html#debugger-commands" },
    },
    {
      question: "This function should return the largest number in a list. Find the bugs and the tests that reveal them.",
      answer:
        "It has two bugs. Starting largest at 0 gives the wrong answer when every number is negative. Starting the loop at index 1 skips the first element, so [5, 1] returns 1. Initialize largest to nums[0], loop over every element, and decide what an empty list should do, such as raising ValueError like max() does. Tests: all negative numbers, the largest value first, a single element and an empty list.",
      code: `def find_max(nums):
    largest = 0
    for i in range(1, len(nums)):
        if nums[i] > largest:
            largest = nums[i]
    return largest

print(find_max([5, 1]))      # -> 1
print(find_max([-3, -7]))    # -> 0`,
      followUps: ["How would you find these bugs without running the code?"],
    },
    {
      question: "In an interview without a compiler, how do you check your code for bugs?",
      answer:
        "Dry-run it on a small, concrete input, writing down each variable's value after each line or loop iteration. Then try edge cases: empty input, one element, duplicates, negative numbers and the boundaries of every loop and condition. Check that every branch returns something and that indexes stay within range. Saying this aloud shows the interviewer how you verify your own work.",
      code: `def reverse_words(text):
    words = text.split()
    return " ".join(words[::-1])

for case in ["hello world", "", "one", "  padded  input  "]:
    print(repr(reverse_words(case)))
# -> 'world hello'
# -> ''
# -> 'one'
# -> 'input padded'`,
      followUps: ["Which edge cases would you test for a function that merges two sorted lists?"],
    },
  ],
  mistakes: [
    "Reading only the top of a traceback instead of the exception message at the bottom.",
    "Changing several things at once, so you cannot tell which change fixed or broke the code.",
    "Fixing the symptom where the error appears instead of the cause where the bad value was created.",
    "Testing only the example from the problem statement and skipping edge cases.",
    "Leaving debugging print statements or breakpoint() calls in finished code.",
    "Assuming a variable holds a certain value instead of checking it.",
  ],
  mastery: [
    "You can explain any traceback from your own code and locate the cause, not just the line that failed.",
    "You find the bugs in the count_words and find_max examples above, and the remaining bugs in the pdb tutorial's dice game, without looking at the solutions.",
    "You use both print statements and a debugger (breakpoint() and stepping) comfortably.",
    "You dry-run a function by hand on normal and edge-case inputs before running it.",
    "You add a test that fails before a fix and passes after it.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Handling exceptions with try/except/finally and raising your own exceptions; covered in Exception Handling in Unit 6.",
    "Logging configuration; covered in Logging and Configuration in Unit 7.",
    "Profilers, memory debuggers and remote debugging.",
    "Debugging unfamiliar codebases; covered in Reading and Debugging Unfamiliar Code in Unit 5.",
  ],
  keywords: [
    "debugging",
    "debugger",
    "traceback",
    "stack trace",
    "error message",
    "exception",
    "syntax error",
    "logic error",
    "breakpoint",
    "pdb",
    "print debugging",
    "off by one",
    "dry run",
    "edge cases",
  ],
};

export default topic;
