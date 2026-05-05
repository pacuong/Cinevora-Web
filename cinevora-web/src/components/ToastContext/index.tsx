"use client";

import { createContext, useContext } from "react";

export type ToastType = "success" | "error";

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextType {
  addToast: (message: string, type?: ToastType) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);

const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
};

export default useToast;
