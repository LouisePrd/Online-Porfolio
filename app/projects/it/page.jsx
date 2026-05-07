"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

import ProjectCard from "../../components/CardProject/CardProject";
import Link from "next/link";
import styles from "./ITProjects.module.css";

const projects = [
  {
    href: "/projects/it/architech",
    src: "/imgs/projects/architech/overview.png",
    alt: "ArchiTech",
    technos: "Next.js, Firebase, Cloudinary",
    styleClass: "ArchiTech",
  },
  {
    href: "/projects/it/piageon",
    src: "/imgs/projects/piageon/preview.webp",
    alt: "Piageon",
    technos: "React.js, Three.js, Blender",
    styleClass: "piageon",
  },
  {
    href: "/projects/it/preWatch",
    src: "/imgs/projects/preWatch/preWatch-demo.webp",
    alt: "preWatch",
    technos: "WebGL, Next.js, MongoDB",
    styleClass: "preWatch",
  },
  {
    href: "/projects/it/auFilDuTemps",
    src: "/imgs/projects/auFilDuTemps/AuFilDuTemps1.png",
    alt: "Au Fil Du Temps",
    technos: "GSAP, noise.js, paper.js",
    styleClass: "auFilDuTemps",
  },
  {
    href: "/projects/it/marieGobelins",
    src: "/imgs/projects/mari-e/brochure-marie.png",
    alt: "Brochure Marie",
    technos: "WebXR, ThreeJS, DALL-E",
    styleClass: "marieGobelins",
  },
  {
    href: "/projects/it/rerAGate",
    src: "/imgs/projects/rerAGate/rer-a-gate.png",
    alt: "RER A Gate",
    technos: "C++, CMake, OpenGL",
    styleClass: "rerAGate",
  },
  {
    href: "/projects/it/pigeonGate",
    src: "/imgs/projects/pigeonGate/pigeon-gate.png",
    technos: "Flask, Python",
    alt: "Pigeon Gate",
    styleClass: "pigeonGate",
  },
  {
    href: "/projects/it/elixir",
    src: "/imgs/projects/elixir/Elixir.png",
    alt: "Elixir",
    technos: "HTML/CSS, JavaScript & CocktailDB API",
    styleClass: "elixir",
  },
  {
    href: "/projects/it/inusTale",
    src: "/imgs/projects/inusTale/inus-tale.png",
    alt: "Inus Tale",
    technos: "Godot, GD Script",
    styleClass: "inusTale",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

export default function ITProjects() {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <main 
    ref={scrollRef}
    className={styles["main-content"]}>
      <h1 className="sub-title" id="top">
        IT Projects
      </h1>

      <motion.section 
        className={styles["projects-grid"]}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.section>

      <a
        className="ancre"
        onClick={scrollToTop}
      >
        ↑ Back to top
      </a>
    </main>
  );
}
