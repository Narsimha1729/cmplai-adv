'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  Clock, // Lucide icon for 'clock'
  FileText, // Lucide icon for 'file-text'
  Users, // Lucide icon for 'users'
  TrendingUp, // Lucide icon for 'trending-up'
  Briefcase, // New icon: for 'projects' or 'business'
  Award, // New icon: for 'awards' or 'recognition'
  Save, // For save button
  Settings, // For general section settings
  PencilRuler, // For individual stat styling
} from 'lucide-react';

// Centralized mapping for Lucide icons for easier rendering and display names
const ICON_OPTIONS_MAP = {
  clock: { component: <Clock />, name: 'Clock (Time)' },
  'file-text': { component: <FileText />, name: 'File Text (Documents)' },
  users: { component: <Users />, name: 'Users (Clients/Team)' },
  'trending-up': { component: <TrendingUp />, name: 'Trending Up (Growth/Efficiency)' },
  briefcase: { component: <Briefcase />, name: 'Briefcase (Projects)' },
  award: { component: <Award />, name: 'Award (Recognition)' },
};

const defaultStat = {
  icon: 'clock', // key for now, will map to Lucide icon
  value: 0,
  suffix: '', // Default to empty suffix
  label: 'New Metric',
  color: '#0d9488', // Default icon color
  valueColor: '#1a202c', // Default value color
  labelColor: '#4a5568', // Default label color
  iconSize: '3rem', // Default icon size for individual stat
};

