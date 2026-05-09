"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Inspirations.module.css";

const inspirations = [
  { title: "Vewn", url: "https://www.youtube.com/@vewn", src: "/imgs/inspos/vewn.webp" },
  { title: "The end of the f** world", url: "https://www.allocine.fr/series/ficheserie_gen_cserie=22881.html", src: "/imgs/inspos/teofw.png" },
  { title: "Onehaaaa", url: "https://www.instagram.com/onehaaaa/", src: "/imgs/inspos/onehaaaa.webp" },
  { title: "Vice", url: "https://www.vice.com/fr", src: "/imgs/inspos/vice.webp" },
  { title: "Plastic Beach", url: "https://www.youtube.com/channel/UCfIXdjDQH9Fau7y99_Orpjw", src: "/imgs/inspos/plastic-beach.webp" },
  { title: "59 Rivoli", url: "https://www.59rivoli.org/accueil/", src: "/imgs/inspos/rivoli.jpg" },
  { title: "Blink 182", url: "https://www.youtube.com/@blink182VEVO", src: "/imgs/inspos/blink-182.webp" },
  { title: "Boris Vian", url: "https://www.babelio.com/livres/Vian-Je-voudrais-pas-crever/3990", src: "/imgs/inspos/boris-vian-poeme.webp" },
  { title: "Odezenne", url: "https://www.youtube.com/watch?v=b97GGASOcwg", src: "/imgs/inspos/odezenne.webp" },
  { title: "Sex Pistols", url: "https://www.theguardian.com/artanddesign/gallery/2016/nov/07/god-save-sex-pistols-book", src: "/imgs/inspos/sex-pistols.png" },
  { title: "Nikon - Imagine", url: "https://www.youtube.com/watch?v=Fj8-CGbi2XM", src: "/imgs/inspos/imagine-nikon.png" },
  { title: "Siames", url: "https://www.youtube.com/watch?v=hM7Eh0gGNKA", src: "/imgs/inspos/siames.webp" },
];

export default function InspirationsPage() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    inspirations.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <main className={styles.main}>
      <h1 className="sub-title">Inspirations</h1>

      <div className={styles.container}>
        {inspirations.map((inspi, index) => {
          const isVisible = visibleItems.includes(index);
          const randomAngle = ((index * 1337) % 30) - 15; 

          return (
            <a
              key={index}
              href={inspi.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.card} ${isVisible ? styles.cardVisible : ""}`}
              style={{
                transform: isVisible ? `rotate(${randomAngle}deg)` : "rotate(0deg) scale(0.8)",
              }}
            >
              <div className={styles.glassEffect}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={inspi.src}
                    alt={inspi.title}
                    width={500}
                    height={500}
                    className={styles.img}
                    priority={index < 4}
                  />
                </div>
                <p className={styles.label}>{inspi.title}</p>
              </div>
            </a>
          );
        })}
      </div>
    </main>
  );
}