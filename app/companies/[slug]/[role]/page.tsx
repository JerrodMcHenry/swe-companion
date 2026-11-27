import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies, companyRoles, getCompany } from "@/content/companies";
import CompanyView from "../../company-view";

// Software Engineer is the default role at /companies/<slug>; the other roles get their own pages.
export const dynamicParams = false;
// Only roles with hiring evidence at that employer get a page.
export const generateStaticParams = () =>
  companies.flatMap((c) => companyRoles(c).filter((r) => r.slug !== "software-engineer").map((r) => ({ slug: c.slug, role: r.slug })));

type Props = { params: Promise<{ slug: string; role: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, role } = await params;
  const company = getCompany(slug);
  const r = company && companyRoles(company).find((x) => x.slug === role);
  return company && r ? { title: company.slug === "other" ? `${r.title} interview prep` : `${company.name} ${r.title} interview prep`, description: company.card } : {};
}

export default async function CompanyRolePage({ params }: Props) {
  const { slug, role } = await params;
  const company = getCompany(slug);
  const r = company && companyRoles(company).find((x) => x.slug === role);
  if (!company || !r || r.slug === "software-engineer") notFound();
  return (
    <div className="narrow">
      <CompanyView company={company} role={r.slug} />
    </div>
  );
}
