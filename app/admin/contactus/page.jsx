'use client';

import { useState, useCallback } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Palette,
  Image as ImageIcon, // Renamed to avoid conflict with `Image` from `next/image`
  TextCursorInput,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  UploadCloud, // For file uploads
  Link, // For URL inputs
  Eye as EyeIcon, // For live preview header
  Save, // For save button
  Send, // For send message button icon
} from 'lucide-react';

// Live Preview Component
function ContactUsPreview({ formData }) {
  const {
    heading, subheading, headingColor, subColor, headingSize, subSize,
    headingFont, subFont, headingGradient, align,
    backgroundType, bgColor, bgImage, bgGradient,
    address, phone, email, hoursWeek, hoursWeekend,
    buttonText, buttonColor, buttonGradientFrom, buttonGradientTo,
    contactFormTitle, namePlaceholder, emailPlaceholder, messagePlaceholder
  } = formData;

  // Header styles
  const headerContainerStyle = { textAlign: align };
  const headingStyle = {
    fontSize: headingSize,
    fontFamily: headingFont,
    // For gradient, text-transparent and bg-clip-text are handled by Tailwind classes
  };
  const subheadingStyle = {
    fontSize: subSize,
    fontFamily: subFont,
    color: subColor,
  };

  const finalHeadingClasses = `text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight ${
    headingGradient
      ? 'bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500' // Hardcoded as per original frontend image
      : ''
  }`;

  // Background styles for the entire section
  const sectionBackgroundStyle = {};
  let sectionBackgroundClasses = '';
  if (backgroundType === 'color') {
    sectionBackgroundStyle.backgroundColor = bgColor;
  } else if (backgroundType === 'image') {
    sectionBackgroundStyle.backgroundImage = `url(${bgImage})`;
    sectionBackgroundStyle.backgroundSize = 'cover';
    sectionBackgroundStyle.backgroundPosition = 'center';
    sectionBackgroundStyle.backgroundRepeat = 'no-repeat';
  } else if (backgroundType === 'gradient') {
    sectionBackgroundClasses = `bg-gradient-to-r ${bgGradient}`;
  }

  // Determine text color for sections with dynamic backgrounds
  const getContrastTextColor = (color) => {
    // Simple luminance check for light/dark color
    if (!color) return 'text-gray-900'; // Default if color is undefined
    const hex = color.startsWith('#') ? color.slice(1) : color;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? 'text-gray-800' : 'text-white';
  };

  // Button styles
  const buttonStyle = {
    backgroundColor: buttonColor,
    color: getContrastTextColor(buttonColor) === 'text-white' ? 'white' : 'black',
  };
  const buttonClasses = `px-8 py-3 rounded-lg font-semibold shadow-md hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2`;

  const finalButtonClasses = buttonGradientFrom && buttonGradientTo
    ? `${buttonClasses} bg-gradient-to-r from-[${buttonGradientFrom}] to-[${buttonGradientTo}] text-white hover:from-teal-600 hover:to-cyan-700`
    : `${buttonClasses} text-${getContrastTextColor(buttonColor).split('-')[1]} bg-[${buttonColor}]`;


  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 rounded-xl ${sectionBackgroundClasses}`} style={sectionBackgroundStyle}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12" style={headerContainerStyle}>
          <h2 className={finalHeadingClasses} style={headingStyle}>
            {heading}
          </h2>
          <p className="text-lg md:text-xl" style={subheadingStyle}>
            {subheading}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {contactFormTitle}
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder={namePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder={emailPlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder={messagePlaceholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 text-gray-900 placeholder-gray-400 resize-y"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className={finalButtonClasses}
                  style={{ minWidth: '180px' }} // Ensure button has consistent width
                >
                  {buttonText} <Send className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              {address && (
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-1">Address</h4>
                    <p className="text-gray-600 text-base">{address}</p>
                  </div>
                </div>
              )}
              {phone && (
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-1">Phone</h4>
                    <p className="text-gray-600 text-base">{phone}</p>
                  </div>
                </div>
              )}
              {email && (
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-teal-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 text-lg mb-1">Email</h4>
                    <p className="text-gray-600 text-base">{email}</p>
                  </div>
                </div>
              )}
            </div>

            {(hoursWeek || hoursWeekend) && (
              <div className="mt-8 border-t border-gray-200 pt-8">
                <h3 className="font-bold text-gray-800 text-2xl mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-teal-600" /> Business Hours
                </h3>
                {hoursWeek && (
                  <p className="text-gray-600 text-base mb-1">
                    <strong className="block text-gray-800">Monday - Friday:</strong> {hoursWeek}
                  </p>
                )}
                {hoursWeekend && (
                  <p className="text-gray-600 text-base">
                    <strong className="block text-gray-800">Saturday - Sunday:</strong> {hoursWeekend}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


export default function AdminContactUsPage() {
  const [form, setForm] = useState({
    heading: 'Contact Us',
    subheading: 'We’d love to hear from you',
    headingColor: '#0f766e', // Default for solid color option
    subColor: '#4b5563', // gray-600
    headingSize: '40px',
    subSize: '18px',
    headingFont: 'sans-serif',
    subFont: 'sans-serif',
    headingGradient: true, // If true, headingColor will be ignored for gradient
    align: 'center', // Header text alignment

    backgroundType: 'gradient', // 'color' | 'image' | 'gradient'
    // Default gradient matches image: from-white via-cyan-50 to-teal-100
    bgColor: '#f1fcfc', // Default solid background color (light teal)
    bgImage: '', // URL of background image
    bgGradient: 'from-white via-cyan-50 to-teal-100', // Tailwind gradient classes

    address: 'LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India',
    phone: '+91 6301985408',
    email: 'admin@cmplai.com',
    hoursWeek: '9:00 AM - 6:00 PM',
    hoursWeekend: 'Closed',
    buttonText: 'Send Message',
    buttonColor: '#0f766e', // This will be used for the button's background if no gradient
    buttonGradientFrom: '#15b8a6', // from-teal-500
    buttonGradientTo: '#06b6d4',   // to-cyan-600

    // Contact Form specific fields
    contactFormTitle: 'Send us a message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    messagePlaceholder: 'Your message',
  });

  const handleChange = useCallback((field, value) =>
    setForm((prevForm) => ({ ...prevForm, [field]: value })), []);

  const handleFileUpload = useCallback((e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      handleChange(fieldName, fileUrl);
    }
  }, [handleChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('✅ Submitted Data:', form);
    alert('✅ Contact section settings saved!');
    // In a real application, you'd send 'form' data to a backend API here.
    // For local files (blob URLs), you'd typically upload them to storage
    // (e.g., S3, Cloudinary) and replace the blob URL with the permanent URL.
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = 'w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400';
  const commonColorInputClasses = 'h-10 w-full rounded-md border border-gray-300 p-1 cursor-pointer';
  const commonSelectClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500';
  const commonCheckboxClasses = 'form-checkbox h-4 w-4 text-teal-600 rounded focus:ring-teal-500';


  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Mail className="inline-block w-8 h-8 mr-2 text-teal-600" /> Contact Us Section Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- Heading & Subheading Controls --- */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-inner border border-teal-200">
          <h3 className="text-xl font-bold text-teal-800 mb-4">Header Text & Styles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Heading */}
            <div>
              <label htmlFor="heading" className="block font-semibold text-gray-800 mb-2">Section Heading</label>
              <input
                id="heading"
                type="text"
                value={form.heading}
                onChange={(e) => handleChange('heading', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Get in Touch"
              />
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div>
                  <label htmlFor="headingColor" className="text-sm text-gray-700 block mb-1">Solid Color</label>
                  <input
                    id="headingColor"
                    type="color"
                    value={form.headingColor}
                    onChange={(e) => handleChange('headingColor', e.target.value)}
                    className={commonColorInputClasses}
                    title="Choose Heading Color"
                  />
                </div>
                <div>
                  <label htmlFor="headingSize" className="text-sm text-gray-700 block mb-1">Size (px)</label>
                  <input
                    id="headingSize"
                    type="number"
                    value={parseInt(form.headingSize, 10)}
                    onChange={(e) => handleChange('headingSize', `${e.target.value}px`)}
                    placeholder="Size (px)"
                    className={commonInputClasses}
                    aria-label="Heading Font Size"
                  />
                </div>
                <div>
                  <label htmlFor="headingFont" className="text-sm text-gray-700 block mb-1">Font Family</label>
                  <select
                    id="headingFont"
                    value={form.headingFont}
                    onChange={(e) => handleChange('headingFont', e.target.value)}
                    className={commonSelectClasses}
                    aria-label="Heading Font Family"
                  >
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="'Poppins', sans-serif">Poppins</option>
                    <option value="'Inter', sans-serif">Inter</option>
                    <option value="'Roboto', sans-serif">Roboto</option>
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
                  className={commonCheckboxClasses}
                />
                Apply Gradient to Heading (overrides solid color)
              </label>
            </div>

            {/* Subheading */}
            <div>
              <label htmlFor="subheading" className="block font-semibold text-gray-800 mb-2">Section Subheading</label>
              <input
                id="subheading"
                type="text"
                value={form.subheading}
                onChange={(e) => handleChange('subheading', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Reach out for inquiries"
              />
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div>
                  <label htmlFor="subColor" className="text-sm text-gray-700 block mb-1">Color</label>
                  <input
                    id="subColor"
                    type="color"
                    value={form.subColor}
                    onChange={(e) => handleChange('subColor', e.target.value)}
                    className={commonColorInputClasses}
                    title="Choose Subheading Color"
                  />
                </div>
                <div>
                  <label htmlFor="subSize" className="text-sm text-gray-700 block mb-1">Size (px)</label>
                  <input
                    id="subSize"
                    type="number"
                    value={parseInt(form.subSize, 10)}
                    onChange={(e) => handleChange('subSize', `${e.target.value}px`)}
                    placeholder="Size (px)"
                    className={commonInputClasses}
                    aria-label="Subheading Font Size"
                  />
                </div>
                <div>
                  <label htmlFor="subFont" className="text-sm text-gray-700 block mb-1">Font Family</label>
                  <select
                    id="subFont"
                    value={form.subFont}
                    onChange={(e) => handleChange('subFont', e.target.value)}
                    className={commonSelectClasses}
                    aria-label="Subheading Font Family"
                  >
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="'Poppins', sans-serif">Poppins</option>
                    <option value="'Inter', sans-serif">Inter</option>
                    <option value="'Roboto', sans-serif">Roboto</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Text Alignment for Header */}
          <div className="mt-6">
            <label htmlFor="align" className="block font-semibold text-gray-800 mb-2">Header Text Alignment</label>
            <select
              id="align"
              value={form.align}
              onChange={(e) => handleChange('align', e.target.value)}
              className={commonSelectClasses}
              aria-label="Text Alignment"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">Applies to the main heading and subheading text.</p>
          </div>
        </div>

        {/* --- Background Controls --- */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Background Settings</h3>
          <label htmlFor="backgroundType" className="block font-semibold text-gray-800 mb-2">Background Type</label>
          <select
            id="backgroundType"
            value={form.backgroundType}
            onChange={(e) => handleChange('backgroundType', e.target.value)}
            className={commonSelectClasses + " mb-4"}
            aria-label="Select Background Type"
          >
            <option value="color">Solid Color</option>
            <option value="gradient">Gradient</option>
            <option value="image">Image</option>
          </select>

          {form.backgroundType === 'color' && (
            <div className="mt-3">
              <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 mb-1">Background Color</label>
              <input
                id="bgColor"
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange('bgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Choose Background Color"
              />
            </div>
          )}
          {form.backgroundType === 'image' && (
            <div className="mt-3 space-y-4">
              <div>
                <label htmlFor="bgImageUpload" className="font-medium text-gray-700 mb-1 flex items-center">
                  <UploadCloud className="w-5 h-5 mr-2" /> Upload Image
                </label>
                <input
                  id="bgImageUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileUpload(e, 'bgImage')}
                  className="w-full text-gray-900 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4
                             file:rounded-md file:border-0 file:text-sm file:font-semibold
                             file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                />
                {form.bgImage && form.bgImage.startsWith('blob:') && (
                  <p className="text-sm text-gray-500 mt-1">Local file selected: <span className="font-medium text-gray-700">{form.bgImage.substring(form.bgImage.lastIndexOf('/') + 1)}</span></p>
                )}
              </div>
              <div className="flex items-center">
                <hr className="flex-grow border-gray-300 mr-2" />
                <span className="text-gray-500 text-sm">OR</span>
                <hr className="flex-grow border-gray-300 ml-2" />
              </div>
              <div>
                <label htmlFor="bgImageURL" className="font-medium text-gray-700 mb-1 flex items-center">
                  <Link className="w-5 h-5 mr-2" /> Image URL
                </label>
                <input
                  id="bgImageURL"
                  type="text"
                  placeholder="Paste Image URL (e.g., https://example.com/image.jpg)"
                  value={!form.bgImage || form.bgImage.startsWith('blob:') ? '' : form.bgImage}
                  onChange={(e) => handleChange("bgImage", e.target.value)}
                  className={commonInputClasses}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Provide a direct URL to your background image.
                </p>
              </div>
            </div>
          )}
          {form.backgroundType === 'gradient' && (
            <div className="mt-3">
              <label htmlFor="bgGradient" className="block text-sm font-medium text-gray-700 mb-1">Tailwind Gradient Classes</label>
              <input
                id="bgGradient"
                type="text"
                value={form.bgGradient}
                onChange={(e) => handleChange('bgGradient', e.target.value)}
                placeholder="e.g., from-blue-400 via-purple-500 to-pink-600"
                className={commonInputClasses}
              />
              <p className="text-sm text-gray-500 mt-1">
                Enter Tailwind CSS gradient classes (e.g., `from-teal-100 to-white`).
              </p>
            </div>
          )}
        </div>

        {/* --- Contact Information Fields --- */}
        <div className="bg-green-50 p-6 rounded-lg shadow-inner border border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-4">Contact Details</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="address" className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-600" /> Address
              </label>
              <textarea
                id="address"
                value={form.address}
                onChange={(e) => handleChange('address', e.target.value)}
                className={`${commonInputClasses} resize-y`}
                rows={3}
                placeholder="e.g., 123 Business Rd, Suite 400, City, State, ZIP"
              />
            </div>
            <div>
              <label htmlFor="phone" className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Phone className="w-5 h-5 text-teal-600" /> Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., +1 (123) 456-7890"
              />
            </div>
            <div>
              <label htmlFor="email" className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Mail className="w-5 h-5 text-teal-600" /> Email Address
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., info@yourcompany.com"
              />
            </div>
          </div>
        </div>


        {/* --- Contact Form Details & Button Styling --- */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-inner border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Contact Form & Button</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="contactFormTitle" className="block font-semibold text-gray-800 mb-2">Form Title</label>
              <input
                id="contactFormTitle"
                type="text"
                value={form.contactFormTitle}
                onChange={(e) => handleChange('contactFormTitle', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Send us a message"
              />
            </div>
            <div>
              <label htmlFor="namePlaceholder" className="block font-semibold text-gray-800 mb-2">"Your Name" Placeholder</label>
              <input
                id="namePlaceholder"
                type="text"
                value={form.namePlaceholder}
                onChange={(e) => handleChange('namePlaceholder', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Your name"
              />
            </div>
            <div>
              <label htmlFor="emailPlaceholder" className="block font-semibold text-gray-800 mb-2">"Your Email" Placeholder</label>
              <input
                id="emailPlaceholder"
                type="text"
                value={form.emailPlaceholder}
                onChange={(e) => handleChange('emailPlaceholder', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Your email"
              />
            </div>
            <div>
              <label htmlFor="messagePlaceholder" className="block font-semibold text-gray-800 mb-2">"Your Message" Placeholder</label>
              <input
                id="messagePlaceholder"
                type="text"
                value={form.messagePlaceholder}
                onChange={(e) => handleChange('messagePlaceholder', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Your message"
              />
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Button Styling</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="buttonText" className="block font-semibold text-gray-800 mb-2">Button Text</label>
                <input
                  id="buttonText"
                  type="text"
                  value={form.buttonText}
                  onChange={(e) => handleChange('buttonText', e.target.value)}
                  className={commonInputClasses}
                  placeholder="e.g., Get a Quote"
                />
              </div>
              <div>
                <label htmlFor="buttonColor" className="block font-semibold text-gray-800 mb-2">Button Solid Color (if not gradient)</label>
                <input
                  id="buttonColor"
                  type="color"
                  value={form.buttonColor}
                  onChange={(e) => handleChange('buttonColor', e.target.value)}
                  className={commonColorInputClasses}
                  title="Choose Button Solid Color"
                />
              </div>
              <div className="md:col-span-2">
                 <p className="text-sm text-gray-600 mb-2">
                    The frontend button uses a teal-to-cyan gradient. You can adjust those colors here.
                 </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="buttonGradientFrom" className="block text-sm font-semibold text-gray-700 mb-1">Gradient From</label>
                    <input
                      id="buttonGradientFrom"
                      type="color"
                      value={form.buttonGradientFrom}
                      onChange={(e) => handleChange('buttonGradientFrom', e.target.value)}
                      className={commonColorInputClasses}
                      title="Button Gradient From Color"
                    />
                  </div>
                  <div>
                    <label htmlFor="buttonGradientTo" className="block text-sm font-semibold text-gray-700 mb-1">Gradient To</label>
                    <input
                      id="buttonGradientTo"
                      type="color"
                      value={form.buttonGradientTo}
                      onChange={(e) => handleChange('buttonGradientTo', e.target.value)}
                      className={commonColorInputClasses}
                      title="Button Gradient To Color"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* --- Live Preview Section --- */}
        <div className="mt-12 p-8 rounded-xl border-4 border-dashed border-gray-300 bg-gray-50 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <EyeIcon className="w-8 h-8 text-gray-700" /> Live Preview
          </h3>
          <ContactUsPreview formData={form} />
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Contact Section
          </button>
        </div>
      </form>
    </div>
  );
}
