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
    "Skip for now: implementing AVL or red-black rebalancing, segment and Fenwick trees, and Morris traversal.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 6.3 Vocabulary, 6.8 Tree Traversals, 6.12–6.15 Binary Search Trees",
      url: "https://runestone.academy/ns/books/published/pythonds3/Trees/TreeTraversals.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Start here. Read 6.3 (vocabulary), 6.8 (traversals) and 6.12–6.15 (binary search trees: operations, implementation and analysis). Skip parse trees, priority queues (covered in Heaps) and the AVL implementation. Free; reading needs no account.",
    },
    {
      title: "Binary Tree Algorithms for Technical Interviews — Full Course",
      url: "https://www.youtube.com/watch?v=fAAZixBzIAI",
      provider: "freeCodeCamp.org (Alvin Zablan)",
      type: "Video",
      instructions:
        "Video alternative for traversals (JavaScript; the concepts transfer), about 1 h 50 min. Watch 0:01:09–1:48:28: what a binary tree is, depth-first and breadth-first values, tree includes, sum, min value and max root-to-leaf path sum. Write the code in Python as you go. It does not cover binary search trees — use VisuAlgo below for those. Free; no account.",
    },
    {
      title: "VisuAlgo — Binary Search Tree",
      url: "https://visualgo.net/en/bst",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions:
        "Visualisation with e-lecture notes. Read the BST Property, O(h) Time Complexity, Inorder Traversal and Preorder and Postorder Traversal slides, then insert values in sorted order to see a skewed tree. Skip the AVL Tree slides. Free; no account.",
    },
    {
      title: "Tree cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/tree/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions:
        "Interview checklist, not a lesson: read the BST section, Things to look out for, Corner cases, Common routines and Techniques. Ignore the paid course recommendations at the end. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Maximum Depth of Binary Tree (LeetCode)",
      url: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      note: "Foundation, Easy. Solve it recursively (DFS) and with a queue (BFS). LeetCode needs a free account to submit.",
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
        "They are depth-first orders that differ in when the node is visited relative to its subtrees. Preorder visits the node before its children (useful for copying or serializing a tree); inorder visits left subtree, node, right subtree (yields sorted order in a BST); postorder visits children before the node (useful when a node's answer depends on its children's, such as height). All are O(n) time and O(h) stack space.",
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
      question: "When would you use BFS instead of DFS on a tree?",
      answer:
        "Use BFS (level order with a queue) when the question is about levels or the nearest something: level averages, the right side view, or the minimum depth, where BFS can stop at the first leaf. Use DFS when the answer combines results from subtrees (height, diameter, path sums) or follows root-to-leaf paths. BFS uses O(w) memory for the widest level; DFS uses O(h) for the deepest path. Use collections.deque, not list.pop(0), for the queue.",
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
      question: "How do you approach a tree problem recursively?",
      answer:
        "Decide what each call returns about its subtree, assume the recursive calls return it correctly for the children, and combine. For maximum depth, return the height: 1 + max(left, right), with 0 for an empty tree. When you need two things — such as height and whether the subtree is balanced — return both, or update a separate best answer during the traversal: for diameter, return height but record left height + right height at every node. Calling a separate height() at every node instead costs O(n²) on a skewed tree.",
      followUps: ["Why does checking balance by calling height() at every node cost O(n²) in the worst case?"],
      source: { title: "NeetCode — Diameter of a Binary Tree (LeetCode 543) video", url: "https://www.youtube.com/watch?v=bkxqA8Rfv04" },
    },
    {
      question: "What is a binary search tree, and what are its operation costs?",
      answer:
        "In a BST, every value in a node's left subtree is smaller than the node and every value in its right subtree is larger (with a stated rule for duplicates). Search, insert and delete follow one root-to-leaf path, so they cost O(h). A balanced tree has h = O(log n); inserting sorted data into a plain BST creates a chain with h = O(n). Self-balancing trees (AVL, red-black) guarantee O(log n). Python has no built-in BST; depending on the operations, I would use a sorted list with bisect, a heap or a dictionary.",
      followUps: ["Python has no built-in BST. What would you use for sorted data with frequent inserts?"],
      source: { title: "VisuAlgo — Binary Search Tree (e-lecture)", url: "https://visualgo.net/en/bst" },
    },
    {
      question: "How do you check whether a binary tree is a valid BST?",
      answer:
        "Pass down the allowed range for each node: the root may be anything; going left, the upper bound becomes the parent's value; going right, the lower bound becomes the parent's value. Every node must lie strictly inside its range. Checking each node only against its direct children misses violations deeper in the tree (a small value in the right subtree of the root). Alternatively, an inorder traversal must produce strictly increasing values. Both are O(n) time and O(h) space.",
      followUps: ["How would you handle duplicate values?"],
      source: { title: "NeetCode — Validate Binary Search Tree (LeetCode 98) video", url: "https://www.youtube.com/watch?v=s6ATEkipzow" },
    },
    {
      question: "How do you find the lowest common ancestor of two nodes in a BST?",
      answer:
        "Start at the root. If both values are smaller than the current node, the ancestor is in the left subtree; if both are larger, it is in the right subtree; otherwise the current node splits them (or equals one of them) and is the answer. That is O(h) time and O(1) space iteratively. In a general binary tree without ordering, you instead search both subtrees recursively in O(n).",
      followUps: ["How would you find the lowest common ancestor in a binary tree that is not a BST?"],
      source: { title: "NeetCode — Lowest Common Ancestor of a Binary Search Tree (LeetCode 235) video", url: "https://www.youtube.com/watch?v=gs2LMfuOR9k" },
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
    "Skip this topic if you can already solve Diameter of Binary Tree and Validate Binary Search Tree without hints and explain their complexity.",
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
