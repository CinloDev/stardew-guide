import type { MuseumItem } from "@/types/museum";

export function filterMuseumItems(items: MuseumItem[], category: "all" | "artifact" | "mineral") {
  if (category === "all") return items;
  return items.filter((item) => item.category === category);
}

export function countMuseumProgress(items: MuseumItem[], found: string[], donated: string[]) {
  return {
    total: items.length,
    found: items.filter((item) => found.includes(item.id)).length,
    donated: items.filter((item) => donated.includes(item.id)).length,
  };
}
