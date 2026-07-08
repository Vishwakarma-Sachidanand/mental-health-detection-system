"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/common/animated-background";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <AnimatedBackground />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
              <Sparkles className="h-4 w-4" />
              Multimodal AI for Mental Health
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Predict Mental Health with{" "}
            <span className="gradient-text">Multimodal AI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            Analyze text, voice, and facial expressions simultaneously to deliver
            accurate mental health insights powered by advanced fusion AI models.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="gradient" size="lg" asChild>
              <Link href="/prediction">
                Start Prediction
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto mt-16 max-w-3xl"
          >
            <div className="glass-card glow-blue overflow-hidden p-1">
              <div className="rounded-lg bg-[#0a0f1e] p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs text-muted-foreground">
                    Live Prediction Preview
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Emotion", value: "Sad", color: "text-blue-400" },
                    { label: "Stress", value: "High", color: "text-amber-400" },
                    {
                      label: "Depression",
                      value: "Moderate",
                      color: "text-purple-400",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-white/5 bg-white/5 p-4 text-center"
                    >
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className={`mt-1 text-lg font-semibold ${item.color}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-4 py-3">
                  <span className="text-sm text-muted-foreground">Confidence</span>
                  <span className="text-sm font-semibold text-green-400">94%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
