export default function WhyGCC() {
  const reasons = [
    { title: "30 Years Global", text: "Three decades building trust across continents." },
    { title: "850+ Partners", text: "Networks that span trade corridors, capital markets, and logistics hubs." },
    { title: "$480B Traded", text: "Annual volume we move with precision and speed." },
    { title: "24/7 Operations", text: "Someone is always awake, always ready, across time zones." },
  ];

  return (
    <section id="why-us" style={styles.section}>
      <div style={styles.container}>
        <span className="eyebrow">WHY GGC</span>
        <h2 style={styles.heading}>Why global leaders choose us</h2>

        <div style={styles.reasonsGrid}>
          {reasons.map((r, i) => (
            <div key={i} style={styles.reasonCard}>
              <div style={styles.reasonTitle}>{r.title}</div>
              <div style={styles.reasonText}>{r.text}</div>
            </div>
          ))}
        </div>

        <div style={styles.ctaSection}>
          <h3 style={styles.ctaHeading}>Ready to simplify your supply chain?</h3>
          <p style={styles.ctaText}>
            Let's talk. No jargon, no sales pitch—just direct, commercial conversation.
          </p>
          <button className="ggc-btn accent lg">
            Start a Conversation <span className="arrow"></span>
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "var(--bg-inverse)",
    color: "var(--fg-inverse)",
  } as React.CSSProperties,
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingLeft: "var(--s-6)",
    paddingRight: "var(--s-6)",
  } as React.CSSProperties,
  heading: {
    fontSize: "var(--t-h2)",
    marginTop: "var(--s-4)",
    marginBottom: "var(--s-7)",
    color: "var(--ivory-50)",
  } as React.CSSProperties,
  reasonsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "var(--s-5)",
    marginBottom: "var(--s-9)",
  } as React.CSSProperties,
  reasonCard: {
    padding: "var(--s-5)",
    backgroundColor: "var(--ink-700)",
    borderRadius: "12px",
    borderLeft: "3px solid var(--accent-500)",
  } as React.CSSProperties,
  reasonTitle: {
    fontSize: "var(--t-h4)",
    fontWeight: 700,
    marginBottom: "var(--s-2)",
    color: "var(--accent-500)",
  } as React.CSSProperties,
  reasonText: {
    fontSize: "var(--t-body-sm)",
    color: "var(--fg-inverse)",
    lineHeight: "var(--lh-body)",
  } as React.CSSProperties,
  ctaSection: {
    textAlign: "center" as const,
    paddingTop: "var(--s-8)",
    borderTop: "1px solid var(--border-strong)",
  } as React.CSSProperties,
  ctaHeading: {
    fontSize: "var(--t-h3)",
    marginBottom: "var(--s-3)",
    color: "var(--ivory-50)",
  } as React.CSSProperties,
  ctaText: {
    fontSize: "var(--t-body-lg)",
    color: "var(--fg-inverse)",
    marginBottom: "var(--s-5)",
    maxWidth: "500px",
    margin: "0 auto var(--s-5)",
  } as React.CSSProperties,
};
