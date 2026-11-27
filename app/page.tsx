import Link from "next/link";
import { companies } from "@/content/companies";
import { questionSets } from "@/content/questions";
import { problems } from "@/content/problems";
import { Logo } from "./ui";
import HeroSearch from "./hero-search";

export default function Home() {
  const named = companies.filter((c) => c.kind === "Company");
  const types = companies.filter((c) => c.kind === "Employer type");
  return (
    <>
      <div className="hero">
        <h1>Software engineering interview prep.</h1>
        <HeroSearch />
      </div>

      <section>
        <div className="sechead">
          <h2 className="label">Companies</h2>
        </div>
        <div className="tiles">
          {named.map((c) => (
            <Link key={c.slug} className="tile" href={`/companies/${c.slug}`}>
              <Logo company={c} />
              <span className="n">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="sechead">
          <h2 className="label">Types of employer</h2>
        </div>
        <div className="cats">
          {types.map((c) => (
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
        <div className="sechead">
          <h2 className="label">Topics</h2>
        </div>
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
