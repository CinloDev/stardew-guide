import type { Season } from "@/lib/constants";

export interface BirthdayEvent {
  type: "birthday";
  season: Season;
  day: number;
  name: string;
}

export const birthdays: BirthdayEvent[] = [
  { type: "birthday", season: "spring", day: 4, name: "Kent" },
  { type: "birthday", season: "spring", day: 10, name: "Haley" },
  { type: "birthday", season: "spring", day: 14, name: "Abigail" },
  { type: "birthday", season: "summer", day: 11, name: "Sam" },
  { type: "birthday", season: "summer", day: 13, name: "Alex" },
  { type: "birthday", season: "summer", day: 22, name: "Dwarf" },
  { type: "birthday", season: "fall", day: 2, name: "Penny" },
  { type: "birthday", season: "fall", day: 5, name: "Elliott" },
  { type: "birthday", season: "fall", day: 13, name: "Abigail" },
  { type: "birthday", season: "winter", day: 1, name: "Krobus" },
  { type: "birthday", season: "winter", day: 3, name: "Linus" },
  { type: "birthday", season: "winter", day: 7, name: "Caroline" },
];
