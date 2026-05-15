'use client';

import { useEffect, useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from 'react-icons/fa';

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch (err) {
      setStatus('⚠️ Error sending message.');
    }
  };

  return (
    <section className="py-24 px-6 bg-[#f9fefe]" id="contact">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            Contact Us
          </h2>
          <p className="text-gray-600 mt-2 text-lg">We’d love to hear from you</p>
        </div>

        {/* Grid: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            className="bg-white shadow-xl rounded-2xl p-8 border border-transparent hover:border-teal-400 transition-all"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-[#00b4bc] mb-4">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
                required
              />
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full px-5 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-gray-800"
                required
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 flex items-center justify-center gap-2 transition"
              >
                Send Message <FaPaperPlane />
              </button>

              {status && (
                <p className="text-center text-sm text-teal-600 mt-2">{status}</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 text-gray-700" data-aos="fade-left">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#00b4bc] text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p>LN Infosphere TechTransformers Pvt Ltd, Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-[#00b4bc] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Phone</h4>
                <p>+91 6301985408</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope className="text-[#00b4bc] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <p>admin@cmplai.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
