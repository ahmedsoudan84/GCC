'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';
import Globe from '../Globe';

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const [displayed, setDisplayed] = useState('0');
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (numericPart - start) * eased;
      const formatted = numericPart >= 100 ? Math.round(current).toLocaleString() : current.toFixed(numericPart < 10 ? 0 : 0);
      setDisplayed(formatted + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };

    setTimeout(() => requestAnimationFrame(tick), 600);
  }, [value]);

  return (
    <div style={statStyles.item}>
      <span style={statStyles.value}>{displayed}</span>
      <span style={statStyles.label}>{label}</span>
    </div>
  );
}

const statStyles = {
  item: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '4px',
  },
  value: {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontWeight: 600,
    color: 'var(--accent-600)',
    letterSpacing: '-0.02em',
    fontFamily: 'var(--font-display)',
  },
  label: {
    fontSize: '0.65rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase' as const,
    color: 'rgba(250,250,250,0.45)',
  },
};

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(t);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section style={styles.section}>
      {/* Full-screen globe background */}
      <Globe fullscreen />

      {/* Dark gradient overlay so text is readable */}
      <div style={styles.overlay} />

      {/* Hero content */}
      <motion.div
        style={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate={ready ? 'visible' : 'hidden'}
      >
        {/* Eyebrow */}
        <motion.p style={styles.eyebrow} variants={itemVariants}>
          EST. 1998 &nbsp;·&nbsp; NEW YORK &nbsp;·&nbsp; LONDON &nbsp;·&nbsp; SINGAPORE &nbsp;·&nbsp; DOHA
        </motion.p>

        {/* Headline */}
        <motion.h1 style={styles.headline} variants={itemVariants}>
          The Global Standard<br />
          in <span style={styles.accent}>Trade & Capital</span>
        </motion.h1>

        {/* Description */}
        <motion.p style={styles.description} variants={itemVariants}>
          From commodity finance to cross-border logistics, GGC connects enterprise
          with the world's most critical trade corridors — across 150 countries
          and six decades of combined expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div style={styles.buttons} variants={itemVariants}>
          <Link href="/contact" style={styles.btnAccent}>
            Schedule a Consultation
          </Link>
          <Link href="/services" style={styles.btnOutline}>
            Explore Services
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div style={styles.statsBar} variants={itemVariants}>
          <div style={styles.statsDivider} />
          <div style={styles.statsGrid}>
            <AnimatedStat value="$480B+" label="Annual Trade Volume" />
            <AnimatedStat value="850+" label="Global Partners" />
            <AnimatedStat value="12M+" label="Shipments Handled" />
            <AnimatedStat value="30+" label="Years Operating" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          style={styles.scrollDot}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
        />
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
    justifyContent: 'flex-start',
    overflow: 'hidden',
    background: 'var(--bg-primary)',
  } as React.CSSProperties,

  overlay: {
    position: 'absolute' as const,
    inset: 0,
    background:
      'linear-gradient(105deg, rgba(11,20,55,0.92) 0%, rgba(11,20,55,0.75) 50%, rgba(11,20,55,0.3) 100%)',
    zIndex: 1,
  } as React.CSSProperties,

  content: {
    position: 'relative' as const,
    zIndex: 2,
    maxWidth: '680px',
    padding: 'var(--s-20) clamp(var(--s-6), 6vw, var(--s-24))',
  } as React.CSSProperties,

  eyebrow: {
    fontSize: '0.6rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'var(--accent-600)',
    marginBottom: 'var(--s-6)',
    fontFamily: 'var(--font-mono)',
  } as React.CSSProperties,

  headline: {
    fontSize: 'clamp(2.4rem, 5.5vw, 3.8rem)',
    fontWeight: 600,
    letterSpacing: '-0.03em',
    lineHeight: 1.12,
    color: 'var(--ivory-100)',
    marginBottom: 'var(--s-6)',
    fontFamily: 'var(--font-display)',
  } as React.CSSProperties,

  accent: {
    color: 'var(--accent-600)',
  } as React.CSSProperties,

  description: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.7,
    color: 'rgba(250,250,250,0.6)',
    maxWidth: '520px',
    marginBottom: 'var(--s-10)',
  } as React.CSSProperties,

  buttons: {
    display: 'flex',
    gap: 'var(--s-4)',
    flexWrap: 'wrap' as const,
    marginBottom: 'var(--s-12)',
  } as React.CSSProperties,

  btnAccent: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.75rem 1.75rem',
    background: 'var(--accent-600)',
    color: 'var(--ink-900)',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    textDecoration: 'none',
    fontFamily: 'var(--font-display)',
    transition: 'opacity 0.15s ease',
  } as React.CSSProperties,

  btnOutline: {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '0.75rem 1.75rem',
    background: 'transparent',
    color: 'var(--ivory-100)',
    border: '1px solid rgba(250,250,250,0.2)',
    borderRadius: '6px',
    fontSize: '0.875rem',
    fontWeight: 500,
    letterSpacing: '0.01em',
    textDecoration: 'none',
    fontFamily: 'var(--font-display)',
    transition: 'border-color 0.15s ease, background 0.15s ease',
  } as React.CSSProperties,

  statsBar: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--s-5)',
  } as React.CSSProperties,

  statsDivider: {
    height: '1px',
    background: 'rgba(250,250,250,0.1)',
    width: '100%',
  } as React.CSSProperties,

  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: 'var(--s-8)',
    justifyContent: 'start',
  } as React.CSSProperties,

  scrollIndicator: {
    position: 'absolute' as const,
    bottom: 'var(--s-8)',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    gap: 'var(--s-2)',
  } as React.CSSProperties,

  scrollDot: {
    width: '1px',
    height: '48px',
    background: 'linear-gradient(to bottom, transparent, var(--accent-600))',
  } as React.CSSProperties,
};
