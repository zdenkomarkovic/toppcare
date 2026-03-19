"use client";

const videos = [
  {
    src: "/Toppcare3.mp4",
    title: "Topp Care – Prezentacija",
  },
  {
    src: "/karseell_rezultati.mp4",
    title: "Karseell – Rezultati",
  },
];

export default function ONamaVideos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-[#4a1e30] text-center mb-2">
          Pogledajte naše videe
        </h2>
        <p className="text-center text-[#c4788c] font-semibold mb-10">
          Ko smo i šta radimo – kroz prizmu naših kamera
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-start">
          {videos.map((video) => (
            <div key={video.src} className="flex flex-col items-center w-full sm:w-auto">
              <div
                className="rounded-2xl overflow-hidden shadow-xl bg-black w-full max-w-[260px] mx-auto"
                style={{ aspectRatio: "9/16" }}
              >
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="none"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="mt-3 text-center text-[#4a1e30] font-bold text-sm">
                {video.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
