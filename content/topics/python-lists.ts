import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-lists",
  title: "Lists",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A list is an ordered, mutable sequence that can hold any objects, including duplicates. In CPython it is a dynamic array: reading or writing by index is fast, adding at the end is fast, and inserting or removing near the front is slow.",
  whyItMatters:
    "Lists are the default container in Python and the input type of most array problems in coding interviews. You need to manipulate them fluently and know the cost of each operation, because choosing list.insert(0, x) or `x in some_list` inside a loop quietly turns an O(n) solution into O(n²). Basic tuple use (fixed records, multiple return values) is taught here too.",
  prerequisites: ["Variables and Data Types", "Loops", "Functions and Arguments", "Strings (for indexing and slicing)"],
  objectives: [
    "Create lists, index and slice them, including negative indexes, and modify items by index.",
    "Use append, extend, insert, pop, remove, del, index, count, reverse and clear, and know what each returns.",
    "Distinguish append from extend and from +, and remove from pop from del.",
    "Test membership and state that `x in list` is O(n).",
    "State the cost of indexing, append, insert, pop, slicing, len and sorting.",
    "Copy a list with slicing, list() or copy(), and recognize when a shallow copy is not enough.",
    "Use built-ins with lists: len, sum, min, max, sorted, reversed, enumerate, zip, any and all.",
    "Write simple list comprehensions with a condition, and know when a loop is clearer.",
    "Use tuples for fixed records and multiple return values, including unpacking.",
    "Choose between a list, a set and a dictionary for a task.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Lists",
      url: "https://programming-26.mooc.fi/part-4/3-lists",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written lesson with exercises: creating, indexing, adding, removing and searching list items.",
    },
    {
      title: "Think Python — Chapter 9: Lists",
      url: "https://allendowney.github.io/ThinkPython/chap09.html",
      provider: "Allen B. Downey",
      type: "Book",
      instructions:
        "Written alternative. Read sections 9.1–9.8 (list basics, methods, looping and sorting). Sections 9.9–9.11 on aliasing belong to Mutability, References and Copying; read them now or there.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lists (short)",
      url: "https://cs50.harvard.edu/python/shorts/lists/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Short video alternative with transcript on creating lists, append, extend, insert and remove. Follow it with the List Methods short on the same site.",
    },
    {
      title: "The Python Tutorial — More on Lists and List Comprehensions",
      url: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Read 5.1 More on Lists and 5.1.3 List Comprehensions; nested comprehensions are optional. Section 5.3 Tuples and Sequences covers tuple basics and unpacking.",
    },
    {
      title: "Time complexity of operations on built-in types — list",
      url: "https://docs.python.org/3/builtins/time-complexity.html#list",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference table of list operation costs in CPython, including the notes on amortized append. Use it to check your complexity claims.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Lists: Addition and removal; Same word twice; Arithmetic mean; The range of a list",
      url: "https://programming-26.mooc.fi/part-4/3-lists",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "Write a function that returns a new list with duplicates removed while keeping the first occurrence of each value.",
      note: "First write an O(n²) version, then an O(n) version that uses a set to remember what you have seen.",
    },
    {
      title: "Write a function that returns the second-largest distinct value in a list, without sorting.",
      note: "Decide what to return for fewer than two distinct values and test it.",
    },
    {
      title: "Rewrite three short loops as list comprehensions, and one comprehension back as a loop where the loop is clearer.",
    },
    {
      title: "Richest Customer Wealth (LeetCode)",
      url: "https://leetcode.com/problems/richest-customer-wealth/",
      note: "Easy. Nested lists; try sum() with max().",
    },
    {
      title: "Kids With the Greatest Number of Candies (LeetCode)",
      url: "https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/",
      note: "Easy. Compute the maximum once, outside the loop.",
    },
    {
      title: "Remove Element (LeetCode)",
      url: "https://leetcode.com/problems/remove-element/",
      note: "Easy. Modify the list in place; avoid calling remove() in a loop.",
    },
    {
      title: "Move Zeroes (LeetCode)",
      url: "https://leetcode.com/problems/move-zeroes/",
      note: "Easy. In-place with O(1) extra space; a first look at the two-pointer pattern from Unit 2.",
    },
  ],
  interviewQuestions: [
    {
      question: "How is a Python list implemented, and what do its common operations cost?",
      answer:
        "In CPython a list is a dynamic array of references. Indexing, assignment by index and len are O(1). append is amortized O(1): the array occasionally grows and copies, but that cost is spread over many appends. Inserting or popping at index k costs O(n - k), so working at the front is O(n). `x in list`, index(), remove(), min and max scan the list in O(n), and sort is O(n log n).",
      code: `items = [5, 3, 8]
items.append(1)      # amortized O(1)
items.insert(0, 9)   # O(n): every item shifts right
print(items)         # -> [9, 5, 3, 8, 1]
print(items.pop())   # -> 1
print(8 in items)    # -> True`,
      followUps: [
        "What does amortized O(1) mean?",
        "Which structure would you use if you needed to add and remove at both ends? (collections.deque, covered in Unit 2.)",
      ],
    },
    {
      question: "What is the difference between append and extend?",
      answer:
        "append adds its argument as one single element, so appending a list creates a nested list. extend iterates over its argument and adds each element. Both modify the list in place and return None. `a += b` behaves like extend, while `a + b` creates a new list.",
      code: `a = [1, 2]
a.append([3, 4])
print(a)          # -> [1, 2, [3, 4]]
b = [1, 2]
b.extend([3, 4])
print(b)          # -> [1, 2, 3, 4]
print(b.append(5))   # -> None`,
      followUps: ["What happens if you call extend with a string?"],
    },
    {
      question: "What is the difference between remove, pop and del?",
      answer:
        "remove(value) deletes the first matching value, raises ValueError if it is absent, and is O(n). pop(index) removes and returns the item at an index, defaulting to the last item (O(1) at the end, O(n) at the front). del deletes by index or slice and returns nothing.",
      code: `items = ["a", "b", "c", "b"]
items.remove("b")
print(items)            # -> ['a', 'c', 'b']
print(items.pop(0))     # -> a
del items[-1]
print(items)            # -> ['c']`,
      followUps: ["How would you remove every occurrence of a value efficiently?"],
    },
    {
      question: "Why doesn't `b = a` copy a list, and how do you copy one?",
      answer:
        "Assignment binds another name to the same list, so changes through either name are visible through both. a[:], list(a) and a.copy() create a new outer list (a shallow copy), but the elements are the same objects. For a list of lists, copy.deepcopy or rebuilding the inner lists is needed. The Mutability, References and Copying topic covers this in depth.",
      code: `a = [1, 2, 3]
b = a
c = a.copy()
a.append(4)
print(b)   # -> [1, 2, 3, 4]
print(c)   # -> [1, 2, 3]`,
      followUps: ["Why does `grid = [[0] * 3] * 3` produce surprising results?"],
    },
    {
      question: "What is a list comprehension, and when should you use one?",
      answer:
        "A list comprehension builds a new list from an iterable in one expression: [expression for item in iterable if condition]. Use it for simple transformations and filters, where it is shorter and often faster than an explicit loop with append. Prefer a regular loop when the logic needs several steps, side effects or nested conditions that would make the comprehension hard to read.",
      code: `nums = [3, -1, 4, -5, 9]
print([n * n for n in nums if n > 0])   # -> [9, 16, 81]
words = ["Ada", "", "Lin"]
print([w.upper() for w in words if w])  # -> ['ADA', 'LIN']`,
      followUps: ["What is the difference between a list comprehension and a generator expression?"],
    },
    {
      question: "When would you use a tuple instead of a list?",
      answer:
        "Use a tuple for a fixed group of related values, such as a coordinate or a database row, and for returning several values from a function. Tuples are immutable, so they can be dictionary keys or set members when their elements are hashable. Use a list for a collection that grows, shrinks or changes.",
      code: `def min_max(values):
    return min(values), max(values)    # returns a tuple

low, high = min_max([4, 1, 9])         # tuple unpacking
print(low, high)                       # -> 1 9
visited = {(0, 0), (0, 1)}             # tuples as set members
print((0, 1) in visited)               # -> True`,
      followUps: ["Can a tuple ever change?"],
    },
    {
      question: "How do you choose between a list, a set and a dictionary?",
      answer:
        "Use a list when order matters, duplicates are allowed or you access items by position. Use a set when you need uniqueness or fast membership tests. Use a dictionary when each key maps to a value, such as counts, positions or groups. A common interview improvement is replacing repeated `x in list` checks (O(n) each) with a set (O(1) on average).",
      code: `banned = ["spam", "scam"]          # fine for two items
banned_set = set(banned)           # better for many lookups
messages = ["hi", "spam", "hello"]
print([m for m in messages if m not in banned_set])   # -> ['hi', 'hello']`,
      followUps: ["What does converting a list to a set cost, and when is it worth it?"],
    },
  ],
  mistakes: [
    "Writing `items = items.sort()` or `items = items.append(x)`; both methods return None.",
    "Using append when extend was intended, producing a nested list.",
    "Assuming `b = a` makes a copy.",
    "Creating a grid with [[0] * cols] * rows, which repeats the same inner list.",
    "Removing items while iterating over the same list.",
    "Calling insert(0, x), pop(0) or `x in list` inside a loop without noticing the O(n) cost.",
  ],
  mastery: [
    "Manipulate lists fluently with indexing, slicing, methods and comprehensions without looking up syntax.",
    "State the time complexity of common list operations, including amortized append.",
    "Copy lists correctly and explain when a shallow copy is not enough.",
    "Explain when a set or dictionary would be a better choice than a list.",
    "Solve the linked practice problems independently and explain their complexity.",
  ],
  deprioritize: [
    "CPython's over-allocation details and memory layout.",
    "Nested comprehensions with several for clauses; write loops instead.",
    "The array module and NumPy arrays.",
    "collections.deque; it is introduced in Stacks and Queues in Unit 2.",
  ],
  keywords: [
    "list",
    "lists",
    "array",
    "dynamic array",
    "append",
    "extend",
    "pop",
    "remove",
    "slicing",
    "list comprehension",
    "tuple",
    "unpacking",
    "amortized",
  ],
};

export default topic;
