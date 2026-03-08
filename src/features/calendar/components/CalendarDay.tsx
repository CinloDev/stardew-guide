import { seasonLabels } from "@/data/seasons";
import type { Season } from "@/lib/constants";
import { type CalendarEvent, getEventIcon } from "../utils/getSeasonEvents";

interface CalendarDayProps {
  day: number;
  season: Season;
  events: CalendarEvent[];
  isToday: boolean;
}

export function CalendarDay({ day, season, events, isToday }: CalendarDayProps) {
  return (
    <article
      className={`group relative rounded-xl border p-3 transition ${
        isToday
          ? "border-emerald-600 bg-emerald-50/70 shadow-sm"
          : "border-amber-900/15 bg-white/90 hover:border-amber-300"
      }`}
    >
      <header className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold text-amber-950">Day {day}</p>
        {isToday ? (
          <span className="rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
            Today
          </span>
        ) : null}
      </header>

      <ul className="space-y-1.5">
        {events.length === 0 ? (
          <li className="text-xs text-stone-400">No events</li>
        ) : (
          events.map((event) => {
            const tooltip =
              event.type === "festival"
                ? `${seasonLabels[season]} Day ${day}\n${event.name}\nLocation: ${event.location}\nTime: ${event.time}`
                : event.type === "birthday"
                  ? `${seasonLabels[season]} Day ${day}\nBirthday: ${event.name}`
                  : `${seasonLabels[season]} Day ${day}\n${event.name}\n${event.note}`;

            return (
              <li
                key={`${event.type}-${event.name}-${day}`}
                className="group/item relative text-xs text-stone-700"
              >
                <span className="mr-1" aria-hidden="true">
                  {getEventIcon(event.type)}
                </span>
                <span>{event.name}</span>
                {event.type === "crop" ? (
                  <span className="text-stone-500"> - {event.note}</span>
                ) : null}

                <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 hidden w-56 rounded-lg border border-amber-900/20 bg-amber-50 p-2 text-[11px] leading-relaxed text-stone-700 shadow-md group-hover/item:block group-focus-within/item:block">
                  {tooltip.split("\n").map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
            );
          })
        )}
      </ul>
    </article>
  );
}
