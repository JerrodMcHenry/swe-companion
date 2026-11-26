import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-mutability-references-copying",
  title: "Mutability, References and Copying",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "In Python, variables are names that refer to objects, and assignment never copies. Mutable objects such as lists, dictionaries and sets can change in place, so every name and container that refers to them sees the change. Copying must be explicit, and shallow and deep copies behave differently.",
  whyItMatters:
    "Shared references cause some of the most confusing bugs in Python: a function that unexpectedly changes its caller's list, a grid where editing one row edits every row, or test data that changes between tests. Interviewers use these situations as code-reading questions, and backtracking solutions in Unit 2 depend on copying a path at the right moment. You need to explain behavior, not memorize rules.",
  prerequisites: ["Variables and Data Types", "Functions and Arguments", "Lists", "Dictionaries"],
  objectives: [
    "Explain that variables are names bound to objects and that assignment creates another reference, not a copy.",
    "Distinguish rebinding a name from mutating an object, including how += behaves for lists versus integers and strings.",
    "Identify aliasing in code and predict its effects.",
    "Create shallow copies (slicing, list(), dict(), .copy(), copy.copy) and deep copies (copy.deepcopy), and choose correctly.",
    "Build nested lists without accidentally repeating the same inner list.",
    "Predict when a function's changes to an argument are visible to the caller.",
    "Distinguish identity (is) from equality (==) using references.",
    "Explain why a tuple containing a mutable object can still change and is not hashable.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "Facts and Myths about Python names and values (article)",
      url: "https://nedbatchelder.com/text/names.html",
      provider: "Ned Batchelder",
      type: "Article",
      instructions:
        "Written. The clearest single explanation of names, values, assignment and mutation, with diagrams. Read it all (about 30 minutes).",
    },
    {
      title: "Facts and Myths about Python names and values — PyCon 2015",
      url: "https://www.youtube.com/watch?v=_AEJHKGk9ns",
      provider: "Ned Batchelder (PyCon US)",
      type: "Video",
      instructions: "Video alternative to the article (about 25 minutes). Watch the whole talk.",
    },
    {
      title: "Think Python — 9.9–9.11 Objects and values, Aliasing, List arguments",
      url: "https://allendowney.github.io/ThinkPython/chap09.html#objects-and-values",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written alternative. Read sections 9.9–9.11 only.",
    },
    {
      title: "Python Programming MOOC — References",
      url: "https://programming-26.mooc.fi/part-5/2-references",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written lesson with exercises on references, lists as arguments and copying.",
    },
    {
      title: "Python Programming FAQ — Why did changing list 'y' also change list 'x'?",
      url: "https://docs.python.org/3/faq/programming.html#why-did-changing-list-y-also-change-list-x",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Official explanation of aliasing. Also read the answers on output parameters, copying objects and creating multidimensional lists on the same page.",
    },
    {
      title: "Python Standard Library — copy: Shallow and deep copy operations",
      url: "https://docs.python.org/3/library/copy.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read the opening explanation of shallow versus deep copies; skip the sections on customizing copying.",
    },
    {
      title: "Python Tutor",
      url: "https://pythontutor.com/python-compiler.html",
      provider: "Philip Guo",
      type: "Visual explanation",
      instructions:
        "Free tool that draws names, objects and references as code runs. Paste each example on this page into it and step through until the diagrams match your prediction.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, References: Items multiplied by two; Remove the smallest; Sudoku: add number to a copy of the grid",
      url: "https://programming-26.mooc.fi/part-5/2-references",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "Predict the output of five snippets that mix assignment, mutation, slicing and function calls, then check them in Python Tutor.",
      note: "Code reading. Explain each wrong prediction in one sentence.",
    },
    {
      title: "Write a function that returns a copy of a nested settings dictionary with one nested value changed, leaving the original untouched.",
      note: "Practical task. Test that the original is unchanged; decide between a shallow and a deep copy.",
    },
    {
      title: "Fix a program that builds a 3 × 3 game board with [[\" \"] * 3] * 3.",
      note: "Debugging. Explain the cause with a reference diagram before fixing it.",
    },
    {
      title: "Explain aloud, in under two minutes, why a function can change a caller's list but not a caller's integer.",
      note: "Technical explanation practice.",
    },
  ],
  interviewQuestions: [
    {
      question: "What does assignment do in Python? Why did changing one list also change another?",
      answer:
        "Assignment binds a name to an object; it never copies. After b = a, both names refer to the same list, so mutating it through b is visible through a. To get an independent list, copy it explicitly.",
      code: `a = [1, 2, 3]
b = a            # second name for the same list
b.append(4)
print(a)         # -> [1, 2, 3, 4]
print(a is b)    # -> True
c = a.copy()
c.append(5)
print(a)         # -> [1, 2, 3, 4]`,
      followUps: ["How would you show that two names refer to the same object?"],
    },
    {
      question: "What is the difference between mutating an object and rebinding a name?",
      answer:
        "Mutating changes the object itself, for example list.append or d[key] = value, and every reference sees it. Rebinding makes a name refer to a different object and affects only that name. For immutable types, operations that look like changes, such as x += 1 or s += \"!\", create new objects and rebind. For lists, += mutates in place.",
      code: `x = 10
y = x
x += 1               # new int; y is unaffected
print(x, y)          # -> 11 10
a = [1]
b = a
a += [2]             # list += mutates in place
print(b)             # -> [1, 2]
a = a + [3]          # + builds a new list and rebinds a
print(b)             # -> [1, 2]`,
      followUps: ["Why does a_tuple[0] += [1] raise an error even though the list inside changes?"],
    },
    {
      question: "What is the difference between a shallow copy and a deep copy?",
      answer:
        "A shallow copy creates a new outer container but fills it with references to the same inner objects. A deep copy recursively copies the inner objects too. For a flat list of numbers or strings, a shallow copy is enough. For nested mutable data, such as a list of lists or a dictionary of lists, changes to inner objects leak through a shallow copy, so use copy.deepcopy or build new inner objects. Deep copies cost more time and memory.",
      code: `import copy
grid = [[1, 2], [3, 4]]
shallow = grid.copy()
deep = copy.deepcopy(grid)
grid[0].append(99)
print(shallow[0])   # -> [1, 2, 99]
print(deep[0])      # -> [1, 2]`,
      followUps: ["When would a deep copy be the wrong choice?"],
    },
    {
      question: "Why does `[[0] * 3] * 3` create a grid that behaves strangely?",
      answer:
        "Multiplying a list repeats references, not copies. [0] * 3 is fine because integers are immutable, but multiplying the outer list repeats a reference to the same inner list three times. Changing one row changes all of them. Build each row separately with a comprehension.",
      code: `bad = [[0] * 3] * 3
bad[0][0] = 1
print(bad)    # -> [[1, 0, 0], [1, 0, 0], [1, 0, 0]]
good = [[0] * 3 for _ in range(3)]
good[0][0] = 1
print(good)   # -> [[1, 0, 0], [0, 0, 0], [0, 0, 0]]`,
      followUps: ["How would you check whether two rows are the same object?"],
    },
    {
      question: "Can a function change its caller's data? How do you avoid surprising callers?",
      answer:
        "Yes, if it mutates a mutable argument, because the parameter refers to the caller's object. Rebinding the parameter has no effect outside. To avoid surprises, either return a new object and leave the input alone, or mutate deliberately and make that clear from the name and documentation, as list.sort does by returning None.",
      code: `def add_tax_in_place(prices):
    for i in range(len(prices)):
        prices[i] = round(prices[i] * 1.2, 2)

def with_tax(prices):
    return [round(p * 1.2, 2) for p in prices]

cart = [10.0, 5.0]
print(with_tax(cart), cart)   # -> [12.0, 6.0] [10.0, 5.0]
add_tax_in_place(cart)
print(cart)                   # -> [12.0, 6.0]`,
      followUps: ["In a backtracking solution, why do you append path.copy() or path[:] to the results?"],
    },
    {
      question: "Is a tuple that contains a list immutable?",
      answer:
        "The tuple itself is immutable: it always holds the same references, and you cannot reassign its items. But the list it refers to is still mutable, so the tuple's contents can appear to change. Because its contents can change, such a tuple is not hashable and cannot be a dictionary key or set member.",
      code: `t = (1, [2])
t[1].append(3)
print(t)          # -> (1, [2, 3])
try:
    hash(t)
except TypeError as error:
    print(type(error).__name__)   # -> TypeError`,
      followUps: ["What makes an object hashable?"],
    },
    {
      question: "When should you use `is` instead of ==?",
      answer:
        "Use `is` to check identity: whether two names refer to the same object, most commonly `x is None`. Use == to compare values. Two separate but equal lists are == but not `is`. Do not use `is` for numbers or strings: whether equal values share an object depends on interpreter caching and can change between versions.",
      code: `a = [1, 2]
b = [1, 2]
print(a == b, a is b)   # -> True False
value = None
print(value is None)    # -> True`,
      followUps: ["How does id() relate to is?"],
    },
  ],
  mistakes: [
    "Assuming b = a copies a list or dictionary.",
    "Using a shallow copy for nested data and then mutating inner lists.",
    "Creating grids with [[0] * n] * m.",
    "Appending a list that you keep modifying (for example a backtracking path) instead of a copy of it.",
    "Mutating an argument inside a function without making that behavior clear to callers.",
    "Comparing values with `is`.",
  ],
  mastery: [
    "Draw names, objects and references for a short snippet and predict its output.",
    "Explain aliasing, rebinding versus mutation, and shallow versus deep copies with examples.",
    "Find and fix shared-reference bugs, including the repeated-row grid bug.",
    "Decide whether a function should return a new object or mutate its argument, and justify it.",
    "Answer the interview questions above aloud without notes.",
  ],
  deprioritize: [
    "Reference counting, garbage collection and memory management internals.",
    "Customizing copying with __copy__ and __deepcopy__.",
    "Small-integer caching and string interning details.",
  ],
  keywords: [
    "mutability",
    "mutable",
    "immutable",
    "references",
    "aliasing",
    "copy",
    "shallow copy",
    "deep copy",
    "deepcopy",
    "identity",
    "pass by reference",
    "call by sharing",
    "names and values",
  ],
};

export default topic;
