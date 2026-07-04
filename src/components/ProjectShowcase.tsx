"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectCaseStudy } from "@/lib/projects";
import { ScreenshotMockup } from "./ScreenshotMockup";
import { Button } from "./Button";

type ProjectShowcaseProps = {
  project: ProjectCaseStudy;
  index: number;
  featured?: boolean;
};

export function ProjectShowcase({ project, index, featured }: ProjectShowcaseProps) {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reversed ? "lg:[direction:rtl]" : ""
        }`}
      >
        <div className={`${reversed ? "lg:[direction:ltr]" : ""}`}>
          <Link href={`/projects/${project.slug}`} className="block">
            <ScreenshotMockup
              label={project.screenshots[0]?.label ?? "Dashboard"}
              variant={project.screenshots[0]?.variant ?? "dashboard"}
              accent={project.accent}
              className={`transition-transform duration-500 group-hover:scale-[1.01] ${
                featured ? "lg:scale-[1.02]" : ""
              }`}
            />
          </Link>
        </div>

        <div className={`${reversed ? "lg:[direction:ltr]" : ""}`}>
          <p
            className="text-xs font-medium uppercase tracking-widest"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            <Link href={`/projects/${project.slug}`} className="hover:opacity-90">
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {project.description}
          </p>

          <ul className="mt-6 space-y-2">
            {project.accomplishments.slice(0, 3).map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted">
                <span style={{ color: project.accent }}>—</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-border bg-surface px-2.5 py-1 text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>

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
            <Button href={`/projects/${project.slug}`} variant="secondary">
              Case Study
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
