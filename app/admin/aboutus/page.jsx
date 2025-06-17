"use client";

import { useState } from "react";

export default function AboutUsEditor() {
  const [form, setForm] = useState({
    heading: "About Us",
    subheading: "Our mission and vision",
    title: "Transforming Compliance Through Innovation",
    paragraph1:
      "At Cmplai, we're on a mission to revolutionize how pharmaceutical and manufacturing companies handle compliance documentation. Founded by industry experts with decades of experience, we understand the challenges organizations face with regulatory compliance.",
    paragraph2:
      "Our team combines deep domain expertise in pharmaceutical compliance with cutting-edge AI technology to create solutions that dramatically reduce the time, cost, and risk associated with compliance documentation.",
    paragraph3:
      "We believe that by automating the most tedious aspects of compliance, we can free up human talent to focus on innovation and quality improvement — ultimately leading to better products and services for consumers worldwide.",
    image: "/aboutus.webp", // image path from public/
  });

  const handleChange = (key, value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved:", form);
    alert("About Us section saved! (Demo only)");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">About Us Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Heading & Subheading */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Main Heading</label>
            <input
              type="text"
              value={form.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Subheading</label>
            <input
              type="text"
              value={form.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Image Path */}
        <div>
          <label className="block font-semibold mb-1">Image Path (public/)</label>
          <input
            type="text"
            value={form.image}
            onChange={(e) => handleChange("image", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
          <p className="text-sm text-gray-500 mt-1">
            Example: /aboutus.webp (place image in <code>/public</code> folder)
          </p>
        </div>

        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Paragraphs */}
        <div>
          <label className="block font-semibold mb-1">Paragraph 1</label>
          <textarea
            rows={3}
            value={form.paragraph1}
            onChange={(e) => handleChange("paragraph1", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Paragraph 2</label>
          <textarea
            rows={3}
            value={form.paragraph2}
            onChange={(e) => handleChange("paragraph2", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Paragraph 3</label>
          <textarea
            rows={3}
            value={form.paragraph3}
            onChange={(e) => handleChange("paragraph3", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4 text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded hover:opacity-90"
          >
            Save About Section
          </button>
        </div>
      </form>
    </div>
  );
}
