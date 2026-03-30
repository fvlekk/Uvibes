export default function CtaSection() {
  return (
    <section className="section-cta reveal" id="demo">
      <div className="section-cta-inner">
        <span className="section-label light text-animate">Prêt à franchir le pas ?</span>
        <h2 className="text-animate delay-1">Prêt à transformer votre entreprise ?</h2>
        <p className="text-animate delay-2">
          Rejoignez les 120 entreprises qui ont déjà libéré la connaissance collective
          et gagné en efficacité.
        </p>
        <a href="mailto:contact@knowledgeflow.fr" className="cta-btn text-animate delay-3">
          Demander une démo
        </a>
      </div>
    </section>
  );
}
