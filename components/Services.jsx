"use client";

import { FileText, Lightbulb, LifeBuoy } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "AI-Powered Compliance Document Automation",
    desc: "Automates compliance documents, speeding pharma and manufacturing workflows.",
  },
  {
    icon: Lightbulb,
    title: "Regulatory-Ready Templates & Workflows",
    desc: "Pre-built templates ensure effortless compliance with GMP, ISO, FDA standards.",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Document Lifecycle Management",
    desc: "Streamline document lifecycle for scalable, multi-industry enterprise operations.",
  },
];

export default function Services() {
  return (
    <section className="section-elevated py-28 px-4 border-t border-white/5" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <p className="label-caps mb-4" data-aos="fade-up">
          Capabilities
        </p>
        <h2 className="heading-lg mb-4" data-aos="fade-up" data-aos-delay="50">
          Our Services
        </h2>
        <p className="text-body mb-14 max-w-2xl mx-auto text-sm" data-aos="fade-up" data-aos-delay="100">
          Comprehensive compliance solutions for pharmaceutical and manufacturing industries
        </p>

        <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="150">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-dark p-8 text-left"
                data-aos="fade-up"
                data-aos-delay={200 + i * 80}
              >
                <div className="rounded-xl border border-white/10 bg-white/[0.04] w-12 h-12 flex items-center justify-center mb-5 text-cyan-400">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-body text-sm">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
