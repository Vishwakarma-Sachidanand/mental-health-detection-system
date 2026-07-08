"use client";

import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "@/constants/dummy-data";
import { SectionHeader } from "@/components/common/motion";

export function WorkflowSection() {
  return (
    <section className="py-24 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Workflow"
          title="How it works"
          description="From input to insight in four simple steps."
        />
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative glass-card p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg shadow-blue-500/25">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
