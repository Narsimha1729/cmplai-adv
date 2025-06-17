'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  Sparkles,
  Target,
  Globe2,
  Lightbulb, // Added more icons for variety
  ShieldCheck,
  Rocket,
  Wrench,
  Gauge,
  Briefcase,
  Layers,
  Zap,
} from 'lucide-react';

// Map icon names to actual Lucide React components
const iconComponents = {
  Sparkles,
  Target,
  Globe2,
  Lightbulb,
  ShieldCheck,
  Rocket,
  Wrench,
  Gauge,
  Briefcase,
  Layers,
  Zap,
};

export default function ChooseUsEditor() {
  const [form, setForm] = useState({
    sectionTitle: 'Why Choose Us?',
    sectionDesc: 'Discover how Cmplai transforms compliance processes.',
    titleColor: '#0f766e',
    titleSize: '36px',
    descColor: '#4b5563',
    descSize: '18px',
    // Added font family for section title and description
    titleFont: 'sans-serif',
    descFont: 'sans-serif',

    iconColor: '#0f766e',
    bgColor: '#ffffff',

    points: [
      {
        icon: 'Sparkles', // Stores the string name of the Lucide icon
        title: 'Industry-First GenAI Automation',
        desc: 'Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>.',
      },
      {
        icon: 'Target',
        title: 'Purpose-Built for Pharma & Manufacturing',
        desc: 'We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, and more.',
      },
      {
        icon: 'Globe2',
        title: 'Empowering Your Workforce',
        desc: 'We reduce <strong>manual tasks</strong>, allowing your teams to focus on <strong>innovation</strong> and quality.',
      },
    ],
  });

  // Handle changes for top-level form fields (sectionTitle, bgColor, etc.)
  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  // Update a specific field within a 'point' item
  const updatePoint = (index, field, value) => {
    const updatedPoints = [...form.points];
    updatedPoints[index][field] = value;
    setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
  };

  // Remove a 'point' item by index
  const removePoint = (index) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure you want to remove this point?')) {
      const updatedPoints = [...form.points];
      updatedPoints.splice(index, 1);
      setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
    }
  };

  // Add a new blank 'point' item
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
    console.log('Saved ChooseUs section data:', form);
    // In a real application, you'd send 'form' data to a backend API here.
    // eslint-disable-next-line no-alert
    alert('✅ "Why Choose Us" section saved (demo only)');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-8">
        🌟 "Why Choose Us" Section Editor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Section Title & Description Controls */}
        <div className="grid md:grid-cols-2 gap-8 pb-6 border-b border-gray-200">
          <div>
            <label
              htmlFor="sectionTitle"
              className="block font-semibold text-gray-800 mb-2"
            >
              Section Title
            </label>
            <input
              id="sectionTitle"
              type="text"
              value={form.sectionTitle}
              onChange={(e) => handleChange('sectionTitle', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., Why Choose Cmplai?"
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label htmlFor="titleColor" className="sr-only">
                  Title Color
                </label>
                <input
                  id="titleColor"
                  type="color"
                  value={form.titleColor}
                  onChange={(e) => handleChange('titleColor', e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                  title="Choose Section Title Color"
                />
              </div>
              <div>
                <label htmlFor="titleSize" className="sr-only">
                  Title Font Size (px)
                </label>
                <input
                  id="titleSize"
                  type="number"
                  value={parseInt(form.titleSize, 10)}
                  onChange={(e) => handleChange('titleSize', `${e.target.value}px`)}
                  placeholder="Size (px)"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Title Font Size"
                />
              </div>
              <div>
                <label htmlFor="titleFont" className="sr-only">
                  Title Font
                </label>
                <select
                  id="titleFont"
                  value={form.titleFont}
                  onChange={(e) => handleChange('titleFont', e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Title Font"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Inter', sans-serif">Inter</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="sectionDesc"
              className="block font-semibold text-gray-800 mb-2"
            >
              Section Subtitle / Description
            </label>
            <input
              id="sectionDesc"
              type="text"
              value={form.sectionDesc}
              onChange={(e) => handleChange('sectionDesc', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., Our unique value proposition..."
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label htmlFor="descColor" className="sr-only">
                  Subtitle Color
                </label>
                <input
                  id="descColor"
                  type="color"
                  value={form.descColor}
                  onChange={(e) => handleChange('descColor', e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                  title="Choose Section Subtitle Color"
                />
              </div>
              <div>
                <label htmlFor="descSize" className="sr-only">
                  Subtitle Font Size (px)
                </label>
                <input
                  id="descSize"
                  type="number"
                  value={parseInt(form.descSize, 10)}
                  onChange={(e) => handleChange('descSize', `${e.target.value}px`)}
                  placeholder="Size (px)"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Subtitle Font Size"
                />
              </div>
              <div>
                <label htmlFor="descFont" className="sr-only">
                  Subtitle Font
                </label>
                <select
                  id="descFont"
                  value={form.descFont}
                  onChange={(e) => handleChange('descFont', e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Subtitle Font"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="'Inter', sans-serif">Inter</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Global Colors: Background & Icon */}
        <div className="grid grid-cols-2 gap-8 pb-6 border-b border-gray-200">
          <div>
            <label
              htmlFor="bgColor"
              className="block font-semibold text-gray-800 mb-2"
            >
              Section Background Color
            </label>
            <input
              id="bgColor"
              type="color"
              value={form.bgColor}
              onChange={(e) => handleChange('bgColor', e.target.value)}
              className="h-10 w-24 rounded-md border border-gray-300 cursor-pointer"
              title="Choose Section Background Color"
            />
            <p className="text-sm text-gray-500 mt-1">
              This color applies to the background of the entire "Why Choose Us"
              section.
            </p>
          </div>
          <div>
            <label
              htmlFor="iconColor"
              className="block font-semibold text-gray-800 mb-2"
            >
              Global Icon Color
            </label>
            <input
              id="iconColor"
              type="color"
              value={form.iconColor}
              onChange={(e) => handleChange('iconColor', e.target.value)}
              className="h-10 w-24 rounded-md border border-gray-300 cursor-pointer"
              title="Choose Icon Color for all points"
            />
            <p className="text-sm text-gray-500 mt-1">
              Sets the color for all icons in the points below.
            </p>
          </div>
        </div>

        {/* --- Editable Points --- */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3 border-gray-200">
            Individual Value Proposition Points
          </h3>
          {form.points.map((point, i) => {
            const IconComponent = iconComponents[point.icon]; // Get the actual component
            return (
              <div
                key={i} // Using index as key is acceptable here for a static/append-only list
                className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 relative"
              >
                {/* Point Header with Remove Button */}
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-700">
                    Point #{i + 1}
                  </h4>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium bg-red-50/50 hover:bg-red-100"
                    onClick={() => removePoint(i)}
                    aria-label={`Remove Point ${i + 1}`}
                  >
                    <Trash className="w-4 h-4" /> Remove
                  </button>
                </div>

                {/* Icon Selection */}
                <div className="mb-4">
                  <label
                    htmlFor={`point-icon-${i}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Icon
                  </label>
                  <div className="flex items-center gap-3">
                    <select
                      id={`point-icon-${i}`}
                      value={point.icon}
                      onChange={(e) => updatePoint(i, 'icon', e.target.value)}
                      className="flex-grow border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                      aria-label="Select icon for this point"
                    >
                      {Object.keys(iconComponents).map((iconName) => (
                        <option key={iconName} value={iconName}>
                          {iconName}
                        </option>
                      ))}
                    </select>
                    {/* Icon Preview */}
                    {IconComponent && (
                      <div
                        className="p-2 border border-gray-200 rounded-md bg-white flex items-center justify-center"
                        style={{ backgroundColor: form.bgColor }}
                      >
                        <IconComponent
                          className="w-8 h-8"
                          style={{ color: form.iconColor }}
                          aria-hidden="true" // Icon is decorative
                        />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Choose a relevant icon from the list (color applied globally).
                  </p>
                </div>

                {/* Title Input */}
                <div className="mb-4">
                  <label
                    htmlFor={`point-title-${i}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Point Title
                  </label>
                  <input
                    id={`point-title-${i}`}
                    type="text"
                    value={point.title}
                    onChange={(e) => updatePoint(i, 'title', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                    placeholder="e.g., Streamlined Workflows"
                  />
                </div>

                {/* Description Textarea */}
                <div className="mb-2">
                  <label
                    htmlFor={`point-desc-${i}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Point Description (supports basic HTML like &lt;strong&gt;)
                  </label>
                  <textarea
                    id={`point-desc-${i}`}
                    rows={4}
                    value={point.desc}
                    onChange={(e) => updatePoint(i, 'desc', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                    placeholder="Describe the benefit or feature here. You can use <strong> for bold text."
                  />
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={addPoint}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium mt-6"
          >
            <Plus className="w-5 h-5" /> Add New Point
          </button>
        </div>

        {/* --- Save Button --- */}
        <div className="text-right pt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Save "Why Choose Us" Section
          </button>
        </div>
      </form>
    </div>
  );
}