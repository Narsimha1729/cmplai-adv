'use client';

import { useState, useCallback } from 'react';
import { Settings, Palette, Eye as EyeIcon, Save, UploadCloud, Link } from 'lucide-react';

// Live Preview Component (No changes needed here as it already handles URLs)
function AreYouReadyPreview({ formData }) {
  const {
    heading, subtext, button, placeholder,
    headingColor, headingSize, headingFont,
    subtextColor, subtextSize,
    bgType, bgColor, bgImage, bgVideo,
    overlayColor, overlayOpacity
  } = formData;

  // Inline styles for dynamic properties
  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
    minHeight: '400px', // Ensures content doesn't collapse
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '80px 20px', // Consistent padding
  };

  let backgroundContent = null;

  switch (bgType) {
    case 'gradient':
      sectionStyle.background = 'linear-gradient(135deg, #0f172a 0%, #1a202c 100%)';
      sectionStyle.animation = 'pulse-gradient 8s infinite alternate';
      break;
    case 'color':
      sectionStyle.backgroundColor = bgColor;
      break;
    case 'image':
      backgroundContent = (
        <img
          src={bgImage || 'https://placehold.co/1920x1080/0f172a/e2e8f0?text=Background+Image'}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/1920x1080/0f172a/e2e8f0?text=Image+Error'; }}
        />
      );
      break;
    case 'video':
      backgroundContent = (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={bgVideo || ''}
          onError={(e) => { e.currentTarget.src = ''; console.error('Video error:', e); }}
        >
          Your browser does not support the video tag.
        </video>
      );
      break;
  }

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: overlayColor,
    opacity: overlayOpacity,
    zIndex: 1,
  };

  return (
    <section className="relative rounded-xl shadow-lg" style={sectionStyle}>
      {/* Background Content (Image/Video) */}
      {backgroundContent}

      {/* Overlay */}
      <div style={overlayStyle}></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center p-4">
        <h2
          className="font-extrabold mb-4 leading-tight"
          style={{ color: headingColor, fontSize: headingSize, fontFamily: headingFont }}
        >
          {heading}
        </h2>
        <p
          className="text-lg mb-8 max-w-xl mx-auto"
          style={{ color: subtextColor, fontSize: subtextSize, fontFamily: 'sans-serif' }}
        >
          {subtext}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder={placeholder}
            className="w-full sm:w-auto flex-grow max-w-sm px-6 py-3 rounded-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm
                       text-white placeholder-gray-300 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
          />
          <button
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-white text-teal-700 font-bold text-lg shadow-xl
                       hover:bg-teal-50 hover:text-teal-800 transition-all duration-300 transform hover:scale-105"
          >
            {button}
          </button>
        </div>
      </div>
       {/* Inject keyframes for the gradient animation */}
       {bgType === 'gradient' && (
        <style jsx>{`
          @keyframes pulse-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      )}
    </section>
  );
}

export default function AdminAreYouReadyPage() {
  const [form, setForm] = useState({
    heading: "Are You Ready to Accelerate Your Business?",
    subtext: "Join the companies that have transformed their compliance processes and saved thousands of hours",
    button: "Schedule a Demo",
    placeholder: "Enter your email",

    // Text styles
    headingColor: "#ffffff",
    headingSize: "48px",
    headingFont: "sans-serif",
    subtextColor: "#e2e8f0",
    subtextSize: "18px",

    // Background options
    bgType: "gradient", // options: gradient, color, image, video
    bgColor: "#0f172a",
    bgImage: "https://placehold.co/1920x1080/0f172a/e2e8f0?text=Background+Image",
    bgVideo: "https://www.w3schools.com/tags/movie.mp4",
    overlayColor: "#000000",
    overlayOpacity: 0.6,
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  // Handle image file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for the file to display in the preview
      const fileUrl = URL.createObjectURL(file);
      handleChange('bgImage', fileUrl);
    }
  };

  // Handle video file upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for the file to display in the preview
      const fileUrl = URL.createObjectURL(file);
      handleChange('bgVideo', fileUrl);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved data:", form);
    alert("AreYouReady section saved! (demo only)");
    // In a real application, you would send 'form' data to your backend here.
    // For local files (blob URLs), you'd typically upload them to storage
    // (e.g., S3, Cloudinary) and replace the blob URL with the permanent URL.
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = "w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-teal-500 focus:border-teal-500 text-gray-900";
  const commonColorInputClasses = "w-full h-10 rounded-md border border-gray-300 p-1 cursor-pointer";
  const commonSelectClasses = "w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-gray-900";


  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Settings className="inline-block w-8 h-8 mr-2 text-teal-600" /> "Are You Ready" Section Editor
      </h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Heading */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-inner border border-teal-200">
          <h3 className="text-xl font-bold text-teal-800 mb-5 text-center">Heading Settings</h3>
          <label htmlFor="heading" className="font-semibold block mb-1 text-gray-700">
            Heading Text
          </label>
          <textarea
            id="heading"
            rows={2}
            value={form.heading}
            onChange={(e) => handleChange("heading", e.target.value)}
            className={commonInputClasses}
            placeholder="e.g., Are You Ready to Accelerate Your Business?"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <div>
              <label htmlFor="headingColor" className="text-sm text-gray-700 block mb-1">Color</label>
              <input
                id="headingColor"
                type="color"
                value={form.headingColor}
                onChange={(e) => handleChange("headingColor", e.target.value)}
                className={commonColorInputClasses}
                title="Heading Color"
              />
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
                aria-label="Heading Font Size"
              />
            </div>
            <div>
              <label htmlFor="headingFont" className="text-sm text-gray-700 block mb-1">Font Family</label>
              <select
                id="headingFont"
                value={form.headingFont}
                onChange={(e) => handleChange("headingFont", e.target.value)}
                className={commonSelectClasses}
                aria-label="Heading Font Family"
              >
                <option value="sans-serif">Sans-serif</option>
                <option value="serif">Serif</option>
                <option value="'Poppins', sans-serif">Poppins</option>
                <option value="'Roboto', sans-serif">Roboto</option>
                <option value="'Inter', sans-serif">Inter</option>
              </select>
            </div>
          </div>
        </div>

        {/* Subtext */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-5 text-center">Subtext Settings</h3>
          <label htmlFor="subtext" className="font-semibold block mb-1 text-gray-700">
            Subtext Content
          </label>
          <textarea
            id="subtext"
            rows={2}
            value={form.subtext}
            onChange={(e) => handleChange("subtext", e.target.value)}
            className={commonInputClasses}
            placeholder="e.g., Join the companies that have transformed their compliance processes..."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <label htmlFor="subtextColor" className="text-sm text-gray-700 block mb-1">Color</label>
              <input
                id="subtextColor"
                type="color"
                value={form.subtextColor}
                onChange={(e) => handleChange("subtextColor", e.target.value)}
                className={commonColorInputClasses}
                title="Subtext Color"
              />
            </div>
            <div>
              <label htmlFor="subtextSize" className="text-sm text-gray-700 block mb-1">Size (px)</label>
              <input
                id="subtextSize"
                type="number"
                value={parseInt(form.subtextSize)}
                onChange={(e) => handleChange("subtextSize", e.target.value + "px")}
                className={commonInputClasses}
                placeholder="Size (px)"
                aria-label="Subtext Font Size"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Button & Input */}
        <div className="bg-green-50 p-6 rounded-lg shadow-inner border border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-5 text-center">Call to Action</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="buttonText" className="block font-semibold mb-1 text-gray-700">
                Button Text
              </label>
              <input
                id="buttonText"
                type="text"
                value={form.button}
                onChange={(e) => handleChange("button", e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Schedule a Demo"
              />
            </div>
            <div>
              <label htmlFor="placeholder" className="block font-semibold mb-1 text-gray-700">
                Email Input Placeholder
              </label>
              <input
                id="placeholder"
                type="text"
                value={form.placeholder}
                onChange={(e) => handleChange("placeholder", e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Enter your email"
              />
            </div>
          </div>
        </div>

        {/* Background Settings */}
        <div className="bg-purple-50 p-6 rounded-lg shadow-inner border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-5 text-center">Background Options</h3>
          <label htmlFor="bgType" className="font-semibold text-gray-800 block mb-2">Background Type</label>
          <select
            id="bgType"
            value={form.bgType}
            onChange={(e) => handleChange("bgType", e.target.value)}
            className={commonSelectClasses + " mb-4"}
          >
            <option value="gradient">Animated Gradient</option>
            <option value="color">Solid Color</option>
            <option value="image">Background Image</option>
            <option value="video">Background Video</option>
          </select>

          {form.bgType === "color" && (
            <div className="mt-2">
              <label htmlFor="bgColor" className="font-medium text-gray-700 block mb-1">Background Color</label>
              <input
                id="bgColor"
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange("bgColor", e.target.value)}
                className={commonColorInputClasses}
                title="Background Color"
              />
            </div>
          )}

          {form.bgType === "image" && (
            <div className="mt-2 space-y-4">
              <div>
                <label htmlFor="bgImageUpload" className="font-medium text-gray-700 mb-1 flex items-center">
                  <UploadCloud className="w-5 h-5 mr-2" /> Upload Image
                </label>
                <input
                  id="bgImageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
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
                  You can use a placeholder like "https://placehold.co/1920x1080/0f172a/e2e8f0?text=Background+Image" if you don't have one.
                </p>
              </div>
            </div>
          )}

          {form.bgType === "video" && (
            <div className="mt-2 space-y-4">
              <div>
                <label htmlFor="bgVideoUpload" className="font-medium text-gray-700 mb-1 flex items-center">
                  <UploadCloud className="w-5 h-5 mr-2" /> Upload Video
                </label>
                <input
                  id="bgVideoUpload"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="w-full text-gray-900 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4
                             file:rounded-md file:border-0 file:text-sm file:font-semibold
                             file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                />
                 {form.bgVideo && form.bgVideo.startsWith('blob:') && (
                  <p className="text-sm text-gray-500 mt-1">Local file selected: <span className="font-medium text-gray-700">{form.bgVideo.substring(form.bgVideo.lastIndexOf('/') + 1)}</span></p>
                )}
              </div>
              <div className="flex items-center">
                <hr className="flex-grow border-gray-300 mr-2" />
                <span className="text-gray-500 text-sm">OR</span>
                <hr className="flex-grow border-gray-300 ml-2" />
              </div>
              <div>
                <label htmlFor="bgVideoURL" className="font-medium text-gray-700 mb-1 flex items-center">
                  <Link className="w-5 h-5 mr-2" /> Video URL
                </label>
                <input
                  id="bgVideoURL"
                  type="text"
                  placeholder="Paste Video URL (e.g., https://example.com/video.mp4)"
                  value={!form.bgVideo || form.bgVideo.startsWith('blob:') ? '' : form.bgVideo}
                  onChange={(e) => handleChange("bgVideo", e.target.value)}
                  className={commonInputClasses}
                />
                <p className="text-sm text-gray-500 mt-1">
                  Example: "https://www.w3schools.com/tags/movie.mp4"
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Overlay Settings */}
        <div className="bg-yellow-50 p-6 rounded-lg shadow-inner border border-yellow-200">
          <h3 className="text-xl font-bold text-yellow-800 mb-5 text-center">Overlay Settings</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="overlayColor" className="font-semibold block mb-1 text-gray-700">
                Overlay Color
              </label>
              <input
                id="overlayColor"
                type="color"
                value={form.overlayColor}
                onChange={(e) => handleChange("overlayColor", e.target.value)}
                className={commonColorInputClasses}
                title="Overlay Color"
              />
            </div>
            <div>
              <label htmlFor="overlayOpacity" className="font-semibold block mb-1 text-gray-700">
                Overlay Opacity (0-1)
              </label>
              <input
                id="overlayOpacity"
                type="number"
                min="0"
                max="1"
                step="0.05"
                value={form.overlayOpacity}
                onChange={(e) => handleChange("overlayOpacity", parseFloat(e.target.value))}
                className={commonInputClasses}
                aria-label="Overlay Opacity"
              />
            </div>
          </div>
        </div>

        {/* Live Preview */}
        <div className="mt-12 p-8 rounded-xl border-4 border-dashed border-gray-300 bg-gray-50 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <EyeIcon className="w-8 h-8 text-gray-700" /> Live Preview
          </h3>
          <AreYouReadyPreview formData={form} />
        </div>

        {/* Submit */}
        <div className="text-center pt-10">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white
                       px-10 py-4 font-bold text-lg rounded-xl shadow-xl
                       hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save "Are You Ready" Section
          </button>
        </div>
      </form>
    </div>
  );
}