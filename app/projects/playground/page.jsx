"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

import ProjectCard from "../../components/CardProject/CardProject";
import Link from "next/link";
import styles from "./PlaygroundProjects.module.css";

const projects = [
  {
    href: "/projects/playground/ply-converter",
    src: "/imgs/projects/plyConverter/ply-converter.webp",
    alt: "Ply Converter",
    technos: "Three JS, React, TypeScript",
    styleClass: "plyConverter",
  },
  {
    href: "/projects/playground/making-of-sauvage",
    src: "/imgs/projects/makingOfSauvage/making-of-sauvage.webp",
    alt: "Making-Of Sauvage",
    technos: "After Effects, Premiere Pro, Photoshop",
    styleClass: "makingOfSauvage",
  }
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
        Playground
      </h1>

      <p className={styles["sub-sub-title"]}>
        Still in WIP, this section is a playground for my personal projects but I will add more content soon. <br></br> In the meantime, feel free to check out my <Link href="/projects/it">IT projects</Link> or my <Link href="/projects/3d">3D projects</Link>.
      </p>

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
