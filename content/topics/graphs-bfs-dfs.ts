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
    "Skip for now: weighted shortest paths and union-find (see the conditional Union-Find and Shortest Paths topic), minimum spanning trees, strongly connected components and network flow.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 7.2 Vocabulary, 7.5 Adjacency List, 7.9 BFS, 7.15 DFS, 7.17 Topological Sorting",
      url: "https://runestone.academy/ns/books/published/pythonds3/Graphs/VocabularyandDefinitions.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions:
        "Start here, in Python. Read 7.2 (vocabulary), 7.5 (adjacency list), 7.9–7.10 (breadth-first search and its analysis) and 7.15–7.17 (depth-first search, its analysis and topological sorting). Skip the word-ladder and knight's tour case studies. Free; reading needs no account.",
    },
    {
      title: "Graph Algorithms for Technical Interviews — Full Course",
      url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU",
      provider: "freeCodeCamp.org (Alvin Zablan)",
      type: "Video",
      instructions:
        "Video alternative (JavaScript; the concepts transfer), about 2 h 10 min. Watch 0:02:23–2:12:05: graph basics, depth-first and breadth-first traversal, has path, undirected path, connected components, largest component, shortest path, island count and minimum island. Write each one in Python as you go. It does not cover topological sort. Free; no account.",
    },
    {
      title: "Graph cheatsheet for coding interviews",
      url: "https://www.techinterviewhandbook.org/algorithms/graph/",
      provider: "Tech Interview Handbook",
      type: "Article",
      instructions:
        "Interview checklist and Kahn's algorithm for topological sort, which the interview questions below use. Read Graph representations, Things to look out for, Corner cases and Topological sorting (Kahn's algorithm in Python). Ignore the paid course recommendations at the end. Free; no account.",
    },
    {
      title: "VisuAlgo — Graph Traversal (DFS/BFS)",
      url: "https://visualgo.net/en/dfsbfs",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions:
        "Optional visualisation. Run BFS and DFS on the same graph to compare visit order, then read the Detecting Cycle and Topological Sort e-lecture slides. Skip bipartite checking, cut vertices, SCCs and 2-SAT. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Flood Fill (LeetCode)",
      url: "https://leetcode.com/problems/flood-fill/",
      note: "Foundation, Easy. Grid DFS or BFS; handle the case where the new colour equals the old one. LeetCode needs a free account to submit.",
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
        "An adjacency list maps each node to its neighbours (in Python, a dictionary of lists or sets). It uses O(V + E) space and makes iterating over neighbours efficient, so it is the default for interview problems, which are usually sparse. An adjacency matrix uses O(V²) space but answers \"is there an edge between u and v?\" in O(1). Input often arrives as an edge list; convert it to an adjacency list first. A grid is an implicit graph: neighbours are the in-bounds cells up, down, left and right.",
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
      question: "When do you use BFS versus DFS?",
      answer:
        "BFS explores in layers from the start, so in an unweighted graph the first time it reaches a node is along a shortest path: use it for minimum steps, levels and spreading processes. DFS goes deep before backtracking: use it to explore everything reachable, count components, detect cycles, produce topological orders and enumerate paths. Both run in O(V + E) time with O(V) space for the visited set. Recursive DFS can hit Python's recursion limit on large graphs or grids; an explicit stack avoids that.",
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
      question: "How do you count islands in a grid?",
      answer:
        "Treat each land cell as a node connected to its up, down, left and right land neighbours. Scan every cell; when you find unvisited land, increment the count and flood the whole island with DFS or BFS, marking cells visited (or overwriting them if mutating the input is allowed — say so). Every cell is processed a constant number of times: O(rows × cols) time and up to O(rows × cols) space for the visited set, queue or recursion.",
      followUps: ["Why might an iterative DFS be safer than a recursive one here?"],
      source: { title: "NeetCode — Number of Islands (LeetCode 200) video", url: "https://www.youtube.com/watch?v=pV2kpPD66nE" },
    },
    {
      question: "What is topological sorting, and how does Kahn's algorithm work?",
      answer:
        "A topological order lists the nodes of a directed graph so that every edge goes from earlier to later — for example, courses before the courses that require them. It exists only if the graph has no cycle. Kahn's algorithm counts each node's incoming edges, starts a queue with every node of in-degree 0, and repeatedly removes a node, appends it to the order and decrements its neighbours' in-degrees, enqueuing any that reach 0. If the order contains fewer than V nodes, the graph has a cycle. O(V + E).",
      followUps: ["How would you detect a cycle in a directed graph with DFS instead?"],
      source: { title: "Tech Interview Handbook — Graph cheatsheet: Topological sorting", url: "https://www.techinterviewhandbook.org/algorithms/graph/" },
    },
    {
      question: "Why do graph traversals need a visited set, and when should you mark nodes?",
      answer:
        "Graphs can contain cycles and several paths to the same node; without a visited set a traversal can loop forever or process nodes many times. In BFS, mark a node when you add it to the queue, not when you remove it; otherwise the same node can be queued many times. To find every component of a disconnected graph, start a traversal from each unvisited node. A rooted tree traversed through child pointers needs no visited set because it has no cycles; an undirected tree stored as an adjacency list still needs a visited set or a parent check.",
      followUps: ["What changes for an undirected graph when detecting a cycle?"],
      source: { title: "VisuAlgo — Graph Traversal (DFS/BFS): Avoiding Cycle", url: "https://visualgo.net/en/dfsbfs" },
    },
    {
      question: "What is multi-source BFS?",
      answer:
        "Start BFS with every source in the queue at distance 0 instead of a single start node. The search then expands from all sources at once, so each node's distance is to its nearest source. Processing the queue one level at a time counts the steps (minutes, in Rotting Oranges). It solves spreading problems in O(V + E) instead of running a separate BFS from each source.",
      followUps: ["The usual Rotting Oranges solution mutates the grid. How would you avoid that?"],
      source: { title: "NeetCode — Rotting Oranges (LeetCode 994) video", url: "https://www.youtube.com/watch?v=y704fEOx0s0" },
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
    "Skip this topic if you can already solve Number of Islands, Rotting Oranges and Course Schedule without hints and explain their complexity.",
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
