"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PhilosophyCards } from "@/components/PhilosophyCards";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { HeroRoles } from "@/components/HeroRoles";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Derek{" "}
                <span className="gradient-accent">Garcia</span>
              </h1>

              <p className="mt-5 text-lg font-medium text-foreground md:text-xl">
                Software Engineer
              </p>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground md:text-lg">
                Analytics platforms, reservation systems, enterprise tools, and
                custom business websites — built end-to-end and shipped for
                teams and clients that need them to work every day.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/projects" variant="primary">
                  View Projects
                </Button>
                <Button href={siteConfig.resumePath} variant="secondary" external>
                  <Download size={16} />
                  Download Resume
                </Button>
                <Button href={siteConfig.links.github} variant="secondary" external>
                  <Github size={16} />
                  GitHub
                </Button>
              </div>
            </motion.div>

            <HeroRoles />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Products"
            title="Software that solves real problems"
            description="Operational platforms, analytics systems, and custom client websites — built for production, not prototypes."
          />

          <div className="mt-20 space-y-28">
            {projects.map((project, i) => (
              <ProjectShowcase
                key={project.slug}
                project={project}
                index={i}
                featured={i === 0}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-dim"
            >
              View all projects
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-border bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Approach"
            title="Engineering philosophy"
            description="How I think about building software that organizations depend on."
          />
          <div className="mt-12">
            <PhilosophyCards />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to build something that matters?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            I&apos;m open to software engineering roles and client projects
            where shipping reliable software is the goal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button href={siteConfig.resumePath} variant="secondary" external>
              Download Resume
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
