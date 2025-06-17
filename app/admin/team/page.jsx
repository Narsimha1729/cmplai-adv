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
      linkedin: 'https://linkedin.com/in/narsimha',
      twitter: 'https://twitter.com/narsimha',
      email: 'narsimha@example.com',
    },
    {
      name: 'Divya Taluri',
      role: 'Chief Regulatory Officer',
      experience: '3+ years of experience in pharmaceutical compliance and quality management',
      image: '/divya taluri.jpg',
      linkedin: 'https://linkedin.com/in/divya',
      twitter: 'https://twitter.com/divya',
      email: 'divya@example.com',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...team];
    updated[index][field] = value;
    setTeam(updated);
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
    console.log('Submitted Team Data:', team);
    alert('Team data saved (demo only)');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Team Section Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {team.map((member, i) => (
          <div key={i} className="p-4 border border-teal-100 rounded-lg shadow-sm space-y-4 bg-[#f9fefe]">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-gray-700">Team Member {i + 1}</h3>
              <button type="button" onClick={() => removeMember(i)}>
                <Trash className="text-red-500 w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={member.name}
                onChange={(e) => handleChange(i, 'name', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Role"
                value={member.role}
                onChange={(e) => handleChange(i, 'role', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Experience"
                value={member.experience}
                onChange={(e) => handleChange(i, 'experience', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Image URL"
                value={member.image}
                onChange={(e) => handleChange(i, 'image', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="LinkedIn URL"
                value={member.linkedin}
                onChange={(e) => handleChange(i, 'linkedin', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="text"
                placeholder="Twitter URL"
                value={member.twitter}
                onChange={(e) => handleChange(i, 'twitter', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) => handleChange(i, 'email', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addMember}
          className="flex items-center gap-2 text-teal-600 hover:underline"
        >
          <Plus className="w-4 h-4" /> Add New Member
        </button>

        <div className="text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90"
          >
            Save Team Section
          </button>
        </div>
      </form>
    </div>
  );
}
