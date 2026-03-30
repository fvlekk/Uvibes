import Image from "next/image";

const partners = [
  { src: "/assets/image3c5c.png", alt: "Partenaire", width: 120, height: 40 },
  { src: "/assets/LogoFeteDesVoisins.5bbc931d.png", alt: "Fête des voisins", width: 120, height: 40 },
  { src: "/assets/imagef633.png", alt: "Partenaire", width: 120, height: 40 },
  { src: "/assets/eklore.a910a668.png", alt: "Eklore", width: 120, height: 40 },
  { src: "/assets/upvd_logo_hori_rvb.d86efc16.png", alt: "UPVD", width: 120, height: 40 },
  { src: "/assets/UPVD_Logo_Web_RVB-Couleurs.png", alt: "UPVD", width: 120, height: 40 },
];

export default function PartnersSection() {
  return (
    <section className="section-partners reveal" id="partenaires">
      <div className="section-partners-inner">
        <span className="section-label text-animate">Partenaires</span>
        <h2 className="text-animate delay-1">Ils nous font confiance</h2>
        <p className="text-animate delay-2">
          Grandes entreprises, scale-ups et PME innovantes nous ont choisis pour transformer leur culture du savoir.
        </p>

        <div className="partners-mask reveal delay-3">
          <div className="partners-track">
            {[...partners, ...partners].map((p, i) => (
              <div className="partner-card" key={i}>
                <Image src={p.src} alt={p.alt} width={p.width} height={p.height} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
