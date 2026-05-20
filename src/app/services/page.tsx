'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, TrendingUp, Truck, BarChart3, Shield, Globe2, Zap } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Trade Finance',
    tagline: 'Capital that moves with commerce',
    description:
      'From letters of credit to supply chain finance, GGC structures bespoke financing solutions that eliminate liquidity constraints at every step of the trade cycle. Our network of 200+ banking partners spans the primary trade corridors of Asia, the Middle East, Europe, and the Americas.',
    capabilities: ['Letters of Credit (LC & SBLC)', 'Documentary Collections', 'Supply Chain Finance', 'Commodity Trade Finance', 'Guarantee Issuance', 'Export Credit Solutions'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    stat: '$240B+',
    statLabel: 'Financed annually',
  },
  {
    icon: Truck,
    title: 'Logistics & Supply Chain',
    tagline: 'End-to-end visibility across every mile',
    description:
      'GGC Logistics orchestrates complex multi-modal freight movements across 150 countries with a proprietary real-time tracking platform. From bulk commodities to time-critical pharmaceuticals, our operations team manages customs clearance, warehousing, and last-mile delivery.',
    capabilities: ['Ocean & Air Freight', 'Customs Brokerage', 'Warehousing & Distribution', 'Cold Chain Management', 'Dangerous Goods Handling', 'Project & Breakbulk Cargo'],
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
    stat: '12M+',
    statLabel: 'Shipments annually',
  },
  {
    icon: BarChart3,
    title: 'Capital Markets',
    tagline: 'Strategic capital for growth mandates',
    description:
      'Our Capital Markets division advises on debt structuring, cross-border M&A, and project finance for mid-market and large-cap companies with international operations. We bridge institutional investors to high-yield trade-related assets with proven risk profiles.',
    capabilities: ['Debt Structuring & Placement', 'Cross-Border M&A Advisory', 'Project Finance', 'Trade-Related Bond Issuance', 'Private Equity Co-investment', 'Structured Trade Products'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    stat: '$120B+',
    statLabel: 'Capital arranged',
  },
  {
    icon: Shield,
    title: 'Customs & Compliance',
    tagline: 'Navigate every jurisdiction with confidence',
    description:
      'Sanctions screening, AML compliance, and regulatory intelligence — our compliance team has a proven track record navigating the world\'s most complex regulatory environments. We provide real-time sanction screening and jurisdictional advisory as standard across all transactions.',
    capabilities: ['Sanctions Screening & Advisory', 'AML/KYC Due Diligence', 'Trade Classification (HS)', 'Export Controls', 'Regulatory Change Management', 'Customs Optimization'],
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    stat: '99.97%',
    statLabel: 'Compliance rate',
  },
  {
    icon: Globe2,
    title: 'Market Entry & Strategy',
    tagline: 'Open new corridors with confidence',
    description:
      'Entering an unfamiliar market is a function of relationships, intelligence, and timing. GGC\'s Market Intelligence unit provides on-the-ground analysis across 50+ priority markets, connecting clients to pre-qualified buyers, distributors, and government procurement channels.',
    capabilities: ['Market Feasibility Analysis', 'Buyer & Distributor Sourcing', 'Government Procurement Access', 'JV & Partnership Structuring', 'Regulatory Entry Strategy', 'In-Market Representation'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    stat: '50+',
    statLabel: 'Priority markets',
  },
  {
    icon: Zap,
    title: 'Digital Trade Solutions',
    tagline: 'Technology that closes the loop',
    description:
      'GGC\'s proprietary TradeOS platform digitalises the entire trade cycle — from document issuance and contract management to payment reconciliation and compliance reporting. API-first architecture integrates with ERPs, banking platforms, and port systems.',
    capabilities: ['TradeOS Deal Management Platform', 'Digital LC Processing', 'Automated Compliance Screening', 'Real-Time Cargo Tracking', 'ERP & Banking Integrations', 'Trade Analytics & Reporting'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    stat: '72hr',
    statLabel: 'Average deal cycle',
  },
];

const item = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08 } }),
};

export default function ServicesPage() {
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
          <p className="section-eyebrow">Our Services</p>
          <h1 className="section-headline" style={{ maxWidth: '700px' }}>
            The full spectrum of global trade capability
          </h1>
          <p className="section-subheadline">
            Six integrated service lines, one point of accountability — built for enterprises
            that operate at the intersection of trade, logistics, and capital.
          </p>
          <Link href="/contact" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
            Discuss Your Requirements <span className="arrow" />
          </Link>
        </motion.div>
      </div>

      {/* Service Cards */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-inner">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={item}
                className="service-item-layout"
                style={{ direction: isEven ? 'ltr' : 'rtl' }}
              >
                {/* Image */}
                <div style={{ direction: 'ltr', position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '8px 8px 24px #070e28, -8px -8px 24px #0f1a46' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(11,20,55,0.4) 0%, transparent 60%)' }} />
                  <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(11,20,55,0.75)', backdropFilter: 'blur(8px)', borderRadius: '10px', padding: '0.6rem 1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--accent-600)' }}>{service.stat}</span>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(250,250,250,0.6)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{service.statLabel}</span>
                  </div>
                </div>

                {/* Content */}
                <div style={{ direction: 'ltr' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ width: '42px', height: '42px', background: 'rgba(56,189,248,0.1)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '4px 4px 10px #070e28, -4px -4px 10px #0f1a46' }}>
                      <Icon size={20} style={{ color: 'var(--accent-600)' }} />
                    </div>
                    <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-600)', fontFamily: 'var(--font-mono)' }}>
                      {service.tagline}
                    </span>
                  </div>

                  <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--ivory-100)', marginBottom: '1rem' }}>
                    {service.title}
                  </h2>

                  <p style={{ fontSize: '0.9375rem', lineHeight: 1.72, color: 'rgba(250,250,250,0.55)', marginBottom: '1.75rem' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem 1rem' }}>
                    {service.capabilities.map((cap) => (
                      <div key={cap} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-600)', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.8125rem', color: 'rgba(250,250,250,0.65)', lineHeight: 1.5 }}>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <p className="section-eyebrow" style={{ textAlign: 'center' }}>Ready to move?</p>
          <h2 className="section-headline" style={{ maxWidth: '560px', margin: '0 auto 1.25rem' }}>
            Let's structure the right solution for your trade
          </h2>
          <p className="section-subheadline" style={{ margin: '0 auto 2.5rem', textAlign: 'center' }}>
            Our advisors are available across time zones. Initial consultations are complimentary.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
              Schedule a Consultation <span className="arrow" />
            </Link>
            <Link href="/team" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
              Meet the Team
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
