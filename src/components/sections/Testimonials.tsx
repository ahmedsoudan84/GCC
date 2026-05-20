'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'GGC structured a $120M commodity finance facility in under three weeks — a timeline no other partner had even quoted. Their MENA relationships are unmatched.',
    author: 'Chief Procurement Officer',
    company: 'Global Energy Group, Abu Dhabi',
    initial: 'G',
  },
  {
    quote: 'We\'ve worked with brokers. We\'ve worked with banks. GGC is the first partner that actually owns the outcome end-to-end. The compliance team alone has saved us six figures in potential penalties.',
    author: 'VP Supply Chain',
    company: 'Pharmaceutical MNC, Basel',
    initial: 'P',
  },
  {
    quote: 'TradeOS reduced our documentation processing time by 60%. Real-time tracking, automated LC issuance, and one dashboard for everything. It\'s transformative.',
    author: 'Head of Trade Operations',
    company: 'Asian Conglomerate, Singapore',
    initial: 'A',
  },
];

const E = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
};

export default function Testimonials() {
  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }} id="testimonials">
      <div className="section-inner">
        <motion.div
          style={{ marginBottom: '3.5rem', textAlign: 'center' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: E }}
        >
          <p className="section-eyebrow">Client Voices</p>
          <h2 className="section-headline" style={{ maxWidth: '600px', margin: '0 auto 1rem' }}>
            Trusted by enterprises across six continents
          </h2>
          <div className="section-divider" style={{ margin: '0 auto' }} />
        </motion.div>

        <motion.div
          className="grid-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="neu-card"
              style={{ position: 'relative', paddingTop: '2rem' }}
              whileHover={{ y: -3, transition: { duration: 0.2, ease: 'easeOut' } }}
            >
              {/* Quote mark */}
              <span style={{
                position: 'absolute',
                top: '1.25rem',
                left: '1.5rem',
                fontSize: '4rem',
                lineHeight: 1,
                color: 'rgba(56,189,248,0.18)',
                fontFamily: 'Georgia, serif',
                fontWeight: 700,
                pointerEvents: 'none',
              }}>
                "
              </span>

              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(250,250,250,0.6)', marginBottom: '1.75rem', paddingTop: '1rem' }}>
                {t.quote}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', borderTop: '1px solid rgba(83,97,232,0.15)', paddingTop: '1.25rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(56,189,248,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  color: 'var(--accent-600)',
                  flexShrink: 0,
                  boxShadow: '3px 3px 8px #070e28, -3px -3px 8px #0f1a46',
                }}>
                  {t.initial}
                </div>
                <div>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ivory-100)', marginBottom: '0.15rem' }}>{t.author}</p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(250,250,250,0.4)' }}>{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
