'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

const leadership = [
  {
    name: 'James Richardson',
    title: 'Chief Executive Officer',
    location: 'New York',
    bio: 'James co-founded GGC in 1998 after 12 years at Citibank\'s trade finance desk. He has structured over $80 billion in trade-related transactions across 40 countries and serves on the ICC Banking Commission advisory panel.',
    expertise: ['Trade Finance', 'Corporate Strategy', 'Capital Markets'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Sarah Chen',
    title: 'Chief Operating Officer',
    location: 'Singapore',
    bio: 'With 18 years scaling pan-Asian logistics networks, Sarah rebuilt GGC\'s operations infrastructure from the ground up, cutting average shipment cycle time by 34%. She holds an MBA from INSEAD and sits on Singapore\'s Trade Facilitation Committee.',
    expertise: ['Operations Excellence', 'Supply Chain', 'APAC Markets'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Michael Al-Rashid',
    title: 'Chief Financial Officer',
    location: 'London',
    bio: 'Michael leads GGC\'s capital structure and investor relations, having previously served as CFO at a FTSE 250 commodities firm. He has led three successful private placements totalling $2.4 billion and is a Fellow of the ICAEW.',
    expertise: ['Capital Structure', 'Investor Relations', 'EMEA Finance'],
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    location: 'Singapore',
    bio: 'Priya architected TradeOS, GGC\'s proprietary trade management platform now processing over 400,000 transactions monthly. Previously at ThoughtWorks and JPMorgan\'s fintech division, she holds a PhD in Distributed Systems from NUS.',
    expertise: ['Platform Engineering', 'FinTech', 'AI & Automation'],
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'David Okonkwo',
    title: 'Head of Trade Finance',
    location: 'London',
    bio: 'David specialises in structured commodity finance for sub-Saharan Africa and the Middle East. Former senior banker at Standard Chartered\'s commodity trade finance team with deep relationships across the oil, gas, and agricultural sectors.',
    expertise: ['Commodity Finance', 'Africa & ME', 'Structured Products'],
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Elena Voronova',
    title: 'Head of Compliance',
    location: 'London',
    bio: 'Elena oversees GGC\'s global compliance framework across 47 jurisdictions. A former regulatory attorney at Clifford Chance, she has guided GGC through every major sanctions regime change of the past decade with zero enforcement actions.',
    expertise: ['Sanctions Law', 'AML/KYC', 'Regulatory Strategy'],
    photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Carlos Mendes',
    title: 'Head of Logistics',
    location: 'New York',
    bio: 'Carlos built GGC\'s Americas logistics corridor from two shipping lines to a 14-carrier network with dedicated bonded warehousing in 8 US ports. He previously ran operations for DHL Supply Chain\'s Latin America vertical.',
    expertise: ['Freight Management', 'Americas Operations', 'Port Logistics'],
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Layla Hassan',
    title: 'Head of Capital Markets',
    location: 'Doha',
    bio: 'Layla spearheads GGC\'s MENA capital origination and has closed over $12 billion in sovereign and quasi-sovereign mandates across the Gulf. Formerly at Goldman Sachs MENA, she is a CFA charterholder and Arabic-English interpreter.',
    expertise: ['MENA Capital', 'Sovereign Finance', 'Debt Origination'],
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&q=80&fit=crop',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TeamPage() {
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
          <p className="section-eyebrow">Leadership</p>
          <h1 className="section-headline" style={{ maxWidth: '640px' }}>
            The people who make the world move
          </h1>
          <p className="section-subheadline">
            Eight decades of combined experience across finance, logistics, technology, and law —
            united by a singular focus on making global trade simpler, faster, and safer.
          </p>
        </motion.div>
      </div>

      {/* Team Grid */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="section-inner">
          <motion.div
            className="grid-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {leadership.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                className="neu-card"
                style={{ padding: 0, overflow: 'hidden', cursor: 'default' }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                {/* Photo */}
                <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,20,55,0.9) 0%, transparent 50%)' }} />
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                    <p style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-600)', marginBottom: '0.25rem', fontFamily: 'var(--font-mono)' }}>
                      {member.location}
                    </p>
                    <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--ivory-100)', letterSpacing: '-0.01em', marginBottom: '0.1rem' }}>
                      {member.name}
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(250,250,250,0.55)', fontWeight: 500 }}>
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem' }}>
                  <p style={{ fontSize: '0.8125rem', lineHeight: 1.7, color: 'rgba(250,250,250,0.5)', marginBottom: '1.25rem' }}>
                    {member.bio}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {member.expertise.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '0.6875rem',
                          fontWeight: 500,
                          color: 'var(--accent-600)',
                          background: 'rgba(56,189,248,0.08)',
                          borderRadius: '4px',
                          padding: '0.2rem 0.55rem',
                          letterSpacing: '0.01em',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="section-inner">
          <div className="two-col-layout" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="section-eyebrow">Our Culture</p>
              <h2 className="section-headline">Built on accountability, driven by results</h2>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(250,250,250,0.55)', marginBottom: '1.5rem' }}>
                GGC operates as a distributed meritocracy. Leadership is proximity to the problem,
                not seniority. Our teams in New York, London, Singapore, and Doha function as a
                single integrated unit — because in global trade, the market doesn't wait.
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'rgba(250,250,250,0.55)', marginBottom: '2rem' }}>
                We hire for judgment, not credentials. Our analysts sit in deal rooms with clients.
                Our logistics team has walked the warehouse floors. This operational depth is
                what separates GGC from advisory-only competitors.
              </p>
              <Link href="/contact" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
                Work with Us <span className="arrow" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '4/3', boxShadow: '8px 8px 24px #070e28, -8px -8px 24px #0f1a46' }}
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="GGC Team Culture"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
