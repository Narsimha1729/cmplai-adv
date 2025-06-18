'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  FileText, // Default icon
  Sparkles, // From user's Chooseus.jsx
  Target, // From user's Chooseus.jsx
  Globe2, // From user's Chooseus.jsx
  Lightbulb,
  LifeBuoy,
  ShieldCheck,
  Zap,
  CheckCircle,
  HardHat,
  DollarSign,
  Award,
  Users,
  Handshake,
  Settings, // For general section settings
  Palette, // For color settings
  Layers, // For individual service card settings
  Save, // For save button
  Eye as EyeIcon, // For live preview header
  ImageIcon, // For custom image icon
  CircleDot, // For radio button effect
} from 'lucide-react';

// Static icon URLs for demonstration (if user chooses custom image)
const staticIcons = [
  'http://via.placeholder.com/64/007bff/FFFFFF?text=Custom1', // Blue
  'http://via.placeholder.com/64/28a745/FFFFFF?text=Custom2', // Green
  'http://via.placeholder.com/64/ffc107/000000?text=Custom3', // Yellow
];

// Centralized mapping for Lucide icons for easier rendering and display names
const ICON_OPTIONS_MAP = {
  'sparkles': { component: Sparkles, name: 'Sparkles (Innovation)' },
  'target': { component: Target, name: 'Target (Purpose-Built)' },
  'globe-2': { component: Globe2, name: 'Globe (Workforce/Global)' },
  'award': { component: Award, name: 'Award (Excellence)' },
  'users': { component: Users, name: 'Users (Team/Community)' },
  'handshake': { component: Handshake, name: 'Handshake (Trust/Partnership)' },
  'shield-check': { component: ShieldCheck, name: 'Shield Check (Security/Reliability)' },
  'lightbulb': { component: Lightbulb, name: 'Lightbulb (Idea)' },
  'dollar-sign': { component: DollarSign, name: 'Dollar Sign (Cost Savings)' },
  'check-circle': { component: CheckCircle, name: 'Check Circle (Success/Validation)' },
  'zap': { component: Zap, name: 'Zap (Efficiency/Speed)' },
  'life-buoy': { component: LifeBuoy, name: 'Life Buoy (Support)' },
  'file-text': { component: FileText, name: 'File Text (Documentation)' },
  'hard-hat': { component: HardHat, name: 'Hard Hat (Industry Expertise)' },
};

// Default values for a new "Why Choose Us" point card
const defaultPointCard = {
  icon: { type: 'lucide', name: 'sparkles' }, // Default to Sparkles as per user's example
  imageUrl: '', // For custom image URLs
  title: 'New Key Advantage',
  desc: 'Highlight a compelling reason why customers should choose your service or product. Use <strong>HTML tags</strong> for emphasis.',
  color: '#0d9488', // Default icon color (teal-600)
};

