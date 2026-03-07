"use client";

import { STORAGE_KEYS } from "@/lib/constants";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ProgressStore {
  museumFound: string[];
  museumDonated: string[];
  toggleFound: (itemId: string) => void;
  toggleDonated: (itemId: string) => void;
  resetMuseum: () => void;
}

function toggleInList(list: string[], itemId: string) {
  return list.includes(itemId) ? list.filter((id) => id !== itemId) : [...list, itemId];
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      museumFound: [],
      museumDonated: [],
      toggleFound: (itemId) => {
        const next = toggleInList(get().museumFound, itemId);
        set({ museumFound: next });
      },
      toggleDonated: (itemId) => {
        const next = toggleInList(get().museumDonated, itemId);
        const found = get().museumFound;
        set({
          museumDonated: next,
          museumFound:
            next.includes(itemId) && !found.includes(itemId) ? [...found, itemId] : found,
        });
      },
      resetMuseum: () => set({ museumFound: [], museumDonated: [] }),
    }),
    {
      name: STORAGE_KEYS.progress,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        museumFound: state.museumFound,
        museumDonated: state.museumDonated,
      }),
    },
  ),
);
