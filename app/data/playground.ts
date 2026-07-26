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
  panoramaImg?: string;
  gifUrl?: string[];
}

export const projectsData: Record<string, Project> = {
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
};