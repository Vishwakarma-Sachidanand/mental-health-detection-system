"use client";

import { PageTransition, SectionHeader } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ModelCard } from "@/components/cards/model-card";
import { GridBackground } from "@/components/common/animated-background";
import { AI_MODELS } from "@/constants/models";

export function ModelsPageContent() {
  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "AI Models" }]} className="mb-8" />

          <SectionHeader
            badge="Machine Learning"
            title="AI Models"
            description="Specialized deep learning models for each modality, unified through our fusion architecture."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {AI_MODELS.map((model) => (
              <ModelCard key={model.name} model={model} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
