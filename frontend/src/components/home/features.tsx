"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Brain,
  Shield,
  BarChart3,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { LANDING_FEATURES } from "@/constants/dummy-data";
import { SectionHeader, staggerContainer, fadeInUp } from "@/components/common/motion";

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Zap,
  Brain,
  Shield,
  BarChart3,
  BookOpen,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon] || Brain;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group glass-card glow-blue p-6 transition-shadow hover:shadow-blue-500/10"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 transition-transform group-hover:scale-110">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Features"
          title="Everything you need for mental health analysis"
          description="A comprehensive platform combining cutting-edge AI with an intuitive interface for mental health professionals and researchers."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {LANDING_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
