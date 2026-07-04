import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Derek Garcia",
  description:
    "Production applications including baseball analytics, event reservation management, and enterprise IT systems.",
};

export default function ProjectsPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title="Products & case studies"
          description="Each project represents a real operational problem — designed, engineered, and shipped to production standards."
        />

        <div className="mt-20 space-y-32">
          {projects.map((project, i) => (
            <ProjectShowcase key={project.slug} project={project} index={i} featured />
          ))}
        </div>
      </div>
    </div>
  );
}
