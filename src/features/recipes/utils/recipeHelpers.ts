import type { Recipe } from "@/types/recipe";

export function sortRecipesByEnergy(recipes: Recipe[]) {
  return [...recipes].sort((a, b) => b.energyBonus - a.energyBonus);
}
