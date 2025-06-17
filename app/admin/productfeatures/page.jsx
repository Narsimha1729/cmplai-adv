'use client';

import { useState } from 'react';
import { Zap, ShieldCheck, FileText, Clock, CheckCircle, Users, Plus, Trash } from 'lucide-react';

const icons = {
  zap: <Zap className="w-5 h-5 text-teal-600" />,
  shield: <ShieldCheck className="w-5 h-5 text-teal-600" />,
  file: <FileText className="w-5 h-5 text-teal-600" />,
  clock: <Clock className="w-5 h-5 text-teal-600" />,
  check: <CheckCircle className="w-5 h-5 text-teal-600" />,
  users: <Users className="w-5 h-5 text-teal-600" />,
};

export default function ProductFeaturesEditor() {
  const [form, setForm] = useState({
    heading: 'Product Features',
    subheading: 'Comprehensive solutions to transform your compliance processes',
    image: '/productfeatures.webp',
    features: [
      { icon: 'zap', text: 'AI-powered document automation reducing compliance workload by 70%' },
      { icon: 'shield', text: 'Regulatory-ready templates ensuring 100% compliance with global standards' },
      { icon: 'file', text: 'End-to-end document lifecycle management with full audit trails' },
      { icon: 'clock', text: 'Reduced turnaround time from months to days' },
      { icon: 'check', text: 'Minimized manual errors and enhanced data integrity' },
      { icon: 'users', text: 'Improved resource allocation and team productivity' },
    ],
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleFeatureChange = (i, key, value) => {
    const updated = [...form.features];
    updated[i][key] = value;
    setForm({ ...form, features: updated });
  };

  const addFeature = () => {
    setForm({
      ...form,
      features: [...form.features, { icon: 'zap', text: '' }],
    });
  };

  const removeFeature = (i) => {
    const updated = [...form.features];
    updated.splice(i, 1);
    setForm({ ...form, features: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Product Features:', form);
    alert('Product Features saved (demo only)');
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow-md border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Product Features Editor</h2>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Heading */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Section Heading</label>
          <input
            value={form.heading}
            onChange={(e) => handleChange('heading', e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Subheading */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Subheading</label>
          <input
            value={form.subheading}
            onChange={(e) => handleChange('subheading', e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Image URL</label>
          <input
            value={form.image}
            onChange={(e) => handleChange('image', e.target.value)}
            className="w-full px-4 py-2 border rounded mb-2"
          />
          <img src={form.image} alt="Preview" className="w-full max-h-64 object-contain border rounded" />
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Features</h3>
          {form.features.map((f, i) => (
            <div key={i} className="flex gap-3 items-center mb-3">
              <select
                value={f.icon}
                onChange={(e) => handleFeatureChange(i, 'icon', e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="zap">Zap</option>
                <option value="shield">Shield</option>
                <option value="file">File</option>
                <option value="clock">Clock</option>
                <option value="check">Check</option>
                <option value="users">Users</option>
              </select>
              <input
                value={f.text}
                onChange={(e) => handleFeatureChange(i, 'text', e.target.value)}
                placeholder="Feature Description"
                className="flex-1 px-4 py-2 border rounded"
              />
              <button type="button" onClick={() => removeFeature(i)}>
                <Trash className="text-red-500 w-4 h-4" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addFeature}
            className="flex items-center gap-2 text-teal-600 hover:underline mt-2"
          >
            <Plus className="w-4 h-4" /> Add Feature
          </button>
        </div>

        {/* Save */}
        <div className="text-right pt-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90"
          >
            Save Product Features
          </button>
        </div>
      </form>
    </div>
  );
}
