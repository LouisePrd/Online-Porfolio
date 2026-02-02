export interface Project {
  title: string;
  intro: string;
  type: string;
  date: string;
  context: string;
  technos: string;
  description: string;
  styleClass: string;
  websiteUrl?: string;
  githubUrl?: string;
  companyUrl?: string; 
  reportUrl?: string;
  images?: string[];
  verticalImages?: string[];
  videoUrl?: string;
  panoramaImg?: string;
  gifUrl?: string[];
}

export const projectsData: Record<string, Project> = {
  "architech": {
    title: "Architech",
    intro: "A SaaS solution dedicated to architects for streamlining General Technical Diagnostic (DTG) reports.",
    type: "Web Application / SaaS",
    date: "2025",
    context: "Pre-professional Group Project at IMAC",
    technos: "Next.js, Firebase, Cloudinary, PDFMake",
    description: "Architects spend hours creating DTGs without dedicated tools. Architech solves this by providing a complete web ecosystem to manage teams, onsite data collection, and complex forms. Built with Next.js and Firebase, the application focuses on optimizing the UX of heavy data entry. It features a hybrid NoSQL architecture, Cloudinary for photo management , and instant client-side PDF generation, drastically reducing report production time.",
    styleClass: "architech",
    githubUrl: "https://github.com/imac-web/architech-webapp",
    reportUrl: "https://www.canva.com/design/DAG_QtTxkLg/d1r3yhwzDoAA43YF55tTIw/edit?utm_content=DAG_QtTxkLg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    websiteUrl : "architech-webapp.netlify.app/",
    verticalImages: [
      "/imgs/projects/architech/FirstScreen.webp",
      "/imgs/projects/architech/HomeScreen.webp",
      "/imgs/projects/architech/ProjectScreen.webp",
      "/imgs/projects/architech/ElementScreen.webp",
    ]
  },
  "piageon": {
    title: "Piageon : L'Île aux Pigeons",
    intro: "A political bird survival simulation blending AI and nature's laws.",
    type: "Virtual World / Simulation",
    date: "2026",
    context: "Experimental project exploring algorithmic social interactions",
    technos: "Three.js, Cellular Automata, Genetic Algorithms, Boids, L-Systems",
    websiteUrl: "https://piageon.netlify.app/",
    description: "Piageon is a virtual ecosystem designed to explore the interaction between multiple algorithmic models. In this low-poly world, autonomous pigeons evolve, organize, and clash over political ideologies. The simulation integrates Life-like Cellular Automata for social layers, Boids for movement, and Genetic Algorithms for evolution. The procedural island is sculpted using Mandelbrot fractals and Perlin noise, while vegetation grows via L-Systems.",
    styleClass: "piageon",
    images: [
      "/imgs/projects/piageon/loading.webp",
      "/imgs/projects/piageon/isle.webp",
      "/imgs/projects/piageon/top-isle.webp",
    ],
    gifUrl: ["/imgs/projects/piageon/idle.gif",
      "/imgs/projects/piageon/die.gif",
    ],
    reportUrl: "https://www.figma.com/deck/DUGsyRDwxaQwB1xq0HdGjF/PIAGEON?node-id=1-42&t=nFXCsQVsOrCzKDZA-1"
  },
  "auFilDuTemps": {
    title: "Au Fil du Temps",
    intro: "Graphic introspection on the emotions of Gobelins' BDDI 2023 class.",
    type: "Website",
    date: "2022",
    context: "Group project at Gobelins",
    technos: "HTML, CSS, JavaScript, Paper JS",
    description: "The goal of this project was to work as a group to create a data visualization website. Our final product was a graphic introspection on the emotions of the BDDI 2023 class. We wanted to explore the paradox between the quantifiable—statistics—and the seemingly unquantifiable—emotions.",
    styleClass: "auFilDuTemps",
    websiteUrl: "https://peaceful-tapioca-3fb914.netlify.app/",
    githubUrl: "https://github.com/LouisePrd/Workshop-Dataviz",
    images: [
      "/imgs/projects/auFilDuTemps/AuFilDuTemps1.png",
      "/imgs/projects/auFilDuTemps/AuFilDuTemps2.png",
      "/imgs/projects/auFilDuTemps/AuFilDuTemps4.png",
      "/imgs/projects/auFilDuTemps/AuFilDuTemps3.png"
    ]
  },
  "preWatch": {
    title: "preWatch",
    intro: "Interactive 3D visualization based on Gaussian Splatting.",
    type: "Web Service",
    date: "2023 - 2024",
    context: "Internship & Freelance at Prewatch Lab",
    technos: "WebGL, Next.js, PlayCanvas, GitHub Actions",
    companyUrl: "https://www.linkedin.com/company/prewatch-lab",
    description: "Developed during an internship followed by a freelance collaboration, this interactive 3D visualization web service is built using Gaussian Splatting data. The development focused on creating a user interface that allows for dynamic interaction with 3D scenes directly in the browser, featuring tools for measurements, model additions, and scene customization.",
    styleClass: "preWatch",
    images: ["/imgs/projects/preWatch/preWatch-demo.webp"]
  },
  "marieGobelins": {
    title: "MARI-E",
    intro: "Explore the world of Marie Laurencin through a 360° AR experience.",
    type: "WebXR Experience",
    date: "2023",
    context: "Group project at Gobelins",
    technos: "WebXR, ThreeJS, DALL-E, JavaScript",
    githubUrl: "https://github.com/LouisePrd/Workshop-Orangerie",
    description: "Discover the life of Marie Laurencin through 'Les Biches,' a tribute to her journey as a pioneering female artist. Using WebXR, this project allows users to scan the painting with their phone to trigger a 360° augmented reality experience, blending the artist's graphic style with AI-generated visuals.",
    styleClass: "marieGobelins",
    verticalImages: [
      "/imgs/projects/mari-e/marie-home1.png",
      "/imgs/projects/mari-e/marie-home2.png",
      "/imgs/projects/mari-e/marie-home3.png"
    ],
    videoUrl: "https://www.youtube.com/embed/eGc6O4zKbog",
    panoramaImg: "/imgs/projects/mari-e/marie-ia.png"
  },
  "pigeonGate": {
    title: "Pigeon Gate",
    intro: "Discover a unique social network to catalog pigeons and connect with passionate fanciers!",
    type: "Social network (website)",
    date: "2024",
    context: "Student project at IMAC",
    technos: "Flask (Python), HTML, CSS, JS",
    githubUrl: "https://github.com/AM-XIX/Pigeon-Gate",
    description: "Pigeon Gate is a true social network dedicated to pigeons. Users can sign up, log in, view what other users have posted, comment on and like their birds. It features user profiles, a rating system, and a catalog of daily pigeon sightings.",
    styleClass: "pigeonGate",
    images: [
      "/imgs/projects/pigeonGate/homePigeon.png",
      "/imgs/projects/pigeonGate/registerPigeon.png",
      "/imgs/projects/pigeonGate/cardPigeon.png",
      "/imgs/projects/pigeonGate/aProposPigeon.png"
    ]
  },
  "rerAGate": {
    title: "RER A Gate",
    intro: "Build your own RER stations and defend them against mean ticket inspectors!",
    type: "Video Game (Tower Defense)",
    date: "2024",
    context: "Student project at IMAC",
    technos: "C++, CMake",
    githubUrl: "https://github.com/LouisePrd/RER-A-Gate",
    reportUrl: "https://github.com/user-attachments/files/15896450/RAPPORT-LANNAUD_PERIDY.pdf",
    description: "To celebrate the RER A, we created a Tower Defense game in its honor. Build your own stations and defend them against nasty ticket inspectors and sneaky grandmas. The player must use their budget to place towers with specific attributes to survive waves of increasingly difficult enemies.",
    styleClass: "rerAGate",
    images: [
      "/imgs/projects/rerAGate/rer-a-gate.png",
      "/imgs/projects/rerAGate/rer-a-play.png"
    ]
  },
  "averagePlayer": {
    title: "Average Player",
    intro: "Website created with React using the League of Legends API.",
    type: "Website",
    date: "2025",
    context: "Solo student project at IMAC",
    technos: "React.js, Supabase, Riot Games API",
    githubUrl: "https://github.com/LouisePrd/Average-Player",
    description: "Use your League of Legends knowledge to learn about characters and skills through quizzes. Climb the rankings and show everyone your lore expertise. Includes a 'Smash or Pass' bonus mode with community statistics.",
    styleClass: "averagePlayer",
    images: [
      "/imgs/projects/averagePlayer/Champions.png",
      "/imgs/projects/averagePlayer/Guesser.png",
      "/imgs/projects/averagePlayer/Scoreboard.png",
      "/imgs/projects/averagePlayer/SmashOrPass.png"
    ]
  },
  "elixir": {
    title: "Elixir",
    intro: "A website dedicated to discovering and crafting cocktails using a public API.",
    type: "Website",
    date: "2023",
    context: "Student project at IMAC",
    technos: "HTML, CSS, JS, TheCocktailDB API",
    websiteUrl: "https://louiseprd.github.io/Elixir-Project/src/index.html",
    githubUrl: "https://github.com/LouisePrd/Elixir-Project",
    description: "Dive into the world of cocktails with Elixir. Find recipes to satisfy every craving or awaken your inner mixologist by trying to guess ingredients in the interactive game mode.",
    styleClass: "elixir",
    images: [
      "/imgs/projects/elixir/ElixirHome.png",
      "/imgs/projects/elixir/ElixirDiscover.png",
      "/imgs/projects/elixir/ElixirPlay1.png",
      "/imgs/projects/elixir/ElixirPlay2.png"
    ]
  },
  "inusTale": {
    title: "Inu's Tale",
    intro: "Interactive game developed with Godot for a Gobelins project.",
    type: "Interactive game",
    date: "2023",
    context: "Student project at Gobelins, group of 3 developers",
    technos: "Godot, GDScript",
    githubUrl: "https://github.com/LouisePrd/Inu-s-Tale",
    websiteUrl: "https://am-xix.github.io/InusTale-SiteVitrine/",
    reportUrl: "https://github.com/LouisePrd/Inu-s-Tale/files/11709389/Dossier_de_conception-Groupe-1-Inus-Talepdf.pdf",
    description: "In a small village on the outskirts of Kyoto, a matsuri is being celebrated. Following a ritual, an inugami and a human find themselves bound to one another, but a disaster occurs, causing many yōkai to enter the human world. They must cooperate to bring the yōkai protagonist back to his world before time runs out, forcing them to survive under the threat of malevolent entities.",
    styleClass: "inusTale",
    images: [
      "/imgs/projects/inusTale/inus-tale.png",
      "/imgs/projects/inusTale/characters.png",
      "/imgs/projects/inusTale/map.png",
      "/imgs/projects/inusTale/cave.png"
    ]
  }
};