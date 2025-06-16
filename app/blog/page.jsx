import BlogSection from '@/components/BlogSection';

export const metadata = {
  title: 'Blog – Cmplai',
  description: 'Insights and updates from the Cmplai team',
};

export default function BlogPage() {
  return (
    <section className="px-6 py-24 bg-white text-gray-800 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal-600">Our Blog</h1>
          <p className="text-gray-600 mt-2 text-lg">
            Insights, updates, and learnings from the Cmplai team
          </p>
        </div>

        <BlogSection />
      </div>
    </section>
  );
}
