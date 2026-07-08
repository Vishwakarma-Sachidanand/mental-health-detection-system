import type { Metadata } from "next";
import { DocumentationContent } from "@/features/documentation/documentation-content";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Technical documentation for MindScope AI frontend — structure, API endpoints, installation, and deployment.",
};

export default function DocumentationPage() {
  return <DocumentationContent />;
}
