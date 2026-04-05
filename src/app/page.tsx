"use client";

import { seasonLabels } from "@/data/seasons";
import villagersData from "@/data/villagers.json";
import { CalendarEventModal } from "@/features/calendar/components/CalendarEventModal";
import { GameDateSync } from "@/features/calendar/components/GameDateSync";
import { type CalendarEvent, getSeasonEvents } from "@/features/calendar/utils/getSeasonEvents";
import getTranslations from "@/lib/i18n";
import { useGameStore } from "@/store/useGameStore";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const getSeasonStyles = (season: string) => {
  switch (season) {
    case "spring":
      return {
        bg: "from-emerald-300/40 to-teal-100/50",
        text: "text-emerald-900",
        accent: "bg-emerald-500",
        banner: "bg-emerald-100/50",
      };
    case "summer":
      return {
        bg: "from-amber-200/40 to-yellow-100/50",
        text: "text-amber-900",
        accent: "bg-amber-500",
        banner: "bg-amber-100/50",
      };
    case "fall":
      return {
        bg: "from-orange-300/30 to-orange-100/50",
        text: "text-orange-900",
        accent: "bg-orange-600",
        banner: "bg-orange-100/50",
      };
    case "winter":
      return {
        bg: "from-blue-200/40 to-sky-100/50",
        text: "text-blue-900",
        accent: "bg-blue-500",
        banner: "bg-sky-100/50",
      };
    default:
      return {
        bg: "from-stone-200 to-stone-50",
        text: "text-stone-900",
        accent: "bg-stone-500",
        banner: "bg-stone-100",
      };
  }
};

