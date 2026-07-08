export interface ModalityScore {
  emotion: string;
  stress: string;
  depression: string;
  confidence: string;
}

export interface PredictionResult {
  emotion: string;
  depression: string;
  stress: string;
  confidence: string;
  recommendations?: string[];
  /** Per-modality outputs before fusion */
  modalityBreakdown?: {
    text: ModalityScore;
    voice: ModalityScore;
    video: ModalityScore;
  };
  fusion?: {
    method: string;
    weights: { text: number; voice: number; video: number };
  };
}

export interface MultimodalPredictionInput {
  text: string;
  audio: File;
  video: File;
}

export interface RecentPrediction {
  id: string;
  type: "text" | "voice" | "video" | "multimodal";
  emotion: string;
  stress: string;
  depression: string;
  confidence: number;
  timestamp: string;
}

export interface DashboardData {
  totalPredictions: number;
  weeklyGrowth: number;
  avgConfidence: number;
  activeUsers: number;
  emotionDistribution: { name: string; value: number; color: string }[];
  weeklyAnalysis: {
    day: string;
    predictions: number;
    stress: number;
    depression: number;
  }[];
  monthlyTrend: { month: string; value: number }[];
  recentPredictions: RecentPrediction[];
}

export interface ModelMetrics {
  name: string;
  description: string;
  modality: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  chartData: { metric: string; value: number }[];
}

export interface DatasetInfo {
  id: string;
  name: string;
  description: string;
  size: string;
  purpose: string;
  image: string;
  reference: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  guide?: boolean;
  skills: string[];
  responsibilities: string[];
  avatar: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type PredictionType = "text" | "voice" | "video";

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}
