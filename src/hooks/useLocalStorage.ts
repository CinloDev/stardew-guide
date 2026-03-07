"use client";

import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const raw = window.localStorage.getItem(key);
      if (raw) {
        return JSON.parse(raw) as T;
      }
    } catch {
      return initialValue;
    }

    return initialValue;
  });

  const updateValue = (nextValue: T) => {
    setValue(nextValue);
    window.localStorage.setItem(key, JSON.stringify(nextValue));
  };

  return [value, updateValue] as const;
}
