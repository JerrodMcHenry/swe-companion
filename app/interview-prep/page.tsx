import type { Metadata } from "next";
import Link from "next/link";
import { getGuide, guideListings } from "@/content/interview-guides";
import type { GuideCategory } from "@/content/types";
import { getSection } from "../sections";

const section = getSection("/interview-prep");

export const metadata: Metadata = { title: section.title };

const groups: { category: GuideCategory; heading: string; intro?: string }[] = [
  { category: "Company", heading: "Companies" },
  {
    category: "Employer type",
    heading: "Employer types",
    intro: "Targeting a company without its own path, or one specific job posting? Use Other employer or specific job posting.",
  },
  { category: "Role", heading: "Role details", intro: "You choose your role on your target's page; these guides describe each role on its own." },
  { category: "Interview type", heading: "Interview formats", intro: "Reference guides for each assessment format, linked from the target paths." },
];

function Listing({ category }: { category: GuideCategory }) {
  return (
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
  );
}

export default function InterviewPrepPage() {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Choose your target</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">{section.description}</p>
      <ol className="mt-6 max-w-2xl list-decimal space-y-1 pl-6 text-stone-700">
        <li>Choose the company or type of employer you are applying to.</li>
        <li>On its page, choose your role: you get one preparation path covering eligibility, interview priorities, role competencies, practice and readiness.</li>
      </ol>

      <div className="mt-12 max-w-3xl space-y-12">
        {groups.map((group) => (
          <section key={group.category}>
            <h2 className="text-sm font-semibold tracking-wide text-stone-600 uppercase">{group.heading}</h2>
            {group.intro && <p className="mt-2 text-sm text-stone-600">{group.intro}</p>}
            <Listing category={group.category} />
          </section>
        ))}
      </div>
    </>
  );
}
