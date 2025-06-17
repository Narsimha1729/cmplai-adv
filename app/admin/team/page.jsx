'use client';

import { useState } from 'react';
import { Plus, Trash } from 'lucide-react';

export default function TeamEditor() {
  const [team, setTeam] = useState([
    {
      name: 'T Narsimha Murthy',
      role: 'Founder & CEO',
      experience: '5+ years of experience in pharma industry',
      image: '/tn murthy.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'mailto:narsimha@example.com',
    },
    {
      name: 'Divya Taluri',
      role: 'Chief Regulatory Officer',
      experience: '3+ years of experience in pharmaceutical compliance and quality management',
      image: '/divya taluri.jpg',
      linkedin: '#',
      twitter: '#',
      email: 'mailto:divya@example.com',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...team];
    updated[index][field] = value;
    setTeam(updated);
  };

  const handleImageUpload = (index, file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      handleChange(index, 'image', reader.result); // base64
    };
    reader.readAsDataURL(file);
  };

  const addMember = () => {
    setTeam([
      ...team,
      {
        name: '',
        role: '',
        experience: '',
        image: '',
        linkedin: '',
        twitter: '',
        email: '',
      },
    ]);
  };

  const removeMember = (index) => {
    const updated = [...team];
    updated.splice(index, 1);
    setTeam(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(team);
    alert('Team updated (demo)');
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 bg-white rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Team Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {team.map((member, i) => (
          <div key={i} className="p-6 border rounded-xl shadow-sm space-y-4 relative bg-gray-50">
            <button
              type="button"
              onClick={() => removeMember(i)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-600"
              title="Remove"
            >
              <Trash className="w-5 h-5" />
            </button>

            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              value={member.name}
              onChange={(e) => handleChange(i, 'name', e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />

            {/* Role */}
            <input
              type="text"
              placeholder="Role / Title"
              value={member.role}
              onChange={(e) => handleChange(i, 'role', e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />

            {/* Experience */}
            <textarea
              placeholder="Experience"
              value={member.experience}
              onChange={(e) => handleChange(i, 'experience', e.target.value)}
              className="w-full border px-4 py-2 rounded-md"
            />

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Profile Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) handleImageUpload(i, file);
                }}
                className="w-full text-sm border rounded px-3 py-2 file:mr-4 file:py-2 file:px-4 file:border file:rounded file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
              />
              {member.image && (
                <img
                  src={member.image}
                  alt="Preview"
                  className="mt-3 w-24 h-24 rounded-full object-cover border shadow"
                />
              )}
            </div>

            {/* Social Links */}
            <div className="grid md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="LinkedIn URL"
                value={member.linkedin}
                onChange={(e) => handleChange(i, 'linkedin', e.target.value)}
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Twitter URL"
                value={member.twitter}
                onChange={(e) => handleChange(i, 'twitter', e.target.value)}
                className="border px-4 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) => handleChange(i, 'email', e.target.value)}
                className="border px-4 py-2 rounded-md"
              />
            </div>
          </div>
        ))}

        {/* Add More Button */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={addMember}
            className="flex items-center gap-2 text-teal-600 hover:underline font-medium"
          >
            <Plus className="w-5 h-5" /> Add Team Member
          </button>
        </div>

        {/* Save Button */}
        <div className="text-right pt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90"
          >
            Save Team
          </button>
        </div>
      </form>
    </div>
  );
}
