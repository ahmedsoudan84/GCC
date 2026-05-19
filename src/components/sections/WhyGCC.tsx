'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  {
    number: '01',
    title: 'Integrated by design',
    body: 'Most trade firms do one thing. GGC does everything — finance, logistics, compliance, capital markets — as a single coordinated offering. Your deal doesn\'t fall through the cracks between vendors.',
  },
  {
    number: '02',
    title: '30 years of relationships',
    body: 'Every corridor we operate in was built through long-term relationships. Our network of banks, carriers, regulators, and buyers is proprietary — and it opens doors that pure-play competitors cannot.',
  },
  {
    number: '03',
    title: 'Technology that works in the real world',
    body: 'TradeOS digitalises your entire deal cycle — documents, compliance, payments, tracking — without replacing the human judgment that complex trade demands.',
  },
  {
    number: '04',
    title: 'Compliance without friction',
    body: 'Our in-house sanctions and compliance team has navigated every major regulatory event of the past decade with zero enforcement actions. We protect your business and keep deals moving.',
  },
];

const E = [0.22, 1, 0.36, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
};

export default function WhyGCC() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }} id="why-ggc">
      <div className="section-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left – image + stat callouts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: E }}
          >
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '3/4', boxShadow: '12px 12px 30px #060c22, -12px -12px 30px #111c50', marginBottom: '2rem' }}>
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                alt="Global operations"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,20,55,0.8) 0%, transparent 50%)' }} />
            </div>

            {/* Stat overlay cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: '150+', label: 'Countries' },
                { value: '850+', label: 'Partners' },
                { value: '4', label: 'Global Offices' },
                { value: '24/7', label: 'Operations' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="neu-card"
                  style={{ padding: '1.25rem', textAlign: 'center' }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--accent-600)', letterSpacing: '-0.02em', marginBottom: '0.25rem', fontVariantNumeric: 'tabular-nums' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'rgba(250,250,250,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right – pillars */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: E }}
              style={{ marginBottom: '2.5rem' }}
            >
              <p className="section-eyebrow">Why GGC</p>
              <h2 className="section-headline">Why the world's top enterprises choose us</h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(250,250,250,0.5)' }}>
                In a market full of brokers and advisors, GGC is the partner that executes.
                Here's why that distinction matters.
              </p>
            </motion.div>

            <motion.div
              style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.number}
                  variants={itemVariants}
                  className="neu-card"
                  style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.5rem' }}
                  whileHover={{ y: -2, scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <span style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--accent-600)', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)', flexShrink: 0, paddingTop: '0.15rem' }}>
                    {pillar.number}
                  </span>
                  <div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ivory-100)', marginBottom: '0.4rem', letterSpacing: '-0.01em' }}>
                      {pillar.title}
                    </h3>
                    <p style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(250,250,250,0.45)' }}>
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              style={{ marginTop: '2rem' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/about" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
                About GGC <span className="arrow" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
