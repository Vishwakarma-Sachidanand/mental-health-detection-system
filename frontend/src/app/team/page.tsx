import type { Metadata } from "next";
import { TeamPageContent } from "@/features/team/team-content";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind the Mental Health Prediction Using Multimodal AI project.",
};

export default function TeamPage() {
  return <TeamPageContent />;
}
