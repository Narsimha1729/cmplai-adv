'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative w-full bg-white py-24 px-4 text-center overflow-hidden"
    >
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-100 blur-3xl rounded-full opacity-30 z-0" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-100 blur-3xl rounded-full opacity-30 z-0" />

      <div className="relative max-w-4xl mx-auto z-10">
        <p
          className="text-sm font-semibold tracking-widest text-teal-600 uppercase mb-4"
          data-aos="fade-up"
        >
          Our vision
        </p>
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500 leading-tight"
          data-aos="fade-up"
          data-aos-delay="80"
        >
          Zero Documentation
          <br />
          Pharma Plants.
        </h1>

        <p
          className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          AI-generated GMP documentation, validated in real time against live
          regulatory rules — so your plants stay inspection-ready, every hour of
          every day.
        </p>

        <a
          href="#pillars"
          className="inline-block mt-10 bg-teal-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg rounded-md shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore →
        </a>
      </div>
    </section>
  );
}
