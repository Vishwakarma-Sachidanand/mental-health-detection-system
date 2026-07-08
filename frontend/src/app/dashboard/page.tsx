import type { Metadata } from "next";
import { DashboardContent } from "@/features/dashboard/dashboard-content";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Analytics dashboard for monitoring mental health predictions, trends, and emotion distributions.",
};

export default function DashboardPage() {
  return (
    <div className="pt-16">
      <DashboardContent />
    </div>
  );
}
