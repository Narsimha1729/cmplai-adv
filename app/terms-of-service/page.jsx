export const metadata = {
  title: "Terms of Service – Cmplai",
  description: "Read the legal terms that govern your use of Cmplai's AI-powered compliance platform.",
};

import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="px-6 py-24 bg-[#f9fefe] text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            Terms of Service
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Please read these terms carefully before using our platform
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-justify text-[16px] leading-relaxed">
          <p>
            These Terms of Service (“Terms”) govern your access to and use of
            Cmplai’s website, products, and services. By using our services, you
            agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">1. Use of Our Platform</h2>
          <p>
            You agree to use Cmplai only for lawful purposes and in accordance
            with these Terms. You must not misuse our services, attempt to gain
            unauthorized access, or harm the platform in any way.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">2. Intellectual Property</h2>
          <p>
            All content, trademarks, and materials on Cmplai are owned by LN
            Infosphere TechTransformers Pvt Ltd and protected by applicable
            intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">3. Data Privacy</h2>
          <p>
            Our use of personal data is governed by our{" "}
            <Link href="/privacy-policy" className="text-teal-600 underline hover:text-cyan-600">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">4. Termination</h2>
          <p>
            We may suspend or terminate your access if you breach these Terms or
            misuse our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-900 mt-6">5. Disclaimer</h2>
          <p>
            Cmplai is provided "as is" without warranties of any kind. We are not
            liable for any loss arising from your use of the platform.
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
