"use client";

import { useState } from "react";

export default function NavbarEditor() {
  const [form, setForm] = useState({
    logoAlt: "Cmplai Logo",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Product", href: "/#product" },
      { label: "About Us", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
    buttonText: "Get Started",
  });

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...form.links];
    updatedLinks[index][field] = value;
    setForm({ ...form, links: updatedLinks });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace this with save-to-file or DB logic
    alert("Navbar updated successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Edit Navbar</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Logo Alt Text */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Logo Alt Text</label>
          <input
            type="text"
            value={form.logoAlt}
            onChange={(e) => setForm({ ...form, logoAlt: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Links Editor */}
        <div className="space-y-4">
          <label className="block font-medium text-gray-700">Navigation Links</label>
          {form.links.map((link, i) => (
            <div key={i} className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Label"
                value={link.label}
                onChange={(e) => handleLinkChange(i, "label", e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="URL"
                value={link.href}
                onChange={(e) => handleLinkChange(i, "href", e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Button Text */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Button Text</label>
          <input
            type="text"
            value={form.buttonText}
            onChange={(e) => setForm({ ...form, buttonText: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
