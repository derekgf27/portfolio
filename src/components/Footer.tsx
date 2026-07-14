import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{siteConfig.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Building production software and custom websites that help organizations and local businesses operate and grow.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-foreground/20 hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6">
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
