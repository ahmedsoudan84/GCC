'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TrendingUp, Truck, BarChart3, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Trade Finance',
    description: 'Letters of credit, supply chain finance, and commodity-backed instruments across 200+ banking partners.',
    stat: '$240B+',
    statLabel: 'Financed annually',
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    description: 'Multi-modal freight management with real-time tracking across 150 countries and 18 carrier partners.',
    stat: '12M+',
    statLabel: 'Shipments per year',
  },
  {
    icon: BarChart3,
    title: 'Capital Markets',
    description: 'Cross-border debt structuring, project finance, and trade-related bond placement for mid and large-cap enterprises.',
    stat: '$120B+',
    statLabel: 'Capital arranged',
  },
  {
    icon: Shield,
    title: 'Customs & Compliance',
    description: 'Real-time sanctions screening, AML/KYC due diligence, and regulatory strategy across 47 jurisdictions.',
    stat: '99.97%',
    statLabel: 'Compliance rate',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Services() {
  return (
    <section className="section" style={{ background: 'var(--bg-primary)' }} id="services">
      <div className="section-inner">
        {/* Header */}
        <motion.div
          style={{ marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">What We Do</p>
          <h2 className="section-headline">Six lines. One integrated group.</h2>
          <p className="section-subheadline">
            From the moment a deal is structured to the moment goods arrive at port,
            GGC provides every layer of support that enterprise-scale trade demands.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="neu-card"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                style={{ cursor: 'default' }}
              >
                {/* Icon */}
                <motion.div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(56,189,248,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    boxShadow: '4px 4px 10px #070e28, -4px -4px 10px #0f1a46',
                  }}
                  whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.4 } }}
                >
                  <Icon size={22} style={{ color: 'var(--accent-600)' }} />
                </motion.div>

                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: 'var(--ivory-100)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(250,250,250,0.45)', marginBottom: '1.5rem' }}>
                  {service.description}
                </p>

                {/* Stat */}
                <div style={{ borderTop: '1px solid rgba(83,97,232,0.15)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-600)', letterSpacing: '-0.02em', display: 'block' }}>
                    {service.stat}
                  </span>
                  <span style={{ fontSize: '0.6875rem', color: 'rgba(250,250,250,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    {service.statLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          style={{ marginTop: '3rem', textAlign: 'center' }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/services" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
            View All Services <span className="arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
