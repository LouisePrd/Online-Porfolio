"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import ProjectCard from "../../components/CardProject/CardProject";
import styles from "./ITProjects.module.css";

const projects = [
  {
    href: "/projects/it/architech",
    src: "/imgs/projects/architech/overview.png",
    alt: "ArchiTech",
    technos: "Next.js, Firebase, Cloudinary",
    styleClass: "ArchiTech",
    category: "web",
  },
  {
    href: "/projects/it/piageon",
    src: "/imgs/projects/piageon/preview.webp",
    alt: "Piageon",
    technos: "React.js, Three.js, Blender",
    styleClass: "piageon",
    category: "web",
  },
  {
    href: "/projects/it/preWatch",
    src: "/imgs/projects/preWatch/preWatch-demo.webp",
    alt: "preWatch",
    technos: "WebGL, Next.js, MongoDB",
    styleClass: "preWatch",
    category: "web",
  },
  {
    href: "/projects/it/regard",
    src: "/imgs/projects/regard/regard-overview.webp",
    alt: "Regard",
    technos: "Unity, C#, Next.js API, Blender",
    styleClass: "regard",
    category: "software",
  },
  {
    href: "/projects/it/auFilDuTemps",
    src: "/imgs/projects/auFilDuTemps/AuFilDuTemps1.png",
    alt: "Au Fil Du Temps",
    technos: "GSAP, noise.js, paper.js",
    styleClass: "auFilDuTemps",
    category: "web",
  },
  {
    href: "/projects/it/marieGobelins",
    src: "/imgs/projects/mari-e/brochure-marie.png",
    alt: "Brochure Marie",
    technos: "WebXR, ThreeJS, DALL-E",
    styleClass: "marieGobelins",
    category: "web",
  },
  {
    href: "/projects/it/rerAGate",
    src: "/imgs/projects/rerAGate/rer-a-gate.webp",
    alt: "RER A Gate",
    technos: "C++, CMake, OpenGL",
    styleClass: "rerAGate",
    category: "software",
  },
  {
    href: "/projects/it/pigeonGate",
    src: "/imgs/projects/pigeonGate/pigeon-gate.png",
    technos: "Flask, Python",
    alt: "Pigeon Gate",
    styleClass: "pigeonGate",
    category: "web",
  },
  {
    href: "/projects/it/elixir",
    src: "/imgs/projects/elixir/Elixir.png",
    alt: "Elixir",
    technos: "HTML/CSS, JavaScript & CocktailDB API",
    styleClass: "elixir",
    category: "web",
  },
  {
    href: "/projects/it/inusTale",
    src: "/imgs/projects/inusTale/inus-tale.png",
    alt: "Inus Tale",
    technos: "Godot, GD Script",
    styleClass: "inusTale",
    category: "software",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function ITProjects() {
  const scrollRef = useRef(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = projects.filter(
    (p) => activeTab === "all" || p.category === activeTab
  );

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main ref={scrollRef} className={styles["main-content"]}>
      <h1 className="sub-title" id="top">
        IT Projects
      </h1>

      {/* Barre d'onglets */}
      <div className={styles.filterContainer}>
        <button
          className={`${styles.filterBtn} ${activeTab === "all" ? styles.active : ""}`}
          onClick={() => setActiveTab("all")}
        >
          All
        </button>
        <button
          className={`${styles.filterBtn} ${activeTab === "web" ? styles.active : ""}`}
          onClick={() => setActiveTab("web")}
        >
          Web Dev
        </button>
        <button
          className={`${styles.filterBtn} ${activeTab === "software" ? styles.active : ""}`}
          onClick={() => setActiveTab("software")}
        >
          Software & Games
        </button>
      </div>

      <motion.section 
        className={styles["projects-grid"]}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeTab} // Force la réanimation au changement d'onglet
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.href} 
              variants={itemVariants}
              layout // Transition fluide du repositionnement des cartes restantes
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.section>

      <a className="ancre" onClick={scrollToTop}>
        ↑ Back to top
      </a>
    </main>
  );
}