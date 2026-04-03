import recipesData from "@/data/recipes.json";
import { RecipeCard } from "@/features/recipes/components/RecipeCard";
import { sortRecipesByEnergy } from "@/features/recipes/utils/recipeHelpers";
import type { Recipe } from "@/types/recipe";
import { getTranslations } from "@/lib/i18n";

const recipes = sortRecipesByEnergy(recipesData as Recipe[]);

export default function RecipesPage() {
  const t = getTranslations("es");
  return (
    <section className="space-y-4">
      <h1 className="section-title">{t.pages.recipes.title}</h1>
      <p className="text-sm text-stone-700">
        {t.pages.recipes.description}
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
