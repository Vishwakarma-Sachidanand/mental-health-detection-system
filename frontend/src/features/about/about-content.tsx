"use client";

import { PageTransition, SectionHeader } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Timeline } from "@/components/common/timeline";
import { GridBackground } from "@/components/common/animated-background";
import {
  Target,
  Lightbulb,
  Heart,
  Globe,
  TrendingUp,
  Rocket,
} from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "Problem Statement",
    content:
      "Mental health disorders affect over 970 million people worldwide, yet early detection remains a significant challenge. Traditional screening methods rely on self-reported questionnaires that are subjective, time-consuming, and often fail to capture the full spectrum of emotional states. There is a critical need for objective, multimodal assessment tools that can analyze behavioral cues from text, speech, and facial expressions to provide timely mental health insights.",
  },
  {
    icon: Lightbulb,
    title: "Objectives",
    content:
      "Develop specialized AI models for text-based sentiment analysis, speech emotion recognition, and facial expression detection. Create a fusion layer that combines predictions from all modalities for improved accuracy. Build an intuitive web platform for real-time mental health screening. Validate models using established datasets (DAIC-WOZ, RAVDESS, Mental Health Text Dataset). Provide actionable recommendations based on prediction results.",
  },
  {
    icon: Heart,
    title: "Importance",
    content:
      "Early detection of mental health issues can significantly improve treatment outcomes and reduce the global burden of mental illness. AI-powered screening tools can reach underserved populations, reduce stigma associated with seeking help, and provide continuous monitoring capabilities that traditional methods cannot offer.",
  },
  {
    icon: Globe,
    title: "Applications",
    content:
      "Clinical screening and triage in healthcare settings. Student wellness monitoring in educational institutions. Employee mental health programs in corporate environments. Telehealth and remote counseling platforms. Research tools for mental health studies and clinical trials.",
  },
  {
    icon: TrendingUp,
    title: "Benefits",
    content:
      "Non-invasive and accessible mental health assessment. Real-time analysis with high accuracy through multimodal fusion. Scalable solution deployable across various platforms. Privacy-preserving analysis with local processing options. Data-driven insights for healthcare professionals and researchers.",
  },
  {
    icon: Rocket,
    title: "Future Scope",
    content:
      "Integration with wearable devices for physiological data (heart rate, sleep patterns). Real-time video analysis during telehealth sessions. Personalized treatment recommendations using reinforcement learning. Multi-language support for global accessibility. Mobile application development for on-the-go screening. Integration with electronic health records (EHR) systems.",
  },
];

const timelineItems = [
  {
    phase: "Phase 1",
    title: "Research & Dataset Collection",
    description:
      "Literature review, dataset acquisition (DAIC-WOZ, RAVDESS, Mental Health Text), and preprocessing pipeline development.",
    status: "completed" as const,
  },
  {
    phase: "Phase 2",
    title: "Model Development",
    description:
      "Training individual models for text, speech, and facial emotion recognition with hyperparameter tuning.",
    status: "completed" as const,
  },
  {
    phase: "Phase 3",
    title: "Fusion & Integration",
    description:
      "Developing the multimodal fusion layer and backend API integration for unified predictions.",
    status: "current" as const,
  },
  {
    phase: "Phase 4",
    title: "Frontend & Testing",
    description:
      "Building the web platform, user testing, performance optimization, and final documentation.",
    status: "upcoming" as const,
  },
  {
    phase: "Phase 5",
    title: "Deployment & Evaluation",
    description:
      "Production deployment, comprehensive evaluation, and project presentation.",
    status: "upcoming" as const,
  },
];

export function AboutContent() {
  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Project" }]} className="mb-8" />

          <SectionHeader
            badge="About"
            title="Mental Health Prediction Using Multimodal AI"
            description="A Final Year Project leveraging artificial intelligence to revolutionize mental health screening and monitoring."
            align="left"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="glass-card p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                    <Icon className="h-5 w-5 text-blue-400" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold">{section.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-20">
            <SectionHeader
              badge="Timeline"
              title="Project Timeline"
              description="Key milestones and development phases."
            />
            <Timeline items={timelineItems} />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
