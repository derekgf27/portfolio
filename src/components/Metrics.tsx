"use client";

import { motion } from "framer-motion";

type MetricsProps = {
  items: { value: string; label: string }[];
};

export function Metrics({ items }: MetricsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-2xl border border-border bg-surface-elevated/50 p-5"
        >
          <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {item.value}
          </p>
          <p className="mt-1 text-xs text-muted md:text-sm">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
