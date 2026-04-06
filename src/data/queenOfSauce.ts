import { Season } from "@/lib/constants";

export interface QueenOfSauceRecipe {
  en: string;
  es: string;
  image: string;
}

export const queenOfSauceRecipes: QueenOfSauceRecipe[] = [
  // Year 1 (Odd years)
  // Spring 1
  { en: "Stir Fry", es: "Sofrito", image: "/images/items/Stir_Fry.webp" },
  { en: "Coleslaw", es: "Chucrut", image: "/images/items/Coleslaw.webp" },
  { en: "Radish Salad", es: "Ensalada de rábanos", image: "/images/items/Radish_Salad.webp" },
  { en: "Omelet", es: "Tortilla", image: "/images/items/Omelet.webp" },
  
  // Summer 1
  { en: "Baked Fish", es: "Pescado asado", image: "/images/items/Baked_Fish.webp" },
  { en: "Pancakes", es: "Tortitas", image: "/images/items/Pancakes.webp" },
  { en: "Maki Roll", es: "Rollitos maki", image: "/images/items/Maki_Roll.webp" },
  { en: "Bread", es: "Pan", image: "/images/items/Bread.webp" },
  
  // Fall 1
  { en: "Tortilla", es: "Tortilla de maíz", image: "/images/items/Tortilla.webp" },
  { en: "Trout Soup", es: "Sopa de trucha", image: "/images/items/Trout_Soup.webp" },
  { en: "Glazed Yams", es: "Ñames glaseados", image: "/images/items/Glazed_Yams.webp" },
  { en: "Artichoke Dip", es: "Salsa de alcachofa", image: "/images/items/Artichoke_Dip.webp" },
  
  // Winter 1
  { en: "Plum Pudding", es: "Pudin de ciruela", image: "/images/items/Plum_Pudding.webp" },
  { en: "Chocolate Cake", es: "Pastel de chocolate", image: "/images/items/Chocolate_Cake.webp" },
  { en: "Pumpkin Pie", es: "Tarta de calabaza", image: "/images/items/Pumpkin_Pie.webp" },
  { en: "Cranberry Candy", es: "Dulce de grosellas", image: "/images/items/Cranberry_Candy.webp" },

  // Year 2 (Even years)
  // Spring 2
  { en: "Pizza", es: "Pizza", image: "/images/items/Pizza.webp" },
  { en: "Hashbrowns", es: "Croquetas de patata", image: "/images/items/Hashbrowns.webp" },
  { en: "Complete Breakfast", es: "Desayuno inglés", image: "/images/items/Complete_Breakfast.webp" },
  { en: "Lucky Lunch", es: "Almuerzo de la suerte", image: "/images/items/Lucky_Lunch.webp" },
  
  // Summer 2
  { en: "Carp Surprise", es: "Sorpresa de carpa", image: "/images/items/Carp_Surprise.webp" },
  { en: "Maple Bar", es: "Bollito de arce", image: "/images/items/Maple_Bar.webp" },
  { en: "Pink Cake", es: "Pastel rosa", image: "/images/items/Pink_Cake.webp" },
  { en: "Roasted Hazelnuts", es: "Avellanas tostadas", image: "/images/items/Roasted_Hazelnuts.webp" },
  
  // Fall 2
  { en: "Fruit Salad", es: "Macedonia", image: "/images/items/Fruit_Salad.webp" },
  { en: "Blackberry Cobbler", es: "Tarta de moras", image: "/images/items/Blackberry_Cobbler.webp" },
  { en: "Crab Cakes", es: "Tortas de cangrejo", image: "/images/items/Crab_Cakes.webp" },
  { en: "Fiddlehead Risotto", es: "Risotto de helecho", image: "/images/items/Fiddlehead_Risotto.webp" },
  
  // Winter 2
  { en: "Poppyseed Muffin", es: "Muffin de amapola", image: "/images/items/Poppyseed_Muffin.webp" },
  { en: "Lobster Bisque", es: "Crema de langosta", image: "/images/items/Lobster_Bisque.webp" },
  { en: "Bruschetta", es: "Pan con tomate", image: "/images/items/Bruschetta.webp" },
  { en: "Shrimp Cocktail", es: "Cóctel de gambas", image: "/images/items/Shrimp_Cocktail.webp" },
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
