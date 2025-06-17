// app/admin/chooseus/page.jsx
'use client';

import { useState, createElement } from 'react'; // Import createElement for dynamic JSX creation
import {
  Plus,
  Trash,
  Sparkles,
  Target,
  Globe2,
  // Add other Lucide icons if you want to offer more choices in the editor's icon selector
  Lightbulb,
  ShieldCheck,
  Rocket,
  Settings, // For general section settings icon
  Monitor,  // For live preview section icon
  FileText, // For section description icon
} from 'lucide-react';

// IMPORTANT: Ensure this import path is correct relative to app/admin/chooseus/page.jsx
// It needs to go up 3 levels to reach the root, then down into 'components'.
import Chooseus from '../../../components/Chooseus';

// Map icon names (strings) to actual Lucide React components
// Only include icons here that you want the user to be able to select in the editor.
// These should correspond to the icons imported above.
const iconComponents = {
  Sparkles,
  Target,
  Globe2,
  Lightbulb,
  ShieldCheck,
  Rocket,
  // Add more icons here if you desire more options in the editor's dropdown
};

export default function ChooseUsEditorPage() { // Renamed to clearly denote it's a page component
  const [form, setForm] = useState({
    // These properties directly map to the text content that your Chooseus.jsx uses
    sectionTitle: 'Why Choose Us?',
    sectionDesc: 'Discover how Cmplai transforms compliance processes',

    // Points array: Stores string icon names for editor control.
    // The frontend Chooseus.jsx currently expects JSX elements for icons,
    // so we'll transform this for the live preview.
    points: [
      {
        id: `point-${Date.now()}-1`, // Unique ID for each point (good for React keys)
        icon: 'Sparkles', // Stores the string name of the Lucide icon
        title: 'Industry-First GenAI Automation',
        desc: 'Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>. Our <strong>GenAI-powered</strong> SaaS ERP platform minimizes manual intervention and errors, ensuring unmatched accuracy and regulatory adherence.',
      },
      {
        id: `point-${Date.now()}-2`,
        icon: 'Target',
        title: 'Purpose-Built for Pharma & Manufacturing',
        desc: 'We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, <strong>US-FDA</strong>, and other global standards, so your documentation is always audit-ready and meets the strictest requirements.',
      },
      {
        id: `point-${Date.now()}-3`,
        icon: 'Globe2',
        title: 'Empowering Your Workforce',
        desc: 'We reduce <strong>repetitive manual tasks</strong>, allowing your teams to focus on <strong>high-value work</strong> like innovation and quality enhancement, leading to better resource allocation and job satisfaction.',
      },
    ],

    // IMPORTANT: These are NOT currently used as props in your provided Chooseus.jsx.
    // They are included here in the editor's state as a placeholder if you wish
    // to make these styles dynamic in your Chooseus.jsx later.
    // For now, they primarily serve to visually guide the editor's own background/text colors.
    sectionBgColor: '#ffffff', // Reflects bg-white from your Chooseus.jsx
    titleColor: '#0f766e',     // Reflects text-teal-600 from your Chooseus.jsx
    descColor: '#4b5563',      // Reflects text-gray-600 from your Chooseus.jsx
  });

  // Reusable Tailwind CSS classes for consistent input styling
  const commonInputClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400";
  const commonTextareaClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 resize-y focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400";
  const commonSelectClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500";
  const commonColorInputClasses = "h-10 w-full rounded-md border border-gray-300 cursor-pointer";


  // Handles changes for top-level form fields (e.g., sectionTitle, sectionDesc, bgColor)
  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  // Updates a specific field within a 'point' item by its unique ID
  const updatePoint = (id, field, value) => {
    const updatedPoints = form.points.map((point) =>
      point.id === id ? { ...point, [field]: value } : point
    );
    setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
  };

  // Removes a 'point' item by its unique ID
  const removePoint = (id) => {
    if (window.confirm('Are you sure you want to remove this point?')) { // Using window.confirm for simplicity in demo
      const updatedPoints = form.points.filter((point) => point.id !== id);
      setForm((prevForm) => ({ ...prevForm, points: updatedPoints }));
    }
  };

  // Adds a new blank 'point' item with a unique ID and default values
  const addPoint = () => {
    setForm((prevForm) => ({
      ...prevForm,
      points: [
        ...prevForm.points,
        {
          id: `point-${Date.now()}`, // Generate a new unique ID
          icon: 'Sparkles', // Default icon for new points
          title: 'New Point Title',
          desc: 'Brief description for the new point.',
        },
      ],
    }));
  };

  // Handles form submission (e.g., sending data to a backend API)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Choose Us section data:', form);
    alert('✅ "Why Choose Us" section saved (demo only)'); // Using alert for simplicity in demo
  };

  // PREPARE CONFIG FOR LIVE PREVIEW:
  // Your Chooseus.jsx component expects `point.icon` to be a JSX element,
  // but our editor's state `form.points[].icon` stores a string name.
  // We need to transform the data for the preview.
  const previewConfig = {
    sectionTitle: form.sectionTitle,
    sectionDesc: form.sectionDesc,
    // Transform points to match the Chooseus.jsx's expected icon format
    points: form.points.map(p => {
      const Icon = iconComponents[p.icon]; // Get the Lucide component based on string name
      return {
        ...p,
        // Recreate the JSX element with the class names expected by your Chooseus.jsx
        icon: Icon ? createElement(Icon, { className: "w-6 h-6 text-teal-600" }) : null,
      };
    }),
    // Pass other relevant simple style properties (if Chooseus.jsx was dynamic for them)
    // For now, Chooseus.jsx's colors are hardcoded, but if you change it, this would send them.
    titleColor: form.titleColor,
    descColor: form.descColor,
    bgColor: form.bgColor,
  };


  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-xl shadow-lg border border-teal-100 my-10">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Settings className="inline-block w-8 h-8 mr-2 text-teal-600" /> "Why Choose Us" Section Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- Section General Settings --- */}
        {/* Note: Based on your Chooseus.jsx, only the background color is explicitly dynamic.
            Other colors like title/desc/icon colors are hardcoded in Chooseus.jsx.
            If you want them editable, you need to modify Chooseus.jsx to accept them as props.
        */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-600" /> General Section Styling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Section Background Color */}
            <div>
              <label htmlFor="bgColor" className="block text-sm font-semibold text-gray-700 mb-1">Section Background Color</label>
              <input
                id="bgColor"
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange('bgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Section Background Color"
              />
              <p className="text-xs text-gray-500 mt-1">Changes the background of the entire section.</p>
            </div>
            {/* If Chooseus.jsx was dynamic for other colors, their inputs would go here. */}
            {/* Example if it became dynamic:
            <div>
              <label htmlFor="globalIconColor" className="block text-sm font-semibold text-gray-700 mb-1">Global Icon Color</label>
              <input
                id="globalIconColor"
                type="color"
                value={form.globalIconColor}
                onChange={(e) => handleChange('globalIconColor', e.target.value)}
                className={commonColorInputClasses}
              />
              <p className="text-xs text-gray-500 mt-1">Note: Your frontend component currently hardcodes icon color to teal-600.</p>
            </div>
            */}
          </div>
        </div>

        {/* --- Section Title & Description Content --- */}
        <div className="grid md:grid-cols-2 gap-8 pb-6 border-b border-gray-200">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gray-600" /> Section Title
            </h3>
            <label htmlFor="sectionTitle" className="sr-only">Section Title Text</label>
            <input
              id="sectionTitle"
              type="text"
              value={form.sectionTitle}
              onChange={(e) => handleChange('sectionTitle', e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Why Choose Cmplai?"
            />
            {/* If your Chooseus.jsx accepted dynamic title colors/fonts, inputs would be here. */}
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-600" /> Section Description
            </h3>
            <label htmlFor="sectionDesc" className="sr-only">Section Subtitle / Description Text</label>
            <input
              id="sectionDesc"
              type="text"
              value={form.sectionDesc}
              onChange={(e) => handleChange('sectionDesc', e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Our unique value proposition..."
            />
            {/* If your Chooseus.jsx accepted dynamic description colors/fonts, inputs would be here. */}
          </div>
        </div>

        {/* --- Individual Value Proposition Points --- */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3 border-gray-200 flex items-center gap-2">
            <Target className="w-5 h-5 text-gray-600" /> Manage Value Proposition Points
          </h3>
          {form.points.map((point, i) => {
            const IconComponent = iconComponents[point.icon]; // Get the actual Lucide component for editor's internal preview
            return (
              <div
                key={point.id} // Use unique ID as key for stable list rendering
                className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 relative"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-gray-700">
                    Point #{i + 1}
                  </h4>
                  <button
                    type="button"
                    className="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium bg-red-50/50 hover:bg-red-100"
                    onClick={() => removePoint(point.id)}
                    aria-label={`Remove Point ${i + 1}`}
                  >
                    <Trash className="w-4 h-4" /> Remove
                  </button>
                </div>

                {/* Icon Selection */}
                <div className="mb-4">
                  <label
                    htmlFor={`point-icon-${point.id}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Select Icon
                  </label>
                  <div className="flex items-center gap-3">
                    <select
                      id={`point-icon-${point.id}`}
                      value={point.icon}
                      onChange={(e) => updatePoint(point.id, 'icon', e.target.value)}
                      className={commonSelectClasses}
                      aria-label="Select icon for this point"
                    >
                      {Object.keys(iconComponents).map((iconName) => (
                        <option key={iconName} value={iconName}>
                          {iconName}
                        </option>
                      ))}
                    </select>
                    {/* Live preview of the selected icon within the editor itself */}
                    {IconComponent && (
                      <div className="p-2 border border-gray-200 rounded-md bg-white flex items-center justify-center">
                        {/* The icon in the editor preview uses the specific color from your Chooseus.jsx */}
                        <IconComponent className="w-8 h-8 text-teal-600" aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Choose a relevant icon from the list. (Note: Icon color is hardcoded to teal-600 in your frontend component).
                  </p>
                </div>

                {/* Title Input */}
                <div className="mb-4">
                  <label
                    htmlFor={`point-title-${point.id}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Point Title
                  </label>
                  <input
                    id={`point-title-${point.id}`}
                    type="text"
                    value={point.title}
                    onChange={(e) => updatePoint(point.id, 'title', e.target.value)}
                    className={commonInputClasses}
                    placeholder="e.g., Streamlined Workflows"
                  />
                </div>

                {/* Description Textarea */}
                <div className="mb-2">
                  <label
                    htmlFor={`point-desc-${point.id}`}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Point Description (supports basic HTML like &lt;strong&gt;)
                  </label>
                  <textarea
                    id={`point-desc-${point.id}`}
                    rows={4}
                    value={point.desc}
                    onChange={(e) => updatePoint(point.id, 'desc', e.target.value)}
                    className={commonTextareaClasses}
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

        {/* Live Preview Section */}
        <div className="pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-5 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-gray-600" /> Live Preview
          </h3>
          <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50">
            {/*
              Pass the 'previewConfig' to the Chooseus component.
              This config contains the transformed 'points' array where each icon is
              a JSX element, matching what your Chooseus.jsx component expects.
            */}
            <Chooseus config={previewConfig} />
          </div>
        </div>

        {/* Save Button */}
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