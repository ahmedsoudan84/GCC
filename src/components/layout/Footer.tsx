import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-700/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-gold-400 font-display font-bold text-2xl tracking-tight">GCC</span>
              <span className="text-slate-400 text-xs tracking-[0.25em] uppercase ml-2">International</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Global Consolidated Contractors International Limited — a network of enterprises specialized in reconstruction and development programs across MENA, Africa, and beyond.
            </p>
            <p className="text-slate-600 text-xs mt-4">Est. 2003 · London · New York · Doha</p>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold text-sm mb-4 tracking-wide">Sectors</h4>
            <ul className="space-y-2">
              {["Infrastructure & Buildings", "Defence & Security", "Oil, Gas & Energy"].map((s) => (
                <li key={s}>
                  <span className="text-slate-500 text-sm hover:text-gold-400 transition-colors cursor-default">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold text-sm mb-4 tracking-wide">Offices</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-slate-400 text-xs leading-relaxed">
                  <span className="text-gold-500 font-medium block">London HQ</span>
                  Unit 1, 3 Trebeck Street<br />Mayfair, W1J 7LS, UK
                </p>
              </li>
              <li>
                <p className="text-slate-400 text-xs leading-relaxed">
                  <span className="text-gold-500 font-medium block">New York</span>
                  131 E 66th Street<br />New York, NY 10065, US
                </p>
              </li>
              <li>
                <p className="text-slate-400 text-xs">
                  <span className="text-gold-500 font-medium block">Doha</span>
                  Qatar Regional Hub
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-700/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs">
            © {year} Global Consolidated Contractors International Limited. Company No. 04845390.
          </p>
          <div className="flex items-center gap-6">
            <Link href="mailto:info@gcc-intl.com" className="text-slate-500 text-xs hover:text-gold-400 transition-colors">
              info@gcc-intl.com
            </Link>
            <a href="tel:+442074999982" className="text-slate-500 text-xs hover:text-gold-400 transition-colors">
              +44 207 499 9982
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
