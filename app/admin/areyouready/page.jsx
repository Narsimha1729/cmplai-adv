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
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Heading */}
        <div>
          <label htmlFor="heading" className="font-semibold block mb-1 text-gray-700">
            Heading
          </label>
          <textarea
            id="heading"
            rows={2}
            value={form.heading}
            onChange={(e) => handleChange("heading", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
          />
          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <label htmlFor="headingColor" className="sr-only">Heading Color</label>
              <input
                id="headingColor"
                type="color"
                value={form.headingColor}
                onChange={(e) => handleChange("headingColor", e.target.value)}
                className="w-full h-10 rounded-md border border-gray-300 cursor-pointer"
                title="Heading Color"
              />
            </div>
            <div>
              <label htmlFor="headingSize" className="sr-only">Heading Size (px)</label>
              <input
                id="headingSize"
                type="number"
                value={parseInt(form.headingSize)}
                onChange={(e) => handleChange("headingSize", e.target.value + "px")}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                placeholder="Size (px)"
                aria-label="Heading Font Size"
              />
            </div>
            <div>
              <label htmlFor="headingFont" className="sr-only">Heading Font</label>
              <select
                id="headingFont"
                value={form.headingFont}
                onChange={(e) => handleChange("headingFont", e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                aria-label="Heading Font Family"
              >
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
                <option value="'Poppins', sans-serif">Poppins</option>
                <option value="'Roboto', sans-serif">Roboto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Subtext */}
        <div>
          <label htmlFor="subtext" className="font-semibold block mb-1 text-gray-700">
            Subtext
          </label>
          <textarea
            id="subtext"
            rows={2}
            value={form.subtext}
            onChange={(e) => handleChange("subtext", e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900"
          />
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label htmlFor="subtextColor" className="sr-only">Subtext Color</label>
              <input
                id="subtextColor"
                type="color"
                value={form.subtextColor}
                onChange={(e) => handleChange("subtextColor", e.target.value)}
                className="w-full h-10 rounded-md border border-gray-300 cursor-pointer"
                title="Subtext Color"
              />
            </div>
            <div>
              <label htmlFor="subtextSize" className="sr-only">Subtext Size (px)</label>
              <input
                id="subtextSize"
                type="number"
                value={parseInt(form.subtextSize)}
                onChange={(e) => handleChange("subtextSize", e.target.value + "px")}
                className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
                placeholder="Size (px)"
                aria-label="Subtext Font Size"
              />
            </div>
          </div>
        </div>

        {/* Button & Input */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="buttonText" className="block font-semibold mb-1 text-gray-700">
              Button Text
            </label>
            <input
              id="buttonText"
              type="text"
              value={form.button}
              onChange={(e) => handleChange("button", e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="placeholder" className="block font-semibold mb-1 text-gray-700">
              Email Placeholder
            </label>
            <input
              id="placeholder"
              type="text"
              value={form.placeholder}
              onChange={(e) => handleChange("placeholder", e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
            />
          </div>
        </div>

        {/* Background Settings */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Background Options</h3>
          <label htmlFor="bgType" className="sr-only">Background Type</label>
          <select
            id="bgType"
            value={form.bgType}
            onChange={(e) => handleChange("bgType", e.target.value)}
            className="mb-4 border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
          >
            <option value="gradient">Animated Gradient</option>
            <option value="color">Solid Color</option>
            <option value="image">Background Image</option>
            <option value="video">Background Video</option>
          </select>

          {form.bgType === "color" && (
            <div className="mt-2">
              <label htmlFor="bgColor" className="font-medium text-gray-700 block mb-1">Background Color</label>
              <input
                id="bgColor"
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange("bgColor", e.target.value)}
                className="h-10 w-24 rounded-md border border-gray-300 cursor-pointer"
                title="Background Color"
              />
            </div>
          )}

          {form.bgType === "image" && (
            <div className="mt-2">
              <label htmlFor="bgImage" className="font-medium text-gray-700 block mb-1">Image URL</label>
              <input
                id="bgImage"
                type="text"
                placeholder="Image URL or /public/image.jpg"
                value={form.bgImage}
                onChange={(e) => handleChange("bgImage", e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
              />
            </div>
          )}

          {form.bgType === "video" && (
            <div className="mt-2">
              <label htmlFor="bgVideo" className="font-medium text-gray-700 block mb-1">Video URL</label>
              <input
                id="bgVideo"
                type="text"
                placeholder="Video URL or /public/video.mp4"
                value={form.bgVideo}
                onChange={(e) => handleChange("bgVideo", e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
              />
            </div>
          )}
        </div>

        {/* Overlay Settings */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="overlayColor" className="font-semibold block mb-1 text-gray-700">
              Overlay Color
            </label>
            <input
              id="overlayColor"
              type="color"
              value={form.overlayColor}
              onChange={(e) => handleChange("overlayColor", e.target.value)}
              className="h-10 w-24 rounded-md border border-gray-300 cursor-pointer"
              title="Overlay Color"
            />
          </div>
          <div>
            <label htmlFor="overlayOpacity" className="font-semibold block mb-1 text-gray-700">
              Overlay Opacity (0-1)
            </label>
            <input
              id="overlayOpacity"
              type="number"
              min="0"
              max="1"
              step="0.05"
              value={form.overlayOpacity}
              onChange={(e) => handleChange("overlayOpacity", parseFloat(e.target.value))}
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900"
              aria-label="Overlay Opacity"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="text-right pt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300 font-semibold shadow-lg"
          >
            Save AreYouReady Section
          </button>
        </div>
      </form>
    </div>
  );
}