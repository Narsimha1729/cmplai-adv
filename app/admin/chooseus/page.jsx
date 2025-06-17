'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  Sparkles,
  Target,
  Globe2,
  Zap,
  ShieldCheck,
  Lightbulb,
  Rocket,
  BriefcaseBusiness,
  TrendingUp, // New icon
  Handshake, // New icon
  Award, // New icon
  Users, // New icon
  Cog, // New icon
  Diamond, // New icon
  Cloud, // New icon
} from 'lucide-react';

export default function ChooseUsEditor() {
  const [form, setForm] = useState({
    sectionTitle: 'Why Choose Us?',
    sectionDesc: 'Discover how Cmplai transforms compliance processes',
    sectionTitleColor: '#0f766e', // Corresponds to text-teal-600
    sectionDescColor: '#4b5563', // Corresponds to text-gray-600
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
    pointIconColor: '#0f766e', // text-teal-600
    pointTitleColor: '#1a202c', // text-gray-900
    pointDescColor: '#4b5563', // text-gray-600
  });

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const updatePoint = (index, field, value) => {
    const updatedPoints = form.points.map((point, i) =>
      i === index ? { ...point, [field]: value } : point
    );
    setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
  };

  const removePoint = (index) => {
    const updatedPoints = form.points.filter((_, i) => i !== index);
    setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
  };

  const addPoint = () => {
    setForm((prevForm) => ({
      ...prevForm,
      points: [
        ...prevForm.points,
        {
          icon: 'Sparkles',
          title: 'New Feature Highlight',
          desc: 'Describe this new key benefit or feature here.',
        },
      ],
    }));
  };

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
    Zap,
    ShieldCheck,
    Lightbulb,
    Rocket,
    BriefcaseBusiness,
    TrendingUp,
    Handshake,
    Award,
    Users,
    Cog,
    Diamond,
    Cloud,
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        🎨 Choose Us Section Editor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Section Global Settings */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-inner border border-teal-200">
          <h3 className="text-xl font-bold text-teal-800 mb-5 text-center">
            🌍 Section Global Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="sectionTitle" className="font-semibold text-gray-800 block mb-2">
                Section Main Title
              </label>
              <input
                type="text"
                id="sectionTitle"
                value={form.sectionTitle}
                onChange={(e) => handleChange('sectionTitle', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
              />
              <div className="mt-3">
                <label htmlFor="sectionTitleColor" className="text-sm text-gray-700 block mb-1">
                  Title Color
                </label>
                <input
                  type="color"
                  id="sectionTitleColor"
                  value={form.sectionTitleColor}
                  onChange={(e) => handleChange('sectionTitleColor', e.target.value)}
                  className="w-16 h-10 border border-gray-300 rounded-md p-1 cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label htmlFor="sectionDesc" className="font-semibold text-gray-800 block mb-2">
                Section Subtitle (Description)
              </label>
              <input
                type="text"
                id="sectionDesc"
                value={form.sectionDesc}
                onChange={(e) => handleChange('sectionDesc', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
              />
              <div className="mt-3">
                <label htmlFor="sectionDescColor" className="text-sm text-gray-700 block mb-1">
                  Subtitle Color
                </label>
                <input
                  type="color"
                  id="sectionDescColor"
                  value={form.sectionDescColor}
                  onChange={(e) => handleChange('sectionDescColor', e.target.value)}
                  className="w-16 h-10 border border-gray-300 rounded-md p-1 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="sectionBgColor" className="font-semibold text-gray-800 block mb-2">
              Section Background Color
            </label>
            <input
              type="color"
              id="sectionBgColor"
              value={form.sectionBgColor}
              onChange={(e) => handleChange('sectionBgColor', e.target.value)}
              className="w-16 h-10 border border-gray-300 rounded-md p-1 cursor-pointer"
            />
          </div>
        </div>

        {/* Default Point Styles */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-5 text-center">
            🎨 Default Point Card Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="pointIconColor" className="block text-sm text-gray-700 mb-1">
                Icon Color
              </label>
              <input
                type="color"
                id="pointIconColor"
                value={form.pointIconColor}
                onChange={(e) => handleChange('pointIconColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1 cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="pointTitleColor" className="block text-sm text-gray-700 mb-1">
                Title Color
              </label>
              <input
                type="color"
                id="pointTitleColor"
                value={form.pointTitleColor}
                onChange={(e) => handleChange('pointTitleColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1 cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="pointDescColor" className="block text-sm text-gray-700 mb-1">
                Description Color
              </label>
              <input
                type="color"
                id="pointDescColor"
                value={form.pointDescColor}
                onChange={(e) => handleChange('pointDescColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Individual Points Editor */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-inner border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-6 text-center">
            📝 Customize Your Points
          </h3>
          {form.points.map((point, i) => {
            const IconComponent = LucideIcons[point.icon];
            return (
              <div key={i} className="mb-6 bg-white border border-gray-200 rounded-lg p-5 relative shadow-md">
                <button
                  type="button"
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700 transition-colors"
                  onClick={() => removePoint(i)}
                  aria-label={`Remove point ${i + 1}`}
                >
                  <Trash className="w-5 h-5" />
                </button>

                <div className="mb-4">
                  <label htmlFor={`icon-${i}`} className="block text-sm font-medium text-gray-700 mb-2">
                    Icon for Point {i + 1}:
                    {IconComponent && (
                      <IconComponent
                        className="w-6 h-6 inline-block ml-2 align-middle text-teal-600"
                        style={{ color: form.pointIconColor }}
                        aria-hidden="true"
                      />
                    )}
                  </label>
                  <select
                    id={`icon-${i}`}
                    value={point.icon}
                    onChange={(e) => updatePoint(i, 'icon', e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
                  >
                    {Object.keys(LucideIcons).map((iconName) => (
                      <option key={iconName} value={iconName}>
                        {iconName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor={`title-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Title for Point {i + 1}
                  </label>
                  <input
                    type="text"
                    id={`title-${i}`}
                    value={point.title}
                    onChange={(e) => updatePoint(i, 'title', e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-teal-500 focus:border-teal-500 shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor={`desc-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Description for Point {i + 1} (supports HTML for bolding, etc.)
                  </label>
                  <textarea
                    id={`desc-${i}`}
                    rows={4}
                    value={point.desc}
                    onChange={(e) => updatePoint(i, 'desc', e.target.value)}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-teal-500 focus:border-teal-500 resize-y shadow-sm"
                  />
                </div>
              </div>
            );
          })}

          <button
            type="button"
            onClick={addPoint}
            className="flex items-center justify-center gap-2 text-teal-600 hover:text-teal-800 transition-colors mt-6 px-5 py-2 border border-teal-600 rounded-md hover:bg-teal-50 font-semibold w-full"
          >
            <Plus className="w-5 h-5" /> Add New Point
          </button>
        </div>

        {/* Live Preview */}
        <div className="mt-12 p-8 rounded-xl border-4 border-dashed border-purple-300 bg-gradient-to-br from-gray-50 to-white shadow-xl">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            👀 Live Preview
          </h3>
          <section className="py-12 px-4 rounded-lg" style={{ backgroundColor: form.sectionBgColor }}>
            <div className="max-w-6xl mx-auto text-center">
              <h2
                className="text-4xl md:text-5xl font-extrabold mb-5"
                style={{ color: form.sectionTitleColor }}
              >
                {form.sectionTitle}
              </h2>
              <p
                className="mb-14 max-w-2xl mx-auto text-lg md:text-xl"
                style={{ color: form.sectionDescColor }}
              >
                {form.sectionDesc}
              </p>

              <div className="grid gap-10 md:grid-cols-3">
                {form.points.map((point, i) => {
                  const IconComponent = LucideIcons[point.icon];
                  return (
                    <div
                      key={i}
                      className="group bg-white text-center p-8 rounded-xl border border-transparent
                                 hover:border-teal-500 hover:bg-teal-50
                                 shadow-lg hover:shadow-2xl
                                 transform transition-all duration-300 hover:scale-[1.03] cursor-default"
                    >
                      <div className="flex justify-center mb-5">
                        <div className="bg-teal-100 group-hover:bg-teal-200 transition duration-300 rounded-full w-16 h-16 flex items-center justify-center">
                          {IconComponent && (
                            <IconComponent
                              className="w-8 h-8"
                              style={{ color: form.pointIconColor }}
                            />
                          )}
                        </div>
                      </div>
                      <h3
                        className="text-xl font-bold mb-4 group-hover:text-teal-700 transition"
                        style={{ color: form.pointTitleColor }}
                      >
                        {point.title}
                      </h3>
                      <p
                        className="text-base leading-relaxed text-gray-700 transition-all text-justify"
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
        <div className="text-center pt-10">
          <button
            type="submit"
            className="bg-gradient-to-r from-green-500 to-emerald-600 text-white
                       px-12 py-5 font-bold text-xl rounded-xl shadow-2xl
                       hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105
                       focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            💾 Save Choose Us Section Changes
          </button>
        </div>
      </form>
    </div>
  );
}