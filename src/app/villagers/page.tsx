"use client";

import { SearchBar } from "@/components/common/SearchBar";
import villagersData from "@/data/villagers.json";
import { GiftCard } from "@/features/gifts/components/GiftCard";
import { searchVillagersByGift } from "@/features/gifts/utils/giftLogic";
import type { Villager } from "@/types/villager";
import { useMemo, useState } from "react";
import { getTranslations } from "@/lib/i18n";

const villagers = villagersData as Villager[];

export default function VillagersPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => searchVillagersByGift(villagers, query), [query]);
  const t = getTranslations("es");

  return (
    <section className="space-y-5">
      <header>
        <h1 className="section-title">{t.pages.villagers.title}</h1>
        <p className="mt-2 text-sm text-stone-700">
          {t.pages.villagers.description}
        </p>
      </header>

      <SearchBar value={query} onChange={setQuery} placeholder="Buscar aldeano o regalo..." />

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((villager) => (
          <GiftCard key={villager.id} villager={villager} />
        ))}
      </div>
    </section>
  );
}
