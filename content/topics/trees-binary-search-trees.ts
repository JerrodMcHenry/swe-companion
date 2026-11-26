import type { Topic } from "../types";

const topic: Topic = {
  slug: "trees-binary-search-trees",
  title: "Trees and Binary Search Trees",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A tree is a hierarchy of nodes with one root and no cycles; in a binary tree each node has at most two children. Most tree problems are solved by depth-first traversal (preorder, inorder, postorder), usually recursive, or breadth-first traversal level by level with a queue. A binary search tree (BST) keeps smaller values in the left subtree and larger values in the right, enabling ordered search.",
  whyItMatters:
    "Binary tree problems are among the most common categories in preparation lists and candidate reports, and trees are named in employer preparation guides (for example Meta's and Google's). They test recursion, choosing what information to return from a subtree, and traversal order. Trees also appear throughout real systems: file systems, the DOM, organization charts, parsers and database indexes.",
  prerequisites: ["Recursion and Backtracking", "Stacks and Queues", "Complexity Analysis"],
  objectives: [
    "Use tree terminology: root, leaf, parent, child, subtree, depth, height, balanced.",
    "Implement preorder, inorder and postorder traversal recursively, and know an iterative version uses an explicit stack.",
    "Implement level-order traversal (BFS) with a deque, processing one level at a time.",
    "Solve problems by deciding what each recursive call returns (height, sum, validity, a pair of values).",
    "Explain the BST property, and that inorder traversal of a BST yields sorted values.",
    "Search a BST in O(h), and explain why h is O(log n) when balanced but O(n) when skewed.",
    "Validate a BST with value bounds, not just parent-child comparisons.",
    "State time O(n) for full traversals and space O(h) for recursion or O(w) for BFS (w = maximum width).",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Tree cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/tree/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read the terminology, traversals, BST section and corner cases.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 6.3 Vocabulary, 6.8 Tree Traversals, 6.12 Binary Search Trees",
      url: "https://runestone.academy/ns/books/published/pythonds3/Trees/TreeTraversals.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Free interactive textbook. Read 6.3 (vocabulary), 6.8 (traversals) and 6.12–6.14 (BSTs). Skip parse trees and the AVL implementation details.",
    },
    {
      title: "VisuAlgo — Binary Search Tree",
      url: "https://visualgo.net/en/bst",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Insert values in sorted order to see a skewed tree, then in mixed order to see a bushier one.",
    },
    {
      title: "MIT 6.006 (Spring 2020) — Lecture 6: Binary Trees, Part 1",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/",
      provider: "MIT OpenCourseWare",
      type: "Course",
      instructions: "Optional university depth. Read the Lecture 6 notes; Lecture 7 (AVL balancing) can be deferred.",
    },
  ],
  exercises: [
    {
      title: "Maximum Depth of Binary Tree (LeetCode)",
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      note: "Foundation, Easy. Solve it recursively (DFS) and with a queue (BFS).",
    },
    {
      title: "Invert Binary Tree (LeetCode)",
      url: "https://leetcode.com/problems/invert-binary-tree/",
      note: "Foundation, Easy. Swap children at each node.",
    },
    {
      title: "Same Tree (LeetCode)",
      url: "https://leetcode.com/problems/same-tree/",
      note: "Foundation, Easy. Recurse on both trees together.",
    },
    {
      title: "Binary Tree Level Order Traversal (LeetCode)",
      url: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      note: "Reinforcement, Medium. BFS with a deque, one level per loop.",
    },
    {
      title: "Balanced Binary Tree (LeetCode)",
      url: "https://leetcode.com/problems/balanced-binary-tree/",
      note: "Reinforcement, Easy. Return height and balance together to stay O(n).",
    },
    {
      title: "Diameter of Binary Tree (LeetCode)",
      url: "https://leetcode.com/problems/diameter-of-binary-tree/",
      note: "Reinforcement, Easy. Return height; update a best answer that passes through each node.",
    },
    {
      title: "Validate Binary Search Tree (LeetCode)",
      url: "https://leetcode.com/problems/validate-binary-search-tree/",
      note: "Reinforcement, Medium. Pass down lower and upper bounds.",
    },
    {
      title: "Lowest Common Ancestor of a Binary Search Tree (LeetCode)",
      url: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      note: "Transfer, Medium. Use the BST property to choose a direction.",
    },
    {
      title: "Kth Smallest Element in a BST (LeetCode)",
      url: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      note: "Transfer, Medium. Inorder traversal with early stopping.",
    },
    {
      title: "Binary Tree Right Side View (LeetCode)",
      url: "https://leetcode.com/problems/binary-tree-right-side-view/",
      note: "Transfer, Medium. Last node of each BFS level.",
    },
    {
      title: "Implement Trie (Prefix Tree) (LeetCode)",
      url: "https://leetcode.com/problems/implement-trie-prefix-tree/",
      note: "Optional, Medium. A tree keyed by characters, used for prefix search; listed in common preparation plans but less central at entry level.",
    },
    {
      title: "Construct Binary Tree from Preorder and Inorder Traversal (LeetCode)",
      url: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      note: "Optional stretch, Medium.",
    },
    {
      title: "Serialize and Deserialize Binary Tree (LeetCode)",
      url: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      note: "Optional stretch, Hard.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are preorder, inorder and postorder traversal, and when would you use each?",
      answer:
        "They are depth-first orders that differ in when the node is visited relative to its subtrees: preorder visits the node before its children (useful for copying or serializing a tree), inorder visits left subtree, node, right subtree (yields sorted order in a BST), and postorder visits children before the node (useful when a node's answer depends on its children's answers, such as height). All are O(n) time and O(h) stack space.",
      code: `class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def inorder(node, out):
    if node:
        inorder(node.left, out)
        out.append(node.val)
        inorder(node.right, out)
    return out

def preorder(node, out):
    if node:
        out.append(node.val)
        preorder(node.left, out)
        preorder(node.right, out)
    return out

root = TreeNode(4, TreeNode(2, TreeNode(1), TreeNode(3)), TreeNode(6))
print(inorder(root, []), preorder(root, []), inorder(None, []))
# -> [1, 2, 3, 4, 6] [4, 2, 1, 3, 6] []`,
      followUps: ["How would you do an inorder traversal iteratively?"],
    },
    {
      question: "When would you use BFS instead of DFS on a tree?",
      answer:
        "Use BFS (level order with a queue) when the question is about levels or the nearest something: level averages, the right side view, or the minimum depth, where BFS can stop at the first leaf. Use DFS when the answer combines results from subtrees (height, diameter, path sums) or follows root-to-leaf paths. BFS uses O(w) memory for the widest level; DFS uses O(h) for the deepest path.",
      code: `from collections import deque

class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def level_order(root):
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

root = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
print(level_order(root), level_order(None))   # -> [[3], [9, 20], [15, 7]] []`,
      followUps: ["How would you return the levels in zigzag order?"],
    },
    {
      question: "How do you approach a tree problem recursively?",
      answer:
        "Decide what each call should return about its subtree, assume the recursive calls return it correctly for the children, and combine. For maximum depth, return the height: 1 + max(left, right), with 0 for an empty tree. When you need two things — such as height and whether the subtree is balanced — return both, or keep a separate best answer updated during the traversal (as in diameter).",
      code: `class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def diameter(root):
    best = 0
    def height(node):
        nonlocal best
        if not node:
            return 0
        left, right = height(node.left), height(node.right)
        best = max(best, left + right)        # longest path through this node (edges)
        return 1 + max(left, right)
    height(root)
    return best

root = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
print(diameter(root), diameter(TreeNode(1)), diameter(None))   # -> 3 0 0`,
      followUps: ["Why does checking balance by calling height() at every node cost O(n²) in the worst case?"],
    },
    {
      question: "What is a binary search tree, and what are its operation costs?",
      answer:
        "In a BST, every value in a node's left subtree is smaller than the node and every value in its right subtree is larger (with a stated rule for duplicates). Search, insert and delete follow one root-to-leaf path, so they cost O(h). A balanced tree has h = O(log n); inserting sorted data into a plain BST creates a chain with h = O(n). Self-balancing trees (AVL, red-black) guarantee O(log n); you should know they exist, not implement them.",
      code: `class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def insert(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert(root.left, val)
    else:
        root.right = insert(root.right, val)
    return root

def contains(root, val):
    while root:
        if val == root.val:
            return True
        root = root.left if val < root.val else root.right
    return False

root = None
for v in (5, 3, 8, 1, 4):
    root = insert(root, v)
print(contains(root, 4), contains(root, 7))   # -> True False`,
      followUps: ["Python has no built-in BST. What would you use for sorted data with frequent inserts?"],
    },
    {
      question: "How do you check whether a binary tree is a valid BST?",
      answer:
        "Pass down the allowed range for each node: the root may be anything; a left child must be below its parent's value and above the parent's lower bound; a right child must be above the parent and below the parent's upper bound. Checking only each node against its direct children misses violations deeper in the tree. Alternatively, an inorder traversal must produce strictly increasing values. Both are O(n) time and O(h) space.",
      code: `class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def is_bst(node, low=float("-inf"), high=float("inf")):
    if not node:
        return True
    if not (low < node.val < high):
        return False
    return is_bst(node.left, low, node.val) and is_bst(node.right, node.val, high)

good = TreeNode(5, TreeNode(3), TreeNode(8, TreeNode(6), TreeNode(9)))
bad = TreeNode(5, TreeNode(3), TreeNode(8, TreeNode(4), TreeNode(9)))   # 4 is in 5's right subtree
print(is_bst(good), is_bst(bad), is_bst(None))   # -> True False True`,
      followUps: ["How would you handle duplicate values?"],
    },
    {
      question: "How do you find the lowest common ancestor of two nodes in a BST?",
      answer:
        "Start at the root. If both values are smaller than the current node, the ancestor is in the left subtree; if both are larger, it is in the right subtree; otherwise the current node splits them (or equals one of them) and is the answer. This takes O(h) time and O(1) space iteratively. In a general binary tree without ordering, you instead search both subtrees recursively in O(n).",
      code: `class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val, self.left, self.right = val, left, right

def lca_bst(root, p, q):
    node = root
    while node:
        if p < node.val and q < node.val:
            node = node.left
        elif p > node.val and q > node.val:
            node = node.right
        else:
            return node.val
    return None

root = TreeNode(6, TreeNode(2, TreeNode(0), TreeNode(4)), TreeNode(8, TreeNode(7), TreeNode(9)))
print(lca_bst(root, 2, 8), lca_bst(root, 2, 4), lca_bst(root, 7, 9))   # -> 6 2 8`,
      followUps: ["How would you find the lowest common ancestor in a binary tree that is not a BST?"],
    },
  ],
  mistakes: [
    "Forgetting the empty-tree (None) base case.",
    "Validating a BST by comparing nodes only with their direct children.",
    "Recomputing heights repeatedly, turning an O(n) solution into O(n²).",
    "Mixing up depth (from the root) and height (to the deepest leaf), or counting nodes versus edges.",
    "Assuming every binary tree is a BST, or that every BST is balanced.",
    "Using list.pop(0) as the BFS queue.",
  ],
  mastery: [
    "You implement all four traversals and choose BFS or DFS with a reason.",
    "You solve tree problems by defining what each recursive call returns.",
    "You explain BST operations, their O(h) cost and the balanced versus skewed cases.",
    "You validate a BST correctly and find a BST lowest common ancestor.",
    "You state time and space complexity in terms of n, h and w.",
  ],
  deprioritize: [
    "Implementing AVL, red-black or B-trees; know what balancing guarantees and that databases use B-tree-like indexes.",
    "Segment trees, Fenwick trees and advanced trie problems.",
    "Morris traversal and other O(1)-space traversal tricks.",
  ],
  keywords: [
    "tree",
    "binary tree",
    "binary search tree",
    "BST",
    "traversal",
    "inorder",
    "preorder",
    "postorder",
    "level order",
    "BFS",
    "DFS",
    "height",
    "depth",
    "lowest common ancestor",
    "trie",
  ],
};

export default topic;
