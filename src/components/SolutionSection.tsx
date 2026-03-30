export default function SolutionSection() {
  return (
    <section className="section-solution reveal" id="solution">
      <div className="section-solution-inner">
        <span className="section-label light text-animate">Notre solution</span>
        <h2 className="text-animate delay-1">Notre plateforme permet de</h2>
        <p className="text-animate delay-2">
          Un espace centralisé qui libère la connaissance collective et valorise
          chaque membre de l&apos;équipe.
        </p>

        <div className="solution-grid">
          <div className="solution-card reveal delay-1">
            <div className="icon">💬</div>
            <h3>Poser des questions simplement</h3>
            <p>
              N&apos;importe quel collaborateur peut interroger le collectif
              en quelques secondes, sans friction.
            </p>
          </div>
          <div className="solution-card reveal delay-2">
            <div className="icon">✨</div>
            <h3>Partager des conseils utiles</h3>
            <p>
              Les bonnes pratiques circulent facilement et deviennent
              un patrimoine accessible à tous.
            </p>
          </div>
          <div className="solution-card reveal delay-3">
            <div className="icon">🏅</div>
            <h3>Valoriser les experts internes</h3>
            <p>
              Identifiez et reconnaissez les personnes ressources qui
              font la richesse de votre organisation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