export default function Home() {
  const { season, day, language } = useGameStore();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const styles = getSeasonStyles(season);
  const t = getTranslations(language);

  // Get events for the current MANUAL game season
  const allSeasonEvents = useMemo(() => {
    return getSeasonEvents(season);
  }, [season]);

  // Filter events for TODAY (Manual Day)
  const todayEvents = allSeasonEvents.filter((e) => e.day === day);
  const birthdayToday = todayEvents.find((e) => e.type === "birthday");
  const festivalToday = todayEvents.find(
    (e) => e.type === "festival" || e.type === "special" || e.type === "fishing",
  );

  // Vendor Logic based on Manual day
  const isTravelingCart = day % 7 === 5 || day % 7 === 0;
  const isKrobus = day % 7 === 5;
  const isQueenOfSauce = day % 7 === 0 || day % 7 === 3;

  const sections = [
    {
      title: t.home.sectionCalendar,
      desc: t.home.sectionCalendarDesc,
      href: "/calendar",
      icon: "📅",
      color: "bg-amber-100",
    },
    {
      title: t.home.sectionVillagers,
      desc: t.home.sectionVillagersDesc,
      href: "/villagers",
      icon: "👥",
      color: "bg-rose-100",
    },
    {
      title: t.home.sectionCommunityCenter,
      desc: t.home.sectionCommunityCenterDesc,
      href: "/items",
      icon: "🌿",
      color: "bg-emerald-100",
    },
    {
      title: t.home.sectionMuseum,
      desc: t.home.sectionMuseumDesc,
      href: "/museum",
      icon: "⛏️",
      color: "bg-stone-200",
    },
    {
      title: t.home.sectionRecipes,
      desc: t.home.sectionRecipesDesc,
      href: "/recipes",
      icon: "🍳",
      color: "bg-orange-100",
    },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Date Sync Controls */}
      <GameDateSync />

      {/* Dynamic Seasonal Hero */}
      <header
        className={`relative overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-br ${styles.bg} p-8 shadow-sm sm:p-12`}
      >
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <span className={`inline-block h-2 w-12 rounded-full ${styles.accent}`} />
            <p className={`text-xs font-bold uppercase tracking-widest ${styles.text} opacity-70`}>
              {t.home.heroSubtitle}
            </p>
          </div>
          <h1
            className={`mt-4 text-4xl font-bold tracking-tight ${styles.text} sm:text-6xl font-serif`}
          >
            {t.home.seasons[season as keyof typeof t.home.seasons]} {day}
          </h1>
          <p
            className={`mt-4 max-w-xl text-lg font-medium ${styles.text} opacity-80 leading-relaxed`}
          >
            {t.home.heroWelcome}
          </p>
        </div>
        {/* Abstract seasonal decoration */}
        <div
          className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${styles.accent} opacity-5 blur-3xl`}
        />
      </header>

      {/* Today's Highlights Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 px-1">
          <span className="text-xl">✨</span>
          <h2 className="text-xl font-bold text-stone-800">{t.home.summaryTitle}</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Birthday Card */}
          {birthdayToday ? (
            <button
              type="button"
              onClick={() => setSelectedEvent(birthdayToday)}
              className="w-full text-left group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-pink-300 hover:shadow-md active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-pink-50 ring-2 ring-pink-50 group-hover:ring-pink-200">
                  <Image
                    src={villagersData.find((v) => v.name === birthdayToday.name)?.image || ""}
                    alt={birthdayToday.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pink-500">
                    {t.home.birthdayLabel}
                  </p>
                  <h3 className="text-lg font-bold text-stone-800">
                    {t.home.birthdayToday.replace("{name}", birthdayToday.name)}
                  </h3>
                  <p className="text-xs text-stone-500">{t.home.birthdayTap}</p>
                </div>
              </div>
            </button>
          ) : (
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 p-6 opacity-60">
              <p className="text-sm font-medium text-stone-400 italic text-center">
                {t.home.noBirthdays}
              </p>
            </div>
          )}

          {/* Festival or Special Event Card */}
          {festivalToday ? (
            <button
              type="button"
              onClick={() => setSelectedEvent(festivalToday)}
              className="w-full text-left group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-amber-300 hover:shadow-md active:scale-[0.98]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-50 text-3xl shadow-inner group-hover:scale-110 transition">
                  🎉
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
                    {t.home.festivalLabel}
                  </p>
                  <h3 className="text-lg font-bold text-stone-800 leading-tight">
                    {festivalToday.name}
                  </h3>
                  <p className="text-xs text-stone-500">
                    {"location" in festivalToday ? festivalToday.location : t.home.defaultLocation}
                  </p>
                </div>
              </div>
            </button>
          ) : (
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 p-6 opacity-60">
              <p className="text-sm font-medium text-stone-400 italic text-center">
                {t.home.noFestivals}
              </p>
            </div>
          )}

          {/* Shops & Vendors Summary */}
          <div className="flex flex-col gap-2 rounded-2xl border border-stone-200 bg-stone-50/80 p-4 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">
              {t.home.vendorsTitle}
            </h3>
            <div className="mt-1 space-y-2">
              <div
                className={`flex items-center gap-2 rounded-lg p-2 text-xs transition ${isTravelingCart ? "bg-emerald-100 text-emerald-800 font-bold border border-emerald-200" : "bg-stone-100 text-stone-400 opacity-60"}`}
              >
                <span>🚚</span>{" "}
                {isTravelingCart ? t.home.travelingCartOpen : t.home.travelingCartClosed}
              </div>
              <div
                className={`flex items-center gap-2 rounded-lg p-2 text-xs transition ${isKrobus ? "bg-purple-100 text-purple-800 font-bold border border-purple-200" : "bg-stone-100 text-stone-400 opacity-60"}`}
              >
                <span> sewer </span> {isKrobus ? t.home.krobusOpen : t.home.krobusClosed}
              </div>
              <div
                className={`flex items-center gap-2 rounded-lg p-2 text-xs transition ${isQueenOfSauce ? "bg-rose-100 text-rose-800 font-bold border border-rose-200" : "bg-stone-100 text-stone-400 opacity-60"}`}
              >
                <span>📺</span> {isQueenOfSauce ? t.home.queenOfSauceOpen : t.home.queenOfSauceClosed}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Grid */}
      <section className="space-y-4">
        <h2 className="px-1 text-xl font-bold text-stone-800">{t.home.toolsTitle}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg active:scale-95"
            >
              <div>
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-inner ${section.color}`}
                >
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 group-hover:text-amber-800">
                  {section.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{section.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-end text-sm font-bold text-stone-300 group-hover:text-amber-600">
                <span>{t.home.enterButton}</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Modal for Events */}
      <CalendarEventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
