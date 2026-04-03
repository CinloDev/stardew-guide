"use client";

import { useMemo, useState } from "react";
import { type Season, SEASONS } from "@/lib/constants";
import { seasonOrder } from "@/data/seasons";
import { useGameStore } from "@/store/useGameStore";
import { type CalendarEventType, getSeasonEvents } from "../utils/getSeasonEvents";

export type CalendarFilter = "all" | CalendarEventType;

export function useCalendar() {
  const { season: gameSeason, day: gameDay } = useGameStore();
  
  // Use the manual game date for "Today"
  const today = useMemo(() => ({
    season: gameSeason,
    day: gameDay
  }), [gameSeason, gameDay]);

  // The calendar view can still be toggled to other seasons
  const [viewSeason, setViewSeason] = useState<Season>(gameSeason);
  const [filter, setFilter] = useState<CalendarFilter>("all");

  const events = useMemo(() => {
    const includeFestivals = filter === "all" || filter === "festival";
    const includeBirthdays = filter === "all" || filter === "birthday";
    const includeVendors = filter === "all" || filter === "vendor";

    return getSeasonEvents(viewSeason, {
      includeFestivals,
      includeBirthdays,
      includeVendors,
    });
  }, [viewSeason, filter]);

  const showVendors = filter === "all" || filter === "vendor";

  return {
    season: viewSeason,
    setSeason: setViewSeason,
    seasonOptions: seasonOrder,
    filter,
    setFilter,
    events,
    today,
    showVendors,
  };
}
