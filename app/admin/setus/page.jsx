'use client';

import { useState } from 'react';
import { Trash, Plus } from 'lucide-react';

export default function SetUsApartEditor() {
  const [form, setForm] = useState({
    heading: 'What Sets Us Apart',
    headingSize: '40px',
    headingColor: '#0f766e',
    headingFont: 'sans-serif',
    headingGradient: true,

    subheading: 'Our unique approach to compliance automation',
    subColor: '#4b5563',
    subFont: 'sans-serif',
    subSize: '18px',

    cards: [
      "Our solution is purpose-built with pre-configured templates and compliance logic tailored to global standards like <strong>GMP</strong>, <strong>ISO</strong>, and <strong>US-FDA</strong>...",
      "Cmplai's unique focus is on automated document creation — delivering <strong>70%</strong> of its value...",
      "Our platform delivers substantial cost savings — equivalent to a full-time <strong>QMS</strong> employee...",
    ],
    cardColor: '#334155',
    cardFont: 'sans-serif',
    cardSize: '16px',

    mediaType: 'image', // 'image' or 'video'
    mediaUrl: '/setsapart.webp',

    showGlow: true,
    showDottedBackground: true,
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const updateCard = (i, val) => {
    const updated = [...form.cards];
    updated[i] = val;
    setForm({ ...form, cards: updated });
  };

  const removeCard = (i) => {
    const updated = [...form.cards];
    updated.splice(i, 1);
    setForm({ ...form, cards: updated });
  };

  const addCard = () => {
    setForm({ ...form, cards: [...form.cards, ''] });
  };

  const handleMediaUpload = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => handleChange('mediaUrl', reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Saved (demo only)');
    console.log(form);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-6 bg-white rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Set Us Apart – Admin Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Heading */}
        <div>
          <label className="block font-semibold mb-1">Main Heading</label>
          <input
            type="text"
            value={form.heading}
            onChange={(e) => handleChange('heading', e.target.value)}
            className="w-full border p-2 rounded"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            <input
              type="color"
              value={form.headingColor}
              onChange={(e) => handleChange('headingColor', e.target.value)}
            />
            <input
              type="number"
              value={parseInt(form.headingSize)}
              onChange={(e) => handleChange('headingSize', e.target.value + 'px')}
              placeholder="Font size"
              className="border p-1 rounded"
            />
            <select
              value={form.headingFont}
              onChange={(e) => handleChange('headingFont', e.target.value)}
              className="border rounded p-1"
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="'Poppins', sans-serif">Poppins</option>
            </select>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.headingGradient}
                onChange={(e) => handleChange('headingGradient', e.target.checked)}
              />
              Gradient?
            </label>
          </div>
        </div>

        {/* Subheading */}
        <div>
          <label className="block font-semibold mb-1">Subheading</label>
          <input
            type="text"
            value={form.subheading}
            onChange={(e) => handleChange('subheading', e.target.value)}
            className="w-full border p-2 rounded"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <input
              type="color"
              value={form.subColor}
              onChange={(e) => handleChange('subColor', e.target.value)}
            />
            <input
              type="number"
              value={parseInt(form.subSize)}
              onChange={(e) => handleChange('subSize', e.target.value + 'px')}
              className="border p-1 rounded"
            />
            <select
              value={form.subFont}
              onChange={(e) => handleChange('subFont', e.target.value)}
              className="border rounded p-1"
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="'Poppins', sans-serif">Poppins</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Highlight Cards</h3>
          {form.cards.map((card, i) => (
            <div key={i} className="relative mb-2">
              <textarea
                value={card}
                onChange={(e) => updateCard(i, e.target.value)}
                rows={3}
                className="w-full border rounded p-3"
              />
              <button type="button" onClick={() => removeCard(i)} className="absolute top-2 right-2 text-red-500">
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

        {/* Card text styles */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <input
            type="color"
            value={form.cardColor}
            onChange={(e) => handleChange('cardColor', e.target.value)}
          />
          <input
            type="number"
            value={parseInt(form.cardSize)}
            onChange={(e) => handleChange('cardSize', e.target.value + 'px')}
            className="border p-1 rounded"
          />
          <select
            value={form.cardFont}
            onChange={(e) => handleChange('cardFont', e.target.value)}
            className="border rounded p-1"
          >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="'Poppins', sans-serif">Poppins</option>
          </select>
        </div>

        {/* Media */}
        <div>
          <label className="block font-semibold mb-1">Media</label>
          <select
            value={form.mediaType}
            onChange={(e) => handleChange('mediaType', e.target.value)}
            className="mb-2 border p-2 rounded"
          >
            <option value="image">Image</option>
            <option value="video">Video</option>
          </select>
          <input
            type="file"
            accept={form.mediaType === 'image' ? 'image/*' : 'video/*'}
            onChange={(e) => handleMediaUpload(e.target.files[0])}
          />
          {form.mediaUrl && form.mediaType === 'image' && (
            <img src={form.mediaUrl} alt="preview" className="mt-4 w-64 rounded shadow" />
          )}
          {form.mediaUrl && form.mediaType === 'video' && (
            <video controls src={form.mediaUrl} className="mt-4 w-64 rounded shadow" />
          )}
        </div>

        {/* Toggles */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <label className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={form.showGlow}
              onChange={(e) => handleChange('showGlow', e.target.checked)}
            />
            Enable Glow Effect
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

        {/* Save */}
        <div className="text-right pt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md"
          >
            Save Section
          </button>
        </div>
      </form>
    </div>
  );
}
