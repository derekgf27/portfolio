import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PhilosophyCards } from "@/components/PhilosophyCards";
import { SectionHeader } from "@/components/SectionHeader";
import { TechStackGrid } from "@/components/TechStackGrid";
import { careerPath, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Derek Garcia",
  description:
    "Computer Science graduate building operational software through professional internships and production applications.",
};

export default function AboutPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="About"
          title="Engineering operational software"
          description="I don't just write code — I build systems that help teams work smarter."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p>
                I&apos;m a Computer Science graduate who found my path through
                building software where it matters most: inside organizations
                that depend on accurate data, reliable workflows, and systems
                that don&apos;t break under real-world use.
              </p>
              <p>
                My work spans baseball analytics, hospitality operations, and
                enterprise IT — three different domains united by the same
                principle: translate complex business requirements into software
                people actually use.
              </p>
              <p>
                I think in systems. Before writing code, I ask what problem
                exists, who feels it, and what a successful outcome looks like.
                That mindset shaped every product in my portfolio — from
                pitch-by-pitch analytics to automated event pricing engines.
              </p>
              <p>
                What drives me is the moment software removes friction — when a
                coach sees a pattern they couldn&apos;t before, when event staff
                stop double-booking rooms, when IT teams finally have one source
                of truth for their assets.
              </p>
            </div>

            <div className="mt-10">
              <Button href={siteConfig.resumePath} variant="primary" external>
                Download Resume
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-border bg-surface-elevated/50 p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-accent">
                Career Path
              </p>
              <div className="mt-6 space-y-0">
                {careerPath.map((step, i) => (
                  <div key={step.stage} className="relative flex gap-4 pb-8 last:pb-0">
                    {i < careerPath.length - 1 && (
                      <div className="absolute left-[7px] top-4 h-full w-px bg-border" />
                    )}
                    <div className="relative z-10 mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-accent bg-background" />
                    <div>
                      <p className="font-medium text-foreground">{step.stage}</p>
                      <p className="mt-1 text-sm text-muted">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <SectionHeader
            eyebrow="Approach"
            title="Engineering philosophy"
          />
          <div className="mt-10">
            <PhilosophyCards />
          </div>
        </div>

        <div className="mt-28">
          <SectionHeader
            eyebrow="Technologies"
            title="Tools I build with"
            description="Organized by layer — from interface to infrastructure."
          />
          <div className="mt-10">
            <TechStackGrid />
          </div>
        </div>
      </div>
    </div>
  );
}
