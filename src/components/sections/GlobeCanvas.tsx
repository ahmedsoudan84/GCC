"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

interface GlobeCanvasProps {
  className?: string;
  size?: number;
  dark?: number;
  baseColor?: [number, number, number];
  glowColor?: [number, number, number];
  markerColor?: [number, number, number];
  phi?: number;
  speed?: number;
  diffuse?: number;
}

export default function GlobeCanvas({
  className,
  size = 600,
  dark = 1,
  baseColor = [0.04, 0.12, 0.32],
  glowColor = [0.18, 0.38, 0.78],
  markerColor = [0.85, 0.65, 0.24],
  phi: initialPhi = 0,
  speed = 0.003,
  diffuse = 1.4,
}: GlobeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phiRef = useRef(initialPhi);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: size * 2,
      height: size * 2,
      phi: phiRef.current,
      theta: 0.28,
      dark,
      diffuse,
      mapSamples: 16000,
      mapBrightness: 7,
      baseColor,
      markerColor,
      glowColor,
      markers: [
        { location: [51.5074, -0.1278], size: 0.09 },  // London
        { location: [40.7128, -74.006], size: 0.07 },  // New York
        { location: [25.2854, 51.531], size: 0.07 },   // Doha
        { location: [30.0444, 31.2357], size: 0.055 }, // Cairo
        { location: [32.8872, 13.1913], size: 0.045 }, // Tripoli
        { location: [15.5527, 32.5324], size: 0.04 },  // Khartoum
        { location: [6.3703, 2.3912], size: 0.04 },    // Cotonou
      ],
    });

    const animate = () => {
      phiRef.current += speed;
      globe.update({ phi: phiRef.current });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      globe.destroy();
    };
  }, [size, dark, diffuse, baseColor, glowColor, markerColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: size, height: size }}
      className={className}
    />
  );
}
