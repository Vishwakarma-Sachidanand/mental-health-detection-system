"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { DatasetInfo } from "@/types";

interface DatasetCardProps {
  dataset: DatasetInfo;
}

export function DatasetCard({ dataset }: DatasetCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={dataset.image}
          alt={dataset.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent" />
        <Badge className="absolute top-4 left-4" variant="info">
          {dataset.size}
        </Badge>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{dataset.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {dataset.description}
        </p>
        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
            Purpose
          </p>
          <p className="text-sm">{dataset.purpose}</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <a href={dataset.reference} target="_blank" rel="noopener noreferrer">
            View Reference
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </motion.div>
  );
}
