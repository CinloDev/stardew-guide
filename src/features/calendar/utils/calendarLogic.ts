import type { Season } from "@/lib/constants";

export interface CalendarEntry {
  day: number;
  season: Season;
  title: string;
  type: "birthday" | "festival" | "task";
}

export const calendarEntries: CalendarEntry[] = [
  { day: 13, season: "fall", title: "Abigail Birthday", type: "birthday" },
  { day: 16, season: "summer", title: "Luau", type: "festival" },
  { day: 28, season: "spring", title: "Season Planning Day", type: "task" },
  { day: 8, season: "winter", title: "Festival of Ice", type: "festival" },
];

export function filterCalendarBySeason(entries: CalendarEntry[], season: Season | "all") {
  if (season === "all") return entries;
  return entries.filter((entry) => entry.season === season);
}
