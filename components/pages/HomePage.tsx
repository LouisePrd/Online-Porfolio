"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CONTACT, type Lang, SOCIALS, T, routes } from "@/content/site";
import { FEATURED, PROJECTS, type Project } from "@/content/projects";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import InspirationStrip from "@/components/InspirationStrip";
import ProjectDrawer from "@/components/ProjectDrawer";
import Shell from "@/components/Shell";
import SiteNav from "@/components/SiteNav";
import SocialIcon from "@/components/SocialIcon";
import { useParallax } from "@/lib/useParallax";
import s from "@/styles/site.module.css";

export default function HomePage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const r = routes(lang);
  const rootRef = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState<string | null>(null);
  useParallax(rootRef);

  // Soft "screen by screen" feel: snap only when stopping close to a section top.
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollSnapType = "y proximity";
    return () => {
      html.style.scrollSnapType = "";
    };
  }, []);

  const [lead, ...side] = FEATURED;

  return (
    <Shell lang={lang} rootRef={rootRef}>
      <SiteNav lang={lang} page="home" />

      <header id="top" className={`${s.hero} ${s.snap}`}>
        <div className={s.heroHalftone} aria-hidden="true" />
        <div className={`${s.container} ${s.heroRow}`}>
          <div className={s.heroName}>
            <div data-speed="-0.06" style={{ position: "relative" }}>
              <div className={s.avatarWrap}>
                <Image src="/imgs/props/memoji.png" alt="Memoji Louise" width={140} height={140} className={s.avatar} priority />
              </div>
              <span className={s.roleLabel}>{t.role}</span>
              <h1 className={s.h1}>
                <span>Louise</span>
                <span className={s.h1Indent}>
                  Peridy
                </span>
              </h1>
            </div>
          </div>
          <div className={s.heroCol}>
            <p className={s.intro}>{t.intro}</p>
            <p className={s.status}>{t.now.join("  ·  ")}</p>
            <div className={s.ctaRow}>
              <a href="#work" className={s.btnPrimary}>{t.ctaWork} ↓</a>
              <Link href={r.contact} className={s.btnHighlight}>{t.ctaContact}</Link>
            </div>
          </div>
        </div>
      </header>

      <section id="work" className={`${s.work} ${s.snap}`}>
        <div className={s.container}>
          <div className={s.sectionHead}>
            <div data-speed="-0.05">
              <h2 className={s.h2}>{t.latest}</h2>
            </div>
          </div>
          <div className={s.workGrid}>
            {lead && <LeadCard p={lead} n={1} lang={lang} onOpen={setCur} />}
            <div className={s.sideCol}>
              {side.map((p, i) => (
                <button key={p.slug} type="button" className={`${s.cardBtn} ${s.sideCard}`} onClick={() => setCur(p.slug)}>
                  <span className={`${s.media} ${s.r169}`} style={{ display: "block" }}>
                    <Image src={p.img} alt={p.title} fill sizes="(max-width: 800px) 45vw, 18vw" className={s.mediaImg} />
                  </span>
                  <span className={s.cardText}>
                    <span className={s.cat}>
                      <span className={s.num}>{String(i + 2).padStart(2, "0")}</span> {t.cats[p.cat]}
                    </span>
                    <span className={s.sideTitle}>{p.title}</span>
                    <span className={s.sideDesc}>{p.intro[lang]}</span>
                  </span>
                </button>
              ))}
              <Link href={r.projects} className={`${s.btnPink} ${s.allBtn}`}>
                {t.allProjects} ({PROJECTS.length}) →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className={`${s.exp} ${s.snap}`}>
        <ExperienceTimeline lang={lang} compact />
      </section>

      <section id="inspirations" className={`${s.insp} ${s.snap}`}>
        <div data-speed="0.08" className={s.inspHalftone} aria-hidden="true" />
        <InspirationStrip lang={lang} />
      </section>

      <footer id="contact" className={`${s.footer} ${s.snap}`}>
        <div className={`${s.container} ${s.footerInner}`}>
          <div className={s.footerTop}>
            <div data-speed="-0.08" className={s.footerTitleBlock}>
              <h2 className={`${s.h2} ${s.h2Contact}`}>
                {t.titles.contact}
              </h2>
              <p className={s.contactLine}>{t.contactLine}</p>
            </div>
            <div data-speed="0.05" className={s.footerCtas}>
              <a href={`mailto:${CONTACT.email}`} className={s.emailBtn}>{CONTACT.email} →</a>
              <Link href={r.contact} className={s.footerFormLink}>{t.form.writeMessage} →</Link>
            </div>
          </div>
          <div className={s.footerBottom}>
            <div className={s.socials}>
              {SOCIALS.map(({ kind, label, href }) => (
                <a key={kind} href={href} target="_blank" rel="noopener noreferrer" className={s.socialLink}>
                  <SocialIcon kind={kind} />
                  {label} ↗
                </a>
              ))}
            </div>
            <span className={s.copyright}>© {new Date().getFullYear()} Louise Peridy</span>
          </div>
        </div>
      </footer>

      <ProjectDrawer lang={lang} list={PROJECTS} currentId={cur} onChange={setCur} />
    </Shell>
  );
}

function LeadCard({ p, n, lang, onOpen }: { p: Project; n: number; lang: Lang; onOpen: (id: string) => void }) {
  const t = T[lang];
  return (
    <button type="button" className={`${s.cardBtn} ${s.leadCard}`} onClick={() => onOpen(p.slug)}>
      <span
        className={`${s.media} ${s.r169}`}
        style={{ display: "block", background: p.cover?.bg }}
      >
        <Image
          src={p.cover?.src ?? p.img}
          alt={p.title}
          fill
          sizes="(max-width: 800px) 100vw, 60vw"
          className={s.mediaImg}
          priority
        />
      </span>
      <span className={s.cardText}>
        <span className={s.cat}>
          <span className={s.num}>{String(n).padStart(2, "0")}</span> {t.cats[p.cat]}
        </span>
        <span className={s.leadTitle}>{p.title}</span>
        <span className={s.leadDesc}>{p.intro[lang]}</span>
      </span>
    </button>
  );
}
