"use client";

import { seasonLabels } from "@/data/seasons";
import { CalendarGrid } from "@/features/calendar/components/CalendarGrid";
import { CalendarEventModal } from "@/features/calendar/components/CalendarEventModal";
import { EventFilter } from "@/features/calendar/components/EventFilter";
import { SeasonSelector } from "@/features/calendar/components/SeasonSelector";
import { useCalendar } from "@/features/calendar/hooks/useCalendar";
import { getTranslations } from "@/lib/i18n";
import { type FestivalEvent } from "@/data/festivals";
import { type CalendarEvent } from "@/features/calendar/utils/getSeasonEvents";
import { useState } from "react";

const getSeasonBackground = (season: string) => {
    switch (season) {
        case "spring":
            return "from-emerald-200/80 via-green-100/60 to-teal-100/80";
        case "summer":
            return "from-yellow-200/80 via-amber-100/60 to-yellow-300/70";
        case "fall":
            return "from-orange-200/70 via-amber-100/50 to-orange-300/70";
        case "winter":
            return "from-blue-300/80 via-sky-200/70 to-indigo-200/80";
        default:
            return "from-white to-white";
    }
};

export default function CalendarPage() {
    const { season, setSeason, seasonOptions, filter, setFilter, events, today, showVendors } = useCalendar();
    const t = getTranslations("es");
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

    return (
        <>
            <div className="fixed inset-0 -z-20 bg-stone-50" aria-hidden="true" />
            <div 
                className={`fixed inset-0 -z-10 bg-gradient-to-br transition-all duration-1000 ${getSeasonBackground(season)}`}
                aria-hidden="true" 
            />
            
            <section className="space-y-4">
                <h1 className="section-title">{t.pages.calendar.title}</h1>
                <p className="text-sm text-stone-700">
                    {t.pages.calendar.description}
                </p>

                <div className="panel space-y-4 shadow-sm bg-white/70 backdrop-blur-sm">
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
                    showVendors={showVendors}
                    onEventClick={setSelectedEvent}
                />
            </section>
            <CalendarEventModal
                event={selectedEvent}
                onClose={() => setSelectedEvent(null)}
            />
        </>
    );
}
