'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          {/* Company Info */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Global Group Corp.</h4>
            <p style={styles.columnText}>
              Leading provider of trade, logistics, and capital solutions worldwide.
            </p>
          </div>

          {/* Services */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Services</h4>
            <ul style={styles.list}>
              <li>
                <Link href="#" style={styles.link}>
                  Trade Finance
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Logistics
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Capital Markets
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Company</h4>
            <ul style={styles.list}>
              <li>
                <Link href="#" style={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div style={styles.column}>
            <h4 style={styles.columnTitle}>Legal</h4>
            <ul style={styles.list}>
              <li>
                <Link href="#" style={styles.link}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="#" style={styles.link}>
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div style={styles.divider} />

        {/* Copyright */}
        <div style={styles.copyright}>
          <p>
            &copy; {currentYear} Global Group Corp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: 'var(--bg-primary)',
    borderTop: '1px solid var(--ink-700)',
    padding: 'var(--s-16) var(--s-4)',
  } as React.CSSProperties,

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: 'var(--s-12)',
    marginBottom: 'var(--s-12)',
  } as React.CSSProperties,

  column: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--s-4)',
  } as React.CSSProperties,

  columnTitle: {
    fontSize: 'var(--size-body-md)',
    fontWeight: 700,
    color: 'var(--ink-primary)',
  } as React.CSSProperties,

  columnText: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--ink-secondary)',
    lineHeight: 1.6,
  } as React.CSSProperties,

  list: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--s-3)',
  } as React.CSSProperties,

  link: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--ink-secondary)',
    textDecoration: 'none',
    transition: 'color var(--duration-fast) var(--ease-out)',
  } as React.CSSProperties,

  divider: {
    height: '1px',
    background: 'var(--ink-700)',
    marginBottom: 'var(--s-8)',
  } as React.CSSProperties,

  copyright: {
    textAlign: 'center' as const,
  } as React.CSSProperties,
};
