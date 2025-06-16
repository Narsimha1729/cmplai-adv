import BlogSection from '@/components/BlogSection';

export const metadata = {
  title: 'Blog – Cmplai',
  description: 'Insights and updates from the Cmplai team',
};

export default function BlogPage() {
  return (
    <section className="py-24 px-6 bg-[#f9fefe] text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-teal-600">Our Blog</h1>
          <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
            Industry insights, product news, and expert compliance strategies from the Cmplai team.
          </p>
        </div>

        <BlogSection />
      </div>
    </section>
  );
}
