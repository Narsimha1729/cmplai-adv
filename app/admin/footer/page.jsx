"use client";

import { useState, useEffect } from "react";
import { Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function FooterEditor() {
  const [form, setForm] = useState({
    logo: "/logo.png",
    tagline: "Transforming the future of Compliance through automation of document preparation.",
    social: [
      { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
      { platform: "GitHub", url: "https://github.com", icon: "github" },
    ],
    links: [
      { label: "Home", href: "/#home" },
      { label: "Product", href: "/#product" },
      { label: "About Us", href: "/#about" },
      { label: "Blog", href: "/blog" },
    ],
    contact: {
      address: "LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India",
      phone: "+91 6301985408",
      email: "admin@cmplai.com",
    },
    policies: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
    copyright: "© 2025 LN Infosphere TechTransformers Pvt Ltd. All rights reserved.",
    backgroundColor: "#f1fcfc",
    textColor: "#333333",
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleListChange = (list, index, field, value) => {
    const updated = [...form[list]];
    updated[index][field] = value;
    setForm({ ...form, [list]: updated });
  };

  const handleListAdd = (list, item) => {
    setForm({ ...form, [list]: [...form[list], item] });
  };

  const handleListRemove = (list, index) => {
    const updated = [...form[list]];
    updated.splice(index, 1);
    setForm({ ...form, [list]: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Footer saved (demo)");
    console.log("Form Data:", form);
    // You can POST this data to your API endpoint here.
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      {/* FORM EDITOR */}
      <form onSubmit={handleSubmit} className="space-y-8">
        <h2 className="text-2xl font-bold text-teal-600">Footer Editor</h2>

        {/* Logo */}
        <div>
          <label className="font-medium block mb-1">Logo URL</label>
          <input
            type="text"
            value={form.logo}
            onChange={(e) => handleChange("logo", e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
          <div className="mt-2">
            <Image src={form.logo} width={100} height={30} alt="Logo Preview" />
          </div>
        </div>

        {/* Tagline */}
        <div>
          <label className="font-medium block mb-1">Tagline</label>
          <textarea
            rows={2}
            value={form.tagline}
            onChange={(e) => handleChange("tagline", e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold">Social Links</h3>
          {form.social.map((s, i) => (
            <div key={i} className="flex items-center gap-3 mb-2">
              <input
                placeholder="Platform"
                value={s.platform}
                onChange={(e) => handleListChange("social", i, "platform", e.target.value)}
                className="flex-1 px-3 py-2 border rounded"
              />
              <input
                placeholder="URL"
                value={s.url}
                onChange={(e) => handleListChange("social", i, "url", e.target.value)}
                className="flex-1 px-3 py-2 border rounded"
              />
              <button onClick={() => handleListRemove("social", i)} type="button">
                <Trash className="text-red-500 w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleListAdd("social", { platform: "", url: "", icon: "" })}
            className="text-teal-600 flex gap-2 items-center mt-1"
          >
            <Plus className="w-4 h-4" /> Add Social
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          {form.links.map((l, i) => (
            <div key={i} className="flex gap-3 items-center mb-2">
              <input
                value={l.label}
                onChange={(e) => handleListChange("links", i, "label", e.target.value)}
                placeholder="Label"
                className="flex-1 px-3 py-2 border rounded"
              />
              <input
                value={l.href}
                onChange={(e) => handleListChange("links", i, "href", e.target.value)}
                placeholder="URL"
                className="flex-1 px-3 py-2 border rounded"
              />
              <button onClick={() => handleListRemove("links", i)} type="button">
                <Trash className="text-red-500 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <input
            value={form.contact.address}
            onChange={(e) =>
              setForm({ ...form, contact: { ...form.contact, address: e.target.value } })
            }
            className="w-full px-3 py-2 border rounded mb-2"
            placeholder="Address"
          />
          <input
            value={form.contact.phone}
            onChange={(e) =>
              setForm({ ...form, contact: { ...form.contact, phone: e.target.value } })
            }
            className="w-full px-3 py-2 border rounded mb-2"
            placeholder="Phone"
          />
          <input
            value={form.contact.email}
            onChange={(e) =>
              setForm({ ...form, contact: { ...form.contact, email: e.target.value } })
            }
            className="w-full px-3 py-2 border rounded"
            placeholder="Email"
          />
        </div>

        {/* Policy Links */}
        <div>
          <h3 className="text-lg font-semibold">Policies</h3>
          {form.policies.map((p, i) => (
            <div key={i} className="flex gap-3 items-center mb-2">
              <input
                value={p.label}
                onChange={(e) => handleListChange("policies", i, "label", e.target.value)}
                className="flex-1 px-3 py-2 border rounded"
              />
              <input
                value={p.href}
                onChange={(e) => handleListChange("policies", i, "href", e.target.value)}
                className="flex-1 px-3 py-2 border rounded"
              />
              <button onClick={() => handleListRemove("policies", i)} type="button">
                <Trash className="text-red-500 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Copyright + Styling */}
        <div>
          <label className="block font-semibold mb-1">Copyright Text</label>
          <input
            value={form.copyright}
            onChange={(e) => handleChange("copyright", e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Colors */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-600">Footer Background</label>
            <input
              type="color"
              value={form.backgroundColor}
              onChange={(e) => handleChange("backgroundColor", e.target.value)}
              className="h-10 w-20"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Text Color</label>
            <input
              type="color"
              value={form.textColor}
              onChange={(e) => handleChange("textColor", e.target.value)}
              className="h-10 w-20"
            />
          </div>
        </div>

        <div className="text-right pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-md hover:opacity-90"
          >
            Save Footer
          </button>
        </div>
      </form>

      {/* LIVE PREVIEW */}
      <div className="bg-white border rounded-lg shadow-md p-6 space-y-6">
        <h3 className="text-xl font-bold text-teal-600 mb-4">Live Preview</h3>
        <div style={{ background: form.backgroundColor, color: form.textColor }} className="p-4 rounded-md space-y-3">
          <Image src={form.logo} alt="logo" width={120} height={40} />
          <p>{form.tagline}</p>
          <div className="flex flex-wrap gap-3 mt-3">
            {form.links.map((link, i) => (
              <span key={i} className="text-sm underline">{link.label}</span>
            ))}
          </div>
          <p className="text-xs mt-4">{form.copyright}</p>
        </div>
      </div>
    </div>
  );
}
