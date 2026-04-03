import { Card } from "@/components/ui/Card";
import museumItemsData from "@/data/museum-items.json";
import { ClientMuseumSummary } from "@/features/museum/components/ClientMuseumSummary";
import { MuseumGrid } from "@/features/museum/components/MuseumGrid";
import type { MuseumItem } from "@/types/museum";
import { getTranslations } from "@/lib/i18n";

const museumItems = museumItemsData as MuseumItem[];

export default function MuseumPage() {
  const t = getTranslations("es");
  return (
    <section className="space-y-5">
      <header>
        <h1 className="section-title">{t.pages.museum.title}</h1>
        <p className="mt-2 text-sm text-stone-700">
          {t.pages.museum.description}
        </p>
      </header>

      <Card>
        <ClientMuseumSummary total={museumItems.length} />
      </Card>

      <MuseumGrid items={museumItems} />
    </section>
  );
}
