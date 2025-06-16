'use client';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 1,
    title: 'Why Compliance Automation is the Future',
    summary: 'Discover why companies are turning to AI for compliance management...',
    full: 'In the rapidly evolving pharmaceutical and manufacturing sectors, manual compliance documentation is becoming obsolete...',
  },
  {
    id: 2,
    title: 'Top 5 Benefits of Using Cmplai',
    summary: 'Explore the top advantages our clients experience using our platform...',
    full: 'Our platform not only accelerates document creation but also enables smarter workforce allocation...',
  },
];

export default function BlogSection() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          summary={post.summary}
          full={post.full}
        />
      ))}
    </div>
  );
}
