"use client";

import { motion } from "framer-motion";
import {
  User,
  FileText,
  Mic,
  Video,
  Cog,
  Brain,
  Layers,
  BarChart3,
  FileOutput,
  ArrowDown,
} from "lucide-react";
import { PageTransition, SectionHeader } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { GridBackground } from "@/components/common/animated-background";

const architectureSteps = [
  {
    id: "input",
    title: "User Input",
    icon: User,
    color: "from-blue-500 to-blue-600",
    children: [
      { title: "Text", icon: FileText },
      { title: "Voice", icon: Mic },
      { title: "Video", icon: Video },
    ],
  },
  {
    id: "preprocessing",
    title: "Preprocessing",
    icon: Cog,
    color: "from-cyan-500 to-blue-500",
    description:
      "Data cleaning, normalization, feature extraction, and format conversion for each modality.",
  },
  {
    id: "models",
    title: "AI Models",
    icon: Brain,
    color: "from-purple-500 to-purple-600",
    children: [
      { title: "Text Model (BERT)", icon: FileText },
      { title: "Speech Model (CNN-LSTM)", icon: Mic },
      { title: "Face Model (ResNet)", icon: Video },
    ],
  },
  {
    id: "fusion",
    title: "Fusion Layer",
    icon: Layers,
    color: "from-indigo-500 to-purple-500",
    description:
      "Weighted ensemble combining predictions from all models using attention-based fusion.",
  },
  {
    id: "prediction",
    title: "Prediction",
    icon: BarChart3,
    color: "from-violet-500 to-pink-500",
    description:
      "Emotion classification, stress level assessment, and depression severity scoring.",
  },
  {
    id: "report",
    title: "Report",
    icon: FileOutput,
    color: "from-green-500 to-emerald-500",
    description:
      "Comprehensive report with confidence scores, visualizations, and personalized recommendations.",
  },
];

function Connector() {
  return (
    <div className="flex justify-center py-4">
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <div className="h-8 w-px bg-gradient-to-b from-blue-500 to-purple-500" />
        <ArrowDown className="h-5 w-5 text-purple-400 animate-bounce" />
        <div className="h-8 w-px bg-gradient-to-b from-purple-500 to-blue-500" />
      </motion.div>
    </div>
  );
}

export function ArchitectureDiagram() {
  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Architecture" }]} className="mb-8" />

          <SectionHeader
            badge="System Design"
            title="System Architecture"
            description="End-to-end pipeline from multimodal user input to comprehensive mental health prediction report."
          />

          <div className="space-y-0">
            {architectureSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card glow-blue overflow-hidden"
                  >
                    <div
                      className={`bg-gradient-to-r ${step.color} p-4 flex items-center gap-3`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <div className="p-6">
                      {step.description && (
                        <p className="text-sm text-muted-foreground mb-4">
                          {step.description}
                        </p>
                      )}
                      {step.children && (
                        <div className="grid gap-3 sm:grid-cols-3">
                          {step.children.map((child) => {
                            const ChildIcon = child.icon;
                            return (
                              <motion.div
                                key={child.title}
                                whileHover={{ scale: 1.03 }}
                                className="rounded-lg border border-white/10 bg-white/5 p-4 text-center"
                              >
                                <ChildIcon className="mx-auto mb-2 h-6 w-6 text-blue-400" />
                                <p className="text-sm font-medium">{child.title}</p>
                              </motion.div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {index < architectureSteps.length - 1 && <Connector />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
