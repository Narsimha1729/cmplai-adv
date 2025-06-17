"use client";

import { useState } from "react";

export default function HeroEditor() {
  const [form, setForm] = useState({
    heading: `Transforming the future of \nCompliance through \nautomation of document preparation`,
    subtext:
      "Our AI-powered platform reduces compliance document preparation time from months to days",
    button: "Explore →",
    bgGlow: true,
    bgColor: "#ffffff",
    useImage: false,
    imageUrl: "",
    useVideo: false,
    videoUrl: "",
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Hero section saved! (This is a demo)");
    // In production, save to DB or file system here
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
            rows={3}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Subtext */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Subtext</label>
          <textarea
            value={form.subtext}
            onChange={(e) => handleChange("subtext", e.target.value)}
            rows={2}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Button Label */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Button Text</label>
          <input
            type="text"
            value={form.button}
            onChange={(e) => handleChange("button", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Background Options */}
        <hr className="my-4" />
        <h3 className="text-lg font-semibold text-gray-800">Background Options</h3>

        {/* Glow Toggle */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={form.bgGlow}
            onChange={(e) => handleChange("bgGlow", e.target.checked)}
          />
          <span className="text-gray-700">Enable Glow Effect</span>
        </div>

        {/* Solid Background Color Picker */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Section Background Color</label>
          <input
            type="color"
            value={form.bgColor}
            onChange={(e) => handleChange("bgColor", e.target.value)}
            className="w-20 h-10 border border-gray-300 rounded"
          />
        </div>

        {/* Background Image Toggle and Input */}
        <div className="mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.useImage}
              onChange={(e) => handleChange("useImage", e.target.checked)}
            />
            <span className="text-gray-700">Use Background Image</span>
          </label>
          {form.useImage && (
            <input
              type="text"
              placeholder="Image URL (e.g., /bg.webp)"
              value={form.imageUrl}
              onChange={(e) => handleChange("imageUrl", e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          )}
        </div>

        {/* Background Video Toggle and Input */}
        <div className="mt-4">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.useVideo}
              onChange={(e) => handleChange("useVideo", e.target.checked)}
            />
            <span className="text-gray-700">Use Background Video</span>
          </label>
          {form.useVideo && (
            <input
              type="text"
              placeholder="Video URL (e.g., /hero.mp4)"
              value={form.videoUrl}
              onChange={(e) => handleChange("videoUrl", e.target.value)}
              className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          )}
        </div>

        {/* Submit */}
        <div className="text-right pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90"
          >
            Save Hero Section
          </button>
        </div>
      </form>
    </div>
  );
}
