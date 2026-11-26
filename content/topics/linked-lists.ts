import type { Topic } from "../types";

const topic: Topic = {
  slug: "linked-lists",
  title: "Linked Lists",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A linked list is a chain of nodes, each holding a value and a reference to the next node (and, in a doubly linked list, the previous one). Inserting or removing next to a node you already hold is O(1), but reaching the k-th node requires walking from the head, which is O(k).",
  whyItMatters:
    "Linked list problems test careful pointer (reference) manipulation, edge-case handling and the fast-and-slow pointer technique, and they appear regularly in interview preparation lists and candidate reports (for example, reversing a linked list in a reported 2026 Apple new-grad loop). In professional Python code you rarely write linked lists, but the same reasoning applies to references between objects, and linked structures underlie LRU caches and deques.",
  prerequisites: ["Mutability, References and Copying", "Loops", "Complexity Analysis"],
  objectives: [
    "Define a node class and build, traverse and print a singly linked list.",
    "Compare linked lists with Python lists: access, insertion, deletion and memory.",
    "Insert and delete nodes, including at the head, using a dummy (sentinel) node to simplify edge cases.",
    "Reverse a linked list iteratively, and recognize the recursive version.",
    "Use fast and slow pointers to find the middle, detect a cycle and find the k-th node from the end.",
    "Merge two sorted lists.",
    "Test edge cases: empty list, one node, two nodes, and operations at the head and tail.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Linked list cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/linked-list/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the techniques (sentinel node, two pointers, reversal) and corner cases.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 3.21 Implementing an Unordered List: Linked Lists",
      url: "https://runestone.academy/ns/books/published/pythonds3/BasicDS/ImplementinganUnorderedListLinkedLists.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read 3.21 for a Python node class, traversal, search and removal; skip the ordered-list sections.",
    },
    {
      title: "VisuAlgo — Linked List",
      url: "https://visualgo.net/en/list",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Step through insertion and removal at the head, middle and tail.",
    },
  ],
  exercises: [
    {
      title: "Reverse Linked List (LeetCode)",
      url: "https://leetcode.com/problems/reverse-linked-list/",
      note: "Foundation, Easy. Iterative with three references; then try the recursive version and state its O(n) stack space.",
    },
    {
      title: "Middle of the Linked List (LeetCode)",
      url: "https://leetcode.com/problems/middle-of-the-linked-list/",
      note: "Foundation, Easy. Fast and slow pointers.",
    },
    {
      title: "Merge Two Sorted Lists (LeetCode)",
      url: "https://leetcode.com/problems/merge-two-sorted-lists/",
      note: "Foundation, Easy. Dummy head node.",
    },
    {
      title: "Linked List Cycle (LeetCode)",
      url: "https://leetcode.com/problems/linked-list-cycle/",
      note: "Reinforcement, Easy. Compare a visited set (O(n) space) with Floyd's two pointers (O(1) space).",
    },
    {
      title: "Remove Nth Node From End of List (LeetCode)",
      url: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
      note: "Reinforcement, Medium. Gap of n between two pointers plus a dummy node.",
    },
    {
      title: "Palindrome Linked List (LeetCode)",
      url: "https://leetcode.com/problems/palindrome-linked-list/",
      note: "Transfer, Easy. Combine middle-finding and reversal for O(1) space.",
    },
    {
      title: "Reorder List (LeetCode)",
      url: "https://leetcode.com/problems/reorder-list/",
      note: "Transfer, Medium. Find the middle, reverse the second half, then interleave.",
    },
    {
      title: "LRU Cache (LeetCode)",
      url: "https://leetcode.com/problems/lru-cache/",
      note: "Optional stretch, Medium. Hash map plus doubly linked list (or OrderedDict); a common design-flavoured question.",
    },
  ],
  interviewQuestions: [
    {
      question: "How does a linked list compare with a Python list (dynamic array)?",
      answer:
        "A Python list stores references contiguously, so indexing is O(1) and appending is amortized O(1), but inserting or deleting near the front is O(n). A linked list has O(k) access to the k-th element because you must walk from the head, but inserting or deleting next to a node you already have is O(1), with no shifting. Linked lists use extra memory per node for references and have poorer cache locality. In Python, use a list or deque in practice.",
      code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def to_list(head):
    out = []
    while head:
        out.append(head.val)
        head = head.next
    return out

head = Node(1, Node(2, Node(3)))
head.next = Node(9, head.next)      # insert after the head in O(1)
print(to_list(head))                # -> [1, 9, 2, 3]`,
      followUps: ["When would a doubly linked list be worth its extra memory?"],
    },
    {
      question: "How do you reverse a singly linked list?",
      answer:
        "Walk the list keeping three references: prev (the already reversed part, initially None), curr and the saved next node. For each node, save curr.next, point curr.next at prev, then advance prev and curr. When curr is None, prev is the new head. O(n) time and O(1) extra space; the recursive version is shorter but uses O(n) stack space.",
      code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def reverse(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev, curr = curr, nxt
    return prev

def to_list(head):
    out = []
    while head:
        out.append(head.val); head = head.next
    return out

print(to_list(reverse(Node(1, Node(2, Node(3))))), to_list(reverse(None)), to_list(reverse(Node(7))))
# -> [3, 2, 1] [] [7]`,
      followUps: ["How would you reverse only the nodes between positions left and right?"],
    },
    {
      question: "How do you detect a cycle in a linked list?",
      answer:
        "Floyd's algorithm: move a slow pointer one step and a fast pointer two steps at a time. If there is a cycle, the fast pointer eventually laps the slow one and they meet; if fast reaches None, there is no cycle. It is O(n) time and O(1) space. A simpler alternative stores visited nodes in a set, which uses O(n) space.",
      code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def has_cycle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
        if slow is fast:
            return True
    return False

a, b, c = Node(1), Node(2), Node(3)
a.next, b.next = b, c
print(has_cycle(a)); c.next = b; print(has_cycle(a)); print(has_cycle(None))
# -> False
# -> True
# -> False`,
      followUps: ["How would you find the node where the cycle begins?"],
    },
    {
      question: "What is a dummy (sentinel) node, and why use one?",
      answer:
        "A placeholder node placed before the real head. Operations that might change the head — deleting the first node, merging lists, inserting at the front — then follow the same code path as operations in the middle, and you return dummy.next at the end. It removes special cases and the bugs they cause.",
      code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def remove_all(head, target):
    dummy = Node(0, head)
    curr = dummy
    while curr.next:
        if curr.next.val == target:
            curr.next = curr.next.next     # unlink; works even for the head
        else:
            curr = curr.next
    return dummy.next

def to_list(head):
    out = []
    while head:
        out.append(head.val); head = head.next
    return out

print(to_list(remove_all(Node(7, Node(7, Node(1, Node(7)))), 7)))   # -> [1]`,
      followUps: ["Would you need a dummy node to delete from a doubly linked list?"],
    },
    {
      question: "How do you find the middle node, or the k-th node from the end, in one pass?",
      answer:
        "For the middle, advance slow by one and fast by two; when fast reaches the end, slow is at the middle (for even lengths, this version stops at the second middle). For the k-th from the end, first move a lead pointer k steps ahead, then move both pointers together; when the lead reaches the end, the trailing pointer is k nodes from the end. Both are O(n) time and O(1) space.",
      code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def build(values):
    head = None
    for v in reversed(values):
        head = Node(v, head)
    return head

def middle(head):
    slow = fast = head
    while fast and fast.next:
        slow, fast = slow.next, fast.next.next
    return slow.val

print(middle(build([1, 2, 3, 4, 5])), middle(build([1, 2, 3, 4])), middle(build([8])))
# -> 3 3 8`,
      followUps: ["How would you make middle() return the first middle for even lengths?"],
    },
    {
      question: "How do you merge two sorted linked lists?",
      answer:
        "Use a dummy node and a tail pointer. Repeatedly attach the smaller of the two current heads to the tail and advance that list; when one list runs out, attach the rest of the other. Nodes are reused, so it is O(n + m) time and O(1) extra space. Choosing <= keeps equal elements in their original order (stable).",
      code: `class Node:
    def __init__(self, val, next=None):
        self.val, self.next = val, next

def build(values):
    head = None
    for v in reversed(values):
        head = Node(v, head)
    return head

def merge(a, b):
    dummy = tail = Node(0)
    while a and b:
        if a.val <= b.val:
            tail.next, a = a, a.next
        else:
            tail.next, b = b, b.next
        tail = tail.next
    tail.next = a or b
    return dummy.next

def to_list(head):
    out = []
    while head:
        out.append(head.val); head = head.next
    return out

print(to_list(merge(build([1, 2, 4]), build([1, 3, 4]))), to_list(merge(None, build([0]))))
# -> [1, 1, 2, 3, 4, 4] [0]`,
      followUps: ["How would you merge k sorted lists efficiently? (See Heaps and Priority Queues.)"],
    },
  ],
  mistakes: [
    "Losing the rest of the list by overwriting next before saving it.",
    "Dereferencing None: checking fast.next.next without checking fast and fast.next first.",
    "Forgetting the head-change cases (empty list, deleting the first node) instead of using a dummy node.",
    "Comparing nodes with == instead of `is` when identity matters (for example in cycle detection with custom equality).",
    "Creating cycles accidentally when relinking nodes, causing infinite loops.",
    "Not testing with zero, one and two nodes.",
  ],
  mastery: [
    "You implement reversal, merging, middle-finding, cycle detection and k-th-from-end removal without reference.",
    "You draw the references before and after each step and explain the order of assignments.",
    "You use a dummy node where the head may change.",
    "You state time and space complexity, including recursion stack space for recursive versions.",
  ],
  deprioritize: [
    "Skip lists, XOR linked lists and memory-pool implementations.",
    "Finding a cycle's starting node mathematically beyond knowing the technique exists (it is an occasional follow-up).",
  ],
  keywords: [
    "linked list",
    "node",
    "singly linked list",
    "doubly linked list",
    "reverse linked list",
    "fast and slow pointers",
    "Floyd",
    "cycle detection",
    "dummy node",
    "sentinel",
    "merge sorted lists",
  ],
};

export default topic;
