'use client';

import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Palette,
  Image,
  TextCursorInput,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from 'lucide-react';

export default function ContactEditor() {
  const [form, setForm] = useState({
    heading: 'Contact Us',
    subheading: 'We’d love to hear from you',
    headingColor: '#0f766e',
    subColor: '#4b5563',
    headingSize: '40px',
    subSize: '18px',
    headingFont: 'sans-serif', // Added Poppins and Inter options below
    subFont: 'sans-serif',
    headingGradient: true, // If true, headingColor will be ignored for gradient
    align: 'center',

    backgroundType: 'color', // 'color' | 'image' | 'gradient'
    bgColor: '#f1fcfc',
    bgImage: '', // URL of background image
    bgGradient: 'from-white via-cyan-50 to-teal-100', // Tailwind gradient classes

    address: 'LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India',
    phone: '+91 6301985408',
    email: 'admin@cmplai.com',
    hoursWeek: 'Monday - Friday: 9:00 AM - 6:00 PM',
    hoursWeekend: 'Saturday - Sunday: Closed',
    buttonText: 'Send Message',
    buttonColor: '#0f766e', // This will be used for the button's background
  });

  const handleChange = (field, value) =>
    setForm((prevForm) => ({ ...prevForm, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('✅ Submitted Data:', form);
    // In a real application, you'd send 'form' data to a backend API here.
    // eslint-disable-next-line no-alert
    alert('✅ Contact section settings saved!');
  };

  // Dynamically apply background styles based on selected type
  const getBackgroundClasses = () => {
    if (form.backgroundType === 'color') {
      return `bg-[${form.bgColor}]`; // Tailwind JIT needs explicit values for dynamic colors
    }
    if (form.backgroundType === 'image') {
      return `bg-cover bg-center`; // Ensure these classes are present, image handled by inline style
    }
    if (form.backgroundType === 'gradient') {
      return `bg-gradient-to-r ${form.bgGradient}`;
    }
    return '';
  };

  // Apply inline styles for dynamic background image or color
  const getBackgroundInlineStyle = () => {
    if (form.backgroundType === 'color') {
      return { backgroundColor: form.bgColor };
    }
    if (form.backgroundType === 'image') {
      return { backgroundImage: `url(${form.bgImage})` };
    }
    return {};
  };

  const getTextColorClass = (color) => {
    // Determine if text color is light or dark to suggest contrasting placeholder text
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150 ? 'text-gray-900' : 'text-white'; // Return a Tailwind class
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-8">
        📬 Contact Section Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- Heading & Subheading Controls --- */}
        <div className="grid md:grid-cols-2 gap-8 pb-6 border-b border-gray-200">
          {/* Heading */}
          <div>
            <label
              htmlFor="heading"
              className="block font-semibold text-gray-800 mb-2"
            >
              Section Heading
            </label>
            <input
              id="heading"
              type="text"
              value={form.heading}
              onChange={(e) => handleChange('heading', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., Get in Touch"
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label htmlFor="headingColor" className="sr-only">
                  Heading Color
                </label>
                <input
                  id="headingColor"
                  type="color"
                  value={form.headingColor}
                  onChange={(e) => handleChange('headingColor', e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                  title="Choose Heading Color"
                />
              </div>
              <div>
                <label htmlFor="headingSize" className="sr-only">
                  Heading Size (px)
                </label>
                <input
                  id="headingSize"
                  type="number"
                  value={parseInt(form.headingSize, 10)}
                  onChange={(e) => handleChange('headingSize', `${e.target.value}px`)}
                  placeholder="Size (px)"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Heading Font Size"
                />
              </div>
              <div>
                <label htmlFor="headingFont" className="sr-only">
                  Heading Font
                </label>
                <select
                  id="headingFont"
                  value={form.headingFont}
                  onChange={(e) => handleChange('headingFont', e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Heading Font Family"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Inter', sans-serif">Inter</option>
                </select>
              </div>
            </div>
            <label
              htmlFor="headingGradient"
              className="mt-4 flex items-center gap-2 text-sm text-gray-700 font-medium"
            >
              <input
                id="headingGradient"
                type="checkbox"
                checked={form.headingGradient}
                onChange={(e) => handleChange('headingGradient', e.target.checked)}
                className="form-checkbox h-4 w-4 text-teal-600 rounded"
              />
              Apply Gradient to Heading (overrides color)
            </label>
          </div>

          {/* Subheading */}
          <div>
            <label
              htmlFor="subheading"
              className="block font-semibold text-gray-800 mb-2"
            >
              Section Subheading
            </label>
            <input
              id="subheading"
              type="text"
              value={form.subheading}
              onChange={(e) => handleChange('subheading', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., Reach out for inquiries"
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label htmlFor="subColor" className="sr-only">
                  Subheading Color
                </label>
                <input
                  id="subColor"
                  type="color"
                  value={form.subColor}
                  onChange={(e) => handleChange('subColor', e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                  title="Choose Subheading Color"
                />
              </div>
              <div>
                <label htmlFor="subSize" className="sr-only">
                  Subheading Size (px)
                </label>
                <input
                  id="subSize"
                  type="number"
                  value={parseInt(form.subSize, 10)}
                  onChange={(e) => handleChange('subSize', `${e.target.value}px`)}
                  placeholder="Size (px)"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Subheading Font Size"
                />
              </div>
              <div>
                <label htmlFor="subFont" className="sr-only">
                  Subheading Font
                </label>
                <select
                  id="subFont"
                  value={form.subFont}
                  onChange={(e) => handleChange('subFont', e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Subheading Font Family"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Inter', sans-serif">Inter</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* --- Layout & Background Controls --- */}
        <div className="grid md:grid-cols-2 gap-8 pb-6 border-b border-gray-200">
          {/* Text Alignment */}
          <div>
            <label
              htmlFor="align"
              className="block font-semibold text-gray-800 mb-2"
            >
              Text Alignment
            </label>
            <select
              id="align"
              value={form.align}
              onChange={(e) => handleChange('align', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
              aria-label="Text Alignment"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Applies to the heading and subheading text.
            </p>
          </div>

          {/* Background Type */}
          <div>
            <label
              htmlFor="backgroundType"
              className="block font-semibold text-gray-800 mb-2"
            >
              Background Type
            </label>
            <select
              id="backgroundType"
              value={form.backgroundType}
              onChange={(e) => handleChange('backgroundType', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
              aria-label="Select Background Type"
            >
              <option value="color">Solid Color</option>
              <option value="gradient">Gradient</option>
              <option value="image">Image</option>
            </select>

            {form.backgroundType === 'color' && (
              <div className="mt-3">
                <label htmlFor="bgColor" className="sr-only">
                  Background Color
                </label>
                <input
                  id="bgColor"
                  type="color"
                  value={form.bgColor}
                  onChange={(e) => handleChange('bgColor', e.target.value)}
                  className="h-10 w-24 rounded-md border border-gray-300 cursor-pointer"
                  title="Choose Background Color"
                />
              </div>
            )}
            {form.backgroundType === 'image' && (
              <div className="mt-3">
                <label htmlFor="bgImage" className="sr-only">
                  Background Image URL
                </label>
                <input
                  id="bgImage"
                  type="text"
                  placeholder="Enter image URL (e.g., https://example.com/bg.jpg)"
                  value={form.bgImage}
                  onChange={(e) => handleChange('bgImage', e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Provide a direct URL to your background image.
                </p>
              </div>
            )}
            {form.backgroundType === 'gradient' && (
              <div className="mt-3">
                <label htmlFor="bgGradient" className="sr-only">
                  Tailwind Gradient Classes
                </label>
                <input
                  id="bgGradient"
                  type="text"
                  value={form.bgGradient}
                  onChange={(e) => handleChange('bgGradient', e.target.value)}
                  placeholder="e.g., from-blue-400 via-purple-500 to-pink-600"
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Enter Tailwind CSS gradient classes (e.g., `from-teal-100
                  to-white`).
                </p>
              </div>
            )}
          </div>
        </div>

        {/* --- Contact Information Fields --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 border-b border-gray-200">
          <div>
            <label
              htmlFor="address"
              className="font-semibold text-gray-800 mb-2 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5 text-teal-600" /> Address
            </label>
            <textarea
              id="address"
              value={form.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              rows={3}
              placeholder="e.g., 123 Business Rd, Suite 400, City, State, ZIP"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="font-semibold text-gray-800 mb-2 flex items-center gap-2"
            >
              <Phone className="w-5 h-5 text-teal-600" /> Phone Number
            </label>
            <input
              id="phone"
              type="tel" // Use type="tel" for phone numbers
              value={form.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., +1 (123) 456-7890"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="font-semibold text-gray-800 mb-2 flex items-center gap-2"
            >
              <Mail className="w-5 h-5 text-teal-600" /> Email Address
            </label>
            <input
              id="email"
              type="email" // Use type="email" for email addresses
              value={form.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., info@yourcompany.com"
            />
          </div>
        </div>

        {/* --- Business Hours --- */}
        <div className="grid md:grid-cols-2 gap-6 pb-6 border-b border-gray-200">
          <div>
            <label
              htmlFor="hoursWeek"
              className="font-semibold text-gray-800 mb-2 flex items-center gap-2"
            >
              <Clock className="w-5 h-5 text-teal-600" /> Weekday Hours
            </label>
            <input
              id="hoursWeek"
              type="text"
              value={form.hoursWeek}
              onChange={(e) => handleChange('hoursWeek', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., Mon - Fri: 9 AM - 5 PM"
            />
          </div>
          <div>
            <label
              htmlFor="hoursWeekend"
              className="font-semibold text-gray-800 mb-2 flex items-center gap-2"
            >
              <Clock className="w-5 h-5 text-teal-600" /> Weekend Hours
            </label>
            <input
              id="hoursWeekend"
              type="text"
              value={form.hoursWeekend}
              onChange={(e) => handleChange('hoursWeekend', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              placeholder="e.g., Sat - Sun: Closed"
            />
          </div>
        </div>

        {/* --- Call to Action Button Styling --- */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3 border-gray-200">
            Call to Action Button
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="buttonText"
                className="block font-semibold text-gray-800 mb-2"
              >
                Button Text
              </label>
              <input
                id="buttonText"
                type="text"
                value={form.buttonText}
                onChange={(e) => handleChange('buttonText', e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                placeholder="e.g., Get a Quote"
              />
            </div>
            <div>
              <label
                htmlFor="buttonColor"
                className="block font-semibold text-gray-800 mb-2"
              >
                Button Background Color
              </label>
              <input
                id="buttonColor"
                type="color"
                value={form.buttonColor}
                onChange={(e) => handleChange('buttonColor', e.target.value)}
                className="h-10 w-24 rounded-md border border-gray-300 cursor-pointer"
                title="Choose Button Background Color"
              />
            </div>
          </div>
        </div>

        {/* --- Live Preview Section --- */}
        <div
          className={`mt-10 p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner overflow-hidden ${getBackgroundClasses()}`}
          style={getBackgroundInlineStyle()}
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Live Preview:
          </h3>
          <div className="p-6 rounded-lg" style={getBackgroundInlineStyle()}>
            <h1
              className={`text-3xl md:text-5xl font-bold mb-3 leading-tight ${form.headingGradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500' : ''}`}
              style={{
                color: form.headingGradient ? undefined : form.headingColor,
                fontSize: form.headingSize,
                fontFamily: form.headingFont,
                textAlign: form.align,
              }}
            >
              {form.heading}
            </h1>
            <p
              className="text-lg md:text-xl mb-6"
              style={{
                color: form.subColor,
                fontSize: form.subSize,
                fontFamily: form.subFont,
                textAlign: form.align,
              }}
            >
              {form.subheading}
            </p>

            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ${form.align === 'center' ? 'justify-items-center' : form.align === 'right' ? 'justify-items-end' : 'justify-items-start'}`}
            >
              {form.address && (
                <div className={`flex items-start gap-3 ${getTextColorClass(form.bgColor)}`}>
                  <MapPin className="w-6 h-6 shrink-0" style={{ color: form.headingColor }} />
                  <p>
                    <strong className="block">Address:</strong> {form.address}
                  </p>
                </div>
              )}
              {form.phone && (
                <div className={`flex items-start gap-3 ${getTextColorClass(form.bgColor)}`}>
                  <Phone className="w-6 h-6 shrink-0" style={{ color: form.headingColor }} />
                  <p>
                    <strong className="block">Phone:</strong> {form.phone}
                  </p>
                </div>
              )}
              {form.email && (
                <div className={`flex items-start gap-3 ${getTextColorClass(form.bgColor)}`}>
                  <Mail className="w-6 h-6 shrink-0" style={{ color: form.headingColor }} />
                  <p>
                    <strong className="block">Email:</strong> {form.email}
                  </p>
                </div>
              )}
              {form.hoursWeek && (
                <div className={`flex items-start gap-3 ${getTextColorClass(form.bgColor)}`}>
                  <Clock className="w-6 h-6 shrink-0" style={{ color: form.headingColor }} />
                  <p>
                    <strong className="block">Business Hours (Week):</strong>{' '}
                    {form.hoursWeek}
                  </p>
                </div>
              )}
              {form.hoursWeekend && (
                <div className={`flex items-start gap-3 ${getTextColorClass(form.bgColor)}`}>
                  <Clock className="w-6 h-6 shrink-0" style={{ color: form.headingColor }} />
                  <p>
                    <strong className="block">Business Hours (Weekend):</strong>{' '}
                    {form.hoursWeekend}
                  </p>
                </div>
              )}
            </div>

            <div className={`mt-10 flex ${form.align === 'center' ? 'justify-center' : form.align === 'right' ? 'justify-end' : 'justify-start'}`}>
              <button
                type="button" // This is a preview button, not a form submit
                className={`px-8 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition`}
                style={{ backgroundColor: form.buttonColor, color: getTextColorClass(form.buttonColor) === 'text-white' ? 'white' : 'black' }}
              >
                {form.buttonText}
              </button>
            </div>
          </div>
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-8 text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            💾 Save Contact Section
          </button>
        </div>
      </form>
    </div>
  );
}
