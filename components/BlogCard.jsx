'use client';
import { useState } from 'react';

export default function BlogCard({ title, summary, full }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="p-6 bg-gray-50 border rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

      <p className="text-sm text-gray-700">
        {expanded ? full : summary}
      </p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-teal-600 font-medium text-sm mt-3 hover:underline"
      >
        {expanded ? 'See Less ▲' : 'See More ▼'}
      </button>
    </div>
  );
}
