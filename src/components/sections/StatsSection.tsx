"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 180, suffix: "+", label: "Projects Delivered", detail: "across MENA & Africa" },
  { value: 2670, suffix: "+", label: "Professionals", detail: "across all operations" },
  { value: 23, suffix: "", label: "Years of Excellence", detail: "founded in 2003" },
  { value: 212, suffix: "+", label: "Subcontractors", detail: "in our global network" },
  { value: 250, suffix: "+", label: "Suppliers", detail: "vetted global partners" },
  { value: 5, suffix: "", label: "Certifications", detail: "ISO, OHSAS, TRACE, UN" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const steps = 60;
    const step = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) { setCount(value); clearInterval(timer); }
      else { setCount(Math.floor(current)); }
    }, 1800 / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section className="py-20 bg-navy-950 border-y border-navy-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">By the Numbers</span>
            <span className="w-8 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">Scale that speaks for itself.</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-navy-700/30 rounded-2xl overflow-hidden border border-navy-700/30">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
              className="bg-navy-900 px-6 py-8 flex flex-col items-center text-center hover:bg-navy-800 transition-colors group"
            >
              <div className="font-display text-3xl sm:text-4xl font-bold gradient-gold mb-1.5 tabular-nums">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-slate-200 text-xs font-semibold tracking-wide mb-1">{s.label}</div>
              <div className="text-slate-600 text-[10px] group-hover:text-slate-500 transition-colors">{s.detail}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
