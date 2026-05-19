import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Group Corp. | Trade • Logistics • Capital",
  description: "Global trade, logistics, and capital solutions for enterprises worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
