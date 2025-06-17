'use client';

import { useState } from 'react';
import { Plus, Trash, Sparkles, Target, Globe2 } from 'lucide-react'; // Import specific icons

export default function ChooseUsEditor() {
  const [form, setForm] = useState({
    sectionTitle: 'Why Choose Us?',
    sectionDesc: 'Discover how Cmplai transforms compliance processes',
    titleColor: '#000000', // Changed to black
    titleSize: '36px',
    descColor: '#000000', // Changed to black
    descSize: '18px',

    iconColor: '#0f766e',
    bgColor: '#ffffff',

    points: [
      {
        icon: 'Sparkles',
        title: 'Industry-First GenAI Automation',
        desc: 'Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>...',
      },
      {
        icon: 'Target',
        title: 'Purpose-Built for Pharma & Manufacturing',
        desc: 'We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, and more...',
      },
      {
        icon: 'Globe2',
        title: 'Empowering Your Workforce',
        desc: 'We reduce <strong>manual tasks</strong>, allowing your teams to focus on <strong>innovation</strong> and quality...',
      },
    ],
  });

  // Handle changes for top-level form fields
  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  // Update a specific point's field
  const updatePoint = (index, field, value) => {
    const updatedPoints = form.points.map((point, i) =>
      i === index ? { ...point, [field]: value } : point
    );
    setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
  };

  // Remove a point by index
  const removePoint = (index) => {
    const updatedPoints = form.points.filter((_, i) => i !== index);
    setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
  };

  // Add a new empty point
  const addPoint = () => {
    setForm((prevForm) => ({
      ...prevForm,
      points: [
        ...prevForm.points,
        {
          icon: 'Sparkles', // Default icon for new points
          title: '',
          desc: '',
        },
      ],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Choose Us section saved successfully! (This is a demo)');
    console.log('Saved form data:', form);
  };

  // Map icon names to their respective Lucide components
  const LucideIcons = {
    Sparkles,
    Target,
    Globe2,
    // Add other icons here as needed, e.g.,
    // 'Bell': Bell,
    // 'Zap': Zap,
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Choose Us – Admin Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Section Title */}
        <div>
          <label htmlFor="sectionTitle" className="font-semibold text-black">
            Section Title
          </label>
          <input
            type="text"
            id="sectionTitle"
            value={form.sectionTitle}
            onChange={(e) => handleChange('sectionTitle', e.target.value)}
            className="w-full mt-1 p-2 border rounded text-black"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <label htmlFor="titleColor" className="sr-only">Title Color</label>
            <input
              type="color"
              id="titleColor"
              value={form.titleColor}
              onChange={(e) => handleChange('titleColor', e.target.value)}
              className="w-full h-10"
            />
            <label htmlFor="titleSize" className="sr-only">Title Font Size</label>
            <input
              type="number"
              id="titleSize"
              value={parseInt(form.titleSize)}
              onChange={(e) => handleChange('titleSize', `${e.target.value}px`)}
              placeholder="Font size"
              className="border p-1 rounded text-black"
            />
          </div>
        </div>

        {/* Section Description (Subtitle) */}
        <div>
          <label htmlFor="sectionDesc" className="font-semibold text-black">
            Subtitle
          </label>
          <input
            type="text"
            id="sectionDesc"
            value={form.sectionDesc}
            onChange={(e) => handleChange('sectionDesc', e.target.value)}
            className="w-full mt-1 p-2 border rounded text-black"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <label htmlFor="descColor" className="sr-only">Description Color</label>
            <input
              type="color"
              id="descColor"
              value={form.descColor}
              onChange={(e) => handleChange('descColor', e.target.value)}
              className="w-full h-10"
            />
            <label htmlFor="descSize" className="sr-only">Description Font Size</label>
            <input
              type="number"
              id="descSize"
              value={parseInt(form.descSize)}
              onChange={(e) => handleChange('descSize', `${e.target.value}px`)}
              placeholder="Font size"
              className="border p-1 rounded text-black"
            />
          </div>
        </div>

        {/* Background & Icon Color */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="bgColor" className="font-semibold text-black">
              Background Color
            </label>
            <input
              type="color"
              id="bgColor"
              value={form.bgColor}
              onChange={(e) => handleChange('bgColor', e.target.value)}
              className="w-20 h-10"
            />
          </div>
          <div>
            <label htmlFor="iconColor" className="font-semibold text-black">
              Icon Color
            </label>
            <input
              type="color"
              id="iconColor"
              value={form.iconColor}
              onChange={(e) => handleChange('iconColor', e.target.value)}
              className="w-20 h-10"
            />
          </div>
        </div>

        {/* Cards (Points) */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-black">Points</h3>
          {form.points.map((point, i) => {
            const IconComponent = LucideIcons[point.icon]; // Get the icon component dynamically
            return (
              <div key={i} className="mb-6 border rounded p-4 bg-gray-50 relative">
                <button
                  type="button"
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition-colors"
                  onClick={() => removePoint(i)}
                  aria-label={`Remove point ${i + 1}`}
                >
                  <Trash className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 mb-2">
                  <label htmlFor={`icon-${i}`} className="text-sm font-medium text-black">
                    Icon
                  </label>
                  {IconComponent && (
                    <IconComponent
                      className="w-5 h-5"
                      style={{ color: form.iconColor }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <select
                  id={`icon-${i}`}
                  value={point.icon}
                  onChange={(e) => updatePoint(i, 'icon', e.target.value)}
                  className="w-full border rounded p-2 mb-2 text-black"
                >
                  {Object.keys(LucideIcons).map((iconName) => (
                    <option key={iconName} value={iconName}>
                      {iconName}
                    </option>
                  ))}
                </select>

                <label htmlFor={`title-${i}`} className="text-sm font-medium text-black">
                  Title
                </label>
                <input
                  type="text"
                  id={`title-${i}`}
                  value={point.title}
                  onChange={(e) => updatePoint(i, 'title', e.target.value)}
                  className="w-full border rounded p-2 mb-2 text-black"
                />

                <label htmlFor={`desc-${i}`} className="text-sm font-medium text-black">
                  Description (supports HTML)
                </label>
                <textarea
                  id={`desc-${i}`}
                  rows={3}
                  value={point.desc}
                  onChange={(e) => updatePoint(i, 'desc', e.target.value)}
                  className="w-full border rounded p-2 text-black"
                />
              </div>
            );
          })}

          <button
            type="button"
            onClick={addPoint}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors mt-2"
          >
            <Plus className="w-4 h-4" /> Add More
          </button>
        </div>

        {/* Save Button */}
        <div className="text-right pt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Save Section
          </button>
        </div>
      </form>
    </div>
  );
}