import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Interview approach",
    question: "What clarifying questions would you ask before solving a coding problem?",
    answer: "Questions that change the solution: the input type and size, whether it can be empty, whether values can be negative or duplicated, whether the input is sorted, what to return when there is no answer, whether several answers are valid, and whether I may modify the input. Constraints such as n up to 10^5 tell me an O(n²) approach is probably too slow. I restate the problem, then ask a few targeted questions rather than a long list.",
    followUps: ["How do the constraints help you choose an algorithm?"],
    source: { title: "Tech Interview Handbook — Upon receiving the question, make clarifications", url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/#2-upon-receiving-the-question-make-clarifications" },
  },
  {
    group: "Interview approach",
    question: "Should you always code the brute-force solution first?",
    answer: "No. Always be able to describe a correct straightforward approach and its complexity: it proves you understand the problem and gives a baseline. If you already see a better approach and can justify it, explain both briefly and implement the better one. If you are stuck on the optimal solution, implementing the straightforward one is better than having no working code.",
    followUps: ["When might the brute-force solution be the right final answer?"],
    source: { title: "Tech Interview Handbook — Work out and optimize your approach with the interviewer", url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/#3-work-out-and-optimize-your-approach-with-the-interviewer" },
  },
  {
    group: "Interview approach",
    question: "How do you find a better approach once you have a working one?",
    answer: "Look for repeated work. Common moves: replace a repeated search with a hash map or set lookup; sort first so that two pointers or binary search apply; keep a running value (sum, minimum, window) instead of recomputing; precompute prefix sums; or use a heap when you only need the top k. Also estimate the best possible complexity — if you must read every element, you cannot beat O(n) — so you know when to stop optimizing.",
    followUps: ["What signals suggest sorting first? What signals suggest a hash map?"],
    source: { title: "Tech Interview Handbook — How to optimize time complexity", url: "https://www.techinterviewhandbook.org/coding-interview-techniques/#how-to-optimize-time-complexity" },
  },
  {
    group: "Interview approach",
    question: "How do you test a solution without running it?",
    answer: "Read the code as if someone else wrote it, looking for off-by-one errors. Dry-run it on the given example, tracking variables in a small table, then on edge cases: empty input, one element, two elements, duplicates, negative numbers, all-equal values and the boundaries of each loop. Check that every branch returns the right type and that indexes stay in range. Say aloud what each test checks, then restate the time and space complexity.",
    followUps: ["Which edge cases would you test for a function that merges two sorted lists?"],
    source: { title: "Tech Interview Handbook — After coding, check your code and add test cases", url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/#5-after-coding-check-your-code-and-add-test-cases" },
  },
  {
    group: "Interview approach",
    question: "What should you do when you are stuck in an interview?",
    answer: "Say so and keep reasoning aloud. Draw the data and solve a concrete example by hand, noting what you do; try more examples; simplify the problem (smaller input, sorted input, no duplicates) or break it into parts; ask which data structure would make the slow step fast; and consider implementing the straightforward solution. Interviewers often give hints when they can see your reasoning, and taking a hint well is part of the assessment.",
    followUps: ["How do you use an interviewer's hint without losing your own reasoning?"],
    source: { title: "Tech Interview Handbook — How to find solutions to coding interview problems", url: "https://www.techinterviewhandbook.org/coding-interview-techniques/#how-to-find-solutions-to-coding-interview-problems" },
  },
  {
    group: "Interview approach",
    question: "How should you manage time in a 45-minute coding interview?",
    answer: "A rough editorial guide: about 5 minutes understanding and clarifying, 5–10 minutes on examples and the approach, 15–20 minutes implementing, and 5–10 minutes testing and discussing complexity and follow-ups. Leave room for introductions and your own questions, and compress the plan if there is more than one problem. Do not polish details before the core solution works; if you run short, say what you would finish or improve.",
    followUps: ["What would you say if you realize with five minutes left that your approach is wrong?"],
  },
  {
    group: "Complexity",
    question: "What does Big O notation mean?",
    answer: "Big O describes an upper bound on how a cost grows as the input size grows, ignoring constant factors and lower-order terms: 3n² + 5n + 2 is O(n²) because the n² term dominates for large n. When asked for \"the complexity\", give a tight bound on the worst case unless the question says otherwise. Big O says nothing about actual speed for small inputs, where constants can matter.",
    followUps: ["What are Big Omega and Big Theta, informally?"],
    source: { title: "USACO Guide — Time Complexity: Formal Definition of Big O", url: "https://usaco.guide/bronze/time-comp#formal-definition-of-big-o-notation" },
  },
  {
    group: "Complexity",
    question: "How do you analyze code with loops?",
    answer: "Count how many times the innermost work runs. Sequential blocks add (O(n) + O(n) = O(n)); nested loops multiply when their bounds are independent; a loop with a constant bound is O(1) however large the constant; a loop that halves or doubles a value runs O(log n) times. Use separate variables for separate inputs: looping over a list of size n and, inside, a list of size m is O(n × m), not O(n²).",
    code: `def halvings(n):
    steps = 0
    while n > 1:
        n //= 2          # halves each time -> O(log n)
        steps += 1
    return steps

print(halvings(8), halvings(1024), halvings(1_000_000))   # -> 3 10 19`,
    followUps: ["What is the complexity of a loop from 1 to n where i doubles each iteration?"],
    source: { title: "USACO Guide — Time Complexity: Complexity Calculations", url: "https://usaco.guide/bronze/time-comp#complexity-calculations" },
  },
  {
    group: "Complexity",
    question: "What is the difference between worst-case, average-case and amortized complexity?",
    answer: "Worst case is the most expensive input of size n; average case is the expected cost over a distribution of inputs; amortized cost is the average cost per operation over a sequence of operations. Dictionary lookup is O(1) on average but O(n) in the worst case when many keys collide. list.append is O(1) amortized: an occasional resize copies everything, but spread over many appends the cost per append is constant.",
    followUps: ["Why is quicksort's worst case O(n²) even though it is usually fast?"],
    source: { title: "Python Docs — Time complexity of built-in types", url: "https://docs.python.org/3/builtins/time-complexity.html" },
  },
  {
    group: "Complexity",
    question: "How do you analyze space complexity?",
    answer: "Count the extra memory the algorithm allocates beyond the input: new lists, sets, dictionaries, strings, slices and copies, plus the recursion stack, which uses memory proportional to the maximum recursion depth. Reversing a list into a new list is O(n) extra space; swapping in place with two indexes is O(1). In an interview I state that I mean auxiliary space, and whether I am excluding the output itself, since conventions differ.",
    followUps: ["What is the space complexity of a recursive function that recurses n levels deep?"],
    source: { title: "Wikipedia — Space complexity: Auxiliary space complexity", url: "https://en.wikipedia.org/wiki/Space_complexity#Auxiliary_space_complexity" },
  },
  {
    group: "Complexity",
    question: "Which Python operations hide extra cost inside a loop?",
    answer: "Slicing copies k elements (O(k)); x in list scans (O(n)); list.insert(0, x) and pop(0) shift every element (O(n)); sorted() is O(n log n); building a string with repeated + can be O(n²) overall; and copying a list or dict is O(n). Inside a loop of n iterations, any of these multiplies the total. Replacing them with indexes, sets, deques or a single join is a common optimization.",
    code: `def has_pair_with_sum_slow(nums, target):
    for i, x in enumerate(nums):
        if target - x in nums[i + 1:]:   # slice + scan: O(n) each -> O(n^2)
            return True
    return False

def has_pair_with_sum(nums, target):
    seen = set()
    for x in nums:                       # O(n) average overall
        if target - x in seen:
            return True
        seen.add(x)
    return False

print(has_pair_with_sum_slow([1, 4, 6], 10), has_pair_with_sum([1, 4, 6], 3))   # -> True False`,
    followUps: ["What is the complexity of sorting inside a loop?"],
    source: { title: "Python Docs — Time complexity: list", url: "https://docs.python.org/3/builtins/time-complexity.html#list" },
  },
  {
    group: "Complexity",
    question: "How can input constraints guide your choice of algorithm?",
    answer: "Constraints hint at the intended complexity. Very small n (around 20) allows exponential approaches such as trying all subsets; n in the low thousands usually allows O(n²); n around 10^5 or more usually needs O(n log n) or O(n). This is a rough heuristic based on roughly 10^7–10^8 simple operations per second (fewer in Python), not a rule, and interviewers may not state constraints, so ask.",
    followUps: ["Why might an O(n²) solution still be acceptable in practice?"],
    source: { title: "USACO Guide — Common Complexities and Constraints", url: "https://usaco.guide/bronze/time-comp#common-complexities-and-constraints" },
  },
  {
    group: "Arrays & hashing",
    question: "When do two pointers work, and why is the technique correct?",
    answer: "Opposite-direction pointers work when the input is sorted (or symmetric, as in palindromes) and moving one pointer predictably changes the quantity you compare. For a pair sum in a sorted array: if the sum is too small, the current left element cannot pair with any remaining element to reach the target, so discarding it (left += 1) is safe; if too large, discard the right element. Each step eliminates one candidate, giving O(n) time and O(1) space.",
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
    followUps: ["What changes if the array is not sorted? What does sorting cost?","Why is moving the shorter side safe in Container With Most Water?"],
    source: { title: "Hello Interview — Two-Pointer Overview", url: "https://www.hellointerview.com/learn/code/two-pointers/overview" },
  },
  {
    group: "Arrays & hashing",
    question: "What is a sliding window, and how do you recognize a sliding-window problem?",
    answer: "A sliding window maintains a contiguous range [left, right] and updates a summary (counts, sum, set) as right expands and left shrinks, instead of recomputing every subarray. Signals: \"contiguous subarray or substring\", \"longest/shortest/at most k\", and a validity condition that changes monotonically as the window grows or shrinks. Fixed-size windows add one element and remove one per step; variable-size windows shrink from the left until the window is valid again. Each index enters and leaves at most once, so the pass is O(n).",
    followUps: ["Why does a sliding window fail for \"subarray sum equals k\" when numbers can be negative?"],
    source: { title: "Hello Interview — Variable Length Sliding Window (includes a template)", url: "https://www.hellointerview.com/learn/code/sliding-window/variable-length" },
  },
  {
    group: "Arrays & hashing",
    question: "What are prefix sums, and when are they useful?",
    answer: "A prefix sum array stores prefix[i] = sum of the first i elements, so the sum of any range [i, j) is prefix[j] - prefix[i] in O(1) after O(n) preprocessing and O(n) extra space. Use it when many range-sum queries are asked, or combine it with a hash map to count subarrays with a given sum (which handles negative numbers, unlike a sliding window).",
    code: `from itertools import accumulate

nums = [3, -1, 4, 1, 5]
prefix = [0] + list(accumulate(nums))
print(prefix)                      # -> [0, 3, 2, 6, 7, 12]
print(prefix[4] - prefix[1])       # sum of nums[1:4]  # -> 4`,
    followUps: ["How would you extend prefix sums to a two-dimensional grid?"],
    source: { title: "Hello Interview — Prefix Sum Overview", url: "https://www.hellointerview.com/learn/code/prefix-sum/overview" },
  },
  {
    group: "Arrays & hashing",
    question: "How do you remove or rearrange elements in place, and what does that save?",
    answer: "Use a write pointer that marks where the next kept element goes and a read pointer that scans every element. Each kept element is copied forward once, so the pass is O(n) time and O(1) extra space. It avoids allocating a new list, but it mutates the caller's data, so confirm that this is allowed.",
    code: `def remove_value(nums, val):
    write = 0
    for read in range(len(nums)):
        if nums[read] != val:
            nums[write] = nums[read]
            write += 1
    return write                      # new logical length

data = [3, 2, 2, 3, 4]
k = remove_value(data, 3)
print(k, data[:k])                    # -> 3 [2, 2, 4]`,
    followUps: ["Why is calling list.remove() in a loop slower?"],
    source: { title: "Hello Interview — Move Zeroes (same read/write-pointer idea)", url: "https://www.hellointerview.com/learn/code/two-pointers/move-zeroes" },
  },
  {
    group: "Arrays & hashing",
    question: "How do you choose between a hash map and two pointers for a pair problem?",
    answer: "On unsorted input, a hash map finds a pair in O(n) average time and O(n) space. If the input is already sorted, two pointers find it in O(n) time and O(1) space. Sorting first costs O(n log n) and loses original indexes, so it is worthwhile mainly when the problem needs sorted order anyway (as in 3Sum) or memory is tight.",
    followUps: ["How would you find all unique triplets that sum to zero?"],
    source: { title: "Tech Interview Handbook — Work out and optimize your approach (Two Sum trade-off)", url: "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/#3-work-out-and-optimize-your-approach-with-the-interviewer" },
  },
  {
    group: "Arrays & hashing",
    question: "Walk through an O(n) solution for Product of Array Except Self without division.",
    answer: "The answer at i is the product of everything to the left of i times everything to the right. One pass left to right writes running prefix products into the output array; a second pass right to left multiplies in a running suffix product. That is O(n) time and O(1) extra space beyond the output. Avoiding division also handles zeros correctly.",
    followUps: ["Why does the division-based approach fail with zeros?"],
    source: { title: "NeetCode — Product of Array Except Self (video explanation)", url: "https://www.youtube.com/watch?v=bNvIQI2wAjk" },
  },
  {
    group: "Arrays & hashing",
    question: "How do you recognize that a hash map or set will improve a solution?",
    answer: "Look for a loop whose body searches for something: \"have I seen this value?\", \"does its complement exist?\", \"how many times has this occurred?\" or \"which items share this property?\". Replacing that search with a set or dictionary lookup usually turns O(n²) into O(n) average time, at the cost of O(n) extra space.",
    code: `def first_repeated(items):
    seen = set()
    for item in items:
        if item in seen:          # O(1) average instead of scanning
            return item
        seen.add(item)
    return None

print(first_repeated([3, 1, 4, 1, 5]), first_repeated([]))   # -> 1 None`,
    followUps: ["What is the worst-case complexity, and when could it happen?"],
    source: { title: "Tech Interview Handbook — Hash table: Introduction", url: "https://www.techinterviewhandbook.org/algorithms/hash-table/#introduction" },
  },
  {
    group: "Arrays & hashing",
    question: "What is the complement-lookup pattern?",
    answer: "While scanning, store each element (or its index) in a dictionary; for the current element, compute the partner it needs and check whether that partner is already stored. Checking before inserting prevents pairing an element with itself. It solves pair problems such as Two Sum in one pass: O(n) average time and O(n) space.",
    followUps: ["How does the approach change if you must count all pairs, including duplicates?"],
    source: { title: "NeetCode — Two Sum (video explanation)", url: "https://www.youtube.com/watch?v=KLlXCFG5TnA" },
  },
  {
    group: "Arrays & hashing",
    question: "How would you group words that are anagrams of each other?",
    answer: "Compute a canonical key that is identical for all anagrams and hashable, then append each word to a list under that key (defaultdict(list) works well). The sorted letters as a string work (O(k log k) per word of length k), or a tuple of 26 letter counts (O(k) per word, assuming lowercase English letters). Total time is O(n × k log k) or O(n × k), with O(n × k) space. A list of counts must be converted to a tuple because lists are unhashable.",
    followUps: ["Why can't you use a list of counts as the key directly?"],
    source: { title: "NeetCode — Group Anagrams (video explanation)", url: "https://www.youtube.com/watch?v=vzdNOK2oB2E" },
  },
  {
    group: "Arrays & hashing",
    question: "How do you count subarrays whose sum equals k, including negative numbers?",
    answer: "Keep a running prefix sum and a dictionary counting how many times each prefix sum has occurred, starting with {0: 1} for the empty prefix. A subarray ending here sums to k exactly when an earlier prefix equals current - k, so add that count before recording the current prefix. It is O(n) average time and O(n) space. A sliding window does not work because negative numbers mean growing the window can decrease the sum.",
    followUps: ["How would you return the longest such subarray instead of the count?"],
    source: { title: "Hello Interview — Subarray Sum Equals K", url: "https://www.hellointerview.com/learn/code/prefix-sum/subarray-sum-equals-k" },
  },
  {
    group: "Arrays & hashing",
    question: "When is a hash map not the best choice?",
    answer: "When the input is already sorted (two pointers or binary search use O(1) extra space), when keys are small integers or lowercase letters (a fixed-size list of counts is simpler and fast), when memory is tight, or when you need ordered traversal or range queries (sorting or a balanced tree fits better). Hash map costs are also average-case; heavy collisions degrade them to O(n).",
    followUps: ["What does \"ordered traversal\" require that a dictionary does not provide?"],
    source: { title: "Python Docs — Time complexity: dict (average and worst case)", url: "https://docs.python.org/3/builtins/time-complexity.html#dict-frozendict" },
  },
  {
    group: "Arrays & hashing",
    question: "Explain an O(n) solution for Longest Consecutive Sequence.",
    answer: "Put all numbers in a set. Only start counting from numbers that begin a sequence (n - 1 is not in the set), then extend while n + 1 is present. Each number is visited a constant number of times overall, so the nested loop is still O(n) average time in total, with O(n) space, compared with O(n log n) for sorting.",
    followUps: ["Why does the inner while loop not make this O(n²)?"],
    source: { title: "NeetCode — Longest Consecutive Sequence (video explanation)", url: "https://www.youtube.com/watch?v=P6RZZMu_maU" },
  },
  {
    group: "Searching & sorting",
    question: "How does binary search work, and why is it O(log n)?",
    answer: "Keep a range [low, high] that must contain the target if it exists. Compare the middle element with the target and discard the half that cannot contain it. Each step halves the range, so after about log₂ n steps the target is found or the range is empty: O(log n) time and O(1) extra space for the iterative version. It requires sorted data (or a monotonic condition); sorting first costs O(n log n).",
    followUps: ["Why do some languages write mid = low + (high - low) // 2? Does Python need it?"],
    source: { title: "Hello Interview — Binary Search Overview", url: "https://www.hellointerview.com/learn/code/binary-search/overview" },
  },
  {
    group: "Searching & sorting",
    question: "How do you avoid off-by-one errors in binary search?",
    answer: "Choose one convention and keep its invariant. With an inclusive range [low, high], loop while low <= high and move to mid + 1 or mid - 1. With a half-open range [low, high), loop while low < high and set high = mid. Before coding, state what the range means; when finished, check what low or high points to for an absent target and for targets at both ends.",
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
    group: "Searching & sorting",
    question: "How do you find the first and last occurrence of a value?",
    answer: "Run two boundary searches: the first index with value >= target (lower bound) and the first index with value > target (upper bound). If the lower bound is out of range or its element is not the target, the value is absent; otherwise the occurrences span [lower, upper - 1]. Python's bisect_left and bisect_right compute exactly these bounds, each in O(log n).",
    code: `from bisect import bisect_left, bisect_right

data = [5, 7, 7, 8, 8, 10]
print(bisect_left(data, 8), bisect_right(data, 8))   # -> 3 5
print(bisect_left(data, 6), bisect_right(data, 6))   # absent  # -> 1 1`,
    followUps: ["How would you count occurrences of a value in a sorted list in O(log n)?"],
    source: { title: "Python Docs — bisect.bisect_left", url: "https://docs.python.org/3/library/bisect.html#bisect.bisect_left" },
  },
  {
    group: "Searching & sorting",
    question: "What does \"binary search on the answer\" mean?",
    answer: "When you are asked for the minimum (or maximum) value that satisfies a condition, and the condition is monotonic — if speed s works, every faster speed also works — you can binary search over the range of possible answers, running a feasibility check at each midpoint. The cost is O(log(range) × cost of the check); for Koko Eating Bananas that is O(n log m) for n piles and largest pile m. Signals: \"minimum capacity\", \"smallest speed\", \"maximize the minimum\".",
    followUps: ["What are the lowest and highest possible answers, and why?"],
    source: { title: "Hello Interview — Apple Harvest (Koko Eating Bananas)", url: "https://www.hellointerview.com/learn/code/binary-search/apple-harvest" },
  },
  {
    group: "Searching & sorting",
    question: "How do you search in a rotated sorted array?",
    answer: "At each step at least one half, [low, mid] or [mid, high], is sorted. Determine which by comparing nums[low] with nums[mid]. If the target lies within the sorted half's range, search there; otherwise search the other half. This keeps O(log n) time, assuming distinct values; duplicates can force a linear scan in the worst case.",
    followUps: ["How would you find the rotation point (the minimum) itself?"],
    source: { title: "Hello Interview — Search in Rotated Sorted Array", url: "https://www.hellointerview.com/learn/code/binary-search/search-in-rotated-sorted-array" },
  },
  {
    group: "Searching & sorting",
    question: "When is binary search not appropriate?",
    answer: "When the data is unsorted and you search only once (a linear scan is O(n), cheaper than sorting at O(n log n)); when the condition is not monotonic; or when the data structure does not support O(1) access by index, such as a linked list. For many lookups by exact key, a set or dictionary gives O(1) average time without sorting; binary search is still preferable when you need nearest values, ranges or insertion positions.",
    followUps: ["When would you still sort and use binary search instead of a set?"],
    source: { title: "Python Docs — Time complexity of built-in types: list", url: "https://docs.python.org/3/builtins/time-complexity.html#list" },
  },
  {
    group: "Searching & sorting",
    question: "How does merge sort work, and what are its time and space costs?",
    answer: "Merge sort splits the list in half, recursively sorts each half, and merges the two sorted halves by repeatedly taking the smaller front element. The recursion has O(log n) levels and each level does O(n) merging work, so it is O(n log n) in every case. Merging needs O(n) extra space. Taking from the left half on ties makes it stable.",
    followUps: ["If your implementation slices the list at each level, does that change the overall complexity?"],
    source: { title: "VisuAlgo — Sorting: Merge Sort (e-lecture)", url: "https://visualgo.net/en/sorting" },
  },
  {
    group: "Searching & sorting",
    question: "How does quicksort work, and why can it be O(n²)?",
    answer: "Quicksort picks a pivot, partitions the list into elements smaller than the pivot and elements larger than it, and recursively sorts each part. With balanced partitions it is O(n log n); if the pivot is always the smallest or largest element (for example, the first element of already sorted input), each partition removes only one element and it degrades to O(n²). A random pivot makes that worst case very unlikely, giving expected O(n log n). In-place versions use O(log n) stack space on average and are typically not stable.",
    followUps: ["How does in-place partitioning work?"],
    source: { title: "VisuAlgo — Sorting: Quick Sort and Random Quick Sort (e-lecture)", url: "https://visualgo.net/en/sorting" },
  },
  {
    group: "Searching & sorting",
    question: "Should you implement your own sort in an interview?",
    answer: "Usually not. Use the built-in sort, state that it is O(n log n) and stable, and spend your time on the actual problem. Implement a sort only when the interviewer asks, or when a modified merge or partition step is the point of the problem (counting inversions, quickselect, three-way partitioning). Be able to explain at least one O(n log n) algorithm either way. Stability matters when you sort by one key and expect ties to keep their earlier order:",
    code: `records = [("ana", 3), ("ben", 1), ("cy", 3)]
print(sorted(records, key=lambda r: -r[1]))   # -> [('ana', 3), ('cy', 3), ('ben', 1)]`,
    followUps: ["Which property of the built-in sort did this example rely on?"],
    source: { title: "Python Docs — Sorting Techniques: Sort Stability and Complex Sorts", url: "https://docs.python.org/3/howto/sorting.html#sort-stability-and-complex-sorts" },
  },
  {
    group: "Searching & sorting",
    question: "How do you merge overlapping intervals, and why does sorting make it work?",
    answer: "Sort intervals by start. Then any interval that overlaps the current merged block must come right after it, because everything later starts even later. Walk once: if the next interval starts at or before the current end, extend the end to the maximum of the two; otherwise start a new block. O(n log n) for sorting plus O(n) for the pass; O(n) for the output.",
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
    group: "Searching & sorting",
    question: "How do you find the minimum number of intervals to remove so that none overlap?",
    answer: "Sort by end time and greedily keep each interval that starts at or after the end of the last kept one; count the rest as removed. Keeping the interval that ends earliest always leaves the most room for the remaining intervals, so no other choice can keep more. O(n log n) time. The same idea solves activity selection and the minimum-arrows problem. (Sorting by start also works if, on overlap, you keep the interval with the smaller end.)",
    followUps: ["Why does keeping the interval that starts first, without comparing ends, give wrong answers?"],
    source: { title: "NeetCode — Non-Overlapping Intervals (LeetCode 435) video", url: "https://www.youtube.com/watch?v=nONCGxWoUfM" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "How does a linked list compare with a Python list (dynamic array)?",
    answer: "A Python list stores references contiguously, so indexing is O(1) and appending is amortized O(1), but inserting or deleting near the front is O(n). A linked list has O(k) access to the k-th element because you must walk from the head, but inserting or deleting next to a node you already hold is O(1), with no shifting. Linked lists use extra memory per node for references and have poorer cache locality. In Python, use a list or deque in practice.",
    followUps: ["When would a doubly linked list be worth its extra memory?"],
    source: { title: "Tech Interview Handbook — Linked list: Time complexity", url: "https://www.techinterviewhandbook.org/algorithms/linked-list/#time-complexity" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "How do you reverse a singly linked list?",
    answer: "Walk the list keeping three references: prev (the already reversed part, initially None), curr, and the saved next node. For each node, save curr.next, point curr.next at prev, then advance prev and curr. When curr is None, prev is the new head. O(n) time and O(1) extra space; the recursive version is shorter but uses O(n) stack space.",
    followUps: ["How would you reverse only the nodes between positions left and right?"],
    source: { title: "NeetCode — Reverse Linked List, iterative and recursive (video explanation)", url: "https://www.youtube.com/watch?v=G0_I-ZF0S38" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "How do you detect a cycle in a linked list?",
    answer: "Floyd's algorithm: move a slow pointer one step and a fast pointer two steps at a time. If there is a cycle, the fast pointer eventually catches the slow one and they meet; if fast reaches None, there is no cycle. It is O(n) time and O(1) space. A simpler alternative stores visited nodes in a set, which uses O(n) space. Compare nodes with is, not ==.",
    followUps: ["How would you find the node where the cycle begins?"],
    source: { title: "Hello Interview — Linked List Cycle", url: "https://www.hellointerview.com/learn/code/linked-list/linked-list-cycle" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "What is a dummy (sentinel) node, and why use one?",
    answer: "A placeholder node placed before the real head. Operations that might change the head — deleting the first node, merging lists, inserting at the front — then follow the same code path as operations in the middle, and you return dummy.next at the end. It removes special cases and the bugs they cause.",
    followUps: ["Would you need a dummy node to delete from a doubly linked list?"],
    source: { title: "Hello Interview — Linked List Overview: Dummy Nodes", url: "https://www.hellointerview.com/learn/code/linked-list/overview#dummy-nodes" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "How do you find the middle node, or the k-th node from the end, in one pass?",
    answer: "For the middle, advance slow by one and fast by two; when fast reaches the end, slow is at the middle (for even lengths, this version stops at the second middle). For the k-th from the end, first move a lead pointer k steps ahead, then move both pointers together; when the lead reaches the end, the trailing pointer is k nodes from the end. Both are O(n) time and O(1) space.",
    code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def middle(head):
    slow = fast = head
    while fast and fast.next:          # check both before taking two steps
        slow, fast = slow.next, fast.next.next
    return slow

print(middle(Node(1, Node(2, Node(3, Node(4, Node(5)))))).val)   # -> 3
print(middle(Node(1, Node(2, Node(3, Node(4))))).val)            # -> 3`,
    followUps: ["How would you make middle() return the first middle for even lengths?"],
    source: { title: "Hello Interview — Remove Nth Node From End of List (two pointers and a dummy node)", url: "https://www.hellointerview.com/learn/code/linked-list/remove-nth-node-from-end-of-list" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "What are a stack and a queue, and how do you implement each in Python?",
    answer: "A stack removes the most recently added item first (LIFO); a queue removes the oldest item first (FIFO). In Python, a list is a good stack: append and pop at the end are O(1) (append amortized). For a queue, use collections.deque: append and popleft are O(1). Using list.pop(0) as a queue is O(n) per removal because every remaining element shifts left.",
    code: `from collections import deque

stack = []
stack.append(1); stack.append(2)
print(stack.pop())          # -> 2

queue = deque()
queue.append(1); queue.append(2)
print(queue.popleft())      # -> 1`,
    followUps: ["What happens if you pop from an empty list or deque?"],
    source: { title: "The Python Tutorial — Using Lists as Queues", url: "https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-queues" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "How do you check whether brackets are balanced?",
    answer: "Scan left to right. Push each opening bracket; for each closing bracket, the stack must be non-empty and its top must be the matching opener, which you pop. At the end the stack must be empty. A stack fits because the most recently opened bracket must be closed first. O(n) time and O(n) space in the worst case. Test \"\", \"(\", \")\" and \"([)]\".",
    followUps: ["How would you return the index of the first unmatched bracket?"],
    source: { title: "Hello Interview — Valid Parentheses", url: "https://www.hellointerview.com/learn/code/stack/valid-parentheses" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "What is a monotonic stack, and when would you use one?",
    answer: "A stack whose values (or the values at its stored indexes) stay in increasing or decreasing order. When a new element breaks the order, you pop elements, and the new element is the answer for each popped one — their \"next greater element\". Each index is pushed and popped at most once, so the whole pass is O(n) despite the nested loop. Store indexes when you need distances. Signals: \"next greater/smaller\", \"how many days until\", spans and histogram areas.",
    code: `def next_greater(nums):
    result = [-1] * len(nums)
    stack = []                                 # indexes still waiting for an answer
    for i, x in enumerate(nums):
        while stack and nums[stack[-1]] < x:
            result[stack.pop()] = x
        stack.append(i)
    return result

print(next_greater([2, 1, 3, 2, 4]))   # -> [3, 3, 4, 4, -1]`,
    followUps: ["Why is the nested while loop still O(n) in total?"],
    source: { title: "Hello Interview — Monotonic Stack", url: "https://www.hellointerview.com/learn/code/stack/monotonic-stack" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "How can you implement a queue using two stacks, and what does each operation cost?",
    answer: "Push new items onto an input stack. To dequeue, pop from an output stack; if it is empty, first move every item from the input stack to the output stack, which reverses their order so the oldest is on top. A single dequeue can cost O(n), but each item is moved at most once, so the amortized cost per operation is O(1).",
    followUps: ["Why would you ever do this instead of using a deque?"],
    source: { title: "NeetCode — Implement Queue using Stacks (written solution, amortized approach)", url: "https://github.com/neetcode-gh/leetcode/blob/main/articles/implement-queue-using-stacks.md" },
  },
  {
    group: "Linked lists, stacks & queues",
    question: "How would you design a stack that returns its minimum in O(1)?",
    answer: "Store, with each pushed value, the minimum of the stack at that point: push (value, min(value, current_min)), or keep a second stack of minimums. The minimum is always at the top, and popping automatically restores the previous minimum. Every operation is O(1); the extra space is O(n).",
    followUps: ["How could you reduce the extra memory when the minimum rarely changes?"],
    source: { title: "NeetCode — Min Stack (video explanation)", url: "https://www.youtube.com/watch?v=qkLl7nAwDPo" },
  },
  {
    group: "Trees & heaps",
    question: "What are preorder, inorder and postorder traversal, and when would you use each?",
    answer: "They are depth-first orders that differ in when the node is visited relative to its subtrees. Preorder visits the node before its children (useful for copying or serializing a tree); inorder visits left subtree, node, right subtree (yields sorted order in a BST); postorder visits children before the node (useful when a node's answer depends on its children's, such as height). All are O(n) time and O(h) stack space.",
    code: `class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def inorder(node, out):
    if node:
        inorder(node.left, out)
        out.append(node.val)        # move this line first for preorder, last for postorder
        inorder(node.right, out)
    return out

root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(6))
print(inorder(root, []), inorder(None, []))   # -> [1, 2, 3, 4, 6] []`,
    followUps: ["How would you do an inorder traversal iteratively with an explicit stack?"],
    source: { title: "Tech Interview Handbook — Tree cheatsheet", url: "https://www.techinterviewhandbook.org/algorithms/tree/" },
  },
  {
    group: "Trees & heaps",
    question: "When would you use BFS instead of DFS on a tree?",
    answer: "Use BFS (level order with a queue) when the question is about levels or the nearest something: level averages, the right side view, or the minimum depth, where BFS can stop at the first leaf. Use DFS when the answer combines results from subtrees (height, diameter, path sums) or follows root-to-leaf paths. BFS uses O(w) memory for the widest level; DFS uses O(h) for the deepest path. Use collections.deque, not list.pop(0), for the queue.",
    code: `from collections import deque

def level_order(root):              # root is a TreeNode as above, or None
    if not root:
        return []
    levels, queue = [], deque([root])
    while queue:
        level = []
        for _ in range(len(queue)):       # exactly the nodes of this level
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        levels.append(level)
    return levels

print(level_order(None))   # -> []`,
    followUps: ["How would you return the levels in zigzag order?"],
    source: { title: "NeetCode — Binary Tree Level Order Traversal (LeetCode 102) video", url: "https://www.youtube.com/watch?v=6ZnyEApgFYg" },
  },
  {
    group: "Trees & heaps",
    question: "How do you approach a tree problem recursively?",
    answer: "Decide what each call returns about its subtree, assume the recursive calls return it correctly for the children, and combine. For maximum depth, return the height: 1 + max(left, right), with 0 for an empty tree. When you need two things — such as height and whether the subtree is balanced — return both, or update a separate best answer during the traversal: for diameter, return height but record left height + right height at every node. Calling a separate height() at every node instead costs O(n²) on a skewed tree.",
    followUps: ["Why does checking balance by calling height() at every node cost O(n²) in the worst case?"],
    source: { title: "NeetCode — Diameter of a Binary Tree (LeetCode 543) video", url: "https://www.youtube.com/watch?v=bkxqA8Rfv04" },
  },
  {
    group: "Trees & heaps",
    question: "What is a binary search tree, and what are its operation costs?",
    answer: "In a BST, every value in a node's left subtree is smaller than the node and every value in its right subtree is larger (with a stated rule for duplicates). Search, insert and delete follow one root-to-leaf path, so they cost O(h). A balanced tree has h = O(log n); inserting sorted data into a plain BST creates a chain with h = O(n). Self-balancing trees (AVL, red-black) guarantee O(log n). Python has no built-in BST; depending on the operations, I would use a sorted list with bisect, a heap or a dictionary.",
    followUps: ["Python has no built-in BST. What would you use for sorted data with frequent inserts?"],
    source: { title: "VisuAlgo — Binary Search Tree (e-lecture)", url: "https://visualgo.net/en/bst" },
  },
  {
    group: "Trees & heaps",
    question: "How do you check whether a binary tree is a valid BST?",
    answer: "Pass down the allowed range for each node: the root may be anything; going left, the upper bound becomes the parent's value; going right, the lower bound becomes the parent's value. Every node must lie strictly inside its range. Checking each node only against its direct children misses violations deeper in the tree (a small value in the right subtree of the root). Alternatively, an inorder traversal must produce strictly increasing values. Both are O(n) time and O(h) space.",
    followUps: ["How would you handle duplicate values?"],
    source: { title: "NeetCode — Validate Binary Search Tree (LeetCode 98) video", url: "https://www.youtube.com/watch?v=s6ATEkipzow" },
  },
  {
    group: "Trees & heaps",
    question: "How do you find the lowest common ancestor of two nodes in a BST?",
    answer: "Start at the root. If both values are smaller than the current node, the ancestor is in the left subtree; if both are larger, it is in the right subtree; otherwise the current node splits them (or equals one of them) and is the answer. That is O(h) time and O(1) space iteratively. In a general binary tree without ordering, you instead search both subtrees recursively in O(n).",
    followUps: ["How would you find the lowest common ancestor in a binary tree that is not a BST?"],
    source: { title: "NeetCode — Lowest Common Ancestor of a Binary Search Tree (LeetCode 235) video", url: "https://www.youtube.com/watch?v=gs2LMfuOR9k" },
  },
  {
    group: "Trees & heaps",
    question: "What is a heap, and what do its operations cost?",
    answer: "A heap is a complete binary tree with the heap property: in a min-heap every parent is less than or equal to its children, so the minimum is at the root. Stored in a list, the children of index i are at 2i + 1 and 2i + 2. Peeking at the minimum is O(1); push and pop are O(log n) because they move one element along a root-to-leaf path; heapify builds a heap from n items in O(n). Unlike a BST, a heap is not fully sorted.",
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
    group: "Trees & heaps",
    question: "Python's heapq is a min-heap. How do you get a max-heap?",
    answer: "Push negated numbers and negate again when you pop. For non-numeric priorities, push a key that reverses the order, such as (-score, name). Python 3.14 adds dedicated max-heap functions (heappush_max, heappop_max, heapify_max), but negation works in every version, so it is the safe default.",
    code: `import heapq

heap = [-s for s in [2, 7, 4]]
heapq.heapify(heap)
print(-heapq.heappop(heap))          # largest  # -> 7`,
    followUps: ["What would happen if two entries had equal priority and the items themselves could not be compared?"],
    source: { title: "Python Docs — heapq.heappush_max (Python 3.14+)", url: "https://docs.python.org/3/library/heapq.html#heapq.heappush_max" },
  },
  {
    group: "Trees & heaps",
    question: "How do you find the k largest elements, and when is a heap better than sorting?",
    answer: "Keep a min-heap of size k: push each element and pop whenever the heap exceeds k, so the heap holds the k largest seen so far and its root is the k-th largest. That is O(n log k) time and O(k) space, versus O(n log n) for sorting. When k is close to n, sorting is as good and simpler; heapq.nlargest implements the heap approach for you. Quickselect is an average O(n) alternative worth naming.",
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
    group: "Trees & heaps",
    question: "How do you store items with priorities in heapq, and why add a tie-breaker?",
    answer: "Push tuples whose first element is the priority. Tuples compare element by element, so if two priorities are equal Python compares the next element; if that is an object that cannot be compared (such as a dictionary or a custom node), it raises TypeError. Adding a unique counter as the second element guarantees comparisons stop before reaching the item and keeps insertion order among equal priorities.",
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
    group: "Trees & heaps",
    question: "How do you merge k sorted lists efficiently?",
    answer: "Put the first element of each list in a min-heap together with its list index (the index breaks ties, so nodes are never compared). Repeatedly pop the smallest, append it to the output, and push the next element from the same list. The heap never holds more than k entries, so each of the N total elements costs O(log k): O(N log k) time and O(k) extra space. Merging lists one after another into a growing result can cost O(N × k). heapq.merge does this lazily for sorted iterables.",
    followUps: ["How does this relate to merging sorted files that do not fit in memory?"],
    source: { title: "Python Docs — heapq.merge", url: "https://docs.python.org/3/library/heapq.html#heapq.merge" },
  },
  {
    group: "Graphs",
    question: "How do you represent a graph, and which representation would you choose?",
    answer: "An adjacency list maps each node to its neighbours (in Python, a dictionary of lists or sets). It uses O(V + E) space and makes iterating over neighbours efficient, so it is the default for interview problems, which are usually sparse. An adjacency matrix uses O(V²) space but answers \"is there an edge between u and v?\" in O(1). Input often arrives as an edge list; convert it to an adjacency list first. A grid is an implicit graph: neighbours are the in-bounds cells up, down, left and right.",
    code: `from collections import defaultdict

edges = [(0, 1), (0, 2), (1, 2), (2, 3)]
graph = defaultdict(list)
for u, v in edges:                  # undirected: add both directions
    graph[u].append(v)
    graph[v].append(u)

print(dict(graph))   # -> {0: [1, 2], 1: [0, 2], 2: [0, 1, 3], 3: [2]}`,
    followUps: ["How would you store weights on the edges?"],
    source: { title: "Tech Interview Handbook — Graph cheatsheet: Graph representations", url: "https://www.techinterviewhandbook.org/algorithms/graph/" },
  },
  {
    group: "Graphs",
    question: "When do you use BFS versus DFS?",
    answer: "BFS explores in layers from the start, so in an unweighted graph the first time it reaches a node is along a shortest path: use it for minimum steps, levels and spreading processes. DFS goes deep before backtracking: use it to explore everything reachable, count components, detect cycles, produce topological orders and enumerate paths. Both run in O(V + E) time with O(V) space for the visited set. Recursive DFS can hit Python's recursion limit on large graphs or grids; an explicit stack avoids that.",
    code: `from collections import deque

def shortest_steps(graph, start, goal):
    queue, visited = deque([(start, 0)]), {start}
    while queue:
        node, dist = queue.popleft()
        if node == goal:
            return dist
        for nxt in graph.get(node, []):
            if nxt not in visited:
                visited.add(nxt)        # mark when enqueued, not when dequeued
                queue.append((nxt, dist + 1))
    return -1

graph = {0: [1, 2], 1: [3], 2: [3], 3: [4], 4: []}
print(shortest_steps(graph, 0, 4), shortest_steps(graph, 4, 0))   # -> 3 -1`,
    followUps: ["Why does BFS not give shortest paths when edges have different weights?"],
    source: { title: "cp-algorithms — Breadth First Search", url: "https://cp-algorithms.com/graph/breadth-first-search.html" },
  },
  {
    group: "Graphs",
    question: "How do you count islands in a grid?",
    answer: "Treat each land cell as a node connected to its up, down, left and right land neighbours. Scan every cell; when you find unvisited land, increment the count and flood the whole island with DFS or BFS, marking cells visited (or overwriting them if mutating the input is allowed — say so). Every cell is processed a constant number of times: O(rows × cols) time and up to O(rows × cols) space for the visited set, queue or recursion.",
    followUps: ["Why might an iterative DFS be safer than a recursive one here?"],
    source: { title: "NeetCode — Number of Islands (LeetCode 200) video", url: "https://www.youtube.com/watch?v=pV2kpPD66nE" },
  },
  {
    group: "Graphs",
    question: "What is topological sorting, and how does Kahn's algorithm work?",
    answer: "A topological order lists the nodes of a directed graph so that every edge goes from earlier to later — for example, courses before the courses that require them. It exists only if the graph has no cycle. Kahn's algorithm counts each node's incoming edges, starts a queue with every node of in-degree 0, and repeatedly removes a node, appends it to the order and decrements its neighbours' in-degrees, enqueuing any that reach 0. If the order contains fewer than V nodes, the graph has a cycle. O(V + E).",
    followUps: ["How would you detect a cycle in a directed graph with DFS instead?"],
    source: { title: "Tech Interview Handbook — Graph cheatsheet: Topological sorting", url: "https://www.techinterviewhandbook.org/algorithms/graph/" },
  },
  {
    group: "Graphs",
    question: "Why do graph traversals need a visited set, and when should you mark nodes?",
    answer: "Graphs can contain cycles and several paths to the same node; without a visited set a traversal can loop forever or process nodes many times. In BFS, mark a node when you add it to the queue, not when you remove it; otherwise the same node can be queued many times. To find every component of a disconnected graph, start a traversal from each unvisited node. A rooted tree traversed through child pointers needs no visited set because it has no cycles; an undirected tree stored as an adjacency list still needs a visited set or a parent check.",
    followUps: ["What changes for an undirected graph when detecting a cycle?"],
    source: { title: "VisuAlgo — Graph Traversal (DFS/BFS): Avoiding Cycle", url: "https://visualgo.net/en/dfsbfs" },
  },
  {
    group: "Graphs",
    question: "What is multi-source BFS?",
    answer: "Start BFS with every source in the queue at distance 0 instead of a single start node. The search then expands from all sources at once, so each node's distance is to its nearest source. Processing the queue one level at a time counts the steps (minutes, in Rotting Oranges). It solves spreading problems in O(V + E) instead of running a separate BFS from each source.",
    followUps: ["The usual Rotting Oranges solution mutates the grid. How would you avoid that?"],
    source: { title: "NeetCode — Rotting Oranges (LeetCode 994) video", url: "https://www.youtube.com/watch?v=y704fEOx0s0" },
  },
  {
    group: "Graphs",
    question: "What is union-find, and how do path compression and union by size help?",
    answer: "Union-find keeps a parent pointer for each item; items with the same root are in the same set. find follows parents to the root; union links one root under the other. Without care the trees can become long chains, making find O(n). Path compression points nodes on a find path closer to (or directly at) the root, and union by size attaches the smaller tree under the larger. Together they make operations effectively constant time amortized (inverse Ackermann).",
    code: `class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]   # path halving
            x = self.parent[x]
        return x

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb:
            return False                                   # already connected
        if self.size[ra] < self.size[rb]:
            ra, rb = rb, ra
        self.parent[rb] = ra
        self.size[ra] += self.size[rb]
        return True

uf = UnionFind(5)
uf.union(0, 1); uf.union(3, 4)
print(uf.find(1) == uf.find(0), uf.find(2) == uf.find(3), uf.union(1, 0))   # -> True False False`,
    followUps: ["How would you count the number of sets at any time?"],
    source: { title: "cp-algorithms — Disjoint Set Union", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
  },
  {
    group: "Graphs",
    question: "When would you choose union-find over BFS or DFS?",
    answer: "For a fixed graph, BFS or DFS finds connected components in O(V + E) and is often simpler. Union-find shines when edges arrive one at a time and you must answer \"are these connected now?\" after each one, when you need the first edge that creates a cycle in an undirected graph (union returns False because both endpoints already share a root, as in Redundant Connection), or when grouping items that share attributes (such as accounts sharing an email) without building an explicit graph.",
    followUps: ["Why does union-find not detect cycles in directed graphs?"],
    source: { title: "NeetCode — Redundant Connection (LeetCode 684) video", url: "https://www.youtube.com/watch?v=FXWRE67PLL0" },
  },
  {
    group: "Graphs",
    question: "Why does BFS not find shortest paths in weighted graphs, and how does Dijkstra fix it?",
    answer: "BFS minimizes the number of edges, not their total weight: a path with more but lighter edges can be shorter. Dijkstra always expands the unvisited node with the smallest known distance, using a min-heap, and relaxes its outgoing edges. With non-negative weights, the first time a node is popped its distance is final. With a binary heap it runs in O((V + E) log V) time. Negative edge weights break this guarantee.",
    code: `import heapq

def dijkstra(graph, source):
    dist = {source: 0}
    heap = [(0, source)]
    while heap:
        d, node = heapq.heappop(heap)
        if d > dist.get(node, float("inf")):
            continue                              # stale entry
        for nxt, weight in graph.get(node, []):
            nd = d + weight
            if nd < dist.get(nxt, float("inf")):
                dist[nxt] = nd
                heapq.heappush(heap, (nd, nxt))
    return dist

graph = {"A": [("B", 4), ("C", 1)], "C": [("B", 2), ("D", 7)], "B": [("D", 1)]}
print(dijkstra(graph, "A"))   # -> {'A': 0, 'B': 3, 'C': 1, 'D': 4}`,
    followUps: ["What is a stale heap entry, and why is skipping it correct?"],
    source: { title: "cp-algorithms — Dijkstra on sparse graphs (priority_queue)", url: "https://cp-algorithms.com/graph/dijkstra_sparse.html" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "What makes a recursive function correct?",
    answer: "Three things: a base case that returns without recursing, each recursive call working on a strictly smaller problem so the base case is eventually reached, and a correct combination of the sub-results. Reason with the \"leap of faith\": assume the recursive call is correct for the smaller input and check that your combination step is right.",
    code: `def total(nums, i=0):
    if i == len(nums):          # base case
        return 0
    return nums[i] + total(nums, i + 1)   # smaller problem: the rest of the list

print(total([3, 1, 4]), total([]))   # -> 8 0`,
    followUps: ["Why does this version pass an index instead of slicing nums[1:]?"],
    source: { title: "Tech Interview Handbook — Recursion cheatsheet", url: "https://www.techinterviewhandbook.org/algorithms/recursion/" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "How do you analyze the time and space complexity of a recursive function?",
    answer: "Time: count the calls (draw the recursion tree) and multiply by the work per call. Space: the maximum call-stack depth times the space per frame, plus any data you build. One call on n - 1 is O(n) time and O(n) stack; two calls on n - 1 is O(2ⁿ) time but still O(n) depth; halving n gives O(log n) depth, as in fast exponentiation.",
    code: `def power(x, n):                 # O(log n) time and stack depth
    if n == 0:
        return 1
    half = power(x, n // 2)
    return half * half if n % 2 == 0 else half * half * x

print(power(2, 10), power(3, 0), power(5, 3))   # -> 1024 1 125`,
    followUps: ["What would the complexity be if power called itself twice instead of storing half?"],
    source: { title: "VisuAlgo — Recursion Tree and DAG", url: "https://visualgo.net/en/recursion" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "Explain the backtracking template.",
    answer: "Backtracking builds a partial solution step by step. If the partial solution is complete, record a copy; otherwise, for each valid choice, make it (append to the path, mark as used), recurse, then undo it (pop, unmark) so the next choice starts from the same state. Pruning skips choices that cannot lead to a valid answer.",
    code: `def subsets(nums):
    result, path = [], []

    def backtrack(start):
        result.append(path[:])          # record a copy, not the shared list
        for i in range(start, len(nums)):
            path.append(nums[i])        # choose
            backtrack(i + 1)            # explore
            path.pop()                  # undo

    backtrack(0)
    return result

print(subsets([1, 2, 3]))
# -> [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]`,
    followUps: ["What goes wrong if you append path instead of path[:]?"],
    source: { title: "NeetCode — Subsets (LeetCode 78) video", url: "https://www.youtube.com/watch?v=REOH22Xwdkk" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "How many subsets, combinations and permutations are there, and what does that mean for complexity?",
    answer: "A set of n items has 2ⁿ subsets, C(n, k) combinations of size k and n! permutations. Any algorithm that outputs all of them takes at least that many steps times the cost of copying each result: O(n × 2ⁿ) for subsets and O(n × n!) for permutations. That is only feasible for small n, so small input limits in a problem statement are a signal that exhaustive backtracking is expected. For permutations, track which elements are already used instead of searching the path.",
    followUps: ["How would you avoid duplicate permutations when the input contains duplicates?"],
    source: { title: "NeetCode — Permutations (LeetCode 46) video", url: "https://www.youtube.com/watch?v=s7AvT7cGdSo" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "What is pruning, and how does it help?",
    answer: "Pruning stops exploring a branch as soon as it cannot lead to a valid solution: the remaining target is negative, too many open brackets have been used, or a partial board is already invalid. It usually does not change the worst-case bound, but it can cut the explored tree dramatically in practice. Sorting candidates first often allows breaking out of the loop early (in Combination Sum, once a candidate exceeds the remaining target, every later one does too).",
    followUps: ["What changes in Combination Sum if each candidate may be used only once?"],
    source: { title: "NeetCode — Combination Sum (LeetCode 39) video", url: "https://www.youtube.com/watch?v=GBKI9VSKdGg" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "What is dynamic programming, and how do you recognize a DP problem?",
    answer: "DP applies when a problem's answer can be built from answers to smaller subproblems (optimal substructure) and those subproblems repeat (overlapping subproblems), so caching them avoids exponential recomputation. Signals: counting the ways to do something, a minimum or maximum over sequences of choices, or a plain recursive solution whose recursion tree repeats the same calls — naive fib(n) makes exponentially many calls but has only n + 1 distinct subproblems. If subproblems do not overlap, plain recursion or divide and conquer is enough.",
    followUps: ["How many distinct subproblems does fib(20) actually have?"],
    source: { title: "VisuAlgo — Recursion Tree and DAG: Fibonacci Numbers", url: "https://visualgo.net/en/recursion" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "What is the difference between memoization and tabulation?",
    answer: "Memoization is top-down: write the recursive solution and cache each result the first time it is computed, so later calls return immediately. Tabulation is bottom-up: fill a table from the base cases upward in an order where each state's dependencies are already computed. Both compute each state once. Memoization is often easier to derive and computes only the states it needs; tabulation avoids recursion depth limits and makes space optimization easier.",
    code: `from functools import cache

@cache
def climb_memo(n):
    if n <= 2:
        return n
    return climb_memo(n - 1) + climb_memo(n - 2)

def climb_table(n):
    if n <= 2:
        return n
    prev, curr = 1, 2               # ways to reach steps 1 and 2
    for _ in range(3, n + 1):
        prev, curr = curr, prev + curr
    return curr

print(climb_memo(10), climb_table(10), climb_table(1))   # -> 89 89 1`,
    followUps: ["Why does the table version need only two variables?"],
    source: { title: "NeetCode — Climbing Stairs (LeetCode 70) video", url: "https://www.youtube.com/watch?v=Y0lT9Fck7qI" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "Walk through how you would design a DP solution, using House Robber.",
    answer: "Define the state: best(i) is the most money from houses 0..i. Recurrence: at house i you either skip it (best(i - 1)) or rob it (nums[i] + best(i - 2)), so best(i) is the larger of the two. Base cases: no houses gives 0, one house gives that house. Compute left to right; only the previous two values are needed, so O(n) time and O(1) space. Check the recurrence on a small example such as [2, 7, 9, 3, 1] (answer 12) before coding.",
    followUps: ["How would you change the solution if the houses were arranged in a circle?"],
    source: { title: "NeetCode — House Robber (LeetCode 198) video", url: "https://www.youtube.com/watch?v=73r3KWiEvyk" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "Why does a greedy approach fail for Coin Change, and what is the DP solution?",
    answer: "Always taking the largest coin works for some coin systems but not all: with coins [1, 3, 4] and amount 6, greedy picks 4 + 1 + 1 (three coins) but 3 + 3 uses two. DP computes the minimum coins for every amount from 0 up: dp[a] = 1 + min(dp[a - coin]) over coins that fit, with dp[0] = 0 and infinity meaning unreachable (return -1). O(amount × number of coins) time and O(amount) space.",
    followUps: ["How would you count the number of ways to make the amount instead?"],
    source: { title: "NeetCode — Coin Change (LeetCode 322) video", url: "https://www.youtube.com/watch?v=H9bfqozjoqs" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "How do you approach a two-dimensional DP problem such as Unique Paths?",
    answer: "Define dp[r][c] as the number of ways to reach cell (r, c). You can only arrive from above or from the left, so dp[r][c] = dp[r - 1][c] + dp[r][c - 1], with every cell in the first row and column equal to 1. Fill row by row: O(rows × cols) time. Because each row depends only on the previous one, a single row of size cols is enough, giving O(cols) space.",
    followUps: ["How would obstacles in the grid change the recurrence?"],
    source: { title: "NeetCode — Unique Paths (LeetCode 62) video", url: "https://www.youtube.com/watch?v=IlEsdxuD4lY" },
  },
  {
    group: "Recursion & dynamic programming",
    question: "How do you find the maximum sum of a contiguous subarray in O(n)?",
    answer: "Track the best sum of a subarray ending at the current index: either extend the previous subarray or start fresh at the current element, whichever is larger. The answer is the best of these values over all indexes. This one-dimensional DP needs only O(1) space and is usually called Kadane's algorithm. Initialise with the first element, not 0, so all-negative input works; clarify what to return for an empty array.",
    followUps: ["How would you also return the start and end indexes?"],
    source: { title: "NeetCode — Maximum Subarray (LeetCode 53) video", url: "https://www.youtube.com/watch?v=5WZl3MMT0Eg" },
  },
];

export default questions;
