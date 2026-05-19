"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const E = [0.22, 1, 0.36, 1] as const;

const sectors = [
  "Infrastructure & Buildings",
  "Defence & Security",
  "Oil, Gas & Energy",
  "Multiple Sectors",
  "Other",
];

const budgetRanges = [
  "< $5M",
  "$5M – $25M",
  "$25M – $100M",
  "$100M – $500M",
  "> $500M",
  "To be determined",
];

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  sector: string;
  country: string;
  budget: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  sector: "",
  country: "",
  budget: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate send — replace with your form endpoint (Formspree, EmailJS, etc.)
    await new Promise((r) => setTimeout(r, 1400));
    setSending(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28 bg-navy-950 relative overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(201,148,60,0.05) 0%, rgba(201,148,60,0.01) 50%, transparent 70%)",
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
              Start a Conversation
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-lg">
              Ready to discuss
              <br />
              <span className="gradient-gold italic">your project?</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              Whether you represent a government body, international organisation,
              or private sector client — our team is ready to explore how GCC
              International can support your initiative.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: E }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4 bg-navy-800/50 rounded-2xl border border-navy-700/60 p-12">
                <CheckCircle2 size={48} className="text-gold-400" />
                <h3 className="font-display text-2xl font-bold text-slate-50">
                  Message Received
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Thank you for your inquiry. A member of our team will be in
                  touch within one business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-2 text-gold-400 text-sm hover:text-gold-300 transition-colors underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                      Organisation *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your organisation"
                      className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@organisation.com"
                      className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                      Sector
                    </label>
                    <select
                      name="sector"
                      value={form.sector}
                      onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy-800">
                        Select sector…
                      </option>
                      {sectors.map((s) => (
                        <option key={s} value={s} className="bg-navy-800">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none focus:border-gold-500/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-navy-800">
                        Select range…
                      </option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-navy-800">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                    Country / Region
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="e.g. Libya, Niger, Iraq…"
                    className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-gold-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 text-xs tracking-[0.15em] uppercase mb-2">
                    Project Overview *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your project, objectives, and how we can help…"
                    className="w-full bg-navy-800 border border-navy-600/60 rounded-xl px-4 py-3 text-slate-100 text-sm placeholder:text-slate-600 focus:outline-none focus:border-gold-500/50 transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gold-500 text-navy-950 font-semibold text-sm tracking-wide hover:bg-gold-400 disabled:opacity-60 transition-all duration-200 shadow-lg shadow-gold-500/20"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-navy-800/40 border-t-navy-800 rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Submit Inquiry
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform duration-200"
                      />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Sidebar — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: E, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Office cards */}
            {[
              {
                city: "London",
                role: "Global Headquarters",
                flag: "🇬🇧",
                address: "Unit 1, 3 Trebeck Street\nMayfair, London W1J 7LS",
                phone: "+44 (0)207 499 9982",
                email: "info@gcc-intl.com",
              },
              {
                city: "New York",
                role: "Americas Office",
                flag: "🇺🇸",
                address: "131 E 66th Street\nNew York, NY 10065",
                phone: "(212) 628-1743",
                email: "info@gcc-intl.com",
              },
              {
                city: "Doha",
                role: "MENA Regional Hub",
                flag: "🇶🇦",
                address: "Doha, Qatar",
                phone: null,
                email: "info@gcc-intl.com",
              },
            ].map((o) => (
              <div
                key={o.city}
                className="bg-navy-800/60 rounded-xl p-5 border border-navy-700/50"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="text-xl">{o.flag}</span>
                  <div>
                    <p className="text-slate-100 font-semibold text-sm">{o.city}</p>
                    <p className="text-gold-400/70 text-[10px] tracking-wide">{o.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-400">
                    <MapPin size={12} className="mt-0.5 flex-shrink-0 text-slate-600" />
                    <span className="whitespace-pre-line leading-relaxed">{o.address}</span>
                  </div>
                  {o.phone && (
                    <a
                      href={`tel:${o.phone.replace(/\D/g, "")}`}
                      className="flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors"
                    >
                      <Phone size={11} className="text-slate-600" />
                      {o.phone}
                    </a>
                  )}
                  <a
                    href={`mailto:${o.email}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors"
                  >
                    <Mail size={11} className="text-slate-600" />
                    {o.email}
                  </a>
                </div>
              </div>
            ))}

            {/* Certs */}
            <div className="bg-navy-800/40 rounded-xl p-5 border border-navy-700/40">
              <p className="text-slate-600 text-[10px] tracking-[0.2em] uppercase mb-3">
                Certifications
              </p>
              <div className="flex flex-wrap gap-2">
                {["ISO 9001", "ISO 14001", "OHSAS 18001", "TRACE", "UN Vendor"].map(
                  (c) => (
                    <span
                      key={c}
                      className="text-slate-500 text-[10px] font-mono tracking-wide px-2.5 py-1 rounded-full border border-navy-600/50"
                    >
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
