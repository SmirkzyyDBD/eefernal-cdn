"use client";

import { ChevronRight, LoaderCircle } from "lucide-react";
import React, { useState } from "react";

interface DownloadButtonProps {
  fileName: string;
  text?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileName, text }) => {
  const [loading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/getsignedurl?fileName=${fileName}`);
      const data = await response.json();

      if (data.url) {
        const link = document.createElement("a");
        link.href = data.url;
        link.download = fileName;
        link.click();
      } else {
        setError("Failed to retrieve the download link.");
      }
    } catch (error) {
      console.error("Download failed:", error);
      setError("An error occurred while fetching the signed URL");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`relative inline-block w-48 p-px font-semibold tracking-tight text-white no-underline cursor-pointer rounded-xl ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <div className="relative z-10 flex items-center justify-center px-6 py-3 space-x-2 rounded-xl hover:bg-white/10 transition-colors duration-300 backdrop-blur ring-1 ring-white/10">
          <span>
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              text || fileName
            )}
          </span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default DownloadButton;
