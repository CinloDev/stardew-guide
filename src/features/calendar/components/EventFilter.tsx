"use client";

import { FilterBar } from "@/components/common/FilterBar";
import type { CalendarFilter } from "../hooks/useCalendar";

interface EventFilterProps {
  value: CalendarFilter;
  onChange: (value: CalendarFilter) => void;
}

export function EventFilter({ value, onChange }: EventFilterProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Event type</p>
      <FilterBar
        value={value}
        onChange={(nextValue) => onChange(nextValue as CalendarFilter)}
        options={[
          { label: "All", value: "all" },
          { label: "Festivals", value: "festival" },
          { label: "Birthdays", value: "birthday" },
          { label: "Crops", value: "crop" },
        ]}
      />
    </div>
  );
}
