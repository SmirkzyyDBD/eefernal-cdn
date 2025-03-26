"use client";

import { ChevronRight, LoaderCircle } from "lucide-react";
import React, { useState } from "react";

interface DownloadButtonProps {
  fileName: string;
  text?: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  fileName,
  text,
  className = "",
}) => {
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
    <div className={`space-y-2 ${className}`}>
      <button
        onClick={handleDownload}
        disabled={loading}
        className={`relative inline-flex w-full justify-center items-center px-6 py-3 space-x-2 font-semibold tracking-tight text-white rounded-xl ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"
        } transition-colors duration-300 backdrop-blur ring-1 ring-white/10`}
      >
        <span>
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            text || fileName
          )}
        </span>
        <ChevronRight className="w-4 h-4" />
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default DownloadButton;
