"use client";

import { useState } from "react";
import { Plus, Trash } from "lucide-react";

export default function NavbarEditor() {
  const [form, setForm] = useState({
    logo: "/logo.png", // initial logo
    logoAlt: "Cmplai Logo",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Product", href: "/#product" },
    ],
    buttonText: "Get Started",
  });

  const handleLinkChange = (index, field, value) => {
    const updated = [...form.links];
    updated[index][field] = value;
    setForm({ ...form, links: updated });
  };

  const handleAddLink = () => {
    setForm({
      ...form,
      links: [...form.links, { label: "", href: "" }],
    });
  };

  const handleRemoveLink = (index) => {
    const updated = [...form.links];
    updated.splice(index, 1);
    setForm({ ...form, links: updated });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForm({ ...form, logo: url });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Navbar saved (demo)");
    // TODO: Save to database or file
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Navbar Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Logo Upload */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Logo Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
          {form.logo && (
            <img
              src={form.logo}
              alt={form.logoAlt}
              className="mt-3 h-12 object-contain border rounded bg-white"
            />
          )}
        </div>

        {/* Logo Alt Text */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Logo Alt Text</label>
          <input
            type="text"
            value={form.logoAlt}
            onChange={(e) => setForm({ ...form, logoAlt: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Navigation Links */}
        <div>
          <label className="block font-medium text-gray-700 mb-2">Navigation Links</label>
          <div className="space-y-4">
            {form.links.map((link, index) => (
              <div key={index} className="flex gap-3 items-center">
                <input
                  type="text"
                  placeholder="Label"
                  value={link.label}
                  onChange={(e) => handleLinkChange(index, "label", e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  placeholder="URL"
                  value={link.href}
                  onChange={(e) => handleLinkChange(index, "href", e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveLink(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddLink}
              className="flex items-center gap-2 text-teal-600 mt-2 hover:underline"
            >
              <Plus className="w-4 h-4" />
              Add Link
            </button>
          </div>
        </div>

        {/* Button Text */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Navbar Button Text</label>
          <input
            type="text"
            value={form.buttonText}
            onChange={(e) => setForm({ ...form, buttonText: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90 transition"
          >
            Save Navbar
          </button>
        </div>
      </form>
    </div>
  );
}
