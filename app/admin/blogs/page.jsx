"use client";

import { useState } from "react";
import { Plus, Trash, UploadCloud } from "lucide-react"; // Assuming lucide-react is installed

export default function AdminBlogEditor() {
  const [blogs, setBlogs] = useState([
    {
      title: "Why Manual Compliance is Holding Pharma Back",
      date: "June 2025",
      mediaType: "image",
      mediaSource: "url", // 'url' or 'upload'
      mediaURL: "/placeholder.png",
      uploadedFile: null, // Stores the File object for upload
      headingColor: "#0f766e",
      headingSize: "32px",
      headingFont: "sans-serif",
      summary: "Manual documentation takes up over 70% of compliance teams' time. Learn why modern pharma companies are shifting to automation.",
      content: "Manual compliance processes are not just outdated — they’re a major roadblock to innovation in the pharmaceutical industry...",
    },
  ]);

  // Handle changes for a specific field in a specific blog entry
  const handleChange = (index, field, value) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index][field] = value;
    setBlogs(updatedBlogs);
  };

  // Handle file uploads for media
  const handleFileUpload = (index, file) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index].uploadedFile = file;
    updatedBlogs[index].mediaURL = URL.createObjectURL(file); // Create a temporary URL for preview
    setBlogs(updatedBlogs);
  };

  // Add a new blank blog entry
  const addBlog = () => {
    setBlogs((prevBlogs) => [
      ...prevBlogs,
      {
        title: "",
        date: "",
        mediaType: "image",
        mediaURL: "",
        mediaSource: "url",
        uploadedFile: null,
        headingColor: "#0f766e",
        headingSize: "32px",
        headingFont: "sans-serif",
        summary: "",
        content: "",
      },
    ]);
  };

  // Remove a blog entry by index
  const removeBlog = (index) => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Are you sure you want to remove this blog entry?")) {
      const updatedBlogs = [...blogs];
      updatedBlogs.splice(index, 1);
      setBlogs(updatedBlogs);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving blogs:", blogs);
    // In a real application, you'd send 'blogs' data to a backend API here.
    // Also, handle actual file uploads (e.g., to S3 or a local server) for `uploadedFile`.
    // eslint-disable-next-line no-alert
    alert("✅ Blogs saved successfully (demo only)");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-8">Blog Editor Dashboard</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {blogs.map((blog, index) => (
          <div
            key={index} // Using index as key is generally okay for static lists, but unique IDs are preferred for dynamic lists
            className="bg-[#f9fefe] p-7 border border-teal-200 rounded-lg shadow-sm space-y-6"
          >
            {/* Blog Entry Header with Remove Button */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-teal-100">
              <h3 className="text-xl font-semibold text-gray-800">
                <span className="mr-2">📝</span> Blog Entry #{index + 1}
              </h3>
              <button
                type="button"
                onClick={() => removeBlog(index)}
                className="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium bg-red-50/50 hover:bg-red-100"
                aria-label={`Remove Blog Entry ${index + 1}`}
              >
                <Trash className="w-4 h-4" /> Remove
              </button>
            </div>

            {/* Title and Date Inputs */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor={`title-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Blog Title
                </label>
                <input
                  id={`title-${index}`}
                  type="text"
                  placeholder="e.g., The Future of AI in Compliance"
                  value={blog.title}
                  onChange={(e) => handleChange(index, "title", e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-md w-full text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
              </div>
              <div>
                <label htmlFor={`date-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Publication Date
                </label>
                <input
                  id={`date-${index}`}
                  type="text"
                  placeholder="e.g., June 17, 2025"
                  value={blog.date}
                  onChange={(e) => handleChange(index, "date", e.target.value)}
                  className="border border-gray-300 px-4 py-2 rounded-md w-full text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Heading Styling Options */}
            <div className="grid md:grid-cols-3 gap-6 pt-2">
              <div>
                <label htmlFor={`headingColor-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Heading Color
                </label>
                <input
                  id={`headingColor-${index}`}
                  type="color"
                  value={blog.headingColor}
                  onChange={(e) => handleChange(index, "headingColor", e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                  title="Choose Heading Color"
                />
              </div>
              <div>
                <label htmlFor={`headingSize-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Heading Size (px)
                </label>
                <input
                  id={`headingSize-${index}`}
                  type="number"
                  value={parseInt(blog.headingSize, 10)} // Ensure integer for display
                  onChange={(e) => handleChange(index, "headingSize", `${e.target.value}px`)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  placeholder="e.g., 32"
                  aria-label="Heading Font Size in Pixels"
                />
              </div>
              <div>
                <label htmlFor={`headingFont-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Heading Font
                </label>
                <select
                  id={`headingFont-${index}`}
                  value={blog.headingFont}
                  onChange={(e) => handleChange(index, "headingFont", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Heading Font Family"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Inter', sans-serif">Inter</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>
            </div>

            {/* Media Type & Source Selection */}
            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div>
                <label htmlFor={`mediaType-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Media Type
                </label>
                <select
                  id={`mediaType-${index}`}
                  value={blog.mediaType}
                  onChange={(e) => handleChange(index, "mediaType", e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>

              <div>
                <label htmlFor={`mediaSource-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Media Source
                </label>
                <select
                  id={`mediaSource-${index}`}
                  value={blog.mediaSource}
                  onChange={(e) => handleChange(index, "mediaSource", e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="url">External URL</option>
                  <option value="upload">Upload File</option>
                </select>
              </div>
            </div>

            {/* URL or Upload Input based on mediaSource */}
            {blog.mediaSource === "url" ? (
              <div className="pt-2">
                <label htmlFor={`mediaURL-${index}`} className="sr-only">Media URL</label>
                <input
                  id={`mediaURL-${index}`}
                  type="text"
                  placeholder={blog.mediaType === "image" ? "Image URL (e.g., https://example.com/image.jpg)" : "Video URL (e.g., https://example.com/video.mp4)"}
                  value={blog.mediaURL}
                  onChange={(e) => handleChange(index, "mediaURL", e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                />
              </div>
            ) : (
              <div className="pt-2">
                <label htmlFor={`file-upload-${index}`} className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2 cursor-pointer">
                  <UploadCloud className="w-4 h-4 text-teal-600" />
                  Upload {blog.mediaType === "image" ? "Image" : "Video"}
                </label>
                <input
                  id={`file-upload-${index}`}
                  type="file"
                  accept={blog.mediaType === "image" ? "image/*" : "video/*"}
                  onChange={(e) => handleFileUpload(index, e.target.files[0])}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                />
                {blog.uploadedFile && (
                  <p className="text-xs text-gray-500 mt-1">Selected: {blog.uploadedFile.name}</p>
                )}
              </div>
            )}

            {/* Media Preview */}
            {blog.mediaURL && (
              <div className="mt-4 border border-gray-200 rounded-md overflow-hidden bg-gray-50 flex items-center justify-center">
                {blog.mediaType === "image" ? (
                  <img
                    src={blog.mediaURL}
                    alt="Media Preview"
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <video
                    src={blog.mediaURL}
                    controls
                    className="w-full max-h-[300px] object-contain"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}

            {/* Summary Textarea */}
            <div>
              <label htmlFor={`summary-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Summary (Short Description)
              </label>
              <textarea
                id={`summary-${index}`}
                value={blog.summary}
                onChange={(e) => handleChange(index, "summary", e.target.value)}
                rows={3}
                placeholder="A brief overview of the blog post content."
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              />
            </div>

            {/* Full Blog Content Textarea */}
            <div>
              <label htmlFor={`content-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                Full Blog Content
              </label>
              <textarea
                id={`content-${index}`}
                value={blog.content}
                onChange={(e) => handleChange(index, "content", e.target.value)}
                rows={8} // Increased rows for more content
                placeholder="Write the full content of your blog post here..."
                className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
              />
            </div>
          </div>
        ))}

        {/* Action Buttons: Add Blog and Save All */}
        <div className="flex justify-between items-center pt-6">
          <button
            type="button"
            onClick={addBlog}
            className="text-teal-600 hover:text-teal-800 transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium"
          >
            <Plus className="w-5 h-5" /> Add New Blog Entry
          </button>

          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Save All Blogs
          </button>
        </div>
      </form>
    </div>
  );
}