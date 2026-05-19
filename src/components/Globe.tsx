'use client';

import { useEffect, useRef } from 'react';

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    let rotation = 0;
    let animationFrameId: number;

    const drawGlobe = (rotation: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 150;

      // Draw glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius + 30);
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
      gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw globe sphere
      const globeGradient = ctx.createRadialGradient(
        centerX - 30,
        centerY - 30,
        0,
        centerX,
        centerY,
        radius
      );
      globeGradient.addColorStop(0, '#5361E8');
      globeGradient.addColorStop(0.5, '#38BDF8');
      globeGradient.addColorStop(1, '#0284C7');
      ctx.fillStyle = globeGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw rotating latitude lines
      ctx.strokeStyle = 'rgba(250, 250, 250, 0.15)';
      ctx.lineWidth = 1;

      for (let lat = -60; lat <= 60; lat += 30) {
        const latRad = (lat * Math.PI) / 180;
        const latRadius = radius * Math.cos(latRad);
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + radius * Math.sin(latRad), latRadius, latRadius * 0.3, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw rotating longitude lines
      ctx.strokeStyle = 'rgba(250, 250, 250, 0.2)';
      for (let lon = 0; lon < 360; lon += 30) {
        const lonRad = ((lon + rotation) * Math.PI) / 180;
        const x1 = centerX + radius * Math.cos(lonRad);
        const y1 = centerY - radius * 0.2;
        const x2 = centerX + radius * Math.cos(lonRad);
        const y2 = centerY + radius * 0.2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      // Draw highlight
      const highlightGradient = ctx.createRadialGradient(
        centerX - 50,
        centerY - 50,
        0,
        centerX,
        centerY,
        radius
      );
      highlightGradient.addColorStop(0, 'rgba(250, 250, 250, 0.4)');
      highlightGradient.addColorStop(1, 'rgba(250, 250, 250, 0)');
      ctx.fillStyle = highlightGradient;
      ctx.beginPath();
      ctx.arc(centerX - 50, centerY - 50, radius * 0.4, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      rotation += 0.5;
      if (rotation >= 360) rotation = 0;
      drawGlobe(rotation);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '400px',
        maxHeight: '400px',
        filter: 'drop-shadow(0 20px 40px rgba(56, 189, 248, 0.1))',
      }}
    />
  );
}
