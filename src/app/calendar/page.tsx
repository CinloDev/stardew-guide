import { CalendarGrid } from "@/features/calendar/components/CalendarGrid";
import { calendarEntries } from "@/features/calendar/utils/calendarLogic";

export default function CalendarPage() {
  return (
    <section className="space-y-4">
      <h1 className="section-title">Seasonal Calendar</h1>
      <p className="text-sm text-stone-700">
        Eventos base para planificar cultivos, festivales y regalos por estacion.
      </p>
      <CalendarGrid entries={calendarEntries} />
    </section>
  );
}
