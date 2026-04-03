"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { useGameStore } from "@/store/useGameStore";
import { seasonLabels } from "@/data/seasons";
import { CalendarEventModal } from "@/features/calendar/components/CalendarEventModal";
import { type CalendarEvent, getSeasonEvents } from "@/features/calendar/utils/getSeasonEvents";
import { GameDateSync } from "@/features/calendar/components/GameDateSync";
import villagersData from "@/data/villagers.json";

const getSeasonStyles = (season: string) => {
  switch (season) {
    case "spring":
      return { bg: "from-emerald-300/40 to-teal-100/50", text: "text-emerald-900", accent: "bg-emerald-500", banner: "bg-emerald-100/50" };
    case "summer":
      return { bg: "from-amber-200/40 to-yellow-100/50", text: "text-amber-900", accent: "bg-amber-500", banner: "bg-amber-100/50" };
    case "fall":
      return { bg: "from-orange-300/30 to-orange-100/50", text: "text-orange-900", accent: "bg-orange-600", banner: "bg-orange-100/50" };
    case "winter":
      return { bg: "from-blue-200/40 to-sky-100/50", text: "text-blue-900", accent: "bg-blue-500", banner: "bg-sky-100/50" };
    default:
      return { bg: "from-stone-200 to-stone-50", text: "text-stone-900", accent: "bg-stone-500", banner: "bg-stone-100" };
  }
};

export default function Home() {
  const { season, day } = useGameStore();
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const styles = getSeasonStyles(season);

  // Get events for the current MANUAL game season
  const allSeasonEvents = useMemo(() => {
    return getSeasonEvents(season);
  }, [season]);

  // Filter events for TODAY (Manual Day)
  const todayEvents = allSeasonEvents.filter(e => e.day === day);
  const birthdayToday = todayEvents.find(e => e.type === "birthday");
  const festivalToday = todayEvents.find(e => e.type === "festival" || e.type === "special" || e.type === "fishing");

  // Vendor Logic based on Manual day
  const isTravelingCart = day % 7 === 5 || day % 7 === 0;
  const isKrobus = day % 7 === 5;
  const isQueenOfSauce = day % 7 === 0 || day % 7 === 3;

  const sections = [
    { title: "Calendario", desc: "Eventos, cumpleaños y siembra.", href: "/calendar", icon: "📅", color: "bg-amber-100" },
    { title: "Aldeanos", desc: "Guía de regalos y amistad.", href: "/villagers", icon: "👥", color: "bg-rose-100" },
    { title: "Museo", desc: "Rastreador de donaciones y geodas.", href: "/museum", icon: "⛏️", color: "bg-stone-200" },
    { title: "Recetas", desc: "Recetario y formas de obtención.", href: "/recipes", icon: "🍳", color: "bg-orange-100" },
  ];

  return (
    <div className="space-y-8 pb-10">
      {/* Date Sync Controls */}
      <GameDateSync />

      {/* Dynamic Seasonal Hero */}
      <header className={`relative overflow-hidden rounded-3xl border-2 border-white bg-gradient-to-br ${styles.bg} p-8 shadow-sm sm:p-12`}>
        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <span className={`inline-block h-2 w-12 rounded-full ${styles.accent}`} />
            <p className={`text-xs font-bold uppercase tracking-widest ${styles.text} opacity-70`}>
              Estado en tu partida
            </p>
          </div>
          <h1 className={`mt-4 text-4xl font-bold tracking-tight ${styles.text} sm:text-6xl font-serif`}>
            {seasonLabels[season]} {day}
          </h1>
          <p className={`mt-4 max-w-xl text-lg font-medium ${styles.text} opacity-80 leading-relaxed`}>
            ¡Bienvenido de nuevo a tu granja! Aquí tienes lo que está ocurriendo hoy en el valle.
          </p>
        </div>
        {/* Abstract seasonal decoration */}
        <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full ${styles.accent} opacity-5 blur-3xl`} />
      </header>

      {/* Today's Highlights Section */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 px-1">
          <span className="text-xl">✨</span>
          <h2 className="text-xl font-bold text-stone-800">Resumen de Hoy</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Birthday Card */}
          {birthdayToday ? (
            <div 
              onClick={() => setSelectedEvent(birthdayToday)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-pink-300 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-pink-50 ring-2 ring-pink-50 group-hover:ring-pink-200">
                  <Image 
                    src={villagersData.find(v => v.name === birthdayToday.name)?.image || ""} 
                    alt={birthdayToday.name} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-pink-500">Cumpleaños</p>
                  <h3 className="text-lg font-bold text-stone-800">¡Es el cumple de {birthdayToday.name}!</h3>
                  <p className="text-xs text-stone-500">Toca para ver sus favoritos</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 p-6 opacity-60">
              <p className="text-sm font-medium text-stone-400 italic text-center">Nadie cumple años hoy</p>
            </div>
          )}

          {/* Festival or Special Event Card */}
          {festivalToday ? (
            <div 
              onClick={() => setSelectedEvent(festivalToday)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:border-amber-300 hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-50 text-3xl shadow-inner group-hover:scale-110 transition">
                  🎉
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">Festival / Evento</p>
                  <h3 className="text-lg font-bold text-stone-800 leading-tight">{festivalToday.name}</h3>
                  <p className="text-xs text-stone-500">{"location" in festivalToday ? festivalToday.location : "Todo el valle"}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center rounded-2xl border border-dashed border-stone-200 bg-stone-50/50 p-6 opacity-60">
              <p className="text-sm font-medium text-stone-400 italic text-center">Sin festivales hoy</p>
            </div>
          )}

          {/* Shops & Vendors Summary */}
          <div className="flex flex-col gap-2 rounded-2xl border border-stone-200 bg-stone-50/80 p-4 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500">Puestos y Tiendas</h3>
            <div className="mt-1 space-y-2">
              <div className={`flex items-center gap-2 rounded-lg p-2 text-xs transition ${isTravelingCart ? 'bg-emerald-100 text-emerald-800 font-bold border border-emerald-200' : 'bg-stone-100 text-stone-400 opacity-60'}`}>
                <span>🚚</span> {isTravelingCart ? "¡Carro Ambulante hoy!" : "El Carro está cerrado"}
              </div>
              <div className={`flex items-center gap-2 rounded-lg p-2 text-xs transition ${isKrobus ? 'bg-purple-100 text-purple-800 font-bold border border-purple-200' : 'bg-stone-100 text-stone-400 opacity-60'}`}>
                <span> sewer </span> {isKrobus ? "Ofertas en Krobus" : "Alcantarillas vacías"}
              </div>
              <div className={`flex items-center gap-2 rounded-lg p-2 text-xs transition ${isQueenOfSauce ? 'bg-rose-100 text-rose-800 font-bold border border-rose-200' : 'bg-stone-100 text-stone-400 opacity-60'}`}>
                <span>📺</span> {isQueenOfSauce ? "Receta nueva en la Tele" : "Pausa televisiva"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Navigation Grid */}
      <section className="space-y-4">
        <h2 className="px-1 text-xl font-bold text-stone-800">Herramientas</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg active:scale-95"
            >
              <div>
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-2xl shadow-inner ${section.color}`}>
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-800 group-hover:text-amber-800">{section.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-500">{section.desc}</p>
              </div>
              <div className="mt-6 flex items-center justify-end text-sm font-bold text-stone-300 group-hover:text-amber-600">
                <span>Entrar</span>
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Modal for Events */}
      <CalendarEventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
    </div>
  );
}
