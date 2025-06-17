'use client';
import { useState } from 'react';

export default function HomeEditor() {
  const [heading, setHeading] = useState('Transforming the future of Compliance');
  const [subheading, setSubheading] = useState('AI-powered compliance platform');

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-teal-600">Edit Home Section</h1>

      <label className="block mb-4">
        <span className="block text-gray-700 mb-2">Main Heading</span>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </label>

      <label className="block mb-6">
        <span className="block text-gray-700 mb-2">Subheading</span>
        <input
          type="text"
          value={subheading}
          onChange={(e) => setSubheading(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </label>

      <button className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-cyan-600">
        Save Changes
      </button>
    </div>
  );
}
