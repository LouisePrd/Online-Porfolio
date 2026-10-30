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
  iFrame?: string;
  canvaEmbedUrl?: string;
  panoramaImg?: string;
  gifUrl?: string[];
}

export const projectsData: Record<string, Project> = {
  "les-nananimaux": {
    title: "Les Nananimaux",
    intro: "A generative 3D art project inspired by Niki de Saint Phalle's Nanas.",
    type: "Generative Art / Interactive 3D",
    date: "2026",
    context: "Pair project for the generative art course at Sorbonne Paris",
    technos: "Three.js, Vite, JavaScript",
    description: "An interactive family of hybrid creatures combining the colorful silhouettes of Niki de Saint Phalle's Nanas with animal attributes. Each generation is unique, with customizable poses, patterns, palettes and silhouettes, as well as a gallery and swarm mode.",
    styleClass: "nananimaux",
    githubUrl: "https://github.com/LouisePrd/les-nananimaux",
    reportUrl: "https://canva.link/tyggqsz9scrbp8v",
    canvaEmbedUrl: "https://www.canva.com/design/DAHZMEUW1Us/SZv7eoQNTVsayo31x-D_3A/view?embed",
    images: [
      "/imgs/projects/nananimaux/generation.png",
      "/imgs/projects/nananimaux/essaim.png",
    ],
  },
  "ply-converter": {
    title: "Ply Converter",
    intro: "A tool for converting PLY files to other formats.",
    type: "Web Application",
    date: "2025",
    context: "Personal Project to simplify my internship pipeline",
    technos: "Three JS, React, TypeScript",
    description: "Web application for importing point clouds in .PLY format, applying transformations (rotation, interactive visualization) and exporting data in ASCII (.txt). Easier to post-process in analysis tools and lidar pipeline.",
    styleClass: "ply-converter",
    githubUrl: "https://github.com/LouisePrd/Ply-Converter-ASCII",
    websiteUrl : "https://ply-converter.netlify.app/",
    images: [
      "/imgs/projects/plyConverter/ply-converter.webp",
    ]
  },
    "making-of-sauvage": {
    title: "Le Making-Of Sauvage",
    intro: "Short film about audiovisual backstages.",
    type: "Film",
    date: "2023",
    context: "First semester of IMAC, as part of our audiovisual course",
    technos: "After Effects, Premiere Pro, Photoshop",
    description: "As part of our audiovisual course during the first semester of our first year at IMAC, we produced a group short film. Nothing was scripted; we had to adapt to every situation. We embedded ourselves in filming sessions and rehearsals to gather as much content as possible.",
    styleClass: "makingOfSauvage",
    iFrame : "https://www.youtube.com/embed/MTOJBfGEMDM",
  },
  "quantum-art": {
    title: "Quantum Art",
    intro: "A generative art project using quantum computing.",
    type: "Generative Art / Algorithmic",
    date: "2026",
    context: "Introduction to the use of quantum computing in the creation of generative art.",
    technos: "Python, Matplotlib",
    description: "This project explores the procedural generation of optical art, inspired by Victor Vasarely, by integrating quantum computing concepts. The goal is to link the mathematical logic of qubits to the generation of deformed graphical grids.",
    styleClass: "quantum-art",
    gifUrl: [
      "/imgs/projects/quantum-art/vasarely_entanglement.gif",
      "/imgs/projects/quantum-art/vasarely_quantum_pulse.gif"
    ],
    reportUrl: "https://canva.link/mq70cqahrigg000",
    canvaEmbedUrl: "https://www.canva.com/design/DAG_m1MBaYg/sqxutPoqpSarshD5KnnXfA/view?embed",
  }
};