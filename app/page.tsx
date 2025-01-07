/*import DownloadButton from "@/components/download-button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <h1>Dead by Daylight 6.5.2</h1>
      <DownloadButton fileName="652.zip" />
      <h1>Patch Files</h1>
      <DownloadButton fileName="patchFiles.zip" />
    </div>
  );
}*/

import DownloadButton from "@/components/download-button";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-950/60 text-white space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
          Dead by Daylight 6.5.2
        </h1>
        <DownloadButton fileName="652.zip" />
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-stone-500 via-white to-stone-500">
          Patch Files
        </h1>
        <DownloadButton fileName="patchFiles.zip" />
      </div>
    </div>
  );
}
