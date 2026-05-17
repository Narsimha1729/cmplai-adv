"use client";

import { FileText, Lightbulb, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: <FileText className="w-6 h-6 text-teal-600" />,
    title: "AI-Powered Compliance Document Automation",
    desc: "Automates compliance documents, speeding pharma and manufacturing workflows.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-teal-600" />,
    title: "Regulatory-Ready Templates & Workflows",
    desc: "Pre-built templates ensure effortless compliance with GMP, ISO, FDA standards.",
  },
  {
    icon: <LifeBuoy className="w-6 h-6 text-teal-600" />,
    title: "End-to-End Document Lifecycle Management",
    desc: "We streamline document lifecycle, enabling scalable, multi-industry enterprise operations.",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 mb-4"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Comprehensive compliance solutions designed for the pharmaceutical and manufacturing industries
        </p>

        <div className="grid gap-8 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
          {services.map((service, i) => (
<div
  key={i}
  className="bg-white border border-transparent hover:border-teal-400 rounded-xl p-6 text-left 
             shadow-md hover:shadow-lg transform transition duration-300 ease-in-out 
             hover:scale-[1.03] cursor-pointer"
  data-aos="zoom-in"
  data-aos-delay={300 + i * 100}
>
              <div className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
