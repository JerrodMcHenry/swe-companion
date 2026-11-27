import Link from "next/link";
import { companies, companyCategories, companyRoles } from "@/content/companies";
import { getQuestionSet } from "@/content/questions";
import type { Company, RoleSlug } from "@/content/types";
import { EvidenceTag, Logo } from "../ui";

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// "2026-11-25" -> "25 November 2026", without time-zone conversion.
const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
};
const roleHref = (company: Company, role: RoleSlug) => (role === "software-engineer" ? `/companies/${company.slug}` : `/companies/${company.slug}/${role}`);

// How much is behind a category link: a question count or a problem count.
function count(href: string, problems?: number) {
  if (problems !== undefined) return `${problems} problems`;
  const slug = href.match(/^\/questions\/([^?]+)/)?.[1];
  const set = slug ? getQuestionSet(slug) : undefined;
  if (!set) return "Guide";
  const group = new URL(href, "https://x.invalid").searchParams.get("group");
  return `${set.questions.filter((q) => !group || q.group === group).length} questions`;
}

export default function CompanyView({ company, role }: { company: Company; role: RoleSlug }) {
  const categories = companyCategories(company, role);
  // On general role pages, point to the specific employers whose pages cover this role.
  const employers =
    company.slug === "other" && role !== "software-engineer"
      ? companies.filter((c) => c.group !== "Types of Employer" && companyRoles(c).some((r) => r.slug === role))
      : [];
  return (
    <>
      <div className="phead" style={{ paddingTop: 32 }}>
        <Logo company={company} large />
        <div style={{ minWidth: 0 }}>
          <h1>{company.name}</h1>
          <p className="muted">{company.tagline}</p>
        </div>
      </div>
      {company.levels && (
        <p className="small" style={{ marginTop: 14 }}>
          <span className="tag third" style={{ marginRight: 8 }}>
            Eligibility
          </span>
          {company.levels} <span className="faint">Postings change; this describes the postings reviewed, not a hiring policy.</span>
        </p>
      )}
      <nav className="seg" aria-label="Role">
        {companyRoles(company).map((r) => (
          <Link key={r.slug} href={roleHref(company, r.slug)} className={r.slug === role ? "on" : undefined} aria-current={r.slug === role ? "page" : undefined}>
            {r.title}
          </Link>
        ))}
      </nav>

      <div className="list" style={{ marginTop: 22 }}>
        {categories.map((c) => (
          <div key={c.key} className="row">
            <Link className="grow cat-link" href={c.href}>
              <div>
                {c.title}
                {c.role && (
                  <span className="tag" style={{ marginLeft: 8 }}>
                    Role skill
                  </span>
                )}
              </div>
              <div className="why">{c.detail}</div>
            </Link>
            {c.practice && (
              <Link className="xs link nw" href={c.practice.href}>
                {c.practice.label}
              </Link>
            )}
            <span className={c.practice ? "xs faint nw hide-m" : "xs faint nw"}>{count(c.href, c.problems)}</span>
            <span className="go" aria-hidden="true">
              ›
            </span>
          </div>
        ))}
      </div>

      {employers.length > 0 && (
        <p className="small" style={{ marginTop: 16 }}>
          <span className="muted">Employers with this role: </span>
          {employers.map((c, i) => (
            <span key={c.slug}>
              {i > 0 && <span className="faint"> · </span>}
              <Link className="link" href={`/companies/${c.slug}/${role}`}>
                {c.name}
              </Link>
            </span>
          ))}
        </p>
      )}

      {company.officialResources.length > 0 && (
        <p className="small" style={{ marginTop: 16 }}>
          <span className="muted">Official preparation: </span>
          {company.officialResources.map((r, i) => (
            <span key={r.url}>
              {i > 0 && <span className="faint"> · </span>}
              <a className="link" href={r.url} target="_blank" rel="noreferrer" title={r.note}>
                {r.title} ↗
              </a>
            </span>
          ))}
        </p>
      )}

      <details className="more">
        <summary>Interview process, eligibility and sources</summary>
        <div>
          <ul className="bul small" style={{ marginTop: 4 }}>
            {company.facts.map((f) => (
              <li key={f.label}>
                <b>{f.label}:</b> {f.value} <EvidenceTag evidence={f.evidence} />
              </li>
            ))}
          </ul>
          <h3>Interview formats</h3>
          <ul className="bul small">
            {company.formats.map((f) => (
              <li key={f.name}>
                <b>{f.name}.</b> <span className="muted">{f.detail}</span> <EvidenceTag evidence={f.evidence} />
              </li>
            ))}
          </ul>
          <p className="small muted" style={{ marginTop: 10 }}>
            {company.caveat}
          </p>
          {company.details.map((d) => (
            <div key={d.heading}>
              <h3>{d.heading}</h3>
              <ul className="bul small muted">
                {d.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          {company.sources.length > 0 && (
            <>
              <h3>Sources</h3>
              <ul className="bul small">
                {company.sources.map((s) => (
                  <li key={s.url}>
                    <a className="link" href={s.url} target="_blank" rel="noreferrer">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="xs faint" style={{ marginTop: 12 }}>
            Evidence last checked {formatDate(company.checked)}. Coding problems are representative practice by pattern, not documented {company.name}{" "}
            questions. Your recruiter&apos;s description of the process overrides this page.
          </p>
        </div>
      </details>
    </>
  );
}
