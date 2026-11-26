import type { Topic } from "../types";

const topic: Topic = {
  slug: "heaps-priority-queues",
  title: "Heaps and Priority Queues",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A heap is a complete binary tree, usually stored in a list, in which every parent is ordered relative to its children: smallest at the top in a min-heap, largest in a max-heap. It gives O(1) access to the minimum (or maximum) and O(log n) insertion and removal, which makes it the standard implementation of a priority queue. Python provides one in the heapq module.",
  whyItMatters:
    "Heaps solve \"top k\", \"k-th largest\", \"merge k sorted inputs\" and \"always process the most urgent item next\" problems more efficiently than sorting everything, and they power Dijkstra's shortest-path algorithm. They are named in employer preparation guides (for example Meta's) and appear in both independent preparation lists reviewed. In production, priority queues schedule jobs, timers and events.",
  prerequisites: ["Trees and Binary Search Trees", "Sorting and Custom Sort Keys", "Complexity Analysis"],
  objectives: [
    "Explain the heap property and why a heap is stored as a list with children at 2i + 1 and 2i + 2.",
    "Use heapq.heappush, heappop, heapify and heap[0], and state their costs.",
    "Simulate a max-heap with negated values (Python 3.14 also adds max-heap functions such as heappush_max).",
    "Store (priority, tie-breaker, item) tuples so that comparisons never reach unorderable items.",
    "Solve top-k problems with a size-k heap in O(n log k), and compare with sorting (O(n log n)) and heapq.nlargest.",
    "Merge k sorted lists with a heap in O(N log k).",
    "Recognize when a heap is unnecessary (one minimum: use min(); everything in order: sort).",
    "Skip for now: implementing a heap from scratch, decrease-key, Fibonacci and d-ary heaps, and quickselect implementation details.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "VisuAlgo — Binary Heap (Priority Queue)",
      url: "https://visualgo.net/en/heap",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions:
        "Start here. Use the e-lecture mode and read from Priority Queue ADT through Insert(v), ExtractMax() and the Create(A) – O(N) slides, running each operation in the visualisation to see the O(log n) path. VisuAlgo uses a 1-based max-heap; Python's heapq is a 0-based min-heap (children at 2i + 1 and 2i + 2). Skip HeapSort, UpdateKey, Delete and Extras. Free; no account.",
    },
    {
      title: "Python Standard Library — heapq",
      url: "https://docs.python.org/3/library/heapq.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Required reference for the Python side. Read the function list (heappush, heappop, heapify, nlargest, nsmallest, merge), Basic Examples and Priority Queue Implementation Notes (tie-breakers). The max-heap functions require Python 3.14 or later.",
    },
    {
      title: "MIT 6.006 (Spring 2020) — Lecture 8: Binary Heaps (video)",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-8-binary-heaps/",
      provider: "MIT OpenCourseWare",
      type: "Video",
      instructions:
        "Video alternative to VisuAlgo if you prefer a lecture: array layout, sift-up and sift-down, and why building a heap is O(n). The lecture notes PDF is optional. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Last Stone Weight (LeetCode)",
      url: "https://leetcode.com/problems/last-stone-weight/",
      note: "Foundation, Easy. Max-heap via negation. LeetCode needs a free account to submit.",
    },
    {
      title: "Kth Largest Element in an Array (LeetCode)",
      url: "https://leetcode.com/problems/kth-largest-element-in-an-array/",
      note: "Foundation, Medium. Size-k min-heap, O(n log k); compare with sorting.",
    },
    {
      title: "K Closest Points to Origin (LeetCode)",
      url: "https://leetcode.com/problems/k-closest-points-to-origin/",
      note: "Reinforcement, Medium. Heap keyed by squared distance.",
    },
    {
      title: "Top K Frequent Elements (LeetCode)",
      url: "https://leetcode.com/problems/top-k-frequent-elements/",
      note: "Reinforcement, Medium. Counting plus a heap (also listed in Hash Maps; solve it once and compare approaches).",
    },
    {
      title: "Merge k Sorted Lists (LeetCode)",
      url: "https://leetcode.com/problems/merge-k-sorted-lists/",
      note: "Transfer, Hard. Heap of (value, index, node) entries; O(N log k).",
    },
    {
      title: "Find Median from Data Stream (LeetCode)",
      url: "https://leetcode.com/problems/find-median-from-data-stream/",
      note: "Optional stretch, Hard. Two heaps.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is a heap, and what do its operations cost?",
      answer:
        "A heap is a complete binary tree with the heap property: in a min-heap every parent is less than or equal to its children, so the minimum is at the root. Stored in a list, the children of index i are at 2i + 1 and 2i + 2. Peeking at the minimum is O(1); push and pop are O(log n) because they move one element along a root-to-leaf path; heapify builds a heap from n items in O(n). Unlike a BST, a heap is not fully sorted.",
      code: `import heapq

heap = [5, 1, 8, 3]
heapq.heapify(heap)                 # O(n)
heapq.heappush(heap, 2)             # O(log n)
print(heap[0])                      # minimum, O(1)  # -> 1
print([heapq.heappop(heap) for _ in range(len(heap))])   # -> [1, 2, 3, 5, 8]`,
      followUps: ["Why is a heap not a good structure for searching for an arbitrary value?"],
      source: { title: "Python Docs — heapq", url: "https://docs.python.org/3/library/heapq.html" },
    },
    {
      question: "Python's heapq is a min-heap. How do you get a max-heap?",
      answer:
        "Push negated numbers and negate again when you pop. For non-numeric priorities, push a key that reverses the order, such as (-score, name). Python 3.14 adds dedicated max-heap functions (heappush_max, heappop_max, heapify_max), but negation works in every version, so it is the safe default.",
      code: `import heapq

heap = [-s for s in [2, 7, 4]]
heapq.heapify(heap)
print(-heapq.heappop(heap))          # largest  # -> 7`,
      followUps: ["What would happen if two entries had equal priority and the items themselves could not be compared?"],
      source: { title: "Python Docs — heapq.heappush_max (Python 3.14+)", url: "https://docs.python.org/3/library/heapq.html#heapq.heappush_max" },
    },
    {
      question: "How do you find the k largest elements, and when is a heap better than sorting?",
      answer:
        "Keep a min-heap of size k: push each element and pop whenever the heap exceeds k, so the heap holds the k largest seen so far and its root is the k-th largest. That is O(n log k) time and O(k) space, versus O(n log n) for sorting. When k is close to n, sorting is as good and simpler; heapq.nlargest implements the heap approach for you. Quickselect is an average O(n) alternative worth naming.",
      code: `import heapq

def kth_largest(nums, k):
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)        # drop the smallest of the k + 1
    return heap[0]

print(kth_largest([3, 2, 1, 5, 6, 4], 2))   # -> 5`,
      followUps: ["What is quickselect, and what are its average and worst-case costs?"],
      source: { title: "Tech Interview Handbook — Heap cheatsheet (Mention of k)", url: "https://www.techinterviewhandbook.org/algorithms/heap/" },
    },
    {
      question: "How do you store items with priorities in heapq, and why add a tie-breaker?",
      answer:
        "Push tuples whose first element is the priority. Tuples compare element by element, so if two priorities are equal Python compares the next element; if that is an object that cannot be compared (such as a dictionary or a custom node), it raises TypeError. Adding a unique counter as the second element guarantees comparisons stop before reaching the item and keeps insertion order among equal priorities.",
      code: `import heapq
from itertools import count

tasks, order = [], count()
for priority, task in [(2, {"name": "email"}), (1, {"name": "deploy"}), (2, {"name": "review"})]:
    heapq.heappush(tasks, (priority, next(order), task))

print([heapq.heappop(tasks)[2]["name"] for _ in range(3)])   # -> ['deploy', 'email', 'review']`,
      followUps: ["How would you change a task's priority after it has been pushed?"],
      source: { title: "Python Docs — heapq: Priority Queue Implementation Notes", url: "https://docs.python.org/3/library/heapq.html#priority-queue-implementation-notes" },
    },
    {
      question: "How do you merge k sorted lists efficiently?",
      answer:
        "Put the first element of each list in a min-heap together with its list index (the index breaks ties, so nodes are never compared). Repeatedly pop the smallest, append it to the output, and push the next element from the same list. The heap never holds more than k entries, so each of the N total elements costs O(log k): O(N log k) time and O(k) extra space. Merging lists one after another into a growing result can cost O(N × k). heapq.merge does this lazily for sorted iterables.",
      followUps: ["How does this relate to merging sorted files that do not fit in memory?"],
      source: { title: "Python Docs — heapq.merge", url: "https://docs.python.org/3/library/heapq.html#heapq.merge" },
    },
    {
      question: "When would you not use a heap?",
      answer:
        "If you need only the single minimum or maximum once, min() or max() is O(n) and simpler. If you need every element in order, or k is close to n, sort. If you need to search for or delete arbitrary elements, a heap is a poor fit (O(n) search); a sorted structure or a hash map is better. Heaps shine when you repeatedly need the current best element while items keep arriving.",
      followUps: ["Which real systems repeatedly need the current best element?"],
      source: { title: "Python Docs — heapq.nlargest (notes on min, max and sorted)", url: "https://docs.python.org/3/library/heapq.html#heapq.nlargest" },
    },
  ],
  mistakes: [
    "Forgetting that heapq is a min-heap and getting the order reversed.",
    "Pushing tuples whose later elements are not comparable when priorities tie.",
    "Treating the heap list as sorted; only heap[0] is guaranteed to be the minimum.",
    "Using a max-heap of size n for top-k when a min-heap of size k is cheaper.",
    "Calling heapify inside a loop, paying O(n) every time.",
    "Using a heap when a single min(), max() or one sort would do.",
  ],
  mastery: [
    "You explain the heap property, list layout and operation costs, including O(n) heapify.",
    "You use heapq fluently, including max-heaps via negation and tuple priorities with tie-breakers.",
    "You solve top-k and k-th largest problems in O(n log k) and compare with sorting.",
    "You merge k sorted inputs with a heap and state O(N log k).",
    "Skip this topic if you can already solve Kth Largest Element in an Array and K Closest Points to Origin with heapq and explain the costs.",
  ],
  deprioritize: [
    "Implementing a heap from scratch beyond understanding sift-up and sift-down; heapq is what you use in interviews and at work.",
    "Fibonacci heaps, d-ary heaps and decrease-key implementations.",
    "Quickselect implementation details; knowing its average O(n) and worst-case O(n²) is enough.",
  ],
  keywords: [
    "heap",
    "priority queue",
    "heapq",
    "min heap",
    "max heap",
    "top k",
    "kth largest",
    "merge k sorted",
    "heapify",
    "nlargest",
  ],
};

export default topic;
