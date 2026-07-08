"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  phase: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent sm:left-1/2 sm:-translate-x-px" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={item.phase}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <div className="hidden sm:block sm:w-1/2" />
            <div
              className={`absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 sm:left-1/2 ${
                item.status === "completed"
                  ? "border-green-500 bg-green-500/20"
                  : item.status === "current"
                    ? "border-blue-500 bg-blue-500/20"
                    : "border-white/20 bg-white/5"
              }`}
            >
              <div
                className={`h-2.5 w-2.5 rounded-full ${
                  item.status === "completed"
                    ? "bg-green-500"
                    : item.status === "current"
                      ? "bg-blue-500"
                      : "bg-white/30"
                }`}
              />
            </div>
            <div className="ml-12 sm:ml-0 sm:w-1/2">
              <div className="glass-card p-5">
                <span className="text-xs font-medium text-blue-400">
                  {item.phase}
                </span>
                <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
