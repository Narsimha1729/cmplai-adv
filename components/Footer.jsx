'use client';

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-elevated border-t border-white/10 text-zinc-400 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">Cmplai</h3>
          <p className="text-sm text-body">
            Transforming compliance through AI — built for pharmaceutical and manufacturing.
          </p>
          <div className="flex gap-4 text-zinc-500 text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" aria-label="GitHub" className="hover:text-white transition"><FaGithub /></a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="#platform" className="hover:text-white transition">Platform</Link></li>
            <li><Link href="#about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
            <li><Link href="/documentation" className="hover:text-white transition">Documentation</Link></li>
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
          </ul>
        </div>

        <div className="space-y-4 text-sm">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h4>
          <p>
            LN Infosphere TechTransformers Pvt Ltd<br />
            Hyderabad, India
          </p>
          <p>+91 6301985408</p>
          <p>admin@cmplai.com</p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-sm text-zinc-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          © 2026 LN Infosphere TechTransformers Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-4 text-center md:text-right">
          <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:text-white transition">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
