// app/admin/chooseus/page.jsx
'use client';

import { useState, createElement } from 'react';
import {
  Plus,
  Trash,
  Sparkles,
  Target,
  Globe2,
  // Add all Lucide icons here that you want to offer in the editor's icon selector.
  // This list should be comprehensive to give the user choices.
  Lightbulb, ShieldCheck, Rocket, Wrench, Gauge, Briefcase, Layers, Zap, Star, Award, Bell,
  CheckCircle, Cpu, Feather, GitPullRequest, Heart, Key, Leaf, Megaphone, Network, Palette,
  PieChart, RefreshCw, Search, Server, Settings, Sliders, Smartphone, Sunrise, ThumbsUp,
  TrendingUp, Umbrella, Users, Waves, ZapOff,
  FileText, // For section description icon in editor
  Monitor,  // For live preview section icon in editor
  Palette as ColorPalette, // Alias for clarity if using Palette elsewhere
  Type, // For font/text settings
} from 'lucide-react';

// IMPORTANT: Ensure this import path is correct relative to app/admin/chooseus/page.jsx
// It needs to go up 3 levels from app/admin/chooseus to the root, then into 'components'.
import Chooseus from '../../../components/Chooseus';

// Map icon names (strings) to actual Lucide React components
// This object must contain ALL icons that you want the user to be able to select in the editor.
// Ensure this list is consistent with the one in components/Chooseus.jsx for proper rendering.
const iconComponents = {
  Sparkles, Target, Globe2, Lightbulb, ShieldCheck, Rocket, Wrench, Gauge, Briefcase, Layers, Zap, Star, Award, Bell,
  CheckCircle, Cpu, Feather, GitPullRequest, Heart, Key, Leaf, Megaphone, Network, Palette,
  PieChart, RefreshCw, Search, Server, Settings, Sliders, Smartphone, Sunrise, ThumbsUp,
  TrendingUp, Umbrella, Users, Waves, ZapOff,
};

