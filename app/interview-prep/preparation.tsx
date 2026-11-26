import Link from "next/link";
import {
  composePath,
  getGuide,
  getGuideByPath,
  selectableRoles,
  type PathEntry,
  type PreparationPath,
} from "@/content/interview-guides";
import { getTopic } from "@/content/topics";
import type { GuidanceBlock, InterviewGuide } from "@/content/types";

// Rendering shared by single guides (/interview-prep/<slug>) and composed target + role paths.

const linkClass = "font-medium text-stone-900 underline underline-offset-4 hover:text-stone-600";
const priorities = ["Essential", "Important", "Optional", "Defer"] as const;
const priorityLabels: Record<(typeof priorities)[number], string> = {
  Essential: "Essential",
  Important: "Important",
  Optional: "Optional",
  Defer: "Defer for now",
};

export function Section({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 border-t border-stone-200 pt-8">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-3 leading-relaxed text-stone-700">{children}</div>
    </section>
  );
}

export function List({ items, ordered }: { items: string[]; ordered?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <Tag className={`${ordered ? "list-decimal pl-6" : "list-disc pl-5"} space-y-1.5`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  );
}

export function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {children}
      <span aria-hidden="true"> ↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function GuidanceBlocks({ blocks }: { blocks?: GuidanceBlock[] }) {
  return (blocks ?? []).map((block) => (
    <Section key={block.heading} title={block.heading}>
      <List items={block.items} />
    </Section>
  ));
}

// Study priorities grouped by priority, with target depth, reasons, notes and selected exercises.
export function StudyTopics({ items, only }: { items: PathEntry[]; only?: readonly (typeof priorities)[number][] }) {
  const groups = (only ?? priorities).filter((priority) => items.some((item) => item.priority === priority));
  return (
    <div className="space-y-6">
      {groups.map((priority) => (
        <div key={priority}>
          <h3 className="font-semibold text-stone-900">{priorityLabels[priority]}</h3>
          <ul className="mt-2 list-disc space-y-3 pl-5">
            {items
              .filter((item) => item.priority === priority)
              .map((item) => {
                const topic = item.slug ? getTopic(item.slug) : undefined;
                const exercises = (item.exercises ?? []).map((title) => topic!.exercises.find((e) => e.title === title)!);
                return (
                  <li key={item.slug ?? item.title}>
                    {item.title}
                    {item.depth && <span className="text-sm text-stone-600"> · depth: {item.depth}</span>}
                    {topic && (
                      <>
                        {" "}
                        <span className="text-stone-600">— topic: </span>
                        <Link href={`/library/${topic.slug}`} className={linkClass}>
                          {topic.title}
                        </Link>
                      </>
                    )}
                    {item.reason && <p className="mt-0.5 text-sm text-stone-600">{item.reason}</p>}
                    {item.note && <p className="mt-0.5 text-sm text-stone-600 italic">{item.note}</p>}
                    {exercises.length > 0 && (
                      <div className="mt-1 text-sm">
                        <span className="text-stone-600">Selected practice: </span>
                        {exercises.map((exercise, index) => (
                          <span key={exercise.title}>
                            {index > 0 && "; "}
                            {exercise.url ? <ExternalLink href={exercise.url}>{exercise.title}</ExternalLink> : exercise.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function RelatedGuides({ refs }: { refs?: string[] }) {
  if (!refs || refs.length === 0) return null;
  return (
    <Section title="Related guides">
      <ul className="list-disc space-y-1.5 pl-5">
        {refs.map((href) => {
          const guide = getGuideByPath(href)!; // Existence is checked at build time in interview-guides.ts.
          return (
            <li key={href}>
              <Link href={href} className={linkClass}>
                {guide.title}
              </Link>
              <span className="text-stone-600"> — {guide.description}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function Resources({ items }: { items: NonNullable<InterviewGuide["resources"]> }) {
  return (
    <ol className="space-y-5">
      {items.map((resource) => (
        <li key={resource.url}>
          <ExternalLink href={resource.url}>{resource.title}</ExternalLink>
          <p className="mt-1 text-sm text-stone-600">
            {resource.provider} · {resource.type}
            {resource.verifiedOn && ` · Verified ${resource.verifiedOn}`}
          </p>
          <p className="mt-1">{resource.instructions}</p>
        </li>
      ))}
    </ol>
  );
}

function Practice({ items }: { items: NonNullable<InterviewGuide["practice"]> }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((exercise) => (
        <li key={exercise.title}>
          {exercise.url ? <ExternalLink href={exercise.url}>{exercise.title}</ExternalLink> : exercise.title}
          {exercise.note && <p className="mt-0.5 text-sm text-stone-600">{exercise.note}</p>}
        </li>
      ))}
    </ul>
  );
}

function Sources({ items, verifiedOn }: { items: NonNullable<InterviewGuide["sources"]>; verifiedOn?: string }) {
  if (items.length === 0 && !verifiedOn) return null;
  return (
    <Section title="Sources">
      {items.length > 0 && (
        <ul className="list-disc space-y-1.5 pl-5">
          {items.map((source) => (
            <li key={source.url}>
              <ExternalLink href={source.url}>{source.title}</ExternalLink>
            </li>
          ))}
        </ul>
      )}
      {verifiedOn && <p className="mt-3 text-sm text-stone-600">Last verified {verifiedOn}.</p>}
    </Section>
  );
}

// The body of a single guide (formats, roles), as on /interview-prep/<slug>.
export function GuideBody({ guide }: { guide: InterviewGuide }) {
  return (
    <div className="mt-10 space-y-8">
      <GuidanceBlocks blocks={guide.guidance} />
      {guide.process && guide.process.length > 0 && (
        <Section title="Interview process">
          <List items={guide.process} ordered />
        </Section>
      )}
      {guide.competencies && guide.competencies.length > 0 && (
        <Section title="Required competencies">
          <List items={guide.competencies} />
        </Section>
      )}
      {guide.studyTopics && guide.studyTopics.length > 0 && (
        <Section title="Study priorities">
          <StudyTopics items={guide.studyTopics} />
        </Section>
      )}
      {guide.sequence && guide.sequence.length > 0 && (
        <Section title="Preparation sequence">
          <List items={guide.sequence} ordered />
        </Section>
      )}
      {guide.practice && guide.practice.length > 0 && (
        <Section title="Practice recommendations">
          <Practice items={guide.practice} />
        </Section>
      )}
      {guide.resources && guide.resources.length > 0 && (
        <Section title="Learning resources">
          <Resources items={guide.resources} />
        </Section>
      )}
      {guide.readiness && guide.readiness.length > 0 && (
        <Section title="Readiness criteria" id="readiness">
          <List items={guide.readiness} />
        </Section>
      )}
      <RelatedGuides refs={guide.relatedGuides} />
      <Sources items={guide.sources ?? []} verifiedOn={guide.verifiedOn} />
    </div>
  );
}

// Guidance blocks shown before the roadmap; all other blocks follow it as supporting detail.
const leadingBlocks = new Set(["Eligibility", "Evidence and limitations", "How to use this path"]);

// One coherent preparation path: an employer target combined with a role.
export function PathView({ target, role }: { target: InterviewGuide; role: InterviewGuide }) {
  const path: PreparationPath = composePath(target, role);
  const interviewItems = path.interview.filter((item) => item.priority !== "Defer");
  const roleItems = path.roleTopics.filter((item) => item.priority !== "Defer");
  const deferred = [...path.interview, ...path.roleTopics].filter((item) => item.priority === "Defer");
  const leading = target.guidance?.filter((block) => leadingBlocks.has(block.heading));
  const supporting = target.guidance?.filter((block) => !leadingBlocks.has(block.heading));

  return (
    <article className="max-w-3xl">
      <nav aria-label="Breadcrumb" className="text-sm text-stone-600">
        <Link href="/interview-prep" className="hover:text-stone-900 hover:underline">
          Choose your target
        </Link>
        <span aria-hidden="true"> / </span>
        <span aria-current="page">{target.title}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-4xl font-semibold tracking-tight">{target.title}</h1>
        <p className="mt-2 text-sm text-stone-600">
          {target.category}
          {target.level && ` · ${target.level}`} · Role: {role.title}
        </p>
        <p className="mt-6 text-lg leading-relaxed text-stone-700">{target.overview}</p>

        <div className="mt-6 rounded-md border border-stone-200 p-4">
          <p className="text-sm font-medium text-stone-900">Your role</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {selectableRoles.map((item) => {
              if ("planned" in item) {
                return (
                  <li key={item.planned} className="text-stone-500">
                    {item.planned} (planned)
                  </li>
                );
              }
              const option = getGuide(item.slug)!;
              return (
                <li key={option.slug}>
                  {option.slug === role.slug ? (
                    <span aria-current="true" className="font-semibold text-stone-900">
                      {option.title} ✓
                    </span>
                  ) : (
                    <Link href={`/interview-prep/${target.slug}/${option.slug}`} className={linkClass}>
                      {option.title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <p className="mt-3 text-sm text-stone-600">
            Already able to do some of this? Check the{" "}
            <a href="#readiness" className={linkClass}>
              readiness criteria
            </a>{" "}
            and each topic&apos;s readiness section first, and skip what you can demonstrate.
          </p>
        </div>
      </header>

      <div className="mt-10 space-y-8">
        <GuidanceBlocks blocks={leading} />

        <Section title="Interview preparation priorities">
          <p className="mb-4 text-sm text-stone-600">
            What to prepare for this employer&apos;s interviews, with the depth this target needs. Depth here can be lower than a topic
            page&apos;s own depth.
          </p>
          <StudyTopics items={interviewItems} />
        </Section>

        <Section title={`Role and on-the-job competencies: ${role.title}`}>
          <p className="mb-4 text-sm text-stone-600">
            What the role requires for professional readiness that is not already covered above. Some of it may not be tested in this
            employer&apos;s interviews but is still needed on the job.
          </p>
          {role.guidance?.map((block) => (
            <div key={block.heading} className="mb-6">
              <h3 className="font-semibold text-stone-900">{block.heading}</h3>
              <div className="mt-2">
                <List items={block.items} />
              </div>
            </div>
          ))}
          <StudyTopics items={roleItems} />
        </Section>

        {deferred.length > 0 && (
          <Section title="What to defer">
            <StudyTopics items={deferred} only={["Defer"]} />
          </Section>
        )}

        {target.sequence && target.sequence.length > 0 && (
          <Section title="Preparation sequence">
            <List items={target.sequence} ordered />
          </Section>
        )}

        {target.process && target.process.length > 0 && (
          <Section title="Interview process">
            <List items={target.process} ordered />
          </Section>
        )}

        {target.competencies && target.competencies.length > 0 && (
          <Section title="What the interviews assess">
            <List items={target.competencies} />
          </Section>
        )}

        {path.practice.length > 0 && (
          <Section title="Practice recommendations">
            <Practice items={path.practice} />
          </Section>
        )}

        {path.resources.length > 0 && (
          <Section title="Learning resources">
            <Resources items={path.resources} />
          </Section>
        )}

        <Section title="Readiness and stopping point" id="readiness">
          {target.readiness && target.readiness.length > 0 && (
            <>
              <h3 className="font-semibold text-stone-900">Interview readiness</h3>
              <div className="mt-2">
                <List items={target.readiness} />
              </div>
            </>
          )}
          {role.readiness && role.readiness.length > 0 && (
            <>
              <h3 className="mt-6 font-semibold text-stone-900">Professional readiness for this role</h3>
              <div className="mt-2">
                <List items={role.readiness} />
              </div>
            </>
          )}
        </Section>

        <GuidanceBlocks blocks={supporting} />

        <Section title="How this path was combined">
          <List
            items={[
              `Interview priorities and depth come from the ${target.title} guide; role competencies come from the ${role.title} guide.`,
              "Each topic appears once. If the employer already prioritizes a topic for interviews, the role's requirement is merged into that entry with a note.",
              "If a topic is a lower interview priority for this employer but the role needs it, it appears once in the role section, stating both priorities: it may not be tested here, but it is still needed on the job.",
              "A format confirmed by your recruiter, or a requirement in the actual posting, overrides these defaults.",
            ]}
          />
        </Section>

        <RelatedGuides refs={path.relatedGuides} />
        <Sources items={path.sources} verifiedOn={target.verifiedOn} />
      </div>
    </article>
  );
}
