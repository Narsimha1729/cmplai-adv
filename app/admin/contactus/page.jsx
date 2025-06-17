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
    headingFont: "sans-serif",
    subFont: "sans-serif",
    headingGradient: true,
    align: "center",

    backgroundType: "color", // color | image | gradient
    bgColor: "#f1fcfc",
    bgImage: "",
    bgGradient: "from-white via-cyan-50 to-teal-100",

    address: "LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India",
    phone: "+91 6301985408",
    email: "admin@cmplai.com",
    hoursWeek: "Monday - Friday: 9:00 AM - 6:00 PM",
    hoursWeekend: "Saturday - Sunday: Closed",
    buttonText: "Send Message",
    buttonColor: "#0f766e",
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Submitted Data:", form);
    alert("Contact section saved (demo only)");
  };

  const bgStyle =
    form.backgroundType === "color"
      ? { backgroundColor: form.bgColor }
      : form.backgroundType === "image"
      ? { backgroundImage: url(${form.bgImage}), backgroundSize: "cover", backgroundPosition: "center" }
      : {};

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100 space-y-8">
      <h2 className="text-2xl font-bold text-teal-600">📬 Contact Section Editor</h2>

      {/* === Heading Controls === */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-semibold text-gray-700">Heading</label>
          <input
            value={form.heading}
            onChange={(e) => handleChange("heading", e.target.value)}
            className="w-full border px-4 py-2 mt-1 rounded"
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            <input type="color" value={form.headingColor} onChange={(e) => handleChange("headingColor", e.target.value)} />
            <input type="number" value={parseInt(form.headingSize)} onChange={(e) => handleChange("headingSize", e.target.value + "px")} />
            <select value={form.headingFont} onChange={(e) => handleChange("headingFont", e.target.value)} className="border rounded">
              <option value="sans-serif">Sans</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="'Poppins', sans-serif">Poppins</option>
              <option value="'Inter', sans-serif">Inter</option>
            </select>
          </div>
          <label className="mt-2 flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.headingGradient} onChange={(e) => handleChange("headingGradient", e.target.checked)} />
            Gradient Text
          </label>
        </div>

        {/* === Subheading Controls === */}
        <div>
          <label className="font-semibold text-gray-700">Subheading</label>
          <input
            value={form.subheading}
            onChange={(e) => handleChange("subheading", e.target.value)}
            className="w-full border px-4 py-2 mt-1 rounded"
          />
          <div className="grid grid-cols-3 gap-2 mt-2">
            <input type="color" value={form.subColor} onChange={(e) => handleChange("subColor", e.target.value)} />
            <input type="number" value={parseInt(form.subSize)} onChange={(e) => handleChange("subSize", e.target.value + "px")} />
            <select value={form.subFont} onChange={(e) => handleChange("subFont", e.target.value)} className="border rounded">
              <option value="sans-serif">Sans</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="'Poppins', sans-serif">Poppins</option>
              <option value="'Inter', sans-serif">Inter</option>
            </select>
          </div>
        </div>
      </div>

      {/* === Layout Alignment & Background === */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="font-semibold text-gray-700">Text Alignment</label>
          <select value={form.align} onChange={(e) => handleChange("align", e.target.value)} className="w-full border rounded mt-1">
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
        <div>
          <label className="font-semibold text-gray-700">Background Type</label>
          <select value={form.backgroundType} onChange={(e) => handleChange("backgroundType", e.target.value)} className="w-full border rounded mt-1">
            <option value="color">Solid Color</option>
            <option value="gradient">Gradient</option>
            <option value="image">Image</option>
          </select>
          {form.backgroundType === "color" && (
            <input type="color" value={form.bgColor} onChange={(e) => handleChange("bgColor", e.target.value)} className="mt-2" />
          )}
          {form.backgroundType === "image" && (
            <input type="text" placeholder="Image URL" value={form.bgImage} onChange={(e) => handleChange("bgImage", e.target.value)} className="mt-2 w-full border px-2 py-1 rounded" />
          )}
          {form.backgroundType === "gradient" && (
            <input type="text" value={form.bgGradient} onChange={(e) => handleChange("bgGradient", e.target.value)} placeholder="Tailwind gradient classes" className="mt-2 w-full border px-2 py-1 rounded" />
          )}
        </div>
      </div>

      {/* === Contact Info === */}
      <div className="grid md:grid-cols-3 gap-4">
        <div>
          <label className="font-semibold text-gray-700">Address</label>
          <textarea value={form.address} onChange={(e) => handleChange("address", e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="font-semibold text-gray-700">Phone</label>
          <input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="font-semibold text-gray-700">Email</label>
          <input value={form.email} onChange={(e) => handleChange("email", e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
      </div>

      {/* === Business Hours === */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold text-gray-700">Weekday Hours</label>
          <input value={form.hoursWeek} onChange={(e) => handleChange("hoursWeek", e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label className="font-semibold text-gray-700">Weekend Hours</label>
          <input value={form.hoursWeekend} onChange={(e) => handleChange("hoursWeekend", e.target.value)} className="w-full px-3 py-2 border rounded" />
        </div>
      </div>

      {/* === Button Styling === */}
      <div>
        <label className="font-semibold text-gray-700">Button Text</label>
        <input value={form.buttonText} onChange={(e) => handleChange("buttonText", e.target.value)} className="w-full px-4 py-2 border rounded" />
        <label className="block mt-2 text-sm text-gray-700">Button Color</label>
        <input type="color" value={form.buttonColor} onChange={(e) => handleChange("buttonColor", e.target.value)} />
      </div>

      {/* === Live Preview === */}
      <div className="mt-10 p-6 rounded-xl border shadow-inner" style={bgStyle}>
        <h1
          className={text-3xl md:text-4xl font-bold mb-2 ${form.headingGradient ? "bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500" : ""}}
          style={{
            color: form.headingGradient ? undefined : form.headingColor,
            fontSize: form.headingSize,
            fontFamily: form.headingFont,
            textAlign: form.align,
          }}
        >
          {form.heading}
        </h1>
        <p
          style={{
            color: form.subColor,
            fontSize: form.subSize,
            fontFamily: form.subFont,
            textAlign: form.align,
          }}
        >
          {form.subheading}
        </p>
      </div>

      {/* === Submit Button === */}
      <div className="pt-6 text-right">
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          💾 Save Section
        </button>
      </div>
    </div>
  );
}