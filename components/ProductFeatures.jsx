"use client";

import { Sparkles } from "lucide-react";

const breakthroughs = [
  {
    num: "01",
    title: "Zero Document Plants",
    desc: "No manual compliance records. Every record AI-generated.",
  },
  {
    num: "02",
    title: "World's Best Pharma LLM for Documentation and compliance",
    desc: "Fine-tuned LLM benchmarked to outperform every existing model.",
  },
  {
    num: "03",
    title: "24/7 Internal AI Audit Agent",
    desc: "AI-powered virtual auditor monitoring plant operations round the clock.",
  },
  {
    num: "04",
    title: "Zero GMP Error Algorithm",
    desc: "Guarantees every AI-generated record is GMP-compliant. No exceptions.",
  },
  {
    num: "05",
    title: "Five-Stream System Integration",
    desc: "Real-time validation across 5 live data inputs simultaneously.",
  },
];

export default function ProductFeatures() {
  return (
    <section
      id="product"
      className="relative py-24 px-4 bg-gradient-to-br from-[#ecfeff] via-white to-teal-50 overflow-hidden"
    >
      <div className="absolute top-24 right-0 w-[280px] h-[280px] bg-cyan-200/50 blur-3xl rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-teal-200/40 blur-3xl rounded-full z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white/80 px-4 py-1.5 text-teal-700 text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-500" />
            What is New?
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-teal-700 leading-tight">
            Five Industry Breakthroughs
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            CmplAI introduces five breakthroughs the pharma industry has never
            seen before.
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
          {breakthroughs.map((item, i) => (
            <div
              key={item.num}
              className="group relative rounded-2xl border border-teal-100/90 bg-white/90 backdrop-blur-sm p-6 md:p-7 shadow-md hover:shadow-xl hover:border-teal-300/70 transition-all duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              <span className="text-4xl md:text-5xl font-black text-teal-100 select-none leading-none mb-2">
                {item.num}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed flex-1">
                {item.desc}
              </p>
              <div className="mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-500" />
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
