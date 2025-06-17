'use client';

import { useState } from "react";
import { Trash, Plus, Image as ImageIcon } from "lucide-react"; // Import Image for better icon display

export default function ChallengesEditor() {
  const [form, setForm] = useState({
    sectionTitle: "Challenges We Address",
    sectionDesc: "Common compliance pain points faced by pharmaceutical and manufacturing industries.",
    titleColor: "#0f766e",
    descColor: "#4b5563",
    titleFont: "sans-serif",
    titleSize: "32px",
    descFont: "sans-serif",
    descSize: "16px",
    bgColor: "#f9fafb", // Background color for the entire section

    challenges: [
      {
        image: "", // This field seems unused, assuming iconPreview/iconFile replace it
        title: "Manual, Error-Prone Processes",
        desc: "Managing thousands of documents manually leads to errors, inefficiencies, and risks.",
        iconPreview: "", // URL for displaying the uploaded image
        iconFile: null, // Stores the actual File object
        font: "sans-serif", // Font for the challenge item's text
        size: "16px", // Size for the challenge item's text
        color: "#374151", // Color for the challenge item's text
      },
    ],
  });

  // Handles changes for top-level form fields (sectionTitle, bgColor, etc.)
  const handleChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  // Updates a specific field within a challenge item
  const updateChallengeItem = (index, key, value) => {
    const updatedChallenges = [...form.challenges];
    updatedChallenges[index][key] = value;
    setForm((prevForm) => ({ ...prevForm, challenges: updatedChallenges }));
  };

  // Handles image file upload for a challenge icon
  const updateChallengeIcon = (index, file) => {
    const updatedChallenges = [...form.challenges];
    updatedChallenges[index].iconFile = file;
    updatedChallenges[index].iconPreview = file ? URL.createObjectURL(file) : ""; // Create URL for preview
    setForm((prevForm) => ({ ...prevForm, challenges: updatedChallenges }));
  };

  // Adds a new blank challenge item to the list
  const addChallengeItem = () => {
    setForm((prevForm) => ({
      ...prevForm,
      challenges: [
        ...prevForm.challenges,
        {
          image: "", // Keep for consistency if needed, though iconPreview/iconFile are primary
          title: "",
          desc: "",
          iconPreview: "",
          iconFile: null,
          font: "sans-serif",
          size: "16px",
          color: "#374151",
        },
      ],
    }));
  };

  // Removes a challenge item by its index
  const removeChallengeItem = (index) => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Are you sure you want to remove this challenge?")) {
      const updatedChallenges = [...form.challenges];
      updatedChallenges.splice(index, 1);
      setForm((prevForm) => ({ ...prevForm, challenges: updatedChallenges }));
    }
  };

  // Handles the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saved Data:", form);
    // In a real application, you'd send 'form' data to a backend API here.
    // Also, handle actual file uploads (e.g., to S3 or a local server) for `iconFile`.
    // eslint-disable-next-line no-alert
    alert("✅ Challenges section saved (demo)");
  };

  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-teal-100">
      <h2 className="text-2xl font-bold text-teal-600 mb-8">Challenges Section Editor</h2>
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Section Title and Description */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="sectionTitle" className="block font-semibold text-gray-800 mb-2">
              Section Title
            </label>
            <input
              id="sectionTitle"
              type="text"
              value={form.sectionTitle}
              onChange={(e) => handleChange("sectionTitle", e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
              placeholder="e.g., Our Key Challenges"
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label htmlFor="titleColor" className="sr-only">Title Color</label>
                <input
                  id="titleColor"
                  type="color"
                  value={form.titleColor}
                  onChange={(e) => handleChange("titleColor", e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                  title="Section Title Color"
                />
              </div>
              <div>
                <label htmlFor="titleFont" className="sr-only">Title Font</label>
                <select
                  id="titleFont"
                  value={form.titleFont}
                  onChange={(e) => handleChange("titleFont", e.target.value)}
                  className="w-full border border-gray-300 px-2 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Title Font"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="'Poppins', sans-serif">Poppins</option>
                  <option value="'Inter', sans-serif">Inter</option>
                </select>
              </div>
              <div>
                <label htmlFor="titleSize" className="sr-only">Title Size (px)</label>
                <input
                  id="titleSize"
                  type="number"
                  value={parseInt(form.titleSize, 10)}
                  onChange={(e) => handleChange("titleSize", `${e.target.value}px`)}
                  placeholder="Size (px)"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Title Font Size"
                />
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="sectionDesc" className="block font-semibold text-gray-800 mb-2">
              Section Description
            </label>
            <textarea
              id="sectionDesc"
              value={form.sectionDesc}
              onChange={(e) => handleChange("sectionDesc", e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
              rows={3}
              placeholder="Describe the challenges addressed by this section."
            />
            <div className="grid grid-cols-3 gap-3 mt-3">
              <div>
                <label htmlFor="descColor" className="sr-only">Description Color</label>
                <input
                  id="descColor"
                  type="color"
                  value={form.descColor}
                  onChange={(e) => handleChange("descColor", e.target.value)}
                  className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                  title="Section Description Color"
                />
              </div>
              <div>
                <label htmlFor="descFont" className="sr-only">Description Font</label>
                <select
                  id="descFont"
                  value={form.descFont}
                  onChange={(e) => handleChange("descFont", e.target.value)}
                  className="w-full border border-gray-300 px-2 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Description Font"
                >
                  <option value="sans-serif">Sans-serif</option>
                  <option value="serif">Serif</option>
                  <option value="monospace">Monospace</option>
                  <option value="'Inter', sans-serif">Inter</option>
                </select>
              </div>
              <div>
                <label htmlFor="descSize" className="sr-only">Description Size (px)</label>
                <input
                  id="descSize"
                  type="number"
                  value={parseInt(form.descSize, 10)}
                  onChange={(e) => handleChange("descSize", `${e.target.value}px`)}
                  placeholder="Size (px)"
                  className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                  aria-label="Section Description Font Size"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Background Color for the entire section */}
        <div>
          <label htmlFor="bgColor" className="block font-semibold text-gray-800 mb-2">
            Section Background Color
          </label>
          <input
            id="bgColor"
            type="color"
            value={form.bgColor}
            onChange={(e) => handleChange("bgColor", e.target.value)}
            className="h-10 w-24 rounded-md border border-gray-300 cursor-pointer"
            title="Choose Section Background Color"
          />
          <p className="text-sm text-gray-500 mt-1">This color will be applied to the background of the entire 'Challenges' section on the live site.</p>
        </div>

        {/* --- */}

        {/* Editable Challenge Cards */}
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-5 border-b pb-3 border-gray-200">
            Individual Challenge Cards
          </h3>
          {form.challenges.map((item, i) => (
            <div
              key={i} // Using index as key is acceptable here, but unique IDs are preferred in dynamic lists where order changes often.
              className="mb-8 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200 relative"
            >
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-semibold text-gray-700">Challenge #{i + 1}</h4>
                <button
                  type="button"
                  className="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium bg-red-50/50 hover:bg-red-100"
                  onClick={() => removeChallengeItem(i)}
                  aria-label={`Remove Challenge ${i + 1}`}
                >
                  <Trash className="w-4 h-4" /> Remove
                </button>
              </div>

              {/* Icon Upload */}
              <div className="mb-4">
                <label htmlFor={`icon-upload-${i}`} className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2 cursor-pointer">
                  <ImageIcon className="w-4 h-4 text-teal-600" /> Upload Icon Image (SVG, PNG, JPG)
                </label>
                <input
                  id={`icon-upload-${i}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => updateChallengeIcon(i, e.target.files[0])}
                  className="block w-full text-sm text-gray-900
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-teal-50 file:text-teal-700
                    hover:file:bg-teal-100"
                />
                {item.iconPreview && (
                  <div className="mt-3 p-2 border border-gray-200 rounded-md bg-white inline-block">
                    <img
                      src={item.iconPreview}
                      alt={`Challenge icon preview ${i + 1}`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Upload an image for the icon (e.g., a simple graphic representing the challenge).
                </p>
              </div>

              {/* Title Input */}
              <div className="mb-4">
                <label htmlFor={`challenge-title-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Challenge Title
                </label>
                <input
                  id={`challenge-title-${i}`}
                  type="text"
                  value={item.title}
                  onChange={(e) => updateChallengeItem(i, "title", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                  placeholder="e.g., Regulatory Compliance Burden"
                />
              </div>

              {/* Description Input */}
              <div className="mb-4">
                <label htmlFor={`challenge-desc-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Challenge Description
                </label>
                <textarea
                  id={`challenge-desc-${i}`}
                  rows={3}
                  value={item.desc}
                  onChange={(e) => updateChallengeItem(i, "desc", e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400"
                  placeholder="Provide a detailed description of this challenge."
                />
              </div>

              {/* Typography for Challenge Item Text */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div>
                  <label htmlFor={`item-color-${i}`} className="sr-only">Text Color</label>
                  <input
                    id={`item-color-${i}`}
                    type="color"
                    value={item.color}
                    onChange={(e) => updateChallengeItem(i, "color", e.target.value)}
                    className="h-10 w-full rounded-md border border-gray-300 cursor-pointer"
                    title="Challenge Text Color"
                  />
                </div>
                <div>
                  <label htmlFor={`item-font-${i}`} className="sr-only">Text Font</label>
                  <select
                    id={`item-font-${i}`}
                    value={item.font}
                    onChange={(e) => updateChallengeItem(i, "font", e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-2 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                    aria-label="Challenge Text Font"
                  >
                    <option value="sans-serif">Sans-serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                    <option value="'Inter', sans-serif">Inter</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={`item-size-${i}`} className="sr-only">Text Size (px)</label>
                  <input
                    id={`item-size-${i}`}
                    type="number"
                    value={parseInt(item.size, 10)}
                    onChange={(e) => updateChallengeItem(i, "size", `${e.target.value}px`)}
                    className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Size (px)"
                    aria-label="Challenge Text Font Size"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addChallengeItem}
            className="flex items-center gap-2 text-teal-600 hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium mt-6"
          >
            <Plus className="w-5 h-5" /> Add New Challenge Card
          </button>
        </div>

        {/* --- */}

        {/* Save Button */}
        <div className="text-right pt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300"
          >
            Save Challenges Section
          </button>
        </div>
      </form>
    </div>
  );
}
