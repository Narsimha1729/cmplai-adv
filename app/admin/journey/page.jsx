'use client';

import { useState } from 'react';
import {
  Trash,
  Plus,
  Palette,
  Text,
  Ruler,
  Paintbrush,
  CalendarDays, // Using CalendarDays for consistency with your display
  AlignLeft,
  AlignRight,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';

export default function JourneyEditor() {
  const [form, setForm] = useState({
    title: 'Our Journey',
    subtitle: 'Key milestones in our growth story',
    titleColor: '#00b4bc',
    subtitleColor: '#4b5563',
    backgroundColor: '#f1fcfc',
    globalFont: 'sans-serif', // Added global font control
    titleSize: '36px',
    subtitleSize: '16px',
    milestoneCardBgColor: '#ffffff', // Card background
    milestoneCardTextColor: '#333333', // Card text color
    timelineLineColor: '#00b4bc', // Line color
    milestoneDotColor: '#00b4bc', // Dot color
    milestoneDotBorderColor: '#00b4bc', // Dot border color
    milestoneDotInnerBg: '#ffffff', // Inner dot background
    milestoneSpacing: '60px', // Vertical spacing between milestones (approx)
    cardBorderHoverColor: '#4b5563', // Hover border color for cards
    cardBgHoverColor: '#e0f7fa', // Hover background color for cards
    cardHoverScale: '1.02', // Hover scale effect for cards

    milestones: [
      {
        date: 'November 2024',
        title: 'Company Registration',
        description: 'LN Infosphere TechTransformers Pvt Ltd officially registered, marking our official entry into the tech landscape with a vision to innovate.',
        side: 'right',
      },
      {
        date: 'January 2025',
        title: 'iTIC IITH Incubation',
        description: 'Incubated at iTIC IIT Hyderabad, a significant step in our early development.',
        side: 'left',
      },
      {
        date: 'February 2025',
        title: 'IITM Incubation',
        description: 'Further strengthened our foundation by joining the IITM Incubation Cell.',
        side: 'right',
      },
      {
        date: 'March 2025',
        title: 'Grant Received',
        description: 'Secured a grant of 4 lakhs from iTIC, accelerating our research and development efforts.',
        side: 'left',
      },
    ],
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const updateMilestone = (i, key, value) => {
    const updated = [...form.milestones];
    updated[i][key] = value;
    setForm({ ...form, milestones: updated });
  };

  const addMilestone = () => {
    setForm({
      ...form,
      milestones: [
        ...form.milestones,
        {
          date: '',
          title: '',
          description: '',
          side: form.milestones.length % 2 === 0 ? 'right' : 'left', // Alternate sides
        },
      ],
    });
  };

  const removeMilestone = (i) => {
    const updated = [...form.milestones];
    updated.splice(i, 1);
    setForm({ ...form, milestones: updated });
  };

  const moveMilestone = (index, direction) => {
    if (direction === 'up' && index > 0) {
      const updatedMilestones = [...form.milestones];
      [updatedMilestones[index - 1], updatedMilestones[index]] = [updatedMilestones[index], updatedMilestones[index - 1]];
      setForm({ ...form, milestones: updatedMilestones });
    } else if (direction === 'down' && index < form.milestones.length - 1) {
      const updatedMilestones = [...form.milestones];
      [updatedMilestones[index + 1], updatedMilestones[index]] = [updatedMilestones[index], updatedMilestones[index + 1]];
      setForm({ ...form, milestones: updatedMilestones });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Journey:', form);
    // In a real application, you would send this 'form' data to your backend API
    alert('Journey section configuration saved! (Demo only)');
  };

  // Common Tailwind classes for inputs and selects to ensure black text
  const commonInputClasses = "w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black";
  const commonSelectClasses = "w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black";


  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        ⏳ Journey Section Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* --- Global Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-gray-600" /> Global Section Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Background Color</label>
              <input
                type="color"
                value={form.backgroundColor}
                onChange={(e) => handleChange('backgroundColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Global Font</label>
              <select
                value={form.globalFont}
                onChange={(e) => handleChange('globalFont', e.target.value)}
                className={commonSelectClasses}
              >
                <option value="sans-serif">Sans-serif (Default)</option>
                <option value="serif">Serif</option>
                <option value="monospace">Monospace</option>
                <option value="'Poppins', sans-serif">Poppins</option>
                <option value="'Roboto', sans-serif">Roboto</option>
                <option value="'Open Sans', sans-serif">Open Sans</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Timeline Line Color</label>
              <input
                type="color"
                value={form.timelineLineColor}
                onChange={(e) => handleChange('timelineLineColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Milestone Dot Color</label>
              <input
                type="color"
                value={form.milestoneDotColor}
                onChange={(e) => handleChange('milestoneDotColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Milestone Dot Border</label>
              <input
                type="color"
                value={form.milestoneDotBorderColor}
                onChange={(e) => handleChange('milestoneDotBorderColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Milestone Dot Inner Bg</label>
              <input
                type="color"
                value={form.milestoneDotInnerBg}
                onChange={(e) => handleChange('milestoneDotInnerBg', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Milestone Vertical Spacing (px)</label>
              <input
                type="number"
                value={parseInt(form.milestoneSpacing)}
                onChange={(e) => handleChange('milestoneSpacing', e.target.value + 'px')}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>

        {/* --- Title & Subtitle --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Text className="w-5 h-5 text-gray-600" /> Section Title & Subtitle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label className="block font-semibold text-gray-800 mb-1">Title Text</label>
              <input
                value={form.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Our Story, Company Milestones"
              />
              <div className="flex gap-4 mt-2">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Color</label>
                  <input
                    type="color"
                    value={form.titleColor}
                    onChange={(e) => handleChange('titleColor', e.target.value)}
                    className="h-10 w-full border border-gray-300 rounded-md p-1"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Size (px)</label>
                  <input
                    type="number"
                    value={parseInt(form.titleSize)}
                    onChange={(e) => handleChange('titleSize', e.target.value + 'px')}
                    placeholder="Font size"
                    className={commonInputClasses}
                  />
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <div>
              <label className="block font-semibold text-gray-800 mb-1">Subtitle Text</label>
              <input
                value={form.subtitle}
                onChange={(e) => handleChange('subtitle', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Key moments in our journey"
              />
              <div className="flex gap-4 mt-2">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Color</label>
                  <input
                    type="color"
                    value={form.subtitleColor}
                    onChange={(e) => handleChange('subtitleColor', e.target.value)}
                    className="h-10 w-full border border-gray-300 rounded-md p-1"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Size (px)</label>
                  <input
                    type="number"
                    value={parseInt(form.subtitleSize)}
                    onChange={(e) => handleChange('subtitleSize', e.target.value + 'px')}
                    placeholder="Font size"
                    className={commonInputClasses}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Milestone Cards Styling --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Paintbrush className="w-5 h-5 text-gray-600" /> Milestone Card Styles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Background Color</label>
              <input
                type="color"
                value={form.milestoneCardBgColor}
                onChange={(e) => handleChange('milestoneCardBgColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Text Color</label>
              <input
                type="color"
                value={form.milestoneCardTextColor}
                onChange={(e) => handleChange('milestoneCardTextColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Border Hover Color</label>
              <input
                type="color"
                value={form.cardBorderHoverColor}
                onChange={(e) => handleChange('cardBorderHoverColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Background Hover Color</label>
              <input
                type="color"
                value={form.cardBgHoverColor}
                onChange={(e) => handleChange('cardBgHoverColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Hover Scale (e.g., 1.02)</label>
              <input
                type="number"
                step="0.01"
                value={parseFloat(form.cardHoverScale)}
                onChange={(e) => handleChange('cardHoverScale', e.target.value)}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>


        {/* --- Milestone Cards Data --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-gray-600" /> Milestones Content
          </h3>
          {form.milestones.map((milestone, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 p-4 mb-4 rounded-lg relative shadow-sm">
              <div className="absolute top-2 right-2 flex space-x-1">
                <button
                  onClick={() => moveMilestone(i, 'up')}
                  type="button"
                  className={`p-1 rounded-full ${i === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-200'}`}
                  disabled={i === 0}
                  aria-label="Move milestone up"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => moveMilestone(i, 'down')}
                  type="button"
                  className={`p-1 rounded-full ${i === form.milestones.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-200'}`}
                  disabled={i === form.milestones.length - 1}
                  aria-label="Move milestone down"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => removeMilestone(i)}
                  type="button"
                  className="p-1 rounded-full text-red-500 hover:bg-red-100"
                  aria-label="Remove milestone"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm text-gray-500 mb-2">Milestone #{i + 1}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Date/Year</label>
                  <input
                    value={milestone.date}
                    onChange={(e) => updateMilestone(i, 'date', e.target.value)}
                    className={commonInputClasses}
                    placeholder="e.g., Nov 2024, 2023"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Side on Timeline</label>
                  <select
                    value={milestone.side}
                    onChange={(e) => updateMilestone(i, 'side', e.target.value)}
                    className={commonSelectClasses}
                  >
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">Title</label>
                  <input
                    value={milestone.title}
                    onChange={(e) => updateMilestone(i, 'title', e.target.value)}
                    className={commonInputClasses}
                    placeholder="e.g., Company Registered"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">Description</label>
                  <textarea
                    value={milestone.description}
                    onChange={(e) => updateMilestone(i, 'description', e.target.value)}
                    className={`${commonInputClasses} min-h-[80px]`}
                    placeholder="A brief description of this milestone"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addMilestone}
            className="text-teal-600 flex items-center gap-2 mt-4 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" /> Add New Milestone
          </button>
        </div>

        {/* --- Live Preview --- */}
        <div
          className="mt-10 p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner"
          style={{ backgroundColor: form.backgroundColor, fontFamily: form.globalFont }}
        >
          <h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">👁️ Live Preview</h3>

          <div className="journey-preview py-8 px-4" style={{ backgroundColor: form.backgroundColor, fontFamily: form.globalFont }}>
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-extrabold mb-3"
                style={{ color: form.titleColor, fontSize: form.titleSize }}
              >
                {form.title}
              </h2>
              <p
                className="text-lg text-gray-600"
                style={{ color: form.subtitleColor, fontSize: form.subtitleSize }}
              >
                {form.subtitle}
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              {/* Vertical Dotted Line */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-dotted z-0"
                style={{ borderColor: form.timelineLineColor }}
              />

              {form.milestones.map((item, index) => (
                <div
                  key={index}
                  className={`relative w-full md:w-1/2 px-4 py-10 ${
                    item.side === "left"
                      ? "text-right md:pr-10 ml-auto"
                      : "text-left md:pl-10 mr-auto"
                  }`}
                  style={{ marginBottom: parseInt(form.milestoneSpacing) - 80 + 'px' }} // Adjust for py-10, approx spacing
                >
                  {/* Dot on the line, outside the card */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 shadow-md"
                    style={{
                      backgroundColor: form.milestoneDotInnerBg,
                      border: `4px solid ${form.milestoneDotBorderColor}`,
                    }}
                  />

                  {/* Card */}
                  <div
                    className="group rounded-xl border shadow-md p-6 text-left md:text-inherit relative z-20 transition-all duration-300"
                    style={{
                      backgroundColor: form.milestoneCardBgColor,
                      color: form.milestoneCardTextColor,
                      borderColor: 'transparent', // Default border color
                      transform: 'scale(1)', // Default scale
                      '--tw-border-opacity': 1, // Reset border opacity
                      '--tw-bg-opacity': 1, // Reset bg opacity
                      '--tw-shadow-color': 'rgba(0, 0, 0, 0.1)', // Default shadow
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = form.cardBorderHoverColor;
                        e.currentTarget.style.backgroundColor = form.cardBgHoverColor;
                        e.currentTarget.style.transform = `scale(${form.cardHoverScale})`;
                        e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'; // Tailwind shadow-xl
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.backgroundColor = form.milestoneCardBgColor;
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'; // Tailwind shadow-md
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2 text-sm font-medium" style={{ color: form.timelineLineColor }}>
                      <CalendarDays className="w-5 h-5" />
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-1" style={{ color: form.milestoneCardTextColor }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-justify" style={{ color: form.milestoneCardTextColor }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Save Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            💾 Save Journey Section
          </button>
        </div>
      </form>
    </div>
  );
}