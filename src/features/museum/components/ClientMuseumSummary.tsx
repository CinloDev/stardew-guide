"use client";

import { ProgressBadge } from "@/components/common/ProgressBadge";
import { useProgressStore } from "@/store/useProgressStore";

interface ClientMuseumSummaryProps {
  total: number;
}

export function ClientMuseumSummary({ total }: ClientMuseumSummaryProps) {
  const found = useProgressStore((state) => state.museumFound.length);
  const donated = useProgressStore((state) => state.museumDonated.length);
  const resetMuseum = useProgressStore((state) => state.resetMuseum);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <ProgressBadge label="Found" current={found} total={total} />
      <ProgressBadge label="Donated" current={donated} total={total} />
      <button
        type="button"
        onClick={resetMuseum}
        className="rounded-lg bg-rose-100 px-3 py-1 text-xs font-medium text-rose-900 hover:bg-rose-200"
      >
        Reset progress
      </button>
    </div>
  );
}
