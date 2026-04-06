import { getTranslations } from "@/lib/i18n";
import { useGameStore } from "@/store/useGameStore";
import type { Villager } from "@/types/villager";
import Image from "next/image";
import Link from "next/link";

interface VillagerCardProps {
  villager: Villager;
}

export function VillagerCard({ villager }: VillagerCardProps) {
  const { language } = useGameStore();
  const t = getTranslations(language);
  const slug = villager.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  
  const [bSeason, bDay] = villager.birthday.split(" ");
  const translatedSeason = t.home.seasons[bSeason.toLowerCase() as keyof typeof t.home.seasons] || bSeason;

  return (
    <article id={`villager-${slug}`} className="panel flex flex-col justify-between h-full group hover:border-amber-400 transition-colors cursor-pointer relative overflow-hidden">
      {/* Marriageable Badge */}
      {villager.marriageable && (
        <div className="absolute top-3 right-3 bg-rose-100 text-rose-600 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
          <span>💍</span> {t.villagerCard.single}
        </div>
      )}

      <div>
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="shrink-0 bg-stone-100/80 rounded-xl p-2 ring-1 ring-stone-200 group-hover:ring-amber-300 transition-all shadow-inner h-20 w-20 flex items-center justify-center">
            {villager.image ? (
              <Image
                src={villager.image}
                alt={villager.name}
                width={64}
                height={64}
                className="object-contain w-full h-full"
              />
            ) : (
              <div className="w-16 h-16 bg-stone-200 rounded-md flex items-center justify-center text-stone-400 text-xs">
                {t.villagerCard.noPhoto}
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-black text-stone-800 leading-tight group-hover:text-amber-700 transition-colors">{villager.name}</h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1">
              <span>🎂</span> {translatedSeason} {bDay}
            </p>
          </div>
        </div>

        {/* Biography section */}
        <div className="mt-4 bg-stone-50 rounded-lg p-3 border border-stone-200/60 space-y-2">
          <p className="text-xs text-stone-700">
            <span className="font-bold uppercase tracking-wider text-[10px] text-stone-400 block mb-0.5">🏠 {t.villagerCard.livesIn}</span>
            <span className="font-medium text-stone-800">{t.locations[villager.address] || villager.address}</span>
          </p>
          
          <p className="text-xs text-stone-700">
            <span className="font-bold uppercase tracking-wider text-[10px] text-stone-400 block mb-0.5">👨‍👩‍👧 {t.villagerCard.family}</span>
            <span className="font-medium text-stone-800">
              {villager.family.length > 0 ? villager.family.join(", ") : t.villagerCard.livesAlone}
            </span>
          </p>
        </div>
      </div>

      {/* Footer Details */}
      <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
        <div className="pr-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-rose-500 mb-0.5 flex items-center gap-1">
            <span>💖</span> {t.villagerCard.loves}
          </p>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {villager.lovedGifts.slice(0, 4).map((gift) => (
              <Image
                key={gift}
                src={`/images/items/${gift.replace(/ /g, "_")}.webp`}
                alt={gift}
                width={28}
                height={28}
                className="object-contain drop-shadow-sm"
                title={gift}
              />
            ))}
          </div>
        </div>
        
        <Link
          href={`/villagers/${villager.id}`}
          className="shrink-0 rounded-xl bg-amber-100/60 text-amber-800 px-3 py-2 text-xs font-bold hover:bg-amber-200 hover:text-amber-900 transition-colors"
        >
          {t.villagerCard.viewProfile}
        </Link>
      </div>
    </article>
  );
}
