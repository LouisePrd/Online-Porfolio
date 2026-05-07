"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Projects3D.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function Projects3D() {
  const scrollRef = useRef<HTMLElement>(null);

  const medias: Array<
    { type: "img"; src: string; alt: string } | { type: "video"; src: string }
  > = [
    { type: "img", src: "/imgs/projects/3d/trophees.png", alt: "trophees" },
    { type: "img", src: "/imgs/projects/3d/Trophee-film.png", alt: "trophée" },
    { type: "img", src: "/imgs/projects/3d/switch.png", alt: "switch" },
    { type: "img", src: "/imgs/projects/3d/cat-wip.png", alt: "cat" },
    { type: "video", src: "/imgs/projects/3d/animation.mp4" },
    { type: "video", src: "/imgs/projects/3d/kirby.mp4" },
    { type: "video", src: "/imgs/projects/3d/pigeon.mp4" },
    { type: "video", src: "/imgs/projects/3d/pigeon-die.mp4" },
  ];

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main ref={scrollRef} className={styles["main-content"]}>
      <h1 className="sub-title" id="top">
        3D Projects
      </h1>

      <motion.section
        className={styles.gridContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {medias.map((item, index) => (
          <motion.div
            key={index}
            className={styles.mediaCard}
            variants={itemVariants}
          >
            {item.type === "img" && (
              <Image
                src={item.src}
                alt={item.alt}
                width={700}
                height={300}
                className={styles.mediaItem}
              />
            )}
            {item.type === "video" && (
              <video controls className={styles.mediaItem}>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </motion.div>
        ))}
      </motion.section>

      <a className="ancre" onClick={scrollToTop}>
        ↑ Back to top
      </a>
    </main>
  );
}
