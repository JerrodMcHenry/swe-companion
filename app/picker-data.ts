import { getGuide, guideListings, selectableRoles } from "@/content/interview-guides";
import { roleCards, targetCards } from "./targets";
import type { PickerRole, PickerTarget } from "./target-picker";

// Picker cards for every published employer target, in the order of the target listings.
function toCard(slug: string): PickerTarget {
  const guide = getGuide(slug)!; // Listings are checked at build time in interview-guides.ts.
  const card = targetCards[slug];
  return { slug, name: card?.name ?? guide.title, text: card?.text ?? guide.description, icon: card?.icon ?? guide.title[0], tone: card?.tone ?? "indigo" };
}
const published = (category: "Company" | "Employer type") =>
  guideListings[category].flatMap((item) => ("slug" in item ? [toCard(item.slug)] : []));

export const pickerCompanies = published("Company");
export const pickerEmployerTypes = published("Employer type");
export const pickerRoles: PickerRole[] = selectableRoles.map((item) =>
  "slug" in item
    ? { slug: item.slug, title: getGuide(item.slug)!.title.replace(/^Entry-Level /, ""), text: roleCards[item.slug] ?? getGuide(item.slug)!.description }
    : { title: item.planned, text: roleCards[item.planned] ?? "" },
);

// Build-time check: the saved selection is validated against these cards, so every published target and role needs one.
for (const item of [...pickerCompanies, ...pickerEmployerTypes]) if (!targetCards[item.slug]) throw new Error(`No target card for ${item.slug}`);
for (const item of pickerRoles) if (item.slug && !roleCards[item.slug]) throw new Error(`No role card for ${item.slug}`);
