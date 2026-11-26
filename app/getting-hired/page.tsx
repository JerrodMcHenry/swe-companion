import type { Metadata } from "next";
import Link from "next/link";
import { careerListings, getCareerGuide } from "@/content/career-guides";
import { getSection } from "../sections";

const section = getSection("/getting-hired");

export const metadata: Metadata = { title: section.title };

export default function GettingHiredPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">{section.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{section.description}</p>
      <p className="mt-4 max-w-2xl text-stone-600">
        Preparing for behavioral or project interviews? See{" "}
        <Link
          href="/interview-prep/behavioral-interviews"
          className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600"
        >
          Behavioral Interview Preparation
        </Link>{" "}
        and the other guides in{" "}
        <Link href="/interview-prep" className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600">
          Interview Preparation
        </Link>
        .
      </p>

      <ol className="mt-12 max-w-3xl divide-y divide-stone-200 border-y border-stone-200">
        {careerListings.map((item, index) => {
          const number = (
            <span className="w-6 shrink-0 font-mono text-sm leading-6 text-stone-500">
              {String(index + 1).padStart(2, "0")}
            </span>
          );
          if (!("slug" in item)) {
            return (
              <li key={item.title} className="flex gap-4 py-4">
                {number}
                <span>
                  <span className="font-medium text-stone-500">
                    {item.title} <span className="text-sm font-normal">(planned)</span>
                  </span>
                  <span className="mt-1 block text-stone-500">{item.description}</span>
                </span>
              </li>
            );
          }
          const guide = getCareerGuide(item.slug)!; // Existence is checked at build time in career-guides.ts.
          return (
            <li key={item.title}>
              <Link href={`/getting-hired/${guide.slug}`} className="flex gap-4 py-4 hover:bg-stone-50">
                {number}
                <span>
                  <span className="font-medium">{item.title}</span>
                  <span className="mt-1 block text-stone-600">{guide.description}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </>
  );
}
