import type { Topic } from "../types";

const topic: Topic = {
  slug: "browser-dom-fundamentals",
  title: "Browser and DOM Fundamentals",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "How the browser turns HTML, CSS and JavaScript into an interactive page: the DOM tree and how scripts read and change it, events and their propagation, browser storage and cookies, the same-origin policy and CORS, and the rendering steps. Includes the developer tools you use to inspect and debug all of it. React does DOM updates for you, but its behavior and bugs only make sense with this model.",
  whyItMatters:
    "Every frontend feature runs in the browser, and the browser is where its bugs appear. One candidate report describes debugging in an existing React and TypeScript codebase (Notion, new grad), and another an online assessment task editing HTML, CSS and JavaScript (Accenture India); both rely on reading the DOM, events, network requests and console errors in developer tools. JavaScript was named in 16 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample. At work, \"the button does nothing\", \"the request fails with a CORS error\" and \"the page is blank\" are routine tickets that start in the Elements, Console and Network panels.",
  prerequisites: [
    "JavaScript Fundamentals",
    "HTML and CSS Fundamentals",
    "How the Internet and HTTP Work (requests, responses, cookies basics and the navigation part of loading a page — not repeated here)",
  ],
  objectives: [
    "The DOM: the tree of node objects the browser builds from HTML; it can differ from the HTML source because the browser corrects markup and scripts change it.",
    "Select and update elements: querySelector and querySelectorAll with CSS selectors, textContent (safe) versus innerHTML (parses HTML — an XSS risk with user data, see Security Fundamentals), classList, attributes, and creating, appending and removing elements.",
    "Events: addEventListener and removeEventListener, the event object, event.target versus event.currentTarget, common events (click, input, change, submit, keydown).",
    "Propagation: the capture phase down the tree, the target, then bubbling back up; stopPropagation; event delegation — one listener on a parent that handles events from its children, including children added later.",
    "Default actions: event.preventDefault() for a form submit or link click; it is different from stopping propagation.",
    "Developer tools: Elements (inspect and edit the DOM and styles, see event listeners), Console (errors, logging, running code), Network (status, headers, payload, response, timing, the preflight OPTIONS request) and Sources (breakpoints, stepping, inspecting variables).",
    "fetch and JSON at a basic level: fetch returns a promise of a Response; response.json() parses the body; JSON.stringify and JSON.parse. Error handling and UI states belong to Forms, API Integration and UI States.",
    "Browser storage: localStorage (persists) and sessionStorage (per tab), synchronous and string-only (store JSON with JSON.stringify), readable by any script on the page — never store secrets there.",
    "Cookies at a basic level: sent automatically with matching requests; HttpOnly (not readable by JavaScript), Secure (HTTPS only) and SameSite (limits cross-site sending). Token storage and CSRF belong to Authentication and Authorization and Security Fundamentals.",
    "Same-origin policy and CORS: an origin is scheme + host + port; the browser stops a page from reading responses from another origin unless the server allows it with Access-Control-Allow-Origin; non-simple requests (for example with Content-Type: application/json or an Authorization header) are preceded by an OPTIONS preflight. CORS is enforced by browsers, so curl and server-to-server calls are unaffected.",
    "Rendering at a conceptual level: parse HTML into the DOM and CSS into the CSSOM, combine them, then style, layout (reflow) and paint; a classic <script> blocks HTML parsing, so use defer (or type=\"module\") or place scripts at the end of the body; changing layout properties triggers reflow.",
    "Skip for now: rendering-engine internals (preload scanner, compositing, the GPU), performance profiling and Core Web Vitals tuning, Shadow DOM and web components, service workers, IndexedDB, WebSockets and the Performance and Memory panels.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "MDN Learn web development — Dynamic scripting with JavaScript (selected articles)",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting",
      provider: "MDN Web Docs",
      type: "Course",
      instructions:
        "Start here. Read these articles of the module and try every example in your browser: DOM scripting introduction, Introduction to events, Event bubbling (including Event capture, Event delegation and target and currentTarget), Making network requests with JavaScript (the Fetch API sections; skip XMLHttpRequest), Working with JSON, and JavaScript debugging and error handling. Then do Test your skills: Events. Skip the module's earlier language articles — JavaScript Fundamentals covers them. Free; no account.",
    },
    {
      title: "The Modern JavaScript Tutorial — Part 2: Browser: Document, Events, Interfaces (selected chapters)",
      url: "https://javascript.info/document",
      provider: "javascript.info (Ilya Kantor)",
      type: "Book",
      instructions:
        "Alternative to MDN with more depth and tasks: Document: DOM tree, Searching: getElement*, querySelector*, Node properties: type, tag and contents, Modifying the document, Styles and classes. Introduction to Events: Introduction to browser events, Bubbling and capturing, Event delegation, Browser default actions. Then Forms: event and method submit; Scripts: async, defer; LocalStorage, sessionStorage; Cookies, document.cookie (skim); Fetch; and Fetch: Cross-Origin Requests. Use it instead of the MDN articles, not in addition. Free; no account.",
    },
    {
      title: "MDN — Same-origin policy and Cross-Origin Resource Sharing (CORS)",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions:
        "Read the CORS guide's introduction, What requests use CORS?, Functional overview, and the Simple requests, Preflighted requests and Requests with credentials examples; skip the header-by-header reference. Then read Definition of an origin and Cross-origin network access in the Same-origin policy article (linked from the guide). Free; no account.",
    },
    {
      title: "MDN — How browsers load websites, and Populating the page: how browsers work (Parsing and Render)",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites",
      provider: "MDN Web Docs",
      type: "Article",
      instructions:
        "The rendering model in two steps: read How browsers load websites (short and beginner-level), then the Parsing (Building the DOM tree, Building the CSSOM tree) and Render (Style, Layout, Paint) sections of Populating the page: how browsers work. Skip the preload scanner and compositing; the navigation part of the second article is covered in How the Internet and HTTP Work. Free; no account.",
    },
    {
      title: "Chrome DevTools documentation — DOM, Console, Network and Debug JavaScript",
      url: "https://developer.chrome.com/docs/devtools/network",
      provider: "Chrome for Developers",
      type: "Documentation",
      instructions:
        "Reference and hands-on tutorials with demo pages: Inspect network activity (Log network activity, Show more information, Inspect a resource's details, Filter resources), Get started with viewing and changing the DOM, Console overview, and Debug JavaScript (breakpoints, stepping and checking variable values). Other browsers' developer tools work the same way. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "MDN challenge: Image gallery",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Image_gallery",
      note: "Add elements to the DOM from data, handle click events and update the page. The page links its starting code. Free; no account.",
    },
    {
      title: "MDN challenge: Building a house data UI",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/House_data_UI",
      note: "Fetch JSON, build a form from it and render filtered results into the DOM. The page links its starting code. Free; no account.",
    },
    {
      title: "javascript.info tasks in Bubbling and capturing, Event delegation and Browser default actions",
      url: "https://javascript.info/event-delegation",
      note: "Short tasks with runnable sandboxes and solutions, such as hiding messages and building a tree menu with a single delegated listener. Free; no account.",
    },
    {
      title: "The Odin Project — DOM Manipulation and Events, then Project: Etch-a-Sketch",
      url: "https://www.theodinproject.com/lessons/foundations-etch-a-sketch",
      note: "Create a grid of elements with JavaScript and change them on mouse events, without a framework. Free; you build it locally.",
    },
    {
      title: "Chrome DevTools: Debug JavaScript tutorial",
      url: "https://developer.chrome.com/docs/devtools/javascript",
      note: "Fix a bug in the provided demo page with breakpoints, stepping and the Scope pane instead of console.log. Free; no account.",
    },
    {
      title: "Apply to your full-stack project: trace one user action end to end",
      note: "In the Network panel, find the request your frontend sends when a user submits a form: read its method, status, request and response headers and payload; if your frontend and API run on different origins, find the OPTIONS preflight and the Access-Control-Allow-Origin header. Then set an event listener breakpoint for submit (Sources panel) and step through your handler. Explain each step aloud.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the DOM, and how is it different from the HTML source?",
      answer:
        "The Document Object Model is the tree of objects the browser builds from the HTML — elements, text and attributes as nodes — together with the API JavaScript uses to read and change it. The HTML file is just the starting text: the browser fixes invalid markup (for example adding a missing tbody) and scripts add, remove and change nodes, so the Elements panel shows the current DOM, not the source. Changing the DOM is what updates the page; React computes the changes and applies them to the DOM for you.",
      followUps: ["Why is setting innerHTML with user input dangerous?"],
      source: { title: "MDN — DOM scripting introduction", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting" },
    },
    {
      question: "Explain event bubbling and capturing. What is the difference between event.target and event.currentTarget?",
      answer:
        "When an event happens on an element, it travels in three phases: capturing, from the window down through the ancestors to the element; the target phase; then bubbling, back up through each ancestor. addEventListener listens during bubbling by default ({ capture: true } listens during capture). So a click on a button inside a list also triggers click listeners on the list and the body. event.target is the element where the event started — the button; event.currentTarget is the element whose listener is running — the list. stopPropagation() stops the event from travelling further; use it sparingly because it hides events from other code.",
      followUps: ["Do all events bubble?"],
      source: { title: "MDN — Event bubbling", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling" },
    },
    {
      question: "What is event delegation, and why use it?",
      answer:
        "Attaching one listener to a common parent instead of one to every child, and using event.target (often with closest()) to find which child was involved. It works because events bubble. It needs fewer listeners, and it automatically handles children added later, such as new list items. Check that the target is something you care about, because clicks on other parts of the parent arrive too.",
      code: `document.querySelector("#todo-list").addEventListener("click", (event) => {
  const button = event.target.closest("button.delete");
  if (!button) return;                 // the click was not on a delete button
  button.closest("li").remove();
});`,
      followUps: ["Why use closest() instead of checking event.target directly?"],
      source: { title: "The Modern JavaScript Tutorial — Event delegation", url: "https://javascript.info/event-delegation" },
    },
    {
      question: "What is the difference between preventDefault() and stopPropagation()?",
      answer:
        "preventDefault() cancels the browser's default action for the event — submitting a form and reloading the page, following a link, typing a character — but the event still propagates to other listeners. stopPropagation() stops the event from reaching listeners on other elements but does not cancel the default action. Handling a form in JavaScript or React needs preventDefault() in the submit handler; it rarely needs stopPropagation().",
      followUps: ["Why listen for submit on the form rather than click on the button?"],
      source: { title: "MDN — Introduction to events: Preventing default behavior", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events" },
    },
    {
      question: "Compare localStorage, sessionStorage and cookies.",
      answer:
        "localStorage keeps string key-value data for the origin until it is cleared; sessionStorage is the same but per tab and cleared when the tab closes. Both are synchronous, hold only strings (store objects with JSON.stringify), are never sent to the server automatically and are readable by any JavaScript on the page — so an XSS bug exposes them, and secrets do not belong there. Cookies are small values the browser sends automatically with every matching request, which is why servers use them for sessions; HttpOnly hides a cookie from JavaScript, Secure restricts it to HTTPS and SameSite limits sending it on cross-site requests. Where to keep an authentication token is a trade-off covered in Authentication and Authorization.",
      followUps: ["What would you store in localStorage in a real app?", "Why can't JavaScript read an HttpOnly cookie, and why is that useful?"],
      source: { title: "MDN — Web Storage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
    },
    {
      question: "What is the same-origin policy? What counts as the same origin?",
      answer:
        "An origin is the combination of scheme, host and port: https://app.example.com and https://app.example.com:443/settings are the same origin, while http:// instead of https://, api.example.com instead of app.example.com, or localhost:5173 versus localhost:8000 are different origins. The same-origin policy is a browser rule that stops a page's scripts from reading responses or data from another origin, so a malicious site cannot read your email or bank data using your logged-in cookies. Cross-origin embedding (images, scripts, form submissions) is generally allowed; reading the response is what is restricted, and CORS is how a server opts in to allowing it.",
      followUps: ["Why is a frontend on localhost:5173 calling an API on localhost:8000 cross-origin?"],
      source: { title: "MDN — Same-origin policy", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy" },
    },
    {
      question: "What is a CORS preflight request, and when does the browser send one?",
      answer:
        "Before a cross-origin request that is not \"simple\", the browser automatically sends an OPTIONS request with Origin, Access-Control-Request-Method and Access-Control-Request-Headers, asking whether the real request is allowed. Simple requests are GET, HEAD or POST with only safelisted headers and a form or plain-text content type; so a JSON POST (Content-Type: application/json), a PUT or DELETE, or any request with an Authorization header is preflighted. The server must answer with matching Access-Control-Allow-Origin, -Methods and -Headers (and may cache the answer with Access-Control-Max-Age), otherwise the browser never sends the real request. curl and server-to-server calls do not do this, because CORS is enforced by browsers. Fixing a CORS error in your own app is covered in Forms, API Integration and UI States.",
      followUps: ["Why does a wildcard Access-Control-Allow-Origin not work with credentials?", "Where would you see the preflight in developer tools?"],
      source: { title: "MDN — Cross-Origin Resource Sharing (CORS): Preflighted requests", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS" },
    },
    {
      question: "How does the browser render a page? Why can a script tag slow it down?",
      answer:
        "The browser parses HTML into the DOM and CSS into the CSSOM, combines them to compute each visible element's styles, calculates layout (sizes and positions — reflow) and paints pixels. A classic <script> in the head stops HTML parsing until it has downloaded and run, so the page appears later; defer downloads in parallel and runs after parsing, in order, and async runs as soon as it downloads, in any order. Module scripts are deferred by default. Later, changing anything that affects geometry (adding elements, changing width) triggers layout again, so many small layout changes in a loop are slow; changing only colors needs just a repaint.",
      followUps: ["What is the difference between defer and async?", "Why does CSS block rendering?"],
      source: { title: "MDN — Populating the page: how browsers work", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work" },
    },
    {
      question: "A user reports that clicking a button does nothing. How would you debug it in the browser?",
      answer:
        "Reproduce it with developer tools open. Check the Console for an error thrown when you click. In the Elements panel, select the button and check its Event Listeners tab — is a handler attached at all, and is the button disabled or covered by another element? If the click should send a request, look in the Network panel: no request means the handler fails or returns early; a request with an error status or a CORS failure points elsewhere. Then set a breakpoint in the handler (or a click event listener breakpoint in Sources), step through and inspect the values. State a hypothesis at each step instead of changing code at random.",
      followUps: ["How would you tell a frontend bug from a backend bug?"],
      source: { title: "Chrome DevTools — Debug JavaScript", url: "https://developer.chrome.com/docs/devtools/javascript" },
    },
  ],
  mistakes: [
    "Setting innerHTML with user-provided data instead of textContent.",
    "Adding a listener to every list item, including ones created later, instead of delegating.",
    "Confusing event.target with event.currentTarget.",
    "Forgetting preventDefault() on a form submit, so the page reloads.",
    "Storing tokens, passwords or other secrets in localStorage and assuming they are private.",
    "Treating CORS as a frontend bug or as server-side protection against all clients; it is the browser enforcing the server's policy.",
    "Debugging with scattered console.log calls instead of the Network panel and breakpoints.",
    "Putting blocking scripts in the head without defer.",
  ],
  mastery: [
    "Interview readiness: without notes, you can explain the DOM, bubbling and capturing, event delegation, preventDefault versus stopPropagation, storage versus cookies, the same-origin policy, CORS preflight and the rendering steps in a few sentences each.",
    "Professional competence: without a framework, you can build a small page that renders a list from fetched JSON, adds and removes items with one delegated listener and keeps a setting in localStorage.",
    "Professional competence: you can debug a broken interaction using the Console, Elements, Network and Sources panels, and read a request's status, headers, payload and any preflight.",
    "You complete the MDN Image gallery or house data UI challenge without help (editorial benchmark, not an employer standard).",
    "Skip this topic if you have already built and debugged interactive pages without a framework and can do all of the above.",
  ],
  deprioritize: [
    "Rendering-engine internals: the preload scanner, compositing layers and GPU rasterization.",
    "Performance profiling and Core Web Vitals optimization.",
    "Shadow DOM, web components and custom elements.",
    "Service workers, IndexedDB, WebSockets and other advanced browser APIs.",
  ],
  keywords: [
    "DOM",
    "document object model",
    "querySelector",
    "addEventListener",
    "events",
    "event bubbling",
    "event capturing",
    "event delegation",
    "preventDefault",
    "stopPropagation",
    "developer tools",
    "DevTools",
    "Network panel",
    "fetch",
    "JSON",
    "localStorage",
    "sessionStorage",
    "cookies",
    "HttpOnly",
    "SameSite",
    "same-origin policy",
    "CORS",
    "preflight",
    "rendering",
    "reflow",
    "defer async script",
  ],
};

export default topic;
