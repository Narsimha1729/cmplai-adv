export const metadata = {
  title: "Cookie Policy – Cmplai",
  description: "Understand how Cmplai uses cookies to enhance your user experience.",
};

import Link from "next/link";

export default function CookiePolicy() {
  return (
    <main className="px-6 py-24 bg-[#f9fefe] text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            Cookie Policy
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            How and why we use cookies on Cmplai.com
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-6 text-justify text-[16px] leading-relaxed">
          <p>
            This Cookie Policy explains how{" "}
            <strong className="text-teal-600">Cmplai</strong> uses cookies and
            similar technologies to recognize you when you visit our website. It
            explains what these technologies are and why we use them.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">1. What Are Cookies?</h2>
          <p>
            Cookies are small data files placed on your computer or mobile device
            when you visit a website. They are widely used to “remember” you and
            your preferences.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">2. How We Use Cookies</h2>
          <p>
            We use cookies to enhance site functionality, improve performance, and
            analyze traffic. Cookies help us understand which parts of our website
            are the most useful and engaging.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">3. Your Choices</h2>
          <p>
            You have the right to accept or reject cookies. Most browsers allow you
            to control cookies through their settings. Note that disabling cookies
            may affect the usability of some parts of the site.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">4. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We encourage you to
            review it periodically for the latest information.
          </p>

          <p className="text-sm text-gray-500 mt-8">
            Last updated: June 2025
          </p>
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
