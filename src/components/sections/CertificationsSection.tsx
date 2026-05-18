"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const certs = [
  { code: "ISO 9001", title: "Quality Management", description: "Certified Quality Management System ensuring consistent delivery standards." },
  { code: "ISO 14001", title: "Environmental Management", description: "Environmental Management System demonstrating our commitment to sustainability." },
  { code: "OHSAS 18001", title: "Health & Safety", description: "Occupational Health & Safety Assessment Series certification." },
  { code: "TRACE", title: "Anti-Corruption", description: "TRACE International certification for anti-bribery and transparency compliance." },
  { code: "UN Vendor", title: "UN Registered", description: "Registered United Nations vendor, meeting the organisation's procurement standards." },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function CertificationsSection() {
  return (
    <section className="py-24 bg-navy-800 border-t border-navy-700/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Compliance & Standards</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Built on a foundation<br /><span className="gradient-gold italic">of trust.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {certs.map((c, i) => (
            <motion.div
              key={c.code}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.65, ease }}
              className="bg-navy-700/40 rounded-xl p-6 border border-navy-600/40 hover:border-gold-500/25 transition-all group"
            >
              <CheckCircle2 size={18} className="text-gold-500 mb-4 group-hover:text-gold-400 transition-colors" />
              <div className="font-mono text-xs text-gold-400/80 mb-1 tracking-wider">{c.code}</div>
              <div className="font-semibold text-slate-100 text-sm mb-2">{c.title}</div>
              <p className="text-slate-500 text-xs leading-relaxed">{c.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
