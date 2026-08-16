'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const homeLinks = [
  { href: '#home', label: 'Home' },
  { href: '#platform', label: 'Platform' },
  { href: '#pillars', label: 'Pillars' },
  { href: '#services', label: 'Services' },
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
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-[4.25rem] flex items-center justify-between gap-4">
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <img src="/logo.png" alt="Cmplai" className="h-8 w-auto brightness-0 invert" />
        </Link>

        {!isBlogPage ? (
          <>
            <nav className="hidden lg:flex items-center gap-0.5">
              {homeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={navHref(link.href)}
                  className="px-3.5 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/blog"
                className="px-3.5 py-2 text-sm font-medium text-zinc-400 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                Blog
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link
                href={navHref('#contact')}
                className="text-sm font-medium text-zinc-300 hover:text-white px-4 py-2 transition-colors"
              >
                Book a demo
              </Link>
              <Link href={navHref('#pillars')} className="btn-primary text-sm py-2 px-5">
                Get Started
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg text-zinc-300 hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </>
        ) : (
          <Link href="/" className="btn-ghost text-sm py-2 px-4">
            ← Back to Home
          </Link>
        )}
      </div>

      {open && !isBlogPage && (
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-xl px-4 py-4 space-y-1">
          {homeLinks.map((link) => (
            <Link
              key={link.href}
              href={navHref(link.href)}
              className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-xl"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/blog"
            className="block px-4 py-3 text-sm font-medium text-zinc-300 hover:bg-white/5 rounded-xl"
            onClick={() => setOpen(false)}
          >
            Blog
          </Link>
          <Link
            href={navHref('#pillars')}
            className="block mt-2 text-center btn-primary py-3"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
