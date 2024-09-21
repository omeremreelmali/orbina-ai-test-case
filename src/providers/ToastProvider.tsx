"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect
} from "react";

type ToastVariant = "success" | "error" | "warning" | "info";
type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left";

interface ToastOptions {
  message: string;
  variant?: ToastVariant;
  position?: ToastPosition;
  duration?: number;
}

interface ToastContextType {
  open: (options: ToastOptions) => void;
  close: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ToastOptions>({ message: "" });

  const open = useCallback((newOptions: ToastOptions) => {
    setOptions(newOptions);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen && options.duration) {
      const timer = setTimeout(() => close(), options.duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, options.duration, close]);

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4"
  };

  const variantClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-blue-500 text-white"
  };

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <div
          className={`fixed max-w-sm rounded-lg p-4 shadow-lg transition-opacity duration-300 ${
            positionClasses[options.position || "bottom-right"]
          } ${variantClasses[options.variant || "info"]}`}
        >
          <p className="text-md font-semibold text-white">{options.message}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
