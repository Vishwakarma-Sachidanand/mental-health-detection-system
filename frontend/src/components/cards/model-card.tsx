"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Badge } from "@/components/ui/badge";
import type { ModelMetrics } from "@/types";

interface ModelCardProps {
  model: ModelMetrics;
}

export function ModelCard({ model }: ModelCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="glass-card overflow-hidden"
    >
      <div className="p-6 border-b border-white/5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold">{model.name}</h3>
          <Badge variant="info">{model.modality}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{model.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-3 p-6 sm:grid-cols-4">
        {[
          { label: "Accuracy", value: model.accuracy },
          { label: "Precision", value: model.precision },
          { label: "Recall", value: model.recall },
          { label: "F1 Score", value: model.f1Score },
        ].map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-white/5 bg-white/5 p-3 text-center"
          >
            <p className="text-xs text-muted-foreground">{metric.label}</p>
            <p className="mt-1 text-lg font-bold text-blue-400">
              {metric.value}%
            </p>
          </div>
        ))}
      </div>

      <div className="h-48 px-4 pb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={model.chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="metric" tick={{ fill: "#94a3b8", fontSize: 12 }} />
            <YAxis tick={{ fill: "#94a3b8", fontSize: 12 }} domain={[0, 100]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0F172A",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="value" fill="#2563EB" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
