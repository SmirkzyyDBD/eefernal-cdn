"use client";

import { useState, useEffect } from "react";

export default function AdBanner() {
  const videos = ["/zeitg.webm", "/zgbanner.webm"];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 19800); // Change video every 19.8s

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <div className="mt-8 w-[728px] h-[90px] mx-auto z-[999]">
      <div className="relative">
        <video
          src={videos[currentVideoIndex]}
          autoPlay
          loop
          muted
          className="w-full rounded-md max-h-48 object-cover shadow-md shadow-black/20"
        />
        <div className="absolute top-2 right-2 bg-black/50 px-2 py-0.5 rounded text-white text-xs font-medium">
          Advertisement
        </div>
      </div>
    </div>
  );
}
