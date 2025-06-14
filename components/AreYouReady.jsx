"use client";
import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function AreYouReady() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Wait until after hydration

  return (
    <div className="relative h-screen flex items-center justify-center text-white text-center overflow-hidden">
      <AnimatedBackground />

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="z-10 px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Are You Ready to Accelerate Your Business?
        </h1>
        <p className="mt-2 text-lg text-gray-200 mb-8">
          Join the companies that have transformed their compliance processes and saved thousands of hours
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-full sm:w-auto rounded-md 
                       bg-white text-[#00b4bc] placeholder:text-[#7ddde3] 
                       border border-teal-200 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button className="px-6 py-3 bg-white text-teal-700 hover:bg-teal-100 transition font-semibold rounded-md shadow-md">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}
