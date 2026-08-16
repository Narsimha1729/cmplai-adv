'use client';

import { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('');

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
        setStatus('Message sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-intro">
        <div className="section-kicker">Contact us</div>
        <h2>Let&apos;s make compliance<br />your advantage.</h2>
        <p>
          Tell us about your workflows, documentation challenges, or audit-readiness goals.
          Our team will get back to you shortly.
        </p>
        <div className="contact-details">
          <a href="mailto:admin@cmplai.com">
            <Mail size={18} />
            <span><small>Email</small>admin@cmplai.com</span>
          </a>
          <a href="tel:+916301985408">
            <Phone size={18} />
            <span><small>Phone</small>+91 63019 85408</span>
          </a>
          <div>
            <MapPin size={18} />
            <span><small>Office</small>LN Infosphere TechTransformers Pvt Ltd<br />Hyderabad, India</span>
          </div>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>
            <span>Name</span>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                autoComplete="name"
                required
              />
          </label>
          <label>
            <span>Work email</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
          </label>
        </div>
        <label>
          <span>Company</span>
          <input
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company name"
            autoComplete="organization"
          />
        </label>
        <label>
          <span>How can we help?</span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your compliance workflow or use case"
                required
              />
        </label>
        <button type="submit">
          Send message <ArrowRight size={16} />
        </button>
        {status && <p className="form-status" role="status">{status}</p>}
      </form>
    </section>
  );
}
