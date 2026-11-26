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
    "Skip for now: heapsort, shell sort and radix sort implementations, Timsort/Powersort internals, and proofs of the comparison-sort lower bound.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "VisuAlgo — Sorting",
      url: "https://visualgo.net/en/sorting",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions:
        "Start here. In e-lecture mode, read the Insertion Sort, Merge Sort, Quick Sort (including the analysis slides and Random Quick Sort), Counting Sort and Stable Sort slides, running each algorithm on the same input. Skim bubble and selection sort; skip radix sort details. Free; no account.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 5.11 The Merge Sort and 5.12 The Quicksort",
      url: "https://runestone.academy/ns/books/published/pythonds3/SortSearch/TheMergeSort.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Written alternative with Python implementations. Read 5.11 and 5.12 with their analysis. The bubble, selection and shell sort sections are optional. Free; reading needs no account.",
    },
    {
      title: "CS50x — Merge Sort (short)",
      url: "https://cs50.harvard.edu/x/shorts/merge_sort/",
      provider: "Harvard University",
      type: "Video",
      instructions:
        "Short video alternative for merge sort only (examples in C). It does not cover quicksort; use VisuAlgo for that. Free; no account.",
    },
    {
      title: "Interval cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/interval/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions:
        "Start here for the interval half. Read Things to look out for, Corner cases and Techniques (sort by start, overlap check, merging two intervals). Ignore the paid course recommendations at the end. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Sort an Array (LeetCode)",
      url: "https://leetcode.com/problems/sort-an-array/",
      note: "Foundation, Medium. Implement merge sort yourself (the problem forbids built-ins); then explain how you would choose a quicksort pivot. LeetCode needs a free account to submit.",
    },
    {
      title: "Merge Intervals (LeetCode)",
      url: "https://leetcode.com/problems/merge-intervals/",
      note: "Foundation, Medium. Already practised in Sorting and Custom Sort Keys; solve it again and explain why sorting by start makes one pass sufficient.",
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
      followUps: ["If your implementation slices the list at each level, does that change the overall complexity?"],
      source: { title: "VisuAlgo — Sorting: Merge Sort (e-lecture)", url: "https://visualgo.net/en/sorting" },
    },
    {
      question: "How does quicksort work, and why can it be O(n²)?",
      answer:
        "Quicksort picks a pivot, partitions the list into elements smaller than the pivot and elements larger than it, and recursively sorts each part. With balanced partitions it is O(n log n); if the pivot is always the smallest or largest element (for example, the first element of already sorted input), each partition removes only one element and it degrades to O(n²). A random pivot makes that worst case very unlikely, giving expected O(n log n). In-place versions use O(log n) stack space on average and are typically not stable.",
      followUps: ["How does in-place partitioning work?"],
      source: { title: "VisuAlgo — Sorting: Quick Sort and Random Quick Sort (e-lecture)", url: "https://visualgo.net/en/sorting" },
    },
    {
      question: "Should you implement your own sort in an interview?",
      answer:
        "Usually not. Use the built-in sort, state that it is O(n log n) and stable, and spend your time on the actual problem. Implement a sort only when the interviewer asks, or when a modified merge or partition step is the point of the problem (counting inversions, quickselect, three-way partitioning). Be able to explain at least one O(n log n) algorithm either way. Stability matters when you sort by one key and expect ties to keep their earlier order:",
      code: `records = [("ana", 3), ("ben", 1), ("cy", 3)]
print(sorted(records, key=lambda r: -r[1]))   # -> [('ana', 3), ('cy', 3), ('ben', 1)]`,
      followUps: ["Which property of the built-in sort did this example rely on?"],
      source: { title: "Python Docs — Sorting Techniques: Sort Stability and Complex Sorts", url: "https://docs.python.org/3/howto/sorting.html#sort-stability-and-complex-sorts" },
    },
    {
      question: "Can sorting ever be faster than O(n log n)?",
      answer:
        "Comparison-based sorting cannot beat O(n log n) in the worst case. If the values are integers in a small known range k, counting sort runs in O(n + k) by counting occurrences instead of comparing; radix and bucket sorts extend the idea. In interviews this appears as \"the values are only 0, 1 and 2\" or \"ages between 0 and 120\". If the range is huge, the O(k) counting array makes it impractical.",
      followUps: ["What happens to counting sort if the range of values is huge?"],
      source: { title: "VisuAlgo — Sorting: Counting Sort (e-lecture)", url: "https://visualgo.net/en/sorting" },
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

print(merge_intervals([[1, 3], [8, 10], [2, 6], [15, 18]]))   # -> [[1, 6], [8, 10], [15, 18]]`,
      followUps: ["Should [1, 4] and [4, 5] be merged? How would you confirm the requirement?"],
      source: { title: "NeetCode — Merge Intervals (LeetCode 56) video", url: "https://www.youtube.com/watch?v=44H3cEC2fFM" },
    },
    {
      question: "How do you find the minimum number of intervals to remove so that none overlap?",
      answer:
        "Sort by end time and greedily keep each interval that starts at or after the end of the last kept one; count the rest as removed. Keeping the interval that ends earliest always leaves the most room for the remaining intervals, so no other choice can keep more. O(n log n) time. The same idea solves activity selection and the minimum-arrows problem. (Sorting by start also works if, on overlap, you keep the interval with the smaller end.)",
      followUps: ["Why does keeping the interval that starts first, without comparing ends, give wrong answers?"],
      source: { title: "NeetCode — Non-Overlapping Intervals (LeetCode 435) video", url: "https://www.youtube.com/watch?v=nONCGxWoUfM" },
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
    "Skip this topic if you can already implement merge sort, explain quicksort's worst case and solve Insert Interval and Non-overlapping Intervals without hints.",
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
