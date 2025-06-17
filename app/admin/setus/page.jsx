'use client';

import { useState } from 'react';
import {
  Trash,
  Plus,
  Rocket, // New icon for 'Innovation'
  Zap, // Existing, but good for 'Speed/Efficiency'
  ShieldCheck, // Existing, for 'Security/Trust'
  Lightbulb, // For 'Unique Approach/Idea'
  Paintbrush, // For styling controls
  Layout, // For layout/media
  Text, // For text content
  Save, // For save button
} from 'lucide-react';

const FONT_OPTIONS = [
  { value: 'sans-serif', label: 'Sans-serif (Default)' },
  { value: 'serif', label: 'Serif' },
  { value: 'monospace', label: 'Monospace' },
  { value: "'Inter', sans-serif", label: 'Inter' }, // Example popular font
  { value: "'Roboto', sans-serif", label: 'Roboto' }, // Example popular font
  { value: "'Open Sans', sans-serif", label: 'Open Sans' }, // Example popular font
];

const TEXT_ALIGN_OPTIONS = [
  { value: 'left', label: 'Left' },
  { value: 'center', label: 'Center' },
  { value: 'right', label: 'Right' },
];

const SECTION_BACKGROUND_TYPE_OPTIONS = [
  { value: 'color', label: 'Solid Color' },
  { value: 'image', label: 'Image' },
  { value: 'video', label: 'Video' },
];

