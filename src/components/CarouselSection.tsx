"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const SLIDES = [
  { src: "/assets/mockup-1.png", alt: "Vers l'objectif" },
  { src: "/assets/mockup-2.png", alt: "Planification quotidienne" },
  { src: "/assets/mockup-3.png", alt: "Travail en équipe" },
  { src: "/assets/mockup-4.png", alt: "Gestion du focus" },
];

const CAPTIONS = [
  {
    title: "Vers l'objectif",
    text: "Aidez vos collaborateurs à progresser et atteindre leurs objectifs grâce au partage de connaissances collectives.",
  },
  {
    title: "Planification quotidienne",
    text: "Organisez les tâches et partagez les meilleures pratiques pour une meilleure productivité au quotidien.",
  },
  {
    title: "Travail en équipe",
    text: "Favorisez la collaboration et les échanges entre collègues pour créer une intelligence collective durable.",
  },
  {
    title: "Gestion du focus",
    text: "Recevez uniquement les contenus pertinents et gardez le focus sur ce qui compte vraiment pour vous.",
  },
];

export default function CarouselSection() {
  const [current, setCurrent] = useState(0);
  const [caption, setCaption] = useState(CAPTIONS[0]);
  const [captionVisible, setCaptionVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  function goTo(index: number) {
    if (isAnimating) return;
    setIsAnimating(true);
    const next = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;
    setCurrent(next);
    setCaptionVisible(false);
    setTimeout(() => {
      setCaption(CAPTIONS[next]);
      setCaptionVisible(true);
    }, 180);
    setTimeout(() => setIsAnimating(false), 650);
  }

  function startAuto() {
    stopAuto();
    autoTimer.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % SLIDES.length;
        setCaptionVisible(false);
        setTimeout(() => {
          setCaption(CAPTIONS[next]);
          setCaptionVisible(true);
        }, 180);
        return next;
      });
    }, 4200);
  }

  function stopAuto() {
    if (autoTimer.current) {
      clearInterval(autoTimer.current);
      autoTimer.current = null;
    }
  }

  useEffect(() => {
    startAuto();
    return stopAuto;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") { stopAuto(); goTo(current + 1); startAuto(); }
      if (e.key === "ArrowLeft") { stopAuto(); goTo(current - 1); startAuto(); }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, isAnimating]);

  return (
    <section className="section-carousel reveal" id="apercu">
      <div className="section-carousel-inner">
        <div className="section-carousel-layout">
          <div className="carousel-copy reveal">
            <span className="section-label text-animate">L&apos;application en action</span>
            <h2 className="text-animate delay-1">
              Des écrans pensés pour guider, rassurer et faire agir
            </h2>
            <p className="text-animate delay-2">
              À gauche, le message explique la valeur métier. À droite, une seule mockup
              est affichée à la fois pour une lecture plus claire, plus premium et plus impactante.
            </p>
            <ul className="carousel-benefits">
              <li className="text-animate delay-2">Une interface claire pour trouver la bonne information rapidement</li>
              <li className="text-animate delay-3">Des parcours simples pour partager, commenter et capitaliser</li>
              <li className="text-animate delay-4">Une expérience mobile-first qui reste lisible sur tous les écrans</li>
            </ul>
          </div>

          <div
            className="carousel-viewport reveal delay-2"
            onMouseEnter={stopAuto}
            onMouseLeave={startAuto}
          >
            <div className="single-carousel" id="singleCarousel">
              {SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className={[
                    "single-carousel-slide",
                    i === current ? "is-active" : "",
                    i === (current - 1 + SLIDES.length) % SLIDES.length ? "is-prev" : "",
                    i === (current + 1) % SLIDES.length ? "is-next" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  data-index={i}
                >
                  <Image src={slide.src} alt={slide.alt} width={400} height={700} />
                </div>
              ))}
            </div>

            <div className="carousel-caption" id="carouselCaption">
              <h3
                id="captionTitle"
                className={captionVisible ? "caption-in" : ""}
              >
                {caption.title}
              </h3>
              <p
                id="captionText"
                className={captionVisible ? "caption-in" : ""}
              >
                {caption.text}
              </p>
            </div>

            <div className="carousel-controls">
              <button
                className="carousel-btn"
                id="prevBtn"
                aria-label="Précédent"
                onClick={() => { stopAuto(); goTo(current - 1); startAuto(); }}
              >
                <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
              </button>

              <div className="carousel-dots" id="carouselDots">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    className={`carousel-dot${i === current ? " active" : ""}`}
                    data-index={i}
                    aria-label={`Slide ${i + 1}`}
                    onClick={() => { stopAuto(); goTo(i); startAuto(); }}
                  />
                ))}
              </div>

              <button
                className="carousel-btn"
                id="nextBtn"
                aria-label="Suivant"
                onClick={() => { stopAuto(); goTo(current + 1); startAuto(); }}
              >
                <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
