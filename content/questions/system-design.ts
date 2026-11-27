import type { Question } from "../types";

const SDP = "https://github.com/donnemartin/system-design-primer";

const questions: Question[] = [
  {
    group: "Approach",
    question: "How do you approach a system design question at entry level?",
    answer:
      "Work in four steps and talk through each. 1) Clarify use cases, users, rough scale and what is out of scope. 2) Sketch a high-level design: client, API service, database, and how one request flows through them. 3) Detail the core pieces: a few API endpoints and the main tables. 4) Scale and harden: what breaks first as usage grows, and the simplest fix. At entry level interviewers look for clear structure and sensible trade-offs, not distributed-systems depth; say what you would ask or measure when you are unsure.",
    followUps: ["Which numbers would you estimate first, and why?"],
    source: { title: "System Design Primer — How to approach a system design interview question", url: `${SDP}#how-to-approach-a-system-design-interview-question` },
  },
  {
    group: "Approach",
    question: "Walk me through designing a URL shortener.",
    answer:
      "Requirements: create a short link for a long URL, redirect on visit, maybe expiry and click counts; reads far outnumber writes. API: POST /links returns a short code; GET /{code} responds with a redirect (301 or 302). Data: a links table with the code as primary key, the long URL, created time and expiry. Code generation: a random or hashed code of about 7 base-62 characters, retrying on collision, or encoding an auto-increment id. Flow: the app servers look up the code and redirect. Scaling: the workload is read-heavy, so cache popular codes, add read replicas, and keep the app servers stateless behind a load balancer.",
    followUps: ["301 or 302: which affects your click analytics, and why?", "How do you avoid two users getting the same code?"],
    source: { title: "System Design Primer — Design Pastebin.com (or Bit.ly)", url: `${SDP}/blob/master/solutions/system_design/pastebin/README.md` },
  },
  {
    group: "Building blocks",
    question: "What does a load balancer do, and why should application servers be stateless?",
    answer:
      "A load balancer spreads incoming requests across several servers, stops sending traffic to unhealthy ones and removes a single point of failure. That only works cleanly if any server can handle any request, so servers should keep no user state in memory: store sessions in a shared database or cache instead. Stateless servers can then be added or removed freely.",
    followUps: ["What is the difference between layer 4 and layer 7 load balancing?"],
    source: { title: "System Design Primer — Load balancer", url: `${SDP}#load-balancer` },
  },
  {
    group: "Building blocks",
    question: "What is the difference between vertical and horizontal scaling?",
    answer:
      "Vertical scaling gives one machine more CPU, memory or disk: simple, but limited and still a single point of failure. Horizontal scaling adds more machines behind a load balancer: it scales further and improves availability, but needs stateless servers and adds operational complexity. Databases are harder to scale horizontally than application servers.",
    source: { title: "System Design Primer — Horizontal scaling", url: `${SDP}#horizontal-scaling` },
  },
  {
    group: "Building blocks",
    question: "What is caching, where can you cache, and how do you keep a cache up to date?",
    answer:
      "A cache keeps frequently read data in fast storage, usually memory, to cut latency and database load. You can cache in the browser, a CDN, the web server, the application (for example Redis) or the database. The common pattern is cache-aside: read from the cache, and on a miss read the database and store the result with an expiry (TTL). The hard part is staleness: on writes, update or delete the cached entry, and accept that data can be briefly out of date.",
    followUps: ["What would you cache in a news feed, and what would you never cache?", "What happens when a popular cache entry expires and many requests miss at once?"],
    source: { title: "System Design Primer — Cache", url: `${SDP}#cache` },
  },
  {
    group: "Building blocks",
    question: "What is a CDN, and when does it help?",
    answer:
      "A content delivery network is a set of servers around the world that serve static files (images, scripts, video) from a location close to the user. It reduces latency and takes load off your servers. It helps most for static, widely shared content; personalized or frequently changing data still comes from your servers.",
    source: { title: "System Design Primer — Content delivery network", url: `${SDP}#content-delivery-network` },
  },
  {
    group: "Building blocks",
    question: "When would you use a message queue or a background job?",
    answer:
      "When work does not need to finish before you reply: sending email, resizing images, generating reports. The request handler puts a job on a queue and returns quickly; workers process jobs separately, retry failures and can be scaled on their own. The cost is more moving parts and eventual completion, so the user may need to see a status such as \"processing\".",
    followUps: ["Why should a job be safe to run twice?"],
    source: { title: "System Design Primer — Asynchronism: message queues and task queues", url: `${SDP}#asynchronism` },
  },
  {
    group: "Scaling & reliability",
    question: "How would you scale a database as traffic grows?",
    answer:
      "In order of simplicity: fix slow queries and add the right indexes; cache hot reads; add read replicas so reads spread across copies while one primary takes writes; and only then consider partitioning (sharding) data across databases, which complicates joins, transactions and operations. Say which step you would take first and what you would measure to decide.",
    followUps: ["What problem does replication lag cause, and how would a user notice it?"],
    source: { title: "System Design Primer — Database (replication, sharding, SQL tuning)", url: `${SDP}#database` },
  },
  {
    group: "Scaling & reliability",
    question: "What is the difference between latency and throughput?",
    answer:
      "Latency is how long one operation takes; throughput is how many operations complete per unit of time. You usually aim for the highest throughput with acceptable latency. A related distinction: a system has a performance problem if it is slow for one user, and a scalability problem if it is fast for one user but slow under heavy load.",
    source: { title: "System Design Primer — Latency vs throughput", url: `${SDP}#latency-vs-throughput` },
  },
  {
    group: "Scaling & reliability",
    question: "What does the CAP theorem say?",
    answer:
      "A distributed data store can guarantee only two of consistency (every read sees the latest write), availability (every request gets a response) and partition tolerance. Network partitions do happen, so in practice the choice is between consistency and availability while a partition lasts: a bank balance favours consistency; a social feed can favour availability. At entry level, explaining that trade-off with an example is enough.",
    source: { title: "System Design Primer — CAP theorem", url: `${SDP}#cap-theorem` },
  },
  {
    group: "Scaling & reliability",
    question: "Would you start a new product with microservices?",
    answer:
      "Usually not. A single, well-structured application (a monolith) is simpler to build, test, deploy and debug while the product and team are small. Microservices add network calls, failure modes, deployment and monitoring work; they pay off when separate parts need to scale or be released independently by different teams. A good answer names the trigger that would make you split a service out.",
    source: { title: "Martin Fowler — MonolithFirst", url: "https://martinfowler.com/bliki/MonolithFirst.html" },
  },
];

export default questions;
