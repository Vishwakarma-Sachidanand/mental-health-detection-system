import apiClient from "./api-client";
import { USE_MOCK_DATA } from "@/constants/api";
import type { ApiResponse, DashboardData, RecentPrediction } from "@/types";
import {
  DASHBOARD_STATS,
  EMOTION_DISTRIBUTION,
  WEEKLY_ANALYSIS,
  MONTHLY_TREND,
  RECENT_PREDICTIONS,
} from "@/constants/dummy-data";

function getMockDashboardData(): DashboardData {
  return {
    ...DASHBOARD_STATS,
    emotionDistribution: EMOTION_DISTRIBUTION,
    weeklyAnalysis: WEEKLY_ANALYSIS,
    monthlyTrend: MONTHLY_TREND,
    recentPredictions: RECENT_PREDICTIONS,
  };
}

export async function getDashboardData(): Promise<DashboardData> {
  if (USE_MOCK_DATA) {
    return getMockDashboardData();
  }

  try {
    const { data } = await apiClient.get<ApiResponse<DashboardData>>("/dashboard");
    return data.data;
  } catch {
    return getMockDashboardData();
  }
}

export async function getPredictionHistory(): Promise<RecentPrediction[]> {
  if (USE_MOCK_DATA) {
    return RECENT_PREDICTIONS;
  }

  try {
    const { data } = await apiClient.get<ApiResponse<RecentPrediction[]>>("/history");
    return data.data;
  } catch {
    return RECENT_PREDICTIONS;
  }
}
