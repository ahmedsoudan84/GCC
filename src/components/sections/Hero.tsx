export default function Hero() {
  return (
    <section id="hero" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.eyebrowContainer}>
          <span className="eyebrow">EST 1998 • NEW YORK • SINGAPORE • LONDON</span>
        </div>

        <h1 style={styles.heading}>
          Global commerce,<br />
          <span style={styles.accent}>executed flawlessly</span>
        </h1>

        <p style={styles.description}>
          We connect traders, logistics networks, and capital markets across continents.
          Where others see complexity, we see opportunity. Three decades of experience,
          one singular focus: making global trade seamless.
        </p>

        <div style={styles.ctaContainer}>
          <button className="ggc-btn accent">
            Schedule a Call <span className="arrow"></span>
          </button>
          <button className="ggc-btn">
            View Our Network
          </button>
        </div>

        <div style={styles.statsGrid}>
          <div style={styles.stat}>
            <div style={styles.statValue}>$480B+</div>
            <div style={styles.statLabel}>Annual Trade Volume</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>850+</div>
            <div style={styles.statLabel}>Global Partners</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>12M+</div>
            <div style={styles.statLabel}>Shipments Facilitated</div>
          </div>
          <div style={styles.stat}>
            <div style={styles.statValue}>30</div>
            <div style={styles.statLabel}>Years Trusted</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingTop: "var(--s-9)",
    paddingBottom: "var(--s-10)",
    background: "var(--bg)",
  } as React.CSSProperties,
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    paddingLeft: "var(--s-6)",
    paddingRight: "var(--s-6)",
  } as React.CSSProperties,
  eyebrowContainer: {
    marginBottom: "var(--s-5)",
  } as React.CSSProperties,
  heading: {
    fontSize: "var(--t-h1)",
    lineHeight: "var(--lh-tight)",
    marginBottom: "var(--s-5)",
    maxWidth: "800px",
  } as React.CSSProperties,
  accent: {
    color: "var(--accent-500)",
  } as React.CSSProperties,
  description: {
    fontSize: "var(--t-body-lg)",
    lineHeight: "var(--lh-body)",
    color: "var(--fg-muted)",
    maxWidth: "600px",
    marginBottom: "var(--s-6)",
  } as React.CSSProperties,
  ctaContainer: {
    display: "flex",
    gap: "var(--s-4)",
    marginBottom: "var(--s-9)",
    flexWrap: "wrap" as const,
  } as React.CSSProperties,
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "var(--s-6)",
    paddingTop: "var(--s-6)",
    borderTop: "1px solid var(--border)",
  } as React.CSSProperties,
  stat: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--s-2)",
  } as React.CSSProperties,
  statValue: {
    fontSize: "var(--t-h3)",
    fontWeight: 700,
    color: "var(--accent-500)",
    fontFamily: "var(--font-mono)",
  } as React.CSSProperties,
  statLabel: {
    fontSize: "var(--t-body-sm)",
    color: "var(--fg-muted)",
    fontWeight: 500,
  } as React.CSSProperties,
};
