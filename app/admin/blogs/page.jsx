"use client";

import { useState } from "react";
import { Plus, Trash, UploadCloud, Eye as EyeIcon } from "lucide-react";

// BlogPreview Component for live rendering
function BlogPreview({ blogs }) {
  const defaultPlaceholderImage = "https://placehold.co/400x200/edf2f7/4a5568?text=Cmplai"; // Matches Cmplai green/gray

  return (
    <section className="py-8 bg-gray-50 rounded-lg border border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Our Blog
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          Explore expert blogs on pharma compliance, GenAI, and automation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.length === 0 ? (
            <p className="col-span-full text-center text-gray-600 text-lg py-10">
              No blog posts available. Add one using the editor above!
            </p>
          ) : (
            blogs.map((blog, index) => (
              <div
                key={index} // Using index as key is generally okay for static lists, but unique IDs are preferred for dynamic lists
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 flex flex-col"
              >
                {/* Media Section */}
                <div className="w-full h-48 bg-teal-500 flex items-center justify-center text-white text-3xl font-bold">
                  {blog.mediaURL && blog.mediaType === "image" ? (
                    <img
                      src={blog.mediaURL}
                      alt={blog.title || "Blog media"}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = defaultPlaceholderImage; }} // Fallback image
                    />
                  ) : blog.mediaURL && blog.mediaType === "video" ? (
                    <video
                      src={blog.mediaURL}
                      controls
                      className="w-full h-full object-cover"
                      onError={(e) => { console.error('Video error:', e); e.currentTarget.style.backgroundColor = '#e2e8f0'; e.currentTarget.textContent = 'Video Error'; }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    // Placeholder for when no mediaURL is set or for 'Cmplai' style
                    <span className="text-white text-3xl font-bold">Cmplai</span>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3
                    className="font-bold mb-3 leading-tight text-xl" // Added text-xl to match reference
                    style={{
                      color: blog.headingColor,
                      fontSize: blog.headingSize,
                      fontFamily: blog.headingFont,
                    }}
                  >
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{blog.date}</p> {/* Moved date below title */}
                  <p className="text-gray-700 text-base flex-grow mb-4">
                    {blog.summary}
                  </p>
                  <a href="#" className="text-teal-600 hover:text-teal-800 text-sm font-semibold transition-colors duration-200 flex items-center">
                    Read More →
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default function AdminBlogEditor() {
  const [blogs, setBlogs] = useState([
    {
      title: "Why Manual Compliance is Holding Pharma Back",
      date: "June 2025",
      mediaType: "image",
      mediaSource: "url", // 'url' or 'upload'
      mediaURL: "", // Example image URL
      uploadedFile: null, // Stores the File object for upload
      headingColor: "#0f766e", // teal-700
      headingSize: "20px", // Adjusted to match the reference image size
      headingFont: "sans-serif", // Default to sans-serif
      summary: "Manual documentation takes up over 70% of compliance teams' time. Learn why modern pharma companies are shifting to automation.",
      content: "Manual compliance processes are not just outdated — they’re a major roadblock to innovation in the pharmaceutical industry...",
    },
    {
      title: "5 Ways CmplaI Transforms Regulatory Workflows",
      date: "May 2025",
      mediaType: "image",
      mediaSource: "url",
      mediaURL: "", // Will show placeholder "Cmplai"
      uploadedFile: null,
      headingColor: "#0f766e",
      headingSize: "20px",
      headingFont: "sans-serif",
      summary: "Discover how CmplaI makes compliance faster, more accurate, and easier for teams across pharma and manufacturing.",
      content: "Detailed content for 5 ways CmplaI transforms workflows...",
    },
    {
      title: "GenAI + Compliance: A Match Made for Pharma",
      date: "April 2025",
      mediaType: "image",
      mediaSource: "url",
      mediaURL: "", // Will show placeholder "Cmplai"
      uploadedFile: null,
      headingColor: "#0f766e",
      headingSize: "20px",
      headingFont: "sans-serif",
      summary: "AI is not replacing quality teams — it's making them faster, smarter, and more valuable. Here's how GenAI enhances pharma compliance.",
      content: "Detailed content for GenAI and Compliance in Pharma...",
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
        title: "New Blog Post",
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }), // Current month and year
        mediaType: "image",
        mediaURL: "", // Starts with no image, will show "Cmplai" placeholder
        mediaSource: "url",
        uploadedFile: null,
        headingColor: "#0f766e",
        headingSize: "20px",
        headingFont: "sans-serif",
        summary: "A short summary of the new blog post.",
        content: "Write the full content of your new blog post here...",
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

  const commonInputClasses = "w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400";
  const commonSelectClasses = "w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500";
  const commonColorInputClasses = "h-10 w-full rounded-md border border-gray-300 cursor-pointer";


  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
        <EyeIcon className="inline-block w-8 h-8 mr-2 text-teal-600" /> Blog Editor Dashboard
      </h2>
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
                  className={commonInputClasses}
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
                  className={commonInputClasses}
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
                  className={commonColorInputClasses}
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
                  className={commonInputClasses}
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
                  className={commonSelectClasses}
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
                  className={commonSelectClasses}
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
                  className={commonSelectClasses}
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
                  className={commonInputClasses}
                />
              </div>
            ) : (
              <div className="pt-2">
                <label htmlFor={`file-upload-${index}`} className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2 cursor-pointer">
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

            {/* Media Preview (within editor for current item) */}
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
                className={commonInputClasses}
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
                className={commonInputClasses}
              />
            </div>
          </div>
        ))}

        {/* Add New Blog Entry button moved here */}
        <div className="flex justify-start pt-4">
          <button
            type="button"
            onClick={addBlog}
            className="text-teal-600 hover:text-teal-800 transition-colors duration-200 flex items-center gap-2 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium"
          >
            <Plus className="w-5 h-5" /> Add New Blog Entry
          </button>
        </div>


        {/* Live Preview */}
        <div className="mt-12 p-8 rounded-xl border-4 border-dashed border-gray-300 bg-gray-50 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
            <EyeIcon className="w-8 h-8 text-gray-700" /> Live Preview
          </h3>
          <BlogPreview blogs={blogs} />
        </div>


        {/* Save All Blogs button (now standalone) */}
        <div className="pt-6 text-center"> {/* Centered the save button */}
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