'use client';

import { useState } from 'react';
import { Plus, Trash } from 'lucide-react';

const ICON_OPTIONS = [
  'file-text',
  'lightbulb',
  'life-buoy',
  'shield-check',
  'zap',
  'check-circle',
];

const defaultService = {
  icon: 'file-text',
  title: 'New Service',
  desc: 'Description of your service',
  color: '#0d9488',
};

export default function ServicesEditor() {
  const [services, setServices] = useState([
    {
      icon: 'file-text',
      title: 'AI-Powered Compliance Document Automation',
      desc: 'Automates compliance documents, speeding pharma and manufacturing workflows.',
      color: '#0d9488',
    },
    {
      icon: 'lightbulb',
      title: 'Regulatory-Ready Templates & Workflows',
      desc: 'Pre-built templates ensure effortless compliance with GMP, ISO, FDA standards.',
      color: '#0d9488',
    },
    {
      icon: 'life-buoy',
      title: 'End-to-End Document Lifecycle Management',
      desc: 'We streamline document lifecycle, enabling scalable, multi-industry enterprise operations.',
      color: '#0d9488',
    },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const handleAdd = () => {
    setServices([...services, { ...defaultService }]);
  };

  const handleRemove = (index) => {
    const updated = [...services];
    updated.splice(index, 1);
    setServices(updated);
  };

  const handleSave = () => {
    alert('Services saved! (Demo only)');
    console.log(services);
    // Save to database or API here
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Services Editor</h2>

      <div className="space-y-6">
        {services.map((service, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm bg-gray-50 space-y-4">
            {/* Icon Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Icon</label>
              <select
                value={service.icon}
                onChange={(e) => handleChange(index, 'icon', e.target.value)}
                className="w-full border px-3 py-2 rounded"
              >
                {ICON_OPTIONS.map((icon) => (
                  <option key={icon} value={icon}>
                    {icon}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Icon Color</label>
              <input
                type="color"
                value={service.color}
                onChange={(e) => handleChange(index, 'color', e.target.value)}
                className="w-full h-10"
              />
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Title</label>
              <input
                type="text"
                value={service.title}
                onChange={(e) => handleChange(index, 'title', e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                value={service.desc}
                onChange={(e) => handleChange(index, 'desc', e.target.value)}
                rows={3}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            {/* Delete Button */}
            <div className="text-right">
              <button
                onClick={() => handleRemove(index)}
                className="text-red-500 hover:underline text-sm flex items-center gap-1"
              >
                <Trash className="w-4 h-4" /> Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add + Save */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 text-teal-600 hover:underline"
        >
          <Plus className="w-4 h-4" /> Add Service
        </button>
        <button
          onClick={handleSave}
          className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 rounded-md shadow hover:opacity-90"
        >
          Save Services
        </button>
      </div>
    </div>
  );
}
