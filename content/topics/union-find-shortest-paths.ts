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
    "Skip for now: Floyd–Warshall, A*, minimum spanning trees, network flow and the inverse Ackermann proof.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "cp-algorithms — Disjoint Set Union",
      url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html",
      provider: "cp-algorithms",
      type: "Article",
      instructions:
        "Start here for union-find. Read Build an efficient data structure through Time complexity (naive implementation, path compression, union by size or rank), then Connected components in a graph. Code is in C++ but short. Skip the remaining applications and improvements. Free; no account.",
    },
    {
      title: "NeetCode — Redundant Connection (LeetCode 684) video",
      url: "https://www.youtube.com/watch?v=FXWRE67PLL0",
      provider: "NeetCode (YouTube)",
      type: "Video",
      instructions:
        "Video alternative in Python: explains union-find with union by rank and path compression while solving Redundant Connection. Attempt the problem first. Free; no account.",
    },
    {
      title: "VisuAlgo — Union-Find Disjoint Sets",
      url: "https://visualgo.net/en/ufds",
      provider: "VisuAlgo (National University of Singapore)",
      type: "Visual explanation",
      instructions: "Optional visualisation. Run FindSet and UnionSet to see path compression flatten the trees. Free; no account.",
    },
    {
      title: "cp-algorithms — Dijkstra Algorithm, and Dijkstra on sparse graphs",
      url: "https://cp-algorithms.com/graph/dijkstra.html",
      provider: "cp-algorithms",
      type: "Article",
      instructions:
        "Start here for shortest paths. Read Algorithm and Proof, then on the linked \"Dijkstra on sparse graphs\" page read the priority_queue section (the lazy-deletion version that heapq solutions use). Code is in C++. Free; no account.",
    },
    {
      title: "NeetCode — Network Delay Time (LeetCode 743) video",
      url: "https://www.youtube.com/watch?v=EaphyqKU4PQ",
      provider: "NeetCode (YouTube)",
      type: "Video",
      instructions: "Video alternative in Python: Dijkstra with heapq applied to Network Delay Time. Attempt the problem first. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Number of Provinces (LeetCode)",
      url: "https://leetcode.com/problems/number-of-provinces/",
      note: "Foundation, Medium. Already solved with DFS in Graphs; solve it again with union-find and compare the two. LeetCode needs a free account to submit.",
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
        "Union-find keeps a parent pointer for each item; items with the same root are in the same set. find follows parents to the root; union links one root under the other. Without care the trees can become long chains, making find O(n). Path compression points nodes on a find path closer to (or directly at) the root, and union by size attaches the smaller tree under the larger. Together they make operations effectively constant time amortized (inverse Ackermann).",
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
      source: { title: "cp-algorithms — Disjoint Set Union", url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html" },
    },
    {
      question: "When would you choose union-find over BFS or DFS?",
      answer:
        "For a fixed graph, BFS or DFS finds connected components in O(V + E) and is often simpler. Union-find shines when edges arrive one at a time and you must answer \"are these connected now?\" after each one, when you need the first edge that creates a cycle in an undirected graph (union returns False because both endpoints already share a root, as in Redundant Connection), or when grouping items that share attributes (such as accounts sharing an email) without building an explicit graph.",
      followUps: ["Why does union-find not detect cycles in directed graphs?"],
      source: { title: "NeetCode — Redundant Connection (LeetCode 684) video", url: "https://www.youtube.com/watch?v=FXWRE67PLL0" },
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
      source: { title: "cp-algorithms — Dijkstra on sparse graphs (priority_queue)", url: "https://cp-algorithms.com/graph/dijkstra_sparse.html" },
    },
    {
      question: "When would you need Bellman–Ford instead of Dijkstra?",
      answer:
        "When edge weights can be negative (Dijkstra's \"popped means final\" argument fails), when you must detect negative cycles, or when the path may use at most k edges, as in Cheapest Flights Within K Stops. Bellman–Ford relaxes every edge V - 1 times, costing O(V × E); limiting it to k + 1 rounds, using only the previous round's distances in each round, enforces the edge limit. At entry level, knowing when it is needed is usually enough.",
      followUps: ["Why must each round use the previous round's distances when there is a stop limit?"],
      source: { title: "cp-algorithms — Bellman-Ford", url: "https://cp-algorithms.com/graph/bellman_ford.html" },
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
    "Skip this topic if your targets do not call for it, or if you can already solve Redundant Connection and Network Delay Time without hints.",
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
