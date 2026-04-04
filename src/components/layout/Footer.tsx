import getTranslations from "@/lib/i18n";
import Link from "next/link";

export function Footer() {
  const t = getTranslations("es"); // Defaulting to Spanish for now

  return (
    <footer className="mt-12 border-t border-stone-200 bg-stone-50/50 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-4 text-center sm:px-6">
        <p className="text-xs font-semibold tracking-wider text-stone-500 uppercase">
          {t.footer.tagline}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-stone-600">
          <span>{t.footer.madeBy}</span>
          <Link
            href="https://cinlodev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors font-bold flex items-center gap-1 hover:underline underline-offset-4"
          >
            CinloDev
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-8 text-[10px] text-stone-400 leading-relaxed font-medium">
          {t.footer.disclaimer}
        </div>
      </div>
    </footer>
  );
}
