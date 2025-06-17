"use client";

import { useState } from "react";
import { Plus, Trash } from "lucide-react";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState([
    {
      title: "Why Manual Compliance is Holding Pharma Back",
      date: "June 2025",
      image: "/placeholder.png",
      summary:
        "Manual documentation takes up over 70% of compliance teams' time. Learn why modern pharma companies are shifting to automation.",
      full: `Manual compliance processes are not just outdated — they’re a major roadblock to innovation in the pharmaceutical industry.

From SOPs to validation reports, every document demands hours of human effort and cross-checking. This not only increases the risk of errors but also slows down your ability to respond to audits, change controls, and global regulatory updates.`,
    },
  ]);

  const handleBlogChange = (index, field, value) => {
    const updated = [...blogs];
    updated[index][field] = value;
    setBlogs(updated);
  };

  const addBlog = () => {
    setBlogs([
      ...blogs,
      {
        title: "",
        date: "",
        image: "",
        summary: "",
        full: "",
      },
    ]);
  };

  const removeBlog = (index) => {
    const updated = [...blogs];
    updated.splice(index, 1);
    setBlogs(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Blogs Saved:", blogs);
    alert("Blogs saved successfully (Demo)");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white border border-teal-100 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">📝 Blog Manager</h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {blogs.map((blog, i) => (
          <div key={i} className="border border-gray-200 p-6 rounded-md shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Blog #{i + 1}</h3>
              <button
                type="button"
                onClick={() => removeBlog(i)}
                className="text-red-500 hover:underline"
              >
                <Trash className="w-4 h-4 inline-block" /> Remove
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={blog.title}
                onChange={(e) => handleBlogChange(i, "title", e.target.value)}
                className="border px-4 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Date (e.g., May 2025)"
                value={blog.date}
                onChange={(e) => handleBlogChange(i, "date", e.target.value)}
                className="border px-4 py-2 rounded w-full"
              />
            </div>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Image URL (optional)"
                value={blog.image}
                onChange={(e) => handleBlogChange(i, "image", e.target.value)}
                className="border px-4 py-2 rounded w-full"
              />
            </div>

            <div className="mt-4">
              <textarea
                placeholder="Short Summary"
                value={blog.summary}
                onChange={(e) => handleBlogChange(i, "summary", e.target.value)}
                rows={3}
                className="border px-4 py-2 rounded w-full"
              />
            </div>

            <div className="mt-4">
              <textarea
                placeholder="Full Blog Content"
                value={blog.full}
                onChange={(e) => handleBlogChange(i, "full", e.target.value)}
                rows={5}
                className="border px-4 py-2 rounded w-full"
              />
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={addBlog}
            className="flex items-center gap-2 text-teal-600 hover:text-cyan-600 font-medium"
          >
            <Plus className="w-4 h-4" /> Add New Blog
          </button>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md shadow-md hover:opacity-90 transition"
          >
            💾 Save Blogs
          </button>
        </div>
      </form>
    </div>
  );
}
