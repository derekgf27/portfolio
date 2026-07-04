import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { Metrics } from "@/components/Metrics";
import { ScreenshotMockup } from "@/components/ScreenshotMockup";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Case Study`,
    description: project.description,
  };
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 text-muted">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article>
      {/* Hero */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>

          <p
            className="mt-8 text-xs font-medium uppercase tracking-widest"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button href={project.liveUrl} variant="primary" external>
                Live Demo
                <ArrowUpRight size={16} />
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="secondary" external>
                <Github size={16} />
                GitHub
              </Button>
            )}
          </div>

          {project.metrics && (
            <div className="mt-12">
              <Metrics items={project.metrics} />
            </div>
          )}
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-16">
          <ScreenshotMockup
            label={project.screenshots[0]?.label ?? "Overview"}
            variant={project.screenshots[0]?.variant ?? "dashboard"}
            accent={project.accent}
            className="glow"
          />
        </div>
      </header>

      {/* Case study body */}
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <CaseStudySection title="Overview">
          <p className="leading-relaxed">{project.longDescription}</p>
        </CaseStudySection>

        <CaseStudySection title="The Problem">
          <p className="leading-relaxed">{project.problem}</p>
        </CaseStudySection>

        <CaseStudySection title="The Solution">
          <p className="leading-relaxed">{project.solution}</p>
        </CaseStudySection>

        <CaseStudySection title="Key Features">
          <ul className="space-y-2">
            {project.keyFeatures.map((f) => (
              <li key={f} className="flex gap-2">
                <span style={{ color: project.accent }}>—</span>
                {f}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Architecture">
          <p className="leading-relaxed">{project.architecture}</p>
        </CaseStudySection>

        <CaseStudySection title="Tech Stack">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-surface-elevated px-3 py-1.5 text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection title="Database Design">
          <p className="leading-relaxed">{project.databaseDesign}</p>
        </CaseStudySection>

        <CaseStudySection title="Technical Challenges">
          <ul className="space-y-3">
            {project.technicalChallenges.map((c) => (
              <li key={c} className="rounded-xl border border-border bg-surface-elevated/50 p-4 text-sm leading-relaxed">
                {c}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Lessons Learned">
          <ul className="space-y-2">
            {project.lessonsLearned.map((l) => (
              <li key={l} className="flex gap-2">
                <span style={{ color: project.accent }}>→</span>
                {l}
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection title="Future Improvements">
          <ul className="space-y-2">
            {project.futureImprovements.map((f) => (
              <li key={f} className="text-sm">
                • {f}
              </li>
            ))}
          </ul>
        </CaseStudySection>
      </div>

      {/* Screenshots gallery */}
      <section className="border-t border-border bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Screenshots</h2>
          <p className="mt-2 text-muted">
            Interface views across dashboard, analytics, and operational workflows.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.screenshots.map((shot) => (
              <ScreenshotMockup
                key={shot.label}
                label={shot.label}
                variant={shot.variant}
                accent={project.accent}
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
