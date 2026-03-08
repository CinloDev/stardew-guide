"use client";

import { seasonLabels } from "@/data/seasons";
import { CalendarGrid } from "@/features/calendar/components/CalendarGrid";
import { EventFilter } from "@/features/calendar/components/EventFilter";
import { SeasonSelector } from "@/features/calendar/components/SeasonSelector";
import { useCalendar } from "@/features/calendar/hooks/useCalendar";

export default function CalendarPage() {
  const { season, setSeason, seasonOptions, filter, setFilter, events, today } = useCalendar();

  return (
    <section className="space-y-4">
      <h1 className="section-title">Seasonal Calendar</h1>
      <p className="text-sm text-stone-700">
        Planifica festivales, cumpleanos y cosechas por estacion con vista diaria.
      </p>

      <div className="panel space-y-4">
        <SeasonSelector season={season} seasons={seasonOptions} onSeasonChange={setSeason} />
        <EventFilter value={filter} onChange={setFilter} />
        <p className="text-xs text-stone-600">
          Highlight actual:{" "}
          <span className="font-semibold">
            {seasonLabels[today.season]} Day {today.day}
          </span>
        </p>
      </div>

      <CalendarGrid
        season={season}
        events={events}
        currentDay={today.day}
        isCurrentSeason={today.season === season}
      />
    </section>
  );
}
