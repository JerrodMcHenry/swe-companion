import Link from "next/link";
import { companies, companyRoles, getCompany } from "@/content/companies";
import { questionSets } from "@/content/questions";
import { problems } from "@/content/problems";
import type { Company } from "@/content/types";
import { Logo } from "./ui";
import HeroSearch from "./hero-search";

function Tiles({ items }: { items: Company[] }) {
  return (
    <div className="tiles">
      {items.map((c) => (
        <Link key={c.slug} className="tile" href={`/companies/${c.slug}`}>
          <Logo company={c} />
          <span className="n">{c.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  const inGroup = (g: Company["group"]) => companies.filter((c) => c.group === g);
  // General preparation for each role lives on the General preparation page (slug "other"), so no extra page is needed.
  const general = getCompany("other")!;
  return (
    <>
      <div className="hero">
        <h1>Software engineering interview prep.</h1>
        <HeroSearch />
      </div>

      <section>
        <h2 className="label sechead">Prepare by role</h2>
        <div className="hints" style={{ marginTop: 0 }}>
          {companyRoles(general).map((r) => (
            <Link key={r.slug} className="chip" href={r.slug === "software-engineer" ? "/companies/other" : `/companies/other/${r.slug}`}>
              {r.title}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="label sechead">Big Tech</h2>
        <Tiles items={inGroup("Big Tech")} />
      </section>

      <section>
        <h2 className="label sechead">AI Companies</h2>
        <Tiles items={inGroup("AI Companies")} />
      </section>

      <section>
        <h2 className="label sechead">Quantitative Trading</h2>
        <Tiles items={inGroup("Quantitative Trading")} />
      </section>

      <section>
        <h2 className="label sechead">Types of employer</h2>
        <div className="cats">
          {inGroup("Types of Employer").map((c) => (
            <Link key={c.slug} className="cat" href={`/companies/${c.slug}`}>
              <Logo company={c} />
              <div>
                <div className="n">{c.name}</div>
                <div className="d">{c.card}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="label sechead">Topics</h2>
        <div className="topics">
          <Link href="/problems">
            <span>Coding Problems</span>
            <span className="c">{problems.length}</span>
          </Link>
          {questionSets.map((s) => (
            <Link key={s.slug} href={`/questions/${s.slug}`}>
              <span>{s.title}</span>
              <span className="c">{s.questions.length}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
