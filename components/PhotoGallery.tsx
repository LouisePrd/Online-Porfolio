"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { type Lang, T } from "@/content/site";
import s from "@/styles/site.module.css";

type Photo = { src: string; label: string };

/** Clickable photo grid with a full-screen viewer (arrows, Escape, click outside). */
export default function PhotoGallery({ photos, lang }: { photos: Photo[]; lang: Lang }) {
  const t = T[lang];
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? null : (i + d + photos.length) % photos.length)),
    [photos.length],
  );
  const isOpen = open !== null;

  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement as HTMLElement;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      openerRef.current?.focus?.();
    };
  }, [isOpen, step]);

  const cur = open !== null ? photos[open] : null;

  return (
    <>
      <div className={s.galleryGrid}>
        {photos.map((ph, i) => (
          <button key={ph.src} type="button" className={s.galleryItem} onClick={() => setOpen(i)} aria-label={`${t.openPhoto} : ${ph.label}`}>
            <span className={s.galleryImg}>
              <Image src={ph.src} alt={ph.label} fill sizes="(max-width: 800px) 100vw, 33vw" />
            </span>
            <span className={s.caption}>{ph.label}</span>
          </button>
        ))}
      </div>

      {cur && (
        <div className={s.viewer} role="dialog" aria-modal="true" aria-label={cur.label} onClick={() => setOpen(null)}>
          <figure className={s.viewerFigure} onClick={(e) => e.stopPropagation()}>
            <span className={s.viewerImg}>
              <Image src={cur.src} alt={cur.label} fill sizes="90vw" />
            </span>
            <figcaption className={s.viewerCaption}>
              {cur.label} <span className={s.viewerCount}>{open! + 1} / {photos.length}</span>
            </figcaption>
          </figure>
          <button type="button" className={`${s.iconBtn} ${s.viewerPrev}`} onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label={t.prev}>←</button>
          <button type="button" className={`${s.iconBtn} ${s.viewerNext}`} onClick={(e) => { e.stopPropagation(); step(1); }} aria-label={t.next}>→</button>
          <button ref={closeRef} type="button" className={`${s.iconBtn} ${s.iconBtnDark} ${s.viewerClose}`} onClick={() => setOpen(null)} aria-label={t.close}>✕</button>
        </div>
      )}
    </>
  );
}
