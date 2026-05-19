'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import '../app/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why GGC', href: '#why-ggc' },
    { label: 'Team', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="navbar-wrapper">
      {/* Main Nav Bar with Logo */}
      <nav className="navbar">
        <Link href="/" className="navbar-logo">
          <Image
            src="/logo.jpeg"
            alt="GGC Logo"
            width={40}
            height={40}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-mobile-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={24} style={{ color: 'var(--ivory-100)' }} />
          ) : (
            <Menu size={24} style={{ color: 'var(--ivory-100)' }} />
          )}
        </button>
      </nav>

      {/* Desktop Navigation Below Header */}
      <div className="navbar-desktop">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="navbar-link">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
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
        </div>
      )}
    </div>
  );
}
