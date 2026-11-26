import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getGuide, roles, targets } from "@/content/interview-guides";
import { PathView } from "../../preparation";

// One page per published employer target and published role. Nothing else exists.
export const dynamicParams = false;

export function generateStaticParams() {
  return targets.flatMap((target) => roles.map((role) => ({ slug: target.slug, role: role.slug })));
}

type Props = { params: Promise<{ slug: string; role: string }> };

async function resolve(params: Props["params"]) {
  const { slug, role } = await params;
  const target = getGuide(slug);
  const roleGuide = getGuide(role);
  if (!target || !roleGuide || !targets.includes(target) || !roles.includes(roleGuide)) return undefined;
  return { target, role: roleGuide };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = await resolve(params);
  return path ? { title: `${path.target.title} · ${path.role.title}`, description: path.target.description } : {};
}

export default async function TargetRolePage({ params }: Props) {
  const path = await resolve(params);
  if (!path) notFound();
  return <PathView target={path.target} role={path.role} />;
}
