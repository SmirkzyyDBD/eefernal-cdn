import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PlausibleProvider from "next-plausible";

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
    <html lang="en">
      <PlausibleProvider domain="cdn.eefernal.cc">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
        >
          <main className="relative">{children}</main>
        </body>
      </PlausibleProvider>
    </html>
  );
}
