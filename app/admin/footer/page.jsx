'use client';

import { useState, useCallback } from 'react';
import {
  Settings, Eye as EyeIcon, Save, Plus, Trash,
  Facebook, Twitter, Linkedin, Instagram, Github, // Social icons
  MapPin, Phone, Mail, // Contact icons
  Link as LinkIcon, // Generic link icon for inputs
  Type, Palette
} from 'lucide-react';

// Map Lucide icons for easier rendering in preview
const SOCIAL_ICONS_MAP = {
  facebook: <Facebook className="w-6 h-6" />,
  twitter: <Twitter className="w-6 h-6" />,
  linkedin: <Linkedin className="w-6 h-6" />,
  instagram: <Instagram className="w-6 h-6" />,
  github: <Github className="w-6 h-6" />,
};

// Live Preview Component
function FooterPreview({ formData }) {
  const {
    bgColor, textColor, headingColor, linkColor, linkHoverColor,
    logoText, description, socialLinks,
    quickLinksTitle, quickLinks,
    resourcesTitle, resources,
    contactTitle, address, phone, email,
    copyrightText, legalLinks
  } = formData;

  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  const linkStyle = (isHovered = false) => ({
    color: isHovered ? linkHoverColor : linkColor,
    transition: 'color 0.2s ease-in-out',
  });

  return (
    <footer className="py-16 px-4 rounded-xl" style={footerStyle}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">

        {/* Column 1: Logo & Description */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold" style={{ color: headingColor }}>{logoText}</h3>
          <p className="text-sm leading-relaxed" style={{ color: textColor }}>{description}</p>
          <div className="flex space-x-4 mt-4">
            {socialLinks.map((social, index) => social.url && (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                style={{ color: linkColor }} // Default icon color
                onMouseEnter={e => e.currentTarget.style.color = linkHoverColor}
                onMouseLeave={e => e.currentTarget.style.color = linkColor}
              >
                {SOCIAL_ICONS_MAP[social.platform] || <LinkIcon className="w-6 h-6" />}
              </a>
            ))}
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-4" style={{ color: headingColor }}>{quickLinksTitle}</h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => link.text && link.url && (
              <li key={index}>
                <a
                  href={link.url}
                  className="block hover:underline"
                  style={linkStyle()}
                  onMouseEnter={e => e.currentTarget.style.color = linkStyle(true).color}
                  onMouseLeave={e => e.currentTarget.style.color = linkStyle().color}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-4" style={{ color: headingColor }}>{resourcesTitle}</h4>
          <ul className="space-y-2">
            {resources.map((link, index) => link.text && link.url && (
              <li key={index}>
                <a
                  href={link.url}
                  className="block hover:underline"
                  style={linkStyle()}
                  onMouseEnter={e => e.currentTarget.style.color = linkStyle(true).color}
                  onMouseLeave={e => e.currentTarget.style.color = linkStyle().color}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold mb-4" style={{ color: headingColor }}>{contactTitle}</h4>
          <div className="space-y-3">
            {address && (
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-current" style={{ color: headingColor }} />
                <p className="text-sm leading-relaxed" style={{ color: textColor }}>{address}</p>
              </div>
            )}
            {phone && (
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-current" style={{ color: headingColor }} />
                <p className="text-sm leading-relaxed" style={{ color: textColor }}>{phone}</p>
              </div>
            )}
            {email && (
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-current" style={{ color: headingColor }} />
                <p className="text-sm leading-relaxed" style={{ color: textColor }}>{email}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p className="mb-4 md:mb-0" style={{ color: textColor }}>{copyrightText}</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
          {legalLinks.map((link, index) => link.text && link.url && (
            <a
              key={index}
              href={link.url}
              className="hover:underline"
              style={linkStyle()}
              onMouseEnter={e => e.currentTarget.style.color = linkStyle(true).color}
              onMouseLeave={e => e.currentTarget.style.color = linkStyle().color}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}


export default function AdminFooterEditor() {
  const [form, setForm] = useState({
    // Global Styles
    bgColor: '#e0f7fa', // Light cyan-ish color from image
    textColor: '#4b5563', // Gray-600 for general text
    headingColor: '#0f766e', // Teal-700 for headings
    linkColor: '#0f766e', // Teal-700 for links
    linkHoverColor: '#0891b2', // Cyan-600 for link hover

    // Column 1: Logo & Description
    logoText: 'Cmplai',
    description: 'Transforming the future of compliance through automation of document preparation.',
    socialLinks: [
      { platform: 'facebook', url: 'https://facebook.com/cmplai' },
      { platform: 'twitter', url: 'https://twitter.com/cmplai' },
      { platform: 'linkedin', url: 'https://linkedin.com/company/cmplai' },
      { platform: 'instagram', url: 'https://instagram.com/cmplai' },
      { platform: 'github', url: 'https://github.com/cmplai' },
    ],

    // Column 2: Quick Links
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { text: 'Home', url: '/' },
      { text: 'Product', url: '/product' },
      { text: 'About Us', url: '/about' },
      { text: 'Contact', url: '/contact' },
    ],

    // Column 3: Resources
    resourcesTitle: 'Resources',
    resources: [
      { text: 'Blog', url: '/blog' },
      { text: 'Case Studies', url: '/case-studies' },
      { text: 'Documentation', url: '/docs' },
      { text: 'FAQ', url: '/faq' },
    ],

    // Column 4: Contact
    contactTitle: 'Contact',
    address: 'LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India',
    phone: '+91 6301985408',
    email: 'admin@cmplai.com',

    // Bottom Footer
    copyrightText: '© 2025 LN Infosphere TechTransformers Pvt Ltd. All rights reserved.',
    legalLinks: [
      { text: 'Privacy Policy', url: '/privacy' },
      { text: 'Terms of Service', url: '/terms' },
      { text: 'Cookie Policy', url: '/cookie' },
    ],
  });

  const handleChange = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleLinkArrayChange = useCallback((arrayName, index, field, value) => {
    const updatedArray = [...form[arrayName]];
    updatedArray[index][field] = value;
    handleChange(arrayName, updatedArray);
  }, [form, handleChange]);

  const addLinkItem = useCallback((arrayName) => {
    handleChange(arrayName, [...form[arrayName], { text: 'New Link', url: '#' }]);
  }, [form, handleChange]);

  const removeLinkItem = useCallback((arrayName, index) => {
    const updatedArray = form[arrayName].filter((_, i) => i !== index);
    handleChange(arrayName, updatedArray);
  }, [form, handleChange]);

  const handleSocialLinkChange = useCallback((index, url) => {
    const updatedSocialLinks = [...form.socialLinks];
    updatedSocialLinks[index].url = url;
    handleChange('socialLinks', updatedSocialLinks);
  }, [form, handleChange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("💾 Saving Footer:", form);
    alert("✅ Footer settings saved! (Demo only)");
    // In a real application, send this `form` data to your backend API.
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400";
  const commonColorInputClasses = "h-10 w-full rounded-md border border-gray-300 p-1 cursor-pointer";
  const commonSelectClasses = "w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500";


  return (
    <div className="max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-2xl border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Settings className="inline-block w-8 h-8 mr-2 text-teal-600" /> Website Footer Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* --- Global Styling --- */}
        <div className="bg-blue-50 p-6 rounded-lg shadow-inner border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-4">🎨 Global Footer Styling</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label htmlFor="bgColor" className="block text-sm font-semibold text-gray-700 mb-1">Background Color</label>
              <input
                id="bgColor"
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange('bgColor', e.target.value)}
                className={commonColorInputClasses}
                title="Footer Background Color"
              />
            </div>
            <div>
              <label htmlFor="textColor" className="block text-sm font-semibold text-gray-700 mb-1">General Text Color</label>
              <input
                id="textColor"
                type="color"
                value={form.textColor}
                onChange={(e) => handleChange('textColor', e.target.value)}
                className={commonColorInputClasses}
                title="General Text Color"
              />
            </div>
            <div>
              <label htmlFor="headingColor" className="block text-sm font-semibold text-gray-700 mb-1">Heading Color</label>
              <input
                id="headingColor"
                type="color"
                value={form.headingColor}
                onChange={(e) => handleChange('headingColor', e.target.value)}
                className={commonColorInputClasses}
                title="Heading Color"
              />
            </div>
            <div>
              <label htmlFor="linkColor" className="block text-sm font-semibold text-gray-700 mb-1">Link Color</label>
              <input
                id="linkColor"
                type="color"
                value={form.linkColor}
                onChange={(e) => handleChange('linkColor', e.target.value)}
                className={commonColorInputClasses}
                title="Link Color"
              />
            </div>
            <div>
              <label htmlFor="linkHoverColor" className="block text-sm font-semibold text-gray-700 mb-1">Link Hover Color</label>
              <input
                id="linkHoverColor"
                type="color"
                value={form.linkHoverColor}
                onChange={(e) => handleChange('linkHoverColor', e.target.value)}
                className={commonColorInputClasses}
                title="Link Hover Color"
              />
            </div>
          </div>
        </div>

        {/* --- Column 1: Logo, Description & Social Links --- */}
        <div className="bg-teal-50 p-6 rounded-lg shadow-inner border border-teal-200">
          <h3 className="text-xl font-bold text-teal-800 mb-4">🚀 Logo & Socials</h3>
          <div>
            <label htmlFor="logoText" className="block text-sm font-semibold text-gray-700 mb-1">Logo Text</label>
            <input
              id="logoText"
              type="text"
              value={form.logoText}
              onChange={(e) => handleChange('logoText', e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Cmplai"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
            <textarea
              id="description"
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className={`${commonInputClasses} resize-y`}
              placeholder="e.g., Transforming the future of compliance..."
            />
          </div>
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Social Media Links</h4>
            <p className="text-sm text-gray-600 mb-4">Enter the full URL for each social platform. Leave blank to hide the icon.</p>
            <div className="space-y-3">
              {form.socialLinks.map((social, index) => (
                <div key={social.platform} className="flex items-center gap-3">
                  <span className="text-gray-700 capitalize w-24 flex items-center gap-2">
                    {SOCIAL_ICONS_MAP[social.platform] || <LinkIcon className="w-5 h-5" />}
                    {social.platform}:
                  </span>
                  <input
                    type="url"
                    value={social.url}
                    onChange={(e) => handleSocialLinkChange(index, e.target.value)}
                    className={commonInputClasses}
                    placeholder={`https://${social.platform}.com/yourprofile`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- Column 2 & 3: Quick Links & Resources --- */}
        <div className="grid md:grid-cols-2 gap-8 bg-purple-50 p-6 rounded-lg shadow-inner border border-purple-200">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">🔗 Quick Links</h3>
            <label htmlFor="quickLinksTitle" className="block text-sm font-semibold text-gray-700 mb-1">Section Title</label>
            <input
              id="quickLinksTitle"
              type="text"
              value={form.quickLinksTitle}
              onChange={(e) => handleChange('quickLinksTitle', e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Quick Links"
            />
            <div className="mt-4 space-y-3">
              {form.quickLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={link.text}
                    onChange={(e) => handleLinkArrayChange('quickLinks', index, 'text', e.target.value)}
                    className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-gray-900"
                    placeholder="Link Text"
                  />
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) => handleLinkArrayChange('quickLinks', index, 'url', e.target.value)}
                    className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-gray-900"
                    placeholder="Link URL"
                  />
                  <button
                    type="button"
                    onClick={() => removeLinkItem('quickLinks', index)}
                    className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addLinkItem('quickLinks')}
              className="mt-4 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Add Link
            </button>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-purple-800 mb-4">📚 Resources</h3>
            <label htmlFor="resourcesTitle" className="block text-sm font-semibold text-gray-700 mb-1">Section Title</label>
            <input
              id="resourcesTitle"
              type="text"
              value={form.resourcesTitle}
              onChange={(e) => handleChange('resourcesTitle', e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Resources"
            />
            <div className="mt-4 space-y-3">
              {form.resources.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={link.text}
                    onChange={(e) => handleLinkArrayChange('resources', index, 'text', e.target.value)}
                    className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-gray-900"
                    placeholder="Link Text"
                  />
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) => handleLinkArrayChange('resources', index, 'url', e.target.value)}
                    className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-gray-900"
                    placeholder="Link URL"
                  />
                  <button
                    type="button"
                    onClick={() => removeLinkItem('resources', index)}
                    className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addLinkItem('resources')}
              className="mt-4 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Add Link
            </button>
          </div>
        </div>

        {/* --- Column 4: Contact Info --- */}
        <div className="bg-orange-50 p-6 rounded-lg shadow-inner border border-orange-200">
          <h3 className="text-xl font-bold text-orange-800 mb-4">📞 Contact Information</h3>
          <div>
            <label htmlFor="contactTitle" className="block text-sm font-semibold text-gray-700 mb-1">Section Title</label>
            <input
              id="contactTitle"
              type="text"
              value={form.contactTitle}
              onChange={(e) => handleChange('contactTitle', e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., Contact"
            />
          </div>
          <div className="mt-4 space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">Address</label>
              <textarea
                id="address"
                value={form.address}
                onChange={(e) => handleChange('address', e.target.value)}
                rows={2}
                className={`${commonInputClasses} resize-y`}
                placeholder="e.g., 123 Business Rd, City, Country"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., +1 123 456 7890"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., info@example.com"
              />
            </div>
          </div>
        </div>

        {/* --- Bottom Footer Section --- */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">© Copyright & Legal Links</h3>
          <div>
            <label htmlFor="copyrightText" className="block text-sm font-semibold text-gray-700 mb-1">Copyright Text</label>
            <input
              id="copyrightText"
              type="text"
              value={form.copyrightText}
              onChange={(e) => handleChange('copyrightText', e.target.value)}
              className={commonInputClasses}
              placeholder="e.g., © 2025 Your Company. All rights reserved."
            />
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-700 mb-3">Legal Links</h4>
            <div className="space-y-3">
              {form.legalLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={link.text}
                    onChange={(e) => handleLinkArrayChange('legalLinks', index, 'text', e.target.value)}
                    className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-gray-900"
                    placeholder="Link Text"
                  />
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) => handleLinkArrayChange('legalLinks', index, 'url', e.target.value)}
                    className="w-1/2 border border-gray-300 px-3 py-2 rounded-md text-gray-900"
                    placeholder="Link URL"
                  />
                  <button
                    type="button"
                    onClick={() => removeLinkItem('legalLinks', index)}
                    className="p-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => addLinkItem('legalLinks')}
              className="mt-4 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors text-sm flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Add Link
            </button>
          </div>
        </div>


        {/* --- Live Preview Section --- */}
        <div className="mt-12 p-8 rounded-xl border-4 border-dashed border-gray-300 bg-gray-50 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <EyeIcon className="w-8 h-8 text-gray-700" /> Live Preview
          </h3>
          <FooterPreview formData={form} />
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Footer Settings
          </button>
        </div>
      </form>
    </div>
  );
}