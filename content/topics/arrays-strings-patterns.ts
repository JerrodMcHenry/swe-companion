import type { Topic } from "../types";

const topic: Topic = {
  slug: "arrays-strings-patterns",
  title: "Arrays and Strings Patterns",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "Most array and string problems are solved with a few reusable techniques: a single pass with running values, two pointers moving toward each other or in the same direction, a sliding window over a contiguous range, prefix sums for fast range totals, and in-place updates. Recognizing which one fits is most of the work.",
  whyItMatters:
    "Arrays and strings are the most common inputs in coding interviews and online assessments, and these patterns turn many O(n²) brute-force solutions into O(n). Employer guidance lists arrays and strings among core topics (for example Meta's preparation guide), and both independent preparation lists reviewed for this curriculum (Tech Interview Handbook and NeetCode) organize practice around these patterns. The underlying list and string operations are covered in Programming Fluency; this topic is about techniques.",
  prerequisites: ["Lists", "Strings", "Complexity Analysis", "Problem-Solving Process and Communication"],
  objectives: [
    "Solve problems in one pass by maintaining running values (minimum so far, best so far, counts).",
    "Use opposite-direction two pointers on sorted arrays and for palindromes or pair searches.",
    "Use same-direction (fast and slow) pointers to filter or compact an array in place.",
    "Use a variable-size sliding window for \"longest/shortest contiguous subarray or substring with a property\".",
    "Use a fixed-size sliding window, updating counts as elements enter and leave.",
    "Build prefix sums to answer range-sum questions in O(1) after O(n) preprocessing.",
    "Modify arrays in place when required, and explain the space trade-off.",
    "Recognize when sorting first enables two pointers, and include the O(n log n) cost.",
    "Recognize when these patterns do not apply (non-contiguous choices, negative numbers breaking window monotonicity).",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Array cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/array/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the techniques (sliding window, two pointers, traversing from the right, prefix sums) and the corner cases; skip the course advertisements.",
    },
    {
      title: "String cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/string/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the techniques section on counting characters and anagram and palindrome checks.",
    },
    {
      title: "NeetCode roadmap — Two Pointers and Sliding Window",
      url: "https://neetcode.io/roadmap",
      provider: "NeetCode",
      type: "Interactive",
      instructions:
        "Optional free problem map with linked video explanations on YouTube. Use the Two Pointers and Sliding Window nodes as an alternative explanation; paid features are not needed.",
    },
  ],
  exercises: [
    {
      title: "Best Time to Buy and Sell Stock (LeetCode)",
      url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      note: "Foundation, Easy. One pass with a running minimum. O(n) time, O(1) space.",
    },
    {
      title: "Squares of a Sorted Array (LeetCode)",
      url: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      note: "Foundation, Easy. Opposite-direction pointers filling the result from the end; beats squaring and sorting.",
    },
    {
      title: "Longest Substring Without Repeating Characters (LeetCode)",
      url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      note: "Reinforcement, Medium. Variable sliding window with a set or last-seen dictionary.",
    },
    {
      title: "Container With Most Water (LeetCode)",
      url: "https://leetcode.com/problems/container-with-most-water/",
      note: "Reinforcement, Medium. Two pointers; explain why moving the shorter side is safe.",
    },
    {
      title: "Product of Array Except Self (LeetCode)",
      url: "https://leetcode.com/problems/product-of-array-except-self/",
      note: "Reinforcement, Medium. Prefix and suffix products without division.",
    },
    {
      title: "3Sum (LeetCode)",
      url: "https://leetcode.com/problems/3sum/",
      note: "Transfer, Medium. Sort, then two pointers for each element; handle duplicates carefully. O(n²).",
    },
    {
      title: "Find All Anagrams in a String (LeetCode)",
      url: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      note: "Transfer, Medium. Fixed-size window with character counts.",
    },
    {
      title: "Longest Repeating Character Replacement (LeetCode)",
      url: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      note: "Transfer, Medium. Window validity depends on the most frequent character.",
    },
    {
      title: "Minimum Window Substring (LeetCode)",
      url: "https://leetcode.com/problems/minimum-window-substring/",
      note: "Optional stretch, Hard. Shrinking window with requirement counts.",
    },
    {
      title: "Trapping Rain Water (LeetCode)",
      url: "https://leetcode.com/problems/trapping-rain-water/",
      note: "Optional stretch, Hard. Prefix maxima or two pointers.",
    },
  ],
  interviewQuestions: [
    {
      question: "When do two pointers work, and why is the technique correct?",
      answer:
        "Opposite-direction pointers work when the input is sorted (or symmetric, as in palindromes) and moving one pointer predictably changes the quantity you compare. For a pair sum in a sorted array: if the sum is too small, moving the left pointer right is the only way to increase it, and no pair using the current left element with any remaining right element can work, so discarding it is safe. Each step discards one candidate, giving O(n) time and O(1) space.",
      code: `def pair_with_sum(sorted_nums, target):
    left, right = 0, len(sorted_nums) - 1
    while left < right:
        total = sorted_nums[left] + sorted_nums[right]
        if total == target:
            return left, right
        if total < target:
            left += 1          # need a larger sum
        else:
            right -= 1         # need a smaller sum
    return None

print(pair_with_sum([1, 3, 4, 6, 9], 10), pair_with_sum([1, 2], 7), pair_with_sum([], 1))
# -> (0, 4) None None`,
      followUps: ["What changes if the array is not sorted? What does sorting cost?"],
    },
    {
      question: "What is a sliding window, and how do you recognize a sliding-window problem?",
      answer:
        "A sliding window maintains a contiguous range [left, right] and updates a summary (counts, sum, set) as right expands and left shrinks, instead of recomputing every subarray. Signals: \"contiguous subarray or substring\", \"longest/shortest/at most k\", and a validity condition that becomes true or false monotonically as the window grows. Each index enters and leaves at most once, so it runs in O(n).",
      code: `def longest_unique_substring(s):
    last_seen = {}
    left = best = 0
    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1        # shrink past the repeat
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best

for s in ["abcabcbb", "bbbb", "", "pwwkew"]:
    print(repr(s), longest_unique_substring(s))
# -> 'abcabcbb' 3
# -> 'bbbb' 1
# -> '' 0
# -> 'pwwkew' 3`,
      followUps: ["Why does a sliding window fail for \"subarray sum equals k\" when numbers can be negative?"],
    },
    {
      question: "What are prefix sums, and when are they useful?",
      answer:
        "A prefix sum array stores prefix[i] = sum of the first i elements, so the sum of any range [i, j) is prefix[j] - prefix[i] in O(1) after O(n) preprocessing and O(n) extra space. Use it when many range-sum queries are asked, or combine it with a hash map to count subarrays with a given sum (which handles negative numbers, unlike a sliding window).",
      code: `from itertools import accumulate

nums = [3, -1, 4, 1, 5]
prefix = [0] + list(accumulate(nums))
print(prefix)                      # -> [0, 3, 2, 6, 7, 12]
print(prefix[4] - prefix[1])       # sum of nums[1:4]  # -> 4`,
      followUps: ["How would you extend prefix sums to a two-dimensional grid?"],
    },
    {
      question: "How do you remove or rearrange elements in place, and what does that save?",
      answer:
        "Use a write pointer that marks where the next kept element goes and a read pointer that scans every element. Each kept element is copied forward once, so the pass is O(n) time and O(1) extra space. It avoids allocating a new list, but it mutates the caller's data, so confirm that this is allowed.",
      code: `def remove_value(nums, val):
    write = 0
    for read in range(len(nums)):
        if nums[read] != val:
            nums[write] = nums[read]
            write += 1
    return write                      # new logical length

data = [3, 2, 2, 3, 4]
k = remove_value(data, 3)
print(k, data[:k])                    # -> 3 [2, 2, 4]
print(remove_value([], 1))            # -> 0`,
      followUps: ["Why is calling list.remove() in a loop slower?"],
    },
    {
      question: "How do you choose between a hash map and two pointers for a pair problem?",
      answer:
        "On unsorted input, a hash map finds a pair in O(n) average time and O(n) space. If the input is already sorted, two pointers find it in O(n) time and O(1) space. Sorting first costs O(n log n) and loses original indexes, so it is worthwhile mainly when the problem needs sorted order anyway (as in 3Sum) or memory is tight.",
      code: `def two_sum_indexes(nums, target):        # unsorted: hash map
    seen = {}
    for i, x in enumerate(nums):
        if target - x in seen:
            return [seen[target - x], i]
        seen[x] = i
    return None

print(two_sum_indexes([3, 2, 4], 6))   # -> [1, 2]`,
      followUps: ["How would you find all unique triplets that sum to zero?"],
    },
    {
      question: "Walk through an O(n) solution for Product of Array Except Self without division.",
      answer:
        "The answer at i is the product of everything to the left of i times everything to the right. One pass left to right stores running prefix products in the output array; a second pass right to left multiplies in a running suffix product. That is O(n) time and O(1) extra space beyond the output. Avoiding division also handles zeros correctly.",
      code: `def product_except_self(nums):
    result = [1] * len(nums)
    prefix = 1
    for i in range(len(nums)):
        result[i] = prefix
        prefix *= nums[i]
    suffix = 1
    for i in range(len(nums) - 1, -1, -1):
        result[i] *= suffix
        suffix *= nums[i]
    return result

print(product_except_self([1, 2, 3, 4]))    # -> [24, 12, 8, 6]
print(product_except_self([0, 4, 5]))       # -> [20, 0, 0]`,
      followUps: ["Why does the division-based approach fail with zeros?"],
    },
  ],
  mistakes: [
    "Using a sliding window on problems that are not about contiguous ranges, or where negative numbers break the window's monotonic behavior.",
    "Off-by-one errors in window length (right - left + 1) and in prefix-sum indexes.",
    "Forgetting to skip duplicates in 3Sum-style problems, producing repeated answers.",
    "Slicing inside a loop (O(k) each time) instead of moving indexes.",
    "Sorting when original indexes are part of the required output.",
    "Mutating the input without confirming that it is allowed.",
  ],
  mastery: [
    "Given an unseen array or string problem, you can say whether a single pass, two pointers, sliding window or prefix sums fits, and why.",
    "You implement each pattern correctly, including window shrinking and duplicate handling.",
    "You explain why two pointers or a sliding window does not miss the answer.",
    "You state O(n) time and the extra space used, including any sort.",
    "You solve the Reinforcement problems above independently and at least one Transfer problem without hints.",
  ],
  deprioritize: [
    "Specialized string algorithms (KMP, Rabin–Karp, suffix arrays, Manacher's algorithm).",
    "Monotonic deques for sliding window maximum beyond recognizing the idea; it appears in Stacks and Queues as optional.",
  ],
  keywords: [
    "arrays",
    "two pointers",
    "sliding window",
    "prefix sum",
    "in place",
    "subarray",
    "substring",
    "contiguous",
    "running maximum",
    "3sum",
  ],
};

export default topic;
