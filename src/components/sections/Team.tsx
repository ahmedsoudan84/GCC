'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'James Richardson',
      title: 'Chief Executive Officer',
      bio: 'Former Global Trade Director at major financial institution with 25+ years experience.',
      initials: 'JR',
    },
    {
      name: 'Sarah Chen',
      title: 'Chief Operating Officer',
      bio: 'Operations expert with proven track record scaling global logistics networks.',
      initials: 'SC',
    },
    {
      name: 'Michael O\'Brien',
      title: 'Chief Financial Officer',
      bio: 'Finance veteran with deep expertise in international capital markets.',
      initials: 'MO',
    },
    {
      name: 'Priya Sharma',
      title: 'Chief Technology Officer',
      bio: 'Tech innovator leading digital transformation in supply chain solutions.',
      initials: 'PS',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section style={styles.section} id="team">
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Leadership Team</h2>
          <p style={styles.subtitle}>
            Industry veterans driving global commerce forward
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div key={index} style={styles.card} variants={itemVariants}>
              <div style={styles.avatar}>{member.initials}</div>
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.memberTitle}>{member.title}</p>
              <p style={styles.bio}>{member.bio}</p>
              <button style={styles.socialButton}>
                <ExternalLink size={18} style={{ color: 'var(--accent-600)' }} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'var(--s-24) var(--s-4)',
    background: 'var(--bg-primary)',
    position: 'relative' as const,
  } as React.CSSProperties,

  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  } as React.CSSProperties,

  header: {
    marginBottom: 'var(--s-20)',
    textAlign: 'center' as const,
  } as React.CSSProperties,

  title: {
    fontSize: 'var(--size-h1)',
    fontWeight: 900,
    marginBottom: 'var(--s-4)',
    color: 'var(--ink-primary)',
  } as React.CSSProperties,

  subtitle: {
    fontSize: 'var(--size-body-lg)',
    color: 'var(--ink-secondary)',
    maxWidth: '600px',
    margin: '0 auto',
  } as React.CSSProperties,

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'var(--s-8)',
  } as React.CSSProperties,

  card: {
    padding: 'var(--s-8)',
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--radius-3)',
    border: '1px solid var(--ink-700)',
    textAlign: 'center' as const,
    transition: 'all var(--duration-base) var(--ease-out)',
  } as React.CSSProperties,

  avatar: {
    width: '80px',
    height: '80px',
    margin: '0 auto var(--s-6)',
    background: 'linear-gradient(135deg, var(--accent-600), var(--accent-700))',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 700,
    color: 'var(--ink-900)',
  } as React.CSSProperties,

  name: {
    fontSize: 'var(--size-h4)',
    fontWeight: 700,
    marginBottom: 'var(--s-1)',
    color: 'var(--ink-primary)',
  } as React.CSSProperties,

  memberTitle: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--accent-600)',
    fontWeight: 600,
    marginBottom: 'var(--s-3)',
  } as React.CSSProperties,

  bio: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--ink-secondary)',
    lineHeight: 1.6,
    marginBottom: 'var(--s-4)',
  } as React.CSSProperties,

  socialButton: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 'var(--s-2)',
    transition: 'all var(--duration-fast) var(--ease-out)',
  } as React.CSSProperties,
};
