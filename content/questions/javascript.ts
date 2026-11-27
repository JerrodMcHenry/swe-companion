import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "Language",
    question: "What is the difference between == and ===? How are objects compared?",
    answer: "=== compares without type conversion: different types are never equal. == converts the operands first, which produces surprises such as 0 == \"0\" being true, so use === by default. The one common exception is x == null, which is true for both null and undefined. Objects and arrays — including two arrays with the same contents — are equal only if they are the same object (reference equality); compare their contents yourself. NaN is not equal to anything, itself included; use Number.isNaN.",
    code: `console.log(0 == "0", 0 === "0");              // -> true false
console.log(null == undefined, null === undefined); // -> true false
console.log([1, 2] === [1, 2]);                // -> false
const a = { id: 1 };
const b = a;
console.log(a === b);                          // -> true
console.log(NaN === NaN, Number.isNaN(NaN));   // -> false true`,
    followUps: ["How would you check whether two arrays contain the same values?","How does this compare with Python's == and is?"],
    source: { title: "MDN — Equality comparisons and sameness", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness" },
  },
  {
    group: "Language",
    question: "What is the difference between null and undefined? What does typeof return?",
    answer: "undefined means a value was never assigned: an uninitialized variable, a missing property or argument, or a function with no return value. null is an explicit \"no value\" that code sets on purpose. typeof returns a string naming the type, with two well-known quirks: typeof null is \"object\" (a historical bug) and arrays are \"object\" too, so use value === null and Array.isArray. Functions report \"function\".",
    code: `console.log(typeof null, typeof undefined, typeof []); // -> object undefined object
console.log(typeof (() => 1), Array.isArray([]));      // -> function true
let total;
console.log(total);                                    // -> undefined`,
    followUps: ["What do ?. and ?? do with null and undefined?"],
    source: { title: "MDN — typeof", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof" },
  },
  {
    group: "Language",
    question: "What are truthy and falsy values? When would you use ?? instead of ||?",
    answer: "In a condition, JavaScript converts a value to a boolean. The falsy values are false, 0, -0, 0n, \"\", null, undefined and NaN; everything else is truthy — including empty arrays and objects, unlike Python, so check items.length. a || b returns b whenever a is falsy, which wrongly replaces legitimate values such as 0 or \"\"; a ?? b returns b only when a is null or undefined, so it is the right choice for defaults.",
    code: `const count = 0;
console.log(count || 10, count ?? 10);   // -> 10 0
console.log(Boolean([]), Boolean(""));   // -> true false`,
    followUps: ["Why does {items.length && <List />} sometimes render a 0 in React?"],
    source: { title: "The Modern JavaScript Tutorial — Nullish coalescing operator '??'", url: "https://javascript.info/nullish-coalescing-operator" },
  },
  {
    group: "Language",
    question: "What is the difference between var, let and const? What does this code print?",
    answer: "let and const are block-scoped and cannot be used before their declaration; const cannot be reassigned, but an object or array it refers to can still be changed. var is function-scoped and hoisted, so a var loop variable is one variable shared by every iteration: all three callbacks see its final value, 3. let creates a new binding for each iteration, so each callback keeps its own value. Use const by default, let when you reassign, and never var in new code.",
    code: `for (var i = 0; i < 3; i++) setTimeout(() => console.log("var", i)); // -> var 3, var 3, var 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log("let", j)); // -> let 0, let 1, let 2`,
    followUps: ["Can you push to an array declared with const?"],
    source: { title: "MDN — Closures: Creating closures in loops: A common mistake", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures" },
  },
  {
    group: "Language",
    question: "What is a closure? Give a practical use.",
    answer: "A closure is a function together with the variables from the scope where it was created; it keeps access to them after that outer function has returned. Uses: private state (a counter only its returned function can change), callbacks and event handlers that remember values, and function factories. In React, every event handler and Effect is a closure over the props and state of the render that created it — which is why a stale closure shows old values.",
    code: `function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
next();
console.log(next()); // -> 2`,
    followUps: ["Does each call to makeCounter share the same count?","How is this similar to a Python closure using nonlocal?"],
    source: { title: "MDN — Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures" },
  },
  {
    group: "Language",
    question: "How does `this` work in a JavaScript function?",
    answer: "For a regular function, `this` is decided by how the function is called, not where it is defined: in user.greet() it is user. If you take the method off the object — assign it to a variable or pass it as a callback — and call it on its own, `this` is undefined in strict mode and modules (the global object in non-strict classic scripts; the output below assumes a module or Node). bind(user) returns a function with `this` fixed. Arrow functions have no `this` of their own; they use the surrounding one, which is why they are convenient for callbacks inside methods.",
    code: `const user = {
  name: "Ana",
  greet() {
    return \`Hi \${this?.name}\`;
  },
};
const greet = user.greet;
console.log(user.greet());          // -> Hi Ana
console.log(greet());               // -> Hi undefined
console.log(greet.bind(user)());    // -> Hi Ana`,
    followUps: ["Why should you not write an object's methods as arrow functions?"],
    source: { title: "MDN — this", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this" },
  },
  {
    group: "Language",
    question: "Use array methods to compute the total of the paid orders. What is surprising about sort?",
    answer: "Chain filter (keep paid orders), map (take each total) and reduce (sum, starting from 0); each returns a new value without changing the original array. find returns the first match or undefined. sort is different: it sorts in place and, without a comparator, compares elements as strings — so numbers sort as 1, 10, 9. Pass (a, b) => a - b, and copy first (with [...items] or toSorted) if you must not change the original, for example React state.",
    code: `const orders = [
  { total: 30, paid: true },
  { total: 20, paid: false },
  { total: 50, paid: true },
];
const paidTotal = orders
  .filter((order) => order.paid)
  .map((order) => order.total)
  .reduce((sum, total) => sum + total, 0);
console.log(paidTotal);                                 // -> 80
console.log(orders.find((order) => order.total > 100)); // -> undefined
console.log([10, 9, 1].sort());                         // -> [ 1, 10, 9 ]
console.log([10, 9, 1].sort((x, y) => x - y));          // -> [ 1, 9, 10 ]`,
    followUps: ["When would a plain for loop be clearer than reduce?","Which array methods mutate the array?"],
    source: { title: "The Modern JavaScript Tutorial — Array methods", url: "https://javascript.info/array-methods" },
  },
  {
    group: "Language",
    question: "How do you copy an object, and what does a shallow copy mean?",
    answer: "Assignment copies the reference, not the object. Spread ({ ...user }) or Object.assign creates a new object, but only one level deep: nested objects and arrays are still shared, so changing copy.tags changes user.tags too. Copy each level you change (the pattern React state updates use), or use structuredClone for a full deep copy of plain data.",
    code: `const user = { name: "Ana", tags: ["admin"] };
const copy = { ...user, name: "Bo" };
copy.tags.push("editor");
console.log(user.name, user.tags); // -> Ana [ 'admin', 'editor' ]`,
    followUps: ["How would you add a tag to the copy without changing the original?"],
    source: { title: "The Modern JavaScript Tutorial — Object references and copying", url: "https://javascript.info/object-copy" },
  },
  {
    group: "Language",
    question: "How do ES modules work? What is the difference between named and default exports?",
    answer: "Each file is a module with its own scope; it exposes values with export and uses other modules' values with import. A module can have many named exports, imported by their exact names (import { formatPrice } from \"./format.js\"), and at most one default export, imported under any name (import Button from \"./Button.js\"). Imports are resolved before the code runs and a module's code runs once, however often it is imported. Older Node.js code uses CommonJS (require and module.exports) instead.",
    followUps: ["Why do many teams prefer named exports?"],
    source: { title: "MDN — JavaScript modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" },
  },
  {
    group: "Async",
    question: "What does this code print, and why? Explain the event loop.",
    answer: "A, D, C, B. JavaScript runs one piece of code at a time: the current script runs to completion first (A, D). Then the event loop runs all queued microtasks — promise callbacks — (C) before the next macrotask such as a timer callback (B), even one with a 0 ms delay. The practical consequences: a long synchronous loop freezes the page because nothing else can run, and async code is concurrent but not parallel. The Python asyncio event loop in Asynchronous Programming Basics is the same idea.",
    code: `console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
// -> A, D, C, B`,
    followUps: ["Where does code after an await go?","What happens to the page during a two-second synchronous loop?"],
    source: { title: "The Modern JavaScript Tutorial — Event loop: microtasks and macrotasks", url: "https://javascript.info/event-loop" },
  },
  {
    group: "Async",
    question: "What is a promise? How do async/await and error handling relate to it?",
    answer: "A promise represents a result that is not available yet; it is pending, then fulfilled with a value or rejected with an error. An async function always returns a promise, and await pauses that function until a promise settles, giving its value or throwing its rejection — so a normal try/catch handles errors. Without await, a rejection is not caught by the surrounding try/catch; handle it with .catch() or it becomes an unhandled rejection. Awaiting independent requests one after another runs them sequentially; start them together with Promise.all (which rejects as soon as one fails) or Promise.allSettled.",
    code: `async function fails() {
  throw new Error("boom");
}
async function main() {
  try {
    await fails();
  } catch (error) {
    console.log("caught", error.message); // -> caught boom
  }
  fails().catch((error) => console.log("also caught", error.message)); // -> also caught boom
}
main();`,
    followUps: ["How would you load a user and their orders at the same time?","What does Promise.all do if one request fails?"],
    source: { title: "The Modern JavaScript Tutorial — Async/await", url: "https://javascript.info/async-await" },
  },
  {
    group: "The browser",
    question: "What is the DOM, and how is it different from the HTML source?",
    answer: "The Document Object Model is the tree of objects the browser builds from the HTML — elements, text and attributes as nodes — together with the API JavaScript uses to read and change it. The HTML file is just the starting text: the browser fixes invalid markup (for example adding a missing tbody) and scripts add, remove and change nodes, so the Elements panel shows the current DOM, not the source. Changing the DOM is what updates the page; React computes the changes and applies them to the DOM for you.",
    followUps: ["Why is setting innerHTML with user input dangerous?"],
    source: { title: "MDN — DOM scripting introduction", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting" },
  },
  {
    group: "The browser",
    question: "Explain event bubbling and capturing. What is the difference between event.target and event.currentTarget?",
    answer: "When an event happens on an element, it travels in three phases: capturing, from the window down through the ancestors to the element; the target phase; then bubbling, back up through each ancestor. addEventListener listens during bubbling by default ({ capture: true } listens during capture). So a click on a button inside a list also triggers click listeners on the list and the body. event.target is the element where the event started — the button; event.currentTarget is the element whose listener is running — the list. stopPropagation() stops the event from travelling further; use it sparingly because it hides events from other code.",
    followUps: ["Do all events bubble?"],
    source: { title: "MDN — Event bubbling", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling" },
  },
  {
    group: "The browser",
    question: "What is event delegation, and why use it?",
    answer: "Attaching one listener to a common parent instead of one to every child, and using event.target (often with closest()) to find which child was involved. It works because events bubble. It needs fewer listeners, and it automatically handles children added later, such as new list items. Check that the target is something you care about, because clicks on other parts of the parent arrive too.",
    code: `document.querySelector("#todo-list").addEventListener("click", (event) => {
  const button = event.target.closest("button.delete");
  if (!button) return;                 // the click was not on a delete button
  button.closest("li").remove();
});`,
    followUps: ["Why use closest() instead of checking event.target directly?"],
    source: { title: "The Modern JavaScript Tutorial — Event delegation", url: "https://javascript.info/event-delegation" },
  },
  {
    group: "The browser",
    question: "What is the difference between preventDefault() and stopPropagation()?",
    answer: "preventDefault() cancels the browser's default action for the event — submitting a form and reloading the page, following a link, typing a character — but the event still propagates to other listeners. stopPropagation() stops the event from reaching listeners on other elements but does not cancel the default action. Handling a form in JavaScript or React needs preventDefault() in the submit handler; it rarely needs stopPropagation().",
    followUps: ["Why listen for submit on the form rather than click on the button?"],
    source: { title: "MDN — Introduction to events: Preventing default behavior", url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events" },
  },
  {
    group: "The browser",
    question: "Compare localStorage, sessionStorage and cookies.",
    answer: "localStorage keeps string key-value data for the origin until it is cleared; sessionStorage is the same but per tab and cleared when the tab closes. Both are synchronous, hold only strings (store objects with JSON.stringify), are never sent to the server automatically and are readable by any JavaScript on the page — so an XSS bug exposes them, and secrets do not belong there. Cookies are small values the browser sends automatically with every matching request, which is why servers use them for sessions; HttpOnly hides a cookie from JavaScript, Secure restricts it to HTTPS and SameSite limits sending it on cross-site requests. Where to keep an authentication token is a trade-off covered in Authentication and Authorization.",
    followUps: ["What would you store in localStorage in a real app?","Why can't JavaScript read an HttpOnly cookie, and why is that useful?"],
    source: { title: "MDN — Web Storage API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API" },
  },
  {
    group: "The browser",
    question: "What is the same-origin policy? What counts as the same origin?",
    answer: "An origin is the combination of scheme, host and port: https://app.example.com and https://app.example.com:443/settings are the same origin, while http:// instead of https://, api.example.com instead of app.example.com, or localhost:5173 versus localhost:8000 are different origins. The same-origin policy is a browser rule that stops a page's scripts from reading responses or data from another origin, so a malicious site cannot read your email or bank data using your logged-in cookies. Cross-origin embedding (images, scripts, form submissions) is generally allowed; reading the response is what is restricted, and CORS is how a server opts in to allowing it.",
    followUps: ["Why is a frontend on localhost:5173 calling an API on localhost:8000 cross-origin?"],
    source: { title: "MDN — Same-origin policy", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy" },
  },
  {
    group: "The browser",
    question: "What is a CORS preflight request, and when does the browser send one?",
    answer: "Before a cross-origin request that is not \"simple\", the browser automatically sends an OPTIONS request with Origin, Access-Control-Request-Method and Access-Control-Request-Headers, asking whether the real request is allowed. Simple requests are GET, HEAD or POST with only safelisted headers and a form or plain-text content type; so a JSON POST (Content-Type: application/json), a PUT or DELETE, or any request with an Authorization header is preflighted. The server must answer with matching Access-Control-Allow-Origin, -Methods and -Headers (and may cache the answer with Access-Control-Max-Age), otherwise the browser never sends the real request. curl and server-to-server calls do not do this, because CORS is enforced by browsers. Fixing a CORS error in your own app is covered in Forms, API Integration and UI States.",
    followUps: ["Why does a wildcard Access-Control-Allow-Origin not work with credentials?","Where would you see the preflight in developer tools?"],
    source: { title: "MDN — Cross-Origin Resource Sharing (CORS): Preflighted requests", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS" },
  },
  {
    group: "The browser",
    question: "How does the browser render a page? Why can a script tag slow it down?",
    answer: "The browser parses HTML into the DOM and CSS into the CSSOM, combines them to compute each visible element's styles, calculates layout (sizes and positions — reflow) and paints pixels. A classic <script> in the head stops HTML parsing until it has downloaded and run, so the page appears later; defer downloads in parallel and runs after parsing, in order, and async runs as soon as it downloads, in any order. Module scripts are deferred by default. Later, changing anything that affects geometry (adding elements, changing width) triggers layout again, so many small layout changes in a loop are slow; changing only colors needs just a repaint.",
    followUps: ["What is the difference between defer and async?","Why does CSS block rendering?"],
    source: { title: "MDN — Populating the page: how browsers work", url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work" },
  },
  {
    group: "The browser",
    question: "A user reports that clicking a button does nothing. How would you debug it in the browser?",
    answer: "Reproduce it with developer tools open. Check the Console for an error thrown when you click. In the Elements panel, select the button and check its Event Listeners tab — is a handler attached at all, and is the button disabled or covered by another element? If the click should send a request, look in the Network panel: no request means the handler fails or returns early; a request with an error status or a CORS failure points elsewhere. Then set a breakpoint in the handler (or a click event listener breakpoint in Sources), step through and inspect the values. State a hypothesis at each step instead of changing code at random.",
    followUps: ["How would you tell a frontend bug from a backend bug?"],
    source: { title: "Chrome DevTools — Debug JavaScript", url: "https://developer.chrome.com/docs/devtools/javascript" },
  },
];

export default questions;
