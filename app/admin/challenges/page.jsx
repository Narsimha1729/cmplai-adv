'use client';

import { useState, useCallback } from "react";
import { Trash, Plus, Image as ImageIcon, Eye as EyeIcon } from "lucide-react";

// Component to render the live preview of the Challenges section
function ChallengesPreview({ formData }) {
  const { sectionTitle, sectionDesc, titleColor, titleFont, titleSize, descColor, descFont, descSize, bgColor, challenges } = formData;

  return (
    <section
      className="p-8 md:p-12 rounded-xl shadow-inner border border-gray-200 min-h-[400px] flex flex-col justify-center items-center"
      style={{ backgroundColor: bgColor }}
      aria-label="Challenges Section Live Preview"
    >
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
          style={{ color: titleColor, fontFamily: titleFont, fontSize: titleSize }}
        >
          {sectionTitle || "Challenges We Address (Preview)"}
        </h2>
        <p
          className="text-base sm:text-lg mx-auto max-w-2xl text-gray-700"
          style={{ color: descColor, fontFamily: descFont, fontSize: descSize }}
        >
          {sectionDesc || "Common compliance pain points faced by pharmaceutical and manufacturing industries. (Preview)"}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        {challenges.length === 0 && (
          <p className="col-span-full text-center text-gray-500 italic p-8">No challenges added yet. Add one to see it here!</p>
        )}
        {challenges.map((challenge, index) => (
          <div
            key={index} // Using index as key, consider unique IDs for production with reorderable lists
            className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 transform"
            aria-label={`Challenge card ${index + 1}: ${challenge.title}`}
          >
            {challenge.iconPreview ? (
              <img
                src={challenge.iconPreview}
                alt={`Challenge icon ${index + 1}`}
                className="w-20 h-20 object-contain mb-4 rounded-full border-4 border-teal-100 p-2 bg-teal-50"
              />
            ) : (
              <div className="w-20 h-20 flex items-center justify-center mb-4 rounded-full border-4 border-teal-100 p-2 bg-teal-50 text-teal-400">
                <ImageIcon size={40} />
              </div>
            )}
            <h3
              className="text-xl font-bold mb-2 break-words"
              style={{ color: challenge.color, fontFamily: challenge.font, fontSize: challenge.size }}
            >
              {challenge.title || "Untitled Challenge"}
            </h3>
            <p
              className="text-gray-600 text-sm break-words"
              style={{ color: challenge.color, fontFamily: challenge.font, fontSize: `${parseInt(challenge.size) * 0.9}px` }} // Slightly smaller for description
            >
              {challenge.desc || "No description provided."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

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
    bgColor: "#f9fafb",

    challenges: [
      {
        title: "Manual, Error-Prone Processes",
        desc: "Managing thousands of documents manually leads to errors, inefficiencies, and risks.",
        iconPreview: "",
        iconFile: null,
        font: "sans-serif",
        size: "16px",
        color: "#374151",
      },
    ],
  });

  const handleChange = useCallback((field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  }, []);

  const updateChallengeItem = useCallback((index, key, value) => {
    setForm((prevForm) => {
      const updatedChallenges = [...prevForm.challenges];
      updatedChallenges[index] = { ...updatedChallenges[index], [key]: value };
      return { ...prevForm, challenges: updatedChallenges };
    });
  }, []);

  const updateChallengeIcon = useCallback((index, file) => {
    setForm((prevForm) => {
      const updatedChallenges = [...prevForm.challenges];
      // Revoke old object URL if exists to prevent memory leaks
      if (updatedChallenges[index].iconPreview) {
        URL.revokeObjectURL(updatedChallenges[index].iconPreview);
      }
      updatedChallenges[index] = {
        ...updatedChallenges[index],
        iconFile: file,
        iconPreview: file ? URL.createObjectURL(file) : "",
      };
      return { ...prevForm, challenges: updatedChallenges };
    });
  }, []);

  const addChallengeItem = useCallback(() => {
    setForm((prevForm) => ({
      ...prevForm,
      challenges: [
        ...prevForm.challenges,
        {
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
  }, []);

  const removeChallengeItem = useCallback((index) => {
    if (window.confirm("Are you sure you want to remove this challenge?")) {
      setForm((prevForm) => {
        const updatedChallenges = prevForm.challenges.filter((_, i) => i !== index);
        // Clean up object URL if removed
        if (prevForm.challenges[index] && prevForm.challenges[index].iconPreview) {
          URL.revokeObjectURL(prevForm.challenges[index].iconPreview);
        }
        return { ...prevForm, challenges: updatedChallenges };
      });
    }
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Saved Data:", form);
    alert("✅ Challenges section saved (demo)");
  }, [form]);

  return (
    <div className="flex flex-col gap-10 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Editor Section */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-teal-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-8 border-b pb-4">Challenges Section Editor</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Section Title and Description */}
          <fieldset className="p-4 sm:p-5 border border-gray-200 rounded-lg shadow-sm">
            <legend className="text-lg font-semibold text-gray-800 px-2">Section Header</legend>
            <div className="space-y-6">
              <div>
                <label htmlFor="sectionTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Section Title
                </label>
                <input
                  id="sectionTitle"
                  type="text"
                  value={form.sectionTitle}
                  onChange={(e) => handleChange("sectionTitle", e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 transition-colors duration-200"
                  placeholder="e.g., Our Key Challenges"
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                  <div>
                    <label htmlFor="titleColor" className="sr-only">Title Color</label>
                    <input
                      id="titleColor"
                      type="color"
                      value={form.titleColor}
                      onChange={(e) => handleChange("titleColor", e.target.value)}
                      className="h-10 w-full rounded-md border border-gray-300 cursor-pointer focus:ring-teal-500 focus:border-teal-500"
                      title="Section Title Color"
                    />
                  </div>
                  <div>
                    <label htmlFor="titleFont" className="sr-only">Title Font</label>
                    <select
                      id="titleFont"
                      value={form.titleFont}
                      onChange={(e) => handleChange("titleFont", e.target.value)}
                      className="w-full border border-gray-300 px-2 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white transition-colors duration-200"
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                      aria-label="Section Title Font Size"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="sectionDesc" className="block text-sm font-medium text-gray-700 mb-1">
                  Section Description
                </label>
                <textarea
                  id="sectionDesc"
                  value={form.sectionDesc}
                  onChange={(e) => handleChange("sectionDesc", e.target.value)}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 transition-colors duration-200"
                  rows={3}
                  placeholder="Describe the challenges addressed by this section."
                />
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                  <div>
                    <label htmlFor="descColor" className="sr-only">Description Color</label>
                    <input
                      id="descColor"
                      type="color"
                      value={form.descColor}
                      onChange={(e) => handleChange("descColor", e.target.value)}
                      className="h-10 w-full rounded-md border border-gray-300 cursor-pointer focus:ring-teal-500 focus:border-teal-500"
                      title="Section Description Color"
                    />
                  </div>
                  <div>
                    <label htmlFor="descFont" className="sr-only">Description Font</label>
                    <select
                      id="descFont"
                      value={form.descFont}
                      onChange={(e) => handleChange("descFont", e.target.value)}
                      className="w-full border border-gray-300 px-2 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white transition-colors duration-200"
                      aria-label="Section Description Font"
                    >
                      <option value="sans-serif">Sans-serif</option>
                      <option value="serif">Serif</option>
                      <option value="monospace">Monospace</option>
                      <option value="'Inter', sans-serif">Inter</option>
                      <option value="'Poppins', sans-serif">Poppins</option>
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
                      className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                      aria-label="Section Description Font Size"
                    />
                  </div>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Background Color for the entire section */}
          <fieldset className="p-4 sm:p-5 border border-gray-200 rounded-lg shadow-sm">
            <legend className="text-lg font-semibold text-gray-800 px-2">Section Background</legend>
            <div>
              <label htmlFor="bgColor" className="block text-sm font-medium text-gray-700 mb-2">
                Section Background Color
              </label>
              <input
                id="bgColor"
                type="color"
                value={form.bgColor}
                onChange={(e) => handleChange("bgColor", e.target.value)}
                className="h-12 w-24 rounded-md border border-gray-300 cursor-pointer focus:ring-teal-500 focus:border-teal-500"
                title="Choose Section Background Color"
              />
              <p className="text-xs text-gray-500 mt-2">This color will be applied to the background of the entire 'Challenges' section on the live site.</p>
            </div>
          </fieldset>

          {/* Editable Challenge Cards */}
          <fieldset className="p-4 sm:p-5 border border-gray-200 rounded-lg shadow-sm">
            <legend className="text-lg font-semibold text-gray-800 px-2">Individual Challenge Cards</legend>
            <div className="space-y-6">
              {form.challenges.map((item, i) => (
                <div
                  key={i} // Using index as key, consider unique IDs for production with reorderable lists
                  className="p-5 bg-gray-50 rounded-lg shadow-sm border border-gray-200 relative"
                  aria-labelledby={`challenge-title-${i}`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-3 border-b border-gray-100">
                    <h4 id={`challenge-title-${i}`} className="text-md font-bold text-gray-700 mb-2 sm:mb-0">Challenge #{i + 1}</h4>
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-800 transition-colors duration-200 flex items-center gap-1.5 px-3 py-1 rounded-md text-sm font-medium bg-red-50/50 hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => removeChallengeItem(i)}
                      aria-label={`Remove Challenge ${i + 1}`}
                      disabled={form.challenges.length === 1} // Prevent removing the last item
                    >
                      <Trash className="w-4 h-4" /> Remove
                    </button>
                  </div>

                  {/* Icon Upload */}
                  <div className="mb-4">
                    <label htmlFor={`icon-upload-${i}`} className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2 cursor-pointer">
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
                        hover:file:bg-teal-100 cursor-pointer"
                    />
                    {item.iconPreview && (
                      <div className="mt-4 p-2 border border-gray-200 rounded-md bg-white inline-block">
                        <img
                          src={item.iconPreview}
                          alt={`Challenge icon preview ${i + 1}`}
                          className="w-24 h-24 object-contain"
                        />
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      Upload an image for the icon (e.g., a simple graphic representing the challenge).
                    </p>
                  </div>

                  {/* Title Input */}
                  <div className="mb-4">
                    <label htmlFor={`challenge-item-title-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Challenge Title
                    </label>
                    <input
                      id={`challenge-item-title-${i}`}
                      type="text"
                      value={item.title}
                      onChange={(e) => updateChallengeItem(i, "title", e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 transition-colors duration-200"
                      placeholder="e.g., Regulatory Compliance Burden"
                    />
                  </div>

                  {/* Description Input */}
                  <div className="mb-4">
                    <label htmlFor={`challenge-item-desc-${i}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Challenge Description
                    </label>
                    <textarea
                      id={`challenge-item-desc-${i}`}
                      rows={3}
                      value={item.desc}
                      onChange={(e) => updateChallengeItem(i, "desc", e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 placeholder-gray-400 transition-colors duration-200"
                      placeholder="Provide a detailed description of this challenge."
                    />
                  </div>

                  {/* Typography for Challenge Item Text */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-gray-100 mt-4">
                    <div>
                      <label htmlFor={`item-color-${i}`} className="sr-only">Text Color</label>
                      <input
                        id={`item-color-${i}`}
                        type="color"
                        value={item.color}
                        onChange={(e) => updateChallengeItem(i, "color", e.target.value)}
                        className="h-10 w-full rounded-md border border-gray-300 cursor-pointer focus:ring-teal-500 focus:border-teal-500"
                        title="Challenge Text Color"
                      />
                    </div>
                    <div>
                      <label htmlFor={`item-font-${i}`} className="sr-only">Text Font</label>
                      <select
                        id={`item-font-${i}`}
                        value={item.font}
                        onChange={(e) => updateChallengeItem(i, "font", e.target.value)}
                        className="w-full border border-gray-300 rounded-md px-2 py-2 text-gray-900 focus:ring-teal-500 focus:border-teal-500 appearance-none bg-white transition-colors duration-200"
                        aria-label="Challenge Text Font"
                      >
                        <option value="sans-serif">Sans-serif</option>
                        <option value="serif">Serif</option>
                        <option value="monospace">Monospace</option>
                        <option value="'Inter', sans-serif">Inter</option>
                        <option value="'Poppins', sans-serif">Poppins</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor={`item-size-${i}`} className="sr-only">Text Size (px)</label>
                      <input
                        id={`item-size-${i}`}
                        type="number"
                        value={parseInt(item.size, 10)}
                        onChange={(e) => updateChallengeItem(i, "size", `${e.target.value}px`)}
                        placeholder="Size (px)"
                        className="w-full border border-gray-300 px-3 py-2 rounded-md text-gray-900 focus:ring-teal-500 focus:border-teal-500 transition-colors duration-200"
                        aria-label="Challenge Text Font Size"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={addChallengeItem}
              className="flex items-center justify-center gap-2 text-teal-600 hover:text-teal-800 transition-colors duration-200 px-4 py-2 rounded-md bg-teal-50/50 hover:bg-teal-100 font-medium w-full mt-6 border border-dashed border-teal-300"
            >
              <Plus className="w-5 h-5" /> Add New Challenge Card
            </button>
          </fieldset>

          {/* Save Button */}
          <div className="text-center pt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-3 font-semibold rounded-lg shadow-lg hover:opacity-90 transition-opacity duration-300 focus:outline-none focus:ring-4 focus:ring-teal-300 focus:ring-opacity-75"
            >
              Save Challenges Section
            </button>
          </div>
        </form>
      </div>

      {/* Live Preview Section */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg border border-teal-100">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-8 border-b pb-4 flex items-center gap-2">
          <EyeIcon className="w-6 h-6 sm:w-7 sm:h-7" /> Live Preview
        </h2>
        <ChallengesPreview formData={form} />
      </div>
    </div>
  );
}
