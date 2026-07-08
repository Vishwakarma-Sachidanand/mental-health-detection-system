import type { ModelMetrics } from "@/types";

export const AI_MODELS: ModelMetrics[] = [
  {
    name: "Text Model",
    description:
      "BERT-based transformer model fine-tuned on mental health text corpora for sentiment analysis, depression classification, and stress level detection from written text.",
    modality: "NLP",
    accuracy: 91.2,
    precision: 89.8,
    recall: 90.5,
    f1Score: 90.1,
    chartData: [
      { metric: "Accuracy", value: 91.2 },
      { metric: "Precision", value: 89.8 },
      { metric: "Recall", value: 90.5 },
      { metric: "F1", value: 90.1 },
    ],
  },
  {
    name: "Speech Model",
    description:
      "CNN-LSTM hybrid architecture processing mel-spectrogram features from audio for emotion recognition, stress detection, and vocal biomarker analysis.",
    modality: "Audio",
    accuracy: 87.6,
    precision: 86.2,
    recall: 88.1,
    f1Score: 87.1,
    chartData: [
      { metric: "Accuracy", value: 87.6 },
      { metric: "Precision", value: 86.2 },
      { metric: "Recall", value: 88.1 },
      { metric: "F1", value: 87.1 },
    ],
  },
  {
    name: "Face Emotion Model",
    description:
      "ResNet-50 based convolutional neural network trained on facial expression datasets for real-time emotion detection and micro-expression analysis.",
    modality: "Vision",
    accuracy: 89.4,
    precision: 88.7,
    recall: 89.0,
    f1Score: 88.8,
    chartData: [
      { metric: "Accuracy", value: 89.4 },
      { metric: "Precision", value: 88.7 },
      { metric: "Recall", value: 89.0 },
      { metric: "F1", value: 88.8 },
    ],
  },
  {
    name: "Fusion Model",
    description:
      "Attention-based multimodal fusion network combining outputs from text, speech, and face models for unified mental health prediction with enhanced accuracy.",
    modality: "Fusion",
    accuracy: 94.1,
    precision: 93.5,
    recall: 94.0,
    f1Score: 93.7,
    chartData: [
      { metric: "Accuracy", value: 94.1 },
      { metric: "Precision", value: 93.5 },
      { metric: "Recall", value: 94.0 },
      { metric: "F1", value: 93.7 },
    ],
  },
];
