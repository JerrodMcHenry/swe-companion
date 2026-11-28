import type { Question } from "../types";

const WEB = "https://web.dev";
const MDN = "https://developer.mozilla.org/en-US/docs";

// Frontend system design, web performance, rendering strategies, caching and frontend security, plus
// representative practical exercises. Browser, JavaScript, React and accessibility basics live in their own
// sets. Answers are original; code examples were run in Node or headless Chrome. Exercises are representative
// practice, not documented employer questions.
const questions: Question[] = [
  {
    group: "Performance & Core Web Vitals",
    question: "What are the Core Web Vitals, and what counts as a good score?",
    answer:
      "Three field metrics Google uses to summarize user experience. Largest Contentful Paint (LCP) measures loading: when the largest image or text block appears; good is 2.5 seconds or less. Interaction to Next Paint (INP) measures responsiveness: the delay from a click, tap or key press to the next frame, reported for roughly the slowest interaction of the visit; good is 200 milliseconds or less. INP replaced First Input Delay in March 2024. Cumulative Layout Shift (CLS) measures visual stability: how much content moves unexpectedly; good is 0.1 or less. Each is judged at the 75th percentile of real page visits, separately for mobile and desktop.",
    followUps: ["What is the difference between lab and field data?", "Why is INP harder to measure in a lab than LCP?"],
    source: { title: "web.dev — Web Vitals", url: `${WEB}/articles/vitals` },
  },
  {
    group: "Performance & Core Web Vitals",
    question: "A page feels slow. How would you diagnose it?",
    answer:
      "First pin down what “slow” means: slow to appear (LCP), slow to respond (INP) or jumping around (CLS), and for whom (device, network, page). Check field data, such as the Chrome UX Report or your own real-user monitoring, then reproduce in the lab with Lighthouse and a Chrome DevTools Performance recording under CPU and network throttling. For slow loading, look at server response time, render-blocking CSS and scripts, the LCP resource and large JavaScript bundles. For slow interactions, look for long tasks on the main thread. Fix the largest cause, measure again and watch the field numbers after release.",
    followUps: ["The page is fast on your laptop but slow for users. Why might that be?"],
    source: { title: "Chrome DevTools — Analyze runtime performance", url: "https://developer.chrome.com/docs/devtools/performance" },
  },
  {
    group: "Performance & Core Web Vitals",
    question: "How would you improve a poor Largest Contentful Paint?",
    answer:
      "Find the LCP element (often a hero image or heading) and shorten each step before it renders. Reduce server response time with caching and a CDN. Make the resource discoverable early: put the image in the HTML rather than loading it from JavaScript, preload it if needed and give it fetchpriority=\"high\"; never lazy-load it. Shrink it with the right size (srcset and sizes) and modern formats such as WebP or AVIF. Remove render-blocking CSS and scripts with defer, critical CSS and smaller bundles. Server rendering or static generation helps when the content is otherwise built by client-side JavaScript.",
    source: { title: "web.dev — Optimize Largest Contentful Paint", url: `${WEB}/articles/optimize-lcp` },
  },
  {
    group: "Performance & Core Web Vitals",
    question: "What causes poor Interaction to Next Paint, and how do you fix it?",
    answer:
      "The main thread is busy when the user interacts, the event handler itself does too much work, or the resulting render is expensive. Long tasks (over 50 milliseconds) block the next frame. Fixes: break long work into smaller tasks and yield to the browser between them; show visual feedback first and do the rest afterwards; move heavy computation to a Web Worker; debounce work triggered by typing; render less, for example by virtualizing long lists; and avoid forcing layout repeatedly in handlers. Third-party scripts are a common hidden cause.",
    code: `// Update the UI first, then yield before the non-urgent work
button.addEventListener("click", async () => {
  showSpinner();
  await new Promise((resolve) => setTimeout(resolve, 0)); // let the browser paint (or scheduler.yield() where supported)
  saveDraft();
  sendAnalytics();
});`,
    source: { title: "web.dev — Optimize Interaction to Next Paint", url: `${WEB}/articles/optimize-inp` },
  },
  {
    group: "Performance & Core Web Vitals",
    question: "What causes layout shifts, and how do you prevent them?",
    answer:
      "Content moves when space for it was not reserved: images and videos without dimensions, ads and embeds that load late, banners inserted above existing content and web fonts that swap in with different metrics. Give media width and height attributes (or aspect-ratio) so the browser reserves space, reserve fixed slots for late content, insert new content below the viewport or in response to a user action, and limit font swaps with font-display and matched fallback metrics. Animate with transform rather than properties that change layout.",
    source: { title: "web.dev — Optimize Cumulative Layout Shift", url: `${WEB}/articles/optimize-cls` },
  },
  {
    group: "Performance & Core Web Vitals",
    question: "Which DOM and CSS changes are expensive, and how do you keep animations smooth?",
    answer:
      "Changing geometry (width, top, adding elements) forces layout, then paint and compositing; changing colors needs paint; transform and opacity can usually be handled by the compositor alone, so they are the cheapest to animate. Layout thrashing happens when code alternates writes and reads, because reading offsetWidth or getBoundingClientRect after a write forces the browser to recalculate layout immediately. Batch all reads, then all writes, and run visual updates in requestAnimationFrame.",
    code: `// Slow: each read follows a write, forcing layout every iteration
for (const el of items) el.style.width = el.parentElement.offsetWidth / 2 + "px";

// Fast: read everything, then write everything
const widths = items.map((el) => el.parentElement.offsetWidth);
items.forEach((el, i) => (el.style.width = widths[i] / 2 + "px"));`,
    source: { title: "web.dev — Avoid large, complex layouts and layout thrashing", url: `${WEB}/articles/avoid-large-complex-layouts-and-layout-thrashing` },
  },
  {
    group: "Performance & Core Web Vitals",
    question: "What are code splitting and lazy loading, and what are the trade-offs?",
    answer:
      "Code splitting breaks the JavaScript bundle into chunks so a page downloads only the code it needs; lazy loading defers loading something until it is needed. Split by route first, then by heavy features that are not needed immediately (an editor, a chart, a modal), using dynamic import() or React.lazy with Suspense. Lazy-load below-the-fold images with loading=\"lazy\". The trade-off is a delay when the deferred code is finally needed and more requests; prefetch likely next chunks when the browser is idle, and never lazy-load what is needed for the first view.",
    code: `import { lazy, Suspense } from "react";
const Chart = lazy(() => import("./Chart")); // separate chunk, loaded on first render

export function Report() {
  return (
    <Suspense fallback={<p>Loading chart…</p>}>
      <Chart />
    </Suspense>
  );
}`,
    source: { title: "React — lazy", url: "https://react.dev/reference/react/lazy" },
  },
  {
    group: "Rendering & caching",
    question: "Compare client-side rendering, server-side rendering and static generation. What is hydration?",
    answer:
      "Client-side rendering (CSR) sends a mostly empty HTML page and builds the UI in the browser: simple to host and fine for app-like pages behind a login, but content appears late and depends on JavaScript. Server-side rendering (SSR) builds the HTML for each request: content appears sooner and is easy for search engines to read, but needs a server and adds work per request. Static generation builds HTML at deploy time and serves it from a CDN: fastest and cheapest, but content is only as fresh as the last build, unless the framework regenerates pages periodically. Hydration is the step where client JavaScript attaches event handlers and state to server-rendered HTML; until it finishes the page is visible but may not respond, so large bundles still hurt interactivity.",
    followUps: ["Which would you choose for a product page, a dashboard and a blog?", "What causes a hydration mismatch?"],
    source: { title: "web.dev — Rendering on the Web", url: `${WEB}/articles/rendering-on-the-web` },
  },
  {
    group: "Rendering & caching",
    question: "How does HTTP caching work for a web app's HTML, JavaScript and images?",
    answer:
      "The Cache-Control response header decides. Files whose names include a content hash (app.3f9a1c.js) never change, so serve them with a long max-age and immutable; a new build gets a new name. HTML should use no-cache, which means “store it but revalidate every time”: the browser sends the ETag or Last-Modified value back and gets a small 304 Not Modified if nothing changed. Use no-store, not no-cache, for sensitive responses that must never be stored, and private for per-user responses that a shared CDN must not cache.",
    code: `# Hashed assets: cache for a year
Cache-Control: public, max-age=31536000, immutable
# HTML: always revalidate so users get the newest asset names
Cache-Control: no-cache
# Account page: never store
Cache-Control: no-store`,
    source: { title: "MDN — HTTP caching", url: `${MDN}/Web/HTTP/Guides/Caching` },
  },
  {
    group: "Rendering & caching",
    question: "How should a frontend cache and refresh data from an API?",
    answer:
      "Treat server data as a cache, not as state you own: keep it keyed by the request (for example [\"user\", id]), reuse it across components, deduplicate requests in flight, and refetch when it may be stale (on focus, on an interval or after a mutation). Showing cached data immediately and refreshing it in the background (stale-while-revalidate) makes screens feel instant. After a mutation, invalidate or update the affected keys, optimistically if the change is likely to succeed, rolling back on error. Libraries such as TanStack Query and SWR implement these patterns, so you rarely need to copy server data into a global store.",
    source: { title: "TanStack Query — Important defaults", url: "https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults" },
  },
  {
    group: "Frontend system design",
    question: "How do you approach a frontend system design interview?",
    answer:
      "Work through a structure such as RADIO. Requirements: clarify features, users, devices, scale and what is out of scope. Architecture: sketch the main components (views, data store, API layer) and how data flows. Data model: what the client stores, its shape and where each piece of state lives. Interface: the API between client and server, and the props or events between components. Optimizations: performance, accessibility, error and loading states, offline behavior, internationalization and security. Spend most of the time on the parts specific to the product, state your trade-offs and keep server internals brief unless asked.",
    followUps: ["How would your answer change for a low-end mobile device on a slow network?"],
    source: { title: "GreatFrontEnd — RADIO framework", url: "https://www.greatfrontend.com/front-end-system-design-playbook/framework" },
  },
  {
    group: "Frontend system design",
    question: "Design a news feed with infinite scrolling.",
    answer:
      "Requirements: a scrolling list of posts with text and images, likes, new posts, and good performance on mobile. Architecture: a feed view, a post component and a data layer that caches pages. Data model: posts normalized by id, plus the ordered list of ids and a cursor for the next page. API: GET /feed?cursor=…&limit=20 with cursor pagination, which stays correct when new posts are inserted (offset pagination would repeat or skip items). Optimizations: load the next page before the user reaches the end, virtualize very long lists, lazy-load images with fixed dimensions to avoid layout shifts, update likes optimistically, restore scroll position on back navigation, and handle errors with a retry. For accessibility, keep a real “Load more” button available and do not move focus unexpectedly.",
    source: { title: "GreatFrontEnd — News feed system design (free question)", url: "https://www.greatfrontend.com/questions/system-design/news-feed-facebook" },
  },
  {
    group: "Frontend system design",
    question: "How do you decide where state lives: component state, context, a global store, a data-fetching cache or the URL?",
    answer:
      "Start local and move state only when you have to. State used by one component stays in it; state shared by siblings moves to their closest common parent. Context suits values many components read but that rarely change, such as the theme or the signed-in user. Server data belongs in a data-fetching cache. Anything a user should be able to bookmark, share or restore with the back button (filters, search terms, the current page or tab) belongs in the URL. A global store is for complex client-only state that many distant components update, such as an editor document. Duplicating the same data in two places is the most common source of bugs.",
    source: { title: "React — Choosing the state structure", url: "https://react.dev/learn/choosing-the-state-structure" },
  },
  {
    group: "Frontend system design",
    question: "How would you design the API of a reusable component, such as a select or a modal?",
    answer:
      "Make the common case simple and the rare case possible. Use semantic HTML and correct keyboard and screen-reader behavior by default. Support both controlled use (value and onChange) and uncontrolled use (defaultValue). Prefer composition (children or small subcomponents) over dozens of boolean props, pass through native attributes and refs so it works with forms and focus management, and expose styling through a className or a few variants rather than many style props. Name events after what happened (onOpenChange), document examples and test behavior through what the user sees and does.",
    followUps: ["When would you split one component into two?"],
    source: { title: "WAI-ARIA Authoring Practices — Patterns", url: "https://www.w3.org/WAI/ARIA/apg/patterns/" },
  },
  {
    group: "Frontend security",
    question: "How do you prevent cross-site scripting in a React app, and what does a Content Security Policy add?",
    answer:
      "React escapes text it renders, so the main risks are the escape hatches: dangerouslySetInnerHTML with untrusted HTML (sanitize it first, for example with DOMPurify), URLs from users placed in href or src (allow only http and https), direct DOM manipulation, and third-party scripts. A Content Security Policy is a response header that limits where scripts may load from and blocks inline scripts unless they carry a nonce (freshly random for every response) or hash, so an injection that slips through usually cannot run. Roll it out with Content-Security-Policy-Report-Only first to find what would break.",
    code: `Content-Security-Policy: script-src 'nonce-r4nd0m' 'strict-dynamic'; object-src 'none'; base-uri 'none'`,
    source: { title: "web.dev — Mitigate cross-site scripting with a strict CSP", url: `${WEB}/articles/strict-csp` },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: implement debounce and throttle. When would you use each?",
    answer:
      "Debounce waits until calls stop for a given time and then runs once, with the latest arguments: use it for search-as-you-type or saving a draft. Throttle runs at most once per interval while calls continue: use it for scroll or resize handlers and progress updates. Interviewers often ask for variations, such as running on the leading edge, a trailing call for throttle, or a cancel method, so clarify which behavior they want.",
    code: `function debounce(fn, wait) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), wait);
  };
}

function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

const log = debounce((q) => console.log("search", q), 100);
log("r"); log("re"); log("react");   // -> search react (once, after 100 ms)`,
    followUps: ["Add a trailing call to throttle so the last event is not lost.", "How would you test these with fake timers?"],
    source: { title: "javascript.info — Throttle decorator (practice task with solution)", url: "https://javascript.info/task/throttle" },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: implement Promise.all.",
    answer:
      "Return a new promise. Wrap each item with Promise.resolve so plain values work, store each result at its original index (promises can settle in any order), count how many are left and resolve when the count reaches zero. Reject as soon as any input rejects. An empty input resolves immediately with an empty array. Follow-ups often ask for Promise.allSettled (never rejects; collects statuses) or a version that limits how many tasks run at once.",
    code: `function promiseAll(items) {
  return new Promise((resolve, reject) => {
    const results = new Array(items.length);
    let remaining = items.length;
    if (remaining === 0) return resolve(results);
    items.forEach((item, i) => {
      Promise.resolve(item).then((value) => {
        results[i] = value;
        if (--remaining === 0) resolve(results);
      }, reject);
    });
  });
}

const wait = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));
promiseAll([wait(30, "a"), 2, wait(10, "c")]).then(console.log); // -> [ 'a', 2, 'c' ]`,
    followUps: ["Run at most three tasks at a time.", "How does Promise.allSettled differ?"],
    source: { title: "MDN — Promise.all()", url: `${MDN}/Web/JavaScript/Reference/Global_Objects/Promise/all` },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: build an accessible autocomplete. What should a complete solution handle?",
    answer:
      "Behavior: wait until the user pauses typing (debounce), skip very short queries, cancel or ignore responses for older queries, cache results per query, and show loading, error and empty states. Keyboard: arrow keys move through options, Enter selects, Escape closes, and focus stays in the input. Accessibility: follow the ARIA combobox pattern: the input has role=\"combobox\", aria-expanded and aria-controls pointing at a role=\"listbox\" element; the highlighted option is referenced with aria-activedescendant and marked aria-selected; announce the number of results in a polite live region. Also highlight the matched text and make options clickable.",
    code: `let controller;
async function search(query) {
  controller?.abort();                 // cancel the previous request
  controller = new AbortController();
  try {
    const res = await fetch(\`/api/search?q=\${encodeURIComponent(query)}\`, { signal: controller.signal });
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    return await res.json();
  } catch (err) {
    if (err.name === "AbortError") return null; // superseded by a newer query
    throw err;
  }
}`,
    source: { title: "WAI-ARIA Authoring Practices — Combobox pattern", url: "https://www.w3.org/WAI/ARIA/apg/patterns/combobox/" },
  },
  {
    group: "Practical exercises",
    question: "Representative exercise: load more items as the user scrolls. How would you implement it?",
    answer:
      "Place a sentinel element after the list and watch it with IntersectionObserver, which is cheaper and simpler than listening to scroll events. When it becomes visible (a rootMargin starts loading a little early), fetch the next page with the cursor from the previous response, append the items and stop when there is no next cursor. The observer fires only when visibility changes, so if a page does not fill the screen, check again after appending. Guard against duplicate requests while one is in flight, handle errors with a retry, and keep a visible “Load more” button for keyboard and screen-reader users. For thousands of items, add list virtualization.",
    code: `let cursor = null, loading = false;
const observer = new IntersectionObserver(async ([entry]) => {
  if (!entry.isIntersecting || loading) return;
  loading = true;
  try {
    const res = await fetch(\`/api/items?limit=20\${cursor ? \`&cursor=\${cursor}\` : ""}\`);
    if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
    const page = await res.json();
    appendItems(page.items);
    cursor = page.nextCursor;
    if (!cursor) observer.disconnect();     // no more pages
  } catch {
    showRetry();
  } finally {
    loading = false;
  }
}, { rootMargin: "200px" });
observer.observe(document.querySelector("#sentinel"));`,
    source: { title: "MDN — Intersection Observer API", url: `${MDN}/Web/API/Intersection_Observer_API` },
  },
];

export default questions;
