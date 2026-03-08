"use client";

import type { Season } from "@/lib/constants";
import type { CalendarEvent } from "../utils/getSeasonEvents";
import { CalendarDay } from "./CalendarDay";

interface CalendarGridProps {
  season: Season;
  events: CalendarEvent[];
  currentDay: number;
  isCurrentSeason: boolean;
}

const days = Array.from({ length: 28 }, (_, index) => index + 1);

export function CalendarGrid({ season, events, currentDay, isCurrentSeason }: CalendarGridProps) {
  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {days.map((day) => {
        const dayEvents = events.filter((event) => event.day === day);
        const isToday = isCurrentSeason && currentDay === day;

        return (
          <CalendarDay
            key={`${season}-${day}`}
            day={day}
            season={season}
            events={dayEvents}
            isToday={isToday}
          />
        );
      })}
    </section>
  );
}
