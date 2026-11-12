import type { Lang } from "./site";

interface JobText {
  role: string;
  place: string;
  dates: string;
  summary: string;
  /** "Label : text" -> the label is shown in bold */
  points: string[];
}

export interface Job extends Record<Lang, JobText> {
  company: string;
  logo?: string;
  logoDark?: boolean;
  years: string;
  current?: boolean;
  tags: string[];
}

/** Newest first. */
export const JOBS: Job[] = [
  {
    company: "TV5MONDE",
    logo: "/imgs/logos/Logo_TV5_Monde.webp",
    years: "2026 - 27",
    current: true,
    tags: ["SSO", "OAuth2", "SAML / OIDC", "Data migration", "Agile"],
    fr: {
      role: "Chargée de projets techniques numériques (alternance)",
      place: "Paris, FR",
      dates: "Sept. 2026 - août 2027",
      summary: "Chaîne de télévision internationale francophone.",
      points: [
        "SSO : déploiement complet, du cadrage à la mise en production.",
        "Migration de données : pilotage d’une migration critique sans interruption de service.",
        "Projets & Innovation : coordination transverse (devs, prestataires).",
      ],
    },
    en: {
      role: "Digital Technical Project Officer (Work-study)",
      place: "Paris, FR",
      dates: "Sept. 2026 - Aug. 2027",
      summary: "International French-language TV network.",
      points: [
        "SSO: Full rollout, from scoping to production.",
        "Data migration: Led a critical migration with zero service interruption.",
        "Projects & Innovation: Cross-team coordination (developers, vendors).",
      ],
    },
  },
  {
    company: "Limpide.net",
    logo: "/imgs/logos/limpide.webp",
    years: "2026",
    tags: ["React", "Node.js", "MongoDB", "Express", "AI"],
    fr: {
      role: "Développeuse fullstack (stage)",
      place: "Prague, CZ - sur site",
      dates: "Mars - août 2026",
      summary: "Startup française qui développe une solution CRM pour les courtiers et fournisseurs d’énergie.",
      points: [
        "Back-end & data : API et gestion des données.",
        "Front-end & UI : refonte et optimisation des performances et de l’UI/UX.",
        "Design : intégration de nouvelles fonctionnalités et mise à jour du site vitrine.",
      ],
    },
    en: {
      role: "Fullstack Developer (Internship)",
      place: "Prague, CZ - On-site",
      dates: "March - Aug. 2026",
      summary: "French startup developing a CRM solution for energy brokers and suppliers.",
      points: [
        "Back-end & Data: API and data management.",
        "Front-end & UI: Redesign and optimization for performance and UI/UX.",
        "Design: Integration of new features and update of the showcase website.",
      ],
    },
  },
  {
    company: "prewatch-lab",
    logo: "/imgs/logos/prewatch.webp",
    logoDark: true,
    years: "2025 - 26",
    tags: ["WebGL", "3DGS", "PlayCanvas", "VR", "Next.js"],
    fr: {
      role: "Développeuse WebGL (freelance & stage)",
      place: "Paris, FR - hybride",
      dates: "Avril 2025 - janv. 2026",
      summary: "Service web de visualisation 3D interactive basé sur le Gaussian Splatting (3DGS).",
      points: [
        "Développement : création d’outils UI pour l’interaction 3D dynamique et la personnalisation de modèles.",
        "Infrastructure : architecture de la base de données et intégration d’un dashboard Next.js.",
        "CI/CD : synchronisation PlayCanvas automatisée via GitHub Actions.",
        "Recherche : mise en place de la visualisation immersive et de fonctionnalités de réalité virtuelle (VR).",
      ],
    },
    en: {
      role: "WebGL Developer (Freelance & Internship)",
      place: "Paris, FR - Hybrid",
      dates: "April 2025 - Jan. 2026",
      summary: "Interactive 3D visualization web service based on Gaussian Splatting (3DGS).",
      points: [
        "Development: Created UI tools for dynamic 3D interaction and model customization.",
        "Infrastructure: Database architecture and Next.js Dashboard integration.",
        "CI/CD: Automated PlayCanvas synchronization via GitHub Actions.",
        "Research: Implemented immersive visualization and Virtual Reality (VR) features.",
      ],
    },
  },
  {
    company: "POINT.P - SGDB France",
    logo: "/imgs/logos/pointp.webp",
    years: "2022 - 23",
    tags: ["JIRA", "AB Tasty", "WordPress", "Marketing"],
    fr: {
      role: "Assistante chef de projet web (alternance)",
      place: "Courbevoie, FR",
      dates: "Sept. 2022 - août 2023",
      summary: "Webmastering et marketing digital pour Point.P et ses marques affiliées.",
      points: [
        "Webmastering : développement de pages web et intégration de maquettes pour Point.P et ses marques affiliées.",
        "Webmastering : mises à jour de contenus et intégration de nouveaux visuels.",
        "Marketing digital : pilotage de campagnes d’emailing et d’animations web pour les opérations commerciales et les événements.",
        "Marketing digital : campagnes de tests via AB Tasty et reporting de performance.",
      ],
    },
    en: {
      role: "Assistant Web Project Lead (Apprenticeship)",
      place: "Courbevoie, FR",
      dates: "Sept. 2022 - Aug. 2023",
      summary: "Webmastering and digital marketing for Point.P and affiliated brands.",
      points: [
        "Webmastering: Web page development and layout integration for Point.P and affiliated brands.",
        "Webmastering: Managed content updates and integration of new visual assets.",
        "Digital marketing: Led email campaigns and web animations for sales operations and events.",
        "Digital marketing: Executed test campaigns via AB Tasty and handled performance reporting.",
      ],
    },
  },
  {
    company: "CARDONNEL Ingénierie",
    logo: "/imgs/logos/cardonnel.webp",
    years: "2022",
    tags: ["Symfony", "PHP", "SQL"],
    fr: {
      role: "Développeuse full-stack (stage)",
      place: "Lieusaint, FR - sur site",
      dates: "Avril - juil. 2022",
      summary: "Outils internes pour un bureau d’études en rénovation de bâtiments.",
      points: [
        "Symfony : développement d’outils métier internes pour la rénovation de bâtiments.",
        "Création d’un système de suivi de tickets sur mesure pour optimiser l’organisation interne.",
        "Corrections de bugs, ajustements d’interface et gestion de la base de données.",
      ],
    },
    en: {
      role: "Full-stack Developer (Internship)",
      place: "Lieusaint, FR - On-site",
      dates: "April - July 2022",
      summary: "Internal tools for a building renovation engineering firm.",
      points: [
        "Symfony: Developed internal business tools for building renovation.",
        "Created a custom ticket tracking system to optimize internal organization.",
        "Handled bug fixes, UI adjustments, and database management.",
      ],
    },
  },
];

