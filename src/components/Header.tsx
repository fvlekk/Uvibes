"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 50);
      setOnLight(window.scrollY > window.innerHeight * 0.9);
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 980) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  const headerClass = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    onLight ? "on-light" : "",
  ]
    .filter(Boolean)
    .join(" ");

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className={headerClass} id="siteHeader">
        <a className="logo-desktop" href="#">
          <Image
            className="logo-default"
            src="/assets/image133d.png"
            alt="KnowledgeFlow"
            width={120}
            height={54}
          />
          <Image
            className="logo-light"
            src="/assets/favicon.png"
            alt="KnowledgeFlow"
            width={54}
            height={54}
          />
        </a>
        <a className="logo-mobile" href="#">
          <Image
            className="logo-mobile-default"
            src="/assets/image309f.png"
            alt="KnowledgeFlow"
            width={80}
            height={36}
          />
          <Image
            className="logo-mobile-light"
            src="/assets/favicon.png"
            alt="KnowledgeFlow"
            width={36}
            height={36}
          />
        </a>

        <nav className="nav-desktop" aria-label="Navigation principale">
          <a href="#probleme">Problème</a>
          <a href="#solution">Solution</a>
          <a href="#fonctionnalites">Fonctionnalités</a>
          <a href="#chiffres">Chiffres</a>
          <a href="#temoignages">Témoignages</a>
          <a href="#demo" className="cta">Demander une démo</a>
        </nav>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          id="menuToggle"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <div
        className={`mobile-menu-backdrop${menuOpen ? " is-open" : ""}`}
        id="mobileMenuBackdrop"
        onClick={closeMenu}
      />
      <nav
        className={`mobile-menu${menuOpen ? " is-open" : ""}`}
        id="mobileMenu"
        aria-label="Navigation mobile"
      >
        <a href="#probleme" onClick={closeMenu}>Problème</a>
        <a href="#solution" onClick={closeMenu}>Solution</a>
        <a href="#fonctionnalites" onClick={closeMenu}>Fonctionnalités</a>
        <a href="#chiffres" onClick={closeMenu}>Chiffres</a>
        <a href="#temoignages" onClick={closeMenu}>Témoignages</a>
        <a href="#demo" className="mobile-menu-cta" onClick={closeMenu}>Demander une démo</a>
      </nav>
    </>
  );
}
