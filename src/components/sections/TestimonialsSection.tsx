"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "GCC International demonstrated exceptional capability in executing complex reconstruction projects under the most challenging field conditions. Their engineering expertise and rigorous quality standards have been instrumental in our development programs across the region.",
    author: "Senior Programme Manager",
    organization: "United Nations Development Programme",
    location: "New York, USA",
    tag: "UNDP",
  },
  {
    quote:
      "Working with GCC on critical infrastructure projects across North Africa has been a defining partnership. Their ability to mobilize resources at scale and manage large EPC contracts to specification sets them firmly apart from contractors we have previously engaged.",
    author: "Director of Infrastructure & Development",
    organization: "World Bank Group",
    location: "Washington, D.C., USA",
    tag: "World Bank",
  },
  {
    quote:
      "GCC's performance on Defence & Security infrastructure met and exceeded NATO procurement standards. Their understanding of mission-critical compliance requirements and operational security protocols is second to none among contractors in this space.",
    author: "Senior Contracting Officer",
    organization: "U.S. Army Corps of Engineers",
    location: "Pentagon, Virginia, USA",
    tag: "US DoD",
  },
];

const E = [0.22, 1, 0.36, 1] as const;

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-28 bg-navy-950 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,148,60,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: E }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Partner Testimonials
            </span>
            <span className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Trusted by those who{" "}
            <span className="gradient-gold italic">shape the world.</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Two decades of mission-critical partnerships with the world&apos;s foremost
            international organisations and government agencies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.12, duration: 0.7, ease: E }}
              className="group relative bg-navy-800 rounded-2xl p-8 border border-navy-700/60 hover:border-gold-500/20 transition-all duration-300 flex flex-col"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(500px circle at 50% 0%, rgba(201,148,60,0.06) 0%, transparent 70%)",
                }}
              />

              {/* Tag */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 border border-gold-500/20 font-medium">
                  {t.tag}
                </span>
                <Quote size={18} className="text-gold-500/30" />
              </div>

              {/* Quote */}
              <p className="relative text-slate-300 text-[15px] leading-[1.75] flex-1 font-display italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="relative mt-8 pt-6 border-t border-navy-700/60">
                <p className="text-slate-100 text-sm font-semibold">{t.author}</p>
                <p className="text-gold-500/70 text-xs mt-0.5">{t.organization}</p>
                <p className="text-slate-600 text-[11px] mt-0.5 tracking-wide">
                  {t.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {[
            "United Nations",
            "World Bank",
            "NATO",
            "US Department of Defence",
            "USAID",
            "UNOPS",
          ].map((org) => (
            <span
              key={org}
              className="text-slate-600 text-[11px] font-medium tracking-[0.18em] uppercase hover:text-slate-400 transition-colors cursor-default"
            >
              {org}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
