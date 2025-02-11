import DownloadButton from "@/components/download-button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 pb-1">
          Eefernal Fog CDN
        </h1>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          High-performance content delivery network for Eefernal Fog private
          server
        </p>
      </header>

      <div className="w-full max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
              Dead by Daylight 6.7.0 PTB
            </h2>
            <div className="space-y-4">
              <DownloadButton fileName="670_ptb.7z" text="Game content" />
              <DownloadButton
                fileName="EefernalFogPSv2.4.zip"
                text="Patch files"
              />
            </div>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-colors">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
              Dead by Daylight 6.7.2
            </h2>
            <div className="space-y-4">
              <DownloadButton
                fileName="DeadByDaylight6.7.2.zip"
                text="Game content"
              />
              <DownloadButton
                fileName="EefernalFogPSv3.2.zip"
                text="Patch files"
              />
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 text-center text-sm text-zinc-500">
        <p>© {new Date().getFullYear()} Eefernal Fog. All rights reserved.</p>
      </footer>
    </div>
  );
}
