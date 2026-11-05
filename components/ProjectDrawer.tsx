"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { type Lang, T } from "@/content/site";
import { type Project, projectHref } from "@/content/projects";
import s from "@/styles/site.module.css";

export default function ProjectDrawer({
  lang,
  list,
  currentId,
  onChange,
  showNav = false,
}: {
  lang: Lang;
  list: Project[];
  currentId: string | null;
  onChange: (id: string | null) => void;
  showNav?: boolean;
}) {
  const t = T[lang];
  const idx = list.findIndex((p) => p.slug === currentId);
  const cur = idx >= 0 ? list[idx] : null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<Element | null>(null);
  const isOpen = !!cur;

  // Remember the opener, lock page scroll, restore focus on close.
  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.documentElement.style.overflow = prev;
      (openerRef.current as HTMLElement | null)?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!cur) return;
    const step = (d: number) => onChange(list[(idx + d + list.length) % list.length].slug);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onChange(null);
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [cur, idx, list, onChange]);

  if (!cur) return null;
  const step = (d: number) => onChange(list[(idx + d + list.length) % list.length].slug);

  const links: { href: string; label: string; external: boolean }[] = [];
  if (cur.links.live) links.push({ href: cur.links.live, label: `${t.live} ↗`, external: true });
  links.push({ href: projectHref(cur, lang), label: `${t.details} →`, external: false });
  if (cur.links.source) links.push({ href: cur.links.source, label: `${t.source} ↗`, external: true });

  return (
    <>
      <div className={s.overlay} onClick={() => onChange(null)} aria-hidden="true" />
      <aside className={s.drawer} role="dialog" aria-modal="true" aria-labelledby="drawer-title">
        <div className={s.drawerBar}>
          <span>
            {t.cats[cur.cat]}
            {showNav && ` - ${idx + 1} / ${list.length}`}
          </span>
          <div className={s.drawerBtns}>
            {showNav && (
              <>
                <button type="button" className={s.iconBtn} onClick={() => step(-1)} aria-label={t.prev}>←</button>
                <button type="button" className={s.iconBtn} onClick={() => step(1)} aria-label={t.next}>→</button>
              </>
            )}
            <button
              ref={closeRef}
              type="button"
              className={`${s.iconBtn} ${s.iconBtnDark}`}
              onClick={() => onChange(null)}
              aria-label={t.close}
            >
              ✕
            </button>
          </div>
        </div>
        <div className={s.drawerImg}>
          <Image src={cur.img} alt={cur.title} fill sizes="(max-width: 580px) 100vw, 580px" />
        </div>
        <div className={s.drawerBody}>
          <h3 id="drawer-title" className={s.drawerTitle}>{cur.title}</h3>
          <p className={s.drawerDesc}>{cur.desc[lang]}</p>
          <p className={s.tagLine}>{cur.tags.join(" / ")}</p>
          <div className={s.drawerCtas}>
            {links.map((l, i) => {
              const cls = i === 0 ? s.btnPrimary : s.btnHighlight;
              return l.external ? (
                <a key={l.href} href={l.href} className={cls} target="_blank" rel="noopener noreferrer">{l.label}</a>
              ) : (
                <Link key={l.href} href={l.href} className={cls}>{l.label}</Link>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}
