export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <span className="eyebrow">GET IN TOUCH</span>
        <h2 style={styles.heading}>Let's move your global commerce forward</h2>

        <div style={styles.grid}>
          <div>
            <h3 style={styles.subheading}>Direct Lines</h3>
            <p style={styles.text}>
              <strong>New York</strong><br/>
              <a href="tel:+14155550100" style={styles.link}>+1 (415) 555-0100</a><br/>
              <a href="mailto:ny@ggc.com" style={styles.link}>ny@ggc.com</a>
            </p>
            <p style={{ ...styles.text, marginTop: "var(--s-5)" }}>
              <strong>Singapore</strong><br/>
              <a href="tel:+6568889900" style={styles.link}>+65 6888 9900</a><br/>
              <a href="mailto:sg@ggc.com" style={styles.link}>sg@ggc.com</a>
            </p>
            <p style={{ ...styles.text, marginTop: "var(--s-5)" }}>
              <strong>London</strong><br/>
              <a href="tel:+442071838234" style={styles.link}>+44 (0)20 7183 8234</a><br/>
              <a href="mailto:london@ggc.com" style={styles.link}>london@ggc.com</a>
            </p>
          </div>

          <form style={styles.form}>
            <input
              type="text"
              placeholder="Your name"
              style={styles.input}
              required
            />
            <input
              type="email"
              placeholder="your@email.com"
              style={styles.input}
              required
            />
            <textarea
              placeholder="What can we help with?"
              style={{ ...styles.input, minHeight: "120px", fontFamily: "inherit" }}
              required
            />
            <button className="ggc-btn accent" style={{ width: "100%" }}>
              Send Inquiry
            </button>
          </form>
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "var(--s-8)",
  } as React.CSSProperties,
  subheading: {
    fontSize: "var(--t-h4)",
    marginBottom: "var(--s-4)",
    color: "var(--ivory-50)",
  } as React.CSSProperties,
  text: {
    fontSize: "var(--t-body-sm)",
    lineHeight: "var(--lh-body)",
    color: "var(--fg-inverse)",
  } as React.CSSProperties,
  link: {
    color: "var(--accent-400)",
  } as React.CSSProperties,
  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "var(--s-4)",
  } as React.CSSProperties,
  input: {
    padding: "var(--s-4)",
    border: "1px solid var(--border-strong)",
    borderRadius: "8px",
    backgroundColor: "var(--ink-700)",
    color: "var(--fg-inverse)",
    fontSize: "var(--t-body)",
  } as React.CSSProperties,
};
