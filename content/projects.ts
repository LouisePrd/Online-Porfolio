import type { Lang } from "./site";

export type Category = "web" | "3d" | "games" | "creative";
export const CATEGORIES: Category[] = ["web", "3d", "games", "creative"];

type Localized = Record<Lang, string>;

export interface Project {
  /** URL segment: /projects/{slug} */
  slug: string;
  title: string;
  cat: Category;
  /** "2025" or "2025 - 2026" (used for sorting) */
  date: string;
  /** Card thumbnail (~16:9) */
  img: string;
  /** Optional 16:9 visual for the home lead card */
  cover?: { src: string; bg: string };
  tags: string[];
  links: { live?: string; source?: string; report?: string; company?: string };
  /** One-liner for cards */
  intro: Localized;
  /** Full description for the drawer and detail page */
  desc: Localized;
  type: Localized;
  context: Localized;
  credits?: { name: string; url: string }[];
  media: {
    images?: (string | { src: string; w: number; h: number })[];
    verticalImages?: string[];
    gifs?: string[];
    panorama?: string;
    /** Local .mp4 files */
    videos?: string[];
    videoUrl?: string;
    iframeUrl?: string;
    canvaUrl?: string;
  };
}

const DATA: Project[] = [
  {
    slug: "architech",
    title: "Architech",
    cat: "web",
    date: "2026",
    img: "/imgs/projects/architech/mockup-hand.png",
    cover: { src: "/imgs/projects/architech/mockup-hand.png", bg: "#e6e0d4" },
    tags: ["Next.js", "Firebase", "Cloudinary", "PDFMake"],
    links: { live: "http://architech-webapp.netlify.app/", source: "https://github.com/imac-web/architech-webapp", report: "https://www.canva.com/design/DAG_QtTxkLg/d1r3yhwzDoAA43YF55tTIw/edit?utm_content=DAG_QtTxkLg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" },
    intro: {
      fr: "Une solution SaaS dédiée aux architectes pour simplifier la rédaction des Diagnostics Techniques Globaux (DTG).",
      en: "A SaaS solution dedicated to architects for streamlining General Technical Diagnostic (DTG) reports.",
    },
    desc: {
      fr: "Les architectes passent des heures à rédiger des DTG sans outil dédié. Architech répond à ce besoin avec un écosystème web complet pour gérer les équipes, la collecte de données sur site et des formulaires complexes. Construite avec Next.js et Firebase, l’application met l’accent sur l’UX de la saisie de données lourde. Elle repose sur une architecture NoSQL hybride, Cloudinary pour la gestion des photos et une génération de PDF instantanée côté client, ce qui réduit considérablement le temps de production des rapports.",
      en: "Architects spend hours creating DTGs without dedicated tools. Architech solves this by providing a complete web ecosystem to manage teams, onsite data collection, and complex forms. Built with Next.js and Firebase, the application focuses on optimizing the UX of heavy data entry. It features a hybrid NoSQL architecture, Cloudinary for photo management , and instant client-side PDF generation, drastically reducing report production time.",
    },
    type: {
      fr: "Application web / SaaS",
      en: "Web Application / SaaS",
    },
    context: {
      fr: "Projet de groupe pré-professionnel à l’IMAC",
      en: "Pre-professional Group Project at IMAC",
    },
    credits: [
      { name: "Flavien IZACKOVIC", url: "https://www.behance.net/izackovflavien" },
      { name: "Sousada Boualapha", url: "https://sousada-b.netlify.app/en" },
    ],
    media: {
      images: [
        { src: "/imgs/projects/architech/page-de-presentation.webp", w: 4252, h: 3189 },
        { src: "/imgs/projects/architech/vue-sur-le-projet.webp", w: 6000, h: 3000 },
        { src: "/imgs/projects/architech/floating-phones.webp", w: 3000, h: 3000 },
      ],
    },
  },
  {
    slug: "3d-animation",
    title: "Modélisation & animation 3D",
    cat: "creative",
    date: "2023 - 2026",
    img: "/imgs/projects/3d/trophees.webp",
    tags: ["Blender", "Modélisation", "Animation"],
    links: {},
    intro: {
      fr: "Une sélection de mes modélisations et animations 3D.",
      en: "A selection of my 3D modelling and animation work.",
    },
    desc: {
      fr: "Modèles, rendus et petites animations réalisés au fil de mes projets de cours et de mes projets personnels : trophées, personnages, objets et les pigeons animés de Piageon.",
      en: "Models, renders and short animations made across course and personal projects: trophies, characters, objects and the animated pigeons from Piageon.",
    },
    type: { fr: "Modélisation & animation 3D", en: "3D modelling & animation" },
    context: { fr: "Projets de cours et projets personnels", en: "Course and personal projects" },
    media: {
      images: [
        "/imgs/projects/3d/trophees.webp",
        "/imgs/projects/3d/Trophee-film.png",
        "/imgs/projects/3d/switch.png",
        "/imgs/projects/3d/cat-wip.webp",
        "/imgs/projects/3d/robot.webp",
      ],
      videos: [
        "/imgs/projects/3d/animation.mp4",
        "/imgs/projects/3d/kirby.mp4",
        "/imgs/projects/3d/pigeon.mp4",
        "/imgs/projects/3d/pigeon-die.mp4",
      ],
    },
  },
  {
    slug: "piageon",
    title: "Piageon : L'Île aux Pigeons",
    cat: "3d",
    date: "2026",
    img: "/imgs/projects/piageon/preview.webp",
    tags: ["Three.js", "Cellular Automata", "Genetic Algorithms", "Boids", "L-Systems"],
    links: { live: "https://piageon.netlify.app/", report: "https://www.figma.com/deck/DUGsyRDwxaQwB1xq0HdGjF/PIAGEON?node-id=1-42&t=nFXCsQVsOrCzKDZA-1" },
    intro: {
      fr: "Une simulation politique de survie d’oiseaux, entre IA et lois de la nature.",
      en: "A political bird survival simulation blending AI and nature's laws.",
    },
    desc: {
      fr: "Piageon est un écosystème virtuel conçu pour explorer l’interaction entre plusieurs modèles algorithmiques. Dans ce monde low-poly, des pigeons autonomes évoluent, s’organisent et s’affrontent autour d’idéologies politiques. La simulation intègre des automates cellulaires de type Life pour les couches sociales, des Boids pour les déplacements et des algorithmes génétiques pour l’évolution. L’île procédurale est sculptée à partir de fractales de Mandelbrot et de bruit de Perlin, tandis que la végétation pousse grâce aux L-Systems.",
      en: "Piageon is a virtual ecosystem designed to explore the interaction between multiple algorithmic models. In this low-poly world, autonomous pigeons evolve, organize, and clash over political ideologies. The simulation integrates Life-like Cellular Automata for social layers, Boids for movement, and Genetic Algorithms for evolution. The procedural island is sculpted using Mandelbrot fractals and Perlin noise, while vegetation grows via L-Systems.",
    },
    type: {
      fr: "Monde virtuel / simulation",
      en: "Virtual World / Simulation",
    },
    context: {
      fr: "Projet expérimental autour des interactions sociales algorithmiques",
      en: "Experimental project exploring algorithmic social interactions",
    },
    media: {
      images: ["/imgs/projects/piageon/preview.webp", "/imgs/projects/piageon/isle.webp", "/imgs/projects/piageon/top-isle.webp"],
      gifs: ["/imgs/projects/piageon/idle.gif", "/imgs/projects/piageon/die.gif"],
    },
  },
  {
    slug: "les-nananimaux",
    title: "Les Nananimaux",
    cat: "creative",
    date: "2026",
    img: "/imgs/projects/nananimaux/generation.webp",
    tags: ["Three.js", "Vite", "JavaScript"],
    links: { source: "https://github.com/LouisePrd/les-nananimaux", report: "https://canva.link/tyggqsz9scrbp8v" },
    intro: {
      fr: "Un projet d’art génératif 3D inspiré des Nanas de Niki de Saint Phalle.",
      en: "A generative 3D art project inspired by Niki de Saint Phalle's Nanas.",
    },
    desc: {
      fr: "Une famille interactive de créatures hybrides qui mêle les silhouettes colorées des Nanas de Niki de Saint Phalle à des attributs animaux. Chaque génération est unique, avec des poses, motifs, palettes et silhouettes personnalisables, ainsi qu’une galerie et un mode essaim.",
      en: "An interactive family of hybrid creatures combining the colorful silhouettes of Niki de Saint Phalle's Nanas with animal attributes. Each generation is unique, with customizable poses, patterns, palettes and silhouettes, as well as a gallery and swarm mode.",
    },
    type: {
      fr: "Art génératif / 3D interactive",
      en: "Generative Art / Interactive 3D",
    },
    context: {
      fr: "Projet en binôme pour le cours d’art génératif à la Sorbonne",
      en: "Pair project for the generative art course at Sorbonne Paris",
    },
    media: {
      images: ["/imgs/projects/nananimaux/generation.webp", "/imgs/projects/nananimaux/essaim.webp"],
      canvaUrl: "https://www.canva.com/design/DAHZMEUW1Us/SZv7eoQNTVsayo31x-D_3A/view?embed",
    },
  },
  {
    slug: "quantum-art",
    title: "Quantum Art",
    cat: "creative",
    date: "2026",
    img: "/imgs/projects/quantum-art/minia-quantum.webp",
    tags: ["Python", "Matplotlib"],
    links: { report: "https://canva.link/mq70cqahrigg000" },
    intro: {
      fr: "Un projet d’art génératif qui utilise l’informatique quantique.",
      en: "A generative art project using quantum computing.",
    },
    desc: {
      fr: "Ce projet explore la génération procédurale d’art optique, inspirée de Victor Vasarely, en y intégrant des concepts d’informatique quantique. L’objectif : relier la logique mathématique des qubits à la génération de grilles graphiques déformées.",
      en: "This project explores the procedural generation of optical art, inspired by Victor Vasarely, by integrating quantum computing concepts. The goal is to link the mathematical logic of qubits to the generation of deformed graphical grids.",
    },
    type: {
      fr: "Art génératif / algorithmique",
      en: "Generative Art / Algorithmic",
    },
    context: {
      fr: "Initiation à l’informatique quantique appliquée à l’art génératif",
      en: "Introduction to the use of quantum computing in the creation of generative art.",
    },
    media: {
      gifs: ["/imgs/projects/quantum-art/vasarely_entanglement.gif", "/imgs/projects/quantum-art/vasarely_quantum_pulse.gif"],
      canvaUrl: "https://www.canva.com/design/DAG_m1MBaYg/sqxutPoqpSarshD5KnnXfA/view?embed",
    },
  },
  {
    slug: "regard",
    title: "Regard",
    cat: "3d",
    date: "2025",
    img: "/imgs/projects/regard/regard-overview.webp",
    tags: ["Unity", "C#", "Next.js API", "Blender"],
    links: { source: "https://github.com/REG-RD", report: "https://drive.google.com/file/d/1gD_S1r4MI6pO2nQb7feqqenLv3u_mohs/view?usp=sharing" },
    intro: {
      fr: "Une application mobile pour découvrir comment vos proches vous perçoivent.",
      en: "A mobile app to discover how your loved ones perceive you.",
    },
    desc: {
      fr: "Une application mobile qui exprime visuellement, par l’art génératif, le contraste entre la façon dont les autres nous voient et celle dont nous nous voyons. Chaque utilisateur dispose d’un espace visuel dédié : une page présentant une sphère 3D entourée d’un environnement unique. L’apparence de cette sphère (les couleurs qui l’entourent, le nombre de particules, sa luminosité et son paysage sonore) est déterminée par des algorithmes qui prennent en entrée… les perceptions des autres.",
      en: "A mobile app designed to visually express, through generative art, the contrast between how others see us and how we see ourselves. Each user has a dedicated visual space: a page featuring a 3D sphere surrounded by a unique environment. In fact, the appearance of this sphere—the colors surrounding it, the number of particles, its brightness, and its soundscape—will all be determined by algorithms that use as input… the perceptions of others.",
    },
    type: {
      fr: "Application mobile",
      en: "Mobile Application",
    },
    context: {
      fr: "Projet tutoré en groupe, deuxième année du cycle ingénieur (bac +4)",
      en: "Group-based mentoring project for second-year engineering students (bac +4)",
    },
    media: {
      images: ["/imgs/projects/regard/regard-overview.webp"],
      videoUrl: "https://www.youtube.com/embed/2gZwbwUYGC0?si=8u8E8UHDJDnXWmli",
    },
  },
  {
    slug: "girly-chaos",
    title: "Girly Chaos",
    cat: "games",
    date: "2025",
    img: "/imgs/projects/girlyChaos/chess-overview.webp",
    tags: ["C++", "OpenGL", "GLSL"],
    links: { source: "https://github.com/LouisePrd/Girly-Chaos", report: "https://canva.link/lluuu136x1fdnfh" },
    intro: {
      fr: "Quelque part entre synthèse d’image et OpenGL : quand le jeu d’échecs classique rencontre le hasard mathématique.",
      en: "Somewhere between image synthesis and OpenGL: when the classic game of chess meets mathematical randomness.",
    },
    desc: {
      fr: "Le projet combinait trois cours du semestre : C++, OpenGL et mathématiques. L’objectif ? Réimplémenter un jeu d’échecs en 3D en y appliquant la théorie des probabilités. Nous avons par exemple créé le « Fou fou » (loi de Poisson), dont les trajectoires subissent des déviations aléatoires générées par un processus de Poisson à fréquence contrôlée.",
      en: "The project was a combination of three courses from the semester: C++, OpenGL, and mathematics. The goal? To reimplement a 3D chess game while applying mathematical probability theory. For example, we created “Crazy Bishop” (Poisson Distribution), in which the bishop's movement paths are subject to random deviations generated by a Poisson process with a controlled frequency.",
    },
    type: {
      fr: "Logiciel / jeu",
      en: "Software / Game",
    },
    context: {
      fr: "Projet en binôme à l’IMAC, entre C++, OpenGL et mathématiques",
      en: "Two students project at IMAC, combining C++, OpenGL, and mathematics",
    },
    media: {
      images: ["/imgs/projects/girlyChaos/render1.webp", "/imgs/projects/girlyChaos/render2.webp", "/imgs/projects/girlyChaos/render3.webp", "/imgs/projects/girlyChaos/render4.webp"],
    },
  },
  {
    slug: "ply-converter",
    title: "Ply Converter",
    cat: "web",
    date: "2025",
    img: "/imgs/projects/plyConverter/ply-converter.webp",
    tags: ["Three JS", "React", "TypeScript"],
    links: { live: "https://ply-converter.netlify.app/", source: "https://github.com/LouisePrd/Ply-Converter-ASCII" },
    intro: {
      fr: "Un outil pour convertir des fichiers PLY vers d’autres formats.",
      en: "A tool for converting PLY files to other formats.",
    },
    desc: {
      fr: "Application web pour importer des nuages de points au format .PLY, leur appliquer des transformations (rotation, visualisation interactive) et exporter les données en ASCII (.txt), plus faciles à post-traiter dans les outils d’analyse et les pipelines lidar.",
      en: "Web application for importing point clouds in .PLY format, applying transformations (rotation, interactive visualization) and exporting data in ASCII (.txt). Easier to post-process in analysis tools and lidar pipeline.",
    },
    type: {
      fr: "Application web",
      en: "Web Application",
    },
    context: {
      fr: "Projet personnel pour simplifier le pipeline de mon stage",
      en: "Personal Project to simplify my internship pipeline",
    },
    media: {
      images: ["/imgs/projects/plyConverter/ply-converter.webp"],
    },
  },
  {
    slug: "average-player",
    title: "Average Player",
    cat: "web",
    date: "2025",
    img: "/imgs/projects/averagePlayer/Champions.webp",
    tags: ["React.js", "Supabase", "Riot Games API"],
    links: { source: "https://github.com/LouisePrd/Average-Player" },
    intro: {
      fr: "Site créé avec React à partir de l’API de League of Legends.",
      en: "Website created with React using the League of Legends API.",
    },
    desc: {
      fr: "Mettez à profit vos connaissances de League of Legends pour découvrir les personnages et leurs compétences à travers des quiz. Grimpez dans le classement et prouvez à tous votre maîtrise du lore. Inclut un mode bonus « Smash or Pass » avec des statistiques communautaires.",
      en: "Use your League of Legends knowledge to learn about characters and skills through quizzes. Climb the rankings and show everyone your lore expertise. Includes a 'Smash or Pass' bonus mode with community statistics.",
    },
    type: {
      fr: "Site web",
      en: "Website",
    },
    context: {
      fr: "Projet étudiant en solo à l’IMAC",
      en: "Solo student project at IMAC",
    },
    media: {
      images: ["/imgs/projects/averagePlayer/Champions.webp", "/imgs/projects/averagePlayer/Guesser.png", "/imgs/projects/averagePlayer/Scoreboard.png", "/imgs/projects/averagePlayer/SmashOrPass.webp"],
    },
  },
  {
    slug: "rer-a-gate",
    title: "RER A Gate",
    cat: "games",
    date: "2024",
    img: "/imgs/projects/rerAGate/rer-a-gate.webp",
    tags: ["C++", "CMake"],
    links: { source: "https://github.com/LouisePrd/RER-A-Gate", report: "https://github.com/user-attachments/files/15896450/RAPPORT-LANNAUD_PERIDY.pdf" },
    intro: {
      fr: "Construisez vos propres gares RER et défendez-les contre de méchants contrôleurs !",
      en: "Build your own RER stations and defend them against mean ticket inspectors!",
    },
    desc: {
      fr: "Pour célébrer le RER A, nous lui avons dédié un Tower Defense. Construisez vos propres gares et défendez-les contre d’affreux contrôleurs et des mamies sournoises. Le joueur doit gérer son budget pour placer des tours aux attributs spécifiques et survivre à des vagues d’ennemis de plus en plus difficiles.",
      en: "To celebrate the RER A, we created a Tower Defense game in its honor. Build your own stations and defend them against nasty ticket inspectors and sneaky grandmas. The player must use their budget to place towers with specific attributes to survive waves of increasingly difficult enemies.",
    },
    type: {
      fr: "Jeu vidéo (tower defense)",
      en: "Video Game (Tower Defense)",
    },
    context: {
      fr: "Projet étudiant à l’IMAC",
      en: "Student project at IMAC",
    },
    media: {
      images: ["/imgs/projects/rerAGate/rer-a-gate.webp", "/imgs/projects/rerAGate/rer-a-play.webp"],
    },
  },
  {
    slug: "pigeon-gate",
    title: "Pigeon Gate",
    cat: "web",
    date: "2024",
    img: "/imgs/projects/pigeonGate/pigeon-gate.png",
    tags: ["Flask (Python)", "HTML", "CSS", "JS"],
    links: { source: "https://github.com/AM-XIX/Pigeon-Gate" },
    intro: {
      fr: "Découvrez un réseau social unique pour répertorier les pigeons et échanger avec des passionnés !",
      en: "Discover a unique social network to catalog pigeons and connect with passionate fanciers!",
    },
    desc: {
      fr: "Pigeon Gate est un véritable réseau social dédié aux pigeons. Les utilisateurs peuvent s’inscrire, se connecter, consulter les publications des autres, commenter et liker leurs oiseaux. Le site propose des profils, un système de notation et un catalogue des pigeons aperçus chaque jour.",
      en: "Pigeon Gate is a true social network dedicated to pigeons. Users can sign up, log in, view what other users have posted, comment on and like their birds. It features user profiles, a rating system, and a catalog of daily pigeon sightings.",
    },
    type: {
      fr: "Réseau social (site web)",
      en: "Social network (website)",
    },
    context: {
      fr: "Projet étudiant à l’IMAC",
      en: "Student project at IMAC",
    },
    media: {
      images: ["/imgs/projects/pigeonGate/homePigeon.png", "/imgs/projects/pigeonGate/registerPigeon.png", "/imgs/projects/pigeonGate/cardPigeon.png", "/imgs/projects/pigeonGate/aProposPigeon.png"],
    },
  },
  {
    slug: "elixir",
    title: "Elixir",
    cat: "web",
    date: "2023",
    img: "/imgs/projects/elixir/Elixir.png",
    tags: ["HTML", "CSS", "JS", "TheCocktailDB API"],
    links: { live: "https://louiseprd.github.io/Elixir-Project/src/index.html", source: "https://github.com/LouisePrd/Elixir-Project" },
    intro: {
      fr: "Un site dédié à la découverte et à la création de cocktails, basé sur une API publique.",
      en: "A website dedicated to discovering and crafting cocktails using a public API.",
    },
    desc: {
      fr: "Plongez dans l’univers des cocktails avec Elixir. Trouvez des recettes pour toutes les envies, ou réveillez le mixologue qui sommeille en vous en devinant les ingrédients dans le mode jeu interactif.",
      en: "Dive into the world of cocktails with Elixir. Find recipes to satisfy every craving or awaken your inner mixologist by trying to guess ingredients in the interactive game mode.",
    },
    type: {
      fr: "Site web",
      en: "Website",
    },
    context: {
      fr: "Projet étudiant à l’IMAC",
      en: "Student project at IMAC",
    },
    media: {
      images: ["/imgs/projects/elixir/ElixirHome.png", "/imgs/projects/elixir/ElixirDiscover.png", "/imgs/projects/elixir/ElixirPlay1.png", "/imgs/projects/elixir/ElixirPlay2.png"],
    },
  },
  {
    slug: "making-of-sauvage",
    title: "Le Making-Of Sauvage",
    cat: "creative",
    date: "2023",
    img: "/imgs/projects/makingOfSauvage/making-of-sauvage.webp",
    tags: ["After Effects", "Premiere Pro", "Photoshop"],
    links: {},
    intro: {
      fr: "Court-métrage sur les coulisses de l’audiovisuel.",
      en: "Short film about audiovisual backstages.",
    },
    desc: {
      fr: "Dans le cadre de notre cours d’audiovisuel, au premier semestre de première année à l’IMAC, nous avons réalisé un court-métrage en groupe. Rien n’était scénarisé : il fallait s’adapter à chaque situation. Nous nous sommes immergés dans des tournages et des répétitions pour récolter un maximum de matière.",
      en: "As part of our audiovisual course during the first semester of our first year at IMAC, we produced a group short film. Nothing was scripted; we had to adapt to every situation. We embedded ourselves in filming sessions and rehearsals to gather as much content as possible.",
    },
    type: {
      fr: "Film",
      en: "Film",
    },
    context: {
      fr: "Premier semestre à l’IMAC, dans le cadre du cours d’audiovisuel",
      en: "First semester of IMAC, as part of our audiovisual course",
    },
    media: {
      iframeUrl: "https://www.youtube.com/embed/MTOJBfGEMDM",
    },
  },
  {
    slug: "mari-e",
    title: "MARI-E",
    cat: "3d",
    date: "2023",
    img: "/imgs/projects/mari-e/brochure-marie.png",
    tags: ["WebXR", "ThreeJS", "DALL-E", "JavaScript"],
    links: { source: "https://github.com/LouisePrd/Workshop-Orangerie" },
    intro: {
      fr: "Explorez l’univers de Marie Laurencin à travers une expérience AR à 360°.",
      en: "Explore the world of Marie Laurencin through a 360° AR experience.",
    },
    desc: {
      fr: "Découvrez la vie de Marie Laurencin à travers « Les Biches », un hommage à son parcours d’artiste pionnière. Grâce à la WebXR, il suffit de scanner le tableau avec son téléphone pour déclencher une expérience en réalité augmentée à 360°, qui mêle le style graphique de l’artiste à des visuels générés par IA.",
      en: "Discover the life of Marie Laurencin through 'Les Biches,' a tribute to her journey as a pioneering female artist. Using WebXR, this project allows users to scan the painting with their phone to trigger a 360° augmented reality experience, blending the artist's graphic style with AI-generated visuals.",
    },
    type: {
      fr: "Expérience WebXR",
      en: "WebXR Experience",
    },
    context: {
      fr: "Projet de groupe aux Gobelins",
      en: "Group project at Gobelins",
    },
    media: {
      verticalImages: ["/imgs/projects/mari-e/marie-home1.png", "/imgs/projects/mari-e/marie-home2.png", "/imgs/projects/mari-e/marie-home3.png"],
      panorama: "/imgs/projects/mari-e/marie-ia.png",
      videoUrl: "https://www.youtube.com/embed/eGc6O4zKbog",
    },
  },
  {
    slug: "inus-tale",
    title: "Inu's Tale",
    cat: "games",
    date: "2023",
    img: "/imgs/projects/inusTale/inus-tale.png",
    tags: ["Godot", "GDScript"],
    links: { live: "https://am-xix.github.io/InusTale-SiteVitrine/", source: "https://github.com/LouisePrd/Inu-s-Tale", report: "https://github.com/LouisePrd/Inu-s-Tale/files/11709389/Dossier_de_conception-Groupe-1-Inus-Talepdf.pdf" },
    intro: {
      fr: "Jeu interactif développé sous Godot pour un projet aux Gobelins.",
      en: "Interactive game developed with Godot for a Gobelins project.",
    },
    desc: {
      fr: "Dans un petit village en périphérie de Kyoto, on célèbre un matsuri. À la suite d’un rituel, un inugami et un humain se retrouvent liés l’un à l’autre, mais une catastrophe survient et de nombreux yōkai envahissent le monde des humains. Ils doivent coopérer pour ramener le yōkai protagoniste dans son monde avant la fin du temps imparti, tout en survivant à la menace d’entités malveillantes.",
      en: "In a small village on the outskirts of Kyoto, a matsuri is being celebrated. Following a ritual, an inugami and a human find themselves bound to one another, but a disaster occurs, causing many yōkai to enter the human world. They must cooperate to bring the yōkai protagonist back to his world before time runs out, forcing them to survive under the threat of malevolent entities.",
    },
    type: {
      fr: "Jeu interactif",
      en: "Interactive game",
    },
    context: {
      fr: "Projet étudiant aux Gobelins, en groupe de 3 développeurs",
      en: "Student project at Gobelins, group of 3 developers",
    },
    media: {
      images: ["/imgs/projects/inusTale/inus-tale.png", "/imgs/projects/inusTale/characters.png", "/imgs/projects/inusTale/map.png", "/imgs/projects/inusTale/cave.png"],
    },
  },
  {
    slug: "au-fil-du-temps",
    title: "Au Fil du Temps",
    cat: "creative",
    date: "2022",
    img: "/imgs/projects/auFilDuTemps/AuFilDuTemps1.png",
    tags: ["HTML", "CSS", "JavaScript", "Paper JS"],
    links: { live: "https://peaceful-tapioca-3fb914.netlify.app/", source: "https://github.com/LouisePrd/Workshop-Dataviz" },
    intro: {
      fr: "Introspection graphique sur les émotions de la promo BDDI 2023 des Gobelins.",
      en: "Graphic introspection on the emotions of Gobelins' BDDI 2023 class.",
    },
    desc: {
      fr: "L’objectif de ce projet était de créer en groupe un site de data visualisation. Résultat : une introspection graphique sur les émotions de la promo BDDI 2023. Nous voulions explorer le paradoxe entre le quantifiable (les statistiques) et ce qui semble impossible à quantifier : les émotions.",
      en: "The goal of this project was to work as a group to create a data visualization website. Our final product was a graphic introspection on the emotions of the BDDI 2023 class. We wanted to explore the paradox between the quantifiable—statistics—and the seemingly unquantifiable—emotions.",
    },
    type: {
      fr: "Site web",
      en: "Website",
    },
    context: {
      fr: "Projet de groupe aux Gobelins",
      en: "Group project at Gobelins",
    },
    media: {
      images: ["/imgs/projects/auFilDuTemps/AuFilDuTemps1.png", "/imgs/projects/auFilDuTemps/AuFilDuTemps2.png", "/imgs/projects/auFilDuTemps/AuFilDuTemps4.webp", "/imgs/projects/auFilDuTemps/AuFilDuTemps3.webp"],
    },
  },
];

const years = (date: string) => (date.match(/\d{4}/g) ?? ["0"]).map(Number);

/** Newest first: by end year, then start year (ties keep the order above). */
export const PROJECTS: Project[] = [...DATA].sort((a, b) => {
  const ya = years(a.date);
  const yb = years(b.date);
  return Math.max(...yb) - Math.max(...ya) || Math.min(...yb) - Math.min(...ya);
});

/** Home "Latest work": the first is the large card. */
export const FEATURED: Project[] = ["architech", "piageon", "regard", "mari-e"].map(
  (slug) => PROJECTS.find((p) => p.slug === slug)!,
);

export const findProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const projectHref = (p: Project, lang: Lang) => `${lang === "en" ? "/en" : ""}/projects/${p.slug}`;
