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
    title: "Stardew Guide",
    description: "Interactive Stardew Valley guide with trackers and seasonal planning.",
};

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="es">
    <body className={`${headingFont.variable} ${bodyFont.variable} antialiased overflow-x-hidden`}>
        <Navbar />
            <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 overflow-x-hidden">{children}</main>
        <Footer />
    </body>
        </html>
    );
}
