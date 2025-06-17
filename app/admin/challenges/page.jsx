"use client";

import { useState } from "react";
import { Trash, Plus } from "lucide-react";

export default function ChallengesEditor() {
  const [form, setForm] = useState({
    sectionTitle: "Challenges We Address",
    sectionDesc:
      "Common compliance pain points faced by pharmaceutical and manufacturing companies",
    titleColor: "#0f766e",
    descColor: "#4b5563",
    bgColor: "#f9fafb",

    challenges: [
      {
        icon: "AlertTriangle",
        title: "Manual, Error-Prone Processes",
        desc: "Preparing, reviewing, and managing thousands of compliance documents manually leads to significant errors, inefficiencies, and compliance risks.",
      },
      {
        icon: "FileWarning",
        title: "Complex, Evolving Regulations",
        desc: "Keeping up with changing global regulatory requirements is difficult, often resulting in delays and increased risk of non-compliance.",
      },
      {
        icon: "ShieldCheck",
        title: "Audit Readiness and Data Integrity",
        desc: "Maintaining complete, accurate documentation for audits is challenging with legacy systems and manual data entry.",
      },
    ],
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const updateItem = (i, key, value) => {
    const updated = [...form.challenges];
    updated[i][key] = value;
    setForm({ ...form, challenges: updated });
  };

  const addItem = () =>
    setForm({
      ...form,
      challenges: [
        ...form.challenges,
        { icon: "AlertTriangle", title: "", desc: "" },
      ],
    });

  const removeItem = (i) => {
    const updated = [...form.challenges];
    updated.splice(i, 1);
    setForm({ ...form, challenges: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Saved Challenges Section (demo)");
    console.log(form);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Challenges Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Title + Description */}
        <div>
          <label className="font-semibold">Section Title</label>
          <input
            type="text"
            value={form.sectionTitle}
            onChange={(e) => handleChange("sectionTitle", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="color"
              value={form.titleColor}
              onChange={(e) => handleChange("titleColor", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="font-semibold">Section Description</label>
          <textarea
            value={form.sectionDesc}
            onChange={(e) => handleChange("sectionDesc", e.target.value)}
            className="w-full p-2 border rounded"
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="color"
              value={form.descColor}
              onChange={(e) => handleChange("descColor", e.target.value)}
            />
          </div>
        </div>

        {/* Background Color */}
        <div>
          <label className="font-semibold">Background Color</label>
          <input
            type="color"
            value={form.bgColor}
            onChange={(e) => handleChange("bgColor", e.target.value)}
            className="h-10 w-24"
          />
        </div>

        {/* Challenges List */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Challenges</h3>
          {form.challenges.map((item, i) => (
            <div key={i} className="mb-6 border rounded p-4 bg-gray-50 relative">
              <button
                type="button"
                className="absolute top-2 right-2 text-red-500"
                onClick={() => removeItem(i)}
              >
                <Trash className="w-4 h-4" />
              </button>

              <label className="text-sm font-medium">Icon</label>
              <select
                value={item.icon}
                onChange={(e) => updateItem(i, "icon", e.target.value)}
                className="w-full border rounded p-2 mb-2"
              >
                <option value="AlertTriangle">AlertTriangle</option>
                <option value="FileWarning">FileWarning</option>
                <option value="ShieldCheck">ShieldCheck</option>
                {/* Add more icons from lucide if needed */}
              </select>

              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItem(i, "title", e.target.value)}
                className="w-full border rounded p-2 mb-2"
              />

              <label className="text-sm font-medium">Description</label>
              <textarea
                rows={3}
                value={item.desc}
                onChange={(e) => updateItem(i, "desc", e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addItem}
            className="flex items-center gap-2 text-teal-600 hover:underline mt-2"
          >
            <Plus className="w-4 h-4" /> Add Challenge
          </button>
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90"
          >
            Save Section
          </button>
        </div>
      </form>
    </div>
  );
}
