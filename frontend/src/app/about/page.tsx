import type { Metadata } from "next";
import { AboutContent } from "@/features/about/about-content";

export const metadata: Metadata = {
  title: "About Project",
  description:
    "Learn about the Mental Health Prediction Using Multimodal AI project — problem statement, objectives, and future scope.",
};

export default function AboutPage() {
  return <AboutContent />;
}
