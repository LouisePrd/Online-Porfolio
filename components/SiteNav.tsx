import Image from "next/image";
import Link from "next/link";
import { type Lang, T, routes } from "@/content/site";
import s from "@/styles/site.module.css";

/** Same nav on every page; only the active item changes. */
export default function SiteNav({
  lang,
  page,
  altHref,
}: {
  lang: Lang;
  page: "home" | "projects" | "experience" | "contact";
  altHref?: string;
}) {
  const t = T[lang];
  const r = routes(lang);
  const onHome = page === "home";
  const anchor = (id: string) => (onHome ? `#${id}` : `${r.home}#${id}`);
  const other = altHref ?? routes(lang === "fr" ? "en" : "fr")[page];

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
        <Link href={r.home} className={s.navHome} aria-label={t.nav.home} title={t.nav.home}>
          <Image src="/imgs/props/memoji.png" alt="" width={52} height={52} priority />
        </Link>
      )}
      <div className={s.navLinks}>
        {items.map((it) => (
          <Link
            key={it.label}
            href={it.href}
            className={it.active ? s.navActive : s.navLink}
            aria-current={it.active ? "page" : undefined}
          >
            {it.label}
          </Link>
        ))}
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
