"use client";

import { AlertTriangle, ShieldCheck, FileWarning } from "lucide-react";

const challenges = [
  {
    icon: <AlertTriangle className="w-6 h-6 text-teal-600" />,
    title: "Manual, Error-Prone Processes",
    desc: "Preparing, reviewing, and managing thousands of compliance documents manually leads to significant errors, inefficiencies, and compliance risks, with each plant spending over 100,000 hours annually on documentation.",
  },
  {
    icon: <FileWarning className="w-6 h-6 text-teal-600" />,
    title: "Complex, Evolving Regulations",
    desc: "Keeping up with rapidly changing global regulatory requirements (GMP, ISO, US-FDA, etc.) is difficult, often resulting in delays and increased risk of non-compliance.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
    title: "Audit Readiness and Data Integrity",
    desc: "Maintaining complete, accurate, and up-to-date documentation for audits is challenging, especially with legacy systems and manual data entry that threaten data integrity.",
  },
];

export default function ChallengesWeAddress() {
  return (
    <section className="py-24 px-4 bg-gray-50" id="challenges">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 mb-4" data-aos="fade-up">
          Challenges We Address
        </h2>
        <p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Common compliance pain points faced by pharmaceutical and manufacturing companies
        </p>

        <div className="grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {challenges.map((item, i) => (
            <div
              key={i}
              className="group bg-white px-6 py-8 rounded-xl border border-transparent text-center
                         hover:border-teal-400 hover:bg-teal-50 shadow-sm hover:shadow-lg
                         transform transition-all duration-300 hover:scale-[1.03] cursor-default"
              data-aos="zoom-in"
              data-aos-delay={300 + i * 100}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-teal-50 group-hover:bg-teal-100 transition duration-300 rounded-full w-12 h-12 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
