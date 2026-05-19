"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), {
  ssr: false,
  loading: () => <div className="w-[580px] h-[580px]" />,
});

const E = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="animate-orb absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,148,60,0.12) 0%, rgba(201,148,60,0.03) 60%, transparent 80%)",
          }}
        />
        <div
          className="animate-orb-b absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(24,64,150,0.22) 0%, rgba(24,64,150,0.05) 60%, transparent 80%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,148,60,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,60,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Globe — right side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, ease: E, delay: 0.4 }}
        className="absolute right-[-120px] top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block"
        style={{ zIndex: 1 }}
      >
        <div className="relative">
          {/* Fade mask — left side of globe blends into background */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #020B18 0%, #020B18 8%, transparent 35%)",
            }}
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 80% at 30% 50%, #020B18 0%, transparent 60%)",
            }}
          />
          <GlobeCanvas
            size={580}
            phi={1.3}
            speed={0.0025}
            baseColor={[0.04, 0.12, 0.32]}
            glowColor={[0.18, 0.38, 0.78]}
            markerColor={[0.85, 0.65, 0.24]}
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: E, delay: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-8 h-px bg-gold-500" />
          <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
            Est. 2003 &nbsp;·&nbsp; London &nbsp;·&nbsp; New York &nbsp;·&nbsp; Doha
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: E, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-bold leading-[1.04] tracking-tight max-w-3xl"
          style={{ letterSpacing: "-0.025em" }}
        >
          Building Tomorrow&apos;s
          <br />
          <span className="gradient-gold italic">Infrastructure,</span>
          <br />
          Today.
        </motion.h1>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: E, delay: 0.22 }}
          className="mt-7 text-slate-300 text-lg sm:text-xl leading-[1.7] max-w-xl"
        >
          A global EPC contractor partnering with the{" "}
          <span className="text-slate-100 font-medium">United Nations</span>,{" "}
          <span className="text-slate-100 font-medium">NATO</span>, the{" "}
          <span className="text-slate-100 font-medium">World Bank</span>, and
          governments worldwide to execute reconstruction and development programs
          across MENA, Africa, and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: E, delay: 0.34 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#sectors"
            className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide hover:bg-gold-400 transition-all duration-200 shadow-lg shadow-gold-500/25"
          >
            Explore Our Sectors
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-navy-500 text-slate-200 font-medium text-sm tracking-wide hover:border-gold-500/40 hover:text-gold-400 transition-all duration-200"
          >
            Our Story
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: E, delay: 0.46 }}
          className="mt-20 pt-10 border-t border-navy-700/50 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl"
        >
          {[
            { value: "180+", label: "Projects Delivered" },
            { value: "23", label: "Years of Excellence" },
            { value: "2,670+", label: "Professionals" },
            { value: "212+", label: "Subcontractors" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-gold tabular-nums">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs mt-1 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-600 z-10"
      >
        <span className="text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={15} />
        </motion.div>
      </motion.div>
    </section>
  );
}
