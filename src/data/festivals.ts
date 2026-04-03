import type { Season } from "@/lib/constants";

export interface FestivalEvent {
  type: "festival" | "special" | "fishing" | "librero" | "vendor";
  season: Season;
  day: number;
  name: string;
  location: string;
  time: string;
}

export const libreroSpringDays = [11, 12, 21, 22, 25];
export const libreroSummerDays = [9, 12, 18, 26, 27];
export const libreroFallDays = [4, 7, 8, 9, 12, 19, 22, 25];
export const libreroWinterDays = [5, 11, 12, 19, 22, 24];

const makeLibrero = (season: Season, days: number[]): FestivalEvent[] =>
  days.map((day) => ({
    type: "librero" as const,
    season,
    day,
    name: "Vendedor de Libros",
    location: "Bosque al Sur del Rancho",
    time: "9:00 AM – 5:00 PM",
  }));

export const festivals: FestivalEvent[] = [
  {
    type: "festival",
    season: "spring",
    day: 13,
    name: "Festival del Huevo",
    location: "Plaza de Pueblo Pelícano",
    time: "9:00 AM",
  },
  {
    type: "festival",
    season: "spring",
    day: 24,
    name: "Danza de las Flores",
    location: "Bosque Tizón",
    time: "9:00 AM – 2:00 PM",
  },
  {
    type: "special",
    season: "spring",
    day: 15,
    name: "Festival del Desierto",
    location: "Desierto de Calico",
    time: "10:00 AM",
  },
  {
    type: "special",
    season: "spring",
    day: 16,
    name: "Festival del Desierto",
    location: "Desierto de Calico",
    time: "10:00 AM",
  },
  {
    type: "special",
    season: "spring",
    day: 17,
    name: "Festival del Desierto",
    location: "Desierto de Calico",
    time: "10:00 AM",
  },
  {
    type: "festival",
    season: "summer",
    day: 11,
    name: "Luau",
    location: "La Playa",
    time: "9:00 AM – 2:00 PM",
  },
  {
    type: "fishing",
    season: "summer",
    day: 20,
    name: "Derby de la Trucha",
    location: "Bosque Tizón (al lado del río)",
    time: "6:10 AM – 2:00 AM",
  },
  {
    type: "fishing",
    season: "summer",
    day: 21,
    name: "Derby de la Trucha",
    location: "Bosque Tizón (al lado del río)",
    time: "6:10 AM – 2:00 AM",
  },
  {
    type: "festival",
    season: "summer",
    day: 28,
    name: "Danza de las Medusas Lunares",
    location: "La Playa",
    time: "10:00 PM – 12:00 AM",
  },
  {
    type: "festival",
    season: "fall",
    day: 16,
    name: "Feria de Stardew Valley",
    location: "Centro de Pueblo Pelícano",
    time: "9:00 AM – 2:00 PM",
  },
  {
    type: "festival",
    season: "fall",
    day: 27,
    name: "Víspera de los Espíritus",
    location: "Centro de Pueblo Pelícano",
    time: "10:00 PM – 11:50 PM",
  },
  {
    type: "festival",
    season: "winter",
    day: 8,
    name: "Festival del Hielo",
    location: "Bosque Tizón",
    time: "9:00 AM – 2:00 PM",
  },
  {
    type: "fishing",
    season: "winter",
    day: 12,
    name: "Festival del Calamar",
    location: "La Playa",
    time: "6:10 AM – 2:00 AM",
  },
  {
    type: "fishing",
    season: "winter",
    day: 13,
    name: "Festival del Calamar",
    location: "La Playa",
    time: "6:10 AM – 2:00 AM",
  },
  {
    type: "special",
    season: "winter",
    day: 15,
    name: "Mercado Nocturno",
    location: "La Playa",
    time: "5:00 PM – 2:00 AM",
  },
  {
    type: "special",
    season: "winter",
    day: 16,
    name: "Mercado Nocturno",
    location: "La Playa",
    time: "5:00 PM – 2:00 AM",
  },
  {
    type: "special",
    season: "winter",
    day: 17,
    name: "Mercado Nocturno",
    location: "La Playa",
    time: "5:00 PM – 2:00 AM",
  },
  {
    type: "festival",
    season: "winter",
    day: 25,
    name: "Fiesta de la Estrella de Invierno",
    location: "Plaza de Pueblo Pelícano",
    time: "9:00 AM – 2:00 PM",
  },
  ...makeLibrero("spring", libreroSpringDays),
  ...makeLibrero("summer", libreroSummerDays),
  ...makeLibrero("fall", libreroFallDays),
  ...makeLibrero("winter", libreroWinterDays),
];
