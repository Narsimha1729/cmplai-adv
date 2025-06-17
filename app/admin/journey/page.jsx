'use client';

import { useState } from 'react';
import { Trash, Plus } from 'lucide-react';

export default function JourneyEditor() {
  const [form, setForm] = useState({
    title: 'Our Journey',
    subtitle: 'Key milestones in our growth story',
    titleColor: '#00b4bc',
    subtitleColor: '#4b5563',
    backgroundColor: '#f1fcfc',
    font: 'sans-serif',
    titleSize: '36px',
    subtitleSize: '16px',
    milestones: [
      {
        date: 'November 2024',
        title: 'Company Registration',
        description: 'LN Infosphere TechTransformers Pvt Ltd officially registered',
        side: 'right',
      },
    ],
  });

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const updateMilestone = (i, key, value) => {
    const updated = [...form.milestones];
    updated[i][key] = value;
    setForm({ ...form, milestones: updated });
  };

  const addMilestone = () => {
    setForm({
      ...form,
      milestones: [
        ...form.milestones,
        {
          date: '',
          title: '',
          description: '',
          side: 'right',
        },
      ],
    });
  };

  const removeMilestone = (i) => {
    const updated = [...form.milestones];
    updated.splice(i, 1);
    setForm({ ...form, milestones: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saved Journey:', form);
    alert('Journey section saved (demo only)');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Journey Section Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Title */}
        <div>
          <label className="font-semibold">Title</label>
          <input
            value={form.title}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full border px-4 py-2 rounded mt-1"
          />
          <div className="grid grid-cols-3 gap-4 mt-2">
            <input
              type="color"
              value={form.titleColor}
              onChange={(e) => handleChange('titleColor', e.target.value)}
            />
            <select
              value={form.font}
              onChange={(e) => handleChange('font', e.target.value)}
              className="border px-2 py-1"
            >
              <option value="sans-serif">Sans</option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="'Poppins', sans-serif">Poppins</option>
            </select>
            <input
              type="number"
              value={parseInt(form.titleSize)}
              onChange={(e) => handleChange('titleSize', e.target.value + 'px')}
              placeholder="Font size"
              className="border px-2"
            />
          </div>
        </div>

        {/* Subtitle */}
        <div>
          <label className="font-semibold">Subtitle</label>
          <input
            value={form.subtitle}
            onChange={(e) => handleChange('subtitle', e.target.value)}
            className="w-full border px-4 py-2 rounded mt-1"
          />
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="color"
              value={form.subtitleColor}
              onChange={(e) => handleChange('subtitleColor', e.target.value)}
            />
            <input
              type="number"
              value={parseInt(form.subtitleSize)}
              onChange={(e) => handleChange('subtitleSize', e.target.value + 'px')}
              placeholder="Font size"
              className="border px-2"
            />
          </div>
        </div>

        {/* Background Color */}
        <div>
          <label className="font-semibold">Background Color</label>
          <input
            type="color"
            value={form.backgroundColor}
            onChange={(e) => handleChange('backgroundColor', e.target.value)}
            className="h-10 w-24"
          />
        </div>

        {/* Milestone Cards */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Milestones</h3>
          {form.milestones.map((milestone, i) => (
            <div key={i} className="bg-gray-50 border p-4 mb-4 rounded relative">
              <button
                onClick={() => removeMilestone(i)}
                type="button"
                className="absolute top-2 right-2 text-red-500"
              >
                <Trash className="w-4 h-4" />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  value={milestone.date}
                  onChange={(e) => updateMilestone(i, 'date', e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Date"
                />
                <select
                  value={milestone.side}
                  onChange={(e) => updateMilestone(i, 'side', e.target.value)}
                  className="border px-2 py-2 rounded"
                >
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
                <input
                  value={milestone.title}
                  onChange={(e) => updateMilestone(i, 'title', e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Title"
                />
                <textarea
                  value={milestone.description}
                  onChange={(e) => updateMilestone(i, 'description', e.target.value)}
                  className="w-full px-4 py-2 border rounded"
                  placeholder="Description"
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addMilestone}
            className="text-teal-600 flex items-center gap-2 mt-2 hover:underline"
          >
            <Plus className="w-4 h-4" /> Add Milestone
          </button>
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90"
          >
            Save Journey
          </button>
        </div>
      </form>
    </div>
  );
}
