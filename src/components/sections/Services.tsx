export default function Services() {
  const services = [
    {
      title: "Trade Finance",
      description: "Letters of credit, supply chain financing, and working capital solutions that move goods globally.",
    },
    {
      title: "Logistics & Supply Chain",
      description: "End-to-end optimization: procurement, warehousing, last-mile delivery across 6 continents.",
    },
    {
      title: "Capital Markets",
      description: "Strategic capital deployment, currency hedging, and market intelligence for emerging corridors.",
    },
    {
      title: "Customs & Compliance",
      description: "Tariff navigation, duty optimization, and regulatory intelligence keeping your margins intact.",
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <span className="eyebrow">OUR SERVICES</span>
        <h2 style={styles.heading}>Services that scale with your ambition</h2>
        <p style={styles.subheading}>
          From documentation to deployment, we manage complexity so you can focus on growth.
        </p>

        <div style={styles.grid}>
          {services.map((svc, i) => (
            <div key={i} className="ggc-btn" style={styles.card}>
              <h3 style={styles.cardTitle}>{svc.title}</h3>
              <p style={styles.cardDesc}>{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: "var(--bg)",
    borderTop: "1px solid var(--border)",
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
    marginBottom: "var(--s-3)",
    maxWidth: "700px",
  } as React.CSSProperties,
  subheading: {
    fontSize: "var(--t-body-lg)",
    color: "var(--fg-muted)",
    marginBottom: "var(--s-7)",
    maxWidth: "600px",
  } as React.CSSProperties,
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "var(--s-6)",
  } as React.CSSProperties,
  card: {
    padding: "var(--s-5)",
    background: "var(--bg-elev)",
    borderRadius: "16px",
    cursor: "pointer",
  } as React.CSSProperties,
  cardTitle: {
    fontSize: "var(--t-h4)",
    marginBottom: "var(--s-3)",
    color: "var(--fg)",
  } as React.CSSProperties,
  cardDesc: {
    fontSize: "var(--t-body-sm)",
    color: "var(--fg-muted)",
    lineHeight: "var(--lh-body)",
  } as React.CSSProperties,
};
