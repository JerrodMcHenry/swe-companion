import type { Topic } from "../types";

const topic: Topic = {
  slug: "binary-search",
  title: "Binary Search",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "Binary search repeatedly halves a search range by checking the middle and discarding the half that cannot contain the answer, finding a target in O(log n). It works on any range where a yes/no condition switches from false to true exactly once: sorted arrays, insertion positions, and ranges of possible answers.",
  whyItMatters:
    "Binary search is short to write but easy to get wrong, which is why interviewers use it to test precision with boundaries and loop conditions. Employer preparation guides list searching alongside sorting (for example Meta's), and it appears in both independent preparation lists reviewed for this curriculum. Recognizing \"search the answer space\" problems is a frequent step up from Easy to Medium.",
  prerequisites: ["Lists", "Complexity Analysis", "Sorting and Custom Sort Keys"],
  objectives: [
    "Implement binary search on a sorted list without off-by-one errors, and explain the loop invariant.",
    "Find the first or last position of a value (lower and upper bound) and an insertion position.",
    "Use Python's bisect module, and know what bisect_left and bisect_right return.",
    "Recognize monotonic conditions and binary search over an answer range (\"minimum speed such that…\").",
    "Handle rotated sorted arrays by deciding which half is sorted.",
    "State O(log n) time and O(1) space, and include the cost of sorting first if the input is unsorted.",
    "Test empty input, one element, target absent, target at either end, and duplicates.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Sorting and searching cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/sorting-searching/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the binary search section and its techniques; the sorting part is used in Sorting and Intervals.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 5.4 The Binary Search",
      url: "https://runestone.academy/ns/books/published/pythonds3/SortSearch/TheBinarySearch.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read the iterative version and its analysis; note why the slicing-based recursive version is not O(log n).",
    },
    {
      title: "Python Standard Library — bisect",
      url: "https://docs.python.org/3/library/bisect.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read the descriptions of bisect_left and bisect_right and the \"Searching Sorted Lists\" recipes.",
    },
  ],
  exercises: [
    {
      title: "Binary Search (LeetCode)",
      url: "https://leetcode.com/problems/binary-search/",
      note: "Foundation, Easy. Write it from scratch three times on different days until the boundaries are automatic.",
    },
    {
      title: "Search Insert Position (LeetCode)",
      url: "https://leetcode.com/problems/search-insert-position/",
      note: "Foundation, Easy. Lower-bound search; compare with bisect_left.",
    },
    {
      title: "First Bad Version (LeetCode)",
      url: "https://leetcode.com/problems/first-bad-version/",
      note: "Foundation, Easy. Find the first true in a false…true sequence.",
    },
    {
      title: "Find First and Last Position of Element in Sorted Array (LeetCode)",
      url: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
      note: "Reinforcement, Medium. Two boundary searches.",
    },
    {
      title: "Search in Rotated Sorted Array (LeetCode)",
      url: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      note: "Reinforcement, Medium. Decide which half is sorted at each step.",
    },
    {
      title: "Find Minimum in Rotated Sorted Array (LeetCode)",
      url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      note: "Reinforcement, Medium. Compare the middle with the right end.",
    },
    {
      title: "Koko Eating Bananas (LeetCode)",
      url: "https://leetcode.com/problems/koko-eating-bananas/",
      note: "Transfer, Medium. Binary search on the answer (eating speed) with a feasibility check.",
    },
    {
      title: "Time Based Key-Value Store (LeetCode)",
      url: "https://leetcode.com/problems/time-based-key-value-store/",
      note: "Optional stretch, Medium. Dictionary of sorted timestamp lists plus bisect.",
    },
  ],
  interviewQuestions: [
    {
      question: "How does binary search work, and why is it O(log n)?",
      answer:
        "Keep a range [low, high] that must contain the target if it exists. Compare the middle element with the target and discard the half that cannot contain it. Each step halves the range, so after about log₂ n steps it is empty or the target is found: O(log n) time, O(1) extra space for the iterative version. It requires sorted data (or a monotonic condition); sorting first costs O(n log n).",
      code: `def binary_search(nums, target):
    low, high = 0, len(nums) - 1          # inclusive range
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

data = [-1, 0, 3, 5, 9, 12]
print(binary_search(data, 9), binary_search(data, 2), binary_search([], 1), binary_search([4], 4))
# -> 4 -1 -1 0`,
      followUps: ["Why do some languages write mid = low + (high - low) // 2? Does Python need it?"],
    },
    {
      question: "How do you avoid off-by-one errors in binary search?",
      answer:
        "Choose one convention and keep its invariant. With an inclusive range [low, high], loop while low <= high and move to mid + 1 or mid - 1. With a half-open range [low, high), loop while low < high and set high = mid. Before coding, state what the range means; when finished, check what low or high points to for an absent target and for targets at both ends.",
      code: `def lower_bound(nums, target):            # first index with nums[i] >= target
    low, high = 0, len(nums)               # half-open [low, high)
    while low < high:
        mid = (low + high) // 2
        if nums[mid] < target:
            low = mid + 1
        else:
            high = mid
    return low

data = [1, 3, 3, 3, 8]
print(lower_bound(data, 3), lower_bound(data, 4), lower_bound(data, 0), lower_bound(data, 9))
# -> 1 4 0 5`,
      followUps: ["What does the function return if the target is larger than every element?"],
    },
    {
      question: "How do you find the first and last occurrence of a value?",
      answer:
        "Run two boundary searches: the first index with value >= target (lower bound) and the first index with value > target (upper bound). If the lower bound is out of range or not equal to the target, the value is absent; otherwise the occurrences span [lower, upper - 1]. Python's bisect_left and bisect_right compute exactly these bounds. Both searches are O(log n).",
      code: `from bisect import bisect_left, bisect_right

def search_range(nums, target):
    left = bisect_left(nums, target)
    if left == len(nums) or nums[left] != target:
        return [-1, -1]
    return [left, bisect_right(nums, target) - 1]

print(search_range([5, 7, 7, 8, 8, 10], 8), search_range([5, 7, 7, 8, 8, 10], 6), search_range([], 0))
# -> [3, 4] [-1, -1] [-1, -1]`,
      followUps: ["How would you count occurrences of a value in a sorted list in O(log n)?"],
    },
    {
      question: "What does \"binary search on the answer\" mean?",
      answer:
        "When you are asked for the minimum (or maximum) value that satisfies a condition, and the condition is monotonic — if speed s works, every faster speed also works — you can binary search over the range of possible answers, using a feasibility check at each midpoint. The cost is O(log(range) × cost of the check). Signals: \"minimum capacity\", \"smallest speed\", \"maximize the minimum\".",
      code: `import math

def min_eating_speed(piles, hours):
    def can_finish(speed):
        return sum(math.ceil(p / speed) for p in piles) <= hours

    low, high = 1, max(piles)
    while low < high:
        mid = (low + high) // 2
        if can_finish(mid):
            high = mid          # mid works; look for something smaller
        else:
            low = mid + 1
    return low

print(min_eating_speed([3, 6, 7, 11], 8), min_eating_speed([30, 11, 23, 4, 20], 5))
# -> 4 30`,
      followUps: ["What is the time complexity in terms of the number of piles and the largest pile?"],
    },
    {
      question: "How do you search in a rotated sorted array?",
      answer:
        "At each step at least one half, [low, mid] or [mid, high], is sorted. Determine which by comparing nums[low] with nums[mid]. If the target lies within the sorted half's range, search there; otherwise search the other half. This keeps O(log n) time, assuming distinct values; duplicates can force a linear scan in the worst case.",
      code: `def search_rotated(nums, target):
    low, high = 0, len(nums) - 1
    while low <= high:
        mid = (low + high) // 2
        if nums[mid] == target:
            return mid
        if nums[low] <= nums[mid]:                  # left half sorted
            if nums[low] <= target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        else:                                       # right half sorted
            if nums[mid] < target <= nums[high]:
                low = mid + 1
            else:
                high = mid - 1
    return -1

print(search_rotated([4, 5, 6, 7, 0, 1, 2], 0), search_rotated([4, 5, 6, 7, 0, 1, 2], 3), search_rotated([1], 1))
# -> 4 -1 0`,
      followUps: ["How would you find the rotation point itself?"],
    },
    {
      question: "When is binary search not appropriate?",
      answer:
        "When the data is unsorted and you search only once (a linear scan is O(n), cheaper than sorting at O(n log n)); when the condition is not monotonic; or when the data structure does not support O(1) access by index, such as a linked list. For many lookups by exact key, a set or dictionary gives O(1) average time without sorting.",
      code: `values = [9, 2, 7, 4]
print(7 in values)                 # one search on unsorted data: O(n) is fine  # -> True
lookup = set(values)
print(all(v in lookup for v in (2, 4, 9)))   # many exact lookups: use a set  # -> True`,
      followUps: ["When would you still sort and use binary search instead of a set?"],
    },
  ],
  mistakes: [
    "Mixing conventions (inclusive and half-open), causing infinite loops or skipped elements.",
    "Updating low = mid instead of mid + 1 with an inclusive range, which can loop forever.",
    "Using recursion with slices (nums[mid:]), which copies and makes each call O(n).",
    "Forgetting to check that the found index is in range and actually equals the target.",
    "Applying binary search to unsorted data or a non-monotonic condition.",
  ],
  mastery: [
    "You implement exact search, lower bound and upper bound from scratch and explain your invariant.",
    "You use bisect correctly and know what each function returns.",
    "You recognize answer-space problems and write the feasibility check.",
    "You test empty, single-element, absent, boundary and duplicate cases.",
  ],
  deprioritize: [
    "Ternary search, fractional cascading and binary search on floating-point answers with precision analysis.",
    "Median of Two Sorted Arrays; it is a well-known Hard problem with limited entry-level value.",
  ],
  keywords: [
    "binary search",
    "bisect",
    "lower bound",
    "upper bound",
    "insertion point",
    "sorted array",
    "rotated sorted array",
    "search space",
    "answer space",
    "O(log n)",
    "invariant",
  ],
};

export default topic;
