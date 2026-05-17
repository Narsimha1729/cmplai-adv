'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const homeLinks = [
  { href: '#home', label: 'Home' },
  { href: '#pillars', label: 'Pillars' },
  { href: '#services', label: 'Services' },
  { href: '#product', label: 'Breakthroughs' },
  { href: '#journey', label: 'Journey' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isBlogPage = pathname.startsWith('/blog');
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navHref = (hash) => (isHome ? hash : `/${hash}`);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-lg shadow-sm border-b border-teal-100/80'
          : 'bg-white/70 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[4.25rem] flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <img src="/logo.png" alt="Cmplai" className="h-8 w-auto" />
        </Link>

        {!isBlogPage ? (
          <>
            <nav className="hidden lg:flex items-center gap-1">
              {homeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={navHref(link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 rounded-full hover:bg-teal-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="px-3.5 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 rounded-full hover:bg-teal-50 transition-colors"
              >
                Blog
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={navHref('#contact')}
                className="text-sm font-semibold text-gray-700 hover:text-teal-600 px-4 py-2 rounded-full transition-colors"
              >
                Book a demo
              </Link>
              <Link
                href={navHref('#pillars')}
                className="text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 px-5 py-2.5 rounded-full shadow-md shadow-teal-600/25 transition-all hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-teal-50"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </>
        ) : (
          <Link
            href="/"
            className="text-sm font-semibold bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition"
          >
            ← Back to Home
          </Link>
        )}
      </div>

      {open && !isBlogPage && (
        <div className="lg:hidden border-t border-teal-100 bg-white/95 backdrop-blur-lg px-4 py-4 space-y-1">
          {homeLinks.map((link) => (
            <Link
              key={link.href}
              href={navHref(link.href)}
              className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-xl"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 rounded-xl"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            href={navHref('#pillars')}
            className="block mt-2 text-center font-semibold text-white bg-teal-600 py-3 rounded-xl"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
