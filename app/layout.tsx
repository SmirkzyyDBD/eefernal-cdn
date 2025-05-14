import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Eefernal Fog CDN",
  description:
    "High-performance content delivery network for Eefernal Fog Private Server.",
  keywords:
    "CDN, Dead by Daylight, gaming, downloads, fast delivery, dbd, private server",
  authors: [{ name: "smirkzyy, 1w6ts" }],
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
    <html lang="en" className="dark">
        <body
          className={`${inter.className} antialiased min-h-screen`}
        >
          <main className="relative">{children}</main>
        </body>
    </html>
  );
}
