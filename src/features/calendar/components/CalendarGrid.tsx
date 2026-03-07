"use client";

import { FilterBar } from "@/components/common/FilterBar";
import {
  type CalendarEntry,
  filterCalendarBySeason,
} from "@/features/calendar/utils/calendarLogic";
import { SEASONS, type Season } from "@/lib/constants";
import { useMemo, useState } from "react";

interface CalendarGridProps {
  entries: CalendarEntry[];
}

export function CalendarGrid({ entries }: CalendarGridProps) {
  const [activeSeason, setActiveSeason] = useState<Season | "all">("all");

  const filtered = useMemo(
    () => filterCalendarBySeason(entries, activeSeason),
    [entries, activeSeason],
  );

  return (
    <section className="space-y-4">
      <FilterBar
        value={activeSeason}
        onChange={(value) => setActiveSeason(value as Season | "all")}
        options={[
          { label: "All", value: "all" },
          ...SEASONS.map((season) => ({ label: season, value: season })),
        ]}
      />

      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((entry) => (
          <article key={`${entry.season}-${entry.day}-${entry.title}`} className="panel">
            <p className="text-xs uppercase tracking-wide text-stone-500">{entry.type}</p>
            <h3 className="text-lg font-semibold text-amber-950">
              Day {entry.day} · {entry.season}
            </h3>
            <p className="mt-1 text-sm text-stone-700">{entry.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
