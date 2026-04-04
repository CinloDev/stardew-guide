"use client";

import { getAvailableLanguages } from "@/lib/i18n";
import { useGameStore } from "@/store/useGameStore";
import { useState, useRef, useEffect } from "react";

export function LanguageSwitcher() {
  const { language: currentLang, setLanguage } = useGameStore();
  const [isOpen, setIsOpen] = useState(false);
  const languages = getAvailableLanguages();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLangData = languages.find((l) => l.code === currentLang);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Mobile Toggle Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex md:hidden items-center gap-1.5 rounded-xl bg-stone-100 px-3 py-1.5 shadow-inner border border-stone-200 text-[10px] font-bold text-blue-600 transition hover:bg-stone-200 active:scale-95"
      >
        <span>{currentLang.toUpperCase()}</span>
        <svg
          className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-xl border border-stone-200 bg-white p-1 shadow-xl md:hidden z-[110] animate-in fade-in zoom-in-95 duration-150">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2 text-left text-[10px] font-bold transition ${
                currentLang === lang.code
                  ? "bg-blue-50 text-blue-600"
                  : "text-stone-500 hover:bg-stone-50 hover:text-stone-700"
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}

      {/* Desktop Pill Group (Same as before) */}
      <div className="hidden md:flex items-center gap-1 rounded-xl bg-stone-100 p-1 shadow-inner border border-stone-200">
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            className={`relative rounded-lg px-2.5 py-1 text-[10px] font-bold transition-all duration-200 ${
              currentLang === lang.code
                ? "bg-white text-blue-600 shadow-sm ring-1 ring-stone-950/5 scale-105"
                : "text-stone-400 hover:text-stone-600 hover:bg-stone-50"
            }`}
            aria-label={`Switch to ${lang.name}`}
          >
            {lang.code.toUpperCase()}
            {currentLang === lang.code && (
              <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-2 -translate-x-1/2 rounded-full bg-blue-600" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
