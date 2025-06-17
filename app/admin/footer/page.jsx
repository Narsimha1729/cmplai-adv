'use client';

import { useState } from 'react';
import {
  Plus,
  Trash,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Globe, // For general website links
  MapPin,
  Phone,
  Mail,
  Copyright,
  FileText, // For policy documents
  Home, // For Home link
  Box, // For Product link
  Info, // For About Us link
  BookOpen, // For Blog link
} from 'lucide-react';

// Map social platform names to Lucide icons
const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  Youtube: Youtube,
  // Add more as needed
};

// Map quick link labels to Lucide icons (optional, for preview)
const quickLinkIcons = {
  Home: Home,
  Product: Box,
  'About Us': Info,
  Blog: BookOpen,
  // Fallback for others
  default: Globe,
};

export default function FooterEditor() {
  const [form, setForm] = useState({
    logo: '/logo.png', // Default or placeholder logo
    tagline: 'Transforming the future of Compliance through automation of document preparation.',
    social: [
      { platform: 'LinkedIn', url: 'https://linkedin.com/yourcompany', icon: 'LinkedIn' },
      { platform: 'GitHub', url: 'https://github.com/yourcompany', icon: 'GitHub' },
    ],
    links: [
      { label: 'Home', href: '/#home' },
      { label: 'Product', href: '/#product' },
      { label: 'About Us', href: '/#about' },
      { label: 'Blog', href: '/blog' },
    ],
    contact: {
      address: 'LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India',
      phone: '+91 6301985408',
      email: 'admin@cmplai.com',
    },
    policies: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
    copyright: '© 2025 LN Infosphere TechTransformers Pvt Ltd. All rights reserved.',
  });

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleNestedChange = (parentField, childField, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [parentField]: { ...prevForm[parentField], [childField]: value },
    }));
  };

  const handleListChange = (listName, index, field, value) => {
    const updatedList = [...form[listName]];
    updatedList[index][field] = value;
    setForm((prevForm) => ({ ...prevForm, [listName]: updatedList }));
  };

  const handleListAdd = (listName, newItem) => {
    setForm((prevForm) => ({
      ...prevForm,
      [listName]: [...prevForm[listName], newItem],
    }));
  };

  const handleListRemove = (listName, index) => {
    // eslint-disable-next-line no-alert
    if (window.confirm(`Are you sure you want to remove this ${listName.slice(0, -1)}?`)) {
      const updatedList = [...form[listName]];
      updatedList.splice(index, 1);
      setForm((prevForm) => ({ ...prevForm, [listName]: updatedList }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Final Footer Data:', form);
    // In a real application, you'd send 'form' data to a backend API here.
    // eslint-disable-next-line no-alert
    alert('✅ Footer settings saved successfully!');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-8">
        ⚙️ Footer Content Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* --- Logo & Tagline --- */}
        <div className="pb-6 border-b border-gray-200">
          <label htmlFor="logoUrl" className="block font-semibold text-gray-800 mb-2">
            Company Logo (URL)
          </label>
          <input
            id="logoUrl"
            type="text"
            value={form.logo}
            onChange={(e) => handleChange('logo', e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
            placeholder="e.g., /images/your-logo.png or https://example.com/logo.svg"
          />
          <p className="text-sm text-gray-500 mt-1">
            Provide the full URL or path to your logo image.
          </p>

          <label htmlFor="tagline" className="block font-semibold text-gray-800 mt-6 mb-2">
            Company Tagline
          </label>
          <textarea
            id="tagline"
            value={form.tagline}
            onChange={(e) => handleChange('tagline', e.target.value)}
            className="w-full h-24 border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
            placeholder="A short, catchy phrase about your company."
          />
        </div>

        {/* --- Social Links --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Social Media Links</h3>
          {form.social.map((s, i) => {
            const Icon = socialIcons[s.icon] || Globe; // Fallback to Globe icon
            return (
              <div
                key={i}
                className="flex flex-col md:flex-row gap-4 items-stretch md:items-center bg-gray-50 p-4 rounded-md shadow-sm mb-4"
              >
                <div className="flex-1">
                  <label htmlFor={`social-platform-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Platform Name
                  </label>
                  <select
                    id={`social-platform-${i}`}
                    value={s.icon} // Bind select to the icon field for easier mapping
                    onChange={(e) => handleListChange('social', i, 'icon', e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  >
                    {Object.keys(socialIcons).map((iconName) => (
                      <option key={iconName} value={iconName}>
                        {iconName}
                      </option>
                    ))}
                    {!Object.keys(socialIcons).includes(s.icon) && s.icon && (
                      <option value={s.icon}>{s.icon} (Custom)</option>
                    )}
                  </select>
                </div>
                <div className="flex-1">
                  <label htmlFor={`social-url-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                    URL
                  </label>
                  <input
                    id={`social-url-${i}`}
                    type="url"
                    value={s.url}
                    onChange={(e) => handleListChange('social', i, 'url', e.target.value)}
                    placeholder="https://yourprofile.com"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                  />
                </div>
                <div className="flex items-center gap-2 mt-4 md:mt-0">
                  <Icon className="w-6 h-6 text-teal-600" aria-hidden="true" />
                  <button
                    type="button"
                    onClick={() => handleListRemove('social', i)}
                    className="p-2 text-red-600 hover:text-red-800 transition-colors duration-200 rounded-full hover:bg-red-50/50"
                    aria-label={`Remove ${s.platform} link`}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
          <button
            type="button"
            onClick={() => handleListAdd('social', { platform: '', url: '', icon: 'LinkedIn' })}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium mt-4"
          >
            <Plus className="w-5 h-5" /> Add Social Link
          </button>
        </div>

        {/* --- Quick Links --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Navigation Links</h3>
          {form.links.map((l, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 items-stretch md:items-center bg-gray-50 p-4 rounded-md shadow-sm mb-4"
            >
              <div className="flex-1">
                <label htmlFor={`link-label-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Link Label
                </label>
                <input
                  id={`link-label-${i}`}
                  type="text"
                  value={l.label}
                  onChange={(e) => handleListChange('links', i, 'label', e.target.value)}
                  placeholder="e.g., Products"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
              </div>
              <div className="flex-1">
                <label htmlFor={`link-href-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                  URL/Path
                </label>
                <input
                  id={`link-href-${i}`}
                  type="text"
                  value={l.href}
                  onChange={(e) => handleListChange('links', i, 'href', e.target.value)}
                  placeholder="e.g., /products or /#features"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
              </div>
              <button
                type="button"
                onClick={() => handleListRemove('links', i)}
                className="mt-4 md:mt-0 p-2 text-red-600 hover:text-red-800 transition-colors duration-200 rounded-full hover:bg-red-50/50 self-end md:self-center"
                aria-label={`Remove ${l.label} link`}
              >
                <Trash className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleListAdd('links', { label: '', href: '' })}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium mt-4"
          >
            <Plus className="w-5 h-5" /> Add Quick Link
          </button>
        </div>

        {/* --- Contact Info --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div>
              <label htmlFor="contactAddress" className="block font-semibold text-gray-800 mb-2">
                Address
              </label>
              <textarea
                id="contactAddress"
                value={form.contact.address}
                onChange={(e) => handleNestedChange('contact', 'address', e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                rows={2}
                placeholder="e.g., 123 Business Rd, City, Country"
              />
            </div>
            <div>
              <label htmlFor="contactPhone" className="block font-semibold text-gray-800 mb-2">
                Phone Number
              </label>
              <input
                id="contactPhone"
                type="tel"
                value={form.contact.phone}
                onChange={(e) => handleNestedChange('contact', 'phone', e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                placeholder="e.g., +1 (555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="contactEmail" className="block font-semibold text-gray-800 mb-2">
                Email Address
              </label>
              <input
                id="contactEmail"
                type="email"
                value={form.contact.email}
                onChange={(e) => handleNestedChange('contact', 'email', e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                placeholder="e.g., info@yourcompany.com"
              />
            </div>
          </div>
        </div>

        {/* --- Policy Links --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Legal & Policy Links</h3>
          {form.policies.map((p, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row gap-4 items-stretch md:items-center bg-gray-50 p-4 rounded-md shadow-sm mb-4"
            >
              <div className="flex-1">
                <label htmlFor={`policy-label-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Policy Label
                </label>
                <input
                  id={`policy-label-${i}`}
                  type="text"
                  value={p.label}
                  onChange={(e) => handleListChange('policies', i, 'label', e.target.value)}
                  placeholder="e.g., Privacy Policy"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
              </div>
              <div className="flex-1">
                <label htmlFor={`policy-href-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                  URL/Path
                </label>
                <input
                  id={`policy-href-${i}`}
                  type="text"
                  value={p.href}
                  onChange={(e) => handleListChange('policies', i, 'href', e.target.value)}
                  placeholder="e.g., /privacy"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
              </div>
              <button
                type="button"
                onClick={() => handleListRemove('policies', i)}
                className="mt-4 md:mt-0 p-2 text-red-600 hover:text-red-800 transition-colors duration-200 rounded-full hover:bg-red-50/50 self-end md:self-center"
                aria-label={`Remove ${p.label} policy`}
              >
                <Trash className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleListAdd('policies', { label: '', href: '' })}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium mt-4"
          >
            <Plus className="w-5 h-5" /> Add Policy Link
          </button>
        </div>

        {/* --- Copyright Text --- */}
        <div>
          <label htmlFor="copyright" className="block font-semibold text-gray-800 mb-2">
            Copyright Text
          </label>
          <input
            id="copyright"
            type="text"
            value={form.copyright}
            onChange={(e) => handleChange('copyright', e.target.value)}
            className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
            placeholder="e.g., © 2025 Your Company. All rights reserved."
          />
        </div>

        {/* --- Live Preview --- */}
        <div className="mt-10 p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner bg-gray-900 text-gray-300">
          <h3 className="text-lg font-semibold text-teal-300 mb-6">Live Footer Preview:</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Tagline Column */}
            <div className="md:col-span-1">
              {form.logo && (
                <img
                  src={form.logo}
                  alt="Company Logo"
                  className="h-14 mb-4 filter brightness-150 contrast-125" // Adjust for dark background
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-logo.png'; // Fallback image
                  }}
                />
              )}
              <p className="text-sm leading-relaxed text-gray-400">{form.tagline}</p>
              {form.social.length > 0 && (
                <div className="flex space-x-4 mt-6">
                  {form.social.map((s, i) => {
                    const Icon = socialIcons[s.icon] || Globe;
                    return (
                      <a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
                        aria-label={`Link to ${s.platform}`}
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-teal-300 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {form.links.map((l, i) => {
                  const LinkIcon = quickLinkIcons[l.label] || quickLinkIcons.default;
                  return (
                    <li key={i}>
                      <a
                        href={l.href}
                        className="text-gray-400 hover:text-teal-500 transition-colors duration-200 flex items-center gap-2"
                      >
                        <LinkIcon className="w-4 h-4 shrink-0" />
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-teal-300 mb-4">Contact Us</h4>
              <ul className="space-y-2">
                {form.contact.address && (
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                    <span className="text-gray-400">{form.contact.address}</span>
                  </li>
                )}
                {form.contact.phone && (
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400 shrink-0" />
                    <a
                      href={`tel:${form.contact.phone}`}
                      className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
                    >
                      {form.contact.phone}
                    </a>
                  </li>
                )}
                {form.contact.email && (
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                    <a
                      href={`mailto:${form.contact.email}`}
                      className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
                    >
                      {form.contact.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Policies Column */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-teal-300 mb-4">Legal & Policies</h4>
              <ul className="space-y-2">
                {form.policies.map((p, i) => (
                  <li key={i}>
                    <a
                      href={p.href}
                      className="text-gray-400 hover:text-teal-500 transition-colors duration-200 flex items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText className="w-4 h-4 shrink-0" />
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright Section (Full Width) */}
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center gap-1">
              <Copyright className="w-4 h-4" />
              {form.copyright}
            </p>
          </div>
        </div>

        {/* --- Save Button --- */}
        <div className="pt-8 text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            💾 Save Footer Settings
          </button>
        </div>
      </form>
    </div>
  );
}
