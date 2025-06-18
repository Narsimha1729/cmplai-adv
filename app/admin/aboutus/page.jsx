'use client';

import { useState, useCallback } from 'react';
import { Settings, Eye as EyeIcon, Save, UploadCloud, Link, Plus, Trash } from 'lucide-react';

// Live Preview Component for About Us
function AboutUsPreview({ formData }) {
  const {
    heading, headingFont, headingSize, headingType,
    headingSolidColor, headingGradientFrom, headingGradientVia, headingGradientTo,
    subheading, subFont, subSize, subColor,
    mediaType, mediaURL, enableGlow, title, paragraphs, paragraphAlign, sectionBgColor
  } = formData;

  // Heading styles
  const headingStyle = {
    fontSize: headingSize,
    fontFamily: headingFont,
    // Add CSS variables for gradient to ensure robust parsing by Tailwind JIT
    '--tw-gradient-from': headingGradientFrom,
    '--tw-gradient-via': headingGradientVia,
    '--tw-gradient-to': headingGradientTo,
  };

  // Base classes for the heading (text-4xl from original frontend)
  const baseHeadingClasses = `text-4xl font-extrabold mb-3 leading-tight`;

  // Apply gradient or solid color classes for heading
  const finalHeadingClasses = headingType === 'gradient'
    ? `${baseHeadingClasses} bg-clip-text text-transparent bg-gradient-to-r from-[var(--tw-gradient-from)] via-[var(--tw-gradient-via)] to-[var(--tw-gradient-to)]`
    : `${baseHeadingClasses} text-[${headingSolidColor}]`;

  // Subheading styles
  const subheadingStyle = {
    fontSize: subSize, // Use for pixel precision
    fontFamily: subFont,
    color: subColor,
  };
  // Base classes for subheading (text-lg mt-2 from original frontend)
  const baseSubheadingClasses = `text-lg mt-2`;

  // Media Glow Effect
  const glowClasses = enableGlow
    ? "relative w-full rounded-2xl overflow-hidden shadow-lg group transition-transform hover:scale-[1.02]"
    : "w-full rounded-2xl overflow-hidden shadow-lg group transition-transform hover:scale-[1.02]";

  const glowAuraDiv = enableGlow
    ? <div className="absolute -inset-6 bg-cyan-200 opacity-20 blur-3xl rounded-3xl z-0" />
    : null;

  // Section background style
  const sectionStyle = {
    backgroundColor: sectionBgColor,
  };

  return (
    <section className="relative px-6 py-24 rounded-lg shadow-inner" style={sectionStyle} id="about"> {/* px-6 py-24 as per original */}
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center" data-aos="fade-up"> {/* mb-14 and data-aos from original */}
          <h2 className={finalHeadingClasses} style={headingStyle}>
            {heading}
          </h2>
          <p className={baseSubheadingClasses} style={subheadingStyle}>
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> {/* gap-12 from original */}
          {/* Media (Image/Video) with Glowing Aura */}
          <div
            className={glowClasses}
            data-aos="zoom-in-right" // data-aos from original
          >
            {glowAuraDiv}
            <div className="relative z-10 rounded-2xl overflow-hidden">
              {mediaType === "image" ? (
                <img
                  src={mediaURL || 'https://placehold.co/600x400/edf2f7/4a5568?text=About+Us+Image'}
                  alt="About Us Media"
                  className="object-cover w-full h-full"
                  width={600}
                  height={400}
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/edf2f7/4a5568?text=Image+Error'; }}
                  priority // As per original
                />
              ) : (
                <video
                  src={mediaURL || ''}
                  controls
                  playsInline
                  className="object-cover w-full h-full"
                  width={600}
                  height={400}
                  onError={(e) => { e.currentTarget.src = ''; console.error('Video error:', e); }}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </div>

          {/* Text Content */}
          <div
            className="text-gray-700 text-base leading-relaxed space-y-5" // text-justify is added via style below
            style={{ textAlign: paragraphAlign }}
            data-aos="fade-up" // data-aos from original
          >
            <h3 className="text-2xl font-bold text-gray-900">
              {title}
            </h3>
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AdminAboutUsPage() {
  const [form, setForm] = useState({
    // Section Background
    sectionBgColor: "#f9fefe", // Corresponds to bg-[#f9fefe] in frontend

    // Heading
    heading: "About Us",
    headingType: "gradient", // 'solid' or 'gradient'
    headingSolidColor: "#0f766e",
    headingGradientFrom: "#0f766e", // teal-600
    headingGradientVia: "#0891b2", // cyan-600
    headingGradientTo: "#0ea5e9",   // sky-500
    headingFont: "Poppins",
    headingSize: "48px",

    // Subheading
    subheading: "Our mission and vision",
    subFont: "Inter",
    subSize: "18px",
    subColor: "#6b7280", // gray-600 from text-gray-600

    // Media
    mediaType: "image", // 'image' or 'video'
    mediaURL: "https://placehold.co/600x400/edf2f7/4a5568?text=About+Us+Image", // Default image placeholder
    enableGlow: true, // Toggle for the glowing aura effect

    // Content
    title: "Transforming Compliance Through Innovation",
    paragraphs: [
      "At Cmplai, we're on a mission to revolutionize how pharmaceutical and manufacturing companies handle compliance documentation. Founded by industry experts with decades of experience, we understand the challenges organizations face with regulatory compliance.",
      "Our team combines deep domain expertise in pharmaceutical compliance with cutting-edge AI technology to create solutions that dramatically reduce the time, cost, and risk associated with compliance documentation.",
      "We believe that by automating the most tedious aspects of compliance, we can free up human talent to focus on innovation and quality improvement — ultimately leading to better products and services for consumers worldwide.",
    ],
    paragraphAlign: "justify", // New: "left", "center", "right", "justify"
  });

  const handleChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleParagraphChange = useCallback((index, value) => {
    const updated = [...form.paragraphs];
    updated[index] = value;
    handleChange("paragraphs", updated);
  }, [form.paragraphs, handleChange]);

  const addParagraph = useCallback(() => {
    handleChange("paragraphs", [...form.paragraphs, "New paragraph content..."]);
  }, [form.paragraphs, handleChange]);

  const removeParagraph = useCallback((indexToRemove) => {
    handleChange("paragraphs", form.paragraphs.filter((_, i) => i !== indexToRemove));
  }, [form.paragraphs, handleChange]);

  const handleMediaUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      handleChange('mediaURL', fileUrl);
    }
  }, [handleChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 Saving About Us section:", form);
    alert("✅ About Us section saved (Demo only)");
    // In a real application, you would send 'form' data to your backend here.
    // For local files (blob URLs), remember to upload them to your storage service
    // (e.g., AWS S3, Cloudinary) and then replace the blob URL with the permanent URL
    // before saving the form data to your database.
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = "w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900";
  const commonColorInputClasses = "w-full h-10 rounded-md border border-gray-300 p-1 cursor-pointer";
  const commonSelectClasses = "w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900";
  const commonCheckboxClasses = "form-checkbox h-4 w-4 text-teal-600 rounded focus:ring-teal-500";


  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Settings className="inline-block w-8 h-8 mr-2 text-teal-600" /> "About Us" Section Editor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Section Background Color */}
        <div className="bg-orange-50 p-6 rounded-lg shadow-inner border border-orange-200">
          <h3 className="text-xl font-bold text-orange-800 mb-4">Section Background</h3>
          <label htmlFor="sectionBgColor" className="font-semibold block mb-1 text-gray-700">Background Color</label>
          <input
            id="sectionBgColor"
            type="color"
            value={form.sectionBgColor}
            onChange={(e) => handleChange("sectionBgColor", e.target.value)}
            className={commonColorInputClasses}
            title="Section Background Color"
          />
        </div>

        {/* Heading & Subheading Settings */}
        <div className="grid md:grid-cols-2 gap-8 bg-teal-50 p-6 rounded-lg shadow-inner border border-teal-200">
          <div>
            <h3 className="text-xl font-bold text-teal-800 mb-4">Main Heading Settings</h3>
            <label htmlFor="heading" className="block font-semibold mb-1 text-gray-700">Heading Text</label>
            <input
              id="heading"
              value={form.heading}
              onChange={(e) => handleChange("heading", e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., About Us"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
               <div>
                <label htmlFor="headingType" className="text-sm text-gray-700 block mb-1">Color Type</label>
                <select
                  id="headingType"
                  value={form.headingType}
                  onChange={(e) => handleChange("headingType", e.target.value)}
                  className={commonSelectClasses}
                >
                  <option value="solid">Solid Color</option>
                  <option value="gradient">Gradient</option>
                </select>
              </div>
              {form.headingType === 'solid' && (
                <div>
                  <label htmlFor="headingSolidColor" className="text-sm text-gray-700 block mb-1">Solid Color</label>
                  <input
                    id="headingSolidColor"
                    type="color"
                    value={form.headingSolidColor}
                    onChange={(e) => handleChange("headingSolidColor", e.target.value)}
                    className={commonColorInputClasses}
                    title="Solid Heading Color"
                  />
                </div>
              )}
            </div>
            {form.headingType === 'gradient' && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                <div>
                  <label htmlFor="headingGradientFrom" className="text-sm text-gray-700 block mb-1">Gradient From</label>
                  <input
                    id="headingGradientFrom"
                    type="color"
                    value={form.headingGradientFrom}
                    onChange={(e) => handleChange("headingGradientFrom", e.target.value)}
                    className={commonColorInputClasses}
                    title="Gradient Start Color"
                  />
                </div>
                <div>
                  <label htmlFor="headingGradientVia" className="text-sm text-gray-700 block mb-1">Gradient Via</label>
                  <input
                    id="headingGradientVia"
                    type="color"
                    value={form.headingGradientVia}
                    onChange={(e) => handleChange("headingGradientVia", e.target.value)}
                    className={commonColorInputClasses}
                    title="Gradient Middle Color"
                  />
                </div>
                <div>
                  <label htmlFor="headingGradientTo" className="text-sm text-gray-700 block mb-1">Gradient To</label>
                  <input
                    id="headingGradientTo"
                    type="color"
                    value={form.headingGradientTo}
                    onChange={(e) => handleChange("headingGradientTo", e.target.value)}
                    className={commonColorInputClasses}
                    title="Gradient End Color"
                  />
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label htmlFor="headingFont" className="text-sm text-gray-700 block mb-1">Font Family</label>
                <select
                  id="headingFont"
                  value={form.headingFont}
                  onChange={(e) => handleChange("headingFont", e.target.value)}
                  className={commonSelectClasses}
                >
                  <option value="Poppins">Poppins</option>
                  <option value="Inter">Inter</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Open Sans">Open Sans</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Lato">Lato</option>
                  <option value="Oswald">Oswald</option>
                  <option value="Raleway">Raleway</option>
                  <option value="Merriweather">Merriweather</option>
                  <option value="Playfair Display">Playfair Display</option>
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>
              <div>
                <label htmlFor="headingSize" className="text-sm text-gray-700 block mb-1">Size (px)</label>
                <input
                  id="headingSize"
                  type="number"
                  value={parseInt(form.headingSize)}
                  onChange={(e) => handleChange("headingSize", e.target.value + "px")}
                  className={commonInputClasses}
                  placeholder="Size (px)"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-teal-800 mb-4">Subheading Settings</h3>
            <label htmlFor="subheading" className="block font-semibold mb-1 text-gray-700">Subheading Text</label>
            <input
              id="subheading"
              value={form.subheading}
              onChange={(e) => handleChange("subheading", e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Our mission and vision"
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label htmlFor="subColor" className="text-sm text-gray-700 block mb-1">Color</label>
                <input
                  id="subColor"
                  type="color"
                  value={form.subColor}
                  onChange={(e) => handleChange("subColor", e.target.value)}
                  className={commonColorInputClasses}
                  title="Subheading Color"
                />
              </div>
              <div>
                <label htmlFor="subFont" className="text-sm text-gray-700 block mb-1">Font</label>
                <select
                  id="subFont"
                  value={form.subFont}
                  onChange={(e) => handleChange("subFont", e.target.value)}
                  className={commonSelectClasses}
                >
                  <option value="Poppins">Poppins</option>
                  <option value="Inter">Inter</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Open Sans">Open Sans</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Lato">Lato</option>
                  <option value="Oswald">Oswald</option>
                  <option value="Raleway">Raleway</option>
                  <option value="Merriweather">Merriweather</option>
                  <option value="Playfair Display">Playfair Display</option>
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>
              <div>
                <label htmlFor="subSize" className="text-sm text-gray-700 block mb-1">Size (px)</label>
                <input
                  id="subSize"
                  type="number"
                  value={parseInt(form.subSize)}
                  onChange={(e) => handleChange("subSize", e.target.value + "px")}
                  className={commonInputClasses}
                  placeholder="Size (px)"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Media Option */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Media (Image/Video) Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="mediaType" className="font-semibold block text-gray-700 mb-2">Select Media Type</label>
              <select
                id="mediaType"
                value={form.mediaType}
                onChange={(e) => handleChange("mediaType", e.target.value)}
                className={commonSelectClasses + " mb-4"}
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-2 mt-2 text-gray-700">
                <input
                  type="checkbox"
                  checked={form.enableGlow}
                  onChange={(e) => handleChange("enableGlow", e.target.checked)}
                  className={commonCheckboxClasses}
                />
                Enable Glowing Aura Effect
              </label>
            </div>
          </div>


          <div className="space-y-4 mt-4">
            <div>
              <label htmlFor="mediaFileUpload" className="font-medium text-gray-700 mb-1 flex items-center">
                <UploadCloud className="w-5 h-5 mr-2" /> Upload {form.mediaType === 'image' ? 'Image' : 'Video'}
              </label>
              <input
                id="mediaFileUpload"
                type="file"
                accept={form.mediaType === 'image' ? 'image/*' : 'video/*'}
                onChange={handleMediaUpload}
                className="w-full text-gray-900 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4
                           file:rounded-md file:border-0 file:text-sm file:font-semibold
                           file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              {form.mediaURL && form.mediaURL.startsWith('blob:') && (
                <p className="text-sm text-gray-500 mt-1">Local file selected: <span className="font-medium text-gray-700">{form.mediaURL.substring(form.mediaURL.lastIndexOf('/') + 1)}</span></p>
              )}
            </div>
            <div className="flex items-center">
              <hr className="flex-grow border-gray-300 mr-2" />
              <span className="text-gray-500 text-sm">OR</span>
              <hr className="flex-grow border-gray-300 ml-2" />
            </div>
            <div>
              <label htmlFor="mediaURLInput" className="font-medium text-gray-700 mb-1 flex items-center">
                <Link className="w-5 h-5 mr-2" /> {form.mediaType === 'image' ? 'Image' : 'Video'} URL
              </label>
              <input
                id="mediaURLInput"
                type="text"
                value={!form.mediaURL || form.mediaURL.startsWith('blob:') ? '' : form.mediaURL}
                onChange={(e) => handleChange("mediaURL", e.target.value)}
                placeholder={form.mediaType === "image" ? "Image URL (e.g., https://example.com/image.jpg)" : "Video URL (e.g., https://example.com/video.mp4)"}
                className={commonInputClasses}
              />
              <p className="text-sm text-gray-500 mt-1">
                {form.mediaType === "image" ? "Use a placeholder like 'https://placehold.co/600x400' if you don't have one." : "Example: 'https://www.w3schools.com/tags/movie.mp4'"}
              </p>
            </div>
          </div>
        </div>

        {/* Content Settings */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-inner border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">Text Content</h3>
          <div>
            <label htmlFor="title" className="block font-semibold text-gray-700 mb-1">Title Heading</label>
            <input
              id="title"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Transforming Compliance Through Innovation"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="paragraphAlign" className="font-semibold block text-gray-700 mb-2">Paragraph Alignment</label>
            <select
              id="paragraphAlign"
              value={form.paragraphAlign}
              onChange={(e) => handleChange("paragraphAlign", e.target.value)}
              className={commonSelectClasses + " mb-4"}
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
              <option value="justify">Justify</option>
            </select>
          </div>

          <div className="mt-6 space-y-4">
            {form.paragraphs.map((para, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="flex-grow">
                  <label htmlFor={`paragraph-${i}`} className="font-medium text-gray-700 mb-1 block">Paragraph {i + 1}</label>
                  <textarea
                    id={`paragraph-${i}`}
                    rows={3}
                    value={para}
                    onChange={(e) => handleParagraphChange(i, e.target.value)}
                    className={commonInputClasses}
                    placeholder={`Enter content for paragraph ${i + 1}`}
                  />
                </div>
                {form.paragraphs.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeParagraph(i)}
                    className="mt-7 p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors flex-shrink-0"
                    title="Remove paragraph"
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button
              type="button"
              onClick={addParagraph}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm font-semibold flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add New Paragraph
            </button>
          </div>
        </div>

        {/* Live Preview */}
        <div className="mt-12 p-8 rounded-xl border-4 border-dashed border-gray-300 bg-gray-50 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <EyeIcon className="w-8 h-8 text-gray-700" /> Live Preview
          </h3>
          <AboutUsPreview formData={form} />
        </div>

        {/* Submit */}
        <div className="text-center pt-10">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white
                       px-10 py-4 font-bold text-lg rounded-xl shadow-xl
                       hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save "About Us" Section
          </button>
        </div>
      </form>
    </div>
  );
}
