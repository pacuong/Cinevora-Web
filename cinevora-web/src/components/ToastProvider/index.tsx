"use client";

import { useState } from "react";
import { ToastContext, Toast, ToastType } from "@/src/components/ToastContext";
import CheckCircle from "@/src/icons/CheckCircle";
import ErrorCircleFill from "@/src/icons/ErrorCircleFill";
import ButtonComponent from "@/src/components/common/button";
import CloseIcon from "@/src/icons/CloseIcon";

const TOAST_DURATION = 3000;

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: ToastType = "success") => {
    const id = Date.now();

    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, TOAST_DURATION);
  };

  const handleRemoveToast = (id: number) => {
    setToasts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div className="fixed top-24 right-4 z-[9999] flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`relative min-w-[300px] max-w-[380px] rounded-2xl p-4 text-white flex items-center gap-3 shadow-2xl
              ${toast.type === "success" ? "bg-green-70" : "bg-red-100"}`}
          >
            <div className="flex flex-shrink-0 items-center justify-center rounded-full">
              {toast.type === "success" ? (
                <CheckCircle size={40} className="text-white-100" />
              ) : (
                <ErrorCircleFill size={40} className="text-white-100" />
              )}
            </div>
            <div className="flex-1 pt-0.5 text-sm font-medium text-white-100">
              {toast.message}
            </div>
            <ButtonComponent
              name={<CloseIcon />}
              variant="badge"
              onClick={() => handleRemoveToast(toast.id)}
              className="text-white/70 transition hover:text-white !px-5 !py-3 bg-transparent !text-white-100"
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
