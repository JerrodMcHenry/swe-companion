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
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Stack cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/stack/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the introduction, operation costs and corner cases. The queue cheatsheet on the same site is a short companion.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 3.3 Stacks to 3.6 Simple Balanced Parentheses",
      url: "https://runestone.academy/ns/books/published/pythonds3/BasicDS/WhatisaStack.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read 3.3–3.7 on stacks and balanced symbols, then 3.10–3.12 on queues. Skip the simulation sections.",
    },
    {
      title: "Python Standard Library — collections.deque",
      url: "https://docs.python.org/3/library/collections.html#collections.deque",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read the opening paragraphs on O(1) appends and pops at both ends and the note that indexing in the middle is O(n).",
    },
    {
      title: "VisuAlgo — Linked List, Stack, Queue, Deque",
      url: "https://visualgo.net/en/list",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Use the Stack and Queue modes to watch push, pop, enqueue and dequeue.",
    },
  ],
  exercises: [
    {
      title: "Valid Parentheses (LeetCode)",
      url: "https://leetcode.com/problems/valid-parentheses/",
      note: "Foundation, Easy. Stack of expected closing brackets; test \"\", \"(\", \")(\" and \"([)]\".",
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
print(queue.popleft())      # -> 1
print(len(queue), bool(stack))   # -> 1 True`,
      followUps: ["What happens if you pop from an empty list or deque?"],
    },
    {
      question: "How do you check whether brackets are balanced?",
      answer:
        "Scan left to right. Push each opening bracket; for each closing bracket, the stack must be non-empty and its top must be the matching opener, which you pop. At the end the stack must be empty. The stack works because the most recently opened bracket must be closed first. O(n) time and O(n) space in the worst case.",
      code: `def is_valid(s):
    pairs = {")": "(", "]": "[", "}": "{"}
    stack = []
    for ch in s:
        if ch in pairs:
            if not stack or stack.pop() != pairs[ch]:
                return False
        else:
            stack.append(ch)
    return not stack

for s in ["()[]{}", "([)]", "", "((", ")"]:
    print(repr(s), is_valid(s))
# -> '()[]{}' True
# -> '([)]' False
# -> '' True
# -> '((' False
# -> ')' False`,
      followUps: ["How would you return the index of the first unmatched bracket?"],
    },
    {
      question: "What is a monotonic stack, and when would you use one?",
      answer:
        "A stack whose values (or the values at its stored indexes) stay in increasing or decreasing order. When a new element breaks the order, you pop smaller (or larger) elements, and the new element is the answer for each popped one: their \"next greater element\". Each index is pushed and popped at most once, so the whole pass is O(n). Signals: \"next greater/smaller\", \"how many days until\", spans and histogram areas.",
      code: `def daily_temperatures(temps):
    answer = [0] * len(temps)
    stack = []                                  # indexes, temperatures decreasing
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            answer[j] = i - j
        stack.append(i)
    return answer

print(daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]))
# -> [1, 1, 4, 2, 1, 1, 0, 0]`,
      followUps: ["Why is the nested while loop still O(n) in total?"],
    },
    {
      question: "How can you implement a queue using two stacks, and what does each operation cost?",
      answer:
        "Push new items onto an input stack. To dequeue, pop from an output stack; if it is empty, first move every item from the input stack to the output stack, which reverses their order so the oldest is on top. A single dequeue can cost O(n), but each item moves at most once, so the amortized cost per operation is O(1).",
      code: `class TwoStackQueue:
    def __init__(self):
        self.inbox, self.outbox = [], []

    def push(self, x):
        self.inbox.append(x)

    def pop(self):
        if not self.outbox:
            while self.inbox:
                self.outbox.append(self.inbox.pop())
        return self.outbox.pop()

q = TwoStackQueue()
for x in (1, 2, 3):
    q.push(x)
print(q.pop(), q.pop())   # -> 1 2
q.push(4)
print(q.pop(), q.pop())   # -> 3 4`,
      followUps: ["Why would you ever do this instead of using a deque?"],
    },
    {
      question: "How would you design a stack that returns its minimum in O(1)?",
      answer:
        "Store, with each pushed value, the minimum of the stack at that point: push (value, min(value, current_min)). The minimum is always the second field of the top entry, and popping automatically restores the previous minimum. Every operation is O(1); the extra space is O(n).",
      code: `class MinStack:
    def __init__(self):
        self.items = []

    def push(self, x):
        current = self.items[-1][1] if self.items else x
        self.items.append((x, min(x, current)))

    def pop(self):
        return self.items.pop()[0]

    def get_min(self):
        return self.items[-1][1]

s = MinStack()
for x in (5, 2, 7, 2):
    s.push(x)
print(s.get_min()); s.pop(); s.pop(); print(s.get_min()); s.pop(); print(s.get_min())
# -> 2
# -> 2
# -> 5`,
      followUps: ["How could you reduce the extra memory when the minimum rarely changes?"],
    },
    {
      question: "Where are stacks and queues used in real software?",
      answer:
        "Stacks: the function call stack (and recursion), undo history, parsing and expression evaluation, and depth-first traversal. Queues: breadth-first traversal, task and job queues, buffering requests between producers and consumers, and rate limiting over a time window. Knowing these helps you recognize the pattern in disguise during interviews.",
      code: `from collections import deque

calls = deque()
def ping(t, window=3000):          # count requests in the last 3000 ms
    calls.append(t)
    while calls[0] < t - window:
        calls.popleft()
    return len(calls)

print([ping(t) for t in (1, 100, 3001, 3002)])   # -> [1, 2, 3, 3]`,
      followUps: ["What would you use if items needed to come out by priority rather than arrival order?"],
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
