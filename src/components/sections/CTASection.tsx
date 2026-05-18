"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function CTASection() {
  return (
    <section id="contact" className="py-28 bg-navy-950 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(201,148,60,0.08) 0%, rgba(201,148,60,0.02) 50%, transparent 70%)" }}
      />
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Start a Conversation</span>
            <span className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
            Ready to discuss<br /><span className="gradient-gold italic">your project?</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you represent a government body, international organisation, or private sector client, our team is ready to explore how GCC International can support your reconstruction or development initiative.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:info@gcc-intl.com"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide hover:bg-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/25"
            >
              <Mail size={16} />
              info@gcc-intl.com
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+442074999982"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border border-navy-500 text-slate-200 font-medium text-sm tracking-wide hover:border-gold-500/50 hover:text-gold-400 transition-all duration-300"
            >
              <Phone size={15} />
              +44 (0)207 499 9982
            </a>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="border-t border-navy-700/40 pt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {["ISO 9001", "ISO 14001", "OHSAS 18001", "TRACE Certified", "UN Vendor"].map((cert) => (
              <span key={cert} className="text-slate-600 text-xs font-mono tracking-wider">{cert}</span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
