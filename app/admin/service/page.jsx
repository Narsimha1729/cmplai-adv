'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  FileText,
  Lightbulb,
  LifeBuoy,
  ShieldCheck,
  Zap,
  CheckCircle,
  HardHat, // New icon for 'Construction/Industry'
  DollarSign, // New icon for 'Pricing/Value'
  Settings, // For general section settings
  Palette, // For color settings
  Layers, // For individual service card settings
  Save, // For save button
} from 'lucide-react';

// Centralized mapping for Lucide icons for easier rendering and display names
const ICON_OPTIONS_MAP = {
  'file-text': { component: <FileText />, name: 'File Text (Document)' },
  lightbulb: { component: <Lightbulb />, name: 'Lightbulb (Idea)' },
  'life-buoy': { component: <LifeBuoy />, name: 'Life Buoy (Support)' },
  'shield-check': { component: <ShieldCheck />, name: 'Shield Check (Security)' },
  zap: { component: <Zap />, name: 'Zap (Speed/Power)' },
  'check-circle': { component: <CheckCircle />, name: 'Check Circle (Success)' },
  'hard-hat': { component: <HardHat />, name: 'Hard Hat (Industry)' },
  'dollar-sign': { component: <DollarSign />, name: 'Dollar Sign (Value)' },
};

const defaultService = {
  icon: 'file-text',
  title: 'New Service Title',
  desc: 'A brief description of this new service. Explain its key benefits or features.',
};

