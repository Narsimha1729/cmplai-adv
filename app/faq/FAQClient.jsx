"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "What is Cmplai?",
    answer:
      "Cmplai is an AI-powered compliance automation platform built for pharmaceutical and manufacturing companies. It helps automate documentation and ensures regulatory readiness.",
  },
  {
    question: "Is Cmplai compliant with GMP, FDA, and ISO standards?",
    answer:
      "Yes, Cmplai’s logic is built with global regulatory frameworks in mind, including GMP, ISO 9001, and US-FDA 21 CFR Part 11.",
  },
  {
    question: "Can I integrate Cmplai with my existing ERP or MES?",
    answer:
      "Absolutely. Cmplai provides secure API access and can integrate with common ERP, MES, and QMS platforms.",
  },
  {
    question: "How secure is my data with Cmplai?",
    answer:
      "We use enterprise-grade encryption, access control, and secure cloud infrastructure to ensure your data stays private and protected.",
  },
  {
    question: "Do you offer support or training?",
    answer:
      "Yes! We offer onboarding support, documentation, and ongoing assistance to ensure your team is successful with Cmplai.",
  },
];

export default function FAQClient() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="px-6 py-24 bg-[#f9fefe] text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Quick answers to the most common questions about Cmplai
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-6">
          {faqs.map((item, i) => (
            <div key={i} className="border border-teal-100 rounded-xl bg-white shadow-sm p-5">
              <button
                onClick={() => toggle(i)}
                className="w-full text-left flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                <span className="text-teal-600 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              {openIndex === i && (
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </p>
              )}
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
