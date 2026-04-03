"use client";

import { STORAGE_KEYS, type Season, SEASONS } from "@/lib/constants";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface GameState {
  season: Season;
  day: number;
  setSeason: (season: Season) => void;
  setDay: (day: number) => void;
  nextDay: () => void;
  prevDay: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      season: "spring",
      day: 1,

      setSeason: (season) => set({ season }),
      
      setDay: (day) => {
        const clampedDay = Math.min(Math.max(day, 1), 28);
        set({ day: clampedDay });
      },

      nextDay: () => {
        const { day, season } = get();
        if (day < 28) {
          set({ day: day + 1 });
        } else {
          // Rollover to next season
          const currentIndex = SEASONS.indexOf(season);
          const nextIndex = (currentIndex + 1) % SEASONS.length;
          set({ season: SEASONS[nextIndex], day: 1 });
        }
      },

      prevDay: () => {
        const { day, season } = get();
        if (day > 1) {
          set({ day: day - 1 });
        } else {
          // Rollover to previous season
          const currentIndex = SEASONS.indexOf(season);
          const prevIndex = (currentIndex - 1 + SEASONS.length) % SEASONS.length;
          set({ season: SEASONS[prevIndex], day: 28 });
        }
      },
    }),
    {
      name: STORAGE_KEYS.gameDate,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
