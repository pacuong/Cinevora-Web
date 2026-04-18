import type { AxiosError } from "axios";

export const getApiErrorMessage = (
  error: unknown,
  fallback = "Có lỗi xảy ra",
): string => {
  if (isAxiosError(error)) {
    const data = error.response?.data;

    if (typeof data === "string") return data;

    if (typeof data === "object" && data !== null && "message" in data) {
      const message = (data as { message?: unknown }).message;

      if (Array.isArray(message)) {
        return message.join("\n");
      }

      if (typeof message === "string") {
        return message;
      }
    }
  }

  return fallback;
};

const isAxiosError = (error: unknown): error is AxiosError => {
  return typeof error === "object" && error !== null && "isAxiosError" in error;
};
