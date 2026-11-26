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
    "Variables are names bound to objects; assignment adds another reference and never copies.",
    "Rebinding a name versus mutating an object, including += on lists (mutates) versus ints and strings (new object).",
    "Aliasing: spotting when two names or containers refer to the same object, and predicting the effect.",
    "Shallow copies (slicing, list(), dict(), .copy(), copy.copy) versus deep copies (copy.deepcopy), and when each is right.",
    "Building nested lists without repeating the same inner list ([[0] * n for _ in range(m)]).",
    "Arguments are passed by assignment: a function can mutate the caller's object but cannot rebind the caller's name.",
    "Identity (is) versus equality (==); use is mainly for None.",
    "A tuple containing a mutable object can still appear to change and is not hashable.",
    "Skip for now: reference counting and garbage collection, __copy__/__deepcopy__, and small-integer caching or string interning.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "Facts and Myths about Python names and values (article)",
      url: "https://nedbatchelder.com/text/names.html",
      provider: "Ned Batchelder",
      type: "Article",
      instructions:
        "Start here. The clearest single explanation of names, values, assignment and mutation, with diagrams. Read it all (about 30 minutes). Free; no account needed.",
    },
    {
      title: "Facts and Myths about Python names and values — PyCon 2015",
      url: "https://www.youtube.com/watch?v=_AEJHKGk9ns",
      provider: "Ned Batchelder (PyCon US)",
      type: "Video",
      instructions: "Video alternative to the article, covering the same material (about 25 minutes). Watch one or the other, not both.",
    },
    {
      title: "Python Tutor",
      url: "https://pythontutor.com/python-compiler.html",
      provider: "Philip Guo",
      type: "Visual explanation",
      instructions:
        "Free tool (no account needed) that draws names, objects and references as code runs. Paste each snippet in the interview questions below into it and step through until the diagram matches your prediction.",
    },
    {
      title: "Python Standard Library — copy: Shallow and deep copy operations",
      url: "https://docs.python.org/3/library/copy.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read the opening explanation of shallow versus deep copies; skip the sections on customizing copying.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, References: Items multiplied by two; Remove the smallest; Sudoku: add number to a copy of the grid; Transpose a matrix",
      url: "https://programming-26.mooc.fi/part-5/2-references",
      note: "Read the References section first. These exercises practise returning a new list versus changing the argument, copying a nested grid and modifying a matrix in place. Instructions are readable without an account; submitting requires a free MOOC.fi account and the VS Code TMC plugin.",
    },
    {
      title: "Subsets (LeetCode)",
      url: "https://leetcode.com/problems/subsets/",
      note: "Optional stretch and a preview of backtracking in Unit 2. Append path[:] (a copy), not path, to the results, and explain what goes wrong without the copy. LeetCode needs a free account to submit.",
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
      source: { title: "Python FAQ — Why did changing list 'y' also change list 'x'?", url: "https://docs.python.org/3/faq/programming.html#why-did-changing-list-y-also-change-list-x" },
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
      source: { title: "Ned Batchelder — Facts and Myths about Python names and values", url: "https://nedbatchelder.com/text/names.html" },
    },
    {
      question: "What is the difference between a shallow copy and a deep copy?",
      answer:
        "A shallow copy creates a new outer container but fills it with references to the same inner objects. A deep copy recursively copies the inner objects too. A shallow copy is enough for a flat list of immutable values such as numbers or strings. For nested mutable data, such as a list of lists, changes to inner objects leak through a shallow copy, so use copy.deepcopy or build new inner objects, at extra time and memory cost.",
      code: `import copy
grid = [[1, 2], [3, 4]]
shallow = grid.copy()
deep = copy.deepcopy(grid)
grid[0].append(99)
print(shallow[0])   # -> [1, 2, 99]
print(deep[0])      # -> [1, 2]`,
      followUps: ["When would a deep copy be the wrong choice?"],
      source: { title: "Python Docs — copy: Shallow and deep copy operations", url: "https://docs.python.org/3/library/copy.html" },
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
      source: { title: "Python FAQ — How do I create a multidimensional list?", url: "https://docs.python.org/3/faq/programming.html#how-do-i-create-a-multidimensional-list" },
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
      source: { title: "Python FAQ — How do I write a function with output parameters (call by reference)?", url: "https://docs.python.org/3/faq/programming.html#how-do-i-write-a-function-with-output-parameters-call-by-reference" },
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
      source: { title: "Python FAQ — Why does a_tuple[i] += ['item'] raise an exception when the addition works?", url: "https://docs.python.org/3/faq/programming.html#why-does-a-tuple-i-item-raise-an-exception-when-the-addition-works" },
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
      source: { title: "Python FAQ — When can I rely on identity tests with the is operator?", url: "https://docs.python.org/3/faq/programming.html#when-can-i-rely-on-identity-tests-with-the-is-operator" },
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
    "You predict the output of every snippet on this page before checking it in Python Tutor, and can draw the names-and-objects diagram for each.",
    "You can explain aliasing, rebinding versus mutation, and shallow versus deep copies with an example of each.",
    "You complete the MOOC References exercises, and can fix the repeated-row grid bug and explain its cause.",
    "You can decide whether a function should return a new object or mutate its argument, and justify it.",
    "Skip this topic if you can already do all of the above.",
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
