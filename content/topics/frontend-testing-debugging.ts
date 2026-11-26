import type { Topic } from "../types";

const topic: Topic = {
  slug: "frontend-testing-debugging",
  title: "Frontend Testing and Debugging",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "Debug frontend code with the browser's developer tools and React Developer Tools, diagnose frontend–backend integration failures in the Network panel, and test user-visible behaviour with React Testing Library and Vitest, adding an end-to-end test with Playwright where a critical flow justifies it.",
  whyItMatters:
    "Testing appeared in 17 and debugging in 8 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample; frontend testing tools were named only occasionally (one posting listed Jest, Vitest and React Testing Library). A candidate-reported Notion new-grad interview involved debugging an existing React/TypeScript codebase. At work, a large share of frontend time goes to finding why a screen shows the wrong thing — wrong props or state, a failed request, a wrong URL — and to writing a test that keeps the fix fixed. General testing and debugging method is covered in Automated Testing and Reading and Debugging Unfamiliar Code; this topic adds the frontend tools.",
  prerequisites: [
    "React Fundamentals",
    "Forms, API Integration and UI States (the requests and UI states you will debug and test)",
    "Automated Testing (test types, choosing cases, fakes and mocks — not repeated here)",
    "Reading and Debugging Unfamiliar Code (reproduce, isolate, fix, verify — not repeated here)",
    "Browser and DOM Fundamentals",
  ],
  objectives: [
    "Debug JavaScript in the browser: reproduce the bug, set line-of-code and event-listener breakpoints in the Sources panel, step through code, and inspect values with Scope, Watch expressions and the Console; use the debugger statement when convenient.",
    "Use the Network panel to diagnose integration failures: find the request, read its URL (wrong base URL or path), method, status code, request headers and payload, response body, and timing; recognize a failed CORS preflight (OPTIONS) and a request that never left the browser; throttle the network to see loading states; filter to Fetch/XHR.",
    "Use React Developer Tools (Components and Profiler panels): select a component and inspect and edit its props, state and Hooks, find which component rendered an element, and recognize what triggers a re-render (its state changed, its parent re-rendered).",
    "Pick one test runner: Vitest, because it reuses your Vite configuration and has a Jest-compatible API; use Jest instead if the codebase already does. Configure the jsdom environment and the jest-dom matchers (toBeInTheDocument, toBeDisabled).",
    "Write React Testing Library tests of behaviour the user can see: render the component, find elements with screen and the query priority (getByRole with a name, then getByLabelText, then getByText; getByTestId as a last resort), interact with user-event (const user = userEvent.setup(); await user.click(...), await user.type(...)), and assert on the result.",
    "Choose the right query variant: getBy when the element must be there, queryBy only to assert that something is absent, findBy (async) for something that appears after a request or state update; prefer findBy over waitFor for elements.",
    "Test a component that calls an API without the network: mock at the network level with Mock Service Worker (recommended by Testing Library) or, more simply, with a mocked fetch (vi.fn / vi.spyOn on globalThis.fetch), and cover the loading, success, empty and error states.",
    "Explain what an end-to-end test is — a real browser driving the running frontend and backend — and add one with Playwright for a critical flow (log in, create an item) using role-based locators and web-first assertions; know that E2E tests are slower and flakier, so keep them few.",
    "Diagnose a frontend–backend integration failure systematically: is the request sent, to the right URL, with the right payload and credentials; what status and body came back; is the UI handling that response — then write a test for the case you fixed.",
    "Skip for now: snapshot testing, visual regression testing, component storybooks, coverage targets, testing implementation details (internal state, component instances), cross-browser test matrices, performance profiling beyond recognizing the Profiler, and Cypress (recognize it as an alternative to Playwright).",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "Chrome DevTools — Debug JavaScript, and Inspect network activity",
      url: "https://developer.chrome.com/docs/devtools/javascript",
      provider: "Chrome for Developers (Google)",
      type: "Documentation",
      instructions:
        "Start here, debugging. Complete the Debug JavaScript tutorial on its demo page (Reproduce the bug through Apply a fix: breakpoints, stepping, Scope, Watch and Console). Then complete Inspect network activity (https://developer.chrome.com/docs/devtools/network) on its demo: Log network activity, Show more information, Simulate a slower network connection, Inspect a resource's details and Filter resources. Firefox and Edge have equivalent tools. Free; no account.",
    },
    {
      title: "React — React Developer Tools",
      url: "https://react.dev/learn/react-developer-tools",
      provider: "React (official documentation)",
      type: "Documentation",
      instructions:
        "Install the browser extension (Chrome, Firefox or Edge) and open the Components panel on your own app: select components, read and edit props and state. Recognize the Profiler panel; you do not need to profile performance yet. Free; no account.",
    },
    {
      title: "Testing Library — Guiding Principles, About Queries (Priority), user-event Introduction, React Testing Library Example",
      url: "https://testing-library.com/docs/guiding-principles",
      provider: "Testing Library (official documentation)",
      type: "Documentation",
      instructions:
        "Start here, testing. Read Guiding Principles; in About Queries (https://testing-library.com/docs/queries/about) read Types of Queries and Priority; read the user-event Introduction (Writing tests with userEvent); then work through the React Testing Library Example (https://testing-library.com/docs/react-testing-library/example-intro), which tests a component that fetches data using Mock Service Worker. For setup, follow Vitest's Getting Started (https://vitest.dev/guide/) and its Test Environment page for jsdom, plus the jest-dom README section With Vitest. Free; no account.",
    },
    {
      title: "Kent C. Dodds — Common mistakes with React Testing Library",
      url: "https://kentcdodds.com/blog/common-mistakes-with-react-testing-library",
      provider: "Kent C. Dodds (creator of Testing Library)",
      type: "Article",
      instructions:
        "Read after your first few tests, then fix your own tests against it. Focus on Not using screen, Using the wrong query, Not using *ByRole most of the time, Not using @testing-library/user-event, Using query* variants for anything except checking for non-existence and Using waitFor to wait for elements that can be queried with find*. Written in May 2020: where its user-event examples differ from the current docs (userEvent.setup() and await), follow the docs. Free; no account.",
    },
    {
      title: "Full Stack Open — Part 5 c (Testing React apps) and d (End to end testing)",
      url: "https://fullstackopen.com/en/part5/testing_react_apps",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Alternative, hands-on: tests a real small app with Vitest and React Testing Library (Rendering the component for tests through Testing the forms), then adds Playwright end-to-end tests (https://fullstackopen.com/en/part5/end_to_end_testing) including controlling the database state. It builds on the course's own Node backend and earlier parts; follow the testing sections with your own app. JavaScript. Free; exercise submission optional (GitHub account).",
    },
    {
      title: "Playwright — Installation, Writing tests, Test generator",
      url: "https://playwright.dev/docs/intro",
      provider: "Playwright (official documentation, Microsoft)",
      type: "Documentation",
      instructions:
        "Reference for the one end-to-end test. Read Installation (Installing Playwright, Running the Example Test, UI Mode), Writing tests (First test, Actions, Assertions, Test Isolation) and skim Test generator (https://playwright.dev/docs/codegen) to record a first draft. Requires Node.js; downloads browser binaries on install. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Chrome DevTools tutorial demos: Debug JavaScript and Inspect network activity",
      url: "https://developer.chrome.com/docs/devtools/javascript",
      note: "Find the 5 + 1 = 51 bug with breakpoints instead of console.log, then complete the Network panel tutorial's demo. Demonstrates the core debugging workflow in the browser. Free; no account.",
    },
    {
      title: "Read existing React tests: bulletproof-react login form tests and API mock handlers",
      url: "https://github.com/alan2207/bulletproof-react/blob/master/apps/react-vite/src/features/auth/components/__tests__/login-form.test.tsx",
      note: "A Vite + Vitest + React Testing Library + MSW codebase. Read the login and register form tests and the handlers in src/testing/mocks/handlers: which queries they use and why, how user input is simulated, and how the API is faked. Then read e2e/tests/smoke.spec.ts for a Playwright flow. Ignore the project's architecture; read the tests. Free to read on GitHub; no account.",
    },
    {
      title: "Read existing Playwright tests: Full Stack FastAPI Template frontend/tests/login.spec.ts",
      url: "https://github.com/fastapi/full-stack-fastapi-template/blob/master/frontend/tests/login.spec.ts",
      note: "End-to-end tests of a React + FastAPI app: role-based locators, web-first assertions (toBeVisible), success and failure logins. Code-review question: it locates inputs with getByTestId — what would getByLabel or getByRole gain? Free to read on GitHub; no account.",
    },
    {
      title: "Apply to your full-stack project: component tests and one end-to-end test",
      note: "With Vitest and React Testing Library, test your main form (validation message, disabled submit while saving, server error shown) and your list screen (loading, empty, success and error with a mocked API), using role and label queries and user-event. Add one Playwright test for your most important flow against the running app. Then break the integration on purpose (wrong base URL, CORS origin removed, backend stopped) and diagnose each failure from the Network panel before reading your code.",
    },
    {
      title: "Existing-codebase drill: debug a React app you did not write",
      note: "In an open-source React project (for example bulletproof-react above), run the app, pick an issue or change a prop or state value in React DevTools, and trace with breakpoints and the Network panel where the displayed data comes from. Follows the Existing-Codebase Drills method.",
    },
  ],
  interviewQuestions: [
    {
      question: "A React component shows the wrong data. How do you debug it?",
      answer:
        "Narrow down where the wrong value comes from. First reproduce it reliably. In React Developer Tools, select the component and check its props and state: if the props are already wrong, move up to the parent that passes them; if state is wrong, find the code that sets it. If the data comes from the server, check the request in the Network panel — the URL, payload, status and response body — to see whether the backend sent the wrong data or the frontend handled it wrongly. Then set a breakpoint where the value is computed and step through it. Fix the cause, and add a test that would have caught it.",
      followUps: ["Why prefer breakpoints over console.log here?", "How do you find which component rendered a given element?"],
      source: { title: "React — React Developer Tools", url: "https://react.dev/learn/react-developer-tools" },
    },
    {
      question: "A request works in curl or Swagger UI but fails from your frontend. How do you diagnose it?",
      answer:
        "Open the Network panel, filter to Fetch/XHR and find the request. Check that it was sent at all, and to the URL you expected — a wrong base URL or path is common. Compare the method, headers (Content-Type, Authorization, cookies) and payload with the working curl call. Read the status and response body: 401 points to missing credentials, 422 to a payload that does not match the schema, 404 to the path. If the request shows as blocked, or an OPTIONS preflight failed, and the console reports CORS, the backend is not allowing your origin — curl is not subject to CORS, which is why it worked. If the response is correct, the bug is in how the UI handles it.",
      followUps: ["How would you reproduce the exact browser request in the terminal?"],
      source: { title: "Chrome DevTools — Inspect network activity", url: "https://developer.chrome.com/docs/devtools/network" },
    },
    {
      question: "What does React Testing Library encourage, and why?",
      answer:
        "Testing components the way users use them: render the component, find elements by what users perceive — their role and accessible name, label or text — interact as a user would, and assert on what appears on screen. Tests avoid implementation details such as internal state, component instances or CSS class names, so a refactor that keeps behaviour the same does not break them, and a test that passes gives real confidence that the UI works. Its guiding principle: the more your tests resemble the way your software is used, the more confidence they can give you.",
      followUps: ["What is an implementation detail in a React component?"],
      source: { title: "Testing Library — Guiding Principles", url: "https://testing-library.com/docs/guiding-principles" },
    },
    {
      question: "Which Testing Library query should you use, and what is the difference between getBy, queryBy and findBy?",
      answer:
        "Prefer queries accessible to everyone: getByRole with a name option for almost everything (getByRole('button', { name: /save/i })), getByLabelText for form fields, then getByPlaceholderText, getByText and getByDisplayValue; getByTestId is the last resort. If you cannot find an element by role, the UI may be inaccessible. getBy returns the element or throws if there is none (or more than one); queryBy returns null when nothing matches, so use it only to assert absence; findBy returns a promise that resolves when the element appears, for content that shows up after a request or state change.",
      followUps: ["How do you assert that an error message is not shown?"],
      source: { title: "Testing Library — About Queries: Priority", url: "https://testing-library.com/docs/queries/about" },
    },
    {
      question: "How do you test a component that fetches data from an API?",
      answer:
        "Do not call the real backend. Mock the network: Testing Library recommends Mock Service Worker, which intercepts requests and returns responses you define per test; a simpler option is replacing fetch with a mock function (vi.fn() or vi.spyOn in Vitest). Then render the component, assert the loading state, await the result with a findBy query, and add tests where the mock returns an empty list and an error status, checking the UI shows the right message. Also assert on what was sent when it matters — the URL, method or body of a POST.",
      followUps: ["Why is mocking at the network level more realistic than mocking your API module?", "What does the backend still need its own tests for?"],
      source: { title: "Testing Library — React Testing Library Example", url: "https://testing-library.com/docs/react-testing-library/example-intro" },
    },
    {
      question: "What is the difference between fireEvent and user-event?",
      answer:
        "fireEvent dispatches a single DOM event. user-event simulates a full user interaction: typing into an input fires the key, input and change events for each character, clicking fires pointer and mouse events and moves focus, and it adds visibility and interactability checks, accounting for the fact that a user cannot click a hidden element or type into a disabled text box. Prefer user-event: call userEvent.setup() at the start of the test and await each interaction.",
      followUps: ["Why must user-event interactions be awaited?"],
      source: { title: "Testing Library — user-event: Introduction", url: "https://testing-library.com/docs/user-event/intro" },
    },
    {
      question: "When would you add an end-to-end test, and what are the trade-offs compared with component tests?",
      answer:
        "An end-to-end test drives a real browser against the running frontend and backend, so it catches what component tests cannot: wrong API URLs, CORS, authentication, database state and pages that do not fit together. It is slower, needs the whole system and test data, and can be flaky, so keep a few for the flows that must never break — logging in, the main create or checkout path — and test the many smaller cases (validation messages, error states) in fast component tests. In Playwright, use role-based locators and its web-first assertions, which wait automatically instead of fixed sleeps.",
      followUps: ["How would you keep E2E tests independent of each other?", "What makes an E2E test flaky?"],
      source: { title: "Playwright — Best Practices", url: "https://playwright.dev/docs/best-practices" },
    },
    {
      question: "Why might a component re-render more than you expect, and how would you check?",
      answer:
        "A component re-renders when its own state changes or when its parent re-renders (props do not have to change), and when a context it reads changes. Common surprises are state kept too high in the tree, so a keystroke re-renders a whole page, and an Effect that sets state on every run. Check with React Developer Tools: highlight updates when components render, or record in the Profiler to see which components rendered. Re-renders are usually cheap; fix them only when there is a visible problem, by moving state down before reaching for memoization.",
      followUps: ["Why does an Effect without a dependency array that sets state cause a loop?"],
      source: { title: "React — Render and Commit", url: "https://react.dev/learn/render-and-commit" },
    },
  ],
  mistakes: [
    "Debugging with scattered console.log calls instead of a breakpoint and the Network panel.",
    "Assuming the frontend is wrong before checking what the server actually returned (or the reverse).",
    "Querying by CSS class, container.querySelector or test IDs when a role or label query works.",
    "Using getBy to assert absence (it throws) or queryBy for elements that should exist.",
    "Wrapping everything in waitFor, or adding arbitrary sleeps, instead of awaiting findBy queries.",
    "Using fireEvent where user-event gives a realistic interaction, or forgetting to await user-event calls.",
    "Tests that call the real backend, so they are slow, flaky and depend on data.",
    "Testing internal state or which Hook was called instead of what the user sees.",
    "Only testing the happy path: no loading, empty or error state tests.",
    "Many slow end-to-end tests for cases a component test could cover.",
  ],
  mastery: [
    "You can find a frontend bug with breakpoints, React Developer Tools and the Network panel, and say whether the fault is in the request, the response or the UI's handling of it.",
    "Without AI, you can write React Testing Library tests for a form and a data-loading screen that use role and label queries, user-event and findBy, with the API mocked, covering loading, success, empty and error states.",
    "You can explain the query priority, getBy versus queryBy versus findBy, and why tests should avoid implementation details.",
    "You can write and run one Playwright test for a critical flow and explain when an E2E test is worth its cost.",
    "Professional readiness: given an integration failure in an unfamiliar frontend, you can diagnose it from the browser before reading the code, fix it and add a regression test.",
    "Skip this topic if you already test React components with Testing Library and debug with DevTools regularly; read the Common mistakes article to check your habits.",
  ],
  deprioritize: [
    "Snapshot and visual regression testing.",
    "Coverage targets and mutation testing.",
    "Cypress, Selenium and cross-browser test matrices (recognize Cypress as an alternative to Playwright).",
    "Storybook and component-driven development.",
    "Performance profiling, Lighthouse performance work and memory-leak debugging.",
    "Advanced MSW features, contract testing and mocking libraries beyond one approach.",
  ],
  keywords: [
    "frontend testing",
    "React Testing Library",
    "RTL",
    "Testing Library",
    "Vitest",
    "Jest",
    "jsdom",
    "jest-dom",
    "user-event",
    "getByRole",
    "findBy",
    "MSW",
    "Mock Service Worker",
    "mock fetch",
    "Playwright",
    "end-to-end test",
    "E2E",
    "Chrome DevTools",
    "breakpoint",
    "Network panel",
    "React DevTools",
    "debugging",
    "re-render",
  ],
};

export default topic;
