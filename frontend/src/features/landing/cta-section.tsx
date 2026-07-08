"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/common/animated-background";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <AnimatedBackground />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to experience{" "}
            <span className="gradient-text">multimodal AI</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Start analyzing mental health indicators with our advanced prediction
            platform. No setup required.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="gradient" size="lg" asChild>
              <Link href="/prediction">
                Try Live Prediction
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
