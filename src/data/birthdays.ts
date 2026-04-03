import type { Season } from "@/lib/constants";
import villagersData from "./villagers.json";

export interface BirthdayEvent {
  type: "birthday";
  season: Season;
  day: number;
  name: string;
}

export const birthdays: BirthdayEvent[] = villagersData.map((villager) => {
  const parts = villager.birthday.split(" ");
  const season = parts[0].toLowerCase() as Season;
  const day = parseInt(parts[1], 10);

  return {
    type: "birthday",
    season,
    day,
    name: villager.name,
  };
});
