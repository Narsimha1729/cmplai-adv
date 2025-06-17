"use client";

import { useState } from "react";

export default function AreYouReadyEditor() {
  const [form, setForm] = useState({
    heading: "Are You Ready to Accelerate Your Business?",
    subtext:
      "Join the companies that have transformed their compliance processes and saved thousands of hours",
    button: "Schedule a Demo",
    placeholder: "Enter your email",

    // Text styles
    headingColor: "#ffffff",
    headingSize: "48px",
    headingFont: "sans-serif",
    subtextColor: "#e2e8f0",
    subtextSize: "18px",

    // Background options
    bgType: "gradient", // options: gradient, color, image, video
    bgColor: "#0f172a",
    bgImage: "/background.jpg",
    bgVideo: "/bg.mp4",
    overlayColor: "#000000",
    overlayOpacity: 0.6,
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved data:", form);
    alert("AreYouReady section saved! (demo only)");
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white border border-teal-100 rounded-xl shadow">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">“Are You Ready” Section Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Heading */}
        <div>
          <label className="font-semibold block mb-1">Heading</label>
          <textarea
            rows={2}
            value={form.heading}
            onChange={(e) => handleChange("heading", e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
          <div className="grid grid-cols-3 gap-4 mt-2">
            <input
              type="color"
              value={form.headingColor}
              onChange={(e) => handleChange("headingColor", e.target.value)}
            />
            <input
              type="number"
              value={parseInt(form.headingSize)}
              onChange={(e) => handleChange("headingSize", e.target.value + "px")}
              className="border px-2 py-1 rounded"
            />
            <select
              value={form.headingFont}
              onChange={(e) => handleChange("headingFont", e.target.value)}
              className="border px-2 py-1 rounded"
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="'Poppins', sans-serif">Poppins</option>
            </select>
          </div>
        </div>

        {/* Subtext */}
        <div>
          <label className="font-semibold block mb-1">Subtext</label>
          <textarea
            rows={2}
            value={form.subtext}
            onChange={(e) => handleChange("subtext", e.target.value)}
            className="w-full border rounded px-4 py-2"
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="color"
              value={form.subtextColor}
              onChange={(e) => handleChange("subtextColor", e.target.value)}
            />
            <input
              type="number"
              value={parseInt(form.subtextSize)}
              onChange={(e) => handleChange("subtextSize", e.target.value + "px")}
              className="border px-2 py-1 rounded"
            />
          </div>
        </div>

        {/* Button & Input */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Button Text</label>
            <input
              type="text"
              value={form.button}
              onChange={(e) => handleChange("button", e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Email Placeholder</label>
            <input
              type="text"
              value={form.placeholder}
              onChange={(e) => handleChange("placeholder", e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        {/* Background Settings */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Background Options</h3>
          <select
            value={form.bgType}
            onChange={(e) => handleChange("bgType", e.target.value)}
            className="mb-4 border px-3 py-2 rounded"
          >
            <option value="gradient">Animated Gradient</option>
            <option value="color">Solid Color</option>
            <option value="image">Background Image</option>
            <option value="video">Background Video</option>
          </select>

          {form.bgType === "color" && (
            <input
              type="color"
              value={form.bgColor}
              onChange={(e) => handleChange("bgColor", e.target.value)}
              className="h-10 w-24"
            />
          )}

          {form.bgType === "image" && (
            <input
              type="text"
              placeholder="Image URL or /public/image.jpg"
              value={form.bgImage}
              onChange={(e) => handleChange("bgImage", e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          )}

          {form.bgType === "video" && (
            <input
              type="text"
              placeholder="Video URL or /public/video.mp4"
              value={form.bgVideo}
              onChange={(e) => handleChange("bgVideo", e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          )}
        </div>

        {/* Overlay Settings */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Overlay Color</label>
            <input
              type="color"
              value={form.overlayColor}
              onChange={(e) => handleChange("overlayColor", e.target.value)}
              className="h-10 w-24"
            />
          </div>
          <div>
            <label className="font-semibold">Overlay Opacity (0–1)</label>
            <input
              type="number"
              min="0"
              max="1"
              step="0.05"
              value={form.overlayOpacity}
              onChange={(e) => handleChange("overlayOpacity", parseFloat(e.target.value))}
              className="border px-2 py-1 rounded"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="text-right pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-md hover:opacity-90 font-semibold"
          >
            Save AreYouReady
          </button>
        </div>
      </form>
    </div>
  );
}
