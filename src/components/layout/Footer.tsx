export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div>
            <h4 style={styles.heading}>Global Group Corp.</h4>
            <p style={styles.text}>
              Connecting commerce across continents through trade, logistics, and
              strategic capital deployment.
            </p>
            <p style={{ ...styles.text, marginTop: "var(--s-4)", fontSize: "var(--t-caption)" }}>
              © {year} Global Group Corp. All rights reserved.
            </p>
          </div>
          <div>
            <h4 style={styles.heading}>Services</h4>
            <ul style={styles.list}>
              <li><a href="#services" style={styles.link}>Trade Finance</a></li>
              <li><a href="#services" style={styles.link}>Logistics</a></li>
              <li><a href="#services" style={styles.link}>Capital Markets</a></li>
              <li><a href="#services" style={styles.link}>Supply Chain</a></li>
            </ul>
          </div>
          <div>
            <h4 style={styles.heading}>Company</h4>
            <ul style={styles.list}>
              <li><a href="#why-us" style={styles.link}>About</a></li>
              <li><a href="#team" style={styles.link}>Team</a></li>
              <li><a href="#contact" style={styles.link}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 style={styles.heading}>Get in Touch</h4>
            <p style={styles.text}>
              <a href="mailto:hello@ggc.com" style={styles.link}>hello@ggc.com</a>
              <br />
              <a href="tel:+14155550123" style={styles.link}>+1 (415) 555-0123</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "var(--bg-inverse)",
    color: "var(--fg-inverse)",
    padding: "var(--s-8) var(--s-6)",
  } as React.CSSProperties,
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  } as React.CSSProperties,
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "var(--s-6)",
  } as React.CSSProperties,
  heading: {
    fontSize: "var(--t-body)",
    fontWeight: 700,
    marginBottom: "var(--s-4)",
    color: "var(--fg-inverse)",
  } as React.CSSProperties,
  text: {
    fontSize: "var(--t-body-sm)",
    lineHeight: "var(--lh-body)",
    color: "var(--fg-inverse)",
  } as React.CSSProperties,
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--s-3)",
  } as React.CSSProperties,
  link: {
    fontSize: "var(--t-body-sm)",
    color: "var(--fg-inverse)",
    opacity: 0.8,
    transition: "opacity var(--dur-base) var(--ease-out)",
  } as React.CSSProperties,
};
