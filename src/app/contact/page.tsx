"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Let's connect"
          description="Open to software engineering roles and client projects where shipping reliable software matters."
          align="center"
        />

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface-elevated/50 p-8">
            <h3 className="text-lg font-semibold">Direct contact</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <Mail size={18} className="shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}
                  className="flex items-center gap-3 text-muted transition-colors hover:text-foreground"
                >
                  <Phone size={18} className="shrink-0 text-accent" />
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted">
                <MapPin size={18} className="shrink-0 text-accent" />
                {siteConfig.location}
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="mt-8">
              <Button href={siteConfig.resumePath} variant="secondary" external>
                Download Resume
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-surface-elevated/50 p-8">
            <h3 className="text-lg font-semibold">Send a message</h3>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:${siteConfig.email}?subject=Portfolio inquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}`;
              }}
            >
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-foreground py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Open in Email Client
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
