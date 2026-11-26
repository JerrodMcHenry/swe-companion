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
    "Read a traceback from the bottom up: exception type, message, then the call chain to the line in your code.",
    "Distinguish syntax errors, runtime exceptions and logic errors, and know how each is found.",
    "Recognize common exceptions (NameError, TypeError, ValueError, IndexError, KeyError, AttributeError, ZeroDivisionError, UnboundLocalError) and their usual causes.",
    "Reproduce a defect with the smallest input that triggers it.",
    "Inspect variables with print statements and with a debugger (breakpoint(), pdb or an editor's visual debugger), stepping line by line.",
    "Trace execution by hand on a small example, and find off-by-one and boundary errors.",
    "Form and test one hypothesis at a time, and use assertions to check assumptions.",
    "Confirm a fix with a test that failed before the fix.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "The Python Tutorial — Errors and Exceptions (8.1–8.2)",
      url: "https://docs.python.org/3/tutorial/errors.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Written. Read 8.1 Syntax Errors and 8.2 Exceptions to understand what error messages report. Handling exceptions (8.3 onward) belongs to Exception Handling in Unit 6.",
    },
    {
      title: "Python Programming MOOC — The Visual Studio Code editor, Python interpreter and built-in debugging tool",
      url: "https://programming-26.mooc.fi/part-4/1-vscode",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Written. Read the section on the built-in debugger: setting breakpoints, stepping through code and evaluating expressions in the debug console.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 3: Exceptions",
      url: "https://cs50.harvard.edu/python/weeks/3/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative. Watch the opening segments on syntax errors, runtime errors and ValueError. The try/except parts preview Exception Handling and are optional now.",
    },
    {
      title: "Python Standard Library — pdb: The Python Debugger",
      url: "https://docs.python.org/3/library/pdb.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Read the introduction on starting the debugger with breakpoint(), then the Debugger Commands for n, s, c, p, l, w and q. Skip the rest.",
    },
    {
      title: "Python debugging in VS Code",
      url: "https://code.visualstudio.com/docs/python/debugging",
      provider: "Microsoft",
      type: "Documentation",
      instructions:
        "Reference for a visual debugger if you use VS Code: breakpoints, stepping and watching variables. Skip remote and advanced configuration.",
    },
    {
      title: "Python Standard Library — Built-in Exceptions: Concrete exceptions",
      url: "https://docs.python.org/3/library/exceptions.html#concrete-exceptions",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Look up an unfamiliar exception when you meet it; do not read it end to end.",
    },
    {
      title: "Python Tutor",
      url: "https://pythontutor.com/python-compiler.html",
      provider: "Philip Guo",
      type: "Visual explanation",
      instructions: "Free tool that shows variables after every step. Useful for checking a hand trace of a short buggy function.",
    },
  ],
  exercises: [
    {
      title: "A function that averages each student's scores crashes for one student. Reproduce the crash with the smallest input, read the traceback, and fix it with a clear decision about empty input.",
      note: "Write the failing test first, then the fix.",
    },
    {
      title: "A function meant to count words reports one fewer word than expected for some sentences. Find the inputs that trigger it, trace the loop by hand, and fix the off-by-one error.",
      note: "Test empty text, one word, repeated spaces and trailing spaces.",
    },
    {
      title: "A function that removes duplicates from a list sometimes skips items. Identify why, using print statements or a debugger, without changing more than necessary.",
      note: "Reinforces modifying a list while iterating.",
    },
    {
      title: "A function returns None for some inputs instead of a number. Find the missing branch using the debugger to step through a failing call.",
    },
    {
      title: "Set a breakpoint with breakpoint() in a loop, and use n, s, p and c in pdb (or your editor's debugger) to watch a running total change.",
      note: "Tool practice. Ten minutes is enough; the goal is to be comfortable using a debugger.",
    },
    {
      title: "Without running it, dry-run one of your earlier solutions on an edge-case input, writing each variable's value in a table.",
      note: "Interview practice for rounds without a compiler.",
    },
  ],
  interviewQuestions: [
    {
      question: "How do you read a Python traceback?",
      answer:
        "Start at the bottom. The last line gives the exception type and message, which usually names the problem. The lines above show the chain of calls, with the most recent call last, so the frame just above the message is where the error was raised. Find the lowest frame that is in your own code, read that line, and ask which value there could cause the error. Recent Python versions also underline the failing expression.",
      code: `Traceback (most recent call last):
  File "report.py", line 8, in <module>
    report({"ana": [90, 80], "ben": []})
  File "report.py", line 6, in report
    print(name, average(scores))
  File "report.py", line 2, in average
    return sum(scores) / len(scores)
ZeroDivisionError: division by zero`,
      followUps: ["The error is in average(), but where should the fix go?"],
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
    },
    {
      question: "Walk me through how you would debug a function that returns the wrong result.",
      answer:
        "First, reproduce it reliably with the smallest input that fails, and state what the correct output should be. Then form a hypothesis about where the values go wrong, and check it by inspecting state: print the relevant variables or set a breakpoint and step through. Change one thing at a time. Once you find the cause, fix it, rerun the failing case, and add a test so the bug cannot return. In an interview, say each step aloud.",
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
        "Print statements are quick and work anywhere, and are good for checking a hypothesis about one or two values. A debugger lets you pause at a breakpoint, inspect every variable, step into function calls and evaluate expressions without editing the code, which is faster when you do not yet know where to look. Calling breakpoint() starts pdb at that line; editors such as VS Code offer the same features visually. Remove temporary prints, or use logging, before committing.",
      code: `def running_total(values):
    total = 0
    for v in values:
        breakpoint()   # pauses here: try p total, p v, n, c
        total += v
    return total`,
      followUps: ["What do the pdb commands n, s and c do?"],
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
    "Explain any traceback from your own code and locate the cause, not just the line that failed.",
    "Find and fix off-by-one, boundary, wrong-type and missing-branch bugs in short functions.",
    "Use both print statements and a debugger (breakpoint and stepping) comfortably.",
    "Dry-run a function by hand on normal and edge-case inputs before running it.",
    "Add a test that fails before a fix and passes after it.",
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
