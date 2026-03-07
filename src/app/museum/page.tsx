import { Card } from "@/components/ui/Card";
import museumItemsData from "@/data/museum-items.json";
import { ClientMuseumSummary } from "@/features/museum/components/ClientMuseumSummary";
import { MuseumGrid } from "@/features/museum/components/MuseumGrid";
import type { MuseumItem } from "@/types/museum";

const museumItems = museumItemsData as MuseumItem[];

export default function MuseumPage() {
  return (
    <section className="space-y-5">
      <header>
        <h1 className="section-title">Museum Interactive Tracker</h1>
        <p className="mt-2 text-sm text-stone-700">
          Marca cada item como encontrado o donado. El estado se guarda en localStorage mediante
          Zustand.
        </p>
      </header>

      <Card>
        <ClientMuseumSummary total={museumItems.length} />
      </Card>

      <MuseumGrid items={museumItems} />
    </section>
  );
}
