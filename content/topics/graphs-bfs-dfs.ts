import type { Topic } from "../types";

const topic: Topic = {
  slug: "graphs-bfs-dfs",
  title: "Graphs: BFS, DFS and Topological Sort",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "A graph is a set of nodes connected by edges, directed or undirected. Most interview graph problems reduce to building an adjacency list (or treating a grid as an implicit graph) and traversing it with breadth-first search (BFS) or depth-first search (DFS) while tracking visited nodes. Topological sort orders the nodes of a directed acyclic graph so that every edge points forward.",
  whyItMatters:
    "Graphs model dependencies, networks, maps, social connections and grids, and graph traversal is named in employer preparation material (for example Google's official topic list and Meta's guide). Islands, flood fill, shortest steps in a grid, course prerequisites and cloning a graph are recurring preparation problems. The same reasoning appears at work in build systems, package dependency resolution and service call graphs.",
  prerequisites: ["Trees and Binary Search Trees", "Stacks and Queues", "Recursion and Backtracking", "Dictionaries"],
  objectives: [
    "Represent graphs as adjacency lists (dictionary of lists), and know when an adjacency matrix or edge list fits.",
    "Treat a grid as a graph with up to four neighbours per cell, checking bounds.",
    "Implement BFS with a deque and a visited set, and use it for shortest paths in unweighted graphs.",
    "Implement DFS recursively and iteratively with an explicit stack.",
    "Count connected components and solve island and flood-fill problems.",
    "Use multi-source BFS for problems that spread from several starting points.",
    "Detect cycles: visited sets in undirected graphs (with the parent), and three-state colouring or Kahn's algorithm in directed graphs.",
    "Produce a topological order with Kahn's algorithm (in-degrees and a queue), and detect when none exists.",
    "State O(V + E) time and O(V) space for traversals.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Graph cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/graph/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions: "Free. Read representations, BFS, DFS, topological sorting and the corner cases. The matrix cheatsheet on the same site covers grid traversal.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 7.2 Vocabulary, 7.5 Adjacency List, 7.9 BFS, 7.15 DFS, 7.17 Topological Sorting",
      url: "https://runestone.academy/ns/books/published/pythonds3/Graphs/VocabularyandDefinitions.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Free interactive textbook. Read 7.2, 7.5, 7.9–7.10, 7.15–7.17. Skip the word-ladder and knight's tour case studies unless you want extra examples.",
    },
    {
      title: "VisuAlgo — Graph Traversal (DFS/BFS)",
      url: "https://visualgo.net/en/dfsbfs",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Run BFS and DFS on the same graph to compare visit order; the topological sort mode is also useful.",
    },
    {
      title: "MIT 6.006 (Spring 2020) — Lectures 9 and 10: Breadth-First and Depth-First Search",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/",
      provider: "MIT OpenCourseWare",
      type: "Course",
      instructions: "Optional university depth. Read the Lecture 9 and 10 notes for proofs of correctness and O(V + E).",
    },
  ],
  exercises: [
    {
      title: "Flood Fill (LeetCode)",
      url: "https://leetcode.com/problems/flood-fill/",
      note: "Foundation, Easy. Grid DFS or BFS; handle the case where the new colour equals the old one.",
    },
    {
      title: "Number of Islands (LeetCode)",
      url: "https://leetcode.com/problems/number-of-islands/",
      note: "Foundation, Medium. Count components in a grid. O(rows × cols).",
    },
    {
      title: "Number of Provinces (LeetCode)",
      url: "https://leetcode.com/problems/number-of-provinces/",
      note: "Reinforcement, Medium. Components from an adjacency matrix; can also be solved with union-find.",
    },
    {
      title: "Clone Graph (LeetCode)",
      url: "https://leetcode.com/problems/clone-graph/",
      note: "Reinforcement, Medium. Traversal with a dictionary from original to copy.",
    },
    {
      title: "Rotting Oranges (LeetCode)",
      url: "https://leetcode.com/problems/rotting-oranges/",
      note: "Reinforcement, Medium. Multi-source BFS counting levels.",
    },
    {
      title: "Course Schedule (LeetCode)",
      url: "https://leetcode.com/problems/course-schedule/",
      note: "Transfer, Medium. Cycle detection in a directed graph; Kahn's algorithm.",
    },
    {
      title: "Course Schedule II (LeetCode)",
      url: "https://leetcode.com/problems/course-schedule-ii/",
      note: "Transfer, Medium. Return the topological order.",
    },
    {
      title: "Pacific Atlantic Water Flow (LeetCode)",
      url: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      note: "Optional stretch, Medium. Reverse thinking: search from the oceans inward.",
    },
    {
      title: "Word Ladder (LeetCode)",
      url: "https://leetcode.com/problems/word-ladder/",
      note: "Optional stretch, Hard. BFS over an implicit graph of words.",
    },
  ],
  interviewQuestions: [
    {
      question: "How do you represent a graph, and which representation would you choose?",
      answer:
        "An adjacency list maps each node to its neighbours (in Python, a dictionary of lists or sets). It uses O(V + E) space and makes iterating over neighbours efficient, so it is the default for interview problems, which are usually sparse. An adjacency matrix uses O(V²) space but answers \"is there an edge between u and v?\" in O(1). An edge list is how input often arrives; convert it to an adjacency list first.",
      code: `from collections import defaultdict

edges = [(0, 1), (0, 2), (1, 2), (2, 3)]
graph = defaultdict(list)
for u, v in edges:                  # undirected: add both directions
    graph[u].append(v)
    graph[v].append(u)

print(dict(graph))   # -> {0: [1, 2], 1: [0, 2], 2: [0, 1, 3], 3: [2]}`,
      followUps: ["How would you store weights on the edges?"],
    },
    {
      question: "When do you use BFS versus DFS?",
      answer:
        "BFS explores in layers from the start, so in an unweighted graph the first time it reaches a node is along a shortest path: use it for minimum steps, levels and spreading processes. DFS goes deep before backtracking: use it for exploring all reachable nodes, connected components, cycle detection, topological ordering and path enumeration. Both run in O(V + E) time with O(V) space for the visited set; recursive DFS can hit Python's recursion limit on large graphs.",
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
print(shortest_steps(graph, 0, 4), shortest_steps(graph, 4, 0), shortest_steps(graph, 0, 0))   # -> 3 -1 0`,
      followUps: ["Why does BFS not give shortest paths when edges have different weights?"],
    },
    {
      question: "How do you count islands in a grid?",
      answer:
        "Treat each land cell as a node connected to its up, down, left and right land neighbours. Scan every cell; when you find unvisited land, increment the count and flood the whole island with DFS or BFS, marking cells visited (or overwriting them if mutation is allowed). Every cell is visited a constant number of times: O(rows × cols) time and up to O(rows × cols) space for the visited set or recursion.",
      code: `def num_islands(grid):
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])
    seen = set()

    def sink(r, c):
        stack = [(r, c)]
        while stack:
            r, c = stack.pop()
            if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1" and (r, c) not in seen:
                seen.add((r, c))
                stack.extend([(r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)])

    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1" and (r, c) not in seen:
                count += 1
                sink(r, c)
    return count

grid = ["11000", "11000", "00100", "00011"]
print(num_islands(grid), num_islands([]), num_islands(["0"]))   # -> 3 0 0`,
      followUps: ["Why might an iterative DFS be safer than a recursive one here?"],
    },
    {
      question: "What is topological sorting, and how does Kahn's algorithm work?",
      answer:
        "A topological order lists the nodes of a directed graph so that every edge goes from earlier to later — for example, courses before the courses that require them. It exists only if the graph has no cycle. Kahn's algorithm counts each node's incoming edges, starts a queue with every node of in-degree 0, and repeatedly removes a node, appends it to the order and decrements its neighbours' in-degrees, enqueuing any that reach 0. If the order contains fewer than V nodes, there is a cycle. O(V + E).",
      code: `from collections import deque

def course_order(n, prerequisites):
    graph = [[] for _ in range(n)]
    indegree = [0] * n
    for course, before in prerequisites:
        graph[before].append(course)
        indegree[course] += 1
    queue = deque(i for i in range(n) if indegree[i] == 0)
    order = []
    while queue:
        node = queue.popleft()
        order.append(node)
        for nxt in graph[node]:
            indegree[nxt] -= 1
            if indegree[nxt] == 0:
                queue.append(nxt)
    return order if len(order) == n else []      # [] means a cycle

print(course_order(4, [[1, 0], [2, 0], [3, 1], [3, 2]]), course_order(2, [[0, 1], [1, 0]]))
# -> [0, 1, 2, 3] []`,
      followUps: ["How would you detect a cycle in a directed graph with DFS instead?"],
    },
    {
      question: "Why do graph traversals need a visited set, and when should you mark nodes?",
      answer:
        "Graphs can contain cycles and multiple paths to the same node; without a visited set, traversal can loop forever or process nodes many times. In BFS, mark a node when you add it to the queue, not when you remove it; otherwise the same node can be queued many times. In trees you do not need a visited set because there are no cycles.",
      code: `from collections import deque

def reachable(graph, start):
    visited, queue = {start}, deque([start])
    while queue:
        for nxt in graph[queue.popleft()]:
            if nxt not in visited:
                visited.add(nxt)
                queue.append(nxt)
    return sorted(visited)

cyclic = {"a": ["b"], "b": ["c"], "c": ["a"], "d": []}
print(reachable(cyclic, "a"), reachable(cyclic, "d"))   # -> ['a', 'b', 'c'] ['d']`,
      followUps: ["What changes for an undirected graph when detecting a cycle?"],
    },
    {
      question: "What is multi-source BFS?",
      answer:
        "Start BFS with every source in the queue at distance 0 instead of a single start node. The search then expands from all sources simultaneously, so each cell's distance is to its nearest source. It solves spreading problems such as rotting oranges or distance to the nearest exit in O(V + E), instead of running a separate BFS from each source.",
      code: `from collections import deque

def minutes_to_rot(grid):
    rows, cols = len(grid), len(grid[0])
    queue = deque((r, c) for r in range(rows) for c in range(cols) if grid[r][c] == 2)
    fresh = sum(row.count(1) for row in grid)
    minutes = 0
    while queue and fresh:
        for _ in range(len(queue)):
            r, c = queue.popleft()
            for nr, nc in ((r + 1, c), (r - 1, c), (r, c + 1), (r, c - 1)):
                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                    grid[nr][nc] = 2
                    fresh -= 1
                    queue.append((nr, nc))
        minutes += 1
    return minutes if fresh == 0 else -1

print(minutes_to_rot([[2, 1, 1], [1, 1, 0], [0, 1, 1]]), minutes_to_rot([[2, 1, 1], [0, 1, 1], [1, 0, 1]]))
# -> 4 -1`,
      followUps: ["This version mutates the grid. How would you avoid that?"],
    },
  ],
  mistakes: [
    "Forgetting the visited set, causing infinite loops on cycles.",
    "Marking nodes visited when dequeued instead of enqueued in BFS.",
    "Building only one direction of each edge for an undirected graph.",
    "Missing bounds checks in grid traversal.",
    "Using recursive DFS on large grids without considering Python's recursion limit.",
    "Assuming every node is reachable from one start; loop over all nodes to find every component.",
    "Using BFS for shortest paths on weighted graphs.",
  ],
  mastery: [
    "You build an adjacency list from edges and choose BFS or DFS with a reason.",
    "You implement grid traversal, component counting and multi-source BFS without reference.",
    "You implement Kahn's algorithm and explain how it detects cycles.",
    "You state O(V + E) time and O(V) space, and handle disconnected graphs and empty input.",
  ],
  deprioritize: [
    "Weighted shortest paths (Dijkstra, Bellman–Ford) and union-find; see the conditional Union-Find and Shortest Paths topic.",
    "Minimum spanning trees, strongly connected components, bipartite matching and network flow.",
    "A* search and bidirectional BFS beyond recognizing the names.",
  ],
  keywords: [
    "graph",
    "graphs",
    "BFS",
    "DFS",
    "breadth-first search",
    "depth-first search",
    "adjacency list",
    "visited set",
    "connected components",
    "number of islands",
    "grid",
    "topological sort",
    "Kahn",
    "cycle detection",
    "multi-source BFS",
  ],
};

export default topic;