export default function ServicesEditor() {
  const [form, setForm] = useState({
    sectionHeading: 'Our Core Services',
    sectionSubheading: 'Discover how our specialized solutions can benefit your business.',
    sectionHeadingColor: '#1a202c',
    sectionSubheadingColor: '#4a5568',
    sectionBgColor: '#f7fafc', // Default light background
    sectionPaddingY: '80px', // Default padding

    // Service card global styles
    cardBgColor: '#ffffff',
    cardBorderColor: '#e2e8f0',
    cardHoverBgColor: '#edf2f7',
    cardShadow: 'md', // sm, md, lg, xl, 2xl, none
    cardTitleColor: '#1a202c',
    cardDescColor: '#4a5568',
    cardIconSize: '3rem', // e.g., '2rem', '3rem'
    cardsPerRow: 3, // For responsiveness, default to 3 columns on larger screens

    // Individual service items
    services: [
      {
        icon: 'file-text',
        title: 'AI-Powered Compliance Document Automation',
        desc: 'Automates compliance documents, speeding pharma and manufacturing workflows by up to 70%.',
        color: '#0d9488', // Individual icon color override
      },
      {
        icon: 'lightbulb',
        title: 'Regulatory-Ready Templates & Workflows',
        desc: 'Leverage pre-built templates to ensure effortless compliance with GMP, ISO, and FDA standards from day one.',
        color: '#0d9488',
      },
      {
        icon: 'life-buoy',
        title: 'End-to-End Document Lifecycle Management',
        desc: 'We streamline your entire document lifecycle, enabling scalable, multi-industry enterprise operations with full traceability.',
        color: '#0d9488',
      },
      {
        icon: 'shield-check',
        title: 'Advanced Data Security & Privacy',
        desc: 'Robust security protocols and data encryption ensure your sensitive information remains protected and compliant.',
        color: '#0d9488',
      },
    ],
  });

  const handleChange = (key, value) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  };

  const handleServiceChange = (index, field, value) => {
    const updatedServices = [...form.services];
    updatedServices[index][field] = value;
    setForm((prevForm) => ({ ...prevForm, services: updatedServices }));
  };

  const handleAddService = () => {
    setForm((prevForm) => ({
      ...prevForm,
      services: [...prevForm.services, { ...defaultService, color: prevForm.services[0]?.color || '#0d9488' }], // Inherit color from first service or default
    }));
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...form.services];
    updatedServices.splice(index, 1);
    setForm((prevForm) => ({ ...prevForm, services: updatedServices }));
  };

  const handleSave = () => {
    alert('Services configuration saved! (Demo only)');
    console.log('Saved Services Config:', form);
    // In a real application, you would send this 'form' data to your backend API
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';
  const commonColorInputClasses = 'h-10 w-full border border-gray-300 rounded-md p-1';
  const commonSelectClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';

  // Helper to get Tailwind shadow class
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
        <Layers className="inline-block w-8 h-8 mr-2 text-teal-600" /> Services Section Editor
      </h2>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-10">

        {/* --- General Section Settings --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-600" /> Section General Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Section Heading</label>
              <input
                type="text"
                value={form.sectionHeading}
                onChange={(e) => handleChange('sectionHeading', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., What We Offer"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Heading Color</label>
              <input
                type="color"
                value={form.sectionHeadingColor}
                onChange={(e) => handleChange('sectionHeadingColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Section Subheading</label>
              <textarea
                value={form.sectionSubheading}
                onChange={(e) => handleChange('sectionSubheading', e.target.value)}
                rows={2}
                className={commonInputClasses}
                placeholder="A brief description of your services."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Subheading Color</label>
              <input
                type="color"
                value={form.sectionSubheadingColor}
                onChange={(e) => handleChange('sectionSubheadingColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Background Color</label>
              <input
                type="color"
                value={form.sectionBgColor}
                onChange={(e) => handleChange('sectionBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Vertical Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.sectionPaddingY)}
                onChange={(e) => handleChange('sectionPaddingY', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Cards Per Row (Desktop)</label>
              <select
                value={form.cardsPerRow}
                onChange={(e) => handleChange('cardsPerRow', parseInt(e.target.value))}
                className={commonSelectClasses}
              >
                <option value={1}>1 Card</option>
                <option value={2}>2 Cards</option>
                <option value={3}>3 Cards</option>
                <option value={4}>4 Cards</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Service Card Global Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-gray-600" /> Service Card Appearance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Background Color</label>
              <input
                type="color"
                value={form.cardBgColor}
                onChange={(e) => handleChange('cardBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Border Color</label>
              <input
                type="color"
                value={form.cardBorderColor}
                onChange={(e) => handleChange('cardBorderColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Hover Background</label>
              <input
                type="color"
                value={form.cardHoverBgColor}
                onChange={(e) => handleChange('cardHoverBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Shadow</label>
              <select
                value={form.cardShadow}
                onChange={(e) => handleChange('cardShadow', e.target.value)}
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
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Title Color</label>
              <input
                type="color"
                value={form.cardTitleColor}
                onChange={(e) => handleChange('cardTitleColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Description Color</label>
              <input
                type="color"
                value={form.cardDescColor}
                onChange={(e) => handleChange('cardDescColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Icon Size (e.g., 3rem)</label>
              <input
                type="text"
                value={form.cardIconSize}
                onChange={(e) => handleChange('cardIconSize', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., 2rem, 3rem, 40px"
              />
            </div>
          </div>
        </div>


        {/* --- Individual Service Items --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-gray-600" /> Manage Service Items
          </h3>
          <div className="space-y-6">
            {form.services.map((service, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50 space-y-4 relative">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  Service #{index + 1}
                  <div className="flex-grow border-b border-gray-200"></div>
                  <button
                    type="button"
                    onClick={() => handleRemoveService(index)}
                    className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                    aria-label={`Remove service ${index + 1}`}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </h4>

                {/* Icon Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                  <select
                    value={service.icon}
                    onChange={(e) => handleServiceChange(index, 'icon', e.target.value)}
                    className={commonSelectClasses}
                  >
                    {Object.entries(ICON_OPTIONS_MAP).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Color Picker (Individual Icon Color) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon Color (Override)</label>
                  <input
                    type="color"
                    value={service.color}
                    onChange={(e) => handleServiceChange(index, 'color', e.target.value)}
                    className={commonColorInputClasses}
                  />
                  <p className="text-xs text-gray-500 mt-1">This color will override the global icon color for this specific service.</p>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => handleServiceChange(index, 'title', e.target.value)}
                    className={commonInputClasses}
                    placeholder="e.g., Data Analytics"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={service.desc}
                    onChange={(e) => handleServiceChange(index, 'desc', e.target.value)}
                    rows={3}
                    className={commonInputClasses}
                    placeholder="Provide a detailed description of this service."
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddService}
            className="flex items-center gap-2 text-teal-600 mt-6 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" /> Add New Service
          </button>
        </div>


        {/* --- Live Preview --- */}
        <div
          className="mt-10 p-4 sm:p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner"
          style={{
            backgroundColor: form.sectionBgColor,
            paddingTop: form.sectionPaddingY,
            paddingBottom: form.sectionPaddingY,
            // You might want to add horizontal padding here as well
          }}
        >
          <h3
            className="text-4xl font-extrabold text-center mb-4"
            style={{ color: form.sectionHeadingColor }}
          >
            {form.sectionHeading}
          </h3>
          <p
            className="text-lg text-center max-w-3xl mx-auto mb-12"
            style={{ color: form.sectionSubheadingColor }}
          >
            {form.sectionSubheading}
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${form.cardsPerRow} gap-8`}>
            {form.services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 rounded-xl border ${getShadowClass(form.cardShadow)} transition-all duration-300`}
                style={{
                  backgroundColor: form.cardBgColor,
                  borderColor: form.cardBorderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = form.cardHoverBgColor;
                  e.currentTarget.style.transform = 'translateY(-5px)'; // Simple lift effect
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = form.cardBgColor;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    color: service.color, // Use individual color if set, else global
                    fontSize: form.cardIconSize,
                  }}
                >
                  {/* Render Lucide icon component */}
                  {ICON_OPTIONS_MAP[service.icon]?.component || <FileText />}
                </div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ color: form.cardTitleColor }}
                >
                  {service.title}
                </h4>
                <p
                  className="text-gray-600"
                  style={{ color: form.cardDescColor }}
                >
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Services Configuration
          </button>
        </div>
      </form>
    </div>
  );
}