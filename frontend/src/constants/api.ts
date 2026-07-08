/** Use mock data instead of calling the backend (set to false when API is ready). */
export const USE_MOCK_DATA =
  process.env.NEXT_PUBLIC_USE_MOCK_DATA !== "false";

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";
