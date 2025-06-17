"use client";

import { useState } from "react";

export default function ContactEditor() {
  const [form, setForm] = useState({
    heading: "Contact Us",
    subheading: "We’d love to hear from you",
    headingColor: "#0f766e",
    subColor: "#4b5563",
    headingSize: "40px",
    subSize: "18px",
    headingGradient: true,

    address: "LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India",
    phone: "+91 6301985408",
    email: "admin@cmplai.com",
    hoursWeek: "Monday - Friday: 9:00 AM - 6:00 PM",
    hoursWeekend: "Saturday - Sunday: Closed",
    buttonText: "Send Message",
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📬 Saved contact settings:", form);
    alert("✅ Contact settings saved (Demo only)");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">📩 Contact Section Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Heading */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Heading</label>
          <input
            value={form.heading}
            onChange={(e) => handleChange("heading", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
          <div className="grid grid-cols-3 gap-3 mt-2">
            <input
              type="color"
              value={form.headingColor}
              onChange={(e) => handleChange("headingColor", e.target.value)}
            />
            <input
              type="number"
              value={parseInt(form.headingSize)}
              onChange={(e) => handleChange("headingSize", e.target.value + "px")}
              className="border px-2 rounded"
            />
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={form.headingGradient}
                onChange={(e) => handleChange("headingGradient", e.target.checked)}
              />
              Gradient Text
            </label>
          </div>
        </div>

        {/* Subheading */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Subheading</label>
          <input
            value={form.subheading}
            onChange={(e) => handleChange("subheading", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
          <div className="grid grid-cols-2 gap-3 mt-2">
            <input
              type="color"
              value={form.subColor}
              onChange={(e) => handleChange("subColor", e.target.value)}
            />
            <input
              type="number"
              value={parseInt(form.subSize)}
              onChange={(e) => handleChange("subSize", e.target.value + "px")}
              className="border px-2 rounded"
            />
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Address</label>
            <textarea
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              rows={2}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Phone</label>
            <input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Email</label>
            <input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Business Hours */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Weekdays</label>
            <input
              value={form.hoursWeek}
              onChange={(e) => handleChange("hoursWeek", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-1">Weekends</label>
            <input
              value={form.hoursWeekend}
              onChange={(e) => handleChange("hoursWeekend", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>

        {/* Button Label */}
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Submit Button Text</label>
          <input
            value={form.buttonText}
            onChange={(e) => handleChange("buttonText", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Submit */}
        <div className="pt-4 text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90 transition"
          >
            Save Contact Section
          </button>
        </div>
      </form>
    </div>
  );
}
