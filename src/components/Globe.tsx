'use client';

import { useEffect, useRef } from 'react';

interface GlobeProps {
  fullscreen?: boolean;
}

export default function Globe({ fullscreen = false }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    let rotation = 0;
    let animFrameId: number;

    // Major city coordinates [lat, lng]
    const cities: [number, number][] = [
      [40.7128, -74.006],   // New York
      [51.5074, -0.1278],   // London
      [1.3521, 103.8198],   // Singapore
      [25.2854, 51.531],    // Doha
      [35.6762, 139.6503],  // Tokyo
      [48.8566, 2.3522],    // Paris
      [-33.8688, 151.2093], // Sydney
      [55.7558, 37.6173],   // Moscow
      [31.2304, 121.4737],  // Shanghai
      [-23.5505, -46.6333], // São Paulo
      [19.076, 72.8777],    // Mumbai
      [30.0444, 31.2357],   // Cairo
    ];

    // Route connections between cities
    const routes: [number, number][] = [
      [0, 1], [0, 3], [1, 3], [1, 5], [3, 2], [2, 4],
      [0, 6], [1, 7], [2, 8], [4, 8], [5, 7], [3, 10],
      [9, 0], [10, 11], [11, 3], [8, 4],
    ];

    const toCartesian = (lat: number, lng: number, r: number, rotDeg: number) => {
      const latRad = (lat * Math.PI) / 180;
      const lngRad = ((lng + rotDeg) * Math.PI) / 180;
      return {
        x: r * Math.cos(latRad) * Math.cos(lngRad),
        y: r * Math.sin(latRad),
        z: r * Math.cos(latRad) * Math.sin(lngRad),
      };
    };

    const project = (x: number, y: number, z: number, cx: number, cy: number, r: number) => {
      const scale = r / (r + z * 0.3);
      return {
        sx: cx + x * scale,
        sy: cy - y * scale,
        visible: z > -r * 0.1,
        depth: z,
      };
    };

    const drawArc = (
      p1: { sx: number; sy: number; visible: boolean; depth: number },
      p2: { sx: number; sy: number; visible: boolean; depth: number },
      alpha: number,
      r: number,
      cx: number,
      cy: number,
      lat1: number, lng1: number, lat2: number, lng2: number, rotDeg: number
    ) => {
      const steps = 40;
      ctx.beginPath();
      let started = false;
      for (let i = 0; i <= steps; i++) {
        const t = i / steps;
        const lat = lat1 + (lat2 - lat1) * t;
        const lng = lng1 + (lng2 - lng1) * t;
        const pt = toCartesian(lat, lng, r * 1.02, rotDeg);
        const pp = project(pt.x, pt.y, pt.z, cx, cy, r);
        if (pp.visible) {
          if (!started) {
            ctx.moveTo(pp.sx, pp.sy);
            started = true;
          } else {
            ctx.lineTo(pp.sx, pp.sy);
          }
        } else {
          started = false;
        }
      }
      ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
      ctx.lineWidth = 0.8;
      ctx.stroke();
    };

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      if (fullscreen) {
        const radialBg = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, W * 0.7);
        radialBg.addColorStop(0, 'rgba(56, 189, 248, 0.06)');
        radialBg.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = radialBg;
        ctx.fillRect(0, 0, W, H);
      }

      const cx = W / 2;
      const cy = H / 2;
      const r = Math.min(W, H) * (fullscreen ? 0.38 : 0.45);

      // Globe base gradient
      const grad = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.3, 0, cx, cy, r);
      grad.addColorStop(0, 'rgba(20, 28, 77, 0.95)');
      grad.addColorStop(0.6, 'rgba(11, 20, 55, 0.9)');
      grad.addColorStop(1, 'rgba(7, 14, 40, 0.85)');
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Atmosphere glow
      const atmoGrad = ctx.createRadialGradient(cx, cy, r * 0.95, cx, cy, r * 1.15);
      atmoGrad.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
      atmoGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      atmoGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.15, 0, Math.PI * 2);
      ctx.fillStyle = atmoGrad;
      ctx.fill();

      // Latitude lines
      for (let lat = -75; lat <= 75; lat += 15) {
        const latRad = (lat * Math.PI) / 180;
        const latR = r * Math.cos(latRad);
        const latY = cy - r * Math.sin(latRad);
        const perspective = r / (r + Math.abs(latR) * 0.05);
        const rx = latR;
        const ry = latR * 0.32 * perspective;
        ctx.beginPath();
        ctx.ellipse(cx, latY, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(83, 97, 232, 0.2)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Longitude lines
      for (let lng = 0; lng < 360; lng += 20) {
        const lngRad = ((lng + rotation) * Math.PI) / 180;
        const cosLng = Math.cos(lngRad);
        const sinLng = Math.sin(lngRad);
        ctx.beginPath();
        let firstVisible = true;
        for (let lat = -90; lat <= 90; lat += 3) {
          const latRad = (lat * Math.PI) / 180;
          const px = r * Math.cos(latRad) * cosLng;
          const py = r * Math.sin(latRad);
          const pz = r * Math.cos(latRad) * sinLng;
          const pp = project(px, py, pz, cx, cy, r);
          if (pp.visible) {
            if (firstVisible) {
              ctx.moveTo(pp.sx, pp.sy);
              firstVisible = false;
            } else {
              ctx.lineTo(pp.sx, pp.sy);
            }
          } else {
            firstVisible = true;
          }
        }
        ctx.strokeStyle = 'rgba(65, 77, 188, 0.18)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Route arcs
      routes.forEach(([i, j], idx) => {
        const [lat1, lng1] = cities[i];
        const [lat2, lng2] = cities[j];
        const p1 = toCartesian(lat1, lng1, r, rotation);
        const p2 = toCartesian(lat2, lng2, r, rotation);
        const pp1 = project(p1.x, p1.y, p1.z, cx, cy, r);
        const pp2 = project(p2.x, p2.y, p2.z, cx, cy, r);
        const alpha = pp1.visible && pp2.visible ? 0.5 : (pp1.visible || pp2.visible ? 0.2 : 0);
        if (alpha > 0) {
          drawArc(pp1, pp2, alpha, r, cx, cy, lat1, lng1, lat2, lng2, rotation);
        }
      });

      // City dots
      cities.forEach(([lat, lng]) => {
        const pt = toCartesian(lat, lng, r, rotation);
        const pp = project(pt.x, pt.y, pt.z, cx, cy, r);
        if (!pp.visible) return;
        const depthAlpha = Math.max(0, (pt.z + r) / (2 * r));

        // Pulse ring
        const pulse = 0.5 + 0.5 * Math.sin(Date.now() * 0.002 + lat);
        ctx.beginPath();
        ctx.arc(pp.sx, pp.sy, 5 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${depthAlpha * 0.3})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Dot
        ctx.beginPath();
        ctx.arc(pp.sx, pp.sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${depthAlpha})`;
        ctx.fill();
      });

      // Highlight lens flare
      const flareGrad = ctx.createRadialGradient(cx - r * 0.35, cy - r * 0.35, 0, cx - r * 0.35, cy - r * 0.35, r * 0.6);
      flareGrad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
      flareGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = flareGrad;
      ctx.fill();
    };

    const animate = () => {
      rotation += 0.08;
      if (rotation >= 360) rotation = 0;
      draw();
      animFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [fullscreen]);

  if (fullscreen) {
    return (
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
}
