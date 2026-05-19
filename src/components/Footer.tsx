'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const footerLinks = {
  Services: [
    { label: 'Trade Finance', href: '/services#trade-finance' },
    { label: 'Logistics', href: '/services#logistics' },
    { label: 'Capital Markets', href: '/services#capital-markets' },
    { label: 'Compliance', href: '/services#compliance' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ],
  Offices: [
    { label: 'New York', href: '/contact' },
    { label: 'London', href: '/contact' },
    { label: 'Singapore', href: '/contact' },
    { label: 'Doha', href: '/contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid rgba(83,97,232,0.1)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 clamp(1.5rem, 6vw, 6rem)' }}>

        {/* Top row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <div>
            <Image
              src="/GDC_Logo_White.png"
              alt="GGC"
              width={110}
              height={36}
              style={{ marginBottom: '1.25rem', display: 'block' }}
            />
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.75, color: 'rgba(250,250,250,0.4)', maxWidth: '240px' }}>
              Global Group Corp. — trade finance, logistics, and capital solutions across 150 countries since 1998.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,250,250,0.3)', marginBottom: '1.25rem', fontFamily: 'var(--font-mono)' }}>
                {group}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontSize: '0.8125rem', color: 'rgba(250,250,250,0.5)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                      onMouseOver={(e) => (e.currentTarget.style.color = 'var(--ivory-100)')}
                      onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(250,250,250,0.5)')}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(83,97,232,0.08)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(250,250,250,0.25)' }}>
            © {year} Global Group Corp. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy', 'Terms', 'Compliance'].map((item) => (
              <Link key={item} href="#" style={{ fontSize: '0.75rem', color: 'rgba(250,250,250,0.25)', textDecoration: 'none' }}>
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
