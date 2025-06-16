'use client';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'Why Compliance Automation is the Future',
    summary: 'Discover why companies are turning to AI for compliance management...',
    full: `In the rapidly evolving pharmaceutical and manufacturing sectors...`,
  },
  {
    id: 2,
    title: 'Top 5 Benefits of Using Cmplai',
    summary: 'Explore the top advantages our clients experience using our platform...',
    full: `Our platform not only accelerates document creation...`,
  },
];

export default function BlogSection() {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (id) => {
    setExpandedPost((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-gray-50 border hover:border-teal-400 p-6 rounded-xl shadow-sm transition"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {post.title}
          </h2>
          <p className="text-sm text-gray-700 mb-3">
            {expandedPost === post.id ? post.full : post.summary}
          </p>
          <button
            onClick={() => togglePost(post.id)}
            className="text-teal-600 hover:underline font-semibold text-sm"
          >
            {expandedPost === post.id ? 'See Less ▲' : 'See More ▼'}
          </button>
        </div>
      ))}
    </div>
  );
}
