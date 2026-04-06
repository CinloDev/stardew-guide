import museumItemsData from "@/data/museum-items.json";
import { getTranslations } from "@/lib/i18n";
import type { MuseumItem } from "@/types/museum";
import Link from "next/link";

const museumItems = museumItemsData as MuseumItem[];

export default function ItemsPage() {
  const t = getTranslations("es");
  return (
    <section className="space-y-4">
      <h1 className="section-title">{t.pages.items.title}</h1>
      <p className="text-sm text-stone-700">{t.pages.items.description}</p>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {museumItems.map((item) => (
          <Link
            key={item.id}
            href={`/items/${item.id}`}
            className="panel hover:border-amber-700/40"
          >
            <h2 className="text-base font-semibold text-amber-950">{item.name}</h2>
            <p className="mt-1 text-xs text-stone-600">{item.category}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
