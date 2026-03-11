import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ESAT - Solutions de Télédistribution & Réseaux",
  description:
    "Expert en solutions de télédistribution, affichage et réseaux B2B. IPTV, DVB-T/C, Fibre Optique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-white text-slate-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
