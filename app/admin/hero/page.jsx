"use client";

import { useState } from "react";

export default function HeroEditor() {
  const [form, setForm] = useState({
    heading: `Transforming the future of \nCompliance through \nautomation of document preparation`,
    subtext:
      "Our AI-powered platform reduces compliance document preparation time from months to days",
    button: "Explore →",
    bgGlow: true,
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hero section saved! (demo)");
    // Save to DB or local file if needed
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Hero Section Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Heading */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Main Heading</label>
          <textarea
            value={form.heading}
            onChange={(e) => handleChange("heading", e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Subtext */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Subtext</label>
          <textarea
            value={form.subtext}
            onChange={(e) => handleChange("subtext", e.target.value)}
            rows={2}
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Button Label */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Button Label</label>
          <input
            type="text"
            value={form.button}
            onChange={(e) => handleChange("button", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Toggle Glow */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.bgGlow}
            onChange={(e) => handleChange("bgGlow", e.target.checked)}
          />
          <span className="text-gray-700">Show background glow?</span>
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90 transition"
          >
            Save Hero Section
          </button>
        </div>
      </form>
    </div>
  );
}
