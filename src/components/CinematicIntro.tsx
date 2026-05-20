'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface CinematicIntroProps {
  onComplete: () => void;
}

export default function CinematicIntro({ onComplete }: CinematicIntroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<'globe' | 'logo' | 'exit'>('globe');
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let rotation = 0;
    let frameId: number;
    let opacity = 0;

    const cities: [number, number][] = [
      [40.71, -74.01], [51.51, -0.13], [1.35, 103.82],
      [25.29, 51.53], [35.68, 139.65], [48.86, 2.35],
      [-33.87, 151.21], [19.08, 72.88], [30.04, 31.24],
      [-23.55, -46.63], [55.76, 37.62], [-1.29, 36.82],
    ];

    const routes: [number, number][] = [
      [0,1],[0,3],[1,3],[1,5],[3,2],[2,4],[0,9],[5,7],[3,10],[8,4],[11,3],[2,8]
    ];

    // Particles floating around the globe
    const particles = Array.from({ length: 120 }, () => ({
      lat: Math.random() * 180 - 90,
      lng: Math.random() * 360,
      r: 0.5 + Math.random() * 1.5,
      alpha: 0.1 + Math.random() * 0.6,
      speed: 0.02 + Math.random() * 0.06,
      orbitRadius: 1.0 + Math.random() * 0.3,
    }));

    const toCart = (lat: number, lng: number, r: number, rot: number) => {
      const la = (lat * Math.PI) / 180;
      const lo = ((lng + rot) * Math.PI) / 180;
      return {
        x: r * Math.cos(la) * Math.cos(lo),
        y: r * Math.sin(la),
        z: r * Math.cos(la) * Math.sin(lo),
      };
    };

    const proj = (x: number, y: number, z: number, cx: number, cy: number, R: number) => ({
      sx: cx + x * (R / (R + z * 0.2)),
      sy: cy - y * (R / (R + z * 0.2)),
      visible: z > -R * 0.15,
    });

    const draw = (t: number) => {
      const W = canvas.width, H = canvas.height;
      const cx = W / 2, cy = H / 2;
      const R = Math.min(W, H) * 0.3;

      ctx.clearRect(0, 0, W, H);

      // Background void
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, W, H);

      // Outer atmospheric rings
      for (let i = 3; i >= 1; i--) {
        const ringGrad = ctx.createRadialGradient(cx, cy, R * (0.9 + i * 0.08), cx, cy, R * (0.95 + i * 0.12));
        ringGrad.addColorStop(0, `rgba(56,189,248,${0.04 / i})`);
        ringGrad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(cx, cy, R * (0.95 + i * 0.12), 0, Math.PI * 2);
        ctx.fillStyle = ringGrad;
        ctx.fill();
      }

      // Globe sphere
      const sphereGrad = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, 0, cx, cy, R);
      sphereGrad.addColorStop(0, '#1a2866');
      sphereGrad.addColorStop(0.5, '#0d1840');
      sphereGrad.addColorStop(1, '#060c22');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sphereGrad;
      ctx.fill();

      // Latitude grid
      for (let lat = -75; lat <= 75; lat += 15) {
        const la = (lat * Math.PI) / 180;
        const lr = R * Math.cos(la);
        const ly = cy - R * Math.sin(la);
        ctx.beginPath();
        ctx.ellipse(cx, ly, lr, lr * 0.28, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(65,77,188,0.18)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Longitude grid
      for (let lng = 0; lng < 360; lng += 20) {
        const lo = ((lng + rotation) * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let la = -90; la <= 90; la += 4) {
          const laR = (la * Math.PI) / 180;
          const px = R * Math.cos(laR) * Math.cos(lo);
          const py = R * Math.sin(laR);
          const pz = R * Math.cos(laR) * Math.sin(lo);
          const p = proj(px, py, pz, cx, cy, R);
          if (p.visible) {
            first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy);
            first = false;
          } else { first = true; }
        }
        ctx.strokeStyle = 'rgba(56,97,188,0.14)';
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }

      // Route arcs
      routes.forEach(([i, j]) => {
        const [la1, ln1] = cities[i], [la2, ln2] = cities[j];
        ctx.beginPath();
        let started = false;
        const steps = 50;
        for (let s = 0; s <= steps; s++) {
          const tl = s / steps;
          const la = la1 + (la2 - la1) * tl;
          const ln = ln1 + (ln2 - ln1) * tl;
          const pt = toCart(la, ln, R * 1.02, rotation);
          const p = proj(pt.x, pt.y, pt.z, cx, cy, R);
          if (p.visible) {
            started ? ctx.lineTo(p.sx, p.sy) : ctx.moveTo(p.sx, p.sy);
            started = true;
          } else { started = false; }
        }
        ctx.strokeStyle = 'rgba(56,189,248,0.35)';
        ctx.lineWidth = 0.7;
        ctx.stroke();
      });

      // Animated data packets on routes
      const packetT = (t / 3000) % 1;
      routes.slice(0, 6).forEach(([i, j], ri) => {
        const offset = ri / 6;
        const pt2 = ((packetT + offset) % 1);
        const [la1, ln1] = cities[i], [la2, ln2] = cities[j];
        const la = la1 + (la2 - la1) * pt2;
        const ln = ln1 + (ln2 - ln1) * pt2;
        const pt = toCart(la, ln, R * 1.025, rotation);
        const p = proj(pt.x, pt.y, pt.z, cx, cy, R);
        if (p.visible) {
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56,189,248,0.9)';
          ctx.fill();
          // Trail
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, 5, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56,189,248,0.2)';
          ctx.fill();
        }
      });

      // City dots
      cities.forEach(([lat, lng]) => {
        const pt = toCart(lat, lng, R, rotation);
        const p = proj(pt.x, pt.y, pt.z, cx, cy, R);
        if (!p.visible) return;
        const depth = Math.max(0, (pt.z + R) / (2 * R));
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.003 + lat);

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 4 + pulse * 3, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56,189,248,${depth * 0.25})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(p.sx, p.sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${depth})`;
        ctx.fill();
      });

      // Floating particles
      particles.forEach((p) => {
        const pt = toCart(p.lat, p.lng, R * p.orbitRadius, rotation * p.speed * 20);
        const pp = proj(pt.x, pt.y, pt.z, cx, cy, R);
        if (!pp.visible) return;
        ctx.beginPath();
        ctx.arc(pp.sx, pp.sy, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,149,255,${p.alpha * Math.max(0, (pt.z + R) / (2 * R))})`;
        ctx.fill();
      });

      // Specular highlight
      const hiGrad = ctx.createRadialGradient(cx - R * 0.4, cy - R * 0.38, 0, cx - R * 0.3, cy - R * 0.25, R * 0.7);
      hiGrad.addColorStop(0, 'rgba(255,255,255,0.07)');
      hiGrad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = hiGrad;
      ctx.fill();

      // Bottom rim light
      const rimGrad = ctx.createRadialGradient(cx, cy + R * 0.85, 0, cx, cy + R * 0.85, R * 0.6);
      rimGrad.addColorStop(0, 'rgba(56,189,248,0.06)');
      rimGrad.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = rimGrad;
      ctx.fill();
    };

    let startTime = performance.now();

    const animate = (ts: number) => {
      const elapsed = ts - startTime;
      opacity = Math.min(1, elapsed / 800);
      rotation += 0.12;
      draw(elapsed);

      // Fade canvas in
      canvas.style.opacity = String(opacity);
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    // Phase timeline — exit triggers the fade-out animation,
    // onComplete is called by onAnimationComplete after fade finishes
    const t1 = setTimeout(() => setPhase('logo'), 1400);
    const t2 = setTimeout(() => {
      setPhase('exit');
      cancelAnimationFrame(frameId);
    }, 3000);

    // Hard fallback: if animation callback never fires, force complete at 4.5s
    const t3 = setTimeout(() => onCompleteRef.current(), 4500);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <motion.div
      style={styles.overlay}
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'exit' ? 0 : 1 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (phase === 'exit') onCompleteRef.current();
      }}
    >
      <canvas ref={canvasRef} style={styles.canvas} />

      {/* Radial vignette */}
      <div style={styles.vignette} />

      {/* Logo reveal */}
      <AnimatePresence>
        {phase === 'logo' && (
          <motion.div
            style={styles.logoCenter}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/gcc-logo-cropped.png"
              alt="Global Group Corp."
              width={220}
              height={70}
              style={styles.logoImage}
              priority
            />
            <motion.div
              style={styles.tagline}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Trade · Logistics · Capital
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    inset: 0,
    zIndex: 9999,
    background: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  vignette: {
    position: 'absolute',
    inset: 0,
    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)',
    pointerEvents: 'none',
  },
  logoCenter: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoImage: {
    width: 220,
    height: 'auto',
    objectFit: 'contain',
  },
  tagline: {
    fontSize: '0.65rem',
    fontWeight: 500,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    color: 'rgba(56,189,248,0.8)',
    fontFamily: "'Montserrat', sans-serif",
  },
};
