'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const featured = [
  {
    name: 'James Richardson',
    title: 'Chief Executive Officer',
    location: 'New York',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Sarah Chen',
    title: 'Chief Operating Officer',
    location: 'Singapore',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Michael Al-Rashid',
    title: 'Chief Financial Officer',
    location: 'London',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&q=80&fit=crop',
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Technology Officer',
    location: 'Singapore',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&q=80&fit=crop',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Team() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }} id="team">
      <div className="section-inner">
        <motion.div
          style={{ marginBottom: '3.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-eyebrow">Leadership</p>
          <h2 className="section-headline">The people behind the platform</h2>
          <p className="section-subheadline">
            Eight decades of combined experience in trade, logistics, capital markets, and technology.
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="grid-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {featured.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="neu-card"
              style={{ padding: 0, overflow: 'hidden' }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
            >
              {/* Photo */}
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,20,55,0.88) 0%, transparent 55%)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                  <p style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-600)', marginBottom: '0.2rem', fontFamily: 'var(--font-mono)' }}>
                    {member.location}
                  </p>
                  <h3 style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ivory-100)', letterSpacing: '-0.01em', marginBottom: '0.1rem' }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(250,250,250,0.5)', fontWeight: 400 }}>
                    {member.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          style={{ marginTop: '3rem', textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/team" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
            Meet the Full Team <span className="arrow">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
