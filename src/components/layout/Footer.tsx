import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
          {/* Brand — 5 cols */}
          <div className="md:col-span-5">
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center border relative overflow-hidden"
                style={{ borderColor: "rgba(201,148,60,0.3)" }}
              >
                {/* Globe lines */}
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  className="absolute inset-0 w-full h-full"
                >
                  <circle cx="20" cy="20" r="18" stroke="rgba(201,148,60,0.25)" strokeWidth="1" />
                  <ellipse cx="20" cy="20" rx="18" ry="7" stroke="rgba(201,148,60,0.18)" strokeWidth="0.75" fill="none" />
                  <ellipse cx="20" cy="20" rx="11" ry="18" stroke="rgba(201,148,60,0.18)" strokeWidth="0.75" fill="none" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#E8B84B",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  GCC
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#F0EDE8",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Global Group Corp.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontSize: "9px",
                    fontWeight: 400,
                    color: "#3D5570",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    marginTop: "2px",
                  }}
                >
                  International
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              A network of enterprises specialized in reconstruction and
              development programs — improving the standard of living in
              developing communities across MENA, Africa, and beyond.
            </p>
            <p className="text-slate-700 text-xs mt-5 font-mono tracking-wide">
              Est. 2003 · London · New York · Doha
            </p>
          </div>

          {/* Sectors — 3 cols */}
          <div className="md:col-span-3">
            <h4 className="text-slate-300 font-semibold text-xs tracking-[0.18em] uppercase mb-5">
              Sectors
            </h4>
            <ul className="space-y-3">
              {[
                "Infrastructure & Buildings",
                "Defence & Security",
                "Oil, Gas & Energy",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#sectors"
                    className="text-slate-500 text-sm hover:text-gold-400 transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-navy-600 group-hover:bg-gold-500 transition-colors flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-slate-300 font-semibold text-xs tracking-[0.18em] uppercase mb-5 mt-8">
              Services
            </h4>
            <ul className="space-y-3">
              {["Engineering", "Procurement", "Construction", "Finance"].map(
                (s) => (
                  <li key={s}>
                    <span className="text-slate-600 text-sm flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-navy-600 flex-shrink-0" />
                      {s}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Offices — 4 cols */}
          <div className="md:col-span-4">
            <h4 className="text-slate-300 font-semibold text-xs tracking-[0.18em] uppercase mb-5">
              Offices
            </h4>
            <div className="space-y-5">
              <div>
                <p className="text-gold-500/70 text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">
                  London HQ
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Unit 1, 3 Trebeck Street
                  <br />
                  Mayfair, London W1J 7LS
                </p>
              </div>
              <div>
                <p className="text-gold-500/70 text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">
                  New York
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  131 E 66th Street
                  <br />
                  New York, NY 10065
                </p>
              </div>
              <div>
                <p className="text-gold-500/70 text-[10px] font-semibold tracking-[0.2em] uppercase mb-1">
                  Doha
                </p>
                <p className="text-slate-500 text-xs">Qatar Regional Hub</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-navy-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-slate-700 text-xs font-mono">
            © {year} Global Consolidated Contractors International Ltd. Co. No. 04845390.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="mailto:info@gcc-intl.com"
              className="text-slate-600 text-xs hover:text-gold-400 transition-colors"
            >
              info@gcc-intl.com
            </Link>
            <a
              href="tel:+442074999982"
              className="text-slate-600 text-xs hover:text-gold-400 transition-colors"
            >
              +44 207 499 9982
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
