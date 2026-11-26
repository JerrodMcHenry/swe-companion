import type { Topic } from "../types";

const topic: Topic = {
  slug: "react-fundamentals",
  title: "React Fundamentals",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "Build user interfaces from React function components: JSX, props, state, events, conditional and list rendering, controlled inputs, deciding which component owns each piece of state, and Effects for synchronizing with systems outside React — following the current react.dev guidance.",
  whyItMatters:
    "React was named in 18 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample (15 of them full-stack), Next.js in 7 and Angular or Vue in only 2. Candidate reports include debugging in an existing React/TypeScript codebase (Notion, new grad) and building a frontend that works with an API (Klaviyo, internship). On the job, most full-stack frontend tasks are adding or changing components, their state and their data flow. React is this curriculum's teaching choice; components, one-way data flow and state ownership transfer to other frameworks.",
  prerequisites: [
    "JavaScript Fundamentals (functions, objects, arrays and their map and filter methods, destructuring, modules, promises)",
    "HTML and CSS Fundamentals",
    "Browser and DOM Fundamentals (events and the DOM that React updates for you)",
    "TypeScript Fundamentals (to type props and state; you can learn React in JavaScript first and add types afterwards)",
  ],
  objectives: [
    "Set up a project with a current tool: Vite (npm create vite@latest with the react-ts template) or a framework the job uses. Create React App was deprecated in February 2025; do not start new projects with it, and treat tutorials built on it as dated.",
    "Write function components that return JSX; know the JSX rules (one root element or a fragment, closed tags, className, curly braces for JavaScript expressions) and that a component name starts with a capital letter.",
    "Pass data with props (read-only inputs, destructured in the parameter list, with defaults and children) and keep components pure: same props, state and context give the same JSX, with no side effects during rendering.",
    "Render conditionally (if, the ternary operator, &&, and the 0 && pitfall) and render lists with map, giving each item a stable, unique key from the data — not the array index when items can be reordered, inserted or deleted.",
    "Handle events by passing a function (onClick={handleClick}, not onClick={handleClick()}); know that event handlers are where side effects such as sending a POST request belong.",
    "Add state with useState; explain that setting state requests a re-render, that state is a snapshot for that render, and when to use an updater function (setCount(c => c + 1)). Update objects and arrays immutably (spread, map, filter) instead of mutating them.",
    "Explain the render cycle: a render is triggered by the initial mount or a state update (the component's or a parent's), React calls your components, then commits only the differences to the DOM.",
    "Build controlled inputs (value plus onChange) and know the difference from uncontrolled inputs (defaultValue, read on submit). Form submission is covered in Forms, API Integration and UI States.",
    "Decide where state lives (Thinking in React): find the minimal state, derive everything else during rendering instead of storing it, lift shared state up to the closest common parent and pass callbacks down; know that state is tied to a component's position in the tree and that changing its key resets it.",
    "Use useEffect only to synchronize with something outside React (a network request, a subscription, a timer, a non-React widget): write the dependency array honestly, return a cleanup function, and explain why Effects run twice in development under Strict Mode.",
    "Recognize unnecessary Effects (You Might Not Need an Effect): computing values from props or state, resetting state when a prop changes, and handling user events do not need an Effect.",
    "Inspect components, props and state with React Developer Tools (covered in Frontend Testing and Debugging).",
    "Skip for now: class components and their lifecycle methods (recognize them in older code), Redux, Zustand and other state libraries, useReducer and context beyond recognizing them, refs beyond focusing an input, custom Hooks beyond extracting one repeated fetch, memoization (useMemo, useCallback, React.memo, the React Compiler), Server Components and Server Functions, and Next.js unless a job you are applying for uses it.",
  ],
  depth: "Apply: Use the concept to solve unfamiliar problems and explain relevant trade-offs.",
  resources: [
    {
      title: "React — Learn React (react.dev)",
      url: "https://react.dev/learn",
      provider: "React (official documentation)",
      type: "Documentation",
      instructions:
        "Start here. The official, hooks-based course with in-browser editors. Complete, in order: Quick Start; Thinking in React; every page of Describing the UI (Your First Component through Your UI as a Tree); every page of Adding Interactivity (Responding to Events through Updating Arrays in State); from Managing State only Reacting to Input with State, Choosing the State Structure, Sharing State Between Components and Preserving and Resetting State; and from Escape Hatches only Synchronizing with Effects, You Might Not Need an Effect and Lifecycle of Reactive Effects. Do the challenges at the end of each page (see Practice). Skip the reducer and context pages, refs, custom Hooks and the reference section for now. For setup, read Build a React App from Scratch (Step 1: Vite). Free; no account.",
    },
    {
      title: "Full Stack Open — Part 1 (Introduction to React) and Part 2 (Communicating with server)",
      url: "https://fullstackopen.com/en/part1",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Alternative with graded-style exercises, if you prefer a course that builds small apps. Complete Part 1 a (Introduction to React), c (Component state, event handlers) and d (A more complex state, debugging React apps), and Part 2 a (Rendering a collection, modules) and b (Forms); Part 2 c and d (server communication) belong to Forms, API Integration and UI States. Skip Part 1 b if you have done JavaScript Fundamentals. It uses JavaScript (TypeScript only in Part 9), Vite and hooks; the Old React section shows class-component syntax only for recognition. Free; exercise submission is optional and needs a GitHub account.",
    },
    {
      title: "React — Sunsetting Create React App",
      url: "https://react.dev/blog/2025/02/14/sunsetting-create-react-app",
      provider: "React (official blog)",
      type: "Article",
      instructions:
        "Reference: why Create React App is deprecated and what to use instead (a framework, or a build tool such as Vite). Read the first two sections so you can spot outdated tutorials.",
    },
  ],
  exercises: [
    {
      title: "react.dev challenges at the end of each assigned page",
      url: "https://react.dev/learn/describing-the-ui",
      note: "Every Describing the UI, Adding Interactivity, Managing State and Escape Hatches page you study ends with Try out some challenges, solved in the browser with a hidden solution. Attempt each before opening the solution. Prioritize Rendering Lists, State as a Snapshot, Updating Arrays in State, Sharing State Between Components, Preserving and Resetting State and Synchronizing with Effects. Free; no account.",
    },
    {
      title: "Full Stack Open exercises 1.6–1.14 (unicafe and anecdotes) and 2.6–2.10 (phonebook)",
      url: "https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps",
      note: "Small apps that force decisions about state shape, lifting state up, derived values and controlled inputs with filtering. Exercises 2.6–2.10 are at the end of Part 2 b (Forms). Free; submission optional (GitHub account).",
    },
    {
      title: "The Odin Project — Project: CV Application",
      url: "https://www.theodinproject.com/lessons/node-path-react-new-cv-application",
      note: "Build a form-driven app with edit and submit modes per section: component breakdown, controlled inputs and state ownership without step-by-step instructions. Do it in TypeScript if you have done TypeScript Fundamentals. Free; no account needed to read.",
    },
    {
      title: "Apply to your full-stack project: build the main screen from a sketch",
      note: "Follow the five Thinking in React steps for your project's main screen: component hierarchy, static version, minimal state, where each piece of state lives, inverse data flow. Write down why each state variable lives where it does — that is your project deep-dive answer. Do it without AI first.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between props and state?",
      answer:
        "Props are inputs a parent passes to a component; the component must treat them as read-only. State is data a component owns and changes over time with its setter, such as the text in an input or whether a panel is open. Changing either one leads to a re-render. A parent's state is often passed to a child as props, together with a callback the child calls to ask the parent to change it — data flows down, events flow up.",
      followUps: ["Where should state live when two sibling components need it?", "What is wrong with copying a prop into state?"],
      source: { title: "React — State: A Component's Memory", url: "https://react.dev/learn/state-a-components-memory" },
    },
    {
      question: "What happens when you call a state setter? Why does logging the state right after calling it show the old value?",
      answer:
        "The setter does not change the variable in the current render; it asks React to re-render the component with the new value. Each render sees a snapshot of state, so code after setCount(count + 1) in the same event handler still sees the old count. React also batches the updates made in one event and re-renders once. When the new value depends on the previous one, pass an updater function — setCount(c => c + 1) — so several updates in a row each see the latest value.",
      followUps: ["What does calling setCount(count + 1) three times in one click do?", "What triggers a re-render besides state?"],
      source: { title: "React — State as a Snapshot", url: "https://react.dev/learn/state-as-a-snapshot" },
    },
    {
      question: "Why does React need keys when rendering lists, and why is the array index often a bad key?",
      answer:
        "A key tells React which item is which between renders, so it can keep each item's state and DOM node attached to the right data when items are inserted, removed or reordered. Keys must be unique among siblings and stable — usually an id from the data. The index changes when the list changes, so state such as an input's text or a checkbox can end up attached to the wrong item; it is acceptable only for a static list that is never reordered or filtered. Generating keys during rendering (Math.random()) is worse: every render creates new items.",
      followUps: ["How can you use a key to reset a component's state on purpose?"],
      source: { title: "React — Rendering Lists: Keeping list items in order with key", url: "https://react.dev/learn/rendering-lists" },
    },
    {
      question: "Why must you update objects and arrays in state immutably?",
      answer:
        "React decides whether to re-render by checking whether you passed a new value; mutating the existing object (state.items.push(x)) keeps the same reference, so the UI may not update, and earlier snapshots change under you. Create a new value instead: [...items, x] to add, items.filter(...) to remove, items.map(...) to change one item, and {...user, name} for objects (copying each nested level you change). Immutability also makes it easy to compare the previous and next state.",
      followUps: ["Which array methods mutate and which return a new array?"],
      source: { title: "React — Updating Arrays in State", url: "https://react.dev/learn/updating-arrays-in-state" },
    },
    {
      question: "Two components need the same data. How do you share it, and how do you decide where state lives?",
      answer:
        "Lift the state up: move it to their closest common parent, pass the value down as props and pass a function that changes it. Each piece of state should have a single owner — a single source of truth. To decide, list the minimal state the UI needs, derive everything else during rendering (a filtered list or a count is not state), and put each state variable in the lowest component that all its users sit under. Reach for context or a state library only when passing props through many layers becomes a real problem.",
      followUps: ["What is the difference between a controlled and an uncontrolled component?", "When would you use context?"],
      source: { title: "React — Sharing State Between Components", url: "https://react.dev/learn/sharing-state-between-components" },
    },
    {
      question: "What is useEffect for, and what do the dependency array and the cleanup function do?",
      answer:
        "An Effect synchronizes a component with something outside React — fetching data, subscribing to a connection or browser event, starting a timer — after React has updated the screen. The dependency array lists the props and state the Effect uses: React re-runs the Effect when one of them changes, an empty array means only after mounting, and omitting it means after every render. The cleanup function you return undoes the Effect (unsubscribe, clear the timer, ignore or abort a stale request) before the next run and on unmount. In development, Strict Mode mounts components twice to expose missing cleanup; the fix is a correct cleanup, not suppressing the second run.",
      followUps: [
        "What happens if you leave a used value out of the dependency array?",
        "Why does my Effect run twice in development?",
      ],
      source: { title: "React — Synchronizing with Effects", url: "https://react.dev/learn/synchronizing-with-effects" },
    },
    {
      question: "When should you not use an Effect?",
      answer:
        "When nothing outside React is involved. A value computed from props or state should be calculated during rendering, not copied into state by an Effect (that causes an extra render and can go stale). Logic caused by a user action, such as submitting a form or sending a POST request, belongs in the event handler. To reset a component's state when a prop changes, give it a key instead of an Effect. Effects are for synchronization: fetching data for what is on screen, subscriptions, timers and non-React widgets.",
      followUps: ["How would you filter a list as the user types without an Effect?"],
      source: { title: "React — You Might Not Need an Effect", url: "https://react.dev/learn/you-might-not-need-an-effect" },
    },
    {
      question: "How do you set up a new React project today? Is Create React App still recommended?",
      answer:
        "No — Create React App was deprecated in February 2025. The React team recommends a framework (such as Next.js or React Router) for full applications, or a build tool such as Vite when starting from scratch or learning; npm create vite@latest with the react-ts template gives a TypeScript React app. Choose based on the project: a single-page app that talks to a separate FastAPI backend works well with Vite; a framework adds routing, data fetching and server rendering, which you need only if the job or the product requires them.",
      followUps: ["What does a build tool such as Vite do?"],
      source: { title: "React — Creating a React App", url: "https://react.dev/learn/creating-a-react-app" },
    },
    {
      question: "Walk me through the components in your project's frontend. Why does each piece of state live where it does?",
      answer:
        "Prepare this from your own project: name the main components and their parent-child structure, the state each one owns, which values are derived instead of stored, where server data is fetched and how it reaches the components that display it, and one decision you would change. Be ready to explain any component line by line, including code an AI tool helped you write.",
      followUps: ["What would you change if two more screens needed the same data?"],
    },
  ],
  mistakes: [
    "Mutating state (push, direct property assignment) and wondering why the UI does not update.",
    "Reading state right after setting it and expecting the new value.",
    "Calling the handler while rendering (onClick={handleClick()}) instead of passing it.",
    "Using array indexes, or random values, as keys for lists that change.",
    "Storing derived data in state and syncing it with an Effect instead of computing it during rendering.",
    "Effects that fetch without cleanup, so a slow, stale response overwrites a newer one.",
    "Lying about dependencies to stop an Effect from re-running, instead of fixing what the Effect depends on.",
    "Duplicating the same state in two components instead of lifting it up.",
    "Starting from Create React App or class-component tutorials as if they were current.",
    "Reaching for Redux or another state library before props and lifted state become a real problem.",
  ],
  mastery: [
    "Without AI, you can build a small multi-component screen from a description: lists with correct keys, conditional rendering, controlled inputs and state lifted to the right component.",
    "You can explain props versus state, the render-and-commit cycle, state as a snapshot, why updates must be immutable and why keys matter, and predict what a short component renders after a click.",
    "You can write an Effect with correct dependencies and cleanup, explain the double run in development, and point out an Effect that should be a derived value or an event handler.",
    "Given an unfamiliar UI, you can decide the minimal state and where it lives, and justify the trade-off of lifting it up versus keeping it local.",
    "Professional readiness: in an existing React codebase, you can trace where a value comes from, change a component without breaking its parent, and explain every component in your own project.",
    "Editorial benchmark, not an employer standard: complete the react.dev challenges on the assigned pages without opening the solutions for most of them.",
    "Skip this topic if you have built and maintained a hooks-based React app and can explain state ownership and Effect cleanup; still read You Might Not Need an Effect.",
  ],
  deprioritize: [
    "Class components and lifecycle methods (recognize only).",
    "Redux, Zustand, MobX and other state libraries; useReducer and context beyond recognizing them.",
    "Performance optimization: useMemo, useCallback, React.memo and the React Compiler.",
    "Server Components, Server Functions, streaming and server rendering, and Next.js unless a target job requires it.",
    "Custom Hook libraries, higher-order components and render props.",
    "React Native.",
  ],
  keywords: [
    "React",
    "ReactJS",
    "JSX",
    "component",
    "function component",
    "props",
    "state",
    "useState",
    "useEffect",
    "Hooks",
    "lifting state up",
    "controlled component",
    "key prop",
    "re-render",
    "Strict Mode",
    "Vite",
    "Create React App",
    "frontend",
  ],
};

export default topic;
