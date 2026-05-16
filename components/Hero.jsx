'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#f0fdfd] to-white"
    >
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-cyan-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute -bottom-32 -left-24 w-96 h-96 bg-teal-200/35 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-20">
        <p
          className="text-center text-sm font-semibold tracking-widest text-teal-600 uppercase mb-6"
          data-aos="fade-up"
        >
          Our vision
        </p>

        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-teal-200/80 shadow-[0_20px_60px_-15px_rgba(13,148,136,0.35)] ring-1 ring-teal-500/10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/25 via-transparent to-cyan-900/5 z-[1] pointer-events-none" />
          <img
            src="/vision/zero-doc-pharma-plants.png"
            alt="The Zero Documentation Pharma Plants — compliance assured, zero documentation, digital workflow, perfectly executed"
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            className="w-full h-auto block object-cover object-center"
          />
        </div>

        <div className="mt-10 sm:mt-12 max-w-2xl mx-auto text-center">
          <p
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            AI-generated GMP documentation, validated in real time against live
            regulatory rules — so your plants stay inspection-ready, every hour of
            every day.
          </p>

          <a
            href="#pillars"
            className="inline-block mt-8 bg-teal-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition duration-300 hover:scale-[1.02] hover:shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            Explore our pillars →
          </a>
        </div>
      </div>
    </section>
  );
}
