import type { Metadata } from "next";
import Link from "next/link";
import { phases } from "@/content/curriculum";
import { stages } from "@/content/types";
import { getSection } from "../sections";

const section = getSection("/apprenticeship");

export const metadata: Metadata = { title: section.title };

export default function ApprenticeshipPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">{section.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{section.description}</p>

      <div className="mt-12 max-w-3xl space-y-12">
        {stages.map((stage) => (
          <section key={stage}>
            <h2 className="text-sm font-semibold tracking-wide text-stone-600 uppercase">{stage}</h2>
            <ol className="mt-3 divide-y divide-stone-200 border-y border-stone-200">
              {phases
                .filter((phase) => phase.stage === stage)
                .map((phase) => (
                  <li key={phase.slug}>
                    <Link href={`/apprenticeship/${phase.slug}`} className="flex gap-4 py-4 hover:bg-stone-50">
                      <span className="w-6 shrink-0 font-mono text-sm leading-6 text-stone-500">
                        {String(phase.number).padStart(2, "0")}
                      </span>
                      <span>
                        <span className="font-medium">{phase.title}</span>
                        <span className="mt-1 block text-stone-600">{phase.description}</span>
                      </span>
                    </Link>
                  </li>
                ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  );
}
