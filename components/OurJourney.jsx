"use client";

import { CalendarDays } from "lucide-react";

const milestones = [
  {
    date: "November 2024",
    title: "Company Registration",
    description: "LN Infosphere TechTransformers Pvt Ltd officially registered",
    side: "right",
  },
  {
    date: "January 2025",
    title: "iTIC IITH Incubation",
    description: "Incubated at iTIC IIT Hyderabad",
    side: "left",
  },
  {
    date: "February 2025",
    title: "IITM Incubation",
    description: "Incubated at IITM Incubation Cell",
    side: "right",
  },
  {
    date: "March 2025",
    title: "Grant Received",
    description: "Received grant of 4 lakhs from iTIC",
    side: "left",
  },
];

export default function OurJourney() {
  return (
    <section className="bg-[#f1fcfc] py-24 px-4 text-center" id="journey">
      <h2
        className="text-4xl font-extrabold text-[#00b4bc] mb-2"
        data-aos="fade-up"
      >
        Our Journey
      </h2>
      <p
        className="text-gray-600 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Key milestones in our growth story
      </p>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Dotted Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted border-[#00b4bc] z-0" />

        {milestones.map((item, index) => (
          <div
            key={index}
            className={`relative w-full md:w-1/2 px-4 py-10 ${
              item.side === "left"
                ? "text-right md:pr-10 ml-auto"
                : "text-left md:pl-10 mr-auto"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Dot on the line, outside the card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-4 border-[#00b4bc] rounded-full z-10 shadow-md" />

            {/* Card */}
            <div
              className="group bg-white rounded-xl border border-transparent hover:border-teal-400
                         hover:bg-teal-50 shadow-md hover:shadow-xl transform transition-all 
                         hover:scale-[1.02] p-6 text-left md:text-inherit relative z-20"
            >
              <div className="flex items-center gap-2 mb-2 text-sm font-medium text-[#00b4bc]">
                <CalendarDays className="w-5 h-5" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-black mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm text-justify">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
