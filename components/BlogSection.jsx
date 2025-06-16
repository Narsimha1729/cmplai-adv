'use client';
import { useState } from 'react';
import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    title: 'Why Compliance Automation is the Future',
    date: 'June 2025',
    image: '/blog1.webp',
    summary: 'Discover how AI-driven compliance is changing the pharma world...',
    full: `In the rapidly evolving pharmaceutical industry, manual compliance processes are no longer sustainable.\n\nCmplai leverages GenAI to automate documentation, minimize errors, and ensure consistent regulatory readiness across plants.`,
  },
  {
    id: 2,
    title: 'Top 5 Benefits of Using Cmplai',
    date: 'May 2025',
    image: '/blog2.webp',
    summary: 'Explore the top advantages Cmplai delivers to its partners...',
    full: `From reduced documentation time to higher audit pass rates, Cmplai is built for performance.\n\nOur platform supports ISO, FDA, and GMP standards, giving you unmatched speed and reliability.`,
  },
  {
    id: 3,
    title: 'Inside Our Tech Stack',
    date: 'April 2025',
    image: '/blog3.webp',
    summary: 'A sneak peek at the technology behind Cmplai’s powerful AI engine...',
    full: `Cmplai runs on a scalable GenAI stack, with secure APIs, compliance-ready databases, and cutting-edge automation libraries.\n\nWe're building not just for today — but for the future of regulatory innovation.`,
  },
];

export default function BlogSection() {
  const [expandedId, setExpandedId] = useState(null);

  const handleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="grid md:grid-cols-2 gap-10">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          isExpanded={expandedId === blog.id}
          onExpand={handleExpand}
        />
      ))}
    </div>
  );
}
