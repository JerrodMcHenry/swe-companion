import type { Topic } from "../types";

const topic: Topic = {
  slug: "internet-http",
  title: "How the Internet and HTTP Work",
  category: "Engineering Fundamentals",
  phase: "engineering-fundamentals",
  overview:
    "Most software talks to other software over the internet using HTTP. This topic explains the path of a request — DNS, IP addresses, ports, TCP and TLS — and the structure of HTTP itself: methods, status codes, headers, JSON bodies, cookies, caching and CORS, plus what REST and statelessness mean. The goal is to explain these clearly and to inspect real requests with curl and browser developer tools; building APIs comes in Backend Engineering.",
  whyItMatters:
    "\"What happens when you type a URL into a browser?\" is a commonly recommended interview question, and Amazon's official interview topics include how the internet works. On the job, nearly every bug report involving a web app or API requires reading requests, responses and status codes. Backend and full-stack roles depend on this heavily; general roles need it at an explanation level.",
  prerequisites: ["Command Line and Development Environment (running curl)", "Dictionaries (for JSON)"],
  objectives: [
    "Explain the client–server model, IP addresses, ports and domain names.",
    "Explain DNS resolution at a high level and the role of caching.",
    "Compare TCP and UDP, and explain why HTTP traditionally runs over TCP.",
    "Explain HTTPS and what TLS provides: encryption, integrity and server authentication via certificates.",
    "Describe an HTTP request (method, path, headers, body) and response (status code, headers, body).",
    "Use methods correctly (GET, POST, PUT, PATCH, DELETE) and explain safe and idempotent methods.",
    "Interpret common status codes: 200, 201, 204, 301/302, 304, 400, 401, 403, 404, 409, 429, 500, 502, 503.",
    "Explain JSON, REST and statelessness, and how cookies and sessions add state.",
    "Explain HTTP caching headers and CORS at a basic level.",
    "Inspect requests with curl and the browser's Network tab.",
  ],
  depth: "Explain: Accurately explain behavior, purpose and common uses.",
  resources: [
    {
      title: "MDN — Overview of HTTP",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions: "Written, primary. Read the whole overview: clients and servers, requests and responses, statelessness, cookies and HTTP flow. About 30 minutes.",
    },
    {
      title: "MDN — HTTP response status codes and HTTP request methods",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions: "Reference. Learn the codes listed in this topic's objectives; look up others when you meet them. The request methods reference is linked from the same section.",
    },
    {
      title: "MDN — How the web works",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works",
      provider: "MDN Web Docs",
      type: "Article",
      instructions: "Short beginner explanation of DNS, TCP/IP and what happens when a page loads. Use it before the HTTP overview if networking is new to you.",
    },
    {
      title: "MDN — Cross-Origin Resource Sharing (CORS) and HTTP caching",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions: "Optional reference. Read the CORS introduction and simple-request sections, and the caching guide's introduction; skip the detailed header tables.",
    },
  ],
  exercises: [
    {
      title: "Use curl -i (and curl -v) to fetch a public page and a public JSON API; identify the status code, three response headers and the content type.",
      note: "Practical.",
    },
    {
      title: "Open your browser's developer tools, Network tab, and load a website. Find one request each with status 200, 304 (or a cached response) and a redirect, and explain what happened.",
      note: "Practical.",
    },
    {
      title: "Explain aloud, in about two minutes, what happens when you enter a URL into a browser, then compare with this topic's model answer.",
      note: "Interview practice.",
    },
    {
      title: "For five API operations (list orders, create an order, update one field, replace a record, delete), choose the method and success status code, and say which are idempotent.",
      note: "Reinforcement.",
    },
  ],
  interviewQuestions: [
    {
      question: "What happens when you enter a URL into a browser?",
      answer:
        "The browser parses the URL into a scheme, domain and path. It resolves the domain to an IP address through DNS, checking caches first. It opens a TCP connection to that address on the port (443 for HTTPS) and performs a TLS handshake, which verifies the server's certificate and sets up encryption. It sends an HTTP request (for example GET /path with headers such as Host and cookies). The server, possibly behind load balancers, processes it and returns a response with a status code, headers and a body, often HTML. The browser parses the HTML, requests further resources (CSS, JavaScript, images), and renders the page. Mention caching and redirects; go deeper only where the interviewer asks.",
      code: `from urllib.parse import urlparse

parts = urlparse("https://shop.example.com:443/orders?id=42")
print(parts.scheme, parts.hostname, parts.port, parts.path, parts.query)
# -> https shop.example.com 443 /orders id=42`,
      followUps: ["Where could caching speed this up?", "What changes if the URL starts with http instead of https?"],
    },
    {
      question: "What does DNS do?",
      answer:
        "DNS (the Domain Name System) translates human-readable names such as example.com into IP addresses. A resolver, usually provided by your network or a public DNS service, looks the name up, asking other DNS servers if needed, and caches answers for a time set by the record's TTL. Misconfigured DNS or stale caches cause \"site not found\" errors and slow changes when a service moves.",
      code: `$ dig +short example.com          # or: nslookup example.com
$ curl -I https://example.com     # once resolved, the request goes to that IP`,
      followUps: ["Why might a DNS change take time to be seen by all users?"],
    },
    {
      question: "What is the difference between TCP and UDP?",
      answer:
        "TCP provides a reliable, ordered byte stream: it establishes a connection, retransmits lost packets and controls congestion, at the cost of extra latency. UDP sends independent datagrams with no delivery or ordering guarantees but low overhead, which suits real-time media, games and DNS queries where speed matters more than every packet. HTTP/1.1 and HTTP/2 run over TCP; HTTP/3 runs over QUIC, which is built on UDP and implements reliability itself.",
      code: `protocols = {"web page (HTTP/1.1, HTTP/2)": "TCP", "video call": "UDP", "DNS lookup": "usually UDP"}
for use, transport in protocols.items():
    print(f"{use}: {transport}")
# -> web page (HTTP/1.1, HTTP/2): TCP
# -> video call: UDP
# -> DNS lookup: usually UDP`,
      followUps: ["What is the TCP three-way handshake, at a high level?"],
    },
    {
      question: "What is HTTPS, and what does TLS protect?",
      answer:
        "HTTPS is HTTP over TLS. TLS encrypts traffic so others on the network cannot read it, protects it from being modified in transit, and authenticates the server using a certificate signed by a trusted certificate authority, so you know you reached the real site. It does not make the server itself trustworthy or protect data once it arrives; that is the application's job.",
      code: `$ curl -v https://example.com 2>&1 | grep -i "SSL connection\\|subject:\\|issuer:"`,
      followUps: ["What would a browser warning about an invalid certificate mean?"],
    },
    {
      question: "Explain HTTP methods. What do safe and idempotent mean?",
      answer:
        "GET retrieves a resource, POST creates a resource or triggers processing, PUT replaces a resource, PATCH partially updates it and DELETE removes it. Safe methods (GET, HEAD, OPTIONS) do not change server state. Idempotent methods produce the same end state whether called once or several times: GET, PUT and DELETE are idempotent, while POST generally is not, which matters when clients retry after a timeout.",
      code: `methods = {"GET": (True, True), "POST": (False, False), "PUT": (False, True),
           "PATCH": (False, False), "DELETE": (False, True)}
for name, (safe, idempotent) in methods.items():
    print(name, "safe" if safe else "-", "idempotent" if idempotent else "-")
# -> GET safe idempotent
# -> POST - -
# -> PUT - idempotent
# -> PATCH - -
# -> DELETE - idempotent`,
      followUps: ["Why would retrying a failed POST request be risky, and how can APIs make it safe?"],
    },
    {
      question: "What do the main HTTP status code classes mean? Give examples.",
      answer:
        "1xx are informational. 2xx mean success: 200 OK, 201 Created, 204 No Content. 3xx are redirects: 301 permanent, 302 temporary, 304 Not Modified (use your cached copy). 4xx are client errors: 400 bad request, 401 not authenticated, 403 authenticated but not allowed, 404 not found, 409 conflict, 429 too many requests. 5xx are server errors: 500 internal error, 502 bad gateway, 503 service unavailable. The distinction between 4xx and 5xx tells you whether to fix the request or look at the server.",
      code: `def category(code):
    return {1: "informational", 2: "success", 3: "redirect", 4: "client error", 5: "server error"}[code // 100]

print([(c, category(c)) for c in (201, 304, 401, 403, 503)])
# -> [(201, 'success'), (304, 'redirect'), (401, 'client error'), (403, 'client error'), (503, 'server error')]`,
      followUps: ["What is the difference between 401 and 403?"],
    },
    {
      question: "What do REST and statelessness mean? How do cookies and sessions fit in?",
      answer:
        "REST is a style for HTTP APIs: resources identified by URLs (such as /orders/42), manipulated with standard methods, usually exchanging JSON. HTTP is stateless: each request carries everything the server needs, and the server does not remember previous requests. Cookies add state on top: the server sets a cookie (often a session ID), the browser sends it back with each request, and the server looks up the session. Token-based APIs send credentials in a header instead.",
      code: `import json

response_body = '{"id": 42, "status": "shipped", "items": 3}'
order = json.loads(response_body)              # parse JSON from a response
print(order["status"], json.dumps({"status": "cancelled"}))   # -> shipped {"status": "cancelled"}`,
      followUps: ["What is CORS, and why does the browser enforce it?"],
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
