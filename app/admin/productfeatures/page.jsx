"use client";

import { useState } from "react";
import { Plus, Trash } from "lucide-react";
import {
  Zap,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";

const ICON_OPTIONS = {
  zap: <Zap className="w-5 h-5 text-teal-600" />,
  shield: <ShieldCheck className="w-5 h-5 text-teal-600" />,
  file: <FileText className="w-5 h-5 text-teal-600" />,
  clock: <Clock className="w-5 h-5 text-teal-600" />,
  check: <CheckCircle className="w-5 h-5 text-teal-600" />,
  users: <Users className="w-5 h-5 text-teal-600" />,
};

export default function ProductFeaturesEditor() {
  const [form, setForm] = useState({
    heading: "Product Features",
    headingColor: "#0f766e",
    headingFontSize: "36px",

    subheading: "Comprehensive solutions to transform your compliance processes",
    subColor: "#4b5563",
    subFontSize: "18px",

    bgType: "color", // color, image, video
    bgColor: "#ffffff",
    bgImage: "",
    bgVideo: "",

    mediaAlt: "Product Features",
    showButton: true,
    buttonText: "Request a Demo",

    features: [
      { icon: "zap", text: "AI-powered document automation reducing compliance workload by 70%" },
      { icon: "shield", text: "Regulatory-ready templates ensuring 100% compliance with global standards" },
    ],
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleFeatureChange = (i, field, value) => {
    const updated = [...form.features];
    updated[i][field] = value;
    setForm({ ...form, features: updated });
  };

  const addFeature = () => {
    setForm({ ...form, features: [...form.features, { icon: "zap", text: "" }] });
  };

  const removeFeature = (i) => {
    const updated = [...form.features];
    updated.splice(i, 1);
    setForm({ ...form, features: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Product Features:", form);
    alert("Product Features saved (demo only)");
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Product Features Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Heading */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>Section Heading</label>
            <input
              value={form.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label>Color</label>
            <input
              type="color"
              value={form.headingColor}
              onChange={(e) => handleChange("headingColor", e.target.value)}
            />
          </div>
          <div>
            <label>Font Size</label>
            <input
              type="number"
              value={parseInt(form.headingFontSize)}
              onChange={(e) => handleChange("headingFontSize", e.target.value + "px")}
              className="w-full border px-2 py-1 rounded"
            />
          </div>
        </div>

        {/* Subheading */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label>Subheading</label>
            <input
              value={form.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              className="w-full border px-4 py-2 rounded"
            />
          </div>
          <div>
            <label>Color</label>
            <input
              type="color"
              value={form.subColor}
              onChange={(e) => handleChange("subColor", e.target.value)}
            />
          </div>
          <div>
            <label>Font Size</label>
            <input
              type="number"
              value={parseInt(form.subFontSize)}
              onChange={(e) => handleChange("subFontSize", e.target.value + "px")}
              className="w-full border px-2 py-1 rounded"
            />
          </div>
        </div>

        {/* Media Selection */}
        <div>
          <label>Background Type</label>
          <select
            value={form.bgType}
            onChange={(e) => handleChange("bgType", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="color">Color</option>
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>

          {form.bgType === "color" && (
            <input
              type="color"
              value={form.bgColor}
              onChange={(e) => handleChange("bgColor", e.target.value)}
              className="mt-2"
            />
          )}
          {form.bgType === "image" && (
            <input
              type="text"
              placeholder="Image URL"
              value={form.bgImage}
              onChange={(e) => handleChange("bgImage", e.target.value)}
              className="w-full border mt-2 px-4 py-2 rounded"
            />
          )}
          {form.bgType === "video" && (
            <input
              type="text"
              placeholder="Video URL"
              value={form.bgVideo}
              onChange={(e) => handleChange("bgVideo", e.target.value)}
              className="w-full border mt-2 px-4 py-2 rounded"
            />
          )}
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Feature Items</h3>
          {form.features.map((f, i) => (
            <div key={i} className="flex items-center gap-3 mb-2">
              <select
                value={f.icon}
                onChange={(e) => handleFeatureChange(i, "icon", e.target.value)}
                className="border px-2 py-1 rounded"
              >
                <option value="zap">Zap</option>
                <option value="shield">Shield</option>
                <option value="file">File</option>
                <option value="clock">Clock</option>
                <option value="check">Check</option>
                <option value="users">Users</option>
              </select>
              <input
                type="text"
                value={f.text}
                onChange={(e) => handleFeatureChange(i, "text", e.target.value)}
                className="flex-1 border px-4 py-2 rounded"
                placeholder="Feature description"
              />
              <button type="button" onClick={() => removeFeature(i)}>
                <Trash className="text-red-500 w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="text-teal-600 flex items-center gap-1 mt-2"
          >
            <Plus className="w-4 h-4" /> Add Feature
          </button>
        </div>

        {/* Button Toggle */}
        <div className="mt-6">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={form.showButton}
              onChange={(e) => handleChange("showButton", e.target.checked)}
            />
            Show CTA Button
          </label>
          {form.showButton && (
            <input
              type="text"
              value={form.buttonText}
              onChange={(e) => handleChange("buttonText", e.target.value)}
              className="w-full mt-2 px-4 py-2 border rounded"
              placeholder="Button Text"
            />
          )}
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="mt-6 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90"
          >
            Save Product Features
          </button>
        </div>
      </form>
    </div>
  );
}
