import BlogCard from './BlogCard';

const blogs = [
  {
    id: 1,
    title: 'Why Manual Compliance is Holding Pharma Back',
    date: 'June 2025',
    image: '/placeholder.png',
    summary: 'Manual documentation takes up over 70% of compliance teams\' time. Learn why modern pharma companies are shifting to automation.',
    full: `Manual compliance processes are not just outdated — they’re a major roadblock to innovation in the pharmaceutical industry.

From SOPs to validation reports, every document demands hours of human effort and cross-checking. This not only increases the risk of errors but also slows down your ability to respond to audits, change controls, and global regulatory updates.

With Cmplai’s AI-driven platform, companies reduce document preparation time by 70%, ensure audit readiness in real-time, and free up compliance teams to focus on strategic quality initiatives.

The future of pharma belongs to those who automate — not those who manually survive.`,
  },
  {
    id: 2,
    title: '5 Ways Cmplai Transforms Regulatory Workflows',
    date: 'May 2025',
    image: '/placeholder.png',
    summary: 'Discover how Cmplai makes compliance faster, more accurate, and easier for teams across pharma and manufacturing.',
    full: `Regulatory teams spend most of their time preparing, reviewing, and maintaining documents — not improving them.

Cmplai changes that with:

1. AI-powered templating that auto-generates reports  
2. Pre-built logic aligned to GMP, ISO, and US-FDA  
3. Version control and real-time collaboration  
4. Audit trails and digital signatures  
5. Smart dashboards that highlight gaps

Instead of just managing documentation, you now manage outcomes — with full confidence that every file is compliant, complete, and secure.`,
  },
  {
    id: 3,
    title: 'GenAI + Compliance: A Match Made for Pharma',
    date: 'April 2025',
    image: '/placeholder.png',
    summary: 'AI is not replacing quality teams — it’s making them faster, smarter, and more valuable. Here’s how GenAI enhances pharma compliance.',
    full: `In highly regulated industries, AI isn’t a shortcut — it’s a safety net.

Cmplai integrates GenAI to generate accurate documentation based on predefined logic and templates, validate inputs in real-time, and reduce human errors across SOPs, CAPAs, and batch records.

What makes GenAI powerful is not automation alone — it’s the ability to learn, adapt, and suggest improvements based on compliance history.

With Cmplai, your documents aren’t just compliant — they’re intelligent.`,
  },
];

export default function BlogSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}
