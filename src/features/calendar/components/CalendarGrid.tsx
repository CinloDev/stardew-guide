"use client";

import type { Season } from "@/lib/constants";
import type { CalendarEvent } from "../utils/getSeasonEvents";
import { type FestivalEvent } from "@/data/festivals";
import { CalendarDay } from "./CalendarDay";

interface CalendarGridProps {
  season: Season;
  events: CalendarEvent[];
  currentDay: number;
  isCurrentSeason: boolean;
  showVendors: boolean;
  onEventClick: (event: FestivalEvent) => void;
}

const days = Array.from({ length: 28 }, (_, index) => index + 1);
const weekDays = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

export function CalendarGrid({ season, events, currentDay, isCurrentSeason, showVendors, onEventClick }: CalendarGridProps) {
  return (
    <section className="w-full min-w-0 space-y-1 sm:space-y-2 overflow-x-hidden">
      {/* Header: Weekdays */}
      <div className="grid w-full grid-cols-[repeat(7,minmax(0,1fr))] gap-0.5 sm:gap-2">
        {weekDays.map((weekDay) => (
          <div
            key={weekDay}
            className="rounded border border-amber-900/15 bg-amber-100/60 px-0 py-1 text-center text-[8px] font-bold uppercase tracking-tight text-amber-900 sm:rounded-lg sm:px-3 sm:py-2 sm:text-xs sm:tracking-wide"
          >
            {weekDay}
          </div>
        ))}
      </div>

      {/* Grid: Days */}
      <div className="grid w-full grid-cols-[repeat(7,minmax(0,1fr))] gap-0.5 sm:gap-2">
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
              season={season}
              onEventClick={onEventClick}
            />
          );
        })}
      </div>
    </section>
  );
}
