"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link href="/" style={styles.logo}>
          <Image
            src="/logo.jpeg"
            alt="Global Group Corp"
            width={48}
            height={48}
            priority
            style={{ width: 48, height: "auto" }}
          />
          <div style={styles.logoText}>
            <div style={styles.logoTitle}>GLOBAL GROUP</div>
            <div style={styles.logoSub}>CORP</div>
          </div>
        </Link>

        {/* Nav links — desktop */}
        <nav style={styles.nav}>
          <a href="#services" style={styles.navLink}>
            Services
          </a>
          <a href="#why-us" style={styles.navLink}>
            Why GGC
          </a>
          <a href="#team" style={styles.navLink}>
            Team
          </a>
          <a href="#contact" style={styles.navLink}>
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button
          onClick={() => {}}
          className="ggc-btn accent sm"
          style={{ display: "none" }}
        >
          Get in Touch
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={styles.mobileMenuBtn}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav style={styles.mobileNav}>
          <a href="#services" style={styles.mobileNavLink}>
            Services
          </a>
          <a href="#why-us" style={styles.mobileNavLink}>
            Why GGC
          </a>
          <a href="#team" style={styles.mobileNavLink}>
            Team
          </a>
          <a href="#contact" style={styles.mobileNavLink}>
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "var(--bg)",
    borderBottom: "1px solid var(--border)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
  } as React.CSSProperties,
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "var(--s-4) var(--s-6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "var(--s-5)",
  } as React.CSSProperties,
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "var(--s-3)",
    textDecoration: "none",
    fontWeight: 700,
    color: "var(--fg)",
  } as React.CSSProperties,
  logoText: {
    display: "flex",
    flexDirection: "column" as const,
    lineHeight: 1,
  } as React.CSSProperties,
  logoTitle: {
    fontSize: "12px",
    fontFamily: "var(--font-mono)",
    fontWeight: 600,
    letterSpacing: "var(--tr-eyebrow)",
    color: "var(--accent-600)",
  } as React.CSSProperties,
  logoSub: {
    fontSize: "11px",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    color: "var(--fg)",
    marginTop: "2px",
  } as React.CSSProperties,
  nav: {
    display: "none" as const,
    gap: "var(--s-6)",
    "@media (min-width: 768px)": {
      display: "flex",
    },
  } as any,
  navLink: {
    fontSize: "var(--t-body-sm)",
    fontWeight: 500,
    color: "var(--fg-muted)",
    transition: `color var(--dur-base) var(--ease-out)`,
  } as React.CSSProperties,
  mobileMenuBtn: {
    display: "block",
    fontSize: "24px",
    background: "none",
    border: "none",
    color: "var(--fg)",
    cursor: "pointer",
    padding: "var(--s-2)",
  } as React.CSSProperties,
  mobileNav: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--s-4)",
    padding: "var(--s-5) var(--s-6)",
    borderTop: "1px solid var(--border)",
    background: "var(--bg-elev)",
  } as React.CSSProperties,
  mobileNavLink: {
    fontSize: "var(--t-body-sm)",
    fontWeight: 500,
    color: "var(--fg)",
  } as React.CSSProperties,
};
