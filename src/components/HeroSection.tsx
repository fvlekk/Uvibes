"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const heroSection = sectionRef.current;
    if (!canvas || !heroSection) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let animationId: number | null = null;

    function resize() {
      const rect = heroSection!.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, Math.floor(rect.width));
      h = Math.max(1, Math.floor(rect.height));
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx!.lineCap = "round";
      ctx!.lineJoin = "round";
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function fade(t: number) {
      return t * t * t * (t * (t * 6 - 15) + 10);
    }

    function hash(x: number, y: number) {
      const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
      return s - Math.floor(s);
    }

    function grad(x: number, y: number) {
      const angle = hash(x, y) * Math.PI * 2;
      return { x: Math.cos(angle), y: Math.sin(angle) };
    }

    function perlin(x: number, y: number) {
      const x0 = Math.floor(x);
      const y0 = Math.floor(y);
      const x1 = x0 + 1;
      const y1 = y0 + 1;
      const sx = x - x0;
      const sy = y - y0;
      const g00 = grad(x0, y0);
      const g10 = grad(x1, y0);
      const g01 = grad(x0, y1);
      const g11 = grad(x1, y1);
      const n00 = g00.x * (x - x0) + g00.y * (y - y0);
      const n10 = g10.x * (x - x1) + g10.y * (y - y0);
      const n01 = g01.x * (x - x0) + g01.y * (y - y1);
      const n11 = g11.x * (x - x1) + g11.y * (y - y1);
      const u = fade(sx);
      const v = fade(sy);
      return lerp(lerp(n00, n10, u), lerp(n01, n11, u), v);
    }

    function fbm(x: number, y: number, t: number) {
      let value = 0;
      let amp = 0.5;
      let freq = 1;
      for (let i = 0; i < 5; i++) {
        value += amp * perlin(x * freq + t * 0.05 * freq, y * freq + t * 0.02 * freq);
        freq *= 2;
        amp *= 0.5;
      }
      return value;
    }

    function drawGradient(t: number) {
      const g = ctx!.createLinearGradient(0, 0, w, h);
      const shift = t * 0.0001;
      g.addColorStop(0, `hsl(${25 + Math.sin(shift) * 10}, 95%, 60%)`);
      g.addColorStop(0.3, `hsl(${350 + Math.sin(shift + 1) * 10}, 85%, 55%)`);
      g.addColorStop(0.6, `hsl(${330 + Math.sin(shift + 2) * 10}, 80%, 52%)`);
      g.addColorStop(1, `hsl(${280 + Math.sin(shift + 3) * 10}, 78%, 50%)`);
      ctx!.fillStyle = g;
      ctx!.fillRect(0, 0, w, h);
    }

    function drawWaves(t: number) {
      ctx!.strokeStyle = "#ffffff";
      ctx!.lineWidth = 2.5;
      ctx!.globalAlpha = 0.88;
      const lines = Math.max(24, Math.floor(h / 14));
      const stepY = h / lines;
      for (let i = -5; i < lines + 5; i++) {
        const yBase = i * stepY;
        ctx!.beginPath();
        let first = true;
        let prevX = 0;
        let prevY = yBase;
        for (let x = -40; x <= w + 40; x += 10) {
          const nx = x / w;
          const ny = yBase / h;
          const n =
            fbm(nx * 0.5, ny * 2, t * 0.0001) * 80 +
            Math.sin(nx * 10 + t * 0.0007 + i * 0.2) * 20;
          const y = yBase + n;
          if (first) {
            ctx!.moveTo(x, y);
            first = false;
          } else {
            const cx = (prevX + x) / 2;
            const cy = (prevY + y) / 2;
            ctx!.quadraticCurveTo(prevX, prevY, cx, cy);
          }
          prevX = x;
          prevY = y;
        }
        ctx!.stroke();
      }
      ctx!.globalAlpha = 1;
    }

    function animate(t: number) {
      drawGradient(t);
      drawWaves(t);
      animationId = requestAnimationFrame(animate);
    }

    function onVisibility() {
      if (document.hidden) {
        if (animationId) cancelAnimationFrame(animationId);
      } else {
        animationId = requestAnimationFrame(animate);
      }
    }

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      <canvas id="bg" ref={canvasRef} />

      <section className="hero" id="accueil">
        <div className="hero-inner">
          <div className="hero-text reveal">
            <h1 className="text-animate">
              Transformez l&apos;expérience collaborateur grâce au partage de connaissances
            </h1>
            <p className="text-animate delay-1">
              Une plateforme simple pour permettre à vos équipes d&apos;échanger conseils,
              bonnes pratiques et retours d&apos;expérience au quotidien.
            </p>
            <div className="hero-actions text-animate delay-2">
              <a href="#demo" className="hero-btn primary">Demander une démo</a>
              <a href="#solution" className="hero-btn secondary">Nous contacter</a>
            </div>
          </div>
          <div className="hero-mockup reveal delay-2">
            <Image
              src="/assets/imagef029.png"
              alt="Aperçu de la plateforme"
              width={600}
              height={500}
              priority
            />
          </div>
        </div>
      </section>
    </section>
  );
}
