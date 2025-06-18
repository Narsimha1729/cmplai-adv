'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  Award, // Example icon for challenges
  Target, // Example icon for challenges
  AlertTriangle, // Example icon for challenges
  Lightbulb, // Reused from Services
  ShieldCheck, // Reused from Services
  Layers, // For section settings icon
  Settings, // For general section settings
  Palette, // For color settings
  Save, // For save button
} from 'lucide-react';

// Centralized mapping for Lucide icons for easier rendering and display names
const ICON_OPTIONS_MAP = {
  'award': { component: <Award />, name: 'Award (Achievement)' },
  'target': { component: <Target />, name: 'Target (Goal/Challenge)' },
  'alert-triangle': { component: <AlertTriangle />, name: 'Alert Triangle (Warning)' },
  'lightbulb': { component: <Lightbulb />, name: 'Lightbulb (Idea)' },
  'shield-check': { component: <ShieldCheck />, name: 'Shield Check (Security)' },
};

const defaultChallengeCard = {
  icon: 'award', // Default Lucide icon for new challenge cards
  imageUrl: '', // New: Optional custom image URL
  title: 'New Challenge Title',
  desc: 'A brief description of this new challenge we address.',
  color: '#0d9488', // Changed to match Services editor default
};

export default function AdminChallengesPage() {
  const [form, setForm] = useState({
    sectionTitle: 'Challenges We Address',
    titleSize: 32,
    descriptionText: 'We tackle the most pressing challenges in compliance for pharmaceutical and manufacturing companies.',
    descSize: 16,

    sectionHeadingColor: '#1a202c',
    sectionSubheadingColor: '#4a5568',
    sectionBgColor: '#f7fafc',
    sectionPaddingY: '80px',

    // Challenge card global styles
    cardBgColor: '#ffffff',
    cardBorderColor: '#e2e8f0',
    cardHoverBgColor: '#edf2f7',
    cardShadow: 'md',
    cardTitleColor: '#1a202c',
    cardDescColor: '#4a5568',
    cardIconSize: '3rem',
    cardsPerRow: 3,

    // Individual challenge items
    challenges: [
      {
        icon: 'alert-triangle',
        imageUrl: '', // Initialize for existing data
        title: 'Manual, Error-Prone Processes',
        desc: 'Reliance on manual documentation leads to inefficiencies, delays, and a higher risk of human error, compromising compliance accuracy.',
        color: '#0d9488', // Changed to match Services editor default
      },
      {
        icon: 'target',
        imageUrl: '', // Initialize for existing data
        title: 'Lack of Audit Readiness',
        desc: 'Struggling to maintain continuous audit readiness, resulting in last-minute rushes and potential non-compliance findings during inspections.',
        color: '#0d9488',
      },
      {
        icon: 'lightbulb',
        imageUrl: '', // Initialize for existing data
        title: 'High Compliance Costs',
        desc: 'The significant investment in time, resources, and personnel for compliance often strains budgets and diverts focus from innovation.',
        color: '#0d9488',
      },
    ],
  });

  const handleChange = (key, value) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  };

  const handleChallengeChange = (index, field, value) => {
    const updatedChallenges = [...form.challenges];
    updatedChallenges[index][field] = value;
    setForm((prevForm) => ({ ...prevForm, challenges: updatedChallenges }));
  };

  const handleAddChallenge = () => {
    setForm((prevForm) => ({
      ...prevForm,
      challenges: [...prevForm.challenges, { ...defaultChallengeCard, color: prevForm.challenges[0]?.color || '#0d9488' }],
    }));
  };

  const handleRemoveChallenge = (index) => {
    const updatedChallenges = [...form.challenges];
    updatedChallenges.splice(index, 1);
    setForm((prevForm) => ({ ...prevForm, challenges: updatedChallenges }));
  };

  const handleSave = () => {
    alert('Challenges configuration saved! (Demo only)');
    console.log('Saved Challenges Config:', form);
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
        <Layers className="inline-block w-8 h-8 mr-2 text-teal-600" /> Challenges Section Editor
      </h2>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-10">

        {/* --- General Section Settings (Challenges Heading/Subheading) --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Settings className="w-5 h-5 text-gray-600" /> Section General Settings
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sectionTitle" className="block text-sm font-semibold text-gray-700 mb-1">Section Title</label>
              <input
                id="sectionTitle"
                type="text"
                value={form.sectionTitle}
                onChange={(e) => handleChange('sectionTitle', e.target.value)}
                className={commonInputClasses}
                placeholder="Section Title"
              />
            </div>
            <div>
              <label htmlFor="titleSize" className="block text-sm font-semibold text-gray-700 mb-1">Title Font Size (px)</label>
              <input
                id="titleSize"
                type="number"
                value={form.titleSize}
                onChange={(e) => handleChange('titleSize', parseInt(e.target.value))}
                className={commonInputClasses}
                placeholder="Font Size"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="descriptionText" className="block text-sm font-semibold text-gray-700 mb-1">Section Description</label>
              <textarea
                id="descriptionText"
                value={form.descriptionText}
                onChange={(e) => handleChange('descriptionText', e.target.value)}
                rows={2}
                className={commonInputClasses}
                placeholder="A brief description of the challenges."
              />
            </div>
            <div>
              <label htmlFor="descSize" className="block text-sm font-semibold text-gray-700 mb-1">Description Font Size (px)</label>
              <input
                id="descSize"
                type="number"
                value={form.descSize}
                onChange={(e) => handleChange('descSize', parseInt(e.target.value))}
                className={commonInputClasses}
                placeholder="Font Size"
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

        {/* --- Challenge Card Global Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-gray-600" /> Challenge Card Appearance
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


        {/* --- Individual Challenge Items --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-gray-600" /> Manage Challenge Items
          </h3>
          <div className="space-y-6">
            {form.challenges.map((challenge, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50 space-y-4 relative">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  Challenge #{index + 1}
                  <div className="flex-grow border-b border-gray-200"></div>
                  <button
                    type="button"
                    onClick={() => handleRemoveChallenge(index)}
                    className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                    aria-label={`Remove challenge ${index + 1}`}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </h4>

                {/* Icon Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lucide Icon</label>
                  <select
                    value={challenge.icon}
                    onChange={(e) => handleChallengeChange(index, 'icon', e.target.value)}
                    className={commonSelectClasses}
                  >
                    {Object.entries(ICON_OPTIONS_MAP).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Select an icon from the predefined set.</p>
                </div>

                {/* Custom Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">OR Custom Icon URL (e.g., from CDN)</label>
                  <input
                    type="text"
                    value={challenge.imageUrl}
                    onChange={(e) => handleChallengeChange(index, 'imageUrl', e.target.value)}
                    className={commonInputClasses}
                    placeholder="https://example.com/your-icon.png"
                  />
                  <p className="text-xs text-gray-500 mt-1">If a URL is provided, it will override the selected Lucide icon.</p>
                </div>

                {/* Color Picker (Individual Icon Color) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon Color (Override)</label>
                  <input
                    type="color"
                    value={challenge.color}
                    onChange={(e) => handleChallengeChange(index, 'color', e.target.value)}
                    className={commonColorInputClasses}
                  />
                  <p className="text-xs text-gray-500 mt-1">This color will apply to Lucide icons. For custom image URLs, the image's original colors will be used.</p>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={challenge.title}
                    onChange={(e) => handleChallengeChange(index, 'title', e.target.value)}
                    className={commonInputClasses}
                    placeholder="e.g., Data Analytics"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={challenge.desc}
                    onChange={(e) => handleChallengeChange(index, 'desc', e.target.value)}
                    rows={3}
                    className={commonInputClasses}
                    placeholder="Provide a detailed description of this challenge."
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddChallenge}
            className="flex items-center gap-2 text-teal-600 mt-6 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" /> Add New Challenge
          </button>
        </div>


        {/* --- Live Preview --- */}
        <div
          className="mt-10 p-4 sm:p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner"
          style={{
            backgroundColor: form.sectionBgColor,
            paddingTop: form.sectionPaddingY,
            paddingBottom: form.sectionPaddingY,
          }}
        >
          <h3
            className="font-extrabold text-center mb-4 font-sans" // Added font-sans for consistency
            style={{
              color: form.sectionHeadingColor,
              fontSize: `${form.titleSize}px`,
            }}
          >
            {form.sectionTitle}
          </h3>
          <p
            className="text-center max-w-3xl mx-auto mb-12 font-sans" // Added font-sans for consistency
            style={{
              color: form.sectionSubheadingColor,
              fontSize: `${form.descSize}px`,
            }}
          >
            {form.descriptionText}
          </p>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${form.cardsPerRow} gap-8`}>
            {form.challenges.map((challenge, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-center p-6 rounded-xl border ${getShadowClass(form.cardShadow)} transition-all duration-300`}
                style={{
                  backgroundColor: form.cardBgColor,
                  borderColor: form.cardBorderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = form.cardHoverBgColor;
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = form.cardBgColor;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  className="mb-4"
                  style={{
                    color: challenge.color,
                    fontSize: form.cardIconSize,
                  }}
                >
                  {challenge.imageUrl ? (
                    // Render custom image if URL is provided
                    <img
                      src={challenge.imageUrl}
                      alt={challenge.title}
                      style={{ width: form.cardIconSize, height: form.cardIconSize, objectFit: 'contain' }}
                      onError={(e) => { e.currentTarget.src = ''; e.currentTarget.alt = 'Error loading icon'; }} // Fallback for broken images
                    />
                  ) : (
                    // Render Lucide icon otherwise
                    ICON_OPTIONS_MAP[challenge.icon]?.component || <Award />
                  )}
                </div>
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ color: form.cardTitleColor }}
                >
                  {challenge.title}
                </h4>
                <p
                  className="text-gray-600"
                  style={{ color: form.cardDescColor }}
                >
                  {challenge.desc}
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
            <Save className="inline-block w-6 h-6 mr-2" /> Save Challenges Section
          </button>
        </div>
      </form>
    </div>
  );
}
