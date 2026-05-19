'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function WhyGCC() {
  const reasons = [
    {
      title: '30+ Years Expertise',
      description: 'Trusted by enterprises worldwide with three decades of industry experience.',
    },
    {
      title: 'Global Network',
      description: 'Direct presence in 50+ countries with local expertise and international reach.',
    },
    {
      title: 'Tech-Enabled Solutions',
      description: 'Cutting-edge technology platforms for seamless operations and transparency.',
    },
    {
      title: 'Compliance Excellence',
      description: 'Regulatory expertise ensuring smooth operations in all jurisdictions.',
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section style={styles.section} id="why-ggc">
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Why GGC</h2>
          <p style={styles.subtitle}>
            The trusted partner for global enterprise solutions
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((reason, index) => (
            <motion.div key={index} style={styles.card} variants={itemVariants}>
              <div style={styles.checkmark}>
                <Check size={24} style={{ color: 'var(--accent-600)' }} />
              </div>
              <h3 style={styles.cardTitle}>{reason.title}</h3>
              <p style={styles.cardDescription}>{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          style={styles.cta}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button style={{ ...styles.button, ...styles.accentButton }}>
            Learn More About Our Approach
          </button>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: 'var(--s-24) var(--s-4)',
    background: 'var(--bg-secondary)',
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: 'var(--s-8)',
    marginBottom: 'var(--s-16)',
  } as React.CSSProperties,

  card: {
    padding: 'var(--s-8)',
    background: 'var(--bg-primary)',
    borderRadius: 'var(--radius-3)',
    border: '1px solid var(--ink-600)',
    borderLeftWidth: '4px',
    borderLeftColor: 'var(--accent-600)',
    transition: 'all var(--duration-base) var(--ease-out)',
  } as React.CSSProperties,

  checkmark: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 'var(--s-4)',
    background: 'rgba(56, 189, 248, 0.1)',
    borderRadius: 'var(--radius-2)',
  } as React.CSSProperties,

  cardTitle: {
    fontSize: 'var(--size-h4)',
    fontWeight: 700,
    marginBottom: 'var(--s-3)',
    color: 'var(--ink-primary)',
  } as React.CSSProperties,

  cardDescription: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--ink-secondary)',
    lineHeight: 1.6,
  } as React.CSSProperties,

  cta: {
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,

  button: {
    padding: 'var(--s-4) var(--s-8)',
    borderRadius: 'var(--radius-2)',
    border: 'none',
    fontSize: 'var(--size-body-md)',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all var(--duration-fast) var(--ease-out)',
  } as React.CSSProperties,

  accentButton: {
    background: 'var(--accent-600)',
    color: 'var(--ink-900)',
  } as React.CSSProperties,
};
