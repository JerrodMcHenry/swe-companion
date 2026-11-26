import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { defaultRole, getGuide, guides, isTarget } from "@/content/interview-guides";
import { GuideBody, PathView } from "../preparation";

// Only slugs listed in content/interview-guides.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const guide = getGuide((await params).slug);
  return guide ? { title: guide.title, description: guide.description } : {};
}

export default async function GuidePage({ params }: Props) {
  const guide = getGuide((await params).slug);
  if (!guide) notFound();

  // Employer targets (companies and employer types) show the combined path for the default role.
  if (isTarget(guide)) return <PathView target={guide} role={getGuide(defaultRole)!} />;

  return (
    <article className="max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
        <Link href="/interview-prep" className="hover:text-stone-900 hover:underline">
          Interview Preparation
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{guide.title}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{guide.title}</h1>
        <p className="mt-2 text-sm text-stone-600">
          {guide.category}
          {guide.level && ` · ${guide.level}`}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">{guide.overview}</p>
        {guide.category === "Role" && (
          <p className="mt-4 text-sm text-stone-600">
            Preparing for a specific employer?{" "}
            <Link href="/interview-prep" className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600">
              Choose your target
            </Link>{" "}
            to combine this role with that employer&apos;s interview priorities.
          </p>
        )}
      </header>

      <GuideBody guide={guide} />
    </article>
  );
}
