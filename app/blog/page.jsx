import BlogSection from '@/components/BlogSection';

export const metadata = {
  title: 'Blog – Cmplai',
  description: 'Insights, strategies, and updates from the Cmplai team.',
};

export default function BlogPage() {
  return (
    <section className="py-24 px-6 bg-[#f9fefe] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal-600">Our Blog</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Explore expert blogs on pharma compliance, GenAI, and automation.
          </p>
        </div>
        <BlogSection />
      </div>
    </section>
  );
}
