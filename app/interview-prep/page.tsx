import type { Metadata } from "next";
import Link from "next/link";
import { getGuide, guideListings } from "@/content/interview-guides";
import { guideCategories, type GuideCategory } from "@/content/types";
import { getSection } from "../sections";

const section = getSection("/interview-prep");

export const metadata: Metadata = { title: section.title };

const headings: Record<GuideCategory, string> = {
  Company: "By company or employer type",
  Role: "By engineering role",
  "Interview type": "By interview type",
};

export default function InterviewPrepPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">{section.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{section.description}</p>

      <div className="mt-12 max-w-3xl space-y-12">
        {guideCategories.map((category) => (
          <section key={category}>
            <h2 className="text-sm font-semibold tracking-wide text-stone-600 uppercase">{headings[category]}</h2>
            <ul className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
              {guideListings[category].map((item) => {
                if ("planned" in item) {
                  return (
                    <li key={item.planned} className="py-3 text-stone-500">
                      {item.planned} <span className="text-sm">(planned)</span>
                    </li>
                  );
                }
                const guide = getGuide(item.slug)!; // Existence is checked at build time in interview-guides.ts.
                return (
                  <li key={guide.slug}>
                    <Link href={`/interview-prep/${guide.slug}`} className="block py-3 hover:bg-stone-50">
                      <span className="font-medium">{guide.title}</span>
                      <span className="mt-1 block text-stone-600">{guide.description}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
