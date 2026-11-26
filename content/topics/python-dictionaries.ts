import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-dictionaries",
  title: "Dictionaries",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A dictionary maps keys to values with fast average-case lookup. It is Python's hash map: the structure behind counting, grouping and most \"remember what you have seen\" interview solutions.",
  whyItMatters:
    "The hash map is the most frequently useful data structure in coding interviews: counting, grouping, remembering positions (as in Two Sum) and caching all rely on it. At work, dictionaries hold JSON data, configuration, records and lookup tables. You are expected to use them fluently and explain their average-case and worst-case costs.",
  prerequisites: ["Lists", "Loops", "Functions and Arguments", "Strings"],
  objectives: [
    "Create, read, update and delete entries; choose between d[key] (raises KeyError), d.get(key, default) and key in d (checks keys, not values).",
    "Iterate with .items(), .keys() and .values(); know that adding or removing keys while iterating raises RuntimeError.",
    "Explain hashability: a key needs a hash that never changes and equality consistent with it. Most immutable built-ins are hashable, but immutability alone is not enough — a tuple containing a list is unhashable.",
    "State the costs: lookup, insertion and deletion are O(1) on average (insertion amortized) and O(n) in the worst case; iteration is O(n).",
    "Count and group with plain dictionaries, and with collections.Counter and defaultdict.",
    "Use a dictionary to remember earlier values or positions instead of nested loops, and choose between a dictionary, a set and a list.",
    "Skip for now: CPython's hash table internals and collision-resolution details.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Python Programming MOOC — Part 5: Dictionary",
      url: "https://programming-26.mooc.fi/part-5/3-dictionary",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Start here. Read the whole section and do its exercises — it covers creating, searching, iterating over and removing entries with immediate practice. Free; reading needs no account, submitting exercises needs a free MOOC.fi account.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 2: Loops",
      url: "https://cs50.harvard.edu/python/weeks/2/",
      provider: "Harvard University",
      type: "Video",
      instructions: "Video alternative to the MOOC section. Watch only the dictionaries segment near the end of the lecture.",
    },
    {
      title: "The Python Tutorial — 5.5 Dictionaries and 5.6 Looping Techniques",
      url: "https://docs.python.org/3/tutorial/datastructures.html#dictionaries",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short reference for the syntax, including items() and dictionary comprehensions. Use it to look things up, not as a second course.",
    },
    {
      title: "Time complexity of operations on built-in types — dict",
      url: "https://docs.python.org/3/builtins/time-complexity.html#dict-frozendict",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for the average- versus worst-case costs you will be asked to state. Read the introduction and the dict table.",
    },
  ],
  exercises: [
    {
      title: "University of Helsinki, Dictionary: Histogram; Phone book, version 2; Invert a dictionary",
      url: "https://programming-26.mooc.fi/part-5/3-dictionary",
      note: "Counting, lookup and building a new dictionary from an existing one. Instructions are readable without an account; submitting requires a free account.",
    },
    {
      title: "Two Sum (LeetCode)",
      url: "https://leetcode.com/problems/two-sum/",
      note: "Easy. Remember each value's index in a dictionary; explain why this beats nested loops. LeetCode needs a free account to submit.",
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
      note: "Medium, optional stretch: choose a hashable key that represents each group.",
    },
  ],
  interviewQuestions: [
    {
      question: "How does a Python dictionary work?",
      answer:
        "It is a hash table. Storing a key computes hash(key) to choose a slot; a lookup hashes the key again, goes to that slot and confirms the match with ==. That is why lookups are fast on average and why keys must be hashable. Since Python 3.7, dictionaries preserve insertion order.",
      followUps: ["What happens when two different keys produce the same hash?"],
      source: { title: "Python Glossary — hashable", url: "https://docs.python.org/3/glossary.html#term-hashable" },
    },
    {
      question: "What are the average-case and worst-case costs of dictionary operations?",
      answer:
        "Lookup, insertion, deletion and key in d are O(1) on average, assuming a reasonable hash function and O(1) hashing of the key; insertion is amortized because the table occasionally resizes. If many keys collide, they degrade to O(n). Say \"O(1) on average\", not just \"O(1)\".",
      followUps: ["Does hashing a long string cost O(1)?"],
      source: { title: "Python Docs — Time complexity of built-in types: dict", url: "https://docs.python.org/3/builtins/time-complexity.html#dict-frozendict" },
    },
    {
      question: "What types can be dictionary keys?",
      answer:
        "Any hashable object. Most immutable built-ins (int, str, frozenset) are hashable; lists, dictionaries and sets are not. Immutability is not the same thing: a tuple is hashable only if everything inside it is, so a tuple containing a list cannot be a key. Values can be anything.",
      code: `print({("A", "B"): 5}[("A", "B")])   # -> 5
try:
    {(1, [2]): "x"}                     # tuple is immutable, but holds a list
except TypeError as error:
    print(type(error).__name__)         # -> TypeError`,
      followUps: ["Why would a mutable key break lookups?"],
      source: { title: "Python Glossary — hashable", url: "https://docs.python.org/3/glossary.html#term-hashable" },
    },
    {
      question: "What is the difference between d[key], d.get(key) and key in d?",
      answer:
        "d[key] returns the value or raises KeyError if it is missing — use it when the key must exist. d.get(key, default) returns the default (None if omitted) instead. key in d checks keys, not values, in O(1) on average; value in d.values() is an O(n) scan.",
      code: `user = {"name": "Ana"}
print(user.get("email"), "name" in user, "Ana" in user)   # -> None True False`,
      followUps: ["When is raising KeyError better than returning a default?"],
      source: { title: "Python Docs — Mapping types: dict.get", url: "https://docs.python.org/3/library/stdtypes.html#dict.get" },
    },
    {
      question: "How do you count frequencies and group items with dictionaries?",
      answer:
        "Count with counts[k] = counts.get(k, 0) + 1 or collections.Counter (which adds most_common). Group by appending to a list per key with setdefault or collections.defaultdict(list). Both are O(n) on average. Be able to write the plain version too, in case you are asked not to use library helpers.",
      followUps: ["How would you find the k most frequent items?"],
      source: { title: "Python Docs — collections.Counter", url: "https://docs.python.org/3/library/collections.html#collections.Counter" },
    },
    {
      question: "How do you iterate over a dictionary, and why can deleting during iteration fail?",
      answer:
        "Iterating yields keys; use .items() for (key, value) pairs. Adding or removing keys while iterating raises RuntimeError because the size changed. Iterate over a copy such as list(d), or build a new dictionary with a comprehension.",
      followUps: ["Is changing the value of an existing key during iteration allowed?"],
      source: { title: "The Python Tutorial — 5.6 Looping Techniques", url: "https://docs.python.org/3/tutorial/datastructures.html#looping-techniques" },
    },
    {
      question: "How can a dictionary turn an O(n²) solution into O(n)? Explain Two Sum.",
      answer:
        "Instead of checking every pair, walk the list once and store each value's index. For each number, check whether target - number is already stored — O(1) on average — before storing the current number. The result is O(n) time and O(n) extra space: a classic time-for-space trade.",
      followUps: ["Why is the value stored after the check, not before?", "What if the input were sorted?"],
      source: { title: "NeetCode — Two Integer Sum (explanation video and solution)", url: "https://neetcode.io/problems/two-integer-sum" },
    },
  ],
  mistakes: [
    "Using d[key] for keys that may be missing and getting a KeyError.",
    "Checking value in d when you meant to search values; it checks keys.",
    "Adding or removing keys while iterating over the dictionary.",
    "Assuming every immutable object is hashable (a tuple containing a list is not).",
    "Saying lookups are always O(1) without the average-case qualification.",
    "Writing {} expecting an empty set.",
  ],
  mastery: [
    "You complete the MOOC dictionary exercises and Two Sum, Valid Anagram and Ransom Note without help.",
    "You can explain average-case O(1) and worst-case O(n) lookup, and the hashability requirement, without notes.",
    "You can explain how a dictionary removes nested loops in Two Sum, and justify a dictionary over a list or set for a given problem.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: ["CPython hash table internals and collision-resolution algorithms."],
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
