"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const team = [
  {
    name: "James Whitmore",
    title: "Chief Executive Officer",
    bio: "20+ years leading international EPC programs across MENA and Sub-Saharan Africa. Former senior executive at global engineering conglomerates.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    region: "London, UK",
  },
  {
    name: "Layla Al-Hassan",
    title: "Chief Operating Officer",
    bio: "Directs all operational delivery across GCC's project portfolio. Engineering background with deep field experience in infrastructure reconstruction.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    region: "Doha, Qatar",
  },
  {
    name: "Marcus Reid",
    title: "Chief Financial Officer",
    bio: "Oversees financial strategy, international project financing, and relationships with development banks and multilateral funding bodies.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    region: "New York, USA",
  },
  {
    name: "Dr. Nadia Koussa",
    title: "Technical Director",
    bio: "PhD in Civil & Structural Engineering. Leads design excellence and technical standards across all sectors. UN and NATO project experience.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    region: "Cairo, Egypt",
  },
  {
    name: "Omar Khalid",
    title: "Director, Defence & Security",
    bio: "Former military infrastructure advisor. Manages all DoD, NATO, and security-critical project engagements and compliance frameworks.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    region: "Washington D.C., USA",
  },
  {
    name: "Elena Marchetti",
    title: "Director, Energy & Sustainability",
    bio: "Leads GCC's Oil, Gas & Energy sector and green energy transition programs. Specialist in upstream infrastructure and ESG integration.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?auto=format&fit=crop&w=400&q=80",
    region: "London, UK",
  },
];

const E = [0.22, 1, 0.36, 1] as const;

export default function TeamSection() {
  return (
    <section id="team" className="py-28 bg-navy-900 relative overflow-hidden">
      {/* Subtle image overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1800&q=30\")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: E }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              Leadership
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-lg">
              The people who make
              <br />
              <span className="gradient-gold italic">it happen.</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              A leadership team forged from decades of international engineering,
              finance, and government partnership experience.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: E }}
              className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-navy-700/60 hover:border-gold-500/20 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  unoptimized
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(7,18,36,0.95) 0%, rgba(7,18,36,0.4) 50%, transparent 100%)",
                  }}
                />
                {/* Region badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-navy-900/80 backdrop-blur-sm text-slate-400 border border-navy-700/60">
                    {member.region}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-slate-50 font-semibold text-base">{member.name}</h3>
                    <p className="text-gold-400/80 text-xs mt-0.5 tracking-wide font-medium">
                      {member.title}
                    </p>
                  </div>
                  <button
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-navy-600/60 flex items-center justify-center text-slate-500 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-150"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <ExternalLink size={13} />
                  </button>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mt-3">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom caption */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-sm">
            Supported by a global team of{" "}
            <span className="text-slate-400 font-medium">2,670+ professionals</span>{" "}
            across engineering, procurement, construction and finance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
