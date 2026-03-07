import { Card } from "@/components/ui/Card";
import villagersData from "@/data/villagers.json";
import type { Villager } from "@/types/villager";
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
      <h1 className="section-title">{profile.name}</h1>
      <Card title="Profile">
        <p className="text-sm text-stone-700">Birthday: {profile.birthday}</p>
        <p className="mt-2 text-sm text-stone-700">Loved gifts: {profile.lovedGifts.join(", ")}</p>
        <p className="mt-1 text-sm text-stone-700">Liked gifts: {profile.likedGifts.join(", ")}</p>
      </Card>
    </section>
  );
}
