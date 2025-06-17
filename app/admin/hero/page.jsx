"use client";
import { useState } from "react";

export default function HeroEditor() {
  const [heading, setHeading] = useState("Transforming the future of Compliance");
  const [subheading, setSubheading] = useState("With our AI-powered platform...");

  const handleSave = () => {
    alert("Saved! (You can later integrate with a database or JSON file.)");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Edit Hero Section</h2>
      <div className="space-y-4">
        <input
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          placeholder="Hero Heading"
        />
        <textarea
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
          className="w-full border px-4 py-2 rounded"
          placeholder="Hero Subheading"
        ></textarea>
        <button onClick={handleSave} className="bg-teal-500 text-white px-6 py-2 rounded">
          Save Changes
        </button>
      </div>
    </div>
  );
}
