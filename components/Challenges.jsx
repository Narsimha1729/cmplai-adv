"use client";

import { AlertTriangle, ShieldCheck, FileWarning } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Manual, Error-Prone Processes",
    desc: "Preparing, reviewing, and managing thousands of compliance documents manually leads to significant errors, inefficiencies, and compliance risks, with each plant spending over 100,000 hours annually on documentation.",
  },
  {
    icon: FileWarning,
    title: "Complex, Evolving Regulations",
    desc: "Keeping up with rapidly changing global regulatory requirements (GMP, ISO, US-FDA, etc.) is difficult, often resulting in delays and increased risk of non-compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Audit Readiness and Data Integrity",
    desc: "Maintaining complete, accurate, and up-to-date documentation for audits is challenging, especially with legacy systems and manual data entry that threaten data integrity.",
  },
];

export default function ChallengesWeAddress() {
  return (
    <section className="section-elevated py-28 px-4 border-t border-white/5" id="challenges">
      <div className="max-w-6xl mx-auto text-center">
        <p className="label-caps mb-4" data-aos="fade-up">
          The problem
        </p>
        <h2 className="heading-lg mb-4" data-aos="fade-up" data-aos-delay="50">
          Challenges We Address
        </h2>
        <p className="text-body mb-14 max-w-2xl mx-auto text-sm" data-aos="fade-up" data-aos-delay="100">
          Common compliance pain points faced by pharmaceutical and manufacturing companies
        </p>

        <div className="grid gap-6 md:grid-cols-3" data-aos="fade-up" data-aos-delay="150">
          {challenges.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="card-dark px-6 py-8 text-center"
                data-aos="fade-up"
                data-aos-delay={200 + i * 80}
              >
                <div className="flex justify-center mb-5">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] w-12 h-12 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-body text-sm text-left">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
