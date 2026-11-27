import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies, getCompany } from "@/content/companies";
import CompanyView from "../company-view";

export const dynamicParams = false;
export const generateStaticParams = () => companies.map((c) => ({ slug: c.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const company = getCompany((await params).slug);
  return company ? { title: `${company.name} interview prep`, description: company.card } : {};
}

export default async function CompanyPage({ params }: Props) {
  const company = getCompany((await params).slug);
  if (!company) notFound();
  return (
    <div className="narrow">
      <CompanyView company={company} role="software-engineer" />
    </div>
  );
}
