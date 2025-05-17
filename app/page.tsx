import AdBanner from "@/components/ad-banner";
import DownloadDropdown, {
  DropdownProvider,
} from "../components/download-modal";
import { FirefoxWarningDialog } from "@/components/firefox";
import Link from "next/link";

export default function Home() {
  return (
    <DropdownProvider>
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
          <Link
            href="/other-builds"
            className="text-blue-400 hover:underline mt-4 inline-block"
          >
            View other builds →
          </Link>
        </header>

        <div className="w-full max-w-[90rem] mx-auto grid place-items-center">
          <div className="bg-black/55 backdrop-blur-sm rounded-2xl py-8 px-16 border border-white/10 hover:border-white/20 transition-colors duration-300 max-w-md w-full">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
                Dead by Daylight 6.7.2
              </h2>
              <p className="text-white/70">Latest recommended build</p>
              <DownloadDropdown
                id="6.7.2"
                title="Dead by Daylight 6.7.2"
                files={[
                  {
                    fileName: "DeadByDaylight6.7.2.zip",
                    text: "Game content",
                  },
                  {
                    fileName: "EefernalFogPS DBD6.7.2 (Beta v2.1).zip",
                    text: "Patch files",
                  },
                ]}
              />
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
    </DropdownProvider>
  );
}
