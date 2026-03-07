"use client";

import type { MuseumItem } from "@/types/museum";

interface MuseumSlotProps {
  item: MuseumItem;
  found: boolean;
  donated: boolean;
  onToggleFound: (itemId: string) => void;
  onToggleDonated: (itemId: string) => void;
  onSelect: (item: MuseumItem) => void;
}

export function MuseumSlot({
  item,
  found,
  donated,
  onToggleFound,
  onToggleDonated,
  onSelect,
}: MuseumSlotProps) {
  return (
    <article className="rounded-xl border border-amber-900/20 bg-white p-3">
      <button type="button" onClick={() => onSelect(item)} className="w-full text-left">
        <h3 className="text-sm font-semibold text-amber-950">{item.name}</h3>
        <p className="mt-1 text-xs text-stone-600">{item.locationHint}</p>
      </button>
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => onToggleFound(item.id)}
          className={`rounded-md px-2 py-1 text-xs ${found ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-900"}`}
        >
          Found
        </button>
        <button
          type="button"
          onClick={() => onToggleDonated(item.id)}
          className={`rounded-md px-2 py-1 text-xs ${donated ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-900"}`}
        >
          Donated
        </button>
      </div>
    </article>
  );
}
