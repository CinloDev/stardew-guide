import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import type { Metadata } from "next";
import { Alegreya, Montserrat } from "next/font/google";
import "./globals.css";

const headingFont = Alegreya({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stardew Guide | Ultimate Interactive Companion for Stardew Valley",
  description:
    "Highly interactive guide for Stardew Valley farmers. Track seasons, festivals, NPC gift preferences, and museum donations with a premium, mobile-optimized UI.",
  keywords: [
    "Stardew Valley",
    "Game Guide",
    "Museum Tracker",
    "Gift Guide",
    "Calendar",
    "Next.js",
    "Zustand",
  ],
  authors: [{ name: "CinloDev" }],
  openGraph: {
    title: "Stardew Guide — Interactive Companion",
    description: "Optimizing your farm life with data-driven trackers and seasonal planning.",
    url: "https://stardewguide.vercel.app",
    siteName: "Stardew Guide",
    images: [
      {
        url: "https://stardewguide.vercel.app/og-image.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "Stardew Guide Dashboard",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stardew Guide",
    description: "Your essential Stardew Valley companion.",
    images: ["https://stardewguide.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico", // Ensure to create/copy this file or use an emoji-based SVG
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased overflow-x-hidden`}
      >
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
