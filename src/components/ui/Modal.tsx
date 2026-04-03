"use client";

import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function Modal({ open, title, onClose, children, className = "bg-white", titleClassName = "text-amber-950" }: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/45 p-4">
      <div className={`w-full max-w-lg rounded-2xl p-5 shadow-xl ${className}`}>
        <header className="flex items-center justify-between">
          <h3 className={`text-lg font-semibold ${titleClassName}`}>{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-2 py-1 text-sm text-stone-600 hover:bg-stone-100"
          >
            Close
          </button>
        </header>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