export default function ChooseUsEditorPage() {
  const [form, setForm] = useState({
    sectionTitle: 'Why Choose Us?',
    sectionDesc: 'Discover how Cmplai transforms compliance processes with innovation and expertise.',
    // Dynamic styling options that Chooseus.jsx will now accept as props
    sectionBgColor: '#f0fdf4', // Corresponds to Tailwind bg-teal-50 for default section background
    titleColor: '#0f766e',     // Corresponds to Tailwind text-teal-600
    descColor: '#4b5563',      // Corresponds to Tailwind text-gray-600
    iconColor: '#0f766e',      // Global icon color, also text-teal-600
    pointBgColor: '#ffffff',   // Corresponds to Tailwind bg-white for individual points
    pointBorderColor: '#e0f2f7', // Default border color (e.g., teal-100 or transparent)
    pointHoverBorderColor: '#0d9488', // Corresponds to Tailwind hover:border-teal-500
    pointHoverBgColor: '#f0fdf4',     // Corresponds to Tailwind hover:bg-teal-50
    pointTitleColor: '#1a202c',       // Corresponds to Tailwind text-gray-900
    pointHoverTitleColor: '#0d9488',  // Corresponds to Tailwind group-hover:text-teal-600
    pointDescColor: '#4b5563',        // Corresponds to Tailwind text-gray-600
    iconBaseBgColor: '#e0f2f7',        // Corresponds to Tailwind bg-teal-50 for icon circle
    iconHoverBgColor: '#e0f2f7',      // Corresponds to Tailwind group-hover:bg-teal-100 for icon circle hover

    points: [
      {
        id: `point-${Date.now()}-1`, // Unique ID for each point (important for React keys)
        icon: 'Sparkles', // Stored as a string name for editor control
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
  });

  // Reusable Tailwind CSS classes for consistent input styling
  const commonInputClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400";
  const commonTextareaClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 resize-y focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400";
  const commonSelectClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500";
  const commonColorInputClasses = "h-10 w-full rounded-md border border-gray-300 cursor-pointer";
  const sectionHeaderClasses = "text-xl font-bold text-gray-800 mb-4 flex items-center gap-2";

  // Handles changes for top-level form fields (e.g., sectionTitle, sectionDesc, colors)
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
    if (window.confirm('Are you sure you want to remove this point?')) {
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
    alert('✅ "Why Choose Us" section saved (demo only)'); // Simple alert for demo purposes
    // In a real application, you would send 'form' data to a backend API here.
  };

  // Prepare the configuration object to pass to the Chooseus frontend component.
  // The frontend component expects JSX elements for icons, so we transform the string names.
  const previewConfig = {
    ...form, // Pass all form properties directly
    points: form.points.map(p => {
      const Icon = iconComponents[p.icon]; // Get the Lucide component based on string name
      return {
        ...p,
        // Recreate the JSX element for the icon.
        // The classNames here are just for the editor's internal logic;
        // the Chooseus component will apply its own styles based on passed props.
        icon: Icon ? createElement(Icon) : null,
      };
    }),
  };


  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-xl shadow-lg border border-teal-100 my-10">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Settings className="inline-block w-8 h-8 mr-2 text-teal-600" /> "Why Choose Us" Section Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- General Section Settings --- */}
        <div className="pb-8 border-b border-gray-200">
          <h3 className={sectionHeaderClasses}>
            <ColorPalette className="w-5 h-5 text-gray-600" /> General Section Styling
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Section Background Color */}
            <div>
              <label htmlFor="sectionBgColor" className="block text-sm font-semibold text-gray-700 mb-1">Section Background</label>
              <input
                id="sectionBgColor"
                type="color"
                value={form.sectionBgColor}
                onChange={(e) => handleChange('sectionBgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Section Background Color"
              />
            </div>
            {/* Main Title Color */}
            <div>
              <label htmlFor="titleColor" className="block text-sm font-semibold text-gray-700 mb-1">Title Color</label>
              <input
                id="titleColor"
                type="color"
                value={form.titleColor}
                onChange={(e) => handleChange('titleColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Main Title Color"
              />
            </div>
            {/* Main Description Color */}
            <div>
              <label htmlFor="descColor" className="block text-sm font-semibold text-gray-700 mb-1">Description Color</label>
              <input
                id="descColor"
                type="color"
                value={form.descColor}
                onChange={(e) => handleChange('descColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Main Description Color"
              />
            </div>
            {/* Global Icon Color */}
            <div>
              <label htmlFor="iconColor" className="block text-sm font-semibold text-gray-700 mb-1">Icon Color (Global)</label>
              <input
                id="iconColor"
                type="color"
                value={form.iconColor}
                onChange={(e) => handleChange('iconColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Global Icon Color"
              />
            </div>
            {/* Icon Circle Base Background Color */}
            <div>
              <label htmlFor="iconBaseBgColor" className="block text-sm font-semibold text-gray-700 mb-1">Icon Circle Background</label>
              <input
                id="iconBaseBgColor"
                type="color"
                value={form.iconBaseBgColor}
                onChange={(e) => handleChange('iconBaseBgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Icon Circle Base Background Color"
              />
            </div>
            {/* Icon Circle Hover Background Color */}
            <div>
              <label htmlFor="iconHoverBgColor" className="block text-sm font-semibold text-gray-700 mb-1">Icon Circle Hover Bg</label>
              <input
                id="iconHoverBgColor"
                type="color"
                value={form.iconHoverBgColor}
                onChange={(e) => handleChange('iconHoverBgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Icon Circle Hover Background Color"
              />
            </div>
          </div>
        </div>

        {/* --- Section Title & Description Content --- */}
        <div className="grid md:grid-cols-2 gap-8 pb-8 border-b border-gray-200">
          <div>
            <h3 className={sectionHeaderClasses}>
              <Type className="w-5 h-5 text-gray-600" /> Section Title
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
          </div>

          <div>
            <h3 className={sectionHeaderClasses}>
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
          </div>
        </div>

        {/* --- Individual Value Proposition Points --- */}
        <div>
          <h3 className={sectionHeaderClasses}>
            <Target className="w-5 h-5 text-gray-600" /> Manage Value Proposition Points
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Point specific styling controls, applied globally to all points */}
            <div>
              <label htmlFor="pointBgColor" className="block text-sm font-semibold text-gray-700 mb-1">Point Background</label>
              <input
                id="pointBgColor"
                type="color"
                value={form.pointBgColor}
                onChange={(e) => handleChange('pointBgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Point Background Color"
              />
            </div>
            <div>
              <label htmlFor="pointBorderColor" className="block text-sm font-semibold text-gray-700 mb-1">Point Border</label>
              <input
                id="pointBorderColor"
                type="color"
                value={form.pointBorderColor}
                onChange={(e) => handleChange('pointBorderColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Point Border Color"
              />
            </div>
            <div>
              <label htmlFor="pointHoverBorderColor" className="block text-sm font-semibold text-gray-700 mb-1">Point Hover Border</label>
              <input
                id="pointHoverBorderColor"
                type="color"
                value={form.pointHoverBorderColor}
                onChange={(e) => handleChange('pointHoverBorderColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Point Hover Border Color"
              />
            </div>
            <div>
              <label htmlFor="pointHoverBgColor" className="block text-sm font-semibold text-gray-700 mb-1">Point Hover Background</label>
              <input
                id="pointHoverBgColor"
                type="color"
                value={form.pointHoverBgColor}
                onChange={(e) => handleChange('pointHoverBgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Point Hover Background Color"
              />
            </div>
            <div>
              <label htmlFor="pointTitleColor" className="block text-sm font-semibold text-gray-700 mb-1">Point Title Color</label>
              <input
                id="pointTitleColor"
                type="color"
                value={form.pointTitleColor}
                onChange={(e) => handleChange('pointTitleColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Point Title Color"
              />
            </div>
            <div>
              <label htmlFor="pointHoverTitleColor" className="block text-sm font-semibold text-gray-700 mb-1">Point Hover Title Color</label>
              <input
                id="pointHoverTitleColor"
                type="color"
                value={form.pointHoverTitleColor}
                onChange={(e) => handleChange('pointHoverTitleColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Point Hover Title Color"
              />
            </div>
            <div>
              <label htmlFor="pointDescColor" className="block text-sm font-semibold text-gray-700 mb-1">Point Description Color</label>
              <input
                id="pointDescColor"
                type="color"
                value={form.pointDescColor}
                onChange={(e) => handleChange('pointDescColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Point Description Color"
              />
            </div>
          </div>

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
                      {/* Populate dropdown with all available icon names */}
                      {Object.keys(iconComponents).map((iconName) => (
                        <option key={iconName} value={iconName}>
                          {iconName}
                        </option>
                      ))}
                    </select>
                    {/* Live preview of the selected icon within the editor itself */}
                    {IconComponent && (
                      <div className="p-2 border border-gray-200 rounded-md bg-white flex items-center justify-center">
                        {/* Use the current global icon color for the editor's preview */}
                        <IconComponent className="w-8 h-8" style={{ color: form.iconColor }} aria-hidden="true" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Choose a relevant icon from the list.
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

        {/* --- Live Preview Section --- */}
        <div className="pt-8 border-t border-gray-200">
          <h3 className={sectionHeaderClasses}>
            <Monitor className="w-5 h-5 text-gray-600" /> Live Preview
          </h3>
          <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 overflow-hidden">
            {/* The Chooseus component renders here, receiving the dynamic form data */}
            <Chooseus config={previewConfig} />
          </div>
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