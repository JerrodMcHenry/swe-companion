import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Data model & types",
    question: "Is Python statically or dynamically typed?",
    answer: "Dynamically typed: types belong to objects, not to variable names, and are checked while the program runs. The same name can refer to an int and later to a str. Python is also strongly typed: it will not silently combine incompatible types, so adding a string and an integer raises a TypeError instead of guessing.",
    code: `x = 5
x = "five"           # allowed: the name now refers to a str
try:
    "1" + 1
except TypeError as error:
    print(type(error).__name__)   # -> TypeError`,
    followUps: ["What is the difference between dynamic typing and weak typing?","Do type hints change how Python behaves at runtime?"],
    source: { title: "Python Language Reference — Objects, values and types", url: "https://docs.python.org/3/reference/datamodel.html#objects-values-and-types" },
  },
  {
    group: "Data model & types",
    question: "What is the difference between type() and isinstance()?",
    answer: "type(x) returns the exact class of an object. isinstance(x, cls) checks whether x is an instance of cls or of a subclass, and accepts a tuple of classes. Prefer isinstance for checks because it respects inheritance. A common surprise: bool is a subclass of int, so isinstance(True, int) is True.",
    code: `print(type(3) == int)            # -> True
print(isinstance(True, int))     # -> True
print(type(True) == int)         # -> False
print(isinstance(3.0, (int, float)))  # -> True`,
    followUps: ["When would checking the exact type be appropriate?"],
    source: { title: "Python Docs — Built-in functions: isinstance()", url: "https://docs.python.org/3/library/functions.html#isinstance" },
  },
  {
    group: "Data model & types",
    question: "What is None, and how should you check for it?",
    answer: "None is a single special object that represents the absence of a value. A function without a return statement returns None. Check for it with `is None`, because there is only one None object and `is` cannot be fooled by objects that define their own equality. None is falsy, but it is not equal to 0, False or an empty string.",
    code: `def find(items, target):
    for item in items:
        if item == target:
            return item      # falls through and returns None if not found

result = find([1, 2, 3], 5)
print(result is None)   # -> True
print(None == 0)        # -> False`,
    followUps: ["Why might `if result:` be the wrong check when 0 is a valid result?"],
    source: { title: "PEP 8 — Programming Recommendations (comparisons to None)", url: "https://peps.python.org/pep-0008/#programming-recommendations" },
  },
  {
    group: "Data model & types",
    question: "What is truthiness? Why does bool(\"False\") evaluate to True?",
    answer: "Every object can be used in a condition. False, None, numeric zero and empty containers (\"\", [], {}, set(), range(0)) are falsy; almost everything else is truthy. bool(\"False\") is True because it is a non-empty string; Python does not read the text. To parse text such as \"true\" or \"false\", compare the string explicitly.",
    code: `print(bool("False"))   # -> True
print(bool(""))        # -> False
print(bool([0]))       # -> True
print(bool(0.0))       # -> False`,
    followUps: ["When is `if items:` clearer than `if len(items) > 0:`, and when is it ambiguous?"],
    source: { title: "Python Docs — Truth Value Testing", url: "https://docs.python.org/3/library/stdtypes.html#truth-value-testing" },
  },
  {
    group: "Data model & types",
    question: "Why is 0.1 + 0.2 not equal to 0.3, and how should you compare floats?",
    answer: "Floats are stored in binary, and most decimal fractions such as 0.1 cannot be represented exactly, so small rounding errors appear. Compare floats with a tolerance, for example math.isclose. Use integers (such as cents) or the decimal module when exact decimal arithmetic matters, as with money. Python integers, by contrast, have arbitrary precision and do not overflow.",
    code: `import math
print(0.1 + 0.2 == 0.3)              # -> False
print(math.isclose(0.1 + 0.2, 0.3))  # -> True
print(2 ** 100 > 10 ** 30)           # -> True`,
    followUps: ["How would you store prices in an application?"],
    source: { title: "The Python Tutorial — Floating-Point Arithmetic: Issues and Limitations", url: "https://docs.python.org/3/tutorial/floatingpoint.html" },
  },
  {
    group: "Data model & types",
    question: "Which built-in types are mutable and which are immutable?",
    answer: "int, float, bool, str, tuple and None are immutable: operations that seem to change them create new objects. list, dict and set are mutable: they can be changed in place, and every name referring to them sees the change. This matters for dictionary keys, default arguments and shared data; it is covered in depth in Mutability, References and Copying.",
    code: `s = "hi"
t = s
s += "!"          # creates a new string and rebinds s
print(t)          # -> hi

a = [1]
b = a
a.append(2)       # changes the one shared list
print(b)          # -> [1, 2]`,
    followUps: ["Is a tuple that contains a list immutable?"],
    source: { title: "Python Language Reference — Objects, values and types", url: "https://docs.python.org/3/reference/datamodel.html#objects-values-and-types" },
  },
  {
    group: "Data model & types",
    question: "What is the difference between /, // and %, especially for negative numbers?",
    answer: "/ is true division and always returns a float. // is floor division: it rounds down toward negative infinity, so -7 // 2 is -4, not -3. % returns the remainder with the sign of the divisor, chosen so that a == (a // b) * b + a % b always holds. This makes % useful for wrapping an index into a range even when the index is negative.",
    code: `print(7 / 2)        # -> 3.5
print(7 // 2)       # -> 3
print(-7 // 2)      # -> -4
print(-7 % 2)       # -> 1
print(divmod(125, 60))   # -> (2, 5)
print(-1 % 5)       # -> 4`,
    followUps: ["How would you get the last digit of a positive integer, and remove it?","How would you divide and round toward zero instead?"],
    source: { title: "Python Programming FAQ — Why does -22 // 10 return -3?", url: "https://docs.python.org/3/faq/programming.html#why-does-22-10-return-3" },
  },
  {
    group: "Data model & types",
    question: "What is short-circuit evaluation, and do `and` and `or` always return True or False?",
    answer: "`and` stops at the first falsy operand and `or` stops at the first truthy one; the remaining operands are not evaluated. They return the operand where evaluation stopped, not necessarily a bool. Short-circuiting lets you guard an expression, as in `count > 0 and total / count > 10`. The `value or default` idiom is convenient, but it also replaces valid falsy values such as 0 or an empty string.",
    code: `print(0 or "default")      # -> default
print("set" or "default")  # -> set
print([] and 1 / 0)        # -> []
count = 0
print(count > 0 and 10 / count > 1)   # -> False`,
    followUps: ["When is `x or default` a bug, and what would you write instead?"],
    source: { title: "Python Language Reference — Boolean operations", url: "https://docs.python.org/3/reference/expressions.html#boolean-operations" },
  },
  {
    group: "Data model & types",
    question: "What is wrong with `if color == \"red\" or \"blue\":`?",
    answer: "It is parsed as (color == \"red\") or \"blue\". When the comparison is False, the expression evaluates to \"blue\", a non-empty and therefore truthy string, so the condition is always true. Write color == \"red\" or color == \"blue\", or use membership: color in (\"red\", \"blue\"), or a set if there are many options.",
    code: `color = "green"
print(bool(color == "red" or "blue"))   # -> True
print(color in ("red", "blue"))         # -> False`,
    followUps: ["Why might a set be better than a tuple for a long list of allowed values?"],
    source: { title: "Python Language Reference — Boolean operations", url: "https://docs.python.org/3/reference/expressions.html#boolean-operations" },
  },
  {
    group: "Data model & types",
    question: "What does assignment do in Python? Why did changing one list also change another?",
    answer: "Assignment binds a name to an object; it never copies. After b = a, both names refer to the same list, so mutating it through b is visible through a. To get an independent list, copy it explicitly.",
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
    group: "Data model & types",
    question: "What is the difference between mutating an object and rebinding a name?",
    answer: "Mutating changes the object itself, for example list.append or d[key] = value, and every reference sees it. Rebinding makes a name refer to a different object and affects only that name. For immutable types, operations that look like changes, such as x += 1 or s += \"!\", create new objects and rebind. For lists, += mutates in place.",
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
    group: "Data model & types",
    question: "What is the difference between a shallow copy and a deep copy?",
    answer: "A shallow copy creates a new outer container but fills it with references to the same inner objects. A deep copy recursively copies the inner objects too. A shallow copy is enough for a flat list of immutable values such as numbers or strings. For nested mutable data, such as a list of lists, changes to inner objects leak through a shallow copy, so use copy.deepcopy or build new inner objects, at extra time and memory cost.",
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
    group: "Data model & types",
    question: "Why does `[[0] * 3] * 3` create a grid that behaves strangely?",
    answer: "Multiplying a list repeats references, not copies. [0] * 3 is fine because integers are immutable, but multiplying the outer list repeats a reference to the same inner list three times. Changing one row changes all of them. Build each row separately with a comprehension.",
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
    group: "Data model & types",
    question: "Is a tuple that contains a list immutable?",
    answer: "The tuple itself is immutable: it always holds the same references, and you cannot reassign its items. But the list it refers to is still mutable, so the tuple's contents can appear to change. Because its contents can change, such a tuple is not hashable and cannot be a dictionary key or set member.",
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
    group: "Data model & types",
    question: "When should you use `is` instead of ==?",
    answer: "Use `is` to check identity: whether two names refer to the same object, most commonly `x is None`. Use == to compare values. Two separate but equal lists are == but not `is`. Do not use `is` for numbers or strings: whether equal values share an object depends on interpreter caching and can change between versions.",
    code: `a = [1, 2]
b = [1, 2]
print(a == b, a is b)   # -> True False
value = None
print(value is None)    # -> True`,
    followUps: ["How does id() relate to is?"],
    source: { title: "Python FAQ — When can I rely on identity tests with the is operator?", url: "https://docs.python.org/3/faq/programming.html#when-can-i-rely-on-identity-tests-with-the-is-operator" },
  },
  {
    group: "Built-in collections",
    question: "Why are strings immutable, and what does that mean in practice?",
    answer: "Once created, a string cannot be changed: assigning to s[0] raises a TypeError, and methods such as upper() or replace() return new strings. Immutability means strings can be shared safely, used as dictionary keys and set members because their hash never changes, and stored efficiently. The practical consequence is that you must capture the result of a string method, and that building a string piece by piece creates new objects.",
    code: `s = "java"
try:
    s[0] = "J"
except TypeError as error:
    print(type(error).__name__)   # -> TypeError
s.upper()          # result discarded; s is unchanged
print(s)           # -> java
s = s.capitalize()
print(s)           # -> Java`,
    followUps: ["How would you change one character in a string?"],
    source: { title: "Python Design FAQ — Why are Python strings immutable?", url: "https://docs.python.org/3/faq/design.html#why-are-python-strings-immutable" },
  },
  {
    group: "Built-in collections",
    question: "How does slicing work? What does s[::-1] do?",
    answer: "s[start:stop:step] returns a new string from start up to but not including stop, moving by step. Omitted values default to the beginning, the end and 1; negative indexes count from the end. A negative step walks backwards, so s[::-1] is a reversed copy. Slices clamp out-of-range bounds instead of raising, whereas indexing a single position out of range raises IndexError. A slice copies its characters, so it costs O(k) for k characters.",
    code: `s = "interview"
print(s[0:5])     # -> inter
print(s[-4:])     # -> view
print(s[::-1])    # -> weivretni
print(s[2:100])   # -> terview
try:
    s[100]
except IndexError as error:
    print(type(error).__name__)   # -> IndexError`,
    followUps: ["What is the time and space cost of checking a palindrome with s == s[::-1]?"],
    source: { title: "The Python Tutorial — 3.1.2 Text (indexing and slicing)", url: "https://docs.python.org/3/tutorial/introduction.html#text" },
  },
  {
    group: "Built-in collections",
    question: "Why can building a string with += in a loop be slow? What should you do instead?",
    answer: "Each concatenation creates a new string and copies the existing characters, so building a string of total length n piece by piece can take O(n²) time. CPython sometimes optimizes s += t in place, but that is an implementation detail you should not rely on. Collect the pieces in a list and call ''.join(pieces) once, which is O(n) in the total length.",
    code: `words = ["fast", "string", "building"]
pieces = []
for word in words:
    pieces.append(word.upper())
print(" ".join(pieces))   # -> FAST STRING BUILDING`,
    followUps: ["What is the time complexity of ''.join(pieces)?"],
    source: { title: "Python Docs — Common sequence operations (notes on concatenating immutable sequences)", url: "https://docs.python.org/3/library/stdtypes.html#common-sequence-operations" },
  },
  {
    group: "Built-in collections",
    question: "How is a Python list implemented, and what do its common operations cost?",
    answer: "In CPython a list is a dynamic array of references. Indexing, assignment by index and len are O(1). append is amortized O(1): the array occasionally grows and copies, but that cost is spread over many appends. Inserting or popping at index k costs O(n - k), so working at the front is O(n). `x in list`, index(), remove(), min and max scan the list in O(n), and sort is O(n log n).",
    code: `items = [5, 3, 8]
items.append(1)      # amortized O(1)
items.insert(0, 9)   # O(n): every item shifts right
print(items)         # -> [9, 5, 3, 8, 1]
print(items.pop())   # -> 1
print(8 in items)    # -> True`,
    followUps: ["What does amortized O(1) mean?","Which structure would you use if you needed to add and remove at both ends? (collections.deque, covered in Unit 2.)"],
    source: { title: "Python Design FAQ — How are lists implemented in CPython?", url: "https://docs.python.org/3/faq/design.html#how-are-lists-implemented-in-cpython" },
  },
  {
    group: "Built-in collections",
    question: "What is a list comprehension, and when should you use one?",
    answer: "A list comprehension builds a new list from an iterable in one expression: [expression for item in iterable if condition]. Use it for simple transformations and filters, where it is shorter and often faster than an explicit loop with append. Prefer a regular loop when the logic needs several steps, side effects or nested conditions that would make the comprehension hard to read.",
    code: `nums = [3, -1, 4, -5, 9]
print([n * n for n in nums if n > 0])   # -> [9, 16, 81]
words = ["Ada", "", "Lin"]
print([w.upper() for w in words if w])  # -> ['ADA', 'LIN']`,
    followUps: ["What is the difference between a list comprehension and a generator expression?"],
    source: { title: "The Python Tutorial — 5.1.3 List Comprehensions", url: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions" },
  },
  {
    group: "Built-in collections",
    question: "When would you use a tuple instead of a list?",
    answer: "Use a tuple for a fixed group of related values, such as a coordinate or a database row, and for returning several values from a function. Tuples are immutable, so they can be dictionary keys or set members when their elements are hashable. Use a list for a collection that grows, shrinks or changes.",
    code: `def min_max(values):
    return min(values), max(values)    # returns a tuple

low, high = min_max([4, 1, 9])         # tuple unpacking
print(low, high)                       # -> 1 9
visited = {(0, 0), (0, 1)}             # tuples as set members
print((0, 1) in visited)               # -> True`,
    followUps: ["Can a tuple ever change?"],
    source: { title: "The Python Tutorial — 5.3 Tuples and Sequences", url: "https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences" },
  },
  {
    group: "Built-in collections",
    question: "How do you choose between a list, a set and a dictionary?",
    answer: "Use a list when order matters, duplicates are allowed or you access items by position. Use a set when you need uniqueness or fast membership tests. Use a dictionary when each key maps to a value, such as counts, positions or groups. A common interview improvement is replacing repeated `x in list` checks (O(n) each) with a set (O(1) on average).",
    code: `banned = ["spam", "scam"]          # fine for two items
banned_set = set(banned)           # better for many lookups
messages = ["hi", "spam", "hello"]
print([m for m in messages if m not in banned_set])   # -> ['hi', 'hello']`,
    followUps: ["What does converting a list to a set cost, and when is it worth it?"],
    source: { title: "Python Docs — Time complexity of built-in types", url: "https://docs.python.org/3/builtins/time-complexity.html#list" },
  },
  {
    group: "Built-in collections",
    question: "How does a Python dictionary work?",
    answer: "It is a hash table. Storing a key computes hash(key) to choose a slot; a lookup hashes the key again, goes to that slot and confirms the match with ==. That is why lookups are fast on average and why keys must be hashable. Since Python 3.7, dictionaries preserve insertion order.",
    followUps: ["What happens when two different keys produce the same hash?"],
    source: { title: "Python Glossary — hashable", url: "https://docs.python.org/3/glossary.html#term-hashable" },
  },
  {
    group: "Built-in collections",
    question: "What are the average-case and worst-case costs of dictionary operations?",
    answer: "Lookup, insertion, deletion and key in d are O(1) on average, assuming a reasonable hash function and O(1) hashing of the key; insertion is amortized because the table occasionally resizes. If many keys collide, they degrade to O(n). Say \"O(1) on average\", not just \"O(1)\".",
    followUps: ["Does hashing a long string cost O(1)?"],
    source: { title: "Python Docs — Time complexity of built-in types: dict", url: "https://docs.python.org/3/builtins/time-complexity.html#dict-frozendict" },
  },
  {
    group: "Built-in collections",
    question: "What types can be dictionary keys?",
    answer: "Any hashable object. Most immutable built-ins (int, str, frozenset) are hashable; lists, dictionaries and sets are not. Immutability is not the same thing: a tuple is hashable only if everything inside it is, so a tuple containing a list cannot be a key. Values can be anything.",
    code: `print({("A", "B"): 5}[("A", "B")])   # -> 5
try:
    {(1, [2]): "x"}                     # tuple is immutable, but holds a list
except TypeError as error:
    print(type(error).__name__)         # -> TypeError`,
    followUps: ["Why would a mutable key break lookups?"],
    source: { title: "Python Glossary — hashable", url: "https://docs.python.org/3/glossary.html#term-hashable" },
  },
  {
    group: "Built-in collections",
    question: "What is the difference between d[key], d.get(key) and key in d?",
    answer: "d[key] returns the value or raises KeyError if it is missing — use it when the key must exist. d.get(key, default) returns the default (None if omitted) instead. key in d checks keys, not values, in O(1) on average; value in d.values() is an O(n) scan.",
    code: `user = {"name": "Ana"}
print(user.get("email"), "name" in user, "Ana" in user)   # -> None True False`,
    followUps: ["When is raising KeyError better than returning a default?"],
    source: { title: "Python Docs — Mapping types: dict.get", url: "https://docs.python.org/3/library/stdtypes.html#dict.get" },
  },
  {
    group: "Built-in collections",
    question: "How do you count frequencies and group items with dictionaries?",
    answer: "Count with counts[k] = counts.get(k, 0) + 1 or collections.Counter (which adds most_common). Group by appending to a list per key with setdefault or collections.defaultdict(list). Both are O(n) on average. Be able to write the plain version too, in case you are asked not to use library helpers.",
    followUps: ["How would you find the k most frequent items?"],
    source: { title: "Python Docs — collections.Counter", url: "https://docs.python.org/3/library/collections.html#collections.Counter" },
  },
  {
    group: "Built-in collections",
    question: "How do you iterate over a dictionary, and why can deleting during iteration fail?",
    answer: "Iterating yields keys; use .items() for (key, value) pairs. Adding or removing keys while iterating raises RuntimeError because the size changed. Iterate over a copy such as list(d), or build a new dictionary with a comprehension.",
    followUps: ["Is changing the value of an existing key during iteration allowed?"],
    source: { title: "The Python Tutorial — 5.6 Looping Techniques", url: "https://docs.python.org/3/tutorial/datastructures.html#looping-techniques" },
  },
  {
    group: "Built-in collections",
    question: "Why is membership testing faster in a set than in a list?",
    answer: "A list must compare the target with each element in turn, which is O(n). A set hashes the target to find where it would be stored and checks only that location, which is O(1) on average. In the worst case, if many items collide on the same hash, lookups degrade to O(n), but with built-in types this is rare. Building the set costs O(n) once, so it pays off when you perform many lookups.",
    code: `names = ["ana", "ben", "cy"] * 1000
lookup = set(names)
print(len(names), len(lookup))   # -> 3000 3
print("cy" in lookup)            # -> True`,
    followUps: ["For a single lookup, is converting a list to a set worth it?"],
    source: { title: "Python Docs — Time complexity of built-in types: set", url: "https://docs.python.org/3/builtins/time-complexity.html#set-frozenset" },
  },
  {
    group: "Built-in collections",
    question: "How do you remove duplicates from a list? Does the order matter?",
    answer: "set(items) removes duplicates in O(n) on average but does not keep the original order. To keep the first occurrence of each item in order, use dict.fromkeys(items), because dictionaries preserve insertion order, or loop with a seen set. All of these require the items to be hashable.",
    code: `items = ["b", "a", "b", "c", "a"]
print(sorted(set(items)))           # -> ['a', 'b', 'c']
print(list(dict.fromkeys(items)))   # -> ['b', 'a', 'c']`,
    followUps: ["How would you remove duplicates from a list of lists?"],
    source: { title: "Python FAQ — How do you remove duplicates from a list?", url: "https://docs.python.org/3/faq/programming.html#how-do-you-remove-duplicates-from-a-list" },
  },
  {
    group: "Built-in collections",
    question: "How do set operations work, and what do they cost?",
    answer: "a | b is the union (items in either), a & b the intersection (in both), a - b the difference (in a but not b) and a ^ b the symmetric difference (in exactly one). Union is O(len(a) + len(b)), intersection O(min(len(a), len(b))) and difference O(len(a)), on average. Each returns a new set; the method forms (union, intersection) also accept any iterable.",
    code: `a = {1, 2, 3}
b = {3, 4}
print(sorted(a | b))   # -> [1, 2, 3, 4]
print(a & b)           # -> {3}
print(sorted(a - b))   # -> [1, 2]
print(sorted(a ^ b))   # -> [1, 2, 4]`,
    followUps: ["How would you check whether one set is contained in another?"],
    source: { title: "Python Docs — Time complexity of built-in types: set", url: "https://docs.python.org/3/builtins/time-complexity.html#set-frozenset" },
  },
  {
    group: "Built-in collections",
    question: "What is the difference between sorted() and list.sort()?",
    answer: "sorted(iterable) accepts any iterable and returns a new sorted list, leaving the input unchanged. list.sort() works only on lists, sorts in place and returns None, a deliberate signal that it mutated the list. Use sorted when you need to keep the original or are sorting something other than a list, and sort when you own the list and want to avoid an extra copy.",
    code: `scores = [70, 95, 82]
ranked = sorted(scores)
print(ranked, scores)   # -> [70, 82, 95] [70, 95, 82]
result = scores.sort()
print(result, scores)   # -> None [70, 82, 95]
print(sorted("cab"))    # -> ['a', 'b', 'c']`,
    followUps: ["What bug does `items = items.sort()` cause?"],
    source: { title: "Python Design FAQ — Why doesn't list.sort() return the sorted list?", url: "https://docs.python.org/3/faq/design.html#why-doesn-t-list-sort-return-the-sorted-list" },
  },
  {
    group: "Built-in collections",
    question: "How do key functions work?",
    answer: "key is a function called once on each item; the items are then ordered by the returned values instead of the items themselves. Built-ins such as len or str.lower work directly, and a lambda handles fields of a record. Because the key is computed once per item, an expensive key costs O(n) calls, not O(n log n).",
    code: `words = ["banana", "Kiwi", "apple"]
print(sorted(words))                  # -> ['Kiwi', 'apple', 'banana']
print(sorted(words, key=str.lower))   # -> ['apple', 'banana', 'Kiwi']
print(sorted(words, key=len))         # -> ['Kiwi', 'apple', 'banana']
people = [{"name": "Lin", "age": 31}, {"name": "Ade", "age": 25}]
print([p["name"] for p in sorted(people, key=lambda p: p["age"])])   # -> ['Ade', 'Lin']`,
    followUps: ["What happens if two items produce the same key?"],
    source: { title: "Python Sorting HOWTO — Key Functions", url: "https://docs.python.org/3/howto/sorting.html#key-functions" },
  },
  {
    group: "Built-in collections",
    question: "How do you sort by several criteria, some ascending and some descending?",
    answer: "Return a tuple from the key: tuples compare element by element, so the first field decides and later fields break ties. To reverse a numeric field, negate it inside the tuple. For non-numeric fields that must be descending, sort in several stable passes, starting with the least important field.",
    code: `players = [("ana", 90), ("ben", 85), ("cy", 90)]
# score descending, then name ascending
print(sorted(players, key=lambda p: (-p[1], p[0])))
# -> [('ana', 90), ('cy', 90), ('ben', 85)]`,
    followUps: ["How would you sort names descending and scores ascending?"],
    source: { title: "Python Sorting HOWTO — Sort Stability and Complex Sorts", url: "https://docs.python.org/3/howto/sorting.html#sort-stability-and-complex-sorts" },
  },
  {
    group: "Built-in collections",
    question: "What does it mean that Python's sort is stable, and why is it useful?",
    answer: "A stable sort keeps items with equal keys in the order they had before sorting. Python guarantees stability for both sorted and list.sort. This lets you sort by a secondary field first and the primary field second, and it keeps an existing meaningful order, such as arrival time, among ties. reverse=True also preserves the original order of equal items.",
    code: `orders = [("pear", 2), ("apple", 1), ("fig", 2), ("kiwi", 1)]
by_priority = sorted(orders, key=lambda o: o[1])
print(by_priority)
# -> [('apple', 1), ('kiwi', 1), ('pear', 2), ('fig', 2)]`,
    followUps: ["Name a sorting algorithm that is not stable."],
    source: { title: "Python Sorting HOWTO — Sort Stability and Complex Sorts", url: "https://docs.python.org/3/howto/sorting.html#sort-stability-and-complex-sorts" },
  },
  {
    group: "Built-in collections",
    question: "What do enumerate() and zip() provide?",
    answer: "enumerate(items) yields (index, item) pairs, which is clearer and less error-prone than range(len(items)); it takes an optional start value. zip(a, b) yields pairs of corresponding items and stops at the shortest input. In Python 3.10 and later, zip(a, b, strict=True) raises an error if the lengths differ.",
    code: `names = ["ana", "ben"]
scores = [91, 78, 65]
for i, name in enumerate(names, start=1):
    print(i, name)
# -> 1 ana
# -> 2 ben
print(list(zip(names, scores)))   # -> [('ana', 91), ('ben', 78)]`,
    followUps: ["Why is silently stopping at the shortest input sometimes a bug?"],
    source: { title: "Python Docs — Built-in functions: zip()", url: "https://docs.python.org/3/library/functions.html#zip" },
  },
  {
    group: "Built-in collections",
    question: "Why is removing items from a list while iterating over it a bug?",
    answer: "The loop tracks a position in the list. Removing an item shifts the following items left, so the loop skips the element that moved into the current position. Build a new list instead (often with a comprehension) or iterate over a copy.",
    code: `nums = [2, 4, 5, 6]
for n in nums:
    if n % 2 == 0:
        nums.remove(n)
print(nums)                     # -> [4, 5]
nums = [2, 4, 5, 6]
print([n for n in nums if n % 2 != 0])   # -> [5]`,
    followUps: ["What is the time complexity of removing items one at a time with list.remove()?"],
    source: { title: "The Python Tutorial — 4.2 for Statements (modifying a collection while iterating)", url: "https://docs.python.org/3/tutorial/controlflow.html#for-statements" },
  },
  {
    group: "Functions & scope",
    question: "Why are mutable default arguments dangerous?",
    answer: "Default values are evaluated once, when the function is defined, not on every call. A mutable default such as [] or {} is therefore one shared object, and changes made in one call appear in later calls. Use None as the default and create a new object inside the function.",
    code: `def add_bad(item, items=[]):
    items.append(item)
    return items

print(add_bad("a"))   # -> ['a']
print(add_bad("b"))   # -> ['a', 'b']

def add(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add("a"), add("b"))   # -> ['a'] ['b']`,
    followUps: ["Is there ever a legitimate use for a shared mutable default?"],
    source: { title: "Python Programming FAQ — Why are default values shared between objects?", url: "https://docs.python.org/3/faq/programming.html#why-are-default-values-shared-between-objects" },
  },
  {
    group: "Functions & scope",
    question: "What are *args and **kwargs?",
    answer: "In a definition, *args collects extra positional arguments into a tuple and **kwargs collects extra keyword arguments into a dictionary; the names are conventions. In a call, * unpacks a sequence into positional arguments and ** unpacks a dictionary into keyword arguments. They are useful for flexible functions and for passing arguments through to another function, but explicit parameters are clearer when you know what you need.",
    code: `def report(*args, **kwargs):
    return args, kwargs

print(report(1, 2, unit="ms"))   # -> ((1, 2), {'unit': 'ms'})
values = [3, 4]
print(max(*values, 10))          # -> 10`,
    followUps: ["In what order must regular, *args, keyword-only and **kwargs parameters appear?"],
    source: { title: "The Python Tutorial — 4.9.4 Arbitrary Argument Lists", url: "https://docs.python.org/3/tutorial/controlflow.html#arbitrary-argument-lists" },
  },
  {
    group: "Functions & scope",
    question: "Does Python pass arguments by value or by reference?",
    answer: "Neither exactly: Python passes references to objects, often called call by object reference or call by sharing. The parameter and the caller's variable refer to the same object. If the function mutates a mutable object, the caller sees the change. If the function rebinds the parameter to a new object, the caller's variable is unaffected.",
    code: `def mutate(items):
    items.append(99)       # changes the shared list

def rebind(items):
    items = [0]            # only changes the local name

data = [1]
mutate(data)
rebind(data)
print(data)                # -> [1, 99]`,
    followUps: ["How would you write a function that must not change its caller's list?"],
    source: { title: "Python Programming FAQ — How do I write a function with output parameters (call by reference)?", url: "https://docs.python.org/3/faq/programming.html#how-do-i-write-a-function-with-output-parameters-call-by-reference" },
  },
  {
    group: "Functions & scope",
    question: "What is the LEGB rule?",
    answer: "It is the order in which Python looks up a name: Local (the current function), Enclosing (any outer functions, for nested functions), Global (the module) and Built-in (names such as len and print). The first match wins. If none matches, Python raises NameError.",
    code: `x = "global"

def outer():
    x = "enclosing"
    def inner():
        return x       # found in the enclosing scope
    return inner()

print(outer())   # -> enclosing
print(len("abc"))   # -> 3`,
    followUps: ["Where would Python look first if inner() also assigned x?"],
    source: { title: "Python Language Reference — Resolution of names", url: "https://docs.python.org/3/reference/executionmodel.html#resolution-of-names" },
  },
  {
    group: "Functions & scope",
    question: "Why does UnboundLocalError occur?",
    answer: "When a function assigns to a name anywhere in its body, Python treats that name as local throughout the function, decided when the function is compiled. Reading it before the assignment then fails, even if a global with the same name exists. Fix it by passing the value in and returning the result, or, if you really mean the global, by declaring global.",
    code: `count = 0

def increment():
    count += 1     # assignment makes count local, but it has no value yet

try:
    increment()
except UnboundLocalError as error:
    print(type(error).__name__)   # -> UnboundLocalError

def increment_pure(count):
    return count + 1

print(increment_pure(count))      # -> 1`,
    followUps: ["Why does reading a global inside a function work without any declaration?"],
    source: { title: "Python FAQ — Why am I getting an UnboundLocalError when the variable has a value?", url: "https://docs.python.org/3/faq/programming.html#why-am-i-getting-an-unboundlocalerror-when-the-variable-has-a-value" },
  },
  {
    group: "Functions & scope",
    question: "How do global and nonlocal differ?",
    answer: "global name makes assignments in a function refer to the module-level name. nonlocal name makes assignments in a nested function refer to the nearest enclosing function's name. Neither is needed just to read a variable, or to mutate a mutable object such as appending to a list; they are needed only to rebind the name.",
    code: `def make_counter():
    count = 0
    def increment():
        nonlocal count
        count += 1
        return count
    return increment

counter = make_counter()
counter()
print(counter())   # -> 2`,
    followUps: ["Why can a nested function append to an enclosing list without nonlocal?"],
    source: { title: "The Python Tutorial — 9.2.1 Scopes and Namespaces Example", url: "https://docs.python.org/3/tutorial/classes.html#scopes-and-namespaces-example" },
  },
  {
    group: "Functions & scope",
    question: "Does an if statement or a for loop create a new scope?",
    answer: "No. In Python only modules, functions and classes create scopes, and comprehensions run in their own nested scope. A variable assigned inside an if block or a loop belongs to the enclosing function, and a for loop's variable still exists after the loop with its last value. Comprehension variables, however, do not leak out in Python 3.",
    code: `for i in range(3):
    pass
print(i)          # -> 2
squares = [n * n for n in range(3)]
print("n" in dir())   # -> False`,
    followUps: ["What happens to the loop variable if the loop body never runs?"],
    source: { title: "Python Language Reference — Displays for lists, sets and dictionaries (comprehension scope)", url: "https://docs.python.org/3/reference/expressions.html#displays-for-lists-sets-and-dictionaries" },
  },
  {
    group: "Functions & scope",
    question: "What is a generator, and when would you use one instead of a list?",
    answer: "A generator function uses yield; calling it returns an iterator that produces values lazily, one at a time, pausing between them. It needs constant memory instead of building the whole list, can represent an endless sequence, and can be consumed only once. Use one for large or streaming data, such as reading a big file line by line; use a list when you need indexing, len() or several passes. A generator expression, (x * x for x in data), is the lazy form of a list comprehension.",
    code: `def countdown(n):
    while n > 0:
        yield n
        n -= 1

gen = countdown(3)
print(next(gen), list(gen))   # -> 3 [2, 1]
print(list(gen))              # -> []`,
    followUps: ["How would you count the error lines in a 10 GB log file?"],
    source: { title: "Python Glossary — generator", url: "https://docs.python.org/3/glossary.html#term-generator" },
  },
  {
    group: "Functions & scope",
    question: "What is a decorator, and how do you write one?",
    answer: "A decorator is a function that takes a function and returns a replacement, usually a wrapper that adds behaviour before or after calling the original: timing, logging, caching or access checks. Writing @decorator above def f is shorthand for f = decorator(f). Use functools.wraps on the wrapper so the decorated function keeps its name and docstring.",
    code: `import functools, time

def timed(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        print(f"{func.__name__} took {time.perf_counter() - start:.3f}s")
        return result
    return wrapper

@timed
def add(a, b):
    return a + b

print(add.__name__)   # -> add`,
    followUps: ["Which standard-library decorator caches a function's results?"],
    source: { title: "Python Glossary — decorator", url: "https://docs.python.org/3/glossary.html#term-decorator" },
  },
  {
    group: "Errors, modules & type hints",
    question: "Explain try, except, else and finally. When does each run?",
    answer: "The try block runs first. If it raises an exception that matches an except clause, that handler runs. The else block runs only if try raised nothing — it keeps code that should not be protected out of try. The finally block always runs, whether there was an exception, a handled exception, or a return, and is used for cleanup.",
    code: `def divide(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("cannot divide by zero")
        return None
    else:
        print("division worked")
        return result
    finally:
        print("finished")

print(divide(6, 3))
# -> division worked
# -> finished
# -> 2.0
print(divide(1, 0))
# -> cannot divide by zero
# -> finished
# -> None`,
    followUps: ["What happens if finally contains a return statement?"],
    source: { title: "The Python Tutorial — 8.7 Defining Clean-up Actions", url: "https://docs.python.org/3/tutorial/errors.html#defining-clean-up-actions" },
  },
  {
    group: "Errors, modules & type hints",
    question: "How do you raise an exception, and when would you define a custom exception?",
    answer: "Use raise with a built-in exception that fits (ValueError for a bad value, TypeError for a wrong type, KeyError for a missing key) and a message that says what was wrong. Define a custom exception, usually a small subclass of an existing one, when callers need to handle that specific failure differently from others. Use raise … from to keep the original cause when you translate a low-level error into a domain error.",
    code: `class InsufficientFunds(ValueError):
    """Raised when a withdrawal is larger than the balance."""

try:
    raise InsufficientFunds("balance 100 is less than 500")
except InsufficientFunds as error:        # must come before a plain "except ValueError"
    print("declined:", error)             # -> declined: balance 100 is less than 500`,
    followUps: ["Why must except InsufficientFunds come before except ValueError?"],
    source: { title: "The Python Tutorial — 8.6 User-defined Exceptions and 8.5 Exception Chaining", url: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions" },
  },
  {
    group: "Errors, modules & type hints",
    question: "Why should you catch specific exceptions instead of using a bare except or except Exception?",
    answer: "A broad handler also catches bugs you did not expect — a typo that raises NameError, a wrong attribute — and hides them behind a misleading message. A bare except even catches KeyboardInterrupt and SystemExit. Catch the specific exceptions you can actually handle; let everything else propagate so it is seen and fixed. A broad handler belongs only at a top-level boundary that logs the error and responds safely.",
    code: `def total_price(items):
    try:
        return sum(item["price"] * item["qty"] for item in itmes)   # typo: itmes
    except Exception:
        return 0                                                    # hides the bug

def total_price_fixed(items):
    try:
        return sum(item["price"] * item["qty"] for item in items)
    except KeyError as error:
        raise ValueError(f"item is missing {error}") from error

print(total_price([{"price": 2, "qty": 3}]))         # wrong answer, no error  # -> 0
print(total_price_fixed([{"price": 2, "qty": 3}]))   # -> 6`,
    followUps: ["Where in an application is a broad handler acceptable?"],
    source: { title: "Python Docs — Built-in Exceptions: exception hierarchy", url: "https://docs.python.org/3/library/exceptions.html#exception-hierarchy" },
  },
  {
    group: "Errors, modules & type hints",
    question: "How do you make sure resources are cleaned up?",
    answer: "Use a with statement: the object's context manager releases the resource — closes the file, releases the lock, rolls back the transaction — when the block ends, even if an exception is raised. try/finally does the same by hand. contextlib.contextmanager lets you write your own context manager as a generator.",
    followUps: ["What does a database connection's with block do on an exception?"],
    source: { title: "The Python Tutorial — 8.8 Predefined Clean-up Actions", url: "https://docs.python.org/3/tutorial/errors.html#predefined-clean-up-actions" },
  },
  {
    group: "Errors, modules & type hints",
    question: "What does if __name__ == \"__main__\": do?",
    answer: "Every module has a __name__: its import name when imported, or \"__main__\" when run directly as a script. Putting the entry-point call under this check lets the file be run as a program and also imported (for example by tests) without starting the program. Keep the block short: call a main() function that does the work.",
    followUps: ["Why should tests import functions rather than run the script?"],
    source: { title: "Python Docs — __main__: Top-level code environment", url: "https://docs.python.org/3/library/__main__.html" },
  },
  {
    group: "Errors, modules & type hints",
    question: "What is a circular import, and how do you fix one?",
    answer: "Two modules import each other, directly or through a chain, so one of them is used before it has finished loading, typically producing an ImportError about a partially initialized module. It usually means responsibilities are tangled. Fix it by moving the shared code into a third module both can import, by making the dependency go one way (domain logic should not import the command-line layer), or, as a last resort, importing inside the function that needs it.",
    code: `$ cat src/tracker/models.py
from tracker.services import is_due          # models imports services...
$ cat src/tracker/services.py
from tracker.models import Session           # ...and services imports models
$ python -m tracker
ImportError: cannot import name 'Session' from partially initialized module 'tracker.models'
# Fix: models should not depend on services; keep is_due in services only.`,
    followUps: ["How does a clear direction of dependencies (edges → logic → data) prevent this?"],
    source: { title: "Python FAQ — What are the best practices for using import in a module? (circular imports)", url: "https://docs.python.org/3/faq/programming.html#what-are-the-best-practices-for-using-import-in-a-module" },
  },
  {
    group: "Errors, modules & type hints",
    question: "Does Python enforce type hints at runtime?",
    answer: "No. Annotations are stored as metadata on the function (__annotations__) and the interpreter ignores them, so a call with the wrong type runs until something actually fails. Static checkers such as mypy and pyright read the hints and report mistakes before the code runs. Some libraries also read hints at runtime: Pydantic and FastAPI use them to convert and validate incoming data, which is real runtime checking — but only where those libraries are involved.",
    code: `def double(n: int) -> int:
    return n * 2

print(double("ab"))              # -> abab
print(double.__annotations__)    # -> {'n': <class 'int'>, 'return': <class 'int'>}`,
    followUps: ["How does FastAPI turn the hint item_id: int into validation?"],
    source: { title: "Python Standard Library — typing (note on runtime enforcement)", url: "https://docs.python.org/3/library/typing.html" },
  },
  {
    group: "Errors, modules & type hints",
    question: "What does Optional[str] mean? Is it the same as an optional argument?",
    answer: "Optional[str] is the same as str | None: the value may be a string or None. It says nothing about whether the argument can be omitted — def greet(name: str | None) still requires an argument. Giving a default, as in name: str | None = None, is what makes it optional to pass. Because the value may be None, code using it must handle None before calling string methods.",
    followUps: ["Which spelling would you use in new code, and why?"],
    source: { title: "Python Standard Library — typing.Optional", url: "https://docs.python.org/3/library/typing.html#typing.Optional" },
  },
];

export default questions;
