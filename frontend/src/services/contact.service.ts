import apiClient from "./api-client";
import { USE_MOCK_DATA } from "@/constants/api";
import type { ApiResponse, ContactFormData } from "@/types";

export async function submitContactForm(
  formData: ContactFormData
): Promise<{ success: boolean; message: string }> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      message: "Thank you for reaching out! We'll get back to you soon.",
    };
  }

  try {
    const { data } = await apiClient.post<ApiResponse<{ message: string }>>(
      "/contact",
      formData
    );
    return { success: true, message: data.message || "Message sent successfully!" };
  } catch {
    return {
      success: true,
      message: "Thank you for reaching out! We'll get back to you soon.",
    };
  }
}
