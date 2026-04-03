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
  onEventClick: (event: CalendarEvent) => void;
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

type CalendarItem = 
  | { type: 'birthday'; data: CalendarEvent }
  | { type: 'festival'; data: CalendarEvent }
  | { type: 'vendor-tv'; data: { name: string; icon: string } }
  | { type: 'vendor'; data: { name: string; icon: string; vendorData: any } };

export function CalendarDay({ day, events, isToday, showVendors, season, onEventClick }: CalendarDayProps) {
  const isQueenDay = showVendors && (day % 7 === 3 || day % 7 === 0);
  const isTravelingCartDay = showVendors && (day % 7 === 5 || day % 7 === 0);
  const isKrobusDay = showVendors && day % 7 === 5;

  const birthdayEvents = events.filter((e) => e.type === "birthday");
  const otherEvents = events.filter(
    (e) => e.type !== "birthday" && ["festival", "special", "fishing", "librero"].includes(e.type)
  ) as FestivalEvent[];

  // Prepare all interactive items with proper typing
  const allItems: CalendarItem[] = [
    ...birthdayEvents.map(e => ({ type: 'birthday' as const, data: e })),
    ...otherEvents.map(e => ({ type: 'festival' as const, data: e })),
  ];

  if (isQueenDay) allItems.push({ type: 'vendor-tv', data: { name: "Reina de la Salsa (TV)", icon: "/images/events/tv.webp" } });
  if (isKrobusDay) allItems.push({ 
    type: 'vendor', 
    data: { 
      name: "Tienda de Krobus", 
      icon: "/images/events/regador.webp",
      vendorData: { type: "vendor", season, day, name: "Tienda de Krobus", location: "Las Alcantarillas", time: "12:00 PM – 10:00 PM" }
    } 
  });
  if (isTravelingCartDay) allItems.push({ 
    type: 'vendor', 
    data: { 
      name: "Carro Ambulante", 
      icon: "/images/events/traveling.webp",
      vendorData: { type: "vendor", season, day, name: "Carro Ambulante", location: "Bosque Tizón", time: "6:00 AM – 8:00 PM" }
    } 
  });

  return (
    <article
      className={`group relative flex min-w-0 flex-col border px-1 py-1 transition min-h-[100px] sm:min-h-[150px] ${
        isToday
          ? "border-emerald-600 bg-emerald-50/70"
          : "border-amber-900/20 bg-stone-100/70 hover:border-amber-400"
      }`}
    >
      {/* Day number */}
      <div className="absolute right-1.5 top-1 z-10">
        <p className="text-[10px] font-bold leading-none text-amber-950/40 sm:text-xs sm:text-amber-950/60">{day}</p>
      </div>

      {/* Dynamic Grid Container */}
      <div className="mt-4 grid w-full grid-cols-2 gap-1.5 sm:mt-6 sm:gap-3">
        {allItems.map((item, index) => {
          // Centering/Stacking logic: 
          // - 1, 2 items: All items span 2 columns (vertical stack)
          // - 3 items: First item spans 2, others span 1 (pyramid)
          // - 4 items: All items span 1 (2x2 grid)
          const shouldSpan = 
            (allItems.length <= 2) || 
            (allItems.length === 3 && index === 0);
          
          return (
            <div 
              key={`${item.type}-${index}`} 
              className={`flex items-center justify-center ${shouldSpan ? 'col-span-2' : 'col-span-1'}`}
            >
              {item.type === 'birthday' && (
                <Tooltip content={`🎂 Cumple de ${item.data.name}`}>
                  <button
                    type="button"
                    onClick={() => onEventClick(item.data)}
                    className="block cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Image
                      src={getBirthdayPortrait(item.data.name)}
                      alt={item.data.name}
                      width={48}
                      height={48}
                      className="h-10 w-10 rounded-md object-cover sm:h-14 sm:w-14 hover:ring-2 hover:ring-amber-500 shadow-sm"
                    />
                  </button>
                </Tooltip>
              )}

              {item.type === 'festival' && (
                <Tooltip content={item.data.name}>
                  <button
                    type="button"
                    onClick={() => onEventClick(item.data)}
                    className="cursor-pointer hover:scale-110 transition-transform block"
                  >
                    <Image
                      src={EVENT_ICONS[item.data.type]?.src || "/images/events/flag.gif"}
                      alt={item.data.name}
                      width={44}
                      height={44}
                      className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                      unoptimized={EVENT_ICONS[item.data.type]?.unoptimized}
                    />
                  </button>
                </Tooltip>
              )}

              {item.type === 'vendor-tv' && (
                <Tooltip content={item.data.name}>
                  <div className="hover:scale-110 transition-transform cursor-help">
                    <Image src={item.data.icon} alt="TV" width={36} height={36} className="h-8 w-8 object-contain sm:h-11 sm:w-11" />
                  </div>
                </Tooltip>
              )}

              {item.type === 'vendor' && (
                <Tooltip content={item.data.name}>
                  <button
                    type="button"
                    onClick={() => onEventClick(item.data.vendorData)}
                    className="cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Image src={item.data.icon} alt="Vendor" width={36} height={36} className="h-8 w-8 object-contain sm:h-11 sm:w-11" />
                  </button>
                </Tooltip>
              )}
            </div>
          );
        })}
      </div>

    </article>
  );
}



