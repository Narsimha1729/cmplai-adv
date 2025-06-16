'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="w-full py-4 px-6 shadow-sm bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-500">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href={isHome ? "#home" : "/#home"} className="text-gray-700 hover:text-teal-500">
            Home
          </Link>
          <Link href={isHome ? "#product" : "/#product"} className="text-gray-700 hover:text-teal-500">
            Product
          </Link>
          <Link href={isHome ? "#about" : "/#about"} className="text-gray-700 hover:text-teal-500">
            About Us
          </Link>
          <Link href={isHome ? "#contact" : "/#contact"} className="text-gray-700 hover:text-teal-500">
            Contact
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-teal-500">
            Blog
          </Link>
        </nav>

        <button className="bg-teal-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </header>
  );
}
