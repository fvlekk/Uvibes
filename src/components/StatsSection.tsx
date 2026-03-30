"use client";

import { useEffect, useRef } from "react";

interface Stat {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const STATS: Stat[] = [
  { target: 50000, label: "utilisateurs actifs", suffix: "+" },
  { target: 120, label: "entreprises clientes" },
  { target: 35, label: "de gain de temps moyen", prefix: "+", suffix: "%" },
  { target: 4.8, label: "satisfaction utilisateur", suffix: "/5", decimals: 1 },
];

function formatNumber(value: number, decimals = 0) {
  if (decimals > 0) return value.toFixed(decimals).replace(".", ",");
  return Math.round(value).toLocaleString("fr-FR");
}

function StatCard({ stat }: { stat: Stat }) {
  const elRef = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = elRef.current;
    if (!el || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || animated.current) return;
          animated.current = true;
          observer.disconnect();

          const duration = 1800;
          const start = performance.now();
          const { target, prefix = "", suffix = "", decimals = 0 } = stat;

          function frame(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const value = target * eased;
            el!.textContent = `${prefix}${formatNumber(value, decimals)}${suffix}`;
            if (progress < 1) requestAnimationFrame(frame);
          }

          requestAnimationFrame(frame);
        });
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stat]);

  return (
    <div ref={elRef} className="stat-number">
      0
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="section-stats reveal" id="chiffres">
      <div className="section-stats-inner">
        <span className="section-label text-animate">Chiffres clés</span>
        <h2 className="text-animate delay-1">Des résultats qui parlent d&apos;eux-mêmes</h2>

        <div className="stats-grid">
          {STATS.map((stat, i) => (
            <div className={`stat-card reveal delay-${i + 1}`} key={i}>
              <StatCard stat={stat} />
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
