'use client';

import { useState } from 'react';

export default function HeroEditor() {
  const [form, setForm] = useState({
    heading: 'Transforming the future of\nCompliance through\nautomation of document preparation',
    subtext: 'Our AI-powered platform reduces compliance document preparation time from months to days',
    button: 'Explore →',

    // Visual Options
    bgType: 'color', // 'color', 'image', 'video'
    bgColor: '#ffffff',
    bgImage: '',
    bgVideo: '',
    glow: true,

    // Text Styles
    headingColor: '#0f766e',
    headingSize: '48px',
    headingFont: 'sans-serif',
    headingGradient: true,
    headingWeight: '800',

    subColor: '#4b5563',
    subSize: '18px',
    subFont: 'sans-serif',
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', form);
    alert('Hero section saved! (Demo only)');
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Hero Section Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Heading */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">Main Heading</label>
          <textarea
            rows={3}
            value={form.heading}
            onChange={(e) => handleChange('heading', e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Heading Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-700">Color</label>
            <input
              type="color"
              value={form.headingColor}
              onChange={(e) => handleChange('headingColor', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Size (px)</label>
            <input
              type="number"
              value={parseInt(form.headingSize)}
              onChange={(e) => handleChange('headingSize', e.target.value + 'px')}
              className="w-full border rounded px-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Font</label>
            <select
              value={form.headingFont}
              onChange={(e) => handleChange('headingFont', e.target.value)}
              className="w-full border rounded px-2"
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="'Poppins', sans-serif">Poppins</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700">Font Weight</label>
            <select
              value={form.headingWeight}
              onChange={(e) => handleChange('headingWeight', e.target.value)}
              className="w-full border rounded px-2"
            >
              <option value="400">Normal</option>
              <option value="600">Semi-Bold</option>
              <option value="700">Bold</option>
              <option value="800">Extra Bold</option>
            </select>
          </div>
          <div className="flex items-center gap-2 mt-6">
            <input
              type="checkbox"
              checked={form.headingGradient}
              onChange={(e) => handleChange('headingGradient', e.target.checked)}
            />
            <label className="text-sm text-gray-700">Use Gradient Text</label>
          </div>
        </div>

        {/* Subtext */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">Subtext</label>
          <textarea
            rows={2}
            value={form.subtext}
            onChange={(e) => handleChange('subtext', e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Subtext Styles */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-700">Color</label>
            <input
              type="color"
              value={form.subColor}
              onChange={(e) => handleChange('subColor', e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Size (px)</label>
            <input
              type="number"
              value={parseInt(form.subSize)}
              onChange={(e) => handleChange('subSize', e.target.value + 'px')}
              className="w-full border rounded px-2"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700">Font</label>
            <select
              value={form.subFont}
              onChange={(e) => handleChange('subFont', e.target.value)}
              className="w-full border rounded px-2"
            >
              <option value="sans-serif">Sans-serif</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="'Poppins', sans-serif">Poppins</option>
            </select>
          </div>
        </div>

        {/* Button Text */}
        <div>
          <label className="block font-semibold text-gray-800 mb-1">Button Text</label>
          <input
            type="text"
            value={form.button}
            onChange={(e) => handleChange('button', e.target.value)}
            className="w-full border px-4 py-2 rounded-md"
          />
        </div>

        {/* Background Type Selection */}
        <hr className="my-4" />
        <h3 className="text-lg font-semibold text-gray-800">Background Options</h3>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-gray-700">Background Type:</label>
            <select
              value={form.bgType}
              onChange={(e) => handleChange('bgType', e.target.value)}
              className="border px-3 py-1 rounded"
            >
              <option value="color">Solid Color</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>

          {form.bgType === "color" && (
            <div>
              <label className="block text-sm mb-1 text-gray-700">Background Color</label>
              <input
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange("bgColor", e.target.value)}
                className="h-10 w-20"
              />
            </div>
          )}

          {form.bgType === "image" && (
            <input
              type="text"
              placeholder="Image URL"
              value={form.bgImage}
              onChange={(e) => handleChange("bgImage", e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          )}

          {form.bgType === "video" && (
            <input
              type="text"
              placeholder="Video URL"
              value={form.bgVideo}
              onChange={(e) => handleChange("bgVideo", e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />
          )}
        </div>

        {/* Glow Effect Toggle */}
        <div className="flex items-center gap-3 mt-4">
          <input
            type="checkbox"
            checked={form.glow}
            onChange={(e) => handleChange("glow", e.target.checked)}
          />
          <span className="text-gray-700">Enable Glow/Blur Effect</span>
        </div>

        {/* Button Styles */}
        <hr className="my-6" />
        <h3 className="text-lg font-semibold text-gray-800">Button Styling</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
            <label className="block text-sm text-gray-700">Text Color</label>
            <input
            type="color"
            value={form.buttonTextColor}
            onChange={(e) => handleChange('buttonTextColor', e.target.value)}
            />
        </div>

        <div>
            <label className="block text-sm text-gray-700">Background Color</label>
            <input
            type="color"
            value={form.buttonBgColor}
            onChange={(e) => handleChange('buttonBgColor', e.target.value)}
            />
        </div>

        <div>
            <label className="block text-sm text-gray-700">Font Size (px)</label>
            <input
            type="number"
            value={parseInt(form.buttonFontSize)}
            onChange={(e) => handleChange('buttonFontSize', e.target.value + 'px')}
            className="w-full border rounded px-2"
            />
        </div>

        <div>
            <label className="block text-sm text-gray-700">Font Family</label>
            <select
            value={form.buttonFont}
            onChange={(e) => handleChange('buttonFont', e.target.value)}
            className="w-full border rounded px-2"
            >
            <option value="sans-serif">Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="monospace">Monospace</option>
            <option value="'Poppins', sans-serif">Poppins</option>
            </select>
        </div>

        <div>
            <label className="block text-sm text-gray-700">Rounded Radius (px)</label>
            <input
            type="number"
            value={parseInt(form.buttonRounded)}
            onChange={(e) => handleChange('buttonRounded', e.target.value + 'px')}
            className="w-full border rounded px-2"
            />
        </div>

        <div className="flex items-center gap-2 mt-6">
            <input
            type="checkbox"
            checked={form.buttonShadow}
            onChange={(e) => handleChange('buttonShadow', e.target.checked)}
            />
            <label className="text-sm text-gray-700">Enable Button Shadow</label>
        </div>
        </div>

      </form>
    </div>
  );
}
