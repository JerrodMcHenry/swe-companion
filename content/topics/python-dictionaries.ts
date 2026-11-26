import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-dictionaries",
  title: "Dictionaries",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A Python dictionary is a mutable mapping that stores key-value pairs and supports efficient lookup by key. It is implemented as a hash table and preserves insertion order.",
  whyItMatters:
    "The hash map is the most frequently useful data structure in coding interviews: counting, grouping, remembering positions (as in Two Sum) and caching all rely on it. At work, dictionaries hold JSON data, configuration, records and lookup tables. You are expected to use them fluently and explain their average-case and worst-case costs.",
  prerequisites: ["Lists", "Loops", "Functions and Arguments", "Strings"],
  objectives: [
    "Create dictionaries, and add, update, read and delete entries.",
    "Choose between d[key], d.get(key, default) and `key in d`, and explain KeyError.",
    "Iterate over keys, values and items, and avoid changing a dictionary's size while iterating.",
    "Explain which objects can be keys (hashable) and why.",
    "State average-case O(1) lookup, insertion and deletion, the worst-case O(n), and that insertion is amortized.",
    "Implement frequency counting and grouping, with plain dictionaries and with collections.Counter and defaultdict.",
    "Use a dictionary to remember earlier values or positions to avoid nested loops.",
    "Choose between a dictionary, a set and a list.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "The Python Tutorial — Dictionaries",
      url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Written. Read section 5.5 on creating, accessing and deleting entries, then 5.6 Looping Techniques for items(), enumerate() and zip().",
    },
    {
      title: "Python Programming MOOC — Dictionary",
      url: "https://programming-26.mooc.fi/part-5/3-dictionary",
      provider: "University of Helsinki",
      type: "Course",
      instructions: "Written alternative with exercises on adding, searching, iterating over and removing dictionary entries.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 2: Loops",
      url: "https://cs50.harvard.edu/python/weeks/2/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative. Watch the dictionaries segment near the end of the lecture, which iterates over dictionary keys and values.",
    },
    {
      title: "Python Design FAQ — Why must dictionary keys be immutable?",
      url: "https://docs.python.org/3/faq/design.html#why-must-dictionary-keys-be-immutable",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Official explanation of the hashability requirement. Read this answer only.",
    },
    {
      title: "Time complexity of operations on built-in types — dict",
      url: "https://docs.python.org/3/builtins/time-complexity.html#dict-frozendict",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Read the introduction, which explains average-case versus worst-case costs, then the table. The costs are for CPython.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Dictionary: Histogram; Phone book, version 2; Invert a dictionary",
      url: "https://programming-26.mooc.fi/part-5/3-dictionary",
      note: "Instructions are readable without an account; submitting requires logging in.",
    },
    {
      title: "Implement a word-frequency counter that ignores case and punctuation, then print the three most common words.",
      note: "Write it once with a plain dictionary and once with collections.Counter.",
    },
    {
      title: "Group a list of (name, department) records into a dictionary of department to sorted names.",
      note: "Practical task. Use a loop with conditionals or setdefault, then defaultdict.",
    },
    {
      title: "Two Sum (LeetCode)",
      url: "https://leetcode.com/problems/two-sum/",
      note: "Easy. Remember each value's index in a dictionary; explain why this beats nested loops.",
    },
    {
      title: "Valid Anagram (LeetCode)",
      url: "https://leetcode.com/problems/valid-anagram/",
      note: "Easy. Compare counting with sorting, and state both complexities.",
    },
    {
      title: "Ransom Note (LeetCode)",
      url: "https://leetcode.com/problems/ransom-note/",
      note: "Easy. Frequency counting.",
    },
    {
      title: "First Unique Character in a String (LeetCode)",
      url: "https://leetcode.com/problems/first-unique-character-in-a-string/",
      note: "Easy. Two passes: count, then scan in order.",
    },
    {
      title: "Group Anagrams (LeetCode)",
      url: "https://leetcode.com/problems/group-anagrams/",
      note: "Medium. Optional stretch: choose a hashable key that represents each group.",
    },
  ],
  interviewQuestions: [
    {
      question: "How does a Python dictionary work?",
      answer:
        "It is a hash table. When you store a key, Python computes hash(key) and uses it to choose where to keep the key and its value. A lookup hashes the key again, goes to that location and confirms the match with ==. This is why lookups are fast on average and why keys must be hashable. Since Python 3.7, dictionaries also preserve insertion order.",
      code: `prices = {"apple": 1.2, "pear": 0.8}
prices["kiwi"] = 0.5          # insert
prices["apple"] = 1.0         # update
del prices["pear"]            # delete
print(prices)                 # -> {'apple': 1.0, 'kiwi': 0.5}`,
      followUps: ["What happens when two different keys produce the same hash?"],
    },
    {
      question: "What are the average-case and worst-case costs of dictionary operations?",
      answer:
        "Lookup, insertion, deletion and `key in d` are O(1) on average, assuming a reasonable hash function and that hashing a key is itself O(1). Insertion is amortized because the table occasionally resizes. In the worst case, if many keys collide, these operations degrade to O(n). Iterating over all entries is O(n). In an interview, say \"O(1) on average\" rather than just \"O(1)\".",
      code: `squares = {n: n * n for n in range(5)}
print(3 in squares, squares[3])   # -> True 9
print(len(squares))               # -> 5`,
      followUps: ["Does hashing a long string cost O(1)?"],
    },
    {
      question: "What types can be dictionary keys?",
      answer:
        "Any hashable object: one whose hash never changes and which compares equal to objects with the same hash. Immutable built-ins such as int, str, bool, frozenset and tuples of hashable items work. Lists, dictionaries and sets do not, because changing them would change their hash and the dictionary could no longer find them. Values can be anything.",
      code: `distances = {("A", "B"): 5}      # tuple key
print(distances[("A", "B")])      # -> 5
try:
    {["A", "B"]: 5}
except TypeError as error:
    print(type(error).__name__)   # -> TypeError`,
      followUps: ["Can a tuple containing a list be a key?"],
    },
    {
      question: "What is the difference between d[key], d.get(key) and `key in d`?",
      answer:
        "d[key] returns the value or raises KeyError if the key is missing; use it when the key must exist. d.get(key, default) returns the default (None if omitted) instead of raising, which suits optional keys and counting. `key in d` checks keys, not values, in O(1) on average; `value in d.values()` is an O(n) scan.",
      code: `user = {"name": "Ana"}
print(user.get("email"))          # -> None
print(user.get("email", "n/a"))   # -> n/a
print("name" in user, "Ana" in user)   # -> True False
try:
    user["email"]
except KeyError as error:
    print(type(error).__name__)   # -> KeyError`,
      followUps: ["When is raising KeyError better than returning a default?"],
    },
    {
      question: "How do you count frequencies and group items with dictionaries?",
      answer:
        "For counting, use counts[key] = counts.get(key, 0) + 1, or collections.Counter, which also provides most_common. For grouping, append to a list per key, using setdefault or collections.defaultdict(list). Each approach is O(n) on average for n items. Be able to write the plain version, since some interviewers ask you to avoid library helpers.",
      code: `from collections import Counter, defaultdict
words = ["to", "be", "or", "not", "to", "be"]
counts = {}
for w in words:
    counts[w] = counts.get(w, 0) + 1
print(counts["to"], Counter(words).most_common(1))   # -> 2 [('to', 2)]

by_length = defaultdict(list)
for w in words:
    by_length[len(w)].append(w)
print(dict(by_length))   # -> {2: ['to', 'be', 'or', 'to', 'be'], 3: ['not']}`,
      followUps: ["How would you find the k most frequent items?"],
    },
    {
      question: "How do you iterate over a dictionary, and why can deleting during iteration fail?",
      answer:
        "Iterating over a dictionary yields its keys; use .values() for values and .items() for (key, value) pairs. Adding or removing keys while iterating raises RuntimeError because the dictionary's size changed. Iterate over a copy such as list(d) or build a new dictionary with a comprehension instead.",
      code: `stock = {"apple": 0, "pear": 3, "kiwi": 0}
for name, qty in stock.items():
    print(name, qty)
# -> apple 0
# -> pear 3
# -> kiwi 0
in_stock = {k: v for k, v in stock.items() if v > 0}
print(in_stock)   # -> {'pear': 3}`,
      followUps: ["Is changing the value of an existing key during iteration allowed?"],
    },
    {
      question: "How can a dictionary turn an O(n²) solution into O(n)? Explain Two Sum.",
      answer:
        "Instead of checking every pair with nested loops, walk the list once and store each value's index in a dictionary. For each number, the partner you need is target - number; checking whether it is already in the dictionary is O(1) on average. The result is O(n) time and O(n) extra space, a classic time-for-space trade.",
      code: `def two_sum(nums, target):
    index_of = {}
    for i, n in enumerate(nums):
        if target - n in index_of:
            return [index_of[target - n], i]
        index_of[n] = i
    return None

print(two_sum([2, 7, 11, 15], 9))   # -> [0, 1]`,
      followUps: ["Why is the value stored after the check, not before?", "What if the input were sorted?"],
    },
  ],
  mistakes: [
    "Using d[key] for keys that may be missing and getting a KeyError.",
    "Checking `value in d` when you meant to search values; it checks keys.",
    "Adding or removing keys while iterating over the dictionary.",
    "Using a list as a key instead of a tuple.",
    "Saying lookups are always O(1) without the average-case qualification.",
    "Writing {} expecting an empty set.",
  ],
  mastery: [
    "Create and manipulate dictionaries independently, including safe access with get.",
    "Solve counting, grouping and lookup problems with plain dictionaries and with Counter and defaultdict.",
    "Explain average-case O(1) and worst-case O(n) lookup, and why keys must be hashable.",
    "Explain how a dictionary removes the need for nested loops in problems such as Two Sum.",
    "Justify choosing a dictionary over a list or set for a specific problem.",
  ],
  deprioritize: ["Detailed CPython hash table internals and advanced collision-resolution algorithms."],
  keywords: [
    "dictionary",
    "dict",
    "hash map",
    "hashmap",
    "hash table",
    "hashing",
    "key-value",
    "key value",
    "lookup",
    "frequency counter",
    "Counter",
    "defaultdict",
    "grouping",
    "two sum",
    "O(1)",
  ],
};

export default topic;
