export default function FeaturesSection() {
  return (
    <section className="section-features reveal" id="fonctionnalites">
      <div className="section-features-inner">
        <span className="section-label text-animate">Fonctionnalités</span>
        <h2 className="text-animate delay-1">Une expérience simple, fluide et engageante</h2>
        <p className="text-animate delay-2">
          Quatre fonctionnalités clés conçues pour faire circuler la connaissance
          sans effort au sein de vos équipes.
        </p>

        <div className="features-grid">
          <div className="feature-card reveal delay-1">
            <div className="icon">📰</div>
            <div className="feature-card-body">
              <span className="feature-number">01</span>
              <h3>Fil de conseils</h3>
              <p>Publiez et consultez des conseils en temps réel. Le flux d&apos;intelligence collective de votre organisation.</p>
            </div>
          </div>

          <div className="feature-card reveal delay-2">
            <div className="icon">🔍</div>
            <div className="feature-card-body">
              <span className="feature-number">02</span>
              <h3>Recherche intelligente</h3>
              <p>Trouvez rapidement les réponses déjà partagées. Plus besoin de redemander ce qui a déjà été répondu.</p>
            </div>
          </div>

          <div className="feature-card reveal delay-3">
            <div className="icon">👤</div>
            <div className="feature-card-body">
              <span className="feature-number">03</span>
              <h3>Profils experts</h3>
              <p>Identifiez facilement les personnes ressources. Chaque expert devient visible et accessible à tous.</p>
            </div>
          </div>

          <div className="feature-card reveal delay-4">
            <div className="icon">🔔</div>
            <div className="feature-card-body">
              <span className="feature-number">04</span>
              <h3>Notifications ciblées</h3>
              <p>Recevez uniquement les contenus pertinents. Zéro bruit, 100% de valeur pour chaque collaborateur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
