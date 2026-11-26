import type { Topic } from "../types";

const topic: Topic = {
  slug: "union-find-shortest-paths",
  title: "Union-Find and Shortest Paths (Conditional)",
  category: "Data Structures & Algorithms",
  phase: "data-structures-and-algorithms",
  overview:
    "Conditional topic: study it when you target Big Tech or other employers whose coding interviews reach graph problems beyond BFS and DFS, after the core Unit 2 topics. Union-find (disjoint set union) tracks which items belong to the same group and merges groups in near-constant time. Dijkstra's algorithm finds shortest paths in graphs with non-negative edge weights using a priority queue.",
  whyItMatters:
    "This curriculum's research found these techniques at the Big Tech end of entry-level preparation (both independent preparation lists include union-find and weighted shortest-path problems such as Accounts Merge and Network Delay Time), but not as general entry-level requirements. Many entry-level candidates will never be asked them. Learn them after you are comfortable with BFS, DFS and heaps, if your target employers' interviews make them relevant. Shortest-path thinking also appears in routing, maps and network tooling.",
  prerequisites: ["Graphs: BFS, DFS and Topological Sort", "Heaps and Priority Queues"],
  objectives: [
    "Explain what union-find stores (a parent for each item) and implement find with path compression and union by size or rank.",
    "Use union-find for connected components, detecting a redundant edge, and grouping items that share attributes.",
    "State that with both optimizations operations are effectively constant (amortized inverse Ackermann), without proving it.",
    "Compare union-find with BFS/DFS for component problems, especially when edges arrive over time.",
    "Explain why BFS fails on weighted graphs and implement Dijkstra's algorithm with heapq.",
    "State Dijkstra's complexity, O((V + E) log V) with a binary heap, and its requirement of non-negative weights.",
    "Recognize when Bellman–Ford (negative weights, or a limit on the number of edges) is needed, at a recognition level.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "VisuAlgo — Union-Find Disjoint Sets",
      url: "https://visualgo.net/en/ufds",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Watch union and find operations with path compression to see why trees stay shallow.",
    },
    {
      title: "Problem Solving with Algorithms and Data Structures using Python — 7.20 Dijkstra's Algorithm",
      url: "https://runestone.academy/ns/books/published/pythonds3/Graphs/DijkstrasAlgorithm.html",
      provider: "Brad Miller and David Ranum (Runestone Academy)",
      type: "Book",
      instructions: "Free interactive textbook. Read 7.20 and 7.21 (analysis). The book uses its own priority queue class; use heapq in practice.",
    },
    {
      title: "VisuAlgo — Single-Source Shortest Paths",
      url: "https://visualgo.net/en/sssp",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional. Compare BFS, Dijkstra and Bellman–Ford on the same weighted graph.",
    },
    {
      title: "MIT 6.006 (Spring 2020) — Lecture 13: Dijkstra's Algorithm",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/lecture-notes/",
      provider: "MIT OpenCourseWare",
      type: "Course",
      instructions: "Optional university depth for the correctness argument. Lecture 12 covers Bellman–Ford if you need it.",
    },
  ],
  exercises: [
    {
      title: "Solve Number of Provinces (from Graphs) again with union-find and compare the code with your DFS version.",
      note: "Foundation. Same problem, new technique.",
    },
    {
      title: "Redundant Connection (LeetCode)",
      url: "https://leetcode.com/problems/redundant-connection/",
      note: "Reinforcement, Medium. The first edge whose endpoints are already connected.",
    },
    {
      title: "Accounts Merge (LeetCode)",
      url: "https://leetcode.com/problems/accounts-merge/",
      note: "Transfer, Medium. Union emails that appear in the same account.",
    },
    {
      title: "Network Delay Time (LeetCode)",
      url: "https://leetcode.com/problems/network-delay-time/",
      note: "Reinforcement, Medium. Direct application of Dijkstra.",
    },
    {
      title: "Path With Minimum Effort (LeetCode)",
      url: "https://leetcode.com/problems/path-with-minimum-effort/",
      note: "Transfer, Medium. Dijkstra on a grid where a path's cost is its largest step.",
    },
    {
      title: "Cheapest Flights Within K Stops (LeetCode)",
      url: "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
      note: "Optional stretch, Medium. A stop limit breaks plain Dijkstra; Bellman–Ford-style relaxation or BFS by levels works.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is union-find, and how do path compression and union by size help?",
      answer:
        "Union-find keeps a parent pointer for each item; items with the same root are in the same set. find follows parents to the root; union links one root under the other. Without care the trees can become long chains, making find O(n). Path compression points every node on a find path directly at the root, and union by size attaches the smaller tree under the larger. Together they make operations effectively constant time amortized.",
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
    },
    {
      question: "When would you choose union-find over BFS or DFS?",
      answer:
        "For a fixed graph, BFS or DFS finds connected components in O(V + E) and is often simpler. Union-find shines when edges arrive one at a time and you must answer \"are these connected now?\" after each one, when you need to detect the first edge that creates a cycle in an undirected graph, or when grouping items that share attributes (such as accounts sharing an email) without building an explicit graph.",
      code: `def redundant_connection(edges):
    parent = list(range(len(edges) + 1))

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for a, b in edges:
        ra, rb = find(a), find(b)
        if ra == rb:
            return [a, b]          # a and b were already connected: this edge closes a cycle
        parent[ra] = rb
    return []

print(redundant_connection([[1, 2], [1, 3], [2, 3]]), redundant_connection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))
# -> [2, 3] [1, 4]`,
      followUps: ["Why does union-find not detect cycles in directed graphs?"],
    },
    {
      question: "Why does BFS not find shortest paths in weighted graphs, and how does Dijkstra fix it?",
      answer:
        "BFS minimizes the number of edges, not their total weight: a path with more but lighter edges can be shorter. Dijkstra always expands the unvisited node with the smallest known distance, using a min-heap, and relaxes its outgoing edges. With non-negative weights, the first time a node is popped its distance is final. With a binary heap it runs in O((V + E) log V) time. Negative edge weights break this guarantee.",
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
    },
    {
      question: "When would you need Bellman–Ford instead of Dijkstra?",
      answer:
        "When edge weights can be negative (Dijkstra's \"popped means final\" argument fails), when you must detect negative cycles, or when the path may use at most k edges, as in \"cheapest flight within k stops\". Bellman–Ford relaxes every edge V - 1 times, costing O(V × E). At entry level, knowing when it is needed is usually enough.",
      code: `def cheapest_within_k_stops(n, flights, src, dst, k):
    INF = float("inf")
    cost = [INF] * n
    cost[src] = 0
    for _ in range(k + 1):                 # at most k stops = k + 1 edges
        updated = cost[:]                  # use last round's costs only
        for u, v, price in flights:
            if cost[u] + price < updated[v]:
                updated[v] = cost[u] + price
        cost = updated
    return -1 if cost[dst] == INF else cost[dst]

flights = [[0, 1, 100], [1, 2, 100], [2, 3, 100], [0, 3, 500]]
print(cheapest_within_k_stops(4, flights, 0, 3, 1), cheapest_within_k_stops(4, flights, 0, 3, 2))   # -> 500 300`,
      followUps: ["Why does the code copy the cost array in each round?"],
    },
  ],
  mistakes: [
    "Studying this topic before the core graph, heap and BFS/DFS material is solid.",
    "Implementing union-find without path compression or union by size, then assuming near-constant time.",
    "Using Dijkstra with negative edge weights.",
    "Not skipping stale heap entries, or marking nodes final when pushed rather than when popped.",
    "Using BFS for weighted shortest paths.",
  ],
  mastery: [
    "You implement union-find with path compression and union by size, and use it for components and redundant edges.",
    "You implement Dijkstra with heapq and explain why non-negative weights are required.",
    "You explain when union-find beats BFS/DFS and when Bellman–Ford is needed.",
    "Only required if your target employers' interviews reach this level; general entry-level preparation can stop at Graphs.",
  ],
  deprioritize: [
    "Proofs of the inverse Ackermann bound, Floyd–Warshall, A*, Johnson's algorithm and minimum spanning trees (Kruskal, Prim) beyond recognition.",
    "Network flow and advanced graph algorithms.",
  ],
  keywords: [
    "union find",
    "disjoint set",
    "DSU",
    "path compression",
    "union by rank",
    "Dijkstra",
    "shortest path",
    "weighted graph",
    "Bellman-Ford",
    "priority queue",
    "conditional",
  ],
};

export default topic;
