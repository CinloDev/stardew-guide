export const STORAGE_KEYS = {
  progress: "stardew-guide-progress",
  gameDate: "stardew-guide-game-date",
} as const;

export const SEASONS = ["spring", "summer", "fall", "winter"] as const;

export type Season = (typeof SEASONS)[number];
