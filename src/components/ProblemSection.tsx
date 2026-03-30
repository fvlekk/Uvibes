export default function ProblemSection() {
  return (
    <section className="section-problem reveal" id="probleme">
      <div className="section-problem-inner">
        <div>
          <span className="section-label text-animate">Le problème</span>
          <h2 className="text-animate delay-1">Aujourd&apos;hui, les connaissances restent bloquées</h2>
          <ul className="problem-list">
            <li className="text-animate delay-2">dans les emails</li>
            <li className="text-animate delay-3">dans les réunions</li>
            <li className="text-animate delay-4">ou dans la tête des collaborateurs</li>
          </ul>
          <div className="problem-result text-animate delay-4">
            Résultat : perte de temps, frustration, et manque d&apos;efficacité.
          </div>
        </div>

        <div className="problem-visual reveal delay-2">
          <div className="block-item">
            <div className="block-icon">📧</div>
            <span>Connaissances enfouies dans les emails</span>
          </div>
          <div className="block-item">
            <div className="block-icon">🗓️</div>
            <span>Réunions sans trace ni capitalisation</span>
          </div>
          <div className="block-item">
            <div className="block-icon">🧠</div>
            <span>Expertise invisible dans la tête des collaborateurs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
