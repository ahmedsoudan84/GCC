'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
  });

  const offices = [
    {
      city: 'New York',
      address: '432 Park Avenue',
      email: 'ny@ggc.global',
      phone: '+1 212 555 0123',
    },
    {
      city: 'London',
      address: '30 St Mary Axe',
      email: 'london@ggc.global',
      phone: '+44 20 7946 0958',
    },
    {
      city: 'Singapore',
      address: 'Marina Bay Financial Centre',
      email: 'singapore@ggc.global',
      phone: '+65 6822 2006',
    },
    {
      city: 'Doha',
      address: 'Doha Tower',
      email: 'doha@ggc.global',
      phone: '+974 4430 0000',
    },
  ];

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
  };

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
    <section style={styles.section} id="contact">
      <div style={styles.container}>
        {/* Header */}
        <motion.div
          style={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.title}>Get In Touch</h2>
          <p style={styles.subtitle}>
            Our team is ready to discuss your enterprise solutions
          </p>
        </motion.div>

        <div style={styles.content}>
          {/* Contact Form */}
          <motion.div
            style={styles.formContainer}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div style={styles.formRow}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="john@company.com"
                    required
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Your Company"
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ ...styles.input, ...styles.textarea }}
                  placeholder="Tell us more about your needs..."
                  rows={5}
                  required
                />
              </div>

              <button type="submit" style={{ ...styles.button, ...styles.submitButton }}>
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Offices */}
          <motion.div
            style={styles.officesContainer}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 style={styles.officesTitle}>Our Offices</h3>
            <div style={styles.officesGrid}>
              {offices.map((office, index) => (
                <motion.div key={index} style={styles.officeCard} variants={itemVariants}>
                  <h4 style={styles.officeName}>{office.city}</h4>
                  <div style={styles.officeInfo}>
                    <MapPin size={16} style={{ color: 'var(--accent-600)' }} />
                    <p style={styles.officeText}>{office.address}</p>
                  </div>
                  <div style={styles.officeInfo}>
                    <Mail size={16} style={{ color: 'var(--accent-600)' }} />
                    <a href={`mailto:${office.email}`} style={styles.officeLink}>
                      {office.email}
                    </a>
                  </div>
                  <div style={styles.officeInfo}>
                    <Phone size={16} style={{ color: 'var(--accent-600)' }} />
                    <a href={`tel:${office.phone}`} style={styles.officeLink}>
                      {office.phone}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
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
    marginBottom: 'var(--s-16)',
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

  content: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: 'var(--s-12)',
  } as React.CSSProperties,

  formContainer: {
    padding: 'var(--s-8)',
    background: 'var(--bg-primary)',
    borderRadius: 'var(--radius-3)',
    border: '1px solid var(--ink-700)',
  } as React.CSSProperties,

  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--s-6)',
  } as React.CSSProperties,

  formGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--s-2)',
  } as React.CSSProperties,

  formRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 'var(--s-4)',
  } as React.CSSProperties,

  label: {
    fontSize: 'var(--size-body-sm)',
    fontWeight: 600,
    color: 'var(--ink-primary)',
  } as React.CSSProperties,

  input: {
    padding: 'var(--s-3) var(--s-4)',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--ink-600)',
    borderRadius: 'var(--radius-2)',
    color: 'var(--ink-primary)',
    fontSize: 'var(--size-body-md)',
    fontFamily: 'inherit',
    transition: 'all var(--duration-fast) var(--ease-out)',
  } as React.CSSProperties,

  textarea: {
    resize: 'vertical' as const,
    minHeight: '120px',
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

  submitButton: {
    background: 'var(--accent-600)',
    color: 'var(--ink-900)',
  } as React.CSSProperties,

  officesContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: 'var(--s-6)',
  } as React.CSSProperties,

  officesTitle: {
    fontSize: 'var(--size-h3)',
    fontWeight: 700,
    marginBottom: 'var(--s-4)',
    color: 'var(--ink-primary)',
  } as React.CSSProperties,

  officesGrid: {
    display: 'grid',
    gap: 'var(--s-6)',
  } as React.CSSProperties,

  officeCard: {
    padding: 'var(--s-6)',
    background: 'var(--bg-primary)',
    borderRadius: 'var(--radius-3)',
    border: '1px solid var(--ink-700)',
  } as React.CSSProperties,

  officeName: {
    fontSize: 'var(--size-h4)',
    fontWeight: 700,
    marginBottom: 'var(--s-4)',
    color: 'var(--ink-primary)',
  } as React.CSSProperties,

  officeInfo: {
    display: 'flex',
    gap: 'var(--s-3)',
    alignItems: 'flex-start',
    marginBottom: 'var(--s-3)',
  } as React.CSSProperties,

  officeText: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--ink-secondary)',
  } as React.CSSProperties,

  officeLink: {
    fontSize: 'var(--size-body-sm)',
    color: 'var(--accent-600)',
    textDecoration: 'none',
    transition: 'opacity var(--duration-fast) var(--ease-out)',
  } as React.CSSProperties,
};