export interface Education extends Record<Lang, string> {
  years: string;
  school: string;
}

export const EDUCATION: Education[] = [
  { years: "2026 - 2027", school: "Université Sorbonne Paris Nord", fr: "Master Design d’interface, multimédia & internet", en: "Master’s in Interface Design, Multimedia & Internet" },
  { years: "2023 - 2026", school: "ESIEE Paris - IMAC", fr: "Cycle ingénieur en ingénierie créative", en: "Engineering degree in creative engineering" },
  { years: "2022 - 2023", school: "Gobelins, l’école de l’image", fr: "Bachelor développement web et mobile", en: "Bachelor’s in web and mobile development" },
  { years: "2020 - 2022", school: "IUT de Paris - Université Paris Cité", fr: "DUT Informatique", en: "Two-year degree in computer science" },
];

export type AssoRole = Record<Lang, { role: string; dates: string; text: string; points?: string[] }>;

export interface Association extends Record<Lang, { name: string; about: string }> {
  logo: string;
  url?: string;
  roles: AssoRole[];
}

export const ASSOCIATIONS: Association[] = [
  {
    logo: "/imgs/projects/asso/logo-bda.webp",
    url: "https://bda-esiee.fr",
    fr: { name: "BDA - ESIEE Paris", about: "L’association qui centralise, valorise et fait vivre les arts et la culture à l’ESIEE Paris." },
    en: { name: "BDA - ESIEE Paris", about: "The association that aims to centralise, enhance and bring to life the arts and culture at ESIEE Paris." },
    roles: [
      {
        fr: {
          role: "Vice-présidente",
          dates: "Juil. 2025 - aujourd’hui",
          text: "Co-direction de la stratégie de l’association pour promouvoir les arts et la culture sur le campus : développement du site bda-esiee.fr, organisation d’événements artistiques et gestion administrative.",
        },
        en: {
          role: "Vice-president",
          dates: "July 2025 - now",
          text: "Co-directed the association’s strategy to promote arts and culture on campus: developed the bda-esiee.fr website, helped organise artistic events and managed administrative tasks.",
        },
      },
    ],
  },
  {
    logo: "/imgs/projects/asso/logo_gic_noir.png",
    fr: { name: "GIC - ESIEE Paris", about: "L’association des ingénieurs créatifs, entre arts, sciences et vie étudiante." },
    en: { name: "GIC - ESIEE Paris", about: "The association of creative engineers, bridging arts, sciences and student life." },
    roles: [
      {
        fr: {
          role: "Présidente",
          dates: "Oct. 2024 - juin 2025",
          text: "À la tête d’une équipe pour redynamiser la vie étudiante après la fusion de l’université : développement de l’association, relations institutionnelles et coordination des grands événements.",
          points: [
            "IMACannes : organisation complète de la cérémonie de films.",
            "Gala : coordination de la grande soirée de fin d’année.",
            "JeudiMACs : organisation d’événements créatifs hebdomadaires.",
          ],
        },
        en: {
          role: "President",
          dates: "Oct. 2024 - June 2025",
          text: "Led a team to revitalise student life after the university merger: grew the association, handled institutional relations and coordinated major events.",
          points: [
            "IMACannes: Full organisation of the film ceremony.",
            "Gala: Coordination of the end-of-year closing night.",
            "JeudiMACs: Weekly creative bonding events.",
          ],
        },
      },
      {
        fr: {
          role: "Responsable événements",
          dates: "Juil. 2024 - janv. 2025",
          text: "Création d’un cadre accueillant pour les nouveaux étudiants, avec l’organisation des journées d’intégration (thème Harry Potter).",
        },
        en: {
          role: "Events coordinator",
          dates: "July 2024 - Jan. 2025",
          text: "Created a welcoming environment for new students by organising the Cohesion Days (Harry Potter theme).",
        },
      },
    ],
  },
];

