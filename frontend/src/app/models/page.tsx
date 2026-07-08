import type { Metadata } from "next";
import { ModelsPageContent } from "@/features/models/models-content";

export const metadata: Metadata = {
  title: "AI Models",
  description:
    "Explore our specialized AI models for text, speech, face emotion recognition, and multimodal fusion.",
};

export default function ModelsPage() {
  return <ModelsPageContent />;
}
