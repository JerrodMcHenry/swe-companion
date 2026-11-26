import type { Topic } from "../types";

const topic: Topic = {
  slug: "hash-map-set-patterns",
  title: "Hash Maps and Sets Patterns",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "Hash maps (Python dictionaries) and sets turn \"search the whole collection\" into an average O(1) lookup. In problem solving they appear as a handful of patterns: membership and duplicate detection, frequency counting, complement lookup, grouping by a computed key, and remembering earlier positions or prefix sums.",
  whyItMatters:
    "The hash map is one of the most frequently useful structures in coding interviews: many optimal solutions are \"brute force plus a dictionary\". Employer preparation material names hash tables explicitly (for example Meta's and Amazon's guides). How dictionaries and sets work, their hashability rules and their costs are taught in Programming Fluency (Sets, Dictionaries); this topic focuses on recognizing and combining the patterns.",
  prerequisites: ["Sets", "Dictionaries", "Arrays and Strings Patterns", "Complexity Analysis"],
  objectives: [
    "Recognize when a lookup inside a loop can be replaced by a set or dictionary.",
    "Apply complement lookup (store what you have seen; look for what you need).",
    "Count frequencies with a dictionary or Counter, and compare two frequency maps.",
    "Group items by a computed, hashable key (sorted letters, a tuple of counts, a normalized form).",
    "Store first or last positions to answer distance or uniqueness questions.",
    "Combine prefix sums with a dictionary to count subarrays with a target sum, including negative numbers.",
    "Explain the time-space trade-off and the average-case versus worst-case qualification.",
    "Recognize when sorting, two pointers or a fixed-size array is simpler or uses less memory.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Hash table cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/hash-table/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the techniques and corner cases sections (about 10 minutes).",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 5.5 Hashing",
      url: "https://runestone.academy/ns/books/published/pythonds3/SortSearch/Hashing.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Free interactive textbook. Read the introduction to hash functions, collisions and load factor so you can explain the average and worst case; skip implementing the map ADT.",
    },
    {
      title: "VisuAlgo — Hash Table",
      url: "https://visualgo.net/en/hashtable",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Step through insertions with separate chaining to see why collisions slow lookups.",
    },
  ],
  exercises: [
    {
      title: "Revisit Two Sum, Valid Anagram, Ransom Note and Group Anagrams from Dictionaries, and name the pattern each one uses.",
      note: "Foundation. These were introduced in Programming Fluency; this time explain the pattern and complexity aloud.",
    },
    {
      title: "Longest Palindrome (LeetCode)",
      url: "https://leetcode.com/problems/longest-palindrome/",
      note: "Foundation, Easy. Frequency counting and parity.",
    },
    {
      title: "Top K Frequent Elements (LeetCode)",
      url: "https://leetcode.com/problems/top-k-frequent-elements/",
      note: "Reinforcement, Medium. Count, then choose k (sort, heap or bucket). Revisited in Heaps.",
    },
    {
      title: "Longest Consecutive Sequence (LeetCode)",
      url: "https://leetcode.com/problems/longest-consecutive-sequence/",
      note: "Reinforcement, Medium. A set and starting only from sequence beginnings gives O(n) average.",
    },
    {
      title: "Valid Sudoku (LeetCode)",
      url: "https://leetcode.com/problems/valid-sudoku/",
      note: "Reinforcement, Medium. Sets keyed by row, column and box.",
    },
    {
      title: "Subarray Sum Equals K (LeetCode)",
      url: "https://leetcode.com/problems/subarray-sum-equals-k/",
      note: "Transfer, Medium. Prefix sums plus a count of earlier prefix sums; explain why a sliding window fails.",
    },
    {
      title: "Insert Delete GetRandom O(1) (LeetCode)",
      url: "https://leetcode.com/problems/insert-delete-getrandom-o1/",
      note: "Optional stretch, Medium. Combine a list and a dictionary of positions.",
    },
  ],
  interviewQuestions: [
    {
      question: "How do you recognize that a hash map or set will improve a solution?",
      answer:
        "Look for a loop whose body searches for something: \"have I seen this value?\", \"does its complement exist?\", \"how many times has this occurred?\" or \"which items share this property?\". Replacing that search with a set or dictionary lookup usually turns O(n²) into O(n) average time, at the cost of O(n) extra space.",
      code: `def first_repeated(items):
    seen = set()
    for item in items:
        if item in seen:          # O(1) average instead of scanning
            return item
        seen.add(item)
    return None

print(first_repeated([3, 1, 4, 1, 5]), first_repeated([]), first_repeated([2, 2]))
# -> 1 None 2`,
      followUps: ["What is the worst-case complexity, and when could it happen?"],
    },
    {
      question: "What is the complement-lookup pattern?",
      answer:
        "While scanning, store each element (or its index) in a dictionary; for the current element, compute what partner it needs and check whether that partner has already been stored. Checking before inserting prevents pairing an element with itself. It solves pair problems in one pass: O(n) average time and O(n) space.",
      code: `def count_pairs_with_difference(nums, k):
    counts = {}
    pairs = 0
    for x in nums:
        pairs += counts.get(x - k, 0) + (counts.get(x + k, 0) if k else 0)
        counts[x] = counts.get(x, 0) + 1
    return pairs

print(count_pairs_with_difference([1, 2, 2, 1], 1), count_pairs_with_difference([1, 1, 1], 0))
# -> 4 3`,
      followUps: ["How does the answer change if pairs must use distinct values?"],
    },
    {
      question: "How would you group words that are anagrams of each other?",
      answer:
        "Compute a canonical key that is identical for all anagrams and hashable, then append each word to a list under that key. The sorted letters as a string or tuple work (O(k log k) per word of length k), or a tuple of 26 letter counts (O(k) per word, assuming lowercase English letters). Total time is O(n × k log k) or O(n × k), with O(n × k) space.",
      code: `from collections import defaultdict

def group_anagrams(words):
    groups = defaultdict(list)
    for word in words:
        groups["".join(sorted(word))].append(word)
    return list(groups.values())

print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
# -> [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]`,
      followUps: ["Why can't you use a list of counts as the key directly?"],
    },
    {
      question: "How do you count subarrays whose sum equals k, including negative numbers?",
      answer:
        "Keep a running prefix sum and a dictionary counting how many times each prefix sum has occurred, starting with {0: 1}. A subarray ending here sums to k exactly when an earlier prefix equals current - k, so add that count. It is O(n) average time and O(n) space. A sliding window does not work because negative numbers mean growing the window can decrease the sum.",
      code: `def subarray_sum(nums, k):
    seen = {0: 1}
    total = count = 0
    for x in nums:
        total += x
        count += seen.get(total - k, 0)
        seen[total] = seen.get(total, 0) + 1
    return count

print(subarray_sum([1, 1, 1], 2), subarray_sum([1, -1, 0], 0), subarray_sum([], 0))
# -> 2 3 0`,
      followUps: ["How would you return the longest such subarray instead of the count?"],
    },
    {
      question: "When is a hash map not the best choice?",
      answer:
        "When the input is already sorted (two pointers or binary search use O(1) extra space), when keys are small integers or lowercase letters (a fixed-size list is simpler and fast), when memory is tight, or when you need ordered traversal or range queries (sorting or a balanced tree fits better). Hash map costs are also average-case; adversarial collisions can degrade them.",
      code: `def letter_counts(word):           # 26 fixed slots instead of a dict
    counts = [0] * 26
    for ch in word:
        counts[ord(ch) - ord("a")] += 1
    return counts

print(letter_counts("abca")[:3])     # -> [2, 1, 1]`,
      followUps: ["What does \"ordered traversal\" require that a dictionary does not provide?"],
    },
    {
      question: "Explain an O(n) solution for Longest Consecutive Sequence.",
      answer:
        "Put all numbers in a set. Only start counting from numbers that begin a sequence (n - 1 is not in the set), then extend while n + 1 is present. Each number is visited a constant number of times overall, so it is O(n) average time and O(n) space, compared with O(n log n) for sorting.",
      code: `def longest_consecutive(nums):
    values = set(nums)
    best = 0
    for n in values:
        if n - 1 not in values:          # start of a run
            length = 1
            while n + length in values:
                length += 1
            best = max(best, length)
    return best

print(longest_consecutive([100, 4, 200, 1, 3, 2]), longest_consecutive([]), longest_consecutive([5, 5]))
# -> 4 0 1`,
      followUps: ["Why does the inner while loop not make this O(n²)?"],
    },
  ],
  mistakes: [
    "Inserting the current element before checking for its complement, so it pairs with itself.",
    "Forgetting the initial {0: 1} entry in prefix-sum counting.",
    "Using a mutable value (such as a list) as a key instead of a tuple or string.",
    "Calling sorted() or slicing inside the loop without counting its cost.",
    "Claiming O(1) lookups without saying \"on average\".",
    "Using a hash map when the problem requires sorted order or constant extra space.",
  ],
  mastery: [
    "You identify which of the five patterns (membership, counting, complement, grouping, prefix sums) a problem needs.",
    "You implement each pattern correctly, including duplicates and empty input.",
    "You explain the average-case time, the extra space and when another approach is better.",
    "You solve the Reinforcement problems above independently and Subarray Sum Equals K without hints.",
  ],
  deprioritize: [
    "Implementing a hash table from scratch, probing strategies and hash function design; explaining collisions and load factor is enough.",
    "Consistent hashing and distributed hash tables; those belong to system design.",
  ],
  keywords: [
    "hash map",
    "hash table",
    "hash set",
    "dictionary",
    "frequency count",
    "complement",
    "grouping",
    "anagram",
    "prefix sum",
    "subarray sum",
    "duplicate detection",
  ],
};

export default topic;
