"use client";

import Image from "next/image";
import styles from "./Associative.module.css";
import { useState, useEffect, useCallback, MouseEvent } from "react";
import Link from 'next/link';

interface GicPhoto {
  src: string;
  label: string;
}

const gicPhotos: GicPhoto[] = [
  { src: "/imgs/projects/asso/imacannes.jpg", label: "IMACannes Ceremony" },
  { src: "/imgs/projects/asso/jdc.jpg", label: "Cohesion Days" },
  { src: "/imgs/projects/asso/post-gala.png", label: "End-of-year Gala" },
];

export default function AssociativeProjects() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openViewer = (index: number) => setCurrentIndex(index);
  const closeViewer = () => setCurrentIndex(null);

  const nextSlide = useCallback((e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev + 1) % gicPhotos.length : null,
    );
  }, []);

  const prevSlide = useCallback((e?: MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) =>
      prev !== null ? (prev - 1 + gicPhotos.length) % gicPhotos.length : null,
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "Escape") closeViewer();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, nextSlide, prevSlide]);

  return (
    <main className={styles.mainContent}>
      <h1 className="sub-title" id="top">
        Associative Projects
      </h1>

      <div className={styles.centralContainer}>
        <section className={styles.introCard}>
          <div className={styles.headerBda}>
            <Image
              src="/imgs/projects/asso/logo-bda.webp"
              alt="Logo BDA"
              width={80}
              height={80}
            />
            <h2 className={styles.mainTitle}>BDA - ESIEE Paris</h2>
          </div>
          <p className={styles.highlightText}>
            The association that aims to centralise, enhance and bring to life
            the arts and culture at ESIEE Paris.
          </p>
        </section>

        <section className={styles.contentCard}>
          <div className={styles.roleHeader}>
            <span className={styles.date}>July. 2025 — Now</span>
            <h3 className={styles.roleTitle}>Vice-president</h3>
          </div>
          <div className={styles.bodyText}>
            <p>
              As Vice-President of the ESIEE Paris Arts Office, I co-directed
              the association's strategy to promote arts and culture on campus.
              My work included developing the website <Link className={styles.linkAsso} href="https://bda-esiee.fr" target="_blank" rel="noopener noreferrer">bda-esiee.fr</Link> and helping
              to organise artistic events, while also managing the
              organisation's administrative tasks.
            </p>
          </div>
        </section>

        <section className={styles.introCard}>
          <div className={styles.headerGic}>
            <Image
              src="/imgs/projects/asso/logo2.png"
              alt="Logo GIC"
              width={80}
              height={80}
            />
            <h2 className={styles.mainTitle}>GIC - ESIEE Paris</h2>
          </div>
          <p className={styles.highlightText}>
            The association of creative engineers. We bridge the gap between
            arts, sciences, and student life.
          </p>
        </section>

        <section className={styles.contentCard}>
          <div className={styles.roleHeader}>
            <span className={styles.date}>Oct. 2024 — June 2025</span>
            <h3 className={styles.roleTitle}>President</h3>
          </div>
          <div className={styles.bodyText}>
            <p>
              As president, I led a team to revitalize student life following
              the university merger. I managed the association's growth,
              institutional relations, and the global coordination of major
              events.
            </p>
            <ul className={styles.list}>
              <li>
                <strong>IMACannes:</strong> Full organization of the film
                ceremony.
              </li>
              <li>
                <strong>Gala:</strong> Coordination of the grand end-of-year
                closing night.
              </li>
              <li>
                <strong>JeudiMACs:</strong> Organization of weekly creative
                bonding events.
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.contentCard}>
          <div className={styles.roleHeader}>
            <span className={styles.date}>July 2024 — Jan. 2025</span>
            <h3 className={styles.roleTitle}>Events Coordinator</h3>
          </div>
          <div className={styles.bodyText}>
            <p>
              Responsible for creating a welcoming environment, I organized the
              <strong> Cohesion Days</strong> (Harry Potter theme).
            </p>
          </div>
        </section>

        <section className={styles.gallerySection}>
          <h2 className={styles.titleSection}>Life at GIC</h2>
          <div className={styles.photoGrid}>
            {gicPhotos.map((photo, index) => (
              <div
                key={index}
                className={styles.photoItem}
                onClick={() => openViewer(index)}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  width={400}
                  height={250}
                />
                <p>{photo.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {currentIndex !== null && (
        <div className={styles.viewerOverlay} onClick={closeViewer}>
          <button className={styles.closeBtn} onClick={closeViewer}>
            ✕
          </button>

          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => prevSlide(e)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className={styles.viewerContent}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gicPhotos[currentIndex].src}
              alt={gicPhotos[currentIndex].label}
              width={1200}
              height={800}
              className={styles.viewerImg}
            />
            <p className={styles.viewerCaption}>
              {gicPhotos[currentIndex].label}
            </p>
          </div>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => nextSlide(e)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}

      <a className="ancre" href="#top">
        ↑ Back to top
      </a>
    </main>
  );
}
