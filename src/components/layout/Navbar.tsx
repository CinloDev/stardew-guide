"use client";

import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Button } from "@/components/ui/Button";
import { getNavigation, getTranslations } from "@/lib/i18n";
import { useGameStore } from "@/store/useGameStore";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useGameStore();
  const navLinks = getNavigation(language);
  const t = getTranslations(language);

  return (
    <header className="border-b border-amber-900/15 bg-amber-50/80 backdrop-blur-sm sticky top-0 z-[100]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-semibold text-amber-950 flex items-center gap-2">
          <span className="text-2xl transition-transform hover:scale-110">🌱</span>
          {t.nav.title}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
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
          <div className="h-6 w-px bg-amber-900/10" />
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            className="px-2 py-1.5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6 text-amber-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <title>{isOpen ? "Cerrar menú" : "Abrir menú"}</title>
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="border-t border-amber-900/15 bg-amber-50/95 md:hidden animate-in slide-in-from-top-4 duration-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-stone-700 transition hover:bg-amber-100 hover:text-amber-900 block"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
