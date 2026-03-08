"use client";

import { FilterBar } from "@/components/common/FilterBar";
import { seasonLabels } from "@/data/seasons";
import type { Season } from "@/lib/constants";

interface SeasonSelectorProps {
  season: Season;
  seasons: readonly Season[];
  onSeasonChange: (value: Season) => void;
}

export function SeasonSelector({ season, seasons, onSeasonChange }: SeasonSelectorProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-stone-500">Season</p>
      <FilterBar
        value={season}
        onChange={(value) => onSeasonChange(value as Season)}
        options={seasons.map((entry) => ({
          label: seasonLabels[entry],
          value: entry,
        }))}
      />
    </div>
  );
}
