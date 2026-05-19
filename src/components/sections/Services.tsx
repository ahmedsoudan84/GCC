'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Truck, Zap, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: 'Trade Finance',
      description: 'Comprehensive financing solutions for international trade, including LC and guarantee services.',
    },
    {
      icon: Truck,
      title: 'Logistics & Supply Chain',
      description: 'End-to-end logistics management with real-time tracking and optimization.',
    },
    {
      icon: Zap,
      title: 'Capital Markets',
      description: 'Strategic capital solutions and investment management for growth initiatives.',
    },
    {
      icon: Shield,
      title: 'Customs & Compliance',
      description: 'Expert navigation of regulatory requirements across all jurisdictions.',
    },
  ];

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
    <section style={styles.section} id="services">
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Our Services</h2>
          <p style={styles.subtitle}>
            Comprehensive solutions designed for modern enterprise needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          style={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} style={styles.card} variants={itemVariants}>
                <div style={styles.iconContainer}>
                  <Icon size={32} style={{ color: 'var(--accent-600)' }} />
                </div>
                <h3 style={styles.cardTitle}>{service.title}</h3>
                <p style={styles.cardDescription}>{service.description}</p>
              </motion.div>
            );
          })}
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
    transition: 'all var(--duration-base) var(--ease-out)',
    cursor: 'pointer',
  } as React.CSSProperties,

  iconContainer: {
    width: '56px',
    height: '56px',
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
};
