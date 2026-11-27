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
    answer: "The stack stores function call frames — local variables and return addresses — and grows and shrinks automatically as functions are called and return; it is fast but limited in size, so very deep recursion overflows it (Python raises RecursionError at its recursion limit). The heap stores data whose lifetime is not tied to a single call, allocated and freed dynamically. In CPython all objects live on the heap; local variables in a frame are references to them. CPython frees objects mainly by reference counting, with a garbage collector that finds reference cycles.",
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
];

export default questions;
