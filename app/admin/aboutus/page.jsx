"use client";

import { useState } from "react";

export default function AboutUsEditor() {
  const [form, setForm] = useState({
    heading: "About Us",
    headingFont: "Poppins",
    headingSize: "36px",
    headingColor: "#0f766e",
    headingGradient: true,

    subheading: "Our mission and vision",
    subFont: "Inter",
    subSize: "18px",
    subColor: "#4b5563",

    mediaType: "image", // 'image' or 'video'
    mediaURL: "/aboutus.webp",

    title: "Transforming Compliance Through Innovation",
    paragraphs: [
      "At Cmplai, we're on a mission to revolutionize how pharmaceutical and manufacturing companies handle compliance documentation...",
      "Our team combines domain expertise with cutting-edge AI to reduce compliance effort...",
      "We believe automation frees teams for innovation and better outcomes...",
    ],
  });

  const handleChange = (field, value) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleParagraphChange = (index, value) => {
    const updated = [...form.paragraphs];
    updated[index] = value;
    setForm((prev) => ({ ...prev, paragraphs: updated }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 Saving:", form);
    alert("✅ About Us section saved (Demo only)");
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">🧾 About Us Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Heading & Subheading */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-1">Main Heading</label>
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
              <select
                value={form.headingFont}
                onChange={(e) => handleChange("headingFont", e.target.value)}
                className="border rounded px-2"
              >
                <option value="Poppins">Poppins</option>
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
              </select>
              <input
                type="number"
                value={parseInt(form.headingSize)}
                onChange={(e) => handleChange("headingSize", e.target.value + "px")}
                className="border px-2 rounded"
              />
            </div>
            <label className="flex items-center gap-2 mt-2 text-sm">
              <input
                type="checkbox"
                checked={form.headingGradient}
                onChange={(e) => handleChange("headingGradient", e.target.checked)}
              />
              Gradient text
            </label>
          </div>

          <div>
            <label className="block font-semibold mb-1">Subheading</label>
            <input
              value={form.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
            <div className="grid grid-cols-3 gap-3 mt-2">
              <input
                type="color"
                value={form.subColor}
                onChange={(e) => handleChange("subColor", e.target.value)}
              />
              <select
                value={form.subFont}
                onChange={(e) => handleChange("subFont", e.target.value)}
                className="border text-black rounded px-2"
              >
                <option value="Poppins">Poppins</option>
                <option value="Inter">Inter</option>
                <option value="Roboto">Roboto</option>
                <option value="Open Sans">Open Sans</option>
              </select>
              <input
                type="number"
                value={parseInt(form.subSize)}
                onChange={(e) => handleChange("subSize", e.target.value + "px")}
                className="border px-2 rounded"
              />
            </div>
          </div>
        </div>

        {/* Media Option */}
        <div>
          <label className="font-semibold block text-black mb-2">Media Type</label>
          <select
            value={form.mediaType}
            onChange={(e) => handleChange("mediaType", e.target.value)}
            className="border px-3 py-2 rounded"
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>

          <input
            type="text"
            value={form.mediaURL}
            onChange={(e) => handleChange("mediaURL", e.target.value)}
            placeholder={form.mediaType === "image" ? "Image path (public/)" : "Video URL"}
            className="w-full mt-2 border px-4 py-2 rounded"
          />

          {form.mediaType === "image" ? (
            <img
              src={form.mediaURL}
              alt="Preview"
              className="mt-4 w-60 rounded shadow border"
            />
          ) : (
            <video
              src={form.mediaURL}
              controls
              className="mt-4 w-full max-w-lg rounded shadow"
            />
          )}
        </div>

        {/* Title */}
        <div>
          <label className="block font-semibold text-black mb-1">Title Heading</label>
          <input
            value={form.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
        </div>

        {/* Paragraphs */}
        {form.paragraphs.map((para, i) => (
          <div key={i}>
            <label className="font-medium text-black mb-1 block">Paragraph {i + 1}</label>
            <textarea
              rows={3}
              value={para}
              onChange={(e) => handleParagraphChange(i, e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        ))}

        {/* Submit */}
        <div className="pt-4 text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
          >
            Save About Us Section
          </button>
        </div>
      </form>
    </div>
  );
}
