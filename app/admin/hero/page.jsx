'use client';

import { useState } from 'react';
import {
  UploadCloud,
  Palette,
  Text,
  MousePointer2,
  AlignCenter,
  AlignLeft,
  AlignRight,
  MonitorPlay,
  Image as ImageIcon,
  Sun,
  Moon,
  Ruler,
  Paintbrush,
  Square,
  MoveHorizontal,
  MoveVertical,
} from 'lucide-react';

export default function HeroEditor() {
  const [form, setForm] = useState({
    heading: 'Transforming the future of\nCompliance through\nautomation of document preparation',
    subtext: 'Our AI-powered platform reduces compliance document preparation time from months to days',
    buttonText: 'Explore →', // Renamed from 'button' for clarity

    // Visual Options
    bgType: 'color', // 'color', 'image', 'video'
    bgColor: '#f0f9ff', // Light teal background
    bgImage: '',
    bgVideo: '',
    bgImagePosition: 'center', // new
    bgImageSize: 'cover', // new
    bgOverlayColor: '#000000', // new
    bgOverlayOpacity: 0.3, // new
    glow: true, // Renamed from 'glow' to 'enableGlow' for consistency

    // Text Styles
    headingColor: '#0f766e',
    headingSize: '48px',
    headingFont: 'sans-serif',
    headingGradient: true,
    headingGradientColor2: '#14b8a6', // New for gradient
    headingWeight: '800',
    headingAlign: 'center', // new
    headingLineHeight: '1.2', // new
    headingLetterSpacing: '0px', // new

    subColor: '#4b5563',
    subSize: '18px',
    subFont: 'sans-serif',
    subAlign: 'center', // new
    subLineHeight: '1.5', // new
    subLetterSpacing: '0px', // new

    // Button Styles
    buttonTextColor: '#ffffff', // new
    buttonBgColor: '#0d9488', // new
    buttonFontSize: '18px', // new
    buttonFont: 'sans-serif', // new
    buttonRounded: '8px', // new
    buttonShadow: true, // new
    buttonPaddingY: '12px', // new
    buttonPaddingX: '24px', // new
    buttonBorderColor: '#0d9488', // new
    buttonBorderWidth: '0px', // new
    buttonBorderStyle: 'solid', // new
    buttonHoverBgColor: '#0f766e', // new
    buttonHoverTextColor: '#ffffff', // new
  });

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleImageUpload = (event, fieldName) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // Max 5MB
        alert('File size exceeds 5MB. Please choose a smaller image.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange(fieldName, reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', form);
    // In a real app, send this 'form' data to your backend
    alert('Hero section saved! (Demo only)');
  };

  // Generate dynamic styles for the preview
  const headingStyles = {
    color: form.headingColor,
    fontSize: form.headingSize,
    fontFamily: form.headingFont,
    fontWeight: form.headingWeight,
    textAlign: form.headingAlign,
    lineHeight: form.headingLineHeight,
    letterSpacing: form.headingLetterSpacing,
    // Apply gradient if enabled
    ...(form.headingGradient && {
      background: `linear-gradient(90deg, ${form.headingColor}, ${form.headingGradientColor2})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }),
  };

  const subtextStyles = {
    color: form.subColor,
    fontSize: form.subSize,
    fontFamily: form.subFont,
    textAlign: form.subAlign,
    lineHeight: form.subLineHeight,
    letterSpacing: form.subLetterSpacing,
  };

  const buttonStyles = {
    color: form.buttonTextColor,
    backgroundColor: form.buttonBgColor,
    fontSize: form.buttonFontSize,
    fontFamily: form.buttonFont,
    borderRadius: form.buttonRounded,
    paddingTop: form.buttonPaddingY,
    paddingBottom: form.buttonPaddingY,
    paddingLeft: form.buttonPaddingX,
    paddingRight: form.buttonPaddingX,
    boxShadow: form.buttonShadow ? '0 4px 10px rgba(0, 0, 0, 0.1)' : 'none',
    border: `${form.buttonBorderWidth} ${form.buttonBorderStyle} ${form.buttonBorderColor}`,
    transition: 'background-color 0.3s ease, color 0.3s ease', // for hover effect
  };

  const heroBackgroundStyles = {
    backgroundColor: form.bgType === 'color' ? form.bgColor : 'transparent',
    backgroundImage: form.bgType === 'image' ? `url(${form.bgImage})` : 'none',
    backgroundSize: form.bgType === 'image' ? form.bgImageSize : 'auto',
    backgroundPosition: form.bgType === 'image' ? form.bgImagePosition : 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative', // For overlay
  };

  const heroOverlayStyles = {
    backgroundColor: form.bgOverlayColor,
    opacity: form.bgOverlayOpacity,
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        ✨ Hero Section Customizer
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* --- Content Fields --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📝 Hero Content</h3>
          <div>
            <label className="block font-semibold text-gray-800 mb-1">Main Heading</label>
            <textarea
              rows={3}
              value={form.heading}
              onChange={(e) => handleChange('heading', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              placeholder="Enter your main hero heading"
            />
          </div>

          <div className="mt-4">
            <label className="block font-semibold text-gray-800 mb-1">Subtext</label>
            <textarea
              rows={2}
              value={form.subtext}
              onChange={(e) => handleChange('subtext', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              placeholder="A short, compelling sub-headline"
            />
          </div>

          <div className="mt-4">
            <label className="block font-semibold text-gray-800 mb-1">Button Text</label>
            <input
              type="text"
              value={form.buttonText}
              onChange={(e) => handleChange('buttonText', e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              placeholder="e.g., Learn More, Get Started"
            />
          </div>
        </div>

        {/* --- Heading Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">✍️ Heading Styles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Color</label>
              <input
                type="color"
                value={form.headingColor}
                onChange={(e) => handleChange('headingColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1"
              />
            </div>
            {form.headingGradient && (
              <div>
                <label className="block text-sm text-gray-700 mb-1">Gradient End Color</label>
                <input
                  type="color"
                  value={form.headingGradientColor2}
                  onChange={(e) => handleChange('headingGradientColor2', e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-md p-1"
                />
              </div>
            )}
            <div>
              <label className="block text-sm text-gray-700 mb-1">Size (px)</label>
              <input
                type="number"
                value={parseInt(form.headingSize)}
                onChange={(e) => handleChange('headingSize', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Font Family</label>
              <select
                value={form.headingFont}
                onChange={(e) => handleChange('headingFont', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
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
              <label className="block text-sm text-gray-700 mb-1">Font Weight</label>
              <select
                value={form.headingWeight}
                onChange={(e) => handleChange('headingWeight', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              >
                <option value="400">Normal (400)</option>
                <option value="600">Semi-Bold (600)</option>
                <option value="700">Bold (700)</option>
                <option value="800">Extra Bold (800)</option>
                <option value="900">Black (900)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Line Height</label>
              <input
                type="number"
                step="0.1"
                value={parseFloat(form.headingLineHeight)}
                onChange={(e) => handleChange('headingLineHeight', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Letter Spacing (px)</label>
              <input
                type="number"
                step="0.1"
                value={parseFloat(form.headingLetterSpacing)}
                onChange={(e) => handleChange('headingLetterSpacing', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Text Alignment</label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handleChange('headingAlign', 'left')}
                  className={`p-2 border rounded-md ${form.headingAlign === 'left' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  aria-label="Align Left"
                ><AlignLeft className="w-5 h-5" /></button>
                <button
                  type="button"
                  onClick={() => handleChange('headingAlign', 'center')}
                  className={`p-2 border rounded-md ${form.headingAlign === 'center' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  aria-label="Align Center"
                ><AlignCenter className="w-5 h-5" /></button>
                <button
                  type="button"
                  onClick={() => handleChange('headingAlign', 'right')}
                  className={`p-2 border rounded-md ${form.headingAlign === 'right' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  aria-label="Align Right"
                ><AlignRight className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-6 md:col-span-full lg:col-span-1">
              <input
                type="checkbox"
                id="headingGradient"
                checked={form.headingGradient}
                onChange={(e) => handleChange('headingGradient', e.target.checked)}
                className="form-checkbox h-4 w-4 text-teal-600 rounded"
              />
              <label htmlFor="headingGradient" className="text-sm text-gray-700">Use Gradient Text</label>
            </div>
          </div>
        </div>

        {/* --- Subtext Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">✍️ Subtext Styles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Color</label>
              <input
                type="color"
                value={form.subColor}
                onChange={(e) => handleChange('subColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Size (px)</label>
              <input
                type="number"
                value={parseInt(form.subSize)}
                onChange={(e) => handleChange('subSize', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Font Family</label>
              <select
                value={form.subFont}
                onChange={(e) => handleChange('subFont', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
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
              <label className="block text-sm text-gray-700 mb-1">Line Height</label>
              <input
                type="number"
                step="0.1"
                value={parseFloat(form.subLineHeight)}
                onChange={(e) => handleChange('subLineHeight', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Letter Spacing (px)</label>
              <input
                type="number"
                step="0.1"
                value={parseFloat(form.subLetterSpacing)}
                onChange={(e) => handleChange('subLetterSpacing', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Text Alignment</label>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handleChange('subAlign', 'left')}
                  className={`p-2 border rounded-md ${form.subAlign === 'left' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  aria-label="Align Left"
                ><AlignLeft className="w-5 h-5" /></button>
                <button
                  type="button"
                  onClick={() => handleChange('subAlign', 'center')}
                  className={`p-2 border rounded-md ${form.subAlign === 'center' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  aria-label="Align Center"
                ><AlignCenter className="w-5 h-5" /></button>
                <button
                  type="button"
                  onClick={() => handleChange('subAlign', 'right')}
                  className={`p-2 border rounded-md ${form.subAlign === 'right' ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  aria-label="Align Right"
                ><AlignRight className="w-5 h-5" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* --- Button Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🖱️ Button Styling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Text Color</label>
              <input
                type="color"
                value={form.buttonTextColor}
                onChange={(e) => handleChange('buttonTextColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Background Color</label>
              <input
                type="color"
                value={form.buttonBgColor}
                onChange={(e) => handleChange('buttonBgColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Hover Background</label>
              <input
                type="color"
                value={form.buttonHoverBgColor}
                onChange={(e) => handleChange('buttonHoverBgColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Hover Text Color</label>
              <input
                type="color"
                value={form.buttonHoverTextColor}
                onChange={(e) => handleChange('buttonHoverTextColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Font Size (px)</label>
              <input
                type="number"
                value={parseInt(form.buttonFontSize)}
                onChange={(e) => handleChange('buttonFontSize', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Font Family</label>
              <select
                value={form.buttonFont}
                onChange={(e) => handleChange('buttonFont', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
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
              <label className="block text-sm text-gray-700 mb-1">Corner Radius (px)</label>
              <input
                type="number"
                value={parseInt(form.buttonRounded)}
                onChange={(e) => handleChange('buttonRounded', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Padding Vertical (px)</label>
              <input
                type="number"
                value={parseInt(form.buttonPaddingY)}
                onChange={(e) => handleChange('buttonPaddingY', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Padding Horizontal (px)</label>
              <input
                type="number"
                value={parseInt(form.buttonPaddingX)}
                onChange={(e) => handleChange('buttonPaddingX', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Border Width (px)</label>
              <input
                type="number"
                value={parseInt(form.buttonBorderWidth)}
                onChange={(e) => handleChange('buttonBorderWidth', e.target.value + 'px')}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Border Color</label>
              <input
                type="color"
                value={form.buttonBorderColor}
                onChange={(e) => handleChange('buttonBorderColor', e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md p-1"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Border Style</label>
              <select
                value={form.buttonBorderStyle}
                onChange={(e) => handleChange('buttonBorderStyle', e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              >
                <option value="none">None</option>
                <option value="solid">Solid</option>
                <option value="dashed">Dashed</option>
                <option value="dotted">Dotted</option>
                <option value="double">Double</option>
              </select>
            </div>
            <div className="flex items-center gap-2 mt-6 md:col-span-full lg:col-span-1">
              <input
                type="checkbox"
                id="buttonShadow"
                checked={form.buttonShadow}
                onChange={(e) => handleChange('buttonShadow', e.target.checked)}
                className="form-checkbox h-4 w-4 text-teal-600 rounded"
              />
              <label htmlFor="buttonShadow" className="text-sm text-gray-700">Enable Button Shadow</label>
            </div>
          </div>
        </div>

        {/* --- Background Options --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🖼️ Background Options</h3>

          <div className="flex items-center gap-4 mb-6">
            <label className="font-semibold text-gray-700">Background Type:</label>
            <select
              value={form.bgType}
              onChange={(e) => handleChange('bgType', e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
            >
              <option value="color">Solid Color</option>
              <option value="image">Image</option>
              <option value="video">Video</option>
            </select>
          </div>

          {form.bgType === 'color' && (
            <div>
              <label className="block text-sm font-semibold mb-1 text-gray-700">Background Color</label>
              <input
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange('bgColor', e.target.value)}
                className="h-10 w-full border border-gray-300 rounded-md p-1"
              />
            </div>
          )}

          {form.bgType === 'image' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-800 mb-2">Background Image</label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  {form.bgImage && (
                    <div className="flex-shrink-0">
                      <img
                        src={form.bgImage}
                        alt="Background Preview"
                        className="h-24 w-auto object-cover border border-gray-300 p-1 rounded-md"
                        onError={(e) => { e.target.onerror = null; e.target.src = '/placeholder-image.png'; }}
                      />
                    </div>
                  )}
                  <div className="flex-grow">
                    <input
                      id="bgImageUpload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'bgImage')}
                      className="hidden"
                    />
                    <label
                      htmlFor="bgImageUpload"
                      className="inline-flex items-center px-4 py-2 bg-teal-500 text-white font-semibold rounded-md shadow-sm hover:bg-teal-600 cursor-pointer transition-colors duration-200"
                    >
                      <UploadCloud className="w-5 h-5 mr-2" />
                      Upload Image
                    </label>
                    <p className="text-sm text-gray-500 mt-2">Max size: 5MB. Formats: JPG, PNG, GIF, SVG.</p>
                  </div>
                </div>
                <label htmlFor="bgImageUrl" className="block text-sm font-semibold text-gray-700 mt-4 mb-1">
                  Or paste Image URL:
                </label>
                <input
                  id="bgImageUrl"
                  type="url"
                  placeholder="https://example.com/your-background.jpg"
                  value={form.bgImage}
                  onChange={(e) => handleChange('bgImage', e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Image Position</label>
                  <select
                    value={form.bgImagePosition}
                    onChange={(e) => handleChange('bgImagePosition', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
                  >
                    <option value="center">Center</option>
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Image Size</label>
                  <select
                    value={form.bgImageSize}
                    onChange={(e) => handleChange('bgImageSize', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
                  >
                    <option value="cover">Cover</option>
                    <option value="contain">Contain</option>
                    <option value="auto">Auto</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm text-gray-700 mb-1">Background Overlay Color</label>
                <input
                  type="color"
                  value={form.bgOverlayColor}
                  onChange={(e) => handleChange('bgOverlayColor', e.target.value)}
                  className="w-full h-10 border border-gray-300 rounded-md p-1"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Background Overlay Opacity</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={form.bgOverlayOpacity}
                  onChange={(e) => handleChange('bgOverlayOpacity', parseFloat(e.target.value))}
                  className="w-full h-8 accent-teal-500"
                />
                <span className="text-sm text-gray-500 ml-2">{form.bgOverlayOpacity.toFixed(2)}</span>
              </div>
            </div>
          )}

          {form.bgType === 'video' && (
            <div>
              <label htmlFor="bgVideoUrl" className="block text-sm font-semibold text-gray-700 mb-1">
                Video URL (e.g., YouTube embed URL)
              </label>
              <input
                id="bgVideoUrl"
                type="url"
                placeholder="https://www.youtube.com/embed/your_video_id?autoplay=1&mute=1&loop=1&playlist=your_video_id&controls=0"
                value={form.bgVideo}
                onChange={(e) => handleChange('bgVideo', e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black" // Added text-black
              />
              <p className="text-sm text-gray-500 mt-1">
                For YouTube, use the embed URL and add `?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0` for a seamless background.
              </p>
            </div>
          )}

          <div className="flex items-center gap-3 mt-6">
            <input
              type="checkbox"
              id="enableGlow"
              checked={form.glow}
              onChange={(e) => handleChange('glow', e.target.checked)}
              className="form-checkbox h-4 w-4 text-teal-600 rounded"
            />
            <label htmlFor="enableGlow" className="text-sm text-gray-700">Enable Subtle Page Glow Effect</label>
          </div>
        </div>

        {/* --- Live Preview --- */}
        <div className="mt-10 p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner bg-gray-50">
          <h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">👁️ Live Preview</h3>
          <div
            className={`relative min-h-[400px] flex items-center justify-center p-8 rounded-lg overflow-hidden transition-all duration-300 ease-in-out
              ${form.glow ? 'shadow-2xl shadow-teal-300/50' : ''}`}
            style={heroBackgroundStyles}
          >
            {form.bgType === 'video' && form.bgVideo && (
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 min-w-[100vw] min-h-[56.25vw] sm:min-h-[100%] sm:min-w-[177.77%]" // Ensures cover
                  src={form.bgVideo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Hero Background Video"
                ></iframe>
              </div>
            )}
            {/* Overlay for readability */}
            {(form.bgType === 'image' || form.bgType === 'video') && (
              <div className="absolute inset-0" style={heroOverlayStyles}></div>
            )}

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 whitespace-pre-line"
                style={headingStyles}
              >
                {form.heading}
              </h1>
              <p
                className="text-lg sm:text-xl leading-relaxed mb-8"
                style={subtextStyles}
              >
                {form.subtext}
              </p>
              <button
                className={`inline-block font-semibold rounded-lg whitespace-nowrap
                  ${form.buttonShadow ? 'shadow-lg' : ''}
                  hover:scale-105 transition-all duration-300 ease-in-out
                  `}
                style={{
                  ...buttonStyles,
                  // Handle hover state manually with inline style for demo
                  '--hover-bg': form.buttonHoverBgColor,
                  '--hover-text': form.buttonHoverTextColor,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = form.buttonHoverBgColor;
                  e.currentTarget.style.color = form.buttonHoverTextColor;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = form.buttonBgColor;
                  e.currentTarget.style.color = form.buttonTextColor;
                }}
              >
                {form.buttonText}
              </button>
            </div>
          </div>
        </div>


        {/* --- Save Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            🚀 Save Hero Section
          </button>
        </div>
      </form>
    </div>
  );
}
