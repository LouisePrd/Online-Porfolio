"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { type Lang, T } from "@/content/site";
import s from "@/styles/site.module.css";

type Slide = { src: string; w: number; h: number };

export default function Carousel({ slides, alt, lang }: { slides: Slide[]; alt: string; lang: Lang }) {
  const t = T[lang];
  const track = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const n = (i + slides.length) % slides.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className={s.carousel}>
      <div
        ref={track}
        className={s.carouselTrack}
        onScroll={(e) => setCur(Math.round(e.currentTarget.scrollLeft / e.currentTarget.clientWidth))}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); go(cur + 1); }
          else if (e.key === "ArrowLeft") { e.preventDefault(); go(cur - 1); }
        }}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label={alt}
      >
        {slides.map(({ src }, i) => (
          <div key={src} className={s.carouselSlide} aria-hidden={i !== cur}>
            <Image src={src} alt={`${alt} ${i + 1}`} fill sizes="(max-width: 1200px) 100vw, 1200px" />
          </div>
        ))}
      </div>
      <div className={s.carouselBar}>
        <button type="button" className={s.iconBtn} onClick={() => go(cur - 1)} aria-label={t.scrollPrev}>←</button>
        <span className={s.carouselCount} aria-live="polite">{cur + 1} / {slides.length}</span>
        <button type="button" className={s.iconBtn} onClick={() => go(cur + 1)} aria-label={t.scrollNext}>→</button>
      </div>
    </div>
  );
}
