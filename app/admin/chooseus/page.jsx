'use client';

import { useState } from 'react';
import { Plus, Trash, Sparkles, Target, Globe2 } from 'lucide-react';

export default function ChooseUsEditor() {
  const [form, setForm] = useState({
    sectionTitle: 'Why Choose Us?',
    sectionDesc: 'Discover how Cmplai transforms compliance processes',
    sectionTitleColor: '#0f766e', // Corresponds to text-teal-600 in original frontend
    sectionDescColor: '#4b5563', // Corresponds to text-gray-600 in original frontend
    sectionBgColor: '#ffffff', // Corresponds to bg-white for the section

    points: [
      {
        icon: 'Sparkles',
        title: 'Industry-First GenAI Automation',
        desc: 'Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>. Our <strong>GenAI-powered</strong> SaaS ERP platform minimizes manual intervention and errors, ensuring unmatched accuracy and regulatory adherence.',
      },
      {
        icon: 'Target',
        title: 'Purpose-Built for Pharma & Manufacturing',
        desc: 'We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, <strong>US-FDA</strong>, and other global standards, so your documentation is always audit-ready and meets the strictest requirements.',
      },
      {
        icon: 'Globe2',
        title: 'Empowering Your Workforce',
        desc: 'We reduce <strong>repetitive manual tasks</strong>, allowing your teams to focus on <strong>high-value work</strong> like innovation and quality enhancement, leading to better resource allocation and job satisfaction.',
      },
    ],
    // Default icon color for points (from the original frontend)
    pointIconColor: '#0f766e', // text-teal-600
    pointTitleColor: '#1a202c', // text-gray-900 (converted from a common dark gray)
    pointDescColor: '#4b5563', // text-gray-600
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
    // Add more Lucide icons here if needed for selection
    // Example: 'CheckCircle': CheckCircle,
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
            className="w-full mt-1 p-2 border rounded text-black focus:ring-teal-500 focus:border-teal-500"
          />
          <div className="mt-2">
            <label htmlFor="sectionTitleColor" className="text-sm text-black">Title Color</label>
            <input
              type="color"
              id="sectionTitleColor"
              value={form.sectionTitleColor}
              onChange={(e) => handleChange('sectionTitleColor', e.target.value)}
              className="w-16 h-10 border rounded p-1"
            />
          </div>
        </div>

        {/* Section Description */}
        <div>
          <label htmlFor="sectionDesc" className="font-semibold text-black">
            Subtitle (Section Description)
          </label>
          <input
            type="text"
            id="sectionDesc"
            value={form.sectionDesc}
            onChange={(e) => handleChange('sectionDesc', e.target.value)}
            className="w-full mt-1 p-2 border rounded text-black focus:ring-teal-500 focus:border-teal-500"
          />
          <div className="mt-2">
            <label htmlFor="sectionDescColor" className="text-sm text-black">Subtitle Color</label>
            <input
              type="color"
              id="sectionDescColor"
              value={form.sectionDescColor}
              onChange={(e) => handleChange('sectionDescColor', e.target.value)}
              className="w-16 h-10 border rounded p-1"
            />
          </div>
        </div>

        {/* Section Background Color */}
        <div>
          <label htmlFor="sectionBgColor" className="font-semibold text-black">
            Section Background Color
          </label>
          <input
            type="color"
            id="sectionBgColor"
            value={form.sectionBgColor}
            onChange={(e) => handleChange('sectionBgColor', e.target.value)}
            className="w-16 h-10 border rounded p-1"
          />
        </div>

        {/* Point/Card Styles */}
        <div className="pb-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-black mb-2">Default Point Styles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="pointIconColor" className="block text-sm text-black mb-1">
                Icon Color
              </label>
              <input
                type="color"
                id="pointIconColor"
                value={form.pointIconColor}
                onChange={(e) => handleChange('pointIconColor', e.target.value)}
                className="w-full h-10 border rounded p-1"
              />
            </div>
            <div>
              <label htmlFor="pointTitleColor" className="block text-sm text-black mb-1">
                Title Color
              </label>
              <input
                type="color"
                id="pointTitleColor"
                value={form.pointTitleColor}
                onChange={(e) => handleChange('pointTitleColor', e.target.value)}
                className="w-full h-10 border rounded p-1"
              />
            </div>
            <div>
              <label htmlFor="pointDescColor" className="block text-sm text-black mb-1">
                Description Color
              </label>
              <input
                type="color"
                id="pointDescColor"
                value={form.pointDescColor}
                onChange={(e) => handleChange('pointDescColor', e.target.value)}
                className="w-full h-10 border rounded p-1"
              />
            </div>
          </div>
        </div>

        {/* Cards (Points) */}
        <div>
          <h3 className="text-xl font-bold text-black mb-4">Points</h3>
          {form.points.map((point, i) => {
            const IconComponent = LucideIcons[point.icon]; // Get the icon component dynamically
            return (
              <div key={i} className="mb-6 border rounded p-4 bg-gray-50 relative shadow-sm">
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
                      style={{ color: form.pointIconColor }} // Use pointIconColor
                      aria-hidden="true"
                    />
                  )}
                </div>
                <select
                  id={`icon-${i}`}
                  value={point.icon}
                  onChange={(e) => updatePoint(i, 'icon', e.target.value)}
                  className="w-full border rounded p-2 mb-2 text-black focus:ring-teal-500 focus:border-teal-500"
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
                  className="w-full border rounded p-2 mb-2 text-black focus:ring-teal-500 focus:border-teal-500"
                />

                <label htmlFor={`desc-${i}`} className="text-sm font-medium text-black">
                  Description (supports HTML)
                </label>
                <textarea
                  id={`desc-${i}`}
                  rows={3}
                  value={point.desc}
                  onChange={(e) => updatePoint(i, 'desc', e.target.value)}
                  className="w-full border rounded p-2 text-black focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            );
          })}

          <button
            type="button"
            onClick={addPoint}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors mt-2"
          >
            <Plus className="w-4 h-4" /> Add New Point
          </button>
        </div>

        {/* --- Live Preview --- */}
        {/*
          IMPORTANT: This section is left untouched as per your instruction.
          Any changes requested for polishing or improving the code were applied
          only to the editor controls above this point.
        */}
        <div className="mt-10 p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner bg-gray-50">
          <h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">👁️ Live Preview</h3>
          <section className="py-12 px-4" style={{ backgroundColor: form.sectionBgColor }}>
            <div className="max-w-6xl mx-auto text-center">
              <h2
                className="text-3xl md:text-4xl font-extrabold mb-4"
                style={{ color: form.sectionTitleColor }}
              >
                {form.sectionTitle}
              </h2>
              <p
                className="mb-12 max-w-2xl mx-auto"
                style={{ color: form.sectionDescColor }}
              >
                {form.sectionDesc}
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                {form.points.map((point, i) => {
                  const IconComponent = LucideIcons[point.icon];
                  return (
                    <div
                      key={i}
                      className="group bg-white text-center px-6 py-8 rounded-xl border border-transparent
                                 hover:border-teal-500 hover:bg-teal-50
                                 shadow-md hover:shadow-xl
                                 transform transition-all duration-300 hover:scale-[1.03] cursor-default"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="bg-teal-50 group-hover:bg-teal-100 transition duration-300 rounded-full w-12 h-12 flex items-center justify-center">
                          {IconComponent && (
                            <IconComponent
                              className="w-6 h-6"
                              style={{ color: form.pointIconColor }}
                            />
                          )}
                        </div>
                      </div>
                      <h3
                        className="text-lg font-semibold mb-3 group-hover:text-teal-600 transition"
                        style={{ color: form.pointTitleColor }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed text-justify transition-all"
                        style={{ color: form.pointDescColor }}
                        dangerouslySetInnerHTML={{ __html: point.desc }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Save Button */}
        <div className="text-right pt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Save Choose Us Section
          </button>
        </div>
      </form>
    </div>
  );
}