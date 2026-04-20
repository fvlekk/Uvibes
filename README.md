# Uvibes — KnowledgeFlow

Landing page de **KnowledgeFlow**, une plateforme de partage de connaissances pour les équipes en entreprise. Conçue pour libérer l'intelligence collective en rendant conseils, bonnes pratiques et expertise interne accessibles à tous.

**Demo en ligne : [uvibes-final.vercel.app](https://uvibes-final.vercel.app/)**

---

## Aperçu

KnowledgeFlow répond à un problème concret : les connaissances restent enfouies dans les emails, les réunions et la tête des collaborateurs. La plateforme centralise et fait circuler ce savoir sans friction.

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js (App Router) |
| Langage | TypeScript |
| UI | React 19 |
| Styling | CSS global (`globals.css`) |
| Déploiement | Vercel |

Aucune dépendance externe UI — composants 100% custom avec animations CSS et Canvas API.

---

## Sections de la page

| Composant | ID | Contenu |
|-----------|-----|---------|
| `HeroSection` | `#accueil` | Titre, CTA, mockup produit, fond animé Canvas (Perlin noise) |
| `ProblemSection` | `#probleme` | Les 3 blocages du savoir (emails, réunions, experts invisibles) |
| `SolutionSection` | `#solution` | 3 piliers : poser des questions, partager, valoriser les experts |
| `FeaturesSection` | `#fonctionnalites` | 4 fonctionnalités clés |
| `StatsSection` | `#chiffres` | Compteurs animés au scroll |
| `CarouselSection` | — | Carousel de mockups produit |
| `TestimonialsSection` | `#temoignages` | Témoignages clients |
| `PartnersSection` | `#partenaires` | Défilement automatique des logos partenaires |
| `CtaSection` | `#demo` | Appel à l'action final |

---

## Fonctionnalités de la page

- **Fond animé Canvas** dans le Hero : vagues Perlin noise avec dégradé dynamique
- **Animations au scroll** : éléments `.reveal` et `.text-animate` activés via `IntersectionObserver`
- **Compteurs animés** dans la section Chiffres (ease-out cubic)
- **Header adaptatif** : change de style au scroll, menu mobile hamburger avec overlay
- **Carrousel** de mockups produit
- **Défilement infini** des logos partenaires (CSS `transform` loop)
- **Responsive** : breakpoints à 980px, 768px, 560px

---

## Chiffres clés (StatsSection)

| Métrique | Valeur |
|----------|--------|
| Utilisateurs actifs | 50 000+ |
| Entreprises clientes | 120 |
| Gain de temps moyen | +35% |
| Satisfaction utilisateur | 4,8/5 |

---

## 4 Fonctionnalités principales

| # | Nom | Description |
|---|-----|-------------|
| 01 | Fil de conseils | Flux d'intelligence collective en temps réel |
| 02 | Recherche intelligente | Retrouver rapidement les réponses déjà partagées |
| 03 | Profils experts | Identifier et rendre visible les personnes ressources |
| 04 | Notifications ciblées | Contenu pertinent uniquement, sans bruit |

---

## Structure du projet

```
uvibes/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — métadonnées, polices
│   │   ├── page.tsx            # Page principale — composition des sections
│   │   └── globals.css         # Styles globaux, animations, variables CSS
│   └── components/
│       ├── Header.tsx          # Navigation sticky + menu mobile
│       ├── HeroSection.tsx     # Hero + animation Canvas Perlin noise
│       ├── ProblemSection.tsx  # Section problème
│       ├── SolutionSection.tsx # Section solution
│       ├── FeaturesSection.tsx # Grille de 4 fonctionnalités
│       ├── StatsSection.tsx    # Compteurs animés au scroll
│       ├── CarouselSection.tsx # Carousel de mockups
│       ├── TestimonialsSection.tsx # Témoignages
│       ├── PartnersSection.tsx # Logos partenaires en défilement
│       ├── CtaSection.tsx      # Call-to-action final
│       └── Footer.tsx          # Pied de page
├── public/
│   └── assets/                 # Images, logos, mockups
├── next.config.mjs
├── tsconfig.json
└── package.json
```

---

## Prérequis

- Node.js 18+
- npm ou yarn

---

## Installation & Développement local

```bash
# Cloner le repo
git clone https://github.com/fvlekk/Uvibes.git
cd Uvibes

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
# → http://localhost:3000
```

## Build de production

```bash
npm run build
npm start
```

---

## Déploiement

### Vercel (recommandé — déjà configuré)

Le projet est déployé en continu sur Vercel :

**URL de production : [https://uvibes-final.vercel.app/](https://uvibes-final.vercel.app/)**

Tout push sur `main` déclenche un redéploiement automatique.

Pour déployer manuellement depuis la CLI :
```bash
npm install -g vercel
vercel --prod
```

### Autres plateformes

**Netlify :**
```bash
npm run build
# Dossier à déployer : .next/
```

**Docker :**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t uvibes .
docker run -p 3000:3000 uvibes
```

---

## Partenaires

- [UPVD](https://www.univ-perp.fr/) — Université de Perpignan Via Domitia
- Fête des Voisins
- Eklore

---

## Licence

Ce projet est distribué sous licence [MIT](LICENSE).
