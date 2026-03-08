import { SEASONS, type Season } from "@/lib/constants";

export const seasonLabels: Record<Season, string> = {
  spring: "Spring",
  summer: "Summer",
  fall: "Fall",
  winter: "Winter",
};

export const seasonOrder = SEASONS;

export interface CropPlanEvent {
  type: "crop";
  season: Season;
  day: number;
  name: string;
  note: string;
}

export const cropPlans: CropPlanEvent[] = [
  {
    type: "crop",
    season: "spring",
    day: 1,
    name: "Plant Cauliflower",
    note: "Harvest around Day 13",
  },
  {
    type: "crop",
    season: "spring",
    day: 1,
    name: "Plant Strawberries",
    note: "Harvest around Day 9 and regrow every 4 days",
  },
  {
    type: "crop",
    season: "summer",
    day: 1,
    name: "Plant Blueberries",
    note: "Harvest around Day 13 and regrow every 4 days",
  },
  {
    type: "crop",
    season: "fall",
    day: 1,
    name: "Plant Cranberries",
    note: "Harvest around Day 8 and regrow every 5 days",
  },
];

export function getCurrentStardewDate(date = new Date()): { season: Season; day: number } {
  const month = date.getMonth();
  const currentDay = Math.min(Math.max(date.getDate(), 1), 28);

  if (month >= 2 && month <= 4) return { season: "spring", day: currentDay };
  if (month >= 5 && month <= 7) return { season: "summer", day: currentDay };
  if (month >= 8 && month <= 10) return { season: "fall", day: currentDay };
  return { season: "winter", day: currentDay };
}
