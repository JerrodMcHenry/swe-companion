import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-sets",
  title: "Sets",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "A set is an unordered, mutable collection of unique, hashable objects. Because it is built on a hash table, checking whether an item is in a set takes constant time on average, and sets support union, intersection and difference.",
  whyItMatters:
    "\"Have I seen this before?\" is one of the most common steps in coding interview problems: detecting duplicates, tracking visited items, or comparing two collections. A set turns that step from an O(n) scan into an O(1) average lookup. At work, sets are used to remove duplicates, compare permissions or IDs, and validate input against allowed values.",
  prerequisites: ["Lists", "Loops", "Strings"],
  objectives: [
    "Create sets with set() and literals, and remember that {} creates an empty dictionary, not a set.",
    "Add and remove items with add, remove, discard and pop, and know which raise errors.",
    "Use membership tests and explain why they are O(1) on average and O(n) in the worst case.",
    "Explain hashability: which objects can be set members, and why lists cannot.",
    "Remove duplicates from a sequence, with and without preserving order.",
    "Use union, intersection, difference and symmetric difference, and state their costs.",
    "Choose between a set, a list and a dictionary.",
    "Recognize frozenset as an immutable, hashable set.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "The Python Tutorial — Sets",
      url: "https://docs.python.org/3/tutorial/datastructures.html#sets",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Written. Read section 5.4 (short) on creating sets, membership and set operations; set comprehensions are optional.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 9: Et Cetera (set)",
      url: "https://cs50.harvard.edu/python/notes/9/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video and notes alternative. Watch or read only the opening \"set\" section, which uses a set to remove duplicate values; the rest of the lecture covers other topics.",
    },
    {
      title: "Python Standard Library — Set Types: set, frozenset",
      url: "https://docs.python.org/3/library/stdtypes.html#set-types-set-frozenset",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for every set method and operator. Look up methods as you need them; do not read it end to end.",
    },
    {
      title: "Time complexity of operations on built-in types — set, frozenset",
      url: "https://docs.python.org/3/builtins/time-complexity.html#set-frozenset",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference table of set operation costs in CPython. Read the introduction on average versus worst case, then the table.",
    },
    {
      title: "Python Programming FAQ — How do you remove duplicates from a list?",
      url: "https://docs.python.org/3/faq/programming.html#how-do-you-remove-duplicates-from-a-list",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short official answer showing order-losing and order-preserving approaches.",
    },
  ],
  exercises: [
    {
      title: "Write a function that returns the first repeated word in a sentence, ignoring case and punctuation.",
      note: "Combines strings and sets. Return None if nothing repeats; state the time complexity.",
    },
    {
      title: "Given two lists of user IDs, return the IDs present in both, only in the first, and in exactly one of them.",
      note: "Practical task. Use set operations and return sorted lists so the output is predictable.",
    },
    {
      title: "Explain, for an input of size n checked against a list of size m, how the cost changes when you convert the list to a set first.",
      note: "Technical explanation. Include the cost of building the set.",
    },
    {
      title: "Contains Duplicate (LeetCode)",
      url: "https://leetcode.com/problems/contains-duplicate/",
      note: "Easy. Compare the set solution with sorting and with a nested-loop solution.",
    },
    {
      title: "Jewels and Stones (LeetCode)",
      url: "https://leetcode.com/problems/jewels-and-stones/",
      note: "Easy. A set makes each membership check O(1) on average.",
    },
    {
      title: "Check if the Sentence Is Pangram (LeetCode)",
      url: "https://leetcode.com/problems/check-if-the-sentence-is-pangram/",
      note: "Easy. Combines strings and sets.",
    },
    {
      title: "Intersection of Two Arrays (LeetCode)",
      url: "https://leetcode.com/problems/intersection-of-two-arrays/",
      note: "Easy. Solve it with set operations, then state the complexity.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is a set, and when would you use one?",
      answer:
        "A set stores unique, hashable items with no defined order. Use it when you need fast membership tests, to remove duplicates, to track what you have already visited, or to compare collections with union, intersection and difference. If you need order, duplicates or positions, use a list; if you need a value for each key, use a dictionary.",
      code: `seen = set()
for n in [3, 1, 3, 2, 1]:
    if n in seen:
        print("duplicate:", n)
    seen.add(n)
# -> duplicate: 3
# -> duplicate: 1`,
      followUps: ["How would you return the duplicates in the order they first repeated?"],
    },
    {
      question: "Why is membership testing faster in a set than in a list?",
      answer:
        "A list must compare the target with each element in turn, which is O(n). A set hashes the target to find where it would be stored and checks only that location, which is O(1) on average. In the worst case, if many items collide on the same hash, lookups degrade to O(n), but with built-in types this is rare. Building the set costs O(n) once, so it pays off when you perform many lookups.",
      code: `names = ["ana", "ben", "cy"] * 1000
lookup = set(names)
print(len(names), len(lookup))   # -> 3000 3
print("cy" in lookup)            # -> True`,
      followUps: ["For a single lookup, is converting a list to a set worth it?"],
    },
    {
      question: "What can be stored in a set? Why can't a list be a set member?",
      answer:
        "Set members must be hashable: their hash value must never change while they are stored, and equal objects must have equal hashes. Immutable built-ins such as int, float, str, tuples of hashable items and frozenset are hashable. Lists, dictionaries and sets are mutable and unhashable, so adding one raises TypeError; convert a list to a tuple if you need to store it.",
      code: `points = {(0, 0), (1, 2)}
print((1, 2) in points)   # -> True
try:
    {[1, 2]}
except TypeError as error:
    print(type(error).__name__)   # -> TypeError`,
      followUps: ["Why would a changing hash break a set?"],
    },
    {
      question: "How do you remove duplicates from a list? Does the order matter?",
      answer:
        "set(items) removes duplicates in O(n) on average but does not keep the original order. To keep the first occurrence of each item in order, use dict.fromkeys(items), because dictionaries preserve insertion order, or loop with a seen set. All of these require the items to be hashable.",
      code: `items = ["b", "a", "b", "c", "a"]
print(sorted(set(items)))           # -> ['a', 'b', 'c']
print(list(dict.fromkeys(items)))   # -> ['b', 'a', 'c']`,
      followUps: ["How would you remove duplicates from a list of lists?"],
    },
    {
      question: "How do set operations work, and what do they cost?",
      answer:
        "a | b is the union (items in either), a & b the intersection (in both), a - b the difference (in a but not b) and a ^ b the symmetric difference (in exactly one). Union is O(len(a) + len(b)), intersection O(min(len(a), len(b))) and difference O(len(a)), on average. Each returns a new set; the method forms (union, intersection) also accept any iterable.",
      code: `a = {1, 2, 3}
b = {3, 4}
print(sorted(a | b))   # -> [1, 2, 3, 4]
print(a & b)           # -> {3}
print(sorted(a - b))   # -> [1, 2]
print(sorted(a ^ b))   # -> [1, 2, 4]`,
      followUps: ["How would you check whether one set is contained in another?"],
    },
    {
      question: "What is the difference between a set and a dictionary?",
      answer:
        "Both are hash tables with the same average O(1) lookups and the same hashability rules for keys. A set stores only keys; a dictionary maps each key to a value. Use a set for \"is it present?\" and a dictionary when you also need to remember something per key, such as a count or an index. Note that {} is an empty dictionary; an empty set is set().",
      code: `print(type({}).__name__, type(set()).__name__)   # -> dict set
counts = {}
for ch in "aab":
    counts[ch] = counts.get(ch, 0) + 1
print(counts)   # -> {'a': 2, 'b': 1}`,
      followUps: ["Which would you use to find the first non-repeating character, and why?"],
    },
    {
      question: "Are sets ordered?",
      answer:
        "No. Iteration order is not guaranteed and can change between runs and Python versions, so never depend on it. If you need a predictable output, sort the result. Dictionaries, by contrast, preserve insertion order since Python 3.7.",
      code: `tags = {"python", "api", "sql"}
print(sorted(tags))   # -> ['api', 'python', 'sql']`,
      followUps: ["Why might a test that prints a set pass on one machine and fail on another?"],
    },
  ],
  mistakes: [
    "Writing {} for an empty set; it creates an empty dictionary.",
    "Relying on the order of items when iterating over or printing a set.",
    "Converting a list to a set inside a loop, paying O(n) on every iteration.",
    "Using set() to remove duplicates when the original order must be kept.",
    "Trying to store lists or dictionaries in a set.",
    "Calling remove() for an item that may be absent; discard() does not raise.",
  ],
  mastery: [
    "Use sets for membership, uniqueness and comparisons without looking up syntax.",
    "Explain average-case O(1) and worst-case O(n) membership, and when building a set pays off.",
    "Explain hashability and convert unhashable data into a form a set can store.",
    "Remove duplicates both with and without preserving order.",
    "Choose between a list, a set and a dictionary for a problem and justify the choice.",
  ],
  deprioritize: [
    "Hash table internals such as probing strategies and resizing thresholds.",
    "Rarely used methods such as isdisjoint and the in-place update operators beyond recognizing them.",
  ],
  keywords: [
    "set",
    "sets",
    "hash set",
    "hashset",
    "membership",
    "unique",
    "duplicates",
    "deduplicate",
    "union",
    "intersection",
    "difference",
    "hashable",
    "frozenset",
  ],
};

export default topic;
