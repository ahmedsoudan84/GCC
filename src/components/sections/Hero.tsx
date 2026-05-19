'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Globe from '../Globe';

export default function Hero() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section style={styles.section}>
      {/* Globe Background Animation */}
      <motion.div
        style={styles.globeContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showContent ? 0.4 : 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <Globe />
      </motion.div>

      {/* Content */}
      <motion.div
        style={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={showContent ? 'visible' : 'hidden'}
      >
        {/* Eyebrow */}
        <motion.div style={styles.eyebrow} variants={itemVariants}>
          <span style={styles.eyebrowText}>EST 1998 • NEW YORK • SINGAPORE • LONDON</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 style={styles.headline} variants={itemVariants}>
          Global Trade &<br />
          <span style={styles.accent}>Capital Solutions</span>
        </motion.h1>

        {/* Description */}
        <motion.p style={styles.description} variants={itemVariants}>
          We provide comprehensive trade finance, logistics, and capital solutions
          for enterprises across 150+ countries.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div style={styles.buttonGroup} variants={itemVariants}>
          <button style={{ ...styles.button, ...styles.accentButton }}>
            Schedule a Call
          </button>
          <button style={{ ...styles.button, ...styles.outlineButton }}>
            View Our Network
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div style={styles.stats} variants={itemVariants}>
          <div style={styles.stat}>
            <div style={styles.statValue}>$480B+</div>
            <div style={styles.statLabel}>Trade Volume</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>850+</div>
            <div style={styles.statLabel}>Partners</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>12M+</div>
            <div style={styles.statLabel}>Shipments</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>30+</div>
            <div style={styles.statLabel}>Years</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    position: 'relative' as const,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--s-20) var(--s-4)',
    background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
    overflow: 'hidden',
  } as React.CSSProperties,

  globeContainer: {
    position: 'absolute' as const,
    right: '-10%',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '500px',
    height: '500px',
    opacity: 0.4,
    zIndex: 1,
  } as React.CSSProperties,

  content: {
    maxWidth: '700px',
    zIndex: 10,
    position: 'relative' as const,
  } as React.CSSProperties,

  eyebrow: {
    marginBottom: 'var(--s-6)',
  } as React.CSSProperties,

  eyebrowText: {
    fontSize: 'var(--size-eyebrow)',
    fontWeight: 600,
    letterSpacing: 'var(--tracking-loose)',
    color: 'var(--accent-600)',
    textTransform: 'uppercase',
  } as React.CSSProperties,

  headline: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    fontWeight: 900,
    letterSpacing: 'var(--tracking-tight)',
    lineHeight: 1.2,
    color: 'var(--ink-primary)',
    marginBottom: 'var(--s-6)',
  } as React.CSSProperties,

  accent: {
    color: 'var(--accent-600)',
  } as React.CSSProperties,

  description: {
    fontSize: 'var(--size-body-lg)',
    color: 'var(--ink-secondary)',
    lineHeight: 1.6,
    marginBottom: 'var(--s-8)',
    maxWidth: '600px',
  } as React.CSSProperties,

  buttonGroup: {
    display: 'flex',
    gap: 'var(--s-4)',
    marginBottom: 'var(--s-12)',
    flexWrap: 'wrap',
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

  outlineButton: {
    background: 'transparent',
    color: 'var(--ink-primary)',
    border: '1px solid var(--ink-700)',
  } as React.CSSProperties,

  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: 'var(--s-8)',
  } as React.CSSProperties,

  stat: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--s-2)',
  } as React.CSSProperties,

  statValue: {
    fontSize: 'var(--size-h2)',
    fontWeight: 900,
    color: 'var(--accent-600)',
  } as React.CSSProperties,

  statLabel: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--ink-tertiary)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-loose)',
  } as React.CSSProperties,
};
