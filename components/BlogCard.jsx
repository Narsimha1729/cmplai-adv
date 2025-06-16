'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function BlogCard({ blog, isExpanded, onExpand }) {
  return (
    <div
      className={`bg-white border rounded-xl overflow-hidden shadow transition-all duration-300 ${
        isExpanded ? 'col-span-full' : ''
      }`}
    >
      <div className="relative w-full h-48 sm:h-64">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-400 mb-1">{blog.date}</p>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
          {isExpanded ? blog.full : blog.summary}
        </p>

        <button
          onClick={() => onExpand(blog.id)}
          className="text-teal-600 mt-4 font-semibold text-sm hover:underline"
        >
          {isExpanded ? 'Show Less ▲' : 'Read More →'}
        </button>
      </div>
    </div>
  );
}