export const ASSO_PHOTOS: { src: string; label: Record<Lang, string> }[] = [
  { src: "/imgs/projects/asso/imacannes.jpg", label: { fr: "Cérémonie IMACannes", en: "IMACannes ceremony" } },
  { src: "/imgs/projects/asso/jdc.jpg", label: { fr: "Journées de cohésion", en: "Cohesion Days" } },
  { src: "/imgs/projects/asso/post-gala.png", label: { fr: "Gala de fin d’année", en: "End-of-year gala" } },
];

export interface SkillGroup extends Record<Lang, { title: string; text: string }> {
  items: (string | Record<Lang, string>)[];
}

export const SKILLS: SkillGroup[] = [
  {
    fr: { title: "Développement web", text: "Applications web, API et bases de données, du front au back." },
    en: { title: "Web development", text: "Web apps, APIs and databases, front to back." },
    items: ["React", "Next.js", "TypeScript", "Node.js", "SQL / NoSQL"],
  },
  {
    fr: { title: "3D, jeux & temps réel", text: "Expériences interactives dans le navigateur et moteurs de jeu." },
    en: { title: "3D, games & real-time", text: "Interactive experiences in the browser and game engines." },
    items: ["Three.js", "PlayCanvas", "WebXR / VR", "Unity"],
  },
  {
    fr: { title: "Design & création", text: "Interfaces, identités visuelles, 3D et vidéo." },
    en: { title: "Design & creative", text: "Interfaces, visual identities, 3D and video." },
    items: ["Figma", "UI/UX", "Blender", { fr: "Suite Adobe", en: "Adobe Suite" }],
  },
  {
    fr: { title: "Gestion de projet & outils", text: "Coordination d’équipes techniques, de la conception à la mise en production." },
    en: { title: "Project management & tools", text: "Coordinating technical teams, from scoping to production." },
    items: ["Agile", "JIRA", "Git / CI", "SSO"],
  },
];
