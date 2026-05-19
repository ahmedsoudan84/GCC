'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import '../app/navbar.css';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-wrapper">
      {/* Top bar: logo + CTA */}
      <nav className="navbar">
        <Link href="/" className="navbar-logo">
          <Image
            src="/logo.jpeg"
            alt="Global Group Corp."
            width={200}
            height={60}
            priority
          />
        </Link>

        <Link href="/contact" className="navbar-cta navbar-cta-desktop">
          Get in Touch
        </Link>

        <button
          className="navbar-mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Desktop nav strip */}
      <div className="navbar-desktop">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="navbar-link">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="navbar-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-mobile-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="navbar-mobile-link"
            style={{ color: 'var(--accent-600)', fontWeight: 600, border: 'none' }}
            onClick={() => setIsOpen(false)}
          >
            Get in Touch →
          </Link>
        </div>
      )}
    </div>
  );
}
