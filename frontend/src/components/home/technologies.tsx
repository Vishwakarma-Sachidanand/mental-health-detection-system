"use client";

import { motion } from "framer-motion";
import { TECHNOLOGIES } from "@/constants/dummy-data";
import { SectionHeader, fadeInUp, staggerContainer } from "@/components/common/motion";

export function TechnologiesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tech Stack"
          title="Built with cutting-edge technologies"
          description="Our platform leverages the latest advancements in AI, machine learning, and modern web development."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3"
        >
          {TECHNOLOGIES.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="glass-card px-5 py-3"
            >
              <span className="text-sm font-medium">{tech.name}</span>
              <span className="ml-2 text-xs text-muted-foreground">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
