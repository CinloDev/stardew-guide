"use client";

import { seasonLabels } from "@/data/seasons";
import { CalendarGrid } from "@/features/calendar/components/CalendarGrid";
import { EventFilter } from "@/features/calendar/components/EventFilter";
import { SeasonSelector } from "@/features/calendar/components/SeasonSelector";
import { useCalendar } from "@/features/calendar/hooks/useCalendar";
import { getTranslations } from "@/lib/i18n";

export default function CalendarPage() {
    const { season, setSeason, seasonOptions, filter, setFilter, events, today } = useCalendar();
    const t = getTranslations("es");

    return (
        <section className="space-y-4">
            <h1 className="section-title">{t.pages.calendar.title}</h1>
            <p className="text-sm text-stone-700">
                {t.pages.calendar.description}
            </p>

            <div className="panel space-y-4">
                <SeasonSelector season={season} seasons={seasonOptions} onSeasonChange={setSeason} />
                <EventFilter value={filter} onChange={setFilter} />
                <p className="text-xs text-stone-600">
                Fecha actual:{" "}
                <span className="font-semibold">
                    {seasonLabels[today.season]} Día {today.day}
                </span>
                </p>
            </div>

            <CalendarGrid
                season={season}
                events={events}
                currentDay={today.day}
                isCurrentSeason={today.season === season}
            />
        </section>
    );
}
