"use client";

import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@/components/ui/Tooltip";
import { type CalendarEvent } from "../utils/getSeasonEvents";
import { type FestivalEvent } from "@/data/festivals";

interface CalendarDayProps {
  day: number;
  events: CalendarEvent[];
  isToday: boolean;
  showVendors: boolean;
  season: string;
  onEventClick: (event: FestivalEvent) => void;
}

function getBirthdayPortrait(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `/images/villagers/${slug}.webp`;
}

const EVENT_ICONS: Record<string, { src: string; unoptimized?: boolean }> = {
  festival: { src: "/images/events/flag.gif", unoptimized: true },
  special: { src: "/images/events/star.png" },
  fishing: { src: "/images/events/hook.png" },
  librero: { src: "/images/events/librero.webp" },
};

export function CalendarDay({ day, events, isToday, showVendors, season, onEventClick }: CalendarDayProps) {
  const isQueenDay = showVendors && (day % 7 === 3 || day % 7 === 0);
  const isTravelingCartDay = showVendors && (day % 7 === 5 || day % 7 === 0);
  const isKrobusDay = showVendors && day % 7 === 5;

  const birthdayEvents = events.filter((e) => e.type === "birthday");
  const otherEvents = events.filter(
    (e) => e.type !== "birthday" && ["festival", "special", "fishing", "librero"].includes(e.type)
  ) as FestivalEvent[];
  const hasVendors = isQueenDay || isTravelingCartDay || isKrobusDay;

  return (
    <article
      className={`group relative flex min-w-0 flex-col border px-1 py-1 transition sm:min-h-20 sm:flex-row sm:px-1.5 sm:py-1.5 ${
        isToday
          ? "border-emerald-600 bg-emerald-50/70"
          : "border-amber-900/20 bg-stone-100/70 hover:border-amber-400"
      }`}
    >
      {/* Day number - Always at top */}
      <div className="flex w-full items-center justify-between sm:absolute sm:right-1.5 sm:top-1.5 sm:w-auto">
        <p className="text-[10px] font-bold leading-none text-amber-950/40 sm:text-base sm:text-amber-950">{day}</p>
      </div>

      {/* Main content: Birthdays & Events - Stacked on mobile */}
      <div className="mt-1 flex w-full flex-1 flex-col items-center justify-center gap-1.5 sm:mt-0 sm:w-1/2">
        {birthdayEvents.map((event) => {
          const slug = event.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          return (
            <Tooltip key={event.name} content={`🎂 Cumple de ${event.name}`}>
              <Link href={`/villagers#villager-${slug}`} scroll={true} className="block">
                <Image
                  src={getBirthdayPortrait(event.name)}
                  alt={event.name}
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-md object-cover sm:h-10 sm:w-10 hover:ring-2 hover:ring-amber-500 transition"
                />
              </Link>
            </Tooltip>
          );
        })}
        {otherEvents.map((event) => {
          const iconConfig = EVENT_ICONS[event.type] ?? { src: "/images/events/flag.gif" };
          return (
            <Tooltip key={`${event.type}-${event.name}-${day}`} content={event.name}>
              <button
                type="button"
                onClick={() => onEventClick(event)}
                className="cursor-pointer hover:scale-110 transition-transform block"
              >
                <Image
                  src={iconConfig.src}
                  alt={event.name}
                  width={32}
                  height={32}
                  className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                  unoptimized={iconConfig.unoptimized}
                />
              </button>
            </Tooltip>
          );
        })}

        {/* Vendors - Below main events on mobile */}
        {hasVendors && (
          <div className="flex flex-wrap justify-center gap-1 sm:hidden">
            {isQueenDay && (
              <Tooltip content="Reina de la Salsa (TV)">
                <Image src="/images/events/tv.webp" alt="TV" width={24} height={24} className="h-6 w-6 object-contain" />
              </Tooltip>
            )}
            {isKrobusDay && (
              <Tooltip content="Tienda de Krobus">
                <button
                  type="button"
                  onClick={() => onEventClick({
                    type: "vendor",
                    season: season as FestivalEvent["season"],
                    day,
                    name: "Tienda de Krobus",
                    location: "Las Alcantarillas",
                    time: "12:00 PM – 10:00 PM",
                  })}
                  className="cursor-pointer hover:scale-110 transition-transform"
                >
                  <Image src="/images/events/regador.webp" alt="Krobus" width={24} height={24} className="h-6 w-6 object-contain" />
                </button>
              </Tooltip>
            )}
            {isTravelingCartDay && (
              <Tooltip content="Carro Ambulante">
                <button
                  type="button"
                  onClick={() => onEventClick({
                    type: "vendor",
                    season: season as FestivalEvent["season"],
                    day,
                    name: "Carro Ambulante",
                    location: "Bosque Tizón",
                    time: "6:00 AM – 8:00 PM",
                  })}
                  className="cursor-pointer hover:scale-110 transition-transform"
                >
                  <Image src="/images/events/traveling.webp" alt="Cart" width={24} height={24} className="h-6 w-6 object-contain" />
                </button>
              </Tooltip>
            )}
          </div>
        )}
      </div>

      {/* Desktop Vendors (Hidden on mobile) */}
      <div className="hidden sm:mt-6 sm:flex sm:w-1/2 sm:flex-col sm:items-end sm:gap-0.5">
        {isQueenDay && (
          <Tooltip content="Reina de la Salsa (TV)">
            <Image src="/images/events/tv.webp" alt="TV" width={16} height={16} className="h-4 w-4" />
          </Tooltip>
        )}
        {isKrobusDay && (
          <Tooltip content="Tienda de Krobus">
            <button type="button" onClick={() => onEventClick({ type: "vendor", season: season as FestivalEvent["season"], day, name: "Tienda de Krobus", location: "Las Alcantarillas", time: "12:00 PM – 10:00 PM" })}>
              <Image src="/images/events/regador.webp" alt="Krobus" width={16} height={16} className="h-4 w-4" />
            </button>
          </Tooltip>
        )}
        {isTravelingCartDay && (
          <Tooltip content="Carro Ambulante">
            <button type="button" onClick={() => onEventClick({ type: "vendor", season: season as FestivalEvent["season"], day, name: "Carro Ambulante", location: "Bosque Tizón", time: "6:00 AM – 8:00 PM" })}>
              <Image src="/images/events/traveling.webp" alt="Cart" width={16} height={16} className="h-4 w-4" />
            </button>
          </Tooltip>
        )}
      </div>
    </article>
  );
}
