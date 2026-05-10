import React from "react";

const partners = [
  "/logos/iith.png",
  "/logos/iitm.png",
  "/logos/meity.png",
  "/logos/ust.png",
  "/logos/pfizer.png",
];

export default function PartnersScroll() {
  return (
    <section className="w-full bg-white py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          Recognized & Supported By
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Trusted Innovation Ecosystem
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Fade Left */}
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent z-10" />

        {/* Gradient Fade Right */}
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex animate-scroll whitespace-nowrap">
          {[...partners, ...partners].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-12 min-w-[180px]"
            >
              <img
                src={logo}
                alt="partner-logo"
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300 opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
