'use client';

import { useState } from 'react';
import { Trash, Plus } from 'lucide-react';

export default function SetUsApartEditor() {
  const [form, setForm] = useState({
    heading: 'What Sets Us Apart',
    subheading: 'Our unique approach to compliance automation',
    cards: [
      "Our solution is purpose-built with pre-configured templates and compliance logic tailored to global standards like <strong>GMP</strong>, <strong>ISO</strong>, and <strong>US-FDA</strong>, ensuring organizations are always audit-ready and aligned with evolving regulations.",
      "Cmplai's unique focus is on automated document creation — delivering <strong>70%</strong> of its value through advanced templating and content automation, while also providing robust document management capabilities.",
      "Our platform not only delivers substantial cost savings — equivalent to a full-time <strong>QMS</strong> employee per plant — but also empowers organizations to repurpose their workforce for <strong>innovation</strong> and <strong>job satisfaction</strong>.",
    ],
    image: '/setsapart.webp',
    showGlow: true,
    showDottedBackground: true,
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const updateCard = (index, value) => {
    const updated = [...form.cards];
    updated[index] = value;
    setForm({ ...form, cards: updated });
  };

  const removeCard = (index) => {
    const updated = [...form.cards];
    updated.splice(index, 1);
    setForm({ ...form, cards: updated });
  };

  const addCard = () => {
    setForm({ ...form, cards: [...form.cards, ''] });
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => handleChange('image', reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Saved (demo only)');
    console.log(form);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 bg-white rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">What Sets Us Apart – Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Heading & Subheading */}
        <div>
          <label className="block font-medium mb-1">Heading</label>
          <input
            type="text"
            value={form.heading}
            onChange={(e) => handleChange('heading', e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Subheading</label>
          <input
            type="text"
            value={form.subheading}
            onChange={(e) => handleChange('subheading', e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Card Editor */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Cards</h3>
          {form.cards.map((card, i) => (
            <div key={i} className="relative">
              <textarea
                value={card}
                onChange={(e) => updateCard(i, e.target.value)}
                rows={4}
                className="w-full border p-3 mb-2 rounded-md"
              />
              <button
                type="button"
                onClick={() => removeCard(i)}
                className="absolute top-2 right-2 text-red-500"
              >
                <Trash className="w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addCard}
            className="text-teal-600 hover:underline flex items-center gap-1 mt-2"
          >
            <Plus className="w-4 h-4" /> Add Card
          </button>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block font-medium mb-1">Image Upload</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            className="block"
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-4 w-72 rounded-lg border shadow"
            />
          )}
        </div>

        {/* Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={form.showGlow}
              onChange={(e) => handleChange('showGlow', e.target.checked)}
            />
            Enable Glow Behind Image
          </label>
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={form.showDottedBackground}
              onChange={(e) => handleChange('showDottedBackground', e.target.checked)}
            />
            Show Dotted Background
          </label>
        </div>

        {/* Save Button */}
        <div className="text-right pt-6">
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
