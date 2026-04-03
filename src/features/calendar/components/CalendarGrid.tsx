"use client";

import type { Season } from "@/lib/constants";
import type { CalendarEvent } from "../utils/getSeasonEvents";
import { CalendarDay } from "./CalendarDay";

interface CalendarGridProps {
  season: Season;
  events: CalendarEvent[];
  currentDay: number;
  isCurrentSeason: boolean;
  showVendors: boolean;
}

const days = Array.from({ length: 28 }, (_, index) => index + 1);
const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

export function CalendarGrid({ season, events, currentDay, isCurrentSeason, showVendors }: CalendarGridProps) {
  return (
    <section className="space-y-1.5 sm:space-y-2">
      <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {weekDays.map((weekDay) => (
            <div
              key={weekDay}
              className="rounded-md border border-amber-900/15 bg-amber-100/60 px-1 py-1.5 text-center text-[10px] font-semibold uppercase tracking-wide text-amber-900 sm:rounded-lg sm:px-3 sm:py-2 sm:text-xs"
            >
              {weekDay}
            </div>
          ))}
        </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {days.map((day) => {
          const dayEvents = events.filter((event) => event.day === day);
          const isToday = isCurrentSeason && currentDay === day;

          return (
            <CalendarDay
              key={`${season}-${day}`}
              day={day}
              events={dayEvents}
              isToday={isToday}
              showVendors={showVendors}
            />
          );
        })}
      </div>
    </section>
  );
}
