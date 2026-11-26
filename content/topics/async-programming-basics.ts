import type { Topic } from "../types";

const topic: Topic = {
  slug: "async-programming-basics",
  title: "Asynchronous Programming Basics",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "Asynchronous code lets one thread keep many I/O operations in flight, using async and await on an event loop. For backend work this mostly means choosing between def and async def endpoints in FastAPI, running independent I/O concurrently, and never blocking the event loop.",
  whyItMatters:
    "Conditional: study this when your target role, framework or job description involves asynchronous Python, such as FastAPI with async HTTP or database libraries, or asyncio services. Without it, a single blocking call in an async endpoint can stall every request on that worker — an easy production bug to create and a common source of follow-up questions about your project. Computer Science Essentials already covers concurrency versus parallelism, CPU-bound versus I/O-bound work, the GIL and synchronous versus asynchronous code at explanation level; this topic adds the practical skills.",
  prerequisites: [
    "Computer Science Essentials: Processes, Threads, Memory and Concurrency",
    "HTTP APIs with FastAPI",
    "Exceptions and Error Handling",
  ],
  objectives: [
    "Conditional on role, framework and job requirements: if your stack does not use async Python, the Computer Science Essentials explanation is enough for now.",
    "Synchronous versus asynchronous execution and blocking versus non-blocking I/O: the event loop runs one task at a time and switches only at await.",
    "async def defines a coroutine function; calling it returns a coroutine object that does nothing until it is awaited or scheduled; asyncio.run starts the event loop at the program's entry point.",
    "Run independent I/O concurrently with asyncio.gather (results in argument order) or asyncio.TaskGroup (Python 3.11+); awaiting calls one by one in a loop runs them sequentially.",
    "Async I/O needs async-aware libraries (httpx.AsyncClient, async database drivers); requests, time.sleep and synchronous database drivers block.",
    "FastAPI: def endpoints and dependencies run in a threadpool; async def ones run on the event loop. Use async def only when you await async libraries; when unsure, use def.",
    "Move unavoidable blocking calls off the loop with asyncio.to_thread; async does not make CPU-bound work faster — use processes or a separate worker.",
    "Errors: exceptions propagate through await; gather raises the first exception by default (other awaitables keep running) or collects them with return_exceptions=True; TaskGroup cancels the remaining tasks; set time limits with asyncio.timeout (3.11+) or wait_for.",
    "Spot \"coroutine was never awaited\" warnings and use asyncio debug mode to find slow, blocking callbacks.",
    "Skip for now: event loop internals, futures, custom awaitables, async generators beyond reading them, Trio and AnyIO details, uvloop and async ORM tuning.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "FastAPI — Concurrency and async / await",
      url: "https://fastapi.tiangolo.com/async/",
      provider: "FastAPI (official documentation)",
      type: "Documentation",
      instructions:
        "Start here. Read In a hurry?, Asynchronous Code (the concurrent and parallel burgers sections are the explanation), async and await, Coroutines, and under Very Technical Details read Path operation functions and Dependencies. Skip Write your own async code and Other forms of asynchronous code. Free; no account.",
    },
    {
      title: "Python HOWTO — A Conceptual Overview of asyncio, part 1",
      url: "https://docs.python.org/3/howto/a-conceptual-overview-of-asyncio.html",
      provider: "Python Software Foundation",
      type: "Article",
      instructions:
        "The plain-Python model behind FastAPI's behaviour. Read part 1 only: Event loop, Asynchronous functions and coroutines, Tasks and await. Skip part 2 (the nuts and bolts). If you read it for Computer Science Essentials, skip it.",
    },
    {
      title: "Python Standard Library — Coroutines and Tasks",
      url: "https://docs.python.org/3/library/asyncio-task.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for the API you will use: Coroutines, Awaitables, Creating tasks, Task groups, Sleeping, Running tasks concurrently (gather), Timeouts and Running in threads (to_thread). Skip eager task factories, shielding and scheduling from other threads.",
    },
    {
      title: "Python Standard Library — Developing with asyncio",
      url: "https://docs.python.org/3/library/asyncio-dev.html",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Reference for debugging: Debug Mode, Running Blocking Code, Detect never-awaited coroutines and Detect never-retrieved exceptions.",
    },
    {
      title: "HTTPX — Async Support",
      url: "https://www.python-httpx.org/async/",
      provider: "HTTPX (official documentation)",
      type: "Documentation",
      instructions: "For async API calls: read Making Async requests and Opening and closing clients (use async with httpx.AsyncClient()). Skip streaming and the Trio and AnyIO sections.",
    },
  ],
  exercises: [
    {
      title: "Python docs: run and modify the say_after examples in Coroutines",
      url: "https://docs.python.org/3/library/asyncio-task.html#coroutines",
      note: "Run the sequential version (about 3 seconds) and the create_task version (about 2 seconds), explain the difference, then rewrite it with asyncio.gather and with a TaskGroup. Free; no account.",
    },
    {
      title: "Apply to your project: concurrent API calls with httpx.AsyncClient",
      url: "https://pokeapi.co/api/v2/pokemon?limit=20",
      note: "Fetch ten resource URLs from a public API such as PokeAPI (free, no account) one by one, then with gather, and compare the times. Add a per-request timeout and make one URL invalid: handle it with return_exceptions=True, then with a TaskGroup, and explain the difference. Practice prompt: no suitable external exercise set was found.",
    },
    {
      title: "Apply to your FastAPI project: def versus async def audit",
      note: "For each endpoint, note whether it awaits an async library; if not, make it def. Then temporarily add time.sleep(2) inside an async def endpoint, send two requests at once from two terminals with curl and observe that the second waits; fix it with asyncio.sleep, def or asyncio.to_thread and compare. Remove the experiment afterwards.",
    },
  ],
  interviewQuestions: [
    {
      question: "In FastAPI, when should a path operation be async def and when def?",
      answer:
        "Use async def when the endpoint awaits async libraries — httpx.AsyncClient, an async database driver — so the event loop can serve other requests while it waits. Use def when it calls blocking libraries such as requests or a synchronous database driver: FastAPI runs def endpoints in a threadpool, so the blocking call does not stall the event loop. FastAPI's own advice is to use def if you are unsure. You can mix both in one application, and the same rule applies to dependencies.",
      followUps: [
        "Will making a CPU-heavy endpoint async def make it faster? (No — async only helps while waiting; CPU work in async def blocks the loop. Use a process pool or a background worker.)",
      ],
      source: { title: "FastAPI — Concurrency and async / await", url: "https://fastapi.tiangolo.com/async/" },
    },
    {
      question: "What happens if an async def endpoint calls a blocking function such as time.sleep, requests.get or a synchronous database query?",
      answer:
        "The event loop can only switch tasks at an await, so a blocking call freezes it: every other request on that worker waits until the call finishes. Throughput collapses under load even though each request looks fine in isolation. Fix it by using an async library and awaiting it, by making the endpoint def so FastAPI runs it in a threadpool, or by wrapping the call in asyncio.to_thread.",
      code: `import asyncio, time

async def blocking():
    time.sleep(0.2)              # blocks the whole event loop

async def non_blocking():
    await asyncio.sleep(0.2)     # yields to the event loop while waiting

async def run_three(job):
    start = time.perf_counter()
    await asyncio.gather(job(), job(), job())
    return round(time.perf_counter() - start, 1)

print(asyncio.run(run_three(blocking)), asyncio.run(run_three(non_blocking)))   # -> 0.6 0.2`,
      followUps: ["How would you find a blocking call in a slow async service?"],
      source: { title: "Python Standard Library — Developing with asyncio: Running Blocking Code", url: "https://docs.python.org/3/library/asyncio-dev.html#running-blocking-code" },
    },
    {
      question: "What does calling an async function without await do?",
      answer:
        "It creates a coroutine object and runs none of the function's body. The result is not the data you expected, and if the coroutine is never awaited Python warns \"coroutine ... was never awaited\". A forgotten await on an async database or HTTP call is a common bug: the code continues with a coroutine object instead of a result. Await it, schedule it as a task, or run it at the top level with asyncio.run.",
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
      question: "How do you run several I/O operations concurrently with asyncio, and what happens if one fails?",
      answer:
        "Start them together instead of awaiting each in turn: asyncio.gather(a(), b(), c()) returns their results in argument order, or a TaskGroup (Python 3.11+) creates tasks in an async with block. Total time is roughly the slowest call rather than the sum. Failure handling differs: gather raises the first exception to the caller by default while the other awaitables keep running, or returns exceptions as results with return_exceptions=True; a TaskGroup cancels the remaining tasks and raises the errors together. Add a timeout with asyncio.timeout or wait_for so one slow call cannot hang the request.",
      followUps: ["How would you limit concurrency to five requests at a time? (asyncio.Semaphore.)"],
      source: { title: "Python Standard Library — Coroutines and Tasks: Running tasks concurrently", url: "https://docs.python.org/3/library/asyncio-task.html#running-tasks-concurrently" },
    },
  ],
  mistakes: [
    "Declaring every endpoint async def while calling blocking libraries inside.",
    "Forgetting await and passing a coroutine object along as if it were the result.",
    "Awaiting independent calls one by one in a loop and expecting concurrency.",
    "Expecting async to speed up CPU-bound work.",
    "Using requests or time.sleep inside async code instead of httpx.AsyncClient or asyncio.sleep.",
    "Firing off many concurrent requests without a timeout or a concurrency limit.",
  ],
  mastery: [
    "You can explain def versus async def in FastAPI and justify the choice for each endpoint in your project.",
    "You can write async code with httpx.AsyncClient and gather or a TaskGroup, with a timeout and error handling, and explain the measured speed-up.",
    "You can find blocking calls in async code and fix them with an async library, a def endpoint or asyncio.to_thread.",
    "You can explain why async does not help CPU-bound work and what to use instead.",
    "Skip this topic if your target role and stack do not use async Python, or if you already write asyncio code that meets the criteria above.",
  ],
  deprioritize: [
    "Event loop internals, futures and custom awaitables.",
    "Async generators and streaming beyond reading them.",
    "Trio, AnyIO and uvloop.",
    "Async ORM tuning, WebSockets and structured-concurrency design patterns.",
  ],
  keywords: [
    "async",
    "await",
    "asyncio",
    "async def",
    "coroutine",
    "event loop",
    "non-blocking",
    "blocking I/O",
    "gather",
    "TaskGroup",
    "to_thread",
    "concurrency",
    "AsyncClient",
    "threadpool",
  ],
};

export default topic;
