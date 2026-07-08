import type { Metadata } from "next";
import { ArchitectureDiagram } from "@/features/architecture/architecture-diagram";

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "Interactive architecture diagram showing the multimodal AI pipeline from user input to prediction report.",
};

export default function ArchitecturePage() {
  return <ArchitectureDiagram />;
}
