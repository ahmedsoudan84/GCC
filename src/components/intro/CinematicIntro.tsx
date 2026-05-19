"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const GlobeCanvas = dynamic(() => import("@/components/sections/GlobeCanvas"), {
  ssr: false,
  loading: () => <div className="w-[260px] h-[260px]" />,
});

const E = [0.22, 1, 0.36, 1] as const;

interface CinematicIntroProps {
  onComplete: () => void;
}

// Inline GCC logo mark (white, no font dependency in SVG text elements)
function GCCLogoIntro() {
  return (
    <div className="flex flex-col items-center select-none">
      {/* Letter mark */}
      <div className="flex items-end gap-0 leading-none" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
        <span
          className="text-white font-bold"
          style={{ fontSize: "clamp(72px, 10vw, 108px)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
        >
          G
        </span>
        <span
          className="text-white font-bold"
          style={{ fontSize: "clamp(72px, 10vw, 108px)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
        >
          G
        </span>
        <span
          className="text-white font-bold"
          style={{ fontSize: "clamp(72px, 10vw, 108px)", lineHeight: 0.9, letterSpacing: "-0.02em" }}
        >
          C
        </span>
      </div>
      {/* Full name */}
      <p
        className="text-white/70 mt-3 font-medium"
        style={{ fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase" }}
      >
        Global Group Corp.
      </p>
    </div>
  );
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const [phase, setPhase] = useState<"enter" | "globe" | "hold" | "exit">("enter");
  const [mounted, setMounted] = useState(true);

  const handleComplete = useCallback(() => {
    setMounted(false);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("globe"), 1000);
    const t2 = setTimeout(() => setPhase("hold"), 2200);
    const t3 = setTimeout(() => setPhase("exit"), 3600);
    const t4 = setTimeout(handleComplete, 4800);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [handleComplete]);

  return (
    <AnimatePresence>
      {mounted && (
        <motion.div
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          animate={phase === "exit" ? { opacity: 0 } : { opacity: 1 }}
          transition={phase === "exit" ? { duration: 0.9, ease: "easeInOut" } : {}}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#020B18" }}
        >
          {/* Animated grid background */}
          <div
            className="absolute inset-0 animate-grid-pulse pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(201,148,60,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(201,148,60,0.35) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />

          {/* Radial vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, rgba(2,11,24,0.85) 100%)",
            }}
          />

          {/* Globe — floats above logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 20 }}
            animate={
              phase === "enter"
                ? { opacity: 0, scale: 0.4, y: 20 }
                : phase === "exit"
                ? { opacity: 0, scale: 1.3, y: -30 }
                : { opacity: 1, scale: 1, y: 0 }
            }
            transition={{ duration: 0.9, ease: E }}
            className="relative z-10 mb-[-32px]"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "0 0 80px 20px rgba(56, 100, 220, 0.22)",
                }}
              />
              <GlobeCanvas
                size={260}
                phi={1.1}
                speed={0.004}
                glowColor={[0.25, 0.45, 0.95]}
                baseColor={[0.03, 0.1, 0.3]}
                markerColor={[1, 0.8, 0.3]}
              />
            </div>
          </motion.div>

          {/* Logo text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={
              phase === "enter"
                ? { opacity: 0, y: 28 }
                : phase === "exit"
                ? { opacity: 0, y: -20 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.8, ease: E, delay: phase === "enter" ? 0 : 0 }}
            className="relative z-10"
          >
            <GCCLogoIntro />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={
              phase === "hold" || phase === "exit"
                ? { opacity: phase === "exit" ? 0 : 0.45 }
                : { opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 mt-8 text-slate-400"
            style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase" }}
          >
            Rebuilding What Matters
          </motion.p>

          {/* Progress bar */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-44 z-10">
            <div className="h-px bg-white/8 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.4, ease: "linear", delay: 0.6 }}
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg, #C9943C, #F0C96A)" }}
              />
            </div>
          </div>

          {/* Corner marks */}
          {[
            "top-6 left-6 border-t border-l",
            "top-6 right-6 border-t border-r",
            "bottom-6 left-6 border-b border-l",
            "bottom-6 right-6 border-b border-r",
          ].map((cls) => (
            <motion.div
              key={cls}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`absolute w-6 h-6 border-white/30 ${cls}`}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
