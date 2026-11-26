import type { Topic } from "../types";

const topic: Topic = {
  slug: "problem-solving-process",
  title: "Problem-Solving Process and Communication",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A repeatable way to approach an unfamiliar coding problem and talk through it: understand and clarify the problem, work examples and edge cases, find a correct approach, improve it if needed, explain the plan, implement, test, and state the complexity and trade-offs. It is a flexible framework, not a script.",
  whyItMatters:
    "Coding interviews assess how you reach a solution as much as whether you reach it. Google's official mock interview shows the candidate asking clarifying questions, explaining their thinking, starting with a straightforward approach and then optimizing; Amazon's official guidance asks for syntactically correct, well-tested code and checked edge cases. The same habits — clarify requirements, reason about cases, explain decisions — are how engineers work on real tickets. Learn this topic first and apply it to every problem in this unit.",
  prerequisites: ["Programming Fluency checkpoint (Unit 1)", "Python Debugging (for testing and dry-running)"],
  objectives: [
    "Restate a problem in your own words and ask focused clarifying questions about inputs, outputs, constraints and edge cases.",
    "Work through small examples by hand, including edge cases, before coding.",
    "Describe a straightforward correct approach and its complexity, then look for improvements using the constraints.",
    "Recognize common signals that suggest a data structure or pattern (sorted input, \"pairs\", \"contiguous\", \"shortest\", \"all combinations\").",
    "Explain your chosen approach before writing code, and get agreement.",
    "Implement in clean, complete code without relying on running it.",
    "Test by dry-running examples and edge cases, find and fix bugs, and state final time and space complexity.",
    "Discuss trade-offs and answer follow-ups such as \"What if the input did not fit in memory?\"",
    "Manage time, and recover when stuck by revisiting examples or simplifying the problem.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Coding interview techniques",
      url: "https://www.techinterviewhandbook.org/coding-interview-techniques/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions:
        "Free. Read the sections on what to do before, during and after coding. It is a commonly recommended summary of the same process taught here (about 20 minutes).",
    },
    {
      title: "How to solve a Google coding interview question",
      url: "https://www.youtube.com/watch?v=Ti5vfu9arXQ",
      provider: "Life at Google (official)",
      type: "Video",
      instructions:
        "Official mock interview. Watch for the clarifying questions, the move from brute force to an optimized approach, and how the candidate explains while coding.",
    },
    {
      title: "Software development interview topics",
      url: "https://amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics",
      provider: "Amazon (official)",
      type: "Article",
      instructions: "Official employer guidance. Read the coding section on writing syntactically correct, tested code and checking edge cases.",
    },
    {
      title: "Algorithms study cheatsheet",
      url: "https://www.techinterviewhandbook.org/algorithms/study-cheatsheet/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free reference for the general approach and common corner cases to test. Skim it now; return to it before interviews.",
    },
  ],
  exercises: [
    {
      title: "For your next three problems in this unit, write the clarifying questions, examples, edge cases and approach before any code.",
      note: "Foundation. Five minutes of planning; then compare your plan with the final solution.",
    },
    {
      title: "Majority Element (LeetCode)",
      url: "https://leetcode.com/problems/majority-element/",
      note: "Foundation, Easy. Solve it three ways — counting with a dictionary, sorting, and (optional) Boyer–Moore voting — and compare time and space aloud.",
    },
    {
      title: "Missing Number (LeetCode)",
      url: "https://leetcode.com/problems/missing-number/",
      note: "Reinforcement, Easy. Compare a set, sorting and the arithmetic-sum approach; discuss which you would choose and why.",
    },
    {
      title: "Record yourself solving an unseen Easy problem while talking aloud for 20 minutes, then watch it back.",
      note: "Communication practice. Note silences, unexplained jumps and untested code.",
    },
    {
      title: "Do a mock interview with another person who gives you an unfamiliar problem and asks follow-ups.",
      note: "Transfer. A peer, mentor or a free peer mock-interview platform works; practise without AI or code execution if your target employer interviews that way.",
    },
  ],
  interviewQuestions: [
    {
      question: "What clarifying questions would you ask before solving a coding problem?",
      answer:
        "Questions that change the solution: the input type and size, whether it can be empty, whether values can be negative or duplicated, whether the input is sorted, what to return when there is no answer, whether there can be several valid answers, and whether I may modify the input. Constraints such as n up to 10^5 tell me an O(n²) approach is probably too slow. I ask a few targeted questions rather than a long list.",
      code: `# Problem: "Return the indices of two numbers that add up to target."
# Clarify: Exactly one answer? Can I use the same element twice?
# Sorted input? Negative numbers? What if there is no pair?
# Example: nums=[3, 2, 4], target=6 -> [1, 2]   (not [0, 0])
print("ask before you code")   # -> ask before you code`,
      followUps: ["How do the constraints help you choose an algorithm?"],
    },
    {
      question: "Should you always code the brute-force solution first?",
      answer:
        "No. You should always be able to describe a correct straightforward approach and its complexity, because it proves you understand the problem and gives a baseline. If you already see a better approach and can justify it, explain both briefly and implement the better one. If you are stuck on the optimal solution, implementing the straightforward one first is better than having no working code.",
      code: `def has_duplicate_brute(nums):           # O(n^2) time, O(1) space
    return any(nums[i] == nums[j]
               for i in range(len(nums)) for j in range(i + 1, len(nums)))

def has_duplicate(nums):                 # O(n) average time, O(n) space
    return len(set(nums)) != len(nums)

print(has_duplicate_brute([1, 2, 1]), has_duplicate([1, 2, 3]))   # -> True False`,
      followUps: ["When might the brute-force solution be the right final answer?"],
    },
    {
      question: "How do you find a better approach once you have a working one?",
      answer:
        "Look for repeated work. Common moves: replace a repeated search with a hash map or set lookup; sort first so that two pointers or binary search apply; keep a running value (sum, maximum, window) instead of recomputing; precompute prefix sums; or use a heap when you only need the top k. The input constraints and the required output often point to the target complexity.",
      code: `# Repeated work: for each price, scan all later prices -> O(n^2).
# Better: keep the lowest price seen so far -> one pass, O(n).
def max_profit(prices):
    lowest, best = float("inf"), 0
    for price in prices:
        lowest = min(lowest, price)
        best = max(best, price - lowest)
    return best

print(max_profit([7, 1, 5, 3, 6, 4]), max_profit([7, 6, 4]))   # -> 5 0`,
      followUps: ["What signals suggest sorting first? What signals suggest a hash map?"],
    },
    {
      question: "How do you test a solution without running it?",
      answer:
        "Dry-run it on the example from the problem and track variables in a small table, then on edge cases: empty input, one element, two elements, duplicates, negative numbers, all equal values, and the boundaries of each loop. Check that every branch returns the right type and that indexes stay in range. Say aloud what each test checks.",
      code: `def first_unique(s):
    counts = {}
    for ch in s:
        counts[ch] = counts.get(ch, 0) + 1
    for i, ch in enumerate(s):
        if counts[ch] == 1:
            return i
    return -1

for case in ["leetcode", "aabb", "", "z"]:
    print(repr(case), first_unique(case))
# -> 'leetcode' 0
# -> 'aabb' -1
# -> '' -1
# -> 'z' 0`,
      followUps: ["Which edge cases would you test for a function that merges two sorted lists?"],
    },
    {
      question: "What should you do when you are stuck in an interview?",
      answer:
        "Say so and keep reasoning aloud. Go back to concrete examples and solve them by hand, noting what you do; simplify the problem (smaller input, sorted input, no duplicates); ask which data structure would make the slow step fast; and consider implementing the straightforward solution. Interviewers often give hints when they can see your reasoning, and taking a hint well is part of the assessment.",
      code: `# Stuck on: "longest substring without repeating characters"
# By hand on "abcabcbb": a, ab, abc, then 'a' repeats -> move the start
# past the earlier 'a'. That "move the start" step suggests a sliding window.
print("solve examples by hand, then generalize")   # -> solve examples by hand, then generalize`,
      followUps: ["How do you use an interviewer's hint without losing your own reasoning?"],
    },
    {
      question: "How should you manage time in a 45-minute coding interview?",
      answer:
        "A rough editorial guide: about 5 minutes understanding and clarifying, 5–10 minutes on examples and the approach, 15–20 minutes implementing, and 5–10 minutes testing and discussing complexity and follow-ups. Interviews also include introductions and your questions, and many include more than one problem. Do not polish details before the core solution works; mention improvements you would make if you run short.",
      code: `plan = {"clarify": 5, "approach": 8, "implement": 18, "test and discuss": 9}
print(sum(plan.values()))   # -> 40`,
      followUps: ["What would you say if you realize with five minutes left that your approach is wrong?"],
    },
  ],
  mistakes: [
    "Starting to code before understanding the problem or agreeing on the approach.",
    "Working silently, so the interviewer cannot follow or help.",
    "Ignoring constraints that rule out the approach you chose.",
    "Skipping edge cases, then declaring the solution finished without testing.",
    "Polishing variable names or helpers while the core algorithm is still broken.",
    "Memorizing solutions instead of practising how to reach them; unfamiliar variations then fail.",
  ],
  mastery: [
    "On an unseen problem, you ask relevant clarifying questions and list edge cases before coding.",
    "You can state a correct straightforward approach with its complexity, and explain how you improved it.",
    "You explain your plan before coding and narrate key decisions while implementing.",
    "You dry-run and test your code and find your own bugs before the interviewer does.",
    "You finish by stating time and space complexity and at least one trade-off or follow-up.",
  ],
  deprioritize: [
    "Memorized scripts or catchphrases; interviewers notice and they do not help on unfamiliar problems.",
    "Formal proof techniques; a clear informal argument for correctness is enough at entry level.",
  ],
  keywords: [
    "problem solving",
    "interview process",
    "clarifying questions",
    "communication",
    "think aloud",
    "brute force",
    "optimization",
    "edge cases",
    "dry run",
    "time management",
  ],
};

export default topic;
