import Link from "next/link";

export default function Home() {
  const sections = [
    {
      title: "Museum Tracker",
      description: "Marca objetos como encontrados o donados y guarda tu progreso.",
      href: "/museum",
    },
    {
      title: "Villager Gift Guide",
      description: "Busca regalos favoritos de cada aldeano para maximizar amistad.",
      href: "/villagers",
    },
    {
      title: "Cooking Recipes",
      description: "Consulta recetas, ingredientes y formas de desbloqueo.",
      href: "/recipes",
    },
    {
      title: "Seasonal Calendar",
      description: "Planifica eventos, cultivos y tareas por estacion.",
      href: "/calendar",
    },
  ];

  return (
    <section className="space-y-8">
      <header className="hero-panel rounded-2xl p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-amber-900/80">
          Stardew Valley Companion
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-amber-950 sm:text-5xl">
          Tu guia interactiva y escalable
        </h1>
        <p className="mt-4 max-w-2xl text-amber-950/80">
          Proyecto construido con App Router, TypeScript y arquitectura por features para crecer con
          datos, progreso de usuario y futura integracion con Prisma/PostgreSQL.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-2xl border border-amber-900/15 bg-white/90 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-amber-700/40"
          >
            <h2 className="text-xl font-semibold text-amber-950">{section.title}</h2>
            <p className="mt-2 text-sm text-stone-700">{section.description}</p>
            <span className="mt-4 inline-block text-sm font-medium text-amber-800 group-hover:text-amber-600">
              Abrir seccion
            </span>
          </Link>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-amber-900/20 bg-amber-50 p-4 text-sm text-amber-900/80">
        Tip: El progreso del museo se guarda automaticamente en localStorage usando Zustand.
      </div>
    </section>
  );
}
