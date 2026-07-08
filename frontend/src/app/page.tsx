import { Hero } from "@/components/home/hero";
import { FeaturesSection } from "@/components/home/features";
import { StatisticsSection } from "@/components/home/statistics";
import { TechnologiesSection } from "@/components/home/technologies";
import { WorkflowSection } from "@/components/home/workflow";
import { TestimonialsSection } from "@/components/home/testimonial";
import { FAQ } from "@/components/home/faq";
import { CtaSection } from "@/features/landing/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <StatisticsSection />
      <TechnologiesSection />
      <WorkflowSection />
      <TestimonialsSection />
      <FAQ />
      <CtaSection />
    </>
  );
}
