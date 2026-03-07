import type { Recipe } from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="panel">
      <h3 className="text-lg font-semibold text-amber-950">{recipe.name}</h3>
      <p className="mt-2 text-sm text-stone-700">Ingredients: {recipe.ingredients.join(", ")}</p>
      <p className="mt-1 text-sm text-stone-700">Source: {recipe.source}</p>
      <p className="mt-2 text-sm text-stone-600">
        Energy +{recipe.energyBonus} · Health +{recipe.healthBonus}
      </p>
    </article>
  );
}
