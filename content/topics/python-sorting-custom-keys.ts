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
    "Choose between sorted() and list.sort(), and explain their return values and mutation.",
    "Sort with key functions, including built-ins such as len and str.lower, and short lambda expressions.",
    "Sort in descending order with reverse=True.",
    "Sort records (tuples and dictionaries) by one or several fields, including mixed ascending and descending order.",
    "Explain sort stability and use it for multi-step sorts.",
    "State the time and space complexity of sorting, including that already-sorted input is fast.",
    "Decide when sorting is useful and when a linear-time alternative such as max() or a set is better.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Sorting Techniques (Python HOWTO)",
      url: "https://docs.python.org/3/howto/sorting.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Written, primary. Read Sorting Basics, Key Functions, Ascending and Descending, and Sort Stability and Complex Sorts. The Operator Module Functions section is optional; skip Decorate-Sort-Undecorate, Comparison Functions and the later sections.",
    },
    {
      title: "Think Python — 11.7 Comparing and Sorting",
      url: "https://allendowney.github.io/ThinkPython/chap11.html#comparing-and-sorting",
      provider: "Allen B. Downey",
      type: "Book",
      instructions: "Written alternative. Read section 11.7 on comparing tuples and sorting with key=. Section 9.8 Sorting lists covers the basics.",
    },
    {
      title: "CS50's Introduction to Programming with Python — Week 6: File I/O",
      url: "https://cs50.harvard.edu/python/weeks/6/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Video alternative. Watch the segment where the lecture sorts student records with sorted(), key= and lambda; the file-handling parts are optional here.",
    },
    {
      title: "Python Design FAQ — Why doesn't list.sort() return the sorted list?",
      url: "https://docs.python.org/3/faq/design.html#why-doesn-t-list-sort-return-the-sorted-list",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Short official answer explaining in-place sorting and returning None.",
    },
    {
      title: "Python Standard Library — sorted() and list.sort()",
      url: "https://docs.python.org/3/library/functions.html#sorted",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference for the key and reverse parameters and the stability guarantee.",
    },
  ],
  exercises: [
    {
      title: "Sort a list of employee dictionaries by department ascending, then salary descending, then name.",
      note: "Practical task. Do it once with a tuple key and once with two stable sorts, and confirm both give the same result.",
    },
    {
      title: "Sort words by length, breaking ties alphabetically and ignoring case.",
    },
    {
      title: "Given a list of numbers, decide whether you need to sort to find the three largest, and explain the trade-off.",
      note: "Technical explanation. Compare sorting, three passes with max(), and heapq.nlargest.",
    },
    {
      title: "Sort the People (LeetCode)",
      url: "https://leetcode.com/problems/sort-the-people/",
      note: "Easy. Pair names with heights using zip, then sort with a key.",
    },
    {
      title: "Height Checker (LeetCode)",
      url: "https://leetcode.com/problems/height-checker/",
      note: "Easy. Compare the list with a sorted copy.",
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
      note: "Medium. Optional stretch and a preview of Unit 2: sorting by start time makes the problem linear.",
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
    },
    {
      question: "What is the time and space complexity of sorting in Python?",
      answer:
        "Sorting n items takes O(n log n) comparisons in the worst case. CPython's sort is adaptive (it is based on Timsort), so input that is already sorted or reverse-sorted takes only O(n) comparisons. sorted() also builds a new list, which needs O(n) extra space, and the sort itself may use up to O(n) temporary memory. In an interview, state O(n log n) time and O(n) space unless asked for more detail.",
      code: `data = list(range(10, 0, -1))
print(sorted(data)[:3])   # -> [1, 2, 3]
print(data[:3])           # -> [10, 9, 8]`,
      followUps: ["Does sorting change the overall complexity of an otherwise O(n) solution?"],
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
    "Sort lists of values and records by one or several fields, ascending and descending, without looking up syntax.",
    "Explain sorted() versus list.sort(), stability, and why sort returns None.",
    "State O(n log n) time and O(n) extra space, and when sorted input is faster.",
    "Recognize when sorting simplifies a problem and when a linear-time alternative is better.",
    "Solve the linked Easy practice problems independently.",
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
