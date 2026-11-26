import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { composePath, defaultRole, getGuide, targets } from "@/content/interview-guides";
import { hasRoadmap } from "@/content/roadmap";
import { Bullets, Collapsible, Crumbs, ExternalLink } from "../../../../ui";
import { targetName } from "../../../../targets";

// The research behind an apprenticeship: kept complete, one click away from the learning path.
export const dynamicParams = false;

export function generateStaticParams() {
  return targets.map((target) => ({ target: target.slug }));
}

type Props = { params: Promise<{ target: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const target = getGuide((await params).target);
  return target ? { title: `About ${targetName(target.slug, target.title)}` } : {};
}

export default async function AboutEmployerPage({ params }: Props) {
  const target = getGuide((await params).target);
  if (!target || !targets.includes(target)) notFound();
  const role = getGuide(defaultRole)!;
  const name = targetName(target.slug, target.title);
  const path = composePath(target, role);

  return (
    <div className="narrow">
      <Crumbs
        items={[
          { label: "My Apprenticeship", href: "/apprenticeship" },
          { label: name, href: `/apprenticeship/for/${target.slug}/${role.slug}` },
          { label: "About this employer" },
        ]}
      />
      <h1 className="title">About {name}</h1>
      <p className="lead" style={{ fontSize: 17 }}>
        The research behind your apprenticeship. Processes change and candidate reports are not guarantees — always confirm the format with your
        recruiter.
      </p>
      <p className="body2" style={{ marginTop: 14 }}>
        {target.overview}
      </p>
      <div style={{ marginTop: 22 }}>
        {(target.guidance ?? []).map((block) => (
          <Collapsible key={block.heading} title={block.heading} open={block.heading === "Eligibility"}>
            <Bullets items={block.items} />
          </Collapsible>
        ))}
        {target.process && target.process.length > 0 && (
          <Collapsible title="Interview process">
            <Bullets items={target.process} />
          </Collapsible>
        )}
        {target.competencies && target.competencies.length > 0 && (
          <Collapsible title="What the interviews assess">
            <Bullets items={target.competencies} />
          </Collapsible>
        )}
        {hasRoadmap(target) && target.sequence && target.sequence.length > 0 && (
          <Collapsible title="Preparation approach">
            <Bullets items={target.sequence} />
          </Collapsible>
        )}
        {path.resources.length > 0 && (
          <Collapsible title="Employer resources">
            <ul>
              {path.resources.map((resource) => (
                <li key={resource.url}>
                  <ExternalLink href={resource.url}>{resource.title}</ExternalLink>
                  <div className="small">{resource.instructions}</div>
                </li>
              ))}
            </ul>
          </Collapsible>
        )}
        {path.sources.length > 0 && (
          <Collapsible title={`Sources (${path.sources.length})`}>
            <ul>
              {path.sources.map((source) => (
                <li key={source.url}>
                  <ExternalLink href={source.url}>{source.title}</ExternalLink>
                </li>
              ))}
            </ul>
            {target.verifiedOn && <p className="small">Last verified {target.verifiedOn}.</p>}
          </Collapsible>
        )}
        <Collapsible title="How this apprenticeship was built">
          <Bullets
            items={[
              `Interview priorities and depth come from the ${target.title} research; on-the-job competencies come from the ${role.title} role.`,
              "Each topic appears once, in an explicit order chosen for this target. Topics not placed in the apprenticeship stay available in the Knowledge Library.",
              "Priorities are editorial recommendations built on the evidence above, unless marked official.",
              "A format confirmed by your recruiter, or a requirement in the actual posting, overrides these defaults.",
            ]}
          />
        </Collapsible>
      </div>
    </div>
  );
}
