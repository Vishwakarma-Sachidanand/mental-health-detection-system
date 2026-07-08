"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";
import {
  FileText,
  Mic,
  Video,
  Loader2,
  Sparkles,
  Layers,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { PredictionCard } from "@/components/cards/prediction-card";
import { usePrediction, type FusionStep } from "@/hooks/use-prediction";
import { cn } from "@/utils/cn";

const FUSION_PIPELINE: { id: FusionStep; label: string; icon: typeof FileText }[] = [
  { id: "text", label: "Text Model", icon: FileText },
  { id: "voice", label: "Speech Model", icon: Mic },
  { id: "video", label: "Face Model", icon: Video },
  { id: "fusion", label: "Fusion Layer", icon: Layers },
];

function FileDropzone({
  label,
  accept,
  acceptLabel,
  file,
  onFile,
  disabled,
  icon: Icon,
}: {
  label: string;
  accept: Record<string, string[]>;
  acceptLabel: string;
  file: File | null;
  onFile: (file: File | null) => void;
  disabled?: boolean;
  icon: typeof Mic;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles[0]) onFile(acceptedFiles[0]);
    },
    [onFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles: 1,
    disabled,
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "relative cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-all min-h-[160px] flex flex-col items-center justify-center",
        isDragActive
          ? "border-blue-500 bg-blue-500/10"
          : file
            ? "border-green-500/40 bg-green-500/5"
            : "border-white/10 hover:border-white/20 hover:bg-white/5",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <input {...getInputProps()} />
      {file ? (
        <>
          <CheckCircle2 className="mb-2 h-8 w-8 text-green-400" />
          <p className="font-medium text-sm truncate max-w-full">{file.name}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onFile(null);
            }}
            className="mt-2 text-xs text-muted-foreground hover:text-foreground underline cursor-pointer"
          >
            Remove
          </button>
        </>
      ) : (
        <>
          <Icon className="mb-2 h-8 w-8 text-muted-foreground" />
          <p className="font-medium text-sm">{label}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Drag & drop or click • {acceptLabel}
          </p>
        </>
      )}
    </div>
  );
}

function FusionPipelineStatus({
  currentStep,
  isLoading,
}: {
  currentStep: FusionStep | null;
  isLoading: boolean;
}) {
  if (!isLoading && currentStep !== "done") return null;

  const stepOrder: FusionStep[] = ["text", "voice", "video", "fusion", "done"];
  const currentIndex = currentStep ? stepOrder.indexOf(currentStep) : -1;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Fusion Pipeline
      </p>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {FUSION_PIPELINE.map((step, index) => {
          const Icon = step.icon;
          const isComplete = currentIndex > index || currentStep === "done";
          const isActive = currentStep === step.id;

          return (
            <div key={step.id} className="flex items-center gap-2">
              <div
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium transition-all",
                  isComplete && "bg-green-500/10 text-green-400 border border-green-500/20",
                  isActive && "bg-blue-500/10 text-blue-400 border border-blue-500/30",
                  !isComplete && !isActive && "bg-white/5 text-muted-foreground border border-white/5"
                )}
              >
                {isComplete ? (
                  <CheckCircle2 className="h-3.5 w-3.5" />
                ) : isActive ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Circle className="h-3.5 w-3.5" />
                )}
                <Icon className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{step.label}</span>
              </div>
              {index < FUSION_PIPELINE.length - 1 && (
                <span className="text-muted-foreground hidden sm:inline">→</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function PredictionPageContent() {
  const {
    result,
    isLoading,
    progress,
    currentStep,
    stepLabel,
    predictMultimodal,
    reset,
  } = usePrediction();

  const [text, setText] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const allInputsReady =
    text.trim().length > 0 && audioFile !== null && videoFile !== null;

  const handleInputChange = () => reset();

  const handlePredict = async () => {
    if (!allInputsReady || !audioFile || !videoFile) return;
    await predictMultimodal({
      text: text.trim(),
      audio: audioFile,
      video: videoFile,
    });
  };

  return (
    <div className="glass-card p-6 sm:p-8 space-y-8">
      <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
        <div className="flex items-start gap-3">
          <Layers className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-300">
              Multimodal Fusion Prediction
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Provide <strong className="text-foreground">text</strong>,{" "}
              <strong className="text-foreground">voice</strong>, and{" "}
              <strong className="text-foreground">video</strong> together. All
              three modalities are analyzed individually, then combined through
              the fusion layer for a single unified result.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-blue-400" />
            <label className="text-sm font-medium">Text Input</label>
            <Badge variant="outline" className="text-xs">Required</Badge>
          </div>
          <Textarea
            placeholder="Describe how you're feeling... (e.g., 'I've been feeling overwhelmed and anxious lately.')"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleInputChange();
            }}
            rows={6}
            disabled={isLoading}
            className="min-h-[160px]"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Mic className="h-4 w-4 text-purple-400" />
            <label className="text-sm font-medium">Voice / Audio</label>
            <Badge variant="outline" className="text-xs">Required</Badge>
          </div>
          <FileDropzone
            label="Upload audio recording"
            accept={{ "audio/*": [".wav", ".mp3", ".m4a", ".ogg"] }}
            acceptLabel="WAV, MP3, M4A"
            file={audioFile}
            onFile={(f) => {
              setAudioFile(f);
              handleInputChange();
            }}
            disabled={isLoading}
            icon={Mic}
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4 text-pink-400" />
            <label className="text-sm font-medium">Video</label>
            <Badge variant="outline" className="text-xs">Required</Badge>
          </div>
          <FileDropzone
            label="Upload video recording"
            accept={{ "video/*": [".mp4", ".webm", ".mov", ".avi"] }}
            acceptLabel="MP4, WebM, MOV"
            file={videoFile}
            onFile={(f) => {
              setVideoFile(f);
              handleInputChange();
            }}
            disabled={isLoading}
            icon={Video}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span
          className={cn(
            "flex items-center gap-1",
            text.trim() && "text-green-400"
          )}
        >
          {text.trim() ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
          Text
        </span>
        <span>•</span>
        <span
          className={cn(
            "flex items-center gap-1",
            audioFile && "text-green-400"
          )}
        >
          {audioFile ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
          Audio
        </span>
        <span>•</span>
        <span
          className={cn(
            "flex items-center gap-1",
            videoFile && "text-green-400"
          )}
        >
          {videoFile ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Circle className="h-3.5 w-3.5" />}
          Video
        </span>
      </div>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <FusionPipelineStatus currentStep={currentStep} isLoading={isLoading} />
          <div className="flex items-center gap-3">
            <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
            <span className="text-sm text-muted-foreground">{stepLabel}</span>
          </div>
          <Progress value={progress} />
          <p className="text-xs text-muted-foreground text-right">
            {progress}% — Combining text, voice & video via fusion layer
          </p>
        </motion.div>
      )}

      {!isLoading && currentStep === "done" && (
        <FusionPipelineStatus currentStep={currentStep} isLoading={false} />
      )}

      <Button
        variant="gradient"
        size="lg"
        className="w-full sm:w-auto"
        onClick={handlePredict}
        disabled={!allInputsReady || isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Fusing Multimodal Data...
          </>
        ) : (
          <>
            <Sparkles className="h-4 w-4" />
            Run Multimodal Prediction
          </>
        )}
      </Button>

      {!allInputsReady && !isLoading && (
        <p className="text-xs text-muted-foreground">
          All three inputs are required before running the fused prediction.
        </p>
      )}

      {result && !isLoading && <PredictionCard result={result} />}
    </div>
  );
}
