"use client";

import { motion } from "framer-motion";
import { Globe, Users, Award, Building } from "lucide-react";

const pillars = [
  { icon: Globe, label: "Global Reach", desc: "Operations across MENA, Africa, Europe and North America" },
  { icon: Users, label: "Local Expertise", desc: "2,670+ professionals with deep regional knowledge" },
  { icon: Award, label: "Certified Excellence", desc: "ISO 9001, ISO 14001, OHSAS 18001 & UN Vendor status" },
  { icon: Building, label: "End-to-End EPC", desc: "Design, procurement, construction and supervision" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold-500" />
              <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">About GCC</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6">
              A network built for<br /><span className="gradient-gold italic">reconstruction.</span>
            </h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              <p>Founded in 2003 and headquartered in Mayfair, London, Global Consolidated Contractors International works closely alongside governments, defence funds, intergovernmental organisations, and state-owned corporations to analyse, conceive, and execute nationwide reconstruction and development initiatives.</p>
              <p>Our UK headquarters manages upper management and finance while coordinating with US, UK, and EU-registered entities. Our New York satellite branch collaborates directly with the United Nations to develop projects across Africa, maintaining partnerships with US suppliers and financial institutions.</p>
              <p>With a MENA hub in Doha, Qatar, and regional coverage across North Africa and the Gulf, GCC International brings both global standards and local intelligence to every engagement.</p>
            </div>
            <div className="mt-10">
              <p className="text-slate-500 text-xs tracking-[0.2em] uppercase mb-4">Core Focus Areas</p>
              <div className="flex flex-wrap gap-2">
                {["Education", "Healthcare", "Infrastructure", "Energy"].map((f) => (
                  <span key={f} className="px-4 py-1.5 rounded-full text-xs font-medium text-gold-400 border border-gold-500/30 bg-gold-500/5">{f}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="relative overflow-hidden rounded-2xl bg-navy-800 border border-navy-700/60 p-8 mb-6">
              <span
                className="absolute -right-4 -bottom-4 font-display font-bold text-9xl leading-none select-none pointer-events-none"
                style={{ color: "rgba(201,148,60,0.07)" }}
              >
                2003
              </span>
              <p className="relative text-slate-300 text-sm leading-relaxed italic font-display text-lg">
                &ldquo;Improving the standard of living in developing communities through specialized reconstruction programs.&rdquo;
              </p>
              <div className="relative mt-4 flex items-center gap-2">
                <span className="w-4 h-px bg-gold-500" />
                <span className="text-gold-500 text-xs tracking-wider">GCC Mission Statement</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease }}
                    className="bg-navy-800 rounded-xl p-5 border border-navy-700/60 hover:border-gold-500/20 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-3">
                      <Icon size={16} className="text-gold-400" />
                    </div>
                    <p className="text-slate-100 text-sm font-semibold mb-1">{p.label}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