// 👁️ Live Preview Component for Choose Us
function ChooseUsPreview({ formData }) {
  const {
    sectionTitle,
    descriptionText,
    sectionTitleColor,
    sectionDescColor,
    sectionBgColor,
    sectionPaddingY,
    cardBgColor,
    cardBorderColor,
    cardHoverBgColor,
    cardShadow,
    cardTitleColor,
    cardDescColor,
    cardIconSize,
    cardIconWrapperBgColor,
    cardIconWrapperHoverBgColor,
    cardsPerRow,
    points
  } = formData;

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
    <section
      className="py-24 px-4"
      style={{
        backgroundColor: sectionBgColor,
        paddingTop: sectionPaddingY,
        paddingBottom: sectionPaddingY,
      }}
      id="why-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4"
          style={{ color: sectionTitleColor }}
        >
          {sectionTitle || "Why Choose Us?"}
        </h2>
        <p
          className="mb-12 max-w-2xl mx-auto text-lg md:text-xl"
          style={{ color: sectionDescColor }}
        >
          {descriptionText || "Discover how Cmplai transforms compliance processes"}
        </p>

        <div className={`grid gap-8 md:grid-cols-${cardsPerRow}`}>
          {points.length === 0 && <p className="text-gray-400 col-span-full italic">No advantages added. Add some below!</p>}
          {points.map((point, i) => {
            const IconComponent = point.icon.type === 'lucide' ? ICON_OPTIONS_MAP[point.icon.name]?.component : null;
            const iconToRender = point.icon.type === 'image' && point.imageUrl
              ? <img src={point.imageUrl} alt="Custom Icon" className="w-full h-full object-contain" />
              : IconComponent ? <IconComponent className="w-1/2 h-1/2" style={{ color: point.color }} /> : null;

            return (
              <div
                key={i}
                className={`group text-center px-6 py-8 rounded-xl border border-transparent
                           ${getShadowClass(cardShadow)}
                           transform transition-all duration-300 hover:scale-[1.03] cursor-default`}
                style={{
                  backgroundColor: cardBgColor,
                  borderColor: cardBorderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = cardHoverBgColor;
                  // Handle shadow on hover directly here if shadow is also dynamic
                  e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'; // Example for xl shadow
                  if (cardShadow === 'md') e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'; // Example for xl hover shadow
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = cardBgColor;
                  e.currentTarget.style.boxShadow = getShadowClass(cardShadow).replace('shadow-', '0 '); // Reset shadow based on original
                }}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className="rounded-full flex items-center justify-center transition duration-300"
                    style={{
                      width: cardIconSize,
                      height: cardIconSize,
                      backgroundColor: cardIconWrapperBgColor,
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = cardIconWrapperHoverBgColor}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = cardIconWrapperBgColor}
                  >
                    {iconToRender || <FileText className="w-1/2 h-1/2" style={{ color: point.color }} />}
                  </div>
                </div>
                <h3
                  className="text-lg font-semibold mb-3 transition"
                  style={{ color: cardTitleColor }}
                  // Hover color for title is handled by specific class in user's example
                  // group-hover:text-teal-600
                >
                  {point.title || "Advantage Title"}
                </h3>
                <p
                  className="text-sm leading-relaxed text-justify transition-all"
                  style={{ color: cardDescColor }}
                  dangerouslySetInnerHTML={{ __html: point.desc || "Description goes here." }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default function AdminChooseUsPage() {
  const [form, setForm] = useState({
    sectionTitle: 'Why Choose Us?',
    descriptionText: 'Discover how Cmplai transforms compliance processes',
    sectionTitleColor: '#0d9488', // text-teal-600
    sectionDescColor: '#4b5563', // text-gray-600
    sectionBgColor: '#ffffff', // bg-white
    sectionPaddingY: '96px', // py-24

    // Card global styles based on user's Chooseus.jsx
    cardBgColor: '#ffffff', // bg-white
    cardBorderColor: '#e2e8f0', // border-transparent in example is effectively gray-200
    cardHoverBgColor: '#f0fdfa', // bg-teal-50
    cardShadow: 'md', // shadow-md, hover:shadow-xl is a hover effect not directly set as a static shadow level
    cardTitleColor: '#111827', // text-gray-900
    cardDescColor: '#4b5563', // text-gray-600
    cardIconSize: '3rem', // w-12 h-12 = 3rem
    cardIconWrapperBgColor: '#f0fdfa', // bg-teal-50
    cardIconWrapperHoverBgColor: '#e0f2f7', // bg-teal-100
    cardsPerRow: 3,

    points: [
      {
        icon: { type: 'lucide', name: 'sparkles' },
        imageUrl: '',
        title: 'Industry-First GenAI Automation',
        desc: 'Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>. Our <strong>GenAI-powered</strong> SaaS ERP platform minimizes manual intervention and errors, ensuring unmatched accuracy and regulatory adherence.',
        color: '#0d9488', // text-teal-600
      },
      {
        icon: { type: 'lucide', name: 'target' },
        imageUrl: '',
        title: 'Purpose-Built for Pharma & Manufacturing',
        desc: 'We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, <strong>US-FDA</strong>, and other global standards, so your documentation is always audit-ready and meets the strictest requirements.',
        color: '#0d9488',
      },
      {
        icon: { type: 'lucide', name: 'globe-2' },
        imageUrl: '',
        title: 'Empowering Your Workforce',
        desc: 'We reduce <strong>repetitive manual tasks</strong>, allowing your teams to focus on <strong>high-value work</strong> like innovation and quality enhancement, leading to better resource allocation and job satisfaction.',
        color: '#0d9488',
      },
    ],
  });

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const updatePoint = (index, field, value) => {
    const updatedPoints = form.points.map((point, i) => {
      if (i === index) {
        if (field === 'iconType') {
          return {
            ...point,
            icon: { type: value, name: value === 'lucide' ? 'sparkles' : '' },
            imageUrl: value === 'image' ? (point.imageUrl || staticIcons[0]) : '',
          };
        } else if (field === 'iconName') {
          return { ...point, icon: { ...point.icon, name: value } };
        } else {
          return { ...point, [field]: value };
        }
      }
      return point;
    });
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
        { ...defaultPointCard },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Why Choose Us section saved successfully! (This is a demo)');
    console.log('Saved form data:', form);
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = 'w-full p-2 border border-gray-300 rounded-md text-gray-800 focus:ring-teal-500 focus:border-teal-500 shadow-sm';
  const commonColorInputClasses = 'w-16 h-10 border border-gray-300 rounded-md p-1 cursor-pointer';
  const commonSelectClasses = 'w-full border border-gray-300 rounded-md p-2 text-gray-800 focus:ring-teal-500 focus:border-teal-500 shadow-sm';


  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        ✨ Why Choose Us Section Editor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Section Global Settings */}
        <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-5 text-center">
            <Settings className="inline-block w-6 h-6 mr-2 text-gray-700" /> Section Global Settings
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
                className={commonInputClasses}
                placeholder="e.g., Why Choose Us"
              />
            </div>
            <div>
              <label htmlFor="sectionTitleColor" className="text-sm text-gray-700 block mb-1">
                Title Color
              </label>
              <input
                type="color"
                id="sectionTitleColor"
                value={form.sectionTitleColor}
                onChange={(e) => handleChange('sectionTitleColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="descriptionText" className="font-semibold text-gray-800 block mb-2">
                Section Subtitle (Description)
              </label>
              <input
                type="text"
                id="descriptionText"
                value={form.descriptionText}
                onChange={(e) => handleChange('descriptionText', e.target.value)}
                className={commonInputClasses}
                placeholder="A brief description of your advantages."
              />
            </div>
            <div>
              <label htmlFor="sectionDescColor" className="text-sm text-gray-700 block mb-1">
                Subtitle Color
              </label>
              <input
                type="color"
                id="sectionDescColor"
                value={form.sectionDescColor}
                onChange={(e) => handleChange('sectionDescColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="sectionBgColor" className="font-semibold text-gray-800 block mb-2">
                Section Background Color
              </label>
              <input
                type="color"
                id="sectionBgColor"
                value={form.sectionBgColor}
                onChange={(e) => handleChange('sectionBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="sectionPaddingY" className="font-semibold text-gray-800 block mb-2">
                Vertical Padding (px)
              </label>
              <input
                type="number"
                id="sectionPaddingY"
                value={parseInt(form.sectionPaddingY)}
                onChange={(e) => handleChange('sectionPaddingY', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>

        {/* Default Card Styles */}
        <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-5 text-center">
            <Palette className="inline-block w-6 h-6 mr-2 text-gray-700" /> Default Advantage Card Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="cardBgColor" className="block text-sm text-gray-700 mb-1">
                Card Background Color
              </label>
              <input
                type="color"
                id="cardBgColor"
                value={form.cardBgColor}
                onChange={(e) => handleChange('cardBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="cardBorderColor" className="block text-sm text-gray-700 mb-1">
                Card Border Color
              </label>
              <input
                type="color"
                id="cardBorderColor"
                value={form.cardBorderColor}
                onChange={(e) => handleChange('cardBorderColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="cardHoverBgColor" className="block text-sm text-gray-700 mb-1">
                Card Hover Background
              </label>
              <input
                type="color"
                id="cardHoverBgColor"
                value={form.cardHoverBgColor}
                onChange={(e) => handleChange('cardHoverBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="cardShadow" className="block text-sm text-gray-700 mb-1">
                Card Shadow
              </label>
              <select
                id="cardShadow"
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
              <label htmlFor="cardTitleColor" className="block text-sm text-gray-700 mb-1">
                Card Title Color
              </label>
              <input
                type="color"
                id="cardTitleColor"
                value={form.cardTitleColor}
                onChange={(e) => handleChange('cardTitleColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="cardDescColor" className="block text-sm text-gray-700 mb-1">
                Card Description Color
              </label>
              <input
                type="color"
                id="cardDescColor"
                value={form.cardDescColor}
                onChange={(e) => handleChange('cardDescColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="cardsPerRow" className="font-semibold text-gray-800 block mb-2">
                Cards Per Row (Desktop)
              </label>
              <select
                id="cardsPerRow"
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
            <div>
              <label htmlFor="cardIconSize" className="font-semibold text-gray-800 block mb-2">
                Icon Size (e.g., 3rem)
              </label>
              <input
                type="text"
                id="cardIconSize"
                value={form.cardIconSize}
                onChange={(e) => handleChange('cardIconSize', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., 2rem, 3rem, 40px"
              />
            </div>
            <div>
              <label htmlFor="cardIconWrapperBgColor" className="block text-sm text-gray-700 mb-1">
                Icon Wrapper Bg Color
              </label>
              <input
                type="color"
                id="cardIconWrapperBgColor"
                value={form.cardIconWrapperBgColor}
                onChange={(e) => handleChange('cardIconWrapperBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label htmlFor="cardIconWrapperHoverBgColor" className="block text-sm text-gray-700 mb-1">
                Icon Wrapper Hover Bg
              </label>
              <input
                type="color"
                id="cardIconWrapperHoverBgColor"
                value={form.cardIconWrapperHoverBgColor}
                onChange={(e) => handleChange('cardIconWrapperHoverBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
          </div>
        </div>

        {/* Individual Advantage Items Editor */}
        <div className="bg-white p-6 rounded-lg shadow-inner border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            <Layers className="inline-block w-6 h-6 mr-2 text-gray-700" /> Customize Your Advantages
          </h3>
          {form.points.map((point, i) => {
            const IconComponent = point.icon.type === 'lucide' ? ICON_OPTIONS_MAP[point.icon.name]?.component : null;
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Icon Type for Point {i + 1}:
                  </label>
                  <div className="flex space-x-4 mb-2">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name={`iconType-${i}`}
                        value="lucide"
                        checked={point.icon.type === 'lucide'}
                        onChange={() => updatePoint(i, 'iconType', 'lucide')}
                      />
                      <span className="ml-2 text-gray-700">Lucide Icon</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio"
                        name={`iconType-${i}`}
                        value="image"
                        checked={point.icon.type === 'image'}
                        onChange={() => updatePoint(i, 'iconType', 'image')}
                      />
                      <span className="ml-2 text-gray-700">Custom Image URL</span>
                    </label>
                  </div>

                  {point.icon.type === 'lucide' && (
                    <>
                      <label htmlFor={`icon-${i}`} className="block text-sm font-medium text-gray-700 mb-2">
                        Select Lucide Icon:
                        {IconComponent && (
                          <IconComponent
                            className="w-6 h-6 inline-block ml-2 align-middle"
                            style={{ color: point.color }}
                            aria-hidden="true"
                          />
                        )}
                      </label>
                      <select
                        id={`icon-${i}`}
                        value={point.icon.name}
                        onChange={(e) => updatePoint(i, 'iconName', e.target.value)}
                        className={commonSelectClasses}
                      >
                        {Object.values(ICON_OPTIONS_MAP).map((iconOpt) => (
                          <option key={iconOpt.name} value={iconOpt.name}>
                            {iconOpt.name}
                          </option>
                        ))}
                      </select>
                    </>
                  )}

                  {point.icon.type === 'image' && (
                    <>
                      <label htmlFor={`imageUrl-${i}`} className="block text-sm font-medium text-gray-700 mb-2">
                        Custom Image URL:
                      </label>
                      <input
                        type="text"
                        id={`imageUrl-${i}`}
                        value={point.imageUrl}
                        onChange={(e) => updatePoint(i, 'imageUrl', e.target.value)}
                        className={commonInputClasses}
                        placeholder="e.g., https://example.com/icon.png"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Enter a direct image URL. You can also use placeholders:
                        {staticIcons.map((url, idx) => (
                          <span key={idx} className="ml-2">
                            <a href="#" onClick={(e) => { e.preventDefault(); updatePoint(i, 'imageUrl', url); }} className="text-teal-600 hover:underline">
                              Static {idx + 1}
                            </a>
                          </span>
                        ))}
                      </p>
                      {point.imageUrl && (
                        <div className="mt-2 text-center">
                          <img src={point.imageUrl} alt="Preview" className="h-16 w-16 mx-auto object-contain border border-gray-200 rounded-md p-1" />
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor={`color-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Icon Color for Point {i + 1}
                  </label>
                  <input
                    type="color"
                    id={`color-${i}`}
                    value={point.color}
                    onChange={(e) => updatePoint(i, 'color', e.target.value)}
                    className={commonColorInputClasses}
                  />
                  <p className="text-xs text-gray-500 mt-1">This color will apply to Lucide icons only.</p>
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
                    className={commonInputClasses}
                    placeholder="Advantage Title"
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
            <Plus className="w-5 h-5" /> Add New Advantage
          </button>
        </div>

        {/* Live Preview */}
        <div className="mt-12 p-8 rounded-xl border-4 border-dashed border-gray-300 bg-gray-50 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <EyeIcon className="w-8 h-8 text-gray-700" /> Live Preview
          </h3>
          <ChooseUsPreview formData={form} />
        </div>

        {/* Save Button */}
        <div className="text-center pt-10">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white
                       px-10 py-4 font-bold text-lg rounded-xl shadow-xl
                       hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Why Choose Us Section Changes
          </button>
        </div>
      </form>
    </div>
  );
}