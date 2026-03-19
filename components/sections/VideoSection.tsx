"use client";

import { useState, useRef } from "react";

const videos = [
  {
    src: "/Video_prezentacija.mp4",
    title: "Karseell Set – Video Prezentacija",
  },
  {
    src: "/karseell_maska.mp4",
    title: "Karseell Maska, Šampon & Ulje",
  },
];

export default function VideoSection() {
  const [active, setActive] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelect = (index: number) => {
    setActive(index);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  };

  return (
    <section className="bg-[#fdf6f8] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-[#4a1e30] text-center mb-2">
          Video prezentacije
        </h2>
        <p className="text-center text-[#c4788c] font-semibold mb-10">
          Pogledajte Karseell proizvode u akciji
        </p>

        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
          {/* Main video player – portrait 9:16 */}
          <div className="flex flex-col items-center w-full lg:w-auto">
            <div
              className="rounded-2xl overflow-hidden shadow-xl bg-black w-full max-w-xs mx-auto"
              style={{ aspectRatio: "9/16" }}
            >
              <video
                ref={videoRef}
                key={videos[active].src}
                src={videos[active].src}
                controls
                autoPlay
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
            <p className="mt-4 text-center text-[#4a1e30] font-bold text-base">
              {videos[active].title}
            </p>
          </div>

          {/* Thumbnail list – portrait thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3 w-full lg:w-auto lg:max-w-[200px]">
            {videos.map((video, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`rounded-xl overflow-hidden border-2 transition-all duration-200 text-left group ${
                  active === i
                    ? "border-[#c4788c] shadow-lg scale-[1.02]"
                    : "border-transparent hover:border-[#e8a8b8]"
                }`}
              >
                <div
                  className="bg-[#4a1e30] relative"
                  style={{ aspectRatio: "9/16" }}
                >
                  <video
                    src={video.src}
                    muted
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition-colors">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        active === i ? "bg-[#c4788c]" : "bg-white/80"
                      }`}
                    >
                      <svg
                        className={`w-3.5 h-3.5 ml-0.5 ${
                          active === i ? "text-white" : "text-[#4a1e30]"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white px-2 py-1.5">
                  <p className="text-[10px] font-semibold text-[#4a1e30] line-clamp-2 leading-tight">
                    {video.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
