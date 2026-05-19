'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import '../app/navbar.css';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

const drawerVariants = {
  closed: { height: 0, opacity: 0 },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.28 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`nav-root ${scrolled ? 'nav-solid' : 'nav-transparent'}`}>
      {/* Top bar */}
      <div className="nav-bar">
        <Link href="/" className="nav-logo">
          <Image src="/GDC_Logo_White.png" alt="Global Group Corp." width={260} height={80} priority />
        </Link>

        <Link href="/contact" className="nav-cta">Get in Touch</Link>

        <button
          className={`nav-hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Desktop nav strip */}
      <div className="nav-strip">
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} className="nav-link">{l.label}</Link>
        ))}
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {navLinks.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={l.href} className="nav-drawer-link" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}>
              <Link href="/contact" className="nav-cta" style={{ display: 'inline-block', marginTop: '0.75rem' }} onClick={() => setOpen(false)}>
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
