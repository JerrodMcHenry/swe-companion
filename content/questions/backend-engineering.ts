import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Security",
    question: "What is the difference between encoding, hashing and encryption?",
    answer: "Encoding transforms data into another format for transport or storage, such as Base64 or URL encoding; anyone can reverse it, so it provides no secrecy. Hashing maps data to a fixed-size fingerprint that cannot be reversed; it is used for integrity checks and, with slow salted algorithms, for passwords. Encryption transforms data so only someone with the key can read it, and it is reversible with that key; it protects data you need to read again, such as stored tokens or network traffic.",
    code: `import base64
import hashlib

encoded = base64.b64encode(b"secret").decode()
print(encoded, base64.b64decode(encoded))         # reversible by anyone  # -> c2VjcmV0 b'secret'
digest = hashlib.sha256(b"secret").hexdigest()
print(len(digest))                                # fixed size, not reversible  # -> 64`,
    followUps: ["Why is a fast hash such as SHA-256 alone a poor choice for storing passwords?"],
    source: { title: "OWASP — Password Storage Cheat Sheet: Hashing vs Encryption", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#hashing-vs-encryption" },
  },
  {
    group: "Security",
    question: "How should passwords be stored?",
    answer: "Never store passwords in plain text or with reversible encryption. Store a hash produced by a slow, salted password-hashing algorithm designed for passwords — OWASP recommends Argon2id, then scrypt, with bcrypt for legacy systems — through a well-maintained library rather than your own code. The salt is a random value per password that makes identical passwords produce different hashes and defeats precomputed tables; the slowness makes guessing expensive. To log in, the library re-hashes the attempt with the stored salt and parameters and compares in constant time.",
    followUps: ["What should happen if your password database is leaked?"],
    source: { title: "OWASP — Password Storage Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
  },
  {
    group: "Security",
    question: "What is SQL injection, and how do you prevent it?",
    answer: "SQL injection happens when user input is inserted into a SQL statement as text, letting an attacker change the query, for example to read or delete other users' data. Prevent it with parameterized queries, which send values separately from the SQL so they are always treated as data (see Databases and SQL Concepts for an example). Validate input and use least-privilege database accounts as additional layers. Escaping by hand is error-prone and not a substitute.",
    followUps: ["What other kinds of injection exist besides SQL? (Command injection, for example.)"],
    source: { title: "OWASP — SQL Injection Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
  },
  {
    group: "Security",
    question: "What is cross-site scripting (XSS), and how do you prevent it?",
    answer: "XSS happens when an application includes untrusted input in a web page without proper encoding, so the browser runs an attacker's script in the victim's session, for example to steal data or act as the user. Prevent it by encoding output for the context where it appears (HTML, attributes, JavaScript, URLs), using templating frameworks that escape by default, avoiding inserting raw HTML, and adding a Content Security Policy as an extra layer.",
    code: `import html

comment = '<script>alert("hacked")</script>'
print(html.escape(comment))   # encode before inserting into HTML  # -> &lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;`,
    followUps: ["Why is filtering out the word \"script\" not a reliable defense?"],
    source: { title: "OWASP — Cross Site Scripting Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
  },
  {
    group: "Security",
    question: "What is CSRF, and how is it prevented?",
    answer: "Cross-site request forgery tricks a logged-in user's browser into sending an unwanted request to a site that trusts it, because the browser automatically includes that site's cookies. Defenses include anti-CSRF tokens that a forged request cannot know, SameSite cookie settings that stop cookies being sent on most cross-site requests, never changing state with GET requests, and frameworks' built-in CSRF protection. APIs that send tokens in headers rather than relying on cookies are less exposed.",
    followUps: ["How does the SameSite cookie attribute help?"],
    source: { title: "OWASP — Cross-Site Request Forgery Prevention Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" },
  },
  {
    group: "Security",
    question: "How should secrets such as API keys be handled?",
    answer: "Keep secrets out of source code, Git history, logs, error messages and client-side code. Load them from environment variables or a secrets manager, give each key only the permissions it needs (least privilege), and rotate them regularly. If a secret is committed or leaked, assume it is compromised: revoke and rotate it immediately — deleting the commit is not enough because history and copies remain.",
    followUps: ["What information should never appear in logs?"],
    source: { title: "OWASP — Secrets Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" },
  },
  {
    group: "Logging & configuration",
    question: "What are the logging levels, and how do you choose one?",
    answer: "Python's standard levels, in increasing severity: DEBUG for detailed diagnostic information while developing; INFO for confirmation that things work as expected (a request handled, a job finished); WARNING for something unexpected that the program handled, or a sign of a future problem (a retry, a deprecated setting); ERROR when an operation failed; CRITICAL when the program may not be able to continue. The configured level is a threshold: messages below it are discarded. Production usually runs at INFO or WARNING, with DEBUG switched on temporarily through configuration rather than a code change.",
    followUps: ["Should a user entering an invalid password be logged as ERROR?"],
    source: { title: "Python Logging HOWTO — When to use logging; Logging Levels", url: "https://docs.python.org/3/howto/logging.html" },
  },
  {
    group: "Logging & configuration",
    question: "What should a backend log, and what must it never log?",
    answer: "Log the events you would need to explain behavior or investigate an incident: requests with their outcome and duration, failed operations with the error, authentication successes and failures, authorization denials, input validation failures, and significant state changes such as an order being paid. Give each event context — time, service, request id, user or record id, and outcome. Never log passwords, tokens, session ids, API keys, connection strings or unnecessary personal data, and do not dump full request bodies. Treat user input in log messages as untrusted, because newlines can forge fake log entries.",
    followUps: ["How would you debug a problem with a request body if you cannot log it?"],
    source: { title: "OWASP — Logging Cheat Sheet: Which events to log; Data to exclude", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" },
  },
  {
    group: "Logging & configuration",
    question: "What is structured logging, and why is it useful?",
    answer: "Structured logging writes each event as machine-readable fields — usually one JSON object per line, or key=value pairs — instead of free text: for example level, message, request_id, user_id, path, status and duration_ms. Log platforms can then filter and aggregate by field (all errors for one request id, the slowest endpoints) without fragile text searches. Keep field names consistent across the service, and still write a readable message.",
    followUps: ["Which fields would you put on every log line of your project?"],
    source: { title: "Python Logging Cookbook — Implementing structured logging", url: "https://docs.python.org/3/howto/logging-cookbook.html#implementing-structured-logging" },
  },
  {
    group: "Logging & configuration",
    question: "What is a request id (correlation id), and how would you add one?",
    answer: "It is a unique id attached to every log line produced while handling one request, so you can pull out everything that happened for that request even when many run at once — and follow it across services if it is passed on. In middleware, take the id from an incoming header (such as X-Request-ID) or generate a UUID, store it in a contextvar, add it to each log record with a logging filter, return it in the response header so users and support can quote it, and send it on outgoing calls. The W3C traceparent header standardizes the same idea for distributed tracing.",
    code: `import contextvars, logging, sys

request_id = contextvars.ContextVar("request_id", default="-")

class RequestIdFilter(logging.Filter):
    def filter(self, record):
        record.request_id = request_id.get()   # attach the current request's id
        return True

handler = logging.StreamHandler(sys.stdout)
handler.addFilter(RequestIdFilter())
handler.setFormatter(logging.Formatter("%(levelname)s request_id=%(request_id)s %(message)s"))
log = logging.getLogger("app.orders")
log.addHandler(handler)
log.setLevel(logging.INFO)

request_id.set("a1b2c3")                        # set once per request, e.g. in middleware
log.info("order created order_id=%s", 42)       # -> INFO request_id=a1b2c3 order created order_id=42
log.debug("not shown below INFO")`,
    followUps: ["Why a contextvar rather than a global variable?"],
    source: { title: "Python Logging Cookbook — Use of contextvars", url: "https://docs.python.org/3/howto/logging-cookbook.html#use-of-contextvars" },
  },
  {
    group: "Logging & configuration",
    question: "What is the difference between logs, metrics and traces?",
    answer: "Logs are timestamped records of individual events, with detail and context — best for explaining what happened in one case. Metrics are numeric measurements aggregated over time, such as request rate, error rate and latency percentiles — cheap to store and ideal for dashboards and alerts that tell you something is wrong. Traces follow one request through the components and services it touches as a tree of timed spans — best for finding where time is spent or which service failed. They are used together: a metric alerts you, a trace locates the problem, logs explain it.",
    followUps: ["Which would you use to find out that error rates rose after a deployment?"],
    source: { title: "OpenTelemetry — Signals", url: "https://opentelemetry.io/docs/concepts/signals/" },
  },
  {
    group: "Logging & configuration",
    question: "How do you manage configuration and secrets across development, testing and production?",
    answer: "Keep one codebase and put everything that differs per environment in environment variables, read into a single typed settings object (for example pydantic-settings) that is validated at startup, so a missing or malformed value stops the app immediately with a clear message instead of failing on the first request. Give safe defaults only for harmless values; require secrets explicitly. Use an uncommitted .env file locally and the platform's secret store or a secrets manager in production. Make settings injectable (a FastAPI dependency) so tests can override them, and never print the settings object with its secrets.",
    followUps: ["Why is a configuration value read deep inside a function with os.environ harder to test?"],
    source: { title: "FastAPI — Settings and Environment Variables", url: "https://fastapi.tiangolo.com/advanced/settings/" },
  },
  {
    group: "Async",
    question: "In FastAPI, when should a path operation be async def and when def?",
    answer: "Use async def when the endpoint awaits async libraries — httpx.AsyncClient, an async database driver — so the event loop can serve other requests while it waits. Use def when it calls blocking libraries such as requests or a synchronous database driver: FastAPI runs def endpoints in a threadpool, so the blocking call does not stall the event loop. FastAPI's own advice is to use def if you are unsure. You can mix both in one application, and the same rule applies to dependencies.",
    followUps: ["Will making a CPU-heavy endpoint async def make it faster? (No — async only helps while waiting; CPU work in async def blocks the loop. Use a process pool or a background worker.)"],
    source: { title: "FastAPI — Concurrency and async / await", url: "https://fastapi.tiangolo.com/async/" },
  },
  {
    group: "Async",
    question: "What happens if an async def endpoint calls a blocking function such as time.sleep, requests.get or a synchronous database query?",
    answer: "The event loop can only switch tasks at an await, so a blocking call freezes it: every other request on that worker waits until the call finishes. Throughput collapses under load even though each request looks fine in isolation. Fix it by using an async library and awaiting it, by making the endpoint def so FastAPI runs it in a threadpool, or by wrapping the call in asyncio.to_thread.",
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
    group: "Deployment & CI/CD",
    question: "What changes when your application moves from your laptop to a deployed environment?",
    answer: "The operating system and installed versions may differ, so dependencies must be declared and pinned. Configuration differs (database URL, debug mode, allowed hosts), so it comes from environment variables, not code. Data is real and persistent. The app is reachable by others, so security settings, HTTPS and secrets matter. You cannot attach a debugger, so you rely on logs and health checks. \"It works on my machine\" usually means one of these differences was not made explicit.",
    followUps: ["Why should a missing secret stop the app at startup rather than at the first request?"],
    source: { title: "The Twelve-Factor App — III. Config", url: "https://12factor.net/config" },
  },
  {
    group: "Deployment & CI/CD",
    question: "What is continuous integration, and what would a minimal CI setup for your project do?",
    answer: "Continuous integration means every change is merged frequently and checked automatically: on each push or pull request, a CI service installs the project from scratch and runs the tests (and often linting), so broken changes are caught before they reach the main branch. A minimal setup for a Python project is one workflow that checks out the code, installs the pinned dependencies and runs pytest; branch protection can require it to pass before merging.",
    followUps: ["Your CI passes but the deployed app fails. What could differ?"],
    source: { title: "GitHub Docs — Building and testing Python", url: "https://docs.github.com/en/actions/tutorials/build-and-test-code/python" },
  },
  {
    group: "Deployment & CI/CD",
    question: "What is the difference between continuous delivery and continuous deployment?",
    answer: "Both build on CI. With continuous delivery, every change that passes the pipeline is ready to release, but a person decides when to deploy it to production. With continuous deployment, every change that passes is deployed to production automatically. Continuous deployment needs strong tests, monitoring and easy rollback; many teams use delivery with a manual approval step.",
    followUps: ["What would you want in place before turning on continuous deployment?"],
    source: { title: "Martin Fowler — ContinuousDelivery", url: "https://martinfowler.com/bliki/ContinuousDelivery.html" },
  },
  {
    group: "Deployment & CI/CD",
    question: "How do you verify that a deployment worked?",
    answer: "Check that the new version is actually the one running (a version or commit shown in a health endpoint or the logs), call a health-check endpoint that confirms the app and its dependencies (for example the database) respond, run a quick smoke test of the main workflow, and watch the logs and error rates for a few minutes. Automate the health check so the platform can detect a failed deployment.",
    followUps: ["What should a health check not do?"],
    source: { title: "Azure Architecture Center — Health Endpoint Monitoring pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring" },
  },
  {
    group: "Deployment & CI/CD",
    question: "A deployment breaks production. What do you do?",
    answer: "First limit the impact: roll back to the previous known-good version (or turn off the feature) rather than debugging live. Then investigate with the logs, the error, and the difference between the two versions — code, dependencies and configuration. Reproduce it, fix it with a test, and redeploy. Small, frequent changes make both rollback and finding the cause easier, which is one reason teams deploy often.",
    followUps: ["When can rolling back not fix the problem? (For example, after a database migration.)"],
    source: { title: "Site Reliability Engineering — Effective Troubleshooting (Triage)", url: "https://sre.google/sre-book/effective-troubleshooting/" },
  },
  {
    group: "Deployment & CI/CD",
    question: "What is a container, and when would you use one?",
    answer: "A container image packages an application with its runtime and dependencies; a container is a running instance of it, isolated from other processes but sharing the host's operating-system kernel, so it is lighter than a virtual machine. Containers make environments reproducible across laptops, CI and production, and many hosting platforms run them. For a small project, a platform that builds from your repository may be simpler; learn Docker when your target or deployment needs it.",
    followUps: ["In a Dockerfile, why is requirements.txt usually copied and installed before the rest of the code?"],
    source: { title: "Docker Docs — What is a container?", url: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/" },
  },
];

export default questions;
