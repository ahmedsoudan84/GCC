"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="animate-orb absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,148,60,0.18) 0%, rgba(201,148,60,0.04) 60%, transparent 80%)" }}
        />
        <div
          className="animate-orb-b absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(24,64,150,0.3) 0%, rgba(24,64,150,0.06) 60%, transparent 80%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(201,148,60,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,60,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-gold-500" />
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Est. 2003 &nbsp;·&nbsp; London &nbsp;·&nbsp; New York &nbsp;·&nbsp; Doha
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.12 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl"
        >
          Building Tomorrow&apos;s
          <br />
          <span className="gradient-gold italic">Infrastructure,</span>
          <br />
          Today.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.24 }}
          className="mt-8 text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl"
        >
          A global EPC contractor partnering with the{" "}
          <span className="text-slate-100 font-medium">United Nations</span>,{" "}
          <span className="text-slate-100 font-medium">NATO</span>, the{" "}
          <span className="text-slate-100 font-medium">World Bank</span>, and governments
          worldwide to execute reconstruction and development programs across MENA, Africa, and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.36 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#sectors"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20"
          >
            Explore Our Sectors
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-navy-500 text-slate-200 font-medium text-sm tracking-wide hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300"
          >
            About GCC
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.48 }}
          className="mt-20 pt-10 border-t border-navy-700/50 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { value: "180+", label: "Projects Delivered" },
            { value: "23", label: "Years of Excellence" },
            { value: "2,670+", label: "Professionals" },
            { value: "212+", label: "Subcontractors" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-gold">{stat.value}</div>
              <div className="text-slate-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
