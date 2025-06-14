"use client";

import { Sparkles, Target, Globe2 } from "lucide-react";

const points = [
  {
    icon: <Sparkles className="w-6 h-6 text-teal-600" />,
    title: "Industry-First GenAI Automation",
    desc: "Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>. Our <strong>GenAI-powered</strong> SaaS ERP platform minimizes manual intervention and errors, ensuring unmatched accuracy and regulatory adherence.",
  },
  {
    icon: <Target className="w-6 h-6 text-teal-600" />,
    title: "Purpose-Built for Pharma & Manufacturing",
    desc: "We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, <strong>US-FDA</strong>, and other global standards, so your documentation is always audit-ready and meets the strictest requirements.",
  },
  {
    icon: <Globe2 className="w-6 h-6 text-teal-600" />,
    title: "Empowering Your Workforce",
    desc: "We reduce <strong>repetitive manual tasks</strong>, allowing your teams to focus on <strong>high-value work</strong> like innovation and quality enhancement, leading to better resource allocation and job satisfaction.",
  },
];

export default function Chooseus() {
  return (
    <section className="py-24 px-4 bg-white" id="why-us">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-4"
          data-aos="fade-up"
        >
          Why Choose Us?
        </h2>
        <p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover how Cmplai transforms compliance processes
        </p>

        <div className="grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {points.map((point, i) => (
            <div
              key={i}
              className="group bg-white text-center px-6 py-8 rounded-xl border border-transparent
                         hover:border-teal-500 hover:bg-teal-50
                         shadow-md hover:shadow-xl 
                         transform transition-all duration-300 hover:scale-[1.03] cursor-default"
              data-aos="zoom-in"
              data-aos-delay={300 + i * 100}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-teal-50 group-hover:bg-teal-100 transition duration-300 rounded-full w-12 h-12 flex items-center justify-center">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition">
                {point.title}
              </h3>
              <p
                className="text-gray-600 text-sm leading-relaxed text-justify transition-all"
                dangerouslySetInnerHTML={{ __html: point.desc }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
