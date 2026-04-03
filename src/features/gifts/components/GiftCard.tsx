import type { Villager } from "@/types/villager";
import Image from "next/image";
import Link from "next/link";

interface GiftCardProps {
  villager: Villager;
}

export function GiftCard({ villager }: GiftCardProps) {
  return (
    <article className="panel">
      <div className="flex items-center gap-4">
        {villager.image && (
          <div className="shrink-0 bg-stone-100 rounded-md p-1">
            <Image
              src={villager.image}
              alt={villager.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-amber-950">{villager.name}</h3>
          <p className="mt-1 text-sm text-stone-600">Birthday: {villager.birthday}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="text-sm text-stone-700">
          <span className="font-medium">Loved:</span> {villager.lovedGifts.join(", ")}
        </p>
        <p className="mt-1 text-sm text-stone-700">
          <span className="font-medium">Liked:</span> {villager.likedGifts.join(", ")}
        </p>
        <Link
          href={`/villagers/${villager.id}`}
          className="mt-4 inline-block text-sm font-medium text-amber-800 hover:text-amber-600 transition-colors"
        >
          View profile &rarr;
        </Link>
      </div>
    </article>
  );
}
