"use client";

import { motion } from "framer-motion";
import { Building2, Shield, Flame, ArrowRight } from "lucide-react";

const sectors = [
  {
    icon: Building2,
    title: "Infrastructure & Buildings",
    description: "From transportation networks and utilities to residential, healthcare, and educational facilities — we design, procure, and construct the foundations of modern societies.",
    services: ["Transportation & Roads", "Sewage & Sanitation", "Utility Networks", "Healthcare Facilities", "Educational Buildings", "Commercial & Administrative"],
    accent: "#C9943C",
  },
  {
    icon: Shield,
    title: "Defence & Security",
    description: "Trusted by the US Department of Defence and NATO, we deliver mission-critical infrastructure including airports, runways, military camps, and secure installations worldwide.",
    services: ["Military Airports & Runways", "Secure Installations", "Military Camps", "Bunkers & Hardened Structures", "US DoD Registered Contractor", "NATO Projects"],
    accent: "#5C7A96",
  },
  {
    icon: Flame,
    title: "Oil, Gas & Energy",
    description: "Upstream, midstream, and downstream expertise across petrochemical and natural gas industries, complemented by a commitment to green energy technology transfers.",
    services: ["Upstream Operations", "Midstream Infrastructure", "Downstream Facilities", "Petrochemical Plants", "Natural Gas Facilities", "Green Energy Transfers"],
    accent: "#E8B84B",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const card = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } };

export default function SectorsSection() {
  return (
    <section id="sectors" className="py-28 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">Our Sectors</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Three pillars of<br /><span className="gradient-gold italic">global impact.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {sectors.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={card}
                className="group relative bg-navy-800 rounded-2xl p-8 border border-navy-700/60 hover:border-gold-500/30 transition-all duration-500 overflow-hidden cursor-default"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(400px circle at 50% 0%, ${s.accent}10 0%, transparent 70%)` }}
                />
                <div
                  className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: `${s.accent}18`, border: `1px solid ${s.accent}30` }}
                >
                  <Icon size={22} style={{ color: s.accent }} />
                </div>
                <h3 className="relative font-display text-xl font-bold text-slate-50 mb-3">{s.title}</h3>
                <p className="relative text-slate-400 text-sm leading-relaxed mb-6">{s.description}</p>
                <ul className="relative space-y-2 mb-8">
                  {s.services.map((svc) => (
                    <li key={svc} className="flex items-center gap-2.5 text-slate-400 text-xs">
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: s.accent }} />
                      {svc}
                    </li>
                  ))}
                </ul>
                <div className="relative flex items-center gap-1.5 text-xs font-medium group-hover:gap-2.5 transition-all duration-300" style={{ color: s.accent }}>
                  Learn more <ArrowRight size={13} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