export default function SetUsApartEditor() {
  const [form, setForm] = useState({
    // Section General Settings
    sectionBgType: 'color', // 'color', 'image', 'video'
    sectionBgColor: '#f8fafc', // Light gray default
    sectionBgImageUrl: '',
    sectionBgVideoUrl: '',
    sectionBgMediaAlt: 'Background media for "What Sets Us Apart" section',
    sectionPaddingY: '96px', // Vertical padding
    sectionPaddingX: '16px', // Horizontal padding

    // Heading
    heading: 'What Sets Us Apart',
    headingSize: '48px', // Larger default for impact
    headingColor: '#0f766e',
    headingFont: "'Inter', sans-serif",
    headingGradient: true, // Only for heading, will use a teal-to-cyan gradient
    headingAlignment: 'center', // New: Heading alignment

    // Subheading
    subheading: 'Our unique approach to compliance automation delivers unparalleled value and efficiency.',
    subColor: '#4b5563',
    subFont: "'Inter', sans-serif",
    subSize: '20px', // Slightly larger for readability
    subAlignment: 'center', // New: Subheading alignment

    // Cards
    cards: [
      { id: 1, text: "Our solution is purpose-built with pre-configured templates and compliance logic tailored to global standards like <strong>GMP</strong>, <strong>ISO</strong>, and <strong>US-FDA</strong>.", icon: "rocket" },
      { id: 2, text: "Cmplai's unique focus is on automated document creation — delivering <strong>70%</strong> of its value and significantly reducing manual effort.", icon: "zap" },
      { id: 3, text: "Our platform delivers substantial cost savings — equivalent to a full-time <strong>QMS</strong> employee, enhancing your ROI and operational budget.", icon: "shield-check" },
      { id: 4, text: "We provide dedicated expert support and continuous updates, ensuring you're always aligned with the latest regulatory changes and best practices.", icon: "lightbulb" },
    ],
    cardBgColor: '#ffffff', // Card background color
    cardBorderColor: '#e2e8f0', // Card border color
    cardShadow: 'lg', // Card shadow strength
    cardTextColor: '#334155', // Card text color
    cardTextFont: "'Inter', sans-serif",
    cardTextSize: '16px',
    cardIconColor: '#00b4d8', // Color for icons inside cards
    cardsGridCols: 2, // Number of columns for cards grid

    // Visual Enhancements
    showGlow: true, // Controlled by CSS classes for effect
    showDottedBackground: true, // Controlled by CSS classes for effect
  });

  // Unique ID generator for new cards
  const nextCardId = form.cards.length > 0 ? Math.max(...form.cards.map(c => c.id)) + 1 : 1;

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const updateCard = (i, field, value) => {
    const updated = [...form.cards];
    updated[i] = { ...updated[i], [field]: value };
    setForm({ ...form, cards: updated });
  };

  const removeCard = (i) => {
    const updated = [...form.cards];
    updated.splice(i, 1);
    setForm({ ...form, cards: updated });
  };

  const addCard = () => {
    setForm({
      ...form,
      cards: [
        ...form.cards,
        { id: nextCardId, text: 'New compelling reason why we stand out.', icon: 'lightbulb' },
      ],
    });
  };

  const handleMediaUpload = (e, mediaType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (mediaType === 'image') {
          handleChange('sectionBgImageUrl', reader.result);
        } else if (mediaType === 'video') {
          handleChange('sectionBgVideoUrl', reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product Feature Section configuration saved! (Demo only)');
    console.log('Submitted "What Sets Us Apart" Data:', form);
    // In a real application, you would send 'form' data to your backend API
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
      default: return 'shadow-lg';
    }
  };

  // Function to render HTML from string (for card text with <strong> tags)
  const renderHTML = (htmlString) => {
    return <span dangerouslySetInnerHTML={{ __html: htmlString }} />;
  };

  // Map for card icons
  const CARD_ICON_OPTIONS_MAP = {
    rocket: { component: <Rocket />, name: "Rocket (Innovation)" },
    zap: { component: <Zap />, name: "Zap (Speed)" },
    'shield-check': { component: <ShieldCheck />, name: "Shield (Security)" },
    lightbulb: { component: <Lightbulb />, name: "Lightbulb (Idea)" },
    plus: { component: <Plus />, name: "Plus (Add)" },
  };


  return (
    <div className="max-w-7xl mx-auto py-10 px-6 bg-white rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Lightbulb className="inline-block w-8 h-8 mr-2 text-teal-600" /> &quot;What Sets Us Apart&quot; Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* --- Section General Settings --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Layout className="w-5 h-5 text-gray-600" /> Section Layout & Background
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Background Type</label>
              <select
                value={form.sectionBgType}
                onChange={(e) => handleChange('sectionBgType', e.target.value)}
                className={commonSelectClasses}
              >
                {SECTION_BACKGROUND_TYPE_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            {form.sectionBgType === 'color' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Background Color</label>
                <input
                  type="color"
                  value={form.sectionBgColor}
                  onChange={(e) => handleChange('sectionBgColor', e.target.value)}
                  className={commonColorInputClasses}
                />
              </div>
            )}
            {(form.sectionBgType === 'image' || form.sectionBgType === 'video') && (
              <>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    {form.sectionBgType === 'image' ? 'Image URL' : 'Video URL'}
                  </label>
                  <input
                    type="text"
                    value={form.mediaType === 'image' ? form.sectionBgImageUrl : form.sectionBgVideoUrl}
                    onChange={(e) => handleChange(form.mediaType === 'image' ? 'sectionBgImageUrl' : 'sectionBgVideoUrl', e.target.value)}
                    className={commonInputClasses}
                    placeholder={form.mediaType === 'image' ? 'https://example.com/bg.jpg' : 'https://example.com/bg.mp4'}
                  />
                  <input
                    type="file"
                    accept={form.sectionBgType === 'image' ? 'image/*' : 'video/*'}
                    onChange={(e) => handleMediaUpload(e, form.sectionBgType)}
                    className="mt-2 text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Media Alt Text</label>
                  <input
                    type="text"
                    value={form.sectionBgMediaAlt}
                    onChange={(e) => handleChange('sectionBgMediaAlt', e.target.value)}
                    className={commonInputClasses}
                    placeholder="Describe your background media"
                  />
                </div>
              </>
            )}
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
              <label className="block text-sm font-semibold text-gray-700 mb-1">Horizontal Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.sectionPaddingX)}
                onChange={(e) => handleChange('sectionPaddingX', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>


        {/* --- Heading Settings --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Text className="w-5 h-5 text-gray-600" /> Heading Text & Style
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Main Heading Text</label>
              <input
                type="text"
                value={form.heading}
                onChange={(e) => handleChange('heading', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Why Choose Us?"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Color</label>
              <input
                type="color"
                value={form.headingColor}
                onChange={(e) => handleChange('headingColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Font Size (px)</label>
              <input
                type="number"
                value={parseInt(form.headingSize)}
                onChange={(e) => handleChange('headingSize', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Font Family</label>
              <select
                value={form.headingFont}
                onChange={(e) => handleChange('headingFont', e.target.value)}
                className={commonSelectClasses}
              >
                {FONT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Alignment</label>
              <select
                value={form.headingAlignment}
                onChange={(e) => handleChange('headingAlignment', e.target.value)}
                className={commonSelectClasses}
              >
                {TEXT_ALIGN_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <input
                  type="checkbox"
                  checked={form.headingGradient}
                  onChange={(e) => handleChange('headingGradient', e.target.checked)}
                  className="form-checkbox h-5 w-5 text-teal-600 rounded"
                />
                Apply Teal-to-Cyan Gradient to Heading (Overrides solid color)
              </label>
            </div>
          </div>
        </div>

        {/* --- Subheading Settings --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Text className="w-5 h-5 text-gray-600" /> Subheading Text & Style
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Subheading Text</label>
              <textarea
                value={form.subheading}
                onChange={(e) => handleChange('subheading', e.target.value)}
                rows={2}
                className={commonInputClasses}
                placeholder="Briefly describe your unique value proposition."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Color</label>
              <input
                type="color"
                value={form.subColor}
                onChange={(e) => handleChange('subColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Font Size (px)</label>
              <input
                type="number"
                value={parseInt(form.subSize)}
                onChange={(e) => handleChange('subSize', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Font Family</label>
              <select
                value={form.subFont}
                onChange={(e) => handleChange('subFont', e.target.value)}
                className={commonSelectClasses}
              >
                {FONT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Alignment</label>
              <select
                value={form.subAlignment}
                onChange={(e) => handleChange('subAlignment', e.target.value)}
                className={commonSelectClasses}
              >
                {TEXT_ALIGN_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* --- Highlight Cards Settings --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Paintbrush className="w-5 h-5 text-gray-600" /> Highlight Cards Appearance
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
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Text Color</label>
              <input
                type="color"
                value={form.cardTextColor}
                onChange={(e) => handleChange('cardTextColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Text Font Size (px)</label>
              <input
                type="number"
                value={parseInt(form.cardTextSize)}
                onChange={(e) => handleChange('cardTextSize', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Text Font Family</label>
              <select
                value={form.cardTextFont}
                onChange={(e) => handleChange('cardTextFont', e.target.value)}
                className={commonSelectClasses}
              >
                {FONT_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Icon Color</label>
              <input
                type="color"
                value={form.cardIconColor}
                onChange={(e) => handleChange('cardIconColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Cards Per Row (Desktop)</label>
              <select
                value={form.cardsGridCols}
                onChange={(e) => handleChange('cardsGridCols', parseInt(e.target.value))}
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

        {/* --- Manage Highlight Cards --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-gray-600" /> Manage Highlight Cards
          </h3>
          <div className="space-y-4">
            {form.cards.map((card, i) => (
              <div key={card.id} className="relative p-4 border border-gray-200 rounded-md bg-gray-50 flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Content (supports &lt;strong&gt;)</label>
                  <textarea
                    value={card.text}
                    onChange={(e) => updateCard(i, 'text', e.target.value)}
                    rows={3}
                    className={`${commonInputClasses} resize-y`}
                    placeholder="Describe this unique aspect. Use <strong> tags for bold text."
                  />
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                  <select
                    value={card.icon}
                    onChange={(e) => updateCard(i, 'icon', e.target.value)}
                    className={commonSelectClasses}
                  >
                    {Object.entries(CARD_ICON_OPTIONS_MAP).map(([key, value]) => (
                      <option key={key} value={key}>{value.name}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="button"
                  onClick={() => removeCard(i)}
                  className="p-2 text-red-500 hover:bg-red-100 rounded-full self-start sm:self-center"
                  aria-label={`Remove card ${i + 1}`}
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addCard}
              className="flex items-center gap-2 text-teal-600 mt-4 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
            >
              <Plus className="w-5 h-5" /> Add New Card
            </button>
          </div>
        </div>

        {/* --- Visual Toggles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Layout className="w-5 h-5 text-gray-600" /> Section Visual Effects
          </h3>
          <div className="flex flex-col md:flex-row gap-6">
            <label className="flex gap-2 items-center text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={form.showGlow}
                onChange={(e) => handleChange('showGlow', e.target.checked)}
                className="form-checkbox h-5 w-5 text-teal-600 rounded"
              />
              Enable Subtle Glow Effect (requires custom CSS)
            </label>
            <label className="flex gap-2 items-center text-sm font-semibold text-gray-700">
              <input
                type="checkbox"
                checked={form.showDottedBackground}
                onChange={(e) => handleChange('showDottedBackground', e.target.checked)}
                className="form-checkbox h-5 w-5 text-teal-600 rounded"
              />
              Show Dotted Background Pattern (requires custom CSS)
            </label>
          </div>
        </div>


        {/* --- Live Preview --- */}
        <div
          className={`mt-10 p-4 sm:p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner overflow-hidden relative ${form.showGlow ? 'relative before:absolute before:inset-0 before:blur-3xl before:bg-teal-500/20 before:animate-pulse-slow' : ''}`}
          style={{
            backgroundColor: form.sectionBgType === 'color' ? form.sectionBgColor : 'transparent',
            paddingTop: form.sectionPaddingY,
            paddingBottom: form.sectionPaddingY,
            paddingLeft: form.sectionPaddingX,
            paddingRight: form.sectionPaddingX,
          }}
        >
          {form.showDottedBackground && (
            <div className="absolute inset-0 z-0 opacity-50 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            ></div>
          )}

          {form.sectionBgType === 'image' && form.sectionBgImageUrl && (
            <img
              src={form.sectionBgImageUrl}
              alt={form.sectionBgMediaAlt}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          )}
          {form.sectionBgType === 'video' && form.sectionBgVideoUrl && (
            <video
              src={form.sectionBgVideoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
              aria-label={form.sectionBgMediaAlt}
            />
          )}
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h3
              className={`font-extrabold mb-4 ${form.headingGradient ? 'bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent' : ''}`}
              style={{
                fontSize: form.headingSize,
                fontFamily: form.headingFont,
                color: form.headingGradient ? undefined : form.headingColor, // Apply color only if no gradient
                textAlign: form.headingAlignment,
              }}
            >
              {form.heading}
            </h3>
            <p
              className="mb-12 max-w-3xl mx-auto"
              style={{
                color: form.subColor,
                fontSize: form.subSize,
                fontFamily: form.subFont,
                textAlign: form.subAlignment,
              }}
            >
              {form.subheading}
            </p>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${form.cardsGridCols} gap-8`}>
              {form.cards.map((card, index) => (
                <div
                  key={card.id}
                  className={`flex flex-col items-center text-center p-6 rounded-xl border ${getShadowClass(form.cardShadow)}`}
                  style={{
                    backgroundColor: form.cardBgColor,
                    borderColor: form.cardBorderColor,
                    color: form.cardTextColor,
                    fontSize: form.cardTextSize,
                    fontFamily: form.cardTextFont,
                  }}
                >
                  <div className="mb-4" style={{ color: form.cardIconColor, fontSize: '3rem' }}> {/* Fixed icon size for preview consistency */}
                    {CARD_ICON_OPTIONS_MAP[card.icon]?.component || <Lightbulb />}
                  </div>
                  <p className="leading-relaxed">
                    {renderHTML(card.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Section Configuration
          </button>
        </div>
      </form>
    </div>
  );
}
