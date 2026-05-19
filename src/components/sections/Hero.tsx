'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Globe from '../Globe';

/* Animated number counter */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const dur = 1600, fps = 60;
    const frames = Math.round((dur / 1000) * fps);
    let f = 0;
    const step = () => {
      f++;
      const p = f / frames;
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (f < frames) requestAnimationFrame(step);
    };
    setTimeout(() => requestAnimationFrame(step), 800);
  }, [to]);

  return <>{val.toLocaleString()}{suffix}</>;
}

const stats = [
  { value: 480, suffix: 'B+', label: 'Trade Volume (USD)', prefix: '$' },
  { value: 850, suffix: '+', label: 'Global Partners', prefix: '' },
  { value: 12, suffix: 'M+', label: 'Shipments / Year', prefix: '' },
  { value: 30, suffix: '+', label: 'Years Operating', prefix: '' },
];

const E = [0.22, 1, 0.36, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: E } },
};

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay hero reveal so it appears after the cinematic intro
    const id = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(id);
  }, []);

  return (
    <section style={s.section}>
      {/* Full-viewport Globe */}
      <Globe />

      {/* Gradient overlay: strong left for copy, fades right for globe visibility */}
      <div style={s.overlay} />

      {/* Copy */}
      <motion.div
        style={s.copy}
        variants={stagger}
        initial="hidden"
        animate={visible ? 'show' : 'hidden'}
      >
        <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
          <div style={{ width: '24px', height: '1px', background: '#38BDF8', marginBottom: '0.75rem', opacity: 0.8 }} />
          <p style={s.eyebrow}>
            EST. 1998 &nbsp;·&nbsp; NEW YORK &nbsp;·&nbsp; LONDON &nbsp;·&nbsp; SINGAPORE &nbsp;·&nbsp; DOHA
          </p>
        </motion.div>

        <motion.h1 variants={fadeUp} style={s.h1}>
          The Global Standard<br />
          in <em style={s.accent}>Trade & Capital</em>
        </motion.h1>

        <motion.p variants={fadeUp} style={s.descriptor}>
          From commodity finance to cross-border logistics, GGC connects enterprise
          with the world's most critical trade corridors — across 150 countries
          and six decades of combined expertise.
        </motion.p>

        <motion.div variants={fadeUp} style={s.buttons}>
          <motion.span whileHover={{ scale: 1.02 }} style={{ display: 'inline-flex' }}>
            <Link href="/contact" className="ggc-btn on-dark" style={{ textDecoration: 'none' }}>
              Schedule a Consultation <span className="arrow" />
            </Link>
          </motion.span>
          <Link href="/services" className="ggc-btn on-dark sm" style={{ textDecoration: 'none' }}>
            Explore Services <span className="arrow" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeUp} style={s.statsWrap}>
          <div style={s.statsDivider} />
          <div style={s.statsRow}>
            {stats.map((st) => (
              <div key={st.label} style={s.stat}>
                <span style={s.statNum}>
                  {st.prefix}<Counter to={st.value} suffix={st.suffix} />
                </span>
                <span style={s.statLabel}>{st.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={s.scrollCue}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ delay: 1.6, ease: E }}
      >
        <span style={s.scrollLabel}>Scroll</span>
        <motion.div
          style={s.scrollLine}
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}

const s: Record<string, React.CSSProperties> = {
  section: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    background: '#07102a',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(100deg, rgba(7,16,42,0.94) 0%, rgba(7,16,42,0.65) 40%, rgba(7,16,42,0.05) 100%)',
    zIndex: 1,
  },
  copy: {
    position: 'relative',
    zIndex: 2,
    maxWidth: '640px',
    padding: 'calc(var(--s-24) + 80px) clamp(1.5rem, 7vw, 6rem) var(--s-24)',
  },
  eyebrow: {
    fontSize: '0.58rem',
    fontWeight: 600,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color: 'rgba(56,189,248,0.8)',
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: 0,
  },
  h1: {
    fontSize: 'clamp(3rem, 6vw, 5.5rem)',
    fontWeight: 600,
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
    color: '#FAFAFA',
    marginBottom: '1.5rem',
    fontFamily: "'Montserrat', sans-serif",
    fontStyle: 'normal',
  },
  accent: {
    color: '#38BDF8',
    fontStyle: 'normal',
  },
  descriptor: {
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: 1.75,
    color: 'rgba(250,250,250,0.5)',
    maxWidth: '520px',
    marginBottom: '2.5rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '3rem',
    alignItems: 'center',
  },
  statsWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  statsDivider: {
    height: '1px',
    background: 'rgba(250,250,250,0.08)',
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: '2.5rem',
    justifyContent: 'start',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
  },
  statNum: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    fontWeight: 600,
    color: '#38BDF8',
    letterSpacing: '-0.025em',
    fontFamily: "'Montserrat', sans-serif",
    fontVariantNumeric: 'tabular-nums',
  },
  statLabel: {
    fontSize: '0.6rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(250,250,250,0.4)',
  },
  scrollCue: {
    position: 'absolute',
    bottom: '2.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  scrollLabel: {
    fontSize: '0.55rem',
    fontWeight: 600,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: 'rgba(250,250,250,0.4)',
    fontFamily: "'Montserrat', sans-serif",
    marginBottom: '0.5rem',
  },
  scrollLine: {
    width: '1px',
    height: '52px',
    background: 'linear-gradient(to bottom, transparent, #38BDF8)',
    transformOrigin: 'top',
  },
};
