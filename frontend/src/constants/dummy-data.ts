import type { PredictionResult, RecentPrediction } from "@/types";

export const DUMMY_PREDICTION: PredictionResult = {
  emotion: "Sad",
  depression: "Moderate",
  stress: "High",
  confidence: "94%",
  modalityBreakdown: {
    text: {
      emotion: "Sad",
      stress: "High",
      depression: "Moderate",
      confidence: "88%",
    },
    voice: {
      emotion: "Anxious",
      stress: "High",
      depression: "Moderate",
      confidence: "85%",
    },
    video: {
      emotion: "Sad",
      stress: "Moderate",
      depression: "Moderate",
      confidence: "91%",
    },
  },
  fusion: {
    method: "Attention-based Weighted Fusion",
    weights: { text: 0.35, voice: 0.3, video: 0.35 },
  },
  recommendations: [
    "Consider scheduling a session with a mental health professional.",
    "Practice mindfulness exercises for 10 minutes daily.",
    "Maintain a regular sleep schedule of 7-8 hours.",
    "Reach out to trusted friends or family for support.",
  ],
};

export const DASHBOARD_STATS = {
  totalPredictions: 12847,
  weeklyGrowth: 12.5,
  avgConfidence: 91.3,
  activeUsers: 342,
};

export const EMOTION_DISTRIBUTION = [
  { name: "Happy", value: 28, color: "#22C55E" },
  { name: "Neutral", value: 32, color: "#64748B" },
  { name: "Sad", value: 18, color: "#3B82F6" },
  { name: "Anxious", value: 14, color: "#F59E0B" },
  { name: "Angry", value: 8, color: "#EF4444" },
];

export const WEEKLY_ANALYSIS = [
  { day: "Mon", predictions: 145, stress: 62, depression: 45 },
  { day: "Tue", predictions: 178, stress: 58, depression: 42 },
  { day: "Wed", predictions: 203, stress: 71, depression: 55 },
  { day: "Thu", predictions: 189, stress: 65, depression: 48 },
  { day: "Fri", predictions: 234, stress: 78, depression: 61 },
  { day: "Sat", predictions: 156, stress: 52, depression: 38 },
  { day: "Sun", predictions: 132, stress: 48, depression: 35 },
];

export const MONTHLY_TREND = [
  { month: "Jan", value: 820 },
  { month: "Feb", value: 945 },
  { month: "Mar", value: 1102 },
  { month: "Apr", value: 1287 },
  { month: "May", value: 1456 },
  { month: "Jun", value: 1623 },
];

export const RECENT_PREDICTIONS: RecentPrediction[] = [
  {
    id: "1",
    type: "text",
    emotion: "Neutral",
    stress: "Low",
    depression: "Minimal",
    confidence: 92,
    timestamp: "2026-07-07T10:30:00Z",
  },
  {
    id: "2",
    type: "voice",
    emotion: "Anxious",
    stress: "High",
    depression: "Moderate",
    confidence: 88,
    timestamp: "2026-07-07T09:15:00Z",
  },
  {
    id: "3",
    type: "video",
    emotion: "Sad",
    stress: "Moderate",
    depression: "Moderate",
    confidence: 94,
    timestamp: "2026-07-07T08:45:00Z",
  },
  {
    id: "4",
    type: "text",
    emotion: "Happy",
    stress: "Low",
    depression: "Minimal",
    confidence: 96,
    timestamp: "2026-07-06T16:20:00Z",
  },
  {
    id: "5",
    type: "voice",
    emotion: "Neutral",
    stress: "Moderate",
    depression: "Mild",
    confidence: 85,
    timestamp: "2026-07-06T14:10:00Z",
  },
];

export const LANDING_STATS = [
  { label: "Prediction Accuracy", value: 94, suffix: "%" },
  { label: "Datasets Integrated", value: 3, suffix: "+" },
  { label: "AI Models", value: 4, suffix: "" },
  { label: "Modalities", value: 3, suffix: "" },
];

export const LANDING_FEATURES = [
  {
    title: "Multimodal Analysis",
    description:
      "Combine text, voice, and facial expressions for comprehensive mental health assessment.",
    icon: "Layers",
  },
  {
    title: "Real-time Predictions",
    description:
      "Get instant mental health insights with confidence scores and actionable recommendations.",
    icon: "Zap",
  },
  {
    title: "Fusion AI Engine",
    description:
      "Advanced fusion layer merges predictions from multiple models for higher accuracy.",
    icon: "Brain",
  },
  {
    title: "Privacy First",
    description:
      "Your data is processed securely with end-to-end encryption and privacy compliance.",
    icon: "Shield",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track trends, monitor patterns, and visualize emotional distributions over time.",
    icon: "BarChart3",
  },
  {
    title: "Evidence-Based",
    description:
      "Built on validated datasets including DAIC-WOZ, RAVDESS, and mental health text corpora.",
    icon: "BookOpen",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is multimodal AI for mental health?",
    answer:
      "Multimodal AI analyzes multiple data types — text, speech, and video — simultaneously to provide a more accurate and holistic assessment of mental health conditions than any single modality alone.",
  },
  {
    question: "How accurate are the predictions?",
    answer:
      "Our fusion model achieves up to 94% accuracy by combining specialized models for each modality. Individual model accuracies range from 85% to 92% depending on the input type.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest. We follow HIPAA-aligned practices and never share personal health information with third parties.",
  },
  {
    question: "Can this replace professional diagnosis?",
    answer:
      "No. MindScope AI is a screening and monitoring tool designed to complement, not replace, professional mental health care. Always consult qualified healthcare providers.",
  },
  {
    question: "What datasets power the models?",
    answer:
      "We use DAIC-WOZ for depression detection, RAVDESS for speech emotion recognition, and curated mental health text datasets for NLP-based analysis.",
  },
];

export const TECHNOLOGIES = [
  { name: "React 19", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TensorFlow", category: "ML" },
  { name: "PyTorch", category: "ML" },
  { name: "FastAPI", category: "Backend" },
  { name: "BERT", category: "NLP" },
  { name: "OpenCV", category: "Vision" },
  { name: "Librosa", category: "Audio" },
];

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Input Collection",
    description: "User provides text, voice recording, or video input through our intuitive interface.",
  },
  {
    step: 2,
    title: "Preprocessing",
    description: "Data is cleaned, normalized, and prepared for each specialized AI model.",
  },
  {
    step: 3,
    title: "Model Inference",
    description: "Dedicated models analyze each modality independently for emotion and mental state.",
  },
  {
    step: 4,
    title: "Fusion & Report",
    description: "Results are fused into a comprehensive report with recommendations.",
  },
];
