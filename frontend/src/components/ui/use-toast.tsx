"use client";

import * as React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

type ToastMessage = {
  id: string;
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success";
};

type ToastContextType = {
  toast: (message: Omit<ToastMessage, "id">) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

export function ToastProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const toast = React.useCallback(
    (message: Omit<ToastMessage, "id">) => {
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { ...message, id }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    },
    []
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastProvider>
        {children}
        {toasts.map((t) => (
          <Toast key={t.id} variant={t.variant} open>
            <div className="grid gap-1">
              {t.title && <ToastTitle>{t.title}</ToastTitle>}
              {t.description && (
                <ToastDescription>{t.description}</ToastDescription>
              )}
            </div>
            <ToastClose />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProviderWrapper");
  }
  return context;
}
