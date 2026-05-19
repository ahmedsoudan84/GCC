'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const offices = [
  {
    city: 'New York',
    address: '432 Park Avenue, 42nd Floor, New York, NY 10022',
    email: 'ny@ggc.global',
    phone: '+1 212 555 0100',
    hours: 'Mon–Fri, 08:00–18:00 EST',
  },
  {
    city: 'London',
    address: '30 St Mary Axe (The Gherkin), London EC3A 8BF',
    email: 'london@ggc.global',
    phone: '+44 20 7946 0958',
    hours: 'Mon–Fri, 08:00–18:00 GMT',
  },
  {
    city: 'Singapore',
    address: 'Marina Bay Financial Centre, Tower 3, Level 28, Singapore 018982',
    email: 'singapore@ggc.global',
    phone: '+65 6822 2006',
    hours: 'Mon–Fri, 08:00–18:00 SGT',
  },
  {
    city: 'Doha',
    address: 'Doha Tower, 28th Floor, West Bay, Doha, Qatar',
    email: 'doha@ggc.global',
    phone: '+974 4430 0500',
    hours: 'Sun–Thu, 08:00–17:00 AST',
  },
];

const subjects = [
  'Trade Finance Inquiry',
  'Logistics & Supply Chain',
  'Capital Markets Advisory',
  'Customs & Compliance',
  'Market Entry Strategy',
  'Digital Trade Solutions',
  'Partnership / Joint Venture',
  'Media & Press',
  'Other',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const set = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <div className="page-header">
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-headline" style={{ maxWidth: '640px' }}>
            Start a conversation about your trade objectives
          </h1>
          <p className="section-subheadline">
            Our advisors are available across four time zones. All initial consultations are
            complimentary and confidential.
          </p>
        </motion.div>
      </div>

      {/* Form + Offices */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="neu-card"
                  style={{ textAlign: 'center', padding: '3rem' }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--ivory-100)', marginBottom: '0.75rem' }}>
                    Message received
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(250,250,250,0.5)', lineHeight: 1.7 }}>
                    A member of our team will be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input className="neumorphic-input" placeholder="John Doe" value={form.name} onChange={(e) => set('name', e.target.value)} required />
                    </div>
                    <div>
                      <label style={labelStyle}>Company</label>
                      <input className="neumorphic-input" placeholder="Acme Corp" value={form.company} onChange={(e) => set('company', e.target.value)} />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input className="neumorphic-input" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => set('email', e.target.value)} required />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone</label>
                      <input className="neumorphic-input" placeholder="+1 (555) 000-0000" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Subject *</label>
                    <select
                      className="neumorphic-input"
                      value={form.subject}
                      onChange={(e) => set('subject', e.target.value)}
                      required
                      style={{ appearance: 'none', cursor: 'pointer' }}
                    >
                      <option value="">Select a topic...</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      className="neumorphic-input"
                      placeholder="Tell us about your trade objectives, volumes, and timelines..."
                      rows={6}
                      value={form.message}
                      onChange={(e) => set('message', e.target.value)}
                      required
                      style={{ resize: 'vertical', minHeight: '140px' }}
                    />
                  </div>

                  <button type="submit" className="ggc-btn on-dark" style={{ alignSelf: 'flex-start' }}>
                    Send Message <span className="arrow">→</span>
                  </button>
                </form>
              )}
            </motion.div>

            {/* Offices */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="section-eyebrow">Our Offices</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="neu-card"
                    style={{ padding: '1.5rem' }}
                  >
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ivory-100)', marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                      {office.city}
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <MapPin size={14} style={{ color: 'var(--accent-600)', flexShrink: 0, marginTop: '0.15rem' }} />
                        <span style={{ fontSize: '0.8125rem', color: 'rgba(250,250,250,0.5)', lineHeight: 1.5 }}>{office.address}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <Mail size={14} style={{ color: 'var(--accent-600)', flexShrink: 0 }} />
                        <a href={`mailto:${office.email}`} style={{ fontSize: '0.8125rem', color: 'var(--accent-600)', textDecoration: 'none' }}>{office.email}</a>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <Phone size={14} style={{ color: 'var(--accent-600)', flexShrink: 0 }} />
                        <a href={`tel:${office.phone}`} style={{ fontSize: '0.8125rem', color: 'rgba(250,250,250,0.5)', textDecoration: 'none' }}>{office.phone}</a>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <Clock size={14} style={{ color: 'var(--accent-600)', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.75rem', color: 'rgba(250,250,250,0.35)', fontFamily: 'var(--font-mono)' }}>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: 'rgba(250,250,250,0.5)',
  marginBottom: '0.5rem',
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
};
