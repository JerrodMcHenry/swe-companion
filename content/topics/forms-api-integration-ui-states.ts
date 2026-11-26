import type { Topic } from "../types";

const topic: Topic = {
  slug: "forms-api-integration-ui-states",
  title: "Forms, API Integration and UI States",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "Connect a React frontend to a backend API: submit and validate forms, call endpoints with fetch, handle loading, error, empty and success states, avoid double submissions and stale responses, send credentials and react to 401s, and configure the API base URL and CORS for each environment.",
  whyItMatters:
    "In this curriculum's R4 sample of 28 entry-level backend and full-stack postings, React (18), JavaScript (16) and TypeScript (19) appeared alongside backend API work, and a candidate-reported Klaviyo internship interview involved building a frontend together with an API. Wiring a form or a screen to an endpoint, with its failure states, is the everyday full-stack task: most visible frontend bugs are an unhandled error, a missing loading state, a duplicated submission or a stale response. This topic connects React Fundamentals to the FastAPI backend you built in Backend Engineering.",
  prerequisites: [
    "React Fundamentals (state, events, controlled inputs, Effects and cleanup)",
    "JavaScript Fundamentals (promises and async/await)",
    "Browser and DOM Fundamentals (same-origin policy and CORS)",
    "HTTP APIs with FastAPI (the backend you will call)",
    "Validation and Error Responses (the error shapes your backend returns)",
    "Authentication and Authorization (sessions, tokens, 401 versus 403)",
  ],
  objectives: [
    "Handle submission with onSubmit on the form (not onClick on the button) and call event.preventDefault() so the browser does not reload the page; read values from controlled inputs. Recognize that React 19 also supports a function passed to the form's action prop.",
    "Validate on the client for fast feedback: HTML constraint attributes (required, type=\"email\", minlength, maxlength, min, max, pattern) and simple checks in the submit handler, with an error message per field. Explain why the server must still validate every request (Validation and Error Responses) — client-side checks are easy to bypass.",
    "Call an API with fetch: method, headers (Content-Type: application/json), body: JSON.stringify(data), then check response.ok — fetch rejects only on network failures (and aborts), not on 404, 422 or 500 — and parse the error body to show the server's field errors.",
    "Model UI states explicitly — idle, loading, error, empty and success — preferably as one status value instead of several booleans that can contradict each other; never show an empty list while data is still loading or after a failure.",
    "Prevent double submission: disable the submit button while the request is in flight and re-enable it on failure; know that a POST retried by the user can create duplicates unless the server deduplicates.",
    "Send a mutation (POST, PUT, PATCH, DELETE) from the event handler, not from an Effect; fetch data for what is on screen in an Effect (or a framework or library).",
    "Avoid race conditions and stale responses: in an Effect that fetches, set an ignore flag in the cleanup or abort the request with AbortController, so a slow, older response cannot overwrite a newer one; ignore the AbortError it raises.",
    "Authentication in the UI: send the token in the Authorization header or rely on cookies (credentials: \"include\" for a cross-origin API); on 401 clear the stored session and send the user to log in; on 403 show a not-allowed message. Never put secrets (API keys, database passwords) in frontend code — everything shipped to the browser is public. Token storage trade-offs belong to Authentication and Authorization.",
    "Diagnose CORS errors: recognize the console message, confirm it in the Network panel, and fix it on the backend (FastAPI's CORSMiddleware with an explicit list of allowed origins; a wildcard does not work with credentials) or with the Vite dev-server proxy in development — not by disabling browser security.",
    "Configure the API base URL per environment with Vite environment variables (import.meta.env.VITE_API_URL in .env files); know that VITE_ variables are embedded in the public bundle.",
    "Integrate with your FastAPI backend end to end: list, create, update and delete one resource from the UI, showing server validation errors next to the right fields.",
    "Skip for now: form libraries (React Hook Form) and schema validators (Zod) unless your codebase uses them, data-fetching libraries such as TanStack Query (optional; learn them when a job uses them), optimistic updates, GraphQL clients, WebSockets, file uploads beyond a single file input, and offline support.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "React — Reacting to Input with State; Synchronizing with Effects (Fetching data); You Might Not Need an Effect (Sending a POST request, Fetching data)",
      url: "https://react.dev/learn/reacting-to-input-with-state",
      provider: "React (official documentation)",
      type: "Documentation",
      instructions:
        "Start here, part 1. Reacting to Input with State models a form as explicit visual states (typing, submitting, success, error) — complete all five steps and its challenges. Then reread two sections from React Fundamentals with integration in mind: Synchronizing with Effects → Fetching data (the ignore flag in cleanup) and You Might Not Need an Effect → Sending a POST request and Fetching data. For the form element itself, use the <form> reference: Handling form submission with an event handler. Free; no account.",
    },
    {
      title: "MDN — Using the Fetch API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch",
      provider: "MDN Web Docs (Mozilla)",
      type: "Documentation",
      instructions:
        "Start here, part 2. Read Making a request (Setting the method, Setting a body, Setting headers, Making cross-origin requests, Including credentials), Canceling a request, and Handling the response (Checking response status, Reading the response body). Skip streaming. Free; no account.",
    },
    {
      title: "MDN — Client-side form validation",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation",
      provider: "MDN Web Docs (Mozilla)",
      type: "Documentation",
      instructions:
        "Start here, part 3. Read What is form validation?, Using built-in form validation (required, pattern, length and value constraints) and skim Validating forms using JavaScript (The Constraint Validation API) for custom messages. Note its warning that client-side validation is not a security measure. Free; no account.",
    },
    {
      title: "Full Stack Open — Part 2 c (Getting data from server) and d (Altering data in server)",
      url: "https://fullstackopen.com/en/part2/getting_data_from_server",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Alternative, hands-on: build a notes app that loads data in an Effect, creates and updates items, extracts the API calls into a service module and handles a failed request (Promises and Errors). It uses axios and json-server instead of fetch and FastAPI — the patterns transfer; point the service module at your FastAPI backend instead if you like. JavaScript, not TypeScript. Free; exercise submission optional (GitHub account).",
    },
    {
      title: "The Odin Project — Fetching Data in React",
      url: "https://www.theodinproject.com/lessons/react-new-fetching-data-in-react",
      provider: "The Odin Project",
      type: "Course",
      instructions:
        "Alternative, short written lesson: a fetch in useEffect with error and loading states, extracting a custom Hook, and a brief introduction to data-fetching libraries. Read it if the react.dev pages felt abstract; it does not cover aborting stale requests, so add the ignore flag from react.dev. Free; no account.",
    },
    {
      title: "FastAPI — CORS (Cross-Origin Resource Sharing) and Vite — Env Variables and Modes",
      url: "https://fastapi.tiangolo.com/tutorial/cors/",
      provider: "FastAPI and Vite (official documentation)",
      type: "Documentation",
      instructions:
        "Reference for the two configuration problems every frontend-plus-backend project hits. In FastAPI read Origin, Wildcards and Use CORSMiddleware. In Vite's Env Variables and Modes (https://vite.dev/guide/env-and-mode) read Env Variables and .env Files, including the warning that VITE_ variables are exposed to the client; the dev proxy is server.proxy in Vite's Server Options.",
    },
  ],
  exercises: [
    {
      title: "react.dev challenges: Reacting to Input with State, and Synchronizing with Effects challenge 4 (Fix fetching inside an Effect)",
      url: "https://react.dev/learn/synchronizing-with-effects",
      note: "Challenge 4 has a fetch Effect whose older, slower responses can overwrite newer ones; fix it with cleanup. In Reacting to Input with State, do challenge 2 (Profile editor: edit and save modes driven by state). Free; no account.",
    },
    {
      title: "Full Stack Open exercises 2.11–2.15 (phonebook against a server)",
      url: "https://fullstackopen.com/en/part2/altering_data_in_server",
      note: "Load, create, update and delete through an API module, and handle a failed request. Uses json-server; you may substitute your FastAPI backend. Free; submission optional (GitHub account).",
    },
    {
      title: "Apply to your full-stack project: one resource end to end",
      note: "From your React UI, list, create, edit and delete one resource in your FastAPI backend. Show loading, error, empty and success states; disable submit while saving; show the server's 422 field errors next to the fields; ignore stale responses in your fetch Effect; read the base URL from a VITE_ variable; configure CORS for your dev and production origins; redirect to login on 401. Then break each piece on purpose (stop the backend, send invalid data, slow the network in DevTools) and check the UI. Do it without AI first.",
    },
    {
      title: "Read the Full Stack FastAPI Template frontend: main.tsx and AddItem.tsx",
      url: "https://github.com/fastapi/full-stack-fastapi-template/blob/master/frontend/src/main.tsx",
      note: "A React + FastAPI codebase. In main.tsx find where the API base URL comes from (VITE_API_URL) and what happens on a 401 or 403; in src/components/Items/AddItem.tsx find how double submission is prevented (isPending). It uses TanStack Query, axios and a generated client — read it for the patterns, not to adopt the libraries. Code-review question: it keeps the access token in localStorage; what is the trade-off (see Authentication and Authorization)? Free to read on GitHub; no account.",
    },
  ],
  interviewQuestions: [
    {
      question: "How do you handle a form submission in React?",
      answer:
        "Put an onSubmit handler on the form element, so pressing Enter works as well as clicking, and call event.preventDefault() to stop the browser's full-page submission. Read the values from controlled inputs (or from FormData), validate them, set a submitting state that disables the button, send the request, and then either show success (clear or reset the form, update the list) or show the errors and re-enable the button. Mutations belong in the event handler, not in an Effect.",
      followUps: ["Controlled versus uncontrolled inputs: which would you use here and why?", "How would you reset the form after success?"],
      source: { title: "React — <form>: Handling form submission with an event handler", url: "https://react.dev/reference/react-dom/components/form" },
    },
    {
      question: "If you validate a form in the browser, do you still need server-side validation?",
      answer:
        "Yes. Client-side validation is for user experience: immediate feedback without a round trip. Anyone can bypass it by disabling JavaScript, editing the page or calling the API directly with curl, so the server must validate every request and remains the source of truth. Keep the rules consistent and show the server's errors (for example FastAPI's 422 details) next to the matching fields, because some rules — such as \"email already registered\" — can only be checked on the server.",
      followUps: ["Which HTML attributes give you validation for free?"],
      source: { title: "MDN — Client-side form validation", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation" },
    },
    {
      question: "Does fetch throw when the server returns 404 or 500? How do you handle errors properly?",
      answer:
        "No. fetch rejects only when the request could not be made or completed — a network failure, a CORS block or an abort. Any HTTP response, including 404, 422 and 500, resolves normally, so check response.ok (status 200–299) or response.status before reading the body, and turn failures into an error your UI can display, parsing the server's error JSON when there is one. Wrap the call in try/catch (or .catch) to handle network errors too, and remember that response.json() can also fail if the body is not JSON.",
      followUps: ["How would you show a 422 response's field errors?", "What would you show the user for a network error versus a 500?"],
      source: { title: "MDN — Using the Fetch API: Checking response status", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
    },
    {
      question: "How do you model loading, error and empty states for a screen that loads data?",
      answer:
        "Treat them as distinct visual states: loading (spinner or skeleton), error (message plus retry), empty (a helpful message when the request succeeded with no items) and success (the data). A single status value — 'loading' | 'error' | 'success' — with the data and error alongside avoids impossible combinations that separate isLoading and isError booleans allow, and a TypeScript union type makes each state explicit. The common bugs are showing \"No items\" while loading or after a failure, and leaving a spinner forever because the error path never updates state.",
      followUps: ["What should happen to the old data while a refresh is loading?"],
      source: { title: "React — Reacting to Input with State", url: "https://react.dev/learn/reacting-to-input-with-state" },
    },
    {
      question: "A search box fetches results as the user types, and sometimes it shows results for an older query. Why, and how do you fix it?",
      answer:
        "It is a race condition: requests can finish in a different order than they started, so the response for \"re\" can arrive after the one for \"react\" and overwrite it. Each Effect run must cancel or ignore its own request when it is superseded: in the cleanup function, set an ignore flag that the Effect checks before setting state, or call abort() on an AbortController whose signal was passed to fetch (and ignore the resulting AbortError). Debouncing reduces the number of requests but does not by itself prevent stale responses.",
      followUps: ["What else does an Effect cleanup protect against?", "What do data-fetching libraries such as TanStack Query handle for you?"],
      source: { title: "React — Synchronizing with Effects: Fetching data", url: "https://react.dev/learn/synchronizing-with-effects" },
    },
    {
      question: "How do you prevent a user from submitting a form twice?",
      answer:
        "Track a submitting state, disable the submit button (and show progress) while the request is in flight, and re-enable it when the request fails so the user can retry. That stops accidental double clicks but not every duplicate — a slow network, a retry or a second tab can still send two requests — so for operations that must not happen twice, such as payments, the server also needs protection: a unique constraint or an idempotency key.",
      followUps: ["Why is a duplicate POST worse than a duplicate GET?"],
      source: { title: "MDN — HTTP request methods", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods" },
    },
    {
      question: "Your frontend calls your API and the console shows a CORS error. What is happening, and how do you fix it?",
      answer:
        "The page's origin (for example http://localhost:5173) differs from the API's origin (http://localhost:8000), and the browser blocks the frontend from reading the response because the API did not send Access-Control-Allow-Origin for that origin. The request may well have reached the server. Confirm in the Network panel (look for a failed OPTIONS preflight or a missing header), then fix it on the server: in FastAPI, add CORSMiddleware with an explicit list of allowed origins — a wildcard does not work with cookies or Authorization headers. In development you can instead proxy API calls through the Vite dev server so they are same-origin. Disabling browser security or switching to no-cors mode is not a fix.",
      followUps: ["Why doesn't curl or Postman get a CORS error?", "What is a preflight request?"],
      source: { title: "FastAPI — CORS (Cross-Origin Resource Sharing)", url: "https://fastapi.tiangolo.com/tutorial/cors/" },
    },
    {
      question: "How does a React app send authenticated requests, and what should it do when the API returns 401?",
      answer:
        "With cookie-based sessions the browser sends the cookie automatically — for a different-origin API you need credentials: \"include\" and matching CORS settings. With tokens, the app adds Authorization: Bearer <token> to each request, ideally in one API module rather than in every component. On 401 the session is missing or expired: clear the stored user and token and redirect to the login page (optionally returning to the original page afterwards). A 403 means the user is logged in but not allowed, so show a message instead of logging them out. Hiding a button is only convenience; the server must enforce permissions.",
      followUps: ["Where would you store a token, and what are the risks?", "Why can't the frontend keep an API secret?"],
      source: { title: "MDN — Using the Fetch API: Including credentials", url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch" },
    },
    {
      question: "How do you point the frontend at a different API in development and production? Can you put an API key there?",
      answer:
        "Read the base URL from a build-time environment variable — with Vite, import.meta.env.VITE_API_URL set in .env.development and .env.production or by the deployment platform — and build every request from it in one API module. Vite exposes only variables prefixed with VITE_, and those are embedded in the JavaScript sent to the browser, so anything there is public: never put a secret API key or password in frontend code. Calls that need a secret go through your backend.",
      followUps: ["Why is the variable baked in at build time rather than read at runtime?"],
      source: { title: "Vite — Env Variables and Modes", url: "https://vite.dev/guide/env-and-mode" },
    },
  ],
  mistakes: [
    "Assuming fetch throws on 404 or 500, so error responses are parsed as data.",
    "Showing \"No results\" while loading or after a failed request.",
    "Separate isLoading, isError and data flags that drift into impossible combinations.",
    "No disabled state while submitting, so double clicks create duplicates.",
    "Sending POST requests from an Effect instead of the event handler.",
    "Fetching in an Effect without cleanup, so stale responses overwrite newer ones.",
    "Relying on client-side validation alone, or showing a generic error instead of the server's field errors.",
    "Hard-coding http://localhost:8000 in components instead of one configurable base URL.",
    "\"Fixing\" CORS with no-cors mode, a browser extension or allow_origins=[\"*\"] with credentials.",
    "Putting API secrets in VITE_ variables or other frontend code.",
    "Logging the user out on 403, or ignoring 401 so the app silently shows empty data.",
  ],
  mastery: [
    "Without AI, you can connect a form and a list screen to your own FastAPI endpoints with loading, error, empty and success states, disabled submission and server field errors shown next to inputs.",
    "You can explain why fetch does not reject on HTTP errors, why the server must validate anyway, and how an ignore flag or AbortController prevents stale responses — and reproduce the race condition and fix it.",
    "You can diagnose a CORS error and a wrong base URL from the browser and fix them in the right place.",
    "You can explain how your app sends credentials, what happens on 401 and 403, and why no secret can live in the frontend.",
    "Professional readiness: given an unfamiliar screen in an existing codebase, you can trace a request from the click to the API call and back to the rendered state, and identify a missing failure state.",
    "Editorial benchmark, not an employer standard: wire a new endpoint into an existing screen, with all states handled, in under an hour.",
    "Skip this topic if you have shipped a frontend that calls a real API with error, loading and authentication handling and can explain stale-response handling; skim Reacting to Input with State and the fetch race-condition section.",
  ],
  deprioritize: [
    "TanStack Query, SWR, RTK Query and Apollo (optional; learn the one your job uses).",
    "Form libraries (React Hook Form, Formik) and schema validators (Zod) unless the codebase uses them.",
    "Optimistic updates, caching strategies, pagination UIs beyond a simple next/previous, infinite scrolling.",
    "WebSockets, server-sent events, offline support and service workers.",
    "React 19 form Actions, useActionState and Server Functions beyond recognizing them.",
  ],
  keywords: [
    "form",
    "onSubmit",
    "preventDefault",
    "form validation",
    "client-side validation",
    "fetch",
    "API call",
    "API integration",
    "response.ok",
    "loading state",
    "error state",
    "empty state",
    "double submit",
    "race condition",
    "AbortController",
    "stale response",
    "CORS",
    "401",
    "environment variables",
    "VITE_API_URL",
    "frontend backend integration",
  ],
};

export default topic;
