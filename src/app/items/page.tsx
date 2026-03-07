import museumItemsData from "@/data/museum-items.json";
import type { MuseumItem } from "@/types/museum";
import Link from "next/link";

const museumItems = museumItemsData as MuseumItem[];

export default function ItemsPage() {
  return (
    <section className="space-y-4">
      <h1 className="section-title">Items Index</h1>
      <p className="text-sm text-stone-700">
        Data route for item detail pages and future integrations.
      </p>

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
