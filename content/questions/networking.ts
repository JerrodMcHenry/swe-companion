import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "The internet",
    question: "What happens when you enter a URL into a browser?",
    answer: "The browser parses the URL into scheme, domain and path. It resolves the domain to an IP address through DNS, checking caches first. It opens a TCP connection to that address on the port (443 for HTTPS) and performs a TLS handshake, which verifies the server's certificate and sets up encryption. It sends an HTTP request (for example GET /path with headers such as Host and cookies). The server, possibly behind load balancers, returns a response with a status code, headers and a body, often HTML. The browser parses the HTML, requests further resources (CSS, JavaScript, images) and renders the page. Caches and redirects can skip or add steps along the way; go deeper only where the interviewer asks.",
    followUps: ["Where could caching speed this up?","What changes if the URL starts with http instead of https?"],
    source: { title: "MDN — How browsers work: Navigation", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work" },
  },
  {
    group: "The internet",
    question: "What does DNS do?",
    answer: "DNS (the Domain Name System) translates names such as example.com into IP addresses. A resolver, usually provided by your network or a public DNS service, looks the name up, asking other DNS servers if needed, and caches the answer for the record's TTL. Misconfigured DNS or stale caches cause \"site not found\" errors and delays when a service moves.",
    code: `$ dig +short example.com          # or: nslookup example.com`,
    followUps: ["Why might a DNS change take time to be seen by all users?"],
    source: { title: "MDN — How the web works: DNS explained", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works" },
  },
  {
    group: "The internet",
    question: "What is the difference between TCP and UDP?",
    answer: "TCP provides a reliable, ordered byte stream: it establishes a connection, retransmits lost packets and controls congestion, at the cost of extra latency. UDP sends independent datagrams with no delivery or ordering guarantees but low overhead, which suits real-time media, games and most DNS queries. HTTP/1.1 and HTTP/2 run over TCP; HTTP/3 runs over QUIC, which is built on UDP and implements reliability itself.",
    followUps: ["What is the TCP three-way handshake, at a high level?"],
    source: { title: "MDN Glossary — UDP", url: "https://developer.mozilla.org/en-US/docs/Glossary/UDP" },
  },
  {
    group: "The internet",
    question: "What is HTTPS, and what does TLS protect?",
    answer: "HTTPS is HTTP over TLS. TLS encrypts traffic so others on the network cannot read it, detects tampering in transit, and authenticates the server with a certificate signed by a trusted certificate authority, so you know you reached the real site. It does not hide which server you contact (the IP address, and usually the domain name, stay visible), make the server trustworthy or protect data once it arrives; that is the application's job.",
    followUps: ["What would a browser warning about an invalid certificate mean?"],
    source: { title: "MDN — Transport Layer Security (TLS)", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security" },
  },
  {
    group: "HTTP",
    question: "Explain HTTP methods. What do safe and idempotent mean?",
    answer: "GET retrieves a resource, POST creates a resource or triggers processing, PUT replaces a resource, PATCH partially updates it and DELETE removes it. Safe methods (GET, HEAD, OPTIONS) do not change server state. Idempotent methods leave the same end state whether called once or several times: GET, PUT and DELETE are idempotent; POST and PATCH are not guaranteed to be. This matters when clients retry after a timeout.",
    followUps: ["Why would retrying a failed POST request be risky, and how can APIs make it safe?"],
    source: { title: "MDN Glossary — Idempotent", url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent" },
  },
  {
    group: "HTTP",
    question: "What do the main HTTP status code classes mean? Give examples.",
    answer: "1xx are informational. 2xx mean success: 200 OK, 201 Created, 204 No Content. 3xx are redirects: 301 permanent, 302 temporary, 304 Not Modified (use your cached copy). 4xx are client errors: 400 bad request, 401 not authenticated, 403 authenticated but not allowed, 404 not found, 409 conflict, 429 too many requests. 5xx are server errors: 500 internal error, 502 bad gateway, 503 service unavailable. 4xx versus 5xx tells you whether to fix the request or look at the server.",
    followUps: ["What is the difference between 401 and 403?"],
    source: { title: "MDN — HTTP response status codes", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status" },
  },
  {
    group: "HTTP",
    question: "What do REST and statelessness mean? How do cookies and sessions fit in?",
    answer: "REST is a style for HTTP APIs: resources identified by URLs (such as /orders/42), manipulated with standard methods, usually exchanging JSON. HTTP is stateless: each request carries everything the server needs, and the server does not remember previous requests. Cookies add state on top: the server sets a cookie (often a session ID), the browser sends it back with each request and the server looks up the session. Token-based APIs send credentials in a header instead.",
    followUps: ["What is CORS, and why does the browser enforce it?"],
    source: { title: "MDN — Overview of HTTP: HTTP is stateless, but not sessionless", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview" },
  },
];

export default questions;
