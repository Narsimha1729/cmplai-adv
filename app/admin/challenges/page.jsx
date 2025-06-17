'use client';

import { useState } from "react";
import { Trash, Plus } from "lucide-react";

export default function ChallengesEditor() {
  const [form, setForm] = useState({
    sectionTitle: "Challenges We Address",
    sectionDesc: "Common compliance pain points faced by pharma and manufacturing industries.",
    titleColor: "#0f766e",
    descColor: "#4b5563",
    titleFont: "sans-serif",
    titleSize: "32px",
    descFont: "sans-serif",
    descSize: "16px",
    bgColor: "#f9fafb",

    challenges: [
      {
        image: "",
        title: "Manual, Error-Prone Processes",
        desc: "Managing thousands of documents manually leads to errors, inefficiencies, and risks.",
        iconPreview: "",
        iconFile: null,
        font: "sans-serif",
        size: "16px",
        color: "#374151",
      },
    ],
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const updateItem = (index, key, value) => {
    const updated = [...form.challenges];
    updated[index][key] = value;
    setForm({ ...form, challenges: updated });
  };

  const updateImage = (index, file) => {
    const updated = [...form.challenges];
    updated[index].iconFile = file;
    updated[index].iconPreview = URL.createObjectURL(file);
    setForm({ ...form, challenges: updated });
  };

  const addItem = () => {
    setForm({
      ...form,
      challenges: [
        ...form.challenges,
        {
          image: "",
          title: "",
          desc: "",
          iconPreview: "",
          iconFile: null,
          font: "sans-serif",
          size: "16px",
          color: "#374151",
        },
      ],
    });
  };

  const removeItem = (index) => {
    const updated = [...form.challenges];
    updated.splice(index, 1);
    setForm({ ...form, challenges: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", form);
    alert("Section saved (demo)");
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Challenges Section Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Title and Description */}
        <div>
          <label className="block font-semibold mb-1">Section Title</label>
          <input
            type="text"
            value={form.sectionTitle}
            onChange={(e) => handleChange("sectionTitle", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input type="color" value={form.titleColor} onChange={(e) => handleChange("titleColor", e.target.value)} />
            <select
              value={form.titleFont}
              onChange={(e) => handleChange("titleFont", e.target.value)}
              className="border px-2 py-1"
            >
              <option value="sans-serif">Sans</option>
              <option value="serif">Serif</option>
              <option value="monospace">Mono</option>
              <option value="'Poppins', sans-serif">Poppins</option>
            </select>
            <input
              type="number"
              value={parseInt(form.titleSize)}
              onChange={(e) => handleChange("titleSize", e.target.value + "px")}
              placeholder="Size"
              className="border px-2"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Section Description</label>
          <textarea
            value={form.sectionDesc}
            onChange={(e) => handleChange("sectionDesc", e.target.value)}
            className="w-full border px-4 py-2 rounded"
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input type="color" value={form.descColor} onChange={(e) => handleChange("descColor", e.target.value)} />
            <select
              value={form.descFont}
              onChange={(e) => handleChange("descFont", e.target.value)}
              className="border px-2 py-1"
            >
              <option value="sans-serif">Sans</option>
              <option value="serif">Serif</option>
              <option value="monospace">Mono</option>
            </select>
            <input
              type="number"
              value={parseInt(form.descSize)}
              onChange={(e) => handleChange("descSize", e.target.value + "px")}
              placeholder="Size"
              className="border px-2"
            />
          </div>
        </div>

        {/* Background Color */}
        <div>
          <label className="block font-semibold mb-1">Background Color</label>
          <input
            type="color"
            value={form.bgColor}
            onChange={(e) => handleChange("bgColor", e.target.value)}
            className="h-10 w-24"
          />
        </div>

        {/* Editable Challenge Cards */}
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

              {/* Icon Upload */}
              <div className="mb-2">
                <label className="text-sm font-medium">Icon (Image Upload)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => updateImage(i, e.target.files[0])}
                  className="block w-full mt-1"
                />
                {item.iconPreview && (
                  <img src={item.iconPreview} alt="icon" className="w-12 h-12 mt-2 rounded" />
                )}
              </div>

              {/* Title Input */}
              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateItem(i, "title", e.target.value)}
                className="w-full border rounded p-2 mb-2"
              />

              {/* Desc Input */}
              <label className="text-sm font-medium">Description</label>
              <textarea
                rows={3}
                value={item.desc}
                onChange={(e) => updateItem(i, "desc", e.target.value)}
                className="w-full border rounded p-2"
              />

              {/* Typography */}
              <div className="grid grid-cols-3 gap-4 mt-3">
                <input
                  type="color"
                  value={item.color}
                  onChange={(e) => updateItem(i, "color", e.target.value)}
                />
                <select
                  value={item.font}
                  onChange={(e) => updateItem(i, "font", e.target.value)}
                  className="border rounded px-2"
                >
                  <option value="sans-serif">Sans</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Mono</option>
                </select>
                <input
                  type="number"
                  value={parseInt(item.size)}
                  onChange={(e) => updateItem(i, "size", e.target.value + "px")}
                  className="border px-2"
                  placeholder="Text size"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addItem}
            className="flex items-center gap-2 text-teal-600 hover:underline mt-2"
          >
            <Plus className="w-4 h-4" /> Add Challenge Card
          </button>
        </div>

        {/* Save Button */}
        <div className="text-right pt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90"
          >
            Save Challenges
          </button>
        </div>
      </form>
    </div>
  );
}
