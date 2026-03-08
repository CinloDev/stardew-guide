import type { Season } from "@/lib/constants";

export interface FestivalEvent {
  type: "festival";
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
    type: "festival",
    season: "summer",
    day: 11,
    name: "Luau",
    location: "The Beach",
    time: "9:00 AM",
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
    type: "festival",
    season: "winter",
    day: 25,
    name: "Feast of the Winter Star",
    location: "Pelican Town",
    time: "9:00 AM",
  },
];
