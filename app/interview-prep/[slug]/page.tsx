import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultRole, getGuide, guides, isTarget } from "@/content/interview-guides";
import Moved from "../../moved";
import { targetName } from "../../targets";
import GuideView from "../guide-view";

// Format and role guides live here (linked from the Library). Employer targets moved to /apprenticeship/for/...
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
  if (isTarget(guide)) {
    return (
      <Moved
        href={`/apprenticeship/for/${guide.slug}/${defaultRole}`}
        title={`Your ${targetName(guide.slug, guide.title)} apprenticeship`}
        text="Interview preparation is now part of My Apprenticeship: one customized learning path for this employer."
      />
    );
  }
  return <GuideView guide={guide} />;
}
