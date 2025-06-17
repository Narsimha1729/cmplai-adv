"use client";

import { useState } from "react";
import { Plus, Trash } from "lucide-react";

const defaultStat = {
  icon: "clock", // key for now, will map to Lucide icon
  value: 0,
  suffix: "%",
  label: "New Stat",
  color: "#0d9488",
};

const ICON_OPTIONS = ["clock", "file-text", "users", "trending-up"];

export default function StatsEditor() {
  const [stats, setStats] = useState([
    { icon: "clock", value: 70, suffix: "%", label: "Time Reduction", color: "#0d9488" },
    { icon: "file-text", value: 1000, suffix: "+", label: "Documents Automated", color: "#0d9488" },
    { icon: "users", value: 50, suffix: "+", label: "Happy Clients", color: "#0d9488" },
    { icon: "trending-up", value: 90, suffix: "%", label: "Efficiency Increase", color: "#0d9488" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...stats];
    updated[index][field] = value;
    setStats(updated);
  };

  const handleAdd = () => {
    setStats([...stats, { ...defaultStat }]);
  };

  const handleRemove = (index) => {
    const updated = [...stats];
    updated.splice(index, 1);
    setStats(updated);
  };

  const handleSave = () => {
    alert("Stats saved! (Demo only)");
    console.log(stats);
    // Here you would POST the data to your API
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Stats Section Editor</h2>

      <div className="space-y-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center border border-gray-200 p-4 rounded-lg shadow-sm bg-gray-50"
          >
            {/* Icon */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Icon</label>
              <select
                value={stat.icon}
                onChange={(e) => handleChange(index, "icon", e.target.value)}
                className="w-full mt-1 px-2 py-2 border rounded"
              >
                {ICON_OPTIONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>

            {/* Value */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Number</label>
              <input
                type="number"
                value={stat.value}
                onChange={(e) => handleChange(index, "value", e.target.value)}
                className="w-full px-3 py-2 border rounded mt-1"
              />
            </div>

            {/* Suffix */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Suffix</label>
              <input
                type="text"
                value={stat.suffix}
                onChange={(e) => handleChange(index, "suffix", e.target.value)}
                className="w-full px-3 py-2 border rounded mt-1"
              />
            </div>

            {/* Label */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Label</label>
              <input
                type="text"
                value={stat.label}
                onChange={(e) => handleChange(index, "label", e.target.value)}
                className="w-full px-3 py-2 border rounded mt-1"
              />
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Color</label>
              <input
                type="color"
                value={stat.color}
                onChange={(e) => handleChange(index, "color", e.target.value)}
                className="w-full h-10 px-2 mt-1"
              />
            </div>

            {/* Delete Button */}
            <div className="mt-6 text-right">
              <button type="button" onClick={() => handleRemove(index)}>
                <Trash className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add + Save */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={handleAdd}
          type="button"
          className="flex items-center gap-2 text-teal-600 hover:underline"
        >
          <Plus className="w-4 h-4" /> Add Stat
        </button>
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-md shadow hover:opacity-90"
        >
          Save Stats
        </button>
      </div>
    </div>
  );
}
