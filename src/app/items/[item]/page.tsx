import museumItemsData from "@/data/museum-items.json";
import type { MuseumItem } from "@/types/museum";
import { notFound } from "next/navigation";

const museumItems = museumItemsData as MuseumItem[];

interface ItemDetailPageProps {
  params: Promise<{ item: string }>;
}

export default async function ItemDetailPage({ params }: ItemDetailPageProps) {
  const { item } = await params;
  const current = museumItems.find((entry) => entry.id === item);

  if (!current) {
    notFound();
  }

  return (
    <section className="space-y-3">
      <h1 className="section-title">{current.name}</h1>
      <p className="text-sm text-stone-700">Category: {current.category}</p>
      <p className="text-sm text-stone-700">Location: {current.locationHint}</p>
      <p className="text-sm text-stone-700">{current.description}</p>
    </section>
  );
}
