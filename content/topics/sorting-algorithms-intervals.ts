import type { Topic } from "../types";

const topic: Topic = {
  slug: "sorting-algorithms-intervals",
  title: "Sorting Algorithms and Interval Patterns",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "This topic covers how the main sorting algorithms work and when sorting is the key step in a solution. You should be able to explain and implement merge sort, explain quicksort and its worst case, and know why Python's built-in sort is the right tool in practice. Interval problems — merging, inserting and counting overlaps — are the most common sorting-based pattern.",
  whyItMatters:
    "Interviewers sometimes ask you to explain or implement an O(n log n) sort, and more often expect you to recognize that sorting first simplifies a problem. Interval problems (merge intervals, insert interval, scheduling) are well represented in preparation lists. How to call sorted() and list.sort() with keys is covered in Programming Fluency (Sorting and Custom Sort Keys); this topic covers the algorithms and patterns behind them.",
  prerequisites: ["Sorting and Custom Sort Keys", "Recursion and Backtracking", "Complexity Analysis"],
  objectives: [
    "Explain merge sort (divide, sort halves, merge) and implement it, with O(n log n) time and O(n) extra space.",
    "Explain quicksort (partition around a pivot), its average O(n log n) and worst-case O(n²), and why random pivots help.",
    "Know the simple quadratic sorts (insertion sort) and when they are acceptable (small or nearly sorted input).",
    "Explain stability and which algorithms are stable (merge sort, Python's sort) or not (typical quicksort, heapsort).",
    "Recognize when counting or bucket approaches beat comparison sorting (small integer ranges).",
    "Use the built-in sort in interviews unless asked to implement one, and state its O(n log n) cost.",
    "Merge overlapping intervals after sorting by start, and insert an interval into a sorted list.",
    "Solve greedy interval problems (minimum removals, arrows) by sorting by end, and explain why the greedy choice is safe.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 5.11 The Merge Sort and 5.12 The Quicksort",
      url: "https://runestone.academy/ns/books/published/pythonds3/SortSearch/TheMergeSort.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read 5.11 and 5.12 with their analysis. The bubble, selection and shell sort sections are optional.",
    },
    {
      title: "VisuAlgo — Sorting",
      url: "https://visualgo.net/en/sorting",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Watch merge sort and quicksort on the same input, then counting sort on small integers.",
    },
    {
      title: "Interval cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/interval/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the techniques for sorting by start, overlap checks and merging, plus the corner cases.",
    },
    {
      title: "MIT 6.006 (Spring 2020) — Lecture 3: Sorting and Lecture 5: Linear Sorting",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/",
      provider: "MIT OpenCourseWare",
      type: "Course",
      instructions: "Optional university depth. Lecture 3 covers merge sort and the analysis; Lecture 5 explains why counting and radix sort can beat O(n log n).",
    },
  ],
  exercises: [
    {
      title: "Sort an Array (LeetCode)",
      url: "https://leetcode.com/problems/sort-an-array/",
      note: "Foundation, Medium. Implement merge sort yourself (the problem forbids built-ins); then explain how you would choose a quicksort pivot.",
    },
    {
      title: "Revisit Merge Intervals from Sorting and Custom Sort Keys and explain why sorting by start makes one pass sufficient.",
      note: "Foundation. Already practised in Programming Fluency; now focus on the correctness argument.",
    },
    {
      title: "Insert Interval (LeetCode)",
      url: "https://leetcode.com/problems/insert-interval/",
      note: "Reinforcement, Medium. Input is already sorted: add before, merge overlapping, add after. O(n).",
    },
    {
      title: "Sort Colors (LeetCode)",
      url: "https://leetcode.com/problems/sort-colors/",
      note: "Reinforcement, Medium. Counting, or one-pass three-way partitioning (Dutch national flag).",
    },
    {
      title: "Non-overlapping Intervals (LeetCode)",
      url: "https://leetcode.com/problems/non-overlapping-intervals/",
      note: "Transfer, Medium. Greedy by earliest end.",
    },
    {
      title: "Minimum Number of Arrows to Burst Balloons (LeetCode)",
      url: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
      note: "Transfer, Medium. The same greedy idea in a different story.",
    },
  ],
  interviewQuestions: [
    {
      question: "How does merge sort work, and what are its time and space costs?",
      answer:
        "Merge sort splits the list in half, recursively sorts each half, and merges the two sorted halves by repeatedly taking the smaller front element. The recursion has O(log n) levels and each level does O(n) merging work, so it is O(n log n) in every case. Merging needs O(n) extra space. Taking from the left half on ties makes it stable.",
      code: `def merge_sort(nums):
    if len(nums) <= 1:
        return nums
    mid = len(nums) // 2
    left, right = merge_sort(nums[:mid]), merge_sort(nums[mid:])
    merged, i, j = [], 0, 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:            # <= keeps equal items in order (stable)
            merged.append(left[i]); i += 1
        else:
            merged.append(right[j]); j += 1
    merged.extend(left[i:])
    merged.extend(right[j:])
    return merged

print(merge_sort([5, 2, 9, 1, 5, 6]), merge_sort([]), merge_sort([3]))   # -> [1, 2, 5, 5, 6, 9] [] [3]`,
      followUps: ["The slices here copy data. Does that change the overall complexity?"],
    },
    {
      question: "How does quicksort work, and why can it be O(n²)?",
      answer:
        "Quicksort picks a pivot, partitions the list into elements smaller than the pivot and elements larger than it, and recursively sorts each part. With balanced partitions it is O(n log n); if the pivot is always the smallest or largest element (for example, the first element of already sorted input), each partition removes only one element and it degrades to O(n²). Choosing a random pivot makes that worst case very unlikely. In-place versions use O(log n) stack space on average and are typically not stable.",
      code: `import random

def quicksort(nums):
    if len(nums) <= 1:
        return nums
    pivot = random.choice(nums)
    smaller = [x for x in nums if x < pivot]
    equal = [x for x in nums if x == pivot]
    larger = [x for x in nums if x > pivot]
    return quicksort(smaller) + equal + quicksort(larger)

print(quicksort([3, 6, 1, 8, 1, 2]), quicksort([]))   # -> [1, 1, 2, 3, 6, 8] []`,
      followUps: ["This version is easy to read but uses O(n) extra space. How does in-place partitioning work?"],
    },
    {
      question: "Should you implement your own sort in an interview?",
      answer:
        "Usually not. Use the built-in sort, state that it is O(n log n) and stable, and spend your time on the actual problem. Implement a sort only when the interviewer asks, or when a modified merge or partition step is the point of the problem (counting inversions, quickselect, three-way partitioning). Be able to explain at least one O(n log n) algorithm either way.",
      code: `records = [("ana", 3), ("ben", 1), ("cy", 3)]
print(sorted(records, key=lambda r: -r[1]))   # -> [('ana', 3), ('cy', 3), ('ben', 1)]`,
      followUps: ["Which property of the built-in sort did this example rely on?"],
    },
    {
      question: "Can sorting ever be faster than O(n log n)?",
      answer:
        "Comparison-based sorting cannot beat O(n log n) in the worst case. If the values are integers in a small known range k, counting sort runs in O(n + k) by counting occurrences instead of comparing; radix and bucket sorts extend the idea. In interviews this appears as \"the values are only 0, 1 and 2\" or \"ages between 0 and 120\".",
      code: `def counting_sort(nums, max_value):
    counts = [0] * (max_value + 1)
    for x in nums:
        counts[x] += 1
    out = []
    for value, c in enumerate(counts):
        out.extend([value] * c)
    return out

print(counting_sort([2, 0, 2, 1, 1, 0], 2))   # -> [0, 0, 1, 1, 2, 2]`,
      followUps: ["What happens to counting sort if the range of values is huge?"],
    },
    {
      question: "How do you merge overlapping intervals, and why does sorting make it work?",
      answer:
        "Sort intervals by start. Then any interval that overlaps the current merged block must come right after it, because everything later starts even later. Walk once: if the next interval starts at or before the current end, extend the end to the maximum of the two; otherwise start a new block. O(n log n) for sorting plus O(n) for the pass; O(n) for the output.",
      code: `def merge_intervals(intervals):
    merged = []
    for start, end in sorted(intervals):
        if merged and start <= merged[-1][1]:
            merged[-1][1] = max(merged[-1][1], end)
        else:
            merged.append([start, end])
    return merged

print(merge_intervals([[1, 3], [8, 10], [2, 6], [15, 18]]))   # -> [[1, 6], [8, 10], [15, 18]]
print(merge_intervals([[1, 4], [4, 5]]), merge_intervals([]))   # -> [[1, 5]] []`,
      followUps: ["Should [1, 4] and [4, 5] be merged? How would you confirm the requirement?"],
    },
    {
      question: "How do you find the minimum number of intervals to remove so that none overlap?",
      answer:
        "Sort by end time (breaking ties by start) and greedily keep each interval that starts at or after the end of the last kept one; count the rest as removed. Keeping the interval that ends earliest always leaves the most room for the remaining intervals, so no other choice can keep more. O(n log n) time. The same idea solves activity selection and \"minimum arrows\" problems.",
      code: `def min_removals(intervals):
    removed, last_end = 0, float("-inf")
    for start, end in sorted(intervals, key=lambda iv: (iv[1], iv[0])):
        if start >= last_end:
            last_end = end          # keep it
        else:
            removed += 1            # overlaps the last kept interval
    return removed

print(min_removals([[1, 2], [2, 3], [3, 4], [1, 3]]), min_removals([[1, 2], [1, 2], [1, 2]]), min_removals([]))
# -> 1 2 0`,
      followUps: ["Why does sorting by start time instead give wrong answers?"],
    },
  ],
  mistakes: [
    "Claiming quicksort is always O(n log n), or that merge sort sorts in O(1) extra space.",
    "Writing your own sort when the built-in would do, wasting interview time.",
    "Forgetting to sort intervals before merging, or sorting by the wrong field for greedy problems.",
    "Not clarifying whether touching intervals (end == start) count as overlapping.",
    "Mutating the caller's interval lists while merging without saying so.",
  ],
  mastery: [
    "You implement merge sort and explain quicksort, including pivot choice and the worst case.",
    "You state the time, space and stability of merge sort, quicksort, counting sort and Python's sort.",
    "You merge and insert intervals and solve a greedy interval problem, explaining why sorting makes it correct.",
    "You decide quickly whether sorting first is worth its O(n log n) cost.",
  ],
  deprioritize: [
    "Heapsort, shell sort, radix sort implementation details and Timsort internals.",
    "Interval trees, sweep-line algorithms for geometry and meeting-room problems behind paywalls.",
    "Formal proofs of the O(n log n) comparison lower bound.",
  ],
  keywords: [
    "sorting algorithms",
    "merge sort",
    "quicksort",
    "pivot",
    "stable sort",
    "counting sort",
    "intervals",
    "merge intervals",
    "insert interval",
    "overlapping intervals",
    "greedy",
    "O(n log n)",
  ],
};

export default topic;
