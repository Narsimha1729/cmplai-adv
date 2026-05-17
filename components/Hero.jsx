'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section
      id="home"
      className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-[#fafefe] pt-24 sm:pt-28 pb-12 sm:pb-14"
    >
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: 'url(/grid-pattern.svg)',
          backgroundSize: '48px 48px',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute top-20 right-0 w-[420px] h-[420px] bg-cyan-300/25 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-teal-300/20 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-teal-700 uppercase tracking-wider mb-6 shadow-sm">
            Our vision
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold tracking-tight text-gray-900 leading-[1.1]">
            <span className="block">The future of</span>
            <span className="block mt-1 bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
              Zero Documentation
            </span>
            <span className="block mt-1 text-gray-900">Pharma Plants.</span>
          </h1>

          <p className="mt-6 sm:mt-8 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            AI agents for GMP compliance — generate, validate, and audit documentation
            in real time so your plants stay inspection-ready, 24/7.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#pillars"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-full shadow-lg shadow-teal-600/30 transition-all hover:scale-[1.02]"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
            {/* <Link
              href="#product"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-gray-800 bg-white border border-gray-200 hover:border-teal-300 hover:bg-teal-50/50 rounded-full transition-all"
            >
              <Play className="w-5 h-5 text-teal-600" />
              View breakthroughs
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
