"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/site";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "databases" as const, label: "Databases" },
  { key: "cloud" as const, label: "Cloud" },
  { key: "tools" as const, label: "Developer Tools" },
  { key: "languages" as const, label: "Languages" },
];

export function TechStackGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.key}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="rounded-2xl border border-border bg-surface-elevated/40 p-5"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            {cat.label}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack[cat.key].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
