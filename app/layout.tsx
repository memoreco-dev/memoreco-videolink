import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Memoreco VideoLink",
  description: "Video sharing and collaboration platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">{children}</body>
    </html>
  );
}