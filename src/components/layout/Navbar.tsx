"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sectors", label: "Sectors" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#clients", label: "Partners" },
  { href: "#offices", label: "Offices" },
  { href: "#contact", label: "Contact" },
];

function GCCLogoMark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const isLg = size === "lg";
  return (
    <div className="flex items-center gap-3 select-none">
      {/* Stylised GCC monogram */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: isLg ? 48 : 36,
          height: isLg ? 48 : 36,
        }}
      >
        {/* Outer circle (globe ring) */}
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full"
        >
          <circle
            cx="24"
            cy="24"
            r="22"
            stroke="rgba(201,148,60,0.35)"
            strokeWidth="1"
          />
          {/* Latitude lines */}
          <ellipse
            cx="24"
            cy="24"
            rx="22"
            ry="9"
            stroke="rgba(201,148,60,0.2)"
            strokeWidth="0.75"
            fill="none"
          />
          <ellipse
            cx="24"
            cy="24"
            rx="14"
            ry="22"
            stroke="rgba(201,148,60,0.2)"
            strokeWidth="0.75"
            fill="none"
          />
        </svg>
        {/* GCC initials */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: isLg ? "15px" : "11px",
            fontWeight: 700,
            color: "#E8B84B",
            letterSpacing: "0.04em",
            lineHeight: 1,
          }}
        >
          GCC
        </div>
      </div>
      {/* Text mark */}
      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: isLg ? "15px" : "12px",
            fontWeight: 600,
            color: "#F0EDE8",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Global Group Corp.
        </span>
        <span
          style={{
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontSize: isLg ? "9px" : "8px",
            fontWeight: 400,
            color: "#5C7A96",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            marginTop: "2px",
          }}
        >
          International
        </span>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay: 0 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${
          scrolled
            ? "bg-navy-900/96 backdrop-blur-md border-b border-navy-700/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link href="/" aria-label="GCC International Home">
            <GCCLogoMark size="sm" />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-400 text-[13px] tracking-wide hover:text-gold-400 transition-colors duration-150 font-medium"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="text-[13px] px-5 py-2.5 rounded-full border border-gold-500/60 text-gold-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-200 font-semibold tracking-wide"
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-slate-300 hover:text-gold-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed inset-0 z-40 bg-navy-900/99 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            <div className="mb-4">
              <GCCLogoMark size="lg" />
            </div>
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl text-slate-100 hover:text-gold-400 transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06, duration: 0.4 }}
            >
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-block px-8 py-3 rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 transition-all font-semibold"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
