"use client";

import { motion } from "framer-motion";
import { LANDING_STATS } from "@/constants/dummy-data";
import { AnimatedCounter } from "@/components/common/animated-counter";
import { SectionHeader } from "@/components/common/motion";

export function StatisticsCard({
  label,
  value,
  suffix,
}: {
  label: string;
  value: number;
  suffix: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 text-center"
    >
      <p className="text-3xl font-bold gradient-text sm:text-4xl">
        <AnimatedCounter value={value} suffix={suffix} />
      </p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function StatisticsSection() {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Statistics"
          title="Trusted by researchers worldwide"
          description="Our platform delivers industry-leading accuracy across multiple modalities."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LANDING_STATS.map((stat) => (
            <StatisticsCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
