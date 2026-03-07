import Link from "next/link";

const navLinks = [
  { href: "/museum", label: "Museum" },
  { href: "/villagers", label: "Villagers" },
  { href: "/recipes", label: "Recipes" },
  { href: "/calendar", label: "Calendar" },
];

export function Navbar() {
  return (
    <header className="border-b border-amber-900/15 bg-amber-50/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold text-amber-950">
          Stardew Guide
        </Link>
        <nav className="flex items-center gap-2 sm:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-stone-700 transition hover:bg-amber-100 hover:text-amber-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
