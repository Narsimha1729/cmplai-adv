export const metadata = {
  title: "Documentation – Cmplai",
  description: "Step-by-step guides, how-tos, and API documentation for using Cmplai's compliance platform.",
};

import Link from "next/link";

const docs = [
  {
    title: "Getting Started",
    summary: "Set up your Cmplai account, onboard your team, and configure compliance templates.",
    link: "#getting-started",
  },
  {
    title: "Document Automation",
    summary: "Learn how to auto-generate SOPs, validation protocols, and QMS documents using GenAI.",
    link: "#document-automation",
  },
  {
    title: "Compliance Logic",
    summary: "Understand how Cmplai applies GMP, ISO, and FDA rules in its automation pipeline.",
    link: "#compliance-logic",
  },
  {
    title: "Audit Readiness",
    summary: "Keep your documentation audit-ready at all times with version control and digital logs.",
    link: "#audit-readiness",
  },
  {
    title: "API Reference",
    summary: "Explore our API endpoints for integrating with your MES, ERP, or QMS systems.",
    link: "#api-reference",
  },
];

export default function DocumentationPage() {
  return (
    <main className="px-6 py-24 bg-[#f9fefe] text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            Documentation
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Everything you need to implement and succeed with Cmplai
          </p>
        </div>

        {/* Docs Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {docs.map((doc, i) => (
            <a
              key={i}
              href={doc.link}
              className="block bg-white border hover:border-teal-400 shadow-md hover:shadow-lg p-6 rounded-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-600 text-sm">{doc.summary}</p>
            </a>
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
