"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type Lang, T } from "@/content/site";
import s from "@/styles/site.module.css";

/** Full-screen view of one image. Escape or a click outside closes it; focus returns to the opener. */
export function ImageViewer({ src, alt, lang, unoptimized, onClose }: { src: string; alt: string; lang: Lang; unoptimized?: boolean; onClose: () => void }) {
  const t = T[lang];
  const closeRef = useRef<HTMLButtonElement>(null);
  // Latest onClose, so a parent re-render doesn't re-run the open/close effect.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCloseRef.current();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, []);

  return (
    <div className={s.viewer} role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <figure className={s.viewerFigure} onClick={(e) => e.stopPropagation()}>
        <span className={s.viewerImg}>
          <Image src={src} alt={alt} fill sizes="95vw" unoptimized={unoptimized} />
        </span>
      </figure>
      <button ref={closeRef} type="button" className={`${s.iconBtn} ${s.iconBtnDark} ${s.viewerClose}`} onClick={onClose} aria-label={t.close}>✕</button>
    </div>
  );
}

/** Image that opens full screen on click. */
export default function ZoomImage({
  src,
  w,
  h,
  alt,
  sizes,
  lang,
  unoptimized,
}: {
  src: string;
  w: number;
  h: number;
  alt: string;
  sizes?: string;
  lang: Lang;
  /** For GIFs, so the animation is kept */
  unoptimized?: boolean;
}) {
  const t = T[lang];
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={s.zoomBtn} style={{ "--ratio": w / h } as React.CSSProperties} onClick={() => setOpen(true)} aria-label={`${t.openPhoto} : ${alt}`}>
        <Image src={src} alt={alt} width={w} height={h} className={s.pdImg} sizes={sizes} unoptimized={unoptimized} />
      </button>
      {open && <ImageViewer src={src} alt={alt} lang={lang} unoptimized={unoptimized} onClose={() => setOpen(false)} />}
    </>
  );
}
