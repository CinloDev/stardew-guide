"use client";

import { countMuseumProgress } from "@/features/museum/utils/museumHelpers";
import { useProgressStore } from "@/store/useProgressStore";
import type { MuseumItem } from "@/types/museum";
import { useMemo } from "react";

export function useMuseumProgress(items: MuseumItem[]) {
  const museumFound = useProgressStore((state) => state.museumFound);
  const museumDonated = useProgressStore((state) => state.museumDonated);
  const toggleFound = useProgressStore((state) => state.toggleFound);
  const toggleDonated = useProgressStore((state) => state.toggleDonated);
  const resetMuseum = useProgressStore((state) => state.resetMuseum);

  const progress = useMemo(
    () => countMuseumProgress(items, museumFound, museumDonated),
    [items, museumFound, museumDonated],
  );

  return {
    museumFound,
    museumDonated,
    toggleFound,
    toggleDonated,
    resetMuseum,
    progress,
  };
}
