'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Who We Help', href: '#niche' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gunmetal/95 backdrop-blur-md shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group"
        >
          <span className="text-2xl font-black tracking-tight text-white font-barlow uppercase">
            Sydney<span className="text-flare">Digits</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-sm font-medium text-mist/80 hover:text-flare transition-colors duration-200 uppercase tracking-widest font-barlow"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              className="text-sm font-medium text-mist/80 hover:text-flare transition-colors duration-200 uppercase tracking-widest font-barlow"
            >
              Blog
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleClick('#contact')}
              className="bg-flare hover:bg-flare/90 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] uppercase tracking-wider font-barlow"
            >
              Free Growth Plan
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-gunmetal/98 backdrop-blur-md`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleClick(link.href)}
                className="text-base font-medium text-mist/90 hover:text-flare transition-colors uppercase tracking-widest font-barlow"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium text-mist/90 hover:text-flare transition-colors uppercase tracking-widest font-barlow"
            >
              Blog
            </Link>
          </li>
          <li>
            <button
              onClick={() => handleClick('#contact')}
              className="bg-flare text-white text-sm font-bold px-6 py-3 rounded-lg uppercase tracking-wider font-barlow mt-2"
            >
              Free Growth Plan
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
