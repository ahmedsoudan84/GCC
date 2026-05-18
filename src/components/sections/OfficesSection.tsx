"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const offices = [
  {
    city: "London", role: "Global Headquarters", flag: "🇬🇧",
    address: ["Unit 1, 3 Trebeck Street", "Mayfair, London", "W1J 7LS, United Kingdom"],
    phone: "+44 (0)207 499 9982", email: "info@gcc-intl.com", isPrimary: true,
  },
  {
    city: "New York", role: "Americas Office", flag: "🇺🇸",
    address: ["131 E 66th Street", "New York City", "NY 10065, United States"],
    phone: "(212) 628-1743", email: "info@gcc-intl.com", isPrimary: false,
  },
  {
    city: "Doha", role: "MENA Regional Hub", flag: "🇶🇦",
    address: ["Doha", "Qatar"],
    phone: null, email: "info@gcc-intl.com", isPrimary: false,
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function OfficesSection() {
  return (
    <section id="offices" className="py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Global Presence</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Wherever your project is,<br /><span className="gradient-gold italic">we&apos;re there.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((o, i) => (
            <motion.div
              key={o.city}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.65, ease }}
              className={`relative rounded-2xl p-8 border transition-all ${
                o.isPrimary
                  ? "bg-navy-800 border-gold-500/30 shadow-xl shadow-gold-500/5"
                  : "bg-navy-800/60 border-navy-700/50 hover:border-navy-600"
              }`}
            >
              {o.isPrimary && (
                <span className="absolute top-4 right-4 text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/25">HQ</span>
              )}
              <div className="text-3xl mb-4">{o.flag}</div>
              <div className="font-display text-2xl font-bold text-slate-50 mb-1">{o.city}</div>
              <div className="text-gold-400 text-xs font-medium tracking-wide mb-5">{o.role}</div>
              <div className="space-y-3">
                <div className="flex gap-2.5">
                  <MapPin size={14} className="text-slate-500 mt-0.5 flex-shrink-0" />
                  <div>{o.address.map((line) => <p key={line} className="text-slate-400 text-sm leading-relaxed">{line}</p>)}</div>
                </div>
                {o.phone && (
                  <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-gold-400 transition-colors group">
                    <Phone size={13} className="text-slate-500 group-hover:text-gold-400 transition-colors" />
                    {o.phone}
                  </a>
                )}
                <a href={`mailto:${o.email}`} className="flex items-center gap-2.5 text-slate-400 text-sm hover:text-gold-400 transition-colors group">
                  <Mail size={13} className="text-slate-500 group-hover:text-gold-400 transition-colors" />
                  {o.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6, ease }}
          className="mt-10 bg-navy-800/50 rounded-2xl p-8 border border-navy-700/40"
        >
          <p className="text-slate-500 text-xs tracking-[0.2em] uppercase mb-4">Regional Coverage</p>
          <div className="flex flex-wrap gap-3">
            {["Egypt", "Libya", "Morocco", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Iraq", "Sub-Saharan Africa"].map((region) => (
              <span key={region} className="text-slate-300 text-sm px-3 py-1 rounded-full border border-navy-600/60 bg-navy-700/30">{region}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
