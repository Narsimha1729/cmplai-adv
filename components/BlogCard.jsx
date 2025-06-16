'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogCard({ blog, expandedId, setExpandedId }) {
  const isExpanded = expandedId === blog.id;

  return (
    <div
      className={`bg-white rounded-xl shadow-md border border-teal-100 overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isExpanded ? 'col-span-full' : ''
      }`}
    >
      {/* Image */}
      {blog.image && (
        <Image
          src={blog.image || '/placeholder.png'}
          alt={blog.title}
          width={600}
          height={300}
          className="w-full h-48 object-cover"
        />
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-teal-700 mb-1">{blog.title}</h3>
        <p className="text-sm text-gray-500 mb-3">{blog.date}</p>

        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {isExpanded ? blog.full : blog.summary}
        </p>

        <button
          onClick={() => setExpandedId(isExpanded ? null : blog.id)}
          className="mt-4 text-teal-600 font-semibold text-sm hover:underline"
        >
          {isExpanded ? 'Show Less' : 'Read More →'}
        </button>
      </div>
    </div>
  );
}
