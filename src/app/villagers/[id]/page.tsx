import villagersData from "@/data/villagers.json";
import type { Villager } from "@/types/villager";
import { notFound } from "next/navigation";
import { VillagerClientProfile } from "./VillagerClientProfile";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  const villager = (villagersData as Villager[]).find(
    (v) => v.id.toLowerCase() === id.toLowerCase()
  );

  if (!villager) return { title: "Aldeano no encontrado" };

  return {
    title: `${villager.name} | Guía Stardew`,
    description: `Perfil completo de ${villager.name}: regalos, horarios, eventos de corazones y más.`,
  };
}

export default async function VillagerPage({ params }: PageProps) {
  const { id } = await params;

  const villager = (villagersData as Villager[]).find(
    (v) => v.id.toLowerCase() === id.toLowerCase()
  );

  if (!villager) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      <VillagerClientProfile villager={villager} />
    </div>
  );
}
