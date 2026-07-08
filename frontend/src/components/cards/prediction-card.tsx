"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Brain,
  Activity,
  Shield,
  Lightbulb,
  FileText,
  Mic,
  Video,
  Layers,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ModalityScore, PredictionResult } from "@/types";

interface PredictionCardProps {
  result: PredictionResult;
}

function getStressVariant(stress: string) {
  const lower = stress.toLowerCase();
  if (lower === "high") return "destructive" as const;
  if (lower === "moderate") return "warning" as const;
  return "success" as const;
}

function getDepressionVariant(level: string) {
  const lower = level.toLowerCase();
  if (lower === "severe" || lower === "moderate") return "warning" as const;
  if (lower === "mild" || lower === "minimal") return "success" as const;
  return "info" as const;
}

const MODALITY_META = {
  text: { label: "Text Model", icon: FileText, color: "text-blue-400" },
  voice: { label: "Speech Model", icon: Mic, color: "text-purple-400" },
  video: { label: "Face Model", icon: Video, color: "text-pink-400" },
} as const;

function ModalityBreakdownCard({
  modality,
  score,
}: {
  modality: keyof typeof MODALITY_META;
  score: ModalityScore;
}) {
  const meta = MODALITY_META[modality];
  const Icon = meta.icon;

  return (
    <div className="rounded-lg border border-white/5 bg-white/5 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Icon className={`h-4 w-4 ${meta.color}`} />
        <span className="text-sm font-medium">{meta.label}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div>
          <span className="text-muted-foreground">Emotion</span>
          <p className="font-medium">{score.emotion}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Stress</span>
          <p className="font-medium">{score.stress}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Depression</span>
          <p className="font-medium">{score.depression}</p>
        </div>
        <div>
          <span className="text-muted-foreground">Confidence</span>
          <p className="font-medium text-green-400">{score.confidence}</p>
        </div>
      </div>
    </div>
  );
}

export function PredictionCard({ result }: PredictionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card glow-purple overflow-hidden"
    >
      {result.modalityBreakdown && (
        <div className="border-b border-white/5 p-6">
          <div className="mb-4 flex items-center gap-2">
            <Layers className="h-4 w-4 text-blue-400" />
            <h4 className="text-sm font-semibold">Individual Model Outputs</h4>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <ModalityBreakdownCard
              modality="text"
              score={result.modalityBreakdown.text}
            />
            <ModalityBreakdownCard
              modality="voice"
              score={result.modalityBreakdown.voice}
            />
            <ModalityBreakdownCard
              modality="video"
              score={result.modalityBreakdown.video}
            />
          </div>
          {result.fusion && (
            <p className="mt-4 text-xs text-muted-foreground text-center">
              Fused via {result.fusion.method} — weights: Text{" "}
              {(result.fusion.weights.text * 100).toFixed(0)}% • Voice{" "}
              {(result.fusion.weights.voice * 100).toFixed(0)}% • Video{" "}
              {(result.fusion.weights.video * 100).toFixed(0)}%
            </p>
          )}
        </div>
      )}

      <div className="border-b border-white/5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Fused Prediction Result</h3>
            <p className="text-xs text-muted-foreground mt-0.5">
              Combined output from text, voice & video
            </p>
          </div>
          <Badge variant="success">{result.confidence} Confidence</Badge>
        </div>
      </div>

      <div className="grid gap-4 p-6 sm:grid-cols-2">
        <ResultItem
          icon={Heart}
          label="Emotion"
          value={result.emotion}
          color="text-pink-400"
        />
        <ResultItem
          icon={Activity}
          label="Stress Level"
          value={result.stress}
          badgeVariant={getStressVariant(result.stress)}
        />
        <ResultItem
          icon={Brain}
          label="Depression Level"
          value={result.depression}
          badgeVariant={getDepressionVariant(result.depression)}
        />
        <ResultItem
          icon={Shield}
          label="Confidence"
          value={result.confidence}
          color="text-green-400"
        />
      </div>

      {result.recommendations && result.recommendations.length > 0 && (
        <div className="border-t border-white/5 p-6">
          <div className="mb-3 flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-amber-400" />
            <h4 className="text-sm font-semibold">Recommendations</h4>
          </div>
          <ul className="space-y-2">
            {result.recommendations.map((rec, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

function ResultItem({
  icon: Icon,
  label,
  value,
  color,
  badgeVariant,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  color?: string;
  badgeVariant?: "success" | "warning" | "destructive" | "info";
}) {
  return (
    <div className="rounded-lg border border-white/5 bg-white/5 p-4">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      {badgeVariant ? (
        <Badge variant={badgeVariant} className="text-sm">
          {value}
        </Badge>
      ) : (
        <p className={`text-lg font-semibold ${color || ""}`}>{value}</p>
      )}
    </div>
  );
}
