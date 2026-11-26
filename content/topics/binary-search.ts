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
    "Skip for now: ternary search, binary search on real numbers and Median of Two Sorted Arrays.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Hello Interview — Binary Search Overview and Apple Harvest (Koko Eating Bananas)",
      url: "https://www.hellointerview.com/learn/code/binary-search/overview",
      provider: "Hello Interview",
      type: "Interactive",
      instructions:
        "Start here. Read Binary Search Overview (intuition, variables, code, edge cases), then Apple Harvest (Koko Eating Bananas) from the left-hand menu for binary search on the answer — attempt Koko Eating Bananas first if you want to practise unaided. About 45 minutes, in Python with step-through visualizations. Free to read without an account; Premium features are not needed.",
    },
    {
      title: "NeetCode — Binary Search (Leetcode 704)",
      url: "https://www.youtube.com/watch?v=s4DPM8ct1pI",
      provider: "NeetCode",
      type: "Video",
      instructions:
        "Video alternative to the overview. For the other exercises, the NeetCode roadmap's Binary Search node links a free video per problem; watch one only after attempting the problem.",
    },
    {
      title: "Binary Search — Search in sorted arrays and Search on arbitrary predicate",
      url: "https://cp-algorithms.com/num_methods/binary_search.html",
      provider: "Algorithms for Competitive Programming (cp-algorithms)",
      type: "Article",
      instructions:
        "Optional depth for boundary precision. Read Search in sorted arrays (including Lower bound and upper bound) and Search on arbitrary predicate (including Binary search on the answer): they explain the loop invariant that prevents off-by-one errors. Code is C++; the reasoning transfers. Skip Continuous search, Search with powers of 2 and Parallel binary search.",
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
      note: "Foundation, Easy. Write it from scratch three times on different days until the boundaries are automatic. LeetCode problems need a free account to submit.",
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
        "Keep a range [low, high] that must contain the target if it exists. Compare the middle element with the target and discard the half that cannot contain it. Each step halves the range, so after about log₂ n steps the target is found or the range is empty: O(log n) time and O(1) extra space for the iterative version. It requires sorted data (or a monotonic condition); sorting first costs O(n log n).",
      followUps: ["Why do some languages write mid = low + (high - low) // 2? Does Python need it?"],
      source: { title: "Hello Interview — Binary Search Overview", url: "https://www.hellointerview.com/learn/code/binary-search/overview" },
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
      source: { title: "cp-algorithms — Binary Search: Lower bound and upper bound", url: "https://cp-algorithms.com/num_methods/binary_search.html#lower-bound-and-upper-bound" },
    },
    {
      question: "How do you find the first and last occurrence of a value?",
      answer:
        "Run two boundary searches: the first index with value >= target (lower bound) and the first index with value > target (upper bound). If the lower bound is out of range or its element is not the target, the value is absent; otherwise the occurrences span [lower, upper - 1]. Python's bisect_left and bisect_right compute exactly these bounds, each in O(log n).",
      code: `from bisect import bisect_left, bisect_right

data = [5, 7, 7, 8, 8, 10]
print(bisect_left(data, 8), bisect_right(data, 8))   # -> 3 5
print(bisect_left(data, 6), bisect_right(data, 6))   # absent  # -> 1 1`,
      followUps: ["How would you count occurrences of a value in a sorted list in O(log n)?"],
      source: { title: "Python Docs — bisect.bisect_left", url: "https://docs.python.org/3/library/bisect.html#bisect.bisect_left" },
    },
    {
      question: "What does \"binary search on the answer\" mean?",
      answer:
        "When you are asked for the minimum (or maximum) value that satisfies a condition, and the condition is monotonic — if speed s works, every faster speed also works — you can binary search over the range of possible answers, running a feasibility check at each midpoint. The cost is O(log(range) × cost of the check); for Koko Eating Bananas that is O(n log m) for n piles and largest pile m. Signals: \"minimum capacity\", \"smallest speed\", \"maximize the minimum\".",
      followUps: ["What are the lowest and highest possible answers, and why?"],
      source: { title: "Hello Interview — Apple Harvest (Koko Eating Bananas)", url: "https://www.hellointerview.com/learn/code/binary-search/apple-harvest" },
    },
    {
      question: "How do you search in a rotated sorted array?",
      answer:
        "At each step at least one half, [low, mid] or [mid, high], is sorted. Determine which by comparing nums[low] with nums[mid]. If the target lies within the sorted half's range, search there; otherwise search the other half. This keeps O(log n) time, assuming distinct values; duplicates can force a linear scan in the worst case.",
      followUps: ["How would you find the rotation point (the minimum) itself?"],
      source: { title: "Hello Interview — Search in Rotated Sorted Array", url: "https://www.hellointerview.com/learn/code/binary-search/search-in-rotated-sorted-array" },
    },
    {
      question: "When is binary search not appropriate?",
      answer:
        "When the data is unsorted and you search only once (a linear scan is O(n), cheaper than sorting at O(n log n)); when the condition is not monotonic; or when the data structure does not support O(1) access by index, such as a linked list. For many lookups by exact key, a set or dictionary gives O(1) average time without sorting; binary search is still preferable when you need nearest values, ranges or insertion positions.",
      followUps: ["When would you still sort and use binary search instead of a set?"],
      source: { title: "Python Docs — Time complexity of built-in types: list", url: "https://docs.python.org/3/builtins/time-complexity.html#list" },
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
    "Skip this topic if you can already write lower and upper bound searches from scratch and solve Koko Eating Bananas without hints.",
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
