"use client";

import { Modal } from "@/components/ui/Modal";
import type { FestivalEvent } from "@/data/festivals";
import { getQueenOfSauceRecipe } from "@/data/queenOfSauce";
import villagersData from "@/data/villagers.json";
import getTranslations from "@/lib/i18n";
import { useGameStore } from "@/store/useGameStore";
import Image from "next/image";
import Link from "next/link";
import type { CalendarEvent, CalendarEventType } from "../utils/getSeasonEvents";

interface CalendarEventModalProps {
  event: CalendarEvent | null;
  onClose: () => void;
}

const EVENT_CONFIG: Record<
  CalendarEventType,
  { icon: string; unoptimized?: boolean; color: string }
> = {
  festival: {
    icon: "/images/events/flag.gif",
    unoptimized: true,
    color: "text-rose-700 bg-rose-50 border-rose-200",
  },
  birthday: {
    icon: "/images/ui/cake.png",
    color: "text-pink-600 bg-pink-50/50 border-pink-100",
  },
  special: {
    icon: "/images/events/star.png",
    color: "text-purple-700 bg-purple-50 border-purple-200",
  },
  fishing: {
    icon: "/images/events/hook.png",
    color: "text-blue-700 bg-blue-50 border-blue-200",
  },
  librero: {
    icon: "/images/events/librero.webp",
    color: "text-amber-700 bg-amber-50 border-amber-200",
  },
  vendor: {
    icon: "/images/events/traveling.webp",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  crop: {
    icon: "/images/events/star.png",
    color: "text-green-700 bg-green-50 border-green-200",
  },
  tv: {
    icon: "/images/events/tv.webp",
    unoptimized: true,
    color: "text-rose-700 bg-rose-50 border-rose-200",
  },
};

const EVENT_BANNERS: Record<string, string> = {
  "Festival del Huevo": "/images/events/Egg_Festival.webp",
  "Danza de las Flores": "/images/events/Flower_Festival.webp",
  "Festival del Desierto": "/images/events/Desert_Festival_INT.webp",
  Luau: "/images/events/Luau.webp",
  "Derby de la Trucha": "/images/events/Trout_Derby_International.webp",
  "Danza de las Medusas Lunares": "/images/events/Dance_Of_The_Moonlight_Jellies.webp",
  "Feria de Stardew Valley": "/images/events/StardewValleyFair.webp",
  "Víspera de los Espíritus": "/images/events/Spirits_Eve.webp",
  "Festival del Hielo": "/images/events/Festival_of_Ice.webp",
  "Festival del Calamar": "/images/events/SquidFest_International.webp",
  "Mercado Nocturno": "/images/events/NightMarket.webp",
  "Fiesta de la Estrella de Invierno": "/images/events/Feast_of_the_Winterstar.webp",
  "Vendedor de Libros": "/images/events/Bookseller.webp",
  "Carro Ambulante": "/images/events/cart-trav.webp",
};

const SEASON_EMOJIS: Record<string, string> = {
  spring: "🌸",
  summer: "☀️",
  fall: "🍂",
  winter: "❄️",
};

const SEASON_THEMES: Record<
  string,
  {
    bg: string;
    border: string;
    text: string;
    button: string;
    buttonHover: string;
    badgeBg: string;
    badgeBorder: string;
    giftBg: string;
    giftBorder: string;
    giftText: string;
  }
> = {
  spring: {
    bg: "bg-emerald-50",
    border: "border-emerald-600",
    text: "text-emerald-700",
    button: "bg-emerald-600",
    buttonHover: "hover:bg-emerald-700",
    badgeBg: "bg-emerald-100",
    badgeBorder: "border-emerald-200",
    giftBg: "bg-emerald-50",
    giftBorder: "border-emerald-100/50",
    giftText: "text-emerald-700",
  },
  summer: {
    bg: "bg-amber-50",
    border: "border-amber-600",
    text: "text-amber-700",
    button: "bg-amber-600",
    buttonHover: "hover:bg-amber-700",
    badgeBg: "bg-amber-100",
    badgeBorder: "border-amber-200",
    giftBg: "bg-amber-50",
    giftBorder: "border-amber-100/50",
    giftText: "text-amber-700",
  },
  fall: {
    bg: "bg-orange-50",
    border: "border-orange-600",
    text: "text-orange-700",
    button: "bg-orange-600",
    buttonHover: "hover:bg-orange-700",
    badgeBg: "bg-orange-100",
    badgeBorder: "border-orange-200",
    giftBg: "bg-orange-50",
    giftBorder: "border-orange-100/50",
    giftText: "text-orange-700",
  },
  winter: {
    bg: "bg-blue-50",
    border: "border-blue-600",
    text: "text-blue-700",
    button: "bg-blue-600",
    buttonHover: "hover:bg-blue-700",
    badgeBg: "bg-blue-100",
    badgeBorder: "border-blue-200",
    giftBg: "bg-blue-50",
    giftBorder: "border-blue-100/50",
    giftText: "text-blue-700",
  },
};

const BORDER_COLORS: Record<string, string> = {
  rose: "border-rose-600",
  pink: "border-pink-500",
  purple: "border-purple-600",
  blue: "border-blue-600",
  amber: "border-amber-600",
  emerald: "border-emerald-600",
  orange: "border-orange-600",
  stone: "border-stone-500",
};

const TEXT_COLORS: Record<string, string> = {
  rose: "text-rose-700",
  pink: "text-pink-700",
  purple: "text-purple-700",
  blue: "text-blue-700",
  amber: "text-amber-700",
  emerald: "text-emerald-700",
  orange: "text-orange-700",
  stone: "text-stone-700",
};

export function CalendarEventModal({ event, onClose }: CalendarEventModalProps) {
  const language = useGameStore((state) => state.language);
  const year = useGameStore((state) => state.year);
  const t = getTranslations(language);

  if (!event) return null;

  const config = EVENT_CONFIG[event.type];
  const banner = EVENT_BANNERS[event.name];
  const isBirthday = event.type === "birthday";
  const isTV = event.type === "tv";
  const isKrobus = event.type === "vendor" && event.name.includes("Krobus");
  const villager = isBirthday ? villagersData.find((v) => v.name === event.name) : null;
  const tvRecipe = isTV ? getQueenOfSauceRecipe(year, event.season, event.day) : null;

  // Extract the base color (e.g., 'rose', 'purple') from the config classes
  const colorMatch = config.color.match(/text-(\w+)-/);
  const colorBase = colorMatch ? colorMatch[1] : "stone";

  // Theme selection
  const birthdayTheme = isBirthday ? SEASON_THEMES[event.season] : null;
  const modalBg = birthdayTheme ? birthdayTheme.bg : `bg-${colorBase}-50`;
  const modalBorder = birthdayTheme
    ? birthdayTheme.border
    : BORDER_COLORS[colorBase] || BORDER_COLORS.stone;
  const modalText = birthdayTheme
    ? birthdayTheme.text
    : TEXT_COLORS[colorBase] || TEXT_COLORS.stone;

  return (
    <Modal
      open={!!event}
      title={isBirthday ? t.modal.birthdayOf.replace("{name}", event.name) : t.festivalNames[event.name as keyof typeof t.festivalNames] || event.name}
      onClose={onClose}
      className={`${modalBg} border-[3px] ${modalBorder} shadow-2xl transition-all duration-300`}
      titleClassName={modalText}
      closeText={t.common.close}
    >
      <div className="flex flex-col gap-4">
        {/* Banner image */}
        {banner && (
          <div
            className={`overflow-hidden rounded-xl border-[3px] ${modalBorder} shadow-sm bg-white/40`}
          >
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
              src={isBirthday && villager ? villager.image : (event.type === "vendor" && event.name === "Tienda de Krobus") ? "/images/villagers/krobus.webp" : config.icon}
              alt={event.name}
              width={48}
              height={48}
              className={`h-10 w-10 object-contain ${isBirthday || (event.type === "vendor" && event.name === "Tienda de Krobus") ? "rounded-md" : ""}`}
              unoptimized={config.unoptimized}
            />
          </div>
          <div>
            <span
              className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold shadow-sm ${isBirthday && birthdayTheme ? `${birthdayTheme.text} ${birthdayTheme.badgeBg} ${birthdayTheme.badgeBorder}` : config?.color}`}
            >
              {isTV ? t.home.queenOfSauceOpen.replace("📺", "").trim() : t.modal.eventTypes[event.type as keyof typeof t.modal.eventTypes]}
            </span>
            <p className="mt-1 text-sm font-medium text-stone-700">
              {SEASON_EMOJIS[event.season]} {t.home.seasons[event.season as keyof typeof t.home.seasons]} · {t.modal.day} {event.day}
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="rounded-xl border border-stone-200 bg-white/60 backdrop-blur-sm divide-y divide-stone-200 shadow-sm overflow-hidden">
          {/* Birthday Gifts Section */}
          {isBirthday && villager && birthdayTheme && (
            <div className="px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400 mb-2">
                {t.modal.favoriteGifts}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {villager.lovedGifts.map((gift) => (
                  <span
                    key={gift}
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-medium border ${birthdayTheme.giftBg} ${birthdayTheme.giftText} ${birthdayTheme.giftBorder}`}
                  >
                    {gift}
                  </span>
                ))}
              </div>

              <Link
                href={`/villagers/${villager.id}`}
                className={`mt-4 flex items-center justify-center gap-2 w-full rounded-lg px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all active:scale-95 ${birthdayTheme.button} ${birthdayTheme.buttonHover}`}
                onClick={onClose}
              >
                {t.modal.viewFullProfile}
                <span>→</span>
              </Link>
            </div>
          )}

          {/* Festival Location/Time Section */}
          {!isBirthday && !isTV && "location" in event && (
            <>
              <div className="flex items-center gap-3 px-4 py-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                    {t.modal.location}
                  </p>
                  <p className="text-sm font-medium text-stone-800">{t.locations[event.location as keyof typeof t.locations] || event.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3">
                <span className="text-lg">🕐</span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-stone-400">
                    {t.modal.time}
                  </p>
                  <p className="text-sm font-medium text-stone-800">{event.time}</p>
                </div>
              </div>
            </>
          )}

          {/* TV Recipe Section */}
          {isTV && tvRecipe && (
            <div className="flex flex-col items-center justify-center p-6 text-center bg-rose-50/30">
              <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full bg-white p-2 shadow-inner ring-4 ring-rose-100">
                <Image
                  src={tvRecipe.image}
                  alt={tvRecipe.es}
                  fill
                  className="object-contain p-3"
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-rose-400">
                {language === "es" ? "Receta de Hoy" : "Today's Recipe"}
              </p>
              <h4 className="mt-1 text-2xl font-black text-rose-700">
                {tvRecipe[language === "es" ? "es" : "en"]}
              </h4>
            </div>
          )}

          {/* Krobus Special Item Section */}
          {isKrobus && (
            <div className="flex flex-col items-center justify-center p-6 text-center bg-purple-50/30 border-t border-stone-200">
              <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full bg-white p-2 shadow-inner ring-4 ring-purple-100">
                <Image
                  src="/images/events/regador.webp"
                  alt="Aspersor de iridio"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-purple-400">
                {language === "es" ? "Objeto Especial (Viernes)" : "Special Item (Friday)"}
              </p>
              <h4 className="mt-1 text-2xl font-black text-purple-700">
                {language === "es" ? "Regador de Iridio" : "Iridium Sprinkler"}
              </h4>
              <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-800">
                💰 10,000g
              </p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
