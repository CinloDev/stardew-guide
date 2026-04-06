import { Season } from "@/lib/constants";

export interface QueenOfSauceRecipe {
  en: string;
  es: string;
  image: string;
}

export const queenOfSauceRecipes: QueenOfSauceRecipe[] = [
  // Year 1 (Odd years)
  // Spring 1
  { en: "Stir Fry", es: "Sofrito", image: "/images/gifts_and_recipes/Stir_Fry.webp" },
  { en: "Coleslaw", es: "Chucrut", image: "/images/gifts_and_recipes/Coleslaw.webp" },
  { en: "Radish Salad", es: "Ensalada de rábanos", image: "/images/gifts_and_recipes/Radish_Salad.webp" },
  { en: "Omelet", es: "Tortilla", image: "/images/gifts_and_recipes/Omelet.webp" },
  
  // Summer 1
  { en: "Baked Fish", es: "Pescado asado", image: "/images/gifts_and_recipes/Baked_Fish.webp" },
  { en: "Pancakes", es: "Tortitas", image: "/images/gifts_and_recipes/Pancakes.webp" },
  { en: "Maki Roll", es: "Rollitos maki", image: "/images/gifts_and_recipes/Maki_Roll.webp" },
  { en: "Bread", es: "Pan", image: "/images/gifts_and_recipes/Bread.webp" },
  
  // Fall 1
  { en: "Tortilla", es: "Tortilla de maíz", image: "/images/gifts_and_recipes/Tortilla.webp" },
  { en: "Trout Soup", es: "Sopa de trucha", image: "/images/gifts_and_recipes/Trout_Soup.webp" },
  { en: "Glazed Yams", es: "Ñames glaseados", image: "/images/gifts_and_recipes/Glazed_Yams.webp" },
  { en: "Artichoke Dip", es: "Salsa de alcachofa", image: "/images/gifts_and_recipes/Artichoke_Dip.webp" },
  
  // Winter 1
  { en: "Plum Pudding", es: "Pudin de ciruela", image: "/images/gifts_and_recipes/Plum_Pudding.webp" },
  { en: "Chocolate Cake", es: "Pastel de chocolate", image: "/images/gifts_and_recipes/Chocolate_Cake.webp" },
  { en: "Pumpkin Pie", es: "Tarta de calabaza", image: "/images/gifts_and_recipes/Pumpkin_Pie.webp" },
  { en: "Cranberry Candy", es: "Dulce de grosellas", image: "/images/gifts_and_recipes/Cranberry_Candy.webp" },

  // Year 2 (Even years)
  // Spring 2
  { en: "Pizza", es: "Pizza", image: "/images/gifts_and_recipes/Pizza.webp" },
  { en: "Hashbrowns", es: "Croquetas de patata", image: "/images/gifts_and_recipes/Hashbrowns.webp" },
  { en: "Complete Breakfast", es: "Desayuno inglés", image: "/images/gifts_and_recipes/Complete_Breakfast.webp" },
  { en: "Lucky Lunch", es: "Almuerzo de la suerte", image: "/images/gifts_and_recipes/Lucky_Lunch.webp" },
  
  // Summer 2
  { en: "Carp Surprise", es: "Sorpresa de carpa", image: "/images/gifts_and_recipes/Carp_Surprise.webp" },
  { en: "Maple Bar", es: "Bollito de arce", image: "/images/gifts_and_recipes/Maple_Bar.webp" },
  { en: "Pink Cake", es: "Pastel rosa", image: "/images/gifts_and_recipes/Pink_Cake.webp" },
  { en: "Roasted Hazelnuts", es: "Avellanas tostadas", image: "/images/gifts_and_recipes/Roasted_Hazelnuts.webp" },
  
  // Fall 2
  { en: "Fruit Salad", es: "Macedonia", image: "/images/gifts_and_recipes/Fruit_Salad.webp" },
  { en: "Blackberry Cobbler", es: "Tarta de moras", image: "/images/gifts_and_recipes/Blackberry_Cobbler.webp" },
  { en: "Crab Cakes", es: "Tortas de cangrejo", image: "/images/gifts_and_recipes/Crab_Cakes.webp" },
  { en: "Fiddlehead Risotto", es: "Risotto de helecho", image: "/images/gifts_and_recipes/Fiddlehead_Risotto.webp" },
  
  // Winter 2
  { en: "Poppyseed Muffin", es: "Muffin de amapola", image: "/images/gifts_and_recipes/Poppyseed_Muffin.webp" },
  { en: "Lobster Bisque", es: "Crema de langosta", image: "/images/gifts_and_recipes/Lobster_Bisque.webp" },
  { en: "Bruschetta", es: "Pan con tomate", image: "/images/gifts_and_recipes/Bruschetta.webp" },
  { en: "Shrimp Cocktail", es: "Cóctel de gambas", image: "/images/gifts_and_recipes/Shrimp_Cocktail.webp" },
];

export function getQueenOfSauceRecipe(year: number, season: Season, day: number): QueenOfSauceRecipe | null {
  if (day % 7 !== 0) return null; // Solo se emiten en domingos

  const isEvenYear = year % 2 === 0;
  const weekOfSeason = Math.floor((day - 1) / 7);
  
  let seasonIndex = 0;
  switch (season) {
    case "spring": seasonIndex = 0; break;
    case "summer": seasonIndex = 1; break;
    case "fall": seasonIndex = 2; break;
    case "winter": seasonIndex = 3; break;
  }

  const recipeIndex = (isEvenYear ? 16 : 0) + (seasonIndex * 4) + weekOfSeason;
  
  return queenOfSauceRecipes[recipeIndex] || null;
}
