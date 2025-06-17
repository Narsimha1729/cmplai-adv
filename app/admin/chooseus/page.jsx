'use client';

import { useState } from 'react';
import { Plus, Trash } from 'lucide-react';

export default function ChooseUsEditor() {
  const [form, setForm] = useState({
    sectionTitle: 'Why Choose Us?',
    sectionDesc: 'Discover how Cmplai transforms compliance processes',
    titleColor: '#0f766e',
    titleSize: '36px',
    descColor: '#4b5563',
    descSize: '18px',

    iconColor: '#0f766e',
    bgColor: '#ffffff',

    points: [
      {
        icon: 'Sparkles',
        title: 'Industry-First GenAI Automation',
        desc: 'Comply revolutionizes compliance by automating document preparation, reducing turnaround time for critical workflows from <strong>3 months</strong> to just <strong>3 days</strong>...',
      },
      {
        icon: 'Target',
        title: 'Purpose-Built for Pharma & Manufacturing',
        desc: 'We deliver <strong>pre-built templates</strong> and compliance logic tailored to <strong>GMP</strong>, <strong>ISO</strong>, and more...',
      },
      {
        icon: 'Globe2',
        title: 'Empowering Your Workforce',
        desc: 'We reduce <strong>manual tasks</strong>, allowing your teams to focus on <strong>innovation</strong> and quality...',
      },
    ],
  });

  const handleChange = (field, value) => setForm({ ...form, [field]: value });

  const updatePoint = (i, field, value) => {
    const updated = [...form.points];
    updated[i][field] = value;
    setForm({ ...form, points: updated });
  };

  const removePoint = (i) => {
    const updated = [...form.points];
    updated.splice(i, 1);
    setForm({ ...form, points: updated });
  };

  const addPoint = () => {
    setForm({
      ...form,
      points: [
        ...form.points,
        {
          icon: 'Sparkles',
          title: '',
          desc: '',
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Saved ChooseUs section (demo only)');
    console.log(form);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Choose Us – Admin Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Section Title */}
        <div>
          <label className="font-semibold">Section Title</label>
          <input
            type="text"
            value={form.sectionTitle}
            onChange={(e) => handleChange('sectionTitle', e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <input type="color" value={form.titleColor} onChange={(e) => handleChange('titleColor', e.target.value)} />
            <input
              type="number"
              value={parseInt(form.titleSize)}
              onChange={(e) => handleChange('titleSize', e.target.value + 'px')}
              placeholder="Font size"
              className="border p-1 rounded"
            />
          </div>
        </div>

        {/* Section Description */}
        <div>
          <label className="font-semibold">Subtitle</label>
          <input
            type="text"
            value={form.sectionDesc}
            onChange={(e) => handleChange('sectionDesc', e.target.value)}
            className="w-full mt-1 p-2 border rounded"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
            <input type="color" value={form.descColor} onChange={(e) => handleChange('descColor', e.target.value)} />
            <input
              type="number"
              value={parseInt(form.descSize)}
              onChange={(e) => handleChange('descSize', e.target.value + 'px')}
              placeholder="Font size"
              className="border p-1 rounded"
            />
          </div>
        </div>

        {/* Background & Icon Color */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Background Color</label>
            <input
              type="color"
              value={form.bgColor}
              onChange={(e) => handleChange('bgColor', e.target.value)}
              className="w-20 h-10"
            />
          </div>
          <div>
            <label className="font-semibold">Icon Color</label>
            <input
              type="color"
              value={form.iconColor}
              onChange={(e) => handleChange('iconColor', e.target.value)}
              className="w-20 h-10"
            />
          </div>
        </div>

        {/* Cards */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Points</h3>
          {form.points.map((point, i) => (
            <div key={i} className="mb-6 border rounded p-4 bg-gray-50 relative">
              <button
                type="button"
                className="absolute top-2 right-2 text-red-500"
                onClick={() => removePoint(i)}
              >
                <Trash className="w-4 h-4" />
              </button>
              <label className="text-sm font-medium">Icon</label>
              <select
                value={point.icon}
                onChange={(e) => updatePoint(i, 'icon', e.target.value)}
                className="w-full border rounded p-2 mb-2"
              >
                <option value="Sparkles">Sparkles</option>
                <option value="Target">Target</option>
                <option value="Globe2">Globe2</option>
                {/* Add more Lucide icons if needed */}
              </select>

              <label className="text-sm font-medium">Title</label>
              <input
                type="text"
                value={point.title}
                onChange={(e) => updatePoint(i, 'title', e.target.value)}
                className="w-full border rounded p-2 mb-2"
              />

              <label className="text-sm font-medium">Description (supports HTML)</label>
              <textarea
                rows={3}
                value={point.desc}
                onChange={(e) => updatePoint(i, 'desc', e.target.value)}
                className="w-full border rounded p-2"
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addPoint}
            className="flex items-center gap-2 text-teal-600 hover:underline mt-2"
          >
            <Plus className="w-4 h-4" /> Add More
          </button>
        </div>

        {/* Save */}
        <div className="text-right pt-6">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-6 py-3 font-semibold rounded-md hover:opacity-90"
          >
            Save Section
          </button>
        </div>
      </form>
    </div>
  );
}
