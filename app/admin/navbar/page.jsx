'use client';

import { useState, useRef } from 'react'; // Import useRef for file input reset
import {
  Plus,
  Trash,
  Image,
  Text,
  Link,
  Save,
  Palette,
  LayoutDashboard,
  Menu, // For mobile menu icon
  X, // For mobile menu close icon
} from 'lucide-react';

export default function NavbarEditor() {
  const fileInputRef = useRef(null); // Ref to clear file input

  const [form, setForm] = useState({
    logo: '/logo.png', // initial logo
    logoAlt: 'Cmplai Logo',
    logoHeight: '48px', // New: Logo height control
    navbarBgColor: '#ffffff', // New: Navbar background color
    linkColor: '#4b5563', // New: Link text color
    linkHoverColor: '#00b4bc', // New: Link hover color
    buttonText: 'Get Started',
    buttonBgColor: '#00b4bc', // New: Button background color
    buttonTextColor: '#ffffff', // New: Button text color
    buttonHoverBgColor: '#008c96', // New: Button hover background color
    buttonHoverTextColor: '#ffffff', // New: Button hover text color
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'Product', href: '/#product' },
      { label: 'About Us', href: '/#about' }, // Added more default links
      { label: 'Contact', href: '/#contact' },
    ],
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu in preview

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleLinkChange = (index, field, value) => {
    const updated = [...form.links];
    updated[index][field] = value;
    setForm({ ...form, links: updated });
  };

  const handleAddLink = () => {
    setForm({
      ...form,
      links: [...form.links, { label: '', href: '' }],
    });
  };

  const handleRemoveLink = (index) => {
    const updated = [...form.links];
    updated.splice(index, 1);
    setForm({ ...form, links: updated });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setForm((prevForm) => ({ ...prevForm, logo: url }));
    }
  };

  const handleClearLogo = () => {
    setForm((prevForm) => ({ ...prevForm, logo: '' }));
    if (fileInputRef.current) {
      fileInputRef.current.value = ''; // Clear file input visual
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Navbar Config:', form);
    alert('Navbar configuration saved! (Demo only)');
    // In a real application, you would send this 'form' data to your backend API
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';
  const commonColorInputClasses = 'h-10 w-full border border-gray-300 rounded-md p-1';

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <LayoutDashboard className="inline-block w-8 h-8 mr-2 text-teal-600" /> Navbar Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* --- Logo & Branding --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Image className="w-5 h-5 text-gray-600" /> Logo & Branding
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Logo Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              {form.logo && (
                <div className="mt-3 flex items-center gap-4">
                  <img src={form.logo} alt={form.logoAlt} className="h-16 object-contain border rounded bg-white p-2 shadow-sm" />
                  <button
                    type="button"
                    onClick={handleClearLogo}
                    className="text-red-500 hover:text-red-700 flex items-center text-sm"
                  >
                    <Trash className="w-4 h-4 mr-1" /> Clear Logo
                  </button>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Logo Alt Text</label>
              <input
                type="text"
                value={form.logoAlt}
                onChange={(e) => handleChange('logoAlt', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Your Company Logo"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Logo Height (px)</label>
              <input
                type="number"
                value={parseInt(form.logoHeight)}
                onChange={(e) => handleChange('logoHeight', `${e.target.value}px`)}
                className={commonInputClasses}
                placeholder="e.g., 48"
              />
            </div>
          </div>
        </div>

        {/* --- Navbar Styling --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-gray-600" /> Navbar Colors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Background Color</label>
              <input
                type="color"
                value={form.navbarBgColor}
                onChange={(e) => handleChange('navbarBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Link Text Color</label>
              <input
                type="color"
                value={form.linkColor}
                onChange={(e) => handleChange('linkColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Link Hover Color</label>
              <input
                type="color"
                value={form.linkHoverColor}
                onChange={(e) => handleChange('linkHoverColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Button Text</label>
              <input
                type="text"
                value={form.buttonText}
                onChange={(e) => handleChange('buttonText', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Sign Up, Contact Us"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Button Background Color</label>
              <input
                type="color"
                value={form.buttonBgColor}
                onChange={(e) => handleChange('buttonBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Button Text Color</label>
              <input
                type="color"
                value={form.buttonTextColor}
                onChange={(e) => handleChange('buttonTextColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Button Hover Background</label>
              <input
                type="color"
                value={form.buttonHoverBgColor}
                onChange={(e) => handleChange('buttonHoverBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Button Hover Text Color</label>
              <input
                type="color"
                value={form.buttonHoverTextColor}
                onChange={(e) => handleChange('buttonHoverTextColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
          </div>
        </div>

        {/* --- Navigation Links --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Link className="w-5 h-5 text-gray-600" /> Navigation Links
          </h3>
          <div className="space-y-4">
            {form.links.map((link, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-3 items-center bg-gray-50 p-3 rounded-md border border-gray-200">
                <div className="flex-1 w-full">
                  <label className="block text-xs font-medium text-gray-500 mb-0.5">Label</label>
                  <input
                    type="text"
                    placeholder="e.g., Home"
                    value={link.label}
                    onChange={(e) => handleLinkChange(index, 'label', e.target.value)}
                    className={commonInputClasses}
                  />
                </div>
                <div className="flex-1 w-full">
                  <label className="block text-xs font-medium text-gray-500 mb-0.5">URL (e.g., /#section)</label>
                  <input
                    type="text"
                    placeholder="e.g., /#home"
                    value={link.href}
                    onChange={(e) => handleLinkChange(index, 'href', e.target.value)}
                    className={commonInputClasses}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveLink(index)}
                  className="p-2 text-red-500 hover:text-red-700 bg-red-50 rounded-full sm:mt-4 md:mt-auto"
                  aria-label="Remove link"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddLink}
              className="flex items-center gap-2 text-teal-600 mt-4 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
            >
              <Plus className="w-5 h-5" /> Add New Link
            </button>
          </div>
        </div>

        {/* --- Live Preview --- */}
        <div className="mt-10 p-4 sm:p-6 rounded-xl border-2 border-dashed border-teal-200 shadow-inner">
          <h3 className="text-2xl font-bold text-teal-700 mb-6 text-center">👁️ Live Preview</h3>

          <nav
            className="flex items-center justify-between p-4 rounded-lg shadow-sm"
            style={{ backgroundColor: form.navbarBgColor }}
          >
            {/* Logo */}
            {form.logo && (
              <a href="#" className="flex-shrink-0">
                <img
                  src={form.logo}
                  alt={form.logoAlt}
                  style={{ height: form.logoHeight }}
                  className="object-contain"
                />
              </a>
            )}

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md p-2"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex flex-grow justify-center space-x-8">
              {form.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href || '#'} // Fallback to # if href is empty
                  className="font-medium px-3 py-2 rounded-md transition-colors duration-200"
                  style={{ color: form.linkColor }}
                  onMouseEnter={(e) => e.target.style.color = form.linkHoverColor}
                  onMouseLeave={(e) => e.target.style.color = form.linkColor}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Button */}
            <div className="hidden md:block flex-shrink-0">
              <button
                type="button"
                className="px-6 py-2 rounded-md font-semibold transition-all duration-200"
                style={{
                  backgroundColor: form.buttonBgColor,
                  color: form.buttonTextColor,
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = form.buttonHoverBgColor;
                  e.target.style.color = form.buttonHoverTextColor;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = form.buttonBgColor;
                  e.target.style.color = form.buttonTextColor;
                }}
              >
                {form.buttonText}
              </button>
            </div>
          </nav>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden absolute top-full left-0 right-0 py-4 shadow-lg z-10"
              style={{ backgroundColor: form.navbarBgColor }}
            >
              <div className="flex flex-col items-center space-y-4">
                {form.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href || '#'}
                    className="block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                    style={{ color: form.linkColor }}
                    onMouseEnter={(e) => e.target.style.color = form.linkHoverColor}
                    onMouseLeave={(e) => e.target.style.color = form.linkColor}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  type="button"
                  className="mt-4 w-auto px-6 py-2 rounded-md font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: form.buttonBgColor,
                    color: form.buttonTextColor,
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = form.buttonHoverBgColor;
                    e.target.style.color = form.buttonHoverTextColor;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = form.buttonBgColor;
                    e.target.style.color = form.buttonTextColor;
                  }}
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on button click
                >
                  {form.buttonText}
                </button>
              </div>
            </div>
          )}
        </div>


        {/* --- Submit Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Navbar Configuration
          </button>
        </div>
      </form>
    </div>
  );
}
