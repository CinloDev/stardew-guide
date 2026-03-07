"use client";

import { FilterBar } from "@/components/common/FilterBar";
import { Modal } from "@/components/ui/Modal";
import { MuseumItemCard } from "@/features/museum/components/MuseumItemCard";
import { MuseumSlot } from "@/features/museum/components/MuseumSlot";
import { useMuseumProgress } from "@/features/museum/hooks/useMuseumProgress";
import { filterMuseumItems } from "@/features/museum/utils/museumHelpers";
import type { MuseumItem } from "@/types/museum";
import { useMemo, useState } from "react";

interface MuseumGridProps {
  items: MuseumItem[];
}

export function MuseumGrid({ items }: MuseumGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "artifact" | "mineral">("all");
  const [selectedItem, setSelectedItem] = useState<MuseumItem | null>(null);

  const { museumFound, museumDonated, toggleFound, toggleDonated } = useMuseumProgress(items);

  const filteredItems = useMemo(
    () => filterMuseumItems(items, activeFilter),
    [activeFilter, items],
  );

  return (
    <div className="space-y-4">
      <FilterBar
        value={activeFilter}
        onChange={(value) => setActiveFilter(value as "all" | "artifact" | "mineral")}
        options={[
          { label: "All", value: "all" },
          { label: "Artifacts", value: "artifact" },
          { label: "Minerals", value: "mineral" },
        ]}
      />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <MuseumSlot
            key={item.id}
            item={item}
            found={museumFound.includes(item.id)}
            donated={museumDonated.includes(item.id)}
            onToggleFound={toggleFound}
            onToggleDonated={toggleDonated}
            onSelect={setSelectedItem}
          />
        ))}
      </div>

      <Modal
        open={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.name ?? "Museum item"}
      >
        {selectedItem ? (
          <MuseumItemCard
            item={selectedItem}
            found={museumFound.includes(selectedItem.id)}
            donated={museumDonated.includes(selectedItem.id)}
          />
        ) : null}
      </Modal>
    </div>
  );
}
