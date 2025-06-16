'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogCard({ blog }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-teal-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <Image
        src={blog.image || '/placeholder.png'}
        alt={blog.title}
        width={600}
        height={300}
        className="object-cover w-full h-48"
      />

      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-700 mb-2">{blog.title}</h3>
        <p className="text-sm text-gray-500 mb-2">{blog.date}</p>

        <p className="text-gray-700 text-sm leading-relaxed">
          {expanded ? blog.full : blog.summary}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-teal-600 font-semibold text-sm hover:underline"
        >
          {expanded ? 'Show Less' : 'Read More →'}
        </button>
      </div>
    </div>
  );
}
