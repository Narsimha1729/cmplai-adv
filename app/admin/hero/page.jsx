"use client";

import { useState } from "react";

export default function HeroEditor() {
  const [form, setForm] = useState({
    heading: "Are You Ready to Accelerate Your Business?",
    subtext: "Join the companies that have transformed their compliance processes and saved thousands of hours",
    buttonLabel: "Schedule a Demo",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Save the data to DB, file, or API
    alert("Hero section updated successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">
        Edit Hero Section
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Heading
          </label>
          <input
            type="text"
            name="heading"
            value={form.heading}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Subtext
          </label>
          <textarea
            name="subtext"
            value={form.subtext}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Button Label
          </label>
          <input
            type="text"
            name="buttonLabel"
            value={form.buttonLabel}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
