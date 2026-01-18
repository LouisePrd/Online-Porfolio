"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";

export default function Projects() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      audio.loop = true;
      audio.volume = 0.5;
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles.container}>
      <audio ref={audioRef} className={styles.audioRef}>
        <source src="/audio/FeelGoodInc.mp3" type="audio/mpeg" />
      </audio>

      <h1 className={styles["sub-title"]}>PROJECTS</h1>

      <div className={styles.cdContainer}>
        <Image
          className={`${styles["cd-player"]} ${isPlaying ? styles.play : styles.pause}`}
          src="/imgs/props/cd-player.png"
          alt="cd-player"
          width={300}
          height={300}
          onClick={togglePlay}
          style={{ 
            transform: isPlaying ? "rotate(140deg)" : "rotate(180deg)",
            cursor: "pointer",
            transition: "transform 0.5s ease"
          }}
        />
        <Image
          className={`${styles.cd} ${isPlaying ? styles.play : styles.pause}`}
          src="/imgs/props/cd-gorillaz.png"
          alt="cd"
          width={200}
          height={200}
        />
      </div>

      <div className={styles.categories}>
        <Link className={styles.category} href="/projects/it">Development</Link>
        <Link className={styles.category} href="/projects/audiovisual">Audiovisual</Link>
        <Link className={styles.category} href="/projects/3D">3D & Design</Link>
        <Link className={styles.category} href="/projects/associations">Associations</Link>
      </div>

      <Image
        className={styles.hand}
        src="/imgs/props/hand.png"
        alt="hand"
        width={100}
        height={100}
      />
    </div>
  );
}