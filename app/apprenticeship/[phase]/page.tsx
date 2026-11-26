import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhase, phases } from "@/content/curriculum";
import { getTopic } from "@/content/topics";
import { getSection } from "../../sections";

// Only slugs listed in content/curriculum.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return phases.map((phase) => ({ phase: phase.slug }));
}

type Props = { params: Promise<{ phase: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const phase = getPhase((await params).phase);
  return phase ? { title: phase.title, description: phase.description } : {};
}

function label(number: number) {
  return `Unit ${String(number).padStart(2, "0")}`;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-stone-200 pt-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 leading-relaxed text-stone-700">{children}</div>
    </section>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function PhasePage({ params }: Props) {
  const phase = getPhase((await params).phase);
  if (!phase) notFound();

  const index = phases.indexOf(phase);
  const previous = phases[index - 1];
  const next = phases[index + 1];

  return (
    <article className="max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
        <Link href="/apprenticeship" className="hover:text-stone-900 hover:underline">
          Apprenticeship
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{phase.title}</span>
      </nav>

      <header className="mt-6">
        <p className="text-sm text-stone-600">
          {label(phase.number)} · {phase.stage}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{phase.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">{phase.description}</p>
      </header>

      <div className="mt-10 space-y-8">
        {phase.readiness && phase.readiness.length > 0 && (
          <Section title="Can you already do this?">
            <p className="mb-3">If you can already do everything below, skip this unit and move on to the next one or your target path.</p>
            <List items={phase.readiness} />
          </Section>
        )}

        {phase.objectives && phase.objectives.length > 0 && (
          <Section title="Learning objectives">
            <List items={phase.objectives} />
          </Section>
        )}

        <Section title="Topics">
          {phase.topics && phase.topics.length > 0 ? (
            <ol className="list-decimal space-y-1.5 pl-6 marker:text-stone-500">
              {phase.topics.map((item) => {
                if ("planned" in item) {
                  return (
                    <li key={item.planned} className="text-stone-500">
                      {item.planned} <span className="text-sm">(planned)</span>
                    </li>
                  );
                }
                const topic = getTopic(item.slug)!; // Existence is checked at build time in curriculum.ts.
                return (
                  <li key={topic.slug}>
                    <Link
                      href={`/library/${topic.slug}`}
                      className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600"
                    >
                      {topic.title}
                    </Link>
                  </li>
                );
              })}
            </ol>
          ) : phase.sectionHref ? (
            <p>
              This unit is covered in the{" "}
              <Link
                href={phase.sectionHref}
                className="font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600"
              >
                {getSection(phase.sectionHref).title}
              </Link>{" "}
              section.
            </p>
          ) : (
            <p className="text-stone-600">Detailed content for this unit is forthcoming.</p>
          )}
        </Section>

        {phase.mastery && phase.mastery.length > 0 && (
          <Section title="Stopping point">
            <List items={phase.mastery} />
          </Section>
        )}
      </div>

      <nav aria-label="Units" className="mt-12 flex justify-between gap-6 border-t border-stone-200 pt-6 text-sm">
        {previous ? (
          <Link href={`/apprenticeship/${previous.slug}`} className="hover:underline">
            <span className="block text-stone-600">← Previous</span>
            <span className="font-medium">
              {label(previous.number)}: {previous.title}
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/apprenticeship/${next.slug}`} className="text-right hover:underline">
            <span className="block text-stone-600">Next →</span>
            <span className="font-medium">
              {label(next.number)}: {next.title}
            </span>
          </Link>
        )}
      </nav>
    </article>
  );
}
