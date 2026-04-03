import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "@/components/ui/Tooltip";
import { type CalendarEvent } from "../utils/getSeasonEvents";

interface CalendarDayProps {
  day: number;
  events: CalendarEvent[];
  isToday: boolean;
  showVendors: boolean;
}

function getBirthdayPortrait(name: string): string {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return `/images/villagers/${slug}.webp`;
}

export function CalendarDay({ day, events, isToday, showVendors }: CalendarDayProps) {
  const isQueenDay = showVendors && (day % 7 === 3 || day % 7 === 0);
  const isTravelingCartDay = showVendors && (day % 7 === 5 || day % 7 === 0);
  const isKrobusDay = showVendors && day % 7 === 5;

  const birthdayEvents = events.filter((e) => e.type === "birthday");
  const otherEvents = events.filter((e) => e.type !== "birthday" && ["festival", "special", "fishing"].includes(e.type));
  const hasVendors = isQueenDay || isTravelingCartDay || isKrobusDay;

  return (
    <article
      className={`group relative flex min-h-16 border px-1 py-1 transition sm:min-h-20 sm:px-1.5 sm:py-1.5 ${
        isToday
          ? "border-emerald-600 bg-emerald-50/70"
          : "border-amber-900/20 bg-stone-100/70 hover:border-amber-400"
      }`}
    >
      {/* Left half: birthday portraits + festival/fishing/special icons */}
      <div className="flex w-1/2 items-center justify-center">
        <div className="flex flex-col items-center gap-0.5">
          {birthdayEvents.map((event) => {
            const slug = event.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return (
              <Tooltip key={event.name} content={`🎂 Cumple de ${event.name}`}>
                <Link href={`/villagers#villager-${slug}`} scroll={true}>
                  <Image
                    src={getBirthdayPortrait(event.name)}
                    alt={event.name}
                    width={48}
                    height={48}
                    className="h-7 w-7 rounded-md object-cover sm:h-10 sm:w-10 hover:ring-2 hover:ring-amber-500 transition"
                  />
                </Link>
              </Tooltip>
            );
          })}
          {otherEvents.map((event) => {
            let tooltipContent = event.name;
            if (event.type === "festival") tooltipContent = `🎉 ${event.name}`;
            if (event.type === "fishing") tooltipContent = `🎣 ${event.name}`;
            if (event.type === "special") tooltipContent = `⭐ ${event.name}`;

            return (
              <Tooltip key={`${event.type}-${event.name}-${day}`} content={tooltipContent}>
                {event.type === "festival" ? (
                  <Image
                    src="/images/events/flag.gif"
                    alt={event.name}
                    width={32}
                    height={32}
                    className="h-6 w-6 object-contain sm:h-8 sm:w-8"
                    unoptimized
                  />
                ) : event.type === "special" ? (
                  <Image
                    src="/images/events/star.png"
                    alt={event.name}
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                  />
                ) : (
                  <Image
                    src="/images/events/hook.png"
                    alt={event.name}
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                  />
                )}
              </Tooltip>
            );
          })}
        </div>
      </div>

      {/* Right half: day number + vendor icons only */}
      <div className="flex w-1/2 flex-col items-end gap-0.5">
        <p className="text-sm font-medium leading-none text-amber-950 sm:text-base">{day}</p>
        {hasVendors && (
          <div className="flex flex-wrap justify-end gap-0.5">
            {isQueenDay && (
              <Tooltip content="Reina de la Salsa (TV)">
                <Image
                  src="/images/events/tv.webp"
                  alt="Queen of Sauce"
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 object-contain sm:h-4 sm:w-4"
                />
              </Tooltip>
            )}
            {isKrobusDay && (
              <Tooltip content="Venta en las Alcantarillas (Krobus)">
                <Image
                  src="/images/events/regador.webp"
                  alt="Krobus Sewer Shop"
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 object-contain sm:h-4 sm:w-4"
                />
              </Tooltip>
            )}
            {isTravelingCartDay && (
              <Tooltip content="Carro Itinerante (Bosque)">
                <Image
                  src="/images/events/traveling.webp"
                  alt="Traveling Cart"
                  width={16}
                  height={16}
                  className="h-3.5 w-3.5 object-contain sm:h-4 sm:w-4"
                />
              </Tooltip>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
