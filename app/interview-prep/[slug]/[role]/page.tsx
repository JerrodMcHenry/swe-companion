import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, roles, targets } from "@/content/interview-guides";
import Moved from "../../../moved";
import { targetName } from "../../../targets";

// Old combined target + role pages forward to the apprenticeship for the same combination.
export const dynamicParams = false;

export function generateStaticParams() {
  return targets.flatMap((target) => roles.map((role) => ({ slug: target.slug, role: role.slug })));
}

type Props = { params: Promise<{ slug: string; role: string }> };

export const metadata: Metadata = { title: "Moved to My Apprenticeship" };

export default async function OldPathPage({ params }: Props) {
  const { slug, role } = await params;
  const target = getGuide(slug);
  if (!target || !getGuide(role)) notFound();
  return (
    <Moved
      href={`/apprenticeship/for/${slug}/${role}`}
      title={`Your ${targetName(slug, target.title)} apprenticeship`}
      text="Interview preparation is now part of My Apprenticeship: one customized learning path for this employer and role."
    />
  );
}
