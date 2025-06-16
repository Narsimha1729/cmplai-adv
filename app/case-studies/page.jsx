export const metadata = {
  title: "Case Studies – Cmplai",
  description: "Explore how leading pharma and manufacturing companies achieved compliance success with Cmplai.",
};

import Link from "next/link";

const studies = [
  {
    company: "PharmaNova Labs",
    outcome: "Reduced document prep time by 68%",
    summary: "Using Cmplai's AI platform, PharmaNova automated SOP creation, improved audit readiness, and saved over 1,200 hours per plant per year.",
  },
  {
    company: "Medix Manufacturing",
    outcome: "Achieved 100% FDA audit compliance",
    summary: "By leveraging Cmplai’s built-in compliance logic, Medix streamlined QMS document flows and passed an unannounced audit with zero observations.",
  },
  {
    company: "BioEdge Therapeutics",
    outcome: "Saved ₹24L annually on manual compliance",
    summary: "Cmplai helped eliminate repetitive documentation across plants, allowing BioEdge to reallocate staff to strategic QA tasks.",
  },
];

export default function CaseStudies() {
  return (
    <main className="px-6 py-24 bg-[#f9fefe] text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            Case Studies
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Real-world impact of Cmplai across pharma & manufacturing industries
          </p>
        </div>

        {/* Grid of Studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studies.map((study, i) => (
            <div
              key={i}
              className="bg-white border hover:border-teal-400 shadow-md hover:shadow-xl p-6 rounded-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {study.company}
              </h3>
              <p className="text-teal-600 font-medium mb-2">{study.outcome}</p>
              <p className="text-gray-600 text-sm">{study.summary}</p>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-teal-500 hover:bg-cyan-600 text-white font-semibold rounded-md shadow-md transition"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
