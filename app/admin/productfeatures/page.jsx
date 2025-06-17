'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  Zap,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
  Users,
  Palette,
  Text,
  LayoutGrid, // For features grid
  Monitor, // For media/background
  SlidersHorizontal, // For general settings
  Save, // For save button
} from 'lucide-react';

// Centralized icon mapping for consistency
const ICON_OPTIONS_MAP = {
  zap: { component: <Zap />, name: "Zap (Lightning)" },
  shield: { component: <ShieldCheck />, name: "Shield (Security)" },
  file: { component: <FileText />, name: "File (Document)" },
  clock: { component: <Clock />, name: "Clock (Time)" },
  check: { component: <CheckCircle />, name: "Check (Success)" },
  users: { component: <Users />, name: "Users (Community)" },
};

export default function ProductFeaturesEditor() {
  const [form, setForm] = useState({
    heading: 'Product Features',
    headingColor: '#0f766e',
    headingFontSize: '36px',
    headingFontWeight: '800', // New: heading font weight
    headingAlignment: 'center', // New: heading alignment

    subheading: 'Comprehensive solutions to transform your compliance processes',
    subheadingColor: '#4b5563',
    subheadingFontSize: '18px',
    subheadingFontWeight: '400', // New: subheading font weight
    subheadingAlignment: 'center', // New: subheading alignment

    sectionPaddingY: '96px', // New: vertical padding for section
    sectionPaddingX: '16px', // New: horizontal padding for section

    bgType: 'color', // color, image, video
    bgColor: '#ffffff',
    bgImage: '', // URL
    bgVideo: '', // URL
    mediaAlt: 'Product Features Section Background', // Alt text for image/video
    overlayColor: 'rgba(0, 0, 0, 0.0)', // New: overlay for background media

    showButton: true,
    buttonText: 'Request a Demo',
    buttonHref: '/#demo', // New: button link
    buttonBgColor: '#00b4bc', // New: button background color
    buttonTextColor: '#ffffff', // New: button text color
    buttonHoverBgColor: '#008c96', // New: button hover background
    buttonHoverTextColor: '#ffffff', // New: button hover text

    featureIconColor: '#00b4bc', // New: feature icon color
    featureTextColor: '#333333', // New: feature text color
    featureCardBgColor: '#f8fafc', // New: feature card background
    featureCardBorderColor: '#e2e8f0', // New: feature card border
    featureCardHoverBgColor: '#e0f7fa', // New: feature card hover bg
    featureCardShadow: 'md', // New: feature card shadow
    featuresGridCols: 3, // New: grid columns for features

    features: [
      { icon: 'zap', text: 'AI-powered document automation reducing compliance workload by 70%, streamlining operations.' },
      { icon: 'shield', text: 'Regulatory-ready templates ensuring 100% compliance with global standards, mitigating risks.' },
      { icon: 'file', text: 'Centralized document management for easy access and version control, improving efficiency.' },
      { icon: 'clock', text: 'Real-time compliance monitoring with instant alerts for regulatory changes, staying ahead.' },
    ],
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleFeatureChange = (i, field, value) => {
    const updated = [...form.features];
    updated[i][field] = value;
    setForm({ ...form, features: updated });
  };

  const addFeature = () => {
    setForm({ ...form, features: [...form.features, { icon: 'zap', text: '' }] });
  };

  const removeFeature = (i) => {
    const updated = [...form.features];
    updated.splice(i, 1);
    setForm({ ...form, features: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Product Features:', form);
    alert('Product Features configuration saved! (Demo only)');
    // In a real application, you would send this 'form' data to your backend API
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';
  const commonColorInputClasses = 'h-10 w-full border border-gray-300 rounded-md p-1';
  const commonSelectClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';


  // Get Tailwind shadow class from string
  const getShadowClass = (shadowValue) => {
    switch (shadowValue) {
      case 'sm': return 'shadow-sm';
      case 'md': return 'shadow-md';
      case 'lg': return 'shadow-lg';
      case 'xl': return 'shadow-xl';
      case '2xl': return 'shadow-2xl';
      case 'none': return 'shadow-none';
      default: return 'shadow-md';
    }
  };


  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <SlidersHorizontal className="inline-block w-8 h-8 mr-2 text-teal-600" /> Product Features Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* --- Section Content & Basic Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Text className="w-5 h-5 text-gray-600" /> Section Content & Layout
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Heading */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Heading Text</label>
              <input
                value={form.heading}
                onChange={(e) => handleChange('heading', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Our Unique Features"
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Color</label>
                  <input
                    type="color"
                    value={form.headingColor}
                    onChange={(e) => handleChange('headingColor', e.target.value)}
                    className={commonColorInputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Size (px)</label>
                  <input
                    type="number"
                    value={parseInt(form.headingFontSize)}
                    onChange={(e) => handleChange('headingFontSize', `${e.target.value}px`)}
                    className={commonInputClasses}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Weight</label>
                  <select
                    value={form.headingFontWeight}
                    onChange={(e) => handleChange('headingFontWeight', e.target.value)}
                    className={commonSelectClasses}
                  >
                    <option value="400">Normal</option>
                    <option value="600">Semibold</option>
                    <option value="700">Bold</option>
                    <option value="800">Extrabold</option>
                    <option value="900">Black</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Alignment</label>
                  <select
                    value={form.headingAlignment}
                    onChange={(e) => handleChange('headingAlignment', e.target.value)}
                    className={commonSelectClasses}
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Subheading */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Subheading Text</label>
              <textarea
                value={form.subheading}
                onChange={(e) => handleChange('subheading', e.target.value)}
                className={`${commonInputClasses} min-h-[80px]`}
                placeholder="Describe your product's key benefits"
              />
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Color</label>
                  <input
                    type="color"
                    value={form.subheadingColor}
                    onChange={(e) => handleChange('subheadingColor', e.target.value)}
                    className={commonColorInputClasses}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Size (px)</label>
                  <input
                    type="number"
                    value={parseInt(form.subheadingFontSize)}
                    onChange={(e) => handleChange('subheadingFontSize', `${e.target.value}px`)}
                    className={commonInputClasses}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Weight</label>
                  <select
                    value={form.subheadingFontWeight}
                    onChange={(e) => handleChange('subheadingFontWeight', e.target.value)}
                    className={commonSelectClasses}
                  >
                    <option value="300">Light</option>
                    <option value="400">Normal</option>
                    <option value="500">Medium</option>
                    <option value="600">Semibold</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-xs font-medium text-gray-600 mb-1">Alignment</label>
                  <select
                    value={form.subheadingAlignment}
                    onChange={(e) => handleChange('subheadingAlignment', e.target.value)}
                    className={commonSelectClasses}
                  >
                    <option value="left">Left</option>
                    <option value="center">Center</option>
                    <option value="right">Right</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section Layout */}
            <div className="md:col-span-1">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Section Vertical Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.sectionPaddingY)}
                onChange={(e) => handleChange('sectionPaddingY', `${e.target.value}px`)}
                className={commonInputClasses}
              />
              <label className="block text-sm font-semibold text-gray-700 mt-4 mb-1">Section Horizontal Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.sectionPaddingX)}
                onChange={(e) => handleChange('sectionPaddingX', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>

        {/* --- Background Media --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5 text-gray-600" /> Section Background
          </h3>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Background Type</label>
          <select
            value={form.bgType}
            onChange={(e) => handleChange('bgType', e.target.value)}
            className={commonSelectClasses}
          >
            <option value="color">Solid Color</option>
            <option value="image">Image URL</option>
            <option value="video">Video URL</option>
          </select>

          {form.bgType === 'color' && (
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Background Color</label>
              <input
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange('bgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
          )}
          {form.bgType === 'image' && (
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Image URL</label>
              <input
                type="text"
                placeholder="e.g., https://example.com/background.jpg"
                value={form.bgImage}
                onChange={(e) => handleChange('bgImage', e.target.value)}
                className={commonInputClasses}
              />
              <label className="block text-sm font-semibold text-gray-700 mt-2 mb-1">Image Alt Text</label>
              <input
                type="text"
                placeholder="e.g., Background image of product features"
                value={form.mediaAlt}
                onChange={(e) => handleChange('mediaAlt', e.target.value)}
                className={commonInputClasses}
              />
            </div>
          )}
          {form.bgType === 'video' && (
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Video URL (MP4, WebM)</label>
              <input
                type="text"
                placeholder="e.g., https://example.com/background.mp4"
                value={form.bgVideo}
                onChange={(e) => handleChange('bgVideo', e.target.value)}
                className={commonInputClasses}
              />
              <label className="block text-sm font-semibold text-gray-700 mt-2 mb-1">Video Poster/Alt Text</label>
              <input
                type="text"
                placeholder="e.g., A video showing product features"
                value={form.mediaAlt}
                onChange={(e) => handleChange('mediaAlt', e.target.value)}
                className={commonInputClasses}
              />
            </div>
          )}
          {(form.bgType === 'image' || form.bgType === 'video') && (
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Background Overlay Color (RGBA)</label>
              <input
                type="text"
                value={form.overlayColor}
                onChange={(e) => handleChange('overlayColor', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., rgba(0, 0, 0, 0.5) for 50% black overlay"
              />
            </div>
          )}
        </div>

        {/* --- Feature Item Styling --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-gray-600" /> Feature Item Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Icon Color</label>
              <input
                type="color"
                value={form.featureIconColor}
                onChange={(e) => handleChange('featureIconColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Text Color</label>
              <input
                type="color"
                value={form.featureTextColor}
                onChange={(e) => handleChange('featureTextColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Background Color</label>
              <input
                type="color"
                value={form.featureCardBgColor}
                onChange={(e) => handleChange('featureCardBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Border Color</label>
              <input
                type="color"
                value={form.featureCardBorderColor}
                onChange={(e) => handleChange('featureCardBorderColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Hover Background</label>
              <input
                type="color"
                value={form.featureCardHoverBgColor}
                onChange={(e) => handleChange('featureCardHoverBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Shadow</label>
              <select
                value={form.featureCardShadow}
                onChange={(e) => handleChange('featureCardShadow', e.target.value)}
                className={commonSelectClasses}
              >
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
                <option value="xl">X-Large</option>
                <option value="2xl">2X-Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Features Grid Columns (Desktop)</label>
              <input
                type="number"
                min="1"
                max="4"
                value={form.featuresGridCols}
                onChange={(e) => handleChange('featuresGridCols', parseInt(e.target.value))}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>

        {/* --- Features Content --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-gray-600" /> Manage Features
          </h3>
          <div className="space-y-4">
            {form.features.map((f, i) => (
              <div key={i} className="flex flex-col sm:flex-row gap-3 items-center bg-gray-50 p-3 rounded-md border border-gray-200">
                <div className="flex-shrink-0">
                  <label className="block text-xs font-medium text-gray-500 mb-0.5">Icon</label>
                  <select
                    value={f.icon}
                    onChange={(e) => handleFeatureChange(i, 'icon', e.target.value)}
                    className={commonSelectClasses}
                  >
                    {Object.entries(ICON_OPTIONS_MAP).map(([key, value]) => (
                      <option key={key} value={key}>{value.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1 w-full">
                  <label className="block text-xs font-medium text-gray-500 mb-0.5">Feature Description</label>
                  <textarea
                    value={f.text}
                    onChange={(e) => handleFeatureChange(i, 'text', e.target.value)}
                    className={`${commonInputClasses} min-h-[60px]`}
                    placeholder="Describe this product feature"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeFeature(i)}
                  className="p-2 text-red-500 hover:bg-red-100 rounded-full sm:mt-4 md:mt-auto"
                  aria-label="Remove feature"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addFeature}
              className="flex items-center gap-2 text-teal-600 mt-4 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
            >
              <Plus className="w-5 h-5" /> Add New Feature
            </button>
          </div>
        </div>

        {/* --- Call to Action Button --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-gray-600" /> Call to Action Button
          </h3>
          <label className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              checked={form.showButton}
              onChange={(e) => handleChange('showButton', e.target.checked)}
              className="form-checkbox h-5 w-5 text-teal-600 rounded"
            />
            <span className="text-sm font-semibold text-gray-700">Show CTA Button</span>
          </label>
          {form.showButton && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Button Text</label>
                <input
                  type="text"
                  value={form.buttonText}
                  onChange={(e) => handleChange('buttonText', e.target.value)}
                  className={commonInputClasses}
                  placeholder="e.g., Get a Free Trial"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Button Link (URL)</label>
                <input
                  type="text"
                  value={form.buttonHref}
                  onChange={(e) => handleChange('buttonHref', e.target.value)}
                  className={commonInputClasses}
                  placeholder="e.g., /contact-us"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Button Background Color</label>
                <input
                  type="color"
                  value={form.buttonBgColor}
                  onChange={(e) => handleChange('buttonBgColor', e.target.value)}
                  className={commonColorInputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Button Text Color</label>
                <input
                  type="color"
                  value={form.buttonTextColor}
                  onChange={(e) => handleChange('buttonTextColor', e.target.value)}
                  className={commonColorInputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Button Hover Background</label>
                <input
                  type="color"
                  value={form.buttonHoverBgColor}
                  onChange={(e) => handleChange('buttonHoverBgColor', e.target.value)}
                  className={commonColorInputClasses}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Button Hover Text Color</label>
                <input
                  type="color"
                  value={form.buttonHoverTextColor}
                  onChange={(e) => handleChange('buttonHoverTextColor', e.target.value)}
                  className={commonColorInputClasses}
                />
              </div>
            </div>
          )}
        </div>


        {/* --- Live Preview --- */}
        <div
          className="mt-10 p-4 sm:p-6 rounded-xl border-2 border-dashed border-teal-200 shadow-inner overflow-hidden relative"
          style={{
            backgroundColor: form.bgType === 'color' ? form.bgColor : 'transparent',
            paddingTop: form.sectionPaddingY,
            paddingBottom: form.sectionPaddingY,
            paddingLeft: form.sectionPaddingX,
            paddingRight: form.sectionPaddingX,
            // Add font styling here if you have a global font selector
          }}
        >
          {form.bgType === 'image' && form.bgImage && (
            <>
              <img
                src={form.bgImage}
                alt={form.mediaAlt}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: form.overlayColor }}
              />
            </>
          )}
          {form.bgType === 'video' && form.bgVideo && (
            <>
              <video
                src={form.bgVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                aria-label={form.mediaAlt}
              />
              <div
                className="absolute inset-0 z-10"
                style={{ backgroundColor: form.overlayColor }}
              />
            </>
          )}

          <div className="relative z-20 text-center max-w-5xl mx-auto">
            <h3
              className="font-extrabold mb-4"
              style={{
                color: form.headingColor,
                fontSize: form.headingFontSize,
                fontWeight: form.headingFontWeight,
                textAlign: form.headingAlignment,
              }}
            >
              {form.heading}
            </h3>
            <p
              className="text-gray-600 mb-12 max-w-3xl mx-auto"
              style={{
                color: form.subheadingColor,
                fontSize: form.subheadingFontSize,
                fontWeight: form.subheadingFontWeight,
                textAlign: form.subheadingAlignment,
              }}
            >
              {form.subheading}
            </p>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${form.featuresGridCols} gap-8 mb-12`}
            >
              {form.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-6 rounded-xl border transition-all duration-300 ${getShadowClass(form.featureCardShadow)}`}
                  style={{
                    backgroundColor: form.featureCardBgColor,
                    borderColor: form.featureCardBorderColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = form.featureCardHoverBgColor;
                    e.currentTarget.style.transform = 'translateY(-5px)'; // Simple hover effect
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = form.featureCardBgColor;
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ color: form.featureIconColor }} className="mb-4 text-5xl">
                    {ICON_OPTIONS_MAP[feature.icon]?.component || <Zap />}
                  </div>
                  <p
                    className="text-center font-medium text-lg"
                    style={{ color: form.featureTextColor }}
                  >
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>

            {form.showButton && (
              <a
                href={form.buttonHref || '#'} // Fallback to # if href is empty
                className="inline-block px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  backgroundColor: form.buttonBgColor,
                  color: form.buttonTextColor,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = form.buttonHoverBgColor;
                  e.target.style.color = form.buttonHoverTextColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = form.buttonBgColor;
                  e.target.style.color = form.buttonTextColor;
                }}
              >
                {form.buttonText}
              </a>
            )}
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Product Features
          </button>
        </div>
      </form>
    </div>
  );
}