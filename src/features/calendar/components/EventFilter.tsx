"use client";

import { FilterBar } from "@/components/common/FilterBar";
import type { CalendarFilter } from "../hooks/useCalendar";

interface EventFilterProps {
  value: CalendarFilter;
  onChange: (value: CalendarFilter) => void;
}

export function EventFilter({ value, onChange }: EventFilterProps) {
  const categoryOptions = [
    { label: "Festivales", value: "festival" },
    { label: "Cumpleaños", value: "birthday" },
    { label: "Comerciantes", value: "vendor" },
  ];

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Tipo de evento</p>
      <div className="flex flex-wrap gap-2">
        {/* "All" solo visible en pantallas medianas o mayores */}
        <button
          type="button"
          onClick={() => onChange("all")}
          className={`hidden sm:inline-flex rounded-lg border px-3 py-1.5 text-sm transition ${
            value === "all"
              ? "border-amber-700 bg-amber-700 text-amber-50"
              : "border-amber-900/20 bg-white text-stone-700 hover:bg-amber-50"
          }`}
        >
          Todos
        </button>
        {categoryOptions.map((option) => (
          <button
            type="button"
            key={option.value}
            onClick={() => onChange(option.value as CalendarFilter)}
            className={`rounded-lg border px-3 py-1.5 text-sm transition ${
              value === option.value
                ? "border-amber-700 bg-amber-700 text-amber-50"
                : "border-amber-900/20 bg-white text-stone-700 hover:bg-amber-50"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
