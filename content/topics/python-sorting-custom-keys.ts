import type { Topic } from "../types";

const topic: Topic = {
  slug: "python-sorting-custom-keys",
  title: "Sorting and Custom Sort Keys",
  category: "Python",
  phase: "programming-fluency",
  overview:
    "Python sorts with sorted(), which returns a new list, and list.sort(), which sorts a list in place. A key function controls what each item is sorted by, and Python's sort is stable, so items with equal keys keep their original order.",
  whyItMatters:
    "Sorting is a step in many interview solutions: intervals, greedy problems, two-pointer techniques, ranking records and grouping equal items all start with a sort. You are expected to use the built-in sort with an appropriate key rather than writing your own, to state its O(n log n) cost, and to recognize when sorting is unnecessary. At work you sort records for reports, APIs and user interfaces.",
  prerequisites: ["Lists", "Functions and Arguments", "Dictionaries"],
  objectives: [
    "sorted() returns a new list from any iterable; list.sort() sorts a list in place and returns None.",
    "Key functions: called once per item, using built-ins such as len and str.lower or a short lambda.",
    "Descending order with reverse=True.",
    "Sorting records (tuples, dictionaries) by several fields with a tuple key, negating numeric fields for mixed ascending and descending order.",
    "Stability: items with equal keys keep their original order, which makes multi-pass sorts work.",
    "Cost: O(n log n) time and O(n) extra space; already-sorted input is fast (O(n)).",
    "When not to sort: min()/max() in O(n), a set for duplicates, heapq.nlargest for a small top k.",
    "Mixed types such as int and str cannot be compared in Python 3; convert them or use a key.",
    "Skip for now: implementing sorting algorithms (Unit 2), functools.cmp_to_key and Timsort internals.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Sorting Techniques (Python HOWTO)",
      url: "https://docs.python.org/3/howto/sorting.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Start here. Read Sorting Basics, Key Functions, Ascending and Descending, and Sort Stability and Complex Sorts; Strategies For Unorderable Types and Values is useful for messy data. Operator Module Functions is optional. Skip Decorate-Sort-Undecorate, Comparison Functions, Odds and Ends and Partial Sorts. Free; no account needed.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Lecture 6: File I/O",
      url: "https://cs50.harvard.edu/python/weeks/6/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative. Watch only the segment where the lecture sorts student records with sorted(), key= and a lambda (the notes on the same site show the same code); the file-handling parts belong to a later topic.",
    },
  ],
  exercises: [
    {
      title: "Sort the People (LeetCode)",
      url: "https://leetcode.com/problems/sort-the-people/",
      note: "Easy. Pair names with heights using zip, then sort with a key. LeetCode needs a free account to submit.",
    },
    {
      title: "Height Checker (LeetCode)",
      url: "https://leetcode.com/problems/height-checker/",
      note: "Easy. Compare the list with a sorted copy; explain why sorted() rather than sort() here.",
    },
    {
      title: "Sort Array by Increasing Frequency (LeetCode)",
      url: "https://leetcode.com/problems/sort-array-by-increasing-frequency/",
      note: "Easy. Count with a dictionary, then use a tuple key with one ascending and one descending part.",
    },
    {
      title: "Relative Sort Array (LeetCode)",
      url: "https://leetcode.com/problems/relative-sort-array/",
      note: "Easy. Build a dictionary of positions and use it inside the key.",
    },
    {
      title: "Merge Intervals (LeetCode)",
      url: "https://leetcode.com/problems/merge-intervals/",
      note: "Medium. Optional stretch and a preview of Unit 2: after sorting by start time, one linear pass merges the intervals (O(n log n) overall).",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between sorted() and list.sort()?",
      answer:
        "sorted(iterable) accepts any iterable and returns a new sorted list, leaving the input unchanged. list.sort() works only on lists, sorts in place and returns None, a deliberate signal that it mutated the list. Use sorted when you need to keep the original or are sorting something other than a list, and sort when you own the list and want to avoid an extra copy.",
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
      question: "How do key functions work?",
      answer:
        "key is a function called once on each item; the items are then ordered by the returned values instead of the items themselves. Built-ins such as len or str.lower work directly, and a lambda handles fields of a record. Because the key is computed once per item, an expensive key costs O(n) calls, not O(n log n).",
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
      question: "How do you sort by several criteria, some ascending and some descending?",
      answer:
        "Return a tuple from the key: tuples compare element by element, so the first field decides and later fields break ties. To reverse a numeric field, negate it inside the tuple. For non-numeric fields that must be descending, sort in several stable passes, starting with the least important field.",
      code: `players = [("ana", 90), ("ben", 85), ("cy", 90)]
# score descending, then name ascending
print(sorted(players, key=lambda p: (-p[1], p[0])))
# -> [('ana', 90), ('cy', 90), ('ben', 85)]`,
      followUps: ["How would you sort names descending and scores ascending?"],
      source: { title: "Python Sorting HOWTO — Sort Stability and Complex Sorts", url: "https://docs.python.org/3/howto/sorting.html#sort-stability-and-complex-sorts" },
    },
    {
      question: "What does it mean that Python's sort is stable, and why is it useful?",
      answer:
        "A stable sort keeps items with equal keys in the order they had before sorting. Python guarantees stability for both sorted and list.sort. This lets you sort by a secondary field first and the primary field second, and it keeps an existing meaningful order, such as arrival time, among ties. reverse=True also preserves the original order of equal items.",
      code: `orders = [("pear", 2), ("apple", 1), ("fig", 2), ("kiwi", 1)]
by_priority = sorted(orders, key=lambda o: o[1])
print(by_priority)
# -> [('apple', 1), ('kiwi', 1), ('pear', 2), ('fig', 2)]`,
      followUps: ["Name a sorting algorithm that is not stable. (Covered in Unit 2.)"],
      source: { title: "Python Sorting HOWTO — Sort Stability and Complex Sorts", url: "https://docs.python.org/3/howto/sorting.html#sort-stability-and-complex-sorts" },
    },
    {
      question: "What is the time and space complexity of sorting in Python?",
      answer:
        "Sorting n items takes O(n log n) comparisons in the worst case. CPython's sort is adaptive (it is based on Timsort), so input that is already sorted or reverse-sorted takes only O(n) comparisons. sorted() also builds a new list, which needs O(n) extra space, and the sort itself may use up to O(n) temporary memory. In an interview, state O(n log n) time and O(n) space unless asked for more detail.",
      code: `data = list(range(10, 0, -1))
print(sorted(data)[:3])   # -> [1, 2, 3]
print(data[:3])           # -> [10, 9, 8]`,
      followUps: ["Does sorting change the overall complexity of an otherwise O(n) solution?"],
      source: { title: "Python Docs — Time complexity of built-in types: list", url: "https://docs.python.org/3/builtins/time-complexity.html#list" },
    },
    {
      question: "When is sorting the wrong tool?",
      answer:
        "When you only need the minimum or maximum, use min() or max() in O(n). For duplicates or membership, a set is O(n) on average. For the top k items, heapq.nlargest is O(n log k), which is better than sorting when k is small. Sort when you need everything in order, want equal items next to each other, or a later step such as merging intervals or two pointers depends on order.",
      code: `import heapq
nums = [5, 1, 9, 3, 7]
print(max(nums))                   # -> 9
print(heapq.nlargest(2, nums))     # -> [9, 7]
print(len(set(nums)) != len(nums)) # -> False`,
      followUps: ["How would you find the median of a list?"],
      source: { title: "Python Docs — heapq.nlargest", url: "https://docs.python.org/3/library/heapq.html#heapq.nlargest" },
    },
    {
      question: "Why does sorting a list of mixed types fail?",
      answer:
        "Python 3 does not define an ordering between unrelated types such as int and str, so comparing them raises TypeError. Clean or convert the data first, or provide a key that maps every item to comparable values. The same applies to None values in data that otherwise contains numbers.",
      code: `try:
    sorted([3, "2", 1])
except TypeError as error:
    print(type(error).__name__)            # -> TypeError
print(sorted([3, "2", 1], key=int))        # -> [1, '2', 3]
values = [3, None, 1]
print(sorted(values, key=lambda v: (v is None, v or 0)))   # -> [1, 3, None]`,
      followUps: ["Why does the last key put None at the end?"],
      source: { title: "Python Sorting HOWTO — Strategies For Unorderable Types and Values", url: "https://docs.python.org/3/howto/sorting.html#strategies-for-unorderable-types-and-values" },
    },
  ],
  mistakes: [
    "Writing items = items.sort(), which sets items to None.",
    "Sorting a list in place when the caller still needs the original order.",
    "Sorting just to find a maximum or to check for duplicates.",
    "Sorting numeric strings as text, so \"10\" comes before \"9\".",
    "Using reverse=True when only one of several fields should be descending.",
    "Writing your own sorting algorithm in an interview when the built-in sort is allowed.",
  ],
  mastery: [
    "You solve the four linked LeetCode Easy problems without help, each with an appropriate key.",
    "You sort records by several fields, some ascending and some descending, without looking up syntax.",
    "You can explain sorted() versus list.sort(), stability, and why sort returns None.",
    "You can state O(n log n) time and O(n) extra space, and recognize when a linear-time alternative beats sorting.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Implementing sorting algorithms such as merge sort and quicksort; they are covered in Data Structures & Algorithms.",
    "functools.cmp_to_key and comparison functions.",
    "Timsort's internal details.",
  ],
  keywords: [
    "sorting",
    "sort",
    "sorted",
    "key function",
    "lambda",
    "reverse",
    "stable sort",
    "stability",
    "tuple key",
    "n log n",
    "Timsort",
    "custom sort",
  ],
};

export default topic;
