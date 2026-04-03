import type { Season } from "@/lib/constants";

export interface FestivalEvent {
  type: "festival" | "special" | "fishing";
  season: Season;
  day: number;
  name: string;
  location: string;
  time: string;
}

export const festivals: FestivalEvent[] = [
  {
    type: "festival",
    season: "spring",
    day: 13,
    name: "Egg Festival",
    location: "Pelican Town",
    time: "9:00 AM",
  },
  {
    type: "festival",
    season: "spring",
    day: 24,
    name: "Flower Dance",
    location: "Cindersap Forest",
    time: "9:00 AM",
  },
  {
    type: "special",
    season: "spring",
    day: 15,
    name: "Desert Festival",
    location: "Calico Desert",
    time: "10:00 AM",
  },
  {
    type: "special",
    season: "spring",
    day: 16,
    name: "Desert Festival",
    location: "Calico Desert",
    time: "10:00 AM",
  },
  {
    type: "special",
    season: "spring",
    day: 17,
    name: "Desert Festival",
    location: "Calico Desert",
    time: "10:00 AM",
  },
  {
    type: "festival",
    season: "summer",
    day: 11,
    name: "Luau",
    location: "The Beach",
    time: "9:00 AM",
  },
  {
    type: "fishing",
    season: "summer",
    day: 20,
    name: "Trout Derby",
    location: "Cindersap Forest",
    time: "6:10 AM",
  },
  {
    type: "fishing",
    season: "summer",
    day: 21,
    name: "Trout Derby",
    location: "Cindersap Forest",
    time: "6:10 AM",
  },
  {
    type: "festival",
    season: "summer",
    day: 28,
    name: "Dance of the Moonlight Jellies",
    location: "The Beach",
    time: "10:00 PM",
  },
  {
    type: "festival",
    season: "fall",
    day: 16,
    name: "Stardew Valley Fair",
    location: "Pelican Town",
    time: "9:00 AM",
  },
  {
    type: "festival",
    season: "fall",
    day: 27,
    name: "Spirit's Eve",
    location: "Pelican Town",
    time: "10:00 PM",
  },
  {
    type: "festival",
    season: "winter",
    day: 8,
    name: "Festival of Ice",
    location: "Cindersap Forest",
    time: "9:00 AM",
  },
  {
    type: "fishing",
    season: "winter",
    day: 12,
    name: "SquidFest",
    location: "The Beach",
    time: "6:10 AM",
  },
  {
    type: "fishing",
    season: "winter",
    day: 13,
    name: "SquidFest",
    location: "The Beach",
    time: "6:10 AM",
  },
  {
    type: "special",
    season: "winter",
    day: 15,
    name: "Night Market",
    location: "The Beach",
    time: "5:00 PM",
  },
  {
    type: "special",
    season: "winter",
    day: 16,
    name: "Night Market",
    location: "The Beach",
    time: "5:00 PM",
  },
  {
    type: "special",
    season: "winter",
    day: 17,
    name: "Night Market",
    location: "The Beach",
    time: "5:00 PM",
  },
  {
    type: "festival",
    season: "winter",
    day: 25,
    name: "Feast of the Winter Star",
    location: "Pelican Town",
    time: "9:00 AM",
  },
];
