"use client";

import { useCallback, useState } from "react";
import { getApiErrorMessage } from "@/src/utils/getApiErrorMessage";

export type AuthMessageType = "success" | "error" | null;

export const useToastMessage = () => {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<AuthMessageType>(null);

  const clear = useCallback(() => {
    setMessage("");
    setType(null);
  }, []);

  const setErrorMessage = useCallback((error: unknown, fallback: string) => {
    const message = getApiErrorMessage(error, fallback);
    setMessage(message);
    setType("error");
    return message;
  }, []);

  return {
    message,
    type,
    clear,
    setErrorMessage,
  };
};
