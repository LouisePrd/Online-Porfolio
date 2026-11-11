"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { type Lang, T } from "@/content/site";
import s from "@/styles/site.module.css";

/** Image that opens full screen on click (Escape or click outside to close). */
export default function ZoomImage({ src, w, h, alt, sizes, lang }: { src: string; w: number; h: number; alt: string; sizes: string; lang: Lang }) {
  const t = T[lang];
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const opener = openerRef.current;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={openerRef} type="button" className={s.zoomBtn} style={{ "--ratio": w / h } as React.CSSProperties} onClick={() => setOpen(true)} aria-label={`${t.openPhoto} : ${alt}`}>
        <Image src={src} alt={alt} width={w} height={h} className={s.pdImg} sizes={sizes} />
      </button>
      {open && (
        <div className={s.viewer} role="dialog" aria-modal="true" aria-label={alt} onClick={() => setOpen(false)}>
          <figure className={s.viewerFigure} onClick={(e) => e.stopPropagation()}>
            <span className={s.viewerImg}>
              <Image src={src} alt={alt} fill sizes="95vw" />
            </span>
          </figure>
          <button ref={closeRef} type="button" className={`${s.iconBtn} ${s.iconBtnDark} ${s.viewerClose}`} onClick={() => setOpen(false)} aria-label={t.close}>✕</button>
        </div>
      )}
    </>
  );
}
