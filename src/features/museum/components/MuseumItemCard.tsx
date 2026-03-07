import type { MuseumItem } from "@/types/museum";

interface MuseumItemCardProps {
  item: MuseumItem;
  found: boolean;
  donated: boolean;
}

export function MuseumItemCard({ item, found, donated }: MuseumItemCardProps) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs uppercase tracking-wide text-stone-500">{item.category}</p>
        <h4 className="text-xl font-semibold text-amber-950">{item.name}</h4>
      </div>
      <p className="text-sm text-stone-700">{item.description}</p>
      <p className="text-sm text-stone-600">Best location: {item.locationHint}</p>
      <div className="flex gap-2 text-xs">
        <span
          className={`rounded-full px-2 py-1 ${found ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-900"}`}
        >
          {found ? "Found" : "Not found"}
        </span>
        <span
          className={`rounded-full px-2 py-1 ${donated ? "bg-amber-700 text-white" : "bg-amber-100 text-amber-900"}`}
        >
          {donated ? "Donated" : "Not donated"}
        </span>
      </div>
    </div>
  );
}
