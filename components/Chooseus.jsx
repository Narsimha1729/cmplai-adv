"use client";

import { Sparkles, Target, Globe2 } from "lucide-react";

const points = [
  {
    icon: Sparkles,
    title: "Industry-First GenAI Automation",
    desc: "Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>. Our <strong>GenAI-powered</strong> SaaS ERP platform minimizes manual intervention and errors, ensuring unmatched accuracy and regulatory adherence.",
  },
  {
    icon: Target,
    title: "Purpose-Built for Pharma & Manufacturing",
    desc: "We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, <strong>US-FDA</strong>, and other global standards, so your documentation is always audit-ready and meets the strictest requirements.",
  },
  {
    icon: Globe2,
    title: "Empowering Your Workforce",
    desc: "We reduce <strong>repetitive manual tasks</strong>, allowing your teams to focus on <strong>high-value work</strong> like innovation and quality enhancement, leading to better resource allocation and job satisfaction.",
  },
];

export default function Chooseus() {
  return (
    <section className="section-dark py-28 px-4 border-t border-white/5" id="why-us">
      <div className="max-w-6xl mx-auto text-center">
        <p className="label-caps mb-4" data-aos="fade-up">
          Why Cmplai
        </p>
        <h2 className="heading-lg mb-4" data-aos="fade-up" data-aos-delay="50">
          Why Choose Us?
        </h2>
        <p className="text-body mb-14 max-w-2xl mx-auto text-sm" data-aos="fade-up" data-aos-delay="100">
          Discover how Cmplai transforms compliance processes
        </p>

        <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="150">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="card-dark px-6 py-8 text-center"
                data-aos="fade-up"
                data-aos-delay={200 + i * 80}
              >
                <div className="flex justify-center mb-5">
                  <div className="rounded-xl border border-white/10 bg-cyan-500/10 w-12 h-12 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{point.title}</h3>
                <p
                  className="text-body text-sm text-left [&_strong]:text-zinc-200"
                  dangerouslySetInnerHTML={{ __html: point.desc }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
