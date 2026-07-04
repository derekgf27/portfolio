"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/lib/site";

export function PhilosophyCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {philosophy.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="rounded-2xl border border-border bg-surface-elevated/50 p-6 transition-colors hover:border-border/80 hover:bg-surface-elevated"
        >
          <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
