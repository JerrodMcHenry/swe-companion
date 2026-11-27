import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies, getCompany, getRole } from "@/content/companies";
import CompanyView from "../../company-view";

// Software Engineer is the default role at /companies/<slug>; the other roles get their own pages.
export const dynamicParams = false;
export const generateStaticParams = () =>
  companies.flatMap((c) => ["backend-engineer", "full-stack-engineer"].map((role) => ({ slug: c.slug, role })));

type Props = { params: Promise<{ slug: string; role: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, role } = await params;
  const company = getCompany(slug);
  const r = getRole(role);
  return company && r ? { title: `${company.name} ${r.title} interview prep`, description: company.card } : {};
}

export default async function CompanyRolePage({ params }: Props) {
  const { slug, role } = await params;
  const company = getCompany(slug);
  const r = getRole(role);
  if (!company || !r || r.slug === "software-engineer") notFound();
  return (
    <div className="narrow">
      <CompanyView company={company} role={r.slug} />
    </div>
  );
}
