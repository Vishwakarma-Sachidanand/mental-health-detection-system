"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card p-8"
    >
      <Quote className="mb-4 h-8 w-8 text-blue-500/50" />
      <p className="mb-6 text-muted-foreground leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "MindScope AI's multimodal approach provides insights that single-modality tools simply cannot match. A game-changer for mental health screening.",
      author: "Dr. Sarah Mitchell",
      role: "Clinical Psychologist",
    },
    {
      quote:
        "The fusion model's accuracy is impressive. We've integrated it into our research workflow with excellent results.",
      author: "Prof. James Chen",
      role: "AI Research Lead",
    },
    {
      quote:
        "Intuitive interface combined with powerful analytics makes this the most accessible mental health AI platform I've used.",
      author: "Dr. Emily Rodriguez",
      role: "Mental Health Researcher",
    },
  ];

  return (
    <section className="py-24 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            What experts are saying
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Testimonial key={t.author} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
