"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function ChartCard({
  title,
  description,
  children,
  className,
}: ChartCardProps) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={`glass-card p-6 ${className || ""}`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {children}
    </motion.div>
  );
}
