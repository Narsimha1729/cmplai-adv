'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative w-full bg-white py-24 px-4 text-center overflow-hidden">
      {/* Optional background glow or blur effect */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-100 blur-3xl rounded-full opacity-30 z-0"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-100 blur-3xl rounded-full opacity-30 z-0"></div>

      <div className="relative max-w-4xl mx-auto z-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500 leading-tight animate-fade-in-up"
          data-aos="fade-up"
        >
          <br />
          Compliance through <br />
          automation of document preparation
        </h1>

        <p
          className="mt-6 text-lg text-gray-600 animate-fade-in-up delay-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Our AI-powered platform reduces compliance document preparation time from months to days
        </p>

        <button
          className="mt-10 bg-teal-500 hover:bg-cyan-600 text-white px-8 py-3 text-lg rounded-md shadow-md transition duration-300 hover:scale-105 hover:shadow-lg animate-bounce-slow"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore →
        </button>
      </div>
    </section>
  );
}
