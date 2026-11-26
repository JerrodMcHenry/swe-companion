import type { Topic } from "../types";

const topic: Topic = {
  slug: "computer-science-essentials",
  title: "Computer Science Essentials: Processes, Threads, Memory and Concurrency",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Processes, threads, memory and concurrency explain what happens when your program runs: why it is slow, why it ran out of memory, or why a threaded program occasionally gives the wrong answer. You need to explain these accurately, including how Python's global interpreter lock (GIL) affects threads, not to study operating-system internals.",
  whyItMatters:
    "These concepts come up as interview questions at some employers (Amazon's official topics include operating systems at a basic level, and a reviewed Apple posting lists computer science fundamentals), and they explain everyday problems: why a program is slow, why it ran out of memory, why a threaded program occasionally gives the wrong answer, or why a web server should not block. General entry-level roles need them at an explanation level; systems and infrastructure teams go deeper.",
  prerequisites: ["Recursion and Backtracking (call stacks)", "Mutability, References and Copying", "Complexity Analysis"],
  objectives: [
    "Program versus process versus thread; threads in one process share its memory, processes are isolated.",
    "The call stack, stack frames and stack overflow (RecursionError in Python), and their link to recursion.",
    "Stack versus heap; in CPython all objects live on the heap and are freed by reference counting plus a cycle-detecting garbage collector.",
    "Virtual memory at a high level: each process has its own address space mapped to physical memory in pages.",
    "CPU-bound versus I/O-bound work, and choosing processes, threads or async accordingly.",
    "Concurrency (interleaving tasks) versus parallelism (running at the same instant); synchronous versus asynchronous execution.",
    "Race conditions (counter += 1 is read, add, write), locks, and deadlocks (prevent with a consistent lock order).",
    "The GIL in standard CPython, and the optional free-threaded build available since Python 3.13 (officially supported, still optional, from 3.14). The GIL never made your code thread-safe.",
    "Skip for now: CPU scheduling algorithms, paging and TLB details, kernel internals, lock-free data structures, memory models, semaphores and condition variables beyond recognition.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "Operating Systems: Three Easy Pieces — 4 Processes, 13 Address Spaces, 26 Concurrency: An Introduction, 32 Common Concurrency Problems",
      url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
      provider: "Remzi and Andrea Arpaci-Dusseau (free book)",
      type: "Book",
      instructions:
        "Start here. Free university textbook; each chapter is a free PDF on the contents page. Read only the four chapters named (cpu-intro, vm-intro, threads-intro and threads-bugs), skimming the C code; in chapter 32 read the deadlock section's conditions and prevention by lock ordering. Skip scheduling, paging internals and file systems.",
    },
    {
      title: "Python Standard Library — threading: GIL and performance considerations, and Lock objects",
      url: "https://docs.python.org/3/library/threading.html#gil-and-performance-considerations",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Read the GIL and performance considerations section (threads versus processes, CPU-bound limits, free-threaded builds) and the Lock objects section. Do not read the full API.",
    },
    {
      title: "Python HOWTO — Python support for free threading",
      url: "https://docs.python.org/3/howto/free-threading-python.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Read the introduction and \"The global interpreter lock in free-threaded Python\" for the current status. Skip the known limitations and behavioural changes.",
    },
    {
      title: "Python HOWTO — A Conceptual Overview of asyncio",
      url: "https://docs.python.org/3/howto/a-conceptual-overview-of-asyncio.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Optional, for asynchronous execution: read the sections on the event loop, coroutines, tasks and await. Skip the parts that build custom awaitables.",
    },
  ],
  exercises: [
    {
      title: "OSTEP homework — Threads Intro simulator (x86.py)",
      url: "https://github.com/remzi-arpacidusseau/ostep-homework/tree/master/threads-intro",
      note: "Free, no account; download the repository and run the Python simulator with the questions in the Homework (Simulation) section of the threads-intro chapter. Shows how two threads interleave and how an unprotected counter loses updates — the race condition behind interview questions.",
    },
    {
      title: "OSTEP homework — Processes simulator (process-run.py)",
      url: "https://github.com/remzi-arpacidusseau/ostep-homework/tree/master/cpu-intro",
      note: "Free, no account. Run the simulator with the questions in the cpu-intro chapter's homework section; shows how processes alternate between using the CPU and waiting for I/O (CPU-bound versus I/O-bound).",
    },
    {
      title: "Write a deep recursive function, trigger RecursionError, then rewrite it iteratively, and explain what happened to the call stack.",
      note: "Short applied prompt: call stack and stack frames in Python.",
    },
    {
      title: "Simulate slow I/O with time.sleep and run five calls sequentially, then with concurrent.futures.ThreadPoolExecutor and with asyncio.gather; compare total time, then repeat with a CPU-bound loop and explain the difference.",
      note: "Short applied prompt: I/O-bound versus CPU-bound concurrency and the effect of the GIL.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between a process and a thread?",
      answer:
        "A process is a running program with its own memory space and resources, isolated from other processes by the operating system. A thread is a sequence of execution within a process; threads in the same process share its memory, which makes communication cheap but requires synchronization to avoid races. Processes are heavier to create and communicate through files, pipes, sockets or shared memory, but a crash in one does not corrupt another.",
      followUps: ["When would you choose multiple processes over multiple threads?"],
      source: { title: "OSTEP — Chapter 26: Concurrency: An Introduction", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf" },
    },
    {
      question: "What is the difference between stack and heap memory?",
      answer:
        "The stack stores function call frames — local variables and return addresses — and grows and shrinks automatically as functions are called and return; it is fast but limited in size, so very deep recursion overflows it (Python raises RecursionError at its recursion limit). The heap stores data whose lifetime is not tied to a single call, allocated and freed dynamically. In CPython all objects live on the heap; local variables in a frame are references to them. CPython frees objects mainly by reference counting, with a garbage collector that finds reference cycles.",
      followUps: ["What is a memory leak in a garbage-collected language like Python?"],
      source: { title: "Python Standard Library — gc: Garbage Collector interface", url: "https://docs.python.org/3/library/gc.html" },
    },
    {
      question: "What is virtual memory?",
      answer:
        "Virtual memory gives each process its own private address space, as if it had the machine's memory to itself. The operating system and hardware map these virtual addresses to physical memory in pages, and can move rarely used pages to disk. This isolates processes from each other and lets programs use more memory than is physically free, at the cost of severe slowdown if the system swaps heavily.",
      followUps: ["What is thrashing?"],
      source: { title: "OSTEP — Chapter 13: The Abstraction: Address Spaces", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf" },
    },
    {
      question: "What is the difference between concurrency and parallelism? CPU-bound and I/O-bound?",
      answer:
        "Concurrency means dealing with several tasks at once by interleaving them, such as a server handling many requests while each waits for the database. Parallelism means executing several computations at the same instant on different CPU cores. I/O-bound work spends most of its time waiting (network, disk), so concurrency with threads or async helps. CPU-bound work spends its time computing, so it needs parallelism across cores — in standard CPython usually with multiple processes.",
      followUps: ["Would threads speed up a pure-Python loop that computes primes? Why or why not?"],
      source: { title: "Python Standard Library — threading: GIL and performance considerations", url: "https://docs.python.org/3/library/threading.html#gil-and-performance-considerations" },
    },
    {
      question: "What is Python's global interpreter lock (GIL)?",
      answer:
        "In the standard CPython build, the GIL is a lock that lets only one thread execute Python bytecode at a time. Threads still help I/O-bound programs, because the GIL is released while waiting, but they do not speed up CPU-bound pure-Python code; use multiprocessing or native libraries for that. Since Python 3.13, CPython offers an optional free-threaded build with the GIL disabled — experimental in 3.13 and officially supported, but still not the default, from 3.14. The GIL never made your own code thread-safe: you still need locks around shared data.",
      followUps: ["Why does the GIL not prevent race conditions in your code?"],
      source: { title: "Python HOWTO — Python support for free threading", url: "https://docs.python.org/3/howto/free-threading-python.html" },
    },
    {
      question: "What is a race condition, and how do you prevent one?",
      answer:
        "A race condition occurs when the result depends on the unpredictable timing of concurrent operations on shared data. counter += 1 is a read, an add and a write; two threads can both read the same value and one update is lost. Prevent races by protecting shared data with a lock so only one thread updates it at a time, or avoid sharing by giving each thread its own data, using thread-safe queues or using atomic database operations.",
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
      question: "What is a deadlock?",
      answer:
        "A deadlock happens when two or more threads each hold a resource the other needs and wait forever. Example: thread A locks the accounts table then waits for orders, while thread B locks orders then waits for accounts. Prevent it by always acquiring locks in the same order, holding locks as briefly as possible, or using timeouts.",
      followUps: ["What is the difference between a deadlock and a livelock or starvation?"],
      source: { title: "OSTEP — Chapter 32: Common Concurrency Problems", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf" },
    },
    {
      question: "What is the difference between synchronous and asynchronous code?",
      answer:
        "Synchronous code runs one step after another and waits for each operation to finish. Asynchronous code, such as Python's asyncio, lets a single thread start an I/O operation, switch to other work while it waits, and resume when the result is ready, using await. It is efficient for many concurrent I/O tasks such as web requests, but a blocking call (such as time.sleep) inside async code stalls everything, and it does not make CPU-bound work faster.",
      followUps: ["What happens if you call time.sleep inside an async function?"],
      source: { title: "Python HOWTO — A Conceptual Overview of asyncio", url: "https://docs.python.org/3/howto/a-conceptual-overview-of-asyncio.html" },
    },
  ],
  mistakes: [
    "Saying threads always make Python programs faster, or that the GIL makes code thread-safe.",
    "Confusing concurrency with parallelism.",
    "Claiming Python has no garbage collector, or that reference counting alone handles cycles.",
    "Sharing mutable data between threads without a lock.",
    "Acquiring locks in different orders in different places.",
    "Calling blocking functions inside async code.",
    "Going into kernel or hardware detail the question did not ask for.",
  ],
  mastery: [
    "You can explain process versus thread, stack versus heap, virtual memory and garbage collection accurately without notes.",
    "You can explain concurrency versus parallelism and CPU-bound versus I/O-bound work, and choose threads, processes or async for a scenario.",
    "You can explain race conditions and deadlocks with examples and how to prevent them.",
    "You can explain the GIL and the free-threaded build accurately.",
    "Skip this topic if you can already explain all of the above without notes.",
  ],
  deprioritize: [
    "CPU scheduling algorithms, paging and TLB details, and kernel internals.",
    "Advanced concurrency: lock-free data structures, memory models, semaphores and condition variables beyond recognition.",
    "Writing production multithreaded or async systems (async web backends are covered conditionally in Backend Engineering).",
  ],
  keywords: [
    "process",
    "thread",
    "stack",
    "heap",
    "call stack",
    "virtual memory",
    "garbage collection",
    "reference counting",
    "concurrency",
    "parallelism",
    "CPU-bound",
    "I/O-bound",
    "race condition",
    "deadlock",
    "lock",
    "GIL",
    "free-threaded",
    "asyncio",
    "async",
    "operating systems",
  ],
};

export default topic;
