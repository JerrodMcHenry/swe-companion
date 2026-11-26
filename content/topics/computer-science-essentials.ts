import type { Topic } from "../types";

const topic: Topic = {
  slug: "computer-science-essentials",
  title: "Computer Science Essentials: Processes, Threads, Memory and Concurrency",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "This topic explains what happens when your program runs: processes and threads, how memory is organized (stack, heap, virtual memory, garbage collection), the difference between CPU-bound and I/O-bound work, and the basics of concurrency — parallelism, asynchronous execution, race conditions, deadlocks and locks — including how Python's global interpreter lock (GIL) affects threads. The goal is to explain these accurately, not to study operating-system internals.",
  whyItMatters:
    "These concepts come up as interview questions at some employers (Amazon's official topics include operating systems at a basic level, and a reviewed Apple posting lists computer science fundamentals), and they explain everyday problems: why a program is slow, why it ran out of memory, why a threaded program occasionally gives the wrong answer, or why a web server should not block. General entry-level roles need them at an explanation level; systems and infrastructure teams go deeper.",
  prerequisites: ["Recursion and Backtracking (call stacks)", "Mutability, References and Copying", "Complexity Analysis"],
  objectives: [
    "Distinguish a program, a process and a thread, and explain what threads in one process share.",
    "Explain the call stack, stack frames and stack overflow, and how they relate to recursion.",
    "Distinguish stack and heap memory, and explain how Python objects are referenced and freed (reference counting plus a cycle-detecting garbage collector).",
    "Explain virtual memory at a high level: each process sees its own address space.",
    "Distinguish CPU-bound from I/O-bound work and choose processes, threads or async accordingly.",
    "Distinguish concurrency from parallelism, and synchronous from asynchronous execution.",
    "Explain race conditions and deadlocks with examples, and how locks prevent races.",
    "Explain the GIL in standard CPython and the optional free-threaded build available since Python 3.13 (officially supported, still optional, from 3.14).",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "Operating Systems: Three Easy Pieces — 4 Processes, 13 Address Spaces, 26 Concurrency: An Introduction, 32 Common Concurrency Problems",
      url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
      provider: "Remzi and Andrea Arpaci-Dusseau (free book)",
      type: "Book",
      instructions:
        "Free university textbook. Read only the four chapters named (cpu-intro, vm-intro, threads-intro and threads-bugs on the contents page), skimming the code. Skip scheduling, paging internals and file systems.",
    },
    {
      title: "Python documentation — Global interpreter lock (glossary) and Python support for free threading",
      url: "https://docs.python.org/3/glossary.html#term-global-interpreter-lock",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Read the glossary entry, then the introduction of the free-threading HOWTO (linked from the docs) for the current status.",
    },
    {
      title: "Python Standard Library — threading and asyncio",
      url: "https://docs.python.org/3/library/threading.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions: "Reference. Read the introduction and the Lock section of threading, and the asyncio introduction. Do not read the full APIs.",
    },
  ],
  exercises: [
    {
      title: "Explain aloud, in two minutes each: process versus thread, stack versus heap, concurrency versus parallelism, and what a race condition is.",
      note: "Interview practice. Compare with this topic's model answers afterwards.",
    },
    {
      title: "Write a deep recursive function, trigger RecursionError, then rewrite it iteratively, and explain what happened to the call stack.",
      note: "Practical.",
    },
    {
      title: "Download several web pages (or simulate slow I/O with time.sleep) sequentially, then with a thread pool and with asyncio, and compare total time.",
      note: "Practical: I/O-bound concurrency.",
    },
    {
      title: "Write a counter incremented by several threads, protect it with a lock, and explain why the unprotected version can lose updates.",
      note: "Reinforcement.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between a process and a thread?",
      answer:
        "A process is a running program with its own memory space and resources, isolated from other processes by the operating system. A thread is a sequence of execution within a process; threads in the same process share its memory, which makes communication cheap but requires synchronization to avoid races. Processes are heavier to create and communicate through files, pipes, sockets or shared memory, but a crash in one does not corrupt another.",
      code: `import os
import threading

shared = []

def worker(n):
    shared.append(n)          # threads share the process's memory

threads = [threading.Thread(target=worker, args=(i,)) for i in range(3)]
for t in threads: t.start()
for t in threads: t.join()
print(sorted(shared), os.getpid() > 0)   # -> [0, 1, 2] True`,
      followUps: ["When would you choose multiple processes over multiple threads?"],
    },
    {
      question: "What is the difference between stack and heap memory?",
      answer:
        "The stack stores function call frames — local variables and return addresses — and grows and shrinks automatically as functions are called and return; it is fast but limited in size, so very deep recursion overflows it. The heap stores data whose lifetime is not tied to a single call, allocated and freed dynamically. In CPython, all objects live on the heap; local variables in a frame are references to them. CPython frees objects mainly by reference counting, with a garbage collector that finds reference cycles.",
      code: `import sys

def depth(n):
    return 0 if n == 0 else 1 + depth(n - 1)   # each call adds a stack frame

print(depth(500))                               # -> 500
try:
    depth(10 ** 6)
except RecursionError:
    print("stack limit reached")                # -> stack limit reached
items = [1, 2, 3]
alias = items                                   # two references to one heap object
print(sys.getrefcount(items) >= 3)              # -> True`,
      followUps: ["What is a memory leak in a garbage-collected language like Python?"],
    },
    {
      question: "What is virtual memory?",
      answer:
        "Virtual memory gives each process its own private address space, as if it had the machine's memory to itself. The operating system and hardware map these virtual addresses to physical memory in pages, and can move rarely used pages to disk. This isolates processes from each other and lets programs use more memory than is physically free, at the cost of severe slowdown if the system swaps heavily.",
      code: `pages = {"process A": {0x1000: "frame 7"}, "process B": {0x1000: "frame 2"}}
print(pages["process A"][0x1000] != pages["process B"][0x1000])   # same virtual address, different memory  # -> True`,
      followUps: ["What is thrashing?"],
    },
    {
      question: "What is the difference between concurrency and parallelism? CPU-bound and I/O-bound?",
      answer:
        "Concurrency means dealing with several tasks at once by interleaving them, such as a server handling many requests while each waits for the database. Parallelism means executing several computations at the same instant on different CPU cores. I/O-bound work spends most of its time waiting (network, disk), so concurrency with threads or async helps. CPU-bound work spends its time computing, so it needs parallelism across cores, in Python usually with multiple processes.",
      code: `import time
from concurrent.futures import ThreadPoolExecutor

def fake_download(i):
    time.sleep(0.1)          # waiting on I/O releases the GIL
    return i

start = time.perf_counter()
with ThreadPoolExecutor(max_workers=5) as pool:
    results = list(pool.map(fake_download, range(5)))
elapsed = time.perf_counter() - start
print(results, elapsed < 0.4)   # five 0.1-second waits overlap  # -> [0, 1, 2, 3, 4] True`,
      followUps: ["Would threads speed up a pure-Python loop that computes primes? Why or why not?"],
    },
    {
      question: "What is Python's global interpreter lock (GIL)?",
      answer:
        "In the standard CPython build, the GIL is a lock that lets only one thread execute Python bytecode at a time. Threads still help I/O-bound programs, because the GIL is released while waiting, but they do not speed up CPU-bound pure-Python code; use multiprocessing or native libraries for that. Since Python 3.13, CPython offers an optional free-threaded build with the GIL disabled — experimental in 3.13 and officially supported, but still not the default, from 3.14. The GIL never made your own code thread-safe: you still need locks around shared data.",
      code: `import sys

gil_check = getattr(sys, "_is_gil_enabled", None)   # available from Python 3.13
print("GIL enabled" if gil_check is None or gil_check() else "free-threaded build")
# -> GIL enabled
# (on the standard CPython build; a free-threaded build prints "free-threaded build")`,
      followUps: ["Why does the GIL not prevent race conditions in your code?"],
    },
    {
      question: "What is a race condition, and how do you prevent one?",
      answer:
        "A race condition occurs when the result depends on the unpredictable timing of concurrent operations on shared data. counter += 1 is a read, an add and a write; two threads can both read the same value and one update is lost. Prevent races by protecting the shared data with a lock so only one thread updates it at a time, or avoid sharing by giving each thread its own data, using thread-safe queues or using atomic database operations.",
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
    },
    {
      question: "What is a deadlock?",
      answer:
        "A deadlock happens when two or more threads each hold a resource the other needs and wait forever. Example: thread A locks the account table then waits for the orders table, while thread B locks orders then waits for accounts. Prevent it by always acquiring locks in the same order, holding locks for as short a time as possible, or using timeouts.",
      code: `import threading

lock_a, lock_b = threading.Lock(), threading.Lock()
done = []

def worker(name):
    with lock_a:          # every thread acquires locks in the same order: a, then b
        with lock_b:
            done.append(name)

threads = [threading.Thread(target=worker, args=(n,)) for n in ("x", "y")]
for t in threads: t.start()
for t in threads: t.join()
print(sorted(done))       # -> ['x', 'y']`,
      followUps: ["What is the difference between a deadlock and a livelock or starvation?"],
    },
    {
      question: "What is the difference between synchronous and asynchronous code?",
      answer:
        "Synchronous code runs one step after another and waits for each operation to finish. Asynchronous code, such as Python's asyncio, lets a single thread start an I/O operation, switch to other work while it waits, and resume when the result is ready, using await. It is efficient for many concurrent I/O tasks such as web requests, but blocking calls inside async code stall everything, and it does not make CPU-bound work faster.",
      code: `import asyncio

async def fetch(name, delay):
    await asyncio.sleep(delay)      # yields control while "waiting"
    return name

async def main():
    results = await asyncio.gather(fetch("slow", 0.2), fetch("fast", 0.1))
    print(results)                  # results keep the order of the calls

asyncio.run(main())   # -> ['slow', 'fast']`,
      followUps: ["What happens if you call time.sleep inside an async function?"],
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
