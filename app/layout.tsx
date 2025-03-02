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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <head>
          <script
            defer
            data-domain="cdn.eefernal.cc"
            src="https://plausible.io/js/script.file-downloads.outbound-links.js"
          ></script>
        </head>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
