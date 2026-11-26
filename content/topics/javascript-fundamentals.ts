import type { Topic } from "../types";

const topic: Topic = {
  slug: "javascript-fundamentals",
  title: "JavaScript Fundamentals",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "JavaScript for a Python programmer: the parts of the language that behave differently from Python — equality, truthiness, scope and closures, `this`, promises and the event loop, and modules — plus the everyday syntax (arrow functions, destructuring, spread, array methods) that React code uses on every line. General programming concepts are not re-taught here.",
  whyItMatters:
    "JavaScript was named in 16 and TypeScript in 19 of the 28 entry-level backend and full-stack postings in this curriculum's R4 sample (15 of them full-stack), and TypeScript, React and every browser API sit on top of it. Candidate reports include debugging in an existing React and TypeScript codebase (Notion, new grad) and an online assessment task editing HTML, CSS and JavaScript (Accenture India). At work, most frontend bugs that are not layout bugs come from the differences this topic covers: a loose comparison, a shallow copy, a lost `this`, an unhandled rejected promise or a missing await.",
  prerequisites: [
    "Variables and Data Types",
    "Functions and Arguments",
    "Scope",
    "Mutability, References and Copying",
    "Exceptions and Error Handling",
    "Asynchronous Programming Basics (optional: the async/await concept in Python)",
  ],
  objectives: [
    "Declare variables with const by default and let when the variable is reassigned; know that const prevents reassignment, not mutation of the object it refers to, and recognize var (function-scoped, hoisted) in older code.",
    "Types: the primitives (string, number — one type for integers and floats — boolean, null, undefined, bigint, symbol) versus objects (including arrays and functions); typeof and its quirks (typeof null is \"object\"; use Array.isArray for arrays); null (deliberately empty) versus undefined (never assigned, missing property, missing argument).",
    "Functions: declarations, function expressions and arrow functions; default parameters; functions as values passed to other functions (callbacks).",
    "Objects and arrays: literals, property access with . and [], optional chaining (?.), Object.keys/values/entries, and the fact that variables hold references — assignment does not copy.",
    "Scope and closures: block scope with let and const; a closure is a function that keeps access to the variables of the scope where it was created.",
    "Destructuring (const { id, name } = user; const [first, ...rest] = items), rest parameters and spread ({ ...user, name } and [...items, item]); spread makes a shallow copy.",
    "Array methods: map, filter, reduce, find, some, every, includes and forEach; which return a new array and which mutate (push, splice, sort); sort compares as strings unless you pass a comparator.",
    "Equality and truthiness: always use === and !==; == converts types; objects and arrays compare by reference; the falsy values (false, 0, -0, 0n, \"\", null, undefined, NaN) — empty arrays and objects are truthy; ?? (only null or undefined) versus || (any falsy value).",
    "`this` at a basic level: in a method call obj.method() it is obj; a function detached from its object loses it; arrow functions do not have their own `this`; bind fixes it.",
    "Promises and async/await: a promise is pending, fulfilled or rejected; then/catch versus await inside an async function; run independent requests together with Promise.all; JavaScript runs one piece of code at a time on an event loop, and promise callbacks (microtasks) run before timer callbacks.",
    "ES modules: named and default exports, import { x } from \"./file.js\" versus import x; recognize CommonJS require and module.exports in older Node.js code.",
    "Errors: throw new Error(message), try/catch/finally, and handling rejected promises with await inside try/catch or .catch(); an unawaited promise's rejection escapes the surrounding try/catch.",
    "Skip for now: prototypes and the prototype chain in depth, classes beyond reading them, generators and iterators, Proxy and Reflect, getters and setters, WeakMap, regular expressions beyond simple use, and Node.js server development (the backend is Python in this curriculum).",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "The Modern JavaScript Tutorial — Part 1: The JavaScript language (selected chapters)",
      url: "https://javascript.info/js",
      provider: "javascript.info (Ilya Kantor)",
      type: "Book",
      instructions:
        "Start here. Read these chapters and do their tasks, skimming what you already know from Python. JavaScript Fundamentals: Variables, Data types, Comparisons, Logical operators, Nullish coalescing operator '??', Functions, Function expressions, Arrow functions, the basics (use JavaScript specials as a one-page summary). Objects: the basics: Objects, Object references and copying, Object methods, \"this\", Optional chaining '?.'. Data types: Arrays, Array methods, Object.keys, values, entries, Destructuring assignment, JSON methods, toJSON. Advanced working with functions: Rest parameters and spread syntax, Variable scope, closure, The old \"var\" (skim). Error handling: Error handling, \"try...catch\". Promises, async/await: Introduction: callbacks (skim), Promise, Promises chaining, Error handling with promises, Promise API (Promise.all only), Microtasks, Async/await. Modules: Modules, introduction and Export and Import. Then, from Part 2, the first sections of Event loop: microtasks and macrotasks. Skip prototypes, classes, generators and the Miscellaneous chapter. Free; no account.",
    },
    {
      title: "Full Stack Open — Part 1: JavaScript",
      url: "https://fullstackopen.com/en/part1/java_script",
      provider: "University of Helsinki",
      type: "Course",
      instructions:
        "Shorter alternative if you want only what React code needs: variables, arrays (including map and concat), objects, functions, object methods and `this`, and classes. About an hour. It does not cover promises, the event loop or modules — take those chapters from javascript.info. Free; no account to read.",
    },
    {
      title: "MDN — JavaScript Guide: Equality comparisons and sameness, Closures, Using promises, JavaScript modules",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness",
      provider: "MDN Web Docs",
      type: "Documentation",
      instructions:
        "Reference for checking exact behavior. Equality comparisons and sameness (Strict equality, Loose equality), Closures (including Creating closures in loops: A common mistake), Using promises and JavaScript modules are all chapters of the JavaScript Guide linked from this page's sidebar. Free; no account.",
    },
    {
      title: "Exercism — JavaScript track (learning mode)",
      url: "https://exercism.org/tracks/javascript",
      provider: "Exercism",
      type: "Interactive",
      instructions:
        "Hands-on practice with automated tests and optional free human mentoring. Each concept has a short explanation and an exercise; do the ones listed under Practice. Solve in the browser editor or locally with the Exercism CLI. Free; requires a free account.",
    },
  ],
  exercises: [
    {
      title: "javascript.info tasks at the end of each assigned chapter",
      url: "https://javascript.info/js",
      note: "Short tasks with hidden solutions, including output-prediction tasks for comparisons, closures and promises. Answer before opening the solution. Free; no account.",
    },
    {
      title: "Exercism JavaScript: Vehicle Purchase, Amusement Park, Elyses Analytic Enchantments, Elyses Transformative Enchantments",
      url: "https://exercism.org/tracks/javascript/exercises/elyses-transformative-enchantments",
      note: "Comparison, null and undefined, and the array methods (find, some, every, map, filter, reduce). Requires a free Exercism account.",
    },
    {
      title: "Exercism JavaScript: Elyses Destructured Enchantments, Train Driver, Coordinate Transformation, Fruit Picker",
      url: "https://exercism.org/tracks/javascript/exercises/coordinate-transformation",
      note: "Destructuring, rest and spread, closures and callbacks. Requires a free Exercism account.",
    },
    {
      title: "Exercism JavaScript: Translation Service, Factory Sensors",
      url: "https://exercism.org/tracks/javascript/exercises/translation-service",
      note: "Promises (chaining, error handling, retrying) and errors (throwing and catching custom errors). Requires a free Exercism account.",
    },
    {
      title: "Event loop: microtasks and macrotasks — task \"What will be the output of this code?\"",
      url: "https://javascript.info/event-loop",
      note: "Predict the order of synchronous code, promise callbacks and setTimeout callbacks, then explain it aloud. Free; no account.",
    },
    {
      title: "Apply to your full-stack project: the frontend's data helpers",
      note: "Without AI first, write the small functions your frontend needs to turn API JSON into what the screen shows (filter, sort with a comparator, group with reduce, format), and one async function that calls your API with await, checks the response and handles a rejected promise. Then explain each line, including where a copy is shallow.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is the difference between == and ===? How are objects compared?",
      answer:
        "=== compares without type conversion: different types are never equal. == converts the operands first, which produces surprises such as 0 == \"0\" being true, so use === by default. The one common exception is x == null, which is true for both null and undefined. Objects and arrays — including two arrays with the same contents — are equal only if they are the same object (reference equality); compare their contents yourself. NaN is not equal to anything, itself included; use Number.isNaN.",
      code: `console.log(0 == "0", 0 === "0");              // -> true false
console.log(null == undefined, null === undefined); // -> true false
console.log([1, 2] === [1, 2]);                // -> false
const a = { id: 1 };
const b = a;
console.log(a === b);                          // -> true
console.log(NaN === NaN, Number.isNaN(NaN));   // -> false true`,
      followUps: ["How would you check whether two arrays contain the same values?", "How does this compare with Python's == and is?"],
      source: { title: "MDN — Equality comparisons and sameness", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness" },
    },
    {
      question: "What is the difference between null and undefined? What does typeof return?",
      answer:
        "undefined means a value was never assigned: an uninitialized variable, a missing property or argument, or a function with no return value. null is an explicit \"no value\" that code sets on purpose. typeof returns a string naming the type, with two well-known quirks: typeof null is \"object\" (a historical bug) and arrays are \"object\" too, so use value === null and Array.isArray. Functions report \"function\".",
      code: `console.log(typeof null, typeof undefined, typeof []); // -> object undefined object
console.log(typeof (() => 1), Array.isArray([]));      // -> function true
let total;
console.log(total);                                    // -> undefined`,
      followUps: ["What do ?. and ?? do with null and undefined?"],
      source: { title: "MDN — typeof", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof" },
    },
    {
      question: "What are truthy and falsy values? When would you use ?? instead of ||?",
      answer:
        "In a condition, JavaScript converts a value to a boolean. The falsy values are false, 0, -0, 0n, \"\", null, undefined and NaN; everything else is truthy — including empty arrays and objects, unlike Python, so check items.length. a || b returns b whenever a is falsy, which wrongly replaces legitimate values such as 0 or \"\"; a ?? b returns b only when a is null or undefined, so it is the right choice for defaults.",
      code: `const count = 0;
console.log(count || 10, count ?? 10);   // -> 10 0
console.log(Boolean([]), Boolean(""));   // -> true false`,
      followUps: ["Why does {items.length && <List />} sometimes render a 0 in React?"],
      source: { title: "The Modern JavaScript Tutorial — Nullish coalescing operator '??'", url: "https://javascript.info/nullish-coalescing-operator" },
    },
    {
      question: "What is the difference between var, let and const? What does this code print?",
      answer:
        "let and const are block-scoped and cannot be used before their declaration; const cannot be reassigned, but an object or array it refers to can still be changed. var is function-scoped and hoisted, so a var loop variable is one variable shared by every iteration: all three callbacks see its final value, 3. let creates a new binding for each iteration, so each callback keeps its own value. Use const by default, let when you reassign, and never var in new code.",
      code: `for (var i = 0; i < 3; i++) setTimeout(() => console.log("var", i)); // -> var 3, var 3, var 3
for (let j = 0; j < 3; j++) setTimeout(() => console.log("let", j)); // -> let 0, let 1, let 2`,
      followUps: ["Can you push to an array declared with const?"],
      source: { title: "MDN — Closures: Creating closures in loops: A common mistake", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures" },
    },
    {
      question: "What is a closure? Give a practical use.",
      answer:
        "A closure is a function together with the variables from the scope where it was created; it keeps access to them after that outer function has returned. Uses: private state (a counter only its returned function can change), callbacks and event handlers that remember values, and function factories. In React, every event handler and Effect is a closure over the props and state of the render that created it — which is why a stale closure shows old values.",
      code: `function makeCounter() {
  let count = 0;
  return () => ++count;
}
const next = makeCounter();
next();
console.log(next()); // -> 2`,
      followUps: ["Does each call to makeCounter share the same count?", "How is this similar to a Python closure using nonlocal?"],
      source: { title: "MDN — Closures", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures" },
    },
    {
      question: "How does `this` work in a JavaScript function?",
      answer:
        "For a regular function, `this` is decided by how the function is called, not where it is defined: in user.greet() it is user. If you take the method off the object — assign it to a variable or pass it as a callback — and call it on its own, `this` is undefined in strict mode and modules (the global object in old sloppy scripts). bind(user) returns a function with `this` fixed. Arrow functions have no `this` of their own; they use the surrounding one, which is why they are convenient for callbacks inside methods.",
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
      question: "What does this code print, and why? Explain the event loop.",
      answer:
        "A, D, C, B. JavaScript runs one piece of code at a time: the current script runs to completion first (A, D). Then the event loop runs all queued microtasks — promise callbacks — (C) before the next macrotask such as a timer callback (B), even one with a 0 ms delay. The practical consequences: a long synchronous loop freezes the page because nothing else can run, and async code is concurrent but not parallel. The Python asyncio event loop in Asynchronous Programming Basics is the same idea.",
      code: `console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
// -> A, D, C, B`,
      followUps: ["Where does code after an await go?", "What happens to the page during a two-second synchronous loop?"],
      source: { title: "The Modern JavaScript Tutorial — Event loop: microtasks and macrotasks", url: "https://javascript.info/event-loop" },
    },
    {
      question: "What is a promise? How do async/await and error handling relate to it?",
      answer:
        "A promise represents a result that is not available yet; it is pending, then fulfilled with a value or rejected with an error. An async function always returns a promise, and await pauses that function until a promise settles, giving its value or throwing its rejection — so a normal try/catch handles errors. Without await, a rejection is not caught by the surrounding try/catch; handle it with .catch() or it becomes an unhandled rejection. Awaiting independent requests one after another runs them sequentially; start them together with Promise.all (which rejects as soon as one fails) or Promise.allSettled.",
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
      followUps: ["How would you load a user and their orders at the same time?", "What does Promise.all do if one request fails?"],
      source: { title: "The Modern JavaScript Tutorial — Async/await", url: "https://javascript.info/async-await" },
    },
    {
      question: "Use array methods to compute the total of the paid orders. What is surprising about sort?",
      answer:
        "Chain filter (keep paid orders), map (take each total) and reduce (sum, starting from 0); each returns a new value without changing the original array. find returns the first match or undefined. sort is different: it sorts in place and, without a comparator, compares elements as strings — so numbers sort as 1, 10, 9. Pass (a, b) => a - b, and copy first (with [...items] or toSorted) if you must not change the original, for example React state.",
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
      followUps: ["When would a plain for loop be clearer than reduce?", "Which array methods mutate the array?"],
      source: { title: "The Modern JavaScript Tutorial — Array methods", url: "https://javascript.info/array-methods" },
    },
    {
      question: "How do you copy an object, and what does a shallow copy mean?",
      answer:
        "Assignment copies the reference, not the object. Spread ({ ...user }) or Object.assign creates a new object, but only one level deep: nested objects and arrays are still shared, so changing copy.tags changes user.tags too. Copy each level you change (the pattern React state updates use), or use structuredClone for a full deep copy of plain data.",
      code: `const user = { name: "Ana", tags: ["admin"] };
const copy = { ...user, name: "Bo" };
copy.tags.push("editor");
console.log(user.name, user.tags); // -> Ana [ 'admin', 'editor' ]`,
      followUps: ["How would you add a tag to the copy without changing the original?"],
      source: { title: "The Modern JavaScript Tutorial — Object references and copying", url: "https://javascript.info/object-copy" },
    },
    {
      question: "How do ES modules work? What is the difference between named and default exports?",
      answer:
        "Each file is a module with its own scope; it exposes values with export and uses other modules' values with import. A module can have many named exports, imported by their exact names (import { formatPrice } from \"./format.js\"), and at most one default export, imported under any name (import Button from \"./Button.js\"). Imports are resolved before the code runs and a module's code runs once, however often it is imported. Older Node.js code uses CommonJS (require and module.exports) instead.",
      followUps: ["Why do many teams prefer named exports?"],
      source: { title: "MDN — JavaScript modules", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" },
    },
  ],
  mistakes: [
    "Using == and getting a type-converted comparison.",
    "Comparing arrays or objects with === and expecting their contents to be compared.",
    "Assuming an empty array or object is falsy, as in Python.",
    "Using || for defaults and replacing a legitimate 0 or empty string.",
    "Believing spread makes a deep copy, then mutating shared nested data.",
    "Calling sort() on numbers without a comparator, or sorting an array that must not change.",
    "Passing a method as a callback and losing `this`.",
    "Forgetting await, so a try/catch does not catch the rejection and the code uses a pending promise instead of a value.",
    "Awaiting independent requests one by one when Promise.all would run them together.",
    "Studying the whole language before building anything; the selected chapters are enough to start React.",
  ],
  mastery: [
    "Interview readiness: without running them, you can predict and explain the output of short snippets on equality, truthiness, closures in loops, `this` and the event loop order.",
    "Interview readiness: you can explain closures, promises and async/await, and the difference between var, let and const, in a few sentences each without notes.",
    "Professional competence: with documentation available, you can write the data-handling and API-calling functions your frontend needs using array methods, destructuring, spread and async/await with error handling, and explain each line.",
    "You complete the Exercism exercises listed under Practice without help (editorial benchmark, not an employer standard).",
    "Coding interviews in this curriculum use Python; you do not need to solve algorithm problems in JavaScript unless you choose it as your interview language.",
    "Skip this topic if you already write JavaScript professionally or can do all of the above.",
  ],
  deprioritize: [
    "Prototypes, the prototype chain and class internals beyond reading them.",
    "Generators, iterators, Proxy, Reflect, symbols and property descriptors.",
    "Engine internals (hidden classes, garbage collection details) and spec-level type-conversion rules.",
    "Node.js backend development; this curriculum's backend is Python.",
  ],
  keywords: [
    "JavaScript",
    "JS",
    "ECMAScript",
    "ES6",
    "let",
    "const",
    "var",
    "hoisting",
    "arrow function",
    "closure",
    "this",
    "bind",
    "destructuring",
    "spread",
    "rest parameters",
    "map filter reduce",
    "strict equality",
    "===",
    "truthy",
    "falsy",
    "nullish coalescing",
    "optional chaining",
    "promise",
    "async/await",
    "event loop",
    "microtask",
    "ES modules",
    "import export",
  ],
};

export default topic;
