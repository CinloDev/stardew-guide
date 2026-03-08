import { type BirthdayEvent, birthdays } from "@/data/birthdays";
import { type FestivalEvent, festivals } from "@/data/festivals";
import { type CropPlanEvent, cropPlans } from "@/data/seasons";
import type { Season } from "@/lib/constants";

export type CalendarEventType = "festival" | "birthday" | "crop";

export type CalendarEvent = FestivalEvent | BirthdayEvent | CropPlanEvent;

export interface EventFilters {
  includeFestivals: boolean;
  includeBirthdays: boolean;
  includeCrops: boolean;
}

export function getSeasonEvents(season: Season, filters?: EventFilters): CalendarEvent[] {
  const activeFilters: EventFilters = filters ?? {
    includeFestivals: true,
    includeBirthdays: true,
    includeCrops: true,
  };

  const seasonFestivals = activeFilters.includeFestivals
    ? festivals.filter((festival) => festival.season === season)
    : [];

  const seasonBirthdays = activeFilters.includeBirthdays
    ? birthdays.filter((birthday) => birthday.season === season)
    : [];

  const seasonCrops = activeFilters.includeCrops
    ? cropPlans.filter((crop) => crop.season === season)
    : [];

  return [...seasonFestivals, ...seasonBirthdays, ...seasonCrops].sort((a, b) => a.day - b.day);
}

export function getEventIcon(type: CalendarEventType): string {
  if (type === "birthday") return "🎂";
  if (type === "festival") return "🎉";
  return "🌽";
}
