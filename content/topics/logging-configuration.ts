import type { Topic } from "../types";

const topic: Topic = {
  slug: "logging-configuration",
  title: "Logging and Application Configuration",
  category: "Backend",
  phase: "backend-engineering",
  overview:
    "Making a backend service configurable and diagnosable: typed settings loaded from the environment, secrets kept out of code and logs, and logs with the right levels, structure and request context to explain what happened in production. It builds on Deployment and CI/CD (environment variables, health checks), Reading and Debugging Unfamiliar Code (basic logging, investigating bugs) and Exceptions and Error Handling.",
  whyItMatters:
    "Logging, monitoring or observability appeared in 12 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample, and security in 11. Once code runs on a server you cannot attach a debugger to it, so logs are often the only evidence of what went wrong; misconfigured environments and leaked secrets are common causes of incidents. These are everyday professional skills that come up in project deep dives and code review more than as dedicated interview questions.",
  prerequisites: ["HTTP APIs with FastAPI", "Deployment and CI/CD", "Reading and Debugging Unfamiliar Code", "Exceptions and Error Handling"],
  objectives: [
    "Load all configuration that varies between environments (database URL, signing keys, log level, feature flags) from environment variables into one typed settings object with pydantic-settings, validated at startup so the app fails fast with a clear message when a value is missing or invalid.",
    "Know pydantic-settings' priority order (initialiser arguments, then environment variables, then a .env file, then defaults); use a .env file only for local development, never commit it, and override settings in tests.",
    "Handle secrets: from the environment or a secrets manager, never in code, Git history, logs, error responses or the frontend; rotate anything leaked (see Security Fundamentals).",
    "Use a module-level logger (logging.getLogger(__name__)) instead of print, configure handlers and format once at the application entry point, and leave libraries unconfigured.",
    "Choose levels deliberately: DEBUG for development detail, INFO for normal significant events, WARNING for unexpected but handled situations, ERROR for a failed operation, CRITICAL for the service being unable to continue; run INFO or WARNING in production.",
    "Write useful messages: what happened, to which identifiers (order id, user id — not personal data), and the outcome; pass values as logging arguments (log.info(\"order %s\", order_id)) rather than pre-formatted strings; log an exception once, with its traceback (logger.exception), at the boundary that handles it.",
    "Explain structured logging: one event per line as JSON or key=value pairs with consistent field names, so logs can be searched and filtered by a log platform.",
    "Add a request id (correlation id) to every log line of a request: accept or generate it in middleware, store it in a contextvar, add it with a logging filter, return it in a response header and pass it to downstream calls.",
    "Write logs to standard output and let the platform collect them (Twelve-Factor), and log one summary line per request with method, path, status and duration.",
    "Never log passwords, tokens, session ids, connection strings, secrets or unnecessary personal data; neutralize user input that could forge log lines (log injection).",
    "Diagnose a failure from logs: find the first error for a request id, read the traceback and context fields, and form a hypothesis (the method is in Reading and Debugging Unfamiliar Code).",
    "Explain logs versus metrics versus traces at concept level, and expose a basic health check (covered in Deployment and CI/CD).",
    "Skip for now: running a log or metrics platform, OpenTelemetry instrumentation, alerting and dashboards, sampling and log retention policies.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Python Logging HOWTO — Advanced Logging Tutorial",
      url: "https://docs.python.org/3/howto/logging.html#advanced-logging-tutorial",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Start here. Read the Advanced Logging Tutorial from Logging Flow through Logging Levels (loggers, handlers, formatters, configuring logging, configuring logging for a library), then Optimization; skip Custom Levels and Useful Handlers. If you skipped it in Reading and Debugging Unfamiliar Code, read the Basic Logging Tutorial above it first — especially the \"When to use logging\" table. Free; no account.",
    },
    {
      title: "Python Logging Cookbook — Using logging in multiple modules; Adding contextual information; Implementing structured logging",
      url: "https://docs.python.org/3/howto/logging-cookbook.html#adding-contextual-information-to-your-logging-output",
      provider: "Python Software Foundation",
      type: "Documentation",
      instructions:
        "Read Adding contextual information to your logging output with its subsections Using LoggerAdapters, Using Filters to impart contextual information and Use of contextvars (the basis of request ids), then Implementing structured logging (https://docs.python.org/3/howto/logging-cookbook.html#implementing-structured-logging) and the short Using logging in multiple modules at the top. Skip the network, multiprocessing and queue recipes.",
    },
    {
      title: "FastAPI — Settings and Environment Variables",
      url: "https://fastapi.tiangolo.com/advanced/settings/",
      provider: "FastAPI",
      type: "Documentation",
      instructions:
        "Read the whole page: environment variables, Pydantic Settings, settings in a dependency, overriding settings in tests, reading a .env file and caching the settings with lru_cache. For details, use the pydantic-settings documentation (https://docs.pydantic.dev/latest/concepts/pydantic_settings/) sections Usage, Environment variable names, Dotenv (.env) support, Secrets and Field value priority; skip the command-line and cloud secret-manager integrations. Free; no account.",
    },
    {
      title: "OWASP — Logging Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html",
      provider: "OWASP",
      type: "Documentation",
      instructions:
        "Read Which events to log, Event attributes (when, where, who and what — the fields worth having), Data to exclude and Log Injection. Skip network architecture, deployment and disposal. Free; no account.",
    },
    {
      title: "The Twelve-Factor App — XI. Logs",
      url: "https://12factor.net/logs",
      provider: "The Twelve-Factor App",
      type: "Article",
      instructions: "One short page: treat logs as event streams written to stdout and let the environment route them. The Config factor is covered in Deployment and CI/CD. Free; no account.",
    },
    {
      title: "OpenTelemetry — Observability primer, and Signals",
      url: "https://opentelemetry.io/docs/concepts/observability-primer/",
      provider: "OpenTelemetry (CNCF)",
      type: "Documentation",
      instructions:
        "Concept only. Read the primer's What is Observability?, Reliability and metrics, Logs and Distributed traces, then the Traces, Metrics and Logs overviews on Signals (https://opentelemetry.io/docs/concepts/signals/). Skip instrumentation and SDK pages until a job uses them. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Run the Logging Cookbook's contextvars example",
      url: "https://docs.python.org/3/howto/logging-cookbook.html#use-of-contextvars",
      note: "See how a context variable gives each concurrent request its own context fields in log output. Standard library only; no installation or account.",
    },
    {
      title: "Apply it to your backend project — settings: replace scattered os.environ reads with one pydantic-settings class, make required values (database URL, signing key) fail at startup with a clear error, and write a test that overrides a setting.",
      url: "https://fastapi.tiangolo.com/advanced/settings/#settings-and-testing",
      note: "Builds on the Deployment and CI/CD exercise that moves configuration into environment variables and adds a .env.example; here the settings become typed, validated and testable.",
    },
    {
      title: "Apply it to your backend project — logging: replace print calls with module loggers configured once at startup from a LOG_LEVEL setting; log one line per request (method, path, status, duration) from a middleware; add a request id to every line and return it as an X-Request-ID response header; log unexpected exceptions once with their traceback.",
      url: "https://fastapi.tiangolo.com/tutorial/middleware/",
      note: "FastAPI's middleware page shows the before-and-after-the-response pattern you need. Keep it to the standard library or one small JSON formatter; no paid tools are needed.",
    },
    {
      title: "Logging review: search your project's log output and code for passwords, tokens, Authorization headers, connection strings, email addresses and full request bodies, and remove or mask each one.",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html#data-to-exclude",
      note: "Checks your logs against the OWASP list of data to exclude. Record what you found and fixed.",
    },
    {
      title: "Diagnose from logs only: trigger one failing request in your running project (a bad input or a stopped database), then, without reading the code, use the logs to find its request id, the first error, the endpoint and the likely cause. Note any missing field that would have made it faster, and add it.",
      note: "Original practice prompt: no suitable external exercise exists for diagnosing your own service from its logs. It tests whether your logging is actually useful.",
    },
  ],
  interviewQuestions: [
    {
      question: "What are the logging levels, and how do you choose one?",
      answer:
        "Python's standard levels, in increasing severity: DEBUG for detailed diagnostic information while developing; INFO for confirmation that things work as expected (a request handled, a job finished); WARNING for something unexpected that the program handled, or a sign of a future problem (a retry, a deprecated setting); ERROR when an operation failed; CRITICAL when the program may not be able to continue. The configured level is a threshold: messages below it are discarded. Production usually runs at INFO or WARNING, with DEBUG switched on temporarily through configuration rather than a code change.",
      followUps: ["Should a user entering an invalid password be logged as ERROR?"],
      source: { title: "Python Logging HOWTO — When to use logging; Logging Levels", url: "https://docs.python.org/3/howto/logging.html" },
    },
    {
      question: "Why use the logging module instead of print, and how should logging be set up in an application?",
      answer:
        "Logging gives each message a level, a timestamp, the logger's name and a destination, all configurable without changing code, and it can be filtered and formatted consistently. Create one logger per module with logging.getLogger(__name__) so messages show where they came from, and configure handlers, format and level once at the application's entry point. Libraries should not configure handlers; they only create loggers. Pass values as arguments (log.info(\"user %s logged in\", user_id)) so formatting is skipped when the level is disabled.",
      followUps: ["What is the difference between a logger, a handler and a formatter?"],
      source: { title: "Python Logging HOWTO — Advanced Logging Tutorial", url: "https://docs.python.org/3/howto/logging.html#advanced-logging-tutorial" },
    },
    {
      question: "What should a backend log, and what must it never log?",
      answer:
        "Log the events you would need to explain behavior or investigate an incident: requests with their outcome and duration, failed operations with the error, authentication successes and failures, authorization denials, input validation failures, and significant state changes such as an order being paid. Give each event context — time, service, request id, user or record id, and outcome. Never log passwords, tokens, session ids, API keys, connection strings or unnecessary personal data, and do not dump full request bodies. Treat user input in log messages as untrusted, because newlines can forge fake log entries.",
      followUps: ["How would you debug a problem with a request body if you cannot log it?"],
      source: { title: "OWASP — Logging Cheat Sheet: Which events to log; Data to exclude", url: "https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html" },
    },
    {
      question: "What is structured logging, and why is it useful?",
      answer:
        "Structured logging writes each event as machine-readable fields — usually one JSON object per line, or key=value pairs — instead of free text: for example level, message, request_id, user_id, path, status and duration_ms. Log platforms can then filter and aggregate by field (all errors for one request id, the slowest endpoints) without fragile text searches. Keep field names consistent across the service, and still write a readable message.",
      followUps: ["Which fields would you put on every log line of your project?"],
      source: { title: "Python Logging Cookbook — Implementing structured logging", url: "https://docs.python.org/3/howto/logging-cookbook.html#implementing-structured-logging" },
    },
    {
      question: "What is a request id (correlation id), and how would you add one?",
      answer:
        "It is a unique id attached to every log line produced while handling one request, so you can pull out everything that happened for that request even when many run at once — and follow it across services if it is passed on. In middleware, take the id from an incoming header (such as X-Request-ID) or generate a UUID, store it in a contextvar, add it to each log record with a logging filter, return it in the response header so users and support can quote it, and send it on outgoing calls. The W3C traceparent header standardizes the same idea for distributed tracing.",
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
      question: "What is the difference between logs, metrics and traces?",
      answer:
        "Logs are timestamped records of individual events, with detail and context — best for explaining what happened in one case. Metrics are numeric measurements aggregated over time, such as request rate, error rate and latency percentiles — cheap to store and ideal for dashboards and alerts that tell you something is wrong. Traces follow one request through the components and services it touches as a tree of timed spans — best for finding where time is spent or which service failed. They are used together: a metric alerts you, a trace locates the problem, logs explain it.",
      followUps: ["Which would you use to find out that error rates rose after a deployment?"],
      source: { title: "OpenTelemetry — Signals", url: "https://opentelemetry.io/docs/concepts/signals/" },
    },
    {
      question: "How do you manage configuration and secrets across development, testing and production?",
      answer:
        "Keep one codebase and put everything that differs per environment in environment variables, read into a single typed settings object (for example pydantic-settings) that is validated at startup, so a missing or malformed value stops the app immediately with a clear message instead of failing on the first request. Give safe defaults only for harmless values; require secrets explicitly. Use an uncommitted .env file locally and the platform's secret store or a secrets manager in production. Make settings injectable (a FastAPI dependency) so tests can override them, and never print the settings object with its secrets.",
      followUps: ["Why is a configuration value read deep inside a function with os.environ harder to test?"],
      source: { title: "FastAPI — Settings and Environment Variables", url: "https://fastapi.tiangolo.com/advanced/settings/" },
    },
    {
      question: "How should you log an exception?",
      answer:
        "Log it once, where it is actually handled, with logger.exception (or exc_info=True), which records the traceback along with your message. Include the context needed to investigate — the operation, record ids and request id — but no secrets. Avoid logging and re-raising at every layer, which prints the same error several times and buries the cause. Errors that are expected and handled (a validation failure) usually deserve WARNING or INFO without a traceback, while the user-facing response stays generic (see Exceptions and Error Handling).",
      followUps: ["What goes wrong if you catch an exception, log only str(error) and continue?"],
      source: { title: "Python Docs — logging.Logger.exception", url: "https://docs.python.org/3/library/logging.html#logging.Logger.exception" },
    },
  ],
  mistakes: [
    "Using print for diagnostics in a service, or configuring logging inside library modules.",
    "Logging passwords, tokens, Authorization headers, connection strings or whole request bodies.",
    "Logging every exception at ERROR, or logging the same exception at every layer.",
    "Messages without context (\"error occurred\") or without identifiers to connect them.",
    "Building log messages with f-strings for expensive values at DEBUG level.",
    "Reading environment variables all over the code instead of in one validated settings object.",
    "Committing .env files or shipping development defaults for secrets to production.",
    "Writing log files inside the container instead of to standard output.",
  ],
  mastery: [
    "Your project loads all configuration through one validated settings object, fails fast on a missing required value, and has a test that overrides a setting.",
    "Every log line of a request carries its request id, each request produces one summary line, and unexpected exceptions are logged once with a traceback.",
    "You can show that no secrets or unnecessary personal data appear in your logs.",
    "Given only your service's logs, you can find the cause of a failing request.",
    "You can explain logging levels, structured logging, correlation ids and logs versus metrics versus traces without notes.",
    "Skip this topic if you can already do all of the above in any language or framework.",
  ],
  deprioritize: [
    "Operating log aggregation, metrics or tracing platforms, and building dashboards and alerts.",
    "OpenTelemetry instrumentation and distributed tracing setup.",
    "Log sampling, retention and compliance policies.",
    "Dynamic configuration services and feature-flag platforms.",
  ],
  keywords: [
    "logging",
    "log levels",
    "structured logging",
    "JSON logs",
    "correlation id",
    "request id",
    "X-Request-ID",
    "contextvars",
    "observability",
    "metrics",
    "traces",
    "OpenTelemetry",
    "configuration",
    "settings",
    "environment variables",
    "pydantic-settings",
    ".env",
    "secrets",
    "twelve-factor",
    "logger.exception",
  ],
};

export default topic;
