"use client";

import { useState } from "react";
import { Plus, Trash } from "lucide-react";

export default function AdminBlogEditor() {
  const [blogs, setBlogs] = useState([
    {
      title: "Why Manual Compliance is Holding Pharma Back",
      date: "June 2025",
      mediaType: "image",
      mediaURL: "/placeholder.png",
      headingColor: "#0f766e",
      headingSize: "32px",
      headingFont: "sans-serif",
      summary:
        "Manual documentation takes up over 70% of compliance teams' time. Learn why modern pharma companies are shifting to automation.",
      content: `Manual compliance processes are not just outdated — they’re a major roadblock to innovation in the pharmaceutical industry.

From SOPs to validation reports, every document demands hours of human effort and cross-checking. This not only increases the risk of errors but also slows down your ability to respond to audits, change controls, and global regulatory updates.`,
    },
  ]);

  const handleChange = (index, field, value) => {
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
        mediaType: "image",
        mediaURL: "",
        headingColor: "#0f766e",
        headingSize: "32px",
        headingFont: "sans-serif",
        summary: "",
        content: "",
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
    console.log("Saved blogs:", blogs);
    alert("Blogs saved successfully (demo)");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-6">Blog Editor Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-[#f9fefe] p-6 border border-teal-200 rounded-lg shadow-sm space-y-4"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold text-gray-800">
                ✏️ Blog #{index + 1}
              </h3>
              <button
                type="button"
                onClick={() => removeBlog(index)}
                className="text-red-600 text-sm"
              >
                <Trash className="inline-block w-4 h-4" /> Remove
              </button>
            </div>

            {/* Title + Date */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Blog Title"
                value={blog.title}
                onChange={(e) => handleChange(index, "title", e.target.value)}
                className="border px-4 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Blog Date (e.g., June 2025)"
                value={blog.date}
                onChange={(e) => handleChange(index, "date", e.target.value)}
                className="border px-4 py-2 rounded w-full"
              />
            </div>

            {/* Heading Styling */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-600">Heading Color</label>
                <input
                  type="color"
                  value={blog.headingColor}
                  onChange={(e) =>
                    handleChange(index, "headingColor", e.target.value)
                  }
                  className="h-10 w-20"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Heading Size</label>
                <input
                  type="number"
                  value={parseInt(blog.headingSize)}
                  onChange={(e) =>
                    handleChange(index, "headingSize", `${e.target.value}px`)
                  }
                  className="w-full border rounded px-3 py-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600">Font</label>
                <select
                  value={blog.headingFont}
                  onChange={(e) =>
                    handleChange(index, "headingFont", e.target.value)
                  }
                  className="w-full border rounded px-3 py-1"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>
            </div>

            {/* Media Selection */}
            <div className="space-y-2">
              <label className="text-sm text-gray-600 font-semibold">Media</label>
              <select
                value={blog.mediaType}
                onChange={(e) => handleChange(index, "mediaType", e.target.value)}
                className="w-full border px-3 py-2 rounded"
              >
                <option value="image">Image</option>
                <option value="video">Video</option>
              </select>
              <input
                type="text"
                placeholder="Image or Video URL"
                value={blog.mediaURL}
                onChange={(e) => handleChange(index, "mediaURL", e.target.value)}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            {/* Preview Media */}
            {blog.mediaURL &&
              (blog.mediaType === "image" ? (
                <img
                  src={blog.mediaURL}
                  alt="Preview"
                  className="rounded-md w-full h-64 object-cover mt-2"
                />
              ) : (
                <video
                  src={blog.mediaURL}
                  controls
                  className="rounded-md w-full mt-2"
                />
              ))}

            {/* Summary */}
            <div>
              <label className="text-sm text-gray-700 font-semibold">Summary</label>
              <textarea
                value={blog.summary}
                onChange={(e) => handleChange(index, "summary", e.target.value)}
                rows={3}
                className="w-full border px-4 py-2 rounded"
              />
            </div>

            {/* Content */}
            <div>
              <label className="text-sm text-gray-700 font-semibold">
                Full Blog Content
              </label>
              <textarea
                value={blog.content}
                onChange={(e) => handleChange(index, "content", e.target.value)}
                rows={6}
                className="w-full border px-4 py-2 rounded"
              />
            </div>
          </div>
        ))}

        {/* Add Button + Submit */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={addBlog}
            className="text-teal-600 hover:underline flex items-center gap-1"
          >
            <Plus className="w-4 h-4" /> Add New Blog
          </button>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-6 py-3 rounded-md hover:opacity-90 shadow-md transition"
          >
            Save All Blogs
          </button>
        </div>
      </form>
    </div>
  );
}
