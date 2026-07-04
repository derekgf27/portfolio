"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site";

export function HeroRoles() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: 0.15 }}
      className="relative w-full max-w-sm lg:max-w-none lg:justify-self-end"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 via-transparent to-transparent opacity-60" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated/80 backdrop-blur-sm">
        <div className="border-b border-border px-5 py-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Focus areas
          </p>
        </div>

        <ul className="divide-y divide-border">
          {siteConfig.rotatingTitles.map((title, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
              className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02]"
            >
              <span className="font-mono text-xs tabular-nums text-muted/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="h-px w-6 shrink-0 bg-accent/40 transition-all group-hover:w-10 group-hover:bg-accent"
                aria-hidden
              />
              <span className="text-sm font-medium leading-snug text-foreground md:text-base">
                {title}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
