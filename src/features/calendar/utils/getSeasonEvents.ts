import { type BirthdayEvent, birthdays } from "@/data/birthdays";
import { type FestivalEvent, festivals } from "@/data/festivals";
import type { Season } from "@/lib/constants";

export type CalendarEventType =
  | "festival"
  | "birthday"
  | "crop"
  | "special"
  | "fishing"
  | "vendor"
  | "librero"
  | "tv";

export interface TVEvent {
  type: "tv";
  season: Season;
  day: number;
  name: string;
}

export type CalendarEvent = FestivalEvent | BirthdayEvent | TVEvent;

export interface EventFilters {
  includeFestivals: boolean;
  includeBirthdays: boolean;
  includeVendors: boolean;
}

export function getSeasonEvents(season: Season, filters?: EventFilters): CalendarEvent[] {
  const activeFilters: EventFilters = filters ?? {
    includeFestivals: true,
    includeBirthdays: true,
    includeVendors: true,
  };

  const seasonFestivals = activeFilters.includeFestivals
    ? festivals.filter((festival) => festival.season === season)
    : [];

  const seasonBirthdays = activeFilters.includeBirthdays
    ? birthdays.filter((birthday) => birthday.season === season)
    : [];

  return [...seasonFestivals, ...seasonBirthdays].sort((a, b) => a.day - b.day);
}

export function getEventIcon(type: CalendarEventType): string {
  if (type === "birthday") return "🎂";
  if (type === "festival") return "🎉";
  return "🌽";
}
