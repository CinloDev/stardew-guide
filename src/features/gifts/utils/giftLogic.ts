import type { Villager } from "@/types/villager";

export function searchVillagersByGift(villagers: Villager[], query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return villagers;

  return villagers.filter((villager) => {
    const allGifts = [...villager.lovedGifts, ...villager.likedGifts].join(" ").toLowerCase();
    return villager.name.toLowerCase().includes(normalized) || allGifts.includes(normalized);
  });
}
