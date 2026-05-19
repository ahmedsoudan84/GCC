export default function Team() {
  const team = [
    { name: "Michael Chen", title: "Founder & CEO", bio: "28 years in global trade. Former VP at Goldman Sachs." },
    { name: "Sarah Okafor", title: "COO", bio: "Logistics visionary. Built supply chains for Fortune 500 firms." },
    { name: "David Petrov", title: "CRO", bio: "Capital markets architect. Ex-JP Morgan, structuring expertise." },
    { name: "Amira al-Rashid", title: "Chief Compliance", bio: "Customs & tariff authority. 20 years government + private." },
  ];

  return (
    <section id="team" style={styles.section}>
      <div style={styles.container}>
        <span className="eyebrow">OUR TEAM</span>
        <h2 style={styles.heading}>Seasoned traders and operators</h2>
        <p style={styles.subheading}>
          Every person on our team brings decades of battle-tested expertise.
        </p>

        <div style={styles.grid}>
          {team.map((m, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.avatar}>{m.name.split(" ").map(n => n[0]).join("")}</div>
              <h3 style={styles.name}>{m.name}</h3>
              <div style={styles.title}>{m.title}</div>
              <p style={styles.bio}>{m.bio}</p>
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
  } as React.CSSProperties,
  subheading: {
    fontSize: "var(--t-body-lg)",
    color: "var(--fg-muted)",
    marginBottom: "var(--s-7)",
  } as React.CSSProperties,
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "var(--s-6)",
  } as React.CSSProperties,
  card: {
    padding: "var(--s-5)",
    backgroundColor: "var(--bg-elev)",
    borderRadius: "12px",
    textAlign: "center" as const,
  } as React.CSSProperties,
  avatar: {
    width: "60px",
    height: "60px",
    backgroundColor: "var(--accent-100)",
    color: "var(--accent-600)",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "var(--t-h4)",
    fontWeight: 700,
    margin: "0 auto var(--s-4)",
    fontFamily: "var(--font-mono)",
  } as React.CSSProperties,
  name: {
    fontSize: "var(--t-h4)",
    marginBottom: "var(--s-1)",
    color: "var(--fg)",
  } as React.CSSProperties,
  title: {
    fontSize: "var(--t-body-sm)",
    fontWeight: 600,
    color: "var(--accent-600)",
    marginBottom: "var(--s-3)",
  } as React.CSSProperties,
  bio: {
    fontSize: "var(--t-body-sm)",
    color: "var(--fg-muted)",
    lineHeight: "var(--lh-body)",
  } as React.CSSProperties,
};
