"use client";

import { useState } from "react";
import { Plus, Trash } from "lucide-react";

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
    // Save to database or API
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Footer Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Logo + Tagline */}
        <div>
          <label className="font-semibold text-gray-700 block mb-1">Logo Preview</label>
          <img src={form.logo} alt="Logo" className="h-12 mb-2" />
          <textarea
            value={form.tagline}
            onChange={(e) => handleChange("tagline", e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Social Links</h3>
          {form.social.map((s, i) => (
            <div key={i} className="flex gap-3 items-center mb-2">
              <input
                value={s.platform}
                onChange={(e) => handleListChange("social", i, "platform", e.target.value)}
                placeholder="Platform"
                className="flex-1 px-3 py-2 border rounded"
              />
              <input
                value={s.url}
                onChange={(e) => handleListChange("social", i, "url", e.target.value)}
                placeholder="URL"
                className="flex-1 px-3 py-2 border rounded"
              />
              <button onClick={() => handleListRemove("social", i)} type="button">
                <Trash className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              handleListAdd("social", { platform: "", url: "", icon: "" })
            }
            className="text-teal-600 hover:underline mt-2 flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Social Link
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Links</h3>
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
                <Trash className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleListAdd("links", { label: "", href: "" })}
            className="text-teal-600 hover:underline mt-2 flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add Quick Link
          </button>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Info</h3>
          <input
            value={form.contact.address}
            onChange={(e) =>
              setForm({ ...form, contact: { ...form.contact, address: e.target.value } })
            }
            className="w-full mb-2 px-4 py-2 border rounded"
            placeholder="Address"
          />
          <input
            value={form.contact.phone}
            onChange={(e) =>
              setForm({ ...form, contact: { ...form.contact, phone: e.target.value } })
            }
            className="w-full mb-2 px-4 py-2 border rounded"
            placeholder="Phone"
          />
          <input
            value={form.contact.email}
            onChange={(e) =>
              setForm({ ...form, contact: { ...form.contact, email: e.target.value } })
            }
            className="w-full px-4 py-2 border rounded"
            placeholder="Email"
          />
        </div>

        {/* Policies & Copyright */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Policy Links</h3>
          {form.policies.map((p, i) => (
            <div key={i} className="flex gap-3 items-center mb-2">
              <input
                value={p.label}
                onChange={(e) => handleListChange("policies", i, "label", e.target.value)}
                placeholder="Label"
                className="flex-1 px-3 py-2 border rounded"
              />
              <input
                value={p.href}
                onChange={(e) => handleListChange("policies", i, "href", e.target.value)}
                placeholder="URL"
                className="flex-1 px-3 py-2 border rounded"
              />
              <button onClick={() => handleListRemove("policies", i)} type="button">
                <Trash className="w-4 h-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Copyright Text</label>
          <input
            value={form.copyright}
            onChange={(e) => handleChange("copyright", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Save Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90 transition"
          >
            Save Footer
          </button>
        </div>
      </form>
    </div>
  );
}
