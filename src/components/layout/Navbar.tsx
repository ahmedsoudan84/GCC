"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sectors", label: "Sectors" },
  { href: "#about", label: "About" },
  { href: "#clients", label: "Clients" },
  { href: "#offices", label: "Offices" },
  { href: "#contact", label: "Contact" },
];

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
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md border-b border-navy-700/60 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group">
            <span className="text-gold-400 font-display font-bold text-xl tracking-tight group-hover:text-gold-300 transition-colors">
              GCC
            </span>
            <span className="text-slate-400 text-[9px] tracking-[0.25em] uppercase mt-0.5">
              International
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-slate-300 text-sm tracking-wide hover:text-gold-400 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="text-sm px-5 py-2.5 rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 font-medium tracking-wide"
            >
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-slate-300 hover:text-gold-400 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="fixed inset-0 z-40 bg-navy-900/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 md:hidden"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.07, duration: 0.4 }}
            >
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-block px-8 py-3 rounded-full border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 transition-all font-medium"
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
