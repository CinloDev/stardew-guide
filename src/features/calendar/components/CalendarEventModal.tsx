"use client";

import { Modal } from "@/components/ui/Modal";
import { type FestivalEvent } from "@/data/festivals";
import Image from "next/image";

interface CalendarEventModalProps {
  event: FestivalEvent | null;
  onClose: () => void;
}

const EVENT_CONFIG: Record<
  FestivalEvent["type"],
  { icon: string; unoptimized?: boolean; label: string; color: string }
> = {
  festival: { icon: "/images/events/flag.gif", unoptimized: true, label: "Festival", color: "text-rose-700 bg-rose-50 border-rose-200" },
  special: { icon: "/images/events/star.png", label: "Evento Especial", color: "text-purple-700 bg-purple-50 border-purple-200" },
  fishing: { icon: "/images/events/hook.png", label: "Evento de Pesca", color: "text-blue-700 bg-blue-50 border-blue-200" },
  librero: { icon: "/images/events/librero.webp", label: "Vendedor Especial", color: "text-amber-700 bg-amber-50 border-amber-200" },
  vendor: { icon: "/images/events/traveling.webp", label: "Comerciante", color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
};

const EVENT_BANNERS: Record<string, string> = {
  "Festival del Huevo":              "/images/events/Egg_Festival.webp",
  "Danza de las Flores":             "/images/events/Flower_Festival.webp",
  "Desert Festival":                 "/images/events/Desert_Festival_INT.webp",
  "Luau":                            "/images/events/Luau.webp",
  "Derby de la Trucha":              "/images/events/Trout_Derby_International.webp",
  "Danza de las Medusas Lunares":    "/images/events/Dance_Of_The_Moonlight_Jellies.webp",
  "Feria de Stardew Valley":         "/images/events/StardewValleyFair.webp",
  "Víspera de los Espíritus":        "/images/events/Spirits_Eve.webp",
  "Festival del Hielo":              "/images/events/Festival_of_Ice.webp",
  "Festival del Calamar":            "/images/events/SquidFest_International.webp",
  "Mercado Nocturno":                "/images/events/NightMarket.webp",
  "Fiesta de la Estrella de Invierno": "/images/events/Feast_of_the_Winterstar.webp",
  "Vendedor de Libros":              "/images/events/Bookseller.webp",
  "Carro Ambulante":               "/images/events/cart-trav.webp",
  "Tienda de Krobus":               "/images/events/Krobus_Root.webp",
};

const SEASON_LABELS: Record<string, string> = {
  spring: "🌸 Primavera",
  summer: "☀️ Verano",
  fall: "🍂 Otoño",
  winter: "❄️ Invierno",
};

const BORDER_COLORS: Record<string, string> = {
  rose: "border-rose-600",
  purple: "border-purple-600",
  blue: "border-blue-600",
  amber: "border-amber-600",
  emerald: "border-emerald-600",
  stone: "border-stone-600",
};

const TEXT_COLORS: Record<string, string> = {
  rose: "text-rose-700",
  purple: "text-purple-700",
  blue: "text-blue-700",
  amber: "text-amber-700",
  emerald: "text-emerald-700",
  stone: "text-stone-700",
};

export function CalendarEventModal({ event, onClose }: CalendarEventModalProps) {
  if (!event) return null;

  const config = EVENT_CONFIG[event.type];
  const banner = EVENT_BANNERS[event.name];

  // Extract the base color (e.g., 'rose', 'purple') from the config classes
  const colorMatch = config.color.match(/text-(\w+)-/);
  const colorBase = colorMatch ? colorMatch[1] : 'stone';
  
  const modalBg = `bg-${colorBase}-50`;
  const modalBorder = BORDER_COLORS[colorBase] || BORDER_COLORS.stone;
  const modalText = TEXT_COLORS[colorBase] || TEXT_COLORS.stone;

  return (
    <Modal 
      open={!!event} 
      title={event.name} 
      onClose={onClose} 
      className={`${modalBg} border-[3px] ${modalBorder} shadow-2xl transition-all duration-300`}
      titleClassName={modalText}
    >
      <div className="flex flex-col gap-4">
        {/* Banner image */}
        {banner && (
          <div className={`overflow-hidden rounded-xl border-[3px] ${modalBorder} shadow-sm bg-white/40`}>
            <Image
              src={banner}
              alt={event.name}
              width={480}
              height={240}
              className="h-36 w-full object-cover sm:h-48"
            />
          </div>
        )}

        {/* Icon + badge */}
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/80 backdrop-blur-sm border border-stone-200 shadow-inner">
            <Image
              src={config.icon}
              alt={event.name}
              width={48}
              height={48}
              className="h-10 w-10 object-contain"
              unoptimized={config.unoptimized}
            />
          </div>
          <div>
            <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold shadow-sm ${config.color}`}>
              {config.label}
            </span>
            <p className="mt-1 text-sm font-medium text-stone-700">{SEASON_LABELS[event.season]} · Día {event.day}</p>
          </div>
        </div>

        {/* Details */}
        <div className="rounded-xl border border-stone-200 bg-white/60 backdrop-blur-sm divide-y divide-stone-200 shadow-sm">
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="text-lg">📍</span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">Lugar</p>
              <p className="text-sm font-medium text-stone-800">{event.location}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3">
            <span className="text-lg">🕐</span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">Horario</p>
              <p className="text-sm font-medium text-stone-800">{event.time}</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
