import Link from "next/link";
import { sections } from "./sections";

export default function HomePage() {
  return (
    <>
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Stop searching. Start learning. Get hired.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 sm:text-xl">
        A curated, research-backed path to becoming an employable software engineer.
      </p>
      <p className="mt-6">
        <Link
          href="/interview-prep"
          className="inline-block rounded-md border border-stone-900 px-4 py-2 font-medium text-stone-900 hover:bg-stone-900 hover:text-white"
        >
          Choose your target employer and role <span aria-hidden="true">→</span>
        </Link>
      </p>
      <ul className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2">
        {sections.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="group flex h-full flex-col rounded-lg border border-stone-200 p-6 hover:border-stone-400 hover:bg-stone-50"
            >
              <h2 className="text-lg font-semibold">{section.title}</h2>
              <p className="mt-2 leading-relaxed text-stone-600">{section.description}</p>
              <span className="mt-auto pt-4 text-sm font-medium text-stone-900 group-hover:underline group-hover:underline-offset-4">
                Open {section.title} <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
