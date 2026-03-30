"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  { text: "Une solution qui transforme la collaboration en entreprise.", name: "Marie L.", role: "DRH, Scale-up tech" },
  { text: "Un outil simple mais redoutablement efficace pour faire remonter les bonnes pratiques.", name: "Thomas B.", role: "COO, PME industrielle" },
  { text: "Le futur du knowledge sharing, enfin adopté par les équipes sans effort.", name: "Sophie M.", role: "Head of Learning, Grande entreprise" },
  { text: "Avant, on perdait énormément d'informations. Aujourd'hui, tout est centralisé et accessible.", name: "— DRH, entreprise cliente", role: "Groupe international, 2 000+ collaborateurs" },
  { text: "Nos managers gagnent un temps précieux et les réponses circulent beaucoup plus vite.", name: "Nadia R.", role: "Directrice opérations, réseau multi-sites" },
  { text: "La plateforme a donné de la visibilité à nos experts internes en quelques semaines.", name: "Julien T.", role: "Responsable transformation, ETI" },
  { text: "On voit enfin la connaissance vivre au quotidien, pas seulement dans des documents statiques.", name: "Camille D.", role: "L&D Manager, groupe de services" },
  { text: "L'expérience est fluide sur mobile comme sur desktop, ce qui a vraiment aidé l'adoption.", name: "Élodie P.", role: "Cheffe de projet digital, organisation publique" },
];

const SLOTS = 4;

export default function TestimonialsSection() {
  const [offset, setOffset] = useState(0);
  const [switching, setSwitching] = useState<number[]>([]);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  function start() {
    stop();
    timer.current = setInterval(() => {
      setOffset((o) => (o + 1) % TESTIMONIALS.length);
      setSwitching([0, 1, 2, 3]);
      setTimeout(() => setSwitching([]), 500);
    }, 5200);
  }

  function stop() {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }

  useEffect(() => {
    start();
    return stop;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cards = Array.from({ length: SLOTS }, (_, i) =>
    TESTIMONIALS[(offset + i) % TESTIMONIALS.length]
  );

  return (
    <section className="section-testimonials reveal" id="temoignages">
      <div className="section-testimonials-inner">
        <span className="section-label text-animate">Ils parlent de nous</span>
        <h2 className="text-animate delay-1">Ce que disent nos clients</h2>

        <div className="testimonials-grid" id="testimonialsGrid">
          {cards.map((item, i) => (
            <div
              key={i}
              className={[
                "testimonial-card",
                i === 3 ? "testimonial-featured" : "",
                "reveal",
                `delay-${i + 1}`,
                "is-visible",
                switching.includes(i) ? "is-switching" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              data-testimonial-slot={i}
              onMouseEnter={stop}
              onMouseLeave={start}
            >
              <div className="testimonial-quote">&quot;</div>
              <p className="testimonial-text">{item.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar"></div>
                <div>
                  <div className="testimonial-name">{item.name}</div>
                  <div className="testimonial-role">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
