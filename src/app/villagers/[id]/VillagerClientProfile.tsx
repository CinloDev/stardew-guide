"use client";

import Image from "next/image";
import Link from "next/link";
import { useGameStore } from "@/store/useGameStore";
import { getTranslations } from "@/lib/i18n";
import type { Villager } from "@/types/villager";

interface ProfileProps {
  villager: Villager;
}

export function VillagerClientProfile({ villager }: ProfileProps) {
  const { season: currentSeason, day: currentDay, language } = useGameStore();
  const t = getTranslations(language);

  const [bSeason, bDay] = villager.birthday.split(" ");
  const translatedSeason = t.home.seasons[bSeason.toLowerCase() as keyof typeof t.home.seasons] || bSeason;
  const isBirthdayToday = currentSeason.toLowerCase() === bSeason.toLowerCase() && currentDay.toString() === bDay;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      {/* Back Button */}
      <Link href="/villagers" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-amber-700 transition-colors">
        <span>←</span> Volver al Directorio
      </Link>

      {/* Hero Header */}
      <header className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-stretch bg-gradient-to-br from-stone-50 to-amber-50/50 p-6 rounded-3xl border border-amber-900/10 shadow-sm overflow-hidden">
        {isBirthdayToday && (
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400 blur-[80px] rounded-full opacity-60 pointer-events-none" />
        )}
        
        {/* Portrait */}
        <div className="relative shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-white p-3 ring-4 ring-white shadow-xl flex items-center justify-center overflow-hidden z-10 group">
          {villager.image ? (
            <Image
              src={villager.image}
              alt={villager.name}
              width={160}
              height={160}
              className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="text-stone-300 text-sm">Sin retrato</div>
          )}
        </div>

        {/* Info Bio */}
        <div className="flex flex-col flex-1 justify-center text-center md:text-left z-10">
          <div className="flex flex-col md:flex-row md:items-end gap-3 mb-2">
            <h1 className="text-4xl md:text-5xl font-black text-stone-800 tracking-tight">{villager.name}</h1>
            {villager.marriageable && (
              <span className="inline-flex items-center justify-center md:mb-1.5 px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-[11px] font-black uppercase tracking-widest shadow-sm mx-auto md:mx-0">
                💍 Soltero/a
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 text-sm font-medium text-stone-600">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${isBirthdayToday ? 'bg-amber-100 border-amber-300 text-amber-800' : 'bg-white border-stone-200'}`}>
              <span>🎂</span> Cumpleaños: <strong className="text-stone-900">{translatedSeason} {bDay}</strong>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border bg-white border-stone-200">
              <span>🏠</span> {t.locations[villager.address] || villager.address}
            </div>
          </div>
          
          {villager.clinicDay && (
            <div className="mt-4 inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2 rounded-xl text-sm font-semibold max-w-fit mx-auto md:mx-0">
              <span>⚕️</span> Cita Médica Anual: {villager.clinicDay}
            </div>
          )}
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Col: Schedule & Routine */}
        <div className="lg:col-span-1 space-y-6">
          <section className="panel min-h-64 border-blue-100 bg-gradient-to-b from-blue-50/50 to-transparent">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">🗺️</div>
              <h2 className="text-lg font-bold text-stone-800">Ubicación Actual</h2>
            </div>
            
            <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-sm text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                Día actual: {t.home.seasons[currentSeason.toLowerCase() as keyof typeof t.home.seasons]} {currentDay}
              </p>
              <p className="text-sm text-stone-600 mt-3">
                ¡El motor de horarios se conectará pronto en la <strong>Fase 2.1</strong>! 
                El sistema usará el estado global para localizar a {villager.name} a cada hora exacta.
              </p>
            </div>
          </section>

          {/* Heart Events Skeleton */}
          <section className="panel">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-rose-100 text-rose-700 rounded-lg">💖</div>
              <h2 className="text-lg font-bold text-stone-800">Eventos de Corazones</h2>
            </div>
            {villager.heartEvents && villager.heartEvents.length > 0 ? (
              <ul className="space-y-3">
                {villager.heartEvents.map((evt, idx) => (
                  <li key={idx} className="p-3 bg-stone-50 rounded-lg border border-stone-200/60 text-sm">
                    <strong>{evt.hearts} Corazones:</strong> {evt.trigger}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-stone-500 italic text-center py-4">Próximamente...</p>
            )}
          </section>
        </div>

        {/* Right Col: Encyclopedia */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Gifts Encyclopedia */}
          <section className="panel border-t-4 border-t-emerald-400">
            <h2 className="text-xl font-black text-stone-800 mb-6 flex items-center gap-2">
              <span>🎁</span> Enciclopedia de Regalos
            </h2>
            
            <div className="space-y-6">
              {/* Loved */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3 flex items-center gap-2 border-b border-stone-100 pb-2">
                  <span>😍😍</span> Le Encanta
                </h3>
                <div className="flex flex-wrap gap-3">
                  {villager.lovedGifts.map(gift => (
                    <div key={gift} className="flex flex-col items-center gap-1.5 p-2 rounded-xl border border-emerald-100 bg-emerald-50/30 hover:bg-emerald-50 transition-colors w-[76px]" title={gift}>
                      <Image
                        src={`/images/items/${gift.replace(/ /g, "_")}.webp`}
                        alt={gift} width={36} height={36} className="object-contain drop-shadow-md"
                      />
                      <span className="text-[10px] text-center font-semibold text-stone-700 leading-tight line-clamp-2">{gift}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Liked */}
              {villager.likedGifts && villager.likedGifts.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-lime-600 mb-3 flex items-center gap-2 border-b border-stone-100 pb-2">
                    <span>🙂</span> Le Gusta
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {villager.likedGifts.map(gift => (
                      <div key={gift} className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-lime-200/50 bg-lime-50/20 text-xs font-semibold text-stone-600">
                        <Image src={`/images/items/${gift.replace(/ /g, "_")}.webp`} alt={gift} width={20} height={20} className="opacity-80" />
                        {gift}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Hated */}
              {villager.hatedGifts && villager.hatedGifts.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-3 flex items-center gap-2 border-b border-stone-100 pb-2 mt-4">
                    <span>🤢</span> Odia Fuertemente
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {villager.hatedGifts.map(gift => (
                      <div key={gift} className="px-2.5 py-1 rounded-md border border-red-200 bg-red-50 text-[11px] font-bold text-red-700">
                        {gift}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Movies */}
          {villager.movies && (
            <section className="panel border-amber-200 bg-amber-50/20">
               <h2 className="text-lg font-bold text-stone-800 mb-4 flex items-center gap-2">
                <span>🍿</span> Cine de Pelican Town
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-xl border border-amber-100">
                  <h4 className="text-[11px] font-black uppercase text-amber-600 mb-2">Películas favoritas</h4>
                  <ul className="list-disc list-inside text-xs text-stone-600 font-medium">
                    {villager.movies.loved.map(m => <li key={m}>{m}</li>)}
                  </ul>
                </div>
                <div className="p-3 bg-white rounded-xl border border-amber-100">
                  <h4 className="text-[11px] font-black uppercase text-amber-600 mb-2">Snacks que ama</h4>
                  <ul className="list-disc list-inside text-xs text-stone-600 font-medium">
                    {villager.movies.lovedConcessions.map(c => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
}
