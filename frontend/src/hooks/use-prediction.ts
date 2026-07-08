"use client";

import { useState, useCallback } from "react";
import type { MultimodalPredictionInput, PredictionResult } from "@/types";
import { DUMMY_PREDICTION } from "@/constants/dummy-data";
import { USE_MOCK_DATA } from "@/constants/api";
import { predictMultimodal } from "@/services/predict.service";
import { delay } from "@/utils/cn";

export type FusionStep =
  | "text"
  | "voice"
  | "video"
  | "fusion"
  | "report"
  | "done";

const FUSION_STEPS: { id: FusionStep; label: string; progress: number }[] = [
  { id: "text", label: "Analyzing text with NLP model...", progress: 20 },
  { id: "voice", label: "Processing voice with speech model...", progress: 40 },
  { id: "video", label: "Detecting emotions from video...", progress: 60 },
  { id: "fusion", label: "Fusing multimodal signals...", progress: 85 },
  { id: "report", label: "Generating combined report...", progress: 95 },
  { id: "done", label: "Complete", progress: 100 },
];

interface UsePredictionReturn {
  result: PredictionResult | null;
  isLoading: boolean;
  progress: number;
  currentStep: FusionStep | null;
  stepLabel: string;
  error: string | null;
  predictMultimodal: (input: MultimodalPredictionInput) => Promise<void>;
  reset: () => void;
}

export function usePrediction(): UsePredictionReturn {
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<FusionStep | null>(null);
  const [stepLabel, setStepLabel] = useState("");
  const [error, setError] = useState<string | null>(null);

  const runMultimodalPrediction = useCallback(
    async (input: MultimodalPredictionInput) => {
      setIsLoading(true);
      setError(null);
      setResult(null);
      setProgress(0);
      setCurrentStep(null);
      setStepLabel("");

      for (const step of FUSION_STEPS) {
        if (step.id === "done") continue;
        setCurrentStep(step.id);
        setStepLabel(step.label);
        setProgress(step.progress);
        await delay(500);
      }

      try {
        const data = USE_MOCK_DATA
          ? DUMMY_PREDICTION
          : await predictMultimodal(input);
        setResult(data);
        setCurrentStep("done");
        setStepLabel("Multimodal fusion complete");
        setProgress(100);
      } catch {
        setError("Multimodal prediction failed. Please try again.");
        setResult(DUMMY_PREDICTION);
        setProgress(100);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setResult(null);
    setProgress(0);
    setCurrentStep(null);
    setStepLabel("");
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    result,
    isLoading,
    progress,
    currentStep,
    stepLabel,
    error,
    predictMultimodal: runMultimodalPrediction,
    reset,
  };
}
