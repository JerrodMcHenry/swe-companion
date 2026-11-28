import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Processes & memory",
    question: "What is the difference between a process and a thread?",
    answer: "A process is a running program with its own memory space and resources, isolated from other processes by the operating system. A thread is a sequence of execution within a process; threads in the same process share its memory, which makes communication cheap but requires synchronization to avoid races. Processes are heavier to create and communicate through files, pipes, sockets or shared memory, but a crash in one does not corrupt another.",
    followUps: ["When would you choose multiple processes over multiple threads?"],
    source: { title: "OSTEP — Chapter 26: Concurrency: An Introduction", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf" },
  },
  {
    group: "Processes & memory",
    question: "What is the difference between stack and heap memory?",
    answer: "The stack stores function call frames — local variables and return addresses — and grows and shrinks automatically as functions are called and return; it is fast but limited in size, so very deep recursion can overflow it (Python stops earlier, raising RecursionError at its configurable recursion limit). The heap stores data whose lifetime is not tied to a single call, allocated and freed dynamically. In CPython all objects live on the heap; local variables in a frame are references to them. CPython frees objects mainly by reference counting, with a garbage collector that finds reference cycles.",
    followUps: ["What is a memory leak in a garbage-collected language like Python?"],
    source: { title: "Python Standard Library — gc: Garbage Collector interface", url: "https://docs.python.org/3/library/gc.html" },
  },
  {
    group: "Processes & memory",
    question: "What is virtual memory?",
    answer: "Virtual memory gives each process its own private address space, as if it had the machine's memory to itself. The operating system and hardware map these virtual addresses to physical memory in pages, and can move rarely used pages to disk. This isolates processes from each other and lets programs use more memory than is physically free, at the cost of severe slowdown if the system swaps heavily.",
    followUps: ["What is thrashing?"],
    source: { title: "OSTEP — Chapter 13: The Abstraction: Address Spaces", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf" },
  },
  {
    group: "Concurrency",
    question: "What is the difference between concurrency and parallelism? CPU-bound and I/O-bound?",
    answer: "Concurrency means dealing with several tasks at once by interleaving them, such as a server handling many requests while each waits for the database. Parallelism means executing several computations at the same instant on different CPU cores. I/O-bound work spends most of its time waiting (network, disk), so concurrency with threads or async helps. CPU-bound work spends its time computing, so it needs parallelism across cores — in standard CPython usually with multiple processes.",
    followUps: ["Would threads speed up a pure-Python loop that computes primes? Why or why not?"],
    source: { title: "Python Standard Library — threading: GIL and performance considerations", url: "https://docs.python.org/3/library/threading.html#gil-and-performance-considerations" },
  },
  {
    group: "Concurrency",
    question: "What is Python's global interpreter lock (GIL)?",
    answer: "In the standard CPython build, the GIL is a lock that lets only one thread execute Python bytecode at a time. Threads still help I/O-bound programs, because the GIL is released while waiting, but they do not speed up CPU-bound pure-Python code; use multiprocessing or native libraries for that. Since Python 3.13, CPython offers an optional free-threaded build with the GIL disabled — experimental in 3.13 and officially supported, but still not the default, from 3.14. The GIL never made your own code thread-safe: you still need locks around shared data.",
    followUps: ["Why does the GIL not prevent race conditions in your code?"],
    source: { title: "Python HOWTO — Python support for free threading", url: "https://docs.python.org/3/howto/free-threading-python.html" },
  },
  {
    group: "Concurrency",
    question: "What is a race condition, and how do you prevent one?",
    answer: "A race condition occurs when the result depends on the unpredictable timing of concurrent operations on shared data. counter += 1 is a read, an add and a write; two threads can both read the same value and one update is lost. Prevent races by protecting shared data with a lock so only one thread updates it at a time, or avoid sharing by giving each thread its own data, using thread-safe queues or using atomic database operations.",
    code: `import threading

counter = 0
lock = threading.Lock()

def add_many(n):
    global counter
    for _ in range(n):
        with lock:            # only one thread updates at a time
            counter += 1

threads = [threading.Thread(target=add_many, args=(10_000,)) for _ in range(4)]
for t in threads: t.start()
for t in threads: t.join()
print(counter)   # -> 40000`,
    followUps: ["How can a race condition happen in a web app even without threads? (Two requests updating the same database row.)"],
    source: { title: "OSTEP — Chapter 26: Concurrency: An Introduction", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf" },
  },
  {
    group: "Concurrency",
    question: "What is a deadlock?",
    answer: "A deadlock happens when two or more threads each hold a resource the other needs and wait forever. Example: thread A locks the accounts table then waits for orders, while thread B locks orders then waits for accounts. Prevent it by always acquiring locks in the same order, holding locks as briefly as possible, or using timeouts.",
    followUps: ["What is the difference between a deadlock and a livelock or starvation?"],
    source: { title: "OSTEP — Chapter 32: Common Concurrency Problems", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf" },
  },
  {
    group: "Concurrency",
    question: "What is the difference between synchronous and asynchronous code?",
    answer: "Synchronous code runs one step after another and waits for each operation to finish. Asynchronous code, such as Python's asyncio, lets a single thread start an I/O operation, switch to other work while it waits, and resume when the result is ready, using await. It is efficient for many concurrent I/O tasks such as web requests, but a blocking call (such as time.sleep) inside async code stalls everything, and it does not make CPU-bound work faster.",
    followUps: ["What happens if you call time.sleep inside an async function?"],
    source: { title: "Python HOWTO — A Conceptual Overview of asyncio", url: "https://docs.python.org/3/howto/a-conceptual-overview-of-asyncio.html" },
  },
  {
    group: "Concurrency",
    question: "What does calling an async function without await do?",
    answer: "It creates a coroutine object and runs none of the function's body. The result is not the data you expected, and if the coroutine is never awaited Python warns \"coroutine ... was never awaited\". A forgotten await on an async database or HTTP call is a common bug: the code continues with a coroutine object instead of a result. Await it, schedule it as a task, or run it at the top level with asyncio.run.",
    code: `import asyncio

async def fetch_user():
    await asyncio.sleep(0.01)
    return {"id": 1}

result = fetch_user()            # forgot await: nothing has run yet
print(type(result).__name__)     # -> coroutine
print(asyncio.run(result))       # -> {'id': 1}`,
    followUps: ["How can a type checker help catch a missing await?"],
    source: { title: "Python Standard Library — Coroutines and Tasks: Coroutines", url: "https://docs.python.org/3/library/asyncio-task.html#coroutines" },
  },
  {
    group: "Concurrency",
    question: "How do you run several I/O operations concurrently with asyncio, and what happens if one fails?",
    answer: "Start them together instead of awaiting each in turn: asyncio.gather(a(), b(), c()) returns their results in argument order, or a TaskGroup (Python 3.11+) creates tasks in an async with block. Total time is roughly the slowest call rather than the sum. Failure handling differs: gather raises the first exception to the caller by default while the other awaitables keep running, or returns exceptions as results with return_exceptions=True; a TaskGroup cancels the remaining tasks and raises the errors together. Add a timeout with asyncio.timeout or wait_for so one slow call cannot hang the request.",
    followUps: ["How would you limit concurrency to five requests at a time? (asyncio.Semaphore.)"],
    source: { title: "Python Standard Library — Coroutines and Tasks: Running tasks concurrently", url: "https://docs.python.org/3/library/asyncio-task.html#running-tasks-concurrently" },
  },
  {
    group: "Performance & low latency",
    question: "Why does cache locality matter so much for performance?",
    answer:
      "A main-memory access costs on the order of a hundred nanoseconds, while an L1 cache hit costs about a nanosecond. The CPU fetches whole cache lines (typically 64 bytes) and prefetches sequential accesses, so code that walks contiguous memory (arrays, vectors, struct-of-arrays layouts) runs far faster than code that chases pointers (linked lists, trees of separately allocated nodes). Algorithms with the same big-O can differ by an order of magnitude because of memory access patterns.",
    followUps: ["How would you lay out data that is scanned field by field?"],
    source: { title: "Algorithmica — Algorithms for Modern Hardware: CPU cache", url: "https://en.algorithmica.org/hpc/cpu-cache/" },
  },
  {
    group: "Performance & low latency",
    question: "What is false sharing, and how do you avoid it?",
    answer:
      "Two threads write to different variables that happen to share a cache line. The cores keep invalidating each other's copy of the line, so throughput can drop sharply even though no data is logically shared. Avoid it by giving frequently written per-thread data its own cache line: lines are typically 64 bytes on x86-64, but some CPUs (such as Apple M-series) use 128, so pad or use alignas with std::hardware_destructive_interference_size where available, or with the measured line size for your target and by batching updates locally before publishing them.",
    code: `struct alignas(64) PaddedCounter {   // one counter per 64-byte cache line
    std::atomic<long> value{0};
};
PaddedCounter perThread[4];
std::cout << sizeof(PaddedCounter) << '\\n';   // -> 64`,
    source: { title: "Mechanical Sympathy — False sharing", url: "https://mechanical-sympathy.blogspot.com/2011/07/false-sharing.html" },
  },
  {
    group: "Performance & low latency",
    question: "What are memory alignment and struct padding?",
    answer:
      "Types are usually stored at addresses that are multiples of their alignment, so the compiler inserts padding between struct members and at the end. Ordering members from largest to smallest alignment often shrinks a struct, which means more objects per cache line. Misaligned access is slower on some hardware and faults on others, and in C++ accessing an object through a misaligned pointer is undefined behaviour; alignas lets you request stronger alignment, for example for cache lines or SIMD.",
    code: `struct Loose { char a; double b; char c; };   // padding after a and c
struct Tight { double b; char a; char c; };
std::cout << sizeof(Loose) << ' ' << sizeof(Tight) << '\\n';   // -> 24 16 (typical 64-bit platform)`,
    source: { title: "cppreference — Object alignment", url: "https://en.cppreference.com/w/cpp/language/object#Alignment" },
  },
  {
    group: "Performance & low latency",
    question: "What does a context switch cost, and how do low-latency systems avoid it?",
    answer:
      "Switching threads saves and restores registers, may switch address spaces, and pollutes caches and the TLB, typically costing on the order of microseconds directly and more through lost cache warmth (it varies by CPU, kernel and workload). Blocking on a mutex or I/O can trigger one. Latency-critical systems pin threads to dedicated cores, avoid blocking calls on the hot path, use busy-polling instead of sleeping (trading a fully used core and power for lower wake-up latency), and keep the number of runnable threads at or below the number of cores.",
    source: { title: "Operating Systems: Three Easy Pieces — Limited direct execution (context switches)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-mechanisms.pdf" },
  },
  {
    group: "Performance & low latency",
    question: "When would you use atomics or a lock-free structure instead of a mutex?",
    answer:
      "An uncontended mutex is cheap, but under contention threads block and may be descheduled, causing latency spikes. Atomics avoid blocking for simple operations such as counters, flags and single-producer single-consumer queues, but contended atomics still bounce the cache line between cores, and std::atomic<T> is only guaranteed lock-free for std::atomic_flag (check is_always_lock_free). General lock-free structures are hard to get right (memory ordering, the ABA problem, memory reclamation) and are not automatically faster, so use them only where measurement shows a mutex is the bottleneck, preferably via a well-tested library.",
    source: { title: "cppreference — std::atomic", url: "https://en.cppreference.com/w/cpp/atomic/atomic" },
  },
  {
    group: "Performance & low latency",
    question: "What is tail latency, and why does it matter more than average latency?",
    answer:
      "Tail latency is the slow end of the distribution, such as the 99th or 99.9th percentile. Averages hide rare slow requests caused by garbage collection, page faults, cache misses, lock contention or context switches, and in a system where one request touches many components the tail dominates what users experience: if a request fans out to 100 servers and each is slow 1% of the time, about 63% of requests hit at least one slow server. Measure percentiles under realistic load and track outliers, not just the mean.",
    source: { title: "Dean and Barroso — The Tail at Scale (Communications of the ACM, 2013)", url: "https://research.google/pubs/the-tail-at-scale/" },
  },
  {
    group: "Performance & low latency",
    question: "How do you find out why a program is slow?",
    answer:
      "Measure before changing anything. Reproduce with a realistic workload, then use a sampling profiler (for example perf on Linux) to find hot functions, view the results as a flame graph, and use hardware counters to check cache misses and branch mispredictions. Benchmark changes in isolation with repeated runs, compiler optimizations enabled and warm caches. Fix the biggest hotspot first and re-measure.",
    source: { title: "Brendan Gregg — Flame graphs", url: "https://www.brendangregg.com/flamegraphs.html" },
  },
  {
    group: "Performance & low latency",
    question: "Why avoid memory allocation on the hot path?",
    answer:
      "General-purpose allocators can take locks, touch new memory (page faults) and have unpredictable run times, which shows up as latency spikes. Low-latency code preallocates buffers at startup, reuses objects through pools or free lists, reserves container capacity, and avoids hidden allocations such as growing strings or std::function objects whose captures exceed the small-buffer size in tight loops.",
  },
  {
    group: "Performance & low latency",
    question: "TCP or UDP for latency-sensitive data, and what is Nagle's algorithm?",
    answer:
      "TCP gives reliable, ordered delivery but retransmission and head-of-line blocking add latency; UDP sends independent datagrams with no delivery guarantee, so applications handle loss themselves. Market data is often distributed by UDP multicast with sequence numbers and gap recovery, while order entry commonly uses TCP. Nagle's algorithm batches small TCP writes to reduce packet count, which adds delay; latency-sensitive applications disable it with TCP_NODELAY.",
    source: { title: "Beej's Guide to Network Programming", url: "https://beej.us/guide/bgnet/html/split/" },
  },
];

export default questions;
