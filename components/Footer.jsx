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
    <footer className="bg-[#f1fcfc] text-gray-700 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo + Social */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#00b4bc]">Cmplai</h3>
          <p className="text-sm">
            Transforming the future of compliance through automation of document preparation.
          </p>
          <div className="flex gap-4 text-[#00b4bc] text-lg">
            <a href="#" aria-label="Facebook" className="hover:text-cyan-600 transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-cyan-600 transition"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-cyan-600 transition"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" className="hover:text-cyan-600 transition"><FaInstagram /></a>
            <a href="#" aria-label="GitHub" className="hover:text-cyan-600 transition"><FaGithub /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#">Home</Link></li>
            <li><Link href="#product">Product</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#contact">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-900">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#BlogSection">Blog</Link></li>
            <li><Link href="#">Case Studies</Link></li>
            <li><Link href="#">Documentation</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm">
          <h4 className="text-lg font-semibold text-gray-900">Contact</h4>
          <p>
            LN Infosphere TechTransformers Pvt Ltd<br />
            Hyderabad, India
          </p>
          <p>+91 6301985408</p>
          <p>admin@cmplai.com</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-teal-100 mt-12 pt-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-center md:text-left">
          © 2025 LN Infosphere TechTransformers Pvt Ltd. All rights reserved.
        </p>
        <div className="flex gap-4 text-center md:text-right">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
          <Link href="#" className="hover:underline">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
}
