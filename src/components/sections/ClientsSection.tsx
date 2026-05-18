"use client";

import { motion } from "framer-motion";

const clients = [
  "United Nations (UNDP)", "UNOPS", "UN WOMEN", "NATO", "World Bank",
  "USAID", "US Department of Defence", "US Army Corps of Engineers",
  "US Department of State", "World Food Programme",
];

const doubled = [...clients, ...clients];

export default function ClientsSection() {
  return (
    <section id="clients" className="py-20 bg-navy-800 border-y border-navy-700/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Trusted Partners</span>
            <span className="w-8 h-px bg-gold-500" />
          </div>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Working with the world&apos;s most prominent international organizations and government agencies.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #071224 0%, transparent 100%)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #071224 0%, transparent 100%)" }} />

        <div className="animate-marquee gap-12 py-2">
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-8 py-3 rounded-full border border-navy-600/60 bg-navy-700/30 mx-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500/60 flex-shrink-0" />
              <span className="text-slate-300 text-sm font-medium whitespace-nowrap">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
