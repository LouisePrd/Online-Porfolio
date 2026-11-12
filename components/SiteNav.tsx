"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { type Lang, T, routes } from "@/content/site";
import s from "@/styles/site.module.css";

/**
 * Same nav on every page; only the active item changes.
 * Mobile (≤700px): the links fold into a "Menu" dropdown so the bar stays one line.
 * Inner pages: the memoji sticker tucks away while scrolling down, so it never sits on top of the content.
 */
export default function SiteNav({
  lang,
  page,
  altHref,
}: {
  lang: Lang;
  page: "home" | "projects" | "experience" | "contact" | "cv";
  altHref?: string;
}) {
  const t = T[lang];
  const r = routes(lang);
  const onHome = page === "home";
  const anchor = (id: string) => (onHome ? `#${id}` : `${r.home}#${id}`);
  const other = altHref ?? routes(lang === "fr" ? "en" : "fr")[page === "cv" ? "experience" : page];

  const [open, setOpen] = useState(false);
  const [tucked, setTucked] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  // Hide the sticker when scrolling down past the header, show it again when scrolling up.
  useEffect(() => {
    if (onHome) return;
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 6) return;
      setTucked(y > 80 && y > last);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  // Close the mobile menu with Escape or a tap outside.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onDown = (e: PointerEvent) => {
      if (!barRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const items = [
    { href: r.projects, label: t.nav.projects, active: page === "projects" },
    { href: r.experience, label: t.nav.experience, active: page === "experience" },
    { href: anchor("inspirations"), label: t.nav.inspirations, active: false },
    { href: r.contact, label: t.nav.contact, active: page === "contact" },
  ];

  return (
    <nav className={s.nav} aria-label="Navigation">
      {/* Home shortcut on inner pages (the home page already shows the big memoji) */}
      {!onHome && (
        <Link
          href={r.home}
          className={`${s.navHome} ${tucked && !open ? s.navHomeTucked : ""}`}
          aria-label={t.nav.home}
          title={t.nav.home}
        >
          <Image src="/imgs/props/memoji-sm.webp" alt="" width={52} height={52} unoptimized priority />
        </Link>
      )}
      <div ref={barRef} className={`${s.navLinks} ${open ? s.navOpen : ""}`}>
        <button
          type="button"
          className={s.navToggle}
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? `${t.nav.close} ✕` : `${t.nav.menu} ☰`}
        </button>
        <div id="nav-menu" className={s.navMenu}>
          {items.map((it) => (
            <Link
              key={it.label}
              href={it.href}
              className={it.active ? s.navActive : s.navLink}
              aria-current={it.active ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {it.label}
            </Link>
          ))}
        </div>
        <div className={s.langToggle}>
          {(["en", "fr"] as const).map((l) =>
            l === lang ? (
              <span key={l} className={s.langBtnOn} aria-current="true">{l.toUpperCase()}</span>
            ) : (
              <Link key={l} href={other} className={s.langBtn} hrefLang={l} lang={l}>
                {l.toUpperCase()}
              </Link>
            ),
          )}
        </div>
      </div>
    </nav>
  );
}
