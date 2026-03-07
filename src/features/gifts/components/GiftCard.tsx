import type { Villager } from "@/types/villager";
import Link from "next/link";

interface GiftCardProps {
  villager: Villager;
}

export function GiftCard({ villager }: GiftCardProps) {
  return (
    <article className="panel">
      <h3 className="text-lg font-semibold text-amber-950">{villager.name}</h3>
      <p className="mt-1 text-sm text-stone-600">Birthday: {villager.birthday}</p>
      <p className="mt-2 text-sm text-stone-700">
        Loved: <span className="font-medium">{villager.lovedGifts.join(", ")}</span>
      </p>
      <p className="mt-1 text-sm text-stone-700">Liked: {villager.likedGifts.join(", ")}</p>
      <Link
        href={`/villagers/${villager.id}`}
        className="mt-3 inline-block text-sm font-medium text-amber-800 hover:text-amber-600"
      >
        View profile
      </Link>
    </article>
  );
}
