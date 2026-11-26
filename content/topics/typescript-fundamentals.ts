import type { Topic } from "../types";

const topic: Topic = {
  slug: "typescript-fundamentals",
  title: "TypeScript Fundamentals",
  category: "Frontend",
  phase: "full-stack-engineering",
  overview:
    "TypeScript adds static types to JavaScript: annotations and inference, object types, unions, narrowing, function types and basic generics, checked by the compiler and then erased. Learn enough to type a React frontend and its API calls under strict mode, and to understand that a type describes data without checking it at runtime.",
  whyItMatters:
    "TypeScript was the most frequently named frontend technology in this curriculum's R4 sample of 28 entry-level backend and full-stack postings (19 postings, ahead of JavaScript at 16 and React at 18). One candidate report describes debugging in an existing React and TypeScript codebase (Notion, new grad), where reading types is how you learn what data flows where. At work, compiler errors catch many mistakes before the browser does — but only if you understand narrowing and avoid silencing the compiler with any or assertions.",
  prerequisites: [
    "JavaScript Fundamentals",
    "Python Type Hints (static versus runtime typing — the same idea, not repeated here)",
  ],
  objectives: [
    "Annotations and inference: annotate function parameters and exported values; let TypeScript infer local variables and most return types; read a compiler error and fix the code rather than the type.",
    "Primitive types, arrays (string[] or Array<string>), object types and optional properties (email?: string); null and undefined under strictNullChecks.",
    "Type aliases versus interfaces: both describe object shapes; interfaces can be extended and re-opened (declaration merging); type aliases can also name unions and other types. Follow your codebase's convention.",
    "Union types (string | number) and literal types (\"idle\" | \"loading\" | \"error\"); model a fixed set of values with a literal union.",
    "Narrowing: typeof, truthiness and equality checks, the in operator, and discriminated unions (a shared literal field such as status); recognize an exhaustiveness check with never.",
    "Function types: parameter and return types, optional and default parameters, callback types such as (id: number) => void; void versus undefined.",
    "Basic generics: read Array<T>, Promise<T> and useState<T>; write a small generic function such as first<T>(items: T[]): T | undefined.",
    "any versus unknown: any turns checking off; unknown forces you to narrow before use. Avoid as assertions and the non-null assertion (!) unless you can justify them.",
    "Typing React component props with a type or interface, including optional props, children and event handler props (details of components belong to React Fundamentals).",
    "Typing API responses: write types that match your backend's response models, and know the type is a claim, not a check — data from fetch, JSON.parse or localStorage is not verified at runtime. Validate untrusted data at the boundary (a hand-written check, or a schema library if your codebase uses one); see Validation and Error Responses for the server side.",
    "Strict mode: \"strict\": true in tsconfig.json enables the strict family of checks, including strictNullChecks and noImplicitAny; keep it on and run tsc --noEmit (or your editor) to see errors.",
    "Skip for now: conditional, mapped and template literal types, keyof and typeof type operators beyond reading them, declaration files (.d.ts) authoring, decorators, enums (prefer literal unions), overloads, variance and type-level programming.",
  ],
  depth: "Implement: Independently perform appropriately scoped tasks.",
  resources: [
    {
      title: "TypeScript Handbook — The Basics, Everyday Types, Narrowing, More on Functions, Object Types, Generics",
      url: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html",
      provider: "TypeScript (official documentation)",
      type: "Documentation",
      instructions:
        "Start here. Read in order and try the examples in the TypeScript Playground: The Basics (all sections; Erased Types and Strictness matter most). Everyday Types (all, except skim Enums and Less Common Primitives). Narrowing (typeof type guards through The in operator narrowing, then Discriminated unions, The never type and Exhaustiveness checking; skip type predicates and assertion functions). More on Functions (Function Type Expressions, Generic Functions up to Specifying Type Arguments, Optional Parameters, and void, unknown and never under Other Types to Know About; skip overloads and construct signatures). Object Types (Optional Properties, readonly Properties, Extending Types, Intersection Types, The Array Type). Generics (Hello World of Generics and Working with Generic Type Variables only). About four to six hours. Free; no account.",
    },
    {
      title: "Total TypeScript — Beginner's TypeScript tutorial",
      url: "https://www.totaltypescript.com/tutorials/beginners-typescript",
      provider: "Total TypeScript (Matt Pocock)",
      type: "Interactive",
      instructions:
        "Hands-on alternative to reading the Handbook: 18 short exercises, each with a problem introduction and a solution video. You need working JavaScript knowledge. Run the exercises locally by cloning the tutorial's repository and installing dependencies with npm (or in a browser-based environment linked from the page). Free tutorial; the site also sells paid workshops, which you do not need.",
    },
    {
      title: "React — Using TypeScript",
      url: "https://react.dev/learn/typescript",
      provider: "React (official documentation)",
      type: "Documentation",
      instructions:
        "Read after React Fundamentals: TypeScript with React Components, the useState example under Example Hooks, and DOM Events and Children under Useful Types. Skip useReducer, useContext, useMemo and useCallback until you use them. Free; no account.",
    },
    {
      title: "TypeScript Playground",
      url: "https://www.typescriptlang.org/play",
      provider: "TypeScript (official)",
      type: "Interactive",
      instructions:
        "Reference tool: paste a snippet to see compiler errors, inferred types (hover) and the emitted JavaScript, which shows that types are erased. Check its TS Config menu to confirm strict is on. Free; no account.",
    },
  ],
  exercises: [
    {
      title: "Total TypeScript Beginner's TypeScript exercises",
      url: "https://www.totaltypescript.com/tutorials/beginners-typescript",
      note: "Eighteen exercises: annotations, object parameters, optional properties and parameters, unions, arrays, return types, promises, Set and Record, typeof narrowing, catch blocks, extends, intersections, Omit and Pick, and function types. Skip Omit and Pick if short of time. Free; requires Git, Node.js and npm to run locally.",
    },
    {
      title: "Exercism TypeScript: Hamming, ETL, Grade School",
      url: "https://exercism.org/tracks/typescript/exercises/grade-school",
      note: "The TypeScript track has practice exercises but no concept lessons, so use it for fluency: write fully typed solutions under strict mode with no any. Requires a free Exercism account.",
    },
    {
      title: "Apply to your full-stack project: type the API boundary",
      note: "With \"strict\": true, write a type for every response your frontend uses, matching your FastAPI response models; type every component's props; model request state as a discriminated union (idle, loading, error with a message, success with data); fix every error without any, as or !. Then add a runtime check for one response and explain why the type alone was not enough.",
    },
  ],
  interviewQuestions: [
    {
      question: "What is TypeScript, and what does it give you over JavaScript?",
      answer:
        "TypeScript is JavaScript with static types. The compiler checks that values are used consistently — wrong property names, missing null checks, wrong argument types — before the code runs, and editors use the types for autocompletion and safe refactoring. The types are then erased: the output is plain JavaScript with the same runtime behavior, so TypeScript adds no runtime checks. Most types are inferred; you annotate function parameters and the shapes of data that cross boundaries.",
      followUps: ["When would you add an explicit return type?", "Does TypeScript make code slower at runtime?"],
      source: { title: "TypeScript Handbook — The Basics: Erased Types", url: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html" },
    },
    {
      question: "You typed an API response as User. Can the data still be wrong at runtime?",
      answer:
        "Yes. A type annotation or as User on data from fetch, JSON.parse or localStorage is a promise you make to the compiler, not a check: TypeScript cannot see the server's real response, and the types are erased before the code runs. If the backend changes a field or returns an error body, the code fails later in a confusing place. Keep the frontend types in sync with the backend's response models, check response.ok, and validate untrusted or critical data at the boundary — with a small hand-written check or a schema library such as Zod if your codebase uses one. This is the same split as Python type hints versus Pydantic validation.",
      code: `type User = { id: number; name: string };
const user = JSON.parse('{"id": "42", "name": "Ana"}') as User;
console.log(typeof user.id); // -> string`,
      followUps: ["Why is unknown a better type than any for parsed JSON?", "How could you keep frontend types in sync with a FastAPI backend?"],
      source: { title: "TypeScript Handbook — Everyday Types: Type Assertions", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
    },
    {
      question: "What is the difference between an interface and a type alias?",
      answer:
        "Both can describe the shape of an object and are interchangeable in most code. An interface can be extended with extends and re-opened later to add properties (declaration merging). A type alias cannot be re-opened, but it can name any type — unions, literal types, tuples, function types — and combine object types with &. A common convention is interfaces for object shapes and type aliases for unions; follow your codebase's style.",
      followUps: ["How would you describe a value that is either a string or a number?"],
      source: { title: "TypeScript Handbook — Everyday Types: Differences Between Type Aliases and Interfaces", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
    },
    {
      question: "What is narrowing? How do you work with a union type?",
      answer:
        "A union such as string | number allows only operations valid for every member, so you narrow it first. TypeScript follows your control flow: after typeof id === \"number\" it knows id is a number in that branch and a string afterwards. Other narrowing checks are truthiness (for null and undefined), equality, the in operator for object shapes, and instanceof. Without narrowing, id.toUpperCase() is an error because numbers have no such method.",
      code: `function formatId(id: string | number): string {
  if (typeof id === "number") return id.toFixed(0); // id: number here
  return id.toUpperCase();                          // id: string here
}
console.log(formatId(7), formatId("ab")); // -> 7 AB`,
      followUps: ["How would you narrow a value that may be null?"],
      source: { title: "TypeScript Handbook — Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
    },
    {
      question: "What is a discriminated union, and why is it useful for UI state?",
      answer:
        "A union of object types that share a literal field — the discriminant, such as status. Checking that field narrows the value to one member, so the compiler only lets you read data when status is \"success\" and message when it is \"error\". For request state this makes impossible combinations, such as loading with an error and data at the same time, unrepresentable. Adding a never-typed default branch gives an exhaustiveness check: adding a new status makes every unhandled switch fail to compile.",
      code: `type Result =
  | { status: "success"; items: string[] }
  | { status: "error"; message: string };

function describe(result: Result): string {
  if (result.status === "error") return \`Failed: \${result.message}\`;
  return \`\${result.items.length} items\`; // narrowed to the success shape
}
console.log(describe({ status: "error", message: "timeout" })); // -> Failed: timeout
console.log(describe({ status: "success", items: ["a", "b"] })); // -> 2 items`,
      followUps: ["How is this better than separate isLoading, error and data variables?"],
      source: { title: "TypeScript Handbook — Narrowing: Discriminated unions", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
    },
    {
      question: "What is the difference between any and unknown?",
      answer:
        "any switches type checking off for that value: you can call anything on it and it spreads silently into other code, so errors reappear at runtime. unknown also accepts any value, but you must narrow it (typeof, in, a validation function) before using it. Use unknown for data whose shape you have not checked, such as parsed JSON or a caught error, and treat any as a last resort — strict mode's noImplicitAny stops it from appearing by accident.",
      followUps: ["What type does a caught error have in a catch block under strict mode?"],
      source: { title: "TypeScript Handbook — More on Functions: unknown", url: "https://www.typescriptlang.org/docs/handbook/2/functions.html" },
    },
    {
      question: "What are generics? Write a small generic function.",
      answer:
        "Generics let a function or type work with many types while keeping the relationship between them: first returns the same type its array contains. TypeScript usually infers the type argument from the call, so first([3, 1, 2]) is number | undefined without writing first<number>. You already use generics when you read Array<string>, Promise<User> or useState<User | null>(null). For an entry-level role, reading and writing simple ones like this is enough.",
      code: `function first<T>(items: T[]): T | undefined {
  return items[0];
}
const n = first([3, 1, 2]);   // T is inferred as number
const s = first(["a", "b"]);  // T is inferred as string
console.log(n, s);            // -> 3 a`,
      followUps: ["Why not just use any[] as the parameter type?", "What would you type a fetch helper's return value as?"],
      source: { title: "TypeScript Handbook — Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html" },
    },
    {
      question: "How do you type a React component's props?",
      answer:
        "Describe the props with a type or interface and annotate the destructured parameter. Mark optional props with ? and give them a default in the destructuring; type callback props as function types. The compiler then flags a missing required prop or a wrong type at every place the component is used. For children, use React.ReactNode.",
      code: `type ButtonProps = { label: string; disabled?: boolean; onClick: () => void };

function Button({ label, disabled = false, onClick }: ButtonProps) {
  return <button disabled={disabled} onClick={onClick}>{label}</button>;
}`,
      followUps: ["How would you type an onChange handler for a text input?"],
      source: { title: "React — Using TypeScript: TypeScript with React Components", url: "https://react.dev/learn/typescript" },
    },
    {
      question: "What does strict mode do, and why does strictNullChecks matter?",
      answer:
        "\"strict\": true in tsconfig.json enables the strict family of checks, among them noImplicitAny (no silently untyped parameters) and strictNullChecks. With strictNullChecks, null and undefined are not part of every type, so a value of type User | undefined — such as the result of find — must be checked before you use it, which catches the classic \"cannot read properties of undefined\" error at compile time. The non-null assertion (!) tells the compiler to trust you and skips the check, so use it only when you can prove the value exists.",
      followUps: ["What does the email?: string syntax mean, and how does it differ from email: string | undefined?"],
      source: { title: "TypeScript Handbook — Everyday Types: null and undefined", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
    },
  ],
  mistakes: [
    "Using any or as to make an error disappear instead of fixing the code or narrowing.",
    "Believing a type annotation validates data from an API, JSON.parse or localStorage.",
    "Letting frontend types drift from the backend's actual response models.",
    "Using the non-null assertion (!) on values that can really be undefined, such as the result of find.",
    "Modelling UI request state with several booleans that can contradict each other instead of a discriminated union.",
    "Annotating every local variable instead of relying on inference.",
    "Turning strict mode off in an existing project to silence errors.",
    "Studying advanced type-level features before you can type a component and an API response.",
  ],
  mastery: [
    "Interview readiness: you can explain static versus runtime checking, interface versus type, narrowing, discriminated unions, any versus unknown and basic generics without notes.",
    "Interview readiness: you can read a compiler error in an unfamiliar codebase and say what it means and where the wrong assumption is.",
    "Professional competence: under strict mode, you can type your frontend's components, state and API responses without any, unjustified as or !, and explain where runtime validation is still needed.",
    "You complete the Total TypeScript beginner exercises or the Exercism exercises listed under Practice without help (editorial benchmark, not an employer standard).",
    "Skip this topic if you already use TypeScript under strict mode or can do all of the above.",
  ],
  deprioritize: [
    "Conditional, mapped and template literal types, infer, and type-level programming puzzles.",
    "Writing declaration files and library type definitions.",
    "Decorators, enums, namespaces and function overloads beyond recognizing them.",
    "Compiler internals, project references and advanced tsconfig tuning.",
  ],
  keywords: [
    "TypeScript",
    "TS",
    "static typing",
    "type annotation",
    "type inference",
    "interface",
    "type alias",
    "union type",
    "literal type",
    "narrowing",
    "type guard",
    "discriminated union",
    "generics",
    "any",
    "unknown",
    "strict mode",
    "strictNullChecks",
    "tsconfig",
    "props types",
    "type assertion",
  ],
};

export default topic;
