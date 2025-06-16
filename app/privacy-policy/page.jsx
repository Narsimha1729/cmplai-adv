// app/privacy-policy/page.jsx
export const metadata = {
  title: "Privacy Policy – Cmplai",
  description: "Learn how Cmplai handles your data and privacy responsibly.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#f9fefe] min-h-screen py-24 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-600 mb-6 text-center">Privacy Policy</h1>
        <p className="mb-6 text-gray-700 text-justify">
          At <strong className="text-teal-500">Cmplai</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information.
        </p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
            <p>We may collect personal information such as your name, email address, company name, and usage data.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Data</h2>
            <p>We use your data to provide services, improve our platform, and communicate with you effectively.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Data Security</h2>
            <p>We implement strict security protocols to protect your data from unauthorized access or misuse.</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Your Rights</h2>
            <p>You have the right to access, modify, or delete your data by contacting us at <a href="mailto:admin@cmplai.com" className="text-teal-500 underline">admin@cmplai.com</a>.</p>
          </div>
        </section>

        <p className="text-sm text-gray-500 mt-10 text-center">Last updated: June 2025</p>

        <div className="mt-10 text-center">
          <a href="/" className="inline-block px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-cyan-600 transition">Back to Home</a>
        </div>
      </div>
    </main>
  );
}
