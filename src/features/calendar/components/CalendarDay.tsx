import Image from "next/image";
import { Tooltip } from "@/components/ui/Tooltip";
import { type CalendarEvent } from "../utils/getSeasonEvents";

interface CalendarDayProps {
  day: number;
  events: CalendarEvent[];
  isToday: boolean;
}

function getBirthdayPortrait(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `/images/villagers/${slug}.webp`;
}

export function CalendarDay({ day, events, isToday }: CalendarDayProps) {
  return (
    <article
      className={`group relative min-h-18 border px-1 py-1 transition sm:min-h-21 sm:px-2 sm:py-1.5 ${
        isToday
          ? "border-emerald-600 bg-emerald-50/70"
          : "border-amber-900/20 bg-stone-100/70 hover:border-amber-400"
      }`}
    >
      <header className="flex items-center justify-end">
        <p className="text-sm font-medium leading-none text-amber-950 sm:text-lg">{day}</p>
      </header>

      <ul className="mt-1 flex flex-wrap items-center gap-1 sm:mt-1.5 sm:gap-1.5">
        {events.map((event) => {
          if (!["birthday", "festival", "special", "fishing"].includes(event.type)) {
            return null;
          }

          let tooltipContent = event.name;
          if (event.type === "birthday") tooltipContent = `🎂 Cumple de ${event.name}`;
          if (event.type === "festival") tooltipContent = `🎉 ${event.name}`;
          if (event.type === "fishing") tooltipContent = `🎣 ${event.name}`;
          if (event.type === "special") tooltipContent = `⭐ ${event.name}`;

          return (
            <li key={`${event.type}-${event.name}-${day}`}>
              <Tooltip content={tooltipContent}>
                {event.type === "birthday" ? (
                  <Image
                    src={getBirthdayPortrait(event.name)}
                    alt={event.name}
                    width={64}
                    height={64}
                    className="h-8 w-8 rounded-md object-cover sm:h-16 sm:w-16"
                  />
                ) : event.type === "festival" ? (
                  <Image
                    src="/images/events/flag.gif"
                    alt={event.name}
                    width={64}
                    height={64}
                    className="h-8 w-8 object-contain sm:h-16 sm:w-16"
                    unoptimized
                  />
                ) : event.type === "special" ? (
                  <Image
                    src="/images/events/star.png"
                    alt={event.name}
                    width={32}
                    height={32}
                    className="h-6 w-6 object-contain sm:h-8 sm:w-8"
                  />
                ) : (
                  <Image
                    src="/images/events/hook.png"
                    alt={event.name}
                    width={32}
                    height={32}
                    className="h-6 w-6 object-contain sm:h-8 sm:w-8"
                  />
                )}
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
