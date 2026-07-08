import apiClient from "./api-client";
import { USE_MOCK_DATA } from "@/constants/api";
import type {
  ApiResponse,
  MultimodalPredictionInput,
  PredictionResult,
  PredictionType,
} from "@/types";
import { DUMMY_PREDICTION } from "@/constants/dummy-data";

/** Combined multimodal prediction — text + audio + video fused via fusion layer */
export async function predictMultimodal(
  input: MultimodalPredictionInput
): Promise<PredictionResult> {
  if (USE_MOCK_DATA) {
    return DUMMY_PREDICTION;
  }

  const formData = new FormData();
  formData.append("text", input.text);
  formData.append("audio", input.audio);
  formData.append("video", input.video);

  const { data } = await apiClient.post<ApiResponse<PredictionResult>>(
    "/predict/multimodal",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return data.data;
}

export async function predictText(text: string): Promise<PredictionResult> {
  const { data } = await apiClient.post<ApiResponse<PredictionResult>>(
    "/predict/text",
    { text }
  );
  return data.data;
}

export async function predictAudio(file: File): Promise<PredictionResult> {
  const formData = new FormData();
  formData.append("audio", file);
  const { data } = await apiClient.post<ApiResponse<PredictionResult>>(
    "/predict/audio",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return data.data;
}

export async function predictVideo(file: File): Promise<PredictionResult> {
  const formData = new FormData();
  formData.append("video", file);
  const { data } = await apiClient.post<ApiResponse<PredictionResult>>(
    "/predict/video",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return data.data;
}

export async function predict(
  type: PredictionType,
  payload: string | File
): Promise<PredictionResult> {
  switch (type) {
    case "text":
      return predictText(payload as string);
    case "voice":
      return predictAudio(payload as File);
    case "video":
      return predictVideo(payload as File);
  }
}
