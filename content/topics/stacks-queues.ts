import type { Topic } from "../types";

const topic: Topic = {
  slug: "stacks-queues",
  title: "Stacks and Queues",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A stack is last-in, first-out (LIFO): you add and remove at the same end. A queue is first-in, first-out (FIFO): you add at one end and remove at the other. In Python, a list works well as a stack, and collections.deque is the right choice for a queue.",
  whyItMatters:
    "Stacks solve matching and nesting problems (brackets, undo, expression evaluation) and are what recursion uses behind the scenes; a monotonic stack finds the \"next greater element\" in linear time. Queues drive breadth-first search in trees and graphs and model real systems such as task queues and request buffers. Both are named in employer preparation material (for example Meta's guide).",
  prerequisites: ["Lists", "Complexity Analysis", "Problem-Solving Process and Communication"],
  objectives: [
    "Explain LIFO and FIFO and give a real use for each.",
    "Use a Python list as a stack with append and pop, and explain why both are O(1) (append amortized).",
    "Use collections.deque as a queue with append and popleft in O(1), and explain why list.pop(0) is O(n).",
    "Solve balanced-delimiter and nested-structure problems with a stack.",
    "Use a stack to evaluate or simplify expressions and to simulate processes (such as backspaces).",
    "Recognize and implement a monotonic stack for next-greater or next-smaller element problems.",
    "Implement a queue with two stacks and explain its amortized cost.",
    "Use a queue for level-by-level processing (introduced here, used in Trees and Graphs).",
    "Skip for now: monotonic deques, circular buffers and thread-safe queues.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Hello Interview — Stack Overview and Monotonic Stack",
      url: "https://www.hellointerview.com/learn/code/stack/overview",
      provider: "Hello Interview",
      type: "Interactive",
      instructions:
        "Start here. Read Stack Overview (using a list as a stack, nested sequences, Valid Parentheses), then Monotonic Stack from the left-hand menu (next greater and next smaller element); about 40 minutes, in Python with step-through visualizations. Skip the other problem pages until you have attempted the matching exercises. Free to read without an account; Premium features are not needed.",
    },
    {
      title: "The Python Tutorial — 5.1.1 Using Lists as Stacks and 5.1.2 Using Lists as Queues",
      url: "https://docs.python.org/3/tutorial/datastructures.html#using-lists-as-stacks",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Read both short subsections (5 minutes): why a list is a good stack but a poor queue, and why collections.deque is the queue to use. This is the queue half of the topic; queues are used heavily later in Trees and Graphs (breadth-first search).",
    },
    {
      title: "NeetCode roadmap — Stack",
      url: "https://neetcode.io/roadmap",
      provider: "NeetCode",
      type: "Video",
      instructions:
        "Video alternative for problem explanations. Open the Stack node (Valid Parentheses, Min Stack, Evaluate Reverse Polish Notation, Daily Temperatures) and watch a video only after attempting the problem. The videos are free on YouTube; paid NeetCode features are not needed.",
    },
    {
      title: "VisuAlgo — Linked List, Stack, Queue, Deque",
      url: "https://visualgo.net/en/list",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Use the Stack and Queue modes to watch push, pop, enqueue and dequeue. No account needed.",
    },
  ],
  exercises: [
    {
      title: "Valid Parentheses (LeetCode)",
      url: "https://leetcode.com/problems/valid-parentheses/",
      note: "Foundation, Easy. Stack of expected closing brackets; test \"\", \"(\", \")(\" and \"([)]\". LeetCode problems need a free account to submit.",
    },
    {
      title: "Implement Queue using Stacks (LeetCode)",
      url: "https://leetcode.com/problems/implement-queue-using-stacks/",
      note: "Foundation, Easy. Two stacks; explain the amortized O(1) cost.",
    },
    {
      title: "Number of Recent Calls (LeetCode)",
      url: "https://leetcode.com/problems/number-of-recent-calls/",
      note: "Foundation, Easy. A deque as a sliding time window.",
    },
    {
      title: "Min Stack (LeetCode)",
      url: "https://leetcode.com/problems/min-stack/",
      note: "Reinforcement, Medium. Store the running minimum alongside each value.",
    },
    {
      title: "Evaluate Reverse Polish Notation (LeetCode)",
      url: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      note: "Reinforcement, Medium. Operand stack; watch the division rule (truncate toward zero).",
    },
    {
      title: "Daily Temperatures (LeetCode)",
      url: "https://leetcode.com/problems/daily-temperatures/",
      note: "Transfer, Medium. Monotonic stack of indexes; O(n).",
    },
    {
      title: "Largest Rectangle in Histogram (LeetCode)",
      url: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      note: "Optional stretch, Hard. Monotonic stack with widths.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are a stack and a queue, and how do you implement each in Python?",
      answer:
        "A stack removes the most recently added item first (LIFO); a queue removes the oldest item first (FIFO). In Python, a list is a good stack: append and pop at the end are O(1) (append amortized). For a queue, use collections.deque: append and popleft are O(1). Using list.pop(0) as a queue is O(n) per removal because every remaining element shifts left.",
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
      question: "How do you check whether brackets are balanced?",
      answer:
        "Scan left to right. Push each opening bracket; for each closing bracket, the stack must be non-empty and its top must be the matching opener, which you pop. At the end the stack must be empty. A stack fits because the most recently opened bracket must be closed first. O(n) time and O(n) space in the worst case. Test \"\", \"(\", \")\" and \"([)]\".",
      followUps: ["How would you return the index of the first unmatched bracket?"],
      source: { title: "Hello Interview — Valid Parentheses", url: "https://www.hellointerview.com/learn/code/stack/valid-parentheses" },
    },
    {
      question: "What is a monotonic stack, and when would you use one?",
      answer:
        "A stack whose values (or the values at its stored indexes) stay in increasing or decreasing order. When a new element breaks the order, you pop elements, and the new element is the answer for each popped one — their \"next greater element\". Each index is pushed and popped at most once, so the whole pass is O(n) despite the nested loop. Store indexes when you need distances. Signals: \"next greater/smaller\", \"how many days until\", spans and histogram areas.",
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
      question: "How can you implement a queue using two stacks, and what does each operation cost?",
      answer:
        "Push new items onto an input stack. To dequeue, pop from an output stack; if it is empty, first move every item from the input stack to the output stack, which reverses their order so the oldest is on top. A single dequeue can cost O(n), but each item is moved at most once, so the amortized cost per operation is O(1).",
      followUps: ["Why would you ever do this instead of using a deque?"],
      source: {
        title: "NeetCode — Implement Queue using Stacks (written solution, amortized approach)",
        url: "https://github.com/neetcode-gh/leetcode/blob/main/articles/implement-queue-using-stacks.md",
      },
    },
    {
      question: "How would you design a stack that returns its minimum in O(1)?",
      answer:
        "Store, with each pushed value, the minimum of the stack at that point: push (value, min(value, current_min)), or keep a second stack of minimums. The minimum is always at the top, and popping automatically restores the previous minimum. Every operation is O(1); the extra space is O(n).",
      followUps: ["How could you reduce the extra memory when the minimum rarely changes?"],
      source: { title: "NeetCode — Min Stack (video explanation)", url: "https://www.youtube.com/watch?v=qkLl7nAwDPo" },
    },
    {
      question: "Where are stacks and queues used in real software?",
      answer:
        "Stacks: the function call stack (and recursion), undo history, parsing and expression evaluation, and depth-first traversal. Queues: breadth-first traversal, task and job queues, buffering requests between producers and consumers, and counting events in a sliding time window (as in Number of Recent Calls).",
      followUps: ["What would you use if items needed to come out by priority rather than arrival order?"],
      source: { title: "Tech Interview Handbook — Stack: Introduction", url: "https://www.techinterviewhandbook.org/algorithms/stack/#introduction" },
    },
  ],
  mistakes: [
    "Using list.pop(0) or insert(0, x) as a queue, making each operation O(n).",
    "Popping from an empty stack without checking first.",
    "Forgetting to check that the stack is empty at the end of a bracket check.",
    "Storing values instead of indexes in a monotonic stack when you need distances.",
    "Truncating division incorrectly in expression problems (Python's // floors; int(a / b) truncates toward zero).",
  ],
  mastery: [
    "You choose a stack, a queue or a deque for a problem and justify it.",
    "You implement balanced brackets, a min stack and a two-stack queue without reference.",
    "You recognize next-greater-element problems and solve them with a monotonic stack in O(n).",
    "You explain amortized O(1) for the two-stack queue and list.append.",
    "Skip this topic if you can already solve Daily Temperatures and Min Stack unaided and explain why a deque beats list.pop(0).",
  ],
  deprioritize: [
    "Monotonic deques (sliding window maximum) and circular buffer implementations, unless you target roles that emphasize them.",
    "Thread-safe queues and message brokers; those belong to backend and systems work.",
  ],
  keywords: [
    "stack",
    "queue",
    "deque",
    "LIFO",
    "FIFO",
    "balanced parentheses",
    "monotonic stack",
    "next greater element",
    "min stack",
    "popleft",
  ],
};

export default topic;
