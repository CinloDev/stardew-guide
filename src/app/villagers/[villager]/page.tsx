import { Card } from "@/components/ui/Card";
import villagersData from "@/data/villagers.json";
import type { Villager } from "@/types/villager";
import Image from "next/image";
import { notFound } from "next/navigation";

const villagers = villagersData as Villager[];

interface VillagerDetailPageProps {
  params: Promise<{ villager: string }>;
}

export default async function VillagerDetailPage({ params }: VillagerDetailPageProps) {
  const { villager } = await params;
  const profile = villagers.find((entry) => entry.id === villager);

  if (!profile) {
    notFound();
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-4">
        {profile.image && (
          <div className="shrink-0 bg-stone-100 rounded-lg p-2 border border-stone-200">
            <Image
              src={profile.image}
              alt={profile.name}
              width={96}
              height={96}
              className="object-contain"
            />
          </div>
        )}
        <h1 className="section-title !mb-0">{profile.name}</h1>
      </div>

      <Card title="Profile">
        <p className="text-sm text-stone-700">Birthday: {profile.birthday}</p>
        <p className="mt-2 text-sm text-stone-700">Loved gifts: {profile.lovedGifts.join(", ")}</p>
        <p className="mt-1 text-sm text-stone-700">Liked gifts: {profile.likedGifts.join(", ")}</p>
      </Card>
    </section>
  );
}
