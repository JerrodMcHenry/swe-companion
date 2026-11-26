import type { Topic } from "../types";

const topic: Topic = {
  slug: "internet-http",
  title: "How the Internet and HTTP Work",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Most software talks to other software over HTTP: a request travels through DNS, TCP and TLS to a server, which returns a status code, headers and a body. You need to explain this path clearly and inspect real requests with curl and browser developer tools; building APIs comes in Backend Engineering.",
  whyItMatters:
    "\"What happens when you type a URL into a browser?\" is a commonly recommended interview question, and Amazon's official interview topics include how the internet works. On the job, nearly every bug report involving a web app or API requires reading requests, responses and status codes. Backend and full-stack roles depend on this heavily; general roles need it at an explanation level.",
  prerequisites: ["Command Line and Development Environment (running curl)", "Dictionaries (for JSON)"],
  objectives: [
    "Client–server model, IP addresses, ports and domain names.",
    "DNS resolution at a high level, including caching and TTLs.",
    "TCP (reliable, ordered, connection-based) versus UDP (datagrams, no guarantees); HTTP/1.1 and HTTP/2 use TCP, HTTP/3 uses QUIC over UDP.",
    "HTTPS = HTTP over TLS: encryption, integrity and server authentication by certificate; it does not hide which server you contact.",
    "Request (method, path, headers, body) and response (status code, headers, body).",
    "Methods GET, POST, PUT, PATCH, DELETE; safe versus idempotent (GET, PUT and DELETE are idempotent; POST and PATCH are not guaranteed to be).",
    "Status codes: 200, 201, 204, 301/302, 304, 400, 401, 403, 404, 409, 429, 500, 502, 503 — and 401 (not authenticated) versus 403 (not allowed).",
    "JSON, REST and statelessness; how cookies and sessions add state.",
    "Caching headers (Cache-Control, ETag, 304) and CORS at a basic level: CORS is enforced by browsers.",
    "Inspecting requests with curl -i / -v and the browser's Network panel.",
    "Skip for now: the OSI model in detail, routing and subnetting, TCP congestion control and HTTP/2–3 internals.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "MDN — How the web works",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
      provider: "MDN Web Docs",
      type: "Article",
      instructions:
        "Start here if networking is new to you: a short beginner explanation of clients and servers, DNS, packets, HTTP basics and the parts of a URL. About 15 minutes. Free; no account.",
    },
    {
      title: "MDN — Overview of HTTP",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions:
        "Core reading. Read the whole overview: components of HTTP-based systems, basic aspects (stateless but not sessionless), HTTP flow, and the request and response message structure. About 30 minutes.",
    },
    {
      title: "MDN — How browsers work: Navigation (DNS lookup, TCP handshake, TLS negotiation, Response)",
      url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work",
      provider: "MDN Web Docs",
      type: "Article",
      instructions:
        "The model for the \"what happens when you enter a URL\" answer. Read Navigation through Response, then skim Parsing and Render for the last step. Skip congestion control and the rendering details (preload scanner, compositing).",
    },
    {
      title: "MDN — HTTP response status codes and HTTP request methods",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions: "Reference. Learn the codes in this topic's checklist; look others up when you meet them. The request methods reference is linked from the same section.",
    },
    {
      title: "MDN — Cross-Origin Resource Sharing (CORS) and HTTP caching",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions:
        "Optional reference. Read the CORS introduction, Functional overview and Simple requests; then the HTTP caching guide (linked from MDN's HTTP guides) up to Validation (ETag and 304). Skip the header-by-header tables.",
    },
  ],
  exercises: [
    {
      title: "Use curl -i (and curl -v) to fetch a public page and a public JSON API; identify the status code, three response headers and the content type.",
      note: "Reading real responses from the terminal. With -v, also find the DNS-resolved IP address, the TLS handshake and the request headers curl sent.",
    },
    {
      title: "Chrome DevTools — Inspect network activity",
      url: "https://developer.chrome.com/docs/devtools/network",
      note: "Free official tutorial with its own demo page; no account (Chrome or another Chromium browser). Do Log network activity, Show more information and Inspect a resource's details. Then, on any website, find one 200, one 304 or cached response and one redirect, and explain each.",
    },
    {
      title: "Explain aloud, in about two minutes, what happens when you enter a URL into a browser, then compare with this topic's model answer.",
      note: "Interview practice; record yourself and check that you can go one level deeper on any step.",
    },
  ],
  interviewQuestions: [
    {
      question: "What happens when you enter a URL into a browser?",
      answer:
        "The browser parses the URL into scheme, domain and path. It resolves the domain to an IP address through DNS, checking caches first. It opens a TCP connection to that address on the port (443 for HTTPS) and performs a TLS handshake, which verifies the server's certificate and sets up encryption. It sends an HTTP request (for example GET /path with headers such as Host and cookies). The server, possibly behind load balancers, returns a response with a status code, headers and a body, often HTML. The browser parses the HTML, requests further resources (CSS, JavaScript, images) and renders the page. Caches and redirects can skip or add steps along the way; go deeper only where the interviewer asks.",
      followUps: ["Where could caching speed this up?", "What changes if the URL starts with http instead of https?"],
      source: { title: "MDN — How browsers work: Navigation", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work" },
    },
    {
      question: "What does DNS do?",
      answer:
        "DNS (the Domain Name System) translates names such as example.com into IP addresses. A resolver, usually provided by your network or a public DNS service, looks the name up, asking other DNS servers if needed, and caches the answer for the record's TTL. Misconfigured DNS or stale caches cause \"site not found\" errors and delays when a service moves.",
      code: `$ dig +short example.com          # or: nslookup example.com`,
      followUps: ["Why might a DNS change take time to be seen by all users?"],
      source: { title: "MDN — How the web works: DNS explained", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" },
    },
    {
      question: "What is the difference between TCP and UDP?",
      answer:
        "TCP provides a reliable, ordered byte stream: it establishes a connection, retransmits lost packets and controls congestion, at the cost of extra latency. UDP sends independent datagrams with no delivery or ordering guarantees but low overhead, which suits real-time media, games and most DNS queries. HTTP/1.1 and HTTP/2 run over TCP; HTTP/3 runs over QUIC, which is built on UDP and implements reliability itself.",
      followUps: ["What is the TCP three-way handshake, at a high level?"],
      source: { title: "MDN Glossary — UDP", url: "https://developer.mozilla.org/en-US/docs/Glossary/UDP" },
    },
    {
      question: "What is HTTPS, and what does TLS protect?",
      answer:
        "HTTPS is HTTP over TLS. TLS encrypts traffic so others on the network cannot read it, detects tampering in transit, and authenticates the server with a certificate signed by a trusted certificate authority, so you know you reached the real site. It does not hide which server you contact (the IP address, and usually the domain name, stay visible), make the server trustworthy or protect data once it arrives; that is the application's job.",
      followUps: ["What would a browser warning about an invalid certificate mean?"],
      source: { title: "MDN — Transport Layer Security (TLS)", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security" },
    },
    {
      question: "Explain HTTP methods. What do safe and idempotent mean?",
      answer:
        "GET retrieves a resource, POST creates a resource or triggers processing, PUT replaces a resource, PATCH partially updates it and DELETE removes it. Safe methods (GET, HEAD, OPTIONS) do not change server state. Idempotent methods leave the same end state whether called once or several times: GET, PUT and DELETE are idempotent; POST and PATCH are not guaranteed to be. This matters when clients retry after a timeout.",
      followUps: ["Why would retrying a failed POST request be risky, and how can APIs make it safe?"],
      source: { title: "MDN Glossary — Idempotent", url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent" },
    },
    {
      question: "What do the main HTTP status code classes mean? Give examples.",
      answer:
        "1xx are informational. 2xx mean success: 200 OK, 201 Created, 204 No Content. 3xx are redirects: 301 permanent, 302 temporary, 304 Not Modified (use your cached copy). 4xx are client errors: 400 bad request, 401 not authenticated, 403 authenticated but not allowed, 404 not found, 409 conflict, 429 too many requests. 5xx are server errors: 500 internal error, 502 bad gateway, 503 service unavailable. 4xx versus 5xx tells you whether to fix the request or look at the server.",
      followUps: ["What is the difference between 401 and 403?"],
      source: { title: "MDN — HTTP response status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status" },
    },
    {
      question: "What do REST and statelessness mean? How do cookies and sessions fit in?",
      answer:
        "REST is a style for HTTP APIs: resources identified by URLs (such as /orders/42), manipulated with standard methods, usually exchanging JSON. HTTP is stateless: each request carries everything the server needs, and the server does not remember previous requests. Cookies add state on top: the server sets a cookie (often a session ID), the browser sends it back with each request and the server looks up the session. Token-based APIs send credentials in a header instead.",
      followUps: ["What is CORS, and why does the browser enforce it?"],
      source: { title: "MDN — Overview of HTTP: HTTP is stateless, but not sessionless", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview" },
    },
  ],
  mistakes: [
    "Confusing 401 (not authenticated) with 403 (not authorized).",
    "Using GET for operations that change data.",
    "Believing HTTPS hides which site you visit or protects data after it reaches the server.",
    "Treating CORS as a server security feature against all clients; it is enforced by browsers.",
    "Memorizing a long URL-to-page script instead of understanding each step well enough to answer follow-ups.",
    "Ignoring caching when debugging \"my change doesn't show up\".",
  ],
  mastery: [
    "You can explain what happens when a URL is entered, step by step, and go one level deeper on any step when asked.",
    "You can read a request and response with curl or developer tools and explain the status code and key headers.",
    "You can choose methods and status codes for simple API operations and explain idempotency.",
    "You can explain DNS, TCP versus UDP, TLS, REST, statelessness, cookies, caching and CORS in a few sentences each.",
    "Skip this topic if you can already do all of the above.",
  ],
  deprioritize: [
    "Packet-level networking, the OSI model in detail, routing protocols and subnetting.",
    "TCP congestion control and HTTP/2 or HTTP/3 internals beyond awareness.",
    "Implementing HTTP APIs and authentication (covered in Backend Engineering).",
  ],
  keywords: [
    "HTTP",
    "HTTPS",
    "TLS",
    "DNS",
    "IP address",
    "port",
    "TCP",
    "UDP",
    "status codes",
    "HTTP methods",
    "REST",
    "JSON",
    "headers",
    "cookies",
    "sessions",
    "CORS",
    "caching",
    "what happens when you type a URL",
    "curl",
  ],
};

export default topic;
