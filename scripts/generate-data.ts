import museumItems from "../src/data/museum-items.json";
import recipes from "../src/data/recipes.json";
import villagers from "../src/data/villagers.json";

function main() {
  const summary = {
    museumItems: museumItems.length,
    villagers: villagers.length,
    recipes: recipes.length,
    generatedAt: new Date().toISOString(),
  };

  console.log("Dataset summary:");
  console.table(summary);
}

main();
