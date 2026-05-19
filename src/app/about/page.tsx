'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const milestones = [
  { year: '1998', event: 'Founded in New York by James Richardson and Michael Al-Rashid with a focus on US–MENA trade finance.' },
  { year: '2003', event: 'Opened London office. Structured first sovereign-backed commodity deal for a Gulf state — $400M.' },
  { year: '2008', event: 'Navigated the financial crisis without a single client default, cementing GGC\'s reputation for risk discipline.' },
  { year: '2011', event: 'Launched Singapore hub to serve growing APAC corridor demand. Sarah Chen appointed COO.' },
  { year: '2015', event: 'Crossed $100B in cumulative trade financed. Launched Logistics division with 3 carrier partners.' },
  { year: '2019', event: 'Opened Doha office. TradeOS platform goes live, processing 100,000 transactions in year one.' },
  { year: '2022', event: 'Carrier network reaches 18 partners. Compliance team navigates new Russia/Belarus sanction regime for 400+ affected clients.' },
  { year: '2024', event: '$480B annual trade volume. 850 partners. 12M shipments. Operating in 150 countries.' },
];

const values = [
  { title: 'Precision', body: 'In global trade, small errors carry outsized consequences. We obsess over detail at every layer of the transaction.' },
  { title: 'Accountability', body: 'We own outcomes, not activities. Our success metric is the successful execution of our clients\' mandates — nothing else.' },
  { title: 'Integrity', body: 'No transaction is worth the cost of a compliance breach or a broken promise. Our reputation is our most valuable asset.' },
  { title: 'Speed', body: 'Trade doesn\'t pause. Our teams operate across time zones with 24-hour response commitments on every active deal.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="page-header" style={{ paddingBottom: '6rem' }}>
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">About GGC</p>
          <h1 className="section-headline" style={{ maxWidth: '700px' }}>
            26 years connecting enterprise with the world
          </h1>
          <p className="section-subheadline" style={{ maxWidth: '600px' }}>
            Global Group Corp. was built on a simple conviction: that the world's most important
            enterprises deserve a trade partner that can move as fast as they do, in any market,
            without compromise.
          </p>
        </motion.div>
      </div>

      {/* Mission statement */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-inner">
          <div className="grid-2" style={{ gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-eyebrow">Our Mission</p>
              <h2 className="section-headline">
                We exist to make global trade frictionless
              </h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(250,250,250,0.55)', marginBottom: '1.25rem' }}>
                The world's most complex trade corridors — those linking emerging economies to
                developed markets, agricultural belts to industrial hubs — are also the most
                underserved. Bureaucracy, capital gaps, and compliance uncertainty leave trillions
                of dollars of commerce unrealised every year.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(250,250,250,0.55)' }}>
                GGC exists to close that gap. By integrating trade finance, logistics, and capital
                into a single seamless offering, we reduce the friction that causes deals to collapse
                and supply chains to break — and we've been doing it since 1998.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '8px 8px 24px #070e28, -8px -8px 24px #0f1a46' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80"
                alt="Global shipping and logistics"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <p className="section-eyebrow">What We Stand For</p>
            <h2 className="section-headline">Core values</h2>
          </motion.div>

          <div className="grid-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="neu-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div style={{ width: '32px', height: '2px', background: 'var(--accent-600)', marginBottom: '1.5rem', borderRadius: '2px' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--ivory-100)', marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'rgba(250,250,250,0.5)' }}>
                  {value.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '3.5rem' }}
          >
            <p className="section-eyebrow">Our History</p>
            <h2 className="section-headline">26 years, one trajectory</h2>
          </motion.div>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '5.5rem', top: 0, bottom: 0, width: '1px', background: 'rgba(83,97,232,0.2)' }} />

            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{ display: 'flex', gap: '3rem', alignItems: 'flex-start', marginBottom: '2.5rem', position: 'relative' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-600)', width: '3rem', flexShrink: 0, letterSpacing: '-0.01em', paddingTop: '0.1rem', fontFamily: 'var(--font-mono)' }}>
                  {m.year}
                </span>
                {/* Dot */}
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-600)', flexShrink: 0, marginTop: '0.4rem', position: 'relative', zIndex: 1, boxShadow: '0 0 0 3px rgba(56,189,248,0.15)' }} />
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, color: 'rgba(250,250,250,0.6)', paddingTop: '0.05rem' }}>
                  {m.event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3rem', alignItems: 'center' }}
        >
          <div>
            <p className="section-eyebrow">Join us</p>
            <h2 className="section-headline" style={{ maxWidth: '520px' }}>
              Ready to work with a partner that moves at your speed?
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/contact" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
              Get in Touch <span className="arrow" />
            </Link>
            <Link href="/services" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
              Explore Services
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
