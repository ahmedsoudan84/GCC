import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Group Corp. | Trade • Logistics • Capital",
  description:
    "Global trade, logistics, and capital group. Financial intelligence, operational excellence, and global reach for modern commerce.",
  keywords: [
    "global trade",
    "logistics",
    "capital markets",
    "trade finance",
    "supply chain",
    "international commerce",
  ],
  openGraph: {
    title: "Global Group Corp.",
    description: "Global leader in trade, logistics, and capital.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
