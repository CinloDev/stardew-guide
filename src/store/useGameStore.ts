"use client";

import { SEASONS, STORAGE_KEYS, type Season } from "@/lib/constants";
import { type Language } from "@/lib/i18n";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface GameState {
  year: number;
  season: Season;
  day: number;
  language: Language;
  setYear: (year: number) => void;
  setSeason: (season: Season) => void;
  setDay: (day: number) => void;
  setLanguage: (language: Language) => void;
  nextDay: () => void;
  prevDay: () => void;
}

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      year: 1,
      season: "spring",
      day: 1,
      language: "es",

      setYear: (year) => {
        const clampedYear = Math.max(year, 1);
        set({ year: clampedYear });
      },

      setSeason: (season) => set({ season }),

      setDay: (day) => {
        const clampedDay = Math.min(Math.max(day, 1), 28);
        set({ day: clampedDay });
      },

      setLanguage: (language) => set({ language }),

      nextDay: () => {
        const { year, day, season } = get();
        if (day < 28) {
          set({ day: day + 1 });
        } else {
          // Rollover to next season
          const currentIndex = SEASONS.indexOf(season);
          const nextIndex = (currentIndex + 1) % SEASONS.length;
          const nextYear = nextIndex === 0 ? year + 1 : year;
          set({ season: SEASONS[nextIndex], day: 1, year: nextYear });
        }
      },

      prevDay: () => {
        const { year, day, season } = get();
        if (day > 1) {
          set({ day: day - 1 });
        } else {
          // Rollover to previous season
          const currentIndex = SEASONS.indexOf(season);
          const prevIndex = (currentIndex - 1 + SEASONS.length) % SEASONS.length;
          const prevYear = currentIndex === 0 ? Math.max(1, year - 1) : year;
          set({ season: SEASONS[prevIndex], day: 28, year: prevYear });
        }
      },
    }),
    {
      name: STORAGE_KEYS.gameDate,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
