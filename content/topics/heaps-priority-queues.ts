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
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Heap cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/heap/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the operation costs and the techniques for top-k and merging.",
    },
    {
      title: "Python Standard Library — heapq",
      url: "https://docs.python.org/3/library/heapq.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference. Read the function list, Basic Examples and Priority Queue Implementation Notes (tie-breakers). Note that the max-heap functions require Python 3.14 or later.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 6.9 Priority Queues with Binary Heaps",
      url: "https://runestone.academy/ns/books/published/pythonds3/Trees/PriorityQueueswithBinaryHeaps.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read 6.9–6.11 to understand sift-up, sift-down and why heapify is O(n). You do not need to memorize the implementation.",
    },
    {
      title: "VisuAlgo — Binary Heap",
      url: "https://visualgo.net/en/heap",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Watch insert and extract-max to see the O(log n) path.",
    },
  ],
  exercises: [
    {
      title: "Last Stone Weight (LeetCode)",
      url: "https://leetcode.com/problems/last-stone-weight/",
      note: "Foundation, Easy. Max-heap via negation.",
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
        "A heap is a complete binary tree with the heap property: in a min-heap every parent is less than or equal to its children, so the minimum is at the root. Stored in a list, the children of index i are at 2i + 1 and 2i + 2. Peeking at the minimum is O(1); push and pop are O(log n) because they move one element along a root-to-leaf path; building a heap from n items with heapify is O(n). Unlike a BST, a heap is not fully sorted.",
      code: `import heapq

heap = [5, 1, 8, 3]
heapq.heapify(heap)                 # O(n)
heapq.heappush(heap, 2)             # O(log n)
print(heap[0])                      # minimum, O(1)  # -> 1
print([heapq.heappop(heap) for _ in range(len(heap))])   # -> [1, 2, 3, 5, 8]`,
      followUps: ["Why is a heap not a good structure for searching for an arbitrary value?"],
    },
    {
      question: "Python's heapq is a min-heap. How do you get a max-heap?",
      answer:
        "Push negated numbers and negate again when you pop. For non-numeric priorities, push a key that reverses the order, such as (-score, name). Python 3.14 adds dedicated max-heap functions (heappush_max, heappop_max, heapify_max), but negation works in every version and is what most interview solutions use.",
      code: `import heapq

stones = [2, 7, 4, 1, 8, 1]
heap = [-s for s in stones]
heapq.heapify(heap)
while len(heap) > 1:
    a, b = -heapq.heappop(heap), -heapq.heappop(heap)
    if a != b:
        heapq.heappush(heap, -(a - b))
print(-heap[0] if heap else 0)      # last stone weight  # -> 1`,
      followUps: ["What would happen if two entries had equal priority and the items themselves could not be compared?"],
    },
    {
      question: "How do you find the k largest elements, and when is a heap better than sorting?",
      answer:
        "Keep a min-heap of size k: push each element and pop whenever the heap exceeds k, so the heap always holds the k largest seen so far and its root is the k-th largest. That is O(n log k) time and O(k) space, versus O(n log n) time for sorting. When k is close to n, sorting is just as good and simpler; heapq.nlargest implements the heap approach for you.",
      code: `import heapq

def kth_largest(nums, k):
    heap = []
    for x in nums:
        heapq.heappush(heap, x)
        if len(heap) > k:
            heapq.heappop(heap)
    return heap[0]

nums = [3, 2, 1, 5, 6, 4]
print(kth_largest(nums, 2), heapq.nlargest(2, nums), sorted(nums)[-2])   # -> 5 [6, 5] 5`,
      followUps: ["What is quickselect, and what are its average and worst-case costs?"],
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
    },
    {
      question: "How do you merge k sorted lists efficiently?",
      answer:
        "Put the first element of each list in a min-heap with its list index. Repeatedly pop the smallest, append it to the output, and push the next element from the same list. The heap never holds more than k entries, so each of the N total elements costs O(log k): O(N log k) time and O(k) extra space. Merging lists pairwise one after another can cost O(N × k).",
      code: `import heapq

def merge_k(lists):
    heap = [(lst[0], i, 0) for i, lst in enumerate(lists) if lst]
    heapq.heapify(heap)
    out = []
    while heap:
        value, i, j = heapq.heappop(heap)
        out.append(value)
        if j + 1 < len(lists[i]):
            heapq.heappush(heap, (lists[i][j + 1], i, j + 1))
    return out

print(merge_k([[1, 4, 5], [1, 3, 4], [2, 6]]), merge_k([[], []]))   # -> [1, 1, 2, 3, 4, 4, 5, 6] []`,
      followUps: ["How does this relate to merging sorted files that do not fit in memory?"],
    },
    {
      question: "When would you not use a heap?",
      answer:
        "If you need only the single minimum or maximum once, min() or max() is O(n) and simpler. If you need every element in order, sort. If you need to search for or delete arbitrary elements, a heap is a poor fit (O(n) search); a sorted structure or a hash map is better. Heaps shine when you repeatedly need the current best element while items keep arriving.",
      code: `scores = [72, 95, 88]
print(max(scores))                 # one maximum: O(n), no heap needed  # -> 95`,
      followUps: ["Which real systems repeatedly need the current best element?"],
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
