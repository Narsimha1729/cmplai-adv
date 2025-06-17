'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Plus,
  Trash,
  Linkedin,
  Twitter,
  Mail,
  Users, // For Team section icon
  Palette, // For styling controls
  Layout, // For general section settings
  Save, // For save button
  ChevronUp, // For reordering
  ChevronDown, // For reordering
  X, // For clear image
} from 'lucide-react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'; // For drag-and-drop reordering

// Default structure for a new team member
const DEFAULT_TEAM_MEMBER = {
  id: `member-${Date.now()}`, // Unique ID for each member, crucial for DND
  name: 'New Team Member',
  role: 'Role / Title',
  experience: 'Brief experience or bio (e.g., 5+ years in industry)',
  image: '', // Placeholder for image URL (can be base64 or external URL)
  linkedin: '',
  twitter: '',
  email: '',
  // Individual member card styles (can override global)
  cardBgColor: '', // Empty means use global
  cardShadow: '', // Empty means use global
};

export default function TeamEditor() {
  const [form, setForm] = useState({
    // Section General Settings
    sectionHeading: 'Our Team',
    sectionSubheading: 'Meet the dedicated experts driving innovation and success.',
    sectionHeadingColor: '#1a202c',
    sectionSubheadingColor: '#4a5568',
    sectionBgColor: '#f7fafc', // Default light background
    sectionPaddingY: '80px', // Default vertical padding
    sectionPaddingX: '16px', // Default horizontal padding
    enableSlider: true, // New: Enable/disable horizontal slider
    membersPerPage: 3, // New: How many members visible at once in slider

    // Global Team Member Card Styles
    globalCardBgColor: '#ffffff',
    globalCardBorderColor: '#e2e8f0',
    globalCardShadow: 'md', // sm, md, lg, xl, 2xl, none
    globalCardPadding: '24px', // Padding inside each member card
    globalNameColor: '#0d9488', // Teal for names
    globalRoleColor: '#4a5568', // Gray for roles
    globalExperienceColor: '#718096', // Lighter gray for experience
    globalSocialIconColor: '#4c556f', // Dark gray for social icons
    globalSocialIconHoverColor: '#0ea5e9', // Blue on hover for social icons
    globalSocialIconSize: '24px',

    // Team Members Data - pre-populate with some data
    members: [
      {
        id: 'member-1',
        name: 'T Narsimha Murthy',
        role: 'Founder & CEO',
        experience: '5+ years of experience in pharma industry with a focus on compliance automation and quality management systems.',
        image: '/tn_murthy.jpg', // Make sure this path exists in your /public folder
        linkedin: 'https://www.linkedin.com/in/tn-narsimha-murthy-example',
        twitter: 'https://twitter.com/narsimha_t_example',
        email: 'mailto:narsimha@example.com',
        cardBgColor: '#ffffff',
        cardShadow: 'lg',
      },
      {
        id: 'member-2',
        name: 'Divya Taluri',
        role: 'Chief Regulatory Officer',
        experience: '3+ years of experience in pharmaceutical compliance and quality management, specializing in global regulatory affairs.',
        image: '/divya_taluri.jpg', // Make sure this path exists in your /public folder
        linkedin: 'https://www.linkedin.com/in/divya-taluri-example',
        twitter: 'https://twitter.com/divya_t_example',
        email: 'mailto:divya@example.com',
        cardBgColor: '#ffffff',
        cardShadow: 'md',
      },
    ],
  });

  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const handleMemberChange = (index, field, value) => {
    const updatedMembers = [...form.members];
    updatedMembers[index] = { ...updatedMembers[index], [field]: value };
    setForm((prevForm) => ({ ...prevForm, members: updatedMembers }));
  };

  const handleImageUpload = (index, file) => {
    if (!file) {
      handleMemberChange(index, 'image', ''); // Clear image if no file selected
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      handleMemberChange(index, 'image', reader.result); // Store as base64
    };
    reader.readAsDataURL(file);
  };

  const addMember = () => {
    setForm((prevForm) => ({
      ...prevForm,
      members: [...prevForm.members, { ...DEFAULT_TEAM_MEMBER, id: `member-${Date.now()}` }],
    }));
  };

  const removeMember = (index) => {
    const updatedMembers = [...form.members];
    updatedMembers.splice(index, 1);
    setForm((prevForm) => ({ ...prevForm, members: updatedMembers }));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const reorderedMembers = Array.from(form.members);
    const [movedMember] = reorderedMembers.splice(result.source.index, 1);
    reorderedMembers.splice(result.destination.index, 0, movedMember);

    setForm((prevForm) => ({ ...prevForm, members: reorderedMembers }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Team section configuration saved! (Demo only)');
    console.log('Submitted Team Data:', form);
    // In a real application, you would send 'form' data to your backend API
  };

  // Common Tailwind classes for inputs and selects
  const commonInputClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black placeholder-gray-400';
  const commonColorInputClasses = 'h-10 w-full border border-gray-300 rounded-md p-1';
  const commonSelectClasses = 'w-full border border-gray-300 px-3 py-2 rounded-md focus:ring-teal-500 focus:border-teal-500 text-black';

  const getShadowClass = (shadowValue) => {
    switch (shadowValue) {
      case 'sm': return 'shadow-sm';
      case 'md': return 'shadow-md';
      case 'lg': return 'shadow-lg';
      case 'xl': return 'shadow-xl';
      case '2xl': return 'shadow-2xl';
      case 'none': return 'shadow-none';
      default: return 'shadow-md'; // Default to medium shadow
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 bg-white rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <Users className="inline-block w-8 h-8 mr-2 text-teal-600" /> Team Section Editor
      </h2>

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* --- Section General Settings --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Layout className="w-5 h-5 text-gray-600" /> Section Layout & Text
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Section Heading</label>
              <input
                type="text"
                value={form.sectionHeading}
                onChange={(e) => handleChange('sectionHeading', e.target.value)}
                className={commonInputClasses}
                placeholder="e.g., Meet Our Experts"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Heading Color</label>
              <input
                type="color"
                value={form.sectionHeadingColor}
                onChange={(e) => handleChange('sectionHeadingColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-1">Section Subheading</label>
              <textarea
                value={form.sectionSubheading}
                onChange={(e) => handleChange('sectionSubheading', e.target.value)}
                rows={2}
                className={`${commonInputClasses} resize-y`}
                placeholder="A brief introduction to your team."
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Subheading Color</label>
              <input
                type="color"
                value={form.sectionSubheadingColor}
                onChange={(e) => handleChange('sectionSubheadingColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Section Background Color</label>
              <input
                type="color"
                value={form.sectionBgColor}
                onChange={(e) => handleChange('sectionBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Vertical Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.sectionPaddingY)}
                onChange={(e) => handleChange('sectionPaddingY', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Horizontal Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.sectionPaddingX)}
                onChange={(e) => handleChange('sectionPaddingX', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>

            {/* Slider Controls */}
            <div className="col-span-1">
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.enableSlider}
                  onChange={(e) => handleChange('enableSlider', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-teal-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-teal-600"></div>
                <span className="ms-3 text-sm font-semibold text-gray-700">Enable Horizontal Slider</span>
              </label>
            </div>
            {form.enableSlider && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Members Visible (Slider)</label>
                <input
                  type="number"
                  min="1"
                  value={form.membersPerPage}
                  onChange={(e) => handleChange('membersPerPage', parseInt(e.target.value))}
                  className={commonInputClasses}
                />
              </div>
            )}
            {!form.enableSlider && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Members Per Row (Grid)</label>
                <select
                  value={form.membersPerPage} // Reusing for grid columns
                  onChange={(e) => handleChange('membersPerPage', parseInt(e.target.value))}
                  className={commonSelectClasses}
                >
                  <option value={1}>1 Member</option>
                  <option value={2}>2 Members</option>
                  <option value={3}>3 Members</option>
                  <option value={4}>4 Members</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* --- Global Team Member Card Styles --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-gray-600" /> Global Member Card Appearance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Background Color</label>
              <input
                type="color"
                value={form.globalCardBgColor}
                onChange={(e) => handleChange('globalCardBgColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Border Color</label>
              <input
                type="color"
                value={form.globalCardBorderColor}
                onChange={(e) => handleChange('globalCardBorderColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Shadow</label>
              <select
                value={form.globalCardShadow}
                onChange={(e) => handleChange('globalCardShadow', e.target.value)}
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
              <label className="block text-sm font-semibold text-gray-700 mb-1">Card Padding (px)</label>
              <input
                type="number"
                value={parseInt(form.globalCardPadding)}
                onChange={(e) => handleChange('globalCardPadding', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Name Text Color</label>
              <input
                type="color"
                value={form.globalNameColor}
                onChange={(e) => handleChange('globalNameColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Role Text Color</label>
              <input
                type="color"
                value={form.globalRoleColor}
                onChange={(e) => handleChange('globalRoleColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Experience Text Color</label>
              <input
                type="color"
                value={form.globalExperienceColor}
                onChange={(e) => handleChange('globalExperienceColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Social Icon Color</label>
              <input
                type="color"
                value={form.globalSocialIconColor}
                onChange={(e) => handleChange('globalSocialIconColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Social Icon Hover Color</label>
              <input
                type="color"
                value={form.globalSocialIconHoverColor}
                onChange={(e) => handleChange('globalSocialIconHoverColor', e.target.value)}
                className={commonColorInputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Social Icon Size (px)</label>
              <input
                type="number"
                value={parseInt(form.globalSocialIconSize)}
                onChange={(e) => handleChange('globalSocialIconSize', `${e.target.value}px`)}
                className={commonInputClasses}
              />
            </div>
          </div>
        </div>

        {/* --- Manage Team Members --- */}
        <div className="pb-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-gray-600" /> Manage Team Members
          </h3>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="team-members">
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="space-y-6"
                >
                  {form.members.map((member, i) => (
                    <Draggable key={member.id} draggableId={member.id} index={i}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="p-6 border rounded-xl shadow-sm space-y-4 relative bg-gray-50 flex items-start gap-4"
                        >
                          <div
                            {...provided.dragHandleProps}
                            className="cursor-grab text-gray-400 hover:text-gray-600 mt-2 p-1 rounded-md bg-gray-100 border border-gray-200"
                            title="Drag to reorder"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                          </div>
                          <div className="flex-grow space-y-4">
                            <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2 mb-3">
                              Member #{i + 1}
                              <div className="flex-grow border-b border-gray-200"></div>
                              <button
                                type="button"
                                onClick={() => removeMember(i)}
                                className="text-red-500 hover:text-red-700 p-1 rounded-full hover:bg-red-100 transition-colors"
                                aria-label={`Remove member ${i + 1}`}
                              >
                                <Trash className="w-5 h-5" />
                              </button>
                            </h4>

                            {/* Name */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                              <input
                                type="text"
                                placeholder="Full Name"
                                value={member.name}
                                onChange={(e) => handleMemberChange(i, 'name', e.target.value)}
                                className={commonInputClasses}
                              />
                            </div>

                            {/* Role */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Role / Title</label>
                              <input
                                type="text"
                                placeholder="Role / Title"
                                value={member.role}
                                onChange={(e) => handleMemberChange(i, 'role', e.target.value)}
                                className={commonInputClasses}
                              />
                            </div>

                            {/* Experience */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Experience / Bio</label>
                              <textarea
                                placeholder="Experience or a brief biography"
                                value={member.experience}
                                onChange={(e) => handleMemberChange(i, 'experience', e.target.value)}
                                className={`${commonInputClasses} resize-y`}
                                rows={3}
                              />
                            </div>

                            {/* Image Upload */}
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Profile Image
                              </label>
                              <div className="flex items-center gap-2">
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) => handleImageUpload(i, e.target.files[0])}
                                  className="flex-grow text-sm border rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                                />
                                {member.image && (
                                  <button
                                    type="button"
                                    onClick={() => handleMemberChange(i, 'image', '')}
                                    className="p-2 rounded-full text-red-500 hover:bg-red-100 transition-colors"
                                    title="Clear image"
                                  >
                                    <X className="w-5 h-5" />
                                  </button>
                                )}
                              </div>
                              {member.image && (
                                <img
                                  src={member.image}
                                  alt={`${member.name} preview`}
                                  className="mt-3 w-24 h-24 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                                />
                              )}
                            </div>

                            {/* Social Links */}
                            <div className="grid md:grid-cols-3 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn URL</label>
                                <input
                                  type="url"
                                  placeholder="https://linkedin.com/in/..."
                                  value={member.linkedin}
                                  onChange={(e) => handleMemberChange(i, 'linkedin', e.target.value)}
                                  className={commonInputClasses}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter/X URL</label>
                                <input
                                  type="url"
                                  placeholder="https://twitter.com/..."
                                  value={member.twitter}
                                  onChange={(e) => handleMemberChange(i, 'twitter', e.target.value)}
                                  className={commonInputClasses}
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                  type="email"
                                  placeholder="email@example.com"
                                  value={member.email}
                                  onChange={(e) => handleMemberChange(i, 'email', e.target.value)}
                                  className={commonInputClasses}
                                />
                              </div>
                            </div>

                            {/* Individual Card Styles */}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 mt-4">
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Card Background Color</label>
                                <input
                                  type="color"
                                  value={member.cardBgColor || form.globalCardBgColor} // Show global if not set
                                  onChange={(e) => handleMemberChange(i, 'cardBgColor', e.target.value)}
                                  className={commonColorInputClasses}
                                />
                                <p className="text-xs text-gray-500 mt-1">Leave empty to use global setting.</p>
                              </div>
                              <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Card Shadow</label>
                                <select
                                  value={member.cardShadow || form.globalCardShadow} // Show global if not set
                                  onChange={(e) => handleMemberChange(i, 'cardShadow', e.target.value)}
                                  className={commonSelectClasses}
                                >
                                  <option value="">Use Global ({form.globalCardShadow})</option>
                                  <option value="none">None</option>
                                  <option value="sm">Small</option>
                                  <option value="md">Medium</option>
                                  <option value="lg">Large</option>
                                  <option value="xl">X-Large</option>
                                  <option value="2xl">2X-Large</option>
                                </select>
                                <p className="text-xs text-gray-500 mt-1">Leave "Use Global" to use global setting.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          <button
            type="button"
            onClick={addMember}
            className="flex items-center gap-2 text-teal-600 mt-6 px-4 py-2 border border-teal-500 rounded-md hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors duration-200"
          >
            <Plus className="w-5 h-5" /> Add New Team Member
          </button>
        </div>

        {/* --- Live Preview --- */}
        <div
          className="mt-10 p-4 sm:p-8 rounded-xl border-2 border-dashed border-teal-200 shadow-inner"
          style={{
            backgroundColor: form.sectionBgColor,
            paddingTop: form.sectionPaddingY,
            paddingBottom: form.sectionPaddingY,
            paddingLeft: form.sectionPaddingX,
            paddingRight: form.sectionPaddingX,
          }}
        >
          <h3
            className="text-4xl font-extrabold text-center mb-4"
            style={{ color: form.sectionHeadingColor }}
          >
            {form.sectionHeading}
          </h3>
          <p
            className="text-lg text-center max-w-3xl mx-auto mb-12"
            style={{ color: form.sectionSubheadingColor }}
          >
            {form.sectionSubheading}
          </p>

          {/* Conditional Rendering for Grid vs. Slider */}
          {form.enableSlider ? (
            <div
              className="flex overflow-x-auto snap-x snap-mandatory pb-4 gap-8 custom-scrollbar" // custom-scrollbar for styling
              style={{
                scrollPaddingLeft: `calc(50% - ((${100 / form.membersPerPage}% - 16px) / 2) - 16px)` // Center active item
              }}
            >
              {form.members.map((member) => (
                <div
                  key={member.id}
                  className="flex-none snap-center flex flex-col items-center text-center rounded-xl border transition-all duration-300"
                  style={{
                    backgroundColor: member.cardBgColor || form.globalCardBgColor,
                    borderColor: form.globalCardBorderColor,
                    padding: form.globalCardPadding,
                    boxShadow: getShadowClass(member.cardShadow || form.globalCardShadow).replace('shadow-', ''), // Apply shadow value directly
                    width: `calc(${100 / form.membersPerPage}% - ${form.membersPerPage > 1 ? '16px' : '0px'})`, // Distribute width evenly, adjust for gap
                    minWidth: `calc(${100 / form.membersPerPage}% - ${form.membersPerPage > 1 ? '16px' : '0px'})`,
                    maxWidth: `calc(${100 / form.membersPerPage}% - ${form.membersPerPage > 1 ? '16px' : '0px'})`,
                  }}
                >
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-teal-300 shadow-md"
                    />
                  )}
                  <h4
                    className="text-2xl font-bold mb-1"
                    style={{ color: form.globalNameColor }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-lg font-medium mb-2"
                    style={{ color: form.globalRoleColor }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm italic mb-4"
                    style={{ color: form.globalExperienceColor }}
                  >
                    {member.experience}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                        style={{ color: form.globalSocialIconColor }}
                        onMouseEnter={(e) => e.currentTarget.style.color = form.globalSocialIconHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = form.globalSocialIconColor}
                      >
                        <Linkedin style={{ width: form.globalSocialIconSize, height: form.globalSocialIconSize }} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                        style={{ color: form.globalSocialIconColor }}
                        onMouseEnter={(e) => e.currentTarget.style.color = form.globalSocialIconHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = form.globalSocialIconColor}
                      >
                        <Twitter style={{ width: form.globalSocialIconSize, height: form.globalSocialIconSize }} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={member.email}
                        className="hover:scale-110 transition-transform duration-200"
                        style={{ color: form.globalSocialIconColor }}
                        onMouseEnter={(e) => e.currentTarget.style.color = form.globalSocialIconHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = form.globalSocialIconColor}
                      >
                        <Mail style={{ width: form.globalSocialIconSize, height: form.globalSocialIconSize }} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${form.membersPerPage} gap-8`}>
              {form.members.map((member) => (
                <div
                  key={member.id}
                  className={`flex flex-col items-center text-center rounded-xl border ${getShadowClass(member.cardShadow || form.globalCardShadow)}`}
                  style={{
                    backgroundColor: member.cardBgColor || form.globalCardBgColor,
                    borderColor: form.globalCardBorderColor,
                    padding: form.globalCardPadding,
                  }}
                >
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-teal-300 shadow-md"
                    />
                  )}
                  <h4
                    className="text-2xl font-bold mb-1"
                    style={{ color: form.globalNameColor }}
                  >
                    {member.name}
                  </h4>
                  <p
                    className="text-lg font-medium mb-2"
                    style={{ color: form.globalRoleColor }}
                  >
                    {member.role}
                  </p>
                  <p
                    className="text-sm italic mb-4"
                    style={{ color: form.globalExperienceColor }}
                  >
                    {member.experience}
                  </p>
                  <div className="flex gap-4 mt-auto">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                        style={{ color: form.globalSocialIconColor }}
                        onMouseEnter={(e) => e.currentTarget.style.color = form.globalSocialIconHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = form.globalSocialIconColor}
                      >
                        <Linkedin style={{ width: form.globalSocialIconSize, height: form.globalSocialIconSize }} />
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:scale-110 transition-transform duration-200"
                        style={{ color: form.globalSocialIconColor }}
                        onMouseEnter={(e) => e.currentTarget.style.color = form.globalSocialIconHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = form.globalSocialIconColor}
                      >
                        <Twitter style={{ width: form.globalSocialIconSize, height: form.globalSocialIconSize }} />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={member.email}
                        className="hover:scale-110 transition-transform duration-200"
                        style={{ color: form.globalSocialIconColor }}
                        onMouseEnter={(e) => e.currentTarget.style.color = form.globalSocialIconHoverColor}
                        onMouseLeave={(e) => e.currentTarget.style.color = form.globalSocialIconColor}
                      >
                        <Mail style={{ width: form.globalSocialIconSize, height: form.globalSocialIconSize }} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* --- Submit Button --- */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 font-bold text-lg rounded-xl shadow-xl hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            <Save className="inline-block w-6 h-6 mr-2" /> Save Team Configuration
          </button>
        </div>
      </form>
    </div>
  );
}