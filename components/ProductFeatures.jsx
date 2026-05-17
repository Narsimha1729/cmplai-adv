"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const breakthroughs = [
  {
    num: "01",
    title: "Zero Document Plants",
    desc: "No manual compliance records. Every record AI-generated.",
    image: "/vision/zero-doc-pharma-plants.png",
    alt: "Zero documentation pharma plant vision",
  },
  {
    num: "02",
    title: "World's Best Pharma LLM for Documentation and compliance",
    desc: "Fine-tuned LLM benchmarked to outperform every existing model.",
    image: "/awards/meity.png",
    alt: "GenAI recognition at MeitY event",
  },
  {
    num: "03",
    title: "24/7 Internal AI Audit Agent",
    desc: "AGI-powered virtual auditor monitoring plant operations round the clock.",
    image: "/awards/ust-pharma.png",
    alt: "Pharma 4.0 audit and compliance event",
  },
  {
    num: "04",
    title: "Zero GMP Error Algorithm",
    desc: "Guarantees every AI-generated record is GMP-compliant. No exceptions.",
    image: "/vision/zero-doc.png",
    alt: "GMP compliant digital documentation",
  },
  {
    num: "05",
    title: "Five-Stream System Integration",
    desc: "Real-time validation across 5 live data inputs simultaneously.",
    image: "/awards/vsp-award.png",
    alt: "Academic excellence and innovation award",
  },
];

function stackOffset(index, active, total) {
  return (index - active + total) % total;
}

function Flashcard({ item, offset, isAnimatingBack }) {
  const isFront = offset === 0;
  const depth = Math.min(offset, 4);

  const style = {
    zIndex: 50 - depth * 10,
    transform: `translateY(${depth * 18}px) scale(${1 - depth * 0.045}) rotateX(${depth * 2.5}deg)`,
    opacity: isFront ? 1 : Math.max(0.35, 0.88 - depth * 0.14),
    pointerEvents: isFront ? "auto" : "none",
  };

  return (
    <article
      className={`absolute inset-x-0 top-0 mx-auto w-full max-w-2xl rounded-3xl border border-teal-100 bg-white shadow-2xl overflow-hidden transition-all duration-500 ease-out origin-top ${
        isFront && !isAnimatingBack ? "flashcard-float" : ""
      } ${isAnimatingBack ? "flashcard-to-back" : ""}`}
      style={style}
      aria-hidden={!isFront}
    >
      <div className="grid sm:grid-cols-2 gap-0">
        <div className="relative min-h-[200px] sm:min-h-[260px] bg-gray-100 overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/25 via-transparent to-transparent pointer-events-none" />
          <span className="absolute top-4 left-4 text-4xl sm:text-5xl font-black text-white/90 drop-shadow-md">
            {item.num}
          </span>
        </div>
        <div className="p-6 sm:p-8 flex flex-col justify-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug mb-3">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ProductFeatures() {
  const [active, setActive] = useState(0);
  const [animatingBack, setAnimatingBack] = useState(false);
  const total = breakthroughs.length;

  const goTo = useCallback(
    (index) => {
      const next = (index + total) % total;
      if (next === active) return;
      setAnimatingBack(true);
      setTimeout(() => {
        setActive(next);
        setAnimatingBack(false);
      }, 520);
    },
    [active, total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatingBack(true);
      setTimeout(() => {
        setActive((i) => (i + 1) % total);
        setAnimatingBack(false);
      }, 520);
    }, 7000);
    return () => clearInterval(timer);
  }, [total]);

  const slide = breakthroughs[active];

  return (
    <section
      id="product"
      className="relative py-24 px-4 bg-gradient-to-b from-white via-[#f0fdfd] to-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-200/40 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-teal-700 text-sm font-medium mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-teal-500" />
            What is New?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600">
            Five Industry Breakthroughs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            CmplAI introduces five breakthroughs the pharma industry has never seen before.
          </p>
        </div>

        <div
          className="relative max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Flashcard stack */}
          <div
            className="relative h-[380px] sm:h-[300px] md:h-[280px] mb-8"
            style={{ perspective: "1200px" }}
          >
            {[...breakthroughs]
              .map((item, i) => ({
                item,
                i,
                offset: stackOffset(i, active, total),
              }))
              .sort((a, b) => b.offset - a.offset)
              .map(({ item, i, offset }) => (
                <Flashcard
                  key={item.num}
                  item={item}
                  offset={offset}
                  isAnimatingBack={animatingBack && i === active}
                />
              ))}
          </div>

          {/* Controls */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={prev}
                disabled={animatingBack}
                className="p-2.5 rounded-full border border-teal-200 text-teal-700 hover:bg-teal-50 transition-colors disabled:opacity-50"
                aria-label="Previous breakthrough"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="text-center min-w-[200px] px-2">
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">
                  {slide.num} / 05
                </p>
                <p className="text-sm font-bold text-gray-900 mt-0.5 line-clamp-1">
                  {slide.title}
                </p>
              </div>

              <button
                type="button"
                onClick={next}
                disabled={animatingBack}
                className="p-2.5 rounded-full border border-teal-200 text-teal-700 hover:bg-teal-50 transition-colors disabled:opacity-50"
                aria-label="Next breakthrough"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-2.5">
              {breakthroughs.map((item, i) => (
                <button
                  key={item.num}
                  type="button"
                  onClick={() => goTo(i)}
                  disabled={animatingBack}
                  aria-label={`Go to breakthrough ${item.num}`}
                  aria-current={i === active ? "true" : undefined}
                  className={`rounded-full transition-all duration-300 disabled:opacity-50 ${
                    i === active
                      ? "w-8 h-2.5 bg-teal-600"
                      : "w-2.5 h-2.5 bg-teal-300 hover:bg-teal-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

