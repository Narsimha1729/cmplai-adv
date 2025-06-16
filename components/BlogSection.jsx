'use client';
import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    title: 'Why Compliance Automation is the Future',
    date: 'June 2025',
    image: '/blog1.webp',
    summary: 'Discover how AI-driven compliance is changing the pharmaceutical and manufacturing world.',
    link: '#',
  },
  {
    id: 2,
    title: 'Top 5 Benefits of Using Cmplai',
    date: 'May 2025',
    image: '/blog2.webp',
    summary: 'Save time, reduce errors, and stay audit-ready — learn how Cmplai drives efficiency.',
    link: '#',
  },
  {
    id: 3,
    title: 'Inside Our Tech Stack: How Cmplai is Built',
    date: 'April 2025',
    image: '/blog3.webp',
    summary: 'From GenAI to cloud-native architecture, here’s what powers our platform.',
    link: '#',
  },
];

export default function BlogSection() {
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
  );
}
