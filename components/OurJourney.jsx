"use client";

import { Fragment } from "react";
import { CalendarDays } from "lucide-react";

const milestones = [
  {
    date: "November 2024",
    title: "Company Registration",
    description:
      "LN Infosphere TechTransformers Pvt Ltd officially registered",
  },
  {
    date: "January 2025",
    title: "iTIC IITH Incubation",
    description: "Incubated at iTIC IIT Hyderabad",
  },
  {
    date: "February 2025",
    title: "IITM Incubation",
    description: "Incubated at IITM Incubation Cell",
  },
  {
    date: "March 2025",
    title: "Grant Received",
    description: "Received grant of 4 lakhs from iTIC",
  },
  {
    date: "April 2025",
    title: "VS Prasad Best Thesis Award",
    description: "Received VS Prasad Best Thesis Award",
  },
  {
    date: "October 2025",
    title: "Pitch to Win Pharma 4.0",
    description: "Winner at Pitch to Win Pharma 4.0",
  },
  {
    date: "January 2026",
    title: "American Express Grant",
    description: "Received 11 lakh grant from American Express",
  },
];

function MilestoneCard({ item, index }) {
  return (
    <article className="flex flex-col h-full w-full">
      <div className="flex justify-center mb-3">
        <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border-4 border-teal-500 shadow-md">
          <span className="text-xs font-bold text-teal-700">{index + 1}</span>
        </span>
      </div>
      <div className="flex-1 bg-white rounded-2xl border border-teal-100 p-5 sm:p-6 text-left shadow-md hover:shadow-lg hover:border-teal-300 transition-all duration-300 min-h-[168px]">
        <div className="flex items-center gap-2 mb-3 text-sm font-semibold text-teal-600">
          <CalendarDays className="w-4 h-4 shrink-0" />
          <span>{item.date}</span>
        </div>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </article>
  );
}

function HorizontalArrow({ direction }) {
  return (
    <div
      className="hidden lg:flex items-center justify-center self-center mt-6 h-9"
      aria-hidden
    >
      <svg
        width="48"
        height="12"
        viewBox="0 0 48 12"
        className="text-teal-400 w-10 xl:w-12"
      >
        {direction === "right" ? (
          <>
            <line x1="0" y1="6" x2="38" y2="6" stroke="currentColor" strokeWidth="2" />
            <path d="M38 1 L46 6 L38 11" fill="currentColor" />
          </>
        ) : (
          <>
            <line x1="10" y1="6" x2="48" y2="6" stroke="currentColor" strokeWidth="2" />
            <path d="M10 1 L2 6 L10 11" fill="currentColor" />
          </>
        )}
      </svg>
    </div>
  );
}

function VerticalTurn({ side }) {
  return (
    <div
      className={`hidden lg:flex h-14 w-full max-w-4xl mx-auto ${
        side === "right" ? "justify-end pr-[10%]" : "justify-start pl-[10%]"
      }`}
      aria-hidden
    >
      <svg
        width="44"
        height="52"
        viewBox="0 0 44 52"
        fill="none"
        className={`text-teal-400 ${side === "left" ? "scale-x-[-1]" : ""}`}
      >
        <path
          d="M22 0 V20 H36 V52"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30 46 L36 52 L42 46"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function SnakeRow({ items, startIndex, direction }) {
  const ordered = direction === "left" ? [...items].reverse() : items;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-y-8 lg:gap-y-0 gap-x-0 items-start max-w-4xl mx-auto w-full">
      {ordered.map((item, i) => {
        const milestoneIndex =
          direction === "left"
            ? startIndex + (items.length - 1 - i)
            : startIndex + i;

        return (
          <Fragment key={item.title}>
            <MilestoneCard item={item} index={milestoneIndex} />
            {i < ordered.length - 1 && (
              <HorizontalArrow direction={direction} />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}

export default function OurJourney() {
  const row1 = milestones.slice(0, 3);
  const row2 = milestones.slice(3, 6);
  const row3 = milestones.slice(6);

  return (
    <section
      className="bg-[#f1fcfc] py-24 px-4 overflow-x-hidden"
      id="journey"
    >
      <div className="max-w-6xl mx-auto text-center mb-14" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
          Our Journey
        </h2>
        <p className="text-gray-600 mt-3">Key milestones in our growth story</p>
      </div>

      <div
        className="hidden lg:block max-w-5xl mx-auto space-y-0"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <SnakeRow items={row1} startIndex={0} direction="right" />
        <VerticalTurn side="right" />
        <SnakeRow items={row2} startIndex={3} direction="left" />
        <VerticalTurn side="right" />
        <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-start max-w-4xl mx-auto w-full">
          <div aria-hidden />
          <div aria-hidden />
          <div aria-hidden />
          <div aria-hidden />
          <MilestoneCard item={row3[0]} index={6} />
        </div>
      </div>

      <div
        className="lg:hidden max-w-md mx-auto relative px-2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-teal-200 via-teal-400 to-teal-200" />
        <ul className="space-y-10">
          {milestones.map((item, index) => (
            <li key={item.title} className="relative flex justify-center">
              <span className="absolute left-1/2 -translate-x-1/2 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white border-[3px] border-teal-500 shadow-sm">
                <span className="text-xs font-bold text-teal-700">
                  {index + 1}
                </span>
              </span>
              <div className="w-full max-w-[320px] pt-1">
                <article className="bg-white rounded-2xl border border-teal-100 p-5 shadow-md text-left">
                  <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-teal-600">
                    <CalendarDays className="w-4 h-4 shrink-0" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
