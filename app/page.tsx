import AdBanner from "@/components/ad-banner";
import DownloadButton from "@/components/download-button";
import { FirefoxWarningDialog } from "@/components/firefox";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <FirefoxWarningDialog />

      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white pb-1">
          Eefernal Fog CDN
        </h1>
        <p className="text-white/55 max-w-2xl mx-auto">
          High-performance content delivery network for Eefernal Fog private
          server
        </p>
      </header>

      <div className="w-full max-w-[90rem] mx-auto grid gap-4 md:grid-cols-2">
        <div className="bg-black/55 backdrop-blur-sm rounded-2xl py-6 px-12 border border-white/10 hover:border-white/20 transition-colors duration-300">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
              Dead by Daylight ALPHA
            </h2>
            <div className="space-x-2 flex items-center justify-center">
              <DownloadButton
                fileName="Dead By Daylight ALPHA (Eefernal Fog).zip"
                text="Game content"
              />
            </div>
          </div>
        </div>

        <div className="bg-black/55 backdrop-blur-sm rounded-2xl py-6 px-12 border border-white/10 hover:border-white/20 transition-colors duration-300">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
              Dead by Daylight BETA
            </h2>
            <div className="space-x-2 flex items-center justify-center">
              <DownloadButton
                fileName="Dead By Daylight BETA (Eefernal Fog).zip"
                text="Game content"
              />
            </div>
          </div>
        </div>

        <div className="bg-black/55 backdrop-blur-sm rounded-2xl py-6 px-12 border border-white/10 hover:border-white/20 transition-colors duration-300">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
              Dead by Daylight 1.2.0 DEV
            </h2>
            <div className="space-x-2 flex items-center justify-center">
              <DownloadButton
                fileName="DBD 1.2.0DEV (Game Files).zip"
                text="Game content"
              />
              <DownloadButton
                fileName="DBD 1.2.0DEV (Patch Files).zip"
                text="Patch files"
              />
              <DownloadButton
                fileName="DBD 1.2.0DEV (FModel Files).zip"
                text="FModel files"
              />
            </div>
          </div>
        </div>

        <div className="bg-black/55 backdrop-blur-sm rounded-2xl py-6 px-12 border border-white/10 hover:border-white/20 transition-colors duration-300">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
              Dead by Daylight 6.7.0 PTB
            </h2>
            <div className="space-x-2 flex items-center justify-center">
              <DownloadButton fileName="670_ptb.7z" text="Game content" />
              <DownloadButton
                fileName="EefernalFogPS DBD6.7.0PTB (Beta v1.2).zip"
                text="Patch files"
              />
            </div>
          </div>
        </div>

        <div className="bg-black/55 backdrop-blur-sm rounded-2xl py-6 px-12 border border-white/10 hover:border-white/20 transition-colors duration-300">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
              Dead by Daylight 6.7.2
            </h2>
            <div className="space-x-2 flex items-center justify-center">
              <DownloadButton
                fileName="DeadByDaylight6.7.2.zip"
                text="Game content"
              />
              <DownloadButton
                fileName="EefernalFogPS DBD6.7.2 (Beta v1.2).zip"
                text="Patch files"
              />
            </div>
          </div>
        </div>
      </div>

      <AdBanner />

      <footer className="mt-16 text-center text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://smirkzyy.xyz"
            target="_blank"
            className="hover:underline"
          >
            Smirkzyy
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/1w6ts"
            target="_blank"
            className="hover:underline"
          >
            1w6ts
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}