export default function StatsEditor() {
  const [form, setForm] = useState({
    // Section General Settings
    sectionHeading: 'Our Achievements',
    sectionSubheading: 'Numbers that speak for themselves. See the impact we create.',
    sectionHeadingColor: '#1a202c',
    sectionSubheadingColor: '#4a5568',
    sectionBgColor: '#f7fafc', // Default light background
    sectionPaddingY: '80px', // Default padding
    sectionLayout: 'grid', // 'grid' or 'column' (though 'grid' is usually preferred for stats)
    statsPerRow: 4, // How many stats per row on desktop

    // Global Stat Card Styles
    cardBgColor: '#ffffff',
    cardBorderColor: '#e2e8f0',
    cardShadow: 'md', // sm, md, lg, xl, 2xl, none
    cardPadding: '24px', // Padding inside each stat card
    cardAlignment: 'center', // 'left', 'center', 'right'

    // Individual Stat Items
    stats: [
      { id: 1, icon: 'clock', value: 70, suffix: '%', label: 'Time Reduction', color: '#0d9488', valueColor: '#1a202c', labelColor: '#4a5568' },
      { id: 2, icon: 'file-text', value: 1000, suffix: '+', label: 'Documents Automated', color: '#0d9488', valueColor: '#1a202c', labelColor: '#4a5568' },
      { id: 3, icon: 'users', value: 50, suffix: '+', label: 'Happy Clients', color: '#0d9488', valueColor: '#1a202c', labelColor: '#4a5568' },
      { id: 4, icon: 'trending-up', value: 90, suffix: '%', label: 'Efficiency Increase', color: '#0d9488', valueColor: '#1a202c', labelColor: '#4a5568' },
    ],
  });

  // Unique ID generator for new stats
  const nextStatId = form.stats.length > 0 ? Math.max(...form.stats.map(s => s.id)) + 1 : 1;

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleStatChange = (index, field, value) => {
    const updatedStats = [...form.stats];
    updatedStats[index] = { ...updatedStats[index], [field]: value };
    setForm((prevForm) => ({ ...prevForm, stats: updatedStats }));
  };

  const handleAddStat = () => {
    setForm((prevForm) => ({
      ...prevForm,
      stats: [...prevForm.stats, { ...defaultStat, id: nextStatId }],
    }));
  };

  const handleRemoveStat = (index) => {
    const updatedStats = [...form.stats];
    updatedStats.splice(index, 1);
    setForm((prevForm) => ({ ...prevForm, stats: updatedStats }));
  };

  const handleSave = () => {
    alert('Stats configuration saved! (Demo only)');
    console.log('Saved Stats Config:', form);
    // In a real application, you would send this 'form' data to your backend API
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';
  const commonColorInputClasses = 'h-10 w-full border border-gray-300 rounded-md p-1';
  const commonSelectClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';

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
        <TrendingUp className="inline-block w-8 h-8 mr-2 text-teal-600" /> Stats Section Editor
      </h2>

      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }} className="space-y-10">

        {/* --- Section General Settings --- */}
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
                placeholder="e.g., By The Numbers"
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
                placeholder="A short description introducing your key achievements."
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
              <label className="block text-sm font-semibold text-gray-700 mb-1">Stats Per Row (Desktop)</label>
              <select
                value={form.statsPerRow}
                onChange={(e) => handleChange('statsPerRow', parseInt(e.target.value))}
                className={commonSelectClasses}
              >
                <option value={1}>1 Stat</option>
                <option value={2}>2 Stats</option>
                <option value={3}>3 Stats</option>
                <option value={4}>4 Stats</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Content Alignment</label>
              <select
                value={form.cardAlignment}
                onChange={(e) => handleChange('cardAlignment', e.target.value)}
                className={commonSelectClasses}
              >
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
              </select>
            </div>
          </div>
        </div>

        {/* --- Global Stat Card Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <PencilRuler className="w-5 h-5 text-gray-600" /> Global Stat Card Appearance
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
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.cardPadding)}
                onChange={(e) => handleChange('cardPadding', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>


        {/* --- Individual Stat Items --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-gray-600" /> Manage Stat Items
          </h3>
          <div className="space-y-6">
            {form.stats.map((stat, index) => (
              <div key={stat.id} className="border p-4 rounded-lg shadow-sm bg-gray-50 space-y-4 relative">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  Stat #{index + 1}
                  <div className="flex-grow border-b border-gray-200"></div>
                  <button
                    type="button"
                    onClick={() => handleRemoveStat(index)}
                    className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                    aria-label={`Remove stat ${index + 1}`}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </h4>

                {/* Icon Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                  <select
                    value={stat.icon}
                    onChange={(e) => handleStatChange(index, 'icon', e.target.value)}
                    className={commonSelectClasses}
                  >
                    {Object.entries(ICON_OPTIONS_MAP).map(([key, value]) => (
                      <option key={key} value={key}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Icon Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon Color</label>
                  <input
                    type="color"
                    value={stat.color}
                    onChange={(e) => handleStatChange(index, 'color', e.target.value)}
                    className={commonColorInputClasses}
                  />
                </div>

                {/* Icon Size */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon Size (e.g., 3rem)</label>
                  <input
                    type="text"
                    value={stat.iconSize}
                    onChange={(e) => handleStatChange(index, 'iconSize', e.target.value)}
                    className={commonInputClasses}
                    placeholder="e.g., 2.5rem, 40px"
                  />
                </div>

                {/* Value & Suffix */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number Value</label>
                    <input
                      type="number"
                      value={stat.value}
                      onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                      className={commonInputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Suffix (e.g., %, +, K)</label>
                    <input
                      type="text"
                      value={stat.suffix}
                      onChange={(e) => handleStatChange(index, 'suffix', e.target.value)}
                      className={commonInputClasses}
                    />
                  </div>
                </div>

                {/* Value Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number Value Color</label>
                  <input
                    type="color"
                    value={stat.valueColor}
                    onChange={(e) => handleStatChange(index, 'valueColor', e.target.value)}
                    className={commonColorInputClasses}
                  />
                </div>

                {/* Label */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                  <input
                    type="text"
                    value={stat.label}
                    onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                    className={commonInputClasses}
                    placeholder="e.g., Projects Completed"
                  />
                </div>

                {/* Label Color */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Label Color</label>
                  <input
                    type="color"
                    value={stat.labelColor}
                    onChange={(e) => handleStatChange(index, 'labelColor', e.target.value)}
                    className={commonColorInputClasses}
                  />
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={handleAddStat}
            className="flex items-center gap-2 text-teal-600 mt-6 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" /> Add New Stat
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

          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${form.statsPerRow} gap-8`}>
            {form.stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`flex flex-col rounded-xl border ${getShadowClass(form.cardShadow)} transition-all duration-300`}
                style={{
                  backgroundColor: form.cardBgColor,
                  borderColor: form.cardBorderColor,
                  padding: stat.cardPadding || form.cardPadding, // Individual padding, or fallback to global
                  textAlign: form.cardAlignment,
                  alignItems: form.cardAlignment === 'center' ? 'center' : (form.cardAlignment === 'left' ? 'flex-start' : 'flex-end'),
                }}
              >
                <div
                  className="mb-3"
                  style={{
                    color: stat.color, // Individual icon color
                    fontSize: stat.iconSize, // Individual icon size
                  }}
                >
                  {/* Render Lucide icon component */}
                  {ICON_OPTIONS_MAP[stat.icon]?.component || <Clock />}
                </div>
                <div
                  className="text-5xl font-bold leading-tight mb-2" // Bigger font for value
                  style={{ color: stat.valueColor }}
                >
                  {stat.value}{stat.suffix}
                </div>
                <p
                  className="text-lg uppercase tracking-wider"
                  style={{ color: stat.labelColor }}
                >
                  {stat.label}
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
            <Save className="inline-block w-6 h-6 mr-2" /> Save Stats Configuration
          </button>
        </div>
      </form>
    </div>
  );
}
