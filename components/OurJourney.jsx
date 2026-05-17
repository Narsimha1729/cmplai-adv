"use client";

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

const ROW_SIZE = 3;

function MilestoneCard({ item, index, compact }) {
  return (
    <article
      className={`relative flex flex-col w-full mx-auto ${
        compact ? "max-w-[220px] sm:max-w-[240px]" : "max-w-[260px] lg:max-w-[280px]"
      }`}
    >
      <div className="flex justify-center mb-2 lg:mb-3">
        <span className="relative z-10 flex h-8 w-8 lg:h-9 lg:w-9 items-center justify-center rounded-full bg-white border-4 border-teal-500 shadow-md">
          <span className="text-[10px] lg:text-xs font-bold text-teal-700">
            {index + 1}
          </span>
        </span>
      </div>
      <div className="flex-1 bg-white rounded-2xl border border-teal-100 p-4 sm:p-5 lg:p-6 text-left shadow-md hover:shadow-lg hover:border-teal-300 transition-all duration-300 h-full">
        <div className="flex items-center gap-2 mb-2 lg:mb-3 text-xs sm:text-sm font-semibold text-teal-600">
          <CalendarDays className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0" />
          <span>{item.date}</span>
        </div>
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-1.5 lg:mb-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function HorizontalConnector({ reverse }) {
  return (
    <div
      className={`hidden lg:flex items-center shrink-0 self-center mt-5 px-0.5 text-teal-400 ${
        reverse ? "flex-row-reverse" : ""
      }`}
      aria-hidden
    >
      <div className="w-5 xl:w-8 h-0.5 bg-gradient-to-r from-teal-300 to-teal-500" />
      <div
        className={`w-0 h-0 border-y-[4px] border-y-transparent ${
          reverse
            ? "border-r-[7px] border-r-teal-500"
            : "border-l-[7px] border-l-teal-500"
        }`}
      />
    </div>
  );
}

function SnakeTurn({ alignRight }) {
  return (
    <div
      className={`hidden lg:flex w-full max-w-4xl xl:max-w-5xl mx-auto ${
        alignRight
          ? "justify-end pr-[6%] xl:pr-[8%]"
          : "justify-start pl-[6%] xl:pl-[8%]"
      }`}
      aria-hidden
    >
      <svg
        width="36"
        height="44"
        viewBox="0 0 40 48"
        fill="none"
        className={`text-teal-400 shrink-0 ${alignRight ? "" : "scale-x-[-1]"}`}
      >
        <path
          d="M20 0 V22 H34 V48"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 42 L34 48 L40 42"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function MobileSnakeTimeline() {
  return (
    <div className="lg:hidden max-w-md mx-auto w-full px-1">
      {milestones.map((item, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div key={item.title} className="relative">
            {index > 0 && (
              <div
                className={`flex h-10 items-start ${
                  isLeft ? "justify-end pr-[18%]" : "justify-start pl-[18%]"
                }`}
                aria-hidden
              >
                <svg
                  width="28"
                  height="40"
                  viewBox="0 0 28 40"
                  fill="none"
                  className={`text-teal-300 ${isLeft ? "scale-x-[-1]" : ""}`}
                >
                  <path
                    d="M14 0 V18 H24 V40"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
            <div className={`flex ${isLeft ? "justify-start" : "justify-end"}`}>
              <div className="w-[88%] max-w-[300px]">
                <MilestoneCard item={item} index={index} compact />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function OurJourney() {
  const rows = [];
  for (let i = 0; i < milestones.length; i += ROW_SIZE) {
    rows.push(milestones.slice(i, i + ROW_SIZE));
  }

  return (
    <section
      className="bg-[#f1fcfc] py-24 px-4 overflow-x-hidden overflow-y-visible"
      id="journey"
    >
      <div className="max-w-6xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
          Our Journey
        </h2>
        <p className="text-gray-600 mt-3">Key milestones in our growth story</p>
      </div>

      {/* Desktop snake: 1→2→3, turn, 4←5←6, turn, 7 */}
      <div
        className="hidden lg:block max-w-4xl xl:max-w-5xl mx-auto w-full overflow-x-hidden"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {rows.map((row, rowIndex) => {
          const reverse = rowIndex % 2 === 1;
          const startIndex = rowIndex * ROW_SIZE;
          const partialEnd =
            row.length < ROW_SIZE && rowIndex > 0 && rowIndex % 2 === 0;

          return (
            <div key={`snake-row-${rowIndex}`} className="w-full">
              {rowIndex > 0 && (
                <SnakeTurn alignRight={(rowIndex - 1) % 2 === 0} />
              )}

              <div
                className={`flex items-start w-full overflow-x-hidden ${
                  reverse ? "flex-row-reverse" : ""
                } ${partialEnd ? "justify-end" : "justify-center"}`}
              >
                {row.map((item, colIndex) => {
                  const isLastInRow = colIndex === row.length - 1;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start shrink min-w-0"
                    >
                      <MilestoneCard
                        item={item}
                        index={startIndex + colIndex}
                        compact
                      />
                      {!isLastInRow && (
                        <HorizontalConnector reverse={reverse} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div data-aos="fade-up" data-aos-delay="100">
        <MobileSnakeTimeline />
      </div>
    </section>
  );
}

