import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Global Consolidated Contractors | EPC Contractor",
  description:
    "A global network of enterprises specialized in reconstruction programs — Infrastructure, Defence & Security, and Energy sectors across MENA, Africa, and beyond.",
  keywords: [
    "EPC contractor",
    "reconstruction",
    "infrastructure",
    "defence",
    "energy",
    "MENA",
    "global contractor",
    "UN vendor",
    "NATO",
    "World Bank",
  ],
  openGraph: {
    title: "Global Consolidated Contractors International",
    description:
      "EPC contractor working with the UN, NATO, World Bank, and US Government on development programs worldwide.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
