import type { Metadata } from "next";
import { PageTransition, SectionHeader } from "@/components/common/motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { GridBackground } from "@/components/common/animated-background";
import { PredictionPageContent } from "@/features/prediction/prediction-content";

export const metadata: Metadata = {
  title: "Live Prediction",
  description:
    "Run fused multimodal mental health predictions by combining text, voice, and video input.",
};

export default function PredictionPage() {
  return (
    <PageTransition>
      <div className="relative pt-24 pb-16">
        <GridBackground />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Live Prediction" }]} className="mb-8" />

          <SectionHeader
            badge="Prediction"
            title="Multimodal Mental Health Prediction"
            description="Provide text, voice, and video together. All three modalities are analyzed and fused into one unified mental health assessment."
          />

          <PredictionPageContent />
        </div>
      </div>
    </PageTransition>
  );
}
