"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Audiovisual.module.css";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const photoContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
};

export default function Audiovisual() {
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main ref={scrollRef} className={styles["main-content"]}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sub-title" 
        id="top"
      >
        Audiovisual Projects
      </motion.h1>

      {/* Section 1 */}
      <motion.section 
        className={styles.projectSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className={styles.title}>Le Making-Of Sauvage</h2>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>THEME & REALIZATION</h3>
            <p>
              As part of our audiovisual course during the first semester of our
              first year at IMAC, we produced a group short film. The challenge
              was significant because nothing was scripted; we had to adapt to
              every situation.
            </p>
            <p>
              We embedded ourselves in filming sessions and rehearsals to gather
              as much content as possible. Edited using Adobe Premiere Pro.
            </p>
          </div>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/MTOJBfGEMDM"
              title="Le Making-Of Sauvage"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Section 2 */}
      <motion.section 
        className={styles.projectSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className={styles.title}>
          The Great Worldw<b><u>AI</u></b>de Conspiracy
        </h2>
        <div className={styles.container}>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/IBDxAvLOofQ"
              title="AI Conspiracy"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>THEME & REALIZATION</h3>
            <p>
              <b>Theme:</b> Truth | <b>Sub-theme:</b> Transhumanism <br />
              The objective was to present journalists convinced the world is
              ruled by AI via thought-controlling algorithms.
            </p>
            <p>
              We played conspiracy theorists filming a documentary. At the end,
              a second film crew is revealed to be filming the first, creating a
              loop of observation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Section 3 */}
      <motion.section 
        className={styles.projectSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className={styles.title}>Newton's Binomial</h2>
        <div className={styles.container}>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>MIXING</h3>
            <p>
              Creation of a sound mix from a simplified multitrack version of
              Michael Jackson's <i>Off The Wall</i>. We had free rein on effects, 
              echoes, and reverbs using ProTools.
            </p>
            <p className={styles.enjoyText}>Enjoy listening! ↓</p>
          </div>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/WDdG63w81rQ"
              title="Newton's Binomial"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Section 4 */}
      <motion.section 
        className={styles.projectSection}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className={styles.title}>Black Mirror: Reconnection</h2>
        <div className={styles.container}>
          <div className={styles.videoContent}>
            <iframe
              src="https://www.youtube.com/embed/jJwCwAOMsws"
              title="Black Mirror Teaser"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.subtitle}>SUBJECT & WORK</h3>
            <p>
              A synopsis inspired by Black Mirror blending ethics and the
              metaverse. Produced a three-act synopsis, a video teaser, and
              casting prototypes.
            </p>
            <p>
              We follow a man whose identity is stolen by an AI in the
              metaverse, leading to a blind rage.
            </p>
            <a
              className={styles.link}
              href="https://drive.google.com/file/d/1xAzSFQz5UXbIEEVPVjR_NfXK22VLxO8_/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the French synopsis here →
            </a>
          </div>
        </div>
      </motion.section>

      {/* PHOTOS avec Animation Stagger */}
      <motion.h2 
        className={styles.title}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Photography
      </motion.h2>

      <motion.div 
        className={styles["photo-container"]}
        variants={photoContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          { src: "/imgs/projects/photo/metro.jpg", alt: "Metro" },
          { src: "/imgs/projects/photo/paris.jpg", alt: "Paris" },
          { src: "/imgs/projects/photo/toit.jpg", alt: "Rooftops" },
          { src: "/imgs/projects/photo/palaisTokyo.jpg", alt: "Palais" },
          { src: "/imgs/projects/photo/archi.jpg", alt: "Architecture" }
        ].map((photo, index) => (
          <motion.div key={index} variants={photoVariants}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={300}
            />
          </motion.div>
        ))}
      </motion.div>

      <a className="ancre" onClick={scrollToTop}>
        ↑ Back to top
      </a>
    </main>
  );
}