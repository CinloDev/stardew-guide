"use client";

import { getCurrentStardewDate, seasonOrder } from "@/data/seasons";
import type { Season } from "@/lib/constants";
import { useMemo, useState } from "react";
import { type CalendarEventType, getSeasonEvents } from "../utils/getSeasonEvents";

export type CalendarFilter = "all" | CalendarEventType;

export function useCalendar() {
  const today = useMemo(() => getCurrentStardewDate(), []);
  const [season, setSeason] = useState<Season>(today.season);
  const [filter, setFilter] = useState<CalendarFilter>("all");

  const events = useMemo(() => {
    const includeFestivals = filter === "all" || filter === "festival";
    const includeBirthdays = filter === "all" || filter === "birthday";
    const includeVendors = filter === "all" || filter === "vendor";

    return getSeasonEvents(season, {
      includeFestivals,
      includeBirthdays,
      includeVendors,
    });
  }, [season, filter]);

  const showVendors = filter === "all" || filter === "vendor";

  return {
    season,
    setSeason,
    seasonOptions: seasonOrder,
    filter,
    setFilter,
    events,
    today,
    showVendors,
  };
}
