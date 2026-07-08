"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/utils/cn";

interface StatisticsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: LucideIcon;
  className?: string;
}

export function StatisticsCard({
  title,
  value,
  change,
  icon: Icon,
  className,
}: StatisticsCardProps) {
  const isPositive = change !== undefined && change >= 0;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className={cn("glass-card p-6", className)}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
          <Icon className="h-5 w-5 text-blue-400" />
        </div>
        {change !== undefined && (
          <div
            className={cn(
              "flex items-center gap-1 text-xs font-medium",
              isPositive ? "text-green-400" : "text-red-400"
            )}
          >
            {isPositive ? (
              <TrendingUp className="h-3.5 w-3.5" />
            ) : (
              <TrendingDown className="h-3.5 w-3.5" />
            )}
            {Math.abs(change)}%
          </div>
        )}
      </div>
      <p className="mt-4 text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted-foreground mt-1">{title}</p>
    </motion.div>
  );
}
