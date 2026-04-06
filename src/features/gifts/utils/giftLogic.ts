import type { Villager } from "@/types/villager";

export function searchVillagersByGift(villagers: Villager[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return villagers;

  const filtered = villagers.filter((villager) => 
    villager.name.toLowerCase().includes(normalized)
  );

  return filtered.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    // Prioritize exact matches first
    if (nameA === normalized) return -1;
    if (nameB === normalized) return 1;

    // Prioritize names that START with the query
    const startsA = nameA.startsWith(normalized);
    const startsB = nameB.startsWith(normalized);

    if (startsA && !startsB) return -1;
    if (!startsA && startsB) return 1;

    // Default alphabetical sort for the rest
    return nameA.localeCompare(nameB);
  });
}
