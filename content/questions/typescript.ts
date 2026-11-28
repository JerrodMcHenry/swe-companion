import type { Question } from "../types";

const questions: Question[] = [
  {
    group: "TypeScript",
    question: "What is TypeScript, and what does it give you over JavaScript?",
    answer: "TypeScript is JavaScript with static types. The compiler checks that values are used consistently — wrong property names, missing null checks, wrong argument types — before the code runs, and editors use the types for autocompletion and safe refactoring. The types are then erased: the output is plain JavaScript with the same runtime behavior, so TypeScript adds no runtime checks. Most types are inferred; you annotate function parameters and the shapes of data that cross boundaries.",
    followUps: ["When would you add an explicit return type?","Does TypeScript make code slower at runtime?"],
    source: { title: "TypeScript Handbook — The Basics: Erased Types", url: "https://www.typescriptlang.org/docs/handbook/2/basic-types.html" },
  },
  {
    group: "TypeScript",
    question: "You typed an API response as User. Can the data still be wrong at runtime?",
    answer: "Yes. A type annotation or as User on data from fetch, JSON.parse or localStorage is a promise you make to the compiler, not a check: TypeScript cannot see the server's real response, and the types are erased before the code runs. If the backend changes a field or returns an error body, the code fails later in a confusing place. Keep the frontend types in sync with the backend's response models, check response.ok, and validate untrusted or critical data at the boundary — with a small hand-written check or a schema library such as Zod if your codebase uses one. This is the same split as Python type hints versus Pydantic validation.",
    code: `type User = { id: number; name: string };
const user = JSON.parse('{"id": "42", "name": "Ana"}') as User;
console.log(typeof user.id); // -> string`,
    followUps: ["Why is unknown a better type than any for parsed JSON?","How could you keep frontend types in sync with a FastAPI backend?"],
    source: { title: "TypeScript Handbook — Everyday Types: Type Assertions", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
  },
  {
    group: "TypeScript",
    question: "What is the difference between an interface and a type alias?",
    answer: "Both can describe the shape of an object and are interchangeable in most code. An interface can be extended with extends and re-opened later to add properties (declaration merging). A type alias cannot be re-opened, but it can name any type — unions, literal types, tuples, function types — and combine object types with &. A common convention is interfaces for object shapes and type aliases for unions; follow your codebase's style.",
    followUps: ["How would you describe a value that is either a string or a number?"],
    source: { title: "TypeScript Handbook — Everyday Types: Differences Between Type Aliases and Interfaces", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
  },
  {
    group: "TypeScript",
    question: "What is narrowing? How do you work with a union type?",
    answer: "A union such as string | number allows only operations valid for every member, so you narrow it first. TypeScript follows your control flow: after typeof id === \"number\" it knows id is a number in that branch and a string afterwards. Other narrowing checks are truthiness (for null and undefined), equality, the in operator for object shapes, and instanceof. Without narrowing, id.toUpperCase() is an error because numbers have no such method.",
    code: `function formatId(id: string | number): string {
  if (typeof id === "number") return id.toFixed(0); // id: number here
  return id.toUpperCase();                          // id: string here
}
console.log(formatId(7), formatId("ab")); // -> 7 AB`,
    followUps: ["How would you narrow a value that may be null?"],
    source: { title: "TypeScript Handbook — Narrowing", url: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html" },
  },
  {
    group: "TypeScript",
    question: "What is a discriminated union, and why is it useful for UI state?",
    answer: "A union of object types that share a literal field — the discriminant, such as status. Checking that field narrows the value to one member, so the compiler only lets you read data when status is \"success\" and message when it is \"error\". For request state this makes impossible combinations, such as loading with an error and data at the same time, unrepresentable. Adding a never-typed default branch gives an exhaustiveness check: adding a new status makes every unhandled switch fail to compile.",
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
    group: "TypeScript",
    question: "What is the difference between any and unknown?",
    answer: "any switches type checking off for that value: you can call anything on it and it spreads silently into other code, so errors reappear at runtime. unknown also accepts any value, but you must narrow it (typeof, in, a validation function) before using it. Use unknown for data whose shape you have not checked, such as parsed JSON or a caught error, and treat any as a last resort. Strict mode's noImplicitAny only catches implicit any (such as an unannotated parameter); JSON.parse and response.json() still return any, so annotate their results as unknown yourself.",
    followUps: ["What type does a caught error have in a catch block under strict mode?"],
    source: { title: "TypeScript Handbook — More on Functions: unknown", url: "https://www.typescriptlang.org/docs/handbook/2/functions.html" },
  },
  {
    group: "TypeScript",
    question: "What are generics? Write a small generic function.",
    answer: "Generics let a function or type work with many types while keeping the relationship between them: first returns the same type its array contains. TypeScript usually infers the type argument from the call, so first([3, 1, 2]) is number | undefined without writing first<number>. You already use generics when you read Array<string>, Promise<User> or useState<User | null>(null). For an entry-level role, reading and writing simple ones like this is enough.",
    code: `function first<T>(items: T[]): T | undefined {
  return items[0];
}
const n = first([3, 1, 2]);   // T is inferred as number
const s = first(["a", "b"]);  // T is inferred as string
console.log(n, s);            // -> 3 a`,
    followUps: ["Why not just use any[] as the parameter type?","What would you type a fetch helper's return value as?"],
    source: { title: "TypeScript Handbook — Generics", url: "https://www.typescriptlang.org/docs/handbook/2/generics.html" },
  },
  {
    group: "TypeScript",
    question: "How do you type a React component's props?",
    answer: "Describe the props with a type or interface and annotate the destructured parameter. Mark optional props with ? and give them a default in the destructuring; type callback props as function types. The compiler then flags a missing required prop or a wrong type at every place the component is used. For children, use React.ReactNode.",
    code: `type ButtonProps = { label: string; disabled?: boolean; onClick: () => void };

function Button({ label, disabled = false, onClick }: ButtonProps) {
  return <button disabled={disabled} onClick={onClick}>{label}</button>;
}`,
    followUps: ["How would you type an onChange handler for a text input?"],
    source: { title: "React — Using TypeScript: TypeScript with React Components", url: "https://react.dev/learn/typescript" },
  },
  {
    group: "TypeScript",
    question: "What does strict mode do, and why does strictNullChecks matter?",
    answer: "\"strict\": true in tsconfig.json enables the strict family of checks, among them noImplicitAny (no silently untyped parameters) and strictNullChecks. With strictNullChecks, null and undefined are not part of every type, so a value of type User | undefined — such as the result of find — must be checked before you use it, which catches the classic \"cannot read properties of undefined\" error at compile time. The non-null assertion (!) tells the compiler to trust you and skips the check, so use it only when you can prove the value exists.",
    followUps: ["What does the email?: string syntax mean, and how does it differ from email: string | undefined?"],
    source: { title: "TypeScript Handbook — Everyday Types: null and undefined", url: "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html" },
  },
];

export default questions;
