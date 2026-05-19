'use client';

import { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    };
    resize();
    window.addEventListener('resize', resize);

    let rotation = 0;
    let frameId: number;

    const cities: [number, number][] = [
      [40.71,-74.01],[51.51,-0.13],[1.35,103.82],[25.29,51.53],
      [35.68,139.65],[48.86,2.35],[-33.87,151.21],[19.08,72.88],
      [30.04,31.24],[-23.55,-46.63],[55.76,37.62],[-1.29,36.82],
    ];
    const routes: [number,number][] = [
      [0,1],[0,3],[1,3],[1,5],[3,2],[2,4],[0,9],[5,7],[3,10],[8,4],[11,3],[2,8],[4,6],[7,3],
    ];

    const particles = Array.from({ length: 80 }, () => ({
      lat: Math.random() * 160 - 80,
      lng: Math.random() * 360,
      r: 0.4 + Math.random() * 1.2,
      alpha: 0.08 + Math.random() * 0.4,
      drift: 0.01 + Math.random() * 0.04,
    }));

    const toCart = (lat: number, lng: number, r: number, rot: number) => {
      const la = (lat * Math.PI) / 180;
      const lo = ((lng + rot) * Math.PI) / 180;
      return { x: r * Math.cos(la) * Math.cos(lo), y: r * Math.sin(la), z: r * Math.cos(la) * Math.sin(lo) };
    };

    const proj = (x: number, y: number, z: number, cx: number, cy: number, R: number) => ({
      sx: cx + x * (R / (R + z * 0.25)),
      sy: cy - y * (R / (R + z * 0.25)),
      visible: z > -R * 0.1,
    });

    const draw = (t: number) => {
      const dpr = window.devicePixelRatio || 1;
      const W = canvas.width / dpr, H = canvas.height / dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, W, H);

      const cx = W / 2, cy = H / 2;
      const R = Math.min(W, H) * 0.42;

      // Outer glow rings
      [1.35, 1.2, 1.1].forEach((scale, i) => {
        const g = ctx.createRadialGradient(cx, cy, R * scale * 0.85, cx, cy, R * scale);
        g.addColorStop(0, `rgba(56,189,248,${[0.04, 0.06, 0.08][i]})`);
        g.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(cx, cy, R * scale, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Globe sphere
      const sg = ctx.createRadialGradient(cx - R * 0.28, cy - R * 0.28, 0, cx, cy, R);
      sg.addColorStop(0, '#1e2d7a');
      sg.addColorStop(0.55, '#0e1a4a');
      sg.addColorStop(1, '#060c22');
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sg;
      ctx.fill();

      // Latitude lines
      for (let lat = -75; lat <= 75; lat += 15) {
        const la = (lat * Math.PI) / 180;
        const lr = R * Math.cos(la), ly = cy - R * Math.sin(la);
        ctx.beginPath();
        ctx.ellipse(cx, ly, lr, lr * 0.3, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(65,77,188,0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Longitude lines
      for (let lng = 0; lng < 360; lng += 20) {
        const lo = ((lng + rotation) * Math.PI) / 180;
        ctx.beginPath();
        let first = true;
        for (let la = -88; la <= 88; la += 3) {
          const laR = (la * Math.PI) / 180;
          const px = R * Math.cos(laR) * Math.cos(lo);
          const py = R * Math.sin(laR);
          const pz = R * Math.cos(laR) * Math.sin(lo);
          const p = proj(px, py, pz, cx, cy, R);
          if (p.visible) { first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy); first = false; }
          else { first = true; }
        }
        ctx.strokeStyle = 'rgba(56,97,200,0.15)';
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }

      // Route arcs
      routes.forEach(([i, j]) => {
        const [la1, ln1] = cities[i], [la2, ln2] = cities[j];
        ctx.beginPath();
        let started = false;
        for (let s = 0; s <= 50; s++) {
          const tl = s / 50;
          const pt = toCart(la1 + (la2 - la1) * tl, ln1 + (ln2 - ln1) * tl, R * 1.015, rotation);
          const p = proj(pt.x, pt.y, pt.z, cx, cy, R);
          if (p.visible) { started ? ctx.lineTo(p.sx, p.sy) : ctx.moveTo(p.sx, p.sy); started = true; }
          else { started = false; }
        }
        ctx.strokeStyle = 'rgba(56,189,248,0.28)';
        ctx.lineWidth = 0.65;
        ctx.stroke();
      });

      // Data packet animation
      const packetPhase = (t / 2800) % 1;
      routes.slice(0, 8).forEach(([i, j], ri) => {
        const pos = (packetPhase + ri * 0.13) % 1;
        const [la1, ln1] = cities[i], [la2, ln2] = cities[j];
        const pt = toCart(la1 + (la2 - la1) * pos, ln1 + (ln2 - ln1) * pos, R * 1.02, rotation);
        const p = proj(pt.x, pt.y, pt.z, cx, cy, R);
        if (!p.visible) return;
        const depth = Math.max(0, (pt.z + R) / (2 * R));
        ctx.beginPath(); ctx.arc(p.sx, p.sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${0.95 * depth})`; ctx.fill();
        ctx.beginPath(); ctx.arc(p.sx, p.sy, 5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${0.18 * depth})`; ctx.fill();
      });

      // City dots with pulse
      cities.forEach(([lat, lng]) => {
        const pt = toCart(lat, lng, R, rotation);
        const p = proj(pt.x, pt.y, pt.z, cx, cy, R);
        if (!p.visible) return;
        const depth = Math.max(0, (pt.z + R) / (2 * R));
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.0025 + lat * 0.1);
        ctx.beginPath(); ctx.arc(p.sx, p.sy, 3 + pulse * 3.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56,189,248,${depth * 0.3})`; ctx.lineWidth = 0.8; ctx.stroke();
        ctx.beginPath(); ctx.arc(p.sx, p.sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56,189,248,${depth})`; ctx.fill();
      });

      // Floating particles
      particles.forEach((pt) => {
        const p = toCart(pt.lat, pt.lng, R * 1.06, rotation * pt.drift * 15);
        const pp = proj(p.x, p.y, p.z, cx, cy, R);
        if (!pp.visible) return;
        const depth = Math.max(0, (p.z + R) / (2 * R));
        ctx.beginPath(); ctx.arc(pp.sx, pp.sy, pt.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100,149,255,${pt.alpha * depth})`; ctx.fill();
      });

      // Specular highlight
      const hi = ctx.createRadialGradient(cx - R * 0.38, cy - R * 0.35, 0, cx - R * 0.22, cy - R * 0.2, R * 0.75);
      hi.addColorStop(0, 'rgba(255,255,255,0.09)'); hi.addColorStop(1, 'transparent');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = hi; ctx.fill();
    };

    let start = performance.now();
    const animate = (ts: number) => {
      rotation += 0.07;
      draw(ts - start);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);

    return () => { cancelAnimationFrame(frameId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}
