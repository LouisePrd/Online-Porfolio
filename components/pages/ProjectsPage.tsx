"use client";

import Image from "next/image";
import { useState } from "react";
import { type Lang, T, routes } from "@/content/site";
import { CATEGORIES, type Category, PROJECTS } from "@/content/projects";
import ProjectDrawer from "@/components/ProjectDrawer";
import ShortFooter from "@/components/ShortFooter";
import Shell from "@/components/Shell";
import SiteNav from "@/components/SiteNav";
import s from "@/styles/site.module.css";

export default function ProjectsPage({ lang }: { lang: Lang }) {
  const t = T[lang];
  const r = routes(lang);
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [cur, setCur] = useState<string | null>(null);

  const list = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);
  const filters: { id: "all" | Category; label: string; count: number }[] = [
    { id: "all", label: t.all, count: PROJECTS.length },
    ...CATEGORIES.map((c) => ({ id: c, label: t.cats[c], count: PROJECTS.filter((p) => p.cat === c).length })),
  ];

  return (
    <Shell>
      <SiteNav lang={lang} page="projects" />

      <header className={`${s.container} ${s.projHeader}`}>
        <h1 className={s.projH1}>
          {t.titles.projects}
        </h1>
        <div className={s.filters} role="group" aria-label={t.titles.projects}>
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`${s.chip} ${filter === f.id ? s.chipOn : ""}`}
              onClick={() => setFilter(f.id)}
              aria-pressed={filter === f.id}
            >
              {f.label} <span className={s.chipCount}>{f.count}</span>
            </button>
          ))}
        </div>
      </header>

      <main className={`${s.container} ${s.projMain}`}>
        <div className={s.projGrid}>
          {list.map((p, i) => (
            <button key={p.slug} type="button" className={`${s.cardBtn} ${s.gridCard}`} onClick={() => setCur(p.slug)}>
              <span className={`${s.media} ${s.mediaLight} ${s.r169}`} style={{ display: "block", background: p.imgBg }}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={s.mediaImg}
                  style={p.imgBg ? { padding: "2% 0", boxSizing: "border-box" } : undefined}
                  priority={i < 3}
                />
              </span>
              <span className={s.cardText} style={{ gap: 5 }}>
                <span className={`${s.cat} ${s.catDeep}`}>{t.cats[p.cat]} · {p.date}</span>
                <span className={s.gridTitle}>{p.title}</span>
                <span className={s.gridDesc}>{p.intro[lang]}</span>
              </span>
            </button>
          ))}
        </div>
      </main>

      <ShortFooter href={r.home} label={t.backHome} />

      <ProjectDrawer lang={lang} list={list} currentId={cur} onChange={setCur} showNav />
    </Shell>
  );
}
