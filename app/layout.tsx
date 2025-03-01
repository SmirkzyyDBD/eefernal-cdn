import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eefernal Fog CDN",
  description:
    "High-performance content delivery network for Dead by Daylight resources.",
  keywords: "CDN, Dead by Daylight, gaming, downloads, fast delivery",
  authors: [{ name: "Eefernal Fog" }],
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-b from-black to-zinc-900 min-h-screen"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(39, 39, 39, 0.1),transparent)] text-white/90`}
      >
        <div className="fixed inset-0 z-[-1] bg-grid-animated opacity-50" />
        <main className="relative">
          <div className="pointer-events-none absolute inset-0 bg-center" />
          {children}
        </main>
      </body>
    </html>
  );
}
