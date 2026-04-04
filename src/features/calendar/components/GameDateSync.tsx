"use client";

import { SEASONS, type Season } from "@/lib/constants";
import getTranslations from "@/lib/i18n";
import { useGameStore } from "@/store/useGameStore";
import { useEffect, useRef, useState } from "react";

const getSeasonStyles = (season: Season) => {
  switch (season) {
    case "spring":
      return {
        bg: "bg-emerald-50/80 border-emerald-100",
        active: "bg-emerald-600 ring-emerald-500/50",
        dayHover: "hover:bg-emerald-100 hover:text-emerald-700",
        dayActive: "bg-emerald-700",
      };
    case "summer":
      return {
        bg: "bg-amber-50/80 border-amber-100",
        active: "bg-amber-600 ring-amber-500/50",
        dayHover: "hover:bg-amber-100 hover:text-amber-700",
        dayActive: "bg-amber-700",
      };
    case "fall":
      return {
        bg: "bg-orange-50/80 border-orange-100",
        active: "bg-orange-600 ring-orange-500/50",
        dayHover: "hover:bg-orange-100 hover:text-orange-700",
        dayActive: "bg-orange-700",
      };
    case "winter":
      return {
        bg: "bg-blue-50/80 border-blue-100",
        active: "bg-blue-600 ring-blue-500/50",
        dayHover: "hover:bg-blue-100 hover:text-blue-700",
        dayActive: "bg-blue-700",
      };
    default:
      return {
        bg: "bg-white/40 border-white",
        active: "bg-stone-700",
        dayHover: "hover:bg-stone-100",
        dayActive: "bg-stone-700",
      };
  }
};

export function GameDateSync() {
  const { season, day, language, setSeason, setDay, nextDay, prevDay } = useGameStore();
  const [isDayPickerOpen, setIsDayPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const styles = getSeasonStyles(season);
  const t = getTranslations(language);

  // Close picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setIsDayPickerOpen(false);
      }
    };
    if (isDayPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDayPickerOpen]);

  return (
    <div
      className={`rounded-2xl border-2 ${styles.bg} p-4 backdrop-blur-md shadow-sm relative z-50 transition-colors duration-500`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Season Selector */}
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {SEASONS.map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setSeason(s)}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition-all active:scale-95 shadow-sm sm:shadow-none ${
                season === s
                  ? `${styles.active} text-white ring-2 translate-y-[-2px] shadow-lg`
                  : "bg-white/80 text-stone-600 hover:bg-white"
              }`}
            >
              <span className="text-base leading-none">
                {s === "spring" ? "🌸" : s === "summer" ? "☀️" : s === "fall" ? "🍂" : "❄️"}
              </span>
              <span className="hidden xs:inline">
                {t.home.seasons[s as keyof typeof t.home.seasons]}
              </span>
            </button>
          ))}
        </div>

        {/* Day & Controls Redesign */}
        <div className="flex items-center gap-1.5 self-center sm:self-auto">
          {/* Previous Day Button */}
          <button
            type="button"
            onClick={prevDay}
            className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-stone-500 transition hover:bg-white hover:text-stone-800 active:scale-95"
          >
            <span className="text-sm">‹</span>
            <span className="hidden xs:inline">{t.home.prevDay}</span>
          </button>

          {/* Centered Day Display */}
          <div className="relative" ref={pickerRef}>
            <button
              type="button"
              onClick={() => setIsDayPickerOpen(!isDayPickerOpen)}
              className="flex min-w-[70px] flex-col items-center rounded-2xl bg-white p-1 shadow-sm ring-1 ring-stone-200 transition hover:ring-amber-400 group"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-amber-600">
                Día
              </span>
              <span className="text-xl font-black text-stone-800 leading-none">{day}</span>
            </button>

            {/* Day Picker Dropdown */}
            {isDayPickerOpen && (
              <>
                {/* Backdrop for mobile only */}
                <div className="fixed inset-0 z-[120] bg-stone-900/10 backdrop-blur-[1px] sm:hidden" />

                <div className="fixed inset-x-4 top-[20%] z-[130] mx-auto w-auto max-w-[280px] rounded-3xl border border-stone-200 bg-white p-5 shadow-2xl animate-in fade-in zoom-in slide-in-from-top-4 duration-300 sm:absolute sm:top-14 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 sm:w-64 sm:rounded-2xl sm:p-3 sm:shadow-2xl">
                  <div className="mb-3 px-1 text-[10px] font-bold uppercase tracking-widest text-stone-400 sm:mb-2 text-center">
                    Saltar al Día
                  </div>
                  <div className="grid grid-cols-7 gap-2 sm:gap-1">
                    {Array.from({ length: 28 }, (_, i) => i + 1).map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => {
                          setDay(d);
                          setIsDayPickerOpen(false);
                        }}
                        className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold transition active:scale-90 sm:h-8 sm:w-8 sm:rounded-lg sm:text-xs ${
                          day === d
                            ? `${styles.dayActive} text-white shadow-md`
                            : `text-stone-600 ${styles.dayHover}`
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                  {/* Close button for mobile only */}
                  <button
                    type="button"
                    onClick={() => setIsDayPickerOpen(false)}
                    className="mt-4 w-full rounded-xl bg-stone-100 py-2 text-[10px] font-bold uppercase tracking-wider text-stone-500 sm:hidden"
                  >
                    Cerrar
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Next Day Button */}
          <button
            type="button"
            onClick={nextDay}
            className="flex items-center gap-1.5 rounded-xl border border-stone-200 bg-white/80 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-stone-500 transition hover:bg-white hover:text-stone-800 active:scale-95"
          >
            <span className="hidden xs:inline">{t.home.nextDay}</span>
            <span className="text-sm">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
