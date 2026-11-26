import { getGuide, roles, targets } from "@/content/interview-guides";
import { buildRoadmap, hasRoadmap } from "@/content/roadmap";
import { targetName } from "../../targets";

// Resolves the employer target and role in an apprenticeship URL. Only published combinations exist.
export function targetRoleParams() {
  return targets.flatMap((target) => roles.map((role) => ({ target: target.slug, role: role.slug })));
}

export function resolvePath(targetSlug: string, roleSlug: string) {
  const target = getGuide(targetSlug);
  const role = getGuide(roleSlug);
  if (!target || !role || !targets.includes(target) || !roles.includes(role)) return undefined;
  return {
    target,
    role,
    name: targetName(target.slug, target.title),
    roleTitle: role.title.replace(/^Entry-Level /, ""),
    roadmap: hasRoadmap(target) ? buildRoadmap(target, role) : undefined,
  };
}
